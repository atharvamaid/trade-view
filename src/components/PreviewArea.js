import React from "react";
import CatSprite from "./CatSprite";

export default function PreviewArea() {
  return (
    <div id="preview-container" className="h-full overflow-y-auto p-2" style={{position:"relative"}}>
      <CatSprite />
    </div>
  );
}
