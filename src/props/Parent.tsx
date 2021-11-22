import { ChildAsFC } from './Child'

const Parent = () => {
  return (
    <ChildAsFC color='red' onClick={() => console.log('Clicked')}>
      Dummy Text
    </ChildAsFC>
  )
}

export default Parent
