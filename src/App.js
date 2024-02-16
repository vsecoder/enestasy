import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Stack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';


function App() {
  const date = new Date();
  const month = date.getMonth();
  const day = date.getDate();

  return (
    <ChakraProvider theme={theme}>
      <Box fontSize="xl" bgGradient='linear-gradient(180deg, #43e97b 15%, #38f9d7 30%, rgba(255,255,255,0) 59%)'>
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>
            <Logo h="150px" pointerEvents="none" borderRadius='xl' objectFit='cover' />
            <Stack spacing={2} textAlign="center">
              <Text fontSize='4xl'>
                enestasy
              </Text>
              <Text color='gray.500'>
                Moscow Lyceum student
              </Text>
              <Text>
                <Code fontSize="xl">IT business</Code> <Code fontSize="xl">Manager</Code>
              </Text>
              <Text>
                {month === 10 && day === 21 ?
                  (
                    <Link href="https://t.me/enestasy7" color="teal.500" isExternal>А ты уже поздравил меня с ДР?</Link>
                  ) : (
                    <Link href="https://t.me/enestasy7" color="teal.500" isExternal>Telegram</Link>
                  )
                }
              </Text>
            </Stack>
          </VStack>
        </Grid>
        <Text fontSize='1.5xl' textAlign='center' color='gray.500'>
          Made with <span role="img" aria-label="heart">❤️</span> by <Link href="https://t.me/vsecoder" color="teal.500" isExternal>@vsecoder</Link>
        </Text>
      </Box>
    </ChakraProvider>
  );
}

export default App;
