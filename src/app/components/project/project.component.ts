import { Component, OnInit, Input } from '@angular/core';
import { TitleAndContent } from 'src/app/model/data';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() title: string;
  @Input() img: string;
  @Input() description: string;
  @Input() tags: string[];
  @Input() links: TitleAndContent[]

}
