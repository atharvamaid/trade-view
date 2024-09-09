import { motions } from "./SideBarActions";
export const updateMotionsOnDragDrop = (
  result,
  clonedMotions,
  setClonedMotions
) => {
  const { source, destination } = result;
  const dropContainer = destination?.droppableId?.startsWith("clone_container")
    ? destination?.droppableId?.split("-")
    : null;
  const spriteId = dropContainer?.[dropContainer?.length - 1];
  if (
    destination &&
    dropContainer?.[0] === "clone_container" &&
    source?.droppableId === "motion_animation"
  ) {
    const dropIndex = destination?.index;
    const draggedMotion = motions[source?.index];
    const updatedMotions = [...clonedMotions[`sprite-${spriteId}`]];
    updatedMotions.splice(dropIndex, 0, draggedMotion);
    setClonedMotions({
      ...clonedMotions,
      [`sprite-${spriteId}`]: updatedMotions,
    });
  } else if (
    source?.droppableId.startsWith("clone_container") &&
    (!destination || destination?.droppableId === "motion_animation")
  ) {
    let sourceContainer = source?.droppableId?.split("-");
    let spriteId = sourceContainer?.[sourceContainer?.length - 1];

    const draggedMotion = clonedMotions[`sprite-${spriteId}`][source?.index];

    const updatedMotions = clonedMotions[`sprite-${spriteId}`].filter(
      (motion) => motion.id !== draggedMotion.id
    );
    setClonedMotions({
      ...clonedMotions,
      [`sprite-${spriteId}`]: updatedMotions,
    });
  } else if (
    source?.droppableId.startsWith("clone_container") &&
    destination?.droppableId.startsWith("clone_container")
  ) {
    const sourceSprite = source?.droppableId?.split("-");
    const sourceSpriteId = sourceSprite?.[sourceSprite?.length - 1];
    if (sourceSpriteId === spriteId) {
      const dropIndex = destination?.index;
      const sourceIndex = source?.index;
      let updatedMotions = [...clonedMotions[`sprite-${spriteId}`]];
      const draggedMotion = updatedMotions?.splice(sourceIndex, 1);
      updatedMotions.splice(dropIndex, 0, draggedMotion[0]);
      setClonedMotions({
        ...clonedMotions,
        [`sprite-${spriteId}`]: updatedMotions,
      });
    } else {
      const draggedMotion =
        clonedMotions[`sprite-${sourceSpriteId}`][source?.index];

      const updatedSourceMotions = clonedMotions[`sprite-${sourceSpriteId}`].filter(
        (motion) => motion.id !== draggedMotion.id
      );
    const dropIndex = destination?.index;
    const updatedDestinationMotions = [...clonedMotions[`sprite-${spriteId}`]];
    updatedDestinationMotions.splice(dropIndex, 0, draggedMotion);
    setClonedMotions({
      ...clonedMotions,
      [`sprite-${sourceSpriteId}`] : updatedSourceMotions,
      [`sprite-${spriteId}`]: updatedDestinationMotions,
    });
    console.log(updatedDestinationMotions)
    }
  }
};
