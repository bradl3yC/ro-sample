const initialState = {
  clicked: false
};

const app = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_CLICKED':
      return {clicked: !state.clicked};
    default: {
      return state
    }
  }
};

export default app;
