import React from "react";
import Icon from "./Icon";
import { motions, getDesiredComponent } from "../helpers/SideBarActions";
import { Draggable, Droppable } from "react-beautiful-dnd";

export default function Sidebar() {
  return (
    <div className="w-60 flex-none h-full overflow-y-auto flex flex-col items-start p-2 border-r border-gray-200">
      <div className="font-bold"> {"Events"} </div>
      <div className="flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        {"When "}
        <Icon name="flag" size={15} className="text-green-600 mx-2" />
        {"clicked"}
      </div>
      <div className="flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        {"When this sprite clicked"}
      </div>
      <div className="font-bold"> {"Motion"} </div>
      <Droppable type="MOTION"  droppableId="motion_animation" isDropDisabled={true}>
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {motions.map((motion, index) => {
              return (
                <Draggable key={`motion-${motion.id}`} index={index} draggableId={`motion-${motion.id}`}>
                  {(provided) => (
                    <div
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                    >
                      {getDesiredComponent(motion.content)}
                    </div>
                  )}
                </Draggable>
              );
            })}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
}