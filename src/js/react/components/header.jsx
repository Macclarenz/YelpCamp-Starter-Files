import react from "react";

// Modules
import { signInPage, createAccountPage, landingPage } from "../../index";

// Logos & Icons
import logo from '../../../Assets/Logo.svg'
import hamburger from '../../../Assets/Hamburger Menu.svg'

export default class Header extends react.Component {
    render() {
        return (
            <header>
                <HeaderLogo />
                <NavBar />
            </header>
        )
    }
}

class HeaderLogo extends react.Component {
    handleClick_landingPage = () => {
        return landingPage()
    }

    handleClick_openNav = () => {
        const navContainer = document.querySelector('header nav')
        navContainer.toggleAttribute('open')
    }

    displayNavHamburger = () => {
        let hamburgerDisplay = { display: 'block' }
        if (window.innerWidth >= 1024) {
            hamburgerDisplay = { display: 'none' }
        }

        return hamburgerDisplay
    }

    render() {
        return (
            <react.Fragment>
                <button type='button' className="sp-logo-btn"><img src={logo} alt="Brand logo" onClick={this.handleClick_landingPage} /></button>
                <button type='button' style={this.displayNavHamburger()} className="sp-hamburger-btn" onClick={this.handleClick_openNav}><img src={hamburger} alt="nav hamburger button" /></button>
            </react.Fragment>
        )
    }
}

class NavBar extends react.Component {
    handleClick_searchPage = () => {
        return window.location.reload()
    }

    render() {
        const isLogged = sessionStorage.getItem('isLogged')
        const currentLogged = sessionStorage.getItem('currentLogged')
        let log = undefined

        if (isLogged && currentLogged) {
            log = {
                login: {
                    text: currentLogged,
                    isLogged: true
                },
                account: {
                    text: 'Logout',
                    method: function () {
                        sessionStorage.removeItem('isLogged')
                        sessionStorage.removeItem('currentLogged')
                        return window.location.reload()
                    },
                    isLogged: true
                }
            }
        }

        return (
            <nav>
                <button type="button" onClick={this.handleClick_searchPage}>Home</button>
                <NavUser log={log} />
            </nav>
        )
    }

    componentDidMount() {
        const navHamburgerBtn = document.querySelector('.sp-hamburger-btn')
        const navContainer = document.querySelector('header nav')
        if (!navHamburgerBtn) return
        return window.addEventListener('resize', e => {
            if (e.target.innerWidth >= 1024) {
                navHamburgerBtn.style.display = 'none'
                navContainer.removeAttribute('open')
            } else {
                navHamburgerBtn.style.display = 'block'
            }

            return
        })
    }
}

class NavUser extends react.Component {
    render() {
        return (
            <react.Fragment>
                <button type="button" className="nav-login-username" onClick={this.props.log.login?.method}>{this.props.log.login.text}</button>
                <button type="button" className="nav-account" onClick={this.props.log.account?.method}>{this.props.log.account.text}</button>
            </react.Fragment>
        )
    }

    componentDidMount() {
        const navUsername = document.querySelector('.nav-login-username')
        const navAccount = document.querySelector('.nav-account')
        navUsername.setAttribute('isLogged', this.props.log.login.isLogged)
        navAccount.setAttribute('isLogged', this.props.log.account.isLogged)
    }
}

NavUser.defaultProps = {
    log: {
        login: {
            text: 'Login',
            method: function () {
                return signInPage()
            },
            isLogged: false
        },
        account: {
            text: 'Create an account',
            method: function () {
                return createAccountPage()
            },
            isLogged: false
        }
    }
}