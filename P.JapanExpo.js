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



(lib.FreeshBG = function() {
	this.initialize(img.FreeshBG);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1200,849);


(lib.JapanExpoFlyerInsidejpgcopy = function() {
	this.initialize(img.JapanExpoFlyerInsidejpgcopy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3000,2250);


(lib.JapanExpoFlyer = function() {
	this.initialize(img.JapanExpoFlyer);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3000,2250);


(lib.JapanExpoInvitation = function() {
	this.initialize(img.JapanExpoInvitation);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3000,2000);


(lib.Préposition17 = function() {
	this.initialize(img.Préposition17);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2000,1416);


(lib.Préposition18japonais = function() {
	this.initialize(img.Préposition18japonais);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2912,2014);


(lib.Préposition5 = function() {
	this.initialize(img.Préposition5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2600,1733);


(lib.Préposition7 = function() {
	this.initialize(img.Préposition7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2393,1633);


(lib.Préposition8 = function() {
	this.initialize(img.Préposition8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2000,1402);// helper functions:

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


(lib.Slide7 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Préposition18japonais();
	this.instance.setTransform(88,-100,0.3485,0.3485);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Slide7, new cjs.Rectangle(88,-100,1014.9000000000001,701.9), null);


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
	this.instance = new lib.Préposition17();
	this.instance.setTransform(66,-131,0.5459,0.546);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Slide6, new cjs.Rectangle(66,-131,1091.9,773.1), null);


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
	this.instance = new lib.Préposition8();
	this.instance.setTransform(57,-108,0.5225,0.5225);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Slide5, new cjs.Rectangle(57,-108,1045,732.6), null);


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
	this.instance = new lib.Préposition7();
	this.instance.setTransform(64,-99,0.4379,0.438);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Slide4, new cjs.Rectangle(64,-99,1048,715.2), null);


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
	this.instance = new lib.Préposition5();
	this.instance.setTransform(61,-93,0.4052,0.4052);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Slide3, new cjs.Rectangle(61,-93,1053.5,702.2), null);


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
	this.instance = new lib.JapanExpoInvitation();
	this.instance.setTransform(47,-96,0.3512,0.3512);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Slide2, new cjs.Rectangle(47,-96,1053.4,702.3), null);


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
	this.instance = new lib.JapanExpoFlyer();
	this.instance.setTransform(-24,-149,0.364,0.364);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Slide1, new cjs.Rectangle(-24,-149,1091.9,818.9), null);


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
	this.instance = new lib.JapanExpoFlyerInsidejpgcopy();
	this.instance.setTransform(-58,-40,0.32,0.32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Slide0, new cjs.Rectangle(-58,-40,960,720), null);


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
	this.text = new cjs.Text("RETOUR", "bold 16px 'Myriad Pro'", "#FFFFFF");
	this.text.lineHeight = 20;
	this.text.lineWidth = 60;
	this.text.parent = this;
	this.text.setTransform(-9.15,29.75,1,1,-90);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.1,-31.7,22.299999999999997,63.5);


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
	this.text = new cjs.Text("RETOUR", "bold 16px 'Myriad Pro'", "#FFE143");
	this.text.lineHeight = 20;
	this.text.lineWidth = 60;
	this.text.parent = this;
	this.text.setTransform(-9.15,29.75,1,1,-90);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.1,-31.7,22.299999999999997,63.5);


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
	this.instance = new lib.FreeshBG();
	this.instance.setTransform(-580,-414.25,0.3314,0.3314);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-580,-414.2,397.7,281.4);


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
	this.shape.graphics.f("#FFE143").s().p("AjbH0IAAvnIG3AAIAAPng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22,-50,44,100);


(lib.freesh_bg_anim = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(1175.75,927.5,2.9168,2.9167);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:1019.75},249,cjs.Ease.quadInOut).to({x:1175.75},250,cjs.Ease.quadInOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-671.9,-280.7,1316.1,820.7);


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
	this.instance = new lib.back_btn();
	this.instance.setTransform(30.8,69.9,0.6995,0.6995,0,0,0,22,50);
	this.instance.alpha = 0.0117;
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(40));

	// Calque_2
	this.instance_1 = new lib.Interpoler3("synched",0);
	this.instance_1.setTransform(16.15,34.75);

	this.instance_2 = new lib.Interpoler4("synched",0);
	this.instance_2.setTransform(16.15,34.75);
	this.instance_2._off = true;
	var instance_2Filter_1 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.instance_2.filters = [instance_2Filter_1];
	this.instance_2.cache(-13,-34,26,68);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},19).to({_off:false},20).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:false},19).to({_off:true},20).wait(1));
	this.timeline.addTween(cjs.Tween.get(instance_2Filter_1).to(new cjs.ColorFilter(0,0,0,1,225,2,65,0), 19).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 20).wait(1));

	// Calque_1
	this.instance_3 = new lib.back_btn();
	this.instance_3.setTransform(30.8,69.9,0.6995,0.6995,0,0,0,22,50);
	var instance_3Filter_2 = new cjs.ColorFilter(0,0,0,1,225,2,65,0);
	this.instance_3.filters = [instance_3Filter_2];
	this.instance_3.cache(-24,-52,48,104);
	new cjs.ButtonHelper(this.instance_3, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(40));
	this.timeline.addTween(cjs.Tween.get(instance_3Filter_2).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 19).to(new cjs.ColorFilter(0,0,0,1,225,2,65,0), 20).wait(1));

	this.filterCacheList = [];
	this.filterCacheList.push({instance: this.instance_2, startFrame:1, endFrame:19, x:-13, y:-34, w:26, h:68});
	this.filterCacheList.push({instance: this.instance_2, startFrame:0, endFrame:0, x:-13, y:-34, w:26, h:68});
	this.filterCacheList.push({instance: this.instance_2, startFrame:20, endFrame:39, x:-13, y:-34, w:26, h:68});
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
	props.labels = {slide0:0,slide1:29,slide2:59,slide3:89,slide4:119,slide5:149,slide6:179,slide7:209};
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
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(210));

	// navigation
	this.prevButton = new lib.NavigationButton();
	this.prevButton.name = "prevButton";
	this.prevButton.setTransform(855.15,505.35,1,1,0,0,180);
	this.prevButton.shadow = new cjs.Shadow("#000000",7,7,4);
	new cjs.ButtonHelper(this.prevButton, 0, 1, 1);

	this.nextButton = new lib.NavigationButton();
	this.nextButton.name = "nextButton";
	this.nextButton.setTransform(909.15,505.35);
	this.nextButton.shadow = new cjs.Shadow("#000000",7,7,4);
	new cjs.ButtonHelper(this.nextButton, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.nextButton},{t:this.prevButton}]}).wait(210));

	// slide7
	this.instance = new lib.Slide7();
	this.instance.setTransform(1434.65,264.6,1,1,0,0,0,477.7,257.7);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(179).to({_off:false},0).to({x:368.85},30,cjs.Ease.sineInOut).wait(1));

	// slide6
	this.instance_1 = new lib.Slide6();
	this.instance_1.setTransform(1434.65,264.6,1,1,0,0,0,477.7,257.7);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(149).to({_off:false},0).to({x:347.75},30,cjs.Ease.sineInOut).to({x:-302.05},30,cjs.Ease.sineInOut).wait(1));

	// slide5
	this.instance_2 = new lib.Slide5();
	this.instance_2.setTransform(1438.6,-57.8,1,1.0131,0,0,0,477.7,-57.6);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(119).to({_off:false},0).to({x:381.45},30,cjs.Ease.sineInOut).to({x:-306.45},30,cjs.Ease.sineInOut).to({_off:true},1).wait(30));

	// slide4
	this.instance_3 = new lib.Slide4();
	this.instance_3.setTransform(960,0);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(89).to({_off:false},0).to({x:-106.4},30,cjs.Ease.sineInOut).to({x:-779.75},30,cjs.Ease.sineInOut).to({_off:true},1).wait(60));

	// slide3
	this.instance_4 = new lib.Slide3();
	this.instance_4.setTransform(960,0);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(59).to({_off:false},0).to({x:-98.8},30,cjs.Ease.sineInOut).to({x:-743.4},30,cjs.Ease.sineInOut).to({_off:true},1).wait(90));

	// slide2
	this.instance_5 = new lib.Slide2();
	this.instance_5.setTransform(1006.75,-4);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(29).to({_off:false},0).to({x:-88.4,y:3.6},30,cjs.Ease.sineInOut).to({x:-739.6,y:0},30,cjs.Ease.sineInOut).to({_off:true},1).wait(120));

	// slide1
	this.instance_6 = new lib.Slide1();
	this.instance_6.setTransform(1006.6,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({x:-34.2},29,cjs.Ease.sineInOut).to({x:-766.2},30,cjs.Ease.sineInOut).to({_off:true},1).wait(150));

	// slide0
	this.instance_7 = new lib.Slide0();
	this.instance_7.setTransform(60.25,-61.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({x:-528.2,y:-60},29,cjs.Ease.sineInOut).to({_off:true},1).wait(180));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-790.2,-149,2905.1000000000004,818.9);


// stage content:
(lib.PJapanExpo = function(mode,startPosition,loop,reversed) {
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
		
		_this.back_btn_anim.on('mouseover', function () {
		
			_this.back_btn_anim.gotoAndPlay(1);
		});
		
		
		_this.back_btn_anim.on('mouseout', function () {
		
			_this.back_btn_anim.gotoAndPlay(21);
		});
		
		
		_this.back_btn_anim.on('click', function () {
		
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
	this.instance_2 = new lib.back_btn_anim();
	this.instance_2.setTransform(182.2,446.75,1,1,0,0,0,15.4,35);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.back_btn_anim = new lib.back_btn_anim();
	this.back_btn_anim.name = "back_btn_anim";
	this.back_btn_anim.setTransform(127.45,446.75,1,1,0,0,0,15.4,35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},59).to({state:[{t:this.instance_2}]},27).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.back_btn_anim}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(59).to({_off:false},0).to({x:124.7,alpha:1},27,cjs.Ease.quadIn).wait(1).to({x:126.25},0).wait(1).to({x:127.15},0).to({_off:true},1).wait(1));
	this.instance_2.addEventListener("tick", AdobeAn.handleFilterCache);
	this.back_btn_anim.addEventListener("tick", AdobeAn.handleFilterCache);

	// BG_anim
	this.instance_3 = new lib.freesh_bg_anim();
	this.instance_3.setTransform(479.95,269.95,1,1,0,0,0,-0.1,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(90));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(444.1,259,679.9999999999999,550.8);
// library properties:
lib.properties = {
	id: 'E78A8BD1F371D34F99BD5B8829C404FA',
	width: 960,
	height: 540,
	fps: 60,
	color: "#333333",
	opacity: 1.00,
	manifest: [
		{src:"images/FreeshBG.png", id:"FreeshBG"},
		{src:"images/JapanExpoFlyerInsidejpgcopy.png", id:"JapanExpoFlyerInsidejpgcopy"},
		{src:"images/JapanExpoFlyer.jpg", id:"JapanExpoFlyer"},
		{src:"images/JapanExpoInvitation.jpg", id:"JapanExpoInvitation"},
		{src:"images/Préposition17.jpg", id:"Préposition17"},
		{src:"images/Préposition18japonais.jpg", id:"Préposition18japonais"},
		{src:"images/Préposition5.jpg", id:"Préposition5"},
		{src:"images/Préposition7.jpg", id:"Préposition7"},
		{src:"images/Préposition8.jpg", id:"Préposition8"}
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
an.compositions['E78A8BD1F371D34F99BD5B8829C404FA'] = {
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