// Libraries
import gsap from "gsap";
import react from "react";

// Logos & Icons
import logo from '../../../Assets/Logo.svg'
import check from '../../../Assets/Checkmark.svg'

// Brands (partnership)
import airbnb from '../../../Assets/Airbnb.svg'
import booking from '../../../Assets/Booking.svg'
import plumGuide from '../../../Assets/Plum Guide.svg'

// Background Hero
import mobile_heroBg from '../../../Assets/Hero-Image-(Tablet-and-Mobile).jpg'
import desktop_heroBg from '../../../Assets/Hero-Image.jpg'

// Modules 
import { searchPage, landingPage } from "../../index";

export default class LandingPage extends react.Component {
    animateOpen = () => {
        const tl = gsap.timeline()
        const lp_container = document.querySelector('.lp-container')
        const lp_firstColumn = document.querySelector('.lp-first-column')
        const lp_secondColumn = document.querySelector('.lp-second-column')

        tl.to(lp_container, {position: 'relative'})
        tl.fromTo(lp_secondColumn, {opacity: 0}, {opacity: 1, duration: .5, delay: .350, position: 'absolute'})
        tl.fromTo(lp_secondColumn, {x: '-50%', left: '50%'}, {x: 0, left: 0, duration: .5, delay: .5, ease: 'power2.out', position: 'static'})

        tl.fromTo(lp_firstColumn, {opacity: 0},{opacity: 1, duration: .5, ease: 'power1.out'})
        
        return
    }

    render() {
        return (
            <div className="lp-container">
                <FirstColumn />
                <SecondColumn />
            </div>
        )
    }

    componentDidMount() {
        const alreadyVisited = sessionStorage.getItem('alreadyVisited')
        return !alreadyVisited && this.animateOpen()
    }
}

class LogoLink extends react.Component {
    render() {
        return (
            <div className="lp-logo-container">
                <img src={logo} alt="Brand logo" />
            </div>
        )
    }
}

class FirstColumn extends react.Component {
    get checkList() {
        const arr_checkList = [
            'Add your own camp suggestions',
            'Leaven reviews and experiences',
            'See locations for all camps.'
        ]

        const el_checkList = arr_checkList.map((el, i) => {
            return (
                <li key={'lp-checklist-li-' + i}><img src={check} alt="check mark" /> {el}</li>
            )
        })

        return el_checkList
    }

    get partnershipList() {
        const arr_partnership = [
            [airbnb, 'Airbnb logo'],
            [booking, 'Booking.com logo'],
            [plumGuide, 'PLUM GUIDE logo']
        ]

        const el_partnership = arr_partnership.map((el, i) => {
            return (
                <li key={'lp-partnership-li-' + i}><img src={el[0]} alt={el[1]} /></li>
            )
        })

        return el_partnership
    }

    handleClick_loadSearchPage() {
        const alreadyVisited = sessionStorage.getItem('alreadyVisited')
        if (!alreadyVisited) sessionStorage.setItem('alreadyVisited', true)
        return searchPage()
    }

    render() {
        return (
            <div className="lp-first-column">
                <LogoLink />
                <div className="lp-text-container">
                    <h1>Explore the best camps on Earth.</h1>
                    <p>YelpCamp is a curated list of the best camping spots on Earth. Unfiltered and unbiased reviews.</p>
                    <ul className="lp-check-list">
                        {this.checkList}
                    </ul>
                    <button className="lp-view-campground-btn" onClick={this.handleClick_loadSearchPage}>View Campgrounds</button>
                    <div className="lp-partnership-container">
                        <p>Partnered with:</p>
                        <ul className="lp-partnership-list">
                            {this.partnershipList}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

class SecondColumn extends react.Component {
    imageSize = () => {
        const windowWidth = window.innerWidth
        if (windowWidth >= 1024) return desktop_heroBg
        else return mobile_heroBg
    }

    render() {
        return (
            <div className="lp-second-column">
                <img className="lp-camp-img" src={this.imageSize()} alt="Camp on the hill" />
            </div>
        )
    }
}