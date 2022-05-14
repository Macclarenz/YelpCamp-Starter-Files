import react from "react";
import reactDom from "react-dom";
import { Header, IndividualCampgroundPage, Footer } from "../react/app";

// Modules
import campgroundData from "../data_campground";

const individualCampground = async (target) => {
    const findCampground = campgroundData.find(el => el.name.toLowerCase() === target)
    if (!findCampground) return console.error('nothing found')
    if (findCampground) {
        return reactDom.render(
            <react.Fragment>
                <Header />
                <IndividualCampgroundPage data={findCampground} />
                <Footer />
            </react.Fragment>, 
            document.querySelector('.outer-container'))
    }
}

export default individualCampground