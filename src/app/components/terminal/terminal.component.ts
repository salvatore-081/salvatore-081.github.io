import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service'
import { TitleAndContent } from 'src/app/model/data';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.scss']
})
export class TerminalComponent implements OnInit {
  terminalLinks: TitleAndContent[];
  terminalStatic: TitleAndContent[];
  terminalCV: TitleAndContent;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.terminalLinks = this.dataService.getTerminalLinks();
    this.terminalStatic = this.dataService.getTerminalStatic();
    this.terminalCV = this.dataService.getTerminalCV();
  }

}
