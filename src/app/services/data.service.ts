import { Injectable } from '@angular/core';
import { Data, Project, TitleAndContent } from '../model/data'


import * as data from '../../assets/data.json'

@Injectable({
  providedIn: 'root'
})

export class DataService {
  private dataJson: any = (data as any).default;
  private data: Data = this.dataJson


  constructor() { }

  getFullName(): string {
    return this.data.fullName;
  }

  getBio(): string {
    return this.data.bio;
  }

  getTerminalCV(): TitleAndContent {
    return this.data.terminal.cv
  }

  getTerminalLinks(): TitleAndContent[] {
    return this.data.terminal.links;
  }

  getTerminalStatic(): TitleAndContent[] {
    return this.data.terminal.static;
  }

  getProjects(): Project[] {
    return this.data.projects;
  }

  getContacts(): TitleAndContent[] {
    return this.data.contacts;
  }

  getCopyright(): string {
    return this.data.copyright;
  }


}
