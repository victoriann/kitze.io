import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import views from 'config/views';
import {graphql} from 'react-apollo';

//data
import {socialIcons} from 'data/social';
import {GetUser} from 'gql/graphql-shared';

//images
import me from  'img/me.jpg';

//styled
import {Image, TitleAndDescription, Title, Description, Contact, Wrapper, ClickableTop, IconList} from './styles';

//components
import MouseScroll from 'components/MouseScroll';
import SocialIcon from 'components/SocialIcon';

@inject('store')
@observer
@graphql(GetUser)
class KitzeInfo extends Component {

  render() {
    const {store, data, styles = {}} = this.props;
    const {router, auth} = store;
    const isHome = router.currentView.id === 'home';
    const isLoggedIn = data && data.user && data.user.id;

    return (
      <Wrapper isHome={isHome} id="kitze-info" styles={styles.Wrapper}>

        <ClickableTop
          isHome={isHome}
          id="clickable-top"
          isClickable={store.router.currentView.id !== 'home'}
          onClick={() => store.router.goTo(views.home, {}, store)}
        >
          <Image isHome={isHome} src={me} alt="me" styles={styles.Image}/>
          <TitleAndDescription>
            <Title isHome={isHome} styles={styles.Title}> Hi, I'm Kitze! </Title>
            <Description isHome={isHome} styles={styles.Description}> I make stuff happen. </Description>
          </TitleAndDescription>
        </ClickableTop>

        <Contact>
          <IconList>
            {socialIcons.map((icon, key) =>
              <SocialIcon isHome={isHome} styles={styles.SocialIcon} key={key} icon={icon}/>)}
          </IconList>
        </Contact>

        {isLoggedIn && <button onClick={auth.logout}> Logout</button>}

        <MouseScroll/>
      </Wrapper>
    )
  }
}

export default KitzeInfo;