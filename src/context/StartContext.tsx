import axios from 'axios';
import { number } from 'prop-types';
import React, { PropsWithChildren, createContext, useReducer } from 'react';
import { ACTIONS, BASE_URL } from 'src/utils/const';

interface IEntity {
  entity: object;
}

const startContext = createContext<IEntity | any>(null);

const initState = {
  entity: number,
};

function reducer(state: object, action: any) {
  switch (action.type) {
    default:
      return state;
  }
}

export const StartContext = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(reducer, initState);

  async function getEntity(id: number) {
    try {
      const res = await axios.get(`${BASE_URL}/branches/${id}`);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }

  const value = {
    getEntity,
  };

  return (
    <startContext.Provider value={value}>{children}</startContext.Provider>
  );
};

export default StartContext;
