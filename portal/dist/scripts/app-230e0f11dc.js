/******/!function(a){function e(s){if(i[s])return i[s].exports;var t=i[s]={exports:{},id:s,loaded:!1};return a[s].call(t.exports,t,t.exports,e),t.loaded=!0,t.exports}// webpackBootstrap
/******/
var i={};return e.m=a,e.c=i,e.p="",e(0)}([function(a,e,i){"use strict";var s=i(1),t=i(2),l=i(3),o=i(4),n=i(5);angular.module("wiperrPortal",["ngAnimate","ngCookies","ngTouch","ngSanitize","mgo-angular-wizard","lbServices","ngMessages","ngAria","ngResource","ui.router","toastr","ui.bootstrap.datetimepicker"]).constant("malarkey",malarkey).constant("moment",moment).config(s.config).config(t.routerConfig).run(l.runBlock).controller("HomeController",o.HomeController).directive("themeMain",n.ThemeMainDirective)},function(a,e){"use strict";function i(a,e){"ngInject";a.debugEnabled(!0),e.allowHtml=!0,e.timeOut=3e3,e.positionClass="toast-top-right",e.preventDuplicates=!0,e.progressBar=!0}i.$inject=["$logProvider","toastrConfig"],Object.defineProperty(e,"__esModule",{value:!0}),e.config=i},function(a,e){"use strict";function i(a,e){"ngInject";a.state("home",{url:"/",templateUrl:"app/home/home.html",controller:"HomeController",controllerAs:"home"}),e.otherwise("/")}i.$inject=["$stateProvider","$urlRouterProvider"],Object.defineProperty(e,"__esModule",{value:!0}),e.routerConfig=i},function(a,e){"use strict";function i(a){"ngInject";a.debug("runBlock end")}i.$inject=["$log"],Object.defineProperty(e,"__esModule",{value:!0}),e.runBlock=i},function(a,e){"use strict";function i(a,e){if(!(a instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});e.HomeController=["$log","WizardHandler","moment","$timeout",function s(a,e,t,l){"ngInject";i(this,s);var o=this;o.details={timeSlot:"",phoneNumber:"",email:"",name:"",address:"",locations:{list:["Gurgaon"],selected:"Gurgaon"}},o.displayDate=!0,o.displayBookingForm=!1,o.onSetTime=function(a){o.details.timeSlot=a,l(function(){o.displayDate=!1,l(function(){return o.displayDate=!0},100)},100),e.wizard().next()},o.toggleBookingForm=function(){o.displayBookingForm=!o.displayBookingForm},o.completeBooking=function(){a.debug("booking completed"),o.toggleBookingForm()}}]},function(a,e){"use strict";function i(){"ngInject";var a={restrict:"A",link:function(){jQuery(function(a){if(a(".loader").fadeOut("slow"),a(".go-top").length){var e=100,i=function(){var i=a(window).scrollTop();i>e?a(".go-top").addClass("show"):a(".go-top").removeClass("show")};i(),a(window).on("scroll",function(){i()}),a(".go-top").on("click",function(e){e.preventDefault(),a("html,body").animate({scrollTop:0},700)})}a("#btn_submit").click(function(){var e=a("input[name=name]").val(),i=a("input[name=email]").val(),s=a("textarea[name=message]").val(),t=!0;if(""==e&&(t=!1),""==i&&(t=!1),""==s&&(t=!1),t){var l={userName:e,userEmail:i,userMessage:s};a.post("contact_me.php",l,function(e){var i="";"error"==e.type?i='<div class="alert-danger">'+e.text+"</div>":(i='<div class="alert-success">'+e.text+"</div>",a(".form-inline input").val(""),a(".form-inline textarea").val("")),a("#result").hide().html(i).slideDown()},"json")}}),a(".form-inline input, .form-inline textarea").keyup(function(){a("#result").slideUp()}),jQuery(".fullscreenbanner").revolution({delay:15e3,startwidth:1170,startheight:500,hideThumbs:10,fullWidth:"off",fullScreen:"on",shadow:0,dottedOverlay:"none",fullScreenOffsetContainer:""}),jQuery(window).scroll(function(){jQuery(window).scrollTop()>=25?jQuery(".logo > img").attr("src","images/logo.png"):jQuery(".logo > img").attr("src","images/logo-white.png")}),a("a.page-scroll, .cbp-spmenu a").on("click",function(e){var i=a(this);a("html, body").stop().animate({scrollTop:a(i.attr("href")).offset().top},1200,"easeInOutExpo"),e.preventDefault(),a("#navigation").affix({offset:{top:50}})}),a(".number-counters").appear(function(){a(".number-counters [data-to]").each(function(){var e=a(this).attr("data-to");a(this).delay(6e3).countTo({from:50,to:e,speed:3e3,refreshInterval:50})})}),a(".some").appear(function(){a(".myStat2").circliful()}),a("#testinomial-slider").owlCarousel({autoPlay:!0,navigation:!0,slideSpeed:250,pagination:!1,navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],singleItem:!0}),a("#publication-slider").owlCarousel({autoPlay:!0,pagination:!1,navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],navigation:!0,items:3,itemsDesktop:[1199,3],itemsDesktopSmall:[979,3]});var s=a("#paralax-slider");s.owlCarousel({autoPlay:3e3,navigation:!1,singleItem:!0,transitionStyle:"fade"}),a(".project-wrapper").mixItUp(),a(".fancybox").fancybox({openEffect:"fade",closeClick:!0}),a(".fancybox-media").fancybox({openEffect:"fade",closeEffect:"none",helpers:{media:{}}}),a(".toggle-menu").jPushMenu(),a(document).on("click",function(){a(".cbp-spmenu-right").removeClass("menu-open")}),a("#menu-toggle").on("click",function(e){e.stopPropagation(),a(".cbp-spmenu-right").toggleClass("menu-open")}),a(".cbp-spmenu-right").on("click",function(a){a.stopPropagation()}),a("#bg-paralax ").parallax("50%",.3),a("#testinomial").parallax("50%",.2),a(".text-rotator").parallax("50%",.2),(new WOW).init()}),screen.width<720&&$("div, img, input, textarea, button, a").removeClass("wow")}};return a}Object.defineProperty(e,"__esModule",{value:!0}),e.ThemeMainDirective=i}]),angular.module("wiperrPortal").run(["$templateCache",function(a){a.put("app/home/home.html",'<section theme-main=""><div class=loader><div class=spinner><div class=dot1></div><div class=dot2></div></div></div><!-- Main-Navigation --><header id=main-navigation><div id=navigation data-spy=affix data-offset-top=20><div class=container><div class=row><div class=col-md-12><ul class="top-right text-right"><li><a href=# class=facebook><i class="fa fa-facebook"></i></a></li><li><a href=# class=twitter><i class="fa fa-twitter"></i></a></li><li><a href=# class=instagram><i class=icon-instagram></i></a></li></ul><nav class="navbar navbar-default"><div class="navbar-header page-scroll"><button type=button class="navbar-toggle collapsed" data-toggle=collapse data-target=#fixed-collapse-navbar aria-expanded=true><span class="icon-bar top-bar"></span> <span class="icon-bar middle-bar"></span> <span class="icon-bar bottom-bar"></span></button> <a class="navbar-brand logo" href=#><img src=images/logo-white.png alt=logo class=img-responsive></a></div><div id=fixed-collapse-navbar class="navbar-collapse collapse navbar-right"><ul class="nav navbar-nav"><li class=hidden><a class=page-scroll href=#page-top></a></li><li class=active><a href=#main-slider class=page-scroll>Home</a></li><li><a href=#services class=page-scroll>Services</a></li><li><a href=#features class=page-scroll>Features</a></li><li><a href=#flagship-services class=page-scroll>Flagship Services</a></li><li><a href=#subscription class=page-scroll>Subscription</a></li><li><a href=#publication class=page-scroll>Blog</a></li><li><a href=#contact class=page-scroll ng-click=home.toggleBookingForm()>Book A Wash</a></li></ul></div></nav></div></div></div></div></header><section id=main-slider><div class=tp-banner-container><div class="fullscreenbanner tp-banner"><ul><!-- SLIDE  --><li data-transition=fade data-slotamount=6 data-delay=5000><!-- MAIN IMAGE --> <img src=images/main-banner.jpg alt=slidebg1 data-bgfit=cover data-bgposition="center center"><!-- LAYER NR. 1 --><p class="tp-caption sft tp-resizeme" data-x=center data-y=200 data-speed=500 data-start=1000 data-easing=Power3.easeInOut data-elementdelay=0.1 data-endelementdelay=0.1 style="z-index: 5">Give your car</p><!-- LAYER NR. 2 --><h2 class="tp-caption sft tp-resizeme text-center" data-x=center data-y=230 data-speed=500 data-start=1500 data-easing=Power3.easeInOut data-elementdelay=0.05 data-endelementdelay=0.1 style="z-index: 9">The pampering<br>it deserves</h2><!-- LAYER NR. 3 --><p class="tp-caption sft tp-resizeme" data-x=center data-y=370 data-speed=500 data-start=2000 data-easing=Power3.easeInOut data-elementdelay=0.1 data-endelementdelay=0.1 style="z-index: 5">Affordable doorstep car cleaning services in Gurgaon & Noida</p><!-- LAYER NR. 4 --><div class="tp-caption sft tp-resizeme" data-x=center data-y=490 data-speed=500 data-start=2500 data-easing=Power3.easeInOut data-elementdelay=0.1 data-endelementdelay=0.1 data-linktoslide=next style="z-index: 12"><a href=#responsive class="btn-common btn-green bounce-white page-scroll">Request a call</a> <a href=#services class="btn-common btn-blue bounce-white page-scroll" ng-click=home.toggleBookingForm()>Book a car wash</a></div></li><!-- SLIDE  --><li data-transition=slideleft data-slotamount=7 data-delay=7000><!-- MAIN IMAGE --> <img src=images/main-banner2.jpg alt=laptopmockup_sliderdy data-bgfit=cover data-bgposition="center center"><p class="tp-caption sft tp-resizeme" data-x=right data-y=130 data-speed=500 data-start=1000 data-easing=Power3.easeInOut data-elementdelay=0.1 data-endelementdelay=0.1 style="z-index: 5">Why visit service stations</p><!-- LAYER NR. 2 --><h2 class="tp-caption fade tp-resizeme text-right" data-x=right data-y=160 data-speed=500 data-start=1500 data-easing=Power3.easeInOut data-elementdelay=0.05 data-endelementdelay=0.1 style="z-index: 9">when<br>you can</h2><!-- LAYER NR. 3 --><p class="tp-caption sft tp-resizeme" data-x=right data-y=310 data-speed=500 data-start=2000 data-easing=Power3.easeInOut data-elementdelay=0.1 data-endelementdelay=0.1 style="z-index: 5">order a car wash at home</p><div class="tp-caption fade tp-resizeme" data-x=right data-y=420 data-speed=500 data-start=2800 data-easing=Power3.easeInOut data-elementdelay=0.1 data-endelementdelay=0.1 data-linktoslide=next style="z-index: 12"><a href=#responsive class="btn-common btn-blue bounce-white page-scroll">Request a call</a> <a href=#services class="btn-common btn-green bounce-white page-scroll" ng-click=home.toggleBookingForm()>Book a car wash</a></div></li></ul></div></div></section><!--Counter--><section id=facts><h3 class=hidden>hidden</h3><div class=container-fluid><div class="row number-counters"><!-- first count item --><div class="col-md-3 col-sm-3 col-xs-12 text-center wow fadeInDown" data-wow-duration=500ms data-wow-delay=300ms><div class="counters-item green row"><i class=icon-smile></i><h2><strong data-to=125>0</strong></h2><p>Happy Customer</p></div></div><div class="col-md-3 col-sm-3 col-xs-12 text-center wow fadeInDown" data-wow-duration=500ms data-wow-delay=600ms><div class="counters-item dark_gray row"><i class=icon-icons42></i><h2><strong data-to=865>0</strong></h2><p>Lines of Codes</p></div></div><div class="col-md-3 col-sm-3 col-xs-12 text-center wow fadeInDown" data-wow-duration=500ms data-wow-delay=900ms><div class="counters-item blue row"><i class=icon-alarmclock></i><h2><strong data-to=510>0</strong></h2><p>Project Completed</p></div></div><div class="col-md-3 col-sm-3 col-xs-12 text-center wow fadeInDown" data-wow-duration=500ms data-wow-delay=1200ms><div class="counters-item green row"><i class=icon-icons9></i><h2><strong data-to=1350>0</strong></h2><p>Cup of coffees</p></div></div><!-- end first count item --></div></div></section><section class="section-padding padding" id=services><div class=container><div class=row><div class="col-md-12 text-center"><p class=title>Passionate about perfection</p><h2 class=heading>Pricing Tables</h2></div><div class=col-md-12><div class="pricing pricing_tenzin"><div class="pricing_item dark_gray"><h3 class=pricing_title>Flagship Cleaning</h3><div class=pricing_price><span class=pricing_currency>₹</span>750</div><p class=pricing_sentence>Basic | Interior & Exterior</p><ul class=pricing_list><li class=pricing_feature>Interior & Boot Vacuuming</li><li class=pricing_feature>Dashboard/Door Panels/All Plastic Parts Polishing</li><li class=pricing_feature>Seats Dusting</li><li class=pricing_feature>Exterior Shampoo</li><li class=pricing_feature>Tyre Arches Cleaning & Tyre Polishing</li><li class=pricing_feature>Window & Windshield Cleaning</li><li class=pricing_feature>Carnauba Spray on Paint</li></ul><a class="pricing_action text-center page-scroll" href=#contact>Choose plan</a></div><div class="pricing_item active"><h3 class=pricing_title>Wiperr Interior</h3><div class=pricing_price><span class=pricing_currency>₹</span>800</div><p class=pricing_sentence>Premium | Interiors</p><ul class=pricing_list><li class=pricing_feature>Interior & Boot Vacuuming</li><li class=pricing_feature>Dashboard/Door Panels/All Plastic Parts DryCleaning & Polishing</li><li class=pricing_feature>Roof/Seats/Upholstery DryCleaning</li></ul><a class="pricing_action text-center page-scroll" href=#contact>Choose plan</a></div><div class="pricing_item dark_gray"><h3 class=pricing_title>Wiperr Complete Spa</h3><div class=pricing_price><span class=pricing_currency>₹</span>1250</div><p class=pricing_sentence>Basic | Interior & Exterior</p><ul class=pricing_list><li class=pricing_feature>Interior & Boot Vacuuming</li><li class=pricing_feature>Dashboard/Door Panels/All Plastic Parts DryCleaning & Polishing</li><li class=pricing_feature>Roof/Seats/Upholstery DryCleaning</li><li class=pricing_feature>Exterior Shampoo</li><li class=pricing_feature>Tyre Arches Cleaning & Tyre Polishing</li><li class=pricing_feature>Window & Windshield Cleaning</li><li class=pricing_feature>Carnauba Spray on Paint</li></ul><a class="pricing_action text-center page-scroll" href=#contact>Choose plan</a></div><div class="pricing_item dark_gray"><h3 class=pricing_title>Wiperr Waxx Me</h3><div class=pricing_price><span class=pricing_currency>₹</span>1700</div><p class=pricing_sentence>Premium | Interior & Exterior</p><ul class=pricing_list><li class=pricing_feature>Interior & Boot Vacuuming</li><li class=pricing_feature>Dashboard/Door Panels/All Plastic Parts DryCleaning & Polishing</li><li class=pricing_feature>Roof/Seats/Upholstery DryCleaning</li><li class=pricing_feature>Exterior Shampoo</li><li class=pricing_feature>Tyre Arches Cleaning & Tyre Polishing</li><li class=pricing_feature>Window & Windshield Cleaning</li><li class=pricing_feature>Exterior Waxing using Rotor Machine</li></ul><a class="pricing_action text-center page-scroll" href=#contact>Choose plan</a></div><div class="pricing_item dark_gray"><h3 class=pricing_title>A/C Sanitization</h3><div class=pricing_price><span class=pricing_currency>₹</span>900</div><p class=pricing_sentence>Premium | A/C Vents</p><ul class=pricing_list><li class=pricing_feature>A/C Vents sanitization using superior foam based sanitizer to remove bad odours and harmful germs</li></ul><a class="pricing_action text-center page-scroll" href=#contact>Choose plan</a></div><div class="pricing_item dark_gray"><h3 class=pricing_title>Paint Protection</h3><div class=pricing_price><span class=pricing_currency>₹</span>3000</div><p class=pricing_sentence>Premium | Exteriors with paint protection</p><ul class=pricing_list><li class=pricing_feature>Exterior Shampoo</li><li class=pricing_feature>3 Step Meguair\'s Coating applied using rotor machine</li><li class=pricing_feature>Tyre Arches Cleaning & Tyre Polishing</li><li class=pricing_feature>Window & Windshield Cleaning</li><li class=pricing_feature>Protection upto 5 months</li></ul><a class="pricing_action text-center page-scroll" href=#contact>Choose plan</a></div></div></div></div></div></section><!--What We Offer--><section class=section-padding id=features style="padding-top: 70px !important"><div class=container><div class=row><div class="col-md-12 text-center wow fadeIn" data-wow-duration=500ms data-wow-delay=300ms><p class=title>Our Valued Services</p><h2 class=heading>What we Offer</h2></div><div class="col-md-4 col-sm-4 canvas-box magin30 text-center wow fadeInDown" data-wow-duration=500ms data-wow-delay=300ms><span class=text-center><i class="icon-icons9 color6"></i></span><h4 class=color6>Eco Friendly</h4><p>Negligible emission from our electric carts make our environment safer. We complete one car in less than 30 litres of water unlike service stations where gallons are lost through hose pipe system</p></div><div class="col-md-4 col-sm-4 canvas-box magin30 text-center wow fadeInDown" data-wow-duration=500ms data-wow-delay=500ms><span class=text-center><i class="icon-umbrella color1"></i></span><h4 class=color1>Branded Products</h4><p>Right from shampoo to the tyre polish, we source every product from the best in the business - Meguiar\'s (3M). The result is awesome finish to your car!</p></div><div class="col-md-4 col-sm-4 canvas-box magin30 text-center wow fadeInDown" data-wow-duration=500ms data-wow-delay=1200ms><span class=text-center><i class="icon-icons42 color1"></i></span><h4 class=color1>Affordable Plans</h4><p>We love all cars equally! One Price for All Cars. We provide affordable car cleaning / detailing services starting @ ₹750 which covers every basic aspect of car(both interiors & exteriors)</p></div><div class="col-md-4 col-sm-4 canvas-box magin30 text-center wow fadeInDown" data-wow-duration=500ms data-wow-delay=900ms><span class=text-center><i class="icon-icons96 color1"></i></span><h4 class=color1>Payment Options</h4><p>We don\'t say no to money :) Cash/Cards/Paytm Accepted</p></div><div class="col-md-4 col-sm-4 canvas-box magin30 text-center wow fadeInDown" data-wow-duration=500ms data-wow-delay=1100ms><span class=text-center><i class="icon-globe color6"></i></span><h4 class=color6>Doorstep Service</h4><p>Be it an apartment, plot or an office, we can clean a car anywhere with our own electricity and water arrangements. No Hassles !</p></div><div class="col-md-4 col-sm-4 canvas-box magin30 text-center wow fadeInDown" data-wow-duration=500ms data-wow-delay=700ms><span class=text-center><i class="icon-icons20 color6"></i></span><h4 class=color6>Trained Professionals</h4><p>All our cleaning staff is in-house and goes through an extensive training before you will see him on-board.</p></div></div></div></section><!-- What We Do Section --><section id=flagship-services class="we-do bg-grey padding"><div class=container><div class=row><div class="col-md-12 text-center wow fadeIn"><p class=title>Our Service Keeps you Happy</p><h2 class=heading>Flagship Services</h2></div><div class="col-md-3 col-sm-6 wow fadeInUp" data-wow-duration=500ms data-wow-delay=300ms><div class="do-wrap text-center"><div class="dark_gray top"></div><span class=dark_gray><i class=icon-icons9></i></span><h4>Exterior Cleaning</h4><p>Using high pressure wash, we clean every edge of the car using car shampoo and appropriate brushes. A carnauba wax solution is also applied after the wash for proper conditioning of the paint</p><a href=# class=readmore>READ MORE</a></div></div><div class="col-md-3 col-sm-6 wow fadeInUp" data-wow-duration=500ms data-wow-delay=600ms><div class="do-wrap text-center"><div class="green top"></div><span class=green><i class=icon-icons96></i></span><h4>Underhood Cleaning</h4><p>We also clean the most important part of the car which remains unnoticed to our naked eyes - the engine compartment. We wash and condition the under hood areas of the car</p><a href=# class=readmore>READ MORE</a></div></div><div class="col-md-3 col-sm-6 wow fadeInUp" data-wow-duration=500ms data-wow-delay=900ms><div class="do-wrap text-center"><div class="dark_gray top"></div><span class=dark_gray><i class=icon-icons42></i></span><h4>Vacuuming & Polishing</h4><p>Interiors are vacuumed using a 1000 Watts vacuum cleaner so that your car remains dust free. The dashboard and door panels of the cars are polished to revive the shine</p><a href=# class=readmore>READ MORE</a></div></div><div class="col-md-3 col-sm-6 wow fadeInUp" data-wow-duration=500ms data-wow-delay=1200ms><div class="do-wrap text-center"><div class="green top"></div><span class=green><i class=icon-icons9></i></span><h4>Tyre Dressing</h4><p>The tyres and surrounding areas are cleaned using high pressure washer and a tyre dresser is applied to make your car stand out from the rest</p><a href=# class=readmore>READ MORE</a></div></div></div></div></section><!-- Responsive image with left --><section id=subscription class=top-padding><div class=container-fluid><div class="row responsive-pic"><div class="col-md-6 col-sm-6 wow fadeInLeft" data-wow-duration=500ms data-wow-delay=600ms><img src=images/full-responsive.png alt="fully responsive" class=img-responsive></div><div class="container wow fadeInRight" data-wow-duration=500ms data-wow-delay=900ms><div class=row><div class="col-md-6 col-sm-6 r-test"><h3 class=magin30>Wiperr Subscription Packages</h3><p>To keep your car pampered round the clock and keep it looking new, we suggest you to go forward with your favourite packages listed below:</p><h4>Options</h4><ul class=r-feature><li>₹4500 for 3 Wiperr Wax Me</li><li>₹8000 for 12 Flagship Cleaning (M)</li><li>₹3750 for 5 Flagship Cleaning + 1 Exterior Waxing using Meguiar\'s Cut & Finish</li></ul>Call +91-9999664546 for Assistance<div class=screens><i class=icon-laptop2></i> <i class=icon-tablet2></i> <i class=icon-icons202></i></div></div></div></div></div></div></section><!-- Work Project GALLERY --><!--<section id="" class="wow fadeInUp section-padding" data-wow-duration="500ms" data-wow-delay="900ms">\n    <div class="container">\n      <div class="row">\n        <div class="col-md-12 text-center">\n          <p class="title">what we do</p>\n          <h2 class="heading">latest projects</h2>\n          <div class="work-filter">\n            <ul class="text-center">\n              <li><a href="javascript:;" data-filter="all" class="active filter">All</a></li>\n              <li><a href="javascript:;" data-filter=".brand" class="filter">Brand</a></li>\n              <li><a href="javascript:;" data-filter=".design" class="filter">Design</a></li>\n              <li><a href="javascript:;" data-filter=".graphic" class="filter">Graphic</a></li>\n              <li><a href="javascript:;" data-filter=".video" class="filter">Video</a></li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class="container-fluid project-wrapper">\n      <div class="zerogrid">\n        <div class="wrap-container clearfix">\n          <div class="row wrap-content">\n            <div class="col-1-2">\n              <div class="col-full mix work-item video">\n                <div class="wrap-col">\n                  <div class="item-container">\n                    <a class="fancybox overlay text-center" data-fancybox-group="gallery" href="images/workimg1.jpg">\n                      <div class="overlay-inner">\n                        <h4 class="base">Creative Design</h4>\n                        <div class="line"></div>\n                        <p>Print Media</p>\n                      </div>\n                    </a>\n                    <img src="images/workimg1.jpg" alt="work"/>\n                  </div>\n                </div>\n              </div>\n              <div class="col-2-4 mix work-item brand">\n                <div class="wrap-col">\n                  <div class="item-container">\n                    <a class="fancybox-media overlay text-center" href="https://player.vimeo.com/video/145241713">\n                      <div class="overlay-inner">\n                        <h4 class="base">Mobile Designs</h4>\n                        <div class="line"></div>\n                        <p>Latest Apps</p>\n                      </div>\n                    </a>\n                    <img src="images/workimg4.jpg" alt="work"/>\n                  </div>\n                </div>\n              </div>\n              <div class="col-2-4 mix work-item">\n                <div class="wrap-col">\n                  <div class="item-container">\n                    <a class="fancybox overlay text-center" data-fancybox-group="gallery" href="images/workimg5.jpg">\n                      <div class="overlay-inner">\n                        <h4 class="base">Print Designs</h4>\n                        <div class="line"></div>\n                        <p>Elements</p>\n                      </div>\n                    </a>\n                    <img src="images/workimg5.jpg" alt="work"/>  </div>\n                </div>\n              </div>\n            </div>\n\n            <div class="col-1-4 mix work-item graphic">\n              <div class="wrap-col">\n                <div class="item-container">\n                  <a class="fancybox overlay text-center" data-fancybox-group="gallery" href="images/workimg2.jpg">\n                    <div class="overlay-inner">\n                      <h4 class="base">Modern Workspace</h4>\n                      <div class="line"></div>\n                      <p>Workstations</p>\n                    </div>\n                  </a>\n                  <img src="images/workimg2.jpg" alt="work"/>\n                </div>\n              </div>\n            </div>\n            <div class="col-1-4 mix work-item design">\n              <div class="wrap-col">\n                <div class="item-container">\n                  <a class="fancybox overlay text-center" data-fancybox-group="gallery" href="images/workimg3.jpg">\n                    <div class="overlay-inner">\n                      <h4 class="base">Elegant Images</h4>\n                      <div class="line"></div>\n                      <p>Laptops</p>\n                    </div>\n                  </a>\n                  <img src="images/workimg3.jpg" alt="work"/>  </div>\n              </div>\n            </div>\n            <div class="col-1-2 mix work-item graphic">\n              <div class="wrap-col">\n                <div class="item-container">\n                  <a class="fancybox overlay text-center" data-fancybox-group="gallery" href="images/workimg6.jpg">\n                    <div class="overlay-inner">\n                      <h4 class="base">Photography</h4>\n                      <div class="line"></div>\n                      <p>Stock Collection</p>\n                    </div>\n                  </a>\n                  <img src="images/workimg6.jpg" alt="work"/>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>--><!-- Testinomials --><div style=position:relative><section id=testinomial class=padding><div class=container><div class=row><div class="col-md-12 text-center"><p class=title>People Love Our Work</p><h2 class=heading>our happy clients</h2><div id=testinomial-slider class=owl-carousel><div class=item><p>Its very easy to book an appointment for my car\'s wash on their website. Received a call in less than 10 mins. They spent good 2 hours on my car while I was busy with my family at home. Really love this doorstep service at such affordable rates. Highly recommended!</p><h5>Akanksha Priya</h5><img src=images/stars.png alt="star rating"></div><div class=item><p>After long road trip my car needed pampering and cleaning. Called few floks to get my car clean but only found Wiperr Team, professional in responding to my questions and with great price deal. As promised they have used all branded (3M) products and completed cleaning within time</p><h5>Samuel Joseph</h5><img src=images/stars.png alt="star rating"></div><div class=item><p>I am delighted with your doorstep service where in you will clean the car with pressure wash, 3M dresser, cleaning the bonnet, interiors, at Rs. 750/-. Now I don\'t have to leave my car at car care station for entire day and pay almost double.</p><img src=images/stars.png alt="star rating"></div></div></div></div></div></section></div><!-- Latest Publications --><section id=publication class="section-padding padding"><div class=container><div class=row><div class="col-md-12 text-center"><p class=title>Stay always updated</p><h2 class=heading>Our Publications</h2></div></div><div class=row><div id=publication-slider class=owl-carousel><div class=item><div class=image><a href=blog_detail.html><img src=images/publication1.jpg alt="publication Image"></a></div><h5>18 November 2015</h5><h4>Familiar idea with brand</h4><p>by <a href=#. class=name>Smith </a>- <a href=#. class=comment>5 Comments</a></p><p>Keep away from people who try to belittle your ambitions Small people always do that but the really great Friendly.</p><a href=blog.html>read more</a></div><div class=item><div class=image><a href=blog_detail.html><img src=images/publication2.jpg alt="publication Image"></a></div><h5>18 November 2015</h5><h4>Familiar idea with brand</h4><p>by <a href=blog_detail.html class=name>Smith </a>- <a href=#. class=comment>5 Comments</a></p><p>Keep away from people who try to belittle your ambitions Small people always do that but the really great Friendly.</p><a href=blog.html>read more</a></div><div class=item><div class=image><a href=blog_detail.html><img src=images/publication3.jpg alt="publication Image"></a></div><h5>18 November 2015</h5><h4>Familiar idea with brand</h4><p>by <a href=#. class=name>Smith </a>- <a href=#. class=comment>5 Comments</a></p><p>Keep away from people who try to belittle your ambitions Small people always do that but the really great Friendly.</p><a href=blog_detail.html>read more</a></div><div class=item><div class=image><a href=blog_detail.html><img src=images/publication1.jpg alt="publication Image"></a></div><h5>18 November 2015</h5><h4>Familiar idea with brand</h4><p>by <a href=#. class=name>Smith </a>- <a href=#. class=comment>5 Comments</a></p><p>Keep away from people who try to belittle your ambitions Small people always do that but the really great Friendly.</p><a href=blog.html>read more</a></div><div class=item><div class=image><a href=blog_detail.html><img src=images/publication2.jpg alt="publication Image"></a></div><h5>18 November 2015</h5><h4>Familiar idea with brand</h4><p>by <a href=#. class=name>Smith </a>- <a href=#. class=comment>5 Comments</a></p><p>Keep away from people who try to belittle your ambitions Small people always do that but the really great Friendly.</p><a href=blog.html>read more</a></div><div class=item><div class=image><a href=blog_detail.html><img src=images/publication3.jpg alt="publication Image"></a></div><h5>18 November 2015</h5><h4>Familiar idea with brand</h4><p>by <a href=#. class=name>Smith </a>- <a href=#. class=comment>5 Comments</a></p><p>Keep away from people who try to belittle your ambitions Small people always do that but the really great Friendly.</p><a href=blog.html>read more</a></div></div></div></div></section><!-- Contact Us --><section class=info-section id=contact><div class=row><div class="col-md-6 block text-center wow fadeInLeftBig" data-wow-duration=500ms data-wow-delay=300ms><div class=center><p class=title>About Us</p><h2>We\'re here</h2><p class=margen>We are a passionate bunch of guys who take car wash very seriously. Realizing the need of affordable car washing & detailing at doorstep in a dusty city like Delhi/NCR, we use advanced pressure washer and proper equipment to maintain the shine of the car. Wiperr was started as India\'s first eco-friendly daily car cleaning.</p><p><strong>Phone:</strong> +91 9999664546</p><p><strong>Email:</strong> <a href=#.>info@wiperr.com</a></p><ul class=social-link><li><a href=https://www.facebook.com/wiperrcarcare/ class=text-center><i class="fa fa-facebook"></i><span></span></a></li><li><a href=https://www.linkedin.com/company/7805008 class=text-center><i class="fa fa-linkedin"></i><span></span></a></li></ul></div></div><div class="col-md-6 block light text-center wow fadeInRightBig" data-wow-duration=500ms data-wow-delay=300ms><div class=center><p class=title>Quickly</p><h2 ng-if=home.displayBookingForm>Book a Car Wash</h2><h2 ng-if=!home.displayBookingForm>Contact Us</h2><form class=form-inline id=contact-form onsubmit="return false"><section ng-if=!home.displayBookingForm><div class=row><div class="col-md-12 center"><div id=result></div></div></div><div class=row><div class="col-md-6 col-sm-12 col-xs-12 form-group"><input type=text class=form-control placeholder="Your Name" name=name id=name required></div><div class="col-md-6 col-sm-12 col-xs-12 form-group"><input type=email class=form-control placeholder="E-mail Address" name=email id=email required></div><div class="col-xs-12 col-md-12"><textarea placeholder=Message... class=form-control name=message id=message></textarea><button type=submit class="btn-black btn-blue bounce-green" id=btn_submit>Send Message</button></div></div></section><wizard on-finish=home.completeBooking() ng-if=home.displayBookingForm><wz-step wz-title="Your Details"><div class=row><div class="col-md-6 col-sm-12 col-xs-12 form-group"><fieldset disabled><label for=locationSelect>Select Location</label><select id=locationSelect class=form-control><!-- TODO dynamically fetch these locations --><option ng-repeat="location in home.details.locations.list" ng-selected="location === home.details.locations.selected">{{location}}</option></select></fieldset></div><div class="col-md-6 col-sm-12 col-xs-12 form-group"><fieldset><label for=phoneNumber>Mobile Number</label><input type=text id=phoneNumber class=form-control placeholder="Enter 10 digit mobile number" ng-model=home.details.phoneNumber></fieldset></div></div><div class=row><div class="col-md-6 col-sm-12 col-xs-12 form-group"><fieldset><label for=email>Email</label><input type=text id=email class=form-control placeholder="Enter your email id" ng-model=home.details.email></fieldset></div><div class="col-md-6 col-sm-12 col-xs-12 form-group"><fieldset><label for=name>Name</label><input type=text id=name class=form-control placeholder="Enter your name" ng-model=home.details.name></fieldset></div></div><div class=row><fieldset><div class="col-xs-12 col-md-12"><textarea placeholder=Address... class=form-control name=address id=address ng-model=home.details.address></textarea></div></fieldset></div><div class=row><fieldset><div class=".col-md-3 .col-md-offset-3"><input class="btn btn-default" type=button value=Next wz-next></div></fieldset></div></wz-step><wz-step wz-title="Time Slot"><h1>Select a time slot <span ng-if="home.timeSlot !== \'\'">: {{home.timeSlot}}</span></h1><div class=row ng-if=home.displayDate><fieldset><div class="col-xs-12 col-md-12 center-aligner"><datetimepicker ng-model=home.details.timeSlot on-set-time="home.onSetTime(newDate, oldDate)"></datetimepicker></div></fieldset></div><div class=row><fieldset><div class="col-xs-12 col-md-12"><input class="btn btn-default" type=button value=Next wz-next></div></fieldset></div></wz-step><wz-step wz-title="More steps"><p>Select Service</p><input class="btn btn-default" type=button wz-finish value="Book now"></wz-step></wizard></form></div></div></div></section><!-- Footer--><footer class="wow fadeInUp" data-wow-duration=500ms data-wow-delay=300ms><div class=container><div class=row><div class="col-md-12 text-center"><ul class=breadcrumb><li><a href=#. class=page-scroll>Home</a></li><li><a href=#about class=page-scroll>About</a></li><li><a href=#project class=page-scroll>Portfolio</a></li><li><a href=#publication class=page-scroll>Blog</a></li><li><a href=#thinkers class=page-scroll>Team</a></li><li><a href=#contact class=page-scroll>Contact Us</a></li></ul><p>Copyright &copy; 2016-17 Wiperr. All Rights Reserved.</p></div></div></div></footer><a href=#. class="go-top text-center"><i class="fa fa-angle-double-up"></i></a></section>');
}]);
//# sourceMappingURL=../maps/scripts/app-230e0f11dc.js.map
