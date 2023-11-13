import {Component} from '@angular/core';
import {Game} from "../../model/game";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss']
})
export class PlayComponent {

  languages ?: string[];
  selectedLanguage1 ?: string;
  selectedLanguage2 ?: string;

  games: Game[] = [];

  constructor(private translate: TranslateService) {
    this.languages = ["Español", "English", "Français", "Italiano"];

    this.translate
      .get('play.games')
      .subscribe((translation: Game[]) => {
        console.log(translation)
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
