import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  languages ?: string[];
  selectedLanguage1 ?: string;
  selectedLanguage2 ?: string;

  ngOnInit() {
    this.languages = ["Español", "English", "Français", "Italiano"];
  }
}
