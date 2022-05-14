import react from "react";

// Modules
import campgroundData from "../../data_campground";
import { searchPage } from '../../index'

export default class AddCampgroundPage extends react.Component {
    render() {
        return (
            <div className="add-campground-container">
                <h1>Add New Campground</h1>
                <AddCampgroundForm />
            </div>
        )
    }
}

class AddCampgroundForm extends react.Component {
    constructor(props) {
        super(props)
        this.checkDuplication = this.checkDuplication.bind(this)
        this.capitalizeEachWord = this.capitalizeEachWord.bind(this)
        this.descriptionPlaceholder = "The Seven Sisters is the 39th tallest waterfall in Norway. The 410-metre tall waterfall consists of seven seperate streams, and the tallest of the seven has a free fall that measures 250 metres. The waterfall is located along the Geirangerfjorden in Stranda Municipality in Møre og Romsdal county, Norway."
    }

    checkDuplication = (target) => {
        const findDuplication = campgroundData.some(el => el.name === target)
        return findDuplication ? true : false
    }

    capitalizeEachWord = (wordArr) => {
        return wordArr.map(el => {
            return el[0].toUpperCase() + el.substring(1).toLowerCase()
        }).join(' ')
    }

    handleSubmit_addCampground = (e) => {
        e.preventDefault()
        const [
            campground_name, 
            campground_price, 
            campground_image,
            campground_description
         ] = document.querySelectorAll('#AC_inputName, #AC_inputPrice, #AC_inputImage, #AC_description')

        const capitalize_campgroundName = this.capitalizeEachWord(campground_name.value.split(' '))
        if (!this.checkDuplication(capitalize_campgroundName)) {
            campgroundData.push({
                name: capitalize_campgroundName,
                description: [campground_description.value],
                submittedBy: sessionStorage.getItem('currentLogged'),
                images: {
                    compressed: campground_image.value,
                    highQuality: campground_image.value,
                    alt: `${campground_name.value} landscape`
                },
                price: `$${campground_price.value}/night`,
            })

        } else return console.error('duplicate detected')

        return searchPage()
    }

    render() {
        return (
            <form autoComplete="off" className="add-campground-form" id="AC_form" onSubmit={this.handleSubmit_addCampground}>
                <label htmlFor="AC_inputName">Campground Name</label>
                <input type="text" name="Campground name" id="AC_inputName" className="add-campground-input-name" placeholder="
                Seven Sisters Waterfall
                " required />

                <label htmlFor="AC_inputPrice">Price</label>
                <input type="number" name="Price" id="AC_inputPrice" className="add-campground-input-price" placeholder="
                $149
                " required />

                <label htmlFor="AC_inputImage">Image</label>
                <input type="url" name="Image url or reference" id="AC_inputImage" placeholder="
                www.thepinoytraveler.com/2018/01/mt-ulp-diy-dayhike.html
                " required />

                <label htmlFor="AC_description">Description</label>
                <textarea name="Description" id="AC_description" cols="30" rows="10" placeholder={this.descriptionPlaceholder} required ></textarea>
                <input type="submit" value="Add Campground" />
            </form>
        )
    }
}
