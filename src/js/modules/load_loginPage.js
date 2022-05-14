import reactDom from "react-dom"

// React modules
import { SignInPage } from "../react/app"

const signInPage = async () => {
    return reactDom.render(<SignInPage />, document.querySelector('.outer-container'))
}

export default signInPage