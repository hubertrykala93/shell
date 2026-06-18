import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './shared/ui/header/header';
import { Sidebar } from './shared/ui/sidebar/sidebar';
import { SidebarService } from './shared/ui/sidebar/sidebar.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Sidebar],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  public readonly sidebarService = inject(SidebarService);
  protected readonly title = signal('shell');
}
