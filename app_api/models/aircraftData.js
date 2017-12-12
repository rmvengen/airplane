var mongoose = require('mongoose');

var ClimbSchema = new mongoose.Schema({
	weight: Number,
	vfriFlap5: Number,
	vfriFlap10: Number,
	vfriFlap15: Number,
	vClmb: Number
});

mongoose.model('ClimbData', ClimbSchema, 'ClimbData');

var TakeoffSchema = new mongoose.Schema({
	weight: Number,
	flaps: Number,
	Vr: Number,
	V2: Number,
	//atOrBelow20: Boolean,
	above20: Boolean,
	altitude: Number,
});

mongoose.model('TakeoffData', TakeoffSchema, 'TakeOffData');

var LandingSchema = new mongoose.Schema({
	weight: Number,
	flaps: Number,
	Vapp: Number,
	Vref: Number,
	Vga: Number,
});

mongoose.model('LandingData', LandingSchema, 'LandingData');