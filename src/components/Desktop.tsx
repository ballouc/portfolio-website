import Window from "./Window"
import Icon from "./Icon"
import { useState } from "react";

const Desktop = () => {

  const [openWindows, setOpenWindows] = useState<boolean[]>([false, false, false]);

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
    <>
    {/* Match the Icon index to its corresponding Window */}
        <div id="desktop-window-container">
            <Window name="About Me" index={0} onCloseWindow={handleCloseWindow} isOpen={openWindows[0]}/>
            <Window name="My Work" index={1} onCloseWindow={handleCloseWindow} isOpen={openWindows[1]}/>
            <Window name="Contact Me" index={2} onCloseWindow={handleCloseWindow} isOpen={openWindows[2]}/>
        </div>
        <div id="desktop-icon-container">
            <Icon name="About Me" onOpenWindow={handleOpenWindow} index={0} isOpen={openWindows[0]}/>
            <Icon name="My Work" onOpenWindow={handleOpenWindow} index={1} isOpen={openWindows[1]}/>
            <Icon name="Contact Me" onOpenWindow={handleOpenWindow} index={2} isOpen={openWindows[2]}/>
        </div>
    </>
  )
}

export default Desktop