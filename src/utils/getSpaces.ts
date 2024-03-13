import { spaceBase } from "@/styles/spacing.tokens.stylex"
import stylex from "@stylexjs/stylex"

const paddings = ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'] as const
const margins = ['marginTop', 'marginBottom', 'marginLeft', 'marginRight'] as const

const getSpace = (multiply: number) => multiply * spaceBase

const paddingStyles = stylex.create({
  paddingTop: (multiply: number) => ({
    paddingTop: getSpace(multiply)
  }),
  paddingBottom: (multiply: number) => ({
    paddingBottom: getSpace(multiply)
  }),
  paddingLeft: (multiply: number) => ({
    paddingLeft: getSpace(multiply)
  }),
  paddingRight: (multiply: number) => ({
    paddingRight: getSpace(multiply)
  })
})

const marginStyles = stylex.create({
  marginTop: (multiply: number) => ({
    marginTop: getSpace(multiply)
  }),
  marginBottom: (multiply: number) => ({
    marginBottom: getSpace(multiply)
  }),
  marginLeft: (multiply: number) => ({
    marginLeft: getSpace(multiply)
  }),
  marginRight: (multiply: number) => ({
    marginRight: getSpace(multiply)
  })
})

const otherSpaces = stylex.create({
  gap: (multiply: number) => ({
    gap: getSpace(multiply)
  }),
})

type MarginKey = typeof margins[number]
type MarginProps = {[k in MarginKey]?: number }
type PaddingKey = typeof paddings[number]
type PaddingProps = {[k in PaddingKey]?: number }

interface Params {
  gap?: number
  marginsProps?: MarginProps
  paddingsProps?: PaddingProps
}

export const getSpaces = ({ gap, marginsProps, paddingsProps }: Params) => {
  let spaces = []

  if (gap) {
    spaces.push(otherSpaces.gap(gap))
  }

  if (marginsProps) {
    spaces = [
      ...spaces,
      (Object.keys(marginsProps) as MarginKey[]).map((key) => marginStyles[key](marginsProps[key] ?? 0))
    ]
  }

  if (paddingsProps) {
    spaces = [
      ...spaces,
      (Object.keys(paddingsProps) as PaddingKey[]).map((key) => paddingStyles[key](paddingsProps[key] ?? 0))
    ]
  }

  return spaces
}
