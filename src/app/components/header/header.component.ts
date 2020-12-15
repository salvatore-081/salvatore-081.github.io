import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  goToProjects() {
    document.getElementById("projectsContainer").scrollIntoView({ block: "start", behavior: "smooth" });
  }

  goToContacts() {
        document.getElementById("contactsContainer").scrollIntoView({ block: "start", behavior: "smooth" });
  }
}
