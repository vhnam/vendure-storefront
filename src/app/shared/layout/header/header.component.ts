import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  private isOpenNavMenu: boolean = false;
  public navItems = [
    {
      label: 'Interchangeable Lens Cameras',
      url: '#',
    },
    {
      label: 'Compact Cameras',
      url: '#',
    },
    {
      label: 'Instant Cameras',
      url: '#',
    },
    {
      label: 'Lenses',
      url: '#',
    },
  ];

  toggle() {
    this.isOpenNavMenu = !this.isOpenNavMenu;
  }
}
