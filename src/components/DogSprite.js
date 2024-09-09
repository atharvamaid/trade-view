import React from "react";
export const DogSprite = ({ id }) => {
  return (
    <div
      id={`cat-sprite-icon-${id}`}
      className="sprite inline-block z-0"
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width:"95px",
        height:"100px"
      }}
    >
      <img
        class="library-item_library-item-image_tIZIX"
        src="https://cdn.assets.scratch.mit.edu/internalapi/asset/2768d9e44a0aab055856d301bbc2b04e.png/get/"
      />
    </div>
  );
};
