// Libraries
import reactDom from "react-dom";
import { LandingPage } from "../react/app";
import { gsap } from "gsap";

// Modules
// import searchPage from "./load_searchPage";

// Background Hero
import mobile_heroBg from '../../Assets/Hero-Image-(Tablet-and-Mobile).jpg'
import desktop_heroBg from '../../Assets/Hero-Image.jpg'

const landingPage = async () => {
    return new Promise((res) => {
        reactDom.render(<LandingPage />, document.querySelector('.outer-container'))
        res(true)
    }).then((resolved) => {
        return resolved && heroImgResize
    })
}

const heroImgResize = window.addEventListener('resize', e => {
    const heroBg = document.querySelector('.lp-camp-img')
    if (!heroBg) return
    if (e.target.innerWidth >= 1024) return heroBg.src = desktop_heroBg
    else return heroBg.src = mobile_heroBg
})

export default landingPage