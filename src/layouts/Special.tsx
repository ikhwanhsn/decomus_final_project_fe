import Image, { StaticImageData } from "next/image";
import special1 from "@/../public/img/special_1.png";
import special2 from "@/../public/img/special_2.png";
import special3 from "@/../public/img/special_3.png";
import special4 from "@/../public/img/special_4.png";
import special5 from "@/../public/img/special_5.png";
import special6 from "@/../public/img/special_6.png";
import { MdOutlineShoppingCart } from "react-icons/md";

const Special = () => {
  return (
    <section className="mx-24 pt-32 relative" id="special">
      <h1 className="text-2xl font-bold mb-12">Special menu for you</h1>
      <section className="w-20 h-1 bg-orangeColor absolute top-40 rounded-sm left-40"></section>
      <section className="grid grid-cols-3 gap-7">
        <CardSpecial
          src={special1}
          name="Sandwich"
          price="12 K"
          desc="bread with meat and vegetables"
        />
        <CardSpecial
          src={special2}
          name="Hot Milk"
          price="12 K"
          desc="Hot Milk with less sugar & cream"
        />
        <CardSpecial
          src={special3}
          name="Coffe Ice Cream"
          price="12 K"
          desc="Coffe with ice cream vanilla"
        />
        <CardSpecial
          src={special4}
          name="Cappucino"
          price="12 K"
          desc="Hot Cappucino"
        />
        <CardSpecial
          src={special5}
          name="Moccacinno"
          price="12 K"
          desc="Hot Moccacino "
        />
        <CardSpecial
          src={special6}
          name="Waffle Ice Crem"
          price="12 K"
          desc="Wafle with Ice cream"
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
    <section className="bg-white py-6 px-5 rounded-lg border z-20 shadow-md">
      <Image src={src} alt="coffe" className="rounded-lg" />
      <section className="flex items-center justify-between text-xl mt-4 font-bold mx-3">
        <h3 className="font-bold">{name}</h3>
        <h3>{price}</h3>
      </section>
      <section className="flex justify-between items-center mt-3 mx-3">
        <p className="w-4/6">{desc}</p>
        <button>
          <MdOutlineShoppingCart className="bg-orangeColor rounded-full text-white border-2 border-orangeColor scale-150 mr-3" />
        </button>
      </section>
    </section>
  );
};
