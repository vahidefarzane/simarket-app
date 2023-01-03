import React from "react";

export default function Loading() {
  return (
    <div>
      <div className="loading-wrapper">
        <div className="lds-ellipsis">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
