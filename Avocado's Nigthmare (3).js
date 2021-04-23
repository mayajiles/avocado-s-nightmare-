(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"Avocado_s Nigthmare _3__atlas_1", frames: [[0,0,940,1033],[0,1035,562,852],[942,0,554,1374]]},
		{name:"Avocado_s Nigthmare _3__atlas_2", frames: [[491,780,104,55],[725,1432,66,25],[491,837,59,20],[1563,614,268,866],[0,0,598,778],[1555,1482,348,410],[1658,0,83,410],[600,0,447,860],[1555,1238,5,131],[725,1394,137,36],[1049,614,512,622],[0,780,489,750],[491,862,530,530],[1023,1238,530,500],[1658,476,272,62],[491,1461,244,60],[1658,412,284,62],[1658,540,272,62],[0,1532,548,371],[1743,0,91,89],[1049,0,607,612],[491,1394,232,65]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
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



(lib.CachedBmp_55 = function() {
	this.initialize(ss["Avocado_s Nigthmare _3__atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_53 = function() {
	this.initialize(ss["Avocado_s Nigthmare _3__atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_52 = function() {
	this.initialize(ss["Avocado_s Nigthmare _3__atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_36 = function() {
	this.initialize(ss["Avocado_s Nigthmare _3__atlas_2"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_23 = function() {
	this.initialize(ss["Avocado_s Nigthmare _3__atlas_2"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_22 = function() {
	this.initialize(ss["Avocado_s Nigthmare _3__atlas_2"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_21 = function() {
	this.initialize(ss["Avocado_s Nigthmare _3__atlas_2"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_38 = function() {
	this.initialize(ss["Avocado_s Nigthmare _3__atlas_2"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_19 = function() {
	this.initialize(ss["Avocado_s Nigthmare _3__atlas_2"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_18 = function() {
	this.initialize(ss["Avocado_s Nigthmare _3__atlas_2"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_17 = function() {
	this.initialize(ss["Avocado_s Nigthmare _3__atlas_2"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_16 = function() {
	this.initialize(ss["Avocado_s Nigthmare _3__atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_15 = function() {
	this.initialize(ss["Avocado_s Nigthmare _3__atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_14 = function() {
	this.initialize(ss["Avocado_s Nigthmare _3__atlas_2"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_12 = function() {
	this.initialize(ss["Avocado_s Nigthmare _3__atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_33 = function() {
	this.initialize(img.CachedBmp_33);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2561,522);


(lib.CachedBmp_32 = function() {
	this.initialize(img.CachedBmp_32);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2563,973);


(lib.CachedBmp_10 = function() {
	this.initialize(ss["Avocado_s Nigthmare _3__atlas_2"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_9 = function() {
	this.initialize(ss["Avocado_s Nigthmare _3__atlas_2"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_59 = function() {
	this.initialize(img.CachedBmp_59);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2563,1460);


(lib.CachedBmp_29 = function() {
	this.initialize(ss["Avocado_s Nigthmare _3__atlas_2"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["Avocado_s Nigthmare _3__atlas_2"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["Avocado_s Nigthmare _3__atlas_2"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["Avocado_s Nigthmare _3__atlas_2"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.babyCarriage = function() {
	this.initialize(ss["Avocado_s Nigthmare _3__atlas_2"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap1 = function() {
	this.initialize(ss["Avocado_s Nigthmare _3__atlas_2"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.curtain = function() {
	this.initialize(img.curtain);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,5334,3830);


(lib.photoBaby = function() {
	this.initialize(ss["Avocado_s Nigthmare _3__atlas_2"]);
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.sushi = function() {
	this.initialize(ss["Avocado_s Nigthmare _3__atlas_2"]);
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.wasabi = function() {
	this.initialize(img.wasabi);
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


(lib.womansmouth1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_55();
	this.instance.setTransform(0,0,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_53();
	this.instance_1.setTransform(8.55,1.85,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,52,27.5);


(lib.womanm2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("ABlArQgNgJgPgEIgRgGIgZgRQgYgQhPgEQgTAAgKAIQgKAIgOgFQgNgGgEgPIALgGQAjgSA2gBQAHABAeAPQAcAOA1AKQAaAEAZgEIAAAFQAmAxg0ADIAAAAQgCAAgKgGg");
	this.shape.setTransform(31.5471,12.9099);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E94B43").s().p("AAbBiIgUgOIgIgGIgcgTQgYgSgzgRQgggLgTABQgTACgDgBQgEgBgRAHQgSAHgUgFIgIgDIAXgXIALgLQACgEAEgBQAigeAmgaIAagQIAUgMIAJgFQAgADAdABIAsAAIACAAQAdgBAagEQAFAAAFAEQAvBAA9A2IALAJQBEAghQAWQgOAEgQAIQgQAIgPACQgQACgLAFQgTAFgSAAQgcAAgWgMgAAdgJIAZARIARAFQAPAFANAJQALAHABgBQA0gDgmgxIAAgFQgZAEgagEQg1gKgcgOQgdgPgIgBQg2ABgjASIgLAGQAEAPANAFQAOAGAKgIQAKgIATAAQBPAEAYAQg");
	this.shape_1.setTransform(31.7445,14.5258);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_2
	this.instance = new lib.CachedBmp_52();
	this.instance.setTransform(17.4,8,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(7.3,3.6,49,21.9);


(lib.woman = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_36();
	this.instance.setTransform(80.1,10.1,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_23();
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.woman, new cjs.Rectangle(0,0,299,443.1), null);


(lib.suprisemansmouth = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Bitmap1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,91,89);


(lib.start = function(mode,startPosition,loop,reversed) {
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
	this.start = new cjs.Text("Start", "normal 700 96px 'Rubik'", "#FFFFFF");
	this.start.name = "start";
	this.start.textAlign = "center";
	this.start.lineHeight = 119;
	this.start.lineWidth = 528;
	this.start.parent = this;
	this.start.setTransform(250.3,11.2,0.9999,0.9999);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.start);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#990000").s().p("A9uKjQg5AAgpgQQhlgpAAiOIAAu3QAAjHDHAAMA7dAAAQDHAAAADHIAAO3QAADHjHAAg");
	this.shape.setTransform(254.85,67.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#990000").s().p("EgiwAMWQhDgBgwgSQh2gxAAilIAAxZQAAjpDpAAMBFgAAAQDqAAAADpIAARZQAADojqABg");
	this.shape_1.setTransform(255.65,67.55);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#990000").s().p("A+AKqQg5AAgqgRQhmgpAAiQIAAu/QAAjKDJAAMA8AAAAQDKAAAADKIAAO/QAADJjKABg");
	this.shape_2.setTransform(254.925,67.55);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1F1F1F").s().p("EgqEANSIAA6kMBUJAAAIAAakg");
	this.shape_3.setTransform(263.525,77.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.start,p:{scaleX:0.9999,scaleY:0.9999,x:250.3,y:11.2}}]}).to({state:[{t:this.shape_1},{t:this.start,p:{scaleX:1.1692,scaleY:1.1692,x:250.4,y:1.55}}]},1).to({state:[{t:this.shape_2},{t:this.start,p:{scaleX:1.0092,scaleY:1.0092,x:250.35,y:10.6}}]},1).to({state:[{t:this.shape_3},{t:this.start,p:{scaleX:1.0092,scaleY:1.0092,x:250.35,y:10.6}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60.7,-11.4,622.2,174.1);


(lib.smile = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1_copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#720000").s().p("AhHAxQgdgWAAgoQAAgTADgiQAAAMAEAMQAHAcAZAYQAZAXAkgGQAigFAdgaQAegcACgBIAGgXIgBALQAAApgdAfQgdAhgqAGIgRABQgfAAgXgSg");
	this.shape.setTransform(11.75,14.9954);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#730000").s().p("AhDAzIgEgDQgdgVAAgnIAAgBQAAgQACgbIABgJQABALADALIAGAPQAJATASARQAVATAcgBIALgBQAUgDASgKQANgHANgKIAIgIIATgRIAEgDIAGgWIgBALQAAAbgOAXQgHAKgJALQgYAbggAIIgOADIgRABQgcAAgWgPg");
	this.shape_1.setTransform(11.775,14.9942);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#740000").s().p("AhCAzIgFgDQgcgWAAgmIAAgBQgBgRADgaIABgJQABAKADAMIAFAOQAKASASAQQAUATAdgBIAKgBQAUgDASgKQAOgHAMgJIAJgHIASgQIAEgDQABgBAEgVIAAALQAAAbgOAWQgHALgJAKQgYAbggAJIgOADIgQABQgdAAgVgPg");
	this.shape_2.setTransform(11.75,15.0105);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#750000").s().p("AhDAzIgEgDQgcgWAAgmIAAgBQAAgQACgaIABgKQABALADALIAGAOQAKARASAQQAUASAcgBIALgBQAUgDASgJQANgHANgJIAIgHIASgPIAEgDQABAAAEgVIgBAMQAAAagOAWQgHALgJAKQgXAaghAJIgNADIgRABQgcAAgWgPg");
	this.shape_3.setTransform(11.775,14.9942);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#760000").s().p("AhCAyIgEgDQgdgVAAgmIAAgBQAAgQADgbIABgJQABAKADALQACAHAEAGQAKASASAPQAUARAcgBIAKgBQAVgDASgJQANgFAMgKIAIgGQANgMAFgDIAEgCIAFgUIgBALQAAAagOAWQgHALgJAKQgYAaggAIIgNADIgRACQgcAAgVgQg");
	this.shape_4.setTransform(11.775,15.0105);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#760000").s().p("AhCAyIgEgDQgdgWAAglIAAgBQAAgQADgaIABgJQABAJAEAKIAGAOQAKAQASAPQAUARAcgCIAKAAQAVgDARgJQANgFAMgJIAJgGQAMgMAFgCIADgCQABAAAFgUIgBAMQgBAagOAVQgGALgKAKQgXAZggAJIgNADIgQABQgcAAgWgPg");
	this.shape_5.setTransform(11.775,15.0105);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#770000").s().p("AhCAxIgEgCQgcgWAAglIAAgBQAAgQADgaIABgJQABAJADAKQADAHAEAGQAKAQASAPQAUAPAcgBIAKgBQAUgDASgIQANgEAMgJIAIgGQANgLAEgCIADgCQABAAAEgTIAAALQgBAagOAWQgHAKgJAKQgXAZghAJQgGACgHAAIgQACQgbAAgWgQg");
	this.shape_6.setTransform(11.775,15.0105);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#780000").s().p("AhCAxIgEgDQgcgVAAglIAAgBQAAgQADgaIABgJQACAJADAKIAGAMQALAPARAPQAVAPAcgBIAJgBQAVgDARgHQANgFAMgIIAIgGQANgLAEgBIADgCQABAAAEgSIgBALQgBAagOAVQgHAKgJAKQgXAZggAIIgNADIgPACQgcAAgWgQg");
	this.shape_7.setTransform(11.8,15.0021);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#790000").s().p("AhCAxIgDgDQgdgVAAglIAAgBQAAgQAEgZIABgJQABAIAEAJQACAGAFAGQAKAPASAOQAUAOAbgBIALgBQAUgDARgGQANgFAMgIIAIgFQAMgLAEAAIADgCQABABAEgSIgBALQgBAZgOAVQgHALgJAJQgXAZggAIIgNADIgQABQgbAAgWgPg");
	this.shape_8.setTransform(11.775,15.0105);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#7A0000").s().p("AhCAxIgDgDQgcgVAAglIAAgBQgBgQAEgZIABgJQABAIAFAJQACAGAEAFQALAOASAOQATAOAcgBIAKgBQAUgDARgGQANgFAMgHIAIgFQAMgLAEABIADgCQABABAEgRIgCALQgBAZgOAUQgGALgKAJQgXAZgfAIIgOADIgOABQgcAAgWgPg");
	this.shape_9.setTransform(11.8,15.0271);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#7B0000").s().p("AhCAwIgDgDQgcgVAAgkIAAgBQAAgQADgZIACgJQABAIAEAJQADAFAEAFQALAOASANQATAOAcgCIAKgBQAUgCARgGQAMgEAMgHIAIgFQAMgKAEABIADgCIAEgPIgBAKQgBAZgOAVQgHAKgJAJQgXAZgfAIIgOACIgOACQgcAAgWgQg");
	this.shape_10.setTransform(11.8,15.0021);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#7C0000").s().p("AhCAwIgDgDQgcgVAAgkIAAgBQAAgQAEgZIABgIQACAHAEAIIAHAKQALAOASAMQATANAbgBIAKgBQAVgCAQgGQANgEALgHIAJgEQALgKAEABIADgBQABABADgPIgBAKQgBAZgOAUQgHAKgJAKQgXAYggAHQgGACgHABIgOABQgcAAgWgPg");
	this.shape_11.setTransform(11.8,15.0021);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#7D0000").s().p("AhBAwIgEgDQgcgVAAgkIAAgBQAAgQAEgYIACgJQABAHAEAIIAHAKQAMAMARAMQAUANAbgBIAKgBQAVgCAQgGQAMgEAMgGIAIgEQALgKAEACIADgBQAAABAEgPIgCALQgBAYgOAUQgHAKgJAKQgXAXgfAIIgNADIgPABQgbAAgVgPg");
	this.shape_12.setTransform(11.825,15.0271);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#7E0000").s().p("AhBAvIgEgCQgbgVAAgkIAAgBQAAgQADgYIACgIQACAGAEAIIAHAJQAMAMARALQATANAcgBIAKgBQAUgDAQgFQANgDALgGIAIgEQALgJAEACIADgBQAAACADgPIgBALQgCAYgOAUQgGAKgKAJQgWAXggAIQgGACgGAAIgPABQgbAAgVgPg");
	this.shape_13.setTransform(11.825,15.0271);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#7F0000").s().p("AhBAvIgEgDQgbgUAAgkIAAgBQAAgQAEgYIACgIQABAGAFAHIAHAJQAMALARAMQATAMAcgCIAKgBQAUgCAQgFQAMgDAMgFIAIgEQAKgJAEADIADgBQAAACADgOIgBALQgCAXgOAUQgHAKgJAJQgXAXgfAIIgMACIgOABQgbAAgWgPg");
	this.shape_14.setTransform(11.825,15.044);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#7F0000").s().p("AhBAvIgDgDQgcgVAAgjIAAgBQAAgQAEgXIACgJQACAGAEAHIAIAIQAMALARALQATAMAcgCIAJgBQAVgCAQgFQAMgDALgEIAIgDQAKgKAEAEIACgBQABACADgNIgCAKQgCAYgOATQgGAKgJAJQgXAXgfAHIgMADIgOABQgbAAgWgPg");
	this.shape_15.setTransform(11.825,15.019);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#800000").s().p("AhBAuIgEgCQgbgVAAgjIAAgBQABgQAEgXIABgIQACAFAFAGIAIAIQAMAKARALQASALAcgCIAKAAQAUgDAQgEQAMgCAMgFIAHgCQAKgKAEAFIACgBQABACADgMIgCAKQgCAXgOAUQgHAJgJAJQgWAXggAHIgMACIgOABQgbAAgVgPg");
	this.shape_16.setTransform(11.85,15.019);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#810000").s().p("AhAAuIgEgDQgbgUAAgjIAAgBQAAgQAEgXIACgIQACAFAFAGIAIAHQAMAKARAKQATALAagCIALgBQAUgCAQgEQAMgCALgEIAIgCQAKgJADAFIACgBQABACACgKIgBAJQgDAXgOATQgGAJgJAJQgXAXgeAHIgNACIgNABQgbAAgVgPg");
	this.shape_17.setTransform(11.8125,15.044);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#820000").s().p("AhAAuIgEgDQgbgUAAgjIAAAAQAAgQAFgXIACgIQACAEAEAGIAIAHQANAJARAJQATAKAagBIALgBIAjgGQAMgCALgDIAIgCQAKgJADAGIACgBQABACACgJIgBAJQgDAWgOATQgHAKgJAIQgWAWgfAIIgMACIgNAAQgbAAgVgOg");
	this.shape_18.setTransform(11.8375,15.044);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#830000").s().p("AhAAuIgDgDQgbgUAAgjIAAAAQgBgQAFgXIACgIQACAEAFAFIAIAHIAdARQATAKAbgCIALgBQATgCAPgDIAXgEIAIgCQAKgJADAHIACgBQABADACgLIgCAKQgCAXgOASQgIAKgIAIQgXAWgeAHIgMADIgNAAQgbAAgVgOg");
	this.shape_19.setTransform(11.85,15.0364);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#840000").s().p("AhAAtIgDgCQgbgVAAgiIAAAAQAAgQAFgXIACgIIAHAJIAIAGIAeAQQASAJAbgBIAKgBIAjgFIAXgEIAIgBQAJgIADAGIACAAQABADABgIIgBAIQgDAWgOATQgHAJgIAJQgXAVgeAHIgMACIgNABQgaAAgWgPg");
	this.shape_20.setTransform(11.825,15.0364);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#850000").s().p("AhAAtIgDgDQgbgUAAgiIAAAAQAAgQAFgXIACgHIAHAIIAIAFIAeAPQATAJAbgCIAKgBIAjgEIAWgDIAIgBQAJgIADAHIACAAQAAADACgJIgBAKQgEAWgNASQgHAJgJAJQgWAVgfAHIgLACIgNAAQgbAAgVgOg");
	this.shape_21.setTransform(11.85,15.0364);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#860000").s().p("AhAAtIgDgDQgbgUAAgiIAAAAQAAgQAFgWIACgIIAIAHIAIAFIAeAOQATAJAagCIAKgBIAjgEIAXgCIAHgBQAJgIADAIIACAAQAAAEACgJIgCAKQgDAVgOASQgHAKgJAIQgWAVgeAHIgMACIgMAAQgbAAgVgOg");
	this.shape_22.setTransform(11.875,15.0364);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#870000").s().p("Ag/AsIgDgCQgbgUAAgiIAAAAQAAgQAFgWIACgIIAIAHIAJAEIAeANQASAIAagCIALgBIAigDIAXgCIAHAAQAIgIADAJIACAAQAAABAAAAQAAAAABAAQAAAAAAgBQAAAAAAgBIgBAGQgDAWgOASQgHAJgJAIQgWAVgeAGIgMACIgMABQgaAAgVgPg");
	this.shape_23.setTransform(11.8125,15.0364);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#880000").s().p("Ag/AsIgDgDQgbgUAAghIAAgBQAAgPAGgWIACgIIAIAGIAJAEIAeAMQASAHAagCIALAAIAigDIAWgBIAHAAQAJgIACAKQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAABAAAAQAAABAAAAQAAAAABgBQAAAAAAgBIgBAGQgDAVgOASQgHAJgJAIQgWAUgeAHIgMACIgLABQgbAAgVgPg");
	this.shape_24.setTransform(11.8375,15.0542);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#880000").s().p("Ag/ArIgEgCQgagUAAghIAAgBQAAgPAGgWIACgHIAIAFIAJADIAeALQASAHAbgCIAKgBIAigDIAWABIAHAAQAIgHADAJQAAAAAAAAQABAAAAAAQAAABAAAAQAAAAAAAAQAAABAAAAQABABAAgBQAAAAAAgBQABAAAAgCIgCAJQgDAVgOARQgHAJgJAIQgWAUgeAGIgLACIgLABQgcAAgUgPg");
	this.shape_25.setTransform(11.8875,15.0542);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#890000").s().p("Ag/ArIgDgDQgagTAAghIAAgBQAAgPAGgWIACgHIAIAEIAJADIAfAKQARAGAbgCIAKAAIAigDIAWABIAHABQAIgHACAKQABAAAAAAQAAAAAAAAQAAABABAAQAAAAAAAAQAAABAAAAQAAABAAAAQAAAAAAAAQAAAAAAgBIgBAGQgDAVgOARIgQARQgWAUgdAGIgMACIgLABQgbAAgVgPg");
	this.shape_26.setTransform(11.8375,15.0542);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#8A0000").s().p("Ag/ArIgDgDQgagTAAghIAAgBQAAgPAGgVIACgIIAIAEIAKACIAeAJQASAGAagCIAKgBQAVgCANAAIAWACIAHABQAHgHADALQAAAAAAAAQABAAAAAAQAAABAAAAQAAAAAAAAQAAABAAABQABAAAAAAQAAAAAAAAQAAAAAAAAIgCAGQgDAVgOAQQgHAJgJAIQgWAUgdAGIgMACIgLABQgaAAgVgPg");
	this.shape_27.setTransform(11.875,15.0542);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#8B0000").s().p("Ag/AqIgDgCQgagTAAghIAAgBQAAgPAGgVIADgHIAIADIAJACIAfAHQASAGAagDIAKAAQAUgCAOAAIAVADIAHABQAIgHACAMQAAAAAAAAQABAAAAAAQAAABAAAAQAAAAAAAAQAAABAAABQAAAAAAAAQAAAAABAAQAAAAAAgBIgCAIQgEAUgOARQgGAIgJAIQgWATgdAGIgMACIgLABQgaAAgVgPg");
	this.shape_28.setTransform(11.8875,15.0542);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#8C0000").s().p("Ag/AqIgDgCQgagUAAggIAAgBQAAgPAHgVIACgHIAIACIAKACIAfAGQASAFAagCIAKgBQAUgCANABIAWADIAHACQAHgGACAMQAAAAABAAQAAAAAAAAQAAABAAAAQAAAAAAAAIABADIgCAHQgEAUgOAQQgHAJgJAHQgVATgeAGIgLACIgKABQgbAAgVgPg");
	this.shape_29.setTransform(11.8625,15.0542);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#8D0000").s().p("Ag+AqIgDgDQgagTAAggQAAgQAGgUIADgHQADgBAFACIAKABQAPACAQAEQARAEAbgCIAKgBQAUgCANABIAVAEIAHACQAHgGACANQAAAAAAAAQABAAAAAAQAAAAAAABQAAAAAAAAIAAADIgBAHQgFAUgOAQQgGAJgJAHQgWATgdAGIgLACIgKAAQgbAAgUgOg");
	this.shape_30.setTransform(11.8875,15.0663);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#8E0000").s().p("Ag/AqIgDgCQgZgUAAggQAAgPAGgVIADgHIAIABIAKABIAgAEQARAEAagCIAKgBQAUgCANACIAVAFIAHABQAGgFACANIACACIAAADIgCAIQgEATgOAQQgHAJgJAHQgVASgeAGIgLACIgJAAQgbAAgVgOg");
	this.shape_31.setTransform(11.9125,15.0392);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#8F0000").s().p("Ag+AqIgDgDQgagTAAggQAAgPAHgUIADgHQACgBAHABIAKAAIAfADQARADAagCIAKgBQAUgBANACIAUAFIAIACQAGgFACAOIABACIAAACIgCAJQgFAUgNAPQgIAJgIAHQgWASgdAGIgLACIgJAAQgbAAgUgOg");
	this.shape_32.setTransform(11.9,15.0475);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#900000").s().p("Ag+AqIgDgDQgagSAAggQAAgQAHgUIADgGQADgCAGABIAKgBIAgADQAQADAbgDIAKgBQAUgBAMACIAVAHIAHACQAGgFABAOIACACIAAAEIgDAJQgEATgOAPIgQAQQgVASgdAFIgLACIgKAAQgaAAgUgOg");
	this.shape_33.setTransform(11.925,14.9975);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#900000").s().p("Ag+AqIgDgCQgZgTAAggQAAgPAHgUIACgHQAEgBAFAAIALgBQAQAAAQABQAQADAbgDIAJAAQAUgCANADIAUAHIAHADQAGgFABAPIABACIAAAEIgCAJQgFASgOAQQgHAIgIAHQgVASgdAFIgLACIgKAAQgaAAgUgOg");
	this.shape_34.setTransform(11.925,14.9325);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#910000").s().p("Ag+ArIgDgDQgZgSAAggQAAgPAHgUIADgGQADgCAGgBIALgBQAQgBAQACQAQABAagCIAKgBQAUgBAMADIAVAHIAGAEQAGgFABAQIABACIAAAFIgCAJQgFARgOAQIgPAPQgWASgcAFIgLACIgJAAQgaAAgVgOg");
	this.shape_35.setTransform(11.925,14.8164);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#920000").s().p("Ag+AsIgCgCQgagTAAgfIAAAAQAAgQAHgTIADgGQAEgDAFAAIAMgCQAQgCAPABQARABAagCIAJgBQAVgBAMADIAUAJIAHADQAFgEABAQIABACIAAAGIgDAJQgFARgOAQQgHAIgIAHQgWARgcAFQgEACgHAAIgJAAQgaAAgUgOg");
	this.shape_36.setTransform(11.95,14.675);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#930000").s().p("Ag+AtIgDgCQgZgTAAgeIAAgBQAAgPAHgTIADgGQAEgDAGgBIALgCQAQgDAQABQAQAAAbgCIAJgBQAUgBAMAEIAUAJIAHAEQAFgEABARIABACIgBAGIgDAJQgFARgOAQQgGAIgJAGQgVARgcAGIgLABIgIAAQgaAAgVgOg");
	this.shape_37.setTransform(11.975,14.546);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#940000").s().p("Ag+AuIgDgCQgZgSAAgfIAAAAQAAgPAIgTIADgGQAEgEAGgBQAFgCAGgBQAQgCAQgBQAQAAAagCIAKgBQAUgBALAEIAUAKIAHAEQAFgEABASIABACIgBAIIgDAJQgFAQgOAQQgHAIgIAGQgVARgdAFQgEABgGAAIgIAAQgaAAgVgOg");
	this.shape_38.setTransform(11.975,14.3977);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#950000").s().p("Ag+AvIgCgCQgZgSAAgeIAAgBQAAgPAHgSIADgHQAEgDAGgCQAFgCAGgBQARgDAQgBQAQAAAagDIAKgBQATgBAMAFIATALIAHAEQAFgEABASIABADQAAAGgBACIgEAJQgFAQgOAQQgGAHgJAHQgVAQgcAFIgKABIgJAAQgaAAgUgOg");
	this.shape_39.setTransform(12,14.2491);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#960000").s().p("Ag+AwIgDgCQgYgSAAgeIAAgBQAAgPAHgSIADgGQAEgEAHgCQAFgDAGgBQARgEAPgBIArgEIAJAAQAUgBALAFIAUALIAGAFQAFgEABATIAAADIgBAJIgDAJQgFAQgOAPIgPAOQgVAQgcAFQgFABgGAAIgHAAQgaAAgVgOg");
	this.shape_40.setTransform(12.025,14.1278);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#970000").s().p("Ag+AxIgCgCQgZgSAAgeIAAAAQAAgPAIgSIADgGQAEgFAGgCIAMgEQARgFAPgBIAqgFIAKAAQAUgBALAFIATAMIAHAFQAEgDABAUIAAADIgBAJIgDAJQgGAQgOAPQgHAHgIAGQgVAQgcAFIgKABIgIAAQgaAAgUgOg");
	this.shape_41.setTransform(12.025,13.9838);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#980000").s().p("Ag+AyIgDgCQgYgSAAgeQAAgPAIgSIAEgGQAEgFAGgDIALgEQASgFAPgCIAqgFIAKgBQAUgBAKAGIATANIAHAFQAEgCAAATIABAEIgCAKIgCAJQgHAPgNAPIgPAOQgWAPgbAFIgLABIgGABQgaAAgVgPg");
	this.shape_42.setTransform(12.05,13.854);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#990000").s().p("Ag+AzIgCgCQgZgSAAgeQAAgPAIgRIAEgGQAEgFAGgDQAFgEAHgCQASgFAPgDIAqgFIAJgBQAUgBAKAHIAUAOIAGAFQAEgDAAAVIABADIgCAMIgDAHQgGAQgOAPQgHAHgIAGQgVAQgcAEIgKABIgHABQgaAAgUgPg");
	this.shape_43.setTransform(12.075,13.7044);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#990000").s().p("Ag+A0IgCgCQgZgSAAgeQAAgOAJgRIAEgGQAEgGAGgDQAFgEAHgCQASgGAPgDQAQgDAagDIAJAAQAUgCAKAHIATAPIAHAGQADgDAAAVIAAAEQAAAHgBAFIgDAHQgHAQgNAPIgPANQgVAPgbAEIgLABIgGAAQgaAAgVgOg");
	this.shape_44.setTransform(12.05,13.5729);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#9A0000").s().p("Ag9A2IgDgCQgYgSAAgeQAAgOAIgSIAEgFQAEgGAHgEQAFgEAHgCIAhgLQAPgDAagDIAJAAQAUgCALAIQAJAGAJAJIAHAGQADgCAAAWIAAADQAAAIgCAFIgDAHQgGAQgOAOQgHAIgIAFQgVAPgbAFIgKABIgFAAQgbAAgUgOg");
	this.shape_45.setTransform(12.075,13.4441);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#9B0000").s().p("Ag+A2IgCgCQgYgRAAgeQAAgOAIgRIAEgGQAFgGAGgFIAMgGQASgHAQgEQAPgEAagDIAJgBQAUgBAKAIIATAQIAFAGQAEgCAAAWIAAAEIgCAOIgEAHQgFAQgPAOIgPANQgUAOgcAEIgJABIgHABQgZAAgVgPg");
	this.shape_46.setTransform(12.1,13.3052);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#9C0000").s().p("Ag9A4IgCgCQgZgSAAgeQAAgOAJgRIADgFQAFgHAHgEQAFgFAHgCQATgIAPgFQAOgEAagDIAJgBQAVgBAKAIQAIAHAKAKIAGAHQADgCAAAXIAAAEQgBAIgBAFIgEAIQgGAQgOANQgHAIgIAFQgVAOgbAFIgKABIgFAAQgaAAgUgOg");
	this.shape_47.setTransform(12.1,13.1761);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#9D0000").s().p("Ag9A5QgbgSAAgfQAAgOAJgRQAJgRATgIQASgIAPgFQAPgFAagDQAbgEAMALQAMAKAMAOQADgBAAAXQAAAegbAZQgZAZglAGIgOABQgbAAgUgOg");
	this.shape_48.setTransform(12.125,13.0106);
	this.shape_48._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_48}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_48).wait(48).to({_off:false},0).wait(70));

	// Layer_1
	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#C00000").s().p("AhVBZQgjggAAg4QAAgmARghIAAAQQAAA2AeAiQAeAhArgIQAqgHAegtQAdgsAAg3IgBgVQAVAdAAAqQAAA3gkAtQgiAtgzAKQgKABgKAAQglAAgcgZg");
	this.shape_49.setTransform(12.1,11.4476);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#C00000").s().p("AhBBmQgKgGgKgIQgjggAAg4QAAgmASghIgBAPQAAAfAKAYQAIAQANAPQAIAIAJAGQAYAQAfgGIAMgDQAfgKAYgfIAFgHQARgXAHgbQAGgWAAgXIgBgVQAUAeAAApQAAAVgFASQgJAggWAcQgUAagZAOQgTALgVAEQgJACgKAAQgZAAgVgMg");
	this.shape_50.setTransform(12.0756,11.5568);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#C10000").s().p("AhCBlQgJgGgKgIQgjggAAg3QAAgmASghIgBAOQABAdAKAXQAIARANANQAIAJAJAFQAYAQAegGIANgDQAfgKAYgeIAEgGQARgXAIgaQAGgWAAgVIgBgUQATAdgBAqQAAAUgFATQgIAfgXAcQgUAagYANQgTALgVAEQgKACgJAAQgZAAgWgMg");
	this.shape_51.setTransform(12.0524,11.7068);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#C10000").s().p("AhCBkQgKgGgJgIQgjggAAg2QAAgnARghIAAAOQABAdAKAWQAIAPANAOQAIAIAJAFQAYAPAegGIANgDQAfgKAYgdIAFgFQAQgWAIgZQAGgVAAgVIgBgSQATAdgBApQAAAUgGASQgIAggXAbQgUAagYANQgTALgVADIgSABQgZAAgWgLg");
	this.shape_52.setTransform(12.0525,11.8453);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#C10000").s().p("AhCBiQgKgFgJgJQgigfAAg2IAAgBQAAgmARggIAAANQABAbAKAWQAIAPANAMQAIAIAJAFQAYAPAegGIANgDQAfgKAYgbIAFgGQAQgVAIgYQAGgVAAgTIgBgSQASAdgBApQAAAUgGATQgJAfgWAbQgUAZgZANQgTALgUADIgSACQgZAAgWgNg");
	this.shape_53.setTransform(12.0276,11.9688);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#C10000").s().p("AhCBhQgKgFgJgIQgiggAAg2QAAgmARghIAAANQABAaALAVQAIAOANANQAIAHAJAFQAYAOAegGIAMgDQAggKAXgZIAFgGQAQgVAJgWQAFgVAAgRIgBgRQASAdgBAoQgBAUgFASQgJAfgXAbQgUAZgZANQgSAKgVADIgRABQgaAAgVgMg");
	this.shape_54.setTransform(12.0058,12.0938);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#C20000").s().p("AhDBgQgJgFgJgJQgiggAAg1QAAgmARggIAAAMQABAZALAUQAJAPANALQAIAHAJAFQAXANAegGIANgDQAggKAXgYIAEgGQARgUAIgVQAGgUAAgQIgBgRQARAdgBApQgBATgGATQgJAegXAbQgUAYgYANQgTAKgVADIgRACQgZAAgWgNg");
	this.shape_55.setTransform(12.0059,12.2188);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#C20000").s().p("AhDBfQgJgFgJgJQgigfAAg2QAAglARghIAAAMQACAYALATQAJAOANALQAIAHAJAEQAXANAegFIANgDQAggKAWgYIAFgFQAQgTAJgVQAGgTAAgPIgBgQQARAegCAoQgBATgGASQgKAfgWAaQgUAYgZANQgTAKgUADIgQABQgaAAgWgNg");
	this.shape_56.setTransform(11.9855,12.3331);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#C20000").s().p("AhDBeQgKgGgIgIQgiggAAg1QAAglARggIAAALQACAWAMATQAIAOANAKQAJAGAJAFQAXAMAegGIAMgDQAggJAXgXIAEgFQARgSAJgTQAFgUAAgNIgBgPQARAegDAnQgBATgGASQgKAfgWAaQgUAYgZAMQgTAKgUADIgPABQgbAAgVgNg");
	this.shape_57.setTransform(11.9664,12.4818);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#C20000").s().p("AhDBcQgJgFgJgIQghggAAg1QAAglAQggIABALQACAVAMASQAIANAOAKQAIAGAJAEQAXAMAdgGIANgDQAggJAXgWIAEgFQAQgRAJgSQAFgSABgNIAAAAIgBgOQAQAdgDAoQgBATgGARQgKAfgWAaQgUAXgZAMQgTAKgUADIgOABQgbAAgWgOg");
	this.shape_58.setTransform(11.9487,12.6221);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#C20000").s().p("AhDBcQgKgGgIgIQghggAAg0QAAglAQggIABAKQACAUAMARQAJANANAKQAIAFAJAEQAXALAegGIAMgCQAhgJAWgVIAFgFQAQgQAJgRQAFgTAAgKIAAgBIgBgNQAQAegDAnQgCATgGAQQgKAfgWAaQgUAXgZAMQgTAKgUACIgOABQgbAAgVgNg");
	this.shape_59.setTransform(11.9487,12.7471);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#C30000").s().p("AhEBaQgJgFgJgJQgggfAAg0IAAgBQAAgkAQggIABAKQACATANAQQAJAMANAJQAIAGAJAEQAXAKAdgGIANgCQAggJAWgUIAFgFQAQgPAJgQQAGgSAAgJIAAgBIgBgMQAPAdgDAnQgCATgGARQgLAegWAaQgUAXgZALQgTAKgTACIgNABQgbAAgXgOg");
	this.shape_60.setTransform(11.925,12.8881);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#C30000").s().p("AhEBZQgJgGgJgIQgggfAAg0IAAgBQAAgkAQggIABAJQADASAMAQQAJALAOAJQAIAGAJADQAWAKAegFIAMgDQAhgJAWgTIAEgEQAQgPAKgPQAFgRAAgIIAAgBIgBgLQAPAdgEAnQgCASgGARQgKAegXAZQgUAXgYAMQgTAJgUACIgMABQgcAAgWgOg");
	this.shape_61.setTransform(11.909,13.0122);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#C30000").s().p("AhEBYQgJgGgJgIQgggfAAg0IAAAAQAAgkAQggIABAJQADAQANAPQAKALANAJQAIAFAJADQAWAJAegFIAMgCQAhgJAWgTIAEgEQAQgNAKgOQAFgSAAgGIgBgLQAOAdgEAmQgCATgGAQQgLAfgWAYQgUAXgZALQgTAJgTADIgMAAQgcAAgWgOg");
	this.shape_62.setTransform(11.8944,13.1299);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#C40000").s().p("AhEBXQgKgGgIgIQgggfAAg0IAAAAQAAgkAQggIABAIQAEAQAMAOQAKAKANAIQAJAFAIADQAXAKAdgGIANgCQAggJAWgSIAEgEQAQgMAKgNQAFgRAAgFIAAgKQANAdgEAmQgCASgHARQgLAegWAYQgUAWgZAMQgTAIgTADIgKAAQgcAAgXgOg");
	this.shape_63.setTransform(11.8813,13.2725);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#C40000").s().p("AhFBVQgJgFgIgIQggggAAgzQAAgkAQggIABAIQAEAPANAMQAKAKANAIQAIAFAJADQAWAJAegGIAMgDQAhgJAVgQIAFgDQAQgMAKgMQAFgQAAgEIgBgJQANAdgEAlQgDATgGAQQgLAegXAYQgUAWgZALQgSAJgUABIgLABQgbAAgXgPg");
	this.shape_64.setTransform(11.8829,13.4042);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#C40000").s().p("AhFBUQgJgFgIgIQggggAAgzQAAgjAQggIABAHQAEAOANAMQAKAJAOAHQAIAFAJADQAWAIAdgGIAMgCQAhgJAWgPIAEgEQAQgLAKgKIAFgTIgBgIQANAdgFAlQgCATgHAQQgLAdgXAYQgUAWgYALQgTAIgTACIgKAAQgcAAgXgPg");
	this.shape_65.setTransform(11.8694,13.522);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#C40000").s().p("AhGBTQgJgGgIgIQgfgfAAgzQAAgjAQggIABAHQAEAMAOAMQAKAIANAHIARAHQAWAIAegGIAMgCQAhgJAVgOIAEgDQAQgKALgKIAFgRIgBgHQAMAdgFAlQgDASgHAQQgLAdgXAYQgUAVgYALQgTAIgTACIgKAAQgcAAgXgPg");
	this.shape_66.setTransform(11.859,13.672);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#C50000").s().p("AhGBSQgJgFgIgIQgfggAAgyIAAgBQAAgiAQggIABAGQAFALANALQALAIANAHIARAGQAWAHAdgFIAMgDQAigJAVgNIAEgDQAQgJAKgJIAFgOIgBgHQAMAdgFAlQgDASgHAQQgMAdgWAXQgVAVgYALQgTAIgTABIgIAAQgcAAgYgPg");
	this.shape_67.setTransform(11.8508,13.7906);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#C50000").s().p("AhGBRQgJgGgIgIQgegfAAgyIAAgBQAAgiAPggIACAGQAEAKAOAKQALAHANAGQAIAEAJACQAWAHAdgGIAMgCQAigJAUgMIAFgCIAagQIAFgNIgBgHQALAegFAkQgDASgHAQQgMAdgXAXQgUAVgYAKQgTAIgTABIgIABQgdAAgXgQg");
	this.shape_68.setTransform(11.8417,13.9152);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#C50000").s().p("AhGBPQgJgFgIgIQgegfAAgyIAAgBQAAgiAPgfIACAFQAFAIAOAJQAKAIAOAFIARAFQAVAHAegGIAMgCQAhgJAVgLIAEgCIAbgOQAEgOAAADIAAgGQAKAegGAkQgDARgHAQQgMAdgXAWQgUAVgYAKQgTAIgTABIgGABQgeAAgXgRg");
	this.shape_69.setTransform(11.8341,14.06);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#C50000").s().p("AhHBOIgQgNQgeggAAgxIAAgBQAAgiAPgfIACAEQAFAIAOAIQALAHANAFIASAFQAVAGAdgGIAMgDQAigIAUgKIAEgCIAbgMQAFgOAAAEIgBgDQAKAdgGAjQgDASgIAPQgMAdgWAWQgVAUgYAKQgTAIgTABIgGAAQgdAAgYgQgABwhdIAAAAIAAAAg");
	this.shape_70.setTransform(11.8263,14.2475);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#C50000").s().p("AhHBMQgJgGgHgHQgegfAAgyIAAAAQAAgiAPgfIACAEQAFAGAPAIQALAGANAEIARAEQAVAGAegGIALgCQAigIAUgJIAFgCIAbgKQAEgMAAADIAAAAQAJAcgGAiQgEASgHAPQgNAcgWAWQgVAUgYAKQgTAIgSABIgFAAQgeAAgYgRg");
	this.shape_71.setTransform(11.8283,14.4361);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#C60000").s().p("AhIBMQgIgGgIgIQgdgfAAgxIAAAAQAAgiAPgfIACADQAFAGAPAGQALAGAOAEIARAEQAVAFAdgGIAMgCQAigIAUgIIAEgCIAbgIIAEgJIAAAAIAAAAIAAAAQAJAegHAjQgDARgIAPQgNAcgWAWQgUAUgZAJQgTAIgSABIgFAAQgeAAgYgRg");
	this.shape_72.setTransform(11.8225,14.4806);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#C60000").s().p("AhIBMQgIgGgIgIQgdgfAAgxIAAAAQAAghAPggIACADQAGAEAPAGQALAFANAEIASADQAVAFAdgGIALgCQAigIAUgHIAEgCIAcgGQAEgNAAAJIgBgCQAJAegHAiQgEARgHAPQgNAdgXAVQgUATgZAKQgSAHgTABIgDAAQgfAAgYgRg");
	this.shape_73.setTransform(11.8205,14.5452);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#C60000").s().p("AhIBLQgJgGgHgHQgdgfAAgxIAAgBQAAggAOggIACADIAWAIIAZAIIARACQAVAEAdgFIAMgDIA2gNIAEgCIAbgEQAEgMAAAKIAAAAQAIAegIAhQgEARgHAOQgNAdgXAUQgUAUgZAJQgSAHgSAAIgEAAQgeAAgYgRg");
	this.shape_74.setTransform(11.8063,14.5554);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#C70000").s().p("AhJBLQgIgFgIgIQgcgfAAgxIAAAAQAAghAOgfIACACIAXAGIAZAHIARACQAVAEAcgGIAMgCIA2gNIAEgBQAQgCALAAQAFgMAAALIgBAAQAIAegIAiQgEAQgIAPQgNAcgXAVQgUATgYAIQgTAHgSABIgDAAQgeAAgZgSg");
	this.shape_75.setTransform(11.8065,14.5962);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#C70000").s().p("AhJBLQgJgGgHgIQgcgfAAgwIAAgBQAAgfAOggIACABIAXAFIAZAFIARACQAVADAdgGIAMgCIA1gLIAEgBQAQgBAMABQAEgMAAANIAAABIAAAAQAHAdgIAiQgFARgHAOQgOAcgXAUQgUATgYAJQgTAGgSABIgBAAQgfAAgZgSg");
	this.shape_76.setTransform(11.8133,14.6501);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#C70000").s().p("AhKBLIgPgOQgcgfAAgwIAAAAQAAggAOggIACABQAHAAARADIAZAEIARACQAVACAcgFIAMgDQAigHAUgDIAEAAQAPgBAMACQAFgLAAAOIAAABIgBAAQAHAegJAiQgEAQgIAPQgOAbgWAUQgVASgYAJQgTAHgSAAIgBAAQgfAAgZgSg");
	this.shape_77.setTransform(11.8081,14.6837);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#C70000").s().p("AhKBKQgIgGgHgHQgcgfAAgwIAAAAQAAggAOgfIACAAQAIgBAQACIAZADIASABQAUACAdgFIALgDQAjgHATgCIAEAAQAQAAAMADQAEgKAAAPIAAABIgBABQAHAegJAhQgFAQgIAPQgOAbgWAUQgVASgYAIQgTAHgRAAQggAAgZgTg");
	this.shape_78.setTransform(11.8113,14.713);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#C80000").s().p("AhKBLQgJgGgHgIQgbgeAAgwIAAAAQAAggAOgfIACAAQAIgDARACIAZACIARAAQAVACAcgGIAMgCQAjgHATgBIADAAQAQABAMAFQAEgLAAARIAAABIAAACQAGAegJAhQgFAPgIAPQgPAbgWAUQgUARgZAIQgSAHgSAAQgfAAgZgTg");
	this.shape_79.setTransform(11.82,14.675);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#C80000").s().p("AhLBMQgIgGgHgHQgbgfAAgvIAAgBQAAgfAOgfQAAAAAAgBQABAAAAAAQAAAAABAAQAAAAAAAAQAIgEARABIAaABIARAAQAUABAdgFIALgDQAjgHATABIAEAAQAPACANAFQAEgKAAATIAAAAIgBADQAFAegJAhQgFAPgIAPQgOAbgXATQgUARgZAIQgRAGgTAAQgfAAgZgTg");
	this.shape_80.setTransform(11.8143,14.5733);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#C80000").s().p("AhLBNQgIgGgHgHQgbgfAAgvIAAgBQAAgfAOgfIACgBQAIgFASAAIAZABIASgBQAUAAAcgFIAMgCQAjgHASABIAEABQAPADANAGQAEgKAAAUIAAABIAAADQAEAegJAhQgFAOgJAPQgOAbgXATQgUARgZAIQgRAGgTAAQgfgBgYgTg");
	this.shape_81.setTransform(11.8223,14.4618);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#C80000").s().p("AgUBjQgfgBgZgTQgIgGgGgIQgbgeAAgvIAAgBQAAgeANgfIADgCQAJgGARgBIAagBIARgBQAUAAAdgFIALgCQAjgHATACIADABQAQAEANAHQAEgJAAAVIAAABIgBAEQAEAegKAgQgFAPgIAPQgPAagXATQgUARgYAHQgRAGgRAAIgCAAg");
	this.shape_82.setTransform(11.8321,14.344);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#C80000").s().p("AgVBkQgfAAgYgUIgPgNQgagfAAguIAAgBQAAgeANgfIADgCQAJgHASgCIAagCIARgBQAUgBAcgFIALgDQAkgHASAEIAEABQAPAFANAIQAEgIAAAWIAAABIgBAFQAEAegKAgQgFAOgJAPQgPAagWASQgVARgYAHQgPAFgQAAIgFAAg");
	this.shape_83.setTransform(11.8321,14.1844);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#C90000").s().p("AgWBmQgegBgYgUQgIgFgHgIQgageAAgvIAAAAQAAgfANgeIADgDQAJgIASgDIAagDIASgCQATgBAdgFIALgCQAjgHASAFIAEABQAPAFAOAKQADgIAAAYIAAAAIAAAGQADAegKAfQgGAPgIAPQgQAagWASQgVAQgYAHQgPAFgPAAIgGAAg");
	this.shape_84.setTransform(11.8438,14.0535);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#C90000").s().p("AgXBoQgegBgYgUQgIgGgHgHQgagfAAguIAAAAQAAgeAOgfIADgDQAJgKASgDIAbgEIARgCQATgCAdgFIALgCQAjgHASAGIAEABQAPAHAOAKQADgIAAAaIAAAAIAAAHQADAegLAeQgGAPgJAPQgPAagXARQgUARgYAGQgPAFgPAAIgGAAg");
	this.shape_85.setTransform(11.8571,13.9192);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#C90000").s().p("AgYBqQgegCgYgTIgOgNQgagfAAguIAAAAQAAgeAOgfIADgEQAJgKASgEIAbgFIASgDIAvgHIALgDQAkgGASAHIADABQAPAIAOALQAEgHAAAbIgBAHQADAfgMAdQgFAQgJAOQgQAagWARQgVAQgYAHQgPAEgPAAIgGAAg");
	this.shape_86.setTransform(11.875,13.7769);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#CA0000").s().p("AgYBsQgegCgYgUQgIgFgHgIQgZgeAAguIAAgBQAAgdANgfIADgEQAKgMASgEIAbgGIASgEIAwgHIAKgDQAkgGASAIIADABQAQAJAOAMQADgHAAAdIAAAIQABAegLAeQgGAPgJAOQgQAagWARQgVAPgYAHQgPAEgPAAIgFAAg");
	this.shape_87.setTransform(11.9,13.6376);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#CA0000").s().p("AgaBtQgdgCgYgTQgIgGgGgIQgZgeAAgtIAAgBQAAgdANgfIADgFQAKgMATgGIAbgHIARgEIAwgIIALgCQAjgHASAJIADACQAQAJAOAOQADgGAAAdIAAAKQABAegMAdQgGAPgJAOQgQAZgXARQgUAPgZAHQgNAEgOAAIgIgBg");
	this.shape_88.setTransform(11.925,13.506);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#CA0000").s().p("AgaBvQgegCgXgUQgIgGgGgHQgZgeAAguIAAAAQAAgdANgfIADgFQAKgOATgGIAcgIIARgFIAvgIIALgCQAkgHARAKIAEACQAPAKAOAPQADgGAAAfIAAAAIAAAKQABAegMAdQgGAPgKAOQgQAZgWARQgVAPgYAGQgNAEgOAAIgIgBg");
	this.shape_89.setTransform(11.925,13.3643);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#CA0000").s().p("AgcBxQgcgCgYgUQgIgGgFgHQgagfAAgtIAAgBQAAgcANgeIAEgGQALgPASgHIAcgJIARgFIAvgKIALgCQAkgGASALIADADQAPALAOAQQAEgGAAAgIAAAAIgBALQABAegNAdQgHAOgJAOQgQAZgXAQQgUAPgZAGQgMAEgOAAIgJgBg");
	this.shape_90.setTransform(11.95,13.2129);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#CB0000").s().p("AgcBzQgdgDgYgUQgHgFgGgIQgZgeAAgtIAAgBQAAgcANgeIAEgHQAKgQAUgIIAbgJIASgGQASgFAcgFIALgCQAlgGARAMIADADQAPAMAOARQAEgGAAAiIAAAAIgBAMQAAAegMAcQgHAPgJAOQgRAYgXAQQgUAPgZAFQgNAEgNAAIgIgBg");
	this.shape_91.setTransform(11.975,13.0688);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#CB0000").s().p("AgeB1QgdgDgWgUQgIgGgGgHQgYgeAAgtIAAgBQAAgcANgeIADgHQAMgRATgJIAcgLIARgGQATgFAbgFIALgCQAlgGAQANIAEADQAPANAPASQADgFAAAjIAAAAIgBAMQAAAfgNAcQgHAOgJAOQgRAYgXAQQgUAOgZAGQgMADgNAAIgKgBg");
	this.shape_92.setTransform(12,12.9257);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#CB0000").s().p("AgeB3QgdgDgXgUIgNgNQgYgeAAgtIAAgBQAAgbAMgeIAEgIQALgSAUgKIAcgLIASgHQASgFAcgGIALgCQAkgGARAPIADADQAPANAPAUQADgFAAAkIAAABIAAANQgBAdgOAdQgHAOgJANQgRAZgXAPQgUAOgZAFQgLADgMAAIgLgBg");
	this.shape_93.setTransform(12.025,12.7455);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#CB0000").s().p("AgfB5QgdgDgXgVQgHgGgFgHQgZgeAAgtIAAgBQAAgaANgeIAEgIQAMgUATgKIAcgNIASgHQASgGAcgFIALgCQAlgGAQAPIADAEQAPAOAPAUQADgEABAmIAAAAIgBAOQgCAdgNAdQgIAOgJANQgSAYgWAPQgUAOgZAFQgKADgLAAIgNgBg");
	this.shape_94.setTransform(12.05,12.6144);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#CB0000").s().p("AggB7QgdgEgWgUQgHgGgGgHQgYgeAAgtIAAgBQAAgaAMgeIAFgJQALgUAVgLIAcgOIARgIQATgGAcgFIAKgCQAlgGAQAQIADAEQAPAPAPAVQAEgDAAAnIAAAAIgBAPQgCAdgNAcQgIAOgKANQgRAYgXAPQgUANgZAFQgKADgLAAIgNgBg");
	this.shape_95.setTransform(12.05,12.4681);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#CC0000").s().p("AghB9QgcgEgXgUQgHgGgFgHQgYgeAAgtIAAgBQAAgaAMgeIAFgJQAMgWAUgMIAdgPIARgIQASgHAcgFIAKgCQAlgFAQARIADAEQAPAQAQAXQADgEAAApIAAAAIgBAQQgCAdgOAcQgIANgKAOQgRAXgXAPQgUANgZAFQgKACgKAAIgOgBg");
	this.shape_96.setTransform(12.075,12.3113);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#CC0000").s().p("AhVBmQgjggAAg4QAAgaAMgeQAMgdAZgQQAagPAUgJQAVgJAjgGQAlgFAQASQARASARAbQADgDAAAqQAAA3gkAtQgiAtgzAKQgKACgKAAQglAAgcgag");
	this.shape_97.setTransform(12.1,12.1596);
	this.shape_97._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_49}]}).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_97}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_97).wait(48).to({_off:false},0).wait(70));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-0.6,24.2,25.6);


(lib.sidescreen = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_22();
	this.instance.setTransform(0,0,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_21();
	this.instance_1.setTransform(140.8,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sidescreen, new cjs.Rectangle(0,0,182.3,205), null);


(lib.Scene_1_windows = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// windows
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#583300").ss(20,1,1).p("A/816MA/4AAAMAAAAr1Mg/4AAAg");
	this.shape.setTransform(318.6232,210.1098,0.8001,0.8168);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(438).to({_off:false},0).wait(196));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_wasabi = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// wasabi
	this.instance = new lib.wasabi();
	this.instance.setTransform(892,-4,0.144,0.144);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(534).to({_off:false},0).wait(100));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_sky = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sky
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#66A1E4").s().p("A+oYjMAAAgxFMA9RAAAMAAAAxFg");
	this.shape.setTransform(318.55,209.4);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(438).to({_off:false},0).wait(195));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Hands_copy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Hands_copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgRARQgHgGAAgLQAAgKAHgHQAHgHAKAAQALAAAGAHQAFAEABAFQACAEAAAEQAAALgIAGQgGAIgLAAQgKAAgHgIg");
	this.shape.setTransform(460.5,127.75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(1,1,1).p("AARAAQAAAHgFAEQgFAFgHAAQgGAAgFgFQgFgEAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGg");
	this.shape_1.setTransform(254.1,169.55);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FF0000").ss(0.8,1,1).p("AkKAwIIVhf");
	this.shape_2.setTransform(488.9,123.075);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#283F28").s().p("AgLAMQgEgFgBgHQABgGAEgFQAFgFAGABQAHgBAEAFQAFAFABAGQgBAHgFAFQgEAEgHAAQgGAAgFgEg");
	this.shape_3.setTransform(254.1,169.55);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AhPDyQgDgHAAgJIAGnHQAAgIADgHQAEgFAFAAQAFAAADAGQAEAIgBALIgFGtIBzj0QACgFAGgEQAFgCAFABQAFAAACAEQACAFgEAGIh5EBIgCAEQgCADgEABQgFADgFAAQgBAFgDAEQgDAHgEAAQgFAAgEgIg");
	this.shape_4.setTransform(467.1114,104.2477);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FF0000").ss(0.8,1,1).p("AkNAbIIbg1");
	this.shape_5.setTransform(489.15,125.425);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FF0000").ss(0.8,1,1).p("AkOASIIdgj");
	this.shape_6.setTransform(489.15,126.25);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FF0000").ss(0.8,1,1).p("AkPAGIIegL");
	this.shape_7.setTransform(489.1,127.325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_5},{t:this.shape_1},{t:this.shape}]},8).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_6},{t:this.shape_1},{t:this.shape}]},81).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_7},{t:this.shape_1},{t:this.shape}]},93).wait(254));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Hands = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Hands
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgRARQgHgGAAgLQAAgKAHgHQAHgHAKAAQALAAAGAHQAFAEABAFQACAEAAAEQAAALgIAGQgGAIgLAAQgKAAgHgIg");
	this.shape.setTransform(460.5,127.75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(1,1,1).p("AARAAQAAAHgFAEQgFAFgHAAQgGAAgFgFQgFgEAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGg");
	this.shape_1.setTransform(254.1,169.55);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FF0000").ss(0.8,1,1).p("AkKAwIIVhf");
	this.shape_2.setTransform(488.9,123.075);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#283F28").s().p("AgLAMQgEgFgBgHQABgGAEgFQAFgFAGABQAHgBAEAFQAFAFABAGQgBAHgFAFQgEAEgHAAQgGAAgFgEg");
	this.shape_3.setTransform(254.1,169.55);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AhPDyQgDgHAAgJIAGnHQAAgIADgHQAEgFAFAAQAFAAADAGQAEAIgBALIgFGtIBzj0QACgFAGgEQAFgCAFABQAFAAACAEQACAFgEAGIh5EBIgCAEQgCADgEABQgFADgFAAQgBAFgDAEQgDAHgEAAQgFAAgEgIg");
	this.shape_4.setTransform(467.1114,104.2477);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FF0000").ss(0.8,1,1).p("AkNAbIIbg1");
	this.shape_5.setTransform(489.15,125.425);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FF0000").ss(0.8,1,1).p("AkOASIIdgj");
	this.shape_6.setTransform(489.15,126.25);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FF0000").ss(0.8,1,1).p("AkPAGIIegL");
	this.shape_7.setTransform(489.1,127.325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_5},{t:this.shape_1},{t:this.shape}]},8).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_6},{t:this.shape_1},{t:this.shape}]},81).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_7},{t:this.shape_1},{t:this.shape}]},93).wait(290));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_backround_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// backround_2
	this.text = new cjs.Text("", "12px 'TimesNewRomanPSMT'", "#283F28");
	this.text.textAlign = "center";
	this.text.lineHeight = 15;
	this.text.lineWidth = 48;
	this.text.parent = this;
	this.text.setTransform(636.9,223.3);

	this.text_1 = new cjs.Text("", "12px 'TimesNewRomanPSMT'", "#283F28");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 15;
	this.text_1.lineWidth = 45;
	this.text_1.parent = this;
	this.text_1.setTransform(696.4,7.3);

	this.text_2 = new cjs.Text("12", "12px 'Times New Roman'", "#283F28");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 15;
	this.text_2.lineWidth = 30;
	this.text_2.parent = this;
	this.text_2.setTransform(460.35,66.1);

	this.text_3 = new cjs.Text("11", "12px 'Times New Roman'", "#283F28");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 15;
	this.text_3.lineWidth = 37;
	this.text_3.parent = this;
	this.text_3.setTransform(434.9,73.2);

	this.text_4 = new cjs.Text("10", "12px 'Times New Roman'", "#283F28");
	this.text_4.textAlign = "center";
	this.text_4.lineHeight = 15;
	this.text_4.parent = this;
	this.text_4.setTransform(417.45,91.2);

	this.text_5 = new cjs.Text("9", "12px 'Times New Roman'", "#283F28");
	this.text_5.textAlign = "center";
	this.text_5.lineHeight = 15;
	this.text_5.lineWidth = 40;
	this.text_5.parent = this;
	this.text_5.setTransform(409.95,115.05);

	this.text_6 = new cjs.Text("8", "12px 'Times New Roman'", "#283F28");
	this.text_6.textAlign = "center";
	this.text_6.lineHeight = 15;
	this.text_6.lineWidth = 100;
	this.text_6.parent = this;
	this.text_6.setTransform(412.7,138.35);

	this.text_7 = new cjs.Text("7", "12px 'Times New Roman'", "#283F28");
	this.text_7.textAlign = "center";
	this.text_7.lineHeight = 15;
	this.text_7.lineWidth = 30;
	this.text_7.parent = this;
	this.text_7.setTransform(427.2,159.3);

	this.text_8 = new cjs.Text("6", "12px 'Times New Roman'", "#283F28");
	this.text_8.textAlign = "center";
	this.text_8.lineHeight = 15;
	this.text_8.lineWidth = 49;
	this.text_8.parent = this;
	this.text_8.setTransform(460.45,170.3);

	this.text_9 = new cjs.Text("5", "12px 'Times New Roman'");
	this.text_9.textAlign = "center";
	this.text_9.lineHeight = 15;
	this.text_9.lineWidth = 50;
	this.text_9.parent = this;
	this.text_9.setTransform(493.2,160.35);

	this.text_10 = new cjs.Text("4", "12px 'Times New Roman'");
	this.text_10.textAlign = "center";
	this.text_10.lineHeight = 15;
	this.text_10.lineWidth = 40;
	this.text_10.parent = this;
	this.text_10.setTransform(510.45,135.95);

	this.text_11 = new cjs.Text("3", "12px 'Times New Roman'");
	this.text_11.textAlign = "center";
	this.text_11.lineHeight = 15;
	this.text_11.lineWidth = 35;
	this.text_11.parent = this;
	this.text_11.setTransform(509.2,111.35);

	this.text_12 = new cjs.Text("2", "12px 'Times New Roman'");
	this.text_12.textAlign = "center";
	this.text_12.lineHeight = 15;
	this.text_12.lineWidth = 33;
	this.text_12.parent = this;
	this.text_12.setTransform(499.95,88.05);

	this.text_13 = new cjs.Text("1", "12px 'Times New Roman'");
	this.text_13.textAlign = "center";
	this.text_13.lineHeight = 15;
	this.text_13.lineWidth = 24;
	this.text_13.parent = this;
	this.text_13.setTransform(482.9,73.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#660033").ss(6,1,1).p("AJmAAQAAD+i0C0Qi0C0j+AAQj9AAi0i0Qizi0AAj+QAAj9Czi0QC0i0D9AAQD+AAC0C0QC0C0AAD9g");
	this.shape.setTransform(460.9,125.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AmxGyQizi0gBj+QABj9Czi0QC0i0D9AAQD+AAC0C0QCzC0ABD9QgBD+izC0Qi0C0j+AAQj9AAi0i0gAgTAIQgHAHAAALQAAALAHAGQAHAIALAAQAKAAAGgIQAIgGAAgLQAAgFgCgEQgBgFgFgEQgGgHgKAAQgLAAgHAHg");
	this.shape_1.setTransform(460.9,125.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text_13},{t:this.text_12},{t:this.text_11},{t:this.text_10},{t:this.text_9},{t:this.text_8},{t:this.text_7},{t:this.text_6},{t:this.text_5},{t:this.text_4},{t:this.text_3},{t:this.text_2},{t:this.text_1},{t:this.text}]},2).wait(436));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.rigthHandWoman = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#2E773A").s().p("AAAABIABgBIgBABg");
	this.shape.setTransform(0.1098,66.4266,1,1,54.5249);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E7E0E9").s().p("AALEHIgEgDIgIgFIABgDIAAgBIgBgFQgBgFACgKQAGgxAOgvIAJgfQAFgSACgNIAAgBQgOAigZAzQgTAngNASQgIAMgJAEIgDABIgCACIgBAAQgQAEgRgMQgHgFgDgHQgCgEABgNIgCgBIAEgIIAEgQQADgHAHgNQAnhFAOhNQACgOAAgHIAAgFQABgEgBgEQgDgIgLgCQgGgBgKADIhEAQQgPAEgHAAQgKAAgQgFQgSgFgLgJQgOgLABgRQABgJAHgLQAIgMANgKIAOgFQAQgGAXgOIAMgIIAQgEIAngNIAqgSIAogQIAPgFQAVgGALgHIAMgLQAXgWAKgUQACgFAEgEICEBMIgGAQIgBACIgBABQAAAFgDAGQgfBAgHBFIgDAXIgEBBIgBAnIABAhIAAARIACAWQAAAJgDANQgGAXgMATQgLAQgLAFQgHACgIgBQgIgBgFgFQgEgDgCgGIgBgHQgDgOACgaIABgWQAEgngGgVIgCABQgPAogLAiIgEAVIgDAMIgEAOQgLAfgTAEQgEADgDABIgDAAQgIAAgKgIgAjxhEIACgCIgBACg");
	this.shape_1.setTransform(28.8304,58.7293,1,1,54.5249);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1E231C").s().p("AluEvQgDgsgJgrQAggDAagIQAygPAmgVQB1gnBbhBQA0gjAQgPIARgPQDFjwALgyQAKgwBEAIQAoAPgJBBIgBAKQg4B3hHBmIgKALQhIBIhoBRIgCACIgIAGQgrAigRAFIg2AdQhBAnhsAkIAWgGIgUAGQhCAUhEARIgBgeg");
	this.shape_2.setTransform(92.9412,33.2434);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.rigthHandWoman, new cjs.Rectangle(0,0,130.9,85.8), null);


(lib.rigthHandMan = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#2E773A").s().p("AAAABIABgBIgBABg");
	this.shape.setTransform(11.5246,148.3274,0.9998,0.9998,3.9988);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E7E0E9").s().p("AALEHIgEgDIgIgFIABgDIAAgBIgBgFQgBgFACgKQAGgxAOgvIAJgfQAFgSACgNIAAgBQgOAigZAzQgTAngNASQgIAMgJAEIgDABIgCACIgBAAQgQAEgRgMQgHgFgDgHQgCgEABgNIgCgBIAEgIIAEgQQADgHAHgNQAnhFAOhNQACgOAAgHIAAgFQABgEgBgEQgDgIgLgCQgGgBgKADIhEAQQgPAEgHAAQgKAAgQgFQgSgFgLgJQgOgLABgRQABgJAHgLQAIgMANgKIAOgFQAQgGAXgOIAMgIIAQgEIAngNIAqgSIAogQIAPgFQAVgGALgHIAMgLQAXgWAKgUQACgFAEgEICEBMIgGAQIgBACIgBABQAAAFgDAGQgfBAgHBFIgDAXIgEBBIgBAnIABAhIAAARIACAWQAAAJgDANQgGAXgMATQgLAQgLAFQgHACgIgBQgIgBgFgFQgEgDgCgGIgBgHQgDgOACgaIABgWQAEgngGgVIgCABQgPAogLAiIgEAVIgDAMIgEAOQgLAfgTAEQgEADgDABIgDAAQgIAAgKgIgAjxhEIACgCIgBACg");
	this.shape_1.setTransform(23.8389,121.2697,0.9998,0.9998,3.9988);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#191E1B").s().p("AiEF/IgKgtIgch3QgCgGAAgPIgBghIgFhAQgFgvAKhOIACgEIACgKIABgBIAJgjIABgBIAAgBIAHgYQAJgfACgDIAPggIAOglQAahFAnhCIAIgGIBdhsIABgFIAMgMQALgKAOgIIAfgSIAJgEIADABQAaAcAIAMQAIALADALQADAKgYAdIgNARIAAABIgEACIgBACIgCACIgBAEIgHAJIgSAXIgbAiIgBABIAAABIgBABIgEAEIgDAEIgCACIgCABIgBACIgCADIgCABIgBACIgBADIgCACIgaAlIAAAAIgEALQgSAvgPAYQgNAYAAAEQhXC5A7DgQABAEACAEQARA4AdAvQARAiAXAdIhxBCQgmg+gfhBgABMmdIAAABIACgEIgCADgAA5nHIABgCIABABIAAgDIAAAAIgCAEg");
	this.shape_2.setTransform(45.4574,52.0066,0.9998,0.9998,0,3.9988,-176.0012);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.rigthHandMan, new cjs.Rectangle(0.3,0.2,62.900000000000006,148.3), null);


(lib.replay = function(mode,startPosition,loop,reversed) {
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
	this.text = new cjs.Text("Replay", "normal 700 96px 'Rubik'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 119;
	this.text.lineWidth = 528;
	this.text.parent = this;
	this.text.setTransform(266.05,4.7,0.9999,0.9999);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.text);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#990000").s().p("A9uKjQg5AAgpgQQhlgpAAiOIAAu3QAAjHDHAAMA7dAAAQDHAAAADHIAAO3QAADHjHAAg");
	this.shape.setTransform(254.85,67.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#990000").s().p("EgiAAMFQhBgBgvgSQhzgwAAiiIAAxAQAAjkDjAAMBEAAAAQDkAAAADkIAARAQAADljkAAg");
	this.shape_1.setTransform(253.3,67.55);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#990000").s().p("A7xJ3Qg2AAgmgQQhegmAAiFIAAt5QAAi5C6AAMA3jAAAQC6AAAAC5IAAN5QAAC7i6AAg");
	this.shape_2.setTransform(255.65,67.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1F1F1F").s().p("EgkhALdIAA25MBJDAAAIAAW5g");
	this.shape_3.setTransform(277.975,70.875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text,p:{scaleX:0.9999,scaleY:0.9999,y:4.7}}]}).to({state:[{t:this.shape_1},{t:this.text,p:{scaleX:1.1438,scaleY:1.1438,y:-4.35}}]},1).to({state:[{t:this.shape_2},{t:this.text,p:{scaleX:0.9343,scaleY:0.9343,y:8.8}}]},1).to({state:[{t:this.shape_3},{t:this.text,p:{scaleX:0.9343,scaleY:0.9343,y:8.8}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38.3,-9.7,608.6999999999999,154.5);


(lib.questionmark = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("AhpCcQgyAAgBgzIAAjSQABgyAygBIDSAAQAzABAAAyIAADSQAAAzgzAAg");
	this.shape.setTransform(55.3,134.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AifJHIgHgEIgCgDIAAAAQgbkjDYipIC0iWIAFgGIAAgBQBYizithcIgSgGIgBgBQiRgWhYAyQhfBDggCWIkrgmQABj2D0iWQFnieEWCoQCaBaA7CgQBTEDkJDLQiIBdhABoIAAABIgCAEIgCAGIgCADIgCAIQgCAHgBA8QgBAyABAYIgCAFIgFACIgGACQhKADhIAAQhJAAhIgDg");
	this.shape_1.setTransform(55.7793,58.5837);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.questionmark, new cjs.Rectangle(0,0,111.6,150.5), null);


(lib.manssmile2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#222222").s().p("AArCaIgCAAQgbgCgygHIgBAAQiWhNgEg+IgBgCQgvhGgehaQAcAaAqAMQAFACAFAAQBjAoCWgKIAKAAQBYgHBIgWIAogIIgWAKIgKADQhEAdhaAFIASgCQi0AMh1geIAAAKIAAAKQBzA5AqAKIATAEQA8ABAogFQAqgGBlgZQAJgBAVgHQiVA5g9AAQg+ABgkgPIgLgCQhMgOg2gjIgKAAIAPAtIADALQABABAAAAQAAABAAAAQAAgBAAgBQAAAAAAgCIgBgDIgBgCIgCgEQAGAGAYAwQAzAyAEAAQA+AlBAAEQAmACAjgNQBZg9A9hYQAAAFgCAEIgwBkQgiAagjAaQgdAWgcAAQgLAAgKgDgAi/AGIABABIgBgDIAAACg");
	this.shape.setTransform(27.025,15.7106);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F9F9F9").s().p("AgMCBQhBgEg+gmQgEAAgzgyQgYgvgGgHIACAFIABABIABAEQAAACAAABQAAABAAAAQAAAAAAAAQAAgBgBgBIgDgMIgPgtIAKAAQA2AkBMANIALADQAkAPA+gBQA9gBCVg5QgVAHgJABQgTACAagVIAOgTIAQgXIANgVQgGA7gWAdQgCADAAAFQg9BZhZA8QgeAMgfAAIgLAAgAjdABIAAgBIABACIgBgBg");
	this.shape_1.setTransform(30.025,16.2531);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F8F8F8").s().p("Ag6A7IgTgEQgqgKhzg4IAAgKIAAgKQB1AeC0gMIgSACQBagFBEgdIAKgEQAEAFASgOIgNAVIgQAXIgOATQgaAUATgCQhlAagqAGQgfAEgrAAIgaAAg");
	this.shape_2.setTransform(30.525,9.2421);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#303030").s().p("Ag3A8QAWgdAHg7IATgDIgOABQgVADgNADIBxgrIgxAgIAZgPIAPgGQhNBbgWAfQgCACgFAAQAAgFACgDgAgxgSIAXgKQgOALgGAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAAAgAA6hDIgGAHIgLAFIARgMgAA6hDIAAAAg");
	this.shape_3.setTransform(56.8,6.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-0.6,62.6,32);


(lib.manssmile1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#141414").s().p("Ag1APIgGgDQgYA9gBhCQALgrAggUQACgBgBACQgXAkAdARQA6AUA0AbQAEACAFAAQAAAFgDADQgCACgFAAQhDgSg9gYg");
	this.shape.setTransform(8.5,6.43);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1F1F1F").s().p("AhYBNQhZgDg9gdQAFAAADgDQACgCAAgFQBfAcCAgKIAFgBIgDABQALgBAxgQIBIgXQAKgGAPgJIArgcQgNgRgLgSQgCgEAAgFQAhgKAVAwQAdA+ghgeQgKgKgJgKIgfAdQgsAZgvAXQgEACgFAAQg6AWhRAAIgUAAg");
	this.shape_1.setTransform(39.8658,7.6869);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,63.8,15.4);


(lib.manssadmouth2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#DF9A94").s().p("AABABIgCAAIgBAAIgCAAIgvAAIAmgBIAuAAIAAAAIAAAAIACAAIARAAIAAAAIgBAAIgBAAIgEAAIgBAAIgDAAIgCAAIAAAAIgBAAIgBAAIAAAAIgBAAIgDAAIAAAAIgBAAIAAAAIgBAAIgBAAIAAAAIAAAAIgCAAIgBAAIgBAAIAAAAIAAAAIgBAAIgBAAIgLAAIgBABIgBAAIgKAAIAAAAg");
	this.shape.setTransform(30.55,39.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9A2230").s().p("AmrCcQgFAAgEgCQgGgDgFgGIAAgLIAAgbIAAgdQAYgdAlgOQAEgBAFAAQAAgDAfgNIAHgDIABAAIABAAIABgBIAigKIAYgGIgBAAIgBAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAIAEAAIABAAIAAABQAbAgALAaQACAFAAAFQAAALADAIIABABQABACAFAAQBRgwB1AwQAjgVAqgCIAWgCQAUgBAdADIANABIABAAIABAAIACAAIAbAAIACAAIAIAAQAFgLACgMQAJg+gIgbIAKgGQAbgSAUgGIAYgGIAIgBQApgOAUgKIAXgKIAJgDIAKgKIABgBIAAAAIAAAAIABAAIACgCIgCABQAIgJAAgDQAmgrASA/QAMAmgHBAIAAALQgVBIgoAyQgFgHgFgRQgFgSgZgDIgKAAQgjAAgSAMIgJAIQgIAIgEAHIgGAKIgKgBQgvgDghgTQgdgKgtACQgtABgiAPIgSAJQgTAFgJgFQgMgIgMgKIgKgDQgdgFgrADQg3AFg8AjQgFAAgFABQgKAEgKAGIgKAAQgUgBgLgKIgKAAQgtgBgZAXIgEAHQgCADACAHQgDgDgNgDgAAGBmIAAAAIgHACIAHgCg");
	this.shape_1.setTransform(47.3574,24.1399);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#932532").s().p("AgJACIAJgCIAKgCIgKACIgIADg");
	this.shape_2.setTransform(21.475,23.375);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#8B2B33").s().p("AgMADQAOgEAKgCQAAABAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAIgZAGIAAgBg");
	this.shape_3.setTransform(17.975,24.1517);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FDFBFB").s().p("AhjBUQg1gBgvgJIgdgGIgLgBQgtgBgmgUQgmgUgEgWQgFgVAHgHQAGgIAQgGIACAAQAjAHAdALIAFADQAFABAFAAQAXADAPgFIAAABIABAAIAAABIAAAAIABAAIAAABIABAAIBBAAIABAAIAAgBIADAAIABAAIALAAIAAAAIABAAIABAAIAFAAIABAAIADAAIABAAIATAAIACAAIAFAAIAAAAIB9AAIASAAIAqAAIAZAAIAKAAIACAAIAZABQAkAAAkAEQALABAHgDIAWgIIABAAIAAAAIABAAIABgBIADAAIAAAAIABAAIABgBIAAAAIAAAAIABAAIAAgDIgBAAIAAAAIABgCIAAgBIACgJIAAgLQAWgKAMgVQABgDAFAAIAoAAIAKAAIAGAFQgEAtgXAJQgYAIghAOQgMANgUAGIgGADIgbANQh3AzilAAIghAAg");
	this.shape_4.setTransform(45.683,41.4494);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C9968B").s().p("AhvEcQhVgBhDgQIgmgKQg7gTgxgfQgygfgNhLIAAgLIAAgFIAAgoQAlhEBbgOIBjgfQBSgmBug5IAmgUIAJgGIAZgOIABAAIBjgyIAVgKQBrgjBbAaIAWALIARAIQAtAXAIAPIAPAbQAHAMAGAbIANBFQAHAqgNAgIgWAyQgIASgMAUQgfAxgdAUQgVAOgUAQIgTAPIgJAHQgyAjg4AJIgUAFQgnAKgoAGQhTAQhkAAIgRAAgAlYgGIgHADQgfAMAAADQgFAAgEABQglAOgYAdIAAAdIAAAbIAAALQAFAGAGADQAEACAFAAQANADADADQAAAAABAAQAAABAAAAQAAAAAAABQAAAAAAAAQACAyAfAIIAKABQA8AeBLANIAGABIAKABIDvAAIAVgBIAXgCIAWgCQArgDAggNQAFgCAFAAQAigNAhgPQASgIAQgJIATgLQAdgRAZgWQAigegggaIgGgFIgKAAIgoAAQgFAAgBADQgMAVgWAKIAAgLIAGgKQAEgHAIgIIAJgIQASgMAjAAIAKAAQAZADAFASQAFARAFAHQAogyAVhIIAAgLQAHhAgMgmQgSg/gmArQAAgGACgEQAVgvg1gKIgKgBQhfgShfATQgFAAgFABQhDAZg/AyIAAgBQgMAUgzAZQg5AkhGAWQgcANgfAGIgLABIAAACIgKABIgOABQgKAEgBACQgKABgPAGIAagGIABgBIABAAIgYAHIgiAKIgBABIgBAAIgBAAgAgLi2IACgBIAAAAIgCABg");
	this.shape_5.setTransform(47.8975,26.3222);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E83F37").s().p("AkEAlQAAgFgCgFIAAgBQgDgGgFgFQAKgGALgEQAEgBAGAAQA8giA2gFQAsgDAcAFIALADQAMAKAMAIQAJAFASgFIASgJQAjgPAtgBQAsgCAdAKQAiATAuADIAKABIAAAKQgEAAgBACQgFAMgKAFQgFADgFABIgBAAIAAAAIgBAAIAAAAIgEAAIAAAAIgSAAIgFgBIgCAAIgvAAIgBAAIAAAAIAAAAIgHAAIAAAAIAAAAIgBAAIgGAAIgCAAIgHAAIAAAAIgBAAIgBAAIAAgBIgBAAIgKAAIgBAAIAAABIgCAAIgJAAIgBAAIglAAIgBAAIAAgBIgBAAIgBAAIgBAAIgCAAIgBAAIAAABIgBAAIgDAAIgCAAIAAgBIAAAAIgBAAIgBAAIAAAAIgBAAIgQAAIAAAAIgBAAIAAABIAAAAIAAABIgBAAIAAAAIgpAAIgxAAIgBABIAAAAIgCAAIgUABIgCAAIgBAAIgBAAIAAABIgBAAIgCAAIgBAAIgDAAIgBAAIAAABIgBAAIgHAAIgBAAIgBgBIAAAAIgBAAIgBAAIgCAAIgBAAIgRAAIgCAAIAAgBIAAAAIguACIgmABIgQAAIgBABIgBAAIAAAAIAAABIAAAAIgBAAIAAABQgKADgNAAIgQgBgAAPgOIAIgCIAAAAIgIACgAC+AbIAAAAIgDAAIAAAAIgGAAIAAAAIAOAAIgFAAgACoAbIgBAAIgEAAIgBgBIASABIgMAAg");
	this.shape_6.setTransform(45.7,36.0099);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#7A0916").s().p("AjFAWIAAgBQgEgJAAgKQArgSAkgDQAKgBAFABIAaACQAWACAVAMQAsAbAJgUQAJgUAwgFQAwgGA8AVQAPAFAHADIgDAAIgbAAIgCAAIgBgBIgNgBQgdgBgVABIgVAAQgqADgkAUQh0gvhSAwQgFAAgBgCg");
	this.shape_7.setTransform(43.825,30.6833);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E8DEDB").s().p("AlLBkIAAAAIgBAAIgEgBQABgBAKgEIAOgCIAKAAIAAgCIALgCQAfgFAcgOQBGgWA5gkQAzgXANgUIAAAAQA+gyBDgYQAFgCAFAAQBfgSBfARIAKABQA1AKgVAvQgCAEAAAGQAAAEgIAJIACgCIgCACIgBABIAAAAIAAAAIgBAAIgBABIgJAKIgJADIgXAKQgUAJgpANIgIABIgYAHQgUAGgbARIgKAHIgBgEIgZAIIgaAIIAAgBQgOAFgIAEIgFAEQg3AhhUADIgkABQhfAAhtgSgAg2AfQgLADgUAWQgVAYg3AXQBBgDAlgIQAkgHAMgEQBzhPAfgEQAfgFBTgiQAjAAAegGIgFgFQgKgLgUAAQgFAAgDgDQgUgRgqAJIgKAAQhBAGg3AQQgFAAgDADQgTAQghAVIgBAAIgDACIgEACIgEADIABgBIg+AlgAk6BfIgJACIABABIAIgDIALgDIgLADg");
	this.shape_8.setTransform(52.898,13.8567);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#56111B").s().p("AgbAvQgWgMgWgBIgagDQgEgBgLACQgjACgrATQAAgFgCgFQgLgagbggQCCAUBtgEQBUgDA4ghIAFgDQAIgFAOgEIAAAAIAagHIAZgIIABADQAIAbgJA+QgCAMgFALIgIAAQgGgDgQgGQg8gVgwAGQgvAGgJAUQgEAIgKAAQgNAAgagQgAC0A1IgBAAIACAAIgBAAg");
	this.shape_9.setTransform(42.7955,25.5417);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#C99C90").s().p("AABAAIAAAAIgBABIABgBg");
	this.shape_10.setTransform(46.8125,7.9375);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FDFDFD").s().p("AihAsQAUgWALgDIA+glIgBABIAFgDIAEgDIADgCIAAAAQAigVASgQQAEgDAEAAQA3gQBAgFIALgBQAqgIAUARQADACAFAAQATABALAKIAFAGQgeAGgjAAQhTAigfAFQgfAFhzBNQgMAEgkAIQglAHhBADQA3gWAVgYg");
	this.shape_11.setTransform(60.5,15.1083);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#EBD7D2").s().p("AjBBXIgKgBIgFgBQhLgNg8geIgKgBQgggIgBgxQAAAAAAAAQAAgBAAAAQAAAAAAgBQgBAAAAAAQgCgHACgDIAEgHQAYgXAuABIAKAAQALAKATABIAKAAQAFAFADAGIAAABQACAFAAAFQgFAAgEgBIgGgDQgdgLgjgHIgBAAQgQAGgHAIQgGAHAEAWQAEAVAnAUQAmAUAsABIALABIAeAGQAvAJA1ABQC6AFCDg4IAbgNIAFgDQAUgGANgNQAhgOAXgIQAYgJAEgtQAfAagiAeQgYAWgeAQIgSALQgRAJgRAIQghAPgjANQgFAAgEACQghANgrADIgVACIgYACIgUABIjwAAgADjgTQgkgEgkAAIgagBIgCAAIgKAAIgYAAIgrAAIgSAAIh8AAIAAAAIgGAAIgCAAIgTAAIgBAAIgDAAIgBAAIgFAAIgBAAIAAAAIgBAAIgKAAIgBAAIgDAAIgBABIAAAAIhCAAIAAAAIAAgBIgBAAIAAAAIgBgBIAAAAIAAgBIAAgBIAAAAIAAAAIABgBIAAAAIABAAIAAgBIARAAIAuAAIACAAIABAAIADAAIABAAIABAAIAKAAIABAAIAAgBIALAAIABAAIABAAIAAAAIABAAIABAAIAAgBIACAAIAAAAIABAAIAAAAIABAAIAAABIABAAIAAAAIAEAAIAAAAIABAAIABAAIABAAIAAgBIABAAIADAAIABAAIAEAAIABAAIABAAIAAAAIABAAIACAAIAAAAIABAAIABAAIAAABIABAAIAHAAIABAAIABgBIABAAIADAAIABAAIABAAIABAAIAAgBIABAAIABAAIADAAIAUgBIABAAIABAAIAAgBIAyAAIApAAIAAAAIAAAAIAAgBIABAAIAAgBIABAAIAAAAIAQAAIAAAAIAAAAIACAAIABAAIAAAAIAAABIACAAIADAAIABAAIAAgBIAAAAIADAAIABAAIABAAIABAAIAAABIAAAAIAmAAIABAAIAJAAIACAAIAAgBIABAAIAKAAIABAAIAAABIABAAIAAAAIABAAIAHAAIABAAIAHAAIABAAIAAAAIAAAAIAHAAIAAAAIAAAAIABAAIAvAAIABAAIAGABIASAAIAAAAIADAAIAAAAIABAAIAAAAIABAAQAGgBAFgDQAKgFAEgMQABgCAFAAIAAALIgBAJIgBABIAAACIAAAAIAAAAIAAADIAAAAIAAAAIgBAAIAAABIgCAAIAAAAIgDAAIAAABIgCAAIAAAAIAAAAIgXAIQgFACgJAAIgDAAgAC8giIAGAAIAAAAIADAAIAAAAIAFAAIgOAAgACqgiIAEAAIAAAAIANAAIgSgBg");
	this.shape_12.setTransform(45.0074,42.225);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#901E2E").s().p("AAEgDIABgBIgJAJIAIgIg");
	this.shape_13.setTransform(84.275,11.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.6,-2,94.60000000000001,56.7);


(lib.man = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_38();
	this.instance.setTransform(2.7,0,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_19();
	this.instance_1.setTransform(0,155.9,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.man, new cjs.Rectangle(0,0,226.2,430), null);


(lib.leftHandWoman = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#191E1B").s().p("AgBCvQgQgkgHgmIgBgEIgpiCQAJgzAHgXQANgsAWgnQADgEAEgCIABABIAdAMQAFASACAaIABAQQABAMgOAmQgPAnAVA4QATA5AHAMIALAdIAEAJIADAIIgHgGIg1BCIgIgWg");
	this.shape.setTransform(6.6875,19.6625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E7E0E9").s().p("AgNDRQgQgMgMgRQgHgKgCgHIgGgTIgFgNIgKgbIgNggIgYg0IgJgSQgcg1gtgqQgFgEgCgEIAAgBIgCgBIgKgLIAfgmIA1hBIAHAFIAAABQAOALAbAMIANAFQALACATgCIANAAIAmAAIAoABIAjgBIAPgDIAEACIAIABQAYAFAOgBIANAAQAOAEAKAHQAKAHADAHQAGANgIAOQgGAKgNAKQgLAKgIADQgHACgMABIg9AJQgJABgEADQgJAEAAAIIADAGIABAEQACAGAHALQAkA6A1AsIAHAGIAHAIIAJALIAFAFIgBACQAFAJAAAEQAAAHgFAHQgKAPgOACIAAAAIgDgBIgDAAQgIAAgKgIQgQgLgbgXIgCgCQglghgWgZIAAACQAGAKAKANQAMAPAFAIIANARQASAaAQAcQAFAIABAEQABADgBACIABAAIACACIgGAHIgDAEQgGALgIABQgDABgEgBQgQADgTgWIgIgJIgGgKIgKgQIgPgSIgdgiIgCAAQACAQALAaIAEAIIAHARQAKAVACALIABAHQABAFgCAEQgDAGgGADQgGADgHAAQgKAAgNgJg");
	this.shape_1.setTransform(25.2707,54.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.leftHandWoman, new cjs.Rectangle(0,0,46.3,76.5), null);


(lib.leftHandMan = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#2E773A").s().p("AABAAIgBAAIABAAg");
	this.shape.setTransform(45.075,148.35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E7E0E9").s().p("AgfEPQgDgBgEgDQgTgEgLgfIgEgOIgDgMIgEgVQgLgigPgoIgCgBQgGAVAEAnIABAWQACAagDAOIgBAHQgCAGgEADQgFAFgIABQgIABgHgCQgLgFgLgQQgMgTgGgXQgDgNAAgJIACgWIAAgRIABghIgBgnIgEhBIgDgXQgHhFgfhAQgDgGAAgFIgBgBIgBgCIgGgQICEhMQAEAEACAFQAKAUAXAWIAMALQALAHAVAGIAPAFIAoAQIAqASIAnANIAQAEIAMAIQAXAOAQAGIAOAFQANAKAIAMQAHALABAJQABARgOALQgLAJgSAFQgQAFgKAAQgHAAgPgEIhEgQQgKgDgGABQgLACgDAIQgBAEABAEIAAAFQAAAHACAOQAOBNAnBFQAHANADAHIAEAQIAEAIIgCABQABANgCAEQgDAHgHAFQgRAMgQgEIgBAAIgCgCIgDgBQgJgEgIgMQgNgSgTgnQgZgzgOgjIAAACQACANAFASIAJAfQAOAvAGAxQACAKgBAFIgCAFIAAABIACADIgIAFIgEADQgKAIgIAAIgDAAgADwhGIACACIgBAAIgBgCg");
	this.shape_1.setTransform(34.675,120.4924);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#191E1B").s().p("AiFF/IgJgtIgch3QgCgGAAgQIgBggQgBgSgEgvQgFguAKhOIAAAAIACgFIACgJIABgBIAJgjIAAgBIABgBIAGgYQAJgfADgDQACgEAMgcIAPglQAahFAnhCIAIgGIBchsIACgFIAMgMQALgKAOgIIAfgSIAJgEIADABQAZAcAIALQAIAMAEALQADAKgYAdIgNARIgBABIgDACIgBACIgCACIgBAEIgHAJIgSAXIgbAiIgBABIgBABIAAAAIAAABIgEAEIgDAEIgCACIgCABIgBACIgCADIgCABIgBACIgBADIgCACIgaAlIAAAAIgEALQgSAvgPAYQgOAYABAEQhXC5A7DgQABAEACAEQARA4AdAvQARAiAXAdIhxBCQgmg+gghBgABMmdIAAABIACgEIgCADgAA5nHIABgCIABABIAAgDIAAAAIgCAEgABjlHIAAAAIgBABIgBACIgCADIgFAFIgDACgAB7liIgCACIgBABIgCABIAFgEg");
	this.shape_2.setTransform(18.0981,51.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.leftHandMan, new cjs.Rectangle(0,0,58.9,148.4), null);


(lib.eye = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgDAcQgJgBgFgKQgFgJACgKQACgLAHgIQAIgHAHABQAIABAFAJQAFAKgBAKQgCAMgIAHQgGAGgGAAIgCAAg");
	this.shape.setTransform(41.5,23.65,1,1,0,0,0,36.5,15.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgxDKQg4gPgZhHQgZhGAUhTQAVhUA2gwQA2gwA4AQQA4APAaBGQAZBHgVBTQgVBUg2AwQgpAkgpAAQgOAAgOgEg");
	this.shape_1.setTransform(6.182,8.7334,0.4241,0.4241);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.eye, new cjs.Rectangle(0,0,12.4,17.5), null);


(lib.doctorsMouthstatic = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#F33749").s().p("AhBgEIABABQgDgDgDgFQBQgdA1AhIAIAGQgMAMgJAGQgJAGglACIgEAAQghABgggeg");
	this.shape.setTransform(19.3364,17.9151,1.9561,1.9561);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4E090C").s().p("AhxBNQABACgJgHIgIgHIgCgCIgPgQQgwgvgJhkQAFgOApACIAzABQB2gCA0AFQA0ADAwABQAvAAgHAVIgMAgQgVBGgcAeQgbAdhGAbQgXAIgXAAQg0AAg9gkg");
	this.shape_1.setTransform(20.4454,11.3021);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(18));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,40.9,22.9);


(lib.doctorsMouthst = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {mouthb:0};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F33749").s().p("AhBgEIABABQgDgDgDgFQBQgdA1AhIAIAGQgMAMgJAGQgJAGglACIgEAAQghABgggeg");
	this.shape.setTransform(19.3364,17.9151,1.9561,1.9561);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4E090C").s().p("AhxBNQABACgJgHIgIgHIgCgCIgPgQQgwgvgJhkQAFgOApACIAzABQB2gCA0AFQA0ADAwABQAvAAgHAVIgMAgQgVBGgcAeQgbAdhGAbQgXAIgXAAQg0AAg9gkg");
	this.shape_1.setTransform(20.4454,11.3021);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4E090C").s().p("AhxBHQABACgJgHIgIgHIgCgCIgPgQQgwgugJhlIAuASQApAPBBAJQA/AKA2gEQA1gDAugZQAugYgHAVIgMAgQgVBGgcAeQgbAdhGAbQgXAIgXAAQg0AAg9gkg");
	this.shape_2.setTransform(20.446,11.9392);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4E090C").s().p("AhxBHQABACgJgHIgIgHIgCgCIgPgQQgwgugJhlIAuASQApAPBBAKQBAAJA1gDQA1gEAugYQAugZgHAVIgMAgQgVBGgcAeQgbAdhGAbQgXAIgXAAQg0AAg9gkg");
	this.shape_3.setTransform(20.4511,11.986,0.8657,0.8657);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4E090C").s().p("AhiA9IgGgFIgHgGIgCgCIgNgNQgpgngJhXQADAEAgARQAgASBDAHQBCAHAogIQAngIAogVQAogVgHASIgJAcQgTA8gYAaQgYAag8AWQgUAIgVAAQgsAAg1gfg");
	this.shape_4.setTransform(20.4827,12.0809,1.1045,1.1045);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4E090C").s().p("AhtBaIgHgFIgIgHIgBgCIgPgOQgtgtgKheIAQgRQASgSBRgIQBQgHBHAIQBHAIAeAOQAdAOgHAUIgKAfQgVBCgaAdQgbAchCAZQgWAIgXAAQgyAAg6gig");
	this.shape_5.setTransform(20.5173,9.7801);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape,p:{scaleX:1.9561,scaleY:1.9561,x:19.3364,y:17.9151}}]}).to({state:[{t:this.shape_2},{t:this.shape,p:{scaleX:1.9561,scaleY:1.9561,x:19.3364,y:17.9151}}]},4).to({state:[{t:this.shape_3},{t:this.shape,p:{scaleX:1.6933,scaleY:1.6933,x:19.8122,y:17.3849}}]},3).to({state:[{t:this.shape_4},{t:this.shape,p:{scaleX:1.8703,scaleY:1.8703,x:19.7249,y:17.7138}}]},3).to({state:[{t:this.shape_5},{t:this.shape,p:{scaleX:1.8705,scaleY:1.8705,x:19.4621,y:17.7443}}]},4).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-2.6,40.9,25.5);


(lib.doctorsMouth = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"mouthb":0};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F33749").s().p("AhBgEIABABQgDgDgDgFQBQgdA1AhIAIAGQgMAMgJAGQgJAGglACIgEAAQghABgggeg");
	this.shape.setTransform(19.3364,17.9151,1.9561,1.9561);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4E090C").s().p("AhxBNQABACgJgHIgIgHIgCgCIgPgQQgwgvgJhkQAFgOApACIAzABQB2gCA0AFQA0ADAwABQAvAAgHAVIgMAgQgVBGgcAeQgbAdhGAbQgXAIgXAAQg0AAg9gkg");
	this.shape_1.setTransform(20.4454,11.3021);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4E090C").s().p("AhxBHQABACgJgHIgIgHIgCgCIgPgQQgwgugJhlIAuASQApAPBBAJQA/AKA2gEQA1gDAugZQAugYgHAVIgMAgQgVBGgcAeQgbAdhGAbQgXAIgXAAQg0AAg9gkg");
	this.shape_2.setTransform(20.446,11.9392);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4E090C").s().p("AhxBHQABACgJgHIgIgHIgCgCIgPgQQgwgugJhlIAuASQApAPBBAKQBAAJA1gDQA1gEAugYQAugZgHAVIgMAgQgVBGgcAeQgbAdhGAbQgXAIgXAAQg0AAg9gkg");
	this.shape_3.setTransform(20.4511,11.986,0.8657,0.8657);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4E090C").s().p("AhiA9IgGgFIgHgGIgCgCIgNgNQgpgngJhXQADAEAgARQAgASBDAHQBCAHAogIQAngIAogVQAogVgHASIgJAcQgTA8gYAaQgYAag8AWQgUAIgVAAQgsAAg1gfg");
	this.shape_4.setTransform(20.4827,12.0809,1.1045,1.1045);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4E090C").s().p("AhtBaIgHgFIgIgHIgBgCIgPgOQgtgtgKheIAQgRQASgSBRgIQBQgHBHAIQBHAIAeAOQAdAOgHAUIgKAfQgVBCgaAdQgbAchCAZQgWAIgXAAQgyAAg6gig");
	this.shape_5.setTransform(20.5173,9.7801);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape,p:{scaleX:1.9561,scaleY:1.9561,x:19.3364,y:17.9151}}]}).to({state:[{t:this.shape_2},{t:this.shape,p:{scaleX:1.9561,scaleY:1.9561,x:19.3364,y:17.9151}}]},4).to({state:[{t:this.shape_3},{t:this.shape,p:{scaleX:1.6933,scaleY:1.6933,x:19.7723,y:17.3433}}]},3).to({state:[{t:this.shape_4},{t:this.shape,p:{scaleX:1.8704,scaleY:1.8704,x:19.6884,y:17.7249}}]},3).to({state:[{t:this.shape_5},{t:this.shape,p:{scaleX:1.8705,scaleY:1.8705,x:19.4621,y:17.7443}}]},4).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-2.6,40.9,25.5);


(lib.doctor = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_18();
	this.instance.setTransform(41.45,72.7,0.2357,0.2357);

	this.instance_1 = new lib.CachedBmp_17();
	this.instance_1.setTransform(0,0,0.2357,0.2357);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.doctor, new cjs.Rectangle(0,0,120.7,146.7), null);


(lib.covers = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#D9E37B").s().p("Ag3BpQg4gFgggUQgTgLgJgMIAAgcIANADIAQAEQATADAUACIAcACIADAAIAPAAIADAAQAWgGBSgOIAPgCQA6gKhIATQgBAdgYAZQgWAVgpAAIgSAAgAAvgZQAXAMAGALQAJAHgGgBQgKgDgogUIhgg1QAMgLASgKQALgGAMgFIAAABIABAAIAAABIABAAIAAABIAAAAIABABIAAAAIAAAAIABABIAAAAIABAAIAAABIAAAAIAAAAIABABIAAAAIABAAIAAABIAAAAIABABIAAAAIAAAAIABABIAAAAIABAAIAAABIABAAIAAAAIABABIAAAAIAAAAIABABIAAAAIAAABIABAAIAAAAIAAABIAAAAIAAAAIAAABIABAAIAAAAIAAABIABAAIAAAAIAAABIABAAIAAABIAAAAIAAAAIABABIABAAIAAAAIAAABIABAAIAAABIAAAAIABAAIAAABIAAAAIABABIAAAAIABAAIAAABIABAAIAAAAIAAABIABAAIAAAAIABABIABAAIABABIABABIABAAIAAAAIABABIAAAAIABABIABAAIABAAIAAABIABAAIAAAAIACABIAAAAIABABIAAAAIABAAIABABIAAAAIABAAIAAABIAAAAIABABIAAAAIAAAAIAAABIABAAIAAABIABAAIAAAAIABABIABAAIAAAAICLBDIAAAXIh8gzg");
	this.shape.setTransform(17.15,11.491);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D9E47C").s().p("Ah8BcIABABIgBACgAgLA/IgPAAIgDAAIgcgCQgRgUgPgeIgbg2IABgCIABgBIABgCIAAgCIABgCIABgBIABgCIABgBIAAgDIACgBIAAgCIABgBIABgCIAAgCIACgCIAAgCIABgBIACgCIABgCIABgCIABgCIABgBIACgBIACgCIABgCIACgCIACgCIACgBIABgCIACgBIBGAAIADACIACACIABABIAAAAIAFABIACAAIACABIAEABIAEACIAEAAIABAAIgBgBIABgCIABgCIABgBIABgCIADgBIACAAIABAAIAAgBIAXAAIABABIAAAAIAAAAIAAABIABAAIABABIABABIAAAAIABAAIABABIAAAAIAAAAIACACIAAAAIABAAIAAABIAAAAIABAAIAAABIAAABIABAAIAAAAIAAABIABAAIAAAAIAAABIACABIAAABIABAAIAAAAIAAAAIABABIAAAAIAAAAIABABIAAAAIAAAAIAAABIABAAIAAAAIABABIAAABIABAAIAAAAIABABIAAAAIABAAIAAABIABAAIABABIAAAAIABAAIABABIABAAIABABIAAAAIABAAIAAABIABAAIAAAAIABABIABAAIABAAIAAABIABABIABgBIACAAIABAAIABABIAAAAIABAAIABABIABAAIAAAAIABABIAAAAIABAAIABABIAAAAIABAAIAAAAIABABIAAAAIABABIAAAAIAAAAIAAABIABAAIAAABIAAABIAAABIABAAIAAACIAAAAIAAAEIAAABIAAAAIAAABIABABIAAAAIAAABIABAAIAAABIAAABIABAAIAAABIABAAIAAAAIAAABIABAAIAAABIAAAAIABABIAAABIAAAAIAAACIABAAIAAABIgbgHIAAgBIgBAAIAAAAIgBAAIAAAAIgBgBIAAAAIAAgBIgBAAIAAAAIAAgBIAAAAIgBgBIgBgBIAAAAIgBAAIgBgBIAAAAIgBAAIAAgBIgBAAIgBAAIAAgBIgBAAIgBAAIgBgBIgBAAIAAAAIgBgBIAAAAIgBAAIgBgBIgBgBIgBAAIAAgBIgBAAIAAgBIAAAAIgBgBIgBAAIAAAAIgBgBIAAAAIgBAAIAAgBIAAAAIgBAAIAAgBIAAAAIgBAAIAAgBIAAAAIgBAAIAAgBIAAAAIgBAAIAAgBIAAAAIAAgBIgBAAIAAgBIAAAAIgBAAIAAgBIAAAAIgBgBIAAAAIgBAAIAAgBIgBAAIAAAAIAAgBIgBAAIAAAAIAAAAIgBgBIAAAAIgBAAIAAgBIAAAAIgBAAIAAgBIAAAAIgBAAIAAgBIAAgBIgBAAIAAAAIgBgBIAAAAIgBAAIAAgBIAAAAIgBgBIAAAAIgBAAIAAAAIAAAAIgBgBIAAAAIAAgBIgBAAIAAgBIAAAAIAAgBQgNAFgLAGQgRAKgMALIBhA0QAnAVAKADQAAAJgOAIIgPACQhTAOgVAGIgDAAg");
	this.shape_1.setTransform(12.5009,9.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#94AE35").s().p("AAUAPIgBAAIgBAAIgBAAIgBAAIgBgBIAAAAIgBAAIAAgBIgBAAIgBAAIgBgBIAAAAIgBAAIgBAAIgCAAIgBAAIgBAAIAAgBIgBAAIgBAAIgBgBIAAAAIgBAAIAAgBIgBAAIAAAAIAAgBIgBAAIgBgBIgBAAIAAAAIgBgBIgBgBIAAAAIgBAAIAAgBIgBAAIAAAAIgBgBIAAAAIgBgBIAAAAIgBAAIAAgBIAAAAIAAAAIgBgBIAAAAIAAAAIgBAAIAAAAIAAgBIgBAAIAAAAIgCgCIAAAAIAAAAIgBgBIAAAAIAAAAIgBgBIAAAAIAAgBIgBAAIAAAAIAAgBIgBAAIAAAAIgCgCIAAAAIAAAAIgBgBIgBgBIAAAAIgBAAIgBgBIgBgBIAAAAIAAAAIAAgBIgBAAIAmAAIAAAAIABABIABABIABAAIABAAIAAABIABAAIABAAIAAABIABAAIAAAAIABABIAAAAIABABIAAAAIABAAIAAABIABAAIABABIABAAIAAABIAAAAIABABIAAABIAAAAIAAABIABAAIAAABIAAABIAAABIABAAIAAACIAAAAIAAACIABABIgBAAIAAADIAAAAIAAABIgBAAIAAABIAAAAIgBABIAAAAIAAABIgBAAIAAAAIAAABIgBAAIgBAAIgBABIAAAAIAAAAg");
	this.shape_2.setTransform(20.125,1.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.covers, new cjs.Rectangle(0,0,34.3,22.1), null);


(lib.cloud = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("Ehe1AW7QikgVhigjQiOgyABhPQACiEA7hOQABgwBPgYQAhgKAugGQCfgSBWixQAlhMBoAEQBwAGC+BlQAvgaBIAQIASADQBMhMBChGQBYhdCEBiQCEBhA2AhQASALAVAWQAdAfAjAzQAMAfAHAdQAaBigaA+QgKAZgSATIg3A6Qg5A7hGBFIgCACQhqBmiUAAQhZAAhJgjQi7AujVAAQiIAAiUgTgEBOwAR8QhKAkhYAAQiVAAhphmIgCgCQhGhFg6g7Ig3g6QgSgTgKgZQgZg/AZhiQAIgcALgfQAjg0AdgdQAVgXASgLQA2ghCEhiQCFhhBYBdQBCBGBMBMIARgDQBIgQAvAaQC/hlBwgGQBogFAlBNQBWCxCfATQAuAFAhAKQBPAYABAwQA7BOACCEQABBPiOAyQhiAjikAVQiUATiIAAQjVAAi7gvgA7uQzIgVgNQhTgxhkASQgcAFgdAKQgfALgYAFQgzAMgSgMQgGgEgCgHQgDgIADgMQAQhDgIhBQgHhCBageQA+gUAkgaQAPgMALgMQAigpD9gEQBVg4BKgcQBmgoBTAMQBRAKByBOQA6AoBDA6IABAAIAMAIQARAMAPAMIgOgGIAzAvIABAAQAdAqABAwQABA7ggAxQgQAagZAXQgTARgWAMQg2AdhHgIIgXgDQhzgWgQhEQhHBSiaASQgcADgaAAQh5AAhehDgEAzdAOBIgVgOQhTgxhkASQgcAFgdAKQgfALgYAFQgzANgSgNQgGgEgCgGQgDgJADgMQAQhCgIhBQgHhDBagdQA+gVAkgaQAPgMALgMQAigpD9gDQBVg4BJgdQBngoBTAMQBQALByBOQA6AnBEA6IAAAAIAMAIQASAMAOAMIgOgGIA0AwIAAAAQAeAqABAwQAAA6gfAyQgRAZgZAYQgTARgVAMQg3AdhHgIIgWgEQhzgVgRhEQhHBSiaARQgbAEgaAAQh5AAhehDgEg4YAO6QiagShHhSQgRBEhzAVIgWAEQhHAIg3gdQgVgMgTgRQgZgYgRgZQgfgxAAg7QABgxAegpIAAAAIA0gvIgOAFQAOgMASgLIAMgIIAAAAQBEg7A6gnQByhOBQgLQBTgMBnAoQBKAdBUA4QD9ADAjApQALAMAPAMQAkAaA+AVQBZAdgHBCQgHBCAQBDQAFAVgOAJQgSAMgzgMQgXgEgfgMQgdgKgcgEQhkgThUAxIgVAOQheBDh5AAQgaAAgbgDgEh0HANPQlPgiAChYQABhWAxg0QABgtCDgNQCCgMBIh1QBHh1DKBcQA5ANA+AnIArAbIACgBQBXhFBJg9QBJg9BtA/QBuBBAsAVQAkASAxA6QA5B4hAA2Qg/A3hYBEQhYBEh8AAQhJAAg8gXQibAfixAAQhxAAh5gNgASYKSQhNgKgjgqQgIAjg6ALQg5ALglgjQglgiABgvQABgYAOgWIAagYIgHACIAQgLIAGgFQBkhXA8gJQBIgKBjBEQB/ACARAVQASAVAsAPQAtAQgEAiQgEAiAIAiQAIAihJgbQhKgag5AqQgvAig8AAQgNAAgOgBgEBl4AIaQg8AXhJAAQh8AAhYhEQhYhEg/g3QhAg2A5h4QAxg7AkgRQAsgWBuhAQBtg+BJA8QBJA9BXBFIACABIArgbQA+gnA5gNQDKhbBHB0QBIB1CCAMQCDANABAuQAxAyABBXQACBYlPAiQh5ANhxAAQixAAibgfgEgqGAG3QjWgRAAguQABgtAggZQABgYBTgHQBUgGAug8QAug8CBAvQAkAHApAUIAbAOIABgBQA4gjAvggQAvgfBGAhQBGAgAdAMQAWAJAgAeQAlA+gpAbQgpAdg4AjQg5AjhPAAQgvAAgngMQhiAQhwAAQhJAAhQgHgEhZuAGcQhNgJgkgqQgIAjg5ALQg6ALglgjQglgjABguQABgZAOgVIAagZIgGAEQAHgHAJgGIAGgEQBjhYA8gIQBJgLBjBFQB+ACARAVIAKAKQASAOAiAMQAtAPgEAjQgDAhAHAiQAIAihJgaQgQgGgQgCQg2gJgsAhQgvAig8AAQgNAAgOgCgAjeFLIgVgNQhUgxhkASQgcAFgdAKQgfALgXAFQgzAMgSgMQgGgEgDgHQgCgIACgMQAQhDgHhBQgHhCBZgeQA+gUAkgbQAPgLALgLQAjgpD9gEQBUg4BJgdQBngoBTAMQBQALByBOQA6AoBEA5IAAAAIAMAIQASAMAOAMIgOgGIA0AvIAAAAQAeAqABAwQAAA7gfAxQgRAagZAXQgTARgVAMQg3AdhHgIIgWgDQhzgWgRhEQhHBTiaARQgbADgZAAQh6AAhdhDgEhMrADTQhNgJgjgqQgIAjg6ALQg5ALglgjQglgjABguQABgZAOgVIAagZIgHADIAQgMIAGgEQBkhWA8gJQBIgKBkBEQB+ACASAUQARAVAtAPQAsAPgEAiQgDAiAIAiQAHAihJgaQhJgag6ApQguAjg9AAQgNAAgOgCgEgyEACgQibgYhHhyQgQBfhzAdIgWAFQhHALg2goQgWgQgTgYQgZgggRgkQgfhEAAhQQAChEAdg5IAAAAIA0hCIgOAIQAPgRARgQIAMgLIABgBQBDhPA6g3QByhtBQgOQBTgRBmA3QBLAoBUBOQD8AFAjA4QALARAPARQAkAjA+AdQBaApgIBcQgHBbAQBaQAFAfgOANQgRAQgzgQQgYgIgfgPQgdgOgcgGQhkgYhTBDIgVATQhdBch4AAQgbAAgcgFgAfBCLQgnAMguAAQhQAAg4gjQg4gkgpgcQgpgcAkg8QAggeAXgJQAcgLBGgiQBHggAuAfQAvAgA4AjIABABIAcgOQAogUAkgHQCCgvAuA9QAtA7BUAGQBUAHABAWQAfAaABAtQABAtjXASQhPAHhJAAQhwAAhjgQgEBSPABZQg5gqhJAaQhKAaAIgiQAIgigEghQgDgiAsgPQAtgPARgVQARgVB/gCQBjhEBJAKQA8AJBjBXIAGAEQAJAGAHAGIgGgDIAaAZQAOAVABAYQABAuglAjQglAjg6gLQg5gLgIgjQgkAqhNAJQgOACgNAAQg8AAgvgigEhmagBgIgKgIIgGgFQhEg7AfgTQhHAXhjgFQhkgEAChSQABhSAugwQABgrBOgpQBOgqB9AXQB8AXALhMQgKgQAzgaQBjgfCABOQBgA7ARAQQAOgHBqgfIAHgCQBjgbANA1QAPA2AoAdQApAdgQA3IgDAMQgRAxgqA8QgEAEgGAFQggAchYgGQgogCg1gJQADAigSAPQgLAJgUACIgKAAQgtgDgrgIIgegHQABACgDAFQgDAIgOAOIgQAQQgVAUgvAJQgmAIg2AAIgIABQhtAAhIg2gEBFLgBwQg5gphKAaQhJAaAIghQAIgjgEgiQgEgiAtgPQAsgPASgVQARgVB/gCQBjhFBJALQA8AIBjBYIAGAEIAQAMIgHgCIAaAYQAPAVAAAZQABAuglAjQglAjg5gLQg5gLgIgjQgkAqhNAJQgOACgNAAQg8AAgvgjgA8riFQilgWhhgiQiOgzABhOQABiEA8hOQABgwBPgYQAhgKAugGQCegSBWixQAlhNBoAFQCIAHD6CSIABgCQBqhoBYhdQBYhdCFBhQCEBhA2AhQASAMAVAWQAdAeAjAzQALAgAIAdQAZBhgZA/QgKAZgSASIg3A7Qg5A7hHBFIgBABQhqBniVAAQhYAAhJgkQi7AvjVAAQiJAAiTgTgEAofgDaIgVgSQhThEhlAZQgbAGgeAOQgeAPgYAIQgzAQgSgQQgOgMAGggQAPhbgHhbQgHhcBZgpQA/gdAjgkQAQgQAKgQQAjg5D9gFQBUhOBKgoQBmg3BUAQQBQAPByBtQA6A3BDBPIAAABIAMALQASAQAOARIgNgIIAzBCIABAAQAdA6ABBDQABBQggBFQgQAkgZAgQgTAYgWAQQg2AohHgLIgXgEQhygegRhfQhHByiaAYQgcAFgbAAQh4AAhdhdgEh/bgCwQhDgIg4gLIAAndQB0gnBEiOQBXixG5ECIABgCQBqhoBYhdQBYhdCFBhIA8AsIAFgGQABgoB8gLQB9gMBEhpQBEhpDCBSQA1AMA8AjIApAYIACgBQBTg+BGg3QBFg3BpA5QBoA6AqAUQAiAPAwA1QA1Bsg8AxQg9AxhTA+QhUA+h2AAQhGAAg6gVQjyAtkqgdIgmgEQA2CjhHBOQhNBShqBnQhqBoiWAAQhYAAhJgjQi7AujWAAQiIAAiUgTgEhNHgFIIgLgHIgGgFQhJgzAhgQQhKAUhpgEQhpgEABhHQABhIAxgpQABgmBSgjQBTgkCDAUQCEATALhBQgKgOA2gYQBpgaCGBEQBmAzATAOQAOgHBwgaIAHgCQBpgXAPAuQAPAuAqAaQArAZgQAwIgEAKQgRArgtAzQgEAFgGAEQgjAYhdgFQgqgCg3gIQACAegTANQgLAIgVABIgLAAQgvgCgtgHIghgGQABACgCAEQgFAHgOAMIgRAOQgWARgxAIQgoAHg6AAIgIABQh0AAhLgvgEBeEgFOQg2gBgmgHQgvgKgVgTIgQgQQgOgOgDgIQgDgFABgCIgeAHQgrAIgtACIgKAAQgUgBgLgJQgSgPADgiQg1AJgoACQhYAGgggcQgGgEgEgGQgqg7gRgxIgDgMQgQg3ApgcQAogeAPg2QANg1BjAcIAHABQBqAfAOAHQARgRBgg6QCAhOBjAeQAzAbgKAQQALBNB8gYQB9gXBOAqQBOApABArQAuAwABBSQACBShkAEQhjAFhHgXQAfAThEA7IgGAFIgKAIQhIA2htAAIgIgBgEB5qgGCQljggkyhMQhJAkhYAAQiWAAhqhpQhqhnhNhTQhHhMA2ijIgmADQkqAdjygtQg6AVhGAAQh2AAhUg+QhTg+g9gxQg8gxA1hsQAwg1AigPQAqgUBog6QBpg5BFA3QBGA3BTA+IACACIApgZQA8gjA1gMQDChSBEBpQBEBpB9ALQB8AMABAoIAFAGIA8gsQCFhhBYBdQBYBdBqBoIABACQG5kCFYCKQFYCKhaGaQhsD8kqAAQghAAgjgDgAMlnEQhJAjhYAAQiVAAhqhmIgBgBQhHhFg5g7Ig3g7QgSgTgKgYQgZg/AZhiQAIgcALgfQAjg0AdgeQAVgWASgMQA2ghCEhhQCFhhBYBdQBYBeBqBnIABACQD6iSCIgHQBogFAmBNQBWCxCeASQAuAGAhAKQBPAXABAxQA7BOACCEQABBOiOAzQhiAiikAVQiUAUiJAAQjVAAi7gvgEBEngI9Qg6AAgogHQgygIgWgRIgRgOQgOgNgEgGQgCgEAAgCIggAGQgtAIgvABIgMAAQgUgBgMgIQgSgNACgeQg3AIgrACQhdAFgigYQgGgEgEgFQgtgzgSgrIgEgKQgQgwArgZQArgaAPguQAOguBpAYIAIABQBvAaAOAIQATgQBmgyQCHhEBpAbQA2AWgLAPQAMBBCDgTQCEgTBSAjQBSAkABAlQAxApACBIQABBHhpAEQhpAEhLgUQAhARhIAyIgGAFIgLAHQhMAvh0AAIgHgBg");
	this.shape.setTransform(827.875,148.6002);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cloud, new cjs.Rectangle(0,0,1655.8,297.2), null);


(lib.boyOrGirl = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_16();
	this.instance.setTransform(0,0,0.2126,0.2126);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.boyOrGirl, new cjs.Rectangle(0,0,199.9,219.6), null);


(lib.bed = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_15();
	this.instance.setTransform(-6.8,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bed, new cjs.Rectangle(-6.8,0,281,426), null);


(lib.babygirl = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_14();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.babygirl, new cjs.Rectangle(0,0,244.5,375), null);


(lib.babyboy = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#BDB7A9").s().p("AgngEIBFAAIAKAAQAAAEgBAAQgVAFgRAAQgXAAgRgJg");
	this.shape.setTransform(291.35,505.5191);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#928A7E").s().p("AAAAZQAAgjgJgYQAdAPgPA1QAAABgFAAIAAgKg");
	this.shape_1.setTransform(305.3723,495.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#ABA596").s().p("AgsgIIBPAAIAKAAQgDAQgbABQgpgBgSgQg");
	this.shape_2.setTransform(163.85,505.85);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7B7365").s().p("AgiAKIAAgKQAiAAAagIQAEgBAFAAQAAAFgCABQgYANgkAAIgHAAg");
	this.shape_3.setTransform(171.85,504.0068);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#9AAA83").s().p("AgngFQAnAAAoAFIAAAEIgKAAQgOACgLAAQgcAAgQgLg");
	this.shape_4.setTransform(215.35,465.625);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#291F09").s().p("AAbDrIhPAAQgKgKgTgEIgLgCQhFgJAJhVQAbgwA+gQIAMgCQAngEAnAEQAKABALAEQAVAIgCgRQAIgwgMgXIgLgaQgEgNAAgTQACgvgGgjQgHgmAAgoQAcACAXAGQAQAFgBAcQgBAEAFAFQAEB5AVBjIAKAwQAIAnADArQAFAygzgBQgFAAgEACQgaAIgjAAIAAAKIgKAAg");
	this.shape_5.setTransform(164.6109,481.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#89806F").s().p("AAAAnQgEgnAAgnIAJAAIAABFIAAAKIgFgBg");
	this.shape_6.setTransform(275.85,497);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#8F9186").s().p("AgFAeIAAhFIAJAAIAAAKQAHAugQAXIAAgKg");
	this.shape_7.setTransform(283.975,480);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#ACC295").s().p("AhFgEICBAAIAKAAIAAAEQhGAFhFAAIAAgJg");
	this.shape_8.setTransform(250.35,465.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#271D07").s().p("AAjDmIhFAAQgNgMgagEQgngFgggTIAAgKIAAhGIAAgKIAAhQQARgSgFgpQgCgUAAgUQASgXgIgvIAAgKIAAgKIAAgUQATgeApgJIAKgBIAAAKQAIAwgSAWIAABQIAAAKIgKAAIAABFIAAAKQgKBEA1gWQAogRA4ABQAkATAaAdQADACAFAAQAKAYAAAkIAAAKQAAAFgCAEQgcAuhGAFIgKAAg");
	this.shape_9.setTransform(290.85,482);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#898576").s().p("AgFAeIAAhFIAJAAIAAAKQAHAugQAXIAAgKg");
	this.shape_10.setTransform(277.975,470);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#B09453").s().p("AAABPQgEhPAAhPIAJAAIAACVIAAAKIgFgBg");
	this.shape_11.setTransform(187.85,321);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#A39F5A").s().p("AhAgGQAPgKAkAFQAhAFAagDQAkgEgaARIgLAJIhjABIgBAAQgPAAAGgUg");
	this.shape_12.setTransform(236.8428,225.7394);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#251A01").s().p("AACAPQgNgLgDgWIATAAIAKAAQACAlgJAAQgDAAgDgEg");
	this.shape_13.setTransform(219.8806,206.8581);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#433915").s().p("AAWAdQgVgJgTgKQAAgFgCgBQgPgGAHgbIAKAAQADAWAOALQAQAOgEgvQANAWAGAcIABAJQgFAAgEgBg");
	this.shape_14.setTransform(220.2386,208);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#793C1F").s().p("AgNMTQhNgCg2gWQjThTh1iyQg8hbgthrQgrhogDiTIAAgKIAAiVIAAgKIAAgyQARgNgCgmIAAgKQADgpAMgcIAuhsQArhnBChTQBNhjB/gyIAMgGQA4gnBdgCIBjAAIAKAAQBSADA5AcQA8AeA6AiQAkAWAfAcQCaCOBDDgQASA9AKA7QAWCGgKCZIgBALQgSCIgvBoIgYA0QhfDLjHBhQgxAZg+AOQg0ANhFAAIgSAAg");
	this.shape_15.setTransform(250.7813,323.7121);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#B18657").s().p("AAtAFIhjAAIAAgJQA2AAA3AEIAAAFIgKAAg");
	this.shape_16.setTransform(248.85,244.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#32280B").s().p("AAyBVIhjAAQAAgFgBAAQhfgXgYhbQAUAKAUAJQAFABAFAAQAeAdApARIARAHQAhATAcgXQBQgPAPhTQAFgaAoAFIgBAKQgQB1hdAqIgKAAg");
	this.shape_17.setTransform(235.35,212.4597);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#AFC49A").s().p("AgBA2QgFg2AAg2QARAXgGAuQgCAUAAAUIgEgBg");
	this.shape_18.setTransform(76.0158,305.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#A6B796").s().p("AgFAeIAAhFIAJAAIAAAKQAHAvgQAWIAAgKg");
	this.shape_19.setTransform(76.975,256);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#A2B256").s().p("AgGAyIAAhtIAJAAQAAAUACAUQAGAzgRAcIAAgKg");
	this.shape_20.setTransform(128.0158,286);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#2B230D").s().p("AnJG4QgEgHgFgFQgagYALg9QAUgZARgbQADgDAAgFQAngLAggRQAEgCAFAAQBwi3CYiOIAfgdQBNhIBZg8QBdg/BVhGQBKgzBNgvQAngXAKApQAFAFABAGQAGAagPAJQgiAWggAXQgzAng1AjQgTANgcACIAAAKQiGBWh2BmQidCIh4CvQgKAKACAUQAFArANAlQAHAqgYAOQgyAbgrAlIgQAAQg1AAgRghg");
	this.shape_21.setTransform(48.5972,305.7317);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#AEBE8F").s().p("AgBA2QgFg2AAg2QARAWgGAvQgCAUAAAUIgEgBg");
	this.shape_22.setTransform(308.0158,147.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#C3C2BC").s().p("AgNAOQgFgHAAgJIAAgUQAugMgLAnQgGAVgJAAQgGAAgJgMg");
	this.shape_23.setTransform(258.238,182.3004);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#31280C").s().p("AhHA8IgGgMQgRgcAFgyQAPgZAUgUQAdgfBBAKQAFABAFAFQAaAYAOAkQAKBohGAYQgFABgFAAIgNAAQg6AAgUgngAgngoIAAAUQAAAKAFAHQAUAbALgjQAHgggZAAQgHAAgLADg");
	this.shape_24.setTransform(260.3449,184.0976);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#93B674").s().p("AAAAnQgFgnAAgnQAQAWgHAvIAAAKIgEgBg");
	this.shape_25.setTransform(306.975,136);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#C5C6C3").s().p("AgNANQgFgFAAgJIAAgUQAugMgLAoQgFASgJAAQgGAAgKgMg");
	this.shape_26.setTransform(203.2543,182.2293);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#2E240A").s().p("AghBjQg/glANhwIAAgKQAnguBaAKQAFABADAGQAPAkANAiQAEAOAAAOQgKBahjAAIgKAAgAgrgoIAAAUQAAAKAFAFQAXAaAIggQAIgggZAAQgIAAgLADg");
	this.shape_27.setTransform(205.7145,184.1274);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#ABC193").s().p("AgFAeIAAhFIAJAAIAAAKQAHAugQAXIAAgKg");
	this.shape_28.setTransform(368.9625,339);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#ECEA91").s().p("AA3aGQiOgJhtgmQg6gUgygaQjDhjiMibIgmgqQgbgdgTgjQgbgwgcgtQgQgagNgdQgCgGgFgGQgXgfgNgoQgTg6gVg6IgKgeQgkhugLiOIgDg8QgEjhAAjhQARgXgDgwQgCgaAEgXQAGglAEghQAIhGAOg8QAOg+AMhDIADgLQAVg4AHhJQADggARgWQAFgGAAgKQgBguAQgbQAFgHABgKQAMg+AUgzIAMgdQAMgfAMgiQABgDAFgFQAFgFAAgKQAAgoAPgXQAFgHACgKQAIgeAMgdQAXgzAUg0QBSjYCYiQQCXiPENgXQBJgGA3ASQAoANAdAaQAoAjAbAtQAMAUANARQAPAUAGAmQAAACAKAAQACBIAMBDQAEAXABAcQAECTAWB8IAJAwIABALQADApANAcQAPAegBAzIABALQAbB+AqBvQAKAaALAiQARA2AOA6QAQA+AgAqIAJANQAcAuAXA3IALAYQA0BkA5BaIAJAOQAOAZALAjQABADAFAFQAFAFADAJQARA4AaAvQAEAIACAJQAIAfAMAdQBYDOgZE6IgBALQgDBMgUA2QgLAegJAeQgKAfgQAWQgFAHgEAIQgpBrhDBTQiECjjHBdQgMAGgOADQgGACgGAEQgQAOgXAHQgYAGgQAOQhCgBg2ANQgrALg5AAIgogBgAovKvIAFABQADCTArBoQAtBrA8BbQB1CyDTBTQA2AWBMACQBRACA7gPQA+gOAxgZQDHhhBfjLIAYg0QAvhoASiIIABgLQAKiagWiGQgKg7gSg9QhDjgiaiNQgfgcgkgWQg6gig8geQg5gchSgDIgBgFQg2gFg2AAIAAAKQhdACg4AnIgMAGQh/AyhNBiQhCBTgrBnIguBsQgMAcgDApIAAAKQACAmgRANIAAAyIAAAKIgKAAQAABQAFBPgAiGlfQgGAVAQAAIBkgBIAKgJQAZgSgiAEQgaADgjgFQgMgBgKAAQgTAAgJAGgAkAoFQACABAAAFQAXBbBgAXQABABAAAFIBkAAIAKAAQBbgrARh1IABgKQgogFgFAaQgQBThOAQQgcAWgigSIgRgIQgpgRgegdIgBgKQgHgcgMgWIgKAAIgUAAIgKAAQgHAbAPAHgABttFQgUAUgOAaQgGAzARAcIAHAMQAWArBGgEQAFAAAEgCQBHgXgKhpQgOgkgagYQgFgFgGgBQgQgDgOAAQgrAAgWAXgAnQs1IgBAKQgNBxBAAlIAKAAQBkAAAKhaQAAgPgFgOQgMgigQgkQgCgGgGgBQgRgCgPAAQhCAAgfAmg");
	this.shape_29.setTransform(243.893,260.2125);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#D8D771").s().p("AA2d7QgegFgoAAQhJAAg6gQQg9gQg5gVQjXhNikiEQijiDhui5Qhvi4gzj2QgMg9gJg9QgLhFgHhGQgNiGAFicQARgbgFg1QgCgUAAgUQACiUASiDIAIg8QAGg9AKgyIAciAQA1jwBEjmQAQg4ASg4QBKjfBUjWIAJgYQArhvBEhRIAKgMQB9ipDJhbIARgIQBkgvCOgJQCegJBjA0QAwAaAkAnQCMCbAREVQABAUAFATQALAogBA9IAAALQAFAnAGAnQAKA9gBBQIAAAKQADBNAMA/IAPBFQAaB4ApBuIAFAMQAdBTAjBMQAYAyAVA0IAIAQIDCGIQAyBmAxBoQAWAxARA3QARA9ATA5QAJAegBApQAAAKAFAEQAMAJgCAbQgFCWgaCBQgZB5gnBuQgoBvg4BcIgJAOQh3CvidCJQgWATgXASQhIA4hcAmQhrAsh8AUIhOANQgNACgQAAQgXAAgcgFgAA15jQkNAWiXCQQiYCQhSDXQgUA0gXAzQgMAdgIAfQgCAJgFAHQgPAXAAAoQAAAKgFAFQgFAFgBADQgMAjgMAeIgMAeQgUAygMA/QgBAJgFAIQgQAbABAtQAAAKgFAHQgRAWgDAgQgHBJgVA3IgDAMQgMBDgOA+QgOA8gIBGQgEAhgGAlQgEAVACAcQADAwgRAWQAADhAEDhIADA8QALCPAkBtIAKAeQAVA6ATA7QANAnAXAgQAFAFACAGQANAdAQAaQAcAtAbAxQATAjAbAcIAmAqQCMCbDDBkQAyAaA6AUQBtAlCOAJQBSAFA6gOQA2gNBCAAQAQgNAYgHQAXgGAQgOQAGgFAGgBQAOgEAMgFQDHheCEiiQBDhTAphrQAEgJAFgGQAQgWAKgfQAJgfALgdQAUg3ADhMIABgKQAZk7hYjOQgMgdgIgeQgCgKgEgHQgagwgRg4QgDgJgFgFQgFgFgBgDQgLgjgOgYIgJgPQg5hbg0hjIgLgYQgXg3gcgtIgJgOQgggpgQg+QgOg7gRg2QgLghgKgbQgqhugbh/IgBgLQABgygPgeQgNgcgDgpIgBgLIgJgxQgWh8gEiTQgBgcgEgWQgMhDgChJQgKAAAAgBQgGgmgPgUQgNgRgMgUQgbgtgogkQgdgagogNQgpgNgzAAIgkACg");
	this.shape_30.setTransform(240.0639,256.8972);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#517726").s().p("EADNAkaIjlAAIAAgFQgogFgoAAQhtgGhkgQQgigFgjgKQgjgJgvgEIAAAUIAAAKQgFgFAAgEQACgcgQgEQgXgHgcgCQgigVgtgMIgMgEQgzgQgogXIgQgIQhdgyhPhCQhkhUhVhmQiGighXjTQgWgygPg3QgSg+gWg3QgCgGAAgFQgCgvgPggQgDgGgBgFIgJgxQgGgdgEgpIgZkPQAAgUACgUQAGgvgSgXQAAhGAEhFQADgrgRgSIAAgKQAcgCATgMQA1gkAzgmQAggYAjgVQAOgJgFgbQgCgGgFgFQgJgpgnAYQhOAuhKAzIAAgKIAAhQQASgWgHgwIgBgKIAAgKIAAhGQASgWgDgwQAAgFACgGQAQgyAChEQAAgFACgGQANgsAKgtQAIggAGglIANg9QANhBAQg4QAhh4AnhuQBLjcBhjHQAxhlA1hiQADgGAFgFQAkgmAegwQAUghAYgeQCDilC1hwQAwgdAygZQBHgiBQgXQBEgTBQgIIAWgBQA7gFA7gJQABgBAAgKQAKgxApgQQANgFAPACQA0AFASgbQAcgqgDhOIAAgKQAGhKAVg3QATgxAdgqQA9gBAqAPIAjAMQAgAJAeAPQAWAcgbAbQgFAFgDAKQgHAigQAcQgPAbgDApQgBAFgDAGQgQAogCA7QgBAbARADQAbAhA0AMQAzAKgKBLQgUAaAxALQALADALAJQAxApAtAtQAPAPANASQAgArAcAwQAbAuAPBAQAIAdALAZQAHAMACAOIAEAMQAPAvAEA+QACA5AQAtQAGASAAAUIAABaQAAAoAFAoIAFAAIAAAKIAAAKQAAA3AFA3IAFAAQAPA9gCBPQgBAmANAZQAFAHABAKQAHBEAXA0QARAlAQAqIAqB3QAEAMAJALQAOAQAGAfQABACAJADIAMAFQAEACAFAAQAAAFgCABQgIAEgKAAQAHAnAZATQADACAFAAQAJBDAbAtIAiA6QAbAwATA7IAJAYQATAnAVAgIAJAPIBgDKQAZAzAVA5QARAsALAyQAJAtAKAqIADAMQAXBvABCAIgKAAIAABGIAAAKQAGAzgLAfQgEANgGAMQgNAZgBAmQgBAjgKAZQgNAggJAmQgMAzgYAoQgPAagNAfIgIAYQgKAigOAZIgcAzQg2BihEBSQiFCiitB6IgMAJQgqAggxAcQguAbhDAIIAAAKIgKABQgpAJgTAeQgFgFgFAAQgeAAgeAEQgOABgNAHQgpAUhIgHIgKAAIiCAAIAAAKIgKAAgAuwJEIAAAKQgFCcANCGQAHBGALBFQAJA9ANA9QAzD2BuC4QBuC5CjCDQCkCEDXBNQA5AVA8AQQA6AQBJAAQApAAAeAFQAvAJAigGIBNgNQB9gUBqgsQBcgmBIg4QAXgSAWgTQCdiJB4ivIAJgOQA3hcAohvQAnhuAZh5QAaiBAFiWQACgbgMgJQgFgEAAgKQACgpgJgeQgUg5gRg9QgRg3gWgxQgxhogyhmIjCmIIgHgQQgWg0gXgyQgkhMgdhTIgFgMQgphugah4IgPhFQgMg/gDhNIAAgKQABhQgKg9QgGgngFgnIAAgLQACg9gMgoQgFgTgBgUQgQkViNibQgjgngwgaQhkg0ifAJQiNAJhkAvIgRAIQjJBbh9CpIgKAMQhDBRgsBvIgJAYQhUDWhJDfQgSA4gRA4QhDDmg2DwIgbB/QgLAygGA9IgHA8QgTCEgCCUIgKAAIAABug");
	this.shape_31.setTransform(221.85,232.9932);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#2A210C").s().p("AmXEbQgZgTgHgnQAKAAAIgEQACgBAAgFQDihFC/hqIAPgJQBNgnA/g0QAnggAXgsQAFgIAAgKIAAg8QALgtA7ACQARAAAJgNQAKgRAiADQAcACAWAIQAbAiACA4IABAKIgmA+QgCADAAAFQgxAahHAEIgKAAQiVCRjJBcIhNAkQghAQgnALQgiAKgcAPQgIAEgKADQgZAHgaAEQgaAEgNAMQgFAAgDgCg");
	this.shape_32.setTransform(370.35,193.4525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.babyboy, new cjs.Rectangle(0,0,414.4,506.7), null);


(lib.___Camera___ = function(mode,startPosition,loop,reversed) {
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
		this.visible = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// cameraBoundary
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(2,1,1,3,true).p("EAq+AfQMhV7AAAMAAAg+fMBV7AAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-641,-361,1282,722);


(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.cloud();
	this.instance.setTransform(675.45,92.05,0.816,0.6188,0,0,0,827.7,148.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjeF/QhJAkhZAAQiUAAhqhmIgCgCQhGhFg5g7Ig4g6QgRgTgKgZQgag/AahgQAHgdAMgfQAjg0AdgeQAVgWASgLQA2ghCEhhQCEhhBYBdQBYBdBqBnIACACQD5iSCIgGQBogFAlBMQBWCxCeATQAuAFAhAKQBPAYABAvQA8BOABCEQABBPiOAyQhhAjilAVQiUATiIAAQjVAAi6gvg");
	this.shape.setTransform(1301.3378,172.4805);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,1387.8,215.5), null);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.doctorsMouthstatic();
	this.instance.setTransform(20.6,116.7,0.9999,0.9999,0,0,0,20.6,11.6);

	this.instance_1 = new lib.eye();
	this.instance_1.setTransform(520.05,12.6,0.9998,0.9998,0,0,180,20.8,12.1);

	this.instance_2 = new lib.eye();
	this.instance_2.setTransform(489.05,12,0.9998,0.9998,0,0,180,20.8,12);

	this.instance_3 = new lib.eye();
	this.instance_3.setTransform(345.25,13.55,0.9998,0.9998,0,0,180,20.8,12);

	this.instance_4 = new lib.eye();
	this.instance_4.setTransform(315.5,16.15,0.9998,0.9998,0,0,180,20.8,12);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,540.9,128), null);


(lib.Scene_1_woman = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// woman
	this.instance = new lib.leftHandWoman();
	this.instance.setTransform(446.25,324.25,0.7304,0.7304,0,0,0,12.2,15.5);

	this.instance_1 = new lib.rigthHandWoman();
	this.instance_1.setTransform(509.8,339.65,0.613,0.613,0,0,0,65.5,42.9);

	this.instance_2 = new lib.woman();
	this.instance_2.setTransform(489.75,350.05,0.6091,0.6091,0,0,0,149.5,221.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2,p:{skewY:0,x:489.75,y:350.05}},{t:this.instance_1,p:{regX:65.5,regY:42.9,rotation:0,x:509.8,y:339.65,scaleX:0.613,scaleY:0.613,skewY:0}},{t:this.instance,p:{regX:12.2,regY:15.5,scaleX:0.7304,scaleY:0.7304,x:446.25,y:324.25,rotation:0,skewY:0}}]},2).to({state:[{t:this.instance_2,p:{skewY:0,x:489.75,y:350.05}},{t:this.instance_1,p:{regX:132.7,regY:5.5,rotation:-7.9429,x:551,y:316.65,scaleX:0.613,scaleY:0.613,skewY:0}},{t:this.instance,p:{regX:8.3,regY:10.1,scaleX:0.7302,scaleY:0.7302,x:443.35,y:320.3,rotation:0,skewY:0}}]},41).to({state:[{t:this.instance_2,p:{skewY:0,x:489.75,y:350.05}},{t:this.instance_1,p:{regX:132.7,regY:5.5,rotation:2.5227,x:551,y:316.75,scaleX:0.6129,scaleY:0.6129,skewY:0}},{t:this.instance,p:{regX:12,regY:11.1,scaleX:0.7303,scaleY:0.7303,x:446.15,y:320.8,rotation:-29.9984,skewY:0}}]},9).to({state:[{t:this.instance_2,p:{skewY:0,x:489.75,y:350.05}},{t:this.instance_1,p:{regX:132.7,regY:5.5,rotation:-12.475,x:551.05,y:316.65,scaleX:0.6129,scaleY:0.6129,skewY:0}},{t:this.instance,p:{regX:12,regY:11.1,scaleX:0.7302,scaleY:0.7302,x:446.1,y:320.95,rotation:-5.2801,skewY:0}}]},10).to({state:[{t:this.instance_2,p:{skewY:0,x:489.75,y:350.05}},{t:this.instance_1,p:{regX:132.7,regY:5.6,rotation:2.5217,x:551,y:316.7,scaleX:0.6128,scaleY:0.6128,skewY:0}},{t:this.instance,p:{regX:12,regY:11.2,scaleX:0.7302,scaleY:0.7302,x:446.2,y:320.8,rotation:-20.2769,skewY:0}}]},10).to({state:[{t:this.instance_2,p:{skewY:0,x:489.75,y:350.05}},{t:this.instance_1,p:{regX:132.8,regY:5.7,rotation:-12.4754,x:551.1,y:316.5,scaleX:0.6128,scaleY:0.6128,skewY:0}},{t:this.instance,p:{regX:12.1,regY:11.2,scaleX:0.7301,scaleY:0.7301,x:446.2,y:321,rotation:-5.2784,skewY:0}}]},9).to({state:[{t:this.instance_2,p:{skewY:180,x:792.55,y:396.7}},{t:this.instance_1,p:{regX:65.5,regY:42.9,rotation:0,x:772.5,y:386.3,scaleX:0.613,scaleY:0.613,skewY:180}},{t:this.instance,p:{regX:23.1,regY:38.2,scaleX:0.7304,scaleY:0.7304,x:828.1,y:387.5,rotation:0,skewY:180}}]},357).to({state:[{t:this.instance_2,p:{skewY:180,x:792.55,y:396.7}},{t:this.instance_1,p:{regX:65.5,regY:42.9,rotation:0,x:772.5,y:386.3,scaleX:0.613,scaleY:0.613,skewY:180}},{t:this.instance,p:{regX:23.1,regY:38.2,scaleX:0.7304,scaleY:0.7304,x:828.1,y:387.5,rotation:0,skewY:180}}]},107).to({state:[{t:this.instance_2,p:{skewY:180,x:792.55,y:396.7}},{t:this.instance_1,p:{regX:65.4,regY:43,rotation:0,x:772.55,y:386.35,scaleX:0.613,scaleY:0.613,skewY:180}},{t:this.instance,p:{regX:23.1,regY:38.2,scaleX:0.7304,scaleY:0.7304,x:828.1,y:387.5,rotation:0,skewY:180}}]},20).wait(69));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_texts = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// texts
	this.instance = new lib.boyOrGirl();
	this.instance.setTransform(372.1,325.75,2.3517,2.3517,0,0,0,100,110);

	this.text = new cjs.Text("It's your turn", "normal 400 21px 'PT Sans'");
	this.text.textAlign = "center";
	this.text.lineHeight = 28;
	this.text.lineWidth = 84;
	this.text.parent = this;
	this.text.setTransform(770.65,235.85,0.9999,0.9999);
	if(!lib.properties.webfonts['PT Sans']) {
		lib.webFontTxtInst['PT Sans'] = lib.webFontTxtInst['PT Sans'] || [];
		lib.webFontTxtInst['PT Sans'].push(this.text);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF9900").s().p("AE3IiQjMAvhrAAQkgAAjLiyQjMiyAAj7QAAj8DMiyQDLiyEggBQEgABDMCyQDMCyABD8QAAD4jHCwIB9DWg");
	this.shape.setTransform(774.35,267.3);

	this.instance_1 = new lib.questionmark();
	this.instance_1.setTransform(501.35,175.7,0.9999,0.9999,0,0,0,55.8,75.2);

	this.instance_2 = new lib.questionmark();
	this.instance_2.setTransform(501.35,175.7,0.9999,0.9999,0,0,0,55.8,75.2);

	this.instance_3 = new lib.questionmark();
	this.instance_3.setTransform(501.35,175.7,0.9999,0.9999,0,0,0,55.8,75.2);

	this.instance_4 = new lib.questionmark();
	this.instance_4.setTransform(501.35,175.7,0.9999,0.9999,0,0,0,55.8,75.2);

	this.instance_5 = new lib.questionmark();
	this.instance_5.setTransform(501.35,175.7,0.9999,0.9999,0,0,0,55.8,75.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhpCcQgzAAABgyIAAjTQgBgyAzAAIDTAAQAyAAAAAyIAADTQAAAygyAAg");
	this.shape_1.setTransform(1063.9284,300.4546,0.7014,0.6931,0,0,8.8683);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AifJHIgHgEIgCgDIAAAAQgbkjDYipIC0iWIAFgGIAAgBQBYizithcIgSgGIgBgBQiRgWhYAyQhfBDggCWIkrgmQABj2D0iWQFnieEWCoQCaBaA7CgQBTEDkJDLQiIBdhABoIAAABIgCAEIgCAGIgCADIgCAIQgCAHgBA8QgBAyABAYIgCAFIgFACIgGACQhKADhIAAQhJAAhIgDg");
	this.shape_2.setTransform(1064.3526,247.735,0.7016,0.6932,0,0,8.868);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[]},2).to({state:[{t:this.shape},{t:this.text,p:{scaleX:0.9999,scaleY:0.9999,skewY:0,x:770.65,y:235.85,text:"It's your turn",font:"normal 400 21px 'PT Sans'",color:"#000000",lineHeight:28,lineWidth:84}}]},331).to({state:[]},105).to({state:[{t:this.instance_1,p:{regY:75.2,scaleX:0.9999,scaleY:0.9999,x:501.35,y:175.7,regX:55.8}}]},38).to({state:[{t:this.instance_2,p:{regY:75.2,scaleX:0.9999,scaleY:0.9999,x:501.35,y:175.7,regX:55.8}},{t:this.instance_1,p:{regY:75.4,scaleX:0.611,scaleY:0.611,x:880.1,y:240.2,regX:55.8}}]},7).to({state:[{t:this.instance_3,p:{regY:75.2,scaleX:0.9999,scaleY:0.9999,x:501.35,y:175.7,regX:55.8}},{t:this.instance_2,p:{regY:75.4,scaleX:0.611,scaleY:0.611,x:880.1,y:240.2,regX:55.8}},{t:this.instance_1,p:{regY:75.3,scaleX:0.5538,scaleY:0.5538,x:732.2,y:122.95,regX:55.9}}]},8).to({state:[{t:this.instance_4,p:{regY:75.2,scaleX:0.9999,scaleY:0.9999,x:501.35,y:175.7}},{t:this.instance_3,p:{regY:75.4,scaleX:0.611,scaleY:0.611,x:880.1,y:240.2,regX:55.8}},{t:this.instance_2,p:{regY:75.3,scaleX:0.5538,scaleY:0.5538,x:732.2,y:122.95,regX:55.9}},{t:this.instance_1,p:{regY:75.5,scaleX:0.608,scaleY:0.608,x:340.35,y:139.8,regX:56.1}}]},8).to({state:[{t:this.instance_5},{t:this.instance_4,p:{regY:75.4,scaleX:0.611,scaleY:0.611,x:880.1,y:240.2}},{t:this.instance_3,p:{regY:75.3,scaleX:0.5538,scaleY:0.5538,x:732.2,y:122.95,regX:55.9}},{t:this.instance_2,p:{regY:75.5,scaleX:0.608,scaleY:0.608,x:340.35,y:139.8,regX:56.1}},{t:this.instance_1,p:{regY:75.4,scaleX:0.8689,scaleY:0.8689,x:137.75,y:141,regX:55.9}}]},8).to({state:[{t:this.instance_5},{t:this.instance_4,p:{regY:75.4,scaleX:0.611,scaleY:0.611,x:880.1,y:240.2}},{t:this.instance_3,p:{regY:75.3,scaleX:0.5538,scaleY:0.5538,x:732.2,y:122.95,regX:55.9}},{t:this.instance_2,p:{regY:75.5,scaleX:0.608,scaleY:0.608,x:340.35,y:139.8,regX:56.1}},{t:this.instance_1,p:{regY:75.4,scaleX:0.8689,scaleY:0.8689,x:137.75,y:141,regX:55.9}},{t:this.shape_2},{t:this.shape_1}]},8).to({state:[{t:this.instance_5},{t:this.instance_4,p:{regY:75.4,scaleX:0.611,scaleY:0.611,x:880.1,y:240.2}},{t:this.instance_3,p:{regY:75.3,scaleX:0.5538,scaleY:0.5538,x:732.2,y:122.95,regX:55.9}},{t:this.instance_2,p:{regY:75.5,scaleX:0.608,scaleY:0.608,x:340.35,y:139.8,regX:56.1}},{t:this.instance_1,p:{regY:75.4,scaleX:0.8689,scaleY:0.8689,x:137.75,y:141,regX:55.9}},{t:this.shape_2},{t:this.shape_1}]},7).to({state:[]},13).to({state:[{t:this.text,p:{scaleX:0.8785,scaleY:0.9997,skewY:14.2962,x:1062.95,y:284.25,text:"Wasabi",font:"normal 400 43px 'PT Sans'",color:"#FFFFFF",lineHeight:52.95,lineWidth:161}}]},71).to({state:[{t:this.text,p:{scaleX:0.9999,scaleY:0.9999,skewY:0,x:1027.4039,y:336.8,text:"You Can’t Always Get What You Want-The Rolling Stones",font:"normal 400 5px 'PT Sans'",color:"#000000",lineHeight:7.9,lineWidth:131}}]},28).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_mouth = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// mouth
	this.instance = new lib.womansmouth1("synched",0);
	this.instance.setTransform(470.35,278.8,0.8204,0.7126);

	this.instance_1 = new lib.manssmile1("synched",0);
	this.instance_1.setTransform(377.5,275.9,0.5275,1,0,0,0,31.9,8.3);

	this.instance_2 = new lib.CachedBmp_1();
	this.instance_2.setTransform(366.7,263.3,0.5,0.5);

	this.instance_3 = new lib.womanm2("synched",0);
	this.instance_3.setTransform(487.3,282.35,1,1,0,0,0,24.4,11.1);

	this.instance_4 = new lib.manssmile2("synched",0);
	this.instance_4.setTransform(379.1,282.25,0.6695,0.7618,0,0,0,29.1,16);

	this.instance_5 = new lib.CachedBmp_2();
	this.instance_5.setTransform(366.7,263.3,0.5,0.5);

	this.instance_6 = new lib.manssadmouth2("synched",0);
	this.instance_6.setTransform(363.15,271.7,0.5095,0.5253,0,0,180,75.8,11.3);

	this.instance_7 = new lib.CachedBmp_4();
	this.instance_7.setTransform(366.7,263.3,0.5,0.5);

	this.instance_8 = new lib.CachedBmp_29();
	this.instance_8.setTransform(366.7,263.3,0.5,0.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9D0000").s().p("AhVBZQgjggAAg4QAAgmARghIAAAQQAAA2AeAiQAeAhArgIQAqgHAegtQAdgsAAg3IAAgVQAUAdAAAqQAAA3gkAtQgiAtgzAKQgKABgKAAQglAAgcgZg");
	this.shape.setTransform(789.15,330.0976);

	this.mouth = new lib.smile();
	this.mouth.name = "mouth";
	this.mouth.setTransform(786.35,329.15,1,1,0,0,0,12.1,11.5);

	this.instance_9 = new lib.covers();
	this.instance_9.setTransform(794.55,329.3,1,1,0,0,0,17.2,11);

	this.instance_10 = new lib.suprisemansmouth("synched",0);
	this.instance_10.setTransform(603.7,340.65,0.5593,0.5308,0,0,0,25.6,44.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D9E37B").s().p("ABqgPIgVgJIAAgWICAA/QA8AegHAAQgKAAiWg+gAkKgNIAAgCIAAgFIAAgDIAJACIAAAbQgHgJgCgKg");
	this.shape_1.setTransform(803.1691,334.8089);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#94AE35").s().p("AgQAKIgBgBIAAAAIAAgBIgBAAIAAAAIAAAAIgBgBIAAAAIAAgBIAAAAIAAgBIgBgBIAAgEIAAAAIAAAAIAAgCIABAAIAAgBIAAgBIABgBIAAAAIABgCIABAAIAAAAIABgBIAAAAIABAAIABAAIAAAAIABAAIACAAIAAgBIABABIABAAIAAAAIABAAIABAAIABAAIABABIAAAAIABAAIABABIAAAAIABABIABAAIAAABIAAABIAAAAIABABIAAAAIABAAIAAABIABAAIABABIABAAIABAAIAAAAIABAAIABAAIABABIAAAAIABAAIAAABIABAAIAAAAIABABIAAAAIABAAIABACIAAABIABAAIAAAAIABABIAAAAIABAAIAAABIABAAIABAAIAAAAIABABIAAAAIABAAIAAABg");
	this.shape_2.setTransform(796.425,317.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D9E47C").s().p("At9B3IgHgBIgDgBIgCAAIgEgBIgEgCIgEgCIgDgCIgEgBIgDgCIgDgCIgCgCIgCgBIgCgCIgBgCIgCgCIgCgBIgCgCIgBgCIgDgCIgCgBIgCgCIgCgCIgCgCIgCgBIgBgCIgBgCIgCgCIgBgBIgBgCIgBgCIgBgBIgBgCIgBgCIgBgCIgBgBIgBgCIAAgCIgBgCIgBgBIAAgCIAAgCIgBgCIAAgBIAAgCIAAgCIAAgCIAAgBIgBgCIABgCIAAgCIAAgBIAAgCIAAgCIAAgCIABgBIAAgCIABgCIABgCIAAgBIABgCIABgCIAAgCIACgBIABgCIABgCIACgCIABgBIACgCIABgCIACgBIACgBIADgCIADgCIADgBIAEgCIADgBIADgCIACgBIABgCIACgCIACgCIACgBIADgCIADgCIAEgBIADgCIADgBIACgBIACgBIACAAIADgBIAIAAIACAAIAHAAIADABIACAAIAEACIADABIAEABIAFACIACABIABAAIADABIAIABIADAAIACABIAEABIADABIAQgBIgBgBIAAgCIAAgCIgBgBIAAgCIAAgCIAAgCIAAgBIAAgCIAAgCIAAgCIAAgBIAAgCIABgCIAAgCIAAgBIABgCIABgCIAAgCIABgBIAAgCIABgCIABgCIABgBIABgCIABgCIACgCIABgBIACgCIACgCIACgCIACgBIACgCIADgCIAEgCIADgBIAEgBIACgBIACgBIADAAIAIAAIAAgBIACAAIAHABIADAAIACABIAEABIAEACIAEACIADABIACACIACACIADACIACABIABACIABACIACACIABABIACACIABACIAAACIABABIACACIABACIABACIABABIABACIABACIACABIAAACIABACIABACIAAABIACACIAAACIAAACIABABIAAACIABACIABACIAAABIABACIABACIAAACIAAABIABACIAAACIABACIAAABIAAACIAAACIAAACIAAABIAAABIAAACIAAACIAAABIAAACIAAACIAAACIAAABIgBACIAAACIgBACIAAABIgBACIAAACIgBACIAAABIgBACIgBACIgBABIAAACIgCACIAAACIgBABIgCACIgBACIgBACIgBABIgBACIgBACIgBACIgCABIgBACIgBACIgCACIgDABIgCACIgCACIgDACIgCABIgDACIgCACIgEACIgEABIgEACIgDACIgCACIgCABIgDACIgDACIgEACIgCABIgDACIgEACIgEACIgEABIgDABIgDABIgDABIgEACIgDACIgEABIgEACIgDABIgCABIgCAAIgDABIgDABIgIABIgEACIgDABIgCAAIgCABIgDAAIgDABIgEABIgGAAIgCABIgDAAIgDABIgHABIgOAAgAMbBcIgCgBIgBgCIgBgCIgBgCIgCgBIgBgCIAAgCIgBgCIgBgBIgBgCIAAgCIgBgCIAAgBIAAgCIgBgCIAAgCIAAgBIAAgCIAAgCIgBgCIAAgBIAAgCIAAgCIAAgBIAAgCIAAgCIABgCIAAgBIAAgCIAAgCIABgCIAJAEIABACQgFAGAAAHQAAAMANALIAAADIgFAKIgBgBgAO3hqIABgBIAAgBIAAAAIAAgBIABAAIAAgBIABAAIAAAAIABgBIAAAAIABgBIABAAIABAAIABgBIABAAIABAAIACAAIAAAAIACAAIABAAIABAAIABABIABAAIABAAIAAABIABAAIABABIAAAAIAAABIABAAIAAABIAAAAIABAAIAAABIAAAAIABABgANLhqIABgBIADgCIACgCIAEgBIADgCIAEgBIACgBIADAAIACgBIAIAAIAAgBIAHAAIAIABIACABIADAAIADABIAFACIADACIADABIADACIACACg");
	this.shape_3.setTransform(697.225,329.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance,p:{regX:0,regY:0,scaleX:0.8204,scaleY:0.7126,x:470.35,y:278.8}}]},2).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3}]},119).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance,p:{regX:26,regY:13.8,scaleX:1,scaleY:1,x:495.6,y:286.45}}]},122).to({state:[{t:this.instance_8},{t:this.instance_1},{t:this.instance,p:{regX:26,regY:13.8,scaleX:0.8204,scaleY:0.7126,x:491.7,y:288.65}}]},161).to({state:[{t:this.shape}]},34).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.instance_10},{t:this.instance_9},{t:this.mouth}]},98).wait(98));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_man = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// man
	this.instance = new lib.rigthHandMan();
	this.instance.setTransform(419.65,342.25,0.5543,0.5543,6.9812,0,0,31.9,74.4);

	this.instance_1 = new lib.leftHandMan();
	this.instance_1.setTransform(324.9,349.95,0.6233,0.6233,0,0,0,29.4,74.3);

	this.instance_2 = new lib.man();
	this.instance_2.setTransform(370.35,343.85,0.6019,0.6019,0,0,0,127.1,215);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2,p:{regX:127.1,regY:215,x:370.35,y:343.85}},{t:this.instance_1,p:{regX:29.4,regY:74.3,x:324.9,y:349.95,scaleX:0.6233,scaleY:0.6233,rotation:0}},{t:this.instance,p:{regX:31.9,regY:74.4,rotation:6.9812,x:419.65,y:342.25,scaleX:0.5543,scaleY:0.5543}}]},2).to({state:[{t:this.instance_2,p:{regX:127.1,regY:215,x:370.35,y:343.85}},{t:this.instance_1,p:{regX:29.4,regY:74.3,x:324.9,y:349.95,scaleX:0.6233,scaleY:0.6233,rotation:0}},{t:this.instance,p:{regX:38.6,regY:10.6,rotation:2.7567,x:427.6,y:307.6,scaleX:0.5543,scaleY:0.5543}}]},26).to({state:[{t:this.instance_2,p:{regX:127.1,regY:215,x:370.35,y:343.85}},{t:this.instance_1,p:{regX:29.4,regY:74.3,x:324.9,y:349.95,scaleX:0.6233,scaleY:0.6233,rotation:0}},{t:this.instance,p:{regX:39.2,regY:17.2,rotation:-8.017,x:427.55,y:311.2,scaleX:0.5543,scaleY:0.5543}}]},5).to({state:[{t:this.instance_2,p:{regX:127.1,regY:215,x:370.35,y:343.85}},{t:this.instance_1,p:{regX:29.4,regY:74.3,x:324.9,y:349.95,scaleX:0.6233,scaleY:0.6233,rotation:0}},{t:this.instance,p:{regX:39.2,regY:17.3,rotation:-17.0052,x:427.6,y:311.25,scaleX:0.5543,scaleY:0.5543}}]},3).to({state:[{t:this.instance_2,p:{regX:127.1,regY:215,x:370.35,y:343.85}},{t:this.instance_1,p:{regX:29.4,regY:74.3,x:324.9,y:349.95,scaleX:0.6233,scaleY:0.6233,rotation:0}},{t:this.instance,p:{regX:40.3,regY:12.2,rotation:-43.7105,x:428.45,y:308.5,scaleX:0.5542,scaleY:0.5542}}]},3).to({state:[{t:this.instance_2,p:{regX:127.2,regY:215.2,x:607.9,y:401.35}},{t:this.instance_1,p:{regX:29.5,regY:74.5,x:562.45,y:407.5,scaleX:0.6233,scaleY:0.6233,rotation:0}},{t:this.instance,p:{regX:40.4,regY:12.5,rotation:-4.0092,x:666.05,y:366.05,scaleX:0.5541,scaleY:0.5541}}]},399).to({state:[{t:this.instance_2,p:{regX:127.2,regY:215.2,x:607.9,y:401.35}},{t:this.instance_1,p:{regX:29.6,regY:24.2,x:562.55,y:376,scaleX:0.6232,scaleY:0.6232,rotation:-14.9971}},{t:this.instance,p:{regX:40.4,regY:12.7,rotation:-24.7181,x:666.15,y:366,scaleX:0.5541,scaleY:0.5541}}]},24).to({state:[{t:this.instance_2,p:{regX:127.2,regY:215.2,x:607.9,y:401.35}},{t:this.instance_1,p:{regX:29.6,regY:24.2,x:562.7,y:375.9,scaleX:0.6232,scaleY:0.6232,rotation:-29.9934}},{t:this.instance,p:{regX:40.4,regY:12.7,rotation:-39.7159,x:666.15,y:365.85,scaleX:0.554,scaleY:0.554}}]},8).to({state:[{t:this.instance_2,p:{regX:127.2,regY:215.2,x:607.9,y:401.35}},{t:this.instance_1,p:{regX:29.6,regY:24.2,x:562.7,y:375.9,scaleX:0.6232,scaleY:0.6232,rotation:-29.9934}},{t:this.instance,p:{regX:40.4,regY:12.7,rotation:-54.7135,x:666.25,y:365.75,scaleX:0.554,scaleY:0.554}}]},8).to({state:[{t:this.instance_2,p:{regX:127.2,regY:215.2,x:607.9,y:401.35}},{t:this.instance_1,p:{regX:29.6,regY:24.2,x:562.7,y:375.9,scaleX:0.6232,scaleY:0.6232,rotation:-29.9934}},{t:this.instance,p:{regX:40.2,regY:12.7,rotation:-84.7133,x:666.2,y:365.7,scaleX:0.5539,scaleY:0.5539}}]},7).to({state:[{t:this.instance_2,p:{regX:127.2,regY:215.2,x:607.9,y:401.35}},{t:this.instance_1,p:{regX:29.6,regY:24.2,x:562.7,y:375.9,scaleX:0.6232,scaleY:0.6232,rotation:-29.9934}},{t:this.instance,p:{regX:40.2,regY:12.8,rotation:-119.6816,x:666.3,y:365.45,scaleX:0.5539,scaleY:0.5539}}]},8).wait(141));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Layer_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_4
	this.instance = new lib.Symbol2();
	this.instance.setTransform(-21.6,326.8,1,1,0,0,0,995.9,187.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(438).to({_off:false},0).wait(1).to({regX:693.9,regY:107.7,x:-321.15,y:246.6},0).wait(1).to({x:-318.7,y:246.5},0).wait(1).to({x:-316.25,y:246.45},0).wait(1).to({x:-313.8,y:246.35},0).wait(1).to({x:-311.35,y:246.25},0).wait(1).to({x:-308.95,y:246.2},0).wait(1).to({x:-306.5,y:246.1},0).wait(1).to({x:-304.05,y:246},0).wait(1).to({x:-301.6,y:245.95},0).wait(1).to({x:-299.15,y:245.85},0).wait(1).to({x:-296.7,y:245.75},0).wait(1).to({x:-294.3,y:245.7},0).wait(1).to({x:-291.85,y:245.6},0).wait(1).to({x:-289.4,y:245.5},0).wait(1).to({x:-286.95,y:245.45},0).wait(1).to({x:-284.5,y:245.35},0).wait(1).to({x:-282.05,y:245.25},0).wait(1).to({x:-279.65,y:245.2},0).wait(1).to({x:-277.2,y:245.1},0).wait(1).to({x:-274.75,y:245.05},0).wait(1).to({x:-272.3,y:244.95},0).wait(1).to({x:-269.85,y:244.85},0).wait(1).to({x:-267.4,y:244.8},0).wait(1).to({x:-265,y:244.7},0).wait(1).to({x:-262.55,y:244.6},0).wait(1).to({x:-260.1,y:244.55},0).wait(1).to({x:-257.65,y:244.45},0).wait(1).to({x:-255.2,y:244.35},0).wait(1).to({x:-252.8,y:244.3},0).wait(1).to({x:-250.35,y:244.2},0).wait(1).to({x:-247.9,y:244.1},0).wait(1).to({x:-245.45,y:244.05},0).wait(1).to({x:-243,y:243.95},0).wait(1).to({x:-240.55,y:243.85},0).wait(1).to({x:-238.15,y:243.8},0).wait(1).to({x:-235.7,y:243.7},0).wait(1).to({x:-233.25,y:243.65},0).wait(1).to({x:-230.8,y:243.55},0).wait(1).to({x:-228.35,y:243.45},0).wait(1).to({x:-225.9,y:243.4},0).wait(1).to({x:-223.5,y:243.3},0).wait(1).to({x:-221.05,y:243.2},0).wait(1).to({x:-218.6,y:243.15},0).wait(1).to({x:-216.15,y:243.05},0).wait(1).to({x:-213.7,y:242.95},0).wait(1).to({x:-211.25,y:242.9},0).wait(1).to({x:-208.85,y:242.8},0).wait(1).to({x:-206.4,y:242.7},0).wait(1).to({x:-203.95,y:242.65},0).wait(1).to({x:-201.5,y:242.55},0).wait(1).to({x:-199.05,y:242.45},0).wait(1).to({x:-196.65,y:242.4},0).wait(1).to({x:-194.2,y:242.3},0).wait(1).to({x:-191.75,y:242.25},0).wait(1).to({x:-189.3,y:242.15},0).wait(1).to({x:-186.85,y:242.05},0).wait(1).to({x:-184.4,y:242},0).wait(1).to({x:-182,y:241.9},0).wait(1).to({x:-179.55,y:241.8},0).wait(1).to({x:-177.1,y:241.75},0).wait(1).to({x:-174.65,y:241.65},0).wait(1).to({x:-172.2,y:241.55},0).wait(1).to({x:-169.75,y:241.5},0).wait(1).to({x:-167.35,y:241.4},0).wait(1).to({x:-164.9,y:241.3},0).wait(1).to({x:-162.45,y:241.25},0).wait(1).to({x:-160,y:241.15},0).wait(1).to({x:-157.55,y:241.05},0).wait(1).to({x:-155.1,y:241},0).wait(1).to({x:-152.7,y:240.9},0).wait(1).to({x:-150.25,y:240.85},0).wait(1).to({x:-147.8,y:240.75},0).wait(1).to({x:-145.35,y:240.65},0).wait(1).to({x:-142.9,y:240.6},0).wait(1).to({x:-140.5,y:240.5},0).wait(1).to({x:-138.05,y:240.4},0).wait(1).to({x:-135.6,y:240.35},0).wait(1).to({x:-133.15,y:240.25},0).wait(1).to({x:-130.7,y:240.15},0).wait(1).to({x:-128.25,y:240.1},0).wait(1).to({x:-125.85,y:240},0).wait(1).to({x:-123.4,y:239.9},0).wait(1).to({x:-120.95,y:239.85},0).wait(1).to({x:-118.5,y:239.75},0).wait(1).to({x:-116.05,y:239.65},0).wait(1).to({x:-113.6,y:239.6},0).wait(1).to({x:-111.2,y:239.5},0).wait(1).to({x:-108.75,y:239.4},0).wait(1).to({x:-106.3,y:239.35},0).wait(1).to({x:-103.85,y:239.25},0).wait(1).to({x:-101.4,y:239.2},0).wait(1).to({x:-98.95,y:239.1},0).wait(1).to({x:-96.55,y:239},0).wait(1).to({x:-94.1,y:238.95},0).wait(1).to({x:-91.65,y:238.85},0).wait(1).to({x:-89.2,y:238.75},0).wait(1).to({x:-86.75,y:238.7},0).wait(1).to({x:-84.35,y:238.6},0).wait(1).to({x:-81.9,y:238.5},0).wait(1).to({x:-79.45,y:238.45},0).wait(1).to({x:-77,y:238.35},0).wait(1).to({x:-74.55,y:238.25},0).wait(1).to({x:-72.1,y:238.2},0).wait(1).to({x:-69.7,y:238.1},0).wait(1).to({x:-67.25,y:238},0).wait(1).to({x:-64.8,y:237.95},0).wait(1).to({x:-62.35,y:237.85},0).wait(1).to({x:-59.9,y:237.8},0).wait(1).to({x:-57.45,y:237.7},0).wait(1).to({x:-55.05,y:237.6},0).wait(1).to({x:-52.6,y:237.55},0).wait(1).to({x:-50.15,y:237.45},0).wait(1).to({x:-47.7,y:237.35},0).wait(1).to({x:-45.25,y:237.3},0).wait(1).to({x:-42.8,y:237.2},0).wait(1).to({x:-40.4,y:237.1},0).wait(1).to({x:-37.95,y:237.05},0).wait(1).to({x:-35.5,y:236.95},0).wait(1).to({x:-33.05,y:236.85},0).wait(1).to({x:-30.6,y:236.8},0).wait(1).to({x:-28.2,y:236.7},0).wait(1).to({x:-25.75,y:236.6},0).wait(1).to({x:-23.3,y:236.55},0).wait(1).to({x:-20.85,y:236.45},0).wait(1).to({x:-18.4,y:236.4},0).wait(1).to({x:-15.95,y:236.3},0).wait(1).to({x:-13.55,y:236.2},0).wait(1).to({x:-11.1,y:236.15},0).wait(1).to({x:-8.65,y:236.05},0).wait(1).to({x:-6.2,y:235.95},0).wait(1).to({x:-3.75,y:235.9},0).wait(1).to({x:-1.3,y:235.8},0).wait(1).to({x:1.1,y:235.7},0).wait(1).to({x:3.55,y:235.65},0).wait(1).to({x:6,y:235.55},0).wait(1).to({x:8.45,y:235.45},0).wait(1).to({x:10.9,y:235.4},0).wait(1).to({x:13.35,y:235.3},0).wait(1).to({x:15.75,y:235.2},0).wait(1).to({x:18.2,y:235.15},0).wait(1).to({x:20.65,y:235.05},0).wait(1).to({x:23.1,y:235},0).wait(1).to({x:25.55,y:234.9},0).wait(1).to({x:27.95,y:234.8},0).wait(1).to({x:30.4,y:234.75},0).wait(1).to({x:32.85,y:234.65},0).wait(1).to({x:35.3,y:234.55},0).wait(1).to({x:37.75,y:234.5},0).wait(1).to({x:40.2,y:234.4},0).wait(1).to({x:42.6,y:234.3},0).wait(1).to({x:45.05,y:234.25},0).wait(1).to({x:47.5,y:234.15},0).wait(1).to({x:49.95,y:234.05},0).wait(1).to({x:52.4,y:234},0).wait(1).to({x:54.85,y:233.9},0).wait(1).to({x:57.25,y:233.8},0).wait(1).to({x:59.7,y:233.75},0).wait(1).to({x:62.15,y:233.65},0).wait(1).to({x:64.6,y:233.6},0).wait(1).to({x:67.05,y:233.5},0).wait(1).to({x:69.5,y:233.4},0).wait(1).to({x:71.9,y:233.35},0).wait(1).to({x:74.35,y:233.25},0).wait(1).to({x:76.8,y:233.15},0).wait(1).to({x:79.25,y:233.1},0).wait(1).to({x:81.7,y:233},0).wait(1).to({x:84.1,y:232.9},0).wait(1).to({x:86.55,y:232.85},0).wait(1).to({x:89,y:232.75},0).wait(1).to({x:91.45,y:232.65},0).wait(1).to({x:93.9,y:232.6},0).wait(1).to({x:96.35,y:232.5},0).wait(1).to({x:98.75,y:232.4},0).wait(1).to({x:101.2,y:232.35},0).wait(1).to({x:103.65,y:232.25},0).wait(1).to({x:106.1,y:232.15},0).wait(1).to({x:108.55,y:232.1},0).wait(1).to({x:111,y:232},0).wait(1).to({x:113.4,y:231.95},0).wait(1).to({x:115.85,y:231.85},0).wait(1).to({x:118.3,y:231.75},0).wait(1).to({x:120.75,y:231.7},0).wait(1).to({x:123.2,y:231.6},0).wait(1).to({x:125.65,y:231.5},0).wait(1).to({x:128.05,y:231.45},0).wait(1).to({x:130.5,y:231.35},0).wait(1).to({x:132.95,y:231.25},0).wait(1).to({x:135.4,y:231.2},0).wait(1).to({x:137.85,y:231.1},0).wait(1).to({x:140.25,y:231},0).wait(1).to({x:142.7,y:230.95},0).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_eyes = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// eyes
	this.instance = new lib.eye();
	this.instance.setTransform(488.55,260.8,0.7584,0.7584,-29.9978,0,0,20.8,11.8);

	this.instance_1 = new lib.eye();
	this.instance_1.setTransform(520.7,261.35,0.7584,0.7584,-29.9978,0,0,20.8,11.8);

	this.instance_2 = new lib.eye();
	this.instance_2.setTransform(404.65,254.65,0.7754,0.7754,0,0,0,20.9,11.8);

	this.instance_3 = new lib.eye();
	this.instance_3.setTransform(375.55,254.65,0.7754,0.7754,0,0,0,20.9,11.8);

	this.instance_4 = new lib.Symbol1();
	this.instance_4.setTransform(545.65,356.25,1,1,0,0,0,270.4,64);

	this.instance_5 = new lib.doctorsMouthstatic();
	this.instance_5.setTransform(295.85,408.95,0.9999,0.9999,0,0,0,20.6,11.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3,p:{x:375.55,y:254.65,regY:11.8,regX:20.9,scaleX:0.7754,scaleY:0.7754,skewY:0}},{t:this.instance_2,p:{x:404.65,y:254.65,regY:11.8,regX:20.9,scaleX:0.7754,scaleY:0.7754,skewY:0}},{t:this.instance_1,p:{regX:20.8,regY:11.8,scaleX:0.7584,scaleY:0.7584,rotation:-29.9978,x:520.7,y:261.35,skewX:0,skewY:0}},{t:this.instance,p:{regX:20.8,regY:11.8,scaleX:0.7584,scaleY:0.7584,rotation:-29.9978,x:488.55,y:260.8,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_3,p:{x:371.55,y:248.45,regY:11.8,regX:20.9,scaleX:0.7754,scaleY:0.7754,skewY:0}},{t:this.instance_2,p:{x:400.65,y:248.45,regY:11.8,regX:20.9,scaleX:0.7754,scaleY:0.7754,skewY:0}},{t:this.instance_1,p:{regX:20.8,regY:11.8,scaleX:0.7584,scaleY:0.7584,rotation:-29.9978,x:520.7,y:261.35,skewX:0,skewY:0}},{t:this.instance,p:{regX:20.8,regY:11.8,scaleX:0.7584,scaleY:0.7584,rotation:-29.9978,x:488.55,y:260.8,skewX:0,skewY:0}}]},127).to({state:[{t:this.instance_3,p:{x:379.1,y:255.4,regY:12,regX:20.9,scaleX:0.7754,scaleY:0.7754,skewY:0}},{t:this.instance_2,p:{x:408.2,y:255.4,regY:12,regX:20.9,scaleX:0.7754,scaleY:0.7754,skewY:0}},{t:this.instance_1,p:{regX:20.9,regY:12.1,scaleX:0.7583,scaleY:0.7583,rotation:-22.7578,x:516.15,y:254.5,skewX:0,skewY:0}},{t:this.instance,p:{regX:20.9,regY:12.1,scaleX:0.7583,scaleY:0.7583,rotation:-22.7578,x:484.35,y:249.9,skewX:0,skewY:0}}]},58).to({state:[{t:this.instance_3,p:{x:379.1,y:255.4,regY:12,regX:20.9,scaleX:0.7754,scaleY:0.7754,skewY:0}},{t:this.instance_2,p:{x:408.2,y:255.4,regY:12,regX:20.9,scaleX:0.7754,scaleY:0.7754,skewY:0}},{t:this.instance_1,p:{regX:21.1,regY:12.2,scaleX:0.7581,scaleY:0.7581,rotation:-22.7561,x:527.55,y:253.85,skewX:0,skewY:0}},{t:this.instance,p:{regX:20.9,regY:12.3,scaleX:0.7581,scaleY:0.7581,rotation:-22.7561,x:497.35,y:254.6,skewX:0,skewY:0}}]},43).to({state:[{t:this.instance_4}]},208).to({state:[{t:this.instance_3,p:{x:591.25,y:312.5,regY:12.1,regX:20.8,scaleX:0.9997,scaleY:0.9997,skewY:180}},{t:this.instance_2,p:{x:618.6,y:311.4,regY:12.1,regX:20.8,scaleX:0.9998,scaleY:0.9998,skewY:180}},{t:this.instance_1,p:{regX:20.8,regY:12.1,scaleX:0.9997,scaleY:0.9997,rotation:0,x:752.75,y:304.35,skewX:14.9977,skewY:-165.0023}},{t:this.instance,p:{regX:20.8,regY:12.1,scaleX:0.9997,scaleY:0.9997,rotation:0,x:783.8,y:304.85,skewX:14.9976,skewY:-165.0024}},{t:this.instance_5}]},120).wait(76));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_doctor = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// doctor
	this.instance = new lib.doctorsMouthst();
	this.instance.setTransform(461.7,162.55,1,1,0,0,0,20.4,11.5);

	this.instance_1 = new lib.doctorsMouth();
	this.instance_1.setTransform(961.05,335.25,0.9999,0.9999,0,0,0,20.5,11.6);

	this.instance_2 = new lib.doctor();
	this.instance_2.setTransform(968.95,304.45,2.1209,2.1209,0,0,0,60.6,73.6);

	this.instance_3 = new lib.doctorsMouthstatic();
	this.instance_3.setTransform(960.65,334.95,0.9999,0.9999,0,0,0,20.5,11.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2,p:{regY:73.6,scaleX:2.1209,scaleY:2.1209,skewY:0,x:968.95,y:304.45}},{t:this.instance_1},{t:this.instance}]},333).to({state:[{t:this.instance_2,p:{regY:73.6,scaleX:2.1209,scaleY:2.1209,skewY:0,x:968.95,y:304.45}},{t:this.instance_3}]},44).to({state:[{t:this.instance_2,p:{regY:73.8,scaleX:2.1205,scaleY:2.1205,skewY:180,x:287.05,y:379.75}}]},61).wait(196));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_background = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// background
	this.start = new lib.start();
	this.start.name = "start";
	this.start.setTransform(718.8,314.4);
	new cjs.ButtonHelper(this.start, 0, 1, 2, false, new lib.start(), 3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D7EDF9").s().p("EhmVA7AMAAAh1/MDMrAAAMAAAB1/g");
	this.shape.setTransform(644.875,369.125);

	this.instance = new lib.CachedBmp_10();
	this.instance.setTransform(63.9,29.9,0.5,0.5);

	this.instance_1 = new lib.babyCarriage();
	this.instance_1.setTransform(586,97,0.4034,0.4034);

	this.instance_2 = new lib.CachedBmp_9();
	this.instance_2.setTransform(564.85,51.5,0.5,0.5);

	this.text = new cjs.Text("Doctor", "normal 400 21px 'PT Sans'");
	this.text.textAlign = "center";
	this.text.lineHeight = 28;
	this.text.lineWidth = 183;
	this.text.parent = this;
	this.text.setTransform(1132.75,88.4,2.3387,4.013);
	if(!lib.properties.webfonts['PT Sans']) {
		lib.webFontTxtInst['PT Sans'] = lib.webFontTxtInst['PT Sans'] || [];
		lib.webFontTxtInst['PT Sans'].push(this.text);
	}

	this.instance_3 = new lib.CachedBmp_59();
	this.instance_3.setTransform(0.2,-9.85,0.5,0.5);

	this.instance_4 = new lib.sidescreen();
	this.instance_4.setTransform(1082.8,262.7,0.9999,0.9999,0,0,0,91.2,102.5);

	this.instance_5 = new lib.CachedBmp_12();
	this.instance_5.setTransform(958.35,33.4,0.5,0.5);

	this.instance_6 = new lib.bed();
	this.instance_6.setTransform(808.1,434.1,1,1,0,0,0,137.1,213);

	this.instance_7 = new lib.CachedBmp_33();
	this.instance_7.setTransform(0.2,459.6,0.5,0.5);

	this.instance_8 = new lib.CachedBmp_32();
	this.instance_8.setTransform(0.5,30.5,0.5,0.5);

	this.replay = new lib.replay();
	this.replay.name = "replay";
	this.replay.setTransform(1021.5,301.1,0.2374,0.2374,0,0,0,0.4,1.2);
	new cjs.ButtonHelper(this.replay, 0, 1, 2, false, new lib.replay(), 3);

	this.instance_9 = new lib.sushi();
	this.instance_9.setTransform(1034.5,256.65,0.416,0.3503,11.4573);

	this.instance_10 = new lib.curtain();
	this.instance_10.setTransform(928,153,0.0584,0.0584);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.start}]}).to({state:[{t:this.instance_3},{t:this.text,p:{scaleX:2.3387,scaleY:4.013,x:1132.75,y:88.4,text:"Doctor",font:"normal 400 21px 'PT Sans'",lineHeight:28,lineWidth:183}},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},2).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4}]},436).to({state:[{t:this.instance_10},{t:this.text,p:{scaleX:0.2374,scaleY:0.2374,x:1080.4,y:228.7,text:"THE END",font:"normal 400 96px 'PT Sans'",lineHeight:108.3,lineWidth:528}},{t:this.instance_9},{t:this.replay}]},196).wait(16));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_babygirl = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// babygirl
	this.instance = new lib.babygirl();
	this.instance.setTransform(652.85,222.75,0.1537,0.1537,0,0,0,122.6,188.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC33").s().p("AqSGtQgLgLAAgPQAAgOALgLQAKgLAPAAQAPAAALALQALALAAAOQAAAPgLALQgLALgPAAQgPAAgKgLgAogFrQgNgOAAgSQAAgTANgNQANgOATAAQATAAAOAOQANANAAATQAAASgNAOQgOANgTAAQgTAAgNgNgAiNDFQiMhtAAiaQAAiaCMhtQCLhuDEAAQDFAACMBuQCLBtAACaQAACaiLBtQiMBujFAAQjEAAiLhugAmwEZQgSgSAAgZQAAgYASgSQARgSAZAAQAZAAASASQARARAAAaQAAAYgRASQgSARgZAAQgZAAgRgRg");
	this.shape.setTransform(636.925,230.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape},{t:this.instance}]},234).wait(114));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_babyboy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// babyboy
	this.instance = new lib.babyboy();
	this.instance.setTransform(233.25,255.5,0.133,0.133,0,0,0,207.8,254.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC33").s().p("AoSEIQiLhtAAibQAAiZCLhuQCMhtDFgBQDEABCLBtQCMBuAACZQAACbiMBtQiLBujEgBQjFABiMhugAFcAWQgRgRAAgYQAAgYARgSQASgRAZAAQAZAAARARQASASAAAYQAAAYgSARQgRASgZAAQgZAAgSgSgAHghPQgNgNAAgUQAAgSANgNQAOgOATAAQATAAANAOQANANAAASQAAAUgNANQgNANgTAAQgTAAgOgNgAJgieQgLgLAAgPQAAgPALgLQALgLAPAAQAPAAAKALQALALAAAPQAAAPgLALQgKAKgPAAQgPAAgLgKg");
	this.shape.setTransform(256.175,254.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape},{t:this.instance}]},140).to({state:[]},80).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


// stage content:
(lib.AvocadosNigthmare3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,2,536,605,634,635,650];
	this.___GetDepth___ = function(obj) {
		var depth = obj.depth;
		var cameraObj = this.___camera___instance;
		if(cameraObj && cameraObj.depth && obj.isAttachedToCamera)
		{
			depth += depth + cameraObj.depth;
		}
		return depth;
		}
	this.___needSorting___ = function() {
		for (var i = 0; i < this.numChildren - 1; i++)
		{
			var prevDepth = this.___GetDepth___(this.getChildAt(i));
			var nextDepth = this.___GetDepth___(this.getChildAt(i + 1));
			if (prevDepth < nextDepth)
				return true;
		}
		return false;
	}
	this.___sortFunction___ = function(obj1, obj2) {
		return (this.exportRoot.___GetDepth___(obj2) - this.exportRoot.___GetDepth___(obj1));
	}
	this.on('tick', function (event){
		var curTimeline = event.currentTarget;
		if (curTimeline.___needSorting___()){
			this.sortChildren(curTimeline.___sortFunction___);
		}
	});

	// timeline functions:
	this.frame_0 = function() {
		this.start = this.background.start;
		var self = this;
		self.stop();
		self.start.addEventListener("click", startPlaying);
		
		function startPlaying()
		{
			self.gotoAndPlay(1);
		}
	}
	this.frame_2 = function() {
		this.start = undefined;
		playSound("sound");
	}
	this.frame_536 = function() {
		if(this.mouth.parent == undefined || this.mouth.parent == this)
		this.mouth = this.mouth.mouth;
	}
	this.frame_605 = function() {
		var self = this;
		self.mouth.stop();
	}
	this.frame_634 = function() {
		this.replay = this.background.replay;
	}
	this.frame_635 = function() {
		var self=this;
		self.stop();
		self.replay.addEventListener("click", playAgain);
		
		function playAgain()
		{
			self.gotoAndPlay(1);
		}
	}
	this.frame_650 = function() {
		this.___loopingOver___ = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2).call(this.frame_2).wait(534).call(this.frame_536).wait(69).call(this.frame_605).wait(29).call(this.frame_634).wait(1).call(this.frame_635).wait(15).call(this.frame_650).wait(1));

	// Camera
	this.___camera___instance = new lib.___Camera___();
	this.___camera___instance.name = "___camera___instance";
	this.___camera___instance.setTransform(640,360);
	this.___camera___instance.depth = 0;
	this.___camera___instance.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.___camera___instance).to({regY:0.1,scaleX:0.5331,scaleY:0.5331,x:464.95,y:342.5},36).wait(58).to({regX:0.8,regY:0.5,scaleX:0.4703,scaleY:0.4703,x:441.4,y:340.1},0).to({regX:2.1,regY:1.7,scaleX:0.2357,scaleY:0.2357,x:350.8,y:308.2},21).wait(80).to({regX:2.2,scaleX:0.1788,scaleY:0.1788,x:507.4,y:290.65},0).to({regX:3,regY:2.4,scaleX:0.2361,scaleY:0.2361,x:572.7,y:268.3},48).wait(25).to({regX:3.2,regY:2.6,x:554.6,y:270.7},0).to({regY:2.8,scaleX:0.1993,scaleY:0.1993,x:373.75,y:284.6},39).wait(26).to({regX:3.6,regY:3.1,scaleX:0.1974,scaleY:0.1974,x:364.45,y:285.3},0).to({regX:3.5,regY:2.9,scaleX:0.4722,scaleY:0.4722,x:917.05,y:321.25},31).wait(41).to({regX:3.6,regY:3,scaleX:0.5123,scaleY:0.5123,x:894.9,y:326.05},0).to({regX:3.8,regY:3.1,scaleX:0.9532,scaleY:0.9532,x:650.8,y:378.2},33).wait(98).to({regX:5.5,regY:4.7,scaleX:0.2342,scaleY:0.2342,x:1086.1,y:261.9},97).to({_off:true},17).wait(1));

	// eyes_obj_
	this.eyes = new lib.Scene_1_eyes();
	this.eyes.name = "eyes";
	this.eyes.depth = 0;
	this.eyes.isAttachedToCamera = 0
	this.eyes.isAttachedToMask = 0
	this.eyes.layerDepth = 0
	this.eyes.layerIndex = 0
	this.eyes.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.eyes).wait(129).to({regX:199.5,regY:223,scaleX:4.2429,scaleY:4.2429,x:0.25,y:0.2},0).wait(101).to({regX:392.5,regY:226,scaleX:5.5918,scaleY:5.5918,x:0.05,y:0.3},0).wait(208).to({regX:37.1,regY:32,scaleX:1.0491,scaleY:1.0491,x:0,y:-0.05},0).wait(120).to({_off:true},76).wait(17));

	// mouth_obj_
	this.mouth = new lib.Scene_1_mouth();
	this.mouth.name = "mouth";
	this.mouth.depth = 0;
	this.mouth.isAttachedToCamera = 0
	this.mouth.isAttachedToMask = 0
	this.mouth.layerDepth = 0
	this.mouth.layerIndex = 1
	this.mouth.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.mouth).wait(121).to({regX:199.5,regY:223,scaleX:4.2429,scaleY:4.2429,x:0.25,y:0.2},0).wait(122).to({regX:420.9,regY:182.7,scaleX:4.2347,scaleY:4.2347,y:0.05},0).wait(161).to({regX:613.1,regY:149.9,scaleX:2.1177,scaleY:2.1177,x:-0.1},0).wait(34).to({regX:37.1,regY:32,scaleX:1.0491,scaleY:1.0491,x:0,y:-0.05},0).wait(98).to({_off:true},98).wait(17));

	// doctor_obj_
	this.doctor = new lib.Scene_1_doctor();
	this.doctor.name = "doctor";
	this.doctor.depth = 0;
	this.doctor.isAttachedToCamera = 0
	this.doctor.isAttachedToMask = 0
	this.doctor.layerDepth = 0
	this.doctor.layerIndex = 2
	this.doctor.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.doctor).wait(333).to({regX:237.3,regY:213.6,scaleX:5.065,scaleY:5.065,x:-0.25,y:0.05},0).wait(44).to({regX:613.1,regY:149.9,scaleX:2.1177,scaleY:2.1177,x:-0.1},0).wait(61).to({regX:37.1,regY:32,scaleX:1.0491,scaleY:1.0491,x:0,y:-0.05},0).to({_off:true},196).wait(17));

	// babyboy_obj_
	this.babyboy = new lib.Scene_1_babyboy();
	this.babyboy.name = "babyboy";
	this.babyboy.depth = 0;
	this.babyboy.isAttachedToCamera = 0
	this.babyboy.isAttachedToMask = 0
	this.babyboy.layerDepth = 0
	this.babyboy.layerIndex = 3
	this.babyboy.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.babyboy).wait(140).to({regX:199.5,regY:223,scaleX:4.2429,scaleY:4.2429,x:0.25,y:0.2},0).wait(80).to({regX:392.5,regY:226,scaleX:5.5918,scaleY:5.5918,x:0.05,y:0.3},0).to({_off:true},1).wait(430));

	// babygirl_obj_
	this.babygirl = new lib.Scene_1_babygirl();
	this.babygirl.name = "babygirl";
	this.babygirl.depth = 0;
	this.babygirl.isAttachedToCamera = 0
	this.babygirl.isAttachedToMask = 0
	this.babygirl.layerDepth = 0
	this.babygirl.layerIndex = 4
	this.babygirl.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.babygirl).wait(234).to({regX:392.5,regY:226,scaleX:5.5918,scaleY:5.5918,x:0.05,y:0.3},0).to({_off:true},114).wait(303));

	// Hands_copy_obj_
	this.Hands_copy = new lib.Scene_1_Hands_copy();
	this.Hands_copy.name = "Hands_copy";
	this.Hands_copy.depth = 0;
	this.Hands_copy.isAttachedToCamera = 0
	this.Hands_copy.isAttachedToMask = 0
	this.Hands_copy.layerDepth = 0
	this.Hands_copy.layerIndex = 5
	this.Hands_copy.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Hands_copy).wait(91).to({regX:123.7,regY:150.5,scaleX:1.8757,scaleY:1.8757,y:0.05},0).wait(93).to({regX:199.5,regY:223,scaleX:4.2429,scaleY:4.2429,x:0.25,y:0.2},0).to({_off:true},254).wait(213));

	// Hands_obj_
	this.Hands = new lib.Scene_1_Hands();
	this.Hands.name = "Hands";
	this.Hands.depth = 0;
	this.Hands.isAttachedToCamera = 0
	this.Hands.isAttachedToMask = 0
	this.Hands.layerDepth = 0
	this.Hands.layerIndex = 6
	this.Hands.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Hands).wait(91).to({regX:123.7,regY:150.5,scaleX:1.8757,scaleY:1.8757,y:0.05},0).wait(93).to({regX:199.5,regY:223,scaleX:4.2429,scaleY:4.2429,x:0.25,y:0.2},0).to({_off:true},290).wait(177));

	// backround_2_obj_
	this.backround_2 = new lib.Scene_1_backround_2();
	this.backround_2.name = "backround_2";
	this.backround_2.depth = 0;
	this.backround_2.isAttachedToCamera = 0
	this.backround_2.isAttachedToMask = 0
	this.backround_2.layerDepth = 0
	this.backround_2.layerIndex = 7
	this.backround_2.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.backround_2).wait(2).to({_off:true},436).wait(213));

	// texts_obj_
	this.texts = new lib.Scene_1_texts();
	this.texts.name = "texts";
	this.texts.setTransform(371.9,325.2,1,1,0,0,0,371.9,325.2);
	this.texts.depth = 0;
	this.texts.isAttachedToCamera = 0
	this.texts.isAttachedToMask = 0
	this.texts.layerDepth = 0
	this.texts.layerIndex = 8
	this.texts.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.texts).wait(204).to({regX:459,regY:284.1,scaleX:5.5918,scaleY:5.5918},0).wait(79).to({regX:490.5,regY:261.9,scaleX:4.235,scaleY:4.235,x:371.85,y:325.5},0).wait(50).to({regX:310.8,regY:277.8,scaleX:5.065,scaleY:5.065,x:372.05,y:325.2},0).wait(105).to({regX:391.7,regY:342.1,scaleX:1.0491,scaleY:1.0491,x:372,y:325.3},0).wait(196).to({regX:1022,regY:252.6,scaleX:4.27,scaleY:4.27,x:371.9,y:325.2},0).to({_off:true},1).wait(16));

	// wasabi_obj_
	this.wasabi = new lib.Scene_1_wasabi();
	this.wasabi.name = "wasabi";
	this.wasabi.depth = 0;
	this.wasabi.isAttachedToCamera = 0
	this.wasabi.isAttachedToMask = 0
	this.wasabi.layerDepth = 0
	this.wasabi.layerIndex = 9
	this.wasabi.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.wasabi).wait(534).to({regX:37.1,regY:32,scaleX:1.0491,scaleY:1.0491,y:-0.05},0).to({_off:true},100).wait(17));

	// man_obj_
	this.man = new lib.Scene_1_man();
	this.man.name = "man";
	this.man.depth = 0;
	this.man.isAttachedToCamera = 0
	this.man.isAttachedToMask = 0
	this.man.layerDepth = 0
	this.man.layerIndex = 10
	this.man.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.man).wait(36).to({regX:123.7,regY:150.5,scaleX:1.8757,scaleY:1.8757,y:0.05},0).wait(402).to({regX:37.1,regY:32,scaleX:1.0491,scaleY:1.0491,y:-0.05},0).wait(55).to({_off:true},141).wait(17));

	// woman_obj_
	this.woman = new lib.Scene_1_woman();
	this.woman.name = "woman";
	this.woman.depth = 0;
	this.woman.isAttachedToCamera = 0
	this.woman.isAttachedToMask = 0
	this.woman.layerDepth = 0
	this.woman.layerIndex = 11
	this.woman.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.woman).wait(43).to({regX:123.7,regY:150.5,scaleX:1.8757,scaleY:1.8757,y:0.05},0).wait(395).to({regX:37.1,regY:32,scaleX:1.0491,scaleY:1.0491,y:-0.05},0).wait(127).to({_off:true},69).wait(17));

	// windows_obj_
	this.windows = new lib.Scene_1_windows();
	this.windows.name = "windows";
	this.windows.depth = 0;
	this.windows.isAttachedToCamera = 0
	this.windows.isAttachedToMask = 0
	this.windows.layerDepth = 0
	this.windows.layerIndex = 12
	this.windows.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.windows).wait(438).to({regX:37.1,regY:32,scaleX:1.0491,scaleY:1.0491,y:-0.05},0).to({_off:true},196).wait(17));

	// background_obj_
	this.background = new lib.Scene_1_background();
	this.background.name = "background";
	this.background.setTransform(644.9,369.1,1,1,0,0,0,644.9,369.1);
	this.background.depth = 0;
	this.background.isAttachedToCamera = 0
	this.background.isAttachedToMask = 0
	this.background.layerDepth = 0
	this.background.layerIndex = 13
	this.background.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.background).wait(438).to({regX:651.8,regY:383.9,scaleX:1.0491,scaleY:1.0491,y:369.15},0).wait(196).to({regX:1085.9,regY:262.9,scaleX:4.27,scaleY:4.27,x:644.75,y:369.2},0).to({_off:true},16).wait(1));

	// Layer_4_obj_
	this.Layer_4 = new lib.Scene_1_Layer_4();
	this.Layer_4.name = "Layer_4";
	this.Layer_4.depth = 0;
	this.Layer_4.isAttachedToCamera = 0
	this.Layer_4.isAttachedToMask = 0
	this.Layer_4.layerDepth = 0
	this.Layer_4.layerIndex = 14
	this.Layer_4.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_4).wait(438).to({regX:37.1,regY:32,scaleX:1.0491,scaleY:1.0491,y:-0.05},0).wait(1).to({regX:-90.5,regY:238.9,scaleX:1,scaleY:1,x:-127.55,y:206.9},0).wait(193).to({_off:true},1).wait(18));

	// sky_obj_
	this.sky = new lib.Scene_1_sky();
	this.sky.name = "sky";
	this.sky.depth = 0;
	this.sky.isAttachedToCamera = 0
	this.sky.isAttachedToMask = 0
	this.sky.layerDepth = 0
	this.sky.layerIndex = 15
	this.sky.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.sky).wait(438).to({regX:37.1,regY:32,scaleX:1.0491,scaleY:1.0491,y:-0.05},0).to({_off:true},195).wait(18));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-377.5,0,1728.5,746.7);
// library properties:
lib.properties = {
	id: '3DA2F29F93C1474199487BA3D22ABD76',
	width: 1280,
	height: 720,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/CachedBmp_33.png?1619186302824", id:"CachedBmp_33"},
		{src:"images/CachedBmp_32.png?1619186302824", id:"CachedBmp_32"},
		{src:"images/CachedBmp_59.png?1619186302824", id:"CachedBmp_59"},
		{src:"images/curtain.png?1619186302824", id:"curtain"},
		{src:"images/wasabi.png?1619186302825", id:"wasabi"},
		{src:"images/Avocado_s Nigthmare _3__atlas_1.png?1619186302291", id:"Avocado_s Nigthmare _3__atlas_1"},
		{src:"images/Avocado_s Nigthmare _3__atlas_2.png?1619186302292", id:"Avocado_s Nigthmare _3__atlas_2"},
		{src:"sounds/sound.mp3?1619186302825", id:"sound"}
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
an.compositions['3DA2F29F93C1474199487BA3D22ABD76'] = {
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

p._getProjectionMatrix = function(container, totalDepth) {	var focalLength = 528.25;
	var projectionCenter = { x : lib.properties.width/2, y : lib.properties.height/2 };
	var scale = (totalDepth + focalLength)/focalLength;
	var scaleMat = new createjs.Matrix2D;
	scaleMat.a = 1/scale;
	scaleMat.d = 1/scale;
	var projMat = new createjs.Matrix2D;
	projMat.tx = -projectionCenter.x;
	projMat.ty = -projectionCenter.y;
	projMat = projMat.prependMatrix(scaleMat);
	projMat.tx += projectionCenter.x;
	projMat.ty += projectionCenter.y;
	return projMat;
}
p._handleTick = function(event) {
	var cameraInstance = exportRoot.___camera___instance;
	if(cameraInstance !== undefined && cameraInstance.pinToObject !== undefined)
	{
		cameraInstance.x = cameraInstance.pinToObject.x + cameraInstance.pinToObject.pinOffsetX;
		cameraInstance.y = cameraInstance.pinToObject.y + cameraInstance.pinToObject.pinOffsetY;
		if(cameraInstance.pinToObject.parent !== undefined && cameraInstance.pinToObject.parent.depth !== undefined)
		cameraInstance.depth = cameraInstance.pinToObject.parent.depth + cameraInstance.pinToObject.pinOffsetZ;
	}
	stage._applyLayerZDepth(exportRoot);
}
p._applyLayerZDepth = function(parent)
{
	var cameraInstance = parent.___camera___instance;
	var focalLength = 528.25;
	var projectionCenter = { 'x' : 0, 'y' : 0};
	if(parent === exportRoot)
	{
		var stageCenter = { 'x' : lib.properties.width/2, 'y' : lib.properties.height/2 };
		projectionCenter.x = stageCenter.x;
		projectionCenter.y = stageCenter.y;
	}
	for(child in parent.children)
	{
		var layerObj = parent.children[child];
		if(layerObj == cameraInstance)
			continue;
		stage._applyLayerZDepth(layerObj, cameraInstance);
		if(layerObj.layerDepth === undefined)
			continue;
		if(layerObj.currentFrame != layerObj.parent.currentFrame)
		{
			layerObj.gotoAndPlay(layerObj.parent.currentFrame);
		}
		var matToApply = new createjs.Matrix2D;
		var cameraMat = new createjs.Matrix2D;
		var totalDepth = layerObj.layerDepth ? layerObj.layerDepth : 0;
		var cameraDepth = 0;
		if(cameraInstance && !layerObj.isAttachedToCamera)
		{
			var mat = cameraInstance.getMatrix();
			mat.tx -= projectionCenter.x;
			mat.ty -= projectionCenter.y;
			cameraMat = mat.invert();
			cameraMat.prependTransform(projectionCenter.x, projectionCenter.y, 1, 1, 0, 0, 0, 0, 0);
			cameraMat.appendTransform(-projectionCenter.x, -projectionCenter.y, 1, 1, 0, 0, 0, 0, 0);
			if(cameraInstance.depth)
				cameraDepth = cameraInstance.depth;
		}
		if(layerObj.depth)
		{
			totalDepth = layerObj.depth;
		}
		//Offset by camera depth
		totalDepth -= cameraDepth;
		if(totalDepth < -focalLength)
		{
			matToApply.a = 0;
			matToApply.d = 0;
		}
		else
		{
			if(layerObj.layerDepth)
			{
				var sizeLockedMat = stage._getProjectionMatrix(parent, layerObj.layerDepth);
				if(sizeLockedMat)
				{
					sizeLockedMat.invert();
					matToApply.prependMatrix(sizeLockedMat);
				}
			}
			matToApply.prependMatrix(cameraMat);
			var projMat = stage._getProjectionMatrix(parent, totalDepth);
			if(projMat)
			{
				matToApply.prependMatrix(projMat);
			}
		}
		layerObj.transformMatrix = matToApply;
	}
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

// Virtual camera API : 

an.VirtualCamera = new function() {
var _camera = new Object();
function VC(timeline) {
	this.timeline = timeline;
	this.camera = timeline.___camera___instance;
	this.centerX = lib.properties.width / 2;
	this.centerY = lib.properties.height / 2;
	this.camAxisX = this.camera.x;
	this.camAxisY = this.camera.y;
	if(timeline.___camera___instance == null || timeline.___camera___instance == undefined ) {
		timeline.___camera___instance = new cjs.MovieClip();
		timeline.___camera___instance.visible = false;
		timeline.___camera___instance.parent = timeline;
		timeline.___camera___instance.setTransform(this.centerX, this.centerY);
	}
	this.camera = timeline.___camera___instance;
}

VC.prototype.moveBy = function(x, y, z) {
z = typeof z !== 'undefined' ? z : 0;
	var position = this.___getCamPosition___();
	var rotAngle = this.getRotation()*Math.PI/180;
	var sinTheta = Math.sin(rotAngle);
	var cosTheta = Math.cos(rotAngle);
	var offX= x*cosTheta + y*sinTheta;
	var offY = y*cosTheta - x*sinTheta;
	this.camAxisX = this.camAxisX - x;
	this.camAxisY = this.camAxisY - y;
	var posX = position.x + offX;
	var posY = position.y + offY;
	this.camera.x = this.centerX - posX;
	this.camera.y = this.centerY - posY;
	this.camera.depth += z;
};

VC.prototype.setPosition = function(x, y, z) {
	z = typeof z !== 'undefined' ? z : 0;

	const MAX_X = 10000;
	const MIN_X = -10000;
	const MAX_Y = 10000;
	const MIN_Y = -10000;
	const MAX_Z = 10000;
	const MIN_Z = -5000;

	if(x > MAX_X)
	  x = MAX_X;
	else if(x < MIN_X)
	  x = MIN_X;
	if(y > MAX_Y)
	  y = MAX_Y;
	else if(y < MIN_Y)
	  y = MIN_Y;
	if(z > MAX_Z)
	  z = MAX_Z;
	else if(z < MIN_Z)
	  z = MIN_Z;

	var rotAngle = this.getRotation()*Math.PI/180;
	var sinTheta = Math.sin(rotAngle);
	var cosTheta = Math.cos(rotAngle);
	var offX= x*cosTheta + y*sinTheta;
	var offY = y*cosTheta - x*sinTheta;
	
	this.camAxisX = this.centerX - x;
	this.camAxisY = this.centerY - y;
	this.camera.x = this.centerX - offX;
	this.camera.y = this.centerY - offY;
	this.camera.depth = z;
};

VC.prototype.getPosition = function() {
	var loc = new Object();
	loc['x'] = this.centerX - this.camAxisX;
	loc['y'] = this.centerY - this.camAxisY;
	loc['z'] = this.camera.depth;
	return loc;
};

VC.prototype.resetPosition = function() {
	this.setPosition(0, 0);
};

VC.prototype.zoomBy = function(zoom) {
	this.setZoom( (this.getZoom() * zoom) / 100);
};

VC.prototype.setZoom = function(zoom) {
	const MAX_zoom = 10000;
	const MIN_zoom = 1;
	if(zoom > MAX_zoom)
	zoom = MAX_zoom;
	else if(zoom < MIN_zoom)
	zoom = MIN_zoom;
	this.camera.scaleX = 100 / zoom;
	this.camera.scaleY = 100 / zoom;
};

VC.prototype.getZoom = function() {
	return 100 / this.camera.scaleX;
};

VC.prototype.resetZoom = function() {
	this.setZoom(100);
};

VC.prototype.rotateBy = function(angle) {
	this.setRotation( this.getRotation() + angle );
};

VC.prototype.setRotation = function(angle) {
	const MAX_angle = 180;
	const MIN_angle = -179;
	if(angle > MAX_angle)
		angle = MAX_angle;
	else if(angle < MIN_angle)
		angle = MIN_angle;
	this.camera.rotation = -angle;
};

VC.prototype.getRotation = function() {
	return -this.camera.rotation;
};

VC.prototype.resetRotation = function() {
	this.setRotation(0);
};

VC.prototype.reset = function() {
	this.resetPosition();
	this.resetZoom();
	this.resetRotation();
	this.unpinCamera();
};
VC.prototype.setZDepth = function(zDepth) {
	const MAX_zDepth = 10000;
	const MIN_zDepth = -5000;
	if(zDepth > MAX_zDepth)
		zDepth = MAX_zDepth;
	else if(zDepth < MIN_zDepth)
		zDepth = MIN_zDepth;
	this.camera.depth = zDepth;
}
VC.prototype.getZDepth = function() {
	return this.camera.depth;
}
VC.prototype.resetZDepth = function() {
	this.camera.depth = 0;
}

VC.prototype.pinCameraToObject = function(obj, offsetX, offsetY, offsetZ) {

	offsetX = typeof offsetX !== 'undefined' ? offsetX : 0;

	offsetY = typeof offsetY !== 'undefined' ? offsetY : 0;

	offsetZ = typeof offsetZ !== 'undefined' ? offsetZ : 0;
	if(obj === undefined)
		return;
	this.camera.pinToObject = obj;
	this.camera.pinToObject.pinOffsetX = offsetX;
	this.camera.pinToObject.pinOffsetY = offsetY;
	this.camera.pinToObject.pinOffsetZ = offsetZ;
};

VC.prototype.setPinOffset = function(offsetX, offsetY, offsetZ) {
	if(this.camera.pinToObject != undefined) {
	this.camera.pinToObject.pinOffsetX = offsetX;
	this.camera.pinToObject.pinOffsetY = offsetY;
	this.camera.pinToObject.pinOffsetZ = offsetZ;
	}
};

VC.prototype.unpinCamera = function() {
	this.camera.pinToObject = undefined;
};
VC.prototype.___getCamPosition___ = function() {
	var loc = new Object();
	loc['x'] = this.centerX - this.camera.x;
	loc['y'] = this.centerY - this.camera.y;
	loc['z'] = this.depth;
	return loc;
};

this.getCamera = function(timeline) {
	timeline = typeof timeline !== 'undefined' ? timeline : null;
	if(timeline === null) timeline = exportRoot;
	if(_camera[timeline] == undefined)
	_camera[timeline] = new VC(timeline);
	return _camera[timeline];
}

this.getCameraAsMovieClip = function(timeline) {
	timeline = typeof timeline !== 'undefined' ? timeline : null;
	if(timeline === null) timeline = exportRoot;
	return this.getCamera(timeline).camera;
}
}


// Layer depth API : 

an.Layer = new function() {
	this.getLayerZDepth = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth; else 0;";
		return eval(script);
	}
	this.setLayerZDepth = function(timeline, layerName, zDepth)
	{
		const MAX_zDepth = 10000;
		const MIN_zDepth = -5000;
		if(zDepth > MAX_zDepth)
			zDepth = MAX_zDepth;
		else if(zDepth < MIN_zDepth)
			zDepth = MIN_zDepth;
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth = " + zDepth + ";";
		eval(script);
	}
	this.removeLayer = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline.removeChild(timeline." + layerName + ");";
		eval(script);
	}
	this.addNewLayer = function(timeline, layerName, zDepth)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		zDepth = typeof zDepth !== 'undefined' ? zDepth : 0;
		var layer = new createjs.MovieClip();
		layer.name = layerName;
		layer.depth = zDepth;
		layer.layerIndex = 0;
		timeline.addChild(layer);
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


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;