import React from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";
import "../css/index.css";
import { useAppProvider } from "../context/AppProvider";
import { getDesiredComponent } from "../helpers/SideBarActions";

export default function MidArea() {
  const { clonedMotions, totalSprites ,currentSelectedSprite} = useAppProvider();
  return (
    <div className="flex-1 flex flex-col h-screen overflow-auto">
      <div className="font-bold mt-1 ml-1 h-[5%]"> {"Mid Area"} </div>
      <div className="h-[95%] flex flex-wrap gap-4 p-4">
        {totalSprites.map((sprite, index) => (
          <div
            key={`${sprite.name}-${index}`}
            className={`${currentSelectedSprite === sprite.id ? "bg-sky-100" : ""} flex flex-col w-[100%] h-80 bg-white shadow-md rounded-lg overflow-auto`}
          >
            <div className=" h-[10%] object-cover text-center font-bold text-xl">
              {sprite.name}
            </div>
            <div className={`${currentSelectedSprite === sprite.id ? "bg-sky-100" : ""} p-4 h-[90%] `}>
              <Droppable type="MOTION" droppableId={`clone_container-${sprite.id}`}>
                {(provided) => (
                  <div
                    className={`${currentSelectedSprite === sprite.id ? "bg-sky-100" : ""} clone-container`}
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                  >
                    {clonedMotions[sprite.id].map((motion, index) => (
                      <Draggable
                        key={`clone-${motion.id}-${index}`}
                        draggableId={`clone-${sprite.id}-${index}`}
                        index={index}
                      >
                        {(provided) => (
                          <div
                            className="draggable cloned my-2"
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            {getDesiredComponent(motion.content, sprite.id)}
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
