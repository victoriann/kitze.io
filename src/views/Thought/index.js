import React from 'react';
import {observer} from 'mobx-react';
import colors from 'config/colors';

//meta
import Helmet from 'react-helmet';
import {getMeta} from 'utils/head-utils';

//styled-components
import {RightSideThought, Content, Title, Top} from './styles';
import Spinner from 'components/Spinner';

const Thought = ({store}) => {

  const {thoughts} = store;
  const {loading, currentThought} = thoughts;

  return (
    <RightSideThought className="rst" backgroundColor={colors.thoughtsBackgroundColor}>

      <Helmet
        title={currentThought.title}
        meta={getMeta({
          title: currentThought.title,
          description: currentThought.description,
          image: currentThought.coverImage
        })
        }
      />

      {loading && <Spinner
        className="spinner"
        speed="0.8"
        size="4em"
        backgroundColor={colors.accent}
        color={colors.thoughtsBackgroundColor}
      />
      }

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