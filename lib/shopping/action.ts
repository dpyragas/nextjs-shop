export const actionShopping = {
  ADD: 'ADD',
  CLEAR: 'CLEAR',
  FETCH: 'FETCH',
};

export const addShopping = (product: any) => (dispatch: any) => {
  return dispatch({
    type: actionShopping.ADD,
    payload: {
      product: product,
      quantity: 1,
    },
  });
};

export const fetchShopping = () => (dispatch: any) => {
  return dispatch({
    type: actionShopping.FETCH,
  });
};

export const clearShopping = () => (dispatch: any) => {
  return dispatch({
    type: actionShopping.CLEAR,
  });
};
