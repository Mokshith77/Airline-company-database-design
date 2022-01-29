//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Group - 64
// Mokshith Kummari: 210650383
// Karun Kumar Puttala  : 210542309
// Krishna Sameer Kummetha: 210470013
// Hari Peravali : 210630008
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Following set of queries have been written to showcase understanding about the queries and commands. Concepts and mongodb expressions were covered in the below queries: Screenshot with few details have been attached for the queries. 
//showcase of aggregate and find utility method 
//use of aggregate pipeline with $project, $match, $group, $unwind, $sort, $limit, $lookup. 
//usage of utility methods line $gt, $eq, $concat, $where, $year, $month, $dayOfMonth, $sum, $subtract, $exist, $toString, $dateToString, $addToSet, $size, $isArray.
 //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 
 //1)List of pilots whose age is greater than 50:
db.Pilots.find({Age: {$gt: 50}})

//2)The pilots with latest flying date
db.Pilots.find().sort({Flying_test_date: 1}).limit(1)

//3)No of planes fit to fly
db.Planes.find({Status:'Fit to fly'}).count();

//4)Sum of salaries by designation of the staff other than pilots
db.Staff.aggregate([{ "$group": {_id:"$Designation",sumSalary: { $sum: "$Salary" } } } ,{ $sort: { sumSalary: -1 } } ] )

//5)Top two bookings based on the amount spent on ticket charges
db.booking.aggregate({ $project: {bookingid: 1,bookedby:1,totalcost:1}},{ $sort: {"totalcost": -1}},{ $limit: 2})

//6)No of flights departing from London
db.booking.find({Departure:'LON'}).count();

//7) No. of flights of the same plane model
db.Flights.aggregate([{ "$group": {_id:"$plane_id","count":{"$sum":1}}}] )

//8) Total duration of each flight based on their departure and arrival
db.Flights.aggregate([ { "$project": { "from": "$Departure", "to": "$Arrival",_id:0, "difference": { "$divide": [{ "$subtract": [ "$Arrival","$Departure"] }, 60 * 1000 * 60 ]}} }])

//9)Staff whose name starts with sa or whose age is greater than 30
db.Staff.find({$or:[{Name:/sa/},{Age:{$gt:30}}]})

//10) Finding the details of the plane through bookings which is made by name  “shek”.
db.booking.findOne({bookedby:"shek"})

//11)Id’s of all the bookings made on 28th sept 2001 
db.booking.aggregate({ $project: { year: { $year: "$bookedon" }, month: { $month: "$bookedon" }, dayOfMonth: { $dayOfMonth: "$bookedon" }, flight: "$flights" } }, { $match: { $and: [{ "year": { $eq: 2001 } }, { "month": { $eq: 03 } }, { "dayOfMonth": { $eq: 28 } }] } }, { $group: { _id: { date: { $concat: [{ $toString: "$year" }, "-", { $toString: "$month" }, "-", { $toString: "$dayOfMonth" }] } }, flights: { $push: "$flight" } } }, { $unwind: "$flights" }, { $lookup: { from: "booking", localField: "flights", foreignField: "flights", as: "booking" } }, { $unwind: "$booking" }, { $group: { _id: "$booking.bookingid" } })

//12) Information of all the bookings made on 28/03/2001 
db.booking.aggregate({ $project: { year: {$year: "$bookedon"}, month: {$month: "$bookedon"}, dayOfMonth: {$dayOfMonth: "$bookedon"}, flight: "$flights" }}, { $match:{$and: [{"year":{$eq:2001}}, {"month":{$eq:03}}, {"dayOfMonth":{$eq:28}} ]}}, { $group: { _id: { date: {$concat: [ {$toString:"$year"}, "-", {$toString:"$month"},"-", {$toString:"$dayOfMonth"}] }}, flights: { $push: "$flight"}}}, { $unwind: "$flights"}, { $lookup: {from: "booking", localField: "flights", foreignField: "flights", as: "booking"}}, { $unwind: "$booking"}, { $project: { _id: "$booking.bookingid",name:"$booking.passengers" }})


