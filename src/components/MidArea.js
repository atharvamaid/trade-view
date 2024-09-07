import React from "react";
import { Droppable ,Draggable} from "react-beautiful-dnd";
import "../css/index.css";
import { useAppProvider } from "../context/AppProvider";
import { getDesiredComponent } from "../helpers/SideBarActions";

export default function MidArea() {
  const { clonedMotions } = useAppProvider();
  return (
    <div className="flex-1 h-full overflow-auto">
      <Droppable type="MOTION" droppableId="clone-container">
        {(provided) => (
          <div
            className="clone-container"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {/* This area will not have anything in the beginning */}
            {clonedMotions.map((motion, index) => (
              <Draggable
                key={`clone-${motion.id}`}
                draggableId={`clone-${motion.id}`}
                index={index}
                isDragDisabled={true}
                
              >
                {(provided) => (
                  <div
                    className="draggable cloned"
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    {getDesiredComponent(motion.content)}
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>{" "}
    </div>
  );
}
