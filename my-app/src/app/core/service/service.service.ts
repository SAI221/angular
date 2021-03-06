import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  public theme$: Subject<any> = new Subject();
  // public labels$:Label[];
  public search$: Subject<any> = new Subject();
  constructor() { }
  public setTheme(themeChanged: boolean) {
    this.theme$.next(themeChanged);
  }

  public getTheme() {
    return this.theme$;
  }
}
