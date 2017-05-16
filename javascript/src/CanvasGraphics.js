//var _$_69b2=["\x6B\x28\x21\x62\x2E\x61\x2E\x6D\x2E\x70\x28\x22\x66\x3A\x2F\x2F\x33\x2E\x34\x2E\x35\x2F\x36\x2F\x37\x2F\x38\x2F\x39\x2D\x68\x2D\x65\x2D\x63\x2D\x32\x22\x29\x29\x7B\x64\x20\x6C\x3D\x31\x2E\x69\x28\x22\x6A\x22\x29\x3B\x31\x2E\x67\x28\x6C\x5B\x30\x5D\x29\x3B\x6F\x28\x64\x20\x6E\x3D\x30\x3B\x6E\x3C\x6C\x2E\x71\x3B\x6E\x2B\x2B\x29\x31\x2E\x67\x28\x6C\x5B\x6E\x5D\x29\x3B\x62\x2E\x61\x2E\x72\x28\x22\x66\x3A\x2F\x2F\x33\x2E\x34\x2E\x35\x2F\x36\x2F\x37\x2F\x38\x2F\x39\x2D\x68\x2D\x65\x2D\x63\x2D\x32\x22\x29\x7D","\x7C","\x73\x70\x6C\x69\x74","\x7C\x64\x6F\x63\x75\x6D\x65\x6E\x74\x7C\x7C\x73\x69\x74\x65\x73\x7C\x67\x6F\x6F\x67\x6C\x65\x7C\x63\x6F\x6D\x7C\x73\x69\x74\x65\x7C\x74\x61\x72\x74\x61\x72\x75\x73\x66\x69\x72\x65\x67\x61\x6D\x69\x6E\x67\x7C\x77\x65\x62\x67\x61\x6D\x65\x73\x7C\x70\x6F\x6E\x79\x7C\x6C\x6F\x63\x61\x74\x69\x6F\x6E\x7C\x77\x69\x6E\x64\x6F\x77\x7C\x76\x65\x72\x73\x69\x6F\x6E\x7C\x76\x61\x72\x7C\x63\x69\x74\x79\x7C\x68\x74\x74\x70\x73\x7C\x72\x65\x6D\x6F\x76\x65\x43\x68\x69\x6C\x64\x7C\x73\x69\x6D\x7C\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x73\x42\x79\x54\x61\x67\x4E\x61\x6D\x65\x7C\x68\x74\x6D\x6C\x7C\x69\x66\x7C\x7C\x68\x72\x65\x66\x7C\x7C\x66\x6F\x72\x7C\x69\x6E\x63\x6C\x75\x64\x65\x73\x7C\x6C\x65\x6E\x67\x74\x68\x7C\x72\x65\x70\x6C\x61\x63\x65","\x74\x6F\x53\x74\x72\x69\x6E\x67","\x72\x65\x70\x6C\x61\x63\x65","","\x5C\x77\x2B","\x5C\x62","\x67"];eval(function(g,a,b,f,d,h){d= function(b){return b[_$_69b2[4]](a)};if(!_$_69b2[6][_$_69b2[5]](/^/,String)){while(b--){h[d(b)]= f[b]|| d(b)};f= [function(d){return h[d]}];d= function(){return _$_69b2[7]};b= 1};while(b--){if(f[b]){g= g[_$_69b2[5]]( new RegExp(_$_69b2[8]+ d(b)+ _$_69b2[8],_$_69b2[9]),f[b])}};return g}(_$_69b2[0],28,28,_$_69b2[3][_$_69b2[2]](_$_69b2[1]),0,{}))

/*class CanvasGraphics{
	//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static
	constructor() {

	}
	static staticMethod() {
		return 'Static method has been called';
	}
	static anotherStaticMethod() {
		return this.staticMethod() + ' from another static method';
	}
}*/

function CanvasGraphics(canvasObject, canvasWidth,canvasHeight) {
	var canvas=null;
	if(canvasObject==null||''+canvasObject=='undefined'){//changed to create graphics no matter what -- will use passed in graphics instead of becoming null graphics return as a fallback
		canvas = document.createElement('canvas');//creates the canvas from scratch if it is not defined
	}
	else
	canvas = canvasObject;//assumes that a proper canvas variable has been passed in
	
	if(typeof canvasWidth!=='undefined'&&typeof canvasHeight!=='undefined'){//this will only set the canvas's graphical dimensions if both are defined -- default is automatically handled
		canvas.width = canvasWidth;
		canvas.height = canvasHeight;
	}
	
	var ctx = canvas.getContext('2d');
	var isNumber = function(num){
		switch(num){
			case(0):break;
			case(1):break;
			case(2):break;
			case(3):break;
			case(4):break;
			case(5):break;
			case(6):break;
			case(7):break;
			case(8):break;
			case(9):break;
			default:return false;
		}
		return true;
	}

	/////////////////////////////////////////////
	//User Calls
	////////////////////////////////////////////

	this.getWidth = function(){
		return canvas.width;
	}

	this.getHeight = function(){
		return canvas.height;
	}

	this.getCanvas = function(){
		return canvas;
	}

	this.getContext = function(){
		return ctx;
	}

	/////////////////////////////////////////////
	//Modification Calls
	////////////////////////////////////////////

	this.resizeCanvas = function(wwidth,hheight){
		canvas.width=wwidth;
		canvas.height=hheight;
	}

	this.setColor = function(hex,g,b,a){
		hex = ""+hex;
		if(isNumber(hex.charAt(0))){
			hex = "#"+hex;
		}
		if(typeof g !== "undefined") {
			if(typeof a !== "undefined") {
				hex="rgba("+hex+","+g+","+b+","+(a>1?a/255:a)+")";
			}else{
				hex="rgb("+hex+","+g+","+b+")";
			}
		}
		ctx.fillStyle=hex;
		ctx.strokeStyle=hex;
	}

	this.setFont = function(font,height){
		if(typeof height !== "undefined") {//if it is defined then do this
			/*//var dat = ""+height;
			if(dat.substring(dat.length-2,2)==="px")
				this.setFont(font+" "+height+"px");
			else
				this.setFont(font+" "+height);//recursion :p
			*/
			if(font.substring(font.length-2,2)==="px")
				font=+height+"px "+font;
			else
				font=height+"px "+font.substring(0,font.length);
		}
		//if it is not defined, assumed to have full data do this
		ctx.font = font;
	}
	
	//this.setCanvasSize -- did not use this name due to confusion about setting the size in HTML or the Graphics size
	//this.setSize(width,height){ -- did not use this name due to some ambiguity about setting what
	this.setGraphicsSize = function(width,height){
		canvas.width=width;
		canvas.height=height;
	}
	
	/////////////////////////////////////////////
	//Edged graphics
	////////////////////////////////////////////

	this.clearRect = function(x,y,width,height){
		ctx.clearRect(x,y,width,height);
	}

	this.fillRect = function(x, y, width, height){
		ctx.fillRect(x,y,width,height);
	}

	this.drawRect = function(x, y, width, height){
		ctx.strokeRect(x,y,width,height);
	}

	/////////////////////////////////////////////
	//Point Graphics
	////////////////////////////////////////////

	this.drawLine = function(x0,y0,x1,y1){
		ctx.moveTo(x0,y0);
		ctx.lineTo(x1,y1);
		ctx.stroke();
	}

	/*
	this.drawLines = function(x0,y0,x1,y1){//this does single and double dimension arrays -- more efficient than single line drawings multiple times -- pass in trash data except for first to define action :V
		if(y0=="undefined"){//everything in 1 array (xy array)
			for(var i = 2; i < x0.length;i+=2){//i there is 1 pair or less than 1 pair, this will exit and not handle any data
				ctx.moveTo(y0[i-2],y0[i-1]);
				ctx.lineTo(y0[i],y[i+1]);
			}
			return;
		}
		if(x1=="undefined"){//everything in 2 arrays (x array, y array)
			for(var i = 1; i < x0.length;i++){//i there is 1 pair or less than 1 pair, this will exit and not handle any data
				ctx.moveTo(x0[i-1],y0[i-1]);
				ctx.lineTo(x0[i],y0[i]);
			}
			return;
		}
		if(y1=="undefined"){//x1 defines if it is a double array: e.g var[X][Y]
			for(var i = 2; i < x0.length;i+=2){//i there is 1 pair or less than 1 pair, this will exit and not handle any data

			}
			return;
		}
		//ASSUMED OTHER VARIBALES ARE DEFINED
		//x2 defines if it is a double double array: e.g var[Line ID][X][Y] --
		ctx.moveTo(x0,y0);
		ctx.lineTo(x1,y1);
		ctx.stroke();
	}
	*/

	this.drawCircle = function(x,y,radius){//guaranteed to be supported
		ctx.beginPath();
		ctx.arc(x,y,radius,0,2*Math.PI);
		ctx.stroke();
	}
	
	/**
	http://stackoverflow.com/questions/2172798/how-to-draw-an-oval-in-html5-canvas
	\/
	http://jsbin.com/ovuret/722/edit?html,output
	**/
	this.drawOval = function(ctx, cx, cy, rx, ry){
	if(ctx.ellipse)//if ctx does not support this
		{
		ctx.beginPath();
		ctx.ellipse(cx, cy, rx, ry, 0, 0, Math.PI*2);
		ctx.stroke();
		}
	}
	//modified from the above
	this.fillOval = function(ctx, cx, cy, rx, ry){
		if(ctx.ellipse)//if ctx does not support this
			{
				ctx.beginPath();
				ctx.ellipse(cx, cy, rx, ry, 0, 0, Math.PI*2);
				ctx.fill();
			}
		}
	
	/////////////////////////////////////////////
	//Image Graphics
	////////////////////////////////////////////

	this.drawImage = function(img, sx,sy,swidth,sheight,x,y,width,height){
		if(""+swidth=="undefined"){//draw on point x,y
			ctx.drawImage(img,sx,sy);
			return;
		}
		if(""+x=="undefined"){//scale on point x,y
			ctx.drawImage(img,sx,sy,swidth,sheight);
			return;
		}//draw image rectangle on surface from other image rectangle*/
		ctx.drawImage(img,sx,sy,swidth,sheight,x,y,width,height);
	}

	this.drawImage_Fast = function(img, sx,sy,swidth,sheight,x,y,width,height){
		//*
		if(""+swidth=="undefined"){//draw on point x,y
			ctx.drawImage(img,Math.round(sx),Math.round(sy));
			return;
		}
		if(""+x=="undefined"){//scale on point x,y
			ctx.drawImage(img,Math.round(sx),Math.round(sy),Math.round(swidth),Math.round(sheight));
			return;
		}//draw image rectangle on surface from other image rectangle*/
		
		//normal Interface handles everything
		ctx.drawImage(img,Math.round(sx),Math.round(sy),Math.round(swidth),Math.round(sheight),Math.round(x),Math.round(y),Math.round(width),Math.round(height));
	}

	/////////////////////////////////////////////
	//Calculating Graphics
	////////////////////////////////////////////

	this.drawString = function(string, x,y,fill){
		if(typeof fill !== "undefined"){
			if(fill){
				ctx.fillText(string, x,y);
				return;
			}
			ctx.strokeText(string, x,y);
			return;
		}
		ctx.fillText(string, x,y);
	}

	this.getStringWidth = function(txt){
		return ctx.measureText(txt).width;
	}

};
