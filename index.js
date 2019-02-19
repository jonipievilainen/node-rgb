const SerialPort = require('serialport');
const Readline = require('@serialport/parser-readline');
const port = new SerialPort('COM4', { baudRate: 9600 });
const parser = port.pipe(new Readline({ delimiter: '\n' }));
// Read the port data
port.on("open", () => {
  console.log('serial port open');
});
parser.on('data', data =>{
  console.log('got word from arduino:', data);
});

setTimeout(function(){
  port.write('244,2,2', (err) => {
    if (err) {
      return console.log('Error on write: ', err.message);
    }
    console.log('message written');
  });

}, 4000);