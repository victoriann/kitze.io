import {observable, action} from 'mobx';
import {getUrlParams} from 'utils/url-utils';
import {scrollToSection} from 'utils/dom-utils';

class App {

  //properties
  hiddenSections = [
    'fitness', 'interesting', 'countries', 'concerts', 'concert-goals'
  ];

  //observables
  @observable params = getUrlParams();
  @observable showExtra = this.hiddenSections.indexOf(this.params.section) !== -1;

  //actions
  @action setShowExtra = val => {
    this.showExtra = val;
  }

  @action scrollToUrlSection = () => {
    const {section} = this.params;
    if (section) {
      scrollToSection(section);
    }
  }
}

export default App