import "./App.css";

import React, { Component } from "react";

import Header from "./components/header/header.component";
import Routes from "./routes";
import "bootstrap/dist/css/bootstrap.min.css";
import { Redirect } from "react-router-dom";
import Footer from "./components/footer/footer.component";
import ReactNotification from "react-notifications-component";
import 'react-notifications-component/dist/theme.css';
// import LoginAndSignupPage from "./containers/login-signup/login-signup.component";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";

class App extends Component {
  unsubscribeFromAuth = null;

  constructor(props) {
    super(props);
    console.log("props: " + JSON.stringify(props));
    this.state = { showLogin: false };
    this.handleCloseLogin = this.handleCloseLogin.bind(this);
    this.handleOpenLogin = this.handleOpenLogin.bind(this);
  }

  handleCloseLogin() {
    this.setState((state) => ({
      showLogin: false,
    }));
  }
  handleOpenLogin(path) {
    // console.log('pathpathpathpathpath', path);
    return(
      <Redirect to={{ pathname: `/auth/${path}` }} />
    )

    // this.setState((state) => ({
    //   showLogin: true,
    // }));
  }

 componentDidUpdate(prevProps) {
   if (this.props.signupUser !== prevProps.signupUser) {
     this.setState(state =>({
       showLogin: false
     }))
   }
 }

    render() {
        const currentUser = this.props.currentUser

        return (
            <>
                <ReactNotification />
                {/* <div className="react-notification-root ">
                <div className="notification-container-top-right">
                  <div className="notification-parent" style={{height: 78, width: '100%', transition: 'height 10ms ease 0s' }}>
                    <div className="animated fadeIn notification-item notification-success n-child">
                      <div className="notification-content">
                        <div className="notification-title">SUCCESS</div>
                        <div className="notification-message">Added to cart successfully</div>
                      </div>
                    </div>
                  </div>
                </div>
                </div> */}
                <Helmet>
                    <title>SimpliTrain</title>
                    {/*TODO description for robots*/}
                    <meta name="description" content="Simplitrain description"/>
                </Helmet>
                <Header handleLogin={this.handleOpenLogin}/>

                {/* {
                  this.state.showLogin && (currentUser!=undefined? currentUser.id===null: true)  ?
                    <Redirect
                        to={{
                        pathname: "/auth/login"
                      }}
                    />
                    // <LoginAndSignupPage showLogin={this.state.showLogin} handleLogin={this.handleCloseLogin}/>
                  :""
                } */}
                <div style={{ minHeight:350 }}>
                  <Routes handleOpenLogin={this.handleOpenLogin}/>
                </div>
                <Footer/>
            </>
        )
    }
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
  signupUser: state.signup.signupUser
});

export default connect(mapStateToProps, null)(App);
