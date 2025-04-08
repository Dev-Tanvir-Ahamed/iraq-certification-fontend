"use client";

import Image from "next/image";
import Link from "next/link";
import img from "../public/images/banner.jpg";

const VotersPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Image src={img} alt="banner" className="w-full object-cover" />
      <div className="flex flex-col md:flex-row justify-around p-4 my-10">
        <Link
          href="/bhedergonj"
          className="bg-green-700 text-white font-bold py-2 px-4 rounded-md hover:bg-green-800 transition duration-300 ease-in-out"
        >
          ভেদেরগঞ্জ{" "}
        </Link>
        <Link
          href="/voter/2"
          className="bg-green-700 text-white font-bold py-2 px-4 rounded-md hover:bg-green-800 transition duration-300 ease-in-out"
        >
          আর্শিনগর
        </Link>
        <Link
          href="/voter/3"
          className="bg-green-700 text-white font-bold py-2 px-4 rounded-md hover:bg-green-800 transition duration-300 ease-in-out"
        >
          চরভাগা
        </Link>
        <Link
          href="/voter/4"
          className="bg-green-700 text-white font-bold py-2 px-4 rounded-md hover:bg-green-800 transition duration-300 ease-in-out"
        >
          চরকুমারিয়া
        </Link>
        <Link
          href="/voter/5"
          className="bg-green-700 text-white font-bold py-2 px-4 rounded-md hover:bg-green-800 transition duration-300 ease-in-out"
        >
          ছয়গাঁও
        </Link>
        <Link
          href="/voter/6"
          className="bg-green-700 text-white font-bold py-2 px-4 rounded-md hover:bg-green-800 transition duration-300 ease-in-out"
        >
          চর সেনসাস
        </Link>

        <Link
          href="/voter/7"
          className="bg-green-700 text-white font-bold py-2 px-4 rounded-md hover:bg-green-800 transition duration-300 ease-in-out"
        >
          দক্ষিণ তারর্বুনিয়া
        </Link>
      </div>
    </div>
  );
};

export default VotersPage;
