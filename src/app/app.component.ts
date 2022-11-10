import { Component, ViewChild, ViewContainerRef, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  ngAfterViewInit(): void {
    // const componentRef=this.vcr.createComponent(RoomsComponent)
    // componentRef.instance.numberOfRooms=50;
  }
  title = '';
  role="Admin"
// @ViewChild('user', {read: ViewContainerRef})vcr!:ViewContainerRef;
 @ViewChild('name',{static:true})name!:ElementRef;
 ngOnInit(){
  console.log(this.name.nativeElement.innerText="Hilton Hotel");
 }
  // role="User"
  // role="Users"
}

