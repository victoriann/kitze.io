import React from 'react';
import {Section, SectionTitle, ListItem, UnorderedList} from 'styles/shared/styled-components';

const DevStack = () => (
  <Section id="dev-stack">
    <SectionTitle> Current dev stack </SectionTitle>
    <UnorderedList>
      <ListItem> JavaScript (ES6)</ListItem>
      <ListItem> React</ListItem>
      <ListItem> MobX</ListItem>
      <ListItem> styled-components</ListItem>
      <ListItem> create-react-app</ListItem>
      <ListItem> Node</ListItem>
      <ListItem> Apollo</ListItem>
      <ListItem> GraphQL</ListItem>
    </UnorderedList>
  </Section>
);

export default DevStack;