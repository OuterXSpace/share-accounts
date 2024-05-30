import { AloneVideoProp } from './alone-video.type';

export const AloneVideo: React.FC<AloneVideoProp> = () => {
  return (
    <section className="section-01 mb-[150px]">
      <div className="container">
        <div className="row">
          <div className="col-sm-2" />
          <div className="col-sm-10">
            <div className="video">
              <video
                className="elementor-video"
                src="https://websitedemos.net/video-editor-04/wp-content/uploads/sites/1219/2023/03/Pexels-Cottonbro-8208008-compress.mp4"
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
