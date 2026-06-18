import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SidebarService {
  public readonly isSidebarOpen = signal(false);
}
