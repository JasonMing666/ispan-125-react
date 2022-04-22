//import data from '../data/student.json'
import { data } from '../data/student'

function Student() {
  console.log(data)

  return (
    <>
      <h1>Student</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>id</th>
            <th>姓名</th>
            <th>生日</th>
          </tr>
        </thead>
        <tbody>
          {data.map((v, i) => {
            return (
              <tr key={v.id}>
                <td>{v.id}</td>
                <td>{v.name}</td>
                <td>{v.birth}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}

export default Student
