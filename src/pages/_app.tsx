import type { NextPage } from "next";
import Head from "next/head";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

//
import store from "@/store";
import createEmotionCache from "@/config/emotionCache";
import theme from "@/theme";

const clientSideEmotionCache = createEmotionCache();

export type AppPropsExtended = AppProps & {
  Component: NextPage;
  emotionCache: EmotionCache;
};

export default function App({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}: AppPropsExtended) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Next.13 Boilerplate</title>
      </Head>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {getLayout(<Component {...pageProps} />)}
        </ThemeProvider>
      </Provider>
    </CacheProvider>
  );
}
