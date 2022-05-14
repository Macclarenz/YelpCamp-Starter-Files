import react from "react";
import reactDom from "react-dom";
import { AddCampgroundPage, Header, Footer } from "../react/app";

const addCampground =  async () => {
    return reactDom.render(
        <react.Fragment>
            <Header />
            <AddCampgroundPage />
            <Footer />
        </react.Fragment>,
        document.querySelector('.outer-container')
    )
}

export default addCampground