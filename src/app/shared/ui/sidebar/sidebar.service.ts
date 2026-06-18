import { effect, Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SidebarService {
  public readonly isSidebarOpen = signal(false);

  constructor() {
    effect(() => console.log('iS Sidebar OPen -> ', this.isSidebarOpen()));
  }
}
