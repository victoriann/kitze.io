import React from 'react';
import {observer} from 'mobx-react';
import views from 'config/views';

//meta
import Helmet from 'react-helmet';
import {getMeta} from 'utils/head-utils';

//styled-components
import {List, Link, Title, Tag, Tags, DateTime, RightSideThoughts} from './styles';

const Thoughts = ({store}) => {

  const {thoughts, router} = store;
  const {loading, filteredThoughts} = thoughts;

  return (
    <RightSideThoughts backgroundColor="#ececec">
      <Helmet
        title="Thoughts"
        meta={getMeta({
          title: "Thoughts"
        })
        }
      />


      {loading && <div> Loading ... </div>}

      {!loading && <div className="animated fadeInDown">
        <Tags>
          {thoughts.allTags.map(tag => <Tag
              key={tag}
              selected={thoughts.selectedTags.indexOf(tag) !== -1}
              onClick={() => thoughts.toggleTag(tag)}>
              #{tag}
            </Tag>
          )}
        </Tags>

        <List>
          {filteredThoughts.map(thought => (
            <Link
              key={thought.id}
              onClick={() => router.goTo(views.thought, {slug: thought.slug}, store)}
            >
              <Title>
                {thought.title}
              </Title>
              <DateTime>
                18.15.2016 - 16:11
              </DateTime>
            </Link>
          ))
          }
        </List>
      </div>
      }
    </RightSideThoughts>
  )
}

export default observer(['store'])(Thoughts);