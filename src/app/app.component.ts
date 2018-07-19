import { Component } from '@angular/core';
import { DatabaseService } from 'src/app/database.service';
import { DatabaseProvider } from 'src/app/database/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  users: any[] = [];
  settings: any = {
    provider: "loki",
    providers: []
  };

  constructor(private database: DatabaseService) {

    let providers = this.database.getProviders();

    this.settings.providers = Array.from(providers.keys());

  }

  changeProvider(value) {
    console.log("changed", value);
    this.settings.provider = value;
  }

  click() {
    this.title = "importing";
    console.log("importing");
    this.database.loadData(this.settings.provider);
    console.log("imported");
    this.title = 'imported';

  }

  query() {
    console.log('clicked query');
    this.users = [];
    this.database.query(this.settings.provider).subscribe((x) => {
      console.log(x);
      if (x.length) {
        this.users = x;
      } else {
        this.users.push(x);
      }
    });
  }
}
