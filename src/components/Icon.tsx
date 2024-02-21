interface Props{
    name: string;
    index: number;
    isOpen: boolean;
    onOpenWindow: (index: number, isOpen: boolean) => void;
}

const Icon: React.FC<Props> = ( { name, index, isOpen, onOpenWindow } ) => {
  return (
    <>
        <div className="icon-data">
            <div className="icon-image" onClick={() => {onOpenWindow(index, isOpen)}}>X</div>
            <div className="icon-name">{name.toUpperCase()}</div>
        </div>
    </>
  )
}

export default Icon