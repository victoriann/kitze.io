import {observable, action} from 'mobx';
import {getUrlParams} from 'utils/url-utils';
import {scrollToElement} from 'utils/dom-utils';

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
      scrollToElement(section);
    }
  }
}

export default App