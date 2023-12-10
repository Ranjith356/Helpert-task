import {
  MessageOutlined,
  ArrowLeftOutlined,
  BellOutlined,
  CaretDownOutlined,
  RightOutlined,
} from "@ant-design/icons";
import { Avatar, Button } from "antd";
function App() {
  return (
    <div className="container">
      <ul className="header">
        <li className="helpert">
          <MessageOutlined
            style={{
              fontSize: "16px",
              color: "#08c",
            }}
          />
          <span className="helpertpera">Helpert</span>
        </li>
        <li className="settings">
          <ArrowLeftOutlined className="arrow" />
          <span className="setpera">Settings</span>
        </li>
        <li>
          <Avatar className="avatar" src="icons8-boy-48.png" />
          <span className="avapera">Yondu</span>
        </li>
        <li>
          <BellOutlined className="Bell" />
        </li>
        <li>
          <CaretDownOutlined className="downicon" />
        </li>
      </ul>
      <div className="page">
        <div className="sidebar2">
          <p className="subscription">Subscription Setting</p>
          <p className="coin">
            $25<span>|</span>
          </p>
          <p className="week">
            Weekly<span>.2 Appointments</span>
          </p>
          <p className="price">Minimum price $2 to maximum $50</p>
          <Button
            type="primary"
            style={{
              color: "white",
              background: "#A61B1B",
              width: "60vh",
              marginRight: "10vh",
            }}
          >
            Save
          </Button>
        </div>
        <div className="sidebar">
          <div className="code">
            <hr></hr>
          </div>
          <div className="item">
            <p className="pera1">My Appointment</p>
            <p className="pera2">Show your saved appointment.</p>
            <RightOutlined className="rightarrow" />
          </div>
          <div className="item">
            <p className="pera1">My Clients</p>
            <p className="pera2">Show your clients.</p>
            <RightOutlined className="rightarrow" />
          </div>
          <div className="item">
            <p className="pera1">Subscription Setting</p>
            <p className="pera2">Manage your price.</p>
            <RightOutlined className="rightarrow" />
          </div>
          <div className="item">
            <p className="pera1">Security Access</p>
            <p className="pera2">Show your saved appointment.</p>
            <RightOutlined className="rightarrow" />
          </div>
          <div className="item">
            <p className="pera1">Notification Settings</p>
            <p className="pera2">Change yout notification settings.</p>
            <RightOutlined className="rightarrow" />
          </div>
          <div className="item">
            <p className="pera1">Payment Settings</p>
            <p className="pera2">Change your payment settings.</p>
            <RightOutlined className="rightarrow" />
          </div>
          <div className="logout">Logout</div>
        </div>
      </div>
    </div>
  );
}

export default App;
