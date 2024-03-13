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

const styles = stylex.create({
  link: {
    textDecoration: 'none',
    textShadow: {
      default: 'none',
      ':hover': `3px 4px 0 ${colorTokens.green1}`
    },
  },
  current: {
    textShadow: `3px 4px 0 ${colorTokens.green1}`
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
