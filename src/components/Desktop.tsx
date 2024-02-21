import Window from "./Window"
import Icon from "./Icon"
import { useState } from "react";
import { windowData } from "../windowData"

const Desktop = () => {

  const [openWindows, setOpenWindows] = useState<boolean[]>([false, false, false]);
  const [windowZIndexes, setWindowZIndexes] = useState<number[]>([1, 1, 1]);
  const maxZIndex = Math.max(...windowZIndexes);

  // z-index value for window objects
  const bringToFront = (index: number) => {
    if (maxZIndex < Number.MAX_SAFE_INTEGER) {
      setWindowZIndexes(prevState => {
        const nextZIndexes = [...prevState];
        nextZIndexes[index] = maxZIndex + 1;
        return nextZIndexes;
      });
    }
  };

  // Window open and close handlers ================= condense this later!
  // Issue currently is that I want handleOpen called only by the icon, and handleClose called only by
  // the exit button. This creates some difficulties and may require an elegant solution.
  const handleOpenWindow = (index: number, isOpen: boolean) => {
    setOpenWindows(prevState => {
      const nextWindows =[...prevState];
      if(!isOpen){
        nextWindows[index] = true;
      }
      return nextWindows
    })
  }

  const handleCloseWindow = (index: number, isOpen: boolean) => {
    setOpenWindows(prevState => {
      const nextWindows =[...prevState];
      if(isOpen){
        nextWindows[index] = false;
      }

      return nextWindows
    })
  }
  // End window open and close handlers

  return (
    <div id="desktop-container">
    {/* Match the Icon index to its corresponding Window */}
    {windowData.map((window, index) => (
        <Window
          key={index}
          title={window.title}
          index={index}
          content={window.content}
          onCloseWindow={handleCloseWindow}
          isOpen={openWindows[index]}
          onMove={bringToFront}
          windowZIndex={windowZIndexes[index]}
        />
      ))}
      <div id="desktop-icon-container">
      {windowData.map((window, index) => (
          <Icon
            key={index}
            title={window.title}
            onOpenWindow={handleOpenWindow}
            index={index}
            isOpen={openWindows[index]}
          />
        ))}
      </div>
    </div>
  )
}

export default Desktop