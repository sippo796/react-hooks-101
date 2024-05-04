import { Dispatch, createContext } from "react";
import { Action, State } from "../reducers/events";

export type AppState = {
  state: State[] | undefined;
  dispatch: Dispatch<Action>;
}

const AppContext = createContext<AppState>({ state: [], dispatch: () => {} });
export default AppContext;
