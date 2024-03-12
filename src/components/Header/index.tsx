import { useMemo } from 'react';
import { BaseSurface } from "@/components/BaseSurface";
import { getSpaces } from '@/utils/getSpaces';
import { Logo } from '@/components/Logo';
import { Flex } from '@/components/Flex';
import { Navigation } from '@/components/Navigation';


export const Header = () => {
  const spaceStyles = useMemo(() => getSpaces({ paddingsProps: { paddingTop: 4, paddingBottom: 4, paddingLeft: 8, paddingRight: 8 }}), [])
  return (
    <BaseSurface backgroundColor="white" elevation='elevation1' styles={[...spaceStyles]}>
      <Flex alignItems="center" justifyContent="space-between">
        <Logo />
        <Navigation />
      </Flex>
    </BaseSurface>
  )
}
