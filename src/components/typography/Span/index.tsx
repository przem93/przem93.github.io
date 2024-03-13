import { Base, BaseProps } from "@/components/typography/Base"

type Props = Omit<BaseProps, 'component'>

export const Span = ({ children, ...props }: Props) => <Base component="span" lineHeight={1} {...props}>
  {children}
</Base>
