// Libraries
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import react from 'react'

// Modules
import campgroundData from '../../data_campground'
import { addCampground, signInPage, individualCampground } from '../../index'

export default class SearchPage extends react.Component {
    render() {
        return (
            <main>
                <div className="search-page-container">
                    <SearchForm />
                    <Campgrounds />
                </div>
            </main>
        )
    }
}

class SearchForm extends react.Component {
    constructor(props) {
        super(props)
        // this.searchAnimate = this.searchAnimate.bind(this)
    }

    searchAnimate = (found, el) => {
        const tl = gsap.timeline({ease: 'power2.out'})
        if (found) {
            tl.to(el, {opacity: 1, y: 0, stagger: .250, display: 'block'})
        } else {
            tl.to(el, {opacity: 0, y: '5em', stagger: .250, display: 'none'})
        }

        return
    }

    handleSubmit_searchCampground = (e) => {
        e.preventDefault()
        const searchInputText = e.target.querySelector('#searchInputText')
        const value = searchInputText.value
        const campgroundName = document.querySelectorAll('.campground-name')

        campgroundName.forEach(el => {
            const parent = el.parentElement.parentElement
            if (el.innerText.toLowerCase().includes(value)) {
                this.searchAnimate(true, parent)
            } else {
                this.searchAnimate(false, parent)
            }
        })

        return 
    }

    handleInput_searchCampground = (e) => {
        const value = e.target?.value
        const campgroundName = document.querySelectorAll('.campground-name')
        campgroundName.forEach(el => {
            const parent = el.parentElement.parentElement
            if (el.innerText.toLowerCase().includes(value)) {
                this.searchAnimate(true, parent)
            } else {
                this.searchAnimate(false, parent)
            }
        })
        return
    }

    handleClick_addCampground = (e) => {
        const isLogged = sessionStorage.getItem('isLogged')
        const currentLogged = sessionStorage.getItem('currentLogged')

        if ((!isLogged && !currentLogged) || (!isLogged || !currentLogged)) return signInPage()
        else return addCampground()
    }

    render() {
        return (
            <div className="search-form-container">
                <h1>Welcome to YelpCamp!</h1>
                <p>View our hand-picked campgrounds from all over the world, or add your own.</p>
                <form className="search-form" id="searchForm" autoComplete='off' onSubmit={this.handleSubmit_searchCampground}>
                    <div className="input-text-container">
                        <svg className='search-icon' width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16 14.9307L11.8301 10.794C12.6144 9.724 13.0781 8.408 13.0781 6.98667C13.0781 3.41 10.1447 0.5 6.5387 0.5C2.93334 0.5 0 3.41 0 6.98667C0 10.564 2.93334 13.4733 6.5387 13.4733C7.90558 13.4733 9.17502 13.0553 10.226 12.3413L14.4181 16.5L16 14.9307ZM1.91793 6.98667C1.91793 4.45867 3.9911 2.402 6.53938 2.402C9.08766 2.402 11.1608 4.45867 11.1608 6.98667C11.1608 9.51467 9.08766 11.5713 6.53938 11.5713C3.99042 11.5713 1.91793 9.51467 1.91793 6.98667Z" fill="#595959" />
                        </svg>
                        <input type="search" name="search for camps" id="searchInputText" placeholder='Search for camps' onInput={this.handleInput_searchCampground} />
                    </div>
                    <input type="submit" value="Search" />
                </form>
                <button type = 'button' className='search-add-campground-btn' onClick={this.handleClick_addCampground}>Or add your own campground</button>
            </div>
        )
    }
}

class Campgrounds extends react.Component {
    handleClick_viewCampground = (e) => {
        const parent = e.target.parentElement
        const campgroundName = parent.querySelector('.campground-name')
        return individualCampground(campgroundName.innerText.toLowerCase())
    }

    animate_campgrounds = () => {
        gsap.registerPlugin(ScrollTrigger)
        const tl = gsap.timeline()
        const campgroundLi = document.querySelectorAll('.campground-list-item')
        tl.fromTo(
            campgroundLi, {
                y: '5em',
                opacity: 0,
                scrollTrigger: {
                    trigger: campgroundLi,
                    toggleActions: 'start'
                },
            }, {
                y: 0,
                opacity: 1,
                duration: .5,
                stagger: .250,
                ease: 'power2.out'
            }
        )
        
        return
    }

    get campgroundList() {
        const el_campground = campgroundData.map((el, i) => {
            return (
                <li key={'campground-li-' + i} className='campground-list-item'>
                    <img src={el.images.compressed} alt={el.images.alt} loading='lazy' />
                    <div className="campground-text-container">
                        <h2 className='campground-name'>{el.name}</h2>
                        <p>{el.description[0]}</p>
                        <button type='button' className="view-campground-btn" onClick={this.handleClick_viewCampground}>View Campground</button>
                    </div>
                </li>
            )
        })

        return el_campground
    }

    render() {
        return (
            <div className="campground-container">
                <ul className="campground-list">
                    {this.campgroundList}
                </ul>
            </div>
        )
    }

    componentDidMount() {
        return this.animate_campgrounds()
    }
}