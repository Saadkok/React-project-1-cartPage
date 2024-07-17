import React from "react";

export default function Item(props) {
//   console.log(props);
   
  return (
    <div className="row mt-3">

      <div className="col-5">
        <h2>
          {props.item.name}{" "}
          <span class="badge text-bg-secondary">₹ {props.item.price}</span>
        </h2>
      </div>

      <div className="col-3">
        <div
          class="btn-group"
          role="group"
          aria-label="Basic mixed styles example"
        >
          <button type="button" className="btn btn-danger"  onClick={() =>props.minus(props.index)}>
            -
          </button>
          <button type="button" className="btn btn-warning">
           {props.item.quantity}
          </button>
          <button type="button" className="btn btn-success" onClick={() =>props.add(props.index)}>
            +
          </button>
        </div>  

      </div>

      <div className="col-2">
        {props.item.quantity*props.item.price}
      </div>
      <div className="col-2">
        <button className=" btn btn-danger " onClick={() =>props.remove(props.index)}>Remove</button>
      </div>

    </div>
  );
}
