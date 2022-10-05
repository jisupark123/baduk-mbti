import { createContext, useContext } from 'react';
import React, { useState } from 'react';

interface State {
  show: boolean;
  state: boolean | 'loading';
  message: string;
  successed: (message: string) => void;
  failed: (message: string) => void;
  loading: (message: string) => void;
  close: () => void;
}

const defaultState: State = {
  show: false,
  state: false,
  message: '',
  successed: () => {},
  failed: () => {},
  loading: () => {},
  close: () => {},
};

const StateContext = createContext(defaultState);
const NoticeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, setState] = useState(defaultState);
  const successed = (message: string) => {
    setState((prev) => ({
      ...prev,
      show: true,
      state: true,
      message,
    }));
  };
  const failed = (message: string) => {
    setState((prev) => ({
      ...prev,
      show: true,
      state: false,
      message,
    }));
  };
  const loading = (message: string) => {
    setState((prev) => ({
      ...prev,
      show: true,
      state: 'loading',
      message,
    }));
  };
  const close = () => {
    setState(defaultState);
  };

  const noticeCtx: State = {
    show: state.show,
    state: state.state,
    message: state.message,
    successed,
    failed,
    loading,
    close,
  };
  return (
    <StateContext.Provider value={noticeCtx}>{children}</StateContext.Provider>
  );
};

export const useNotice = () => {
  return useContext(StateContext);
};

export default NoticeProvider;
