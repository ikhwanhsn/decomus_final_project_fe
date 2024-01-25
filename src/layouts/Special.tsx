import Image, { StaticImageData } from "next/image";
import special1 from "@/../public/img/special_1.png";
import special2 from "@/../public/img/special_2.png";
import special3 from "@/../public/img/special_3.png";
import special4 from "@/../public/img/special_4.png";
import special5 from "@/../public/img/special_5.png";
import special6 from "@/../public/img/special_6.png";

const Special = () => {
  return (
    <section className="mx-24">
      <h1>Special menu for you</h1>
      <section className="grid grid-cols-3 gap-3">
        <CardSpecial
          src={special1}
          name="Sandwich"
          price="12 K"
          desc="bread with meat and vegetables"
        />
        <CardSpecial
          src={special2}
          name="Sandwich"
          price="12 K"
          desc="bread with meat and vegetables"
        />
        <CardSpecial
          src={special3}
          name="Sandwich"
          price="12 K"
          desc="bread with meat and vegetables"
        />
        <CardSpecial
          src={special4}
          name="Sandwich"
          price="12 K"
          desc="bread with meat and vegetables"
        />
        <CardSpecial
          src={special5}
          name="Sandwich"
          price="12 K"
          desc="bread with meat and vegetables"
        />
        <CardSpecial
          src={special6}
          name="Sandwich"
          price="12 K"
          desc="bread with meat and vegetables"
        />
      </section>
    </section>
  );
};

export default Special;

type CardSpecialProps = {
  src: StaticImageData;
  name: string;
  price: string;
  desc: string;
};

export const CardSpecial = ({ src, name, price, desc }: CardSpecialProps) => {
  return (
    <section>
      <Image src={src} alt="coffe" />
      <section>
        <h3>{name}</h3>
        <h3>{price}</h3>
      </section>
      <section>
        <p>{desc}</p>
        <button>Order Now</button>
      </section>
    </section>
  );
};
