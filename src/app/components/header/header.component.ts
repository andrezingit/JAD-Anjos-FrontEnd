// header.component.ts
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router'; 

@Component({
  selector: 'app-header' ,
  standalone:true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  imports: [CommonModule, RouterLink] 
})
export class HeaderComponent { 
  logo = 'assets/images/logo-preta.png';
  
  menuItems = [
    { name: 'Quem Somos?', url: '/about' },
    { name: 'Produtos', url: '/produto' },
    { name: 'Contatos', url: '/contato' }
  ];
}