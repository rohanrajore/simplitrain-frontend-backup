import React, { useState, useEffect } from "react";
//import "./account.css";
import { AccountContainer } from "../account/account.style";
import resetPassword from "./resetPassword.js";
import { store } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import fetchSettings from "./fetchSettings.js";
import updateSettings from "./updateSettings.js";
import { connect, useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectHasEmailSignin } from "../../../redux/user/user.selectors";

const Account = ({ hasEmailSignin, ...props }) => {
  const [openPopup, setOpenPopup] = useState(false);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const [language, setLanguage] = useState("ENGLISH");
  const [timezone, setTimezone] = useState("INDIAN_STANDARD_TIME");

  let initialError;
  if (
    newPassword.length >= 6 &&
    newPassword.length <= 20 &&
    /\d/.test(newPassword) &&
    /[@#$%!]+/.test(newPassword) &&
    newPassword.toUpperCase() !== newPassword &&
    newPassword.toLowerCase() !== newPassword &&
    newPassword === confirmedPassword
  ) {
    initialError = false;
  } else {
    initialError = true;
  }

  const [isError, setIsError] = useState(initialError);
  const user = useSelector((state) => state.user.currentUser);

  const handleUpdateSettings = async () => {
    let response = await updateSettings(user.id, language, timezone);
    let status = await response.actionResult;
    let msg = await response.message;
    // show notification to user
    store.addNotification({
      title: status.toUpperCase(),
      message: msg,
      type: status === "FAILURE" ? "danger" : "success",
      container: "top-right",
      animationIn: ["animated", "fadeIn"],
      animationOut: ["animated", "fadeOut"],
      dismiss: {
        duration: 4000,
      },
    });
  };

  const handleResetPassword = async () => {
    setIsError(true);
    let response = await resetPassword(user.id, oldPassword, confirmedPassword);

    let status = await response.actionResult;
    let msg = await response.message;

    if (status === "SUCCESS") {
      setOldPassword("");
      setNewPassword("");
      setConfirmedPassword("");
      setIsError(true);
    } else {
      setIsError(false);
    }
    // show notification to user
    store.addNotification({
      title: status.toUpperCase(),
      message: msg,
      type: status === "FAILURE" ? "danger" : "success",
      container: "top-right",
      animationIn: ["animated", "fadeIn"],
      animationOut: ["animated", "fadeOut"],
      dismiss: {
        duration: 4000,
      },
    });
  };

  useEffect(() => {
    let isTrue;
    if (
      newPassword.length >= 6 &&
      newPassword.length <= 20 &&
      /\d/.test(newPassword) &&
      /[@#$%!]+/.test(newPassword) &&
      newPassword.toUpperCase() !== newPassword &&
      newPassword.toLowerCase() !== newPassword &&
      newPassword === confirmedPassword
    ) {
      isTrue = false;
    } else {
      isTrue = true;
    }
    setIsError(isTrue);
  }, [newPassword, confirmedPassword]);

  useEffect(() => {
    async function fetch() {
      let response = await fetchSettings(user.id);
      if (response.actionResult === "SUCCESS") {
        setLanguage(response.userSettingsDetails.language);
        setTimezone(response.userSettingsDetails.timezone);
      }
    }
    fetch();
  }, [1]);

  return (
    <AccountContainer>
      <div className="userProfile-section-container" id="settingsAccount">
        <div className="userProfile-section-title">Settings</div>

        <div className="settings-account-section">
          <div className="form-row">
            <div className="form-group col-md-6 col-sm-6">
              <label htmlFor="settings-timezone">Timezone</label>
              <select
                className="form-control"
                id="settings-timezone"
                onChange={(e) => setTimezone(e.target.value)}
                value={timezone}
              >
                <option value="INDIAN_STANDARD_TIME">
                  Indian Standard Time
                </option>
              </select>
            </div>

            <div className="form-group col-md-6 col-sm-6">
              <label htmlFor="settings-language">Language</label>
              <select
                className="form-control"
                id="settings-language"
                value={language}
                onChange={(e) => {
                  setLanguage(e.target.value);
                }}
              >
                <option value="ENGLISH">English</option>
                <option value="HINDI"> Hindi</option>
                <option value="TAMIL"> Tamil</option>
                <option value="MALAYALAM"> Malayalam</option>
                <option value="KANNADA"> Kannada</option>
                <option value="TELUGU"> Telugu</option>
              </select>
            </div>
          </div>

          <div className="settings-account-btnContainer">
            <div
              className="settings-account-btn"
              onClick={handleUpdateSettings}
            >
              Update
            </div>
          </div>
        </div>

        {/* <div className="settings-account-section">
        <div className="settings-account-title">Linked Accounts</div>
        <p>
          Enable one-click login and receive more personalized course
          reccomendations!
        </p>

        <div className="settings-account-btnContainer">
          <div className="settings-account-btn">Link my Linkedln Account</div>
          <div className="settings-account-btn">Link my Facebook Account</div>
        </div>
      </div> */}

        <hr />

        <div className="settings-account-section">
          <div className="settings-account-title">Change Password</div>
          <div className="form-row">
            {hasEmailSignin ? (
              <div className="form-group col-md-4 col-sm-8">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Current Password"
                  name="password"
                  value={oldPassword}
                  onChange={(e) => setOldPassword(e.target.value)}
                />
              </div>
            ) : null}

            <div className="form-group col-md-4 col-sm-8">
              <input
                type="password"
                className="form-control"
                placeholder="New Password"
                name="newPassword"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>
            <div className="form-group col-md-4 col-sm-8">
              <input
                type="password"
                className="form-control"
                placeholder="ReType New Password"
                name="retypedNewPassword"
                value={confirmedPassword}
                onChange={(e) => setConfirmedPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="settings-account-btnContainer">
            <div
              className={
                isError
                  ? `settings-account-btn settings-account-btnDisabled`
                  : "settings-account-btn"
              }
              onClick={!isError ? handleResetPassword : () => {}}
            >
              Reset Password
            </div>
          </div>

          <ul style={{ margin: 0, padding: 0, paddingLeft: 20 }}>
            <li
              style={{
                color: newPassword.length >= 6 ? "green" : "red",
              }}
            >
              Minimum 6 characters
            </li>
            <li
              style={{
                color: newPassword.length <= 20 ? "green" : "red",
              }}
            >
              Maximum 20 characters
            </li>
            <li
              style={{
                color: /\d/.test(newPassword) ? "green" : "red",
              }}
            >
              At least 1 number
            </li>
            <li
              style={{
                color: /[@#$%!]+/.test(newPassword) ? "green" : "red",
              }}
            >
              At least 1 special character: @#$%!
            </li>
            <li
              style={{
                color:
                  newPassword.toUpperCase() !== newPassword ? "green" : "red",
              }}
            >
              At least 1 lowercase character
            </li>
            <li
              style={{
                color:
                  newPassword.toLowerCase() !== newPassword ? "green" : "red",
              }}
            >
              At least 1 uppercase character
            </li>
            <li
              style={{
                color:
                  newPassword === confirmedPassword &&
                  confirmedPassword.length > 0
                    ? "green"
                    : "red",
              }}
            >
              Confirm password
            </li>
          </ul>
        </div>
        {/* Hiding delete account to park it for future, need to handle few backend issues */}

        {/*  <hr />
          <div className="settings-account-section">
          <div className="settings-account-title">Delete Account</div>

          <p>
            If you delete your account, your personal information will be wiped
            from SimpliTrain's servers, all of your course activity will be
            anonymized and any certificates earned will be deleted. This action
            cannot be undone!
          </p>

          <div className="settings-account-btnContainer">
            <div
              className="settings-account-btn btnRed"
              onClick={() => setOpenPopup(true)}
            >
              Delete Account
            </div>
          </div>

          {openPopup && <DeletePopup setOpenPopup={setOpenPopup} />}
        </div> */}
      </div>
      <hr />
    </AccountContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  hasEmailSignin: selectHasEmailSignin,
});

export default connect(mapStateToProps, null)(Account);
