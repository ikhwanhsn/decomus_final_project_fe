import About from "@/layouts/About";
import Delivery from "@/layouts/Delivery";
import Footer from "@/layouts/Footer";
import Header from "@/layouts/Header";
import Navbar from "@/layouts/Navbar";
import Popular from "@/layouts/Popular";
import Special from "@/layouts/Special";
import Subscribe from "@/layouts/Subscribe";
import Testimony from "@/layouts/Testimony";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Header />
      <Popular />
      <Delivery />
      <About />
      <Special />
      <Testimony />
      <Subscribe />
      <Footer />
    </main>
  );
}
