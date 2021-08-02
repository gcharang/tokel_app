import React, { ReactElement } from 'react';
import { useSelector } from 'react-redux';

import styled from '@emotion/styled';

import { dispatch } from 'store/rematch';
import { selectChosenOutput } from 'store/selectors';
import { formatDec } from 'util/helpers';

import { WidgetContainer } from '../widgets/common';
import OutputSidebarItem from './OutputSidebarItem';

const OutputSidebarRoot = styled(WidgetContainer)`
  padding: 0;
  height: 100%;
  width: 280px;
  color: var(--color-white);
  overflow-y: auto;
`;

const OutputSidebar = (): ReactElement => {
  const chosenOutput = useSelector(selectChosenOutput);
  const outputs = ['NSPV', 'DEXP2P', 'DAEMON1', 'DAEMON2'];

  // https://github.com/TokelPlatform/tokel_app/issues/67
  // const totalValue = formatFiat(
  //   outputs.reduce((total, { balance, usd_value }) => total + balance * usd_value, 0)
  // );

  return (
    <OutputSidebarRoot>
      {outputs.map(output => (
        <OutputSidebarItem
          key={output}
          name={output}
          selected={output === chosenOutput}
          onClick={() => dispatch.account.SET_CHOSEN_OUTPUT(output)}
        />
      ))}
    </OutputSidebarRoot>
  );
};

export default OutputSidebar;
