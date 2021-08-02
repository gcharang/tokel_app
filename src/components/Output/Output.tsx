import React, { ReactElement } from 'react';

import styled from '@emotion/styled';

import OutputSidebar from './Outputs/OutputSidebar';
import OutputView from './OutputView';

const OutputsRoot = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  flex: 1;
  background-color: var(--color-black);
  padding: 18px;
  margin: 0;
`;

const Outputs = (): ReactElement => {
  return (
    <OutputsRoot>
      <OutputSidebar />
      <OutputView />
    </OutputsRoot>
  );
};

export default Outputs;
