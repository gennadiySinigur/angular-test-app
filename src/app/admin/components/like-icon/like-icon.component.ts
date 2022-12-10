import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-like-icon',
  templateUrl: './like-icon.component.html',
  styleUrls: ['./like-icon.component.scss']
})
export class LikeIconComponent implements OnInit {
  @ViewChild('likeSvgTemplate') likeSvgTemplate!: TemplateRef<any> | null;

  constructor() { }

  ngOnInit(): void {
  }

}
