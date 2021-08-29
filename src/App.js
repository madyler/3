import React from 'react';
import {BrowserRouter, Route, withRouter, Switch, Redirect} from 'react-router-dom';
import './App.css';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import NavbarContainer from "./components/Navbar/NavbarContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {initializeApp} from "./components/redux/app-reducer";
import Preloader from "./components/commons/Preloader/Preloader";
import {compose} from "redux";
import store from "./components/redux/redux-store";
import {withSuspense} from "./hoc/withSuspense";
import UsersContainer from "./components/Users/UsersContainer";

const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));

class App extends React.Component {
    catchAllUnhandledErrors = (props) => {
        console.log(props)
        console.log(props.reason.message)
    }
    componentDidMount() {
        this.props.initializeApp()
        window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors)
    }
    componentWillUnmount() {
        window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors)
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <NavbarContainer/>
                <div className='app-wrapper-content'>
                    <Switch>
                        <Route exact path='/' render={() => <Redirect to={'/profile'}/>}/>
                        <Route path='/dialogs' render={withSuspense(DialogsContainer)}/>
                        <Route path='/profile/:userId?' render={withSuspense(ProfileContainer)}/>
                        <Route path='/news' render={() => < News/>}/>
                        <Route path='/settings' render={() => < Settings/>}/>
                        <Route path='/music' render={() => < Music/>}/>
                        <Route path='/users' render={() => <UsersContainer pageTitle={"Самураи"}/>}/>
                        <Route path='/login' render={() => < Login/>}/>
                        <Route path='*' render={() => <div className='app-component'>404 NOT FOUND</div>}/>
                    </Switch>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})
const AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);

const SamuraiJSApp = () => {
    return <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
}


export default SamuraiJSApp;