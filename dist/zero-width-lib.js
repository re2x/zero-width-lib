var r="​",t={leftToRightMark:"‎",rightToLeftMark:"‏",zeroWidthNonJoiner:"‌",zeroWidthJoiner:"‍",zeroWidthNoBreakSpace:"\ufeff",zeroWidthSpace:r},e=Object.keys(t).map(function(r){return t[r]}),n=e.reduce(function(r,t,e){return r[t]=""+e,r},{});function o(t){for(var n="",o=0;o<t.length;o++){for(var i=t.codePointAt(o),f=i.toString(5),a="",h=0;h<f.length;h++)a+=e[+f.charAt(h)];n+=(o=i<65536?o:o+1)===t.length-1?a:a+r}return n}function i(t){var e="";if(0===t.length)return e;for(var o=t.split(r),i=0;i<o.length;i++){for(var f="",a=0;a<o[i].length;a++)f+=n[o[i].charAt(a)];e+=String.fromCodePoint(parseInt(f,5))}return e}function f(r){for(var t="",e="",o=0,i=r;o<i.length;o+=1){var f=i[o];n[f]?e+=f:t+=f}return{vis:t,hid:e}}exports.zeroWidthDict=t,exports.t2z=o,exports.z2t=i,exports.encode=function(r,t){var e="",n=o(t);if(0===r.length)return n;for(var i=!1,f=0,a=r;f<a.length;f+=1)e+=a[f],i||(e+=n,i=!0);return e},exports.extract=f,exports.decode=function(r){return i(f(r).hid)},exports.split=function(t){for(var e="",n=0,o=t;n<o.length;n+=1)e+=o[n],e+=r;return e};
