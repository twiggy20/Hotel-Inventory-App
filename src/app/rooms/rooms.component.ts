import { Conditional } from '@angular/compiler';
import { AfterViewInit, Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
// import { HeaderComponent } from '../header/header.component';
import { Rooms, RoomList } from './rooms';
import { HeaderComponent } from './../header/header.component';
@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit, AfterViewInit {
  hotelName="sikky rolex";
  numberOfRooms=10;
  hideRooms=true;
  mytitle:string='Room List'

  room:Rooms={
  availableRooms:10,
   bookedRooms:5 ,
   //bookedRooms:0,
    totalRooms: 15,
  }
  
  roomList:RoomList[]=[]
  selectedRooms:RoomList[]=[]
  selected=false
  @ViewChild(HeaderComponent, ) headerComponent!:HeaderComponent;
  @ViewChildren(HeaderComponent, ) headerchildrenComponent!:QueryList<HeaderComponent>;
  constructor() { }
  ngAfterViewInit(): void {
   this.headerComponent.title='Rooms View';
   this.headerchildrenComponent.last.title="last title";
  //  this.headerchildrenComponent.forEach(ti => {
    
  //  });
  }

  ngOnInit(): void {
    // console.log(this.headerComponent)
    this.roomList=[{
      roomNumber:1,
      roomType:"chalet",
      amenities:"air Conditional, furniture, Tv",
      price:4000,
      checkInTime:new Date('29-oct-2022'),
      checkOutTime:new Date('4-nov-2022'),
    },
    {
    roomNumber:2,
    roomType:"chalet",
    amenities:"air Conditional, furniture, Tv, wifi",
    price:4500,
    checkInTime:new Date('29-oct-2022'),
    checkOutTime:new Date('4-nov-2022'),
  },
  {
    roomNumber:3,
    roomType:"single hostel",
    amenities:"furniture",
    price:2500,
    checkInTime:new Date('29-oct-2022'),
    checkOutTime:new Date('4-nov-2022'),
  }
  ]
  }
toggle()
{
  this.hideRooms=!this.hideRooms;
  this.mytitle='List of Rooms'
}
selectRoom(RoomItem:RoomList){
  this.selected=true
  this.selectedRooms.push(RoomItem)
console.log('you selected', RoomItem)
}
addRoom(){
  const room:RoomList={
    roomNumber:4,
    roomType:"4-man hostel",
    amenities:"furniture",
    price:2500,
    checkInTime:new Date('29-oct-2022'),
    checkOutTime:new Date('4-nov-2022'),
  };
  this.roomList=[...this.roomList, room]
}
}
