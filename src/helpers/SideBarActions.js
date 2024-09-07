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

export const getDesiredComponent = (componentName) => {
  switch (componentName) {
    case "Move_Steps":
      return <MoveSteps />;
    case "Turn_Degrees":
      return <TurnDegrees />;
    case "Goto_XY":
      return <GotoXY />;
    case "RepeatAnimation":
      return <RepeatAnimation />;
    default:
      return "";
  }
};
