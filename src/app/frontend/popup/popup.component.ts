import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent {

//
  @Input() title: string = ''
  @Input() body: string = ''
  @Input() cancelButtonText: string = 'Cancel'
  @Input() okButtonText: string = 'Ok'
  @Input() isShowing: boolean = false


email!: string

//Ao clicar no openpop up, ele mostra o popup devido ao isShowing ser false
  openPopup() {
    this.isShowing = true;
  
  }
//Reverte ao original
  closePopup() {
    this.isShowing = false;
  }

}
