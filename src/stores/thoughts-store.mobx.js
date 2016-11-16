import {observable, action, computed} from 'mobx';
import server from 'config/server';
import _ from 'lodash';

//models
import Thought from 'stores/models/Thought';

class ThoughtsStore {

  @observable fetchedAll = false;
  @observable loading = false;
  @observable thoughtsList = [];
  @observable currentThought = [];
  @observable selectedTags = [];

  @action setThoughts = thoughtsJson => {
    this.thoughtsList = thoughtsJson.map(thought => new Thought(thought));
  }

  @action setCurrentThought = thought => {
    this.currentThought = thought;
  }

  @action getThought = slug => {
    const foundThought = this.thoughtsList.find(thought => thought.slug === slug);
    if (foundThought) {
      return this.setCurrentThought(foundThought);
    }
    this.fetchThought(slug);
  }

  @action fetchThought = slug => {
    this.loading = true;
    server.Thought.get(slug).then(this.receiveThought);
  }

  @action fetchThoughts = () => {
    if (this.fetchedAll === true) {
      return;
    }

    this.loading = true;
    server.Thoughts.get().then(this.receiveThoughts);
  }

  @action receiveThought = ({data}) => {
    const thought = new Thought(data.object);
    this.setCurrentThought(thought);
    this.loading = false;
  }

  @action receiveThoughts = ({data}) => {
    this.loading = false;
    this.fetchedAll = true;
    this.setThoughts(data.objects);
  }

  @action toggleTag = tag => {
    const foundTag = this.selectedTags.indexOf(tag) !== -1;
    this.selectedTags = foundTag ? _.filter(this.selectedTags, t => t !== tag) : [...this.selectedTags, tag];
  }

  @computed get allTags() {
    const list = _.reduce(this.thoughtsList, (array, {tags}) => {
      array = tags ? [...array, ...tags] : array
      return array
    }, []);
    return _.uniq(list);
  }

  @computed get filteredThoughts() {
    return this.selectedTags.length === 0 ?
      this.thoughtsList :
      this.thoughtsList.filter(thought => _.every(this.selectedTags, tag => thought.tags.indexOf(tag) !== -1));
  }
}

export default ThoughtsStore;