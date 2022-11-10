export interface Rooms{
    availableRooms:number;
    bookedRooms:number;
    totalRooms:number;
}

export interface RoomList{
    roomNumber:number;
    roomType:string;
    amenities:string;
    price:number;
    checkInTime:Date;
    checkOutTime:Date
}