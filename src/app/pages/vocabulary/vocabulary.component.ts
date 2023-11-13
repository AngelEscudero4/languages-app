import {Component} from '@angular/core';
import {languages} from "../../app.component";
import {Language} from "../../model/Language";

@Component({
  selector: 'app-vocabulary',
  templateUrl: './vocabulary.component.html',
  styleUrls: ['./vocabulary.component.scss']
})
export class VocabularyComponent {

  languages = languages;
  selectedLanguage ?: Language;

  disableButtons() {
    return !this.selectedLanguage
  }
}
