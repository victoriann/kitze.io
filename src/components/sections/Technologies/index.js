import React from 'react';
import {Section, SectionTitle, ListItem, UnderlinedLink, UnorderedList} from 'styles/shared/styled-components';

const Technologies = () => (
  <Section id="technologies">
    <SectionTitle> Technologies I have used </SectionTitle>
    <UnorderedList>
      <ListItem> You name it. Literally everything, ever.
        <br/>
        <br/>
        <span>
          C#, .NET, MVC, WinForms, WPF, PHP, Wordpress, Java, Node.js, Sass, LESS, aphrodite, styled-components,
                 Gulp, Grunt, Yeoman, jQuery, Bootstrap, Angular, MobX, Redux, Firebase, Jade/Pug, etc. etc. etc.
        </span>
        <br/>
        <br/>
        <span>Ever heard of the </span>
        <UnderlinedLink target="_blank" href="http://www.edwardbosworth.com/CPSC2105/Lectures/Slides_05/Chapter_04/MARIE_AssemblyLanguage.htm">
          MARIE
        </UnderlinedLink>
        <span> assembly language? Totally did that. </span>
      </ListItem>
    </UnorderedList>
  </Section>
);

export default Technologies;