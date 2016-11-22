import React from 'react';
import {observer} from 'mobx-react';

//meta
import Helmet from 'react-helmet';
import {getMeta} from 'utils/head-utils';

//styled-components
import {RightSideThought, Content, Title, Top} from './styles';
import colors from 'config/colors';

const Thought = ({store}) => {

  const {thoughts} = store;
  const {loading, currentThought} = thoughts;

  return (
    <RightSideThought backgroundColor={colors.thoughtsBackgroundColor}>

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
      </div>
      }

    </RightSideThought>
  )
}

export default observer(['store'])(Thought);