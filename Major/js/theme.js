/*!
 Theme Name: Major
 Author: 权那他(krait)
 Author URI: https://krait.cn
 Description: 以科学、高端为主,采用兼容性开发!

 *//*! https://github.com/kraity/Major */

function reward() {
    $('.reward-mit').on('click', function (event) {
        event.preventDefault();
        $('.rewards').addClass('reward-layer');
    });

    $('.reward-close').on('click', function (event) {
        event.preventDefault();
        $('.rewards').removeClass('reward-layer');
    });
}
reward();

function majorsMtheme() {

    //(function ($, window, document, undefined) {
    function Rippleria(element, options) {
        var base = this;

        this.$element = $(element);
        this.options = $.extend({}, Rippleria.Defaults, this._getOptionsFromElementAttributes(), options);

        this._prepare();
        this._bind();
    }

    Rippleria.prototype._bind = function() {
        var elem = this.$element,
            options = this.options,
            ink, d, x, y, isTouchSupported, eventType;

        isTouchSupported = 'ontouchend' in window || window.DocumentTouch && document instanceof DocumentTouch;

        eventType = isTouchSupported == true ? 'touchend.rippleria' : 'click.rippleria';

        this.$element.bind(eventType, function(e) {
            var ink = $("<div class='rippleria-ink'></div>");
            elem.append(ink);

            if (options.color != undefined) {
                ink.css('background-color', options.color);
            }

            ink.css('animation', 'rippleria ' + options.duration / 1000 + 's ' + options.easing);

            setTimeout(function() {
                ink.remove();
            }, parseFloat(options.duration));

            if (!ink.height() && !ink.width()) {
                d = Math.max(elem.outerWidth(), elem.outerHeight());
                ink.css({
                    height: d,
                    width: d
                });
            }

            if (isTouchSupported == true) {
                var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
                x = touch.pageX - elem.offset().left - ink.width() / 2;
                y = touch.pageY - elem.offset().top - ink.height() / 2;
            } else {
                x = e.pageX - elem.offset().left - ink.width() / 2;
                y = e.pageY - elem.offset().top - ink.height() / 2;
            }

            ink.css({
                top: y + 'px',
                left: x + 'px'
            });
        });
    }

    Rippleria.prototype._prepare = function() {
        var elem = this.$element;

        if (elem.css('position') == 'static') {
            elem.css('position', 'relative');
        }

        elem.css('overflow', 'hidden');

        if (elem.find('img')[0] != undefined) {
            elem.on('dragstart', function(e) {
                e.preventDefault();
            });
        }
    };

    Rippleria.prototype._getOptionsFromElementAttributes = function() {
        var base = this;
        attrs = {};

        $.each(Rippleria.Defaults, function(option, val) {
            var attr = base.$element.attr('data-rippleria-' + option);
            if (attr != null) {
                attrs[option] = attr;
            }
        });

        return attrs;
    };

    Rippleria.prototype.changeColor = function(color) {
        this.options.color = color;
    }

    Rippleria.prototype.changeEasing = function(easing) {
        this.options.easing = easing;
    }

    Rippleria.prototype.changeDuration = function(duration) {
        this.options.duration = duration;
    }

    Rippleria.Defaults = {
        duration: 750,
        easing: 'linear',
        color: undefined
    };

    $.fn.rippleria = function(option) {
        var args = Array.prototype.slice.call(arguments, 1);

        return this.each(function() {
            var $this = $(this),
                data = $this.data('rippleria');

            if (!data) {
                data = new Rippleria(this, typeof option == 'object' && option);
                $this.data('rippleria', data);
            }

            if (typeof option == 'string' && option.charAt(0) !== '_') {
                data[option].apply(data, args);
            }
        });
    };

    $(function() {
        $('[data-rippleria]').rippleria();
    });
    //})(window.jQuery, window, document);

    $(".material-ripple").click(function (a) {
        var i = $(this);
        0 == i.find(".material-ink").length && i.prepend("<div class='material-ink'></div>");
        var t = i.find(".material-ink");
        if (t.removeClass("animate"), !t.height() && !t.width()) {
            var e = Math.max(i.outerWidth(), i.outerHeight());
            t.css({height: e, width: e})
        }
        var r = a.pageX - i.offset().left - t.width() / 2, h = a.pageY - i.offset().top - t.height() / 2,
            l = i.data("ripple-color");
        t.css({top: h + "px", left: r + "px", background: l}).addClass("animate")
    });

    /* UItoTop jQuery Plugin 1.2 | Matt Varone | http://www.mattvarone.com/web-design/uitotop-jquery-plugin */
    $.fn.UItoTop = function (options) {
        var defaults = {
                text: '',
                min: 200,
                inDelay: 600,
                outDelay: 400,
                containerID: 'toTop',
                containerHoverID: 'toTopHover',
                scrollSpeed: 1000,
                easingType: 'linear'
            },
            settings = $.extend(defaults, options),
            containerIDhash = '#' + settings.containerID,
            containerHoverIDHash = '#' + settings.containerHoverID;
        $('body').append('<a href="#" id="' + settings.containerID + '">' + settings.text + '</a>');
        $(containerIDhash).hide().on('click.UItoTop', function () {
            $('html, body').animate({
                scrollTop: 0
            }, settings.scrollSpeed, settings.easingType);
            return false;
        }).prepend('<svg id="' + settings.containerHoverID + '" version="1.1" viewBox="0 0 100 100" preserveAspectRatio="none" class="side-svgm"> <path d="M0 100 L10 50 L100 100 L0 100" fill="rgb(95, 66, 135)"></path> <path d="M10 100 L35 0 L70 100 L0 100" fill="rgb(95, 66, 135)"></path> <path d="M0 100 L70 50 L70 100 L0 100" fill="rgb(95, 66, 135)"></path> </svg>').hover(function () {
            $(containerHoverIDHash, this).stop().animate({
                'opacity': 1
            }, 700, 'linear');
        });
        $(window).scroll(function () {
            var sd = $(window).scrollTop();
            if (typeof document.body.style.maxHeight === "undefined") {
                $(containerIDhash).css({
                    'position': 'absolute',
                    'top': sd + $(window).height() - 50
                });
            }
            if (sd > settings.min)
                $(containerIDhash).fadeIn(settings.inDelay);
            else
                $(containerIDhash).fadeOut(settings.Outdelay);
        });
    };

    /*SmoothScroll*/
    /*(function() {*/
    function C(){if(document.body){var a=document.body,b=document.documentElement,d=window.innerHeight,e=a.scrollHeight;n=0<=document.compatMode.indexOf("CSS")?b:a;u=a;f.keyboardSupport&&window.addEventListener("keydown",K,!1);D=!0;if(top!=self)E=!0;else if(e>d&&(a.offsetHeight<=d||b.offsetHeight<=d)){var c=!1;b.style.height="auto";setTimeout(function(){c||b.scrollHeight==document.height||(c=!0,setTimeout(function(){b.style.height=document.height+"px";c=!1},500))},10);n.offsetHeight<=d&&(d=document.createElement("div"),d.style.clear="both",a.appendChild(d))}f.fixedBackground||(a.style.backgroundAttachment="scroll",b.style.backgroundAttachment="scroll")}}function F(a,b,d,e){e||(e=1E3);L(b,d);if(1!=f.accelerationMax){var c=+new Date-x;c<f.accelerationDelta&&(c=(1+30/c)/2,1<c&&(c=Math.min(c,f.accelerationMax),b*=c,d*=c));x=+new Date}p.push({x:b,y:d,lastX:0>b?.99:-.99,lastY:0>d?.99:-.99,start:+new Date});if(!y){var g=a===document.body,h=function(c){c=+new Date;for(var q=0,r=0,t=0;t<p.length;t++){var k=p[t],l=c-k.start,n=l>=f.animationTime,m=n?1:l/f.animationTime;f.pulseAlgorithm&&(l=m,1<=l?m=1:0>=l?m=0:(1==f.pulseNormalize&&(f.pulseNormalize/=G(1)),m=G(l)));l=k.x*m-k.lastX>>0;m=k.y*m-k.lastY>>0;q+=l;r+=m;k.lastX+=l;k.lastY+=m;n&&(p.splice(t,1),t--)}g?window.scrollBy(q,r):(q&&(a.scrollLeft+=q),r&&(a.scrollTop+=r));b||d||(p=[]);p.length?H(h,a,e/f.frameRate+1):y=!1};H(h,a,0);y=!0}}function M(a){D||C();var b=a.target,d=I(b);if(!d||a.defaultPrevented||"embed"===(u.nodeName||"").toLowerCase()||"embed"===(b.nodeName||"").toLowerCase()&&/\.pdf/i.test(b.src))return!0;var b=a.wheelDeltaX||0,e=a.wheelDeltaY||0;b||e||(e=a.wheelDelta||0);var c;if(c=!f.touchpadSupport)if(c=e){c=Math.abs(c);h.push(c);h.shift();clearTimeout(N);c=h[0]==h[1]&&h[1]==h[2];var g=z(h[0],120)&&z(h[1],120)&&z(h[2],120);c=!(c||g)}else c=void 0;if(c)return!0;1.2<Math.abs(b)&&(b*=f.stepSize/120);1.2<Math.abs(e)&&(e*=f.stepSize/120);F(d,-b,-e);a.preventDefault()}function K(a){var b=a.target,d=a.ctrlKey||a.altKey||a.metaKey||a.shiftKey&&a.keyCode!==g.spacebar;if(/input|textarea|select|embed/i.test(b.nodeName)||b.isContentEditable||a.defaultPrevented||d||"button"===(b.nodeName||"").toLowerCase()&&a.keyCode===g.spacebar)return!0;var e;e=b=0;var d=I(u),c=d.clientHeight;d==document.body&&(c=window.innerHeight);switch(a.keyCode){case g.up:e=-f.arrowScroll;break;case g.down:e=f.arrowScroll;break;case g.spacebar:e=a.shiftKey?1:-1;e=-e*c*.9;break;case g.pageup:e=.9*-c;break;case g.pagedown:e=.9*c;break;case g.home:e=-d.scrollTop;break;case g.end:c=d.scrollHeight-d.scrollTop-c;e=0<c?c+10:0;break;case g.left:b=-f.arrowScroll;break;case g.right:b=f.arrowScroll;break;default:return!0}F(d,b,e);a.preventDefault()}function O(a){u=a.target}function A(a,b){for(var d=a.length;d--;)B[J(a[d])]=b;return b}function I(a){var b=[],d=n.scrollHeight;do{var e=B[J(a)];if(e)return A(b,e);b.push(a);if(d===a.scrollHeight){if(!E||n.clientHeight+10<d)return A(b,document.body)}else if(a.clientHeight+10<a.scrollHeight&&(overflow=getComputedStyle(a,"").getPropertyValue("overflow-y"),"scroll"===overflow||"auto"===overflow))return A(b,a)}while(a=a.parentNode)}function L(a,b){a=0<a?1:-1;b=0<b?1:-1;if(v.x!==a||v.y!==b)v.x=a,v.y=b,p=[],x=0}function z(a,b){return Math.floor(a/b)==a/b}function G(a){var b;a*=f.pulseScale;1>a?b=a-(1-Math.exp(-a)):(b=Math.exp(-1),--a,a=1-Math.exp(-a),b+=a*(1-b));return b*f.pulseNormalize}var w={frameRate:150,animationTime:600,stepSize:120,pulseAlgorithm:!0,pulseScale:6,pulseNormalize:1,accelerationDelta:50,accelerationMax:1,keyboardSupport:!0,arrowScroll:120,touchpadSupport:!0,fixedBackground:!0,excluded:""},f=w,E=!1,v={x:0,y:0},D=!1,n=document.documentElement,u,h=[120,120,120],g={left:37,up:38,right:39,down:40,spacebar:32,pageup:33,pagedown:34,end:35,home:36},f=w,p=[],y=!1,x=+new Date,B={};setInterval(function(){B={}},1E4);var J=function(){var a=0;return function(b){return b.uniqueID||(b.uniqueID=a++)}}(),N,H=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||function(a,b,d){window.setTimeout(a,d||1E3/60)}}(),w=/chrome/i.test(window.navigator.userAgent);"onmousewheel"in document&&w&&(window.addEventListener("mousedown",O,!1),window.addEventListener("mousewheel",M,!1),window.addEventListener("load",C,!1))
    /*})();*/


}
majorsMtheme();


/**********/
(function($){$.fn.running=function(){function n(){var t=$(".animateNum");var n={top:$(window).scrollTop(),bottom:$(window).scrollTop()+$(window).height()};t.each(function(){var t=$(this).attr("data-animateTarget");n.top<=$(this).offset().top+$(this).height()&&n.bottom>=$(this).offset().top&&!$(this).data("start")&&($(this).data("start",!0),new AnimateNum({obj:$(this),target:t,totalTime:1e3}))})};function b(){var t=$(".animateBar");var n={top:$(window).scrollTop(),bottom:$(window).scrollTop()+$(window).height()};t.each(function(){var t=$(this).attr("data-animateTarget");n.top<=$(this).offset().top+$(this).height()&&n.bottom>=$(this).offset().top&&!$(this).data("start")&&($(this).data("start",!0),new AnimateBar({obj:$(this),target:t,totalTime:1e3}))})};function p(){var t=$(".animatePie");var n={top:$(window).scrollTop(),bottom:$(window).scrollTop()+$(window).height()};t.each(function(){var t=$(this).attr("data-animateTarget");n.top<=$(this).offset().top+$(this).height()&&n.bottom>=$(this).offset().top&&!$(this).data("start")&&($(this).data("start",!0),new AnimatePie({obj:$(this),target:t,totalTime:1e3}))})};$(window).bind("scroll",function(){n();b();p()});function AnimateNum(t){this.obj=t.obj,this.target=t.target.toString(),this.totalTime=t.totalTime||1e3,this.init()};function AnimateBar(t){this.obj=t.obj,this.target=t.target.toString(),this.totalTime=t.totalTime||1e3,this.init()};function AnimatePie(t){this.obj=t.obj,this.target=t.target.toString(),this.totalTime=t.totalTime||1e3,this.init()};AnimateNum.prototype={init:function(){return this.target?(this.animation(),void 0):!1},animation:function(){var t=this,i=this.target.indexOf("."),e=0;i>=0&&(e=this.target.length-i-1);var n=this.target.replace(".",""),s=this.totalTime/30|0,a=n/s|0,r=0,h=0;t.timer=setInterval(function(){r++,h+=a,t.obj.html(h/Math.pow(10,e)),r>=s&&(clearInterval(t.timer),t.obj.html(t.target))},30)}};AnimateBar.prototype={init:function(){return this.target?(this.animation(),void 0):!1},animation:function(){var t=this,i=this.target.indexOf("."),e=0;i>=0&&(e=this.target.length-i-1);var n=this.target.replace(".",""),s=this.totalTime/30|0,a=n/s|0,r=0,h=0;t.timer=setInterval(function(){r++,h+=a,t.obj.css('width',h/Math.pow(10,e)+'%'),r>=s&&(clearInterval(t.timer),t.obj.animate({'width':t.target+'%'}))},30)}};AnimatePie.prototype={init:function(){return this.target?(this.animation(),void 0):!1},animation:function(){var t=this;s=this.totalTime/60|0;r=0;t.i=0;t.count=0;t.j=0;num=t.target;function start1(){t.obj.find('.pieInner span').html(t.i+1);if(num==0)return false;t.i=t.i+1;if(t.i==num){clearInterval(t.t1)}if(t.i==50){clearInterval(t.t1);num2=num-50;t.t2=setInterval(start2,1)};t.obj.find(".pieLeftInner").css("-o-transform","rotate("+t.i*3.6+"deg)");t.obj.find(".pieLeftInner").css("-moz-transform","rotate("+t.i*3.6+"deg)");t.obj.find(".pieLeftInner").css("-webkit-transform","rotate("+t.i*3.6+"deg)")};function start2(){t.obj.find('.pieInner span').html(50+t.j+1);if(num2==0)return false;t.j=t.j+1;if(t.j==num2){clearInterval(t.t2)}if(t.j==50){clearInterval(t.t2)};t.obj.find(".pieRightInner").css("-o-transform","rotate("+t.j*3.6+"deg)");t.obj.find(".pieRightInner").css("-moz-transform","rotate("+t.j*3.6+"deg)");t.obj.find(".pieRightInner").css("-webkit-transform","rotate("+t.j*3.6+"deg)")};t.t1=setInterval(function(){r++;r>=s&&(clearInterval(t.timer),start1())},30)}}}})(jQuery);

/**********/
function EmailAutoComplete(options){this.config={targetCls:'.inputElem',parentCls:'.parentCls',hiddenCls:'.hiddenCls',searchForm:'.jqtransformdone',hoverBg:'hoverBg',inputValColor:'black',mailArr:["@qq.com","@gmail.com","@126.com","@163.com","@hotmail.com","@yahoo.com","@yahoo.com.cn","@live.com","@sohu.com","@sina.com"],isSelectHide:true,callback:null};this.cache={onlyFlag:true,currentIndex:-1,oldIndex:-1};this.init(options)}EmailAutoComplete.prototype={constructor:EmailAutoComplete,init:function(options){this.config=$.extend(this.config,options||{});var self=this,_config=self.config,_cache=self.cache;$(_config.targetCls).each(function(index,item){$(item).keyup(function(e){var target=e.target,targetVal=$.trim($(this).val()),keycode=e.keyCode,elemHeight=$(this).outerHeight(),elemWidth=$(this).outerWidth(),parentNode=$(this).closest(_config.parentCls);$(parentNode).css({'position':'relative'});if(targetVal==''){$(item).attr({'data-html':''});$(_config.hiddenCls,parentNode).val('');_cache.currentIndex=-1;_cache.oldIndex=-1;$(".auto-tip",parentNode)&&!$(".auto-tip",parentNode).hasClass('hidden')&&$(".auto-tip",parentNode).addClass('hidden');self._removeBg(parentNode)}else{$(item).attr({'data-html':targetVal});$(_config.hiddenCls,parentNode).val(targetVal);$(".auto-tip",parentNode)&&$(".auto-tip",parentNode).hasClass('hidden')&&$(".auto-tip",parentNode).removeClass('hidden');self._renderHTML({keycode:keycode,e:e,target:target,targetVal:targetVal,height:elemHeight,width:elemWidth,parentNode:parentNode})}})});$(_config.searchForm).each(function(index,item){$(item).keydown(function(e){var keyCode=e.keyCode;if(keyCode==13){return false}})});$(document).click(function(e){e.stopPropagation();var target=e.target,tagCls=_config.targetCls.replace(/^\./,'');if(!$(target).hasClass(tagCls)){$('.auto-tip')&&$('.auto-tip').each(function(index,item){!$(item).hasClass('hidden')&&$(item).addClass('hidden')})}});},_renderHTML:function(cfg){var self=this,_config=self.config,_cache=self.cache,curVal;var curIndex=self._keyCode(cfg.keycode);$('.auto-tip',cfg.parentNode).hasClass('hidden')&&$('.auto-tip',cfg.parentNode).removeClass('hidden');if(curIndex>-1){self._keyUpAndDown(cfg.targetVal,cfg.e,cfg.parentNode)}else{if(/@/.test(cfg.targetVal)){curVal=cfg.targetVal.replace(/@.*/,'')}else{curVal=cfg.targetVal}if(_cache.onlyFlag){$(cfg.parentNode).append('<input type="hidden" class="hiddenCls"/>');var wrap='<ul class="auto-tip">';for(var i=0;i<_config.mailArr.length;i++){wrap+='<li class="p-index'+i+'">'+'<span class="output-num"></span><em class="em" data-html="'+_config.mailArr[i]+'">'+_config.mailArr[i]+'</em></li>'}wrap+='</ul>';_cache.onlyFlag=false;$(cfg.parentNode).append(wrap);$('.auto-tip',cfg.parentNode).css({'position':'absolute','top':cfg.height,'width':cfg.width-2+'px','left':0,'border':'1px solid #ccc','z-index':10000})}$('.auto-tip li',cfg.parentNode).each(function(index,item){$('.output-num',item).html(curVal);!$('.output-num',item).hasClass(_config.inputValColor)&&$('.output-num',item).addClass(_config.inputValColor);var emVal=$.trim($('.em',item).attr('data-html'));$(item).attr({'data-html':curVal+''+emVal})});self._accurateMate({target:cfg.target,parentNode:cfg.parentNode});self._itemHover(cfg.parentNode);self._executeClick(cfg.parentNode)}},_accurateMate:function(cfg){var self=this,_config=self.config,_cache=self.cache;var curVal=$.trim($(cfg.target,cfg.parentNode).attr('data-html')),newArrs=[];if(/@/.test(curVal)){var prefix=curVal.replace(/@.*/,""),suffix=curVal.replace(/.*@/,"");$.map(_config.mailArr,function(n){var reg=new RegExp(suffix);if(reg.test(n)){newArrs.push(n)}});if(newArrs.length>0){$('.auto-tip',cfg.parentNode).html('');$(".auto-tip",cfg.parentNode)&&$(".auto-tip",cfg.parentNode).hasClass('hidden')&&$(".auto-tip",cfg.parentNode).removeClass('hidden');var html='';for(var j=0,jlen=newArrs.length;j<jlen;j++){html+='<li class="p-index'+j+'">'+'<span class="output-num"></span><em class="em" data-html="'+newArrs[j]+'">'+newArrs[j]+'</em></li>'}$('.auto-tip',cfg.parentNode).html(html);$('.auto-tip li',cfg.parentNode).each(function(index,item){$('.output-num',item).html(prefix);!$('.output-num',item).hasClass(_config.inputValColor)&&$('.output-num',item).addClass(_config.inputValColor);var emVal=$.trim($('.em',item).attr('data-html'));$(item).attr('data-html','');$(item).attr({'data-html':prefix+''+emVal})});_cache.currentIndex=-1;_cache.oldIndex=-1;$('.auto-tip .output-num',cfg.parentNode).html(prefix);self._itemHover(cfg.parentNode);self._executeClick(cfg.parentNode)}else{$(".auto-tip",cfg.parentNode)&&!$(".auto-tip",cfg.parentNode).hasClass('hidden')&&$(".auto-tip",cfg.parentNode).addClass('hidden');$('.auto-tip',cfg.parentNode).html('')}}},_itemHover:function(parentNode){var self=this,_config=self.config,_cache=self.cache;$('.auto-tip li',parentNode).hover(function(index,item){!$(this).hasClass(_config.hoverBg)&&$(this).addClass(_config.hoverBg)},function(){$(this).hasClass(_config.hoverBg)&&$(this).removeClass(_config.hoverBg)})},_removeBg:function(parentNode){var self=this,_config=self.config;$(".auto-tip li",parentNode).each(function(index,item){$(item).hasClass(_config.hoverBg)&&$(item).removeClass(_config.hoverBg)})},_keyUpAndDown:function(targetVal,e,parentNode){var self=this,_cache=self.cache,_config=self.config;if($('.auto-tip'+' li',parentNode)&&$('.auto-tip'+' li').length>0){var plen=$('.auto-tip'+' li',parentNode).length,keyCode=e.keyCode;_cache.oldIndex=_cache.currentIndex;if(keyCode==38){if(_cache.currentIndex==-1){_cache.currentIndex=plen-1}else{_cache.currentIndex=_cache.currentIndex-1;if(_cache.currentIndex<0){_cache.currentIndex=plen-1}}if(_cache.currentIndex!==-1){!$('.auto-tip .p-index'+_cache.currentIndex,parentNode).hasClass(_config.hoverBg)&&$('.auto-tip .p-index'+_cache.currentIndex,parentNode).addClass(_config.hoverBg).siblings().removeClass(_config.hoverBg);var curAttr=$('.auto-tip'+' .p-index'+_cache.currentIndex,parentNode).attr('data-html');$(_config.targetCls,parentNode).val(curAttr);$(_config.hiddenCls,parentNode).val(curAttr)}}else if(keyCode==40){if(_cache.currentIndex==plen-1){_cache.currentIndex=0}else{_cache.currentIndex++;if(_cache.currentIndex>plen-1){_cache.currentIndex=0}}if(_cache.currentIndex!==-1){!$('.auto-tip .p-index'+_cache.currentIndex,parentNode).hasClass(_config.hoverBg)&&$('.auto-tip .p-index'+_cache.currentIndex,parentNode).addClass(_config.hoverBg).siblings().removeClass(_config.hoverBg);var curAttr=$('.auto-tip'+' .p-index'+_cache.currentIndex,parentNode).attr('data-html');$(_config.targetCls,parentNode).val(curAttr);$(_config.hiddenCls,parentNode).val(curAttr)}}else if(keyCode==13){var curVal=$('.auto-tip'+' .p-index'+_cache.oldIndex,parentNode).attr('data-html');$(_config.targetCls,parentNode).val(curVal);$(_config.hiddenCls,parentNode).val(curVal);if(_config.isSelectHide){!$(".auto-tip",parentNode).hasClass('hidden')&&$(".auto-tip",parentNode).addClass('hidden')}_config.callback&&$.isFunction(_config.callback)&&_config.callback();_cache.currentIndex=-1;_cache.oldIndex=-1}}},_keyCode:function(code){var arrs=['17','18','38','40','37','39','33','34','35','46','36','13','45','44','145','19','20','9'];for(var i=0,ilen=arrs.length;i<ilen;i++){if(code==arrs[i]){return i}}return-1},_executeClick:function(parentNode){var _self=this,_config=_self.config;$('.auto-tip'+' li',parentNode).unbind('click');$('.auto-tip'+' li',parentNode).bind('click',function(e){var dataAttr=$(this).attr('data-html');$(_config.targetCls,parentNode).val(dataAttr);if(_config.isSelectHide){!$(".auto-tip",parentNode).hasClass('hidden')&&$(".auto-tip",parentNode).addClass('hidden')}$(_config.hiddenCls,parentNode).val(dataAttr);_config.callback&&$.isFunction(_config.callback)&&_config.callback()})}};$(function(){new EmailAutoComplete({})});

/************/
(function($){var isFullscreen=false,$el,$wrapper,$editor,$icon,$overlay,transitionDuration=300,settings={overlay:true,maxWidth:"",maxHeight:""};var methods={init:function(opts){settings=settings||{};$.extend(true,settings,settings);$.extend(true,settings,opts);$el=$(this);if(!$el.is("textarea")){$.error("Error initializing Textarea Fullscreen Editor Plugin. It can only work on <textarea> element.");return}var content='<div class="tx-editor-wrapper"><div class="tx-editor"><a href="#" class="tx-icon"></a></div></div>';var $wrapper=$(content).insertAfter(this);$editor=$wrapper.find(".tx-editor");$icon=$editor.find(".tx-icon");$editor.append($el);$el.css({"width":"100%","resize":"none"});$(window).on("keyup.txeditor",function(e){if(e.keyCode==27){isFullscreen?methods.minimize():""}});$icon.on("click.txeditor.icon",function(e){e.preventDefault();methods[isFullscreen?"minimize":"expand"]()});return this},showOverlay:function(){$('<div class="tx-editor-overlay" />').appendTo("body").fadeTo(0,1).click(function(){methods.minimize()});return this},removeOverlay:function(){var $overlay=$(".tx-editor-overlay");if($overlay.length){$overlay.fadeTo(0,0,function(){$(this).remove()})}return this},expand:function(){settings.maxWidth?$editor.css("max-width",settings.maxWidth):"";settings.maxHeight?$editor.css("max-height",settings.maxHeight):"";if(settings.overlay){methods.showOverlay()}$(window).on("resize.txeditor",function(){relocate($editor)});$editor.addClass("expanded");transitions();return this},minimize:function(){$(window).off("resize.txeditor",relocate($editor));$editor.removeClass("expanded").css({"max-width":"none","max-height":"none"});if(settings.overlay){methods.removeOverlay()}transitions();return this},destroy:function(){methods.removeOverlay();$wrapper.insertBefore($el);$wrapper.remove();$(window).off("keyup.txeditor").off("resize.txeditor");return this},};var transitions=function(){relocate($editor);if(isFullscreen){$el.focus();isFullscreen=false}else{$el.focus();$editor.css("opacity",1);isFullscreen=true}return};function relocate(el){var yPos=0|((($(window).height()-el.height())/2));var xPos=0|(($(window).width()-el.width())/2);el.css({"top":yPos,"left":xPos})}$.fn.textareafullscreen=function(method){$.extend(methods,transitions);if(methods[method]){return methods[method].apply(this,Array.prototype.slice.call(arguments,1))}else{if(typeof method==="object"||!method){return methods.init.apply(this,arguments)}else{$.error("Method "+method+" does not exist on jQuery.textareafullscreen")}}}})(jQuery);

function addToast(){
    $.Toast("待开发中哦!", "你所点击的区域我们正在开发,不久之后就会实现.", "notice", {
        has_icon:true,
        has_close_btn:true,
        fullscreen:false,
        timeout:3000,
        sticky:false,
        has_progress:true,
        rtl:false
    });
}