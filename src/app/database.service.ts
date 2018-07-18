import { Injectable } from '@angular/core';
import { SourceDBService } from 'src/app/source-db.service';
import { LokiService } from 'src/app/loki/loki.service';
import { DatabaseProvider } from 'src/app/database/database';
import { LokiDatabase } from 'src/app/database/loki.database';
import { PouchDatabase } from 'src/app/database/pouch.database';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  providers = new Map<string, DatabaseProvider>();

  constructor(private source: SourceDBService, private lokiService: LokiService) {
    this.providers["loki"] = new LokiDatabase();
    this.providers["pouch"] = new PouchDatabase();
  }

  loadData(provider: string) {
    let currentProvider: DatabaseProvider = this.providers[provider];
    currentProvider.bulkinsert(this.source.downloadData());
  }

  query(provider: string)
  {
    let currentProvider: DatabaseProvider = this.providers[provider];
    return currentProvider.query();
  }
}
