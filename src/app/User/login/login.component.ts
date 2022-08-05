import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,
              private Login:LoginService) { }

  ngOnInit(): void {
  }

  navegar(user:HTMLInputElement,pass:HTMLInputElement){
    this.Login.login(user.value,pass.value).subscribe(resp=>{
      console.log(resp);
      if(resp.ok){
        localStorage.setItem("jwt",resp.jwt);
        this.router.navigate(['Dash/Home'])
      }
    },err=>{
      Swal.fire('Error','Usuario invalido','error');
    })
  }

}
