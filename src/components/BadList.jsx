import React from "react";

export const BadList = ({
  badList,
  handleOnBadListDelete,
  handleOnMoveToGoodList,
  ttlBadHours,
}) => {
  return (
    <div>
      <hr />
      <h2>Bad list</h2>

      {badList.map((item, i) => {
        return (
          <ul key={i}>
            <li>
              {item.task} --
              <span></span> {item.hr}
              <button
                className="btn btn-danger btn-sm"
                onClick={() => {
                  handleOnBadListDelete(i);
                }}
              >
                <i className="fa-solid fa-trash-can" title="Delete"></i>
              </button>
              <button
                className="btn btn-sm btn-warning"
                onClick={() => {
                  handleOnMoveToGoodList(i);
                }}
              >
                <i
                  className="fa-solid fa-circle-chevron-left"
                  title="Delete"
                ></i>
              </button>
            </li>
          </ul>
        );
      })}

      <hr />
      <p>You could have saved {ttlBadHours} hours</p>
    </div>
  );
};
