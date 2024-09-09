import React from "react";
import { GotoXY } from "../components/Motions/GotoXY";
import { MoveSteps } from "../components/Motions/MoveSteps";
import { TurnDegrees } from "../components/Motions/TurnDegrees";
import { RepeatAnimation } from "../components/Motions/RepeatAnimation";

export const motions = [
  {id : 1, content:"Move_Steps"},
  {id : 2, content : "Turn_Degrees"},
  {id : 3, content : "Goto_XY"},
  {id : 4, content: "RepeatAnimation"},
];

export const getDesiredComponent = (componentName, spriteId) => {
  switch (componentName) {
    case "Move_Steps":
      return <MoveSteps spriteId={spriteId}/>;
    case "Turn_Degrees":
      return <TurnDegrees spriteId={spriteId}/>;
    case "Goto_XY":
      return <GotoXY spriteId={spriteId}/>;
    case "RepeatAnimation":
      return <RepeatAnimation spriteId={spriteId}/>;
    default:
      return "";
  }
};
