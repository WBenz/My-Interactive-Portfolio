(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"P. PNUD_atlas_P_1", frames: [[0,0,960,540]]},
		{name:"P. PNUD_atlas_P_2", frames: [[0,0,960,540]]},
		{name:"P. PNUD_atlas_P_3", frames: [[0,0,960,540]]},
		{name:"P. PNUD_atlas_P_4", frames: [[0,0,960,540]]},
		{name:"P. PNUD_atlas_P_5", frames: [[0,0,960,540]]},
		{name:"P. PNUD_atlas_P_6", frames: [[0,0,960,540]]},
		{name:"P. PNUD_atlas_NP_1", frames: [[0,0,960,540]]},
		{name:"P. PNUD_atlas_NP_2", frames: [[0,0,960,540]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.Astrolabe01 = function() {
	this.initialize(img.Astrolabe01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4000,3000);


(lib.Astrolabe02 = function() {
	this.initialize(ss["P. PNUD_atlas_P_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Astrolabe03 = function() {
	this.initialize(ss["P. PNUD_atlas_P_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Astrolabe04 = function() {
	this.initialize(ss["P. PNUD_atlas_P_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Astrolabe05 = function() {
	this.initialize(ss["P. PNUD_atlas_P_4"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Astrolabe06 = function() {
	this.initialize(ss["P. PNUD_atlas_P_5"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.AstrolabeLogo = function() {
	this.initialize(ss["P. PNUD_atlas_P_6"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.PNUDCouvertureCD3 = function() {
	this.initialize(ss["P. PNUD_atlas_NP_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.PNUDCouvertureCD4 = function() {
	this.initialize(ss["P. PNUD_atlas_NP_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.PNUDMagazineCouverture = function() {
	this.initialize(img.PNUDMagazineCouverture);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.shadow_bg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Egx/AfQMAAAg+fMBj/AAAMAAAA+fg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.shadow_bg, new cjs.Rectangle(-320,-200,640,400), null);


(lib.Interpoler22 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_1
	this.instance = new lib.PNUDMagazineCouverture();
	this.instance.setTransform(-480,-270,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-480,-270,960,540);


(lib.Interpoler21 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_1
	this.instance = new lib.PNUDMagazineCouverture();
	this.instance.setTransform(-480,-270,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-480,-270,960,540);


(lib.Interpoler20 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_1
	this.instance = new lib.PNUDCouvertureCD4();
	this.instance.setTransform(-480,-270);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-480,-270,960,540);


(lib.Interpoler19 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_1
	this.instance = new lib.PNUDCouvertureCD4();
	this.instance.setTransform(-480,-270);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-480,-270,960,540);


(lib.Interpoler18 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_1
	this.instance = new lib.PNUDCouvertureCD3();
	this.instance.setTransform(-480,-270);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-480,-270,960,540);


(lib.Interpoler17 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_1
	this.instance = new lib.PNUDCouvertureCD3();
	this.instance.setTransform(-480,-270);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-480,-270,960,540);


(lib.Interpoler16 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_1
	this.text = new cjs.Text("RETOUR", "bold 16px 'Myriad Pro'", "#FFFFFF");
	this.text.lineHeight = 20;
	this.text.lineWidth = 62;
	this.text.parent = this;
	this.text.setTransform(-9.15,30.75,1,1,-90);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.1,-32.7,22.299999999999997,65.5);


(lib.Interpoler15 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_1
	this.text = new cjs.Text("RETOUR", "bold 16px 'Myriad Pro'", "#FFFFFF");
	this.text.lineHeight = 20;
	this.text.lineWidth = 62;
	this.text.parent = this;
	this.text.setTransform(-9.15,30.75,1,1,-90);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.1,-32.7,22.299999999999997,65.5);


(lib.Interpoler13 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_1
	this.instance = new lib.AstrolabeLogo();
	this.instance.setTransform(-519,-179,1,0.8257);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-519,-179,960,445.9);


(lib.Interpoler11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_1
	this.instance = new lib.Astrolabe06();
	this.instance.setTransform(-492,-333,1.5975,1.6159);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-492,-333,1533.6,872.6);


(lib.Interpoler9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_1
	this.instance = new lib.Astrolabe05();
	this.instance.setTransform(-417,-198,0.6365,0.6675);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-417,-198,611.1,360.5);


(lib.Interpoler7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_1
	this.instance = new lib.Astrolabe04();
	this.instance.setTransform(-434,223,0.8079,0.9007);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-434,223,775.6,486.4);


(lib.Interpoler6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_1
	this.instance = new lib.Astrolabe03();
	this.instance.setTransform(-523,-251,1,1.2165);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-523,-251,960,656.9);


(lib.Interpoler3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_1
	this.instance = new lib.Astrolabe02();
	this.instance.setTransform(-480,-266,1,1.1833);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-480,-266,960,639);


(lib.back_btn_trigger = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjbH0IAAvnIG3AAIAAPng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22,-50,44,100);


(lib.back_btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0159A1").s().p("AjbH0IAAvnIG3AAIAAPng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.back_btn, new cjs.Rectangle(-22,-50,44,100), null);


(lib.astrolabe_bg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_1
	this.instance = new lib.Astrolabe01();
	this.instance.setTransform(-580,-423,0.29,0.29);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.astrolabe_bg, new cjs.Rectangle(-580,-423,1159.9,870), null);


(lib.astro_btn_09 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_1
	this.instance = new lib.PNUDMagazineCouverture();
	this.instance.setTransform(-148,-84,0.1573,0.1573);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-148,-84,302.1,170);


(lib.astro_btn_08 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_1
	this.instance = new lib.PNUDCouvertureCD4();
	this.instance.setTransform(-148,-84,0.3147,0.3147);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-148,-84,302.1,170);


(lib.astro_btn_07 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_1
	this.instance = new lib.PNUDCouvertureCD3();
	this.instance.setTransform(-148,-84,0.3147,0.3147);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-148,-84,302.2,170);


(lib.astro_btn_06 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_1
	this.instance = new lib.AstrolabeLogo();
	this.instance.setTransform(-148,-84,0.3094,0.3094);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-148,-84,297,167.1);


(lib.astro_btn_05 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_1
	this.instance = new lib.Astrolabe06();
	this.instance.setTransform(-325,-183,0.6771,0.6771);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-325,-183,650,365.7);


(lib.astro_btn_04 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_1
	this.instance = new lib.Astrolabe05();
	this.instance.setTransform(-116,-66,0.2411,0.2411);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-116,-66,231.5,130.2);


(lib.astro_btn_03 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_1
	this.instance = new lib.Astrolabe04();
	this.instance.setTransform(-27,-15,0.3125,0.313);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27,-15,300,169.1);


(lib.astro_btn_02 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_1
	this.instance = new lib.Astrolabe03();
	this.instance.setTransform(-150,-84,0.3125,0.3123);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-84,300,168.6);


(lib.astro_btn_01 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_1
	this.instance = new lib.Astrolabe02();
	this.instance.setTransform(-150,-84,0.3125,0.3125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-84,300,168.8);


(lib.shadow_bg_anim = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_84 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(84).call(this.frame_84).wait(1));

	// Calque_1
	this.instance = new lib.shadow_bg();
	this.instance.setTransform(0,0,0.1749,1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(24).to({_off:false},0).to({scaleX:1.2348,scaleY:1.205,alpha:0.5},60,cjs.Ease.quadInOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-399.1,-245.4,816,508.4);


(lib.back_btn_anim = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_114 = function() {
		this.stop();
	}
	this.frame_134 = function() {
		this.stop();
	}
	this.frame_154 = function() {
		this.gotoAndStop(115);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(114).call(this.frame_114).wait(20).call(this.frame_134).wait(20).call(this.frame_154).wait(1));

	// back_btn_trigger
	this.instance = new lib.back_btn_trigger();
	this.instance.setTransform(30.8,69.9,0.6995,0.6995,0,0,0,22,50);
	this.instance.alpha = 0.0117;
	this.instance._off = true;
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(114).to({_off:false},0).wait(41));

	// Calque_3
	this.instance_1 = new lib.Interpoler15("synched",0);
	this.instance_1.setTransform(75.4,34.95);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.instance_2 = new lib.Interpoler16("synched",0);
	this.instance_2.setTransform(18.4,34.95);
	this.instance_2._off = true;
	var instance_2Filter_1 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.instance_2.filters = [instance_2Filter_1];
	this.instance_2.cache(-13,-35,26,70);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(89).to({_off:false},0).to({x:18.4,alpha:1},25,cjs.Ease.quintInOut).to({_off:true},20).to({_off:false},20).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(114).to({_off:false},20).to({_off:true},20).wait(1));
	this.timeline.addTween(cjs.Tween.get(instance_2Filter_1).wait(114).to(new cjs.ColorFilter(0,0,0,1,1,89,161,0), 20).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 20).wait(1));

	// Calque_1
	this.instance_3 = new lib.back_btn();
	this.instance_3.setTransform(87.8,69.9,0.6995,0.6995,0,0,0,22,50);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;
	var instance_3Filter_2 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.instance_3.filters = [instance_3Filter_2];
	this.instance_3.cache(-24,-52,48,104);
	new cjs.ButtonHelper(this.instance_3, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(89).to({_off:false},0).to({x:30.8,alpha:1},25,cjs.Ease.quintInOut).wait(41));
	this.timeline.addTween(cjs.Tween.get(instance_3Filter_2).wait(89).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 25,cjs.Ease.quintInOut).to(new cjs.ColorFilter(0,0,0,1,255,255,255,0), 20).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 20).wait(1));

	this.filterCacheList = [];
	this.filterCacheList.push({instance: this.instance_2, startFrame:115, endFrame:134, x:-13, y:-35, w:26, h:70});
	this.filterCacheList.push({instance: this.instance_2, startFrame:135, endFrame:154, x:-13, y:-35, w:26, h:70});
	this.filterCacheList.push({instance: this.instance_3, startFrame:89, endFrame:89, x:-24, y:-52, w:48, h:104});
	this.filterCacheList.push({instance: this.instance_3, startFrame:90, endFrame:114, x:-24, y:-52, w:48, h:104});
	this.filterCacheList.push({instance: this.instance_3, startFrame:115, endFrame:134, x:-24, y:-52, w:48, h:104});
	this.filterCacheList.push({instance: this.instance_3, startFrame:135, endFrame:154, x:-24, y:-52, w:48, h:104});
	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,87.8,69.9);


(lib.astro_gallery_anim = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_29 = function() {
		this.stop();
	}
	this.frame_59 = function() {
		this.stop();
	}
	this.frame_89 = function() {
		this.stop();
	}
	this.frame_119 = function() {
		this.stop();
	}
	this.frame_149 = function() {
		this.stop();
	}
	this.frame_179 = function() {
		this.stop();
	}
	this.frame_209 = function() {
		this.stop();
	}
	this.frame_239 = function() {
		this.stop();
	}
	this.frame_269 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(29).call(this.frame_29).wait(30).call(this.frame_59).wait(30).call(this.frame_89).wait(30).call(this.frame_119).wait(30).call(this.frame_149).wait(30).call(this.frame_179).wait(30).call(this.frame_209).wait(30).call(this.frame_239).wait(30).call(this.frame_269).wait(1));

	// pic09
	this.instance = new lib.Interpoler21("synched",0);
	this.instance.setTransform(0,590);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.instance_1 = new lib.Interpoler22("synched",0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},240).to({state:[{t:this.instance_1}]},29).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(240).to({_off:false},0).to({_off:true,y:0,alpha:1},29,cjs.Ease.quadInOut).wait(1));

	// pic08
	this.instance_2 = new lib.Interpoler19("synched",0);
	this.instance_2.setTransform(0,580);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.instance_3 = new lib.Interpoler20("synched",0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},210).to({state:[{t:this.instance_3}]},29).to({state:[]},1).wait(30));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(210).to({_off:false},0).to({_off:true,y:0,alpha:1},29,cjs.Ease.quadInOut).wait(31));

	// pic07
	this.instance_4 = new lib.Interpoler17("synched",0);
	this.instance_4.setTransform(0,611.95);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.instance_5 = new lib.Interpoler18("synched",0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4}]},180).to({state:[{t:this.instance_5}]},29).to({state:[]},1).wait(60));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(180).to({_off:false},0).to({_off:true,y:0,alpha:1},29,cjs.Ease.quadInOut).wait(61));

	// pic06
	this.instance_6 = new lib.Interpoler13("synched",0);
	this.instance_6.setTransform(44.05,597.45,1.1283,1.2754);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(150).to({_off:false},0).to({y:-56.05,alpha:1},29,cjs.Ease.quadInOut).to({_off:true},1).wait(90));

	// pic05
	this.instance_7 = new lib.Interpoler11("synched",0);
	this.instance_7.setTransform(-155,574.5,0.5641,0.6377,0,0,0,0,0.1);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(120).to({_off:false},0).to({y:-65.8,alpha:1},29,cjs.Ease.quadInOut).to({_off:true},1).wait(120));

	// pic04
	this.instance_8 = new lib.Interpoler9("synched",0);
	this.instance_8.setTransform(157.25,708.85,1.4104,1.5945);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(90).to({_off:false},0).to({y:28.35,alpha:1},29,cjs.Ease.quadInOut).to({_off:true},1).wait(150));

	// pic03
	this.instance_9 = new lib.Interpoler7("synched",0);
	this.instance_9.setTransform(0,820.2,1.1283,1.1692,0,0,0,-46.2,466.2);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(60).to({_off:false},0).to({y:0,alpha:1},29,cjs.Ease.quadInOut).to({_off:true},1).wait(180));

	// pic02
	this.instance_10 = new lib.Interpoler6("synched",0);
	this.instance_10.setTransform(-5.6,537.9,1,1.0049,0,0,0,-48.6,-37.6);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(30).to({_off:false},0).to({y:-115.6,alpha:1},29,cjs.Ease.quadInOut).to({_off:true},1).wait(210));

	// pic01
	this.instance_11 = new lib.Interpoler3("synched",0);
	this.instance_11.setTransform(0,556.5,0.9747,0.9565);
	this.instance_11.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({y:-51.15,alpha:1},29,cjs.Ease.quadInOut).to({_off:true},1).wait(240));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-541.5,-330,1083.2,1434.5);


(lib.astro_btn09_anim = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_99 = function() {
		this.stop();
	}
	this.frame_114 = function() {
		this.stop();
	}
	this.frame_129 = function() {
		this.gotoAndStop(99);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(99).call(this.frame_99).wait(15).call(this.frame_114).wait(15).call(this.frame_129).wait(1));

	// btn06
	this.instance = new lib.astro_btn_09();
	this.instance.setTransform(-1.35,230.5,0.4395,0.4392);
	var instanceFilter_1 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.instance.filters = [instanceFilter_1];
	this.instance.cache(-150,-86,306,174);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(39).to({y:-0.05},60,cjs.Ease.quintInOut).to({y:-0.4},15,cjs.Ease.quintInOut).to({y:-0.05},15,cjs.Ease.quintInOut).wait(1));
	this.timeline.addTween(cjs.Tween.get(instanceFilter_1).wait(99).to(new cjs.ColorFilter(0.75,0.75,0.75,1,63.75,63.75,63.75,0), 15,cjs.Ease.quintInOut).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 15,cjs.Ease.quintInOut).wait(1));

	this.filterCacheList = [];
	this.filterCacheList.push({instance: this.instance, startFrame:100, endFrame:114, x:-150, y:-86, w:306, h:174});
	this.filterCacheList.push({instance: this.instance, startFrame:115, endFrame:129, x:-150, y:-86, w:306, h:174});
	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-66.4,-37.3,132.8,305.6);


(lib.astro_btn08_anim = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_94 = function() {
		this.stop();
	}
	this.frame_109 = function() {
		this.stop();
	}
	this.frame_124 = function() {
		this.gotoAndStop(94);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(94).call(this.frame_94).wait(15).call(this.frame_109).wait(15).call(this.frame_124).wait(1));

	// btn06
	this.instance = new lib.astro_btn_08();
	this.instance.setTransform(-1.35,230.5,0.4395,0.4392);
	var instanceFilter_1 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.instance.filters = [instanceFilter_1];
	this.instance.cache(-150,-86,306,174);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(34).to({y:-0.05},60,cjs.Ease.quintInOut).to({y:-0.4},15,cjs.Ease.quintInOut).to({y:-0.05},15,cjs.Ease.quintInOut).wait(1));
	this.timeline.addTween(cjs.Tween.get(instanceFilter_1).wait(94).to(new cjs.ColorFilter(0.75,0.75,0.75,1,63.75,63.75,63.75,0), 15,cjs.Ease.quintInOut).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 15,cjs.Ease.quintInOut).wait(1));

	this.filterCacheList = [];
	this.filterCacheList.push({instance: this.instance, startFrame:95, endFrame:109, x:-150, y:-86, w:306, h:174});
	this.filterCacheList.push({instance: this.instance, startFrame:110, endFrame:124, x:-150, y:-86, w:306, h:174});
	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-66.4,-37.3,132.8,305.6);


(lib.astro_btn07_anim = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_89 = function() {
		this.stop();
	}
	this.frame_104 = function() {
		this.stop();
	}
	this.frame_119 = function() {
		this.gotoAndStop(89);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(89).call(this.frame_89).wait(15).call(this.frame_104).wait(15).call(this.frame_119).wait(1));

	// btn06
	this.instance = new lib.astro_btn_07();
	this.instance.setTransform(-1.35,230.5,0.4395,0.4392);
	var instanceFilter_1 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.instance.filters = [instanceFilter_1];
	this.instance.cache(-150,-86,306,174);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({y:-0.05},60,cjs.Ease.quintInOut).to({y:-0.4},15,cjs.Ease.quintInOut).to({y:-0.05},15,cjs.Ease.quintInOut).wait(1));
	this.timeline.addTween(cjs.Tween.get(instanceFilter_1).wait(89).to(new cjs.ColorFilter(0.75,0.75,0.75,1,63.75,63.75,63.75,0), 15,cjs.Ease.quintInOut).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 15,cjs.Ease.quintInOut).wait(1));

	this.filterCacheList = [];
	this.filterCacheList.push({instance: this.instance, startFrame:90, endFrame:104, x:-150, y:-86, w:306, h:174});
	this.filterCacheList.push({instance: this.instance, startFrame:105, endFrame:119, x:-150, y:-86, w:306, h:174});
	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-66.4,-37.3,132.8,305.6);


(lib.astro_btn06_anim = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_84 = function() {
		this.stop();
	}
	this.frame_99 = function() {
		this.stop();
	}
	this.frame_114 = function() {
		this.gotoAndStop(84);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(84).call(this.frame_84).wait(15).call(this.frame_99).wait(15).call(this.frame_114).wait(1));

	// btn06
	this.instance = new lib.astro_btn_06();
	this.instance.setTransform(0.1,230.5,0.4395,0.4392);
	var instanceFilter_1 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.instance.filters = [instanceFilter_1];
	this.instance.cache(-150,-86,301,171);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(24).to({y:-0.05},60,cjs.Ease.quintInOut).wait(31));
	this.timeline.addTween(cjs.Tween.get(instanceFilter_1).wait(84).to(new cjs.ColorFilter(0.75,0.75,0.75,1,63.75,63.75,63.75,0), 15,cjs.Ease.quintInOut).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 15,cjs.Ease.quintInOut).wait(1));

	this.filterCacheList = [];
	this.filterCacheList.push({instance: this.instance, startFrame:85, endFrame:99, x:-150, y:-86, w:301, h:171});
	this.filterCacheList.push({instance: this.instance, startFrame:100, endFrame:114, x:-150, y:-86, w:301, h:171});
	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64.9,-36.9,130.5,303.9);


(lib.astro_btn05_anim = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_79 = function() {
		this.stop();
	}
	this.frame_94 = function() {
		this.stop();
	}
	this.frame_109 = function() {
		this.gotoAndStop(79);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(79).call(this.frame_79).wait(15).call(this.frame_94).wait(15).call(this.frame_109).wait(1));

	// btn05
	this.instance = new lib.astro_btn_05();
	this.instance.setTransform(0.1,230.5,0.1971,0.1969,0,0,0,0.2,0.2);
	var instanceFilter_1 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.instance.filters = [instanceFilter_1];
	this.instance.cache(-327,-185,654,370);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({y:0.05},60,cjs.Ease.quintInOut).wait(31));
	this.timeline.addTween(cjs.Tween.get(instanceFilter_1).wait(79).to(new cjs.ColorFilter(0.75,0.75,0.75,1,63.75,63.75,63.75,0), 15,cjs.Ease.quintInOut).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 15,cjs.Ease.quintInOut).wait(1));

	this.filterCacheList = [];
	this.filterCacheList.push({instance: this.instance, startFrame:80, endFrame:94, x:-327, y:-185, w:654, h:370});
	this.filterCacheList.push({instance: this.instance, startFrame:95, endFrame:109, x:-327, y:-185, w:654, h:370});
	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64,-36,128.2,302.4);


(lib.astro_btn04_anim = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_74 = function() {
		this.stop();
	}
	this.frame_89 = function() {
		this.stop();
	}
	this.frame_104 = function() {
		this.gotoAndStop(74);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(74).call(this.frame_74).wait(15).call(this.frame_89).wait(15).call(this.frame_104).wait(1));

	// btn04
	this.instance = new lib.astro_btn_04();
	this.instance.setTransform(0.55,230.55,0.4952,0.4949,0,0,0,0.1,0);
	var instanceFilter_1 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.instance.filters = [instanceFilter_1];
	this.instance.cache(-118,-68,236,134);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({y:0.05},60,cjs.Ease.quintInOut).wait(31));
	this.timeline.addTween(cjs.Tween.get(instanceFilter_1).wait(74).to(new cjs.ColorFilter(0.75,0.75,0.75,1,63.75,63.75,63.75,0), 15,cjs.Ease.quintInOut).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 15,cjs.Ease.quintInOut).wait(1));

	this.filterCacheList = [];
	this.filterCacheList.push({instance: this.instance, startFrame:75, endFrame:89, x:-118, y:-68, w:236, h:134});
	this.filterCacheList.push({instance: this.instance, startFrame:90, endFrame:104, x:-118, y:-68, w:236, h:134});
	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56.9,-32.6,114.6,294.90000000000003);


(lib.astro_btn03_anim = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_69 = function() {
		this.stop();
	}
	this.frame_84 = function() {
		this.stop();
	}
	this.frame_99 = function() {
		this.gotoAndStop(69);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(69).call(this.frame_69).wait(15).call(this.frame_84).wait(15).call(this.frame_99).wait(1));

	// btn03
	this.instance = new lib.astro_btn_03();
	this.instance.setTransform(0.1,241,0.5008,0.5006,0,0,0,0,0.1);
	var instanceFilter_1 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.instance.filters = [instanceFilter_1];
	this.instance.cache(-29,-17,304,173);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({y:-0.05},60,cjs.Ease.quintInOut).wait(31));
	this.timeline.addTween(cjs.Tween.get(instanceFilter_1).wait(69).to(new cjs.ColorFilter(0.75,0.75,0.75,1,63.75,63.75,63.75,0), 15,cjs.Ease.quintInOut).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 15,cjs.Ease.quintInOut).wait(1));

	this.filterCacheList = [];
	this.filterCacheList.push({instance: this.instance, startFrame:70, endFrame:84, x:-29, y:-17, w:304, h:173});
	this.filterCacheList.push({instance: this.instance, startFrame:85, endFrame:99, x:-29, y:-17, w:304, h:173});
	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.4,-7.6,150.20000000000002,325.70000000000005);


(lib.astro_btn02_anim = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_64 = function() {
		this.stop();
	}
	this.frame_79 = function() {
		this.stop();
	}
	this.frame_94 = function() {
		this.gotoAndStop(64);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(64).call(this.frame_64).wait(15).call(this.frame_79).wait(15).call(this.frame_94).wait(1));

	// btn02
	this.instance = new lib.astro_btn_02();
	this.instance.setTransform(-7.7,235.1,0.2762,0.2762,0,0,0,0.2,0);
	var instanceFilter_1 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.instance.filters = [instanceFilter_1];
	this.instance.cache(-152,-86,304,173);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({y:-5.05},60,cjs.Ease.quintInOut).wait(31));
	this.timeline.addTween(cjs.Tween.get(instanceFilter_1).wait(64).to(new cjs.ColorFilter(0.75,0.75,0.75,1,63.75,63.75,63.75,0), 15,cjs.Ease.quintInOut).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 15,cjs.Ease.quintInOut).wait(1));

	this.filterCacheList = [];
	this.filterCacheList.push({instance: this.instance, startFrame:65, endFrame:79, x:-152, y:-86, w:304, h:173});
	this.filterCacheList.push({instance: this.instance, startFrame:80, endFrame:94, x:-152, y:-86, w:304, h:173});
	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.2,-28.2,82.9,286.7);


(lib.astro_btn01_anim = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_59 = function() {
		this.stop();
	}
	this.frame_74 = function() {
		this.stop();
	}
	this.frame_89 = function() {
		this.gotoAndStop(59);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(59).call(this.frame_59).wait(15).call(this.frame_74).wait(15).call(this.frame_89).wait(1));

	// btn01
	this.instance = new lib.astro_btn_01();
	this.instance.setTransform(0,340.95,0.2133,0.2132,0,0,0,0,1);
	var instanceFilter_1 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.instance.filters = [instanceFilter_1];
	this.instance.cache(-152,-86,304,173);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:0.05},59,cjs.Ease.quintInOut).wait(31));
	this.timeline.addTween(cjs.Tween.get(instanceFilter_1).wait(59).to(new cjs.ColorFilter(0.75,0.75,0.75,1,63.75,63.75,63.75,0), 15,cjs.Ease.quintInOut).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 15,cjs.Ease.quintInOut).wait(1));

	this.filterCacheList = [];
	this.filterCacheList.push({instance: this.instance, startFrame:60, endFrame:74, x:-152, y:-86, w:304, h:173});
	this.filterCacheList.push({instance: this.instance, startFrame:75, endFrame:89, x:-152, y:-86, w:304, h:173});
	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32,-18,64.1,376.8);


(lib.astro_bg_anim = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// bg
	this.instance = new lib.astrolabe_bg();
	this.instance.setTransform(592,270.05,1,1,0,0,0,0,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:394.9},249,cjs.Ease.quadInOut).to({x:592},250,cjs.Ease.quadInOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-185.1,-153.3,1357,869.9000000000001);


// stage content:
(lib.PPNUD = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		document.body.style.backgroundColor = lib.properties.color;
		var _this = this;
		
		stage.enableMouseOver();
		
		_this.astro_btn01.on('mouseover', function(){
		
		_this.astro_btn01.gotoAndPlay(60);
		});
		
		
		_this.astro_btn01.on('mouseout', function(){
		
		_this.astro_btn01.gotoAndPlay(75);
		});
		
		_this.astro_btn02.on('mouseover', function(){
		
		_this.astro_btn02.gotoAndPlay(65);
		});
		
		
		_this.astro_btn02.on('mouseout', function(){
		
		_this.astro_btn02.gotoAndPlay(80);
		});
		
		_this.astro_btn03.on('mouseover', function(){
		
		_this.astro_btn03.gotoAndPlay(70);
		});
		
		
		_this.astro_btn03.on('mouseout', function(){
		
		_this.astro_btn03.gotoAndPlay(85);
		});
		
		_this.astro_btn04.on('mouseover', function(){
		
		_this.astro_btn04.gotoAndPlay(75);
		});
		
		
		_this.astro_btn04.on('mouseout', function(){
		
		_this.astro_btn04.gotoAndPlay(90);
		});
		
		
		_this.astro_btn05.on('mouseover', function(){
		
		_this.astro_btn05.gotoAndPlay(80);
		});
		
		
		_this.astro_btn05.on('mouseout', function(){
		
		_this.astro_btn05.gotoAndPlay(95);
		});
		
		_this.astro_btn06.on('mouseover', function(){
		
		_this.astro_btn06.gotoAndPlay(85);
		});
		
		
		_this.astro_btn06.on('mouseout', function(){
		
		_this.astro_btn06.gotoAndPlay(100);
		});
		
		
		
		_this.astro_btn01.on('click', function(){
		
		_this.astro_gallery_anim.gotoAndPlay(1);
		});
		
		_this.astro_btn02.on('click', function(){
		
		_this.astro_gallery_anim.gotoAndPlay(30);
		});
		
		_this.astro_btn03.on('click', function(){
		
		_this.astro_gallery_anim.gotoAndPlay(60);
		});
		
		_this.astro_btn04.on('click', function(){
		
		_this.astro_gallery_anim.gotoAndPlay(90);
		});
		
		_this.astro_btn05.on('click', function(){
		
		_this.astro_gallery_anim.gotoAndPlay(120);
		});
		
		_this.astro_btn06.on('click', function(){
		
		_this.astro_gallery_anim.gotoAndPlay(150);
		});
		
		
		_this.astro_btn07.on('mouseover', function(){
		
		_this.astro_btn07.gotoAndPlay(91);
		});
		
		
		_this.astro_btn07.on('mouseout', function(){
		
		_this.astro_btn07.gotoAndPlay(106);
		});
		
		_this.astro_btn07.on('click', function(){
		
		_this.astro_gallery_anim.gotoAndPlay(181);
		});
		
		
		
		_this.astro_btn08.on('mouseover', function(){
		
		_this.astro_btn08.gotoAndPlay(96);
		});
		
		
		_this.astro_btn08.on('mouseout', function(){
		
		_this.astro_btn08.gotoAndPlay(111);
		});
		
		
		_this.astro_btn08.on('click', function(){
		
		_this.astro_gallery_anim.gotoAndPlay(211);
		});
		
		
		_this.astro_btn09.on('mouseover', function(){
		
		_this.astro_btn09.gotoAndPlay(101);
		});
		
		
		
		_this.astro_btn09.on('mouseout', function(){
		
		_this.astro_btn09.gotoAndPlay(116);
		});
		
		
		_this.astro_btn09.on('click', function(){
		
		_this.astro_gallery_anim.gotoAndPlay(241);
		});
		
		_this.back_btn_anim.on('mouseover', function(){
		
		_this.back_btn_anim.gotoAndPlay(115);
		});
		
		
		
		_this.back_btn_anim.on('mouseout', function(){
		
		_this.back_btn_anim.gotoAndPlay(136);
		});
		
		
		
		
		_this.back_btn_anim.on('click', function(){
		
		window.open('graphic_menu.html', '_self');
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// astro_btns
	this.astro_btn09 = new lib.astro_btn09_anim();
	this.astro_btn09.name = "astro_btn09";
	this.astro_btn09.setTransform(796.75,595.95,0.521,0.5209,0,0,0,0.2,231.2);
	this.astro_btn09.shadow = new cjs.Shadow("rgba(0,0,0,1)",7,7,10);

	this.astro_btn08 = new lib.astro_btn08_anim();
	this.astro_btn08.name = "astro_btn08";
	this.astro_btn08.setTransform(717.5,595.95,0.521,0.5209,0,0,0,0.1,231.2);
	this.astro_btn08.shadow = new cjs.Shadow("rgba(0,0,0,1)",7,7,10);

	this.astro_btn07 = new lib.astro_btn07_anim();
	this.astro_btn07.name = "astro_btn07";
	this.astro_btn07.setTransform(638.7,595.85,0.5208,0.5209,0,0,0,0.4,231);
	this.astro_btn07.shadow = new cjs.Shadow("rgba(0,0,0,1)",7,7,10);

	this.astro_btn06 = new lib.astro_btn06_anim();
	this.astro_btn06.name = "astro_btn06";
	this.astro_btn06.setTransform(543.3,585.85,0.5298,0.5289,0,0,0,-30.5,207.7);
	this.astro_btn06.shadow = new cjs.Shadow("rgba(0,0,0,1)",7,7,10);

	this.astro_btn05 = new lib.astro_btn05_anim();
	this.astro_btn05.name = "astro_btn05";
	this.astro_btn05.setTransform(461.9,587.25,0.5399,0.5395,0,0,0,-34.8,207.1);
	this.astro_btn05.shadow = new cjs.Shadow("rgba(0,0,0,1)",7,7,10);

	this.astro_btn04 = new lib.astro_btn04_anim();
	this.astro_btn04.name = "astro_btn04";
	this.astro_btn04.setTransform(402.1,614.6,0.6035,0.6024,0,0,0,0.8,230.3);
	this.astro_btn04.shadow = new cjs.Shadow("rgba(0,0,0,1)",7,7,10);

	this.astro_btn03 = new lib.astro_btn03_anim();
	this.astro_btn03.name = "astro_btn03";
	this.astro_btn03.setTransform(323,582.9,0.4605,0.4601,0,0,0,61.9,269);
	this.astro_btn03.shadow = new cjs.Shadow("rgba(0,0,0,1)",7,7,10);

	this.astro_btn02 = new lib.astro_btn02_anim();
	this.astro_btn02.name = "astro_btn02";
	this.astro_btn02.setTransform(244.1,675.2,0.8333,0.8335,0,0,0,-7.6,235.2);
	this.astro_btn02.shadow = new cjs.Shadow("rgba(0,0,0,1)",7,7,10);

	this.astro_btn01 = new lib.astro_btn01_anim();
	this.astro_btn01.name = "astro_btn01";
	this.astro_btn01.setTransform(165.2,843.05,1.0807,1.0798,0,0,0,0.1,341.1);
	this.astro_btn01.shadow = new cjs.Shadow("rgba(0,0,0,1)",7,7,10);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.astro_btn01},{t:this.astro_btn02},{t:this.astro_btn03},{t:this.astro_btn04},{t:this.astro_btn05},{t:this.astro_btn06},{t:this.astro_btn07},{t:this.astro_btn08},{t:this.astro_btn09}]}).wait(1));
	this.astro_btn09.addEventListener("tick", AdobeAn.handleFilterCache);
	this.astro_btn08.addEventListener("tick", AdobeAn.handleFilterCache);
	this.astro_btn07.addEventListener("tick", AdobeAn.handleFilterCache);
	this.astro_btn06.addEventListener("tick", AdobeAn.handleFilterCache);
	this.astro_btn05.addEventListener("tick", AdobeAn.handleFilterCache);
	this.astro_btn04.addEventListener("tick", AdobeAn.handleFilterCache);
	this.astro_btn03.addEventListener("tick", AdobeAn.handleFilterCache);
	this.astro_btn02.addEventListener("tick", AdobeAn.handleFilterCache);
	this.astro_btn01.addEventListener("tick", AdobeAn.handleFilterCache);

	// Calque_7 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Eg87AkzMAAAhJlMB53AAAMAAABJlg");
	mask.setTransform(480,270.05);

	// astro_gallery_anim
	this.astro_gallery_anim = new lib.astro_gallery_anim();
	this.astro_gallery_anim.name = "astro_gallery_anim";
	this.astro_gallery_anim.setTransform(480,270);

	var maskedShapeInstanceList = [this.astro_gallery_anim];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.astro_gallery_anim).wait(1));

	// shadow_bg
	this.instance = new lib.shadow_bg_anim();
	this.instance.setTransform(480,270);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,1)",7,7,10);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// back_btn_anim
	this.back_btn_anim = new lib.back_btn_anim();
	this.back_btn_anim.name = "back_btn_anim";
	this.back_btn_anim.setTransform(159.95,475.6,1,1,0,0,0,106.4,35);

	this.timeline.addTween(cjs.Tween.get(this.back_btn_anim).wait(1));
	this.back_btn_anim.addEventListener("tick", AdobeAn.handleFilterCache);

	// bg
	this.instance_1 = new lib.astro_bg_anim();
	this.instance_1.setTransform(549,270,1,1,0,0,0,572,270);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(469,116.7,679.9000000000001,767.5999999999999);
// library properties:
lib.properties = {
	id: 'DEC3B45E301FD24982CDE18E7578B9E3',
	width: 960,
	height: 540,
	fps: 60,
	color: "#333333",
	opacity: 1.00,
	manifest: [
		{src:"images/Astrolabe01.png", id:"Astrolabe01"},
		{src:"images/PNUDMagazineCouverture.jpg", id:"PNUDMagazineCouverture"},
		{src:"images/P. PNUD_atlas_P_1.png", id:"P. PNUD_atlas_P_1"},
		{src:"images/P. PNUD_atlas_P_2.png", id:"P. PNUD_atlas_P_2"},
		{src:"images/P. PNUD_atlas_P_3.png", id:"P. PNUD_atlas_P_3"},
		{src:"images/P. PNUD_atlas_P_4.png", id:"P. PNUD_atlas_P_4"},
		{src:"images/P. PNUD_atlas_P_5.png", id:"P. PNUD_atlas_P_5"},
		{src:"images/P. PNUD_atlas_P_6.png", id:"P. PNUD_atlas_P_6"},
		{src:"images/P. PNUD_atlas_NP_1.jpg", id:"P. PNUD_atlas_NP_1"},
		{src:"images/P. PNUD_atlas_NP_2.jpg", id:"P. PNUD_atlas_NP_2"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['DEC3B45E301FD24982CDE18E7578B9E3'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;