import Image, { StaticImageData } from "next/image";
import special1 from "@/../public/img/special_1.png";
import special2 from "@/../public/img/special_2.png";
import special3 from "@/../public/img/special_3.png";
import special4 from "@/../public/img/special_4.png";
import special5 from "@/../public/img/special_5.png";
import special6 from "@/../public/img/special_6.png";
import { MdOutlineShoppingCart } from "react-icons/md";
import { menuList } from "./Navbar";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const Special = () => {
  return (
    <section className="mx-24 pt-32 relative" id="special">
      <h1 className="text-2xl font-bold mb-12">Special menu for you</h1>
      <section className="w-20 h-1 bg-orangeColor absolute top-40 rounded-sm left-40"></section>
      <section className="grid grid-cols-3 gap-7">
        <CardSpecial
          src={special1}
          name="Sandwich"
          price="12 K"
          desc="bread with meat and vegetables"
        />
        <CardSpecial
          src={special2}
          name="Hot Milk"
          price="12 K"
          desc="Hot Milk with less sugar & cream"
        />
        <CardSpecial
          src={special3}
          name="Coffe Ice Cream"
          price="12 K"
          desc="Coffe with ice cream vanilla"
        />
        <CardSpecial
          src={special4}
          name="Cappucino"
          price="12 K"
          desc="Hot Cappucino"
        />
        <CardSpecial
          src={special5}
          name="Moccacinno"
          price="12 K"
          desc="Hot Moccacino "
        />
        <CardSpecial
          src={special6}
          name="Waffle Ice Cream"
          price="12 K"
          desc="Wafle with Ice cream"
        />
      </section>
    </section>
  );
};

export default Special;

type CardSpecialProps = {
  src: StaticImageData;
  name: string;
  price: string;
  desc: string;
};

export const CardSpecial = ({ src, name, price, desc }: CardSpecialProps) => {
  const [selctedMenu, setSelctedMenu] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    // const orderId = randomBytes(4).toString("hex");
    const pemesan =
      (document.getElementById("namaSpecial") as HTMLInputElement).value ||
      "Anonim";
    const dipesan =
      (document.getElementById("pesananSpecial") as HTMLSelectElement).value ||
      "Anonim";
    const harga =
      (document.getElementById("hargaSpecial") as HTMLInputElement).value ||
      "Anonim";
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
      document.getElementById("my_modal_13")?.remove();
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
    <section className="bg-white py-6 px-5 rounded-lg border z-20 shadow-md">
      <Image
        src={src}
        alt="coffe"
        className="rounded-lg"
        // width={200}
        // height={200}
      />
      <section className="flex items-center justify-between text-xl mt-4 font-bold mx-3">
        <h3 className="font-bold">{name}</h3>
        <h3>{price}</h3>
      </section>
      <section className="flex justify-between items-center mt-3 mx-3">
        <p className="w-4/6">{desc}</p>
        <button
          onClick={() => {
            (
              document.getElementById("my_modal_13") as HTMLDialogElement
            )?.showModal();
            setSelctedMenu(name);
            const pesananSpecial = document.getElementById(
              "pesananSpecial"
            ) as HTMLSelectElement;
            const hargaSpecial = document.getElementById(
              "hargaSpecial"
            ) as HTMLInputElement;
            if (pesananSpecial) {
              pesananSpecial.value = name;
            }
            if (hargaSpecial) {
              hargaSpecial.value = price.split(" ")[0] + "000";
            }
          }}
        >
          <MdOutlineShoppingCart className="bg-orangeColor rounded-full text-white border-2 border-orangeColor scale-150 mr-3" />
        </button>
        <dialog id="my_modal_13" className="modal">
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
                id="namaSpecial"
                className="input input-bordered my-2 w-full"
              />
              <label htmlFor="pesanan" className="">
                Pesanan :
              </label>
              <br />
              <select
                name="pesanan"
                id="pesananSpecial"
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
                id="hargaSpecial"
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
