import { useState } from "react";
import Draggable from "react-draggable";

interface Props{
  name: string;
  isOpen: boolean;
  index: number;
  onCloseWindow: (index: number, isOpen: boolean) => void;
}

const Window: React.FC<Props> = ( { name, index, isOpen, onCloseWindow } ) => {

  return (
    <Draggable handle=".window-header">
        <div className={`window-container ${isOpen ? `window-open` : `window-closed`}`}>
            <div className="window-header">
                <p className="window-header-text">{name.toUpperCase()}</p>
                <button className="window-close-btn" onClick={() => onCloseWindow(index, isOpen)}>X</button>
            </div>
            <div className="window-content">
                <p>This is where Window content would go.......</p>
            </div>
        </div>
    </Draggable>
  )
}

export default Window