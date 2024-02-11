import Image, { StaticImageData } from "next/image";
import popular1 from "@/../public/img/popular_1.png";
import popular2 from "@/../public/img/popular_2.png";
import popular3 from "@/../public/img/popular_3.png";
import { MdOutlineShoppingCart } from "react-icons/md";
import axios from "axios";
import Swal from "sweetalert2";
import { menuList } from "./Navbar";
import { useState } from "react";

const dataCard = [
  {
    src: popular1,
    name: "Vanilla Latte",
    price: "21 K",
  },
  {
    src: popular2,
    name: "Espresso",
    price: "12 K",
  },
  {
    src: popular3,
    name: "Hazelnut Latte",
    price: "23 K",
  },
];

const Popular = () => {
  return (
    <section className="mx-24 text-darkColor relative -mt-80">
      <h1 className="text-2xl font-bold mb-7">Popular Now</h1>
      <section className="w-12 h-1 bg-orangeColor absolute top-8 rounded-sm left-24"></section>
      <section className="flex justify-between mt-3 mx-14 z-30">
        {dataCard.map((item, index) => {
          return (
            <CardPopular
              key={index}
              src={item.src}
              name={item.name}
              price={item.price}
            />
          );
        })}
      </section>
      <section className="w-full h-64 bg-[#F9D9AA] rounded-[40px] absolute top-44 z-10"></section>
    </section>
  );
};

export default Popular;

type CardPopularProps = {
  src: StaticImageData;
  name: string;
  price: string;
};

export const CardPopular = ({ src, name, price }: CardPopularProps) => {
  const [selctedMenu, setSelctedMenu] = useState("");
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const pemesan =
      (document.getElementById("nama") as HTMLInputElement)?.value || "Anonim";
    const dipesan =
      (document.getElementById("pesanan") as HTMLSelectElement)?.value ||
      "Anonim";
    const harga =
      (document.getElementById("harga") as HTMLInputElement)?.value || "Anonim";
    try {
      await axios
        .put("https://harsh-ball-production.up.railway.app/api/pemesans/0", {
          pemesan: pemesan,
          dipesan: dipesan,
          harga: harga,
          tanggalpesan: new Date(),
        })
        .then((res) => {
          localStorage.setItem("namaPemesan", res.data.pemesan);
          return "success";
        })
        .catch((err) => {
          return "error";
        });
      document.getElementById("my_modal_1")?.remove();
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Your order successfully added!",
        showConfirmButton: false,
        timer: 1500,
      });
      setTimeout(() => {
        window.location.reload();
      }, 1500);
    } catch (error) {
      return "error";
    }
  };
  return (
    <section className="bg-white py-5 px-4 rounded-lg border-4 border-gray-100 z-20 shadow-lg">
      <Image
        src={src}
        alt="coffe"
        width={250}
        height={250}
        className="rounded-md"
      />
      <section className="flex items-center justify-between text-xl mt-3 font-bold">
        <h3>{name}</h3>
        <h3>{price}</h3>
      </section>
      <section className="mt-3 flex justify-between items-center">
        <section className="font-bold text-orangeColor flex gap-2 text-sm">
          <button className="border-2 border-orangeColor px-2 py-[1px] rounded-lg">
            Hot
          </button>
          <button className="border-2 border-orangeColor px-2 py-[1px] rounded-lg opacity-50">
            Cold
          </button>
        </section>
        <button
          className=""
          onClick={() => {
            (
              document.getElementById("my_modal_1") as HTMLDialogElement
            )?.showModal();
            setSelctedMenu(name);
            const pesananElement = window.document.getElementById(
              "pesanan"
            ) as HTMLInputElement;
            if (pesananElement) {
              pesananElement.value = name;
            } else {
              console.error("Element dengan ID 'pesanan' tidak ditemukan.");
            }
            const hargaElement = window.document.getElementById(
              "harga"
            ) as HTMLInputElement;
            if (hargaElement) {
              hargaElement.value = price.split(" ")[0] + "000";
            } else {
              console.error("Element dengan ID 'harga' tidak ditemukan.");
            }
          }}
        >
          <MdOutlineShoppingCart className="bg-orangeColor rounded-full text-white border-2 border-orangeColor scale-150 mr-3 hover:bg-orange-500 hover:border-orange-500" />
        </button>
        <dialog id="my_modal_1" className="modal">
          <div className="modal-box">
            <form onSubmit={(e) => handleSubmit(e)}>
              <h3 className="font-bold text-lg mb-3">Konfirmasi Pesanan</h3>
              <label htmlFor="nama" className="">
                Nama lengkap :
              </label>
              <br />
              <input
                type="text"
                name="nama"
                required
                id="nama"
                className="input input-bordered my-2 w-full"
              />
              <label htmlFor="pesanan" className="">
                Pesanan :
              </label>
              <br />
              {/* <input
                type="text"
                name="pesanan"
                id="pesanan"
                value={name}
                readOnly
                className="input input-bordered my-2 w-full"
              /> */}
              <select
                name="pesanan"
                id="pesanan"
                onChange={(e) => setSelctedMenu(e.target.value)}
                className="select select-bordered w-full"
              >
                {menuList.map((item, index) => {
                  return (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  );
                })}
              </select>
              <br />
              <label htmlFor="harga" className="">
                Harga :
              </label>
              <br />
              <input
                type="text"
                name="harga"
                id="harga"
                value={
                  selctedMenu === menuList[0]
                    ? "21000"
                    : selctedMenu === menuList[1]
                    ? "12000"
                    : selctedMenu === menuList[2]
                    ? "23000"
                    : "12000"
                }
                readOnly
                className="input input-bordered mt-2 w-full"
              />
              <button className="btn btn-success text-white mt-3" type="submit">
                Submit
              </button>
            </form>
            <section className="modal-action flex ">
              <form method="dialog" className="absolute bottom-12 left-24 ml-3">
                <button className="btn btn-error text-white">Cancel</button>
              </form>
            </section>
          </div>
        </dialog>
      </section>
    </section>
  );
};
