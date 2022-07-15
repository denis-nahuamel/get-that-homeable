/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import FirstSection from "../components/home-components/first-section";
import FourthSection from "../components/home-components/fourth-section";
import SecondSection from "../components/home-components/second-section";
import ThirdSection from "../components/home-components/third-section";
import background from "../images/Group.png"
import { sendButton } from "../styles/form";
import { mainSearch, mainText } from "../styles/home";
import { card } from "../styles/select-profile";
import { montW300S64, montW400S24 } from "../styles/typography";
const HomePage = () => {
    return (
    <>
    <FirstSection />
    <SecondSection />
    <ThirdSection />
    <FourthSection />
    </>
    )
}
export default HomePage;