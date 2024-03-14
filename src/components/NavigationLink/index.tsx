"use client" 

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Span } from "@/components/typography/Span"
import stylex from "@stylexjs/stylex"
import { colorTokens } from "../../styles/color.tokens.stylex"

interface Props {
  href: string
  text: string
}

const textShadow = `5px 7px 0 ${colorTokens.green1}`

const styles = stylex.create({
  link: {
    textDecoration: 'none',
    textShadow: {
      default: 'none',
      ':hover': textShadow
    },
    transition: 'text-shadow 0.3s ease-in-out'
  },
  current: {
    textShadow
  }
})

export const NavigationLink = ({ href, text }: Props) => {
  const pathName = usePathname()

  return (
    <Link href={href} {...stylex.props(styles.link, pathName === href && styles.current)}>
      <Span color="black" fontWeight="semiBold">{text}</Span>
    </Link>
  )
}
