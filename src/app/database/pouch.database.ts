import { Injectable } from '@angular/core';
import { SourceDBService } from 'src/app/source-db.service';
import { LokiService } from 'src/app/loki/loki.service';
import { DatabaseProvider } from 'src/app/database/database';
import { Observable } from 'rxjs';
import * as PouchDB from 'pouchdb/dist/pouchdb';

export class PouchDatabase implements DatabaseProvider {


  private database: any;

  constructor() {
    this.database = new PouchDB('testdb');


  }


  bulkinsert(sourceData: Observable<any>) {
    sourceData.subscribe(data => {
      console.log(data);

      data.forEach(element => {
        //element._id=element.first_name+" "+element.id;
        // console.log(element);
        this.database.post(element);
      });

      this.database.info().then(function (result) {
        console.log(result);
      });
    })
  }

  query() {
    return this.database.find({
      selector: {first_name: 'Friedrich'},
      fields: ['_id', 'first_name','first_name','bird_date'],
     
    } );
  }

};
