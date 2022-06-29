import { LoadingOutlined } from "@ant-design/icons";


const Loader = () => (
  <div className="loader">
    Loading <span className="loader__spin"> <LoadingOutlined/> </span>
  </div>
);

export default Loader;
