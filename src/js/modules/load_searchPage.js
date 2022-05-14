import react from "react"
import reactDom from "react-dom"
import { Footer, Header, SearchPage } from "../react/app"

const searchPage = async () => {
    return reactDom.render(
        <react.Fragment>
            <Header />
            <SearchPage />
            <Footer />
        </react.Fragment>,
        document.querySelector('.outer-container')
    )
}

export default searchPage