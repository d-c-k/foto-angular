import { Component, OnInit, Input } from '@angular/core';

import { Post } from '../../assets/post';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() photos?: Post;

  constructor() { }

  unDefine(): void {
    this.photos = undefined;
  }

  ngOnInit(): void {
  }

}
