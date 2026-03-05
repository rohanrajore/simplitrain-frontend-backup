import Axios from "axios";

export function* verifyMobileOTPApi(mobileOTP, userId, loginType) {
    yield console.log(`Inside verifyMobileOTPApi ${mobileOTP}, ${userId}, ${loginType}`);
    return yield Axios.post(process.env.REACT_APP_API_URL + '/user/' + userId + '/verifyMobile', {
        "mobileOTP": mobileOTP,
        "loginType": "GOOGLE"
    }, {validateStatus: false});
}

export function* sendMobileOTPApi(userID, mobile, countryCode) {
    yield console.log(`Inside sendMobileOTPApi ${userID}, ${countryCode} ${mobile} `);
    return yield Axios.post(process.env.REACT_APP_API_URL + '/user/' + userID + '/sendMobileOTP', {
        "mobile": mobile,
        "countryCode": countryCode
    }, {validateStatus: false});
}
