import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {HttpServiceService} from '../Service/http-service.service'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  idOfResume:any;
  path = 'http://localhost:9000/finduser/';
  resu:any

  constructor(private httpservice: HttpServiceService, private route:ActivatedRoute) { 

    this.route.params.subscribe(val=>{
      const id  = val['id'];
      this.idOfResume = id;
      console.log('ID Received' , this.idOfResume)
    })
  }

  ngOnInit(): void {
    this.httpservice.get(this.path + this.idOfResume).subscribe( val => {
      this.resu = val.resume; 
    })
  }

}
