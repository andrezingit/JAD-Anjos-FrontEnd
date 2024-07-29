// navigation.component.ts
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-navigation',
  standalone:true,
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive]
})

export class NavigationComponent {
  menuItems = [
    { name: 'ANEIS', url: '/home' },
    { name: 'PULSEIRAS', url: '/about' },
    { name: 'COLARES', url: '/produto' },
    { name: 'GARGANTILHAS', url: '/contato' },
    { name: 'LINGERIES', url: '/produto'}
  ];
}