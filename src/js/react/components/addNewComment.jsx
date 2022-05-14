import react from "react";

// Modules
import { individualCampground } from '../../index'
import campgroundData from "../../data_campground";

// Library
import { Temporal } from "@js-temporal/polyfill";

export default class AddCommentPage extends react.Component {
    handleSubmit_addNewComment = (e) => {
        e.preventDefault()
        const parent = e.target
        const description = parent.querySelector('#ANC_description')
        const timeAgo = Temporal.Now.plainDateTimeISO()

        campgroundData.find(el => {
            if (el.name === this.props.name) {
                el.comments.push({
                    username: sessionStorage.getItem('currentLogged'),
                    userComment: description.value,
                    timeAgo: timeAgo.toString()
                })
            }
        })
        
        console.log(campgroundData)
        
        return individualCampground(this.props.name.toLowerCase())
    }

    render() {
        return (
            <div className="add-comment-container">
                <h1>Add New Comment</h1>
                <form id="ANC_form" className="add-comment-form" onSubmit={this.handleSubmit_addNewComment}>
                    <label htmlFor="ANC_description">Description</label>
                    <textarea id = 'ANC_description' name="description" cols="30" rows="10"
                    placeholder="This was probably the best camp i've visiteed this past year, 
                    definitely recommend visiting any time soon."></textarea>
                    <input type="submit" value='Post Comment' />
                </form>
            </div>
        )
    }
}