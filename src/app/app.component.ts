import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'portal';
  repos;

  constructor(private apiService: ApiService) { }
  ngOnInit() {
    this.apiService.getRepos().subscribe((data)=>{
      console.log(data);
      this.repos = data;
    });
  }
}
