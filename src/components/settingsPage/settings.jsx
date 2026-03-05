import React from "react";
import LeftPanel from "./leftPanel/leftPanel.jsx";
import Account from "./account/account.jsx";
import CalendarSync from "./calendarSync/calendarSync.jsx";
import { Col, Container, Row } from "react-bootstrap";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { SettingContainer, PageTitleRow } from "../settingsPage/setting.style";
import HomeIcon from "../../assets/home.png";

const Settings = (props) => (
  <SettingContainer>
    <PageTitleRow>
      <div className="pageTitle page-section">
        <Container>
          <h4>Settings</h4>
          {/* <Breadcrumb>
        <Breadcrumb.Item href="#"><img src={HomeIcon}/> Home</Breadcrumb.Item>
        <Breadcrumb.Item active>Settings</Breadcrumb.Item>
      </Breadcrumb> */}
        </Container>
      </div>
    </PageTitleRow>

    <div className="userProfile-container page-section">
      <Container>
        <Row>
          <Col sm="12" md="3">
            <LeftPanel />
          </Col>
          <Col sm="12" md="9">
            <div className="userProfile-content">
              <Account />

              {/* <CalendarSync /> */}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  </SettingContainer>
);

export default Settings;
