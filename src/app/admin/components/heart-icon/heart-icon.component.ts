import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-heart-icon',
  templateUrl: './heart-icon.component.html',
  styleUrls: ['./heart-icon.component.scss']
})
export class HeartIconComponent implements OnInit {
  @ViewChild('heartSvgTemplate') heartSvgTemplate!: TemplateRef<any> | null;

  constructor() { }

  ngOnInit(): void {
  }

}
