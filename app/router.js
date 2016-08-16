import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('story-detail', {path: '/story-detail/:story_id'});
  this.route('admin');
  this.route('admin-newstory');
});

export default Router;
