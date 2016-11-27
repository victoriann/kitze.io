import React from 'react';
import {observer, inject} from 'mobx-react';
import colors from 'config/colors';

//data
import {graphql} from 'react-apollo';
import {ThoughtQuery, options} from './graphql-data';

//meta
import Helmet from 'react-helmet';
import {getMeta} from 'utils/head-utils';

//styled-components
import {RightSide, Content, Title, Top} from './styles';
import Spinner from 'components/Spinner';

@inject('store')
@observer
@graphql(ThoughtQuery, {options})
class ThoughtPage extends React.Component {
  render() {
    const {data} = this.props;
    const {loading, getThought: currentThought} = data;

    return (
      <RightSide className="rst" backgroundColor={colors.thoughtsBackgroundColor}>

        {loading && <Spinner
          className="spinner"
          speed="0.8"
          size="4em"
          backgroundColor={colors.accent}
          color={colors.thoughtsBackgroundColor}
        />
        }

        {!loading && currentThought && <div>
          <Helmet
            title={currentThought.title}
            meta={getMeta({
              title: currentThought.title,
              description: currentThought.description,
              image: currentThought.coverImage
            })
            }
          />
          <Top>
            <Title>{currentThought.title}</Title>
            <Content dangerouslySetInnerHTML={{__html: currentThought.content}}/>
          </Top>
        </div>
        }

      </RightSide>
    )
  }
}
;

export default ThoughtPage;