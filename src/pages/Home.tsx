import { memo } from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCopy, faThumbsUp} from "@fortawesome/free-regular-svg-icons";
import LanguageSwichingTab from '../components/atoms/LanguageSwichingTab';
import Footer from '../components/organisms/layout/Footer';
import GoodTotalGoogleAndDeepl from '../components/organisms/GoodTotalGoogleAndDeepl';
import Header from "../components/organisms/layout/Header";
import { TranslatedTextArea } from "../components/molucules/TranslatedTextArea";

export const Home = memo(() => {

  console.log("レンダリングされました")

  return (

    <>
    <Header />
    <div className="justify-center pt-5">
      <GoodTotalGoogleAndDeepl />
      <LanguageSwichingTab />
      <div className='justify-center'>
        <TranslatedTextArea />
      </div>
      <div>
        <div className='mt-12 justify-center'>
          <div className='md:flex justify-center text-center'>
          </div>
        </div>
        <div className='flex justify-center items-center '>
        {/* <TextTranslatedWithGoogle /> */}
          <button className='w-1/3 mx-8' disabled>
            <div className="fa-2x"><p className="text-blue-500">Google</p>
              <FontAwesomeIcon icon={faThumbsUp} className=" hover:text-blue-500 transision-all duration-300 cursor-pointer mr-3" />
              <FontAwesomeIcon icon={faCopy} />
            </div>
          </button>
          {/* <TextTranslatedWithDeepL /> */}
          <button className='w-1/3 mx-8' disabled>
            <div className="fa-2x"> <p className="text-green-500">DeepL</p>
              <FontAwesomeIcon icon={faThumbsUp} className="fas fa-seedling hover:text-green-500 transision-all duration-300 cursor-pointer mr-3" />
              <FontAwesomeIcon icon={faCopy} />
            </div>
          </button>
        </div>
      </div>
    </div><Footer />
    </>
  )
})