export interface ISliderFullProps {
  data: ISliderFullData[];
  extraClassContainer?: string;
  extraClassSlider?: string;
}

interface ISliderFullData {
  id?: string;
  imageUrl?: string;
  linkUrl?: string;
}
