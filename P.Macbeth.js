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



(lib.MacbethAffiche2copie = function() {
	this.initialize(img.MacbethAffiche2copie);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2700,1848);


(lib.MacbethAffichecopie = function() {
	this.initialize(img.MacbethAffichecopie);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4000,2854);


(lib.MACBETHBG = function() {
	this.initialize(img.MACBETHBG);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3600,2402);


(lib.MACBETHBilletcopie = function() {
	this.initialize(img.MACBETHBilletcopie);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3000,2400);


(lib.MACBETHInvitationcopie = function() {
	this.initialize(img.MACBETHInvitationcopie);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3200,2250);


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
	this.instance = new lib.MACBETHInvitationcopie();
	this.instance.setTransform(0,-64.05,0.3,0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Slide3, new cjs.Rectangle(0,-64,960,674.9), null);


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
	this.instance = new lib.MacbethAffichecopie();
	this.instance.setTransform(0,-74,0.24,0.24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Slide1, new cjs.Rectangle(0,-74,960,685), null);


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
	this.instance = new lib.MacbethAffiche2copie();
	this.instance.setTransform(0,-48,0.3556,0.3555);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Slide0, new cjs.Rectangle(0,-48,960,657), null);


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
	this.instance = new lib.MACBETHBG();
	this.instance.setTransform(-1132.7,-703.2,0.6332,0.6332);

	this.instance_1 = new lib.webofly_bg();
	this.instance_1.setTransform(-1120,-700);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1132.7,-703.2,2279.6000000000004,1521);


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
	this.shape.graphics.f("#CB2A22").s().p("Ai4GuIAAtbIFxAAIAANbg");

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
	this.instance.setTransform(0,-206.95);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-332.3},249,cjs.Ease.quadInOut).to({x:0},250,cjs.Ease.quadInOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1465,-910.1,2611.9,1521);


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
	this.instance = new lib.MACBETHBilletcopie();
	this.instance.setTransform(0,-104,0.32,0.32);

	this.instance_1 = new lib.Rec("single",0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Slide2, new cjs.Rectangle(-1,-104,962,768), null);


(lib.prevButton_anim = function(mode,startPosition,loop,reversed) {
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
	this.frame_19 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(19).call(this.frame_19).wait(21));

	// Calque_1
	this.instance = new lib.NavigationButton();
	this.instance.setTransform(18.05,15.3,1,1,0,0,180);
	this.instance.shadow = new cjs.Shadow("#000000",3,3,4);
	var instanceFilter_1 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.instance.filters = [instanceFilter_1];
	this.instance.cache(-20,-17,40,35);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(40));
	this.timeline.addTween(cjs.Tween.get(instanceFilter_1).to(new cjs.ColorFilter(0,0,0,1,203,42,34,0), 19).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 20).wait(1));

	this.filterCacheList = [];
	this.filterCacheList.push({instance: this.instance, startFrame:1, endFrame:19, x:-20, y:-17, w:40, h:35});
	this.filterCacheList.push({instance: this.instance, startFrame:0, endFrame:0, x:-20, y:-17, w:40, h:35});
	this.filterCacheList.push({instance: this.instance, startFrame:20, endFrame:39, x:-20, y:-17, w:40, h:35});
	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6,-6,64,58);


(lib.nextButton_anim = function(mode,startPosition,loop,reversed) {
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
	this.frame_19 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(19).call(this.frame_19).wait(21));

	// Calque_1
	this.instance = new lib.NavigationButton();
	this.instance.setTransform(18,15.3);
	this.instance.shadow = new cjs.Shadow("#000000",3,3,4);
	var instanceFilter_1 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.instance.filters = [instanceFilter_1];
	this.instance.cache(-20,-17,40,35);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(40));
	this.timeline.addTween(cjs.Tween.get(instanceFilter_1).to(new cjs.ColorFilter(0,0,0,1,203,42,34,0), 19).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 20).wait(1));

	this.filterCacheList = [];
	this.filterCacheList.push({instance: this.instance, startFrame:1, endFrame:19, x:-20, y:-17, w:40, h:35});
	this.filterCacheList.push({instance: this.instance, startFrame:0, endFrame:0, x:-20, y:-17, w:40, h:35});
	this.filterCacheList.push({instance: this.instance, startFrame:20, endFrame:39, x:-20, y:-17, w:40, h:35});
	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6,-6,64,58);


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
	this.timeline.addTween(cjs.Tween.get(instance_2Filter_1).wait(29).to(new cjs.ColorFilter(0,0,0,1,203,42,34,0), 20).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 20,cjs.Ease.quintInOut).wait(1));

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
	props.labels = {slide0:0,slide1:29,slide2:59,slide3:89};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		
		stage.enableMouseOver();
		
		_this.nextButton.on('mouseover', function(){
		
		_this.nextButton.gotoAndPlay(1);
		});
		
		
		_this.nextButton.on('mouseout', function(){
		
		_this.nextButton.gotoAndPlay(21);
		});
		
		_this.prevButton.on('mouseover', function(){
		
		_this.prevButton.gotoAndPlay(1);
		});
		
		
		_this.prevButton.on('mouseout', function(){
		
		_this.prevButton.gotoAndPlay(21);
		});
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
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(90));

	// navigation
	this.prevButton = new lib.prevButton_anim();
	this.prevButton.name = "prevButton";
	this.prevButton.setTransform(818.4,509,1,1,0,0,0,18,15.3);

	this.nextButton = new lib.nextButton_anim();
	this.nextButton.name = "nextButton";
	this.nextButton.setTransform(872.45,509,1,1,0,0,0,18,15.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.nextButton},{t:this.prevButton}]}).wait(90));
	this.prevButton.addEventListener("tick", AdobeAn.handleFilterCache);
	this.nextButton.addEventListener("tick", AdobeAn.handleFilterCache);

	// slide3
	this.instance = new lib.Slide3();
	this.instance.setTransform(1011.1,2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(59).to({_off:false},0).to({x:0,y:0},30,cjs.Ease.sineInOut).wait(1));

	// slide2
	this.instance_1 = new lib.Slide2();
	this.instance_1.setTransform(984.5,0);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(29).to({_off:false},0).to({x:7.3},30,cjs.Ease.sineInOut).to({x:-420},30,cjs.Ease.sineInOut).wait(1));

	// slide1
	this.instance_2 = new lib.Slide1();
	this.instance_2.setTransform(965,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:0},29,cjs.Ease.sineInOut).to({x:-480},30,cjs.Ease.sineInOut).to({_off:true},1).wait(30));

	// slide0
	this.instance_3 = new lib.Slide0();
	this.instance_3.setTransform(0,-10.95);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:-580},29,cjs.Ease.sineInOut).to({_off:true},1).wait(60));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-580,-104,2551.1,768);


// stage content:
(lib.PMacbeth = function(mode,startPosition,loop,reversed) {
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

	// macbeth_comp
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

	// macbeth_bg_anim
	this.instance_2 = new lib.webofly_bg_anim();
	this.instance_2.setTransform(572.15,270,0.5179,0.5179,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(465.6,68.7,700.4999999999999,517.5999999999999);
// library properties:
lib.properties = {
	id: '9805ACA12C03DE4C9EA2CF95CA7AB807',
	width: 960,
	height: 540,
	fps: 60,
	color: "#333333",
	opacity: 1.00,
	manifest: [
		{src:"images/MacbethAffiche2copie.jpg", id:"MacbethAffiche2copie"},
		{src:"images/MacbethAffichecopie.jpg", id:"MacbethAffichecopie"},
		{src:"images/MACBETHBG.jpg", id:"MACBETHBG"},
		{src:"images/MACBETHBilletcopie.jpg", id:"MACBETHBilletcopie"},
		{src:"images/MACBETHInvitationcopie.jpg", id:"MACBETHInvitationcopie"},
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