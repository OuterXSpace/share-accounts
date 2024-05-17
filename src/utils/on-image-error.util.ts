export const onImageError = (event: React.SyntheticEvent<HTMLImageElement, Event>, defaultImage: string) => {
  const { currentTarget } = event;

  currentTarget.onerror = null;
  currentTarget.src = defaultImage;
};
