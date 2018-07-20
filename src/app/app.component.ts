import { Component } from '@angular/core';
import { DatabaseService } from 'src/app/database.service';
import { DatabaseProvider } from 'src/app/database/database';
import { Stopwatch } from 'src/app/logging/Stopwatch';

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

   stopwatch:Stopwatch= new Stopwatch();

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
    this.stopwatch.start();
    this.database.loadData(this.settings.provider);
    this.stopwatch.stop();
    this.title = 'imported';
    console.log("data imported in:",this.stopwatch.totalMilliseconds(),"ms");
  }

  query() {
    console.log('clicked query');
    this.stopwatch.start();
    this.users = [];
    this.database.query(this.settings.provider).subscribe((x) => {
      console.log(x);
      if (x.length) {
        this.users = x;
      } else {
        this.users.push(x);
      }
      this.stopwatch.stop();
      console.log("query done in:",this.stopwatch.totalMilliseconds(),"ms");
    });
  }
}
