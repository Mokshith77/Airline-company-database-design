1. Enter into the Database:
use qmulairline;


2. Clear the collections:
db.airport.drop();
db.booking.drop();
db.Flights.drop();
db.Pilots.drop();
db.Planes.drop();
db.Staff.drop();


3.Schema for Flights  Collection:
db.createCollection("Flights",{
    validator:{
    $jsonSchema:{
        bsonType:"object",
        required:["flight_id","plane_id","Origin","Destination","Departure","Arrival","Pilot","Co-Pilot","Staff","Length"]
        properties:{
            flight_id : {bsonType:"double"}
            plane_id : {bsonType:"double"}
            Origin : {bsonType:"string"}
            Destination : {bsonType:"string"}
            Departure : {bsonType:"date"}
            Arrival : {bsonType:"date"}
            Pilot : {bsonType:"double"}
            Co_Pilot : {bsonType:"double"}
            Staff : {bsonType:"object"}
            Length : {bsonType:"double"}
        }

        }
    }
})


4.Schema for Pilots Collection:
db.createCollection("Pilots",{
    validator:{
    $jsonSchema:{
        bsonType:"object",
        required:["id","Name","Age","Contact","Address","Joining_date","Flying_hours","Flying_test_date","Salary"]
        properties:{
            id : {bsonType:"double"}
            Name : {bsonType:"string"}
            Age : {bsonType:"double"}
            Contact : {bsonType:"string"}
            Address : {bsonType:"string"}
            Joining_date:{bsonType:"date"}
            Flying_hours:{bsonType:"double"}
            Flying_test_date:{bsonType:"date"}
            Salary:{bsonType:"double"}
        }
    }    
    }
})


5.Schema for Planes Collection:
db.createCollection("Planes",{
    validator:{
    $jsonSchema:{
        bsonType:"object",
        required:["plane_id","Make","Registration","Range","Service","Status","Capacity"]
        properties:{
            plane_id:{bsonType:"double"}
            Make:{bsonType:"string"}
            Registration:{bsonType:"string"}
            Range:{bsonType:"double"}
            Service:{bsonType:"double"}
            Status:{bsonType:"string"}
            Capacity:{bsonType:"double"}
        }  
    }
    }
})

6.Schema for Staff Collection:
db.createCollection("Staff", {
    validator: {
    $jsonSchema: {
        bsonType: "object",
        required: [ "staff_id", "Name", "Age","Destination","Contact","Address","Salary" ],
        properties: {
            staff_id: { bsonType: "double" },
            Name: { bsonType: "string"},
            Age: { bsonType: "double" },
            Designation: {bsonType: "string"},
            Contact:{bsonType: "string"},
            Address:{bsonType: "string"},
            Salary:{bsonType: "double"}

        }
    }
    }
})

7.Schema for airport Collection:
db.createCollection("airport",{
    validator:{
    $jsonSchema:{
        bsonType:"object",
        required:["airportid","Name","Location","UsageCost","Parkingrate","refuelingcharges"]
        properties:{
            airportid:{bsonType:"double"},
            Name:{bsonType:"string"}
            Location:{bsonType:"string"}
            UsageCost:{bsonType:"double"}
            Parkingrate:{bsonType:"double"}
            refuelingcharges:{bsonType:"double"}
            
        }
    }
    }
})

8.Schema for booking Collection:
db.createCollection("booking",{
    validator:{
    $jsonSchema:{
        bsonType:"object",
        required:["bookingid","bookedon","bookedby","passengers","flights","Departure","Destination","JourneyDate","totalcost"]
        properties:{
            bookingid:{bsonType:"double"}
            bookedon:{bsonType:"date"}
            passengers:{bsonType:"object"}
            flights:{bsonType:"object"}
            Departure:{bsonType:"string"}
            Destination:{bsonType:"string"}
            JourneyDate:{bsonType:"date"}
            totalcost:{bsonType:"double"}
        }
    }
    }
})