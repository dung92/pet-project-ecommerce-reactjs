import { INCREMENT } from "./constants";

export function counterReducer(state = 0, action: {
    type: string
}) {
    switch (action.type) {
        case INCREMENT:
            return state + 1;
        default:
            return state;
    }
}