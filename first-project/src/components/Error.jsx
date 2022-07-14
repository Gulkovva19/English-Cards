import { FrownOutlined } from "@ant-design/icons";

const Error = () => (
  <div className="loader">
    Нет соединения с сервером <span className="loader__spin"> <FrownOutlined /> </span>
  </div>
);

export default Error;