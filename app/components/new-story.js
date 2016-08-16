import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save() {
      var params = {
        headline: this.get('headline'),
        body: this.get('body'),
        author: this.get('author'),
        image: this.get('image'),
        category: this.get('category'),
      };
      this.sendAction('save', params);
    }
  }
});
