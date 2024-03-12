'use client'

import stylex from "@stylexjs/stylex"
import { useEffect, useMemo, useRef, useState } from "react"
import { Span } from "@/components/typography/Span"

interface Props {
  delay?: number
  text: string
  showDashAfterFinish?: boolean
  time?: number
}

const pulse = stylex.keyframes({
  '0%': {opacity: '0'},
  '50%': {opacity: '1'},
  '100%': {opacity: '0'},
});

const styles = stylex.create({
  dash: {
    animationName: pulse,
    animationDuration: '1s',
    animationIterationCount: 'infinite'
  }
})

export const Typing = ({ delay = 0, text, time = 1200, showDashAfterFinish }: Props) => {
  const [letterIndex, setLetterIndex] = useState(0)
  const timeoutRef = useRef<NodeJS.Timeout | null>()
  const afterTyping = letterIndex > 1
  const beforeFinish = letterIndex + 1 < text.length
  const isTyping = afterTyping && beforeFinish
  const showDash = isTyping || (afterTyping && showDashAfterFinish)

  const timesChain = useMemo(() => {
    const length = text.length;
    const middle = time / length;
    const percent = 0.2 // (middle / time)
    const middlePart = percent * middle;
    const min = Math.floor(middle - middlePart);
    const max = Math.ceil(middle + middlePart);
    const chain = [...Array(length)].reduce<number[]>((currentChain, _, index) => {
      if (index === 0 && delay) {
        return [
          ...currentChain,
          0
        ]
      }
      const currentSum = currentChain.reduce((sum, number) => sum + number, 0)
      const currentMin = Math.max(min, currentSum * percent)
      const currentMax = Math.max(Math.min(time - currentSum, max), currentMin)
      return [
        ...currentChain,
        index + 1 === length
          ? Math.max(0, time - currentSum)
          : Math.floor(Math.random() * (currentMax - currentMin) + currentMin)
      ]
    }, [])

    return [
      chain[0] + delay,
      ...chain.slice(1)
    ]
  }, [delay, text, time])

  useEffect(() => {
    setLetterIndex(0)
  }, [timesChain])

  useEffect(() => {
    if (timesChain[letterIndex] || timesChain[letterIndex] === 0) {
      timeoutRef.current = setTimeout(() => {
        setLetterIndex((value) => value + 1)
      }, timesChain[letterIndex])
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
        timeoutRef.current = null
      }  
    }
  }, [letterIndex, timesChain])
  
  return <>
    {text.slice(0, letterIndex)}
    {showDash && <Span color="green2" styles={!isTyping && styles.dash}>_</Span>}
  </>
}