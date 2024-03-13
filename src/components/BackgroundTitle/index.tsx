import stylex from "@stylexjs/stylex"
import { colorTokens } from "../../styles/color.tokens.stylex"
import { H2 } from "@/components/typography/H2"

const styles = stylex.create({
  relative: {
    position: 'relative'
  },
  hiddenText: {
    boxShadow: `0 28px 0 ${colorTokens.green1}`,
    display: 'inline'
  },
  hiddenContainer: {
    pointerEvents: 'none',
    position: 'absolute',
    zIndex: 0,
    width: '100%',
    left: -10,
    right: 0,
    top: -60,
  },
  visibleText: {
    position: 'relative',
    zIndex: 1,
    display: 'inline'
  }
})

interface Props {
  text: string
}
  
export const BackgroundTitle = ({ text }: Props) => {
  return <div {...stylex.props(styles.relative)}>
    <span>
      <span {...stylex.props(styles.hiddenContainer)}>
        <H2 fontWeight="semiBold" color="transparent" styles={styles.hiddenText}>
          {text}
        </H2>
      </span>
      <H2 fontWeight="semiBold" styles={styles.visibleText}>{text}</H2>
    </span>
  </div>
}