//We coded our own middleware in redux to console.log! Kewl!
export const loggerMiddleWare = (store) => (next) => (action) => {
  if (!action.type) {
    return next(action);
  }
  console.log("type: ", action.type);
  console.log("payload, ", action.payload);
  console.log("currentState: ", store.getState());

  next(action);
  //This is an important lesson in how redux flow works, which can be confusing
  console.log("next state", store.getState());
};
