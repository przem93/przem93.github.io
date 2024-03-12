import stylex, { StyleXStyles } from "@stylexjs/stylex"
import { colorTokens } from '@/styles/color.tokens.stylex'
import { fontSizeTokens, fontWeightTokens } from '@/styles/typography.tokens.stylex'

type Colors = keyof typeof colorTokens.__tokens
type FontSizes = keyof typeof fontSizeTokens.__tokens
type FontWeights = keyof typeof fontWeightTokens.__tokens

interface Props {
  children?: React.ReactNode
  color?: Colors
  fontSize?: FontSizes
  fontWeight?: FontWeights
  styles?: StyleXStyles
}

const typographyStyles = stylex.create({
  color: (color: Colors) => ({
    color: colorTokens[color],
  }),
  fontSize: (fontSize: FontSizes) => ({
    fontSize: fontSizeTokens[fontSize],
  }),
  fontWeight: (fontWeight: FontWeights) => ({
    fontWeight: fontWeightTokens[fontWeight],
  }),
})

export const Span = ({ children, color, fontSize, fontWeight, styles, }: Props) => <span {...stylex.props(
  color && typographyStyles.color(color),
  fontSize && typographyStyles.fontSize(fontSize),
  fontWeight && typographyStyles.fontWeight(fontWeight),
  styles
)}>
  {children}
</span>
