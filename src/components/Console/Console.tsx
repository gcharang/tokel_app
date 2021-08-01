import React, { useCallback, useEffect, useState } from 'react';

import styled from '@emotion/styled';
import TextField from '@material-ui/core/TextField';

import { dispatch } from 'store/rematch';
import { ErrorMessages } from 'vars/defines';

import Input from 'components/_General/Input';
import Spinner from 'components/_General/Spinner';
import { VSpaceMed, VSpaceSmall } from 'components/Dashboard/widgets/common';

type LoginFormProps = {
  addNewWallet: () => void;
};

const TextStyle = styled.div`
  min-width: 80vw;
  background-color: white;
`;

const LoginFormRoot = styled.div`
  flex-direction: column;
  text-align: center;
  height: 100%;
  width: 100%;
  display: grid;
  justify-items: center;
  align-items: center;
`;

const Dashboard1 = ({ addNewWallet }: LoginFormProps) => {
  const [loginValue, setloginValue] = useState('');
  const [error, setError] = useState(null);
  const [feedback, setFeedback] = useState('');
  const [showSpinner, setShowSpinner] = useState(false);

  const performLogin = useCallback(() => {
    if (!loginValue) {
      setError(ErrorMessages.ENTER_WIF);
      return;
    }
    setShowSpinner(true);
    dispatch.account.login({ key: loginValue, setError, setFeedback });
  }, [loginValue]);

  useEffect(() => {
    if (error) {
      setShowSpinner(false);
    }
  }, [error]);

  return (
    <LoginFormRoot>
      <TextStyle>
        <TextField multiline fullWidth rows={40} color="secondary" variant="filled" />
      </TextStyle>
      <TextStyle>
        <TextField
          multiline
          fullWidth
          rows={1}
          placeholder="import private key"
          color="primary"
          variant="filled"
        />
      </TextStyle>
      <VSpaceSmall />
      <VSpaceMed />
      <div style={{ height: '30px' }}>{showSpinner && <Spinner />}</div>
    </LoginFormRoot>
  );
};

export default Dashboard1;
