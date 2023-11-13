import {Component} from '@angular/core';
import {MenuItem} from "primeng/api";
import {TranslateService} from "@ngx-translate/core";
import {Router} from "@angular/router";
import {Language} from "./model/Language";
import {DropdownChangeEvent} from "primeng/dropdown";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'languages-app';

  selectedLanguage: Language;

  languages = languages;

  items: MenuItem[] = [];

  constructor(private translate: TranslateService, private router: Router) {
    this.selectedLanguage = languages.filter(value =>
        value.code === this.translate.currentLang).pop() ??
      {
        name: 'Español',
        code: 'es'
      };
  }

  goToHomePage() {
    this.router.navigate(['']);
  }

  setLanguage(event: DropdownChangeEvent) {
    if (event.value) {
      this.translate.use(event.value.code)
    }
  }
}

export const languages = [
  {name: 'Español', code: 'es'},
  {name: 'Français', code: 'fr'},
  {name: 'English', code: 'en'}
];
