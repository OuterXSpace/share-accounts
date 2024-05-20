export interface ISliderFullProps {
  data: ISliderFullData[];
  extraClassContainer?: string;
  extraClassSlider?: string;
}

interface ISliderFullData {
  avatar: string;
  title: string;
  info: string;
  button: string;
}
