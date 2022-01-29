//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Group - 64
// Mokshith Kummari: 210650383
// Karun Kumar Puttala  : 210542309
// Krishna Sameer Kummetha: 210470013
// Hari Peravali : 210630008
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 DATA BASE SETUP
 A cluster has been setup on MongoDB Atlas and a database 'airline' has been created.
 //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 
 //1. Enter the database
 use airline;

// 2.Clear any existing data
db.Pilots.remove({});
db.Staff.remove({});
db.Planes.remove({});
db.Flights.remove({});
db.booking.remove({});
db.airports.remove({});

//3. Insert data into Pilots collection
use airline;

db.Pilots.insert({"id":1,"Name":"Chiranjeevi","Age":60,"Contact":"07776665555","Address":"150 Oxford Street London","Joining_date":new Date("2001-09-24T23:00:00Z"),"Flying_hours":15038,"Flying_test_date":new Date("2021-09-01T22:00:00Z"),"Salary":10000});

db.Pilots.insert({"id":2,"Name":"Mahesh Babu","Age":40,"Contact":"07776664444","Address":"151 Oxford Street London","Joining_date":new Date("2010-05-08T23:00:00Z"),"Flying_hours":10258,"Flying_test_date":new Date("2021-08-11T22:00:00Z"),"Salary":7000});

db.Pilots.insert({"id":3,"Name":"Nagarjuna","Age":55,"Contact":"07776663333","Address":"152 Oxford Street London","Joining_date":new Date("2006-06-20T23:00:00Z"),"Flying_hours":13369,"Flying_test_date":new Date("2021-07-21T22:00:00Z"),"Salary":8000});

db.Pilots.insert({"id":4,"Name":"Rama Rao","Age":35,"Contact":"07776662222","Address":"153 Oxford Street London","Joining_date":new Date("20011-06-24T23:00:00Z"),"Flying_hours":8569,"Flying_test_date":new Date("2021-09-01T22:00:00Z"),"Salary":6000});

db.Pilots.insert({"id":5,"Name":"Pawan Kalyan","Age":50,"Contact":"07776661111","Address":"154 Oxford Street London","Joining_date":new Date("2005-03-24T23:00:00Z"),"Flying_hours":11000,"Flying_test_date":new Date("2021-07-21T22:00:00Z"),"Salary":6500});

db.Pilots.insert({"id":6,"Name":"Allu Arjun","Age":30,"Contact":"07776660000","Address":"155 Oxford Street London","Joining_date":new Date("2015-05-24T23:00:00Z"),"Flying_hours":6078,"Flying_test_date":new Date("2021-09-11T22:00:00Z"),"Salary":4000});

db.Pilots.insert({"id":7,"Name":"Prabhas","Age":40,"Contact":"07776666666","Address":"156 Oxford Street London","Joining_date":new Date("2007-04-07T23:00:00Z"),"Flying_hours":10548,"Flying_test_date":new Date("2021-09-21T22:00:00Z"),"Salary":7000});

//4. Insert data into Staff collection
use airline;


db.Staff.insert({"staff_id":1,"Name":"David","Age":30,"Designation":"Cabin Crew","Contact":"08886665555","Address":"150 Brixton Street London","Salary":800});

db.Staff.insert({"staff_id":2,"Name":"Regina","Age":25,"Designation":"Cabin Crew","Contact":"08886664444","Address":"151 Brixton Street London","Salary":400});

db.Staff.insert({"staff_id":3,"Name":"Samantha","Age":32,"Designation":"Cabin Crew","Contact":"08886663333","Address":"152 Brixton Street London","Salary":1000});

db.Staff.insert({"staff_id":4,"Name":"Kajal","Age":37,"Designation":"Cabin Crew","Contact":"08886662222","Address":"153 Brixton Street London","Salary":1500});

db.Staff.insert({"staff_id":5,"Name":"Tamanna","Age":34,"Designation":"Cabin Crew","Contact":"08886661111","Address":"154 Brixton Street London","Salary":1000});

db.Staff.insert({"staff_id":6,"Name":"Anushka","Age":40,"Designation":"Cabin Crew","Contact":"08886660000","Address":"155 Brixton Street London","Salary":1500});

db.Staff.insert({"staff_id":7,"Name":"Anthony","Age":27,"Designation":"Cabin Crew","Contact":"08886666666","Address":"156 Brixton Street London","Salary":800});

db.Staff.insert({"staff_id":8,"Name":"Rahul","Age":35,"Designation":"Cabin Crew","Contact":"08886667777","Address":"157 Brixton Street London","Salary":1000});

db.Staff.insert({"staff_id":9,"Name":"Arjun","Age":35,"Designation":"Booking Clerk","Contact":"07776663333","Address":"160 Brixton Street London","Salary":600});

db.Staff.insert({"staff_id":10,"Name":"Kumar","Age":28,"Designation":"Booking Clerk","Contact":"07776662222","Address":"161 Brixton Street London","Salary":500});

db.Staff.insert({"staff_id":11,"Name":"Preethi","Age":25,"Designation":"Booking Clerk","Contact":"07776661111","Address":"162 Brixton Street London","Salary":400});

db.Staff.insert({"staff_id":12,"Name":"Mani","Age":39,"Designation":"Maintenance Staff","Contact":"07776660000","Address":"163 Brixton Street London","Salary":600});

db.Staff.insert({"staff_id":13,"Name":"Karun","Age":27,"Designation":"Maintenance Staff","Contact":"07776666666","Address":"164 Brixton Street London","Salary":800});

db.Staff.insert({"staff_id":14,"Name":"Keshav","Age":35,"Designation":"Maintenance Staff","Contact":"07776667777","Address":"165 Brixton Street London","Salary":700});

//5. Insert data into Planes collection
use airline;

db.Planes.insert({"plane_id":1,"Make":"Airbus A340","Registration":"AI760","Range":10000,"Service":10,"Status":"Fit to fly","Capacity":10});

db.Planes.insert({"plane_id":2,"Make":"Airbus A380","Registration":"AI777","Range":18000,"Service":8,"Status":"Fit to fly","Capacity":15});

db.Planes.insert({"plane_id":3,"Make":"Airbus A340","Registration":"AI750","Range":10000,"Service":15,"Status":"To be repaired","Capacity":10});

db.Planes.insert({"plane_id":4,"Make":"Airbus A380","Registration":"AI780","Range":18000,"Service":6,"Status":"Fit to fly","Capacity":15});

db.Planes.insert({"plane_id":5,"Make":"Boeing 787","Registration":"AI007","Range":17000,"Service":10,"Status":"Fit to fly","Capacity":15});

db.Planes.insert({"plane_id":6,"Make":"Boeing 747","Registration":"AI100","Range":12000,"Service":14,"Status":"To be upgraded","Capacity":12});

//6. Insert data into Flights collection
use airline;

db.Flights.insert({"flight_id":1,"plane_id":2,"Origin":"NYK","Destination":"DUB","Departure":new Date("2001-09-11T10:40:00Z"),"Arrival":new Date("2001-09-12T08:10:00Z"),"Pilot":1,"Co_Pilot":4,"Staff":[2,4,7,8],"Length":15})

db.Flights.insert({"flight_id":2,"plane_id":1,"Origin":"NYK","Destination":"LON","Departure":new Date("2001-09-21T08:30:00Z"),"Arrival":new Date("2001-09-21T20:30:00Z"),"Pilot":1,"Co_Pilot":2,"Staff":[3,5,6],"Length":7})

db.Flights.insert({"flight_id":3,"plane_id":5,"Origin":"DUB","Destination":"DEL","Departure":new Date("2001-09-12T10:20:00Z"),"Arrival":new Date("2001-09-12T18:50:00Z"),"Pilot":7,"Co_Pilot":6,"Staff":[2,4,6],"Length":3})

db.Flights.insert({"flight_id":4,"plane_id":4,"Origin":"LON","Destination":"DEL","Departure":new Date("2001-09-22T13:00:00Z"),"Arrival":new Date("2001-09-23T02:30:00Z"),"Pilot":4,"Co_Pilot":7,"Staff":[1,3,5],"Length":8})

db.Flights.insert({"flight_id":5,"plane_id":2,"Origin":"NYK","Destination":"DUB","Departure":new Date("2001-10-11T10:40:00Z"),"Arrival":new Date("2001-10-12T08:10:00Z"),"Pilot":1,"Co_Pilot":4,"Staff":[2,4,7,8],"Length":15})

db.Flights.insert({"flight_id":6,"plane_id":1,"Origin":"NYK","Destination":"LON","Departure":new Date("2001-10-21T08:30:00Z"),"Arrival":new Date("2001-10-21T20:30:00Z"),"Pilot":1,"Co_Pilot":2,"Staff":[3,5,6],"Length":7})

db.Flights.insert({"flight_id":7,"plane_id":5,"Origin":"DUB","Destination":"DEL","Departure":new Date("2001-10-12T10:20:00Z"),"Arrival":new Date("2001-10-12T18:50:00Z"),"Pilot":7,"Co_Pilot":6,"Staff":[2,4,6],"Length":3})

db.Flights.insert({"flight_id":8,"plane_id":2,"Origin":"NYK","Destination":"DUB","Departure":new Date("2001-11-11T10:40:00Z"),"Arrival":new Date("2001-11-12T08:10:00Z"),"Pilot":1,"Co_Pilot":4,"Staff":[2,4,7,8],"Length":15})

db.Flights.insert({"flight_id":9,"plane_id":5,"Origin":"DUB","Destination":"DEL","Departure":new Date("2001-11-12T10:20:00Z"),"Arrival":new Date("2001-11-12T18:50:00Z"),"Pilot":7,"Co_Pilot":6,"Staff":[2,4,6],"Length":3})

db.Flights.insert({"flight_id":10,"plane_id":4,"Origin":"LON","Destination":"DEL","Departure":new Date("2001-11-22T13:00:00Z"),"Arrival":new Date("2001-11-23T02:30:00Z"),"Pilot":4,"Co_Pilot":7,"Staff":[1,3,5],"Length":8})

//7.Insert data into booking collection
use airline;

db.booking.insertMany([
{"bookingid":12,"bookedon":new Date("2001-08-22T12:00:00Z"),"bookedby":"raj","passengers":["Sam","sid"],"flights":[1,3],"Departure":"NYK","Destination":"DEL","JourneyDate":new Date("2001-09-11T10:40:00Z"),"totalcost":800},
{"bookingid":13,"bookedon":new Date("2001-07-23T12:00:00Z"),"bookedby":"shek","passengers":["curry","chapathi"],"flights":[2,4],"Departure":"NYK","Destination":"DEL","JourneyDate":new Date("2001-09-21T08:30:00Z"),"totalcost":900},
{"bookingid":14,"bookedon":new Date("2001-05-24T12:00:00Z"),"bookedby":"ema","passengers":["red","blue"],"flights":[5],"Departure":"NYK","Destination":"DUB","JourneyDate":new Date("2001-10-11T10:40:00Z"),"totalcost":1000},
{"bookingid":15,"bookedon":new Date("2001-02-25T12:00:00Z"),"bookedby":"sai","passengers":["sai","har"],"flights":[4],"Departure":"LON","Destination":"DEL","JourneyDate":new Date("2001-09-22T13:00:00Z"),"totalcost":1800},
{"bookingid":16,"bookedon":new Date("2001-03-26T12:00:00Z"),"bookedby":"bic","passengers":["bic","mas"],"flights":[9],"Departure":"DUB","Destination":"DEL","JourneyDate":new Date("2001-11-12T10:20:00Z"),"totalcost":500},
{"bookingid":17,"bookedon":new Date("2001-02-27T12:00:00Z"),"bookedby":"mindy","passengers":["mindy","sid"],"flights":[4],"Departure":"LON","Destination":"DEL","JourneyDate":new Date("2001-09-22T13:00:00Z"),"totalcost":1800},
{"bookingid":18,"bookedon":new Date("2001-05-28T12:00:00Z"),"bookedby":"max","passengers":["max","sam"],"flights":[10],"Departure":"LON","Destination":"DEL","JourneyDate":new Date("2001-11-22T13:00:00Z"),"totalcost":800},
{"bookingid":19,"bookedon":new Date("2001-06-28T13:00:00Z"),"bookedby":"mile","passengers":["sid","black"],"flights":[5],"Departure":"NYK","Destination":"DUB","JourneyDate":new Date("2001-10-11T10:40:00Z"),"totalcost":1000},
{"bookingid":20,"bookedon":new Date("2001-03-28T12:00:00Z"),"bookedby":"karun","passengers":["adi","karun"],"flights":[1,3],"Departure":"NYK","Destination":"DEL","JourneyDate":new Date("2001-09-11T10:40:00Z"),"totalcost":800},
{"bookingid":21,"bookedon":new Date("2001-01-28T12:00:00Z"),"bookedby":"peace","passengers":["peace","war"],"flights":[2,4],"Departure":"NYK","Destination":"DEL","JourneyDate":new Date("2001-09-21T08:30:00Z"),"totalcost":900},
{"bookingid":22,"bookedon":new Date("2001-03-28T12:00:00Z"),"bookedby":"mini","passengers":["ned","mini"],"flights":[9],"Departure":"DUB","Destination":"DEL","JourneyDate":new Date("2001-11-12T10:20:00Z"),"totalcost":900},
{"bookingid":23,"bookedon":new Date("2001-03-28T12:00:00Z"),"bookedby":"ken","passengers":["led","res"],"flights":[5],"Departure":"NYK","Destination":"DUB","JourneyDate":new Date("2001-10-11T10:40:00Z"),"totalcost":1000},
{"bookingid":24,"bookedon":new Date("2001-02-27T12:00:00Z"),"bookedby":"hash","passengers":["brown","bes"],"flights":[4],"Departure":"LON","Destination":"DEL","JourneyDate":new Date("2001-09-22T13:00:00Z"),"totalcost":1800}
]);

//8. Insert data into airports collection
use airline;

db.airport.insertMany([
{"airportid":123,"Name":"NYK","Location":"NewYork","UsageCost":50,"Parkingrate": 130,"refuelingcharges": 300},
{"airportid":234,"Name":"DUB","Location":"Dubai","UsageCost":60,"Parkingrate": 120,"refuelingcharges": 400},
{"airportid":345,"Name":"LON","Location":"London","UsageCost":40,"Parkingrate": 110,"refuelingcharges": 200},
{"airportid":456,"Name":"DEL","Location":"Delhi","UsageCost":30,"Parkingrate": 110,"refuelingcharges": 150}
]);
