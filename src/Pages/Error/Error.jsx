import "./error.css";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <div>
      <h3 className="page-tittle">404 NOT FOUND</h3>

      <div className="main-container">
        <div className="image-box">
          <img
            src="https://i.ibb.co/VTpw27w/Scarecrow.png"
            alt=""
            className="img"
          />
        </div>

        <div className="text-box">
          <h1 className="text-tittle">
            I have bad news <br /> for you
          </h1>
          <p className="text-description">
            The page you are looking for might be removed or is temporarily
            unavailable
          </p>
          <Link to={"/"}>
            <button className="goback">BACK TO HOMEPAGE</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
