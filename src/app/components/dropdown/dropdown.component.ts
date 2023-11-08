import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent {

  @Input()
  defaultText?: string;

  @Input()
  options?: string[];

  selectOption(option: string) {
    this.defaultText = option;
  }
}
