describe('Inverse Captcha (Part one) - .solveSimpleCaptcha', function() {
  let inverseCaptcha;

  beforeEach(function() {
    inverseCaptcha = new InverseCaptcha();
  });

  it('should be able to a simple input', function() {
    const result = inverseCaptcha.solveSimpleCaptcha('1122');
    expect(result).toEqual(3);
  });

  it('should throw an error if there is no input', function() {
    expect(() => {
      inverseCaptcha.solveSimpleCaptcha()
    }).toThrowError('Invalid captcha input');
  });

  it('should return 0 if an empty string is provided', function() {
    const result = inverseCaptcha.solveSimpleCaptcha('');
    expect(result).toEqual(0);
  });

  it('should be able to solve an input will all the same digits', function() {
    const result = inverseCaptcha.solveSimpleCaptcha('1111');
    expect(result).toEqual(4);
  });

  it('should be able to solve an input will all digits different', function() {
    const result = inverseCaptcha.solveSimpleCaptcha('1234');
    expect(result).toEqual(0);
  });

  it('should be able to solve an input with the same first and last digit', function() {
    const result = inverseCaptcha.solveSimpleCaptcha('91212129');
    expect(result).toEqual(9);
  });

  it('should be able to solve an input with large amount of digits', function() {
    const result = inverseCaptcha.solveSimpleCaptcha('878938232157342756754254716586975125394865297349321236586574662994429894259828536842781199252169182743449435231194436368218599463391544461745472922916562414854275449983442828344463893618282425242643322822916857935242141636187859919626885791572268272442711988367762865741341467274718149255173686839265874184176985561996454253165784192929453678326937728571781212155346592432874244741816166328693958529938367575669663228335566435273484331452883175981955679335327231995452231118936393192583338222595982522833468533262224874637449624644318418748617949417939228988293391941457722641936417456243894182668197174255786445994567477582715692336249243254711653529871336129825735249667425238573952339922948214218872417858525199642194588448543565474847272984232637466664695217176358283788781843171636841215675851778984619377575696447366844854289534215286959727688419731976631323833892247438149829975856161755122857643731945913335556288817112993911694972667656914238999291831997163412548977649491227219477796124134958527843213824792685117696631512141241496451845758655276186597724748432996276498527911292531185292149948139724345841584782352214921634858734671118495424143437282979243347831258285851259579133433182387444656386679831584933397915132785411686688447731696776459621924821667112751789884987883991845818513249994767543526169463766975791464756526911587399764736557959464923353896921342944821833991457125256329564489631352268722457628514564128231487382111682976886838192412996932924373337524262135399256658638418515239876732866596731888779532573243713128238419234963195589987539467221517535272384899524386267268959484881379944796392255419838743164714275463459351741296586465213689853743856518583451849661592844879264196761867481258778393623584884535246239794178981387632311238115362178576899121425428114696158652976277392224226268242332589546757477683398264294929442592131949398261884548427951472128841328376819241955153423452531538413492577262348369581399925647624623868299468436859667152463974949436359589931136236247929554899679139746162554183855278713574244211854227829969443151478986413333429144796664423754818256172862812877688675514142265239992529776262844329188218189254491238956497568');
    expect(result).toEqual(1175);
  });
});

describe('Inverse Captcha (Part two) - .solveHalfwayCaptcha', function() {
  let inverseCaptcha;

  beforeEach(function() {
    inverseCaptcha = new InverseCaptcha();
  });

  it('should be able to a simple input', function() {
    const result = inverseCaptcha.solveHalfwayCaptcha('1212');
    expect(result).toEqual(6);
  });

  it('should throw an error if there is no input', function() {
    expect(() => {
      inverseCaptcha.solveHalfwayCaptcha()
    }).toThrowError('Invalid captcha input');
  });

  it('should return 0 if an empty string is provided', function() {
    const result = inverseCaptcha.solveHalfwayCaptcha('');
    expect(result).toEqual(0);
  });

  it('should be able to solve an input with no matching', function() {
    const result = inverseCaptcha.solveHalfwayCaptcha('1221');
    expect(result).toEqual(0);
  });

  it('should be able to solve an input with one matching', function() {
    const result = inverseCaptcha.solveHalfwayCaptcha('123425');
    expect(result).toEqual(4);
  });

  it('should be able to solve the input 123123', function() {
    const result = inverseCaptcha.solveHalfwayCaptcha('123123');
    expect(result).toEqual(12);
  });

  it('should be able to solve the input 12131415', function() {
    const result = inverseCaptcha.solveHalfwayCaptcha('12131415');
    expect(result).toEqual(4);
  });

  it('should be able to solve an input with large amount of digits', function() {
    const result = inverseCaptcha.solveHalfwayCaptcha('878938232157342756754254716586975125394865297349321236586574662994429894259828536842781199252169182743449435231194436368218599463391544461745472922916562414854275449983442828344463893618282425242643322822916857935242141636187859919626885791572268272442711988367762865741341467274718149255173686839265874184176985561996454253165784192929453678326937728571781212155346592432874244741816166328693958529938367575669663228335566435273484331452883175981955679335327231995452231118936393192583338222595982522833468533262224874637449624644318418748617949417939228988293391941457722641936417456243894182668197174255786445994567477582715692336249243254711653529871336129825735249667425238573952339922948214218872417858525199642194588448543565474847272984232637466664695217176358283788781843171636841215675851778984619377575696447366844854289534215286959727688419731976631323833892247438149829975856161755122857643731945913335556288817112993911694972667656914238999291831997163412548977649491227219477796124134958527843213824792685117696631512141241496451845758655276186597724748432996276498527911292531185292149948139724345841584782352214921634858734671118495424143437282979243347831258285851259579133433182387444656386679831584933397915132785411686688447731696776459621924821667112751789884987883991845818513249994767543526169463766975791464756526911587399764736557959464923353896921342944821833991457125256329564489631352268722457628514564128231487382111682976886838192412996932924373337524262135399256658638418515239876732866596731888779532573243713128238419234963195589987539467221517535272384899524386267268959484881379944796392255419838743164714275463459351741296586465213689853743856518583451849661592844879264196761867481258778393623584884535246239794178981387632311238115362178576899121425428114696158652976277392224226268242332589546757477683398264294929442592131949398261884548427951472128841328376819241955153423452531538413492577262348369581399925647624623868299468436859667152463974949436359589931136236247929554899679139746162554183855278713574244211854227829969443151478986413333429144796664423754818256172862812877688675514142265239992529776262844329188218189254491238956497568');
    expect(result).toEqual(1166);
  });
});
