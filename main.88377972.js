!function(e){var o={};function n(t){if(o[t])return o[t].exports;var a=o[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=o,n.d=function(e,o,t){n.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:t})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,o){if(1&o&&(e=n(e)),8&o)return e;if(4&o&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(n.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var a in e)n.d(t,a,function(o){return e[o]}.bind(null,a));return t},n.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(o,"a",o),o},n.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},n.p="",n(n.s=2)}({2:function(e,o,n){"use strict";n.r(o);var t={age:27,name:"Arek",girlfriend:{girlfriendName:"Basia",girlfriendAge:30,marriage:!1,region:"Sieradz"}};function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}console.log("alert");var r=function(e,o){document.querySelector(e).innerHTML=o},i=document.querySelector(".section__heading--orange");console.log(i);var c=function(e,o){document.querySelector(e).classList.toggle(o)};r(".section__footer--description--js","Właśnie kończę na dziś (napisane w js)"),console.log(a(2)),console.log(a("2")),console.log("Java to nie Java script");var l={age:30,name:"Michał",girlfriend:{girlfriendName:"Marta",girlfriendAge:28,marriage:!0,region:"Sieradz"}};t.girlfriend.region==l.girlfriend.region&&console.log(!0,"Dziewczyny ".concat(t.name," i  ").concat(l.name," pochodzą z tego samego regionu")),t.age==l.age&&console.log("".concat(t.name," jest w tym samym wieku co ").concat(l.name)),t.age!==l.age&&console.log("".concat(t.name," nie jest w tym samym wieku co ").concat(l.name)),t.age<l.age&&console.log("".concat(t.name," jest młodszy od ").concat(l.name,"a")),t.age>l.age&&console.log("".concat(t.name," jest starszy od ").concat(l.name,"a")),"30"==l.age&&console.log("|| (or) To się wykona"),"30"==l.age&&console.log("&& (and) To się też wykona"),"30"!==l.age&&console.log("! (not) To się też wykona"),console.log("else if wyświetla jeżeli jest",!1,"ale spełnia inny określony parametr"),console.log("false w skrócie");console.log("false ale w jeszcze innym zapisie");document.querySelector(".heading__button--js").addEventListener("click",(function(){var e,o;r(".main__heading--js","".concat(t.name," loves functions in JS <3")),c(".main__heading--js","main__heading"),e=".main__heading--js",o="nowa-klasa-z-js",document.querySelector(e).classList.add(o)}));document.querySelector(".hamburger--js").addEventListener("click",(function(){c(".navigation--js","navigation__show"),c(".hamburger--js","hamburger--open")})),console.log(t),console.log(l)}});