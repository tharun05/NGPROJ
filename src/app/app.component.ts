import { Component, ViewChild, OnInit, HostListener } from '@angular/core';
import { MatSidenav } from '@angular/material';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  userData:any
  @ViewChild('sidenav') sidenav: MatSidenav;
  navMode = 'side';
  showMenu = true;
  constructor() {
   this.userData =  sessionStorage.getItem('userData');
   
   }

  ngOnInit() {
    if(this.userData){
      if(this.navMode == 'over'){
        setTimeout( ()=>{
          if( this.sidenav){
            this.sidenav.close();
          }
        }, 100)
      }
    }
    if (window.innerWidth < 768) {
      this.navMode = 'over';
    } 
    
   
  }  

  @HostListener('window:resize', ['$event'])
  onResize(event) {
        if (event.target.innerWidth < 768) {
            this.navMode = 'over';
            if( this.sidenav){
              this.sidenav.close();
            }
           
        }
        if (event.target.innerWidth > 768) {
           this.navMode = 'side';
           if(this.sidenav){
            this.sidenav.open();
           }
          
        }
  }

  
}
