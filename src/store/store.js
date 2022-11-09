import { createStore } from "redux";

const initialState = { isLightOn: true };

export function roomReducer(currentState = initialState, action) {
  switch (action.type) {
    case "FLIP": {
      return { ...currentState, isLightOn: !currentState.isLightOn };
    }
    default:
      return currentState;
  }
}

const store = createStore(roomReducer);

export { store };
