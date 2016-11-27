import React from 'react';
import {observer} from 'mobx-react';

//components
import Header from 'components/Header';

//styled components
import {Sides, LeftSide, childStyles, Wrapper} from './styles';
import {ContentMiddle} from 'styles/shared/styled-components';
import KitzeInfo from 'components/KitzeInfo';

const App = ({store}) => {

  const {router:{currentView}} = store;
  const isHome = currentView.id === 'home';

  return (
    <Wrapper isHome={isHome}>
      <Header styles={isHome ? childStyles.Header.home : childStyles.Header.other}/>
      <ContentMiddle id="router">
        <Sides>
          <LeftSide id="left-side" isHome={isHome} className="animated fadeIn">
            <KitzeInfo styles={isHome ? childStyles.KitzeInfo.home : childStyles.KitzeInfo.other} childStyles/>
          </LeftSide>
          {currentView && currentView.component}
        </Sides>
      </ContentMiddle>
    </Wrapper>
  )
};

export default observer(['store'])(App);