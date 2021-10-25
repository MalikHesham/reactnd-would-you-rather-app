import React, { Fragment } from "react";
import BriefQuestion from "./BriefQuestion";

function BriefQuestionsList(props) {
  const { idsList, emptyListNote } = props;

  return (
    <Fragment>
      <h6 className="text-center m-1">Would You Rather...</h6>
      {idsList.length ? (
        idsList.map((id) => <BriefQuestion key={id} id={id} />)
      ) : (
        <p className="text-center">{emptyListNote}</p>
      )}
    </Fragment>
  );
}

export default BriefQuestionsList;
