import { Component } from '@angular/core';

 @Component({
     selector: "course",
     template: `
     <ul>
     <li *ngFor="let Course of Courses"> {{ Course }} </li>
     </ul>
     `
 })

 export class CourseComponent{
     Courses= ['course1', 'course2', 'course3' , 'course4'];
 }