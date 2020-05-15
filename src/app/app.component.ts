import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'portal';
  host = location.protocol + '//' + location.hostname;
  repos;

  constructor(private apiService: ApiService) { }
  ngOnInit() {
    this.apiService.getRepos().subscribe((repos:Array<any>)=>{
      console.log(repos);
      repos.forEach(repo => {
        repo.ideLink =  this.host + '/vscode/?folder=/home/coder/project/dev/git/' + repo.name; 
      })
      this.repos = repos;
    });
  }
}
