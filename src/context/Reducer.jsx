export const reducer = (state, action) => {
  switch (action.type) {
    case "timeOut": {
      if (action.payload.timeOut) {
        return { ...state, user: action.payload };
      } else {
        console.log(`invalid data in USER_LOGIN reducer `);
        return state;
      }
    }
    default: {
      return state;
    }
  }
};
