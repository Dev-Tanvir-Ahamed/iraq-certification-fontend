import Link from "next/link";

const BhedergonjWordNo1 = () => {
  return (
    <div className="space-x-3 p-4 my-10">
      <Link
        href="/bhedergonj/word-01/female"
        className="bg-green-700 text-white font-bold py-2 px-4 rounded-md hover:bg-green-800 transition duration-300 ease-in-out"
      >
        Female
      </Link>
      <Link
        href="/voters/bhedergonj/word-01/male"
        className="bg-green-700 text-white font-bold py-2 px-4 rounded-md hover:bg-green-800 transition duration-300 ease-in-out"
      >
        Male
      </Link>
    </div>
  );
};

export default BhedergonjWordNo1;
