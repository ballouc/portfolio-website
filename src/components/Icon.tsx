interface Props{
    name: string;
}

const Icon: React.FC<Props> = ( { name } ) => {
  return (
    <>
        <div className="icon-data">
            <div className="icon-image">X</div>
            <div className="icon-name">{name}</div>
        </div>
    </>
  )
}

export default Icon