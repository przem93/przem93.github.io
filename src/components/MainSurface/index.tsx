import stylex from "@stylexjs/stylex";
import { BaseSurface } from "@/components/BaseSurface";

interface Props {
  children?: React.ReactNode
}

const styles = stylex.create({
  main: {
    minHeight: '100svh'
  }
})

export const MainSurface = ({ children }: Props) => <BaseSurface backgroundColor="grey1" component="main" styles={[styles.main]}>
  {children}
</BaseSurface>
