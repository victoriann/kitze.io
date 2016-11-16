import React from 'react';
import {observer} from 'mobx-react';
import views from 'config/views';

//meta
import Helmet from 'react-helmet';
import {getMeta} from 'utils/head-utils';

//styled-components
import {Wrapper, Content, Title, Top} from './styles';
import colors from 'config/colors';

//external
import {Link} from 'mobx-router';

const Thought = ({store}) => {

  const {thoughts} = store;
  const {loading, currentThought} = thoughts;

  return (
    <Wrapper id="thought" backgroundColor={colors.gray}>

      <Helmet
        title={currentThought.title}
        meta={getMeta({
          title: currentThought.title,
          description: currentThought.description,
          image: currentThought.coverImage
        })
        }
      />

      {loading && <div> Loading ... </div>}
      {!loading && <div>
        <Top>
          <Title>{currentThought.title}</Title>
          <Content dangerouslySetInnerHTML={{__html: currentThought.content}}/>
        </Top>

        <Link view={views.thoughts} store={store}>
          Read all thoughts
        </Link>
        <br/>
        <Link view={views.home} store={store}>
          Go home
        </Link>
      </div>
      }

    </Wrapper>
  )
}

export default observer(['store'])(Thought);