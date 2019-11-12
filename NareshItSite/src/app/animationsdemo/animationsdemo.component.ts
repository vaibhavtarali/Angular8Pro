import { Component, OnInit } from '@angular/core';
import {trigger,transition,style,animate} from '@angular/animations'

@Component({
  selector: 'app-animationsdemo',
  templateUrl: './animationsdemo.component.html',
  styleUrls: ['./animationsdemo.component.css'],
  animations:[
    trigger('GetEffect',[
      transition('void=>*',[
        style({transform:'scale(4)'

        }),
        animate(5000)
      ])
    ])

  ]
})
export class AnimationsdemoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
