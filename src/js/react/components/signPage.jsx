// Libraries
import gsap from "gsap";
import TextPlugin from "gsap/TextPlugin";
import react from "react";

// Icons and Pics
import logo from '../../../Assets/Logo.svg'
import userTestimonialImg from '../../../Assets/User Testimonial.svg'

// Modules
import userData from "../../data_user";
import { signInPage, createAccountPage, searchPage, landingPage } from '../../index'

export class SignInPage extends react.Component {
    render() {
        return (
            <div className="sign-container">
                <div className="sign-first-column">
                    <SignHeader />
                    <Form isUser={true} />
                </div>
                <div className="sign-second-column">
                    <Testimony />
                </div>
            </div>
        )
    }

    componentDidMount() {

    }
}

export class CreateAccountPage extends react.Component {
    render() {
        return (
            <div className="sign-container">
                <div className="sign-first-column">
                    <SignHeader />
                    <Form isUser={false} />
                </div>
                <div className="sign-second-column">
                    <Testimony />
                </div>
            </div>
        )
    }
}

class SignHeader extends react.Component {
    handleClick_landingPage() {
        return landingPage()
    }

    handleClick_searchPage() {
        return searchPage()
    }

    render() {
        return (
            <div className="sign-header">
                <a className="sign-logo-link" onClick={this.handleClick_landingPage}><img src={logo} alt="Brand logo" /></a>
                <a className="sign-back-to-campground-link" onClick={this.handleClick_searchPage}>← Back to campgrounds</a>
            </div>
        )
    }
}

class Form extends react.Component {
    constructor(props) {
        super(props)
        this.formObj = {
            form: {
                id: 'signInForm',
                method: this.handleSubmit_signIn = this.handleSubmit_signIn.bind(this),
                submitText: 'Login'
            },
            username: {
                placeholder: 'johndoe_91',
                id: 'Login_username'
            },
            password: {
                placeholder: 'Enter Your Password',
                id: 'Login_password'
            }
        }
        this.linkObj = {
            p: 'Not a user yet?',
            a: {
                text: 'Create an account',
                method: function () {
                    return createAccountPage()
                }
            }
        }
    }

    handleSubmit_signIn = (e) => {
        e.preventDefault()
        const form = e.target
        const username = form.querySelector('#Login_username')
        const password = form.querySelector('#Login_password')

        if (checkInput(username, password)) {
            const checkValidation = userData.find(el => (el.username === username.value && el.password === password.value))
            if (Boolean(checkValidation)) {
                sessionStorage.setItem('isLogged', true)
                sessionStorage.setItem('currentLogged', username.value)
                return window.location.reload()
            } else {
                console.error('wrong username or password')
            }
        }
    }

    handleSubmit_createAccount = (e) => {
        e.preventDefault()
        const form = e.target
        const username = form.querySelector('#CA_username')
        const password = form.querySelector('#CA_password')

        if (checkInput(username, password)) {
            const checkDuplication = userData.some(el => (el.username === username.value))
            if (checkDuplication) return console.error('username already exist')
            if (!checkDuplication) {
                userData.push({ username: username.value, password: password.value })
                sessionStorage.setItem('isLogged', true)
                sessionStorage.setItem('currentLogged', username.value)
                console.log(userData.length)
                return window.location.reload()
            }
        }
    }

    render() {
        if (!this.props.isUser) {
            this.formObj.form.id = 'CA_form'
            this.formObj.form.method = this.handleSubmit_createAccount = this.handleSubmit_createAccount.bind(this)
            this.formObj.form.submitText = 'Create an account'
            this.formObj.username.id = 'CA_username'
            this.formObj.password.id = 'CA_password'
            this.formObj.password.placeholder = 'Choose Password'
            this.linkObj.p = 'Already a user?'
            this.linkObj.a.text = 'Sign in'
            this.linkObj.a.method = function () {
                return signInPage()
            }
        }

        return (
            <div className="sign-form-container">
                <h1>Start exploring camps from all around the world.</h1>
                <form id={this.formObj.form.id} className="sign-form" onSubmit={this.formObj.form.method}>
                    <label htmlFor={this.formObj.username.id}>Username</label>
                    <input type="text" name="username" id={this.formObj.username.id} placeholder={this.formObj.username.placeholder} />
                    <label htmlFor={this.formObj.password.id}>Password</label>
                    <input type="password" name="password" id={this.formObj.password.id} placeholder={this.formObj.password.placeholder} />
                    <input type="submit" value={this.formObj.form.submitText} />
                </form>
                <p>{this.linkObj.p} <a onClick={this.linkObj.a.method}>{this.linkObj.a.text}</a></p>
            </div>
        )
    }

    componentDidMount() {
        const form = document.querySelector('.sign-form')
        const link = form.nextElementSibling
        let x
        const tl = gsap.timeline()
        if (form.id === 'CA_form') {
            x = '3em'
            tl.fromTo(form.children, {opacity: 0, x}, {opacity: 1, x: 0, duration: .5, ease: 'power1.out', delay: .5, stagger: .200})
            tl.fromTo(link, {x, opacity: 0}, {x: 0, opacity: 1, duration: .5})
        } else {
            x = '-3em'
            tl.fromTo(form.children, {opacity: 0, x}, {opacity: 1, x: 0, duration: .5, ease: 'power1.out', delay: .5, stagger: .200})
            tl.fromTo(link, {x, opacity: 0}, {x: 0, opacity: 1, duration: .5})
        }
    }
}

class Testimony extends react.Component {
    get testimonialUser() {
        const data_testimonialUser = {
            name: 'May Andrews',
            profession: 'Professional Hiker',
            profileImg: userTestimonialImg,
            statement: 'YelpCamp has honestly saved me hours of research time, and the camps on here are definitely well picked and added.'
        }

        return data_testimonialUser
    }

    animateTestimony = () => {
        const statement = 'YelpCamp has honestly saved me hours of research time, and the camps on here are definitely well picked and added.'
        const ease =  "rough({ template: none.out, strength: 1, points: 20, taper: none, randomize: true, clamp: false})"
        gsap.registerPlugin(TextPlugin)
        gsap.to('.testimony-container q', {
            text: {
                value: statement,
                delimiter: '',
        }, duration: 10, ease})

    }

    render() {
        return (
            <div className="testimony-container">
                <q>{this.testimonialUser.statement}</q>
                <div className="testimony-user-container">
                    <img src={this.testimonialUser.profileImg} alt="testimonial pic" className="testimony-user-img" />
                    <div className="testimony-user-text-container">
                        <p className="testimony-user-name">{this.testimonialUser.name}</p>
                        <p className="testimony-profession">{this.testimonialUser.profession}</p>
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount() {
        const testimonyStatement = document.querySelector('.testimony-container q')
        if (testimonyStatement.innerText) {
            testimonyStatement.innerText = ''
        } else return

        this.animateTestimony()
        return
    }
}

function checkInput(username, password) {
    if ((!username?.value && !password?.value)) {
        username.placeholder = 'Empty input'
        password.placeholder = 'Empty input'
        return false
    }

    if (!username?.value) {
        username.placeholder = 'Empty input'
        return false
    }
    if (!password?.value) {
        password.placeholder = 'Empty input'
        return false
    }

    return true
}