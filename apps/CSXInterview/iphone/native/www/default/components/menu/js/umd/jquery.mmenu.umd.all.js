
/* JavaScript content from components/menu/js/umd/jquery.mmenu.umd.all.js in folder common */
(function ( factory ) {
    if ( typeof define === 'function' && define.amd )
    {
        // AMD. Register as an anonymous module.
        define( [ 'jquery' ], factory );
    }
    else if ( typeof exports === 'object' )
    {
        // Node/CommonJS
        factory( require( 'jquery' ) );
    }
    else
    {
        // Browser globals
        factory( jQuery );
    }
}( function ( jQuery ) {


/*	
 * jQuery mmenu v4.6.4
 * @requires jQuery 1.7.0 or later
 *
 * mmenu.frebsite.nl
 *	
 * Copyright (c) Fred Heusschen
 * www.frebsite.nl
 *
 * Licensed under the MIT license:
 * http://en.wikipedia.org/wiki/MIT_License
 */
!function(e){function n(){l=!0,d.$wndw=e(window),d.$html=e("html"),d.$body=e("body"),e.each([i,a,o],function(e,n){n.add=function(e){e=e.split(" ");for(var t in e)n[e[t]]=n.mm(e[t])}}),i.mm=function(e){return"mm-"+e},i.add("wrapper menu inline panel nopanel list nolist subtitle selected label spacer current highest hidden opened subopened subopen fullsubopen subclose"),i.umm=function(e){return"mm-"==e.slice(0,3)&&(e=e.slice(3)),e},a.mm=function(e){return"mm-"+e},a.add("parent"),o.mm=function(e){return e+".mm"},o.add("toggle open close setSelected transitionend webkitTransitionEnd mousedown mouseup touchstart touchmove touchend scroll resize click keydown keyup"),e[t]._c=i,e[t]._d=a,e[t]._e=o,e[t].glbl=d}var t="mmenu",s="4.6.4";if(!e[t]){var i={},a={},o={},l=!1,d={$wndw:null,$html:null,$body:null};e[t]=function(e,n,t){return this.$menu=e,this.opts=n,this.conf=t,this.vars={},"function"==typeof this.___deprecated&&this.___deprecated(),this._initMenu(),this._initAnchors(),this._initEvents(),this._init(this.$menu.children(this.conf.panelNodetype)),"function"==typeof this.___debug&&this.___debug(),this},e[t].version=s,e[t].addons=[],e[t].uniqueId=0,e[t].defaults={classes:"",slidingSubmenus:!0,onClick:{setSelected:!0}},e[t].configuration={panelNodetype:"ul, ol, div",transitionDuration:400,openingInterval:25,classNames:{panel:"Panel",selected:"Selected",label:"Label",spacer:"Spacer"}},e[t].prototype={_init:function(n){n=n.not("."+i.nopanel),n=this._initPanels(n);for(var s=0;s<e[t].addons.length;s++)"function"==typeof this["_init_"+e[t].addons[s]]&&this["_init_"+e[t].addons[s]](n);this._update()},_initMenu:function(){this.opts.offCanvas&&this.conf.clone&&(this.$menu=this.$menu.clone(!0),this.$menu.add(this.$menu.find("*")).filter("[id]").each(function(){e(this).attr("id",i.mm(e(this).attr("id")))})),this.$menu.contents().each(function(){3==e(this)[0].nodeType&&e(this).remove()}),this.$menu.parent().addClass(i.wrapper);var n=[i.menu];n.push(i.mm(this.opts.slidingSubmenus?"horizontal":"vertical")),this.opts.classes&&n.push(this.opts.classes),this.$menu.addClass(n.join(" "))},_initPanels:function(n){var t=this;this.__findAddBack(n,"ul, ol").not("."+i.nolist).addClass(i.list);var s=this.__findAddBack(n,"."+i.list).find("> li");this.__refactorClass(s,this.conf.classNames.selected,"selected"),this.__refactorClass(s,this.conf.classNames.label,"label"),this.__refactorClass(s,this.conf.classNames.spacer,"spacer"),s.off(o.setSelected).on(o.setSelected,function(n,t){n.stopPropagation(),s.removeClass(i.selected),"boolean"!=typeof t&&(t=!0),t&&e(this).addClass(i.selected)}),this.__refactorClass(this.__findAddBack(n,"."+this.conf.classNames.panel),this.conf.classNames.panel,"panel"),n.add(this.__findAddBack(n,"."+i.list).children().children().filter(this.conf.panelNodetype).not("."+i.nopanel)).addClass(i.panel);var l=this.__findAddBack(n,"."+i.panel),d=e("."+i.panel,this.$menu);if(l.each(function(){var n=e(this),s=n.attr("id")||t.__getUniqueId();n.attr("id",s)}),l.each(function(){var n=e(this),s=n.is("ul, ol")?n:n.find("ul ,ol").first(),o=n.parent(),l=o.children("a, span"),d=o.closest("."+i.panel);if(o.parent().is("."+i.list)&&!n.data(a.parent)){n.data(a.parent,o);var r=e('<a class="'+i.subopen+'" href="#'+n.attr("id")+'" />').insertBefore(l);l.is("a")||r.addClass(i.fullsubopen),t.opts.slidingSubmenus&&s.prepend('<li class="'+i.subtitle+'"><a class="'+i.subclose+'" href="#'+d.attr("id")+'">'+l.text()+"</a></li>")}}),this.opts.slidingSubmenus){var r=this.__findAddBack(n,"."+i.list).find("> li."+i.selected);r.parents("li").removeClass(i.selected).end().add(r.parents("li")).each(function(){var n=e(this),t=n.find("> ."+i.panel);t.length&&(n.parents("."+i.panel).addClass(i.subopened),t.addClass(i.opened))}).closest("."+i.panel).addClass(i.opened).parents("."+i.panel).addClass(i.subopened)}else{var r=e("li."+i.selected,d);r.parents("li").removeClass(i.selected).end().add(r.parents("li")).addClass(i.opened)}var u=d.filter("."+i.opened);return u.length||(u=l.first()),u.addClass(i.opened).last().addClass(i.current),this.opts.slidingSubmenus&&l.not(u.last()).addClass(i.hidden).end().appendTo(this.$menu),l},_initAnchors:function(){var n=this;d.$body.on(o.click,"."+i.menu+" a",function(t){var s=e(this),a=s.attr("href")||"";if("#"==a.slice(0,1)){var l=e(a);l.is("."+i.panel)&&(t.preventDefault(),l.trigger(n.opts.slidingSubmenus?o.open:o.toggle))}else if(s.is("."+i.list+" > li > a")&&!s.is('[rel="external"]')&&!s.is('[target="_blank"]')){n.__valueOrFn(n.opts.onClick.setSelected,s)&&s.parent().trigger(o.setSelected);var r=n.__valueOrFn(n.opts.onClick.preventDefault,s,"#"==a.slice(0,1));r&&t.preventDefault(),n.__valueOrFn(n.opts.onClick.blockUI,s,!r)&&d.$html.addClass(i.blocking),n.__valueOrFn(n.opts.onClick.close,s,r)&&n.$menu.trigger(o.close)}})},_initEvents:function(){var n=this;this.$menu.on(o.toggle+" "+o.open+" "+o.close,"."+i.panel,function(e){e.stopPropagation()}),this.opts.slidingSubmenus?this.$menu.on(o.open,"."+i.panel,function(){return n._openSubmenuHorizontal(e(this))}):this.$menu.on(o.toggle,"."+i.panel,function(){var n=e(this);n.trigger(n.parent().hasClass(i.opened)?o.close:o.open)}).on(o.open,"."+i.panel,function(){e(this).parent().addClass(i.opened)}).on(o.close,"."+i.panel,function(){e(this).parent().removeClass(i.opened)})},_openSubmenuHorizontal:function(n){if(n.hasClass(i.current))return!1;var t=e("."+i.panel,this.$menu),s=t.filter("."+i.current);return t.removeClass(i.highest).removeClass(i.current).not(n).not(s).addClass(i.hidden),n.hasClass(i.opened)?s.addClass(i.highest).removeClass(i.opened).removeClass(i.subopened):(n.addClass(i.highest),s.addClass(i.subopened)),n.removeClass(i.hidden).addClass(i.current),setTimeout(function(){n.removeClass(i.subopened).addClass(i.opened)},this.conf.openingInterval),"open"},_update:function(e){if(this.updates||(this.updates=[]),"function"==typeof e)this.updates.push(e);else for(var n=0,t=this.updates.length;t>n;n++)this.updates[n].call(this,e)},__valueOrFn:function(e,n,t){return"function"==typeof e?e.call(n[0]):"undefined"==typeof e&&"undefined"!=typeof t?t:e},__refactorClass:function(e,n,t){e.filter("."+n).removeClass(n).addClass(i[t])},__findAddBack:function(e,n){return e.find(n).add(e.filter(n))},__transitionend:function(e,n,t){var s=!1,i=function(){s||n.call(e[0]),s=!0};e.one(o.transitionend,i),e.one(o.webkitTransitionEnd,i),setTimeout(i,1.1*t)},__getUniqueId:function(){return i.mm(e[t].uniqueId++)}},e.fn[t]=function(s,i){return l||n(),s=e.extend(!0,{},e[t].defaults,s),i=e.extend(!0,{},e[t].configuration,i),this.each(function(){var n=e(this);n.data(t)||n.data(t,new e[t](n,s,i))})},e[t].support={touch:"ontouchstart"in window.document}}}(jQuery);
/*	
 * jQuery mmenu offCanvas addon
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
!function(e){function t(e){return e}function o(e){return"string"!=typeof e.pageSelector&&(e.pageSelector="> "+e.pageNodetype),e}function n(){c=!0,a=e[s]._c,p=e[s]._d,r=e[s]._e,a.add("offcanvas modal background opening blocker page"),p.add("style"),r.add("opening opened closing closed setPage"),l=e[s].glbl,l.$allMenus=(l.$allMenus||e()).add(this.$menu),l.$wndw.on(r.keydown,function(e){return l.$html.hasClass(a.opened)&&9==e.keyCode?(e.preventDefault(),!1):void 0});var t=0;l.$wndw.on(r.resize,function(e,o){if(o||l.$html.hasClass(a.opened)){var n=l.$wndw.height();(o||n!=t)&&(t=n,l.$page.css("minHeight",n))}})}var s="mmenu",i="offCanvas";e[s].prototype["_init_"+i]=function(){if(this.opts[i]&&!this.vars[i+"_added"]){this.vars[i+"_added"]=!0,c||n(),this.opts[i]=t(this.opts[i]),this.conf[i]=o(this.conf[i]);var e=this.opts[i],s=this.conf[i],p=[a.offcanvas];"boolean"!=typeof this.vars.opened&&(this.vars.opened=!1),"left"!=e.position&&p.push(a.mm(e.position)),"back"!=e.zposition&&p.push(a.mm(e.zposition)),this.$menu.addClass(p.join(" ")).parent().removeClass(a.wrapper),this[i+"_initPage"](l.$page),this[i+"_initBlocker"](),this[i+"_initAnchors"](),this[i+"_initEvents"](),this.$menu[s.menuInjectMethod+"To"](s.menuWrapperSelector)}},e[s].addons.push(i),e[s].defaults[i]={position:"left",zposition:"back",modal:!1,moveBackground:!0},e[s].configuration[i]={pageNodetype:"div",pageSelector:null,menuWrapperSelector:"body",menuInjectMethod:"prepend"},e[s].prototype.open=function(){if(this.vars.opened)return!1;var e=this;return this._openSetup(),setTimeout(function(){e._openFinish()},this.conf.openingInterval),"open"},e[s].prototype._openSetup=function(){var e=this;l.$allMenus.not(this.$menu).trigger(r.close),l.$page.data(p.style,l.$page.attr("style")||""),l.$wndw.trigger(r.resize,[!0]);var t=[a.opened];this.opts[i].modal&&t.push(a.modal),this.opts[i].moveBackground&&t.push(a.background),"left"!=this.opts[i].position&&t.push(a.mm(this.opts[i].position)),"back"!=this.opts[i].zposition&&t.push(a.mm(this.opts[i].zposition)),this.opts.classes&&t.push(this.opts.classes),l.$html.addClass(t.join(" ")),setTimeout(function(){e.vars.opened=!0},this.conf.openingInterval),this.$menu.addClass(a.current+" "+a.opened)},e[s].prototype._openFinish=function(){var e=this;this.__transitionend(l.$page,function(){e.$menu.trigger(r.opened)},this.conf.transitionDuration),l.$html.addClass(a.opening),this.$menu.trigger(r.opening)},e[s].prototype.close=function(){if(!this.vars.opened)return!1;var e=this;return this.__transitionend(l.$page,function(){e.$menu.removeClass(a.current).removeClass(a.opened),l.$html.removeClass(a.opened).removeClass(a.modal).removeClass(a.background).removeClass(a.mm(e.opts[i].position)).removeClass(a.mm(e.opts[i].zposition)),e.opts.classes&&l.$html.removeClass(e.opts.classes),l.$page.attr("style",l.$page.data(p.style)),e.vars.opened=!1,e.$menu.trigger(r.closed)},this.conf.transitionDuration),l.$html.removeClass(a.opening),this.$menu.trigger(r.closing),"close"},e[s].prototype[i+"_initBlocker"]=function(){var t=this;l.$blck||(l.$blck=e('<div id="'+a.blocker+'" />').appendTo(l.$body)),l.$blck.off(r.touchstart).on(r.touchstart,function(e){e.preventDefault(),e.stopPropagation(),l.$blck.trigger(r.mousedown)}).on(r.mousedown,function(e){e.preventDefault(),l.$html.hasClass(a.modal)||t.close()})},e[s].prototype[i+"_initPage"]=function(t){t||(t=e(this.conf[i].pageSelector,l.$body),t.length>1&&(t=t.wrapAll("<"+this.conf[i].pageNodetype+" />").parent())),t.addClass(a.page),l.$page=t},e[s].prototype[i+"_initAnchors"]=function(){var t=this;l.$body.on(r.click,"a",function(o){var n=e(this),s=t.$menu.attr("id");s&&s.length&&(t.conf.clone&&(s=a.umm(s)),n.is('[href="#'+s+'"]')&&(o.preventDefault(),t.open()));var s=l.$page.attr("id");s&&s.length&&n.is('[href="#'+s+'"]')&&(o.preventDefault(),t.close())})},e[s].prototype[i+"_initEvents"]=function(){var e=this,t=r.open+" "+r.opening+" "+r.opened+" "+r.close+" "+r.closing+" "+r.closed+" "+r.setPage;this.$menu.on(t,function(e){e.stopPropagation()}),this.$menu.on(r.open,function(){e.open()}).on(r.close,function(){e.close()}).on(r.setPage,function(t,o){e[i+"_initPage"](o)})};var a,p,r,l,c=!1}(jQuery);
/*	
 * jQuery mmenu buttonbars addon
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
!function(t){function n(t){return t}function a(t){return t}function i(){d=!0,o=t[r]._c,e=t[r]._d,u=t[r]._e,o.add("buttonbar"),c=t[r].glbl}var r="mmenu",s="buttonbars";t[r].prototype["_init_"+s]=function(r){d||i();var e=this.vars[s+"_added"];this.vars[s+"_added"]=!0,e||(this.opts[s]=n(this.opts[s]),this.conf[s]=a(this.conf[s])),this.opts[s],this.conf[s],this.__refactorClass(t("div",r),this.conf.classNames[s].buttonbar,"buttonbar"),t("div."+o.buttonbar,r).each(function(){var n=t(this),a=n.children().not("input"),i=n.children().filter("input");n.addClass(o.buttonbar+"-"+a.length),i.each(function(){var n=t(this),i=a.filter('label[for="'+n.attr("id")+'"]');i.length&&n.insertBefore(i)})})},t[r].addons.push(s),t[r].defaults[s]={},t[r].configuration.classNames[s]={buttonbar:"Buttonbar"};var o,e,u,c,d=!1}(jQuery);
/*	
 * jQuery mmenu counters addon
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
!function(t){function e(e){return"boolean"==typeof e&&(e={add:e,update:e}),"object"!=typeof e&&(e={}),e=t.extend(!0,{},t[o].defaults[s],e)}function n(t){return t}function a(){i=!0,d=t[o]._c,r=t[o]._d,u=t[o]._e,d.add("counter search noresultsmsg"),r.add("updatecounter"),c=t[o].glbl}var o="mmenu",s="counters";t[o].prototype["_init_"+s]=function(o){i||a();var u=this.vars[s+"_added"];this.vars[s+"_added"]=!0,u||(this.opts[s]=e(this.opts[s]),this.conf[s]=n(this.conf[s]));var c=this,h=this.opts[s];this.conf[s],this.__refactorClass(t("em",o),this.conf.classNames[s].counter,"counter"),h.add&&o.each(function(){var e=t(this).data(r.parent);e&&(e.find("> em."+d.counter).length||e.prepend(t('<em class="'+d.counter+'" />')))}),h.update&&o.each(function(){var e=t(this),n=e.data(r.parent);if(n){var a=n.find("> em."+d.counter);a.length&&(e.is("."+d.list)||(e=e.find("> ."+d.list)),e.length&&!e.data(r.updatecounter)&&(e.data(r.updatecounter,!0),c._update(function(){var t=e.children().not("."+d.label).not("."+d.subtitle).not("."+d.hidden).not("."+d.search).not("."+d.noresultsmsg);a.html(t.length)})))}})},t[o].addons.push(s),t[o].defaults[s]={add:!1,update:!1},t[o].configuration.classNames[s]={counter:"Counter"};var d,r,u,c,i=!1}(jQuery);
/*	
 * jQuery mmenu dragOpen addon
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
!function(e){function t(e,t,n){return t>e&&(e=t),e>n&&(e=n),e}function n(t){return"boolean"==typeof t&&(t={open:t}),"object"!=typeof t&&(t={}),t=e.extend(!0,{},e[a].defaults[i],t)}function o(e){return e}function s(){c=!0,r=e[a]._c,p=e[a]._d,f=e[a]._e,r.add("dragging"),d=e[a].glbl}var a="mmenu",i="dragOpen";e[a].prototype["_init_"+i]=function(){if("function"==typeof Hammer&&this.opts.offCanvas&&!this.vars[i+"_added"]){this.vars[i+"_added"]=!0,c||s(),this.opts[i]=n(this.opts[i]),this.conf[i]=o(this.conf[i]);var a=this,p=this.opts[i],h=this.conf[i];if(p.open){if(Hammer.VERSION<2)return;var m,u,g,l,v={},_=0,w=!1,b=!1,y=0,$=0;switch(this.opts.offCanvas.position){case"left":case"right":v.events="panleft panright",v.typeLower="x",v.typeUpper="X",b="width";break;case"top":case"bottom":v.events="panup pandown",v.typeLower="y",v.typeUpper="Y",b="height"}switch(this.opts.offCanvas.position){case"left":case"top":v.negative=!1;break;case"right":case"bottom":v.negative=!0}switch(this.opts.offCanvas.position){case"left":v.open_dir="right",v.close_dir="left";break;case"right":v.open_dir="left",v.close_dir="right";break;case"top":v.open_dir="down",v.close_dir="up";break;case"bottom":v.open_dir="up",v.close_dir="down"}var x=this.__valueOrFn(p.pageNode,this.$menu,d.$page);"string"==typeof x&&(x=e(x));var C=d.$page;switch(this.opts.offCanvas.zposition){case"front":C=this.$menu;break;case"next":C=C.add(this.$menu)}var k=new Hammer(x[0],p.vendors.hammer);k.on("panstart",function(e){switch(l=e.center[v.typeLower],a.opts.offCanvas.position){case"right":case"bottom":l>=d.$wndw[b]()-p.maxStartPos&&(_=1);break;default:l<=p.maxStartPos&&(_=1)}w=v.open_dir}).on(v.events+" panend",function(e){_>0&&e.preventDefault()}).on(v.events,function(e){if(m=e["delta"+v.typeUpper],v.negative&&(m=-m),m!=y&&(w=m>=y?v.open_dir:v.close_dir),y=m,y>p.threshold&&1==_){if(d.$html.hasClass(r.opened))return;_=2,a._openSetup(),a.$menu.trigger(f.opening),d.$html.addClass(r.dragging),$=t(d.$wndw[b]()*h[b].perc,h[b].min,h[b].max)}2==_&&(u=t(y,10,$)-("front"==a.opts.offCanvas.zposition?$:0),v.negative&&(u=-u),g="translate"+v.typeUpper+"("+u+"px )",C.css({"-webkit-transform":"-webkit-"+g,transform:g}))}).on("panend",function(){2==_&&(d.$html.removeClass(r.dragging),C.css("transform",""),a[w==v.open_dir?"_openFinish":"close"]()),_=0})}}},e[a].addons.push(i),e[a].defaults[i]={open:!1,maxStartPos:100,threshold:50,vendors:{hammer:{}}},e[a].configuration[i]={width:{perc:.8,min:140,max:440},height:{perc:.8,min:140,max:880}};var r,p,f,d,c=!1}(jQuery);
/*	
 * jQuery mmenu fixedElements addon
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
!function(t){function s(t){return t}function o(t){return t}function n(){c=!0,e=t[i]._c,f=t[i]._d,r=t[i]._e,e.add("fixed-top fixed-bottom"),d=t[i].glbl}var i="mmenu",a="fixedElements";t[i].prototype["_init_"+a]=function(){if(this.opts.offCanvas){c||n();var i=this.vars[a+"_added"];if(this.vars[a+"_added"]=!0,i||(this.opts[a]=s(this.opts[a]),this.conf[a]=o(this.conf[a])),this.opts[a],this.conf[a],this.__refactorClass(t("div, span, a",d.$page),this.conf.classNames[a].fixedTop,"fixed-top"),this.__refactorClass(t("div, span, a",d.$page),this.conf.classNames[a].fixedBottom,"fixed-bottom"),!i){var f,p;this.$menu.on(r.opening,function(){var s=t(window).scrollTop(),o=d.$page.height()-s-d.$wndw.height();f=t("."+e["fixed-top"]),p=t("."+e["fixed-bottom"]),f.css({"-webkit-transform":"translateY( "+s+"px )",transform:"translateY( "+s+"px )"}),p.css({"-webkit-transform":"translateY( -"+o+"px )",transform:"translateY( -"+o+"px )"})}).on(r.closed,function(){f.add(p).css({"-webkit-transform":"none",transform:"none"})})}}},t[i].addons.push(a),t[i].defaults[a]={},t[i].configuration.classNames[a]={fixedTop:"FixedTop",fixedBottom:"FixedBottom"};var e,f,r,d,c=!1}(jQuery);
/*	
 * jQuery mmenu footer addon
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
!function(t){function o(o){return"boolean"==typeof o&&(o={add:o,update:o}),"object"!=typeof o&&(o={}),o=t.extend(!0,{},t[a].defaults[s],o)}function n(t){return t}function e(){h=!0,i=t[a]._c,d=t[a]._d,r=t[a]._e,i.add("footer hasfooter"),f=t[a].glbl}var a="mmenu",s="footer";t[a].prototype["_init_"+s]=function(a){h||e();var d=this.vars[s+"_added"];this.vars[s+"_added"]=!0,d||(this.opts[s]=o(this.opts[s]),this.conf[s]=n(this.conf[s]));var f=this,u=this.opts[s];if(this.conf[s],!d&&u.add){var c=u.content?u.content:u.title;t('<div class="'+i.footer+'" />').appendTo(this.$menu).append(c)}var p=t("div."+i.footer,this.$menu);p.length&&(this.$menu.addClass(i.hasfooter),u.update&&a.each(function(){var o=t(this),n=t("."+f.conf.classNames[s].panelFooter,o),e=n.html();e||(e=u.title);var a=function(){p[e?"show":"hide"](),p.html(e)};o.on(r.open,a),o.hasClass(i.current)&&a()}),"function"==typeof this._init_buttonbars&&this._init_buttonbars(p))},t[a].addons.push(s),t[a].defaults[s]={add:!1,content:!1,title:"",update:!1},t[a].configuration.classNames[s]={panelFooter:"Footer"};var i,d,r,f,h=!1}(jQuery);
/*	
 * jQuery mmenu header addon
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
!function(e){function t(t){return"boolean"==typeof t&&(t={add:t,update:t}),"object"!=typeof t&&(t={}),!t.add||t.add instanceof Array||(t.add=["prev","title","next"]),t=e.extend(!0,{},e[s].defaults[d],t)}function a(e){return e}function n(){f=!0,r=e[s]._c,i=e[s]._d,h=e[s]._e,r.add("header hasheader prev next close title"),o=e[s].glbl}var s="mmenu",d="header";e[s].prototype["_init_"+d]=function(s){f||n();var i=this.vars[d+"_added"];this.vars[d+"_added"]=!0,i||(this.opts[d]=t(this.opts[d]),this.conf[d]=a(this.conf[d]));var l=this,c=this.opts[d];if(this.conf[d],!i&&c.add){if(c.content)var p=c.content;else for(var p="",u=0,v=c.add.length;v>u;u++)switch(c.add[u]){case"prev":case"next":case"close":p+='<a class="'+r[c.add[u]]+'" href="#"></a>';break;case"title":p+='<span class="'+r.title+'"></span>';break;default:p+=c.add[u]}e('<div class="'+r.header+'" />').prependTo(this.$menu).append(p)}var m=e("div."+r.header,this.$menu);if(m.length){if(this.$menu.addClass(r.hasheader),c.update){var b=m.find("."+r.title),_=m.find("."+r.prev),x=m.find("."+r.next),N=m.find("."+r.close),g=!1;o.$page&&(g="#"+o.$page.attr("id"),N.attr("href",g)),s.each(function(){var t=e(this),a=t.find("."+l.conf.classNames[d].panelHeader),n=t.find("."+l.conf.classNames[d].panelPrev),s=t.find("."+l.conf.classNames[d].panelNext),i=a.html(),o=n.attr("href"),f=s.attr("href"),p=n.html(),u=s.html();i||(i=t.find("."+r.subclose).html()),i||(i=c.title),o||(o=t.find("."+r.subclose).attr("href"));var v=function(){b[i?"show":"hide"](),b.html(i),_[o?"attr":"removeAttr"]("href",o),_[o||p?"show":"hide"](),_.html(p),x[f?"attr":"removeAttr"]("href",f),x[f||u?"show":"hide"](),x.html(u)};t.on(h.open,v),t.hasClass(r.current)&&v()})}"function"==typeof this._init_buttonbars&&this._init_buttonbars(m)}},e[s].addons.push(d),e[s].defaults[d]={add:!1,content:!1,title:"Menu",update:!1},e[s].configuration.classNames[d]={panelHeader:"Header",panelNext:"Next",panelPrev:"Prev"};var r,i,h,o,f=!1}(jQuery);
/*	
 * jQuery mmenu labels addon
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
!function(e){function s(s){return"boolean"==typeof s&&(s={collapse:s}),"object"!=typeof s&&(s={}),s=e.extend(!0,{},e[n].defaults[o],s)}function l(e){return e}function a(){i=!0,t=e[n]._c,p=e[n]._d,c=e[n]._e,t.add("collapsed uncollapsed"),d=e[n].glbl}var n="mmenu",o="labels";e[n].prototype["_init_"+o]=function(n){i||a();var p=this.vars[o+"_added"];this.vars[o+"_added"]=!0,p||(this.opts[o]=s(this.opts[o]),this.conf[o]=l(this.conf[o]));var r=this.opts[o];this.conf[o],r.collapse&&(this.__refactorClass(e("li",this.$menu),this.conf.classNames[o].collapsed,"collapsed"),e("."+t.label,n).each(function(){var s=e(this),l=s.nextUntil("."+t.label,"."+t.collapsed);l.length&&(s.children("."+t.subopen).length||(s.wrapInner("<span />"),s.prepend('<a href="#" class="'+t.subopen+" "+t.fullsubopen+'" />')))}),p||d.$body.on(c.click,"."+t.label+" ."+t.subopen,function(s){s.stopPropagation(),s.preventDefault();var l=e(this).parent(),a=l.nextUntil("."+t.label,"."+t.collapsed);l.toggleClass(t.opened),a[l.hasClass(t.opened)?"addClass":"removeClass"](t.uncollapsed)}))},e[n].addons.push(o),e[n].defaults[o]={collapse:!1},e[n].configuration.classNames[o]={collapsed:"Collapsed"};var t,p,c,d,i=!1}(jQuery);
/*	
 * jQuery mmenu searchfield addon
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
!function(e){function s(e){switch(e){case 9:case 16:case 17:case 18:case 37:case 38:case 39:case 40:return!0}return!1}function n(s){return"boolean"==typeof s&&(s={add:s,search:s}),"object"!=typeof s&&(s={}),s=e.extend(!0,{},e[r].defaults[o],s),"boolean"!=typeof s.showLinksOnly&&(s.showLinksOnly="menu"==s.addTo),s}function t(e){return e}function a(){c=!0,i=e[r]._c,l=e[r]._d,d=e[r]._e,i.add("search hassearch noresultsmsg noresults nosubresults"),d.add("search reset change"),h=e[r].glbl}var r="mmenu",o="searchfield";e[r].prototype["_init_"+o]=function(r){c||a();var h=this.vars[o+"_added"];this.vars[o+"_added"]=!0,h||(this.opts[o]=n(this.opts[o]),this.conf[o]=t(this.conf[o]));var u=this,f=this.opts[o];if(this.conf[o],f.add){switch(f.addTo){case"menu":var p=this.$menu;break;case"panels":var p=r;break;default:var p=e(f.addTo,this.$menu).filter("."+i.panel)}p.length&&p.each(function(){var s=e(this),n=s.is("."+i.list)?"li":"div";if(!s.children(n+"."+i.search).length){if(s.is("."+i.menu))var t=u.$menu,a="prependTo";else var t=s.children().first(),a=t.is("."+i.subtitle)?"insertAfter":"insertBefore";e("<"+n+' class="'+i.search+'" />').append('<input placeholder="'+f.placeholder+'" type="text" autocomplete="off" />')[a](t)}f.noResults&&(s.is("."+i.menu)&&(s=s.children("."+i.panel).first()),n=s.is("."+i.list)?"li":"div",s.children(n+"."+i.noresultsmsg).length||e("<"+n+' class="'+i.noresultsmsg+'" />').html(f.noResults).appendTo(s))})}if(this.$menu.children("div."+i.search).length&&this.$menu.addClass(i.hassearch),f.search){var v=e("."+i.search,this.$menu);v.length&&v.each(function(){var n=e(this);if("menu"==f.addTo)var t=e("."+i.panel,u.$menu),a=u.$menu;else var t=n.closest("."+i.panel),a=t;var r=n.children("input"),o=u.__findAddBack(t,"."+i.list).children("li"),h=o.filter("."+i.label),c=o.not("."+i.subtitle).not("."+i.label).not("."+i.search).not("."+i.noresultsmsg),p="> a";f.showLinksOnly||(p+=", > span"),r.off(d.keyup+" "+d.change).on(d.keyup,function(e){s(e.keyCode)||n.trigger(d.search)}).on(d.change,function(){n.trigger(d.search)}),n.off(d.reset+" "+d.search).on(d.reset+" "+d.search,function(e){e.stopPropagation()}).on(d.reset,function(){n.trigger(d.search,[""])}).on(d.search,function(s,n){"string"==typeof n?r.val(n):n=r.val(),n=n.toLowerCase(),t.scrollTop(0),c.add(h).addClass(i.hidden),c.each(function(){var s=e(this);e(p,s).text().toLowerCase().indexOf(n)>-1&&s.add(s.prevAll("."+i.label).first()).removeClass(i.hidden)}),e(t.get().reverse()).each(function(s){var n=e(this),t=n.data(l.parent);if(t){var a=n.add(n.find("> ."+i.list)).find("> li").not("."+i.subtitle).not("."+i.search).not("."+i.noresultsmsg).not("."+i.label).not("."+i.hidden);a.length?t.removeClass(i.hidden).removeClass(i.nosubresults).prevAll("."+i.label).first().removeClass(i.hidden):"menu"==f.addTo&&(n.hasClass(i.opened)&&setTimeout(function(){t.trigger(d.open)},1.5*(s+1)*u.conf.openingInterval),t.addClass(i.nosubresults))}}),a[c.not("."+i.hidden).length?"removeClass":"addClass"](i.noresults),u._update()})})}},e[r].addons.push(o),e[r].defaults[o]={add:!1,addTo:"menu",search:!1,placeholder:"Search",noResults:"No results found."};var i,l,d,h,c=!1}(jQuery);
/*	
 * jQuery mmenu toggles addon
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
!function(t){function s(t){return t}function e(t){return t}function a(){r=!0,n=t[c]._c,o=t[c]._d,l=t[c]._e,n.add("toggle check"),h=t[c].glbl}var c="mmenu",i="toggles";t[c].prototype["_init_"+i]=function(c){r||a();var o=this.vars[i+"_added"];this.vars[i+"_added"]=!0,o||(this.opts[i]=s(this.opts[i]),this.conf[i]=e(this.conf[i]));var l=this;this.opts[i],this.conf[i],this.__refactorClass(t("input",c),this.conf.classNames[i].toggle,"toggle"),this.__refactorClass(t("input",c),this.conf.classNames[i].check,"check"),t("input."+n.toggle,c).add("input."+n.check,c).each(function(){var s=t(this),e=s.closest("li"),a=s.hasClass(n.toggle)?"toggle":"check",c=s.attr("id")||l.__getUniqueId();e.children('label[for="'+c+'"]').length||(s.attr("id",c),e.prepend(s),t('<label for="'+c+'" class="'+n[a]+'"></label>').insertBefore(e.children("a, span").last()))})},t[c].addons.push(i),t[c].defaults[i]={},t[c].configuration.classNames[i]={toggle:"Toggle",check:"Check"};var n,o,l,h,r=!1}(jQuery);
}));