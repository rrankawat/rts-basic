const EventComponent: React.FC = () => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e)
  }

  const onDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    console.log(e)
  }

  return (
    <div>
      <input type='text' onChange={onChange} />
      <div draggable onDragStart={onDragStart}>
        Drag Me!
      </div>
    </div>
  )
}

export default EventComponent
