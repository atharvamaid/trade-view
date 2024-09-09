import {
  Dialog,
  List,
  DialogTitle,
  ListItem,
  ListItemButton,
  Avatar,
  ListItemText,
  Button,
} from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import { useAppProvider } from "../context/AppProvider";
import CatSprite from "./CatSprite";
import { AddIcon } from "./controls/AddIcon";
import { PlayAnimation } from "./controls/PlayAnimation";
import { ResetAnimation } from "./controls/ResetAnimation";
import { DogSprite } from "./DogSprite";

export default function PreviewArea() {
  const {
    totalSprites,
    setTotalSprites,
    setCurrentSelectedSprite,
    setClonedMotions,
    clonedMotions,
  } = useAppProvider();
  const [open, setOpen] = useState(false);
  const onIconDrag = (event, id) => {
    let dragElement = document.getElementById(`cat-sprite-icon-${id}`);
    dragElement.style.transition = "none";
    event = event || window.event;
    event.preventDefault();
    let initialX = event.clientX;
    let initialY = event.clientY;
    const stopDrag = () => {
      document.onmouseup = null;
      document.onmousemove = null;
      dragElement.style.transition = "left 0.5s, top 0.5s, transform 0.5s";
    };
    const moveElement = (event) => {
      event = event || window.event;
      event.preventDefault();

      let deltaX = initialX - event.clientX;
      let deltaY = initialY - event.clientY;
      initialX = event.clientX;
      initialY = event.clientY;

      dragElement.style.top = dragElement.offsetTop - deltaY + "px";
      dragElement.style.left = dragElement.offsetLeft - deltaX + "px";
    };
    document.onmouseup = stopDrag;

    document.onmousemove = moveElement;
  };

  const addSprite = useCallback(
    (spriteName) => {
      const newSprite = {
        name: `${spriteName} - ${totalSprites.length + 1}`,
        angle: 0,
        id: `sprite-${totalSprites.length}`,
        steps: 10,
        x: 34,
        y: 65,
        degree: 15,
      };
      setTotalSprites([...totalSprites, newSprite]);
      setClonedMotions({
        ...clonedMotions,
        [`sprite-${totalSprites.length}`]: [],
      });
    },
    [totalSprites, setTotalSprites, clonedMotions]
  );

  const onIconClick = useCallback((id) => {
    setCurrentSelectedSprite(`${id}`);
  }, []);

  const handleClose = () => {
    setOpen(false);
  };
  const onListItemClick = (spriteName) => {
    setOpen(false);
    addSprite(spriteName);
  };

  return (
    <div
      id="preview-container"
      className="h-full overflow-y-auto p-2"
      style={{ position: "relative" }}
    >
      <div className="font-bold ml-1"> {"Preview Area"} </div>
      {totalSprites.map((sprite) => (
        <div
          key={sprite?.id}
          onClick={(e) => onIconClick(sprite.id)}
          onMouseDown={(e) => onIconDrag(e, sprite?.id)}
        >
          {sprite?.name?.startsWith("Cat") ? (
            <CatSprite id={sprite.id} />
          ) : (
            <DogSprite id={sprite.id} />
          )}
        </div>
      ))}

      <PlayAnimation />
      <ResetAnimation />

      <Button
        onClick={(e) => setOpen(true)}
        variant="contained"
        startIcon={<AddIcon />}
        className="add-sprite-btn"
      >
        Add Sprite
      </Button>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Select Sprite Icon</DialogTitle>
        <List sx={{ pt: 0 }}>
          <ListItem onClick={(e) => onListItemClick("Cat")}>
            <ListItemButton
              onClick={(e) => {
                onListItemClick("Cat");
                setOpen(false);
              }}
            >
              <Avatar>
                <CatSprite />
              </Avatar>{" "}
              <ListItemText primary={"Cat"} />
            </ListItemButton>
          </ListItem>
          <ListItem onClick={(e) => onListItemClick("Dog")}>
            <ListItemButton
              onClick={(e) => {
                onListItemClick("Dog");
                setOpen(false);
              }}
            >
              <Avatar>
                <DogSprite />
              </Avatar>{" "}
              <ListItemText primary={"Dog"} />
            </ListItemButton>
          </ListItem>
        </List>
      </Dialog>
    </div>
  );
}
