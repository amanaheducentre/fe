import Image from "next/image";
import Link from "next/link";
import NavbarButton from "../buttons/NavbarButton";
import { Bars3Icon } from "@heroicons/react/24/solid";

export default function MainNavbar() {
  return (
    <div className="w-full h-max bg-base-200 sticky top-0 z-50">
      <div className="flex flex-col items-center">
        <div className="navbar w-[90%] md:w-[80%]">
          <div className="navbar-start hidden md:block w-full">
            <div className="font-bold md:text-xl text-black flex gap-3 md:gap-6">
              <NavbarButton text="ABOUT US" to="#" additionalClasses="hover:text-indigo-600" />
              <div className="dropdown">
                <div tabIndex={0} role="button" className="hover:text-green-600 transition-colors duration-200">
                  PROGRAM
                </div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                  <li>
                    <Link href="#">SERASI</Link>
                  </li>
                  <li>
                    <Link href="#">TPQ</Link>
                  </li>
                  <li>
                    <Link href="#">CORONA</Link>
                  </li>
                  <li>
                    <Link href="#">ARUNIKA</Link>
                  </li>
                </ul>
              </div>
              <NavbarButton text="TESTIMONI" to="#" additionalClasses="hover:text-red-600" />
            </div>
          </div>
          <div className="navbar-start md:navbar-center md:flex md:justify-center z-50">
            <Link href="/">
              <Image src="amanah-logo.png" alt="Amanah Edu Centre" width="80" height="80" />
            </Link>
          </div>
          <div className="navbar-end w-full">
            <div className="hidden md:block">
              <button className="btn btn-lg rounded-full">
                <span className="font-black text-xl">JOIN US</span>
              </button>
            </div>
            <div className="md:hidden">
              <div className="drawer drawer-end">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content z-50">
                  <label htmlFor="my-drawer" className="drawer-button">
                    <Bars3Icon className="size-16" />
                  </label>
                </div>
                <div className="drawer-side">
                  <label htmlFor="my-drawer" aria-label="close sidebar" className="ease-out"></label>
                  <div className="menu bg-base-200 text-base-content font-bold min-h-full w-full pt-40 p-4 z-50 flex flex-col items-center">
                    <ul className="menu bg-base-200 rounded-box w-[50%] text-4xl flex flex-col">
                      <li>
                        <Link href="#">ABOUT US</Link>
                      </li>
                      <li>
                        <details open>
                          <summary>PROGRAM</summary>
                          <ul>
                            <li>
                              <Link href="#">SERASI</Link>
                            </li>
                            <li>
                              <Link href="#">TPQ</Link>
                            </li>
                            <li>
                              <Link href="#">CORONA</Link>
                            </li>
                            <li>
                              <Link href="#">ARUNIKA</Link>
                            </li>
                          </ul>
                        </details>
                      </li>
                      <li>
                        <Link href="#">TESTIMONI</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
