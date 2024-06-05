import { AloneVideoProp } from './alone-video.type';

export const AloneVideo: React.FC<AloneVideoProp> = (props) => {
  const { data, className } = props;

  return (
    <section className={`section-alone-video invisible sm:visible sm:p-0 sm:m-0 ${className}`}>
      <div className="container xl:p-0 xl:max-w-full">
        <div className="row xl:justify-end">
          <div className="col-12 lg:col-10">
            <div className="video">
              <video
                className="w-full"
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
