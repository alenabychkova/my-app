import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function useScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0) // Scroll to the top
  }, [pathname])
}

export default useScrollToTop
