import { Injectable } from '@angular/core';
import { SourceDBService } from 'src/app/source-db.service';
import { LokiService} from 'src/app/loki/loki.service'

@Injectable({
  providedIn: 'root'
})
export class LokiTestService {
  private  db=null;
  private users=null;
  constructor(private source:SourceDBService, private loki: LokiService) { 

     this.db = loki.init('mydb.txt');
    // db will export lokijs object
    // full docs at https://rawgit.com/techfort/LokiJS/master/jsdoc/Loki.html
    this.users = this.db.addCollection('users');
    
    
  }


  bulkinsert()
  {
    this.source.downloadData().subscribe(data => {
      console.log(data);

      data.forEach(element => {
        //console.log(element);
        this.users.insert(element);
      });
   
      console.log(this.users.data.length);
    })
  }

}
