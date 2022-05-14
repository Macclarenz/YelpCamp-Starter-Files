import landingPage from './modules/load_landingPage'
import searchPage from './modules/load_searchPage'
import signInPage from './modules/load_loginPage'
import createAccountPage from './modules/load_createAccount'
import addCampground from './modules/load_addCampground'
import individualCampground from './modules/load_individualCampground'
import addNewComment from './modules/load_addNewComments'

const initPage = () => {
    if (!sessionStorage.getItem('alreadyVisited')) return landingPage()
    else return searchPage()
}

initPage()

export {
    landingPage,
    searchPage,
    signInPage,
    createAccountPage,
    addCampground,
    individualCampground,
    addNewComment
}