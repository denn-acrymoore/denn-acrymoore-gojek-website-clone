import { useEffect } from "react";
import navbar from "../assets/js/navbar";

function NavBar() {
  useEffect(() => {
    navbar();
  }, []);

  return (
    <nav
      id="navbar"
      className="navbar--bg-invisible fixed top-0 z-10 h-auto w-screen overflow-y-scroll bg-gray-900 transition duration-300 ease-in-out"
    >
      <div className="flex items-center justify-between px-10 py-8 xl:px-[7vw]">
        <a href="#">
          <img
            className="h-auto w-32 xl:w-40"
            src="./src/assets/images/nexus-tech.svg"
          />
        </a>
        <ul
          id="navbar-menu"
          className="hidden items-center justify-between gap-x-16 xl:flex"
        >
          <li className="inline-block">
            <a href="#" className="text-lg font-bold text-slate-100">
              <span className="active relative before:absolute before:top-6 before:h-[2px] before:w-full before:scale-x-0 before:bg-slate-100 before:transition before:duration-[250ms] before:hover:scale-x-100 before:[&.active]:scale-x-100">
                Home
              </span>
            </a>
          </li>
          <li className="inline-block">
            <a href="#" className="text-lg font-bold text-slate-100">
              <span className="relative before:absolute before:top-6 before:h-[2px] before:w-full before:scale-x-0 before:bg-slate-100 before:transition before:duration-[250ms] before:hover:scale-x-100 before:[&.active]:scale-x-100">
                Partner with us
              </span>
            </a>
          </li>
          <li className="inline-block">
            <a href="#" className="text-lg font-bold text-slate-100">
              <span className="relative before:absolute before:top-6 before:h-[2px] before:w-full before:scale-x-0 before:bg-slate-100 before:transition before:duration-[250ms] before:hover:scale-x-100 before:[&.active]:scale-x-100">
                Careers
              </span>
            </a>
          </li>
          <li className="inline-block">
            <a href="#" className="text-lg font-bold text-slate-100">
              <span className="relative before:absolute before:top-6 before:h-[2px] before:w-full before:scale-x-0 before:bg-slate-100 before:transition before:duration-[250ms] before:hover:scale-x-100 before:[&.active]:scale-x-100">
                Company
              </span>
            </a>
          </li>
          <li className="inline-block">
            <a href="#" className="text-lg font-bold text-slate-100">
              <span className="relative before:absolute before:top-6 before:h-[2px] before:w-full before:scale-x-0 before:bg-slate-100 before:transition before:duration-[250ms] before:hover:scale-x-100 before:[&.active]:scale-x-100">
                Products
              </span>
            </a>
          </li>
          <li className="inline-block">
            <a href="#" className="text-lg font-bold text-slate-100">
              <span className="relative before:absolute before:top-6 before:h-[2px] before:w-full before:scale-x-0 before:bg-slate-100 before:transition before:duration-[250ms] before:hover:scale-x-100 before:[&.active]:scale-x-100">
                Blog
              </span>
            </a>
          </li>
          <li className="inline-block">
            <a href="#" className="text-lg font-bold text-slate-100">
              <span className="relative before:absolute before:top-6 before:h-[2px] before:w-full before:scale-x-0 before:bg-slate-100 before:transition before:duration-[250ms] before:hover:scale-x-100 before:[&.active]:scale-x-100">
                Help
              </span>
            </a>
          </li>
        </ul>
        <div
          id="burger"
          className="flex h-5 w-5 cursor-pointer flex-col items-center justify-between text-slate-100 xl:hidden"
        >
          <span
            id="burger-line-top"
            className="inline-block h-[2px] w-full rounded-full bg-white transition duration-300 ease-in-out"
          ></span>
          <span
            id="burger-line-middle"
            className="inline-block h-[2px] w-full rounded-full bg-white transition duration-100 ease-in-out"
          ></span>
          <span
            id="burger-line-bottom"
            className="inline-block h-[2px] w-full rounded-full bg-white transition duration-300 ease-in-out"
          ></span>
        </div>
      </div>
      <ul
        id="burger-menu"
        className="flex h-auto flex-col items-start justify-between gap-y-10 px-10 pb-10 transition-all duration-300 ease-in-out xl:hidden"
      >
        <li className="inline-block">
          <a href="#" className="text-2xl font-bold text-slate-100">
            <span className="active relative before:absolute before:top-8 before:h-[2px] before:w-full before:scale-x-0 before:bg-slate-100 before:transition before:duration-[250ms] before:hover:scale-x-100 before:[&.active]:scale-x-100">
              Home
            </span>
          </a>
        </li>
        <li className="inline-block">
          <a href="#" className="text-2xl font-bold text-slate-100">
            <span className="relative before:absolute before:top-8 before:h-[2px] before:w-full before:scale-x-0 before:bg-slate-100 before:transition before:duration-[250ms] before:hover:scale-x-100 before:[&.active]:scale-x-100">
              Partner with us
            </span>
          </a>
        </li>
        <li className="inline-block">
          <a href="#" className="text-2xl font-bold text-slate-100">
            <span className="relative before:absolute before:top-8 before:h-[2px] before:w-full before:scale-x-0 before:bg-slate-100 before:transition before:duration-[250ms] before:hover:scale-x-100 before:[&.active]:scale-x-100">
              Careers
            </span>
          </a>
        </li>
        <li className="inline-block">
          <a href="#" className="text-2xl font-bold text-slate-100">
            <span className="relative before:absolute before:top-8 before:h-[2px] before:w-full before:scale-x-0 before:bg-slate-100 before:transition before:duration-[250ms] before:hover:scale-x-100 before:[&.active]:scale-x-100">
              Company
            </span>
          </a>
        </li>
        <li className="inline-block">
          <a href="#" className="text-2xl font-bold text-slate-100">
            <span className="relative before:absolute before:top-8 before:h-[2px] before:w-full before:scale-x-0 before:bg-slate-100 before:transition before:duration-[250ms] before:hover:scale-x-100 before:[&.active]:scale-x-100">
              Products
            </span>
          </a>
        </li>
        <li className="inline-block">
          <a href="#" className="text-2xl font-bold text-slate-100">
            <span className="relative before:absolute before:top-8 before:h-[2px] before:w-full before:scale-x-0 before:bg-slate-100 before:transition before:duration-[250ms] before:hover:scale-x-100 before:[&.active]:scale-x-100">
              Blog
            </span>
          </a>
        </li>
        <li className="inline-block">
          <a href="#" className="text-2xl font-bold text-slate-100">
            <span className="relative before:absolute before:top-8 before:h-[2px] before:w-full before:scale-x-0 before:bg-slate-100 before:transition before:duration-[250ms] before:hover:scale-x-100 before:[&.active]:scale-x-100">
              Help
            </span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
