import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CoursesService} from './courses.service';
import { SearchComponent} from './search.component';
import { SearchService } from './search.service';
import {SimpleDemoComponent} from './upload.component';
import { FileSelectDirective, FileDropDirective} from 'ng2-file-upload';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
     SimpleDemoComponent,
    FileSelectDirective, FileDropDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    JsonpModule
  ],
  providers: [CoursesService,SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
