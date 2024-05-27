import { PromotionPageProps } from './static.type';

export const PromotionPage: React.FC<PromotionPageProps> = (props) => {
  const { promotion } = props;

  return (
    <div className="pt-[120px]">
      <section className="container py-[3rem] pb-[2rem]">
        <div className="row">
          <div className="col-sm-12" />
          <div dangerouslySetInnerHTML={{ __html: promotion?.content }} />
        </div>
      </section>
    </div>
  );
};
