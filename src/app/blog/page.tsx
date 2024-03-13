import { H2 } from "@/components/typography/H2";
import stylex from "@stylexjs/stylex";

const styles = stylex.create({
  center: {
    textAlign: 'center'
  }
})

export default function Blog() {
  return (
    <div>
      <H2 styles={styles.center}>Working in progress...</H2>
    </div>
  );
}