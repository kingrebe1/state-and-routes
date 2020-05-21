export default function reducer(state, action) {
    switch (action.type) {
        case "SET_DARK_MODE": {
            return {
                ...state,
                darkMode: action.payload
            };

        }
        default:
            throw new Error("Bad action type");
    }
}