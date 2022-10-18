import Store from ".";

const initialState = {
  hasLoggedIn: false,
};

function useAppStore() {
  const [state, setState] = Store.useStore();

  const setHasLoggedIn = (bool) => {
    setState((draft) => {
      draft.hasLoggedIn = bool;
    });
  };

  return [
    state,
    {
      setHasLoggedIn,
    },
  ];
}

export { initialState, useAppStore };
