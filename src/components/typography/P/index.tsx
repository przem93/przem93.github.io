import { Base, BaseProps } from  "../_Base"

type Props = Omit<BaseProps, 'component' | 'fontSize'>

export const P = ({ children, ...props }: Props) => <Base component="p" fontSize="medium" lineHeight={1.4} {...props}>
  {children}
</Base>
