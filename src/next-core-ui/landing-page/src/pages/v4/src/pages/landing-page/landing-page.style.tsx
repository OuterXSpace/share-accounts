export const LandingPageStyles: React.FC = () => {
  return (
    <style global jsx>{`
      hr {
        border-top-width: 1px;
        color: inherit;
        height: 0;
      }
      h2,
      h3 {
        font-size: inherit;
        font-weight: inherit;
      }
      figure,
      h2,
      h3,
      hr,
      p,
      ul {
        margin: 0;
      }
      ul {
        list-style: none;
        padding: 0;
      }
      .h7 {
        font-size: 1.25rem;
        font-weight: 500;
        line-height: 1.75rem;
      }
      .h7,
      .p5 {
        font-family: Space Grotesk, sans-serif;
      }
      .p5 {
        font-size: 0.75rem;
        font-weight: 400;
        line-height: 1rem;
      }
      .btn {
        align-items: center;
        -moz-column-gap: 0.75rem;
        column-gap: 0.75rem;
        display: inline-flex;
        justify-content: center;
        padding: 0.75rem 1rem;
      }
      .btn,
      .btn-3 {
        font-family: Space Grotesk, sans-serif;
      }
      .btn-3 {
        font-size: 0.75rem;
        font-weight: 700;
        line-height: 1rem;
        text-transform: uppercase;
      }
      .-left-2 {
        left: -0.5rem;
      }
      .-top-2 {
        top: -0.5rem;
      }
      .mx-3 {
        margin-left: 0.75rem;
        margin-right: 0.75rem;
      }
      .my-4 {
        margin-bottom: 1rem;
        margin-top: 1rem;
      }
      .!mb-0 {
        margin-bottom: 0 !important;
      }
      .-ml-2 {
        margin-left: -0.5rem;
      }
      .-mr-5 {
        margin-right: -1.25rem;
      }
      .ml-auto {
        margin-left: auto;
      }
      .mt-2 {
        margin-top: 0.5rem;
      }
      .mt-6 {
        margin-top: 1.5rem;
      }
      .max-w-full {
        max-width: 100%;
      }
      .rounded-r {
        border-bottom-right-radius: 4px;
        border-top-right-radius: 4px;
      }
      .border-grey-300 {
        --tw-border-opacity: 1;
        border-color: rgb(204 204 204 / var(--tw-border-opacity));
      }
      .bg-dark-grey-500 {
        --tw-bg-opacity: 1;
        background-color: rgb(37 44 53 / var(--tw-bg-opacity));
      }
      .py-4.5 {
        padding-bottom: 1.125rem;
        padding-top: 1.125rem;
      }
      .!pl-0 {
        padding-left: 0 !important;
      }
      .pb-2 {
        padding-bottom: 0.5rem;
      }
      .pb-2.5 {
        padding-bottom: 0.625rem;
      }
      .pb-3 {
        padding-bottom: 0.75rem;
      }
      .pl-3 {
        padding-left: 0.75rem;
      }
      .pr-3 {
        padding-right: 0.75rem;
      }
      .!text-black {
        color: rgb(0 0 0 / var(--tw-text-opacity)) !important;
      }
      .!text-black,
      .!text-white {
        --tw-text-opacity: 1 !important;
      }
      .!text-white {
        color: rgb(255 255 255 / var(--tw-text-opacity)) !important;
      }
      .text-grey-500 {
        --tw-text-opacity: 1;
        color: rgb(153 153 153 / var(--tw-text-opacity));
      }
      .overflow-auto,
      .overflow-y-auto {
        scroll-behavior: smooth;
        scroll-margin-bottom: 0.75rem;
      }
      .overflow-auto::-webkit-scrollbar,
      .overflow-y-auto::-webkit-scrollbar {
        height: 0.3125rem;
        width: 0.3125rem;
      }
      .overflow-auto::-webkit-scrollbar-track,
      .overflow-y-auto::-webkit-scrollbar-track {
        --tw-bg-opacity: 1;
        background-color: rgb(240 240 240 / var(--tw-bg-opacity));
      }
      .overflow-auto::-webkit-scrollbar-thumb,
      .overflow-y-auto::-webkit-scrollbar-thumb {
        border-radius: 48px;
        overflow: hidden;
        --tw-bg-opacity: 1;
        background-clip: padding-box;
        background-color: rgb(204 204 204 / var(--tw-bg-opacity));
      }
      .overflow-auto::-webkit-scrollbar-corner,
      .overflow-y-auto::-webkit-scrollbar-corner {
        --tw-bg-opacity: 1;
        background-color: rgb(240 240 240 / var(--tw-bg-opacity));
      }
      .ad-wrapper.ad-shortcode-1 {
        border-bottom-width: 1px;
        border-top-width: 1px;
        margin: 0.75rem -1rem;
        --tw-border-opacity: 1;
        border-color: rgb(204 204 204 / var(--tw-border-opacity));
        padding-bottom: 0.75rem;
        padding-top: 0.75rem;
      }
      .bic_home_page_after_main_image_ad {
        align-items: center;
        display: none;
        flex-direction: column;
        overflow: hidden;
        text-align: center;
      }
      .bic_home_page_after_main_image_ad > div {
        max-width: 100%;
      }
      .most-read-content ul li {
        display: none;
      }
      .most-read-content ul li:nth-child(-n + 3) {
        display: list-item;
      }
      .before:!hidden:before {
        content: var(--tw-content);
        display: none !important;
      }
      h1,
      h3 {
        font-size: inherit;
        font-weight: inherit;
      }
      figure,
      h1,
      h3,
      p {
        margin: 0;
      }
      h3 {
        font-family: Space Grotesk, sans-serif;
        font-size: 2rem;
        font-weight: 700;
        line-height: 2.5rem;
      }
      .mt-1 {
        margin-top: 0.25rem;
      }
      .border-grey-500 {
        --tw-border-opacity: 1;
        border-color: rgb(153 153 153 / var(--tw-border-opacity));
      }
      .bg-bright-red-600 {
        --tw-bg-opacity: 1;
        background-color: rgb(228 66 88 / var(--tw-bg-opacity));
      }
      .py-0.5 {
        padding-bottom: 0.125rem;
        padding-top: 0.125rem;
      }
      .text-5 {
        font-size: 1.25rem;
        line-height: 1.75rem;
      }
      .font-semibold {
        font-weight: 600;
      }
      .in-brief-block {
        border-left-width: 4px;
        list-style-type: none;
        margin-bottom: 0;
        width: 100%;
        --tw-border-opacity: 1;
        border-color: rgb(23 96 250 / var(--tw-border-opacity));
        font-size: 1rem;
        font-weight: 600;
        line-height: 1.5rem;
        padding-left: 1.5rem;
      }
      .in-brief-block__row {
        border-bottom-width: 1px;
        margin-bottom: 1.25rem;
        --tw-border-opacity: 1;
        border-color: rgb(204 204 204 / var(--tw-border-opacity));
        padding-bottom: 0.5rem;
      }
      .in-brief-block__row.last {
        border-bottom-width: 0;
        margin-bottom: 0;
        padding-bottom: 0;
      }
      *,
      :after,
      :before {
        border: 0 solid #e5e7eb;
        box-sizing: border-box;
      }
      :after,
      :before {
        --tw-content: '';
      }
      :host,
      html {
        line-height: 1.5;
        -webkit-text-size-adjust: 100%;
        font-family: Space Grotesk, sans-serif;
        font-feature-settings: normal;
        font-variation-settings: normal;
        -moz-tab-size: 4;
        -o-tab-size: 4;
        tab-size: 4;
      }
      body {
        line-height: inherit;
        margin: 0;
      }
      h1,
      h2 {
        font-size: inherit;
        font-weight: inherit;
      }
      a {
        color: inherit;
        text-decoration: inherit;
      }
      b {
        font-weight: bolder;
      }
      small {
        font-size: 80%;
      }
      button,
      input {
        color: inherit;
        font-family: inherit;
        font-feature-settings: inherit;
        font-size: 100%;
        font-variation-settings: inherit;
        font-weight: inherit;
        line-height: inherit;
        margin: 0;
        padding: 0;
      }
      button {
        text-transform: none;
      }
      [type='button'],
      [type='submit'],
      button {
        -webkit-appearance: button;
        background-color: transparent;
        background-image: none;
      }
      :-moz-focusring {
        outline: auto;
      }
      :-moz-ui-invalid {
        box-shadow: none;
      }
      ::-webkit-inner-spin-button,
      ::-webkit-outer-spin-button {
        height: auto;
      }
      [type='search'] {
        -webkit-appearance: textfield;
        outline-offset: -2px;
      }
      ::-webkit-search-decoration {
        -webkit-appearance: none;
      }
      ::-webkit-file-upload-button {
        -webkit-appearance: button;
        font: inherit;
      }
      figure,
      h1,
      h2,
      ol,
      p,
      ul {
        margin: 0;
      }
      ol,
      ul {
        list-style: none;
        padding: 0;
      }
      input::-moz-placeholder {
        color: #9ca3af;
      }
      img,
      svg {
        display: block;
        vertical-align: middle;
      }
      img {
        height: auto;
        max-width: 100%;
      }
      [type='search'] {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        background-color: #fff;
        border-color: #6b7280;
        border-radius: 0;
        border-width: 1px;
        font-size: 1rem;
        line-height: 1.5rem;
        padding: 0.5rem 0.75rem;
        --tw-shadow: 0 0 #0000;
      }
      input::-moz-placeholder {
        color: #6b7280;
        opacity: 1;
      }
      ::-webkit-datetime-edit-fields-wrapper {
        padding: 0;
      }
      ::-webkit-date-and-time-value {
        min-height: 1.5em;
      }
      [type='checkbox'] {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        background-color: #fff;
        background-origin: border-box;
        border-color: #6b7280;
        border-width: 1px;
        color: #1760fa;
        display: inline-block;
        flex-shrink: 0;
        height: 1rem;
        padding: 0;
        -webkit-print-color-adjust: exact;
        print-color-adjust: exact;
        vertical-align: middle;
        width: 1rem;
        --tw-shadow: 0 0 #0000;
        border-radius: 0;
      }
      *,
      :after,
      :before {
        --tw-border-spacing-x: 0;
        --tw-border-spacing-y: 0;
        --tw-translate-x: 0;
        --tw-translate-y: 0;
        --tw-rotate: 0;
        --tw-skew-x: 0;
        --tw-skew-y: 0;
        --tw-scale-x: 1;
        --tw-scale-y: 1;
        --tw-pan-x: ;
        --tw-pan-y: ;
        --tw-pinch-zoom: ;
        --tw-scroll-snap-strictness: proximity;
        --tw-gradient-from-position: ;
        --tw-gradient-via-position: ;
        --tw-gradient-to-position: ;
        --tw-ordinal: ;
        --tw-slashed-zero: ;
        --tw-numeric-figure: ;
        --tw-numeric-spacing: ;
        --tw-numeric-fraction: ;
        --tw-ring-inset: ;
        --tw-ring-offset-width: 0px;
        --tw-ring-offset-color: #fff;
        --tw-ring-color: rgba(100, 161, 252, 0.5);
        --tw-ring-offset-shadow: 0 0 #0000;
        --tw-ring-shadow: 0 0 #0000;
        --tw-shadow: 0 0 #0000;
        --tw-shadow-colored: 0 0 #0000;
        --tw-blur: ;
        --tw-brightness: ;
        --tw-contrast: ;
        --tw-grayscale: ;
        --tw-hue-rotate: ;
        --tw-invert: ;
        --tw-saturate: ;
        --tw-sepia: ;
        --tw-drop-shadow: ;
        --tw-backdrop-blur: ;
        --tw-backdrop-brightness: ;
        --tw-backdrop-contrast: ;
        --tw-backdrop-grayscale: ;
        --tw-backdrop-hue-rotate: ;
        --tw-backdrop-invert: ;
        --tw-backdrop-opacity: ;
        --tw-backdrop-saturate: ;
        --tw-backdrop-sepia: ;
      }
      ::backdrop {
        --tw-border-spacing-x: 0;
        --tw-border-spacing-y: 0;
        --tw-translate-x: 0;
        --tw-translate-y: 0;
        --tw-rotate: 0;
        --tw-skew-x: 0;
        --tw-skew-y: 0;
        --tw-scale-x: 1;
        --tw-scale-y: 1;
        --tw-pan-x: ;
        --tw-pan-y: ;
        --tw-pinch-zoom: ;
        --tw-scroll-snap-strictness: proximity;
        --tw-gradient-from-position: ;
        --tw-gradient-via-position: ;
        --tw-gradient-to-position: ;
        --tw-ordinal: ;
        --tw-slashed-zero: ;
        --tw-numeric-figure: ;
        --tw-numeric-spacing: ;
        --tw-numeric-fraction: ;
        --tw-ring-inset: ;
        --tw-ring-offset-width: 0px;
        --tw-ring-offset-color: #fff;
        --tw-ring-color: rgba(100, 161, 252, 0.5);
        --tw-ring-offset-shadow: 0 0 #0000;
        --tw-ring-shadow: 0 0 #0000;
        --tw-shadow: 0 0 #0000;
        --tw-shadow-colored: 0 0 #0000;
        --tw-blur: ;
        --tw-brightness: ;
        --tw-contrast: ;
        --tw-grayscale: ;
        --tw-hue-rotate: ;
        --tw-invert: ;
        --tw-saturate: ;
        --tw-sepia: ;
        --tw-drop-shadow: ;
        --tw-backdrop-blur: ;
        --tw-backdrop-brightness: ;
        --tw-backdrop-contrast: ;
        --tw-backdrop-grayscale: ;
        --tw-backdrop-hue-rotate: ;
        --tw-backdrop-invert: ;
        --tw-backdrop-opacity: ;
        --tw-backdrop-saturate: ;
        --tw-backdrop-sepia: ;
      }
      .container {
        padding-inline: 1rem;
      }
      h1 {
        font-size: 2.75rem;
        line-height: 3.5rem;
      }
      h1,
      h2 {
        font-family: Space Grotesk, sans-serif;
        font-weight: 700;
      }
      h2 {
        font-size: 2.375rem;
        line-height: 2.875rem;
      }
      .h4 {
        font-size: 1.75rem;
        line-height: 2rem;
      }
      .h4,
      .h6 {
        font-family: Space Grotesk, sans-serif;
        font-weight: 700;
      }
      .h6 {
        font-size: 1.5rem;
        line-height: 1.75rem;
      }
      .s1 {
        font-family: Space Grotesk, sans-serif;
        font-size: 1.125rem;
        font-weight: 700;
        line-height: 1.5rem;
      }
      .s1--medium {
        font-weight: 500;
      }
      .s2 {
        font-family: Space Grotesk, sans-serif;
        font-size: 1rem;
        font-weight: 700;
        line-height: 1.5rem;
      }
      .s2--medium {
        font-weight: 500;
      }
      .s3 {
        font-family: Space Grotesk, sans-serif;
        font-size: 0.875rem;
        font-weight: 700;
        line-height: 1.25rem;
        text-transform: uppercase;
      }
      .s3--medium {
        font-weight: 500;
      }
      .s3--normal-case {
        text-transform: none;
      }
      .s4 {
        font-family: Space Grotesk, sans-serif;
        font-size: 0.75rem;
        font-weight: 500;
        line-height: 1rem;
        text-transform: uppercase;
      }
      .s4--normal-case {
        text-transform: none;
      }
      .p3 {
        font-family: Space Grotesk, sans-serif;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5rem;
      }
      .p3--ns {
        font-family: Noto Sans, sans-serif;
      }
      .p4 {
        font-family: Space Grotesk, sans-serif;
        font-size: 0.875rem;
        font-weight: 400;
        line-height: 1.25rem;
      }
      .p4--ns {
        font-family: Noto Sans, sans-serif;
      }
      .p6 {
        font-family: Space Grotesk, sans-serif;
        font-size: 0.6875rem;
        font-weight: 400;
        line-height: 1rem;
      }
      .p6--ns {
        font-family: Noto Sans, sans-serif;
      }
      .btn-1 {
        font-family: Space Grotesk, sans-serif;
        font-size: 0.875rem;
        font-weight: 700;
        line-height: 1.25rem;
        text-transform: uppercase;
      }
      .sr-only {
        height: 1px;
        margin: -1px;
        overflow: hidden;
        padding: 0;
        position: absolute;
        width: 1px;
        clip: rect(0, 0, 0, 0);
        border-width: 0;
        white-space: nowrap;
      }
      .fixed {
        position: fixed;
      }
      .absolute {
        position: absolute;
      }
      .relative {
        position: relative;
      }
      .-left-8 {
        left: -2rem;
      }
      .-top-px {
        top: -1px;
      }
      .bottom-0 {
        bottom: 0;
      }
      .left-0 {
        left: 0;
      }
      .left-1 {
        left: 0.25rem;
      }
      .left-1/2 {
        left: 50%;
      }
      .left-3 {
        left: 0.75rem;
      }
      .right-0 {
        right: 0;
      }
      .right-1/2 {
        right: 50%;
      }
      .right-3 {
        right: 0.75rem;
      }
      .right-5 {
        right: 1.25rem;
      }
      .top-0 {
        top: 0;
      }
      .top-2.5 {
        top: 0.625rem;
      }
      .top-3 {
        top: 0.75rem;
      }
      .top-5 {
        top: 1.25rem;
      }
      .top-9 {
        top: 2.25rem;
      }
      .top-full {
        top: 100%;
      }
      .-z-10 {
        z-index: -10;
      }
      .z-10 {
        z-index: 10;
      }
      .z-20 {
        z-index: 20;
      }
      .z-30 {
        z-index: 30;
      }
      .z-50 {
        z-index: 50;
      }
      .z-800 {
        z-index: 800;
      }
      .-mx-2 {
        margin-left: -0.5rem;
        margin-right: -0.5rem;
      }
      .-mx-4 {
        margin-left: -1rem;
        margin-right: -1rem;
      }
      .mx-1 {
        margin-left: 0.25rem;
        margin-right: 0.25rem;
      }
      .my-10 {
        margin-bottom: 2.5rem;
        margin-top: 2.5rem;
      }
      .my-2 {
        margin-bottom: 0.5rem;
        margin-top: 0.5rem;
      }
      .-mb-2 {
        margin-bottom: -0.5rem;
      }
      .-mb-px {
        margin-bottom: -1px;
      }
      .-ml-[50vw] {
        margin-left: -50vw;
      }
      .-ml-px {
        margin-left: -1px;
      }
      .-mr-[50vw] {
        margin-right: -50vw;
      }
      .-mt-2 {
        margin-top: -0.5rem;
      }
      .-mt-px {
        margin-top: -1px;
      }
      .mb-0 {
        margin-bottom: 0;
      }
      .mb-1 {
        margin-bottom: 0.25rem;
      }
      .mb-10 {
        margin-bottom: 2.5rem;
      }
      .mb-2 {
        margin-bottom: 0.5rem;
      }
      .mb-3 {
        margin-bottom: 0.75rem;
      }
      .mb-4 {
        margin-bottom: 1rem;
      }
      .mb-5 {
        margin-bottom: 1.25rem;
      }
      .mb-6 {
        margin-bottom: 1.5rem;
      }
      .ml-1 {
        margin-left: 0.25rem;
      }
      .ml-2 {
        margin-left: 0.5rem;
      }
      .ml-3 {
        margin-left: 0.75rem;
      }
      .ml-4 {
        margin-left: 1rem;
      }
      .mr-1 {
        margin-right: 0.25rem;
      }
      .mr-2 {
        margin-right: 0.5rem;
      }
      .mr-3 {
        margin-right: 0.75rem;
      }
      .mr-4 {
        margin-right: 1rem;
      }
      .mr-6 {
        margin-right: 1.5rem;
      }
      .mr-9 {
        margin-right: 2.25rem;
      }
      .mt-2.5 {
        margin-top: 0.625rem;
      }
      .mt-3 {
        margin-top: 0.75rem;
      }
      .mt-4 {
        margin-top: 1rem;
      }
      .mt-5 {
        margin-top: 1.25rem;
      }
      .block {
        display: block;
      }
      .inline-block {
        display: inline-block;
      }
      .inline {
        display: inline;
      }
      .flex {
        display: flex;
      }
      .inline-flex {
        display: inline-flex;
      }
      .hidden {
        display: none;
      }
      .aspect-square {
        aspect-ratio: 1/1;
      }
      .h-2.5 {
        height: 0.625rem;
      }
      .h-22.5 {
        height: 5.625rem;
      }
      .h-3 {
        height: 0.75rem;
      }
      .h-4 {
        height: 1rem;
      }
      .h-4.5 {
        height: 1.125rem;
      }
      .h-5 {
        height: 1.25rem;
      }
      .h-6 {
        height: 1.5rem;
      }
      .h-60 {
        height: 15rem;
      }
      .h-7.5 {
        height: 1.875rem;
      }
      .h-8 {
        height: 2rem;
      }
      .h-9 {
        height: 2.25rem;
      }
      .h-[calc(100%+2px)] {
        height: calc(100% + 2px);
      }
      .h-[calc(100%-52px)] {
        height: calc(100% - 52px);
      }
      .h-auto {
        height: auto;
      }
      .h-full {
        height: 100%;
      }
      .h-full-px {
        height: calc(100% + 1px);
      }
      .h-px {
        height: 1px;
      }
      .h-screen {
        height: 100vh;
      }
      .max-h-4 {
        max-height: 1rem;
      }
      .max-h-64 {
        max-height: 16rem;
      }
      .max-h-8 {
        max-height: 2rem;
      }
      .min-h-12 {
        min-height: 3rem;
      }
      .min-h-6 {
        min-height: 1.5rem;
      }
      .w-1.25 {
        width: 0.3125rem;
      }
      .w-2.5 {
        width: 0.625rem;
      }
      .w-3 {
        width: 0.75rem;
      }
      .w-4 {
        width: 1rem;
      }
      .w-4.5 {
        width: 1.125rem;
      }
      .w-44 {
        width: 11rem;
      }
      .w-5 {
        width: 1.25rem;
      }
      .w-56 {
        width: 14rem;
      }
      .w-6 {
        width: 1.5rem;
      }
      .w-7.5 {
        width: 1.875rem;
      }
      .w-8 {
        width: 2rem;
      }
      .w-[1300px] {
        width: 1300px;
      }
      .w-[calc(100%+32px)] {
        width: calc(100% + 32px);
      }
      .w-[calc(100%-4px)] {
        width: calc(100% - 4px);
      }
      .w-auto {
        width: auto;
      }
      .w-fit {
        width: -moz-fit-content;
        width: fit-content;
      }
      .w-full {
        width: 100%;
      }
      .w-screen {
        width: 100vw;
      }
      .min-w-32 {
        min-width: 8rem;
      }
      .min-w-4 {
        min-width: 1rem;
      }
      .min-w-5 {
        min-width: 1.25rem;
      }
      .min-w-6 {
        min-width: 1.5rem;
      }
      .max-w-28 {
        max-width: 7rem;
      }
      .max-w-4 {
        max-width: 1rem;
      }
      .max-w-8 {
        max-width: 2rem;
      }
      .shrink-0 {
        flex-shrink: 0;
      }
      .flex-grow {
        flex-grow: 1;
      }
      .-translate-x-1/3 {
        transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate))
          skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
        --tw-translate-x: -33.333333%;
      }
      .-translate-y-1/2,
      .-translate-y-2/4 {
        --tw-translate-y: -50%;
      }
      .-translate-y-1/2,
      .-translate-y-2/4,
      .rotate-0 {
        transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate))
          skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
      }
      .rotate-0 {
        --tw-rotate: 0deg;
      }
      @keyframes spin {
        to {
          transform: rotate(1turn);
        }
      }
      .animate-spin {
        animation: spin 1s linear infinite;
      }
      .list-none {
        list-style-type: none;
      }
      .appearance-none {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
      }
      .flex-col {
        flex-direction: column;
      }
      .flex-wrap {
        flex-wrap: wrap;
      }
      .items-start {
        align-items: flex-start;
      }
      .items-center {
        align-items: center;
      }
      .items-baseline {
        align-items: baseline;
      }
      .justify-end {
        justify-content: flex-end;
      }
      .justify-center {
        justify-content: center;
      }
      .justify-between {
        justify-content: space-between;
      }
      .gap-2 {
        gap: 0.5rem;
      }
      .gap-4 {
        gap: 1rem;
      }
      .gap-x-1.5 {
        -moz-column-gap: 0.375rem;
        column-gap: 0.375rem;
      }
      .gap-x-2 {
        -moz-column-gap: 0.5rem;
        column-gap: 0.5rem;
      }
      .gap-x-2.5 {
        -moz-column-gap: 0.625rem;
        column-gap: 0.625rem;
      }
      .gap-x-3 {
        -moz-column-gap: 0.75rem;
        column-gap: 0.75rem;
      }
      .gap-x-3.5 {
        -moz-column-gap: 0.875rem;
        column-gap: 0.875rem;
      }
      .gap-x-4 {
        -moz-column-gap: 1rem;
        column-gap: 1rem;
      }
      .gap-x-5 {
        -moz-column-gap: 1.25rem;
        column-gap: 1.25rem;
      }
      .gap-x-6 {
        -moz-column-gap: 1.5rem;
        column-gap: 1.5rem;
      }
      .gap-y-1 {
        row-gap: 0.25rem;
      }
      .gap-y-10 {
        row-gap: 2.5rem;
      }
      .gap-y-3 {
        row-gap: 0.75rem;
      }
      .overflow-auto {
        overflow: auto;
      }
      .overflow-hidden {
        overflow: hidden;
      }
      .overflow-x-auto {
        overflow-x: auto;
      }
      .overflow-y-auto {
        overflow-y: auto;
      }
      .overflow-x-hidden {
        overflow-x: hidden;
      }
      .scroll-smooth {
        scroll-behavior: smooth;
      }
      .truncate {
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .truncate,
      .whitespace-nowrap {
        white-space: nowrap;
      }
      .rounded {
        border-radius: 4px;
      }
      .rounded-7xl {
        border-radius: 100px;
      }
      .rounded-full {
        border-radius: 9999px;
      }
      .rounded-lg {
        border-radius: 8px;
      }
      .rounded-md {
        border-radius: 6px;
      }
      .rounded-sm {
        border-radius: 2px;
      }
      .rounded-xl {
        border-radius: 12px;
      }
      .border {
        border-width: 1px;
      }
      .border-b {
        border-bottom-width: 1px;
      }
      .border-t {
        border-top-width: 1px;
      }
      .border-none {
        border-style: none;
      }
      .border-blue-600 {
        --tw-border-opacity: 1;
        border-color: rgb(23 96 250 / var(--tw-border-opacity));
      }
      .border-blue-700 {
        --tw-border-opacity: 1;
        border-color: rgb(10 79 224 / var(--tw-border-opacity));
      }
      .border-dark-grey-700 {
        --tw-border-opacity: 1;
        border-color: rgb(14 22 32 / var(--tw-border-opacity));
      }
      .border-grey-200 {
        --tw-border-opacity: 1;
        border-color: rgb(235 235 235 / var(--tw-border-opacity));
      }
      .border-grey-400 {
        --tw-border-opacity: 1;
        border-color: rgb(181 181 181 / var(--tw-border-opacity));
      }
      .border-transparent {
        border-color: transparent;
      }
      .border-y-grey-200 {
        --tw-border-opacity: 1;
        border-bottom-color: rgb(235 235 235 / var(--tw-border-opacity));
        border-top-color: rgb(235 235 235 / var(--tw-border-opacity));
      }
      .border-b-grey-200 {
        --tw-border-opacity: 1;
        border-bottom-color: rgb(235 235 235 / var(--tw-border-opacity));
      }
      .border-b-grey-300 {
        --tw-border-opacity: 1;
        border-bottom-color: rgb(204 204 204 / var(--tw-border-opacity));
      }
      .border-t-black {
        --tw-border-opacity: 1;
        border-top-color: rgb(0 0 0 / var(--tw-border-opacity));
      }
      .border-t-grey-200 {
        --tw-border-opacity: 1;
        border-top-color: rgb(235 235 235 / var(--tw-border-opacity));
      }
      .bg-black/30 {
        background-color: rgba(0, 0, 0, 0.3);
      }
      .bg-blue-200 {
        --tw-bg-opacity: 1;
        background-color: rgb(232 239 255 / var(--tw-bg-opacity));
      }
      .bg-blue-600 {
        --tw-bg-opacity: 1;
        background-color: rgb(23 96 250 / var(--tw-bg-opacity));
      }
      .bg-dark-grey-700 {
        --tw-bg-opacity: 1;
        background-color: rgb(14 22 32 / var(--tw-bg-opacity));
      }
      .bg-grey-100 {
        --tw-bg-opacity: 1;
        background-color: rgb(240 240 240 / var(--tw-bg-opacity));
      }
      .bg-grey-200 {
        --tw-bg-opacity: 1;
        background-color: rgb(235 235 235 / var(--tw-bg-opacity));
      }
      .bg-grey-400 {
        --tw-bg-opacity: 1;
        background-color: rgb(181 181 181 / var(--tw-bg-opacity));
      }
      .bg-lime-600 {
        --tw-bg-opacity: 1;
        background-color: rgb(201 253 53 / var(--tw-bg-opacity));
      }
      .bg-transparent {
        background-color: transparent;
      }
      .bg-white {
        --tw-bg-opacity: 1;
        background-color: rgb(255 255 255 / var(--tw-bg-opacity));
      }
      .bg-gradient-r-l-white {
        background-image: linear-gradient(
          270deg,
          #fff,
          hsla(0, 0%, 100%, 0.839) 28.35%,
          hsla(0, 0%, 100%, 0.575) 63.92%,
          hsla(0, 0%, 100%, 0) 98.98%
        );
      }
      .fill-blue-700 {
        fill: #0a4fe0;
      }
      .fill-grey-100 {
        fill: #f0f0f0;
      }
      .fill-grey-300 {
        fill: #ccc;
      }
      .fill-grey-600 {
        fill: #7f7f7f;
      }
      .object-cover {
        -o-object-fit: cover;
        object-fit: cover;
      }
      .p-0 {
        padding: 0;
      }
      .p-1 {
        padding: 0.25rem;
      }
      .p-2 {
        padding: 0.5rem;
      }
      .p-3 {
        padding: 0.75rem;
      }
      .px-0 {
        padding-left: 0;
        padding-right: 0;
      }
      .px-2 {
        padding-left: 0.5rem;
        padding-right: 0.5rem;
      }
      .px-3 {
        padding-left: 0.75rem;
        padding-right: 0.75rem;
      }
      .px-3.5 {
        padding-left: 0.875rem;
        padding-right: 0.875rem;
      }
      .px-4 {
        padding-left: 1rem;
        padding-right: 1rem;
      }
      .px-5 {
        padding-left: 1.25rem;
        padding-right: 1.25rem;
      }
      .py-1 {
        padding-bottom: 0.25rem;
        padding-top: 0.25rem;
      }
      .py-1.5 {
        padding-bottom: 0.375rem;
        padding-top: 0.375rem;
      }
      .py-2 {
        padding-bottom: 0.5rem;
        padding-top: 0.5rem;
      }
      .py-2.5 {
        padding-bottom: 0.625rem;
        padding-top: 0.625rem;
      }
      .py-3 {
        padding-bottom: 0.75rem;
        padding-top: 0.75rem;
      }
      .py-4 {
        padding-bottom: 1rem;
        padding-top: 1rem;
      }
      .py-6 {
        padding-bottom: 1.5rem;
        padding-top: 1.5rem;
      }
      .pb-4 {
        padding-bottom: 1rem;
      }
      .pb-6 {
        padding-bottom: 1.5rem;
      }
      .pl-0 {
        padding-left: 0;
      }
      .pl-10 {
        padding-left: 2.5rem;
      }
      .pl-2 {
        padding-left: 0.5rem;
      }
      .pr-11 {
        padding-right: 2.75rem;
      }
      .pr-2 {
        padding-right: 0.5rem;
      }
      .pr-8 {
        padding-right: 2rem;
      }
      .pt-0 {
        padding-top: 0;
      }
      .pt-2 {
        padding-top: 0.5rem;
      }
      .pt-2.5 {
        padding-top: 0.625rem;
      }
      .pt-5 {
        padding-top: 1.25rem;
      }
      .pt-9 {
        padding-top: 2.25rem;
      }
      .text-left {
        text-align: left;
      }
      .text-center {
        text-align: center;
      }
      .align-middle {
        vertical-align: middle;
      }
      .font-body {
        font-family: Noto Sans, sans-serif;
      }
      .font-sans {
        font-family: Space Grotesk, sans-serif;
      }
      .text-2.5 {
        font-size: 0.625rem;
        line-height: 0.875rem;
      }
      .text-3 {
        font-size: 0.75rem;
        line-height: 1rem;
      }
      .text-3.5 {
        font-size: 0.875rem;
        line-height: 1.25rem;
      }
      .text-4.5 {
        font-size: 1.125rem;
        line-height: 1.5rem;
      }
      .text-7 {
        font-size: 1.75rem;
        line-height: 2rem;
      }
      .font-bold {
        font-weight: 700;
      }
      .font-medium {
        font-weight: 500;
      }
      .font-normal {
        font-weight: 400;
      }
      .uppercase {
        text-transform: uppercase;
      }
      .leading-4.5 {
        line-height: 1.125rem;
      }
      .leading-5 {
        line-height: 1.25rem;
      }
      .leading-6 {
        line-height: 1.5rem;
      }
      .leading-7 {
        line-height: 1.75rem;
      }
      .leading-none {
        line-height: 1;
      }
      .text-blue-600 {
        --tw-text-opacity: 1;
        color: rgb(23 96 250 / var(--tw-text-opacity));
      }
      .text-blue-700 {
        --tw-text-opacity: 1;
        color: rgb(10 79 224 / var(--tw-text-opacity));
      }
      .text-currentColor {
        color: currentColor;
      }
      .text-dark-grey-700 {
        --tw-text-opacity: 1;
        color: rgb(14 22 32 / var(--tw-text-opacity));
      }
      .text-grey-600 {
        --tw-text-opacity: 1;
        color: rgb(127 127 127 / var(--tw-text-opacity));
      }
      .text-grey-700 {
        --tw-text-opacity: 1;
        color: rgb(79 80 79 / var(--tw-text-opacity));
      }
      .text-grey-900 {
        --tw-text-opacity: 1;
        color: rgb(17 25 40 / var(--tw-text-opacity));
      }
      .text-lime-600 {
        --tw-text-opacity: 1;
        color: rgb(201 253 53 / var(--tw-text-opacity));
      }
      .text-transparent {
        color: transparent;
      }
      .text-white {
        --tw-text-opacity: 1;
        color: rgb(255 255 255 / var(--tw-text-opacity));
      }
      .underline {
        text-decoration-line: underline;
      }
      .no-underline {
        text-decoration-line: none;
      }
      .placeholder-grey-600::-moz-placeholder {
        --tw-placeholder-opacity: 1;
        color: rgb(127 127 127 / var(--tw-placeholder-opacity));
      }
      .shadow-menu {
        box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
        --tw-shadow: 0px 4px 18px rgba(0, 0, 0, 0.15);
        --tw-shadow-colored: 0px 4px 18px var(--tw-shadow-color);
      }
      .outline-0 {
        outline-width: 0;
      }
      .clip-path-bevel-t-r-2x {
        -webkit-clip-path: polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 100% 100%, 0 100%, 0 100%, 0 0);
        clip-path: polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 100% 100%, 0 100%, 0 100%, 0 0);
      }
      .container {
        margin-left: auto;
        margin-right: auto;
      }
      .entry-content img {
        width: 100%;
      }
      .overflow-auto,
      .overflow-x-auto,
      .overflow-y-auto {
        scroll-behavior: smooth;
        scroll-margin-bottom: 0.75rem;
      }
      .overflow-auto::-webkit-scrollbar,
      .overflow-x-auto::-webkit-scrollbar,
      .overflow-y-auto::-webkit-scrollbar {
        height: 0.3125rem;
        width: 0.3125rem;
      }
      .overflow-auto::-webkit-scrollbar-track,
      .overflow-x-auto::-webkit-scrollbar-track,
      .overflow-y-auto::-webkit-scrollbar-track {
        --tw-bg-opacity: 1;
        background-color: rgb(240 240 240 / var(--tw-bg-opacity));
      }
      .overflow-auto::-webkit-scrollbar-thumb,
      .overflow-x-auto::-webkit-scrollbar-thumb,
      .overflow-y-auto::-webkit-scrollbar-thumb {
        border-radius: 48px;
        overflow: hidden;
        --tw-bg-opacity: 1;
        background-clip: padding-box;
        background-color: rgb(204 204 204 / var(--tw-bg-opacity));
      }
      .overflow-auto::-webkit-scrollbar-corner,
      .overflow-x-auto::-webkit-scrollbar-corner,
      .overflow-y-auto::-webkit-scrollbar-corner {
        --tw-bg-opacity: 1;
        background-color: rgb(240 240 240 / var(--tw-bg-opacity));
      }
      .scroll-hidden::-webkit-scrollbar {
        display: none;
      }
      @font-face {
        font-display: block;
        font-family: icomoon;
        font-style: normal;
        font-weight: 400;
        src: url(../fonts/icomoon.eot);
        src: url(../fonts/icomoon.eot) format('embedded-open'), url(../fonts/icomoon.ttf) format('true'),
          url(../fonts/icomoon.woff) format('woff'), url(../fonts/icomoon.svg#icomoon) format('svg');
      }
      [class^='icon-'] {
        font-family: icomoon, sans-serif !important;
        speak: never;
        font-style: normal;
        font-variant: normal;
        font-weight: 400;
        line-height: 1;
        text-transform: none;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
      .icon-clock:before {
        content: '';
      }
      input[type='search']::-webkit-search-cancel-button {
        -webkit-appearance: none;
        appearance: none;
      }
      label {
        display: block;
        font-family: Space Grotesk, sans-serif;
        font-size: 1.125rem;
        font-weight: 400;
        line-height: 1.5rem;
        margin-bottom: 0.625rem;
      }
      .wp-block-bic-block-toc .bic_toc__itemswrap ul {
        padding-left: 0;
      }
      .wp-block-bic-block-toc .ht_toc_list .ht_toc_child_list {
        display: block;
        padding-left: 2.25rem;
        padding-top: 1rem;
        width: 100%;
      }
      .wp-block-bic-block-toc .ht_toc_list .ht_toc_child_list:empty {
        display: none;
      }
      .ad-wrapper {
        align-items: center;
        display: flex;
        flex-direction: column;
        margin-bottom: 2rem;
        text-align: center;
      }
      .ad-wrapper.ad-after-header {
        margin-bottom: 0;
      }
      .ad-wrapper small {
        display: inline-block;
        font-family: Space Grotesk, sans-serif;
        font-family: Noto Sans, sans-serif;
        font-size: 0.875rem;
        font-weight: 400;
        line-height: 1.25rem;
        --tw-text-opacity: 1;
        color: rgb(204 204 204 / var(--tw-text-opacity));
      }
      .ad-wrapper small:first-child {
        margin-bottom: 0.25rem;
      }
      .ad-wrapper small:last-child {
        margin-top: 0.25rem;
      }
      .ad-wrapper.ad-before-header {
        margin-bottom: 0;
      }
      .ad-wrapper-m {
        display: inline-block;
        height: 6rem;
        width: 20rem;
      }
      #amp-user-notification1 {
        min-height: 3.75rem;
        position: absolute;
        top: 0;
        width: 100%;
        z-index: 50;
      }
      #amp-user-notification1 .wrap {
        align-items: center;
        display: flex;
        justify-content: space-between;
        --tw-bg-opacity: 1;
        background-color: rgb(14 22 32 / var(--tw-bg-opacity));
        font-size: 0.875rem;
        line-height: 1.25rem;
        padding: 0.75rem;
        --tw-text-opacity: 1;
        color: rgb(255 255 255 / var(--tw-text-opacity));
      }
      #amp-user-notification1 .wrap p {
        margin-bottom: auto;
      }
      #amp-user-notification1 .wrap button {
        margin-left: 0.75rem;
        --tw-bg-opacity: 1;
        background-color: rgb(23 96 250 / var(--tw-bg-opacity));
        font-weight: 700;
        padding: 0.5rem 0.75rem;
        --tw-text-opacity: 1;
        color: rgb(255 255 255 / var(--tw-text-opacity));
      }
      .bevel-small-tl-br {
        width: 100%;
        --tw-bg-opacity: 1;
        background-color: rgb(204 204 204 / var(--tw-bg-opacity));
        -webkit-clip-path: polygon(
          23px 0,
          100% 0,
          100% 23px,
          100% calc(100% - 23px),
          calc(100% - 23px) 100%,
          23px 100%,
          0 100%,
          0 23px
        );
        clip-path: polygon(
          23px 0,
          100% 0,
          100% 23px,
          100% calc(100% - 23px),
          calc(100% - 23px) 100%,
          23px 100%,
          0 100%,
          0 23px
        );
        padding: 1px;
      }
      .bevel-small-inner-tl-br {
        -webkit-clip-path: polygon(
          22px 0,
          100% 0,
          100% 22px,
          100% calc(100% - 22px),
          calc(100% - 22px) 100%,
          22px 100%,
          0 100%,
          0 22px
        );
        clip-path: polygon(
          22px 0,
          100% 0,
          100% 22px,
          100% calc(100% - 22px),
          calc(100% - 22px) 100%,
          22px 100%,
          0 100%,
          0 22px
        );
      }
      .label-style_1 .cont-wrapper {
        padding-top: 1rem;
      }
      .label-style_1 .label2 {
        display: none;
      }
      .[&_p]:p3 p {
        font-family: Space Grotesk, sans-serif;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5rem;
      }
      .[&_p]:p3--ns p {
        font-family: Noto Sans, sans-serif;
      }
      .placeholder:text-grey-600::-moz-placeholder {
        --tw-text-opacity: 1;
        color: rgb(127 127 127 / var(--tw-text-opacity));
      }
      .before:absolute:before {
        content: var(--tw-content);
        position: absolute;
      }
      .before:left-0:before {
        content: var(--tw-content);
        left: 0;
      }
      .before:top-0:before {
        content: var(--tw-content);
        top: 0;
      }
      .before:top-3.25:before {
        content: var(--tw-content);
        top: 0.8125rem;
      }
      .before:block:before {
        content: var(--tw-content);
        display: block;
      }
      .before:hidden:before {
        content: var(--tw-content);
        display: none;
      }
      .before:h-2.5:before {
        content: var(--tw-content);
        height: 0.625rem;
      }
      .before:h-full:before {
        content: var(--tw-content);
        height: 100%;
      }
      .before:w-0:before {
        content: var(--tw-content);
        width: 0;
      }
      .before:w-full:before {
        content: var(--tw-content);
        width: 100%;
      }
      .before:translate-x-1:before {
        --tw-translate-x: 0.25rem;
      }
      .before:translate-x-1:before,
      .before:translate-y-1:before {
        content: var(--tw-content);
        transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate))
          skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
      }
      .before:translate-y-1:before {
        --tw-translate-y: 0.25rem;
      }
      .before:rounded-sm:before {
        border-radius: 2px;
        content: var(--tw-content);
      }
      .before:rounded-xl:before {
        border-radius: 12px;
        content: var(--tw-content);
      }
      .before:bg-blue-600:before {
        content: var(--tw-content);
        --tw-bg-opacity: 1;
        background-color: rgb(23 96 250 / var(--tw-bg-opacity));
      }
      .before:bg-lime-600:before {
        content: var(--tw-content);
        --tw-bg-opacity: 1;
        background-color: rgb(201 253 53 / var(--tw-bg-opacity));
      }
      .before:transition-all:before {
        content: var(--tw-content);
      }
      .first:border-t-0:first-child {
        border-top-width: 0;
      }
      .last:mb-0:last-child {
        margin-bottom: 0;
      }
      .[&>li:nth-last-child(2)>span]:text-grey-600 > li:nth-last-child(2) > span {
        --tw-text-opacity: 1;
        color: rgb(127 127 127 / var(--tw-text-opacity));
      }
      .[&_a:not([class*=btn])]:text-blue-600 a:not([class*='btn']) {
        --tw-text-opacity: 1;
        color: rgb(23 96 250 / var(--tw-text-opacity));
      }
      .[&_p]:!mb-2 p {
        margin-bottom: 0.5rem !important;
      }
      .[&_p]:mb-2 p {
        margin-bottom: 0.5rem;
      }
      .[&_p]:text-3.5 p {
        font-size: 0.875rem;
        line-height: 1.25rem;
      }
      .ad-wrapper-d {
        display: none;
      }
      .ad-wrapper-d-xl {
        display: none;
      }
      .ad-wrapper-m {
        display: inline-block;
      }
      @media (min-width: 640px) {
        .container {
          max-width: 640px;
          padding-inline: 2rem;
        }
      }
      @media (min-width: 768px) {
        .container {
          max-width: 768px;
          padding-inline: 2rem;
        }
        #amp-user-notification1 {
          bottom: 5rem;
          left: 0;
          margin-left: auto;
          margin-right: auto;
          max-width: 28rem;
          position: fixed;
          right: 0;
          top: auto;
        }
        .md:h5 {
          font-family: Space Grotesk, sans-serif;
          font-size: 1.625rem;
          font-weight: 700;
          line-height: 2rem;
        }
        .md:ml-2.5 {
          margin-left: 0.625rem;
        }
        .md:flex {
          display: flex;
        }
        .md:hidden {
          display: none;
        }
        .md:w-3/12 {
          width: 25%;
        }
        .md:w-6/12 {
          width: 50%;
        }
        .container {
          max-width: 768px;
          padding-inline: 2rem;
        }
        .ad-wrapper-m {
          display: none;
        }
        #amp-user-notification1 {
          bottom: 5rem;
          left: 0;
          margin-left: auto;
          margin-right: auto;
          max-width: 28rem;
          position: fixed;
          right: 0;
          top: auto;
        }
        .md:mb-0 {
          margin-bottom: 0;
        }
        .md:ml-2.5 {
          margin-left: 0.625rem;
        }
        .md:block {
          display: block;
        }
        .md:hidden {
          display: none;
        }
        .md:overflow-x-visible {
          overflow-x: visible;
        }
        .md:px-4 {
          padding-left: 1rem;
          padding-right: 1rem;
        }
        .container {
          max-width: 768px;
          padding-inline: 2rem;
        }
        .ad-wrapper-m {
          display: none;
        }
        #amp-user-notification1 {
          bottom: 5rem;
          left: 0;
          margin-left: auto;
          margin-right: auto;
          max-width: 28rem;
          position: fixed;
          right: 0;
          top: auto;
        }
        .md:h6 {
          font-size: 1.5rem;
          line-height: 1.75rem;
        }
        .md:h6,
        .md:s1 {
          font-family: Space Grotesk, sans-serif;
          font-weight: 700;
        }
        .md:s1 {
          font-size: 1.125rem;
          line-height: 1.5rem;
        }
        .md:s1--medium {
          font-weight: 500;
        }
        .md:mb-0 {
          margin-bottom: 0;
        }
        .md:ml-2.5 {
          margin-left: 0.625rem;
        }
        .md:mt-4 {
          margin-top: 1rem;
        }
        .md:block {
          display: block;
        }
        .md:hidden {
          display: none;
        }
        .md:overflow-x-visible {
          overflow-x: visible;
        }
        .md:px-4 {
          padding-left: 1rem;
          padding-right: 1rem;
        }
        .md:px-5 {
          padding-left: 1.25rem;
          padding-right: 1.25rem;
        }
        .md:py-5 {
          padding-bottom: 1.25rem;
        }
        .md:pt-5,
        .md:py-5 {
          padding-top: 1.25rem;
        }
        .ad-wrapper-d {
          display: inline-block;
        }
        .ad-wrapper-m {
          display: none;
        }
      }
      @media (min-width: 1024px) {
        .container {
          max-width: 1024px;
          padding-inline: 2rem;
        }
        .overflow-auto::-webkit-scrollbar,
        .overflow-y-auto::-webkit-scrollbar {
          height: 0.75rem;
          width: 0.75rem;
        }
        .overflow-auto::-webkit-scrollbar-button,
        .overflow-y-auto::-webkit-scrollbar-button {
          display: block;
          --tw-bg-opacity: 1;
          background-color: rgb(240 240 240 / var(--tw-bg-opacity));
          background-position: 50%;
          background-repeat: no-repeat;
        }
        .ad-wrapper.ad-shortcode-1 {
          margin-left: 0;
          margin-right: 0;
        }
        .bic_home_page_after_main_image_ad {
          display: flex;
        }
        .most-read-content ul li {
          display: list-item;
        }
        .lg:h2 {
          font-size: 2.375rem;
          line-height: 2.875rem;
        }
        .lg:h2,
        .lg:s1 {
          font-family: Space Grotesk, sans-serif;
          font-weight: 700;
        }
        .lg:s1 {
          font-size: 1.125rem;
          line-height: 1.5rem;
        }
        .lg:s1--medium {
          font-weight: 500;
        }
        .lg:s2 {
          font-family: Space Grotesk, sans-serif;
          font-size: 1rem;
          font-weight: 700;
          line-height: 1.5rem;
        }
        .lg:s2--medium {
          font-weight: 500;
        }
        .lg:p3 {
          font-family: Space Grotesk, sans-serif;
          font-size: 1rem;
          font-weight: 400;
          line-height: 1.5rem;
        }
        .lg:p3--medium {
          font-weight: 500;
        }
        .lg:static {
          position: static;
        }
        .lg:absolute {
          position: absolute;
        }
        .lg:mb-0 {
          margin-bottom: 0;
        }
        .lg:mt-0 {
          margin-top: 0;
        }
        .lg:mt-5 {
          margin-top: 1.25rem;
        }
        .lg:block {
          display: block;
        }
        .lg:inline {
          display: inline;
        }
        .lg:flex {
          display: flex;
        }
        .lg:inline-flex {
          display: inline-flex;
        }
        .lg:hidden {
          display: none;
        }
        .lg:h-0 {
          height: 0;
        }
        .lg:h-5 {
          height: 1.25rem;
        }
        .lg:h-6 {
          height: 1.5rem;
        }
        .lg:h-auto {
          height: auto;
        }
        .lg:max-h-none {
          max-height: none;
        }
        .lg:w-0 {
          width: 0;
        }
        .lg:w-5 {
          width: 1.25rem;
        }
        .lg:w-auto {
          width: auto;
        }
        .lg:w-full {
          width: 100%;
        }
        .lg:flex-grow {
          flex-grow: 1;
        }
        .lg:translate-x-0 {
          transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate))
            skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
          --tw-translate-x: 0;
        }
        .lg:flex-row {
          flex-direction: row;
        }
        .lg:flex-nowrap {
          flex-wrap: nowrap;
        }
        .lg:items-center {
          align-items: center;
        }
        .lg:justify-start {
          justify-content: flex-start;
        }
        .lg:justify-end {
          justify-content: flex-end;
        }
        .lg:gap-0 {
          gap: 0;
        }
        .lg:gap-x-10 {
          -moz-column-gap: 2.5rem;
          column-gap: 2.5rem;
        }
        .lg:gap-x-2 {
          -moz-column-gap: 0.5rem;
          column-gap: 0.5rem;
        }
        .lg:gap-x-3 {
          -moz-column-gap: 0.75rem;
          column-gap: 0.75rem;
        }
        .lg:overflow-visible {
          overflow: visible;
        }
        .lg:border-t-0 {
          border-top-width: 0;
        }
        .lg:bg-transparent {
          background-color: transparent;
        }
        .lg:bg-white {
          --tw-bg-opacity: 1;
          background-color: rgb(255 255 255 / var(--tw-bg-opacity));
        }
        .lg:p-2.75 {
          padding: 0.6875rem;
        }
        .lg:p-4 {
          padding: 1rem;
        }
        .lg:px-0 {
          padding-left: 0;
          padding-right: 0;
        }
        .lg:px-5 {
          padding-left: 1.25rem;
          padding-right: 1.25rem;
        }
        .lg:py-0 {
          padding-bottom: 0;
          padding-top: 0;
        }
        .lg:py-4 {
          padding-bottom: 1rem;
          padding-top: 1rem;
        }
        .lg:py-5 {
          padding-bottom: 1.25rem;
          padding-top: 1.25rem;
        }
        .lg:py-6 {
          padding-bottom: 1.5rem;
          padding-top: 1.5rem;
        }
        .lg:pl-4 {
          padding-left: 1rem;
        }
        .lg:pl-7 {
          padding-left: 1.75rem;
        }
        .lg:pr-5 {
          padding-right: 1.25rem;
        }
        .lg:pr-6 {
          padding-right: 1.5rem;
        }
        .lg:pt-2 {
          padding-top: 0.5rem;
        }
        .lg:shadow-menu {
          box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
          --tw-shadow: 0px 4px 18px rgba(0, 0, 0, 0.15);
          --tw-shadow-colored: 0px 4px 18px var(--tw-shadow-color);
        }
        .container {
          max-width: 1024px;
          padding-inline: 2rem;
        }
        .overflow-auto::-webkit-scrollbar,
        .overflow-x-auto::-webkit-scrollbar,
        .overflow-y-auto::-webkit-scrollbar {
          height: 0.75rem;
          width: 0.75rem;
        }
        .overflow-auto::-webkit-scrollbar-button,
        .overflow-x-auto::-webkit-scrollbar-button,
        .overflow-y-auto::-webkit-scrollbar-button {
          display: block;
          --tw-bg-opacity: 1;
          background-color: rgb(240 240 240 / var(--tw-bg-opacity));
          background-position: 50%;
          background-repeat: no-repeat;
        }
        .ad-wrapper small:first-child {
          margin-bottom: 0.75rem;
        }
        .ad-wrapper small:last-child {
          margin-top: 0.75rem;
        }
        .lg:h1 {
          font-size: 2.75rem;
          line-height: 3.5rem;
        }
        .lg:h1,
        .lg:s2 {
          font-family: Space Grotesk, sans-serif;
          font-weight: 700;
        }
        .lg:s2 {
          font-size: 1rem;
          line-height: 1.5rem;
        }
        .lg:s2--medium {
          font-weight: 500;
        }
        .lg:p3 {
          font-family: Space Grotesk, sans-serif;
          font-size: 1rem;
          font-weight: 400;
          line-height: 1.5rem;
        }
        .lg:p3--medium {
          font-weight: 500;
        }
        .lg:static {
          position: static;
        }
        .lg:absolute {
          position: absolute;
        }
        .lg:mb-0 {
          margin-bottom: 0;
        }
        .lg:mb-3 {
          margin-bottom: 0.75rem;
        }
        .lg:mb-5 {
          margin-bottom: 1.25rem;
        }
        .lg:ml-auto {
          margin-left: auto;
        }
        .lg:mt-0 {
          margin-top: 0;
        }
        .lg:block {
          display: block;
        }
        .lg:flex {
          display: flex;
        }
        .lg:inline-flex {
          display: inline-flex;
        }
        .lg:hidden {
          display: none;
        }
        .lg:h-0 {
          height: 0;
        }
        .lg:h-5 {
          height: 1.25rem;
        }
        .lg:h-6 {
          height: 1.5rem;
        }
        .lg:h-auto {
          height: auto;
        }
        .lg:max-h-none {
          max-height: none;
        }
        .lg:w-0 {
          width: 0;
        }
        .lg:w-4/12 {
          width: 33.333333%;
        }
        .lg:w-5 {
          width: 1.25rem;
        }
        .lg:w-7/12 {
          width: 58.333333%;
        }
        .lg:w-auto {
          width: auto;
        }
        .lg:max-w-[800px] {
          max-width: 800px;
        }
        .lg:flex-grow {
          flex-grow: 1;
        }
        .lg:translate-x-0 {
          transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate))
            skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
          --tw-translate-x: 0;
        }
        .lg:flex-row {
          flex-direction: row;
        }
        .lg:flex-nowrap {
          flex-wrap: nowrap;
        }
        .lg:items-center {
          align-items: center;
        }
        .lg:justify-start {
          justify-content: flex-start;
        }
        .lg:justify-end {
          justify-content: flex-end;
        }
        .lg:gap-0 {
          gap: 0;
        }
        .lg:gap-x-10 {
          -moz-column-gap: 2.5rem;
          column-gap: 2.5rem;
        }
        .lg:gap-x-2 {
          -moz-column-gap: 0.5rem;
          column-gap: 0.5rem;
        }
        .lg:gap-x-3 {
          -moz-column-gap: 0.75rem;
          column-gap: 0.75rem;
        }
        .lg:gap-x-8 {
          -moz-column-gap: 2rem;
          column-gap: 2rem;
        }
        .lg:overflow-visible {
          overflow: visible;
        }
        .lg:border-t-0 {
          border-top-width: 0;
        }
        .lg:bg-transparent {
          background-color: transparent;
        }
        .lg:bg-white {
          --tw-bg-opacity: 1;
          background-color: rgb(255 255 255 / var(--tw-bg-opacity));
        }
        .lg:p-2.75 {
          padding: 0.6875rem;
        }
        .lg:p-4 {
          padding: 1rem;
        }
        .lg:px-0 {
          padding-left: 0;
          padding-right: 0;
        }
        .lg:px-8 {
          padding-left: 2rem;
          padding-right: 2rem;
        }
        .lg:py-0 {
          padding-bottom: 0;
          padding-top: 0;
        }
        .lg:py-4 {
          padding-bottom: 1rem;
          padding-top: 1rem;
        }
        .lg:pt-2 {
          padding-top: 0.5rem;
        }
        .lg:shadow-menu {
          box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
          --tw-shadow: 0px 4px 18px rgba(0, 0, 0, 0.15);
          --tw-shadow-colored: 0px 4px 18px var(--tw-shadow-color);
        }
        .container {
          max-width: 1024px;
          padding-inline: 2rem;
        }
        .overflow-auto::-webkit-scrollbar,
        .overflow-x-auto::-webkit-scrollbar,
        .overflow-y-auto::-webkit-scrollbar {
          height: 0.75rem;
          width: 0.75rem;
        }
        .overflow-auto::-webkit-scrollbar-button,
        .overflow-x-auto::-webkit-scrollbar-button,
        .overflow-y-auto::-webkit-scrollbar-button {
          display: block;
          --tw-bg-opacity: 1;
          background-color: rgb(240 240 240 / var(--tw-bg-opacity));
          background-position: 50%;
          background-repeat: no-repeat;
        }
        .ad-wrapper small:first-child {
          margin-bottom: 0.75rem;
        }
        .ad-wrapper small:last-child {
          margin-top: 0.75rem;
        }
        .lg:h1 {
          font-size: 2.75rem;
          line-height: 3.5rem;
        }
        .lg:h1,
        .lg:s2 {
          font-family: Space Grotesk, sans-serif;
          font-weight: 700;
        }
        .lg:s2 {
          font-size: 1rem;
          line-height: 1.5rem;
        }
        .lg:s2--medium {
          font-weight: 500;
        }
        .lg:p3 {
          font-family: Space Grotesk, sans-serif;
          font-size: 1rem;
          font-weight: 400;
          line-height: 1.5rem;
        }
        .lg:p3--medium {
          font-weight: 500;
        }
        .lg:static {
          position: static;
        }
        .lg:absolute {
          position: absolute;
        }
        .lg:mb-0 {
          margin-bottom: 0;
        }
        .lg:mb-10 {
          margin-bottom: 2.5rem;
        }
        .lg:mb-3 {
          margin-bottom: 0.75rem;
        }
        .lg:mb-5 {
          margin-bottom: 1.25rem;
        }
        .lg:ml-auto {
          margin-left: auto;
        }
        .lg:mt-0 {
          margin-top: 0;
        }
        .lg:block {
          display: block;
        }
        .lg:flex {
          display: flex;
        }
        .lg:inline-flex {
          display: inline-flex;
        }
        .lg:hidden {
          display: none;
        }
        .lg:h-0 {
          height: 0;
        }
        .lg:h-5 {
          height: 1.25rem;
        }
        .lg:h-6 {
          height: 1.5rem;
        }
        .lg:h-auto {
          height: auto;
        }
        .lg:max-h-none {
          max-height: none;
        }
        .lg:w-0 {
          width: 0;
        }
        .lg:w-4/12 {
          width: 33.333333%;
        }
        .lg:w-5 {
          width: 1.25rem;
        }
        .lg:w-7/12 {
          width: 58.333333%;
        }
        .lg:w-auto {
          width: auto;
        }
        .lg:max-w-[800px] {
          max-width: 800px;
        }
        .lg:flex-grow {
          flex-grow: 1;
        }
        .lg:translate-x-0 {
          transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate))
            skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
          --tw-translate-x: 0;
        }
        .lg:flex-row {
          flex-direction: row;
        }
        .lg:flex-nowrap {
          flex-wrap: nowrap;
        }
        .lg:items-center {
          align-items: center;
        }
        .lg:justify-start {
          justify-content: flex-start;
        }
        .lg:justify-end {
          justify-content: flex-end;
        }
        .lg:gap-0 {
          gap: 0;
        }
        .lg:gap-x-10 {
          -moz-column-gap: 2.5rem;
          column-gap: 2.5rem;
        }
        .lg:gap-x-2 {
          -moz-column-gap: 0.5rem;
          column-gap: 0.5rem;
        }
        .lg:gap-x-3 {
          -moz-column-gap: 0.75rem;
          column-gap: 0.75rem;
        }
        .lg:gap-x-8 {
          -moz-column-gap: 2rem;
          column-gap: 2rem;
        }
        .lg:overflow-visible {
          overflow: visible;
        }
        .lg:border-t-0 {
          border-top-width: 0;
        }
        .lg:bg-transparent {
          background-color: transparent;
        }
        .lg:bg-white {
          --tw-bg-opacity: 1;
          background-color: rgb(255 255 255 / var(--tw-bg-opacity));
        }
        .lg:p-2.75 {
          padding: 0.6875rem;
        }
        .lg:p-4 {
          padding: 1rem;
        }
        .lg:px-0 {
          padding-left: 0;
          padding-right: 0;
        }
        .lg:px-8 {
          padding-left: 2rem;
          padding-right: 2rem;
        }
        .lg:py-0 {
          padding-bottom: 0;
          padding-top: 0;
        }
        .lg:py-4 {
          padding-bottom: 1rem;
          padding-top: 1rem;
        }
        .lg:pt-2 {
          padding-top: 0.5rem;
        }
        .lg:shadow-menu {
          box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
          --tw-shadow: 0px 4px 18px rgba(0, 0, 0, 0.15);
          --tw-shadow-colored: 0px 4px 18px var(--tw-shadow-color);
        }
      }
      @media (min-width: 1300px) {
        .container {
          max-width: 1300px;
          padding-inline: 0;
        }
        .ad-wrapper-d {
          display: none;
        }
        .ad-wrapper-d-xl {
          display: inline-block;
        }
      }
      @media ( min-width: 992px ) {
        .block-visibility-hide-large-screen {
          display: none !important;
        }
      }

      @media ( min-width: 768px ) and ( max-width: 991.98px ) {
        .block-visibility-hide-medium-screen {
          display: none !important;
        }
      }

      @media ( max-width: 767.98px ) {
        .block-visibility-hide-small-screen {
          display: none !important;
        }
      }
    `}</style>
  );
};
