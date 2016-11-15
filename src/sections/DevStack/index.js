import React from 'react';
import {Section, SectionTitle, ListItem, UnorderedList} from 'styles/shared/styled-components';

const DevStack = () => (
  <Section id="dev-stack">
    <SectionTitle> Current dev stack </SectionTitle>
    <UnorderedList>
      <ListItem> JavaScript (ES2015)</ListItem>
      <ListItem> React</ListItem>
      <ListItem> MobX</ListItem>
      <ListItem> Aphrodite</ListItem>
      <ListItem> Webpack</ListItem>
    </UnorderedList>
  </Section>
);

export default DevStack;