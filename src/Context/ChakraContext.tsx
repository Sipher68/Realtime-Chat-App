'use client';

import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '@/chakra/theme';

export interface ChakraThemeContextProps {
  children: React.ReactNode;
}

export default function ChakraContext({ children }: ChakraThemeContextProps) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
