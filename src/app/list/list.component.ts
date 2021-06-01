import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {HttpServiceService} from '../Service/http-service.service'
import {Router} from '@angular/router';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  path = 'http://localhost:9000/api/users';
  mylist:any;
  constructor( private httpservice: HttpServiceService,
    private router:Router) { }

  ngOnInit(): void {
    this.httpservice.get(this.path).subscribe( val => {
      
      this.mylist = val.data;
      console.log(this.mylist);
    })
  }

  moveToDetail(item:any){
    
    this.router.navigate(['/details', item.id]);
    }
}