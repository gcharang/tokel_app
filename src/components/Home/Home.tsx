import React from 'react';
import { useSelector } from 'react-redux';

import styled from '@emotion/styled';

import { selectView } from 'store/selectors';
import links from 'util/links';
import { TOPBAR_HEIGHT, ViewType } from 'vars/defines';

import InfoNote from 'components/_General/InfoNote';
import Console from 'components/Console/Console';
import Dashboard from 'components/Dashboard/Dashboard';
import SideMenu from 'components/Home/Menu/SideMenu';
import Output from 'components/Output/Output';

const HomeRoot = styled.div`
  display: flex;
  width: 100%;
  height: calc(100% - ${TOPBAR_HEIGHT}px);
`;

const ViewWrapper = styled.div`
  height: 100%;
  flex: 1;
  overflow: auto;
`;

const getNote = name => (
  <InfoNote
    title={`${name} functionality is not available currently`}
    subtitle={[
      'Please have a look at our ',
      <a key="tokellink" href={links.websiteRoadmap} rel="noreferrer" target="_blank">
        roadmap
      </a>,
      ' or reach out to us in ',
      <a key="discordLink" href={links.discord} rel="noreferrer" target="_blank">
        Discord
      </a>,
    ]}
  />
);

const renderView = viewType => {
  switch (viewType) {
    case ViewType.DASHBOARD:
      return <Dashboard />;
    case ViewType.DEX:
      return getNote('Decentralized Exchange');
    case ViewType.NFT_MARKET:
      return getNote('NFT Marketplace');
    case ViewType.SETTINGS:
      return getNote('Setting');
    case ViewType.CONSOLE:
      return <Console />;
    case ViewType.OUTPUT:
      return <Output />;
    default:
      return getNote('This functionality');
  }
};

const Home = () => {
  const currentView = useSelector(selectView);

  return (
    <HomeRoot>
      <SideMenu />
      <ViewWrapper>{renderView(currentView)}</ViewWrapper>
    </HomeRoot>
  );
};

export default Home;
