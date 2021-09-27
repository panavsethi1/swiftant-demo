import { Component, OnChanges } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(
    private router: RouterModule,
    private translate: TranslateService
  ) {
    translate.setDefaultLang('en');
    translate.use('en');
  }
  title = 'covid-registration';
  selectedLanguage = 'en';

  handleLangChange(event: any) {
    console.log(event.target.value);
    this.translate.use(event.target.value);
  }
}
