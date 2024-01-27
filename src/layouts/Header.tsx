import Image from "next/image";
import coffe from "../../public/img/header_coffe.png";
import { MdOutlineShoppingCart } from "react-icons/md";
import bgCoffe from "../../public/img/bg_coffe_1.png";
import bgCoffe2 from "../../public/img/bg_coffe_2.png";

const Header = () => {
  return (
    <section className="flex pb-96 pt-32 justify-between px-24 bg-background text-darkColor">
      <Image
        src={bgCoffe}
        width={400}
        height={400}
        alt="coffee"
        className="absolute top-0 right-0 z-0"
      />
      <section>
        <h1 className="text-3xl font-bold mb-7 leading-[3rem]">
          Enjoy your <span className="text-orangeColor">coffee</span>
          <br /> before your activity
        </h1>
        <p className="leading-7 mb-7">
          Boost your productivity and build your
          <br /> mood with a glass of coffee in the morning
        </p>
        <section className="flex gap-7 items-center">
          <a href="#product">
            <button className="py-2 text-sm px-5 text-white bg-darkColor rounded-full flex items-center gap-2">
              Order Now
              <MdOutlineShoppingCart className="bg-orangeColor rounded-full border-2 border-orangeColor" />
            </button>
          </a>
          <a className="text-orangeColor text-sm font-bold" href="#special">
            More menu
          </a>
        </section>
      </section>
      <section className="z-30">
        <Image src={coffe} width={400} height={400} alt="coffee" />
      </section>
      <Image
        src={bgCoffe2}
        width={400}
        height={400}
        alt="coffee"
        id="product"
        className="absolute -bottom-24 right-left z-0"
      />
    </section>
  );
};

export default Header;
