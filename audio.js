const AudioRecorder = require('node-audiorecorder');
 const fs = require('fs'), path = require('path')

const audioRecorder = new AudioRecorder({
    program: 'sox',
    silence: 0
  }, console);

  if (!fs.existsSync("./recordings")){
    fs.mkdirSync("./recordings");
  }

const fileName = path.join("./recordings", Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 6).concat('.wav'));
const stream = fs.createWriteStream(fileName, { encoding: 'binary' });

audioRecorder.start().stream().pipe(stream);

audioRecorder.stream().on('close', function(code) {
    console.warn('Recording closed. Exit code: ', code);
  });
  audioRecorder.stream().on('end', function() {
    console.warn('Recording ended.');
  });
  audioRecorder.stream().on('error', function() {
    console.warn('Recording error.');
  });
  process.stdin.resume();
  console.warn('PRESS CTRL + C TO EXIT');