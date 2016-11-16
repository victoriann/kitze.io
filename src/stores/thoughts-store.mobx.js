import {observable, action} from 'mobx';
import server from 'config/server';

//models
import Thought from 'stores/models/Thought';

class ThoughtsStore {

  @observable fetchedAll = false;
  @observable loading = false;
  @observable thoughtsList = [];
  @observable currentThought = [];

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
}

export default ThoughtsStore;