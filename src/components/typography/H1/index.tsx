import { Base, BaseProps } from "../_Base"

type Props = Omit<BaseProps, 'component' | 'fontSize'>

export const H1 = ({ children, ...props }: Props) => <Base component="h1" fontSize="xxLarge" lineHeight={1} {...props}>
  {children}
</Base>
