import stylex, { StyleXStyles } from "@stylexjs/stylex"
import { colorTokens } from '@/styles/color.tokens.stylex'
import { fontSizeTokens, fontWeightTokens } from '@/styles/typography.tokens.stylex'

type Colors = keyof typeof colorTokens.__tokens
type FontSizes = keyof typeof fontSizeTokens.__tokens
type FontWeights = keyof typeof fontWeightTokens.__tokens

export interface BaseProps {
  children?: React.ReactNode
  color?: Colors
  component?: keyof React.ReactHTML
  fontSize?: FontSizes
  fontWeight?: FontWeights
  lineHeight?: number | string
  styles?: StyleXStyles | [StyleXStyles | undefined]
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
  lineHeight: (lineHeight: number | string) => ({
    lineHeight,
  }),
})

export const Base = ({ children, color, component: Component = 'div', fontSize, fontWeight, lineHeight, styles, }: BaseProps) => <Component {...stylex.props(
  color && typographyStyles.color(color),
  fontSize && typographyStyles.fontSize(fontSize),
  fontWeight && typographyStyles.fontWeight(fontWeight),
  (typeof lineHeight === 'number' || typeof lineHeight === 'string') && typographyStyles.lineHeight(lineHeight),
  styles
)}>
  {children}
</Component>
