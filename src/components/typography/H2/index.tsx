import { Base, BaseProps } from  "../_Base"

type Props = Omit<BaseProps, 'component' | 'fontSize'>

export const H2 = ({ children, ...props }: Props) => <Base component="h2" fontSize="xLarge" {...props}>
  {children}
</Base>
