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



(lib.WeboflyAffiche02 = function() {
	this.initialize(img.WeboflyAffiche02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3313,2150);


(lib.WeboflyBrochureCouvBack = function() {
	this.initialize(img.WeboflyBrochureCouvBack);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2800,1922);


(lib.WeboflyBrochureCouv = function() {
	this.initialize(img.WeboflyBrochureCouv);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3000,1974);


(lib.WeboflyBrochureInside = function() {
	this.initialize(img.WeboflyBrochureInside);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2800,1944);


(lib.WeboflyflyerA5 = function() {
	this.initialize(img.WeboflyflyerA5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1900,1300);


(lib.webofly_bg = function() {
	this.initialize(img.webofly_bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2240,1400);// helper functions:

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


(lib.Slide3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// rec
	this.instance = new lib.WeboflyflyerA5();
	this.instance.setTransform(0,-52,0.5053,0.5053);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Slide3, new cjs.Rectangle(0,-52,960,656.8), null);


(lib.Slide1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// text
	this.instance = new lib.WeboflyBrochureInside();
	this.instance.setTransform(-5.15,-69.55,0.3465,0.3465);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Slide1, new cjs.Rectangle(-5.1,-69.5,970.3000000000001,673.7), null);


(lib.Slide0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// rec
	this.instance = new lib.WeboflyBrochureCouv();
	this.instance.setTransform(0,-44,0.32,0.32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Slide0, new cjs.Rectangle(0,-44,960,631.7), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("Eg1mAisMAAAhFXMBrNAAAMAAABFXg");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.shadow_bg, new cjs.Rectangle(-343,-222,686.1,444.1), null);


(lib.Rec = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(1,1,1).p("EhK/gqLMCV/AAAMAAABUXMiV/AAAg");
	this.shape.setTransform(480,270);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("EhK/AqMMAAAhUXMCV/AAAMAAABUXg");
	this.shape_1.setTransform(480,270);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,962,542);


(lib.NavigationButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAbBUIjOAAIAAimIDOAAIAAhGICZCYIiZCZg");
	this.shape.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18,-15.3,36.1,30.700000000000003);


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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag5AuIgCgQIgBgVQAAgMACgKQADgJAFgHQAEgFAGgDQAHgDAIAAQAIAAAGADQAGADAEAFQADAFACAFIAAAAQADgGAGgEQAFgEAJgCIAOgEIAMgDIAIgDIAAAcIgKAEIgSAFQgIABgEADQgEACgCADQgCAEAAAGIAAAIIAwAAIAAAbgAgjgIQgEAGAAAIIAAAIIAAAFIAiAAIAAgLQgBgJgEgGQgFgGgIAAQgIAAgEAFg");
	this.shape.setTransform(-0.2542,-28.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag9AyIAAgbIBFAAQAQgBAIgFQAIgGAAgLQAAgKgIgFQgIgGgQAAIhFAAIAAgbIBDAAQAcAAAOANQAOAOAAAWQAAAXgOANQgNANgdAAg");
	this.shape_1.setTransform(-0.125,-16.15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgfAzQgOgHgJgNQgHgOgBgRQABgSAHgNQAJgNAOgHQAOgGAQAAQAUAAAOAHQAOAIAHANQAJANgBARQAAASgIANQgIANgOAHQgOAGgSAAQgRAAgOgHgAgUgZQgJADgGAHQgFAGAAAJQAAAJAFAHQAGAHAJADQAKADAKAAQAMAAAJgDQAJgEAFgGQAFgHABgJIAAAAQAAgIgGgHQgFgGgJgEQgKgDgLAAQgKAAgKADg");
	this.shape_2.setTransform(-0.2,-3.575);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag8AvIAAhdIAXAAIAAAhIBiAAIAAAbIhiAAIAAAhg");
	this.shape_3.setTransform(-0.225,7.775);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag8AmIAAhJIAXAAIAAAuIAZAAIAAgsIAVAAIAAAsIAdAAIAAgwIAXAAIAABLg");
	this.shape_4.setTransform(-0.225,17.25);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag5AuIgCgQIgBgVQAAgMACgKQADgJAFgHQAEgFAGgDQAHgDAIAAQAIAAAGADQAGADAEAFQADAFACAFIAAAAQADgGAGgEQAFgEAJgCIAOgEIAMgDIAIgDIAAAcIgKAEIgSAFQgIABgEADQgEACgCADQgCAEAAAGIAAAIIAwAAIAAAbgAgjgIQgEAGAAAIIAAAIIAAAFIAiAAIAAgLQgBgJgEgGQgFgGgIAAQgIAAgEAFg");
	this.shape_5.setTransform(-0.2542,27.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.3,-35,24.700000000000003,70);


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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag5AuIgCgQIgBgVQAAgMACgKQADgJAFgHQAEgFAGgDQAHgDAIAAQAIAAAGADQAGADAEAFQADAFACAFIAAAAQADgGAGgEQAFgEAJgCIAOgEIAMgDIAIgDIAAAcIgKAEIgSAFQgIABgEADQgEACgCADQgCAEAAAGIAAAIIAwAAIAAAbgAgjgIQgEAGAAAIIAAAIIAAAFIAiAAIAAgLQgBgJgEgGQgFgGgIAAQgIAAgEAFg");
	this.shape.setTransform(-0.2542,-28.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag9AyIAAgbIBFAAQAQgBAIgFQAIgGAAgLQAAgKgIgFQgIgGgQAAIhFAAIAAgbIBDAAQAcAAAOANQAOAOAAAWQAAAXgOANQgNANgdAAg");
	this.shape_1.setTransform(-0.125,-16.15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgfAzQgOgHgJgNQgHgOgBgRQABgSAHgNQAJgNAOgHQAOgGAQAAQAUAAAOAHQAOAIAHANQAJANgBARQAAASgIANQgIANgOAHQgOAGgSAAQgRAAgOgHgAgUgZQgJADgGAHQgFAGAAAJQAAAJAFAHQAGAHAJADQAKADAKAAQAMAAAJgDQAJgEAFgGQAFgHABgJIAAAAQAAgIgGgHQgFgGgJgEQgKgDgLAAQgKAAgKADg");
	this.shape_2.setTransform(-0.2,-3.575);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag8AvIAAhdIAXAAIAAAhIBiAAIAAAbIhiAAIAAAhg");
	this.shape_3.setTransform(-0.225,7.775);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag8AmIAAhJIAXAAIAAAuIAZAAIAAgsIAVAAIAAAsIAdAAIAAgwIAXAAIAABLg");
	this.shape_4.setTransform(-0.225,17.25);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag5AuIgCgQIgBgVQAAgMACgKQADgJAFgHQAEgFAGgDQAHgDAIAAQAIAAAGADQAGADAEAFQADAFACAFIAAAAQADgGAGgEQAFgEAJgCIAOgEIAMgDIAIgDIAAAcIgKAEIgSAFQgIABgEADQgEACgCADQgCAEAAAGIAAAIIAwAAIAAAbgAgjgIQgEAGAAAIIAAAIIAAAFIAiAAIAAgLQgBgJgEgGQgFgGgIAAQgIAAgEAFg");
	this.shape_5.setTransform(-0.2542,27.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.3,-35,24.700000000000003,70);


(lib.Interpoler2 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.webofly_bg();
	this.instance.setTransform(-1120,-700);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1120,-700,2240,1400);


(lib.Interpoler1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.webofly_bg();
	this.instance.setTransform(-1120,-700);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1120,-700,2240,1400);


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
	this.shape.graphics.f("#961D48").s().p("Ai4GuIAAtbIFxAAIAANbg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.5,-43,37,86);


(lib.webofly_bg_anim = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Interpoler1("synched",0);

	this.instance_1 = new lib.Interpoler2("synched",0);
	this.instance_1.setTransform(-160,0);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,x:-160},249,cjs.Ease.quadInOut).to({_off:false,x:0},250,cjs.Ease.quadInOut).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},249,cjs.Ease.quadInOut).to({_off:true,x:0},250,cjs.Ease.quadInOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1280,-700,2400,1400);


(lib.Slide4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// rec
	this.instance = new lib.WeboflyAffiche02();
	this.instance.setTransform(0,-34,0.2898,0.2898);

	this.instance_1 = new lib.Rec("single",0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Slide4, new cjs.Rectangle(-1,-34,962,623), null);


(lib.Slide2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// rec
	this.instance = new lib.WeboflyBrochureCouvBack();
	this.instance.setTransform(-1,-52,0.3428,0.3428);

	this.instance_1 = new lib.Rec("single",0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Slide2, new cjs.Rectangle(-1,-52,962,659), null);


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
	this.frame_29 = function() {
		this.stop();
	}
	this.frame_49 = function() {
		this.stop();
	}
	this.frame_69 = function() {
		this.gotoAndStop(29);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(20).call(this.frame_49).wait(20).call(this.frame_69).wait(1));

	// Calque_1 copy
	this.instance = new lib.back_btn();
	this.instance.setTransform(37.5,76);
	this.instance.alpha = 0.0117;
	this.instance._off = true;
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({_off:false},0).wait(41));

	// Calque_2
	this.instance_1 = new lib.Interpoler3("synched",0);
	this.instance_1.setTransform(86.75,76);

	this.instance_2 = new lib.Interpoler4("synched",0);
	this.instance_2.setTransform(37.5,76);
	this.instance_2._off = true;
	var instance_2Filter_1 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.instance_2.filters = [instance_2Filter_1];
	this.instance_2.cache(-14,-37,29,74);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:54.75},29,cjs.Ease.quintInOut).to({_off:true,x:37.5},20,cjs.Ease.quintInOut).to({_off:false,x:54.75},20,cjs.Ease.quintInOut).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(29).to({_off:false},20,cjs.Ease.quintInOut).to({_off:true,x:54.75},20,cjs.Ease.quintInOut).wait(1));
	this.timeline.addTween(cjs.Tween.get(instance_2Filter_1).wait(29).to(new cjs.ColorFilter(0,0,0,1,150,29,72,0), 20).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 20,cjs.Ease.quintInOut).wait(1));

	// Calque_1
	this.instance_3 = new lib.back_btn();
	this.instance_3.setTransform(75.5,76);
	var instance_3Filter_2 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.instance_3.filters = [instance_3Filter_2];
	this.instance_3.cache(-20,-45,41,90);
	new cjs.ButtonHelper(this.instance_3, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:37.5},29,cjs.Ease.quintInOut).wait(41));
	this.timeline.addTween(cjs.Tween.get(instance_3Filter_2).wait(29).to(new cjs.ColorFilter(0,0,0,1,255,255,255,0), 20,cjs.Ease.quintInOut).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 20,cjs.Ease.quintInOut).wait(1));

	this.filterCacheList = [];
	this.filterCacheList.push({instance: this.instance_2, startFrame:30, endFrame:49, x:-14, y:-37, w:29, h:74});
	this.filterCacheList.push({instance: this.instance_2, startFrame:50, endFrame:69, x:-14, y:-37, w:29, h:74});
	this.filterCacheList.push({instance: this.instance_3, startFrame:30, endFrame:49, x:-20, y:-45, w:41, h:90});
	this.filterCacheList.push({instance: this.instance_3, startFrame:50, endFrame:69, x:-20, y:-45, w:41, h:90});
	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(19,33,80.1,86);


(lib.webofly_comp = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {slide0:0,slide1:29,slide2:59,slide3:89,slide4:119};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		document.body.style.backgroundColor = lib.properties.color;
		
		var tl = this;
		var nextButton = tl.nextButton;
		var prevButton = tl.prevButton;
		
		tl.frame = tl.currentFrame;
		tl.counter = 0;
		tl.totalSlides = Object.keys(tl.timeline._labels).length;
		
		tl.start = function()
		{
			tl.stop();
		
			if (!tl.started)
			{
				tl.frame = tl.currentFrame;
				tl.transitionDuration = 500;
				tl.transitionEase = createjs.Ease.sineInOut;
				
				nextButton.on("click", tl.nextSlide);
				prevButton.on("click", tl.prevSlide);
				
				tl.started = true;
			}
		};
		
		tl.nextSlide = function(e)
		{
			tl.counter = Math.min(++tl.counter, tl.totalSlides - 1);
			tl.navigate(tl.timeline._labels["slide" + tl.counter], tl.transitionDuration, tl.transitionEase);
		};
		
		tl.prevSlide = function(e)
		{
			tl.counter = Math.max(--tl.counter, 0);
			tl.navigate(tl.timeline._labels["slide" + tl.counter], tl.transitionDuration, tl.transitionEase);
		};
		
		tl.navigate = function(destination, duration, ease)
		{
			createjs.Tween
				.get(tl)
				.to({frame:destination}, duration, ease)
				.addEventListener("change", tl.changeHandler);
		};
		
		tl.changeHandler = function(e)
		{
			tl.gotoAndStop(Math.ceil(tl.frame));
		};
		
		tl.start();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(120));

	// navigation
	this.prevButton = new lib.NavigationButton();
	this.prevButton.name = "prevButton";
	this.prevButton.setTransform(818.45,509,1,1,0,0,180);
	this.prevButton.shadow = new cjs.Shadow("#000000",3,3,4);
	new cjs.ButtonHelper(this.prevButton, 0, 1, 1);

	this.nextButton = new lib.NavigationButton();
	this.nextButton.name = "nextButton";
	this.nextButton.setTransform(872.45,509);
	this.nextButton.shadow = new cjs.Shadow("#000000",3,3,4);
	new cjs.ButtonHelper(this.nextButton, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.nextButton},{t:this.prevButton}]}).wait(120));

	// slide4
	this.instance = new lib.Slide4();
	this.instance.setTransform(960,0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(89).to({_off:false},0).to({x:0},30,cjs.Ease.none).wait(1));

	// slide3
	this.instance_1 = new lib.Slide3();
	this.instance_1.setTransform(960,2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(59).to({_off:false},0).to({x:0,y:0},30,cjs.Ease.none).to({x:-440},30,cjs.Ease.none).wait(1));

	// slide2
	this.instance_2 = new lib.Slide2();
	this.instance_2.setTransform(960,0);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(29).to({_off:false},0).to({x:0},30,cjs.Ease.none).to({x:-420},30,cjs.Ease.none).to({_off:true},1).wait(30));

	// slide1
	this.instance_3 = new lib.Slide1();
	this.instance_3.setTransform(965,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:0},29,cjs.Ease.none).to({x:-480},30,cjs.Ease.none).to({_off:true},1).wait(60));

	// slide0
	this.instance_4 = new lib.Slide0();

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:-580},29,cjs.Ease.none).to({_off:true},1).wait(90));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-580,-69.5,2510.2,676.5);


// stage content:
(lib.PWebofly = function(mode,startPosition,loop,reversed) {
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
		var _this = this;
		
		stage.enableMouseOver();
		_this.back_btn_anim.on('mouseover', function(){
		
		_this.back_btn_anim.gotoAndPlay(31);
		});
		
		
		_this.back_btn_anim.on('mouseout', function(){
		
		_this.back_btn_anim.gotoAndPlay(51);
		});
		
		_this.back_btn_anim.on('click', function(){
		
		window.open('graphic_menu.html', '_self');
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Calque_3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Eg1mAisMAAAhFXMBrNAAAMAAABFXg");
	mask.setTransform(475.125,270.1);

	// webofly_comp
	this.instance = new lib.webofly_comp();
	this.instance.setTransform(831.3,268.05,0.7354,0.7354,0,0,0,962.6,267.3);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Calque_3 copy
	this.instance_1 = new lib.shadow_bg();
	this.instance_1.setTransform(475.1,270.1);
	this.instance_1.shadow = new cjs.Shadow("rgba(0,0,0,1)",7,7,10);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// back_btn_anim
	this.back_btn_anim = new lib.back_btn_anim();
	this.back_btn_anim.name = "back_btn_anim";
	this.back_btn_anim.setTransform(77.05,373.05);

	this.timeline.addTween(cjs.Tween.get(this.back_btn_anim).wait(1));
	this.back_btn_anim.addEventListener("tick", AdobeAn.handleFilterCache);

	// webofly_bg_anim
	this.instance_2 = new lib.webofly_bg_anim();
	this.instance_2.setTransform(572.15,270,0.5179,0.5179,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(472.1,177.5,679.9999999999999,455);
// library properties:
lib.properties = {
	id: '9805ACA12C03DE4C9EA2CF95CA7AB807',
	width: 960,
	height: 540,
	fps: 60,
	color: "#333333",
	opacity: 1.00,
	manifest: [
		{src:"images/WeboflyAffiche02.jpg", id:"WeboflyAffiche02"},
		{src:"images/WeboflyBrochureCouvBack.png", id:"WeboflyBrochureCouvBack"},
		{src:"images/WeboflyBrochureCouv.png", id:"WeboflyBrochureCouv"},
		{src:"images/WeboflyBrochureInside.png", id:"WeboflyBrochureInside"},
		{src:"images/WeboflyflyerA5.png", id:"WeboflyflyerA5"},
		{src:"images/webofly_bg.jpg", id:"webofly_bg"}
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
an.compositions['9805ACA12C03DE4C9EA2CF95CA7AB807'] = {
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