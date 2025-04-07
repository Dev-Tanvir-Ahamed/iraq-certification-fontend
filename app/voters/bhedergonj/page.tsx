import Link from "next/link";

const Bhedergonj = () => {
  return (
    <div className="flex flex-col md:flex-row gap-5 justify-between p-4 my-10">
      <Link
        href="/voters/bhedergonj/word-01"
        className="bg-green-700 text-white font-bold py-2 px-4 rounded-md hover:bg-green-800 transition duration-300 ease-in-out"
      >
        Word No 1
      </Link>
      <Link
        href="/voters/bhedergonj/word-02"
        className="bg-green-700 text-white font-bold py-2 px-4 rounded-md hover:bg-green-800 transition duration-300 ease-in-out"
      >
        Word No 2
      </Link>
      <Link
        href="/voters/bhedergonj/word-03"
        className="bg-green-700 text-white font-bold py-2 px-4 rounded-md hover:bg-green-800 transition duration-300 ease-in-out"
      >
        Word No 3
      </Link>
      <Link
        href="/voters/bhedergonj/word-04"
        className="bg-green-700 text-white font-bold py-2 px-4 rounded-md hover:bg-green-800 transition duration-300 ease-in-out"
      >
        Word No 4
      </Link>
      <Link
        href="/voters/bhedergonj/word-05"
        className="bg-green-700 text-white font-bold py-2 px-4 rounded-md hover:bg-green-800 transition duration-300 ease-in-out"
      >
        Word No 5
      </Link>
    </div>
  );
};

export default Bhedergonj;
