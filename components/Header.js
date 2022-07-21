import { useState } from "react";
import { MenuAlt2Icon, XIcon } from "@heroicons/react/solid";
import Link from "next/link";

function Header({ color }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`fixed top-0 left-0 flex justify-between w-full h-[75px] bg-${color}`}
    >
      {!isOpen ? (
        <button
          type="button"
          className="fixed top-2 left-2 z-10 cursor-pointer hover:scale-125 ease-in-out duration-200"
          onClick={() => setIsOpen(!isOpen)}
        >
          <MenuAlt2Icon className="h-14 w-14 text-purple" />
        </button>
      ) : (
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="fixed top-4 right-4 z-20 cursor-pointer hover:scale-125 ease-in-out duration-500"
        >
          <XIcon className="h-14 w-14 text-purple" />
        </button>
      )}
      <nav
        className={`top-0 left-0 fixed bg-green w-[100vw] h-full z-10 ${
          isOpen
            ? "translate-x-0 shadow-[0px_0px_0px_600px_#E4C1F9]"
            : "-translate-x-full shadow-[0px_0px_0px_0px_#E4C1F9]"
        } ease-in-out duration-700`}
      >
        <ul className="h-[90%] flex flex-col justify-center items-center gap-8">
          <li>
            <Link href="/parlours">
              <p
                onClick={() => setIsOpen(!isOpen)}
                className="text-2xl cursor-pointer font-black hover:text-pink hover:text-4xl tracking-wide md:text-5xl md:hover:text-6xl"
              >
                LISTE DES GLACIERS
              </p>
            </Link>
          </li>
          <li>
            <Link href="/">
              <p
                onClick={() => setIsOpen(!isOpen)}
                className="text-2xl cursor-pointer font-black hover:text-pink hover:text-4xl tracking-wide md:text-5xl md:hover:text-6xl"
              >
                MES FAVORIS
              </p>
            </Link>
          </li>
          <li>
            <Link href="/">
              <p
                onClick={() => setIsOpen(!isOpen)}
                className="text-2xl cursor-pointer font-black hover:text-pink hover:text-4xl tracking-wide md:text-5xl md:hover:text-6xl"
              >
                MON PROFIL
              </p>
            </Link>
          </li>
          <li>
            <Link href="/">
              <p className="text-2xl cursor-pointer font-black hover:text-pink hover:text-4xl tracking-wide md:text-5xl md:hover:text-6xl">
                SE DECONNECTER
              </p>
            </Link>
          </li>
        </ul>
      </nav>

      <div className="fixed right-4 top-[10px] h-14 w-14 cursor-pointer">
        <Link href="/">
          <img
            src="/image/logoHome.jpg"
            alt="homepage ice cream"
            className="rounded-full hover:scale-110 ease-in-out duration-500"
          />
        </Link>
      </div>
    </div>
  );
}

export default Header;
