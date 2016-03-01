module.exports = function spellcheck(word, hashed_length) {
  if (hashed_length == undefined || hashed_length < 1) {
    hashed_length = 16;
  }
  var fs = require('fs');
  var crypto = require('crypto');
  var dict = {};
  var contents = fs.readFileSync('/usr/share/dict/words', 'utf8');
  contents.split(/\n/).forEach(function(line) {
    hashed = crypto.createHash('md5').update(line).digest('hex').substring(0, hashed_length);
    dict[hashed] = true;
  });
  var hashed_word = crypto.createHash('md5').update(word).digest('hex').substring(0, hashed_length);
  if (dict[hashed_word] == true) {
    return true;
  } else {
    return false;
  }
}
