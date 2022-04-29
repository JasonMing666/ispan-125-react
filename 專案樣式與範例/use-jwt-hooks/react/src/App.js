import Demo from './Demo'
import { JwtCsrfTokenProvider } from './utils/csrf-hook/useJwtCsrfToken'

function App() {
  return (
    <JwtCsrfTokenProvider>
      <Demo />
    </JwtCsrfTokenProvider>
  )
}

export default App
