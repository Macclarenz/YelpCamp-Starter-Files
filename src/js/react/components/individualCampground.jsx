import react from "react";

// Images
import map from '../../../Assets/Map.png'
import chatBubble from '../../../Assets/Chat Bubble.svg'

// Modules
import { signInPage, addNewComment } from '../../index'

// Library 
import { Temporal } from "@js-temporal/polyfill";

export default class IndividualCampgroundPage extends react.Component {
    render() {
        return (
            <div className="individual-campground-container">
                <CampgroundDetails campgroundObj={this.props.data} />
                <Comments commentsObj={this.props.data?.comments} campgroundName = {this.props.data.name} />
                <Map />
            </div>
        )
    }
}

class CampgroundDetails extends react.Component {
    get detail() {
        const { ...all } = this.props.campgroundObj
        return all
    }

    imageSize = () => {
        if (window.innerWidth >= 768) {
            return this.detail.images.highQuality
        } else return this.detail.images.compressed
    }

    render() {
        return (
            <div className="individual-campground-detail-container">
                <img className="individual-campground-img" src={this.imageSize()} alt={this.detail.images.alt} />
                <div className="individual-campground-text-container">
                    <div className="individual-campground-user-container">
                        <h1>{this.detail.name}</h1>
                        <p>{this.detail.price}</p>
                    </div>

                    <p>{!this.detail.description[1] ? this.detail.description[0] : this.detail.description[1]}</p>
                    <p><em>Submitted by {this.detail.submittedBy}</em></p>
                </div>
            </div>
        )
    }

    componentDidMount() {
        window.addEventListener('resize', e => {
            const detailImg = document.querySelector('.individual-campground-img') 
            if (e.target.innerWidth >= 768) {
                detailImg.src = this.detail.images.highQuality
            } else detailImg.src = this.detail.images.compressed
        })
    }
}

class Comments extends react.Component {
    constructor(props) {
        super(props)
        this.handleClick_leaveReview = this.handleClick_leaveReview.bind(this)
        this.timeAgo = this.timeAgo.bind(this)
        this.singularOrPlural = this.singularOrPlural.bind(this)
    }

    get commentList() {
        if (!this.props?.commentsObj) return
        if (this.props?.commentsObj) {
            return this.props.commentsObj.map((el, i) => {
                return (
                    <li key={'comment-' + i}>
                        <div className="comment-user-container">
                            <h2>{el.username}</h2>
                            <p>{!el.timeAgo ? el.timePosted : this.timeAgo(el.timeAgo)}</p>
                        </div>
                        <p>{el.userComment}</p>
                    </li>
                )
            })
        }
    }

    timeAgo = (date) => {
        const now  = Temporal.Now.plainDateTimeISO()
        const gap = now.since(date)

        if (gap.years > 0) return this.singularOrPlural(gap.years, 'year')
        if (gap.months > 0) return this.singularOrPlural(gap.months, 'month')
        if (gap.days > 0) return this.singularOrPlural(gap.days, 'day')
        if (gap.hours > 0) return this.singularOrPlural(gap.hours, 'hour')
        if (gap.minutes > 0) return this.singularOrPlural(gap.minutes, 'minute')
        if (gap.seconds > 0) return this.singularOrPlural(gap.seconds, 'second')

        return 'just now'
    }

    singularOrPlural = (dateCondition, time) => {
        if (time === 'hour') return `${dateCondition}h ago`
        if (dateCondition > 1) time += 's'
        return `${dateCondition} ${time} ago`
    }

    handleClick_leaveReview() {
        const isLogged = sessionStorage.getItem('isLogged')
        const currentLogged = sessionStorage.getItem('currentLogged')

        if ((!isLogged && !currentLogged) || (!isLogged || !currentLogged)) {
            return signInPage()
        } else addNewComment(this.props.campgroundName)
    }

    render() {
        return (
            <div className="individual-campground-comment-container">
                <ul className="individual-campground-comment-list">
                    {this.commentList}
                </ul>
                <button className="individual-campground-comment-btn" onClick={this.handleClick_leaveReview}>
                    <img className="chat-bubble" src={chatBubble} alt="chat bubble" />
                    Leave a Review
                </button>
            </div>
        )
    }
}

class Map extends react.Component {
    render() {
        return (
            <div className="individual-campground-map-container">
                <img src={map} alt="map location" />
            </div>
        )
    }
}