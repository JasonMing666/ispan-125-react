import { useState, useEffect } from 'react'

function UserList(props) {
  const [users, setUsers] = useState([])

  const fetchUser = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    setUsers(data)
  }

  // didMount
  useEffect(() => {
    // 載入資料的時間點
    fetchUser()
  }, [])

  return (
    <>
      <h1>UserList</h1>
      <table>
        <tbody>
          {users.map((v, i) => {
            return (
              <tr key={v.id}>
                <td>{v.id}</td>
                <td>{v.name}</td>
                <td>{v.email}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}

export default UserList
