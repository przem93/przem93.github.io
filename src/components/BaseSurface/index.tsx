import stylex from "@stylexjs/stylex"
import { colorTokens } from '@/styles/color.tokens.stylex'
import { elevationsTokens } from '../../styles/elevations.tokens.stylex'

type SurfaceBackgroundColor = keyof Pick<typeof colorTokens.__tokens, 'grey1' | 'transparent' | 'white'>
type SurfaceElevation = keyof typeof elevationsTokens.__tokens

interface Styles {
  backgroundColor: SurfaceBackgroundColor
  elevation: SurfaceElevation
}

type StylexPropsParams<T extends () => unknown> = T extends (args: infer P) => unknown ? P : never;

interface Props extends Partial<Styles> {
  children?: React.ReactNode
  component?: keyof React.ReactHTML
  styles?: StylexPropsParams<typeof stylex.attrs>[]
}

const surfaceStyles = stylex.create({
  dynamic: (styles: Styles) => ({ 
    backgroundColor: colorTokens[styles.backgroundColor],
    boxShadow: elevationsTokens[styles.elevation],
  }),
})

export const BaseSurface = ({ children, component, styles, ...restSurfaceStyles }: Props) => {
  const Component = component || 'div'
  return <Component {...stylex.props(
    surfaceStyles.dynamic({
      backgroundColor: 'transparent',
      elevation: 'elevation0',
      ...restSurfaceStyles
    }),
    ...(styles || [])
  )}>
    {children}
  </Component>
}
