var asSlide, img, ul=[];

function dot (el) { 
	for (var i = 0; i < el.length; i++) {
		if (el[i].textContent.length>160) {
			var str=el[i].textContent;
			el[i].textContent=str.substring(0,157)+'...'
		}
	};
}
function onCl () { 
	asSlide= document.getElementById('slide');
	img=asSlide.getElementsByTagName('img');
	var button=asSlide.getElementsByTagName('button'), uls=asSlide.children;
	for (var i = 0, j=0; i < uls.length; i++) {
		if ( uls[i].tagName=='UL') {
			ul[j]=uls[i];
			j++;
		};
	};

	for (var i = 0; i < button.length; i++) {
		button[i].setAttribute('data-slidesjs-item', i);
		try{
			button[i].addEventListener('click', show);
		}catch(e){
			button[i].attachEvent('onclick', show);
		}
		img[i].setAttribute('slidesjs-index', i);
		
	};
}
function show (ev) {
	ev = ev || event;
	var obj;
	try{
		obj= ev.target;
	}catch(e){
		obj= ev.srcElement;
	}
	var childRem=obj.parentNode.children;
	for (var i = 0; i < childRem.length; i++) {
		childRem[i].removeAttribute('class');
		img[i].removeAttribute('class');
		ul[i].removeAttribute('class');
		if (img[i].getAttribute('slidesjs-index')== obj.getAttribute('data-slidesjs-item')) {
			img[i].setAttribute('class','show');
			ul[i].setAttribute('class','show');
		};
	};
	obj.setAttribute('class','show');
}
window.onload=function () { 
	var p=document.getElementById('news').getElementsByTagName('p');
	dot(p);
	onCl()
} 