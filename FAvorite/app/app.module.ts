import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FavoriteComponent } from './favorite.component';
import { AppComponent } from './app.component';
import { SearchComponent } from './search.component'
import { CourseComponent } from './course.component'
@NgModule({
  declarations: [
    AppComponent,
    FavoriteComponent,
    SearchComponent,
    CourseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
