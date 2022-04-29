import { useState, useEffect, useContext, createContext } from 'react'
import Loader from '../../components/Loader'

export function useSpinner(timeout = 2000) {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (loading)
      setTimeout(() => {
        setLoading(false)
      }, timeout)
  }, [loading])

  //const SpinnerComponent = ({ loading }) => <Spinner loading={loading} />

  return {
    spinner: <Loader loading={loading} />,
    setLoading,
  }
}
