import { IRichTextSectionProps } from './rich-text.type';

export const RichTextSection: React.FC<IRichTextSectionProps> = (props) => {
  const { data, className } = props;

  return (
    <div className="cmpt__rich-text cmpt__plain-text">
      <div className="container">
        <div className="grid-x">
          <div className="cell large-8 large-offset-2">
            <div dangerouslySetInnerHTML={{ __html: data?.object?.content }} />
          </div>
        </div>
      </div>
    </div>
  );
};
