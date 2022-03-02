import React from "react";

export const GoodList = ({
  goodList,
  handleOnGoodListDelete,
  handleOnMoveToBadList,
}) => {
  return (
    <div>
      <hr />
      <h2>Good list</h2>

      {goodList.map((item, i) => {
        return (
          <ul key={i}>
            <li>
              {item.task} --
              <span></span> {item.hr}
              <button
                className="btn btn-danger btn-sm"
                onClick={() => handleOnGoodListDelete(i)}
              >
                <i className="fa-solid fa-trash-can" title="Delete"></i>
              </button>
              <button
                className="btn btn-sm btn-warning"
                onClick={() => handleOnMoveToBadList(i)}
              >
                <i
                  className="fa-solid fa-circle-chevron-right"
                  title="Delete"
                ></i>
              </button>
            </li>
          </ul>
        );
      })}

      <hr />
    </div>
  );
};
