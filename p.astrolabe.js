(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


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
p.nominalBounds = new cjs.Rectangle(0,0,2740,2000);


(lib.Astrolabe02 = function() {
	this.initialize(img.Astrolabe02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3500,2250);


(lib.Astrolabe03 = function() {
	this.initialize(img.Astrolabe03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3500,2250);


(lib.Astrolabe04 = function() {
	this.initialize(img.Astrolabe04);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3500,2250);


(lib.Astrolabe05 = function() {
	this.initialize(img.Astrolabe05);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3500,2250);


(lib.Astrolabe06 = function() {
	this.initialize(img.Astrolabe06);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3500,2250);


(lib.AstrolabeLogo = function() {
	this.initialize(img.AstrolabeLogo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3500,2250);// helper functions:

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


(lib.Interpoler14 = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(-390,-241.5,0.195,0.161);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-390,-241.5,682.5,362.3);


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
	this.instance.setTransform(-390,-241.5,0.195,0.161);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-390,-241.5,682.5,362.3);


(lib.Interpoler12 = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(-390,-241.5,0.39,0.322);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-390,-241.5,1365,724.5);


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
	this.instance.setTransform(-390,-241.5,0.39,0.322);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-390,-241.5,1365,724.5);


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
	this.instance.setTransform(-390,-241.5,0.156,0.1288);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-390,-241.5,546,289.8);


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
	this.instance.setTransform(-390,-241.5,0.195,0.1756);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-390,-241.5,682.5,395.2);


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
	this.instance.setTransform(-390,-241.5,0.195,0.1811);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-390,-241.5,682.5,407.5);


(lib.Interpoler4 = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(-395,-241.5,0.2257,0.2147);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-395,-241.5,790,483);


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
	this.instance.setTransform(-395,-241.5,0.2257,0.2147);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-395,-241.5,790,483);


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
	this.shape.graphics.f("#60869B").s().p("AjbH0IAAvnIG3AAIAAPng");

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
	this.instance.setTransform(-580,-423,0.4234,0.4234);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.astrolabe_bg, new cjs.Rectangle(-580,-423,1160,846.7), null);


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
	this.instance.setTransform(-114,-73,0.065,0.065);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-114,-73,227.6,146.3);


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
	this.instance.setTransform(-254,-163,0.145,0.145);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-254,-163,507.5,326.3);


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
	this.instance.setTransform(-102,-65,0.0577,0.0577);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-102,-65,202,129.8);


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
	this.instance.setTransform(-100,-64,0.0571,0.0571);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100,-64,199.7,128.6);


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
	this.instance.setTransform(-153,-98,0.1034,0.1034);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-153,-98,362,232.6);


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
	this.instance.setTransform(-234,-150,0.1339,0.1339);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-234,-150,468.7,301.3);


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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(24).to({_off:false},0).to({scaleX:0.9847,scaleY:0.967,alpha:0.5},60,cjs.Ease.quadInOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-319.1,-202,656,416.6);


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
	this.timeline.addTween(cjs.Tween.get(instance_2Filter_1).wait(114).to(new cjs.ColorFilter(0,0,0,1,96,134,155,0), 20).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 20).wait(1));

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

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(29).call(this.frame_29).wait(30).call(this.frame_59).wait(30).call(this.frame_89).wait(30).call(this.frame_119).wait(30).call(this.frame_149).wait(30).call(this.frame_179).wait(1));

	// pic06
	this.instance = new lib.Interpoler13("synched",0);
	this.instance.setTransform(55.05,597.45,1.1283,1.2754);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.instance_1 = new lib.Interpoler14("synched",0);
	this.instance_1.setTransform(55.05,77,1.1283,1.2754);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},150).to({state:[{t:this.instance_1}]},29).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(150).to({_off:false},0).to({_off:true,y:77,alpha:1},29,cjs.Ease.quadInOut).wait(1));

	// pic05
	this.instance_2 = new lib.Interpoler11("synched",0);
	this.instance_2.setTransform(-165,574.5,0.5641,0.6377,0,0,0,0,0.1);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.instance_3 = new lib.Interpoler12("synched",0);
	this.instance_3.setTransform(-165,-77,0.5641,0.6377);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},120).to({state:[{t:this.instance_3}]},29).to({state:[]},1).wait(30));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(120).to({_off:false},0).to({_off:true,regY:0,y:-77,alpha:1},29,cjs.Ease.quadInOut).wait(31));

	// pic04
	this.instance_4 = new lib.Interpoler9("synched",0);
	this.instance_4.setTransform(165.05,708.85,1.4104,1.5945);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(90).to({_off:false},0).to({y:154.05,alpha:1},29,cjs.Ease.quadInOut).to({_off:true},1).wait(60));

	// pic03
	this.instance_5 = new lib.Interpoler7("synched",0);
	this.instance_5.setTransform(55.05,574.5,1.1283,1.1692,0,0,0,0,0.1);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(60).to({_off:false},0).to({y:51.45,alpha:1},29,cjs.Ease.quadInOut).to({_off:true},1).wait(90));

	// pic02
	this.instance_6 = new lib.Interpoler6("synched",0);
	this.instance_6.setTransform(0.05,533,1.1283,1.1339,0,0,0,-48.7,-37.7);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(30).to({_off:false},0).to({y:0.1,alpha:1},29,cjs.Ease.quadInOut).to({_off:true},1).wait(120));

	// pic01
	this.instance_7 = new lib.Interpoler3("synched",0);
	this.instance_7.setTransform(0,556.5,0.9747,0.9565);
	this.instance_7.alpha = 0;

	this.instance_8 = new lib.Interpoler4("synched",0);
	this.instance_8.setTransform(0,0,0.9747,0.9565);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7}]}).to({state:[{t:this.instance_8}]},29).to({state:[]},1).wait(150));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({_off:true,y:0,alpha:1},29,cjs.Ease.quadInOut).wait(151));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-385,-231,770.1,1113.5);


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
	this.instance.cache(-116,-75,232,150);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(24).to({y:-0.05},60,cjs.Ease.quintInOut).wait(31));
	this.timeline.addTween(cjs.Tween.get(instanceFilter_1).wait(84).to(new cjs.ColorFilter(0.75,0.75,0.75,1,63.75,63.75,63.75,0), 15,cjs.Ease.quintInOut).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 15,cjs.Ease.quintInOut).wait(1));

	this.filterCacheList = [];
	this.filterCacheList.push({instance: this.instance, startFrame:85, endFrame:99, x:-116, y:-75, w:232, h:150});
	this.filterCacheList.push({instance: this.instance, startFrame:100, endFrame:114, x:-116, y:-75, w:232, h:150});
	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50,-32.1,100.1,294.8);


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
	this.instance.cache(-256,-165,512,330);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({y:0.05},60,cjs.Ease.quintInOut).wait(31));
	this.timeline.addTween(cjs.Tween.get(instanceFilter_1).wait(79).to(new cjs.ColorFilter(0.75,0.75,0.75,1,63.75,63.75,63.75,0), 15,cjs.Ease.quintInOut).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 15,cjs.Ease.quintInOut).wait(1));

	this.filterCacheList = [];
	this.filterCacheList.push({instance: this.instance, startFrame:80, endFrame:94, x:-256, y:-165, w:512, h:330});
	this.filterCacheList.push({instance: this.instance, startFrame:95, endFrame:109, x:-256, y:-165, w:512, h:330});
	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50,-32.1,100.1,294.70000000000005);


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
	this.instance.cache(-104,-67,206,134);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({y:0.05},60,cjs.Ease.quintInOut).wait(31));
	this.timeline.addTween(cjs.Tween.get(instanceFilter_1).wait(74).to(new cjs.ColorFilter(0.75,0.75,0.75,1,63.75,63.75,63.75,0), 15,cjs.Ease.quintInOut).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 15,cjs.Ease.quintInOut).wait(1));

	this.filterCacheList = [];
	this.filterCacheList.push({instance: this.instance, startFrame:75, endFrame:89, x:-104, y:-67, w:206, h:134});
	this.filterCacheList.push({instance: this.instance, startFrame:90, endFrame:104, x:-104, y:-67, w:206, h:134});
	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50,-32.1,100,294.70000000000005);


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
	this.instance.setTransform(0.1,234.05,0.5008,0.5006,0,0,0,0,0.1);
	var instanceFilter_1 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.instance.filters = [instanceFilter_1];
	this.instance.cache(-102,-66,204,133);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({y:-0.05},60,cjs.Ease.quintInOut).wait(31));
	this.timeline.addTween(cjs.Tween.get(instanceFilter_1).wait(69).to(new cjs.ColorFilter(0.75,0.75,0.75,1,63.75,63.75,63.75,0), 15,cjs.Ease.quintInOut).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 15,cjs.Ease.quintInOut).wait(1));

	this.filterCacheList = [];
	this.filterCacheList.push({instance: this.instance, startFrame:70, endFrame:84, x:-102, y:-66, w:204, h:133});
	this.filterCacheList.push({instance: this.instance, startFrame:85, endFrame:99, x:-102, y:-66, w:204, h:133});
	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50,-32.1,100.1,298.40000000000003);


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
	this.instance.cache(-155,-100,366,237);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({y:-5.05},60,cjs.Ease.quintInOut).wait(31));
	this.timeline.addTween(cjs.Tween.get(instanceFilter_1).wait(64).to(new cjs.ColorFilter(0.75,0.75,0.75,1,63.75,63.75,63.75,0), 15,cjs.Ease.quintInOut).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 15,cjs.Ease.quintInOut).wait(1));

	this.filterCacheList = [];
	this.filterCacheList.push({instance: this.instance, startFrame:65, endFrame:79, x:-155, y:-100, w:366, h:237});
	this.filterCacheList.push({instance: this.instance, startFrame:80, endFrame:94, x:-155, y:-100, w:366, h:237});
	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50,-32.1,100,304.40000000000003);


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
	this.instance.cache(-236,-152,473,305);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:0.05},59,cjs.Ease.quintInOut).wait(31));
	this.timeline.addTween(cjs.Tween.get(instanceFilter_1).wait(59).to(new cjs.ColorFilter(0.75,0.75,0.75,1,63.75,63.75,63.75,0), 15,cjs.Ease.quintInOut).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 15,cjs.Ease.quintInOut).wait(1));

	this.filterCacheList = [];
	this.filterCacheList.push({instance: this.instance, startFrame:60, endFrame:74, x:-236, y:-152, w:473, h:305});
	this.filterCacheList.push({instance: this.instance, startFrame:75, endFrame:89, x:-236, y:-152, w:473, h:305});
	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.9,-32.1,100,405.1);


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
	this.instance.setTransform(572,270.05,1,1,0,0,0,0,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:394.9},249,cjs.Ease.quadInOut).to({x:572},250,cjs.Ease.quadInOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-185.1,-153.3,1337.1,846.7);


// stage content:
(lib.PAstrolabe = function(mode,startPosition,loop,reversed) {
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
	this.astro_btn06 = new lib.astro_btn06_anim();
	this.astro_btn06.name = "astro_btn06";
	this.astro_btn06.setTransform(647.35,436.6,0.6082,0.6082,0,0,0,0.1,0);

	this.astro_btn05 = new lib.astro_btn05_anim();
	this.astro_btn05.name = "astro_btn05";
	this.astro_btn05.setTransform(581.25,437.9,0.6082,0.6082,0,0,0,0.1,0.1);

	this.astro_btn04 = new lib.astro_btn04_anim();
	this.astro_btn04.name = "astro_btn04";
	this.astro_btn04.setTransform(515.15,437.9,0.6082,0.6081,0,0,0,0.1,0.1);

	this.astro_btn03 = new lib.astro_btn03_anim();
	this.astro_btn03.name = "astro_btn03";
	this.astro_btn03.setTransform(449,437.1,0.6068,0.6071);

	this.astro_btn02 = new lib.astro_btn02_anim();
	this.astro_btn02.name = "astro_btn02";
	this.astro_btn02.setTransform(382.9,436.85,0.6082,0.6082,0,0,0,0,0.1);

	this.astro_btn01 = new lib.astro_btn01_anim();
	this.astro_btn01.name = "astro_btn01";
	this.astro_btn01.setTransform(116.1,723.45,0.6082,0.6079,0,0,0,-329.9,472.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.astro_btn01},{t:this.astro_btn02},{t:this.astro_btn03},{t:this.astro_btn04},{t:this.astro_btn05},{t:this.astro_btn06}]}).wait(1));
	this.astro_btn06.addEventListener("tick", AdobeAn.handleFilterCache);
	this.astro_btn05.addEventListener("tick", AdobeAn.handleFilterCache);
	this.astro_btn04.addEventListener("tick", AdobeAn.handleFilterCache);
	this.astro_btn03.addEventListener("tick", AdobeAn.handleFilterCache);
	this.astro_btn02.addEventListener("tick", AdobeAn.handleFilterCache);
	this.astro_btn01.addEventListener("tick", AdobeAn.handleFilterCache);

	// Calque_7 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgwKAeOMAAAg8bMBgVAAAMAAAA8bg");
	mask.setTransform(480.025,270);

	// astro_gallery_anim
	this.astro_gallery_anim = new lib.astro_gallery_anim();
	this.astro_gallery_anim.name = "astro_gallery_anim";
	this.astro_gallery_anim.setTransform(480,270,0.8234,0.8234);

	var maskedShapeInstanceList = [this.astro_gallery_anim];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.astro_gallery_anim).wait(1));

	// shadow_bg
	this.instance = new lib.shadow_bg_anim();
	this.instance.setTransform(480,270);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// back_btn_anim
	this.back_btn_anim = new lib.back_btn_anim();
	this.back_btn_anim.name = "back_btn_anim";
	this.back_btn_anim.setTransform(241.45,428.1,1,1,0,0,0,106.4,35);

	this.timeline.addTween(cjs.Tween.get(this.back_btn_anim).wait(1));
	this.back_btn_anim.addEventListener("tick", AdobeAn.handleFilterCache);

	// bg
	this.instance_1 = new lib.astro_bg_anim();
	this.instance_1.setTransform(549,270,1,1,0,0,0,572,270);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(449,116.7,680,576.6999999999999);
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
		{src:"images/Astrolabe02.png", id:"Astrolabe02"},
		{src:"images/Astrolabe03.png", id:"Astrolabe03"},
		{src:"images/Astrolabe04.png", id:"Astrolabe04"},
		{src:"images/Astrolabe05.png", id:"Astrolabe05"},
		{src:"images/Astrolabe06.png", id:"Astrolabe06"},
		{src:"images/AstrolabeLogo.png", id:"AstrolabeLogo"}
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