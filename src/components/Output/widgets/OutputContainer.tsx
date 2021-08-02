import React, { ReactElement } from 'react';
import { useSelector } from 'react-redux';

import styled from '@emotion/styled';

import { selectChosenOutput } from 'store/selectors';

import InfoNote from 'components/_General/InfoNote';
import { WidgetContainer } from './common';

const OutputContainerRoot = styled(WidgetContainer)`
  height: 100%;
`;

const OutputContainer = (): ReactElement => {
  const chosenOutput = useSelector(selectChosenOutput);

  return (
    <OutputContainerRoot>
      {chosenOutput}
      <InfoNote title="Graph functionality is coming  soon " />
    </OutputContainerRoot>
  );
};

export default OutputContainer;
