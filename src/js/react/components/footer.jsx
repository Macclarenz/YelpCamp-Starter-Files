import react from "react";

// Logos
import logo from '../../../Assets/Logo.svg'

export default class Footer extends react.Component {
    render() {
        return (
            <footer>
                <div className="footer-container">
                    <a className="footer-logo-link">
                        <img src={logo} alt="Brand logo" />
                    </a>
                </div>
            </footer>
        )
    }
}