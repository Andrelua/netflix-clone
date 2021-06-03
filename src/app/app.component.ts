import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'netflix-clone';
  menuOpened = false;

  setMenuStatus(state: boolean) {

    this.menuOpened = state;

  }

  closeMenu(){
    this.menuOpened = false;
  }
}
