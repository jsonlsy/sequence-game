const SET = 'sequence/socket/SET';

export const reducer = (state = null, action = {}) => {
  switch (action.type) {
    case SET:
      return action.socket;
    default:
      return state;
  }
};

export const setSocket = (socket) => ({ type: SET, socket });
