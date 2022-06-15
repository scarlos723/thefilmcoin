import { useEffect } from 'react'

export const useResize = (callback) => {
  useEffect(() => {
    const handleResize = () => {
      callback()
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [callback])
}
