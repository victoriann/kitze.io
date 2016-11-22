import React from 'react';
import {observer} from 'mobx-react';
import colors from 'config/colors';

//meta
import Helmet from 'react-helmet';
import {getMeta} from 'utils/head-utils';

//components
import ThoughtItem from 'components/ThoughtItem';

//styled-components
import {List, Tag, Tags, RightSideThoughts} from './styles';
import Spinner from 'components/Spinner';

const Thoughts = ({store}) => {

  const {thoughts} = store;
  const {loading, filteredThoughts} = thoughts;

  return (
    <RightSideThoughts backgroundColor={colors.thoughtsBackgroundColor}>
      <Helmet
        title="Thoughts"
        meta={getMeta({
          title: "Thoughts"
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

      {!loading && <div className="animated fadeIn">
        {false && <Tags>
          {thoughts.allTags.map(tag => <Tag
              key={tag}
              selected={thoughts.selectedTags.indexOf(tag) !== -1}
              onClick={() => thoughts.toggleTag(tag)}>
              #{tag}
            </Tag>
          )}
        </Tags>}

        <List>
          {filteredThoughts.map((thought, index) => <ThoughtItem index={index} key={thought.id} thought={thought}/>)}
        </List>
      </div>
      }
    </RightSideThoughts>
  )
}

export default observer(['store'])(Thoughts);