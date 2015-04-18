// From http://developer.getpebble.com/blog/2015/03/20/Getting-Started-With-Timeline/
//
// Testing: start with sending to http://requestb.in/
var API_ROOT = 'http://requestb.in/npv2e1np';
var oauth    = 'XXXXXXXXXXXXXXXXXXXX'; // in a real app we'd use a configuration window

Pebble.addEventListener('ready', function() {
  doTimeline();
});

var doTimeline = function(packages) {
  Pebble.getTimelineToken(function (token) {
    sendToken(token, oauth);
  }, function (error) {
    console.log('Error getting timeline token: ' + error);
  });
};

var sendToken = function(token, oauth) {
  var request = new XMLHttpRequest();
  request.open('GET', API_ROOT + '/senduserpin/' + token + '/' + oauth, true); // send the user's timeline token and Slice oauth token to our server
  request.onload = function() {
    console.log('senduserpin server response: ' + request.responseText);
  };
  request.send();
}

