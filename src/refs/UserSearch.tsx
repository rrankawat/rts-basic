import { useState, useRef, useEffect } from 'react'

const users = [
  { name: 'Sarah', age: 20 },
  { name: 'Alex', age: 20 },
  { name: 'Michael', age: 20 },
]

const UserSearch: React.FC = () => {
  // const inputRef = useRef<HTMLInputElement | null>(null)
  const inputRef = useRef<any>(null)
  const [name, setName] = useState('')
  const [user, setuser] = useState<{ name: string; age: number } | undefined>()

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  const onClick = () => {
    const foundUser = users.find(user => user.name === name)
    setuser(foundUser)
  }

  return (
    <div>
      <h3>User Search</h3>
      <input
        type='text'
        ref={inputRef}
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button onClick={onClick}>Find User</button>
      <div>
        {user && user.name} {user && user.age}
      </div>
    </div>
  )
}

export default UserSearch
