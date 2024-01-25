import Image from "next/image";
import coffe from "@/../public/img/about_coffe.png";

const Footer = () => {
  return (
    <section className="mx-24 flex">
      <Image src={coffe} alt="footer" width={400} height={400} />
      <section className="flex justify-between">
        <ul>
          <li>About</li>
          <li>Our Story</li>
          <li>FAQ</li>
          <li>Careers</li>
        </ul>
        <ul>
          <li>About</li>
          <li>Our Story</li>
          <li>FAQ</li>
          <li>Careers</li>
        </ul>
        <ul>
          <li>About</li>
          <li>Our Story</li>
          <li>FAQ</li>
          <li>Careers</li>
        </ul>
        <ul>
          <li>About</li>
          <li>Our Story</li>
          <li>FAQ</li>
          <li>Careers</li>
        </ul>
      </section>
    </section>
  );
};

export default Footer;
