(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_P_1", frames: [[0,0,601,601]]},
		{name:"index_atlas_P_2", frames: [[0,529,631,464],[0,0,666,527]]},
		{name:"index_atlas_P_3", frames: [[502,0,433,376],[466,684,531,143],[0,738,464,188],[502,378,383,304],[0,502,442,234],[0,0,500,500]]},
		{name:"index_atlas_P_4", frames: [[0,0,302,217],[0,219,76,145],[304,209,137,92],[304,0,188,207]]}
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



(lib.Bitmap1 = function() {
	this.initialize(img.Bitmap1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1807,1016);


(lib.Bitmap2 = function() {
	this.initialize(ss["index_atlas_P_4"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Low_left = function() {
	this.initialize(ss["index_atlas_P_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Low_mid_1 = function() {
	this.initialize(ss["index_atlas_P_3"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Low_mid_2 = function() {
	this.initialize(ss["index_atlas_P_3"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Low_right = function() {
	this.initialize(ss["index_atlas_P_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Mid_left = function() {
	this.initialize(ss["index_atlas_P_3"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Mid_mid_1 = function() {
	this.initialize(ss["index_atlas_P_4"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Mid_mid_2 = function() {
	this.initialize(ss["index_atlas_P_4"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Mid_mid_3 = function() {
	this.initialize(ss["index_atlas_P_4"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Mid_top = function() {
	this.initialize(ss["index_atlas_P_3"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.PowerAnimation = function() {
	this.initialize(ss["index_atlas_P_3"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Top_left = function() {
	this.initialize(ss["index_atlas_P_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Top_right = function() {
	this.initialize(ss["index_atlas_P_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.start_trigger = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("A2OPjIAA/FMAsdAAAIAAfFg");
	this.shape.setTransform(254.25,0.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(112,-98.7,284.6,199);


(lib.power_animation_on = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.PowerAnimation();
	this.instance.setTransform(-250,-250);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(60));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-250,-250,500,500);


(lib.Interpoler30 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Top_right();
	this.instance.setTransform(-209.6,-165.85,0.6294,0.6294);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-209.6,-165.8,419.2,331.70000000000005);


(lib.Interpoler29 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Top_right();
	this.instance.setTransform(-209.6,-165.85,0.6294,0.6294);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-209.6,-165.8,419.2,331.70000000000005);


(lib.Interpoler28 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Mid_top();
	this.instance.setTransform(-221,-117);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-221,-117,442,234);


(lib.Interpoler27 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Mid_top();
	this.instance.setTransform(-221,-117);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-221,-117,442,234);


(lib.Interpoler26 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Top_left();
	this.instance.setTransform(-203.6,-149.7,0.6453,0.6453);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-203.6,-149.7,407.2,299.4);


(lib.Interpoler25 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Top_left();
	this.instance.setTransform(-203.6,-149.7,0.6453,0.6453);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-203.6,-149.7,407.2,299.4);


(lib.Interpoler24 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Mid_left();
	this.instance.setTransform(-146.75,-116.5,0.7663,0.7663);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-146.7,-116.5,293.5,233);


(lib.Interpoler23 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Mid_left();
	this.instance.setTransform(-146.75,-116.5,0.7663,0.7663);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-146.7,-116.5,293.5,233);


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
	this.instance = new lib.Low_left();
	this.instance.setTransform(-175.35,-152.25,0.8099,0.8099);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-175.3,-152.2,350.70000000000005,304.5);


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
	this.instance = new lib.Low_left();
	this.instance.setTransform(-175.35,-152.25,0.8099,0.8099);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-175.3,-152.2,350.70000000000005,304.5);


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
	this.instance = new lib.Low_mid_1();
	this.instance.setTransform(-185.85,-50.05,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-185.8,-50,371.70000000000005,100.1);


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
	this.instance = new lib.Low_mid_2();
	this.instance.setTransform(-157.95,-64,0.6808,0.6808);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-157.9,-64,315.9,128);


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
	this.instance = new lib.Low_mid_2();
	this.instance.setTransform(-157.95,-64,0.6808,0.6808);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-157.9,-64,315.9,128);


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
	this.instance = new lib.Mid_mid_1();
	this.instance.setTransform(-26.75,-51.05,0.7041,0.7041);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.7,-51,53.5,102.1);


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
	this.instance = new lib.Mid_mid_1();
	this.instance.setTransform(-26.75,-51.05,0.7041,0.7041);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.7,-51,53.5,102.1);


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
	this.instance = new lib.Mid_mid_2();
	this.instance.setTransform(-47.05,-31.6,0.6869,0.6869);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47,-31.6,94.1,63.2);


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
	this.instance = new lib.Mid_mid_2();
	this.instance.setTransform(-47.05,-31.6,0.6869,0.6869);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47,-31.6,94.1,63.2);


(lib.Interpoler10 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Mid_mid_3();
	this.instance.setTransform(-66.4,-73.1,0.7063,0.7063);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-66.4,-73.1,132.8,146.2);


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
	this.instance = new lib.Mid_mid_3();
	this.instance.setTransform(-66.4,-73.1,0.7063,0.7063);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-66.4,-73.1,132.8,146.2);


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
	this.instance = new lib.Low_right();
	this.instance.setTransform(-193.15,-193.15,0.6428,0.6428);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-193.1,-193.1,386.29999999999995,386.29999999999995);


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
	this.instance = new lib.PowerAnimation();
	this.instance.setTransform(-250,-250);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-250,-250,500,500);


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
	this.instance = new lib.PowerAnimation();
	this.instance.setTransform(-250,-250);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-250,-250,500,500);


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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgZByIAAi4Ig+AAIAAgrICvAAIAAArIg/AAIAAC4g");
	this.shape.setTransform(50.275,-0.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAiBzQgDgEgEgPQgEgNgFgVQgDgPgFgHQgFgJgGgCQgHgEgLAAIgPAAIAABaIg0AAIAAjgQANgDASgBQARgBAWAAQAYgBASAFQATAEALAKQALAIAGAMQAFAMAAAQQAAAPgGALQgGALgKAIQgJAGgKAEIAAABQANAEAGALQAIAMAEAQIAHAaIAHAYQACAKACAEgAgahLIgIABIAAA+IAUAAQASABAMgKQAKgIABgPQgBgQgKgHQgKgJgRABIgPAAg");
	this.shape_1.setTransform(23.7,-0.55);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAwByIgRg6IhBAAIgQA6Ig2AAIBGjjIBDAAIBHDjgAAXARIgOgwIgGgWIgEgWIgCAAIgEAXIgGAVIgNAwIAxAAg");
	this.shape_2.setTransform(-6.45,-0.45);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgZByIAAi4Ig+AAIAAgrICvAAIAAArIg/AAIAAC4g");
	this.shape_3.setTransform(-32.375,-0.45);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgyBxQgSgEgJgGIAKgqQAKAGAQAEQAOAEARABQARgBAJgHQAKgGAAgMQAAgKgJgHQgJgIgUgGQgdgLgRgPQgQgQgBgaQAAgTALgQQAKgPAUgJQATgJAaAAQATAAAPAEQAOACAKAGIgLApQgHgDgMgEQgMgDgRgBQgQABgIAGQgIAHAAAJQAAAKAKAHQAKAHAVAHQAfAMAOAPQAPAQgBAZQAAATgKARQgKAPgUAKQgUAKgfAAQgUgBgRgEg");
	this.shape_4.setTransform(-58.8242,-0.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70,-21.5,140.1,43);


(lib.power_animation_off = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Calque_2_copy
	this.instance = new lib.Interpoler5("synched",0);
	this.instance._off = true;

	this.instance_1 = new lib.Interpoler6("synched",0);
	this.instance_1.setTransform(0,0,0.872,0.872);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({_off:false},0).to({_off:true,scaleX:0.872,scaleY:0.872},14).wait(32));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({_off:false},14).to({scaleX:1.376,scaleY:1.376,alpha:0},15).to({_off:true},1).wait(16));

	// Calque_2_copy
	this.instance_2 = new lib.Interpoler5("synched",0);
	this.instance_2._off = true;

	this.instance_3 = new lib.Interpoler6("synched",0);
	this.instance_3.setTransform(0,0,0.872,0.872);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(6).to({_off:false},0).to({_off:true,scaleX:0.872,scaleY:0.872},14).wait(40));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(6).to({_off:false},14).to({scaleX:1.376,scaleY:1.376,alpha:0},15).to({_off:true},1).wait(24));

	// Calque_2
	this.instance_4 = new lib.Interpoler5("synched",0);

	this.instance_5 = new lib.Interpoler6("synched",0);
	this.instance_5.setTransform(0,0,0.872,0.872);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true,scaleX:0.872,scaleY:0.872},14).wait(46));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:false},14).to({scaleX:1.376,scaleY:1.376,alpha:0},15).to({_off:true},1).wait(30));

	// bg
	this.instance_6 = new lib.PowerAnimation();
	this.instance_6.setTransform(-250,-250);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(60));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-343.9,-343.9,688,688);


(lib.intro_full_comp = function(mode,startPosition,loop,reversed) {
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
		
		_this.start_trigger_btn.on('click', function(){
		
		});
		
		_this.start_trigger_btn.on('mouseover', function(){
		
		_this.gotoAndPlay(1);
		});
		
		
		
		_this.start_trigger_btn.on('mouseout', function(){
		
		_this.gotoAndPlay(15);
		});
		
		
		
		_this.start_trigger_btn.on('click', function(){
		
		window.open('main_menu.html', '_self');
		});
	}
	this.frame_14 = function() {
		var _this = this;
		/*
		Arrêter un clip/une vidéo
		Permet d’arrêter la vidéo ou le clip spécifié.
		*/
		_this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(16));

	// start_btn
	this.start_trigger_btn = new lib.start_trigger();
	this.start_trigger_btn.name = "start_trigger_btn";
	this.start_trigger_btn.setTransform(-0.05,-2.3,1.457,1.4858,0,0,0,254.2,0.6);
	this.start_trigger_btn.alpha = 0.0117;
	new cjs.ButtonHelper(this.start_trigger_btn, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.start_trigger_btn).wait(30));

	// power_anim_on
	this.power_on_state = new lib.power_animation_on();
	this.power_on_state.name = "power_on_state";
	this.power_on_state.setTransform(0.05,-0.05,0.2446,0.2446,0,0,0,0.2,-0.2);
	this.power_on_state.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.power_on_state).to({x:-82.65,alpha:1},14,cjs.Ease.quintOut).to({x:0.05,alpha:0},15,cjs.Ease.quintOut).wait(1));

	// power_anim_of
	this.power_off_state = new lib.power_animation_off();
	this.power_off_state.name = "power_off_state";
	this.power_off_state.setTransform(0,0,0.2446,0.2446);

	this.timeline.addTween(cjs.Tween.get(this.power_off_state).to({x:-82.7,alpha:0},14,cjs.Ease.quintOut).to({x:0,alpha:1},15,cjs.Ease.quintOut).wait(1));

	// start_anim_2
	this.start_anim = new lib.Interpoler1("synched",0);
	this.start_anim.name = "start_anim";
	this.start_anim.setTransform(-47.8,0);
	this.start_anim.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.start_anim).to({x:63.35,alpha:1},14,cjs.Ease.quintOut).to({x:-47.8,alpha:0},15,cjs.Ease.quintOut).wait(1));

	// Low_right
	this.instance = new lib.Interpoler7("synched",0);
	this.instance.setTransform(528.15,199.65,1.145,1.145);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:475.05,y:174.85},14,cjs.Ease.quintOut).wait(1).to({startPosition:0},0).to({x:528.15,y:199.65},14,cjs.Ease.quintOut).wait(1));

	// Mid_mid_3
	this.instance_1 = new lib.Interpoler9("synched",0);
	this.instance_1.setTransform(313.4,-16.9);

	this.instance_2 = new lib.Interpoler10("synched",0);
	this.instance_2.setTransform(303.4,-34.85,1,1,14.9992);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true,rotation:14.9992,x:303.4,y:-34.85},14,cjs.Ease.quintOut).wait(1).to({_off:false,rotation:0,x:313.4,y:-16.9},14,cjs.Ease.quintOut).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:false},14,cjs.Ease.quintOut).wait(1).to({startPosition:0},0).to({_off:true,rotation:0,x:313.4,y:-16.9},14,cjs.Ease.quintOut).wait(1));

	// Mid_mid_2
	this.instance_3 = new lib.Interpoler11("synched",0);
	this.instance_3.setTransform(152.05,242.6);

	this.instance_4 = new lib.Interpoler12("synched",0);
	this.instance_4.setTransform(140.05,228.6);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true,x:140.05,y:228.6},14,cjs.Ease.quintOut).wait(1).to({_off:false,x:152.05,y:242.6},14,cjs.Ease.quintOut).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:false},14,cjs.Ease.quintOut).wait(1).to({startPosition:0},0).to({_off:true,x:152.05,y:242.6},14,cjs.Ease.quintOut).wait(1));

	// Mid_mid_1
	this.instance_5 = new lib.Interpoler13("synched",0);
	this.instance_5.setTransform(51.75,223.05);

	this.instance_6 = new lib.Interpoler14("synched",0);
	this.instance_6.setTransform(45.75,203.05);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:true,x:45.75,y:203.05},14,cjs.Ease.quintOut).wait(1).to({_off:false,x:51.75,y:223.05},14,cjs.Ease.quintOut).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({_off:false},14,cjs.Ease.quintOut).wait(1).to({startPosition:0},0).to({_off:true,x:51.75,y:223.05},14,cjs.Ease.quintOut).wait(1));

	// Low_mid_2
	this.instance_7 = new lib.Interpoler15("synched",0);
	this.instance_7.setTransform(134.95,338);

	this.instance_8 = new lib.Interpoler16("synched",0);
	this.instance_8.setTransform(124.95,322);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({_off:true,x:124.95,y:322},14,cjs.Ease.quintOut).wait(1).to({_off:false,x:134.95,y:338},14,cjs.Ease.quintOut).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({_off:false},14,cjs.Ease.quintOut).wait(1).to({startPosition:0},0).to({_off:true,x:134.95,y:338},14,cjs.Ease.quintOut).wait(1));

	// Low_mid_1
	this.instance_9 = new lib.Interpoler17("synched",0);
	this.instance_9.setTransform(-202.75,345.2,1.0282,1.5247,0,0,0,-0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({y:311.4},14,cjs.Ease.quintOut).wait(1).to({startPosition:0},0).to({y:345.2},14,cjs.Ease.quintOut).wait(1));

	// Low_left
	this.instance_10 = new lib.Interpoler19("synched",0);
	this.instance_10.setTransform(-530.65,251.25);

	this.instance_11 = new lib.Interpoler20("synched",0);
	this.instance_11.setTransform(-518.65,235.25);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({_off:true,x:-518.65,y:235.25},14,cjs.Ease.quintOut).wait(1).to({_off:false,x:-530.65,y:251.25},14,cjs.Ease.quintOut).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({_off:false},14,cjs.Ease.quintOut).wait(1).to({startPosition:0},0).to({_off:true,x:-530.65,y:251.25},14,cjs.Ease.quintOut).wait(1));

	// Mid_left
	this.instance_12 = new lib.Interpoler23("synched",0);
	this.instance_12.setTransform(-551.25,-21.5);

	this.instance_13 = new lib.Interpoler24("synched",0);
	this.instance_13.setTransform(-465.25,-24.5,1,1,14.9992);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({_off:true,rotation:14.9992,x:-465.25,y:-24.5},14,cjs.Ease.quintOut).wait(1).to({_off:false,rotation:0,x:-551.25,y:-21.5},14,cjs.Ease.quintOut).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({_off:false},14,cjs.Ease.quintOut).wait(1).to({startPosition:0},0).to({_off:true,rotation:0,x:-551.25,y:-21.5},14,cjs.Ease.quintOut).wait(1));

	// Top_left
	this.instance_14 = new lib.Interpoler25("synched",0);
	this.instance_14.setTransform(-503.4,-264.3);

	this.instance_15 = new lib.Interpoler26("synched",0);
	this.instance_15.setTransform(-488.4,-246.3);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({_off:true,x:-488.4,y:-246.3},14,cjs.Ease.quintOut).wait(1).to({_off:false,x:-503.4,y:-264.3},14,cjs.Ease.quintOut).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_15).to({_off:false},14,cjs.Ease.quintOut).wait(1).to({startPosition:0},0).to({_off:true,x:-503.4,y:-264.3},14,cjs.Ease.quintOut).wait(1));

	// Mid_top
	this.instance_16 = new lib.Interpoler27("synched",0);
	this.instance_16.setTransform(-1,-386);

	this.instance_17 = new lib.Interpoler28("synched",0);
	this.instance_17.setTransform(-0.95,-328,1,1,7.2151);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).to({_off:true,rotation:7.2151,x:-0.95,y:-328},14,cjs.Ease.quintOut).wait(1).to({_off:false,rotation:0,x:-1,y:-386},14,cjs.Ease.quintOut).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_17).to({_off:false},14,cjs.Ease.quintOut).wait(1).to({startPosition:0},0).to({_off:true,rotation:0,x:-1,y:-386},14,cjs.Ease.quintOut).wait(1));

	// Top_right
	this.instance_18 = new lib.Interpoler29("synched",0);
	this.instance_18.setTransform(502.5,-248.15);

	this.instance_19 = new lib.Interpoler30("synched",0);
	this.instance_19.setTransform(477.6,-224.15);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).to({_off:true,x:477.6,y:-224.15},14,cjs.Ease.quintOut).wait(1).to({_off:false,x:502.5,y:-248.15},14,cjs.Ease.quintOut).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_19).to({_off:false},14,cjs.Ease.quintOut).wait(1).to({startPosition:0},0).to({_off:true,x:502.5,y:-248.15},14,cjs.Ease.quintOut).wait(1));

	// start_btn_bg
	this.instance_20 = new lib.Bitmap2();
	this.instance_20.setTransform(-220,-159,1.457,1.457);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(30));

	// BG
	this.instance_21 = new lib.Bitmap1();
	this.instance_21.setTransform(-903,-510);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(30));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-903,-510,1807,1016);


// stage content:
(lib.Index = function(mode,startPosition,loop,reversed) {
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

	// intro_page
	this.instance = new lib.intro_full_comp();
	this.instance.setTransform(498.3,243.25,0.717,0.717,0,0,0,21.2,-40.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(315.7,176.3,815.5999999999999,458.99999999999994);
// library properties:
lib.properties = {
	id: 'EA59E15999B96C4DA166369D3E7D0BDF',
	width: 960,
	height: 539,
	fps: 60,
	color: "#333333",
	opacity: 1.00,
	manifest: [
		{src:"images/Bitmap1.png?1690893820287", id:"Bitmap1"},
		{src:"images/index_atlas_P_1.png?1690893820225", id:"index_atlas_P_1"},
		{src:"images/index_atlas_P_2.png?1690893820225", id:"index_atlas_P_2"},
		{src:"images/index_atlas_P_3.png?1690893820225", id:"index_atlas_P_3"},
		{src:"images/index_atlas_P_4.png?1690893820225", id:"index_atlas_P_4"}
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