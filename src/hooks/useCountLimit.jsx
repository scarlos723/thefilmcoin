import { useEffect, useRef } from 'react'
import { addMinutes, intervalToDuration } from 'date-fns'
export const useCountLimit = (props) => {
  const counterRef = useRef(null)
  useEffect(() => {
    if (!counterRef.current) return
    let futureTime = addMinutes(Date.now(), props.minsLimit)
    const interval = setInterval(() => {
      const elapsedTime = intervalToDuration({
        start: Date.now(),
        end: futureTime
      })
      counterRef.current.innerHTML = `${elapsedTime.minutes}:${elapsedTime.seconds}`
      if (elapsedTime.minutes === 0 && elapsedTime.seconds === 0) {
        futureTime = addMinutes(Date.now(), props.minsLimit)
        props.handlerGetFliksPrice()
        // Execute your code here
      }
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return counterRef
}
