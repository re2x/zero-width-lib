var r="​",t={leftToRightMark:"‎",rightToLeftMark:"‏",zeroWidthNonJoiner:"‌",zeroWidthJoiner:"‍",zeroWidthNoBreakSpace:"\ufeff",zeroWidthSpace:r},n=Object.keys(t).map(function(r){return t[r]}),e=n.reduce(function(r,t,n){return r[t]=""+n,r},{});function o(t){for(var e="",o=0;o<t.length;o++){for(var i=t.codePointAt(o),f=i.toString(5),a="",h=0;h<f.length;h++)a+=n[+f.charAt(h)];e+=(o=i<65536?o:o+1)===t.length-1?a:a+r}return e}function i(t){var n="";if(0===t.length)return n;for(var o=t.split(r),i=0;i<o.length;i++){for(var f="",a=0;a<o[i].length;a++)f+=e[o[i].charAt(a)];n+=String.fromCodePoint(parseInt(f,5))}return n}function f(r,t){var n="",e=o(t);if(0===r.length)return e;for(var i=!1,f=0,a=r;f<a.length;f+=1){n+=a[f],i||(n+=e,i=!0)}return n}function a(r){for(var t="",n="",o=0,i=r;o<i.length;o+=1){var f=i[o];e[f]?n+=f:t+=f}return{vis:t,hid:n}}function h(r){return i(a(r).hid)}function u(t){for(var n="",e=0,o=t;e<o.length;e+=1){n+=o[e],n+=r}return n}export{t as zeroWidthDict,o as t2z,i as z2t,f as encode,a as extract,h as decode,u as split};
