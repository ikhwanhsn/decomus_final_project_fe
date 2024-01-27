import Image, { StaticImageData } from "next/image";
import popular1 from "@/../public/img/popular_1.png";
import popular2 from "@/../public/img/popular_2.png";
import popular3 from "@/../public/img/popular_3.png";
import { MdOutlineShoppingCart } from "react-icons/md";

const Popular = () => {
  return (
    <section className="mx-24 text-darkColor relative -mt-80">
      <h1 className="text-2xl font-bold mb-7">Popular Now</h1>
      <section className="w-12 h-1 bg-orangeColor absolute top-8 rounded-sm left-24"></section>
      <section className="flex justify-between mt-3 mx-14 z-30">
        <CardPopular src={popular1} name={"Vanilla Latte"} price={"21 K"} />
        <CardPopular src={popular2} name={"Espresso"} price={"12 K"} />
        <CardPopular src={popular3} name={"Hazelnut Latte"} price={"23 K"} />
      </section>
      <section className="w-full h-64 bg-[#F9D9AA] rounded-[40px] absolute top-44 z-10"></section>
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
    <section className="bg-white py-5 px-4 rounded-lg border-4 border-gray-100 z-20 shadow-lg">
      <Image
        src={src}
        alt="coffe"
        width={250}
        height={250}
        className="rounded-md"
      />
      <section className="flex items-center justify-between text-xl mt-3 font-bold">
        <h3>{name}</h3>
        <h3>{price}</h3>
      </section>
      <section className="mt-3 flex justify-between items-center">
        <section className="font-bold text-orangeColor flex gap-2 text-sm">
          <button className="border-2 border-orangeColor px-2 py-[1px] rounded-lg">
            Hot
          </button>
          <button className="border-2 border-orangeColor px-2 py-[1px] rounded-lg opacity-50">
            Cold
          </button>
        </section>
        <button>
          <MdOutlineShoppingCart className="bg-orangeColor rounded-full text-white border-2 border-orangeColor scale-150 mr-3" />
        </button>
      </section>
    </section>
  );
};
