import React, { Fragment } from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <Fragment>
      <h6 className="text-center"> ERROR 404 Requested Page is Not Found</h6>
      <h6 className="text-center">
        <Link to="/">Return to Home Page</Link>
      </h6>
    </Fragment>
  );
}
export default PageNotFound;
