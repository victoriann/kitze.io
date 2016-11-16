import React from 'react';
import {observer} from 'mobx-react';
import views from 'config/views';

//meta
import Helmet from 'react-helmet';
import {getMeta} from 'utils/head-utils';

//styled-components
import {Wrapper, List, Link, Title, Tag, Tags, DateTime} from './styles';

const Thoughts = ({store}) => {

  const {thoughts, router} = store;
  const {loading, filteredThoughts} = thoughts;

  return (
    <Wrapper id="thoughts" backgroundColor="#ececec">

      <Helmet
        title="Thoughts"
        meta={getMeta({
          title: "Thoughts"
        })
        }
      />

      {loading && <div> Loading ... </div>}
      <div>
        {!loading && <div>

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
      </div>
    </Wrapper>
  )
}

export default observer(['store'])(Thoughts);