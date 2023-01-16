import { useEffect, useState } from 'react'

// add typescript to timer and this-keyword
function debounce(fn: any, ms: number) {
  let timer: number | undefined;
  return () => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      timer = undefined
      fn.apply(fn, arguments)
    }, ms)
  };
}

export function useResizeListener() {
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth
  })

  useEffect(() => {
    const debouncedHandleResize = debounce(() => {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      })
    }, 500)

    window.addEventListener('resize', debouncedHandleResize)
    return () => window.removeEventListener('resize', debouncedHandleResize)
  })

  return {
    innerWidth: dimensions.width,
    innerHeight: dimensions.height
  }
}