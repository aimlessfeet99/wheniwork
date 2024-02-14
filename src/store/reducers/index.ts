import { InitialStateType, ActionType } from "interfaces";
import { ActionConstent } from "constants/store";

const reducer = (state: InitialStateType, actions: ActionType): InitialStateType => {
  switch (actions.type) {
    case ActionConstent.SET_PEOPLE:
      return {
        ...state,
        people: actions.payload,
      };
    case ActionConstent.SET_CHARACTER:
      return {
        ...state,
        character: actions.payload,
      };
    case ActionConstent.RESET_CHARACTER:
      return {
        ...state,
        character: {},
      };
    default:
      return state;
  }
};

export default reducer;
