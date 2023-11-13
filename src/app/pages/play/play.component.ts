import {Component} from '@angular/core';
import {Game} from "../../model/Game";
import {TranslateService} from "@ngx-translate/core";
import {languages} from "../../app.component";
import {Language} from "../../model/Language";

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss']
})
export class PlayComponent {

  languages = languages;
  selectedLanguage1 ?: Language;
  selectedLanguage2 ?: Language;

  games: Game[] = [];

  constructor(private translate: TranslateService) {

    this.translate
      .get('play.games')
      .subscribe((translation: Game[]) => {
        Object.values(translation).map((value) => this.games.push(value))
      });
  }

  disableButtons() {
    return !this.selectedLanguage1
      || !this.selectedLanguage2
      || this.selectedLanguage1 == this.selectedLanguage2;
  }

  selectedSameLanguage() {
    return this.selectedLanguage1
      && this.selectedLanguage2
      && this.selectedLanguage1 == this.selectedLanguage2;
  }

  play(name: string) {
    // TODO
  }
}
