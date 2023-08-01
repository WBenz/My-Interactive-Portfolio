(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"cv_atlas_P_1", frames: [[0,0,596,842]]}
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



(lib.Bitmap13 = function() {
	this.initialize(img.Bitmap13);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1366,768);


(lib.Bitmap17 = function() {
	this.initialize(ss["cv_atlas_P_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CV_Mockuppngcopy = function() {
	this.initialize(img.CV_Mockuppngcopy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2480,3508);// helper functions:

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


(lib.motivation_paper_btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// txt
	this.text = new cjs.Text("LV", "bold 13px 'Myriad Pro'", "#FFFFFF");
	this.text.lineHeight = 17;
	this.text.lineWidth = 16;
	this.text.parent = this;
	this.text.setTransform(201.6,1.9,1.8149,1.8149);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(2));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00A69D").s().p("A4gEwIAApfMArXAAAIFqEvIlqEwg");
	this.shape.setTransform(113.15,12.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00B8AE").s().p("A4gEwIAApfMArXAAAIFqEvIlqEwg");
	this.shape_1.setTransform(113.15,12.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43.7,-17.9,313.7,60.699999999999996);


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


(lib.Interpoler70 = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(-292,-446,0.2407,0.2407);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-292,-446,597,844.4);


(lib.cv_paper_btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// txt
	this.text = new cjs.Text("CV", "bold 13px 'Myriad Pro'", "#FFFFFF");
	this.text.lineHeight = 17;
	this.text.lineWidth = 16;
	this.text.parent = this;
	this.text.setTransform(197,3.65,1.8149,1.8149);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(2));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00A69D").s().p("A4gEwIAApfMArXAAAIFqEvIlqEwg");
	this.shape.setTransform(113.15,12.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00B8AE").s().p("A4gEwIAApfMArXAAAIFqEvIlqEwg");
	this.shape_1.setTransform(113.15,12.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43.7,-17.9,313.7,60.699999999999996);


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

	// txt
	this.text = new cjs.Text("RETOUR", "bold 34px 'Myriad Pro'", "#FFFFFF");
	this.text.lineHeight = 41;
	this.text.lineWidth = 125;
	this.text.parent = this;
	this.text.setTransform(-62.95,-16.4);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(2));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663300").s().p("As5E5IAApxIZzAAIAAJxg");
	this.shape.setTransform(-0.025,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#943300").s().p("As5E5IAApxIZzAAIAAJxg");
	this.shape_1.setTransform(-0.025,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-82.6,-31.3,165.2,62.7);


(lib.motivation_paper_btn_anim = function(mode,startPosition,loop,reversed) {
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
	this.frame_19 = function() {
		this.stop();
		stage.enableMouseOver();
		var _this = this;
		
		
		_this.motivation_paper_btn.on('mouseover', function(){
		
		_this.gotoAndPlay(20);
		});
		
		
		_this.motivation_paper_btn.on('mouseout', function(){
		
		_this.gotoAndPlay(40);
		});
	}
	this.frame_39 = function() {
		this.stop();
	}
	this.frame_59 = function() {
		this.gotoAndStop(19);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(19).call(this.frame_19).wait(20).call(this.frame_39).wait(20).call(this.frame_59).wait(1));

	// motivation_btn_anim
	this.motivation_paper_btn = new lib.motivation_paper_btn();
	this.motivation_paper_btn.name = "motivation_paper_btn";
	this.motivation_paper_btn.setTransform(-108.15,357.65);
	this.motivation_paper_btn.alpha = 0;
	new cjs.ButtonHelper(this.motivation_paper_btn, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.motivation_paper_btn).to({y:-77.05,alpha:1},19,cjs.Ease.quintOut).to({x:-43.65,y:-76.45},20,cjs.Ease.quintOut).to({x:-108.15,y:-77.05},20,cjs.Ease.quintOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-151.8,-94.9,378.20000000000005,495.4);


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


(lib.cv_paper_btn_anim = function(mode,startPosition,loop,reversed) {
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
	this.frame_19 = function() {
		this.stop();
		stage.enableMouseOver();
		var _this = this;
		
		
		
		_this.cv_paper_btn.on('mouseover', function(){
		
		_this.gotoAndPlay(20);
		});
		
		
		_this.cv_paper_btn.on('mouseout', function(){
		
		_this.gotoAndPlay(40);
		});
	}
	this.frame_39 = function() {
		this.stop();
	}
	this.frame_59 = function() {
		this.gotoAndStop(19);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(19).call(this.frame_19).wait(20).call(this.frame_39).wait(20).call(this.frame_59).wait(1));

	// motivation_btn_anim
	this.cv_paper_btn = new lib.cv_paper_btn();
	this.cv_paper_btn.name = "cv_paper_btn";
	this.cv_paper_btn.setTransform(-108.15,357.65);
	this.cv_paper_btn.alpha = 0;
	new cjs.ButtonHelper(this.cv_paper_btn, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.cv_paper_btn).to({y:776.25,alpha:1},19,cjs.Ease.quintOut).to({x:-42.85},20,cjs.Ease.quintOut).to({x:-108.15},20,cjs.Ease.quintOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-151.8,339.8,379,479.3);


(lib.paper_anim = function(mode,startPosition,loop,reversed) {
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
	this.frame_14 = function() {
		this.stop();
	}
	this.frame_29 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(15).call(this.frame_29).wait(1));

	// cv_anim
	this.instance = new lib.Interpoler70();
	this.instance.setTransform(-1.5,161);
	this.instance.alpha = 0;
	this.instance.shadow = new cjs.Shadow("#000000",7,7,10);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-10.9,alpha:1},14,cjs.Ease.quintOut).to({_off:true},1).wait(15));

	// motivation_anim
	this.instance_1 = new lib.motivation_paper();
	this.instance_1.setTransform(7.2,161);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;
	this.instance_1.cache(-304,-427,626,871);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(15).to({_off:false},0).to({y:-37,alpha:1},14,cjs.Ease.quintOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-301.5,-464.9,647,1068);


(lib.cv_page = function(mode,startPosition,loop,reversed) {
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
	this.frame_19 = function() {
		this.stop();
		stage.enableMouseOver();
		var _this = this;
		
		
		_this.retour_btn.on('click', function () {
			window.open('main_menu.html', '_self');
			_this.papers_anim.visible = false;
		
		});
		
		
		
		
		
		_this.cv_paper_btn.on('click', function () {
			_this.papers_anim.visible = true;
			_this.papers_anim.gotoAndPlay(1);
		});
		
		
		
		_this.motivation_paper_btn.on('click', function () {
			_this.papers_anim.visible = true;
			_this.papers_anim.gotoAndPlay(15);
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(19).call(this.frame_19).wait(1));

	// back_btn
	this.retour_btn = new lib.back_btn();
	this.retour_btn.name = "retour_btn";
	this.retour_btn.setTransform(-0.05,423.9,0.5631,0.5627,0,0,0,-0.1,0.1);
	this.retour_btn.alpha = 0;
	this.retour_btn._off = true;
	new cjs.ButtonHelper(this.retour_btn, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.retour_btn).wait(10).to({_off:false},0).to({regX:-0.2,scaleX:0.5632,scaleY:0.5626,x:-0.1,y:366.4,alpha:1},9,cjs.Ease.quintOut).wait(1));

	// cv_paper_btn
	this.cv_paper_btn = new lib.cv_paper_btn_anim();
	this.cv_paper_btn.name = "cv_paper_btn";
	this.cv_paper_btn.setTransform(-804.2,-479.1,1,1,0,0,0,5,370.1);
	this.cv_paper_btn._off = true;

	this.timeline.addTween(cjs.Tween.get(this.cv_paper_btn).wait(19).to({_off:false},0).wait(1));

	// motivation_paper_btn
	this.motivation_paper_btn = new lib.motivation_paper_btn_anim();
	this.motivation_paper_btn.name = "motivation_paper_btn";
	this.motivation_paper_btn.setTransform(-809,470.35,1,1,0,0,0,0,370.1);
	this.motivation_paper_btn._off = true;

	this.timeline.addTween(cjs.Tween.get(this.motivation_paper_btn).wait(19).to({_off:false},0).wait(1));

	// papers_anim
	this.papers_anim = new lib.paper_anim();
	this.papers_anim.name = "papers_anim";
	this.papers_anim.setTransform(0,150.2,0.84,0.84,0,0,0,-1.4,161);
	this.papers_anim._off = true;

	this.timeline.addTween(cjs.Tween.get(this.papers_anim).wait(19).to({_off:false},0).wait(1));

	// bg_anim
	this.instance = new lib.Bitmap13();
	this.instance.setTransform(-769,-432,1.1253,1.1253);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-961,-509.4,1729.1,1014.9);


// stage content:
(lib.cv = function(mode,startPosition,loop,reversed) {
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

	// cv_page
	this.instance = new lib.cv_page();
	this.instance.setTransform(479.95,269.85,0.7028,0.7028);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(419.6,235.8,600.1999999999999,337.8);
// library properties:
lib.properties = {
	id: 'EA59E15999B96C4DA166369D3E7D0BDF',
	width: 960,
	height: 539,
	fps: 60,
	color: "#333333",
	opacity: 1.00,
	manifest: [
		{src:"images/Bitmap13.png?1690893992552", id:"Bitmap13"},
		{src:"images/CV_Mockuppngcopy.png?1690893992552", id:"CV_Mockuppngcopy"},
		{src:"images/cv_atlas_P_1.png?1690893992522", id:"cv_atlas_P_1"}
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