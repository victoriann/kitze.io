import {observable, action, runInAction} from 'mobx';
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
    server.Thought.get(slug).then(result => {
      const thought = new Thought(result.data.object);
      this.setCurrentThought(thought);
    })
  }

  @action fetchThoughts = () => {
    if (this.fetchedAll === true) {
      return;
    }

    this.loading = true;
    server.Thoughts.get().then(result => {
      runInAction(() => {
        this.loading = false;
        this.fetchedAll = true;
        this.setThoughts(result.data.objects);
      });
    })
  }
}

export default ThoughtsStore;