import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { CurrentUserContextProvider } from "../context/currentUserContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider session={session}>
        <CurrentUserContextProvider>
          <Component {...pageProps} />
        </CurrentUserContextProvider>
      </SessionProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
