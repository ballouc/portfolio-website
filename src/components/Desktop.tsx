import Window from "./Window"
import Icon from "./Icon"

const Desktop = () => {
  return (
    <>
        <div id="desktop-icon-container">
            <Icon name="About Me"/>
            <Icon name="My Work"/>
        </div>
        <div id="desktop-window-container">
            <Window />
            <Window />
        </div>
    </>
  )
}

export default Desktop