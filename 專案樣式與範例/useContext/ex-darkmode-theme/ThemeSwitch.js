import React, { useContext } from 'react'

import Switch from 'react-switch'
import { IoMdSunny, IoMdMoon } from 'react-icons/all'

import ThemeContext from './ThemeContext'

const ThemeSwitch = () => {
  const { setTheme, mode } = useContext(ThemeContext)

  return (
    <Switch
      checked={mode === 'light' ? true : false}
      height={50}
      width={120}
      offColor="#1d1f2f"
      onColor="#FDB813"
      checkedIcon={<IoMdSunny className={'switch-' + mode} color="white" />}
      uncheckedIcon={<IoMdMoon className={'switch-' + mode} color="white" />}
      onChange={setTheme}
    />
  )
}

export default ThemeSwitch
