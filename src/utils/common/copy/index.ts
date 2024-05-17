function copyEs5(text: string, elWrap?: HTMLElement): boolean {
  let documentBodyTemp = document.body;
  if (elWrap) {
    documentBodyTemp = elWrap;
  }

  const textarea = document.createElement('textarea');
  let res = true;
  textarea.textContent = text;
  textarea.contentEditable = 'true';
  textarea.readOnly = false;
  textarea.style.background = 'transparent';
  textarea.style.position = 'fixed'; // Prevent scrolling to bottom of page in MS Edge.
  documentBodyTemp.appendChild(textarea);
  textarea.setSelectionRange(0, text.length);
  textarea.select();
  try {
    document.execCommand('copy'); // Security exception may be thrown by some browsers.
  } catch (ex) {
    res = false;
  }

  try {
    documentBodyTemp.removeChild(textarea);
  } catch {
    //
  }

  return res;
}

export async function copyToClipboard(text: string, elWrap?: any): Promise<boolean> {
  let result = false;
  if (navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(text);
      result = true;
    } catch {
      result = copyEs5(text, elWrap);
    }
  } else {
    result = copyEs5(text, elWrap);
  }

  return result;
}
