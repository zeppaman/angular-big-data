import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SourceDBService } from 'src/app/source-db.service';
import { LokiTestService } from 'src/app/loki.service';
import { HttpClientModule } from '@angular/common/http';
import { LokiModule } from 'src/app/loki/loki.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    LokiModule
  ],
  providers: [SourceDBService,LokiTestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
