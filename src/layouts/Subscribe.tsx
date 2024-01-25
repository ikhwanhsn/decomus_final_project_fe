import Image from "next/image";
import subsCoffe from "@/../public/img/subscribe_coffe.png";

const Subscribe = () => {
  return (
    <section className="mx-24">
      <Image src={subsCoffe} alt="subscribe" width={400} height={400} />
      <h1>Subscribe</h1>
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered w-full max-w-xs"
      />
    </section>
  );
};

export default Subscribe;
