import Image from "next/image";
import logo from "../../public/img/logo_coffe.png";
import { TbSearch } from "react-icons/tb";
import { useContext, useEffect, useState } from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { randomBytes } from "crypto";
import { BiEdit } from "react-icons/bi";
import { MdDeleteOutline } from "react-icons/md";
import axios from "axios";
import Swal from "sweetalert2";

export const menuList = [
  "Vanilla Latte",
  "Espresso",
  "Hazelnut Latte",
  "Sandwich",
  "Hot Milk",
  "Coffe Ice Cream",
  "Cappucino",
  "Moccacinno",
  "Waffle Ice Cream",
];

const Navbar = () => {
  const [dataPesanan, setDataPesanan] = useState([]);
  const [isActive, setIsActive] = useState(1);
  const [selctedMenu, setSelctedMenu] = useState("");
  const [namaPemesan, setNamaPemesan] = useState("");
  useEffect(() => {
    const namaPemesan: any = localStorage.getItem("namaPemesan");
    setNamaPemesan(namaPemesan);
    const idPemesanan = localStorage.getItem("idPemesanan");
    getPesanan(idPemesanan);
    window.addEventListener("scroll", scrollFunction);
    if (!idPemesanan) {
      const randomInt: any = randomBytes(4).toString("hex");
      localStorage.setItem("idPemesanan", randomInt);
    }
    return () => {
      window.removeEventListener("scroll", scrollFunction);
    };
  }, []);
  async function getPesanan(id: any) {
    const res = await fetch(
      "https://harsh-ball-production.up.railway.app/api/pemesans"
    )
      .then((res) => res.json())
      .then((data) => {
        const namaPemesan: any = localStorage.getItem("namaPemesan");
        const filteredData = data.filter(
          (item: any) => item.pemesan === namaPemesan
        );
        setDataPesanan(filteredData);
        // setDataPesanan(data);
      })
      .catch((err) => console.log(err));
    return res;
  }
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

  const handleEdit = async (id: any) => {
    const data = await dataPesanan.filter((item: any) => item.id === id);
    document.getElementById("my_modal_3")?.remove();
    document.getElementById("my_modal_10")?.showModal();
    if (data) {
      document.getElementById("idHidden").value = id;
      document.getElementById("namaEdit").value = data[0].pemesan;
      document.getElementById("pesananEdit").value = data[0].dipesan;
      document.getElementById("hargaEdit").value = data[0].harga;
    }
  };

  const submitEdit = async (e: any) => {
    e.preventDefault();
    const id = document.getElementById("idHidden").value || "Anonim";
    const pemesan = document.getElementById("namaEdit").value || "Anonim";
    const dipesan = document.getElementById("pesananEdit").value || "Anonim";
    const harga = document.getElementById("hargaEdit").value || "Anonim";
    try {
      await axios
        .put(
          `https://harsh-ball-production.up.railway.app/api/pemesans/${id}`,
          {
            pemesan: pemesan,
            dipesan: dipesan,
            harga: harga,
            tanggalpesan: new Date(),
          }
        )
        .then((res) => {
          localStorage.setItem("namaPemesan", res.data.pemesan);
        })
        .catch((err) => {
          console.log(err);
        });
      document.getElementById("my_modal_10")?.remove();
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Your order successfully edited!",
        showConfirmButton: false,
        timer: 1500,
      });
      setTimeout(() => {
        window.location.reload();
      }, 1500);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id: any) => {
    try {
      await axios
        .delete(
          `https://harsh-ball-production.up.railway.app/api/pemesans/${id}`
        )
        .then(async (res) => {
          document.getElementById("my_modal_3")?.remove();
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your order successfully delete!",
            showConfirmButton: false,
            timer: 1500,
          });
          setTimeout(() => {
            window.location.reload();
          }, 1500);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };

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
          <button
            className="relative hover:bg-gray-200 p-3 rounded-full ml-4 transition-all hover:shadow-sm"
            onClick={() => document.getElementById("my_modal_3")?.showModal()}
          >
            <MdOutlineShoppingCart className="scale-125" />
          </button>
          <dialog id="my_modal_3" className="modal">
            <div className="modal-box">
              <form method="dialog">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>
              <h3 className="font-bold text-lg">
                Pesanan Anda{" "}
                <span className="capitalize">
                  ({namaPemesan ? namaPemesan : "Anonim"})
                </span>
              </h3>
              {dataPesanan.length === 0 && (
                <p className="pt-4 pb-2 text-center">Belum ada pesanan</p>
              )}

              {dataPesanan.length > 0 && (
                <section className="mt-5">
                  <div className="overflow-x-auto">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>Pesanan</th>
                          <th>Harga</th>
                          <th>Tanggal pesan</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {dataPesanan.map((item: any, index) => {
                          const dateTimeString = item.tanggalpesan;
                          const dateOnly = dateTimeString.split("T")[0];
                          return (
                            <tr key={index}>
                              <td>{item.dipesan}</td>
                              <td>{item.harga}</td>
                              <td>{dateOnly}</td>
                              <td className="flex gap-2 mt-1">
                                <button onClick={() => handleEdit(item.id)}>
                                  <BiEdit className="scale-125" />
                                </button>
                                <button onClick={() => handleDelete(item.id)}>
                                  <MdDeleteOutline className="scale-[1.4]" />
                                </button>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </section>
              )}
            </div>
          </dialog>

          <dialog id="my_modal_10" className="modal">
            <div className="modal-box">
              <form onSubmit={(e) => submitEdit(e)}>
                <input
                  type="text"
                  name="idHidden"
                  id="idHidden"
                  className="hidden"
                />
                <h3 className="font-bold text-lg mb-3">Konfirmasi Pesanan</h3>
                <label htmlFor="nama" className="">
                  Nama lengkap :
                </label>
                <br />
                <input
                  type="text"
                  name="nama"
                  required
                  id="namaEdit"
                  className="input input-bordered my-2 w-full"
                />
                <label htmlFor="pesanan" className="">
                  Pesanan :
                </label>
                <br />
                {/* <input
                  type="text"
                  name="pesanan"
                  id="pesananEdit"
                  value={""}
                  readOnly
                  className="input input-bordered my-2 w-full"
                /> */}
                <select
                  name="pesanan"
                  id="pesananEdit"
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
                  id="hargaEdit"
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
                <button
                  className="btn btn-success text-white mt-3"
                  type="submit"
                >
                  Submit
                </button>
              </form>
              <section className="modal-action flex ">
                <form
                  method="dialog"
                  className="absolute bottom-12 left-24 ml-3"
                >
                  <button
                    className="btn btn-error text-white"
                    onClick={() => window.location.reload()}
                  >
                    Cancel
                  </button>
                </form>
              </section>
            </div>
          </dialog>
        </div>
      </section>
    </div>
  );
};

export default Navbar;
