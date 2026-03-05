import Axios from "axios";

export function* verifyEmailApi(code) {
    yield console.log(`Inside verifyEmailApi ${code}`);
    return yield Axios.post(process.env.REACT_APP_API_URL + '/user/verifyEmail', {
        "code": code
    }, {validateStatus: false});
}

export function* sendEmailLinkApi(userID) {
    yield console.log(`Inside sendEmailLinkApi ${userID}`);
    return yield Axios.post(process.env.REACT_APP_API_URL + '/user/resendEmail', {
        "userID": userID
    }, {validateStatus: false});
}
