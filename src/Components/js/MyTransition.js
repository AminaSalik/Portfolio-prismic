// transitions/MyTransition.js
import { Transition } from '@unseenco/taxi';

export default class MyTransition extends Transition {
  /**
   * Handle the transition leaving the previous page.
   * @param { { from: HTMLElement, trigger: string|HTMLElement|false, done: function } } props
   */
  onLeave({ from, trigger, done }) {
    // Example: Fade out effect
    from.style.opacity = 1;
    const fadeOut = () => {
      from.style.opacity = 0;
      done();
    };

    // Perform the fade out animation (you could use CSS transitions, GSAP, etc.)
    setTimeout(fadeOut, 300); // Example duration
  }

  /**
   * Handle the transition entering the next page.
   * @param { { to: HTMLElement, trigger: string|HTMLElement|false, done: function } } props
   */
  onEnter({ to, trigger, done }) {
    // Example: Fade in effect
    to.style.opacity = 0;
    const fadeIn = () => {
      to.style.opacity = 1;
      done();
    };

    // Perform the fade in animation (you could use CSS transitions, GSAP, etc.)
    setTimeout(fadeIn, 300); // Example duration
  }
}
