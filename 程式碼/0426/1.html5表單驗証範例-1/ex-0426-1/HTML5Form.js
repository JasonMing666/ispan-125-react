function HTML5Form() {
  return (
    <>
      <h1>HTML5表單驗証</h1>
      <form>
        <div>
          <label>帳號</label>
          <input type="text" />
        </div>
        <div>
          <label>Email</label>
          <input type="text" />
        </div>
        <div>
          <label>密碼</label>
          <input type="text" />
        </div>
        <div>
          <label>出生年月日</label>
          <input type="date" />
        </div>
        <button type="submit">送出</button>
      </form>
    </>
  )
}

export default HTML5Form
