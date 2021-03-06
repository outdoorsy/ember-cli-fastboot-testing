import Route from '@ember/routing/route';
import fetch from 'fetch';

export default Route.extend({

  async model() {
    let response = await fetch('/api/posts', { method: 'post' });
    return await response.json();
  }

});
