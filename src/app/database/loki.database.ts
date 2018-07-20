import { Injectable } from '@angular/core';
import { SourceDBService } from 'src/app/source-db.service';
import { LokiService } from 'src/app/loki/loki.service';
import { DatabaseProvider } from 'src/app/database/database';
import { Observable,from } from 'rxjs';


export class LokiDatabase implements DatabaseProvider {
  private db = null;
  private users = null;
  private loki:LokiService;
  constructor( ) 
  {
    this.loki= new LokiService();

    this.db = this.loki.init('mydb.txt');
    // db will export lokijs object
    // full docs at https://rawgit.com/techfort/LokiJS/master/jsdoc/Loki.html
    this.users = this.db.addCollection('users');


  }


  bulkinsert(sourceData:Observable<any>) {
    sourceData.subscribe(data => {
      //console.log(data);

      data.forEach(element => {
        //console.log(element);
        this.users.insert(element);
      });

     // console.log(this.users.data.length);
    })
  }

  query() {
    
    return from( this.users.find({ 'first_name': { '$eq': 'Friedrich' } }));
  }

}
