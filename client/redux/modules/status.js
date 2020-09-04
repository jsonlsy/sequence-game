const UPDATE = 'sequence/status/UPDATE';

export const reducer = (state = null, action = {}) => {
  switch (action.type) {
    case UPDATE:
      return action.status;
    default:
      return state;
  }
};

export const updateStatus = (status) => ({ type: UPDATE, status });
