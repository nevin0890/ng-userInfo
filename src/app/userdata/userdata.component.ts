import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-userdata',
  templateUrl: './userdata.component.html',
  styleUrls: ['./userdata.component.css']
})
export class UserdataComponent implements OnInit {

  constructor(private api: ApiService) { 
    this.fetchUserList();
  }
  
  fetchUserList = () => {
    this.api.getUserList().subscribe((data) => { this.getUsers = data })
  }
    

 getUsers:any=[]

  ngOnInit(): void {
  }

}
