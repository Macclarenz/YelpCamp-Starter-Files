import reactDom from "react-dom";

// React modules
import { CreateAccountPage } from "../react/app";

const createAccountPage = async () => {
    return reactDom.render(<CreateAccountPage />, document.querySelector('.outer-container'))
}

export default createAccountPage