import { statusList } from 'src/data/data';

const getRandomStatus = () => {
  let randNum = Math.floor(Math.random() * 5);
  return statusList[randNum];
};

const ordersStatus = () => {
  const array = [];
  for (let i = 0; i <= 30; ++i) {
    array.push(getRandomStatus());
  }
  return array;
};

export const allOrdersStatus = ordersStatus();
