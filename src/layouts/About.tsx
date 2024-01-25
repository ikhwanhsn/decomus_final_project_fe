import Image from "next/image";
import aboutCoffe from "../../public/img/about_coffe.png";

const About = () => {
  return (
    <section className="flex justify-between mx-24">
      <Image src={aboutCoffe} alt="about" width={400} height={400} />
      <section>
        <h1>About Us</h1>
        <h3>We provide quality coffee, and ready to deliver.</h3>
        <p>
          We are a company that makes and distributes delicious drinks. our main
          product is made with a secret recipe and available in stores
          worldwide.
        </p>
        <button>Get your coffe</button>
      </section>
    </section>
  );
};

export default About;
