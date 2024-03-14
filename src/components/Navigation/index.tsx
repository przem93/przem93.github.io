import { Flex } from "@/components/Flex"
import { NavigationLink } from "../NavigationLink"
import { NavigationIconLink } from "../NavigationIconLink"

export const Navigation = () => {
  return <nav>
    <Flex alignItems="center" gap={4}>
      <NavigationLink href="/about-me" text="About me" />
      <NavigationLink href="/my-experience" text="My experience" />
      <NavigationLink href="/blog" text="Blog" />
      <NavigationLink href="/contact" text="Contact" />
      <NavigationIconLink 
        alt="LinkedIn - Przemysław Ratajczak"
        href="https://www.linkedin.com/in/przemys%C5%82aw-ratajczak/" 
        src="/linkedin.svg"
      />
      <NavigationIconLink 
        alt="CV - Przemysław Ratajczak"
        href="https://drive.google.com/file/d/1Sg-OxkTXCOCopL35BsXXs26oGyjpxiKQ/view?usp=sharing" 
        src="/cv.svg"
      />
      <NavigationIconLink 
        alt="Github - Przemysław Ratajczak"
        href="https://github.com/przem93" 
        src="/github.svg"
      />
    </Flex>
  </nav>
}