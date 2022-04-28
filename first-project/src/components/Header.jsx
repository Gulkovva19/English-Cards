import "../assets/styles/base.scss";
import { HeartOutlined } from "@ant-design/icons";

function Header() {
  return (
    <div className="header">
      <div className="menu">i <HeartOutlined /> english</div>
      <div className="menu">
        <div className="menu-item">Home</div>
        <div className="menu-item">Game</div>
      </div>
    </div>
  );
}

export default Header;
