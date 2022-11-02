import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import Store from "../stores";
import { initialState as appStore } from "../stores/AppStore";
import GlobalStyles from "../components/Styles/GlobalStyles";
import theme from "../components/Styles/Theme";
import { ThemeProvider } from "styled-components";
import scrollToWithCb from "../lib/Utils/scrollToWithCb";
import Settings from "../components/Settings";

// Build initial state
const initialState = {
  ...appStore,
};

const ThemeWrapper = (props) => (
  <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
);

const pageVariants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

const pageTransition = {
  type: "tween",
  ease: [0.42, 0, 0.58, 1],
  duration: 0.3,
};

const pageStyle = {
  position: "absolute",
};

const MyApp = ({ Component, pageProps, router }) => {
  const onExitComplete = () => {
    resetScrollPosition();
  };

  const initRouterListeners = () => {
    const routes = [];

    router.events.on("routeChangeStart", (url) => {
      pushCurrentRouteInfo();
    });

    function pushCurrentRouteInfo() {
      const { scrollY } = window;
      routes.push({ pathname: router.pathname, scrollY });
    }
  };

  const resetScrollPosition = () => {
		setTimeout(() => {
			window.scrollTo(0, 0);
		}, 0);
  };

  const setiOSViewportHeight = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  };

  const onBackNavigation = (e) => {
    // The popstate event is fired each time when the current history entry changes.
    // if (e?.state?.url === "/editorial/[slug]") {
    //   e.preventDefault();
    //   router.push(`${window.location.pathname}`);
    // }
  };

  useEffect(() => {
    initRouterListeners();
    resetScrollPosition();
  }, []);

  return (
    <ThemeWrapper>
      <Store.Provider initialState={initialState}>
        <Settings />
        <AnimatePresence mode="wait">
          <motion.div
            variants={pageVariants}
            key={router?.asPath}
            transition={{ ...pageTransition }}
            initial="initial"
            animate="in"
            exit="out"
          >
            <Component {...pageProps} />
          </motion.div>
          <GlobalStyles />
        </AnimatePresence>
      </Store.Provider>
    </ThemeWrapper>
  );
};

export default MyApp;
