"use client"

import Image from 'next/image'
import { Flex } from '../Flex';
import { Typing } from '../Typing';
import { Span } from '@/components/typography/Span';
import stylex from '@stylexjs/stylex';
import { useEffect, useState } from 'react';
import Link from 'next/link';

const styles = stylex.create({
  link: {
    textDecoration: 'none',
  },
  text: {
    lineHeight: 1
  },
  textContainer: {
    height: 48
  }
})

const firstName = 'PRZEMEK'
const lastName = 'RATAJCZAK'

const software = 'SOFTWARE'
const developer = 'DEVELOPER'

export const Logo = () => {
  const [firstLine, setFirstLine] = useState(firstName)
  const [secondLine, setSecondLine] = useState(lastName)

  useEffect(() => {
    const interval = setInterval(() => {
      setFirstLine((value) => value === firstName ? software : firstName)
      setSecondLine((value) => value === lastName ? developer : lastName)
    }, 10000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <Link href="/" {...stylex.props(styles.link)}>
      <Flex alignItems="center" gap={3}>
        <Image
          src="/logo.svg"
          width={54}
          height={54}
          alt="Logo"
        />
        <Flex flexDirection="column" styles={styles.textContainer}>
          <Span color="black" fontSize="large" fontWeight="semiBold" styles={styles.text}>
            <Typing text={firstLine} />
          </Span>
          <Span color="black" fontSize="large" fontWeight="light" styles={styles.text}>
            <Typing delay={1200} text={secondLine} showDashAfterFinish />
          </Span>
        </Flex>
      </Flex>
    </Link>
  )
}
