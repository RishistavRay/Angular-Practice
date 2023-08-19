import { Component, OnInit } from '@angular/core';
import {Room, RoomList} from './rooms';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit{
  hotelname = 'Hilton Hotel';

  
  
  cantDestroy = true;

  hideRooms = false;

  rooms : Room = {
    totalRooms: 15,
    availableRooms: 1,
    bookedRooms: 5
  };

  title = 'All Rooms'

  selectedRoom!: RoomList;

  roomsList : RoomList[] = [];

  constructor() {}

  ngOnInit(): void {
    this.roomsList = [
      { roomNumber: 1,
        roomType: 'Owner Room',
        amenities: 'Air Conditioner, Free Wifi, TV',
        price: 500,
        photos: 
          'https://unsplash.com/s/photos/hotels',
        checkinTime: new Date('11-Nov-2021'),
        checkoutTime: new Date('12-Nov-2023'),
        status: false
      } 
    
    ];
  }
  
  numberOfRooms = this.rooms.availableRooms;

  toggle() {
    this.hideRooms = !this.hideRooms; //this. because its literally a class
    this.title = "Rooms List";
  }

  increase() {
    this.cantDestroy = false;
    this.rooms.availableRooms++;
    this.numberOfRooms = this.rooms.availableRooms;
    this.roomsList = [...this.roomsList, {roomNumber: this.rooms.availableRooms,
      roomType: 'Peasant Room',
      amenities: 'Air Conditioner, Free Wifi, TV',
      price: 1500,
      photos: 
        'https://unsplash.com/s/photos/allhotels',
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('12-Nov-2023'),
      status: false
    }];
  }

  decrease() {
    if(this.numberOfRooms == 2) this.cantDestroy = true;

    if(this.numberOfRooms>=2) {
    this.roomsList = this.roomsList.slice(0,this.numberOfRooms-1);
    this.rooms.availableRooms--;
    this.numberOfRooms = this.rooms.availableRooms;
    }
  }

  selectRoom(room: RoomList) {

    room.status = !room.status;
    this.selectedRoom = room;

  }

  addRoom() {
    const room: RoomList = {
      roomNumber: 120,
      roomType: 'Boss Room',
      amenities: 'Huge throne',
      price: 50000,
      photos: 'https://en.wikipedia.org/wiki/Throne_room#/media/File:La_salle_du_Tr%C3%B4ne_(Ch%C3%A2teau_de_Fontainebleau).jpg',
      checkinTime: new Date('11-Dec-2021'),
      checkoutTime: new Date('12-Nov-2021'),
      status: false
    };

    //this.roomsList.push(room);
    this.roomsList= [...this.roomsList, room];
    this.rooms.availableRooms++;
    this.numberOfRooms = this.rooms.availableRooms;

  }
  

}
