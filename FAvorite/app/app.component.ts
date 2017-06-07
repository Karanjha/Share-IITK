import { Component } from '@angular/core';
import { FavoriteComponent } from './favorite.component'
import { SearchComponent } from './search.component'
import { CourseComponent } from './course.component'
@Component({
  selector: 'app-root',
  templateUrl: `./app.component.html`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tweet = {
    totalLikes: 10,
    iLike: false
    
  }
}
