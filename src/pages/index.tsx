import { NextPage } from "next";
import { useRouter } from "next/router";

export const index: NextPage = () => {
  const router = useRouter();
  return (
    <>

    <div className="sm: sm:w-auto mt-36 mx-auto">
    <div className="flex justify-center">

      <h1 className="sm:text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
      DeepLとGoogle翻訳を比較したアプリ
      </h1>
    </div>
    </div>


      <div className="flex justify-center mt-36">
        <button
          className="relative inline-flex items-center justify-cen
        ter p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
          onClick={() => router.push("/home")}
        >
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            翻訳画面へ
          </span>
        </button>
        </div>
    </>
  );
};
export default index;
