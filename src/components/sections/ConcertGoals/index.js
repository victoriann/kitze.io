import React from 'react';
import {Section, SectionTitle, ListItem, UnorderedList} from 'styles/shared/styled-components';

const ConcertGoals = () => (
  <Section id="concert-goals">
    <SectionTitle> Concert goals (23) </SectionTitle>
    <UnorderedList>
      <ListItem>
        Rolling Stones,
        Foo Fighters,
        Linkin Park,
        Joe Bonamassa,
        Santana,
        Bon Jovi,
        Richie Sambora,
        Lenny Kravitz,
        Steve Vai,
        Eric Clapton,
        3 Doors Down,
        Glenn Hughes,
        Green Day,
        Kings Of Leon,
        Richie Kotzen,
        Tenacious D,
        Guns N' Roses,
        Sebastian Bach,
        System of A Down,
        Rammstein,
        U2,
        Inglorious,
        Imagine Dragons
      </ListItem>
    </UnorderedList>
  </Section>
);

export default ConcertGoals;