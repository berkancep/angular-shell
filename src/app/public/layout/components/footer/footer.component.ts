import { Component } from '@angular/core';
import { IconConfig, LinkConfig, MenuItemConfig } from "@shared/models";

interface Footer {
  logo: IconConfig;
  socials: Social[];
  links: (MenuItemConfig & { order: 'col-1' | 'col-2' })[];
}

interface Social {
  link: LinkConfig;
  icon: IconConfig;
}

@Component({
  selector: 'public-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  footer: Footer = {
    logo: { src: 'https://cdn.worldvectorlogo.com/logos/angular-icon.svg', alt: 'Logo' },
    socials: [
      {
        link:
          {
            src: 'facebook.com/berkan.cep',
            target: '_blank'
          },
        icon:
          {
            src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/768px-Facebook_Logo_%282019%29.png',
            alt: 'Facebook'
          }
      },
      {
        link:
          {
            src: 'linkedin.com/berkancep',
            target: '_blank'
          },
        icon:
          {
            src: 'https://openvisualfx.com/wp-content/uploads/2019/10/linkedin-icon-logo-png-transparent.png',
            alt: 'Linkedin'
          }
      },
      {
        link:
          {
            src: 'github.com/berkancep',
            target: '_blank'
          },
        icon:
          {
            src: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
            alt: 'Github'
          }
      },
      {
        link:
          {
            src: 'berkancep/medium.com',
            target: '_blank'
          },
        icon:
          {
            src: 'https://cdn1.iconfinder.com/data/icons/social-media-circle-7/512/Circled_Medium_svg5-512.png',
            alt: 'Medium'
          }
      }
    ],
    links: [
      { name: 'Bize Ulaşın', routerLink: '/bize-ulasin', visible: true, order: 'col-1' },
      { name: 'İletişim', routerLink: '/iletisim', visible: true, order: 'col-1' },
      { name: 'Blog', routerLink: '/blog', visible: true, order: 'col-1' },
      { name: 'Kariyer', routerLink: '/kariyer', visible: true, order: 'col-2' },
      { name: 'Destek', routerLink: '/destek', visible: true, order: 'col-2' },
      { name: 'Gizlilik Politikası', routerLink: '/gizlilik-politikası', visible: true, order: 'col-2' },
    ]
  }
}
