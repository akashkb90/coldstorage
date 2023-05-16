import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.css']
})
export class HeadersComponent implements OnInit {

  isLoggedIn:boolean;
  loggedInUser:string;
  showRegister:boolean;

  constructor(private router:Router,private authService:AuthService) { }

  ngOnInit() {
    this.authService.getAuth().subscribe(auth=>{
      if(auth){
        this.isLoggedIn=true;
        this.loggedInUser=auth.email; 
      }else{
        this.isLoggedIn=false;
      }
    })
  }

  logout(){
    this.authService.logout(); 
    this.router.navigate(["/login"]);
  }

}
