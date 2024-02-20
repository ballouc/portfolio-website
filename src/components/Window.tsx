import Draggable from "react-draggable";

const Window = () => {
  return (
    <Draggable handle=".window-header">
        <div className="window-container">
            <div className="window-header">
                <p className="window-header-text">Window Header</p>
                <button className="window-close-btn">X</button>
            </div>
            <div className="window-content">
                <p>This is where Window content would go.......</p>
            </div>
        </div>
    </Draggable>
  )
}

export default Window