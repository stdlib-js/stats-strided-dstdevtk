"use strict";var i=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(t){throw (r=0, t)}};};var s=i(function(w,v){
var k=require('@stdlib/stats-strided-dvariancetk/dist').ndarray,p=require('@stdlib/math-base-special-sqrt/dist');function x(e,r,t,a,f){return p(k(e,r,t,a,f))}v.exports=x
});var d=i(function(z,n){
var j=require('@stdlib/strided-base-stride2offset/dist'),m=s();function l(e,r,t,a){return m(e,r,t,a,j(e,a))}n.exports=l
});var c=i(function(A,o){
var R=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),q=d(),_=s();R(q,"ndarray",_);o.exports=q
});var E=require("path").join,O=require('@stdlib/utils-try-require/dist'),b=require('@stdlib/assert-is-error/dist'),g=c(),u,y=O(E(__dirname,"./native.js"));b(y)?u=g:u=y;module.exports=u;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
