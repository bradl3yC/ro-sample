const initialState = {
  clicked: false,
};

const app = (state = initialState, action) => {
  switch (action.type) {
    case 'CLICKED':
      return { clicked: true };
    case 'UNCLICKED':
      return { clicked: false };
    default: {
      return state;
    }
  }
};

export default app;
