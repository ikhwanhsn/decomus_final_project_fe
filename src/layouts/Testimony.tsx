import Image, { StaticImageData } from "next/image";
import testimony1 from "../../public/img/testimony_1.png";
import testimony2 from "../../public/img/testimony_2.png";
import testimony3 from "../../public/img/testimony_3.png";

const Testimony = () => {
  return (
    <section className="mx-24">
      <section>
        <h1>What they say about us</h1>
        <p>
          We always provide the best service and always maintain the quality of
          coffee
        </p>
      </section>
      <section className="flex">
        <CardTestimony
          src={testimony1}
          name={"testimony 1"}
          testimony="The best coffee I have ever had"
        />
        <CardTestimony
          src={testimony2}
          name={"testimony 2"}
          testimony="The best coffee I have ever had"
        />
        <CardTestimony
          src={testimony3}
          name={"testimony 3"}
          testimony="The best coffee I have ever had"
        />
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
      <Image src={src} alt="testimony" width={100} height={100} />
      <section>
        <h3>{name}</h3>
        <p>{testimony}</p>
      </section>
    </section>
  );
};
