import Image, { StaticImageData } from "next/image";
import delivery1 from "@/../public/img/delivery_1.png";
import delivery2 from "@/../public/img/delivery_2.png";
import delivery3 from "@/../public/img/delivery_3.png";

const Delivery = () => {
  return (
    <section className="mx-24">
      <h1>How to use delivery service</h1>
      <section className="flex justify-between">
        <CardDelivery
          src={delivery1}
          title="choose your coffee"
          description="there are 20+ coffees for you"
        />
        <CardDelivery
          src={delivery2}
          title="we delivery it to you"
          description="Choose delivery service"
        />
        <CardDelivery
          src={delivery3}
          title="Enjoy your coffee"
          description="Enjoy your life with coffee"
        />
      </section>
    </section>
  );
};

export default Delivery;

type CardDeliveryProps = {
  src: StaticImageData;
  title: string;
  description: string;
};

export const CardDelivery = ({
  src,
  title,
  description,
}: CardDeliveryProps) => {
  return (
    <section>
      <Image src={src} alt={"icon"} />
      <h4>{title}</h4>
      <p>{description}</p>
    </section>
  );
};
