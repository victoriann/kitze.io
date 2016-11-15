import React from 'react';
import {Section, SectionTitle, UnorderedList} from 'styles/shared/styled-components';

//projects
import FejsMK from 'projects/FejsMK';
import OKGoogle from 'projects/OKGoogle';
import HumanAgain from 'projects/HumanAgain';

const ProudProjects = () => (
  <Section id="projects" className="animated fadeInDown">
    <SectionTitle> Projects I'm proud of </SectionTitle>
    <UnorderedList>
      <OKGoogle/>
      <HumanAgain/>
      <FejsMK/>
    </UnorderedList>
  </Section>
);

export default ProudProjects;