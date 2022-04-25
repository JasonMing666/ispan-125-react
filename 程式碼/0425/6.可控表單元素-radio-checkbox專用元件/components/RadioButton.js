import React from 'react'

function RadioButton(props) {
  const { value, checkedValue, setCheckedValue, ...otherProps} = props

  console.log(otherProps)

  return (
    <>
      <input
        type="radio"
        value={value}
        checked={checkedValue === value}
        onChange={(e) => {
          setCheckedValue(e.target.value)
        }}
        {...otherProps}
      />
      <label>{value}</label>
    </>
  )
}

export default RadioButton
