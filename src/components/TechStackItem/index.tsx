import Image from 'next/image';
import stylex, { StyleXStyles } from "@stylexjs/stylex"
import { colorTokens } from '../../styles/color.tokens.stylex';
import { Flex } from '../Flex';

interface Props {
  alt: string
  height?: number
  src: string
  width?: number
  withoutBackground?: boolean
}

const baseWidth = 60
const baseHeight = 60

const boxShadow = `-7px 9px 0 ${colorTokens.green1}, 10px -9px 0 ${colorTokens.grey2}, 13px 17px 0 ${colorTokens.grey3}`

const styles = stylex.create({
  container: {
    height: baseHeight,
    position: 'relative',
    width: baseWidth,
    zIndex: 1
  },
  rounded: {
    borderRadius: '100vw',
  },
  shadows: {
    boxShadow: {
      ':hover': boxShadow
    },
    height: baseHeight,
    position: 'absolute',
    transform: {
      ':hover': 'rotate(180deg)'
    },
    transition: 'all 0.3s ease-in-out',
    width: baseWidth,
    zIndex: 0,
  },
  withoutBackground: {
    borderColor: colorTokens.black,
    borderStyle: 'inset',
    borderWidth: 4,
  },
})

type Styles = ReturnType<typeof stylex.create>

export const TechStackItem = ({
  alt,
  height = baseHeight,
  src,
  width = baseWidth,
  withoutBackground
}: Props) => {
  const flexStyles = [styles.container, styles.rounded] as Styles[]

  if (withoutBackground) {
    flexStyles.push(styles.withoutBackground)
  }

  return <Flex alignItems="center" justifyContent="center" styles={flexStyles}>
    <div {...stylex.props(styles.shadows, styles.rounded)}></div>
    <Image
      alt={alt}
      height={height}
      src={src}
      width={width}
      {...stylex.props(!withoutBackground && styles.rounded)}
    />
  </Flex>
}
