// import dynamic from 'next/dynamic'
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { BsPersonFill } from "react-icons/bs";
import React, { useState, useEffect } from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";

// const Link = dynamic(() => import("next/link"))
// const Image = dynamic(() => import("next/image"))

const Nav = () => {
  const router = useRouter();

  const [mobile, setMobile] = useState(false);

  const handleMobile = () => {
    setMobile(!mobile);
  };

  const [fixed, setFixed] = useState(false);

  const FixedChange = () => {
    if (window.scrollY >= 100) {
      setFixed(true);
    } else {
      setFixed(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", FixedChange);
  }, []);

  return (
    <nav
      className={`px-4 md:px-6 lg:px-10 xl:px-16 ease-in duration-100 bg-gray-900 transition-colors ${
        fixed
          ? "fixed w-full h-20 shadow-md z-[100]  bg-gray-900 shadow-gray-900  border-b-2 border-[black]"
          : "  w-full h-20 z-[100] "
      } `}
    >
      <div className="flex text-white justify-between items-center w-full h-full">
        <div className="relative w-[65px] h-[65px]">
          <Image
            fill
            src="/assets/logo.jpeg"
            className="absolute object-fill rounded-full  "
          />
        </div>
        <div>
          <ul
            className={` ${
              fixed ? "gap-2 hidden md:flex text-white" : " hidden md:flex"
            } md:hidden lg:flex `}
          >
            <li className="text-small uppercase hover:bg-gray-500 rounded-full py-1 px-3">
              <Link href="/#intro" prefetch={false}>
                Home
              </Link>
            </li>

            <li className="text-small uppercase hover:bg-gray-500 rounded-full py-1 px-3">
              <Link href="/#about" prefetch={false}>
                About
              </Link>
            </li>

            <li className="text-small uppercase hover:bg-gray-500 rounded-full py-1 px-3">
              <Link href="/#skill" prefetch={false}>
                Skills
              </Link>
            </li>

            <li className="text-small uppercase hover:bg-gray-500 rounded-full py-1 px-3">
              <Link
                href="/Experience"
                prefetch={false}
                onClick={() => setMobile(false)}
              >
                Experience
              </Link>
            </li>
            <li className="text-small uppercase hover:bg-gray-500 rounded-full py-1 px-3">
              <Link
                href="/Project"
                prefetch={false}
                onClick={() => setMobile(false)}
              >
                Projects
              </Link>
            </li>
            <li className="text-small uppercase hover:bg-gray-500 rounded-full py-1 px-3">
              <Link href="/#contact" prefetch={false}>
                {" "}
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className={`text-white  lg:hidden`} onClick={() => handleMobile()}>
          <AiOutlineMenu size={35} />
        </div>
      </div>

      <div
        className={` ${
          mobile
            ? "z-[10] md:hidden fixed left-0 top-0 w-full h-screen bg-[#141313b2] "
            : " z-[10] "
        }  `}
      >
        <div
          className={
            mobile
              ? "fixed  left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-gray-900 p-10 ease-in duration-500  "
              : " fixed left-[-100%] top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-gray-900 p-10 ease-in duration-300 text-gray-200 z-[10] "
          }
        >
          <div className="ml-[-20px] text-gray-200">
            <div className="flex w-full justify-end">
              <div
                onClick={() => handleMobile()}
                className="rounded-full shadow-lg shadow-gray-400 cursor-pointer p-3 "
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="flex  items-center w-full h-full mt-[16px]">
              <h2>George Georgiou</h2>
            </div>
            <div className="border-b border-gray-300 py-5">
              <p className="w-[85%] md:w-[50%]">
                Let's Build the future together
              </p>
            </div>
            <div className="py-4 flex flex-col h-full">
              <ul className="uppercase">
                <li className="text-small hover:bg-gray-500 rounded-full py-2 px-3" style={{ width: 'max-content' }}>
                  <Link
                    href="/#intro"
                    prefetch={false}
                    onClick={() => setMobile(false)}
                  >
                    Home
                  </Link>
                </li>
                <li className="text-small hover:bg-gray-500 rounded-full py-2 px-3" style={{ width: 'max-content' }}>
                  <Link
                    href="/#about"
                    prefetch={false}
                    onClick={() => setMobile(false)}
                  >
                    About
                  </Link>
                </li>
                <li className="text-small hover:bg-gray-500 rounded-full py-2 px-3" style={{ width: 'max-content' }}>
                  <Link
                    href="/#skill"
                    prefetch={false}
                    onClick={() => setMobile(false)}
                  >
                    Skills
                  </Link>
                </li>
                <li className="text-small hover:bg-gray-500 rounded-full py-2 px-3" style={{ width: 'max-content' }}>
                  <Link
                    href="/Experience"
                    prefetch={false}
                    onClick={() => setMobile(false)}
                  >
                    Experience
                  </Link>
                </li>
                <li className="text-small hover:bg-gray-500 rounded-full py-2 px-3" style={{ width: 'max-content' }}>
                  <Link
                    href="/Project"
                    prefetch={false}
                    onClick={() => setMobile(false)}
                  >
                    Projects
                  </Link>
                </li>
                <li className="text-small hover:bg-gray-500 rounded-full py-2 px-3" style={{ width: 'max-content' }}>
                  <Link
                    href="/#contact"
                    prefetch={false}
                    onClick={() => setMobile(false)}
                  >
                    Contact
                  </Link>
                </li>
              </ul>

              <div className="absolute bottom-3 left-5 right-5">
                <p className="uppercase tracking-widest text-[gray]">
                  Let's Connect
                </p>
                <div className="flex items-center justify-between py-4 w-full sm:w-[100%] ">
                  <div className="rounded-full shadow-lg shadow-gray-700 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaLinkedinIn />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-700 p-3 cursor-pointer hover:scale-105 ease-in duration-300 ">
                    <FaGithub />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-700 p-3 cursor-pointer hover:scale-105 ease-in duration-300 ">
                    <AiOutlineMail />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-700 p-3 cursor-pointer hover:scale-105 ease-in duration-300 ">
                    <BsPersonFill />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
