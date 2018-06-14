import Component from '@ember/component';
import { inject } from '@ember/service';
import { get, set } from '@ember/object';
import { scheduleOnce, next } from '@ember/runloop';

export default Component.extend({
  classNames: ['lazy-image'],
  classNameBindings: ['isLoaded'],
  isLoaded: false,
  // viewport: inject(),

  didReceiveAttrs() {
    this._super(...arguments);
    scheduleOnce('afterRender', () => {
      this._setupViewport();
    });
  },

  willDestroyElement() {
    this._super(...arguments);
    this._teardownViewport();
  },

  _swapAttributes() {
    const image = this.$('img');
    const source = image.attr('data-src');
    if (source) {
      image.attr('src', source);
      image.removeAttr('data-src');
    }
  },

  _loadImage() {
    const [image] = this.$('img');
    if (image.complete) {
      set(this, 'isLoaded', true);
    } else {
      const fn = () => {
        next(() => {
          if (get(this, 'isDestroyed') || get(this, 'isDestroying')) {
            return;
          }

          set(this, 'isLoaded', true);
        });
      };

      image.onload = () => { fn(); };
      image.onerror = () => { fn(); };
    }
  },

  _setupViewport() {
    // const el = get(this, 'element');
    // this.clearViewportCallback = get(this, 'viewport').onInViewportOnce(el, () => {
      if (get(this, 'isDestroyed') || get(this, 'isDestroying')) {
        return;
      }

      this._swapAttributes();
      this._loadImage();
    // }, { rootMargin: this._getRootMargin() });
  },

  _teardownViewport() {
    // if (this.clearViewportCallback) {
    //   this.clearViewportCallback();
    // }
  },

  _getRootMargin() {
    const rootMargin = get(this, 'rootMargin');
    return Object.assign({
      top: 0,
      left: 0,
      right: 0,
      bottom: -300
    }, rootMargin);
  }
});
