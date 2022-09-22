import { Component, Input } from '@angular/core';
import { FeatureConfig } from "@shared/models";

@Component({
  selector: 'app-feature-list',
  template: `
      <section class="feature">
          <div class="feature__content container container--pall">
              <div class="feature__intro">
                  <h2>Lorem ipsum dolor sit amet.</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti doloremque eligendi enim illum perferendis possimus sint vitae voluptatem. Ab
                      architecto aut beatae dolore facere ipsam molestias, perferendis repudiandae ullam voluptas.</p>
              </div>

              <div class="feature__grid">
                  <ng-container *ngFor="let item of featureItems">
                      <app-feature-list-item class="feature__item" [item]="item"></app-feature-list-item>
                  </ng-container>
              </div>
          </div>
      </section>`
})
export class FeatureListComponent {
  featureItems: FeatureConfig[] = [
    {
      title: 'HTML5',
      description: 'HTML5 is a markup language used for structuring and presenting content on the World Wide Web. It is the fifth and last major HTML version that is a World Wide Web Consortium (W3C) recommendation. The current specification is known as the HTML Living Standard. It is maintained by the Web Hypertext Application Technology Working Group (WHATWG), a consortium of the major browser vendors (Apple, Google, Mozilla, and Microsoft).',
      icon: {
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1024px-HTML5_logo_and_wordmark.svg.png',
        alt: 'HTML5'
      }
    },
    {
      title: 'CSS3',
      description: 'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.',
      icon: { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/CSS.3.svg/1200px-CSS.3.svg.png', alt: 'CSS3' }
    },
    {
      title: 'Javascript',
      description: 'JavaScript  often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.[11] Over 97% of websites use JavaScript on the client side for web page behavior,[12] often incorporating third-party libraries. All major web browsers have a dedicated JavaScript engine to execute the code on users\' devices.',
      icon: { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Javascript-shield.svg/1200px-Javascript-shield.svg.png', alt: 'Javascript' }
    },
    {
      title: 'Typescript',
      description: 'TypeScript is a programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript and adds optional static typing to the language. TypeScript is designed for the development of large applications and transcompiles to JavaScript. As TypeScript is a superset of JavaScript, existing JavaScript programs are also valid TypeScript programs.',
      icon: { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png', alt: 'Typescript' }
    }
  ]
}
