import React, { useState } from 'react'
import './DemoApp.css'
import ThemeContext from './ThemeContext'
import ThemeSwitch from './ThemeSwitch'

export default function App() {
  const [mode, setMode] = useState('light')

  // Mode toggle
  const setTheme = () => setMode(mode === 'dark' ? 'light' : 'dark')

  return (
    <ThemeContext.Provider
      value={{
        mode,
        setTheme,
      }}
    >
      <div className={`app text ${mode}`}>
        <h1 className={`header`}>React 黑暗/光明 context 佈景應用展示</h1>
        <h2>
          目前佈景使用 <span className={mode + '-highlight'}>{mode}</span> 模式
        </h2>
        <ThemeSwitch />
      </div>
    </ThemeContext.Provider>
  )
}
