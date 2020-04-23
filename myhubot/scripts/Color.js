// Description:
//     Return what is your favorite color
// Commands:
//     hubot color [Your favorite color] - Returns a sentence with your color

module.exports = function(robot) {
  robot.respond(/color (.*)/i, (request) => {
    request.send(`Your fav color is ${request.match[1]}.`);
  })
};
