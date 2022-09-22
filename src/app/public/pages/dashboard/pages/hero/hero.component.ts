import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  template: `
      <section class="hero">
          <div class="container">
              <div class="hero__image"></div>
              <div class="hero__text container--pall">
                  <h1>Lorem ipsum dolor sit amet.</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquid amet aut dolores modi nulla odio sapiente, vel. Aliquam aperiam
                      deserunt
                      nam officia quis voluptatem? Aspernatur expedita fuga quia quo?</p>
                  <a class="button hero__cta">Request Invite</a>
              </div>
          </div>
      </section>
  `
})
export class HeroComponent {

}
