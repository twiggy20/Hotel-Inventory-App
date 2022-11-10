
import { Component, Input, Output,OnInit, EventEmitter, ChangeDetectionStrategy, OnChanges, SimpleChanges } from '@angular/core';
import { RoomList } from '../rooms';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.css'],
   changeDetection:ChangeDetectionStrategy.OnPush
})
export class RoomsListComponent implements OnInit,OnChanges {

  @Input()rooms:RoomList[]=[]
  @Input()title:string=''
  @Output() selectedRoom= new EventEmitter<RoomList>();
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['title']) {
      this.title=changes['title'].currentValue.toUpperCase();
    }
  }

  ngOnInit(): void {
  }
  selectRoom(room:RoomList){
    this.selectedRoom.emit(room)
  }

}
function output() {
  throw new Error('Function not implemented.');
}

