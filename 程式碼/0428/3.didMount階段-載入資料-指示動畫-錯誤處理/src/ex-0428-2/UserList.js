import { useState, useEffect } from 'react'

function UserList(props) {
  const [users, setUsers] = useState([])
  // 載入指示器用
  const [isLoading, setIsLoading] = useState(true)
  // 錯誤訊息用
  const [error, setError] = useState('')

  const fetchUser = async () => {
    //向遠端伺服器get資料
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users')

      const data = await response.json()

      // 載入資料後設定到狀態中
      // 設定到狀態後，因改變狀態會觸發updating生命周期，然後重新render一次
      if (Array.isArray(data)) {
        setUsers(data)
      }
    } catch (e) {
      // 作錯誤處理
      console.log(e)
      setError(e.message)
    }
  }

  const spinner = (
    <div className="spinner-border text-primary" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  )

  const userListTable =
    error !== '' ? (
      error
    ) : (
      <table className="table">
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
    )

  // didMount - 載入資料的時間點
  useEffect(() => {
    // 向伺服器要求get資料
    fetchUser()

    // 關起載入指示動畫
    setTimeout(() => {
      setIsLoading(false)
    }, 1500)
  }, [])

  return (
    <>
      <h1>UserList</h1>
      {isLoading ? spinner : userListTable}
    </>
  )
}

export default UserList
