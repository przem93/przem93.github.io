import Image from 'next/image';
import stylex from '@stylexjs/stylex';

import { BackgroundTitle } from '@/components/BackgroundTitle';
import { Flex } from '@/components/Flex';
import { P } from '@/components/typography/P';
import { colorTokens } from '../styles/color.tokens.stylex';
import { H1 } from '@/components/typography/H1';
import { Span } from '@/components/typography/Span';
import { getSpaces } from '@/utils/getSpaces';
import { TechStackItem } from '@/components/TechStackItem';

const lowShadow = `-40px 18px 0 ${colorTokens.green1}, 29px -34px 0 ${colorTokens.grey2}, 49px 43px 0 ${colorTokens.grey3}`
const hightShadow = `-48px 22px 0 ${colorTokens.green1}, 35px -41px 0 ${colorTokens.grey2}, 59px 52px 0 ${colorTokens.grey3}`

const boxShadowAnimation = stylex.keyframes({
  '0%': {
    boxShadow: lowShadow
  },
  '100%': {
    boxShadow: hightShadow
  }
})

const styles = stylex.create({
  appContainer: {
    maxWidth: 1024,
  },
  avatar: {
    animationComposition: 'add',
    animationDirection: 'alternate',
    animationDuration: '1.5s',
    animationIterationCount: 'infinite',
    animationName: boxShadowAnimation,
    animationTimingFunction: 'ease-in-out',
    borderRadius: '100vw',
  },
  center: {
    textAlign: 'center'
  },
})

const appContainerSpaces = getSpaces({
  marginsProps: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  paddingsProps: {
    paddingTop: 25,
    paddingBottom: 8.5
  }
})

const techStackSpaces = getSpaces({
  marginsProps: {
    marginTop: 43,
    marginBottom: 16
  }
})

const fullNameSpaces = getSpaces({
  marginsProps: {
    marginTop: 21,
  }
})

const animationAngle60 = stylex.keyframes({
  "0%": {
    marginTop: 29.992675197034483
  },
  "16%": {
    marginTop: -28.363354647633503
  },
  "33%": {
    marginTop: 24.034579072014914
  },
  "50%": {
    marginTop: -17.41833552636943
  },
  "66%": {
    marginTop: 9.1443186330665
  },
  "83%": {
    marginTop: 0
  },
  "100%": {
    marginTop: -9.1443186330665
  }
})
const animationAngle120 = stylex.keyframes({
  "0%": {
    marginTop: -28.363354647633503
  },
  "16%": {
    marginTop: 24.034579072014914
  },
  "33%": {
    marginTop: -17.41833552636943
  },
  "50%": {
    marginTop: 9.1443186330665
  },
  "66%": {
    marginTop: 0
  },
  "83%": {
    marginTop: -9.1443186330665
  },
  "100%": {
    marginTop: 17.41833552636943
  }
})
const animationAngle180 = stylex.keyframes({
  "0%": {
    marginTop: 24.034579072014914
  },
  "16%": {
    marginTop: -17.41833552636943
  },
  "33%": {
    marginTop: 9.1443186330665
  },
  "50%": {
    marginTop: 0
  },
  "66%": {
    marginTop: -9.1443186330665
  },
  "83%": {
    marginTop: 17.41833552636943
  },
  "100%": {
    marginTop: -24.034579072014914
  }
})
const animationAngle240 = stylex.keyframes({
  "0%": {
    marginTop: -17.41833552636943
  },
  "16%": {
    marginTop: 9.1443186330665
  },
  "33%": {
    marginTop: 0
  },
  "50%": {
    marginTop: -9.1443186330665
  },
  "66%": {
    marginTop: 17.41833552636943
  },
  "83%": {
    marginTop: -24.034579072014914
  },
  "100%": {
    marginTop: 28.363354647633503
  }
})
const animationAngle300 = stylex.keyframes({
  "0%": {
    marginTop: 9.1443186330665
  },
  "16%": {
    marginTop: 0
  },
  "33%": {
    marginTop: -9.1443186330665
  },
  "50%": {
    marginTop: 17.41833552636943
  },
  "66%": {
    marginTop: -24.034579072014914
  },
  "83%": {
    marginTop: 28.363354647633503
  },
  "100%": {
    marginTop: -29.992675197034483
  }
})
const animationAngle360 = stylex.keyframes({
  "0%":{
    marginTop: 0
  },
  "16%": {
    marginTop: -9.1443186330665
  },
  "33%": {
    marginTop: 17.41833552636943
  },
  "50%": {
    marginTop: -24.034579072014914
  },
  "66%": {
    marginTop: 28.363354647633503
  },
  "83%": {
    marginTop: -29.992675197034483
  },
  "100%": {
    marginTop: 28.767471702429194
  }
})

export default function Home() {
  return (
    <div {...stylex.props(styles.appContainer, appContainerSpaces)}>
      <Flex alignItems="center" gap={16}>
        <div>
          <BackgroundTitle text="My name is Przemek. I am Software Engineer." />
          <P>
            My programming journey started in 2009, and I&apos;ve been a professional developer since 2014.
            My experience is primarily in web app development.
            I&apos;m deeply passionate about frontend technologies but also possess experience in full-stack roles. Since 2015, I&apos;ve specialized in React.js.
          </P>
        </div>
        <Image
          {...stylex.props(styles.avatar)}
          src="/avatar.jpeg"
          width={360}
          height={360}
          alt="Avatar"
        />
      </Flex>
      <H1 styles={[...techStackSpaces, styles.center]}>Tech <Span fontWeight="light">stack</Span></H1>
      <Flex justifyContent="space-around">
        <TechStackItem 
          alt="React.js technology"
          src="/react.svg"
        />
        <TechStackItem 
          alt="JavaScript technology"
          src="/javascript.svg"
        />
        <TechStackItem 
          alt="TypeScript technology"
          src="/typescript.svg"
        />
        <TechStackItem 
          alt="CSS3 technology"
          height={42}
          src="/css3.svg"
          width={30}
          withoutBackground
        />
        <TechStackItem 
          alt="HTML5 technology"
          height={42}
          src="/html5.svg"
          width={42}
          withoutBackground
        />
        <TechStackItem 
          alt="Node.js technology"
          height={44}
          src="/node-js.svg"
          width={39}
          withoutBackground
        />
      </Flex>
      <div {...stylex.props(fullNameSpaces, styles.center)}>
        <Span fontWeight="light" fontSize="medium">
          <Span fontWeight="bold">P</Span>rzemysław <Span fontWeight="bold">R</Span>atajczak
        </Span>
      </div>
    </div>
  );
}
