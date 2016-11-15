import React from 'react';
import {Section, SectionTitle, ListItem, UnorderedList, UnderlinedLink} from 'styles/shared/styled-components';
import Event from 'components/Event';
import events from 'data/events';

const Speaking = () => (
  <Section id="speaking">
    <SectionTitle> Speaking </SectionTitle>
    <UnorderedList>

      {events.map((event, key)=> <Event key={key} event={event}/>)}

      <ListItem>
        <span> Need me at your Event, Meetup, or Conference? </span> <br/>
        <UnderlinedLink href="mailto:kristijan.mkd@gmail.com">
          <b>Hit me up</b>
        </UnderlinedLink>
        <span> and we can make magic happen!</span>
      </ListItem>

    </UnorderedList>
  </Section>
);

export default Speaking;