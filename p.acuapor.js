(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"p.acuapor_atlas_NP_1", frames: [[0,0,1024,768]]}
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



(lib.AcuaporBG = function() {
	this.initialize(ss["p.acuapor_atlas_NP_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.AcuaporPantsLabel = function() {
	this.initialize(img.AcuaporPantsLabel);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3500,2300);


(lib.AcuaporPulle = function() {
	this.initialize(img.AcuaporPulle);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3000,2000);


(lib.AcuaporShirtLabel = function() {
	this.initialize(img.AcuaporShirtLabel);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3500,2300);


(lib.AcuaporShirtLogo = function() {
	this.initialize(img.AcuaporShirtLogo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1160,772);


(lib.AcuaporShirtP1 = function() {
	this.initialize(img.AcuaporShirtP1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3500,2300);


(lib.AcuaporShirtP2 = function() {
	this.initialize(img.AcuaporShirtP2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3500,2300);


(lib.AcuaporTop = function() {
	this.initialize(img.AcuaporTop);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2000,1704);// helper functions:

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


(lib.Slide6 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.AcuaporShirtP1();
	this.instance.setTransform(-2.3,-57.7,0.2743,0.2743);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Slide6, new cjs.Rectangle(-2.3,-57.7,960,630.9000000000001), null);


(lib.Slide5 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.AcuaporShirtLabel();
	this.instance.setTransform(-2.3,-57.7,0.2743,0.2743);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Slide5, new cjs.Rectangle(-2.3,-57.7,960,630.9000000000001), null);


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
	this.instance = new lib.AcuaporShirtLogo();
	this.instance.setTransform(-2.3,-57.7,0.8276,0.8311);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Slide4, new cjs.Rectangle(-2.3,-57.7,960,641.6), null);


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
	this.instance = new lib.AcuaporPantsLabel();
	this.instance.setTransform(2.5,-58.25,0.2786,0.2786);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Slide3, new cjs.Rectangle(2.5,-58.2,975.1,640.7), null);


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
	this.instance = new lib.AcuaporTop();
	this.instance.setTransform(2.4,-59.4,0.48,0.48);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Slide2, new cjs.Rectangle(2.4,-59.4,960,817.9), null);


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

	// rec
	this.instance = new lib.AcuaporShirtP2();
	this.instance.setTransform(2,-59.6,0.2743,0.2791);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Slide1, new cjs.Rectangle(2,-59.6,960,641.8000000000001), null);


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
	this.instance = new lib.AcuaporPulle();
	this.instance.setTransform(-0.7,-59.6,0.32,0.32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Slide0, new cjs.Rectangle(-0.7,-59.6,960,640), null);


(lib.shadow = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("Eg1HAhHMAAAhCOMBqPAAAMAAABCOg");
	this.shape.setTransform(340,211.95);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.shadow, new cjs.Rectangle(0,0,680,423.9), null);


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
	this.text = new cjs.Text("RETOUR", "bold 16px 'Myriad Pro'", "#FFFFFF");
	this.text.lineHeight = 20;
	this.text.lineWidth = 59;
	this.text.parent = this;
	this.text.setTransform(-9.15,29.7,1,1,-90);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.1,-31.7,22.299999999999997,63.4);


(lib.Interpoler5 = function(mode,startPosition,loop,reversed) {
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
	this.text.lineWidth = 59;
	this.text.parent = this;
	this.text.setTransform(-9.15,29.7,1,1,-90);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.1,-31.7,22.299999999999997,63.4);


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
	this.instance = new lib.AcuaporBG();
	this.instance.setTransform(-508.6,-381.45,0.9934,0.9934);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-508.6,-381.4,1017.3,762.9);


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
	this.instance = new lib.AcuaporBG();
	this.instance.setTransform(-508.6,-381.45,0.9934,0.9934);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-508.6,-381.4,1017.3,762.9);


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
	this.shape.graphics.f("#3399FF").s().p("AjbH0IAAvnIG3AAIAAPng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.back_btn, new cjs.Rectangle(-22,-50,44,100), null);


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
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(19).call(this.frame_19).wait(21));

	// back_btn_trigger
	this.instance = new lib.back_btn_trigger();
	this.instance.setTransform(30.8,69.9,0.6995,0.6995,0,0,0,22,50);
	this.instance.alpha = 0.0117;
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(40));

	// Calque_2
	this.instance_1 = new lib.Interpoler5("synched",0);
	this.instance_1.setTransform(16.9,34.95);

	this.instance_2 = new lib.Interpoler6("synched",0);
	this.instance_2.setTransform(16.9,34.95);
	this.instance_2._off = true;
	var instance_2Filter_1 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.instance_2.filters = [instance_2Filter_1];
	this.instance_2.cache(-13,-34,26,67);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},19).to({_off:false},20).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:false},19).to({_off:true},20).wait(1));
	this.timeline.addTween(cjs.Tween.get(instance_2Filter_1).to(new cjs.ColorFilter(0,0,0,1,51,153,255,0), 19).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 20).wait(1));

	// Calque_1
	this.instance_3 = new lib.back_btn();
	this.instance_3.setTransform(30.8,69.9,0.6995,0.6995,0,0,0,22,50);
	var instance_3Filter_2 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.instance_3.filters = [instance_3Filter_2];
	this.instance_3.cache(-24,-52,48,104);
	new cjs.ButtonHelper(this.instance_3, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(40));
	this.timeline.addTween(cjs.Tween.get(instance_3Filter_2).to(new cjs.ColorFilter(0,0,0,1,255,255,255,0), 19).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 20).wait(1));

	this.filterCacheList = [];
	this.filterCacheList.push({instance: this.instance_2, startFrame:1, endFrame:19, x:-13, y:-34, w:26, h:67});
	this.filterCacheList.push({instance: this.instance_2, startFrame:0, endFrame:0, x:-13, y:-34, w:26, h:67});
	this.filterCacheList.push({instance: this.instance_2, startFrame:20, endFrame:39, x:-13, y:-34, w:26, h:67});
	this.filterCacheList.push({instance: this.instance_3, startFrame:1, endFrame:19, x:-24, y:-52, w:48, h:104});
	this.filterCacheList.push({instance: this.instance_3, startFrame:0, endFrame:0, x:-24, y:-52, w:48, h:104});
	this.filterCacheList.push({instance: this.instance_3, startFrame:20, endFrame:39, x:-24, y:-52, w:48, h:104});
	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,30.8,69.9);


(lib.acuapor_gallery = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {slide0:0,slide1:29,slide2:59,slide3:89,slide4:119,slide5:149,slide6:179};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
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
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(180));

	// navigation
	this.prevButton = new lib.NavigationButton();
	this.prevButton.name = "prevButton";
	this.prevButton.setTransform(855.15,505.35,1,1,0,0,180);
	this.prevButton.shadow = new cjs.Shadow("#000000",3,3,4);
	new cjs.ButtonHelper(this.prevButton, 0, 1, 1);

	this.nextButton = new lib.NavigationButton();
	this.nextButton.name = "nextButton";
	this.nextButton.setTransform(909.15,505.35);
	this.nextButton.shadow = new cjs.Shadow("#000000",3,3,4);
	new cjs.ButtonHelper(this.nextButton, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.nextButton},{t:this.prevButton}]}).wait(180));

	// slide6
	this.instance = new lib.Slide6();
	this.instance.setTransform(1434.65,264.6,1,1,0,0,0,477.7,257.7);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(149).to({_off:false},0).to({x:473.15},30,cjs.Ease.sineInOut).wait(1));

	// slide5
	this.instance_1 = new lib.Slide5();
	this.instance_1.setTransform(1438.6,-57.8,1,1.0131,0,0,0,477.7,-57.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(119).to({_off:false},0).to({x:476.45},30,cjs.Ease.sineInOut).to({x:-485.05},30,cjs.Ease.sineInOut).wait(1));

	// slide4
	this.instance_2 = new lib.Slide4();
	this.instance_2.setTransform(960,0);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(89).to({_off:false},0).to({x:0},30,cjs.Ease.sineInOut).to({x:-962.15},30,cjs.Ease.sineInOut).to({_off:true},1).wait(30));

	// slide3
	this.instance_3 = new lib.Slide3();
	this.instance_3.setTransform(960,0);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(59).to({_off:false},0).to({x:0},30,cjs.Ease.sineInOut).to({x:-960},30,cjs.Ease.sineInOut).to({_off:true},1).wait(60));

	// slide2
	this.instance_4 = new lib.Slide2();
	this.instance_4.setTransform(960,0);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(29).to({_off:false},0).to({x:0},30,cjs.Ease.sineInOut).to({x:-960},30,cjs.Ease.sineInOut).to({_off:true},1).wait(90));

	// slide1
	this.instance_5 = new lib.Slide1();
	this.instance_5.setTransform(960,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:0},29,cjs.Ease.sineInOut).to({x:-960},30,cjs.Ease.sineInOut).to({_off:true},1).wait(120));

	// slide0
	this.instance_6 = new lib.Slide0();

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({x:-960},29,cjs.Ease.sineInOut).to({_off:true},1).wait(150));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-965,-59.6,2902.6,818.1);


(lib.acuapor_BG_anim = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Interpoler1("synched",0);
	this.instance.setTransform(505.95,226.05);

	this.instance_1 = new lib.Interpoler2("synched",0);
	this.instance_1.setTransform(455.95,226.05);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,x:455.95},249,cjs.Ease.quadInOut).to({_off:false,x:505.95},250,cjs.Ease.quadInOut).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},249,cjs.Ease.quadInOut).to({_off:true,x:505.95},250,cjs.Ease.quadInOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52.6,-155.4,1067.2,763);


// stage content:
(lib.PAcuapor = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,89];
	// timeline functions:
	this.frame_0 = function() {
		document.body.style.backgroundColor = lib.properties.color;
	}
	this.frame_89 = function() {
		this.stop();
		var _this = this;
		
		stage.enableMouseOver();
		
		_this.back_btn_anim.on('mouseover', function(){
		
		_this.back_btn_anim.gotoAndPlay(1);
		});
		
		
		_this.back_btn_anim.on('mouseout', function(){
		
		_this.back_btn_anim.gotoAndPlay(21);
		});
		
		
		_this.back_btn_anim.on('click', function(){
		
		window.open('graphic_menu.html', '_self');
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(89).call(this.frame_89).wait(1));

	// Calque_5 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Eg1HAhHMAAAhCOMBqPAAAMAAABCOg");
	mask.setTransform(480,270);

	// acuapor_comp
	this.instance = new lib.acuapor_gallery();
	this.instance.setTransform(825.25,270.9,0.7281,0.7281,0,0,0,960.6,260.4);
	this.instance.alpha = 0;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:960.7,x:825.3,alpha:1},89,cjs.Ease.quadOut).wait(1));

	// shadow
	this.instance_1 = new lib.shadow();
	this.instance_1.setTransform(480,270.05,1,1,0,0,0,340,212);
	this.instance_1.alpha = 0;
	this.instance_1.shadow = new cjs.Shadow("rgba(0,0,0,1)",7,7,10);
	this.instance_1.cache(-2,-2,684,428);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:1},89).wait(1));

	// back_btn
	this.back_btn_anim = new lib.back_btn_anim();
	this.back_btn_anim.name = "back_btn_anim";
	this.back_btn_anim.setTransform(155.2,447.05,1,1,0,0,0,15.4,35);
	this.back_btn_anim.alpha = 0;
	this.back_btn_anim._off = true;

	this.timeline.addTween(cjs.Tween.get(this.back_btn_anim).wait(59).to({_off:false},0).to({x:126.2,y:446.75,alpha:1},30,cjs.Ease.quintInOut).wait(1));
	this.back_btn_anim.addEventListener("tick", AdobeAn.handleFilterCache);

	// bg
	this.instance_2 = new lib.acuapor_BG_anim();
	this.instance_2.setTransform(506.1,210.1,1,1,0,0,0,505.9,226.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(90));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(477.6,98.6,537.1999999999999,493);
// library properties:
lib.properties = {
	id: '9805ACA12C03DE4C9EA2CF95CA7AB807',
	width: 960,
	height: 540,
	fps: 60,
	color: "#333333",
	opacity: 1.00,
	manifest: [
		{src:"images/AcuaporPantsLabel.jpg", id:"AcuaporPantsLabel"},
		{src:"images/AcuaporPulle.jpg", id:"AcuaporPulle"},
		{src:"images/AcuaporShirtLabel.jpg", id:"AcuaporShirtLabel"},
		{src:"images/AcuaporShirtLogo.jpg", id:"AcuaporShirtLogo"},
		{src:"images/AcuaporShirtP1.jpg", id:"AcuaporShirtP1"},
		{src:"images/AcuaporShirtP2.jpg", id:"AcuaporShirtP2"},
		{src:"images/AcuaporTop.jpg", id:"AcuaporTop"},
		{src:"images/p.acuapor_atlas_NP_1.jpg", id:"p.acuapor_atlas_NP_1"}
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