import Ember from 'ember';

export default Ember.Component.extend({
  updateStoryForm: false,
  actions: {
  delete(story) {
    if (confirm('Are you sure you want to delete this story?')) {
      this.sendAction('destroyStory', story);
    }
  },
  updateStory() {
    this.set('updateStoryForm', true);
  },
  update(story) {
    var params = {
      headline: this.get('headline'),
      body: this.get('body'),
      author: this.get('author'),
      image: this.get('image'),
      category: this.get('category'),
    };
    this.set('updateStoryForm', false);
    this.sendAction('update', story, params);
  },

  }
});
