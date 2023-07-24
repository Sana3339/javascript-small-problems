function logInBox(message) {

  let lineLength = message.length + 2;

  let topBottom = "+" + ("-").repeat(lineLength) + '+';
  let midNonMessageLine = "|" + (" ").repeat(message.length + 2) + "|";
  let messageLine = "|" + " " + message + " " + "|";

  console.log(topBottom);
  console.log(midNonMessageLine );
  console.log(messageLine);
  console.log(midNonMessageLine );
  console.log(topBottom);

}

logInBox('');
// +--+
// |  |
// |  |
// |  |
// +--+

logInBox('To boldly go where no one has gone before.');

// +--------------------------------------------+
// |                                            |
// | To boldly go where no one has gone before. |
// |                                            |
// +--------------------------------------------+