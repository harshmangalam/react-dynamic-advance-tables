import { createContext, useContext, useReducer } from "react";

const defaultState = {
  activeEvent: null,
  selectedEvents: [],
};
const StateContext = createContext(defaultState);

const DispatchContext = createContext(null);

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "ADD_SELECTED_EVENT":
      let index = state.selectedEvents.findIndex(
        (event) => event.id === payload.id
      );

      if (index !== -1) {
        return state;
      }
      return {
        ...state,
        selectedEvents: [...state.selectedEvents, payload],
      };

    case "REMOVE_SELECTED_EVENT":
      let updatedSelectedEvents = state.selectedEvents.filter(
        (event) => event.id !== payload
      );
      return {
        ...state,
        selectedEvents: updatedSelectedEvents,
      };

    case "SET_ACTIVE_EVENT":
      return {
        ...state,
        activeEvent: payload,
      };

    default:
      throw new Error(`Unknown dispatch event type :- ${type}`);
  }
};

function AppContext({ children }) {
  const [state, defaultDispatch] = useReducer(reducer, defaultState);
  const dispatch = (type, payload) => defaultDispatch({ type, payload });

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
}

export const useAppState = () => useContext(StateContext);
export const useAppDispatch = () => useContext(DispatchContext);

export default AppContext;
