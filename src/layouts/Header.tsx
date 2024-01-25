import Image from "next/image";
import coffe from "../../public/img/header_coffe.png";

const Header = () => {
  return (
    <section className="flex ml-24">
      <section>
        <h1>
          Enjoy your <span>coffee</span> before your activity
        </h1>
        <p>
          Boost your productivity and build your mood with a glass of coffee in
          the morning
        </p>
        <section>
          <button>Order Now</button>
          <a href="">More menu</a>
        </section>
      </section>
      <section>
        <Image src={coffe} width={400} height={400} alt="coffee" />
      </section>
    </section>
  );
};

export default Header;
