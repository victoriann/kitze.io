import GetNewThoughtForm from 'stores/forms/new-thought-form';
import {action} from 'mobx';
import store from 'stores/store';
import views from 'config/views';

class NewThoughtPageStore {
  form = GetNewThoughtForm();

  @action postThought = (postThoughtMutation) => {
    postThoughtMutation({variables: this.form.toJSON()}).then(result => {
      store.router.goTo(views.thought, {slug: result.data.createThought.slug}, store);
    });
  }
}

export default NewThoughtPageStore;