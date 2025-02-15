import Image from "next/image";
import Link from "next/link";
import NavbarButton from "../buttons/NavbarButton";

export default function MainNavbar() {
  return (
    <div className="w-full h-max flex flex-col items-center bg-base-100 sticky top-0">
      <div className="flex navbar w-[70%]">
        <div className="navbar-start">
          <div className="font-black text-xl text-black flex gap-6">
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
        <div className="navbar-center">
          <Link href="/">
            <Image src="amanah-logo.png" alt="Amanah Edu Centre" width="96" height="96" />
          </Link>
        </div>
        <div className="navbar-end">
          <button className="btn btn-lg rounded-full">
            <span className="font-black text-xl">JOIN US</span>
          </button>
        </div>
      </div>
    </div>
  );
}
