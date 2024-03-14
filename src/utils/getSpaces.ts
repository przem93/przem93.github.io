import { spaceBase } from "@/styles/spacing.tokens.stylex"
import stylex from "@stylexjs/stylex"

const paddings = ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'] as const
const margins = ['marginTop', 'marginBottom', 'marginLeft', 'marginRight'] as const

type SpaceValue = number | string

const getSpace = (value: SpaceValue) => typeof value === "string" ? value : value * spaceBase

const paddingStyles = stylex.create({
  paddingTop: (value: SpaceValue) => ({
    paddingTop: getSpace(value)
  }),
  paddingBottom: (value: SpaceValue) => ({
    paddingBottom: getSpace(value)
  }),
  paddingLeft: (value: SpaceValue) => ({
    paddingLeft: getSpace(value)
  }),
  paddingRight: (value: SpaceValue) => ({
    paddingRight: getSpace(value)
  })
})

const marginStyles = stylex.create({
  marginTop: (value: SpaceValue) => ({
    marginTop: getSpace(value)
  }),
  marginBottom: (value: SpaceValue) => ({
    marginBottom: getSpace(value)
  }),
  marginLeft: (value: SpaceValue) => ({
    marginLeft: getSpace(value)
  }),
  marginRight: (value: SpaceValue) => ({
    marginRight: getSpace(value)
  })
})

const otherSpaces = stylex.create({
  gap: (value: SpaceValue) => ({
    gap: getSpace(value)
  }),
})

type MarginKey = typeof margins[number]
type MarginProps = {[k in MarginKey]?: SpaceValue }
type PaddingKey = typeof paddings[number]
type PaddingProps = {[k in PaddingKey]?: SpaceValue }

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
