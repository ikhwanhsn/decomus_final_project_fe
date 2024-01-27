import Image, { StaticImageData } from "next/image";
import testimony1 from "../../public/img/testimony_1.png";
import testimony2 from "../../public/img/testimony_2.png";
import testimony3 from "../../public/img/testimony_3.png";
import bgAbout from "../../public/img/bg-about2.png";

const Testimony = () => {
  return (
    <section className="mx-24 relative mt-32 mb-80">
      <section className="w-3/4 -z-10 h-[28rem] bg-background absolute top-0 -left-28 rounded-lg"></section>
      <Image
        src={bgAbout}
        alt="testimony"
        width={400}
        height={400}
        className="w-3/4 opacity-30 -ml-28 h-[28rem]"
      />
      <section className="flex -mt-80">
        <section className="mt-12">
          <h1 className="text-2xl font-bold tracking-wide">
            What they say about us
          </h1>
          <p className="mt-5 tracking-wider">
            We always provide the best <br /> and always maintain the quality of
            <br /> coffee
          </p>
        </section>
        <section className="flex z-30 right-0 gap-20 absolute">
          <CardTestimony
            src={testimony1}
            name={"Naura"}
            testimony="I really love the cappucino, the coffee was very smooth  "
          />
          <CardTestimony
            src={testimony2}
            name={"John"}
            testimony="this coffee shop is very convenient"
          />
          <CardTestimony
            src={testimony3}
            name={"Azura"}
            testimony="the coffee menu here is very much"
          />
        </section>
      </section>
    </section>
  );
};

export default Testimony;

type CardTestimonyProps = {
  src: StaticImageData;
  name: string;
  testimony: string;
};

export const CardTestimony = ({ src, name, testimony }: CardTestimonyProps) => {
  return (
    <section>
      <Image
        src={src}
        alt="testimony"
        width={200}
        height={200}
        className="w-44 h-56 z-10"
      />
      <section className="bg-[#FFCB7C] w-52 rounded-lg px-3 py-2 border-4 border-orange-200 border-opacity-30 -mt-32 z-30 ml-7 absolute">
        <h3 className="font-bold text-lg">{name}</h3>
        <p className="text-sm leading-6">{testimony}</p>
      </section>
    </section>
  );
};
