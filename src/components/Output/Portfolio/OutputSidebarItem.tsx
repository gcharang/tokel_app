import React, { ReactElement } from 'react';
import { useSelector } from 'react-redux';

import styled from '@emotion/styled';
import parse from 'html-react-parser';
import { identicon } from 'minidenticons';

import happyIcon from 'assets/happy.svg';
import { selectAccountAddress } from 'store/selectors';

import ProgressBar from 'components/_General/ProgressBar';

type OutputSidebarItemRootProps = { selected: boolean };

const OutputSidebarItemRoot = styled.div<OutputSidebarItemRootProps>`
  display: flex;
  align-items: center;
  height: 92px;
  background-color: ${props =>
    props.selected ? 'var(--color-almostBlack2)' : 'var(--color-almostBlack))'};
  border-left: 2px solid transparent;
  border-image: ${props => (props.selected ? 'var(--gradient-purple-direct) 1 100%' : 'none')};
  color: var(--color-white);
  cursor: pointer;
  flex-direction: row;
  padding: 8px 24px;
  &:hover {
    background-color: var(--color-almostBlack2);
  }
`;

const IconWrapper = styled.div`
  display: block;
  height: 32px;
  width: 32px;
`;

const Information = styled.div`
  display: flex;
  flex: 1;
  margin-left: 8px;
  flex-direction: column;
  justify-content: center;
  padding-left: 8px;
`;

const Name = styled.h3`
  margin: 0;
`;

const Amount = styled.p`
  color: var(--color-gray);
  margin: 0;
`;

type OutputSidebarItemProps = {
  name: string;
  percentage?: number;
  header?: boolean;
  selected?: boolean;
  onClick?: () => void;
};

const OutputSidebarItem = ({
  name,
  percentage,
  header,
  selected,
  onClick,
}: OutputSidebarItemProps): ReactElement => {
  const address = useSelector(selectAccountAddress);
  return (
    <OutputSidebarItemRoot selected={selected} onClick={onClick}>
      <Information>
        <Name>{name}</Name>
        {percentage && <ProgressBar percentage={percentage} />}
      </Information>
    </OutputSidebarItemRoot>
  );
};

OutputSidebarItem.defaultProps = {
  percentage: null,
  header: false,
  selected: false,
  onClick: () => 'me clickit',
};

export default OutputSidebarItem;
