import { PlayButton } from "./PlayButton";
import React, { useCallback, useRef } from "react";
import { useAppProvider } from "../../context/AppProvider";
import { performAnimation } from "../../helpers/PlayAnimationAction";

export const PlayAnimation = () => {
  const {
    clonedMotions,
    isResetClicked,
    totalSprites,
    setTotalSprites,
    setClonedMotions,
  } = useAppProvider();
  const isCollided = useRef(false);
  const onPlayClick = async () => {
      isResetClicked.current = false;
    await Promise.all(totalSprites.map((sprite) => runSpriteAnimation(sprite)));
  };
  const swapIconAnimation = (spriteA, spriteB) => {
    spriteA = totalSprites.find((sprite) => sprite?.id === spriteA.id);
    spriteB = totalSprites.find((sprite) => sprite?.id === spriteB.id);
    let temp = structuredClone(spriteA);
    totalSprites.forEach((sprite)=>{
        if (sprite.id === spriteA.id){
            sprite.steps = spriteB.steps;
            sprite.angle = spriteB.angle;
            sprite.degree = spriteB.degree;
            sprite.x = spriteB.x;
            sprite.y = spriteB.y;
        }else if (sprite.id === spriteB.id){
            sprite.steps = temp.steps;
            sprite.angle = temp.angle;
            sprite.degree = temp.degree;
            sprite.x = temp.x;
            sprite.y = temp.y;
        }
    })
    let tempCloneMotion = structuredClone(clonedMotions[spriteA.id]);
    clonedMotions[spriteA.id] = clonedMotions[spriteB.id];
    clonedMotions[spriteB.id] = tempCloneMotion;
    isCollided.current = true;
  };
  const validateCollision = () => {
    const dummySprites = totalSprites.map((sprite) => ({
      ...sprite,
      iconElement: document.getElementById(`cat-sprite-icon-${sprite.id}`),
    }));
    for (let i = 0; i < dummySprites.length; i++) {
      for (let j = i + 1; j < dummySprites.length; j++) {
        const spriteAPosition =
          dummySprites[i].iconElement.getBoundingClientRect();
        const spriteBPosition =
          dummySprites[j].iconElement.getBoundingClientRect();
        if (
          spriteAPosition.left < spriteBPosition.right &&
          spriteAPosition.right > spriteBPosition.left &&
          spriteAPosition.top < spriteBPosition.bottom &&
          spriteAPosition.bottom > spriteBPosition.top
        ) {
           swapIconAnimation(dummySprites[i], dummySprites[j]);
        }
      }
    }
  };
  const runSpriteAnimation = useCallback(
    async (sprite) => {
      let i = 0;
      const spriteElement = document.getElementById(
        `cat-sprite-icon-${sprite.id}`
      );
      while (i < clonedMotions?.[sprite.id].length && !isResetClicked.current) {
        try {
          await performAnimation(
            clonedMotions?.[sprite.id][i]?.content,
            spriteElement,
            sprite
          );
        } catch (error) {
          console.log(error);
        }
        if(!isCollided.current) validateCollision();
        if (clonedMotions?.[sprite.id][i]?.content === "RepeatAnimation") {
          i = 0;
        } else {
          i++;
        }
        if (isResetClicked.current) break;
      }
    },
    [
      clonedMotions,
      isResetClicked,
      setTotalSprites,
      totalSprites,
      validateCollision,
      swapIconAnimation,
    ]
  );
  return <PlayButton onClick={onPlayClick} />;
};
