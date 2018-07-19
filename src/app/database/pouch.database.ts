import { Injectable } from '@angular/core';
import { SourceDBService } from 'src/app/source-db.service';
import { LokiService } from 'src/app/loki/loki.service';
import { DatabaseProvider } from 'src/app/database/database';
import { Observable } from 'rxjs';
import * as PouchDB from 'pouchdb/dist/pouchdb';
import * as PouchFind from 'pouchdb-find/lib/index.js';
import { from, pipe} from 'rxjs';
import { map } from 'rxjs/operators';

PouchDB.plugin(PouchFind);

export class PouchDatabase implements DatabaseProvider {




  private database: any;

  constructor() {

    const time = new Date();
    this.database = new PouchDB('dd3' );

    this.database.createIndex({
      index: {
        fields: ['first_name']
      }
    }).then(function (result) {
      // handle result
    }).catch(function (err) {
      console.log(err);
    });
  }


  bulkinsert(sourceData: Observable<any>) {
    sourceData.subscribe(data => {
      console.log(data);

      data.forEach(element => {
        // element._id=element.first_name+" "+element.id;
        // console.log(element);
        this.database.post(element);
      });

      this.database.info().then(function (result) {
        console.log(result);
      });
    });
  }

  query() {

    return from(
      this.database.find({
        selector: { first_name: 'Friedrich' },
        fields: ['_id', 'first_name', 'first_name', 'bird_date'],
      })
      .then(data => data.docs      )

    );
  }

}
