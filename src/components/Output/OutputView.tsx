import React, { ReactElement } from 'react';

import styled from '@emotion/styled';

import OutputContainer from './widgets/OutputContainer';

const OutputViewRoot = styled.div`
  flex: 1;
  height: 100%;
  margin-left: 20px;
  overflow-y: auto;
`;

const OutputView = (): ReactElement => {
  return (
    <OutputViewRoot>
      <OutputContainer />
    </OutputViewRoot>
  );
};
export default OutputView;
