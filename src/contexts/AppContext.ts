import { Dispatch, createContext } from "react";
import { Action, State } from "../reducers";

export type AppState = {
  state: State[];
  dispatch: Dispatch<Action>;
}

const AppContext = createContext<AppState>({ state: [], dispatch: () => {} });
export default AppContext;
