import Axios from "axios";

export function* signUpToApiUsingEmailAndPassword(firstName, lastName, email, password, mobile, becomeInstructor) {
    console.log(`About to call axios post for email for ${firstName}, ${lastName}, ${email}, ${password}, ${mobile}, ${becomeInstructor}`);
    return yield Axios.post(process.env.REACT_APP_API_URL + '/signup', {
        "firstName": firstName,
        "lastName": lastName,
        "email": email,
        "countryCode": "+91",
        "mobile": mobile,
        "password": password,
        "instructorSignup": becomeInstructor
    }, {validateStatus: false});
}

export function* forgotPasswordApi(email) {
    yield console.log(`Inside forgotPasswordApi ${email}`);
    return yield Axios.post(process.env.REACT_APP_API_URL + '/user/forgotPassword', {
        "email": email
    }, {validateStatus: false});
}

export function* resetPasswordApi(code, newPassword) {
    yield console.log(`Inside resetPasswordApi ${code}`);
    return yield Axios.post(process.env.REACT_APP_API_URL + '/user/resetPassword', {
        "code": code,
        "newPassword": newPassword
    }, {validateStatus: false});
}


