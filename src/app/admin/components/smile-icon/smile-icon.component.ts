import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-smile-icon',
  templateUrl: './smile-icon.component.html',
  styleUrls: ['./smile-icon.component.scss']
})
export class SmileIconComponent implements OnInit {
  @ViewChild('smileSvgTemplate') smileSvgTemplate!: TemplateRef<any> | null;

  constructor() { }

  ngOnInit(): void {
  }

}
