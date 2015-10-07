define( ['_'], function(_) {

  var Zombify = function(english) {

    // the rules are managed as an array of objects, where each object is a paired 
    // regex pattern and substitution string.

    var subs = [ 
      { e : /[aA]/, z : 'hra'},
      { e : /[eE]/, z : 'rr'},
      { e : /[iI]/, z : 'rrRr'},
      { e : /[oO]/, z : 'rrrRr'},
      { e : /[uU]/, z : 'rrrrRr'},
      { e : /[rR]/, z : 'RR' },
      { e : /[gG]/, z : 'grrrr'},   // custom rule 1
      { e : /[lL]/, z : 'lrrrr'}    // custom rule 2
    ];

    // apply sentence substitution
    english = english.replace(/([\.\?\!] )(.)/g,function(match,p1,p2,offset,s) {
      return p1 + p2.toUpperCase();
    });


    // split the sentence up into words
    var words = english.split(' ');

    var zWords = [];

    // iterate throught the words
    _.each(words, function(word) {
    
      var zWord = [];
      // replace last r
      var lastR = word.match(/r$/);

      // trim the last char if matched.
      if (lastR !== null) {
        word = word.substring(0, word.length - 1);
      }

      var chars = word.split('');
      // iterate each character and apply substitutions
      _.each(chars,function(c) {
        var i = 0;
        var m = null;
        do {
          m = c.match(subs[i].e);
          zWord.push( m!==null ? subs[i].z : '');
          i = i + 1

        } while (i < subs.length && m === null)

        zWord.push(m===null?c:'');

      });

      // add the substitued words to the array
      zWords.push(zWord.join('') + ( lastR !== null ? "rh" : ""));
    })
    // rejoin the words into a sentence
    return zWords.join(' ');

  };

  return Zombify;

});