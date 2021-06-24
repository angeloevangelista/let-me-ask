import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

type RedirectorProps = {
  redirectTo: string;
};

const Redirector: React.FC<RedirectorProps> = ({ redirectTo }) => {
  const history = useHistory();

  useEffect(() => {
    history.replace(redirectTo);
  }, [history, redirectTo]);

  return <React.Fragment />;
};

export default Redirector;
