import { getUsers } from './../api/getUsers';
import React, { useEffect, useState } from 'react';

export type User = {
  id: number;
  password: string;
  firstName: string;
  lastName: string;
  status: string;
};

const useUserMockup = () => {

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [user, setUser] = useState<User>({
    id: 0,
    password: '',
    firstName: '',
    lastName: '',
    status: '',
  });

  useEffect(() => {
    getUsers(setData, setLoading, setUser);
  }, []);

  return { data, user, isLoading, setUser, setData, setLoading };
};
export default useUserMockup;
