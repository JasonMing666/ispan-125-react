import { useState, useEffect } from 'react'

function UserList(props) {
  const [users, setUsers] = useState([])

  const fetchUser = async () => {
    //向遠端伺服器get資料
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()

    // 載入資料後設定到狀態中
    // 設定到狀態後，因改變狀態會觸發updating生命周期，然後重新render一次
    setUsers(data)
  }

  // didMount - 載入資料的時間點
  useEffect(() => {
    // 向伺服器要求get資料
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
