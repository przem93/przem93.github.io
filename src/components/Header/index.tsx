import { useMemo } from 'react';
import { BaseSurface } from "../BaseSurface";
import { getSpaces } from '@/utils/getSpaces';
import { Logo } from '../Logo';
import { Flex } from '../Flex';


export const Header = () => {
  const spaceStyles = useMemo(() => getSpaces({ paddingsProps: { paddingTop: 4, paddingBottom: 4, paddingLeft: 8, paddingRight: 8 }}), [])
  return (
    <BaseSurface backgroundColor="white" elevation='elevation1' styles={[...spaceStyles]}>
      <Flex justifyContent="space-between">
        <Logo />
      </Flex>
    </BaseSurface>
  )
}
