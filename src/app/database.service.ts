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

  private providers = new Map<string, DatabaseProvider>();

  constructor(private source: SourceDBService, private lokiService: LokiService) {
    this.providers.set("loki", new LokiDatabase());
    this.providers.set("pouch", new PouchDatabase());
  }

  loadData(provider: string) {
    let currentProvider: DatabaseProvider = this.providers.get(provider);   
    
    currentProvider.bulkinsert(this.source.downloadData());   
  }

  query(provider: string)
  {
    let currentProvider: DatabaseProvider = this.providers.get(provider);
    return currentProvider.query();
  }

  getProviders():Map<string, DatabaseProvider>
  {
    return this.providers;
  }
}
