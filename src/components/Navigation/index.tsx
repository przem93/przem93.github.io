import { Flex } from "@/components/Flex"
import { NavigationLink } from "../NavigationLink"

export const Navigation = () => {
  return <nav>
    <Flex gap={4}>
      <NavigationLink href="/about-me" text="About me" />
      <NavigationLink href="/my-experience" text="My experience" />
      <NavigationLink href="/blog" text="Blog" />
      <NavigationLink href="/contact" text="Contact" />
    </Flex>
  </nav>
}