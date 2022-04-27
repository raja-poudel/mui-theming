import { ThemeProvider } from '@emotion/react';
import { useState } from 'react';
import '../styles/globals.css'
import { theme  } from '../theme';

function MyApp({ Component, pageProps }) {
  const [ mode, setMode ] = useState("ligth");
  const getLayout = Component.getLayout ?? ((page) => page);
  return <>
    <ThemeProvider theme={theme(mode)}>
      {getLayout(<Component mode={mode} setMode={setMode} {...pageProps} />)}
    </ThemeProvider>
  </>
}

export default MyApp
