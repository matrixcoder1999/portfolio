import React from "react";

import Image from "next/image";
import Link from "next/link";
import {
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaLinkedinIn,
} from "react-icons/fa";
import { BriefIntro } from "../data";

const Footer = () => {
  return (
    <footer className="relative py-4 bg-gray-900 border-t-2 border-gray-400 w-full
      flex flex-col px-4 md:px-6 lg:px-10 xl:px-16
     ">
        <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row md:items-center lg:items-center xl:items-center md:justify-between lg:justify-between xl:justify-between">
            <div className="flex items-center">
                <Image
                    src="/assets/logo.jpeg" width={65} height={65}
                    className="rounded-full w-[65px] h-[65px] mb-2 md:mb-0 lg:mb-0 xl:mb-0 mr-7"
                />
                <a
                    className="rounded-full shadow-lg text-blue-400 cursor-pointer hover:scale-105 ease-in duration-300 mr-4"
                    href={BriefIntro[0].linkedin}
                    target="_blank"
                >
                    <FaLinkedinIn size={30} />
                </a>
                <a
                    className="rounded-full shadow-lg text-blue-400 cursor-pointer hover:scale-105 ease-in duration-300 mr-4"
                    href={BriefIntro[0].gitHub}
                    target="_blank"
                >
                    <FaGithub size={30} />
                </a>
                <a
                    className="rounded-full shadow-lg text-blue-400 cursor-pointer hover:scale-105 ease-in duration-300"
                    href={BriefIntro[0].instagram}
                    target="_blank"
                >
                    <FaInstagram size={30} />
                </a>
            </div>
            <div>
                <ul
                    className={`gap-2 flex flex-col md:flex-row lg:flex-row xl:flex-row text-white`}
                >
                    <li className="text-small uppercase hover:bg-gray-500 rounded-full py-1 px-3" style={{ width: 'max-content' }}>
                        <Link href="/#intro" prefetch={false}>
                            Home
                        </Link>
                    </li>

                    <li className="text-small uppercase hover:bg-gray-500 rounded-full py-1 px-3" style={{ width: 'max-content' }}>
                        <Link href="/#about" prefetch={false}>
                            About
                        </Link>
                    </li>

                    <li className="text-small uppercase hover:bg-gray-500 rounded-full py-1 px-3" style={{ width: 'max-content' }}>
                        <Link href="/#skill" prefetch={false}>
                            Skills
                        </Link>
                    </li>

                    <li className="text-small uppercase hover:bg-gray-500 rounded-full py-1 px-3" style={{ width: 'max-content' }}>
                        <Link
                            href="/Experience"
                            prefetch={false}
                        >
                            Experience
                        </Link>
                    </li>
                    <li className="text-small uppercase hover:bg-gray-500 rounded-full py-1 px-3" style={{ width: 'max-content' }}>
                        <Link
                            href="/Project"
                            prefetch={false}
                        >
                            Projects
                        </Link>
                    </li>
                    <li className="text-small uppercase hover:bg-gray-500 rounded-full py-1 px-3" style={{ width: 'max-content' }}>
                        <Link href="/#contact" prefetch={false}>
                            {" "}
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
        <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row md:items-center lg:items-center xl:items-center md:justify-between lg:justify-between xl:justify-between">
            <div className="text-white py-2">
                Copyright © George Georgiou Hadjigeorgiou
            </div>
        </div>
    </footer>
  );
};

export default Footer;
