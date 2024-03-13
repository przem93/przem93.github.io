import { H2 } from "@/components/typography/H2";
import stylex from "@stylexjs/stylex";

const styles = stylex.create({
  center: {
    textAlign: 'center'
  }
})


export default function Custom404() {
  return <H2 styles={styles.center}>404 - Page Not Found</H2>
}