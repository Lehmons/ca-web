import Store from ".";

const initialState = {
  hasLoggedIn: false,
  activeIndex: 0,
	isLogoAnimated: false
};

function useAppStore() {
  const [state, setState] = Store.useStore();

  const setHasLoggedIn = (bool) => {
    setState((draft) => {
      draft.hasLoggedIn = bool;
    });
  };
  
	const setActiveIndex = i => {
    setState((draft) => {
      draft.activeIndex = i;
    });
  };

	const setIsLogoAnimated = bool => {
    setState((draft) => {
      draft.isLogoAnimated = bool;
    });
  };

  return [
    state,
    {
      setHasLoggedIn,
      setActiveIndex,
			setIsLogoAnimated
    },
  ];
}

export { initialState, useAppStore };
