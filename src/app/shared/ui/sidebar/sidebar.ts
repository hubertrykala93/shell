import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Button } from 'primeng/button';
import { SidebarService } from './sidebar.service';
Button;

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, Button],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {
  public readonly sidebarService = inject(SidebarService);
}
