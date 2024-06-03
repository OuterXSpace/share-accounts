import { AloneVideoProp } from './alone-video.type';

export const AloneVideo: React.FC<AloneVideoProp> = (props) => {
  const { data, className } = props;

  return (
    <section className={`section-01 ${className}`}>
      <div className="container">
        <div className="row">
          <div className="col-sm-2" />
          <div className="col-sm-10">
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
