import '../ui/styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material';
import tema from '../ui/themes/tema';
import Cabecalho from '../ui/components/Cabecalho/Cabecalho'
import CabecalhoAdmin from '../ui/components/CabecalhoAdmin/CabecalhoAdmin'
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <ThemeProvider theme={tema} >
        {router.pathname === '/' ? <Cabecalho /> : <CabecalhoAdmin />}
        <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp
