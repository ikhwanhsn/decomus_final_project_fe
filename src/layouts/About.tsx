import Image from "next/image";
import aboutCoffe from "../../public/img/about_coffe.png";
import bgAbout from "../../public/img/bg-about2.png";

const About = () => {
  return (
    <section className="flex text-darkColor bg-background px-24 relative mt-56 pb-24">
      <Image
        src={bgAbout}
        alt="about"
        className="w-full h-full absolute top-0 left-0 opacity-20"
      />
      <Image
        src={aboutCoffe}
        alt="about"
        width={350}
        height={350}
        className="border-4 border-white shadow-lg rounded-xl -mt-24 z-20 ml-24"
      />
      <section className="mt-24 mr-24 ml-40">
        <h1 className="text-2xl font-bold mb-5">About us</h1>
        <section className="py-[1px] w-8 h-1 bg-orangeColor absolute top-32 left-96 ml-96"></section>
        <h3 className="mb-5 text-xl font-bold">
          We provide quality coffee,
          <br /> and ready to deliver.
        </h3>
        <p className="leading-7">
          We are a company that makes and distributes
          <br /> delicious drinks. our main product is made with a<br /> secret
          recipe and available in stores worldwide.
        </p>
        <a href="#special">
          <button className="mt-5 py-2 text-sm px-5 text-orangeColor bg-darkColor rounded-full">
            Get your coffe
          </button>
        </a>
      </section>
    </section>
  );
};

export default About;
