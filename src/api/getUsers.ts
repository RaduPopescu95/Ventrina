// import { allOrdersStatus } from 'src/utils/getRandomStatus';
import { statusList } from 'src/data/data';

const getRandomStatus = () => {
  let randNum = Math.floor(Math.random() * 3);
  return statusList[randNum];
};

const ordersStatus = () => {
  const array = [];
  for (let i = 0; i <= 30; ++i) {
    array.push(getRandomStatus());
  }
  return array;
};

const allOrdersStatus = ordersStatus();

export const getUsers = async (
  setData?: any,
  setLoading?: any,
  setUser?: any,
  setUsers?: any,
) => {
  try {
    const response = await fetch('https://dummyjson.com/users');
    const json = await response.json();
    const data = json.users;
    for (let i = 0; i < data.length; ++i) {
      data[i].status = allOrdersStatus[i];
    }
    if (setData) {
      setData(data);
      setUser(data[0]);
    } else {
      setUsers(data);
    }
  } catch (error) {
    console.error(error);
  } finally {
    setLoading(false);
  }
};
