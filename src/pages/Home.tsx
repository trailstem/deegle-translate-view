import { memo } from "react"

import Footer from '../components/organisms/layout/Footer';
import Header from "../components/organisms/layout/Header";
import { TranslatedTextArea } from "../components/molucules/TranslatedTextArea";
import { SwichLanguageArea } from "../components/molucules/SwitchLanguageArea";
import { ThumbsUpIcon } from "../components/atoms/ThumbUpIcon";
import { TextCopyIcon } from "../components/atoms/TextCopyIcon";

export const Home = memo(() => {
  return (
    <>
    <Header />
        <SwichLanguageArea />
        <TranslatedTextArea />
        <TextCopyIcon />
        <ThumbsUpIcon/>
    <Footer />
    </>
  )
})