import React, {Component} from 'react';
import {observer} from 'mobx-react';

//meta tags
import Helmet from 'react-helmet';
import {getMeta} from 'utils/head-utils';

//fonts
import 'font-awesome/css/font-awesome.css';
import 'animate.css';

//styled components
import {RightSideHome, ShowMoreButton} from './styles';

//sections
import WhoAmI from 'sections/WhoAmI';
import WhatImUpTo from 'sections/WhatImUpTo';
import ProudProjects from 'sections/ProudProjects';
import Speaking from 'sections/Speaking';
import DevStack from 'sections/DevStack';
import Technologies from 'sections/Technologies';
import Libraries from 'sections/Libraries';
import Projects from 'sections/Projects';
import Achievements from 'sections/Achievements';

//extra sections
import Interesting from 'sections/Interesting';
import Countries from 'sections/Countries';
import Concerts from 'sections/Concerts';
import ConcertGoals from 'sections/ConcertGoals';
import Fitness from 'sections/Fitness';

@observer(['store'])
class Home extends Component {

  componentDidMount() {
    const {store:{app}} = this.props;
    app.scrollToUrlSection();
  }

  render() {

    const {store} = this.props;
    const {app} = store;
    const {showExtra} = app;

    return (
      <RightSideHome backgroundColor="#333959">

        <Helmet
          title="Kitze"
          meta={getMeta()}
        />

        <WhoAmI/>
        <WhatImUpTo/>
        <ProudProjects/>
        <Speaking/>
        <DevStack/>
        <Technologies/>
        <Libraries/>
        <Projects/>
        <Achievements/>

        {!showExtra && <ShowMoreButton onClick={() => app.setShowExtra(true)}>
          I wanna know more!
        </ShowMoreButton>
        }

        {showExtra && <div>
          <Interesting/>
          <Countries/>
          <Concerts/>
          <ConcertGoals/>
          <Fitness/>
        </div>
        }

      </RightSideHome>
    )
  }
}

export default Home;
