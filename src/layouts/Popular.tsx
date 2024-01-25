import Image, { StaticImageData } from "next/image";
import popular1 from "@/../public/img/popular_1.png";
import popular2 from "@/../public/img/popular_2.png";
import popular3 from "@/../public/img/popular_3.png";

const Popular = () => {
  return (
    <section className="mx-24">
      <h1>Popular Now</h1>
      <section className="flex justify-between mt-3">
        <CardPopular src={popular1} name={"popular 1"} price={"21 K"} />
        <CardPopular src={popular2} name={"popular 2"} price={"21 K"} />
        <CardPopular src={popular3} name={"popular 3"} price={"21 K"} />
      </section>
    </section>
  );
};

export default Popular;

type CardPopularProps = {
  src: StaticImageData;
  name: string;
  price: string;
};

export const CardPopular = ({ src, name, price }: CardPopularProps) => {
  return (
    <section>
      <Image src={src} alt="coffe" />
      <section>
        <h3>{name}</h3>
        <h3>{price}</h3>
      </section>
      <section>
        <section>
          <button>Hot</button>
          <button>Cold</button>
        </section>
        <button>Order Now</button>
      </section>
    </section>
  );
};
