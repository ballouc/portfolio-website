import Draggable from "react-draggable";
import DOMPurify from "dompurify";

interface Props{
  title: string;
  isOpen: boolean;
  index: number;
  windowZIndex: number;
  content: string;
  onCloseWindow: (index: number, isOpen: boolean) => void;
  onMove: (index: number) => void;
}

const Window: React.FC<Props> = ( { title, index, isOpen, onCloseWindow, onMove, windowZIndex, content } ) => {

  return (
    <Draggable handle=".window-header"
    onStart={() => onMove(index)}
    defaultPosition={{x: 100, y: 100}}
    bounds="parent">
        <div className={`window-container ${isOpen ? `window-open` : `window-closed`}`}
        style={{zIndex: windowZIndex}}>
            <div className="window-header">
                <p className="window-header-text">{title.toUpperCase()}</p>
                <button className="window-close-btn" onClick={() => onCloseWindow(index, isOpen)}>X</button>
            </div>
            <div className="window-content"
            dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(content)}}></div>
        </div>
    </Draggable>
  )
}

export default Window