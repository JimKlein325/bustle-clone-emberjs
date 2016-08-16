import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    save(params) {
      var newStory = this.store.createRecord('story', params);
      newStory.save();
      this.transitionTo('admin');
    }
  }
});
