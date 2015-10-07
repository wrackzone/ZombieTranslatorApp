define(['Zombify','jasmine'], function(Zombify,jasmine) {

  var zombify;

  describe('Zombify',function(){

    it('should test sentence substitution (space)',function(){
      expect(Zombify("this. is. a. sentence")).toEqual("thrrRrs. rrRrs. hra. Srrntrrncrr");
    })

    it('should test sentence substitution (!?)',function(){
      expect(Zombify("this! is. a? sentence")).toEqual("thrrRrs! rrRrs. hra? Srrntrrncrr");
    })

    it('should test sentence substitution (!)',function(){
      expect(Zombify("this. is! a! sentence")).toEqual("thrrRrs. rrRrs! hra! Srrntrrncrr");
    })

    // petty -> prrtty
  	it('should translate petty', function() {
      	expect(Zombify("petty")).toEqual("prrtty");
    });

    // Terror -> 
    it('should translate Terror', function() {
        expect(Zombify("Terror")).toEqual("TrrRRRRrrrRrrh");
    });

    // JaZahn -> JhraZhrahn
    it('should translate JaZahn', function() {
        expect(Zombify("JaZahn")).toEqual("JhraZhrahn");
    });

    //pretty -> pRRrrtty
    it('should translate pretty', function() {
        expect(Zombify("pretty")).toEqual("pRRrrtty");
    });

    // brains -> bRRhrarrRrns
    it('should translate brains', function() {
        expect(Zombify("brains")).toEqual("bRRhrarrRrns");
    });
    
    // onomatopoeia  -> rrrRrnrrrRrmhratrrrRrprrrRrrrrrRrhra
    it('should translate onomatopoeia', function() {
        expect(Zombify("onomatopoeia")).toEqual("rrrRrnrrrRrmhratrrrRrprrrRrrrrrRrhra");
    });

    // custom rule 1
    it('should translate (custom rule 1) great', function() {
        expect(Zombify("great")).toEqual("grrrrRRrrhrat");
    });

    // custom rule 2
    it('should translate (custom rule 1) least', function() {
        expect(Zombify("least")).toEqual("lrrrrrrhrast");
    });


  });
});
