import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  constructor(private router: Router,
      ){}
  ngOnInit(): void {
  if (typeof window !== 'undefined' && window.localStorage) {
  const user = localStorage.getItem('user');
  if (!user){
    this.router.navigate(['/login']);

  }
}
  }
  onlogout(){
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }
}
