var serialport = require("serialport");
var SerialPort = serialport.SerialPort;


var me = new SerialPort("/dev/ttyUSB0", {
			parser :serialport.parsers.readline('\n'),
			baudrate: 9600
		}, function(error){  
		     if(error)
		     {
		        console.log(error);
		     }
});

function setupPort(socket, callback){

socket.baudrate = ((socket.baudrate == 'undefined') ? 9600:socket.baudrate);
socket.parser = ((socket.parser == 'undefined') ?  serialport.parsers.readline('\n') : serialport.parsers.raw );


	socket.serial = me = new SerialPort("/dev/ttyUSB0", {
		parser : serialport.parsers.raw,
		baudrate: socket.baudrate

		},  function(error){  
			 if(error){
				console.log("error " + error);
				socket.emit("serial monitor", {stderr : error} );
				return;
			 }
		});


	me.open(function (error) {
		  if ( error ) {
			socket.emit("serial monitor", {stderr : error} );
			console.log('failed to open: '+error);
			socket.serial = null;
		  } else {
			console.log('serial opened');
			me.on("data", function(data){
				console.log("data: "+data);
				if (!socket.closed){
				  socket.emit("serial monitor", {stream : data, parser: 'newline'} );
				}else{
					me.close();
				}
			}); 
		  }

		if((callback != 'undefined') && (typeof(callback) == "function")){
			callback();	
		}

	});


}

exports.isOpen = function(){ 
	return me.isOpen();
} 

exports.close = function(callback){ 
	me.close(function(error){ 
	    callback(error);
	});

} 

exports.setup = function(socket, callback){

	if(me.isOpen()){
	    console.log('Port is already openned');
	    me.close(function(error){
		if ( error ) {
			    socket.emit("serial monitor", {stderr : error} );
			    console.log('failed to open: '+error);
		 }else{
			setupPort(socket, callback);
		} 
		
	   });	
	}else{
	    setupPort(socket, callback);
	}

	

};

exports.write = function(data){
	me.write(data, function (error) { 
	 	    if(error){
		    	console.log('error: '+error);
		    }       	
	 });

}


