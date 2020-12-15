import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service'
import { Project, TitleAndContent } from '../model/data'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  nameToDisplay: string = `> `;
  private fullNameCharacters: string[];
  private typeWriterIndex: number = 0;
  bio: string;
  projects: Project[];
  contactsLinks: TitleAndContent[];
  copyright: string;




  constructor(private dataService: DataService) { }

  ngOnInit() {
    setTimeout(() => this.typeWriter(), 2000);
    this.fullNameCharacters = [...this.dataService.getFullName()]
    this.bio = this.dataService.getBio()
    this.projects = this.dataService.getProjects()
    this.contactsLinks = this.dataService.getContacts()
    this.copyright = this.dataService.getCopyright()
  }

  typeWriter() {
    if (this.typeWriterIndex < this.dataService.getFullName().length) {
      this.nameToDisplay += this.dataService.getFullName().charAt(this.typeWriterIndex)
      this.typeWriterIndex++
      setTimeout(() => this.typeWriter(), 50);
    }
  }

}
