(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"main_menu_atlas_P_1", frames: [[0,0,860,869]]},
		{name:"main_menu_atlas_P_2", frames: [[0,0,860,869]]},
		{name:"main_menu_atlas_P_3", frames: [[0,0,860,869]]},
		{name:"main_menu_atlas_P_4", frames: [[0,0,596,842]]},
		{name:"main_menu_atlas_P_5", frames: [[329,236,76,145],[0,0,442,234],[0,236,188,207],[190,236,137,92]]}
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



(lib._1447624 = function() {
	this.initialize(img._1447624);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1200);


(lib.acceuil_icon = function() {
	this.initialize(ss["main_menu_atlas_P_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Accueil_element_6 = function() {
	this.initialize(img.Accueil_element_6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1608,2246);


(lib.Bitmap17 = function() {
	this.initialize(ss["main_menu_atlas_P_4"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Calque12 = function() {
	this.initialize(ss["main_menu_atlas_P_5"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Calque16copie = function() {
	this.initialize(ss["main_menu_atlas_P_5"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Calque3 = function() {
	this.initialize(ss["main_menu_atlas_P_5"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Calque6 = function() {
	this.initialize(ss["main_menu_atlas_P_5"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.cv_icon = function() {
	this.initialize(ss["main_menu_atlas_P_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CV_Mockuppngcopy = function() {
	this.initialize(img.CV_Mockuppngcopy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2480,3508);


(lib.Enveloppe = function() {
	this.initialize(img.Enveloppe);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1026,1442);


(lib.gallery_icon = function() {
	this.initialize(ss["main_menu_atlas_P_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Ipad_mockup = function() {
	this.initialize(img.Ipad_mockup);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2000,1484);// helper functions:

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


(lib.title_gallery = function(mode,startPosition,loop,reversed) {
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
	this.text = new cjs.Text("Ma Gallerie", "bold 34px 'Myriad Pro'", "#36302B");
	this.text.lineHeight = 41;
	this.text.lineWidth = 172;
	this.text.parent = this;
	this.text.setTransform(-61.35,-19.5);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.title_gallery, new cjs.Rectangle(-63.3,-21.5,176.3,43), null);


(lib.title_cv = function(mode,startPosition,loop,reversed) {
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
	this.text = new cjs.Text("Mon CV", "bold 34px 'Myriad Pro'", "#00A59D");
	this.text.lineHeight = 41;
	this.text.lineWidth = 123;
	this.text.parent = this;
	this.text.setTransform(-61.35,-19.5);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.title_cv, new cjs.Rectangle(-63.3,-21.5,126.69999999999999,43), null);


(lib.title_accueil = function(mode,startPosition,loop,reversed) {
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
	this.text = new cjs.Text("Accueil", "bold 34px 'Myriad Pro'", "#36302B");
	this.text.lineHeight = 41;
	this.text.lineWidth = 110;
	this.text.parent = this;
	this.text.setTransform(-61.35,-19.5);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.title_accueil, new cjs.Rectangle(-63.3,-21.5,114.3,43), null);


(lib.tablet = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Ipad_mockup();
	this.instance.setTransform(-474.9,-352.4,0.4749,0.4749);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.tablet, new cjs.Rectangle(-474.9,-352.4,949.8,704.8), null);


(lib.motivation_motion_bg = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("EgujBByMAAAiDjMBdHAAAMAAACDjg");
	this.shape.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.motivation_motion_bg, new cjs.Rectangle(-298,-420.9,596,841.9), null);


(lib.Interpoler64 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Calque6();
	this.instance.setTransform(-68.5,-46);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-68.5,-46,137,92);


(lib.Interpoler63 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Calque6();
	this.instance.setTransform(-68.5,-46);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-68.5,-46,137,92);


(lib.Interpoler62 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Calque12();
	this.instance.setTransform(-38,-72.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38,-72.5,76,145);


(lib.Interpoler61 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Calque12();
	this.instance.setTransform(-38,-72.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38,-72.5,76,145);


(lib.Interpoler60 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Calque3();
	this.instance.setTransform(-94,-103.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-94,-103.5,188,207);


(lib.Interpoler59 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Calque3();
	this.instance.setTransform(-94,-103.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-94,-103.5,188,207);


(lib.Interpoler58 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Calque16copie();
	this.instance.setTransform(-221,-117);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-221,-117,442,234);


(lib.Interpoler57 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Calque16copie();
	this.instance.setTransform(-221,-117);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-221,-117,442,234);


(lib.Interpoler56 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Accueil_element_6();
	this.instance.setTransform(-422.05,-245.2,0.3534,0.3534,-24.2423);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-422,-478.5,844.1,957.1);


(lib.Interpoler55 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Accueil_element_6();
	this.instance.setTransform(-422.05,-245.2,0.3534,0.3534,-24.2423);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-422,-478.5,844.1,957.1);


(lib.Interpoler50 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.acceuil_icon();
	this.instance.setTransform(-53.95,-54.5,0.1255,0.1255);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-53.9,-54.5,107.9,109);


(lib.Interpoler49 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.acceuil_icon();
	this.instance.setTransform(-53.95,-54.5,0.1255,0.1255);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-53.9,-54.5,107.9,109);


(lib.Interpoler48 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#ECC16D").s().p("A8PI7IAAx1MAwsAAAIAiAFQCqAeCBCBQCVCVARDNIAABnQgRDNiVCWQiVCUjLARg");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-180.7,-57.1,361.5,114.2);


(lib.Interpoler47 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#ECC16D").s().p("A8PI7IAAx1MAwsAAAIAiAFQCqAeCBCBQCVCVARDNIAABnQgRDNiVCWQiVCUjLARg");
	this.shape.setTransform(-0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-180.8,-57.1,361.6,114.2);


(lib.Interpoler42 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Enveloppe();
	this.instance.setTransform(-290.15,-407.8,0.5656,0.5656);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-290.1,-407.8,580.3,815.6);


(lib.Interpoler40 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#A09285").s().p("A8PI7IAAx1MAwsAAAIAiAFQCqAeCBCBQCVCVARDNIAABnQgRDNiVCWQiVCUjLARg");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-180.7,-57.1,361.5,114.2);


(lib.Interpoler39 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#A09285").s().p("A8PI7IAAx1MAwsAAAIAiAFQCqAeCBCBQCVCVARDNIAABnQgRDNiVCWQiVCUjLARg");
	this.shape.setTransform(-0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-180.8,-57.1,361.6,114.2);


(lib.Interpoler38 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.gallery_icon();
	this.instance.setTransform(-53.95,-54.5,0.1255,0.1255);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-53.9,-54.5,107.9,109);


(lib.Interpoler37 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.gallery_icon();
	this.instance.setTransform(-53.95,-54.5,0.1255,0.1255);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-53.9,-54.5,107.9,109);


(lib.Interpoler36 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#00A69E").s().p("A8PI7IAAx1MAwsAAAIAiAFQCqAeCBCBQCVCVARDNIAABnQgRDNiVCWQiVCUjLARg");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-180.7,-57.1,361.5,114.2);


(lib.Interpoler35 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#00A69E").s().p("A8PI7IAAx1MAwsAAAIAiAFQCqAeCBCBQCVCVARDNIAABnQgRDNiVCWQiVCUjLARg");
	this.shape.setTransform(-0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-180.8,-57.1,361.6,114.2);


(lib.Interpoler34 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.cv_icon();
	this.instance.setTransform(-53.95,-54.5,0.1255,0.1255);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-53.9,-54.5,107.9,109);


(lib.Interpoler33 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.cv_icon();
	this.instance.setTransform(-53.95,-54.5,0.1255,0.1255);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-53.9,-54.5,107.9,109);


(lib.home = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#ECC16D").s().p("A8PI7IAAx1MAwsAAAIAiAFQCqAeCBCBQCVCVARDNIAABnQgRDNiVCWQiVCUjLARg");
	this.shape.setTransform(-0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-180.8,-57.1,361.6,114.2);


(lib.gallery = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#A09285").s().p("A8PI7IAAx1MAwsAAAIAiAFQCqAeCBCBQCVCVARDNIAABnQgRDNiVCWQiVCUjLARg");
	this.shape.setTransform(-0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-180.8,-57.1,361.6,114.2);


(lib.cv_trigger_btn = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#00A69E").s().p("A8PI7IAAx1MAwsAAAIAiAFQCqAeCBCBQCVCVARDNIAABnQgRDNiVCWQiVCUjLARg");
	this.shape.setTransform(-0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-180.8,-57.1,361.6,114.2);


(lib.cv_paper = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CV_Mockuppngcopy();
	this.instance.setTransform(-286,-404,0.2306,0.2306);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-286,-404,572,809);


(lib.bg = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib._1447624();
	this.instance.setTransform(-37,-21,0.7501,0.6747);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(-37,-21,1440.1,809.7), null);


(lib.motivation_paper = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Bitmap17();
	this.instance.setTransform(-298,-421);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Calque_2
	this.instance_1 = new lib.motivation_motion_bg();
	this.instance_1.shadow = new cjs.Shadow("#000000",7,7,10);
	this.instance_1.cache(-300,-423,600,846);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.motivation_paper, new cjs.Rectangle(-302,-424.9,622,867), null);


(lib.home_btn = function(mode,startPosition,loop,reversed) {
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
		stage.enableMouseOver();
		
		
		
		var _this = this;
		
		
		_this.home_trigger_btn.on('mouseover', function(){
		
		_this.gotoAndPlay(1);
		});
		
		
		
		_this.home_trigger_btn.on('mouseout', function(){
		
		_this.gotoAndPlay(30);
		});
		
		
		
		_this.home_trigger_btn.on('click', function(){
		
		window.open('index.html', '_self');
		});
	}
	this.frame_29 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(29).call(this.frame_29).wait(31));

	// home_trigger_btn
	this.home_trigger_btn = new lib.home();
	this.home_trigger_btn.name = "home_trigger_btn";
	this.home_trigger_btn.setTransform(-118.4,0);
	this.home_trigger_btn.alpha = 0.0117;
	new cjs.ButtonHelper(this.home_trigger_btn, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.home_trigger_btn).to({x:18.45},29,cjs.Ease.quintOut).to({x:-118.4},30,cjs.Ease.quintOut).wait(1));

	// home_icon
	this.instance = new lib.Interpoler49("synched",0);

	this.instance_1 = new lib.Interpoler50("synched",0);
	this.instance_1.setTransform(136.95,-0.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,x:136.95,y:-0.5},29,cjs.Ease.quintOut).to({_off:false,x:0,y:0},30,cjs.Ease.quintOut).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},29,cjs.Ease.quintOut).to({_off:true,x:0,y:0},30,cjs.Ease.quintOut).wait(1));

	// home_bg
	this.instance_2 = new lib.Interpoler47();
	this.instance_2.setTransform(-118.1,0);
	this.instance_2.shadow = new cjs.Shadow("#000000",3,3,4);

	this.instance_3 = new lib.Interpoler48();
	this.instance_3.setTransform(18.4,0);
	this.instance_3.shadow = new cjs.Shadow("#000000",3,3,4);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true,x:18.4},29,cjs.Ease.quintOut).to({_off:false,x:-118.1},30,cjs.Ease.quintOut).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:false},29,cjs.Ease.quintOut).to({_off:true,x:-118.1},30,cjs.Ease.quintOut).wait(1));

	// title
	this.instance_4 = new lib.title_accueil();
	this.instance_4.setTransform(-91.45,1.85);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:311.35,y:7.5},29,cjs.Ease.quintOut).to({x:-11.4,y:1.85},30,cjs.Ease.quintOut).wait(1));

	// bg_title
	this.instance_5 = new lib.Interpoler35();
	this.instance_5.setTransform(-119.6,0);
	this.instance_5.shadow = new cjs.Shadow("#000000",3,3,4);
	var instance_5Filter_1 = new cjs.ColorFilter(0,0,0,1,236,193,109,0);
	this.instance_5.filters = [instance_5Filter_1];
	this.instance_5.cache(-183,-59,366,118);

	this.instance_6 = new lib.Interpoler36();
	this.instance_6.setTransform(236.45,0);
	this.instance_6.shadow = new cjs.Shadow("#000000",3,3,4);
	this.instance_6._off = true;
	var instance_6Filter_2 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.instance_6.filters = [instance_6Filter_2];
	this.instance_6.cache(-183,-59,366,118);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:true,x:236.45},29,cjs.Ease.quintOut).to({_off:false,x:-117},30,cjs.Ease.quintOut).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({_off:false},29,cjs.Ease.quintOut).to({_off:true,x:-117},30,cjs.Ease.quintOut).wait(1));
	this.timeline.addTween(cjs.Tween.get(instance_5Filter_1).to(new cjs.ColorFilter(0,0,0,1,255,255,204,0), 29,cjs.Ease.quintOut).to(new cjs.ColorFilter(0,0,0,1,234,214,195,0), 30).wait(1));
	this.timeline.addTween(cjs.Tween.get(instance_6Filter_2).to(new cjs.ColorFilter(0,0,0,1,255,255,204,0), 29).to(new cjs.ColorFilter(0,0,0,1,234,214,195,0), 30,cjs.Ease.quintOut).wait(1));

	// lunette
	this.instance_7 = new lib.Interpoler57("synched",0);
	this.instance_7.setTransform(895,-690.1,1,1,-8.2121);

	this.instance_8 = new lib.Interpoler58("synched",0);
	this.instance_8.setTransform(895,-509);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({_off:true,rotation:0,y:-509},29,cjs.Ease.quintOut).to({_off:false,rotation:-8.2121,y:-690.1},30,cjs.Ease.quintOut).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({_off:false},29,cjs.Ease.quintOut).to({_off:true,rotation:-8.2121,y:-690.1},30,cjs.Ease.quintOut).wait(1));

	// charger
	this.instance_9 = new lib.Interpoler59("synched",0);
	this.instance_9.setTransform(1162,-690.6);

	this.instance_10 = new lib.Interpoler60("synched",0);
	this.instance_10.setTransform(1125.25,-31.45,1,1,-38.7375);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({_off:true,rotation:-38.7375,x:1125.25,y:-31.45},29,cjs.Ease.quintOut).to({_off:false,rotation:0,x:1162,y:-690.6},30,cjs.Ease.quintOut).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({_off:false},29,cjs.Ease.quintOut).to({_off:true,rotation:0,x:1162,y:-690.6},30,cjs.Ease.quintOut).wait(1));

	// right_speaker
	this.instance_11 = new lib.Interpoler63("synched",0);
	this.instance_11.setTransform(999.5,-628.75);

	this.instance_12 = new lib.Interpoler64("synched",0);
	this.instance_12.setTransform(968.5,-141.6,1,1,14.9992);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({_off:true,rotation:14.9992,x:968.5,y:-141.6},29,cjs.Ease.quintOut).to({_off:false,rotation:0,x:999.5,y:-628.75},30,cjs.Ease.quintOut).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({_off:false},29,cjs.Ease.quintOut).to({_off:true,rotation:0,x:999.5,y:-628.75},30,cjs.Ease.quintOut).wait(1));

	// left_speaker
	this.instance_13 = new lib.Interpoler61("synched",0);
	this.instance_13.setTransform(900,-622.9);

	this.instance_14 = new lib.Interpoler62("synched",0);
	this.instance_14.setTransform(844.35,-187.5,1,1,-14.9992);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({_off:true,rotation:-14.9992,x:844.35,y:-187.5},29,cjs.Ease.quintOut).to({_off:false,rotation:0,x:900,y:-622.9},30,cjs.Ease.quintOut).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({_off:false},29,cjs.Ease.quintOut).to({_off:true,rotation:0,x:900,y:-622.9},30,cjs.Ease.quintOut).wait(1));

	// note
	this.instance_15 = new lib.Interpoler55("synched",0);
	this.instance_15.setTransform(968.15,-1031.45,0.9478,0.9477);

	this.instance_16 = new lib.Interpoler56("synched",0);
	this.instance_16.setTransform(968.25,-143.95,0.8236,0.8236,17.4913,0,0,0.1,-0.2);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).to({_off:true,regX:0.1,regY:-0.2,scaleX:0.8236,scaleY:0.8236,rotation:17.4913,x:968.25,y:-143.95},29,cjs.Ease.quintOut).to({_off:false,regX:0,regY:0,scaleX:0.9478,scaleY:0.9477,rotation:0,x:968.15,y:-1031.45},30,cjs.Ease.quintOut).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_16).to({_off:false},29,cjs.Ease.quintOut).to({_off:true,regX:0,regY:0,scaleX:0.9478,scaleY:0.9477,rotation:0,x:968.15,y:-1031.45},30,cjs.Ease.quintOut).wait(1));

	this.filterCacheList = [];
	this.filterCacheList.push({instance: this.instance_5, startFrame:1, endFrame:29, x:-183, y:-59, w:366, h:118});
	this.filterCacheList.push({instance: this.instance_5, startFrame:0, endFrame:0, x:-183, y:-59, w:366, h:118});
	this.filterCacheList.push({instance: this.instance_5, startFrame:30, endFrame:59, x:-183, y:-59, w:366, h:118});
	this.filterCacheList.push({instance: this.instance_6, startFrame:1, endFrame:29, x:-183, y:-59, w:366, h:118});
	this.filterCacheList.push({instance: this.instance_6, startFrame:0, endFrame:0, x:-183, y:-59, w:366, h:118});
	this.filterCacheList.push({instance: this.instance_6, startFrame:30, endFrame:59, x:-183, y:-59, w:366, h:118});
	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-306.4,-1484.9,1674.5,1693.3000000000002);


(lib.gallery_btn = function(mode,startPosition,loop,reversed) {
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
		stage.enableMouseOver();
		
		
		
		var _this = this;
		
		
		_this.gallery_trigger_btn.on('mouseover', function(){
		
		_this.gotoAndPlay(1);
		});
		
		
		
		_this.gallery_trigger_btn.on('mouseout', function(){
		
		_this.gotoAndPlay(30);
		});
		
		
		
		_this.gallery_trigger_btn.on('click', function(){
		
		window.open('gallery_menu.html', '_self');
		});
	}
	this.frame_29 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(29).call(this.frame_29).wait(31));

	// gallery_trigger_btn
	this.gallery_trigger_btn = new lib.gallery();
	this.gallery_trigger_btn.name = "gallery_trigger_btn";
	this.gallery_trigger_btn.setTransform(-118.1,0);
	this.gallery_trigger_btn.alpha = 0.0117;
	new cjs.ButtonHelper(this.gallery_trigger_btn, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.gallery_trigger_btn).to({x:16.7,y:-0.15},29,cjs.Ease.quintOut).to({x:-118.1,y:0},30,cjs.Ease.quintOut).wait(1));

	// gallery_icon
	this.instance = new lib.Interpoler37("synched",0);

	this.instance_1 = new lib.Interpoler38("synched",0);
	this.instance_1.setTransform(134.95,-0.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,x:134.95,y:-0.5},29,cjs.Ease.quintOut).to({_off:false,x:0,y:0},30,cjs.Ease.quintOut).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},29,cjs.Ease.quintOut).to({_off:true,x:0,y:0},30,cjs.Ease.quintOut).wait(1));

	// bg
	this.instance_2 = new lib.Interpoler39();
	this.instance_2.setTransform(-118.1,0);
	this.instance_2.shadow = new cjs.Shadow("#000000",3,3,4);

	this.instance_3 = new lib.Interpoler40();
	this.instance_3.setTransform(16.2,0);
	this.instance_3.shadow = new cjs.Shadow("#000000",3,3,4);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true,x:16.2},29,cjs.Ease.quintOut).to({_off:false,x:-118.1},30,cjs.Ease.quintOut).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:false},29,cjs.Ease.quintOut).to({_off:true,x:-118.1},30,cjs.Ease.quintOut).wait(1));

	// title
	this.instance_4 = new lib.title_gallery();
	this.instance_4.setTransform(-90.05,1.85);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:280.2,y:4.25},29,cjs.Ease.quintOut).to({x:-80.2,y:1.85},30,cjs.Ease.quintOut).wait(1));

	// bg_title
	this.instance_5 = new lib.Interpoler35();
	this.instance_5.setTransform(-118.2,0);
	this.instance_5.shadow = new cjs.Shadow("#000000",3,3,4);
	var instance_5Filter_1 = new cjs.ColorFilter(0,0,0,1,234,214,195,0);
	this.instance_5.filters = [instance_5Filter_1];
	this.instance_5.cache(-183,-59,366,118);

	this.instance_6 = new lib.Interpoler36();
	this.instance_6.setTransform(236.45,0);
	this.instance_6.shadow = new cjs.Shadow("#000000",3,3,4);
	this.instance_6._off = true;
	var instance_6Filter_2 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.instance_6.filters = [instance_6Filter_2];
	this.instance_6.cache(-183,-59,366,118);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:true,x:236.45},29,cjs.Ease.quintOut).to({_off:false,x:-120},30,cjs.Ease.quintOut).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({_off:false},29,cjs.Ease.quintOut).to({_off:true,x:-120},30,cjs.Ease.quintOut).wait(1));
	this.timeline.addTween(cjs.Tween.get(instance_5Filter_1).wait(31));
	this.timeline.addTween(cjs.Tween.get(instance_6Filter_2).to(new cjs.ColorFilter(0,0,0,1,234,214,195,0), 29).wait(1));

	// tablet
	this.instance_7 = new lib.tablet();
	this.instance_7.setTransform(1984.3,-27.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({x:962.9},29,cjs.Ease.quintOut).to({x:1984.3},30,cjs.Ease.quintOut).wait(1));

	this.filterCacheList = [];
	this.filterCacheList.push({instance: this.instance_5, startFrame:1, endFrame:29, x:-183, y:-59, w:366, h:118});
	this.filterCacheList.push({instance: this.instance_6, startFrame:1, endFrame:29, x:-183, y:-59, w:366, h:118});
	this.filterCacheList.push({instance: this.instance_6, startFrame:0, endFrame:0, x:-183, y:-59, w:366, h:118});
	this.filterCacheList.push({instance: this.instance_6, startFrame:30, endFrame:59, x:-183, y:-59, w:366, h:118});
	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-306.8,-380,2766,704.8);


(lib.enveloppe = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Interpoler42("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.enveloppe, new cjs.Rectangle(-290.1,-407.8,580.3,815.6), null);


(lib.cv_btn = function(mode,startPosition,loop,reversed) {
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
		stage.enableMouseOver();
		
		
		var _this = this;
		
		_this.cv_trigger_btn.on('mouseover', function(){
		
		_this.gotoAndPlay(1);
		});
		
		
		
		_this.cv_trigger_btn.on('mouseout', function(){
		
		_this.gotoAndPlay(30);
		});
		
		
		
		_this.cv_trigger_btn.on('click', function(){
		
		window.open('cv.html', '_self');
		});
	}
	this.frame_29 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(29).call(this.frame_29).wait(31));

	// cv_trigger_btn
	this.cv_trigger_btn = new lib.cv_trigger_btn();
	this.cv_trigger_btn.name = "cv_trigger_btn";
	this.cv_trigger_btn.setTransform(-117.8,-0.3);
	this.cv_trigger_btn.alpha = 0.0117;
	new cjs.ButtonHelper(this.cv_trigger_btn, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.cv_trigger_btn).to({x:18.75,y:0},29,cjs.Ease.quintOut).to({x:-117.8,y:-0.3},30,cjs.Ease.quintOut).wait(1));

	// cv_icon
	this.instance = new lib.Interpoler33("synched",0);
	this.instance.setTransform(-2.05,-0.5);

	this.instance_1 = new lib.Interpoler34("synched",0);
	this.instance_1.setTransform(134.95,-0.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,x:134.95},29,cjs.Ease.quintOut).to({_off:false,x:-2.05},30,cjs.Ease.quintOut).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},29,cjs.Ease.quintOut).to({_off:true,x:-2.05},30,cjs.Ease.quintOut).wait(1));

	// bg
	this.instance_2 = new lib.Interpoler35();
	this.instance_2.setTransform(-118.1,0);
	this.instance_2.shadow = new cjs.Shadow("#000000",3,3,4);

	this.instance_3 = new lib.Interpoler36();
	this.instance_3.setTransform(18.7,0);
	this.instance_3.shadow = new cjs.Shadow("#000000",3,3,4);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true,x:18.7},29,cjs.Ease.quintOut).to({_off:false,x:-118.1},30,cjs.Ease.quintOut).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:false},29,cjs.Ease.quintOut).to({_off:true,x:-118.1},30,cjs.Ease.quintOut).wait(1));

	// title
	this.instance_4 = new lib.title_cv();
	this.instance_4.setTransform(-14.1,1.85);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:309.55,y:3.45},29,cjs.Ease.quintOut).to({x:-14.4,y:1.85},30,cjs.Ease.quintOut).wait(1));

	// bg_title
	this.instance_5 = new lib.Interpoler35();
	this.instance_5.setTransform(-119.7,0);
	this.instance_5.shadow = new cjs.Shadow("#000000",3,3,4);
	var instance_5Filter_1 = new cjs.ColorFilter(0.3,0.3,0.3,1,178.5,178.5,178.5,0);
	this.instance_5.filters = [instance_5Filter_1];
	this.instance_5.cache(-183,-59,366,118);

	this.instance_6 = new lib.Interpoler36();
	this.instance_6.setTransform(236.45,0);
	this.instance_6.shadow = new cjs.Shadow("#000000",3,3,4);
	this.instance_6._off = true;
	var instance_6Filter_2 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.instance_6.filters = [instance_6Filter_2];
	this.instance_6.cache(-183,-59,366,118);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:true,x:236.45},29,cjs.Ease.quintOut).to({_off:false,x:-120},30,cjs.Ease.quintOut).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({_off:false},29,cjs.Ease.quintOut).to({_off:true,x:-120},30,cjs.Ease.quintOut).wait(1));
	this.timeline.addTween(cjs.Tween.get(instance_5Filter_1).wait(31));
	this.timeline.addTween(cjs.Tween.get(instance_6Filter_2).to(new cjs.ColorFilter(0.3,0.3,0.3,1,178.5,178.5,178.5,0), 29).wait(1));

	// enveloppe
	this.instance_7 = new lib.enveloppe();
	this.instance_7.setTransform(967.55,995.55);
	this.instance_7.shadow = new cjs.Shadow("#000000",3,3,4);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({y:1022.05},18,cjs.Ease.quintOut).wait(23).to({y:995.55},18,cjs.Ease.quintOut).wait(1));

	// cv_paper
	this.instance_8 = new lib.cv_paper();
	this.instance_8.setTransform(966.5,976.05);
	this.instance_8.shadow = new cjs.Shadow("#000000",3,3,4);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({y:167.25},18,cjs.Ease.quintOut).wait(23).to({y:976.05},18,cjs.Ease.quintOut).wait(1));

	// motivation_lettre
	this.instance_9 = new lib.motivation_paper();
	this.instance_9.setTransform(969.3,171.25,0.938,0.938);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(18).to({_off:false},0).to({x:996.75},13,cjs.Ease.quintOut).to({x:969.3},10,cjs.Ease.quintOut).to({_off:true},1).wait(18));

	this.filterCacheList = [];
	this.filterCacheList.push({instance: this.instance_5, startFrame:1, endFrame:29, x:-183, y:-59, w:366, h:118});
	this.filterCacheList.push({instance: this.instance_6, startFrame:1, endFrame:29, x:-183, y:-59, w:366, h:118});
	this.filterCacheList.push({instance: this.instance_6, startFrame:0, endFrame:0, x:-183, y:-59, w:366, h:118});
	this.filterCacheList.push({instance: this.instance_6, startFrame:30, endFrame:59, x:-183, y:-59, w:366, h:118});
	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-306.8,-242.7,1605.1,1694);


(lib.cv_scene = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// CV
	this.cv_btn_anim = new lib.cv_btn();
	this.cv_btn_anim.name = "cv_btn_anim";
	this.cv_btn_anim.setTransform(-625.4,-133.8,0.8191,0.8191);

	this.timeline.addTween(cjs.Tween.get(this.cv_btn_anim).wait(1));
	this.cv_btn_anim.addEventListener("tick", AdobeAn.handleFilterCache);

	// Gallery
	this.gallery_btn_anim = new lib.gallery_btn();
	this.gallery_btn_anim.name = "gallery_btn_anim";
	this.gallery_btn_anim.setTransform(-625.4,-8.5,0.8191,0.8191);

	this.timeline.addTween(cjs.Tween.get(this.gallery_btn_anim).wait(1));
	this.gallery_btn_anim.addEventListener("tick", AdobeAn.handleFilterCache);

	// Home
	this.home_btn_anim = new lib.home_btn();
	this.home_btn_anim.name = "home_btn_anim";
	this.home_btn_anim.setTransform(-625.4,116.8,0.8191,0.8191);

	this.timeline.addTween(cjs.Tween.get(this.home_btn_anim).wait(1));
	this.home_btn_anim.addEventListener("tick", AdobeAn.handleFilterCache);

	// bg
	this.instance = new lib.bg();
	this.instance.setTransform(0,0,1,1,0,0,0,683,384);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cv_scene, new cjs.Rectangle(-874.5,-1099.5,2263.5,2126.1), null);


// stage content:
(lib.main_menu = function(mode,startPosition,loop,reversed) {
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
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// small_menu_page
	this.selection_scene = new lib.cv_scene();
	this.selection_scene.name = "selection_scene";
	this.selection_scene.setTransform(479.95,269.85,0.7028,0.7028);

	this.timeline.addTween(cjs.Tween.get(this.selection_scene).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(344.4,-233.4,1111.6999999999998,1227.5);
// library properties:
lib.properties = {
	id: 'EA59E15999B96C4DA166369D3E7D0BDF',
	width: 960,
	height: 539,
	fps: 60,
	color: "#333333",
	opacity: 1.00,
	manifest: [
		{src:"images/_1447624.jpg?1690893729761", id:"_1447624"},
		{src:"images/Accueil_element_6.png?1690893729761", id:"Accueil_element_6"},
		{src:"images/CV_Mockuppngcopy.png?1690893729761", id:"CV_Mockuppngcopy"},
		{src:"images/Enveloppe.png?1690893729761", id:"Enveloppe"},
		{src:"images/Ipad_mockup.png?1690893729761", id:"Ipad_mockup"},
		{src:"images/main_menu_atlas_P_1.png?1690893729664", id:"main_menu_atlas_P_1"},
		{src:"images/main_menu_atlas_P_2.png?1690893729664", id:"main_menu_atlas_P_2"},
		{src:"images/main_menu_atlas_P_3.png?1690893729664", id:"main_menu_atlas_P_3"},
		{src:"images/main_menu_atlas_P_4.png?1690893729664", id:"main_menu_atlas_P_4"},
		{src:"images/main_menu_atlas_P_5.png?1690893729664", id:"main_menu_atlas_P_5"}
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
an.compositions['EA59E15999B96C4DA166369D3E7D0BDF'] = {
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