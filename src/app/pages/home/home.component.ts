import {Component} from '@angular/core';
import {Pages} from "../../app-routing.module";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  protected readonly Pages = Pages;

  constructor(private router: Router) {
  }

  goTo(page: Pages) {
    this.router.navigate([page]);
  }

}
