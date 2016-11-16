import React from 'react';
import {observer} from 'mobx-react';
import views from 'config/views';

import {Wrapper, Link, childStyles} from './styles';
import {ContentMiddle} from 'styles/shared/styled-components';

const Header = ({store, styles = {}}) => {
  console.log('styles', styles);
  const {router} = store;
  return (
    <Wrapper styles={styles.Wrapper}>
      <ContentMiddle styles={childStyles.ContentMiddle}>
        <Link onClick={() => router.goTo(views.home, {}, store)}>
          portfolio
        </Link>
        <Link onClick={() => router.goTo(views.thoughts, {}, store)}>
          thoughts
        </Link>
      </ContentMiddle>
    </Wrapper>
  )
};

export default observer(['store'])(Header);