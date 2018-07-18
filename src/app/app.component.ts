import { Component } from '@angular/core';
import { LokiTestService } from 'src/app/loki.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private loki:LokiTestService)
  {}

    click()
    {
      this.title="clicked";
      console.log("clicked");

      this.loki.bulkinsert();
    }
}
