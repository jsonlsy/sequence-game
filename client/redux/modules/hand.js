const UPDATE = 'sequence/hand/UPDATE';
const SELECT = 'sequence/hand/SELECT';

export const reducer = (state = [], action = {}) => {
  switch (action.type) {
    case UPDATE:
      return { ...state, cards: action.cards };
    case SELECT:
      return { ...state, selected: action.card };
    default:
      return state;
  }
};

export const updateHand = (cards) => ({ type: UPDATE, cards });
export const selectCard = (card) => ({ type: SELECT, card });
