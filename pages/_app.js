import Link from 'next/link'
import theme from '../styles/theme';
import '../styles/globals.css';
import {
  ChakraProvider,
  ColorModeProvider,
  useColorMode,
  Box,
  IconButton,
  HStack,
} from '@chakra-ui/react';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={theme}>
    <div>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/">
          <a>Profile</a>
        </Link>
        <Link href="/protected">
          <a>Protected</a>
        </Link>
      </nav>
    </div>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
