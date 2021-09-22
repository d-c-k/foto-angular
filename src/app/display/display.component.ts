import { Component, OnInit } from '@angular/core';

import { Post } from '../../assets/post';
import { POSTS } from '../../assets/post-mockup';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
    posts = POSTS;

  constructor() { }

  ngOnInit(): void {
  }

}
