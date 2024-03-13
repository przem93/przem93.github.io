import { getSpaces } from "@/utils/getSpaces"
import stylex, { StyleXStyles } from "@stylexjs/stylex"
import { CSSProperties } from "@stylexjs/stylex/lib/StyleXCSSTypes"

interface Props {
  alignItems?: CSSProperties['alignItems']
  children?: React.ReactNode
  flexDirection?: CSSProperties['flexDirection']
  gap?: number
  justifyContent?: CSSProperties['justifyContent']
  styles?: [StyleXStyles | undefined] | StyleXStyles
}

const flexStyles = stylex.create({
  flex: {
    display: 'flex'
  },
  alignItems: (alignItems: CSSProperties['alignItems']) => ({ alignItems }),
  flexDirection: (flexDirection: CSSProperties['flexDirection']) => ({ flexDirection }),
  justifyContent: (justifyContent: CSSProperties['justifyContent']) => ({ justifyContent })
})

export const Flex = ({ alignItems, children, flexDirection, gap, justifyContent, styles }: Props) => <div {...stylex.props(
  getSpaces({ gap }),
  flexStyles.flex,
  flexStyles.alignItems(alignItems),
  flexStyles.flexDirection(flexDirection),
  flexStyles.justifyContent(justifyContent),
  styles
)}>
  {children}
</div>
