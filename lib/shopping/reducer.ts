import { getCookie, setCookie } from '../../lib/useCookie';
import { actionShopping } from './action';
const CARD = 'CARD';

const shopInitialState = {
  shopping: getCookie(CARD),
};

function clear() {
  let shoppings: any = [];
  setCookie(CARD, shoppings);
  return shoppings;
}

function removeShoppingCart(data: any) {
  let shoppings = shopInitialState.shopping;
  shoppings.filter((item: any) => item.product.id !== data.product.id);
  setCookie(CARD, shoppings);
  return shoppings;
}

function increment(data: any) {
  let shoppings = shopInitialState.shopping;
  let isExisted = shoppings.some(
    (item: any) => item.product.id === data.product.id
  );
  if (isExisted) {
    shoppings.forEach((item: any) => {
      if (item.product.id === data.product.id) {
        item.quantity += 1;
      }
      return item;
    });
  }
  setCookie(CARD, shoppings);
  return shoppings;
}

function decrement(data: any) {
  let shoppings = shopInitialState.shopping;
  let isExisted = shoppings.some(
    (item: any) => item.product.id === data.product.id
  );
  if (isExisted) {
    shoppings.forEach((item: any) => {
      if (item.product.id === data.product.id) {
        item.quantity -= 1;
      }
      return item;
    });
  }
  setCookie(CARD, shoppings);
  return shoppings;
}

function getShopping() {
  return getCookie(CARD);
}

function addShoppingCart(data: any) {
  let shoppings = shopInitialState.shopping;
  let isExisted = shoppings.some(
    (item: any) => item.product.id === data.product.id
  );
  if (isExisted) {
    shoppings.forEach((item: any) => {
      if (item.product.id === data.product.id) {
        item.quantity += 1;
      }
      return item;
    });
  } else {
    shoppings.push(data);
  }
  setCookie(CARD, shoppings);
  return shoppings;
}

export default function reducer(state = shopInitialState, action: any) {
  const { type, payload } = action;

  switch (type) {
    case actionShopping.ADD:
      state = {
        shopping: addShoppingCart(payload),
      };
      return state;
    case actionShopping.CLEAR:
      state = {
        shopping: clear(),
      };
      return state;
    case actionShopping.FETCH:
    default:
      state = {
        shopping: getShopping(),
      };
      return state;
  }
}
