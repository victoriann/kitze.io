import React, {Component} from 'react';
import {scrollToElement} from 'utils/dom-utils';
import {getUrlParams} from 'utils/url-utils';

//fonts
import 'font-awesome/css/font-awesome.css';
import 'animate.css';

//data
import {socialIcons} from 'data/social';

//images
import me from  'img/me.jpg';

//styled components
import {Image, Title, Description, Wrapper, Sides, LeftSide, Contact, RightSide, ShowMoreButton} from './styles';
import {UnorderedList} from 'styles/shared/styled-components';

//components
import MouseScroll from 'components/MouseScroll';
import SocialIcon from 'components/SocialIcon';

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

class Home extends Component {

  constructor() {
    super();
    const hiddenSections = [
      'fitness', 'interesting', 'countries', 'concerts', 'concert-goals'
    ];
    const params = getUrlParams();
    this.state = {
      showExtra: hiddenSections.indexOf(params.section) !== -1,
      params
    }
  }

  componentDidMount() {
    const {section} = this.state.params;
    if (section) {
      scrollToElement(section);
    }
  }

  render() {

    const {showExtra} = this.state;

    return (
      <Wrapper>
        <Sides>

          <LeftSide className="animated fadeIn">
            <Image src={me} alt="me"/>
            <Title> Hi, I'm Kitze! </Title>
            <Description> I make stuff happen. </Description>
            <Contact>
              <UnorderedList>
                {socialIcons.map((icon, key) => <SocialIcon key={key} icon={icon}/>)}
              </UnorderedList>
            </Contact>
            <MouseScroll/>
          </LeftSide>

          <RightSide>
            <WhoAmI/>
            <WhatImUpTo/>
            <ProudProjects/>
            <Speaking/>
            <DevStack/>
            <Technologies/>
            <Libraries/>
            <Projects/>
            <Achievements/>

            {!showExtra && <ShowMoreButton onClick={() => this.setState({showExtra: true})}>
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

          </RightSide>

        </Sides>
      </Wrapper>
    )
  }
}

export default Home;
