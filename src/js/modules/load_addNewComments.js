import react from "react"
import reactDom from "react-dom"

import { Header, AddCommentPage, Footer } from "../react/app"

const addNewComment = async (campgroundName) => {
    // console.log(campgroundName)
    return reactDom.render(
        <react.Fragment>
            <Header />
            <AddCommentPage name = {campgroundName}/>
            <Footer />
        </react.Fragment>, 
        document.querySelector('.outer-container')
    )
}

export default addNewComment