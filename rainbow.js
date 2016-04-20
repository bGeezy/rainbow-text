/**
 * Takes a string input and outputs an HTML rainbow-colorized version
 *
 * @param {String} str
 * @return {String} HTML string
 */

function rainbow (str) {
	var coloredLetters = [];
	var colors = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet'];
  for (var i = 0; i < str.length; i++){
  	var char = str[i];
    var bucketSize = str.length/colors.length;
    var index = Math.round(i/bucketSize);
    var color = colors[index];
    coloredLetters.push("<span style="color:rgb()" class="+color+" >"+char+"</span>");
  }
  return coloredLetters.join('');
}

/**
 * Performs tests on the rainbow function
 */
(function testRainbow () {
  document.body.innerHTML = [
    rainbow('r'),
    rainbow('rain'),
    rainbow('rainbow'),
    rainbow('rainbowrainbow'),
    rainbow('abcdefghijklmnopqrstuvwxyz'),
    rainbow('A quart jar of oil mixed with zinc oxide makes a very bright paint.')
  ].join('<br>');
})();