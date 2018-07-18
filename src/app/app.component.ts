import { Component } from '@angular/core';
import { DatabaseService } from 'src/app/database.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  users:any[]=[];
   settings:any= {
      provider: "pouch",
  };

  constructor(private database:DatabaseService)
  {}

    click()
    {
      this.title="clicked";
      console.log("clicked");
      this.database.loadData(this.settings.provider);
    }

    query()
    {
      console.log("clicked query");
       this.users=this.database.query(this.settings.provider);
    }
}
