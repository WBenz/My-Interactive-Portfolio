(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"P. mc_atlas_P_1", frames: [[0,0,960,540]]},
		{name:"P. mc_atlas_P_2", frames: [[0,0,960,540]]},
		{name:"P. mc_atlas_P_3", frames: [[0,0,960,540]]},
		{name:"P. mc_atlas_P_4", frames: [[0,0,960,540]]}
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
	this.initialize(ss["P. mc_atlas_P_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.MacbethAffiche2 = function() {
	this.initialize(ss["P. mc_atlas_P_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.MacbethAffiche = function() {
	this.initialize(img.MacbethAffiche);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.MACBETHBillet = function() {
	this.initialize(ss["P. mc_atlas_P_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.MACBETHInvitation = function() {
	this.initialize(ss["P. mc_atlas_P_4"]);
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
	this.instance = new lib.MACBETHInvitation();
	this.instance.setTransform(-332,-266,0.691,0.6997);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-332,-266,663.4,377.9);


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
	this.instance = new lib.MACBETHBillet();
	this.instance.setTransform(-390,-254,0.8639,0.8686);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-390,-254,829.3,469.1);


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
	this.instance = new lib.MacbethAffiche();
	this.instance.setTransform(-390,-242,0.8639,0.8445);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-390,-242,1658.6,912);


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
	this.instance = new lib.MacbethAffiche2();
	this.instance.setTransform(-395,-242);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-395,-242,960,540);


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
	this.shape.graphics.f("#315857").s().p("AjbH0IAAvnIG3AAIAAPng");

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
	this.instance.setTransform(-580,-326,1.2083,1.2084);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.astrolabe_bg, new cjs.Rectangle(-580,-326,1160,652.5), null);


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
	this.instance = new lib.MACBETHInvitation();
	this.instance.setTransform(-102,-65,0.2556,0.2687);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-102,-65,245.4,145.1);


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
	this.instance = new lib.MACBETHBillet();
	this.instance.setTransform(-100,-64,0.2537,0.2661);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100,-64,243.6,143.7);


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
	this.instance = new lib.MacbethAffiche();
	this.instance.setTransform(-153,-98,0.4583,0.4815);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-153,-98,879.9,520);


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
	this.instance = new lib.MacbethAffiche2();
	this.instance.setTransform(-234,-150,0.5933,0.6223);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-234,-150,569.6,336);


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
	this.instance.shadow = new cjs.Shadow("#000000",7,7,10);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(24).to({_off:false},0).to({scaleX:1.2348,scaleY:1.205,alpha:0.5},60,cjs.Ease.quadInOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-399.1,-245,816,508);


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
	this.timeline.addTween(cjs.Tween.get(instance_2Filter_1).wait(114).to(new cjs.ColorFilter(0,0,0,1,49,88,87,0), 20).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 20).wait(1));

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

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(29).call(this.frame_29).wait(30).call(this.frame_59).wait(30).call(this.frame_89).wait(30).call(this.frame_119).wait(1));

	// pic04
	this.instance = new lib.Interpoler9("synched",0);
	this.instance.setTransform(0.45,708.85,1.4104,1.5945);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(90).to({_off:false},0).to({y:122.9,alpha:1},29,cjs.Ease.quadInOut).wait(1));

	// pic03
	this.instance_1 = new lib.Interpoler7("synched",0);
	this.instance_1.setTransform(-27.8,574.5,1.1283,1.1692,0,0,0,0,0.1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(60).to({_off:false},0).to({y:22.85,alpha:1},29,cjs.Ease.quadInOut).to({_off:true},1).wait(30));

	// pic02
	this.instance_2 = new lib.Interpoler6("synched",0);
	this.instance_2.setTransform(-275.25,554.4,0.5642,0.5669,0,0,0,-48.6,-37.6);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(30).to({_off:false},0).to({y:-142.6,alpha:1},29,cjs.Ease.quadInOut).to({_off:true},1).wait(60));

	// pic01
	this.instance_3 = new lib.Interpoler3("synched",0);
	this.instance_3.setTransform(-82.85,556.5,0.9747,0.9565);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:-26.75,alpha:1},29,cjs.Ease.quadInOut).to({_off:true},1).wait(90));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-467.8,-301.2,935.7,1256.8);


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
	this.instance.cache(-104,-67,249,149);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({y:0.05},60,cjs.Ease.quintInOut).wait(31));
	this.timeline.addTween(cjs.Tween.get(instanceFilter_1).wait(74).to(new cjs.ColorFilter(0.75,0.75,0.75,1,63.75,63.75,63.75,0), 15,cjs.Ease.quintInOut).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 15,cjs.Ease.quintInOut).wait(1));

	this.filterCacheList = [];
	this.filterCacheList.push({instance: this.instance, startFrame:75, endFrame:89, x:-104, y:-67, w:249, h:149});
	this.filterCacheList.push({instance: this.instance, startFrame:90, endFrame:104, x:-104, y:-67, w:249, h:149});
	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50,-32.1,121.5,302.3);


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
	this.instance.cache(-102,-66,248,148);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({y:-0.05},60,cjs.Ease.quintInOut).wait(31));
	this.timeline.addTween(cjs.Tween.get(instanceFilter_1).wait(69).to(new cjs.ColorFilter(0.75,0.75,0.75,1,63.75,63.75,63.75,0), 15,cjs.Ease.quintInOut).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 15,cjs.Ease.quintInOut).wait(1));

	this.filterCacheList = [];
	this.filterCacheList.push({instance: this.instance, startFrame:70, endFrame:84, x:-102, y:-66, w:248, h:148});
	this.filterCacheList.push({instance: this.instance, startFrame:85, endFrame:99, x:-102, y:-66, w:248, h:148});
	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50,-32.1,122,306);


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
	this.instance.setTransform(-7.7,461,0.2762,0.2762,0,0,0,0.2,0);
	var instanceFilter_1 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.instance.filters = [instanceFilter_1];
	this.instance.cache(-155,-100,884,524);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({y:-5.05},60,cjs.Ease.quintInOut).wait(31));
	this.timeline.addTween(cjs.Tween.get(instanceFilter_1).wait(64).to(new cjs.ColorFilter(0.75,0.75,0.75,1,63.75,63.75,63.75,0), 15,cjs.Ease.quintInOut).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 15,cjs.Ease.quintInOut).wait(1));

	this.filterCacheList = [];
	this.filterCacheList.push({instance: this.instance, startFrame:65, endFrame:79, x:-155, y:-100, w:884, h:524});
	this.filterCacheList.push({instance: this.instance, startFrame:80, endFrame:94, x:-155, y:-100, w:884, h:524});
	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50,-32.1,243.1,609.7);


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
	this.instance.setTransform(0,232.4,0.2133,0.2132,0,0,0,0,1);
	var instanceFilter_1 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.instance.filters = [instanceFilter_1];
	this.instance.cache(-236,-152,574,340);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:0.05},59,cjs.Ease.quintInOut).wait(31));
	this.timeline.addTween(cjs.Tween.get(instanceFilter_1).wait(59).to(new cjs.ColorFilter(0.75,0.75,0.75,1,63.75,63.75,63.75,0), 15,cjs.Ease.quintInOut).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 15,cjs.Ease.quintInOut).wait(1));

	this.filterCacheList = [];
	this.filterCacheList.push({instance: this.instance, startFrame:60, endFrame:74, x:-236, y:-152, w:574, h:340});
	this.filterCacheList.push({instance: this.instance, startFrame:75, endFrame:89, x:-236, y:-152, w:574, h:340});
	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.9,-32.1,121.5,304);


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
p.nominalBounds = new cjs.Rectangle(-185.1,-56.3,1337.1,652.5);


// stage content:
(lib.PMC = function(mode,startPosition,loop,reversed) {
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
	this.astro_btn04 = new lib.astro_btn04_anim();
	this.astro_btn04.name = "astro_btn04";
	this.astro_btn04.setTransform(609.3,469.65,0.6781,0.6781,0,0,0,0.1,0.1);
	this.astro_btn04.shadow = new cjs.Shadow("rgba(0,0,0,1)",7,7,10);

	this.astro_btn03 = new lib.astro_btn03_anim();
	this.astro_btn03.name = "astro_btn03";
	this.astro_btn03.setTransform(518.9,469.45,0.6766,0.677);
	this.astro_btn03.shadow = new cjs.Shadow("rgba(0,0,0,1)",7,7,10);

	this.astro_btn02 = new lib.astro_btn02_anim();
	this.astro_btn02.name = "astro_btn02";
	this.astro_btn02.setTransform(411.9,459.55,0.3397,0.3394,0,0,0,0.1,0);
	this.astro_btn02.shadow = new cjs.Shadow("rgba(0,0,0,1)",7,7,10);

	this.astro_btn01 = new lib.astro_btn01_anim();
	this.astro_btn01.name = "astro_btn01";
	this.astro_btn01.setTransform(114.95,790.4,0.6781,0.6778,0,0,0,-329.9,472.1);
	this.astro_btn01.shadow = new cjs.Shadow("rgba(0,0,0,1)",7,7,10);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.astro_btn01},{t:this.astro_btn02},{t:this.astro_btn03},{t:this.astro_btn04}]}).wait(1));
	this.astro_btn04.addEventListener("tick", AdobeAn.handleFilterCache);
	this.astro_btn03.addEventListener("tick", AdobeAn.handleFilterCache);
	this.astro_btn02.addEventListener("tick", AdobeAn.handleFilterCache);
	this.astro_btn01.addEventListener("tick", AdobeAn.handleFilterCache);

	// Calque_7 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Eg15AnLMAAAhIUMB53AAAMAAABIUg");
	mask.setTransform(435,250.7331);

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
p.nominalBounds = new cjs.Rectangle(449,213.7,680,464.09999999999997);
// library properties:
lib.properties = {
	id: 'DEC3B45E301FD24982CDE18E7578B9E3',
	width: 960,
	height: 540,
	fps: 60,
	color: "#333333",
	opacity: 1.00,
	manifest: [
		{src:"images/MacbethAffiche.png", id:"MacbethAffiche"},
		{src:"images/P. mc_atlas_P_1.png", id:"P. mc_atlas_P_1"},
		{src:"images/P. mc_atlas_P_2.png", id:"P. mc_atlas_P_2"},
		{src:"images/P. mc_atlas_P_3.png", id:"P. mc_atlas_P_3"},
		{src:"images/P. mc_atlas_P_4.png", id:"P. mc_atlas_P_4"}
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