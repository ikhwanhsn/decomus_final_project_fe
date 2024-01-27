import Image from "next/image";
import subsCoffe from "@/../public/img/subscribe_coffe.png";

const Subscribe = () => {
  return (
    <section className="mx-24 mb-44">
      <Image
        src={subsCoffe}
        alt="subscribe"
        width={400}
        height={400}
        className="w-full"
      />
      <section className="-mt-56 text-center">
        <h1 className="text-2xl font-bold text-white mb-5">
          Subscribe to get 50% discount price
        </h1>
        <input
          type="text"
          placeholder="Email address"
          className="input input-bordered w-full max-w-xs rounded-full pr-24"
        />
        <button className="bg-darkColor text-white rounded-full py-2 px-3 text-sm -ml-24">
          Order now
        </button>
      </section>
    </section>
  );
};

export default Subscribe;
