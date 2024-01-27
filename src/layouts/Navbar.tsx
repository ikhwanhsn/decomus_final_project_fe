import Image from "next/image";
import logo from "../../public/img/logo_coffe.png";
import { TbSearch } from "react-icons/tb";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isActive, setIsActive] = useState(1);
  useEffect(() => {
    window.addEventListener("scroll", scrollFunction);
    return () => {
      window.removeEventListener("scroll", scrollFunction);
    };
  }, []);
  function scrollFunction() {
    const navbar = document.getElementById("navbar");
    if (navbar) {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        navbar.style.backgroundColor = "white";
      } else {
        navbar.style.backgroundColor = "transparent";
      }
    }
  }
  return (
    <div
      className="navbar bg-base-100 px-24 py-3 grid grid-cols-3 bg-transparent fixed top-0 z-50"
      id="navbar"
      style={{ backgroundColor: "transparent" }}
    >
      <div>
        <a href="/">
          <Image src={logo} width={100} height={100} alt="logo" />
        </a>
      </div>
      <section>
        <ul className="flex gap-5">
          <li onClick={() => setIsActive(1)}>
            <a
              href="#"
              className={`${
                isActive === 1 ? "text-orangeColor" : "text-darkColor"
              } cursor-pointer hover:text-orangeColor`}
            >
              About Us
            </a>
          </li>
          <li onClick={() => setIsActive(2)}>
            <a
              href="#product"
              className={`${
                isActive === 2 ? "text-orangeColor" : "text-darkColor"
              } cursor-pointer hover:text-orangeColor`}
            >
              Our Product
            </a>
          </li>
          <li onClick={() => setIsActive(3)}>
            <a
              href="#delivery"
              className={`${
                isActive === 3 ? "text-orangeColor" : "text-darkColor"
              } cursor-pointer hover:text-orangeColor`}
            >
              Delivery
            </a>
          </li>
        </ul>
      </section>
      <section>
        <TbSearch className="scale-125 absolute ml-3" />
        <input
          type="search"
          placeholder="Type here"
          className="input input-bordered input-md w-full max-w-xs pl-10 mr-2"
        />
        <div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">8</span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
              <div className="card-body">
                <span className="font-bold text-lg">8 Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">
                    View cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Navbar;
