import Image, { StaticImageData } from "next/image";
import delivery1 from "@/../public/img/delivery_1.png";
import delivery2 from "@/../public/img/delivery_2.png";
import delivery3 from "@/../public/img/delivery_3.png";

const Delivery = () => {
  return (
    <section className="mx-24 mb-24 pt-36 text-darkColor" id="delivery">
      <h1 className="text-2xl font-bold">How to use delivery service</h1>
      <section className="flex justify-between mt-16 mx-24">
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
    <section className="flex flex-col justify-center items-center">
      <Image src={src} alt={"icon"} />
      <h4 className="font-bold text-xl mt-4">{title}</h4>
      <p className="mt-3">{description}</p>
    </section>
  );
};
