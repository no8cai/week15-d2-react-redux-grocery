const add = 'produce/add';

export const addToCard = (produce) => {
    return {
        type: add,
        id: produce.id,
        count: 0
    };
};

export default function cartReducer(state = { cardId: [] }, action) {
    switch (action.type) {
        case add:
            const newState = {
                ...state,
                cardId: [...state.cardId, action.id]
            };
            return newState;
        default:
            return state;
    }
}
