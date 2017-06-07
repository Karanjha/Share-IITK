import { Component, EventEmitter, Output, Input } from '@angular/core'

@Component({
    selector: "favorite",
    template: `
    <i
    class="glyphicon glyphicon-heart"
    [class.highlighted]="iLike"
    (click)="onClick()">
    </i>
    <span> {{ totalLikes }} </span>
    `,
    styles:[`
    .glyphicon-heart {
        color: #ccc;
        cursor: pointer;
    }

    .highlighted{
        color: black;
    }
    `] 
})

export class FavoriteComponent{
   @Input() totalLikes = 0;
   @Input() iLike=false;
    
    onClick(){
        this.iLike = !this.iLike;
        this.totalLikes+=this.iLike ? 1 : -1 ;
    }
}


