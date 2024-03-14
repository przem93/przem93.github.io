"use client" 

import Link from "next/link"
import Image from "next/image"
import stylex from "@stylexjs/stylex"
import { colorTokens } from "../../styles/color.tokens.stylex"

interface Props {
  alt: string
  href: string
  src: string
}

const styles = stylex.create({
  icon: {
    filter: {
      default: `drop-shadow(0 0 0 ${colorTokens.green1})`,
      ':hover': `drop-shadow(5px 7px 0 ${colorTokens.green1})`
    },
    lineHeight: 0,
    transition: 'filter 0.4s ease-in-out',
  },
  link: {
    lineHeight: 0,
  }
})

export const NavigationIconLink = ({ alt, href, src }: Props) => (
  <Link
    href={href}
    target="_blank"  
    {...stylex.props(styles.link)}
  >
    <Image 
      alt={alt}
      height={32}
      src={src}
      width={32}
      {...stylex.props(styles.icon)}
    />
  </Link>
)
