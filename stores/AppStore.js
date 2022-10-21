import Store from ".";

const initialState = {
  hasLoggedIn: false,
  activeIndex: 0,
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

  return [
    state,
    {
      setHasLoggedIn,
      setActiveIndex,
    },
  ];
}

export { initialState, useAppStore };
