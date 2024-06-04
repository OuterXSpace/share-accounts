import { AloneVideoProp } from './alone-video.type';

export const AloneVideo: React.FC<AloneVideoProp> = (props) => {
  const { data, className } = props;

  return (
    <section className={`section-01 ${className}`}>
      <div className="container xl:p-0 xl:max-w-full">
        <div className="row xl:justify-end">
          <div className="col-sm-12 xl:col-sm-10">
            <div className="video">
              <video
                className="elementor-video"
                src={data?.object?.video}
                autoPlay
                playsInline
                controlsList="nodownload"
                loop
                muted
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
