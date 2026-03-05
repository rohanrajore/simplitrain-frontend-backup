import Axios from "axios";

export function* facebookLoginApi(accessToken, becomeInstructor) {
    console.log("Inside facebookLoginApi.");
    return yield   Axios.post(process.env.REACT_APP_API_URL + '/facebookSignup', {
        "accessToken": accessToken,
        "instructorSignup": becomeInstructor
    }, {validateStatus: false});
}

export function* googleLoginApi(idToken, becomeInstructor) {
    // console.log(`Inside googleLoginApi ${becomeInstructor}`);
    return yield   Axios.post(process.env.REACT_APP_API_URL + '/googleSignup', {
        "idToken": idToken,
        "instructorSignup": becomeInstructor
    }, {validateStatus: false});
}

export function* linkedinLoginApi(code, becomeInstructor) {
    console.log("Inside linkedinLoginApi.");
    return yield Axios.post(process.env.REACT_APP_API_URL + '/linkedinSignup', {
        "code": code,
        "instructorSignup": becomeInstructor
    }, {validateStatus: false});
}

export function* becomeInstructorApi(userID) {
    console.log(`About to call becomeInstructor for userID : ${userID}`)
    return yield Axios.post(process.env.REACT_APP_API_URL + "/user/" + userID + '/becomeInstructor',
        {},
        {validateStatus: false});
}

export function* loginUsingEmailCredentialsApi(email, password) {
    console.log(`About to call axios post for email for ${email} and ${password}`)
    return yield Axios.post(process.env.REACT_APP_API_URL + '/login', {
        email: email,
        password: password
    }, {validateStatus: false});
}
