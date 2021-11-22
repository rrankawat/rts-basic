interface ChildProps {
  color: string
  onClick: () => void
}

// export const Child = (props: ChildProps) => {
//   return <h1>Hi There!</h1>
// }

// export const Child = ({ color, onClick }: ChildProps) => {
//   return (
//     <h1>
//       {color}
//       <button onClick={onClick}>Click Me</button>
//     </h1>
//   )
// }

export const ChildAsFC: React.FC<ChildProps> = ({
  color,
  onClick,
  children,
}) => {
  return (
    <>
      <h1>{color}</h1>
      <p>{children}</p>
      <button onClick={onClick}>Click Me</button>
    </>
  )
}
