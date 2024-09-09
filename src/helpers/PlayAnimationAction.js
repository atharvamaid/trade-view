export const performAnimation = (actionType, element, sprite) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      switch (actionType) {
        case "Move_Steps":
          element.style.left = `${
            element.offsetLeft + parseInt(sprite?.steps)
          }px`;
          element.style.top = element.offsetTop;
          break;
        case "Turn_Degrees":
          element.style.transform = `translate(-50%, -50%) rotate(${sprite?.angle + sprite?.degree}deg)`;
          sprite.angle = sprite?.angle + sprite?.degree;
          break;
        case "Goto_XY":
          const parent = document.getElementById("preview-container");
          const newXCoordinate = sprite.x + parent.offsetWidth / 2;
          const newYCoordinate = -sprite.y + parent.offsetHeight / 2;
          element.style.left = `${newXCoordinate}px`;
          element.style.top = `${newYCoordinate}px`;
          break;
        case "RepeatAnimation":
            break;
        default:
          console.log("");
      }
      resolve();
    }, 100);
  });
};
