(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"P.MediPub_atlas_P_1", frames: [[0,0,960,540]]},
		{name:"P.MediPub_atlas_P_2", frames: [[0,0,960,540]]},
		{name:"P.MediPub_atlas_P_3", frames: [[0,0,960,540]]},
		{name:"P.MediPub_atlas_P_4", frames: [[0,0,960,540]]},
		{name:"P.MediPub_atlas_P_5", frames: [[0,0,960,540]]},
		{name:"P.MediPub_atlas_P_6", frames: [[0,0,960,540]]},
		{name:"P.MediPub_atlas_NP_1", frames: [[0,0,960,540]]},
		{name:"P.MediPub_atlas_NP_2", frames: [[0,0,960,540]]},
		{name:"P.MediPub_atlas_NP_3", frames: [[0,0,960,540]]},
		{name:"P.MediPub_atlas_NP_4", frames: [[0,0,960,540]]},
		{name:"P.MediPub_atlas_NP_5", frames: [[0,0,960,540]]},
		{name:"P.MediPub_atlas_NP_6", frames: [[0,0,960,540]]},
		{name:"P.MediPub_atlas_NP_7", frames: [[0,0,960,540]]}
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



(lib.أدبوايديولوجياBook = function() {
	this.initialize(ss["P.MediPub_atlas_NP_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.AcuaporBG = function() {
	this.initialize(img.AcuaporBG);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3500,2333);


(lib.AcuaporPantsLabel = function() {
	this.initialize(ss["P.MediPub_atlas_P_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.AcuaporPulle = function() {
	this.initialize(ss["P.MediPub_atlas_NP_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.AcuaporShirtLabel = function() {
	this.initialize(ss["P.MediPub_atlas_P_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.AcuaporShirtLogo = function() {
	this.initialize(ss["P.MediPub_atlas_P_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.AcuaporShirtP1 = function() {
	this.initialize(ss["P.MediPub_atlas_P_4"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.AcuaporShirtP2 = function() {
	this.initialize(ss["P.MediPub_atlas_P_5"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.AcuaporTop = function() {
	this.initialize(ss["P.MediPub_atlas_P_6"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.LivreLazerCouverture = function() {
	this.initialize(ss["P.MediPub_atlas_NP_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.LivreLesVirus = function() {
	this.initialize(ss["P.MediPub_atlas_NP_4"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.LivreréactionchimiqueCouverture = function() {
	this.initialize(ss["P.MediPub_atlas_NP_5"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.MultimediaPolimiqueLivreCouverture = function() {
	this.initialize(ss["P.MediPub_atlas_NP_6"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.PlanetMouchtariInsideBook = function() {
	this.initialize(ss["P.MediPub_atlas_NP_7"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();
// helper functions:

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


(lib.Slide12 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.أدبوايديولوجياBook();
	this.instance.setTransform(1.15,-60,1.1714,1.1678);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Slide12, new cjs.Rectangle(1.2,-60,1124.5,630.6), null);


(lib.Slide11 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.PlanetMouchtariInsideBook();
	this.instance.setTransform(3.15,-60,1.1693,1.1678);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Slide11, new cjs.Rectangle(3.2,-60,1122.5,630.6), null);


(lib.Slide10 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.MultimediaPolimiqueLivreCouverture();
	this.instance.setTransform(3.1,-60.05,1.1694,1.1678);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Slide10, new cjs.Rectangle(3.1,-60,1122.6000000000001,630.6), null);


(lib.Slide9 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.LivreréactionchimiqueCouverture();
	this.instance.setTransform(3.1,-59.9,1.1694,1.1675);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Slide9, new cjs.Rectangle(3.1,-59.9,1122.6000000000001,630.5), null);


(lib.Slide8 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.LivreLesVirus();
	this.instance.setTransform(1.15,-62,1.1714,1.1714);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Slide8, new cjs.Rectangle(1.2,-62,1124.5,632.6), null);


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
	this.instance = new lib.LivreLazerCouverture();
	this.instance.setTransform(1.15,-62,1.1714,1.1714);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Slide7, new cjs.Rectangle(1.2,-62,1124.5,632.6), null);


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
	this.instance.setTransform(-2.1,-61.5,1.1748,1.1747);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Slide6, new cjs.Rectangle(-2.1,-61.5,1127.8,634.4), null);


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
	this.instance.setTransform(154.7,-57.7,1.1691,1.169);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Slide5, new cjs.Rectangle(154.7,-57.7,1122.3,631.3000000000001), null);


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
	this.instance.setTransform(316.95,-43.9,1.1674,1.1723);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Slide4, new cjs.Rectangle(317,-43.9,1120.6,633.1), null);


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
	this.instance.setTransform(159.3,-41.7,1.1633,1.163);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Slide3, new cjs.Rectangle(159.3,-41.7,1116.8,628), null);


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
	this.instance.setTransform(2.35,-46.9,1.1633,1.1635);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Slide2, new cjs.Rectangle(2.4,-46.9,1116.6999999999998,628.3), null);


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
	this.instance.setTransform(1.95,-45.9,1.1405,1.1604);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Slide1, new cjs.Rectangle(2,-45.9,1094.8,626.6), null);


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

}).prototype = getMCSymbolPrototype(lib.Slide0, new cjs.Rectangle(-0.7,-59.6,307.2,172.8), null);


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
	this.instance.setTransform(-508.55,-315.35,0.3314,0.3314);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-508.5,-315.3,1159.9,773.2);


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
	this.shape.graphics.f("#BC7C4E").s().p("AjbH0IAAvnIG3AAIAAPng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.back_btn, new cjs.Rectangle(-22,-50,44,100), null);


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
	this.instance.shadow = new cjs.Shadow("#000000",7,7,10);
	var instanceFilter_1 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.instance.filters = [instanceFilter_1];
	this.instance.cache(-20,-17,40,35);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(40));
	this.timeline.addTween(cjs.Tween.get(instanceFilter_1).to(new cjs.ColorFilter(0,0,0,1,184,126,83,0), 19).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 20).wait(1));

	this.filterCacheList = [];
	this.filterCacheList.push({instance: this.instance, startFrame:1, endFrame:19, x:-20, y:-17, w:40, h:35});
	this.filterCacheList.push({instance: this.instance, startFrame:0, endFrame:0, x:-20, y:-17, w:40, h:35});
	this.filterCacheList.push({instance: this.instance, startFrame:20, endFrame:39, x:-20, y:-17, w:40, h:35});
	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8,-8,88,82);


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
	this.instance.shadow = new cjs.Shadow("#000000",7,7,10);
	var instanceFilter_1 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.instance.filters = [instanceFilter_1];
	this.instance.cache(-20,-17,40,35);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(40));
	this.timeline.addTween(cjs.Tween.get(instanceFilter_1).to(new cjs.ColorFilter(0,0,0,1,184,126,83,0), 19).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 20).wait(1));

	this.filterCacheList = [];
	this.filterCacheList.push({instance: this.instance, startFrame:1, endFrame:19, x:-20, y:-17, w:40, h:35});
	this.filterCacheList.push({instance: this.instance, startFrame:0, endFrame:0, x:-20, y:-17, w:40, h:35});
	this.filterCacheList.push({instance: this.instance, startFrame:20, endFrame:39, x:-20, y:-17, w:40, h:35});
	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8,-8,88,82);


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
	this.timeline.addTween(cjs.Tween.get(instance_2Filter_1).to(new cjs.ColorFilter(0,0,0,1,188,124,78,0), 19).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 20).wait(1));

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
	props.labels = {slide0:0,slide1:29,slide2:59,slide3:89,slide4:119,slide5:149,slide6:179,slide7:209,slide8:239,slide9:269,slide10:299,slide11:329,slide12:359};
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
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(360));

	// navigation
	this.prevButton = new lib.prevButton_anim();
	this.prevButton.name = "prevButton";
	this.prevButton.setTransform(855.1,505.35,1,1,0,0,0,18,15.3);

	this.nextButton = new lib.nextButton_anim();
	this.nextButton.name = "nextButton";
	this.nextButton.setTransform(909.15,505.35,1,1,0,0,0,18,15.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.nextButton},{t:this.prevButton}]}).wait(360));
	this.prevButton.addEventListener("tick", AdobeAn.handleFilterCache);
	this.nextButton.addEventListener("tick", AdobeAn.handleFilterCache);

	// slide12
	this.instance = new lib.Slide12();
	this.instance.setTransform(1565.8,260,1,1,0,0,0,563.4,255.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(329).to({_off:false},0).to({x:450.25},30,cjs.Ease.sineInOut).wait(1));

	// slide11
	this.instance_1 = new lib.Slide11();
	this.instance_1.setTransform(1586.8,260,1,1,0,0,0,564.4,255.3);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(299).to({_off:false},0).to({x:442.25},30,cjs.Ease.sineInOut).to({x:-113.55},30,cjs.Ease.sineInOut).wait(1));

	// slide10
	this.instance_2 = new lib.Slide10();
	this.instance_2.setTransform(1570.25,259.95,1,1,0,0,0,564.4,255.2);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(269).to({_off:false},0).to({x:464.25},30,cjs.Ease.sineInOut).to({x:-154.8},30,cjs.Ease.sineInOut).to({_off:true},1).wait(30));

	// slide9
	this.instance_3 = new lib.Slide9();
	this.instance_3.setTransform(1609.8,259.65,1,1,0,0,0,564.4,255.3);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(239).to({_off:false},0).to({x:446},30,cjs.Ease.sineInOut).to({x:-131.8},30,cjs.Ease.sineInOut).to({_off:true},1).wait(60));

	// slide8
	this.instance_4 = new lib.Slide8();
	this.instance_4.setTransform(1595.35,261.65,1,1,0,0,0,563.4,254.2);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(209).to({_off:false},0).to({x:486.6},30,cjs.Ease.sineInOut).to({x:-96.65},30,cjs.Ease.sineInOut).to({_off:true},1).wait(90));

	// slide7
	this.instance_5 = new lib.Slide7();
	this.instance_5.setTransform(1531.6,263.3,1,1,0,0,0,563.4,254.2);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(179).to({_off:false},0).to({x:469.6},30,cjs.Ease.sineInOut).to({x:-157.75},30,cjs.Ease.sineInOut).to({_off:true},1).wait(120));

	// slide6
	this.instance_6 = new lib.Slide6();
	this.instance_6.setTransform(1434.65,264.6,1,1,0,0,0,477.7,257.7);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(149).to({_off:false},0).to({x:360.35},30,cjs.Ease.sineInOut).to({x:-198.15},30,cjs.Ease.sineInOut).to({_off:true},1).wait(150));

	// slide5
	this.instance_7 = new lib.Slide5();
	this.instance_7.setTransform(1438.6,-50.2,1,1.0131,0,0,0,477.7,-57.6);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(119).to({_off:false},0).to({x:206.7,y:-57.8},30,cjs.Ease.sineInOut).to({x:-424.5},30,cjs.Ease.sineInOut).to({_off:true},1).wait(180));

	// slide4
	this.instance_8 = new lib.Slide4();
	this.instance_8.setTransform(791.1,0);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(89).to({_off:false},0).to({x:-470.1},30,cjs.Ease.sineInOut).to({x:-962.15},30,cjs.Ease.sineInOut).to({_off:true},1).wait(210));

	// slide3
	this.instance_9 = new lib.Slide3();
	this.instance_9.setTransform(960,0);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(59).to({_off:false},0).to({x:-167.8},30,cjs.Ease.sineInOut).to({x:-811.45},30,cjs.Ease.sineInOut).to({_off:true},1).wait(240));

	// slide2
	this.instance_10 = new lib.Slide2();
	this.instance_10.setTransform(960,0);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(29).to({_off:false},0).to({x:-83.6},30,cjs.Ease.sineInOut).to({x:-566.55},30,cjs.Ease.sineInOut).to({_off:true},1).wait(270));

	// slide1
	this.instance_11 = new lib.Slide1();
	this.instance_11.setTransform(960,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({x:-91.2},29,cjs.Ease.sineInOut).to({x:-630.6,y:0.65},30,cjs.Ease.sineInOut).to({_off:true},1).wait(300));

	// slide0
	this.instance_12 = new lib.Slide0();
	this.instance_12.setTransform(481.15,263.55,3.635,3.635,0,0,0,152.8,26.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({x:-197.35},29,cjs.Ease.sineInOut).to({_off:true},1).wait(330));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-755.3,-58,2993.2,647.2);


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

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:355.75},249,cjs.Ease.quadInOut).to({x:505.95},250,cjs.Ease.quadInOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-152.8,-89.3,1310.2,773.1999999999999);


// stage content:
(lib.PMediPub = function(mode,startPosition,loop,reversed) {
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

	// medipub_comp
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
p.nominalBounds = new cjs.Rectangle(477.6,164.7,679.9999999999999,503.2);
// library properties:
lib.properties = {
	id: '9805ACA12C03DE4C9EA2CF95CA7AB807',
	width: 960,
	height: 540,
	fps: 60,
	color: "#333333",
	opacity: 1.00,
	manifest: [
		{src:"images/AcuaporBG.png", id:"AcuaporBG"},
		{src:"images/P.MediPub_atlas_P_1.png", id:"P.MediPub_atlas_P_1"},
		{src:"images/P.MediPub_atlas_P_2.png", id:"P.MediPub_atlas_P_2"},
		{src:"images/P.MediPub_atlas_P_3.png", id:"P.MediPub_atlas_P_3"},
		{src:"images/P.MediPub_atlas_P_4.png", id:"P.MediPub_atlas_P_4"},
		{src:"images/P.MediPub_atlas_P_5.png", id:"P.MediPub_atlas_P_5"},
		{src:"images/P.MediPub_atlas_P_6.png", id:"P.MediPub_atlas_P_6"},
		{src:"images/P.MediPub_atlas_NP_1.jpg", id:"P.MediPub_atlas_NP_1"},
		{src:"images/P.MediPub_atlas_NP_2.jpg", id:"P.MediPub_atlas_NP_2"},
		{src:"images/P.MediPub_atlas_NP_3.jpg", id:"P.MediPub_atlas_NP_3"},
		{src:"images/P.MediPub_atlas_NP_4.jpg", id:"P.MediPub_atlas_NP_4"},
		{src:"images/P.MediPub_atlas_NP_5.jpg", id:"P.MediPub_atlas_NP_5"},
		{src:"images/P.MediPub_atlas_NP_6.jpg", id:"P.MediPub_atlas_NP_6"},
		{src:"images/P.MediPub_atlas_NP_7.jpg", id:"P.MediPub_atlas_NP_7"}
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