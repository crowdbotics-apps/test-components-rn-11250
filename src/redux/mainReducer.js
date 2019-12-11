import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */
import { EmailAuthReducer } from "../features/EmailAuth/redux/reducers";
import { CalendarReducer } from "../features/Calendar/redux/reducers";
//@BlueprintReduxImportInsertion
import { SignIn01BlueprintReducer } from '../features/SignIn01Blueprint/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },
  EmailAuth: EmailAuthReducer,
  Calendar: CalendarReducer,
  //@BlueprintReduxCombineInsertion
SignIn01Blueprint: SignIn01BlueprintReducer,

});