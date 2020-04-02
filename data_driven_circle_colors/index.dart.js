{}(function dartProgram(){function copyProperties(a,b){var u=Object.keys(a)
for(var t=0;t<u.length;t++){var s=u[t]
b[s]=a[s]}}var z=function(){var u=function(){}
u.prototype={p:{}}
var t=new u()
if(!(t.__proto__&&t.__proto__.p===u.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var s=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(s))return true}}catch(r){}return false}()
function setFunctionNamesIfNecessary(a){function t(){};if(typeof t.name=="string")return
for(var u=0;u<a.length;u++){var t=a[u]
var s=Object.keys(t)
for(var r=0;r<s.length;r++){var q=s[r]
var p=t[q]
if(typeof p=='function')p.name=q}}}function inherit(a,b){a.prototype.constructor=a
a.prototype["$i"+a.name]=a
if(b!=null){if(z){a.prototype.__proto__=b.prototype
return}var u=Object.create(b.prototype)
copyProperties(a.prototype,u)
a.prototype=u}}function inheritMany(a,b){for(var u=0;u<b.length;u++)inherit(b[u],a)}function mixin(a,b){copyProperties(b.prototype,a.prototype)
a.prototype.constructor=a}function lazy(a,b,c,d){var u=a
a[b]=u
a[c]=function(){a[c]=function(){H.dy(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.c7"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.c7"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.c7(this,a,b,c,true,false,e).prototype
return u}:tearOffGetter(a,b,c,e,f)}var x=0
function installTearOff(a,b,c,d,e,f,g,h,i,j){var u=[]
for(var t=0;t<h.length;t++){var s=h[t]
if(typeof s=='string')s=a[s]
s.$callName=g[t]
u.push(s)}var s=u[0]
s.$R=e
s.$D=f
var r=i
if(typeof r=="number")r+=x
var q=h[0]
s.$stubName=q
var p=tearOff(u,j||0,r,c,q,d)
a[b]=p
if(c)s.$tearOff=p}function installStaticTearOff(a,b,c,d,e,f,g,h){return installTearOff(a,b,true,false,c,d,e,f,g,h)}function installInstanceTearOff(a,b,c,d,e,f,g,h,i){return installTearOff(a,b,false,c,d,e,f,g,h,i)}function setOrUpdateInterceptorsByTag(a){var u=v.interceptorsByTag
if(!u){v.interceptorsByTag=a
return}copyProperties(a,u)}function setOrUpdateLeafTags(a){var u=v.leafTags
if(!u){v.leafTags=a
return}copyProperties(a,u)}function updateTypes(a){var u=v.types
var t=u.length
u.push.apply(u,a)
return t}function updateHolder(a,b){copyProperties(b,a)
return a}var hunkHelpers=function(){var u=function(a,b,c,d,e){return function(f,g,h,i){return installInstanceTearOff(f,g,a,b,c,d,[h],i,e)}},t=function(a,b,c,d){return function(e,f,g,h){return installStaticTearOff(e,f,a,b,c,[g],h,d)}}
return{inherit:inherit,inheritMany:inheritMany,mixin:mixin,installStaticTearOff:installStaticTearOff,installInstanceTearOff:installInstanceTearOff,_instance_0u:u(0,0,null,["$0"],0),_instance_1u:u(0,1,null,["$1"],0),_instance_2u:u(0,2,null,["$2"],0),_instance_0i:u(1,0,null,["$0"],0),_instance_1i:u(1,1,null,["$1"],0),_instance_2i:u(1,2,null,["$2"],0),_static_0:t(0,null,["$0"],0),_static_1:t(1,null,["$1"],0),_static_2:t(2,null,["$2"],0),makeConstList:makeConstList,lazy:lazy,updateHolder:updateHolder,convertToFastObject:convertToFastObject,setFunctionNamesIfNecessary:setFunctionNamesIfNecessary,updateTypes:updateTypes,setOrUpdateInterceptorsByTag:setOrUpdateInterceptorsByTag,setOrUpdateLeafTags:setOrUpdateLeafTags}}()
function initializeDeferredHunk(a){x=v.types.length
a(hunkHelpers,v,w,$)}function getGlobalFromName(a){for(var u=0;u<w.length;u++){if(w[u]==C)continue
if(w[u][a])return w[u][a]}}var C={},H={bD:function bD(){},
d6:function(a,b,c,d){if(!!a.$iq)return new H.as(a,b,[c,d])
return new H.aa(a,b,[c,d])},
q:function q(){},
F:function F(){},
aH:function aH(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
aa:function aa(a,b,c){this.a=a
this.b=b
this.$ti=c},
as:function as(a,b,c){this.a=a
this.b=b
this.$ti=c},
aP:function aP(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
ab:function ab(a,b,c){this.a=a
this.b=b
this.$ti=c},
a0:function a0(a){this.a=a},
O:function(a){var u,t=H.dz(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
dm:function(a){return v.types[H.a1(a)]},
a:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.a4(a)
if(typeof u!=="string")throw H.c(H.di(a))
return u},
I:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
ac:function(a){return H.d8(a)+H.c6(H.M(a),0,null)},
d8:function(a){var u,t,s,r,q,p,o,n,m=null,l=J.j(a),k=l.constructor
if(typeof k=="function"){u=k.name
t=typeof u==="string"?u:m}else t=m
s=t==null
if(s||l===C.p||!!l.$iK){r=C.c(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?m:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
n=t.length
if(n>1&&C.e.a5(t,0)===36){if(1>n)H.bl(P.bW(1,m))
if(n>n)H.bl(P.bW(n,m))
t=t.substring(1,n)}return H.O(t)},
H:function(a,b,c){var u,t,s={}
s.a=0
u=[]
t=[]
s.a=b.length
C.a.L(u,b)
s.b=""
if(c!=null&&c.a!==0)c.t(0,new H.aU(s,t,u))
""+s.a
return J.cO(a,new H.aB(C.t,0,u,t,0))},
d9:function(a,b,c){var u,t,s,r
if(b instanceof Array)u=c==null||c.a===0
else u=!1
if(u){t=b
s=t.length
if(s===0){if(!!a.$0)return a.$0()}else if(s===1){if(!!a.$1)return a.$1(t[0])}else if(s===2){if(!!a.$2)return a.$2(t[0],t[1])}else if(s===3){if(!!a.$3)return a.$3(t[0],t[1],t[2])}else if(s===4){if(!!a.$4)return a.$4(t[0],t[1],t[2],t[3])}else if(s===5)if(!!a.$5)return a.$5(t[0],t[1],t[2],t[3],t[4])
r=a[""+"$"+s]
if(r!=null)return r.apply(a,t)}return H.d7(a,b,c)},
d7:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j
if(b!=null)u=b instanceof Array?b:P.d5(b,null)
else u=[]
t=u.length
s=a.$R
if(t<s)return H.H(a,u,c)
r=a.$D
q=r==null
p=!q?r():null
o=J.j(a)
n=o.$C
if(typeof n==="string")n=o[n]
if(q){if(c!=null&&c.a!==0)return H.H(a,u,c)
if(t===s)return n.apply(a,u)
return H.H(a,u,c)}if(p instanceof Array){if(c!=null&&c.a!==0)return H.H(a,u,c)
if(t>s+p.length)return H.H(a,u,null)
C.a.L(u,p.slice(t-s))
return n.apply(a,u)}else{if(t>s)return H.H(a,u,c)
m=Object.keys(p)
if(c==null)for(q=m.length,l=0;l<m.length;m.length===q||(0,H.bk)(m),++l)C.a.j(u,p[H.w(m[l])])
else{for(q=m.length,k=0,l=0;l<m.length;m.length===q||(0,H.bk)(m),++l){j=H.w(m[l])
if(c.B(j)){++k
C.a.j(u,c.q(0,j))}else C.a.j(u,p[j])}if(k!==c.a)return H.H(a,u,c)}return n.apply(a,u)}},
l:function(a,b){if(a==null)J.ah(a)
throw H.c(H.cw(a,b))},
cw:function(a,b){var u,t="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.x(!0,b,t,null)
u=J.ah(a)
if(b<0||b>=u)return P.d0(b,a,t,null,u)
return P.bW(b,t)},
di:function(a){return new P.x(!0,a,null,null)},
c:function(a){var u
if(a==null)a=new P.aS()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.cJ})
u.name=""}else u.toString=H.cJ
return u},
cJ:function(){return J.a4(this.dartException)},
bl:function(a){throw H.c(a)},
bk:function(a){throw H.c(P.U(a))},
cF:function(a){if(a==null||typeof a!='object')return J.P(a)
else return H.I(a)},
dl:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.m(0,a[u],a[t])}return b},
dr:function(a,b,c,d,e,f){H.E(a,"$iy")
switch(H.a1(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.cZ("Unsupported number of arguments for wrapped closure"))},
dF:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.dr)
a.$identity=u
return u},
cX:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.aX().constructor.prototype):Object.create(new H.R(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.p
if(typeof t!=="number")return t.u()
$.p=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.ch(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.cT(d,e,f)
j.$S=r
j[k]=s
for(q=s,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.ch(a,o,f)
j[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}j.$C=q
j.$R=l.$R
j.$D=l.$D
return u},
cT:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.dm,a)
if(typeof a=="function")if(b)return a
else{u=c?H.cg:H.bn
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.c("Error in functionType of tearoff")},
cU:function(a,b,c,d){var u=H.bn
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
ch:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.cW(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.cU(t,!r,u,b)
if(t===0){r=$.p
if(typeof r!=="number")return r.u()
$.p=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.S
return new Function(r+H.a(q==null?$.S=H.ai("self"):q)+";return "+p+"."+H.a(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.p
if(typeof r!=="number")return r.u()
$.p=r+1
o+=r
r="return function("+o+"){return this."
q=$.S
return new Function(r+H.a(q==null?$.S=H.ai("self"):q)+"."+H.a(u)+"("+o+");}")()},
cV:function(a,b,c,d){var u=H.bn,t=H.cg
switch(b?-1:a){case 0:throw H.c(new H.aW("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
cW:function(a,b){var u,t,s,r,q,p,o,n=$.S
if(n==null)n=$.S=H.ai("self")
u=$.cf
if(u==null)u=$.cf=H.ai("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.cV(s,!q,t,b)
if(s===1){n="return function(){return this."+H.a(n)+"."+H.a(t)+"(this."+H.a(u)+");"
u=$.p
if(typeof u!=="number")return u.u()
$.p=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.a(n)+"."+H.a(t)+"(this."+H.a(u)+", "+o+");"
u=$.p
if(typeof u!=="number")return u.u()
$.p=u+1
return new Function(n+u+"}")()},
c7:function(a,b,c,d,e,f,g){return H.cX(a,b,c,d,!!e,!!f,g)},
bn:function(a){return a.a},
cg:function(a){return a.c},
ai:function(a){var u,t,s,r=new H.R("self","target","receiver","name"),q=J.ci(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
w:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.c(H.v(a,"String"))},
dI:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.v(a,"num"))},
dD:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.c(H.v(a,"bool"))},
a1:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.c(H.v(a,"int"))},
cH:function(a,b){throw H.c(H.v(a,H.O(H.w(b).substring(2))))},
E:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.j(a)[b])return a
H.cH(a,b)},
du:function(a){if(a==null)return a
if(!!J.j(a).$iB)return a
throw H.c(H.v(a,"List<dynamic>"))},
dt:function(a,b){var u
if(a==null)return a
u=J.j(a)
if(!!u.$iB)return a
if(u[b])return a
H.cH(a,b)},
cx:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.a1(u)]
else return a.$S()}return},
c8:function(a,b){var u
if(typeof a=="function")return!0
u=H.cx(J.j(a))
if(u==null)return!1
return H.cq(u,null,b,null)},
D:function(a,b){var u,t
if(a==null)return a
if($.c4)return a
$.c4=!0
try{if(H.c8(a,b))return a
u=H.cc(b)
t=H.v(a,u)
throw H.c(t)}finally{$.c4=!1}},
v:function(a,b){return new H.aZ("TypeError: "+P.V(a)+": type '"+H.a(H.dh(a))+"' is not a subtype of type '"+b+"'")},
dh:function(a){var u,t=J.j(a)
if(!!t.$iT){u=H.cx(t)
if(u!=null)return H.cc(u)
return"Closure"}return H.ac(a)},
dy:function(a){throw H.c(new P.aq(a))},
cA:function(a){return v.getIsolateTag(a)},
t:function(a,b){a.$ti=b
return a},
M:function(a){if(a==null)return
return a.$ti},
dH:function(a,b,c){return H.a3(a["$a"+H.a(c)],H.M(b))},
c9:function(a,b,c){var u=H.a3(a["$a"+H.a(b)],H.M(a))
return u==null?null:u[c]},
b:function(a,b){var u=H.M(a)
return u==null?null:u[b]},
cc:function(a){return H.C(a,null)},
C:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.O(a[0].name)+H.c6(a,1,b)
if(typeof a=="function")return H.O(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.a1(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.l(b,t)
return H.a(b[t])}if('func' in a)return H.df(a,b)
if('futureOr' in a)return"FutureOr<"+H.C("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
df:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.t([],[P.i])
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)C.a.j(a0,"T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=b){p+=o
n=a0.length
m=n-q-1
if(m<0)return H.l(a0,m)
p=C.e.u(p,a0[m])
l=u[q]
if(l!=null&&l!==P.e)p+=" extends "+H.C(l,a0)}p+=">"}else{p=""
t=null}k=!!a.v?"void":H.C(a.ret,a0)
if("args" in a){j=a.args
for(n=j.length,i="",h="",g=0;g<n;++g,h=b){f=j[g]
i=i+h+H.C(f,a0)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(n=e.length,h="",g=0;g<n;++g,h=b){f=e[g]
i=i+h+H.C(f,a0)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(n=H.dk(d),m=n.length,h="",g=0;g<m;++g,h=b){c=H.w(n[g])
i=i+h+H.C(d[c],a0)+(" "+H.a(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
c6:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.J("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.C(p,c)}return"<"+u.h(0)+">"},
a3:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
dj:function(a,b,c,d){var u,t
if(a==null)return!1
u=H.M(a)
t=J.j(a)
if(t[b]==null)return!1
return H.ct(H.a3(t[d],u),null,c,null)},
cu:function(a,b,c,d){if(a==null)return a
if(H.dj(a,b,c,d))return a
throw H.c(H.v(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.O(b.substring(2))+H.c6(c,0,null),v.mangledGlobalNames)))},
ct:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.n(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.n(a[t],b,c[t],d))return!1
return!0},
dE:function(a,b,c){return a.apply(b,H.a3(J.j(b)["$a"+H.a(c)],H.M(b)))},
cD:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="e"||a.name==="d"||a===-1||a===-2||H.cD(u)}return!1},
cv:function(a,b){var u,t
if(a==null)return b==null||b.name==="e"||b.name==="d"||b===-1||b===-2||H.cD(b)
if(b==null||b===-1||b.name==="e"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.cv(a,"type" in b?b.type:null))return!0
if('func' in b)return H.c8(a,b)}u=J.j(a).constructor
t=H.M(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.n(u,null,b,null)},
h:function(a,b){if(a!=null&&!H.cv(a,b))throw H.c(H.v(a,H.cc(b)))
return a},
n:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=null
if(a===c)return!0
if(c==null||c===-1||c.name==="e"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="e"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.n(a,b,"type" in c?c.type:l,d)
return!1}if(typeof a==="number")return H.n(b[H.a1(a)],b,c,d)
if(typeof c==="number")return!1
if(a.name==="d")return!0
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:l
if('futureOr' in a)return H.n("type" in a?a.type:l,b,s,d)
else if(H.n(a,b,s,d))return!0
else{if(!('$i'+"d_" in t.prototype))return!1
r=t.prototype["$a"+"d_"]
q=H.a3(r,u?a.slice(1):l)
return H.n(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:l,b,s,d)}}if('func' in c)return H.cq(a,b,c,d)
if('func' in a)return c.name==="y"
p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=l
if(!p)return!0
u=u?a.slice(1):l
p=c.slice(1)
return H.ct(H.a3(m,u),b,p,d)},
cq:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1
b=b==null?u:u.concat(b)
d=d==null?t:t.concat(d)}else if("bounds" in c)return!1
if(!H.n(a.ret,b,c.ret,d))return!1
s=a.args
r=c.args
q=a.opt
p=c.opt
o=s!=null?s.length:0
n=r!=null?r.length:0
m=q!=null?q.length:0
l=p!=null?p.length:0
if(o>n)return!1
if(o+m<n+l)return!1
for(k=0;k<o;++k)if(!H.n(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.n(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.n(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.dx(h,b,g,d)},
dx:function(a,b,c,d){var u,t,s,r=Object.getOwnPropertyNames(c)
for(u=r.length,t=0;t<u;++t){s=r[t]
if(!Object.hasOwnProperty.call(a,s))return!1
if(!H.n(c[s],d,a[s],b))return!1}return!0},
dG:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
dv:function(a){var u,t,s,r,q=H.w($.cC.$1(a)),p=$.bb[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.bh[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=H.w($.cs.$2(a,q))
if(q!=null){p=$.bb[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.bh[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.bj(u)
$.bb[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.bh[q]=u
return u}if(s==="-"){r=H.bj(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.cG(a,u)
if(s==="*")throw H.c(P.cm(q))
if(v.leafTags[q]===true){r=H.bj(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.cG(a,u)},
cG:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.cb(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
bj:function(a){return J.cb(a,!1,null,!!a.$idC)},
dw:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.bj(u)
else return J.cb(u,c,null,null)},
dp:function(){if(!0===$.ca)return
$.ca=!0
H.dq()},
dq:function(){var u,t,s,r,q,p,o,n
$.bb=Object.create(null)
$.bh=Object.create(null)
H.dn()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.cI.$1(q)
if(p!=null){o=H.dw(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
dn:function(){var u,t,s,r,q,p,o=C.j()
o=H.L(C.k,H.L(C.l,H.L(C.d,H.L(C.d,H.L(C.m,H.L(C.n,H.L(C.o(C.c),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.cC=new H.be(r)
$.cs=new H.bf(q)
$.cI=new H.bg(p)},
L:function(a,b){return a(b)||b},
ao:function ao(a,b){this.a=a
this.$ti=b},
an:function an(){},
ap:function ap(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
b3:function b3(a,b){this.a=a
this.$ti=b},
aB:function aB(a,b,c,d,e){var _=this
_.a=a
_.c=b
_.d=c
_.e=d
_.f=e},
aU:function aU(a,b,c){this.a=a
this.b=b
this.c=c},
T:function T(){},
aY:function aY(){},
aX:function aX(){},
R:function R(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aZ:function aZ(a){this.a=a},
aW:function aW(a){this.a=a},
a_:function a_(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
aF:function aF(a,b){this.a=a
this.b=b
this.c=null},
a7:function a7(a,b){this.a=a
this.$ti=b},
aG:function aG(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
be:function be(a){this.a=a},
bf:function bf(a){this.a=a},
bg:function bg(a){this.a=a},
dk:function(a){return J.d3(a?Object.keys(a):[],null)},
dz:function(a){return v.mangledGlobalNames[a]}},J={
cb:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cB:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.ca==null){H.dp()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.c(P.cm("Return interceptor for "+H.a(u(a,q))))}s=a.constructor
r=s==null?null:s[$.ce()]
if(r!=null)return r
r=H.dv(a)
if(r!=null)return r
if(typeof a=="function")return C.q
u=Object.getPrototypeOf(a)
if(u==null)return C.i
if(u===Object.prototype)return C.i
if(typeof s=="function"){Object.defineProperty(s,$.ce(),{value:C.b,enumerable:false,writable:true,configurable:true})
return C.b}return C.b},
d3:function(a,b){return J.ci(H.t(a,[b]))},
ci:function(a){a.fixed$length=Array
return a},
j:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.aA.prototype
return J.az.prototype}if(typeof a=="string")return J.Y.prototype
if(a==null)return J.aC.prototype
if(typeof a=="boolean")return J.ay.prototype
if(a.constructor==Array)return J.z.prototype
if(typeof a!="object"){if(typeof a=="function")return J.Z.prototype
return a}if(a instanceof P.e)return a
return J.cB(a)},
cy:function(a){if(a==null)return a
if(a.constructor==Array)return J.z.prototype
if(!(a instanceof P.e))return J.K.prototype
return a},
cz:function(a){if(typeof a=="string")return J.Y.prototype
if(a==null)return a
if(a.constructor==Array)return J.z.prototype
if(!(a instanceof P.e))return J.K.prototype
return a},
bd:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.Z.prototype
return a}if(a instanceof P.e)return a
return J.cB(a)},
cK:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.j(a).w(a,b)},
cL:function(a,b){return J.bd(a).M(a,b)},
cM:function(a,b){return J.cy(a).N(a,b)},
P:function(a){return J.j(a).gl(a)},
cN:function(a){return J.cy(a).gp(a)},
ah:function(a){return J.cz(a).gi(a)},
cO:function(a,b){return J.j(a).D(a,b)},
cP:function(a,b,c){return J.bd(a).R(a,b,c)},
cQ:function(a,b,c,d){return J.bd(a).ac(a,b,c,d)},
a4:function(a){return J.j(a).h(a)},
f:function f(){},
ay:function ay(){},
aC:function aC(){},
a6:function a6(){},
aT:function aT(){},
K:function K(){},
Z:function Z(){},
z:function z(a){this.$ti=a},
bC:function bC(a){this.$ti=a},
Q:function Q(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
aD:function aD(){},
aA:function aA(){},
az:function az(){},
Y:function Y(){}},P={
co:function(a,b){var u=a[b]
return u===a?null:u},
cp:function(a,b,c){if(c==null)a[b]=a
else a[b]=c},
db:function(){var u=Object.create(null)
P.cp(u,"<non-identifier-key>",u)
delete u["<non-identifier-key>"]
return u},
bF:function(a,b,c){return H.cu(H.dl(a,new H.a_([b,c])),"$icj",[b,c],"$acj")},
d4:function(a,b){return new H.a_([a,b])},
d2:function(a,b,c){var u,t
if(P.c5(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.t([],[P.i])
C.a.j($.k,a)
try{P.dg(a,u)}finally{if(0>=$.k.length)return H.l($.k,-1)
$.k.pop()}t=P.cl(b,H.dt(u,"$im"),", ")+c
return t.charCodeAt(0)==0?t:t},
d1:function(a,b,c){var u,t
if(P.c5(a))return b+"..."+c
u=new P.J(b)
C.a.j($.k,a)
try{t=u
t.a=P.cl(t.a,a,", ")}finally{if(0>=$.k.length)return H.l($.k,-1)
$.k.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
c5:function(a){var u,t
for(u=$.k.length,t=0;t<u;++t)if(a===$.k[t])return!0
return!1},
dg:function(a,b){var u,t,s,r,q,p,o,n=a.gp(a),m=0,l=0
while(!0){if(!(m<80||l<3))break
if(!n.k())return
u=H.a(n.gn())
C.a.j(b,u)
m+=u.length+2;++l}if(!n.k()){if(l<=5)return
if(0>=b.length)return H.l(b,-1)
t=b.pop()
if(0>=b.length)return H.l(b,-1)
s=b.pop()}else{r=n.gn();++l
if(!n.k()){if(l<=4){C.a.j(b,H.a(r))
return}t=H.a(r)
if(0>=b.length)return H.l(b,-1)
s=b.pop()
m+=t.length+2}else{q=n.gn();++l
for(;n.k();r=q,q=p){p=n.gn();++l
if(l>100){while(!0){if(!(m>75&&l>3))break
if(0>=b.length)return H.l(b,-1)
m-=b.pop().length+2;--l}C.a.j(b,"...")
return}}s=H.a(r)
t=H.a(q)
m+=t.length+s.length+4}}if(l>b.length+2){m+=5
o="..."}else o=null
while(!0){if(!(m>80&&b.length>3))break
if(0>=b.length)return H.l(b,-1)
m-=b.pop().length+2
if(o==null){m+=5
o="..."}}if(o!=null)C.a.j(b,o)
C.a.j(b,s)
C.a.j(b,t)},
aK:function(a){var u,t={}
if(P.c5(a))return"{...}"
u=new P.J("")
try{C.a.j($.k,a)
u.a+="{"
t.a=!0
a.t(0,new P.aL(t,u))
u.a+="}"}finally{if(0>=$.k.length)return H.l($.k,-1)
$.k.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
b5:function b5(){},
b8:function b8(a){var _=this
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=a},
b6:function b6(a,b){this.a=a
this.$ti=b},
b7:function b7(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
aJ:function aJ(){},
aL:function aL(a,b){this.a=a
this.b=b},
aM:function aM(){},
b9:function b9(){},
aN:function aN(){},
b0:function b0(){},
af:function af(){},
cY:function(a){if(a instanceof H.T)return a.h(0)
return"Instance of '"+H.a(H.ac(a))+"'"},
d5:function(a,b){var u,t,s=H.t([],[b])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.bk)(a),++t)C.a.j(s,H.h(a[t],b))
return s},
cl:function(a,b,c){var u=new J.Q(b,b.length,[H.b(b,0)])
if(!u.k())return a
if(c.length===0){do a+=H.a(u.d)
while(u.k())}else{a+=H.a(u.d)
for(;u.k();)a=a+c+H.a(u.d)}return a},
ck:function(a,b,c,d){return new P.aQ(a,b,c,d)},
V:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.a4(a)
if(typeof a==="string")return JSON.stringify(a)
return P.cY(a)},
cR:function(a,b,c){return new P.x(!0,a,b,c)},
bW:function(a,b){return new P.aV(null,null,!0,a,b,"Value not in range")},
d0:function(a,b,c,d,e){return new P.ax(e,!0,a,c,"Index out of range")},
cn:function(a){return new P.b1(a)},
cm:function(a){return new P.b_(a)},
U:function(a){return new P.am(a)},
cZ:function(a){return new P.b4(a)},
aR:function aR(a,b){this.a=a
this.b=b},
ag:function ag(){},
bc:function bc(){},
at:function at(){},
aS:function aS(){},
x:function x(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aV:function aV(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
ax:function ax(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
aQ:function aQ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
b1:function b1(a){this.a=a},
b_:function b_(a){this.a=a},
am:function am(a){this.a=a},
aq:function aq(a){this.a=a},
b4:function b4(a){this.a=a},
y:function y(){},
N:function N(){},
m:function m(){},
u:function u(){},
B:function B(){},
d:function d(){},
a2:function a2(){},
e:function e(){},
i:function i(){},
J:function J(a){this.a=a},
r:function r(){},
ds:function(a){if(!a.$iaI&&!0)throw H.c(new P.x(!1,null,null,"object must be a Map or Iterable"))
return P.de(a)},
de:function(a){return new P.ba(new P.b8([null,null])).$1(a)},
ba:function ba(a){this.a=a},
dd:function(a){var u,t=a.$dart_jsFunction
if(t!=null)return t
u=function(b,c){return function(){return b(c,Array.prototype.slice.apply(arguments))}}(P.dc,a)
u[$.cd()]=a
a.$dart_jsFunction=u
return u},
dc:function(a,b){H.du(b)
H.E(a,"$iy")
return H.d9(a,b,null)},
cr:function(a,b){if(typeof a=="function")return a
else return H.h(P.dd(a),b)}},W={ar:function ar(){}},O={bG:function bG(a){this.a=a},bH:function bH(){},bo:function bo(){},bs:function bs(){},W:function W(a){this.a=a},au:function au(){},av:function av(a){this.a=a},aw:function aw(a){this.a=a}},S={bM:function bM(){},br:function br(){}},B={bu:function bu(){},bv:function bv(){},bz:function bz(){}},M={a8:function a8(){},bY:function bY(){},bT:function bT(){},bU:function bU(){}},E={bS:function bS(){},bE:function bE(){},
cE:function(){var u,t
self.mapboxgl.accessToken="pk.eyJ1IjoiYW5kcmVhNjg5IiwiYSI6ImNrNGlsYjhyZDBuYXoza213aWphOGNjZmoifQ.maw_5NsXejG1DoOeOi6hlQ"
u=new mapboxgl.LngLat(-122.447303,37.753574)
u={interactive:!0,container:"map",bearingSnap:null,pitchWithRotate:!0,clickTolerance:!0,attributionControl:!0,customAttribution:null,logoPosition:"bottom-left",failIfMajorPerformanceCaveat:null,preserveDrawingBuffer:null,antialias:null,refreshExpiredTiles:null,maxBounds:null,scrollZoom:!0,minZoom:null,maxZoom:null,minPitch:null,maxPitch:null,style:"mapbox://styles/mapbox/light-v10",boxZoom:null,dragRotate:null,dragPan:!0,keyboard:!0,doubleClickZoom:!0,touchZoomRotate:!0,trackResize:!0,center:u,zoom:12,bearing:null,pitch:null,bounds:null,fitBoundsOptions:null,renderWorldCopies:null,maxTileCacheSize:null,localIdeographFontFamily:null,transformRequest:null,collectResourceTiming:null,fadeDuration:null,crossSourceCollisions:null,accessToken:null,locale:null}
u=new mapboxgl.Map(u)
t=new F.G(u,u,u)
t.R(0,"load",new E.bi(t))},
bi:function bi(a){this.a=a}},Y={A:function A(){},bJ:function bJ(){},bL:function bL(){},o:function o(){},X:function X(){}},Q={bt:function bt(){}},T={bw:function bw(){},bI:function bI(){}},K={ae:function ae(){}},L={c0:function c0(){},c_:function c_(){}},X={c2:function c2(){},c1:function c1(){},bZ:function bZ(){},
da:function(a){var u={type:"vector",url:a}
return new X.b2(u)},
b2:function b2(a){this.a=a}},Z={bp:function bp(){},bm:function bm(){},bR:function bR(){},a5:function a5(){},ak:function ak(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},al:function al(a,b){this.a=a
this.b=b},ad:function ad(){},
cS:function(a){var u=P.i,t=P.bF(["id",a.a,"type","circle"],u,null),s=P.bF(["type","vector"],u,null),r=a.b.a,q=J.bd(r)
if(q.ga2(r)!=null)s.m(0,"url",q.ga2(r))
if(q.ga1(r)!=null)s.m(0,"tiles",q.ga1(r))
t.m(0,"source",s)
t.m(0,"source-layer",a.d)
r=a.c
s=P.d4(u,null)
s.m(0,"circle-radius",r.a)
s.m(0,"circle-color",r.b)
t.m(0,"paint",s)
return t}},R={by:function by(){},bV:function bV(){},bx:function bx(){}},N={bQ:function bQ(){},bP:function bP(){},aO:function aO(){},a9:function a9(){},bX:function bX(){},bA:function bA(){}},G={bq:function bq(){}},F={c3:function c3(){},G:function G(a,b,c){this.e=a
this.c=b
this.a=c},bK:function bK(a){this.a=a}},A={bN:function bN(){},bO:function bO(){}},D={aE:function aE(){}},U={aj:function aj(){}}
var w=[C,H,J,P,W,O,S,B,M,E,Y,Q,T,K,L,X,Z,R,N,G,F,A,D,U]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.bD.prototype={}
J.f.prototype={
w:function(a,b){return a===b},
gl:function(a){return H.I(a)},
h:function(a){return"Instance of '"+H.a(H.ac(a))+"'"},
D:function(a,b){H.E(b,"$ibB")
throw H.c(P.ck(a,b.gZ(),b.ga0(),b.ga_()))}}
J.ay.prototype={
h:function(a){return String(a)},
gl:function(a){return a?519018:218159},
$iag:1}
J.aC.prototype={
w:function(a,b){return null==b},
h:function(a){return"null"},
gl:function(a){return 0},
D:function(a,b){return this.a3(a,H.E(b,"$ibB"))},
$id:1}
J.a6.prototype={
gl:function(a){return 0},
h:function(a){return String(a)},
$ia8:1,
$iae:1,
$ia5:1,
$iaO:1,
$ia9:1,
$io:1,
$iX:1,
h:function(a){return a.toString()},
ga2:function(a){return a.url},
ga1:function(a){return a.tiles},
M:function(a,b){return a.addLayer(b)},
R:function(a,b,c){return a.on(b,c)},
ac:function(a,b,c,d){return a.on(b,c,d)}}
J.aT.prototype={}
J.K.prototype={}
J.Z.prototype={
h:function(a){var u=a[$.cd()]
if(u==null)return this.a4(a)
return"JavaScript function for "+H.a(J.a4(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$iy:1}
J.z.prototype={
j:function(a,b){H.h(b,H.b(a,0))
if(!!a.fixed$length)H.bl(P.cn("add"))
a.push(b)},
L:function(a,b){var u
H.cu(b,"$im",[H.b(a,0)],"$am")
if(!!a.fixed$length)H.bl(P.cn("addAll"))
for(u=J.cN(b);u.k();)a.push(u.gn())},
P:function(a,b,c){var u=H.b(a,0)
return new H.ab(a,H.D(b,{func:1,ret:c,args:[u]}),[u,c])},
N:function(a,b){if(b>=a.length)return H.l(a,b)
return a[b]},
h:function(a){return P.d1(a,"[","]")},
gp:function(a){return new J.Q(a,a.length,[H.b(a,0)])},
gl:function(a){return H.I(a)},
gi:function(a){return a.length},
$iq:1,
$im:1,
$iB:1}
J.bC.prototype={}
J.Q.prototype={
gn:function(){return this.d},
k:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.c(H.bk(s))
u=t.c
if(u>=r){t.sW(null)
return!1}t.sW(s[u]);++t.c
return!0},
sW:function(a){this.d=H.h(a,H.b(this,0))},
$iu:1}
J.aD.prototype={
h:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gl:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
$ia2:1}
J.aA.prototype={$iN:1}
J.az.prototype={}
J.Y.prototype={
a5:function(a,b){if(b>=a.length)throw H.c(H.cw(a,b))
return a.charCodeAt(b)},
u:function(a,b){if(typeof b!=="string")throw H.c(P.cR(b,null,null))
return a+b},
h:function(a){return a},
gl:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gi:function(a){return a.length},
$ii:1}
H.q.prototype={}
H.F.prototype={
gp:function(a){return new H.aH(this,J.ah(this.a),[H.c9(this,"F",0)])},
P:function(a,b,c){var u=H.c9(this,"F",0)
return new H.ab(this,H.D(b,{func:1,ret:c,args:[u]}),[u,c])}}
H.aH.prototype={
gn:function(){return this.d},
k:function(){var u,t=this,s=t.a,r=s.a,q=J.cz(r),p=q.gi(r)
if(t.b!==p)throw H.c(P.U(s))
u=t.c
if(u>=p){t.sA(null)
return!1}t.sA(s.b.$1(q.N(r,u)));++t.c
return!0},
sA:function(a){this.d=H.h(a,H.b(this,0))},
$iu:1}
H.aa.prototype={
gp:function(a){var u=this.a
return new H.aP(u.gp(u),this.b,this.$ti)},
gi:function(a){var u=this.a
return u.gi(u)},
$am:function(a,b){return[b]}}
H.as.prototype={$iq:1,
$aq:function(a,b){return[b]}}
H.aP.prototype={
k:function(){var u=this,t=u.b
if(t.k()){u.sA(u.c.$1(t.gn()))
return!0}u.sA(null)
return!1},
gn:function(){return this.a},
sA:function(a){this.a=H.h(a,H.b(this,1))},
$au:function(a,b){return[b]}}
H.ab.prototype={
gi:function(a){return J.ah(this.a)},
N:function(a,b){return this.b.$1(J.cM(this.a,b))},
$aq:function(a,b){return[b]},
$aF:function(a,b){return[b]},
$am:function(a,b){return[b]}}
H.a0.prototype={
gl:function(a){var u=this._hashCode
if(u!=null)return u
u=536870911&664597*J.P(this.a)
this._hashCode=u
return u},
h:function(a){return'Symbol("'+H.a(this.a)+'")'},
w:function(a,b){if(b==null)return!1
return b instanceof H.a0&&this.a==b.a},
$ir:1}
H.ao.prototype={}
H.an.prototype={
h:function(a){return P.aK(this)},
$iaI:1}
H.ap.prototype={
gi:function(a){return this.a},
B:function(a){if(typeof a!=="string")return!1
if("__proto__"===a)return!1
return this.b.hasOwnProperty(a)},
q:function(a,b){if(!this.B(b))return
return this.X(b)},
X:function(a){return this.b[H.w(a)]},
t:function(a,b){var u,t,s,r,q=this,p=H.b(q,1)
H.D(b,{func:1,ret:-1,args:[H.b(q,0),p]})
u=q.c
for(t=u.length,s=0;s<t;++s){r=u[s]
b.$2(r,H.h(q.X(r),p))}},
gv:function(){return new H.b3(this,[H.b(this,0)])}}
H.b3.prototype={
gp:function(a){var u=this.a.c
return new J.Q(u,u.length,[H.b(u,0)])},
gi:function(a){return this.a.c.length}}
H.aB.prototype={
gZ:function(){var u=this.a
return u},
ga0:function(){var u,t,s,r,q=this
if(q.c===1)return C.f
u=q.d
t=u.length-q.e.length-q.f
if(t===0)return C.f
s=[]
for(r=0;r<t;++r){if(r>=u.length)return H.l(u,r)
s.push(u[r])}s.fixed$length=Array
s.immutable$list=Array
return s},
ga_:function(){var u,t,s,r,q,p,o,n,m,l=this
if(l.c!==0)return C.h
u=l.e
t=u.length
s=l.d
r=s.length-t-l.f
if(t===0)return C.h
q=P.r
p=new H.a_([q,null])
for(o=0;o<t;++o){if(o>=u.length)return H.l(u,o)
n=u[o]
m=r+o
if(m<0||m>=s.length)return H.l(s,m)
p.m(0,new H.a0(n),s[m])}return new H.ao(p,[q,null])},
$ibB:1}
H.aU.prototype={
$2:function(a,b){var u
H.w(a)
u=this.a
u.b=u.b+"$"+H.a(a)
C.a.j(this.b,a)
C.a.j(this.c,b);++u.a},
$S:2}
H.T.prototype={
h:function(a){var u=this.constructor,t=u==null?null:u.name
return"Closure '"+H.O(t==null?"unknown":t)+"'"},
$iy:1,
gad:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.aY.prototype={}
H.aX.prototype={
h:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.O(u)+"'"}}
H.R.prototype={
w:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.R))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gl:function(a){var u,t=this.c
if(t==null)u=H.I(this.a)
else u=typeof t!=="object"?J.P(t):H.I(t)
return(u^H.I(this.b))>>>0},
h:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.a(this.d)+"' of "+("Instance of '"+H.a(H.ac(u))+"'")}}
H.aZ.prototype={
h:function(a){return this.a}}
H.aW.prototype={
h:function(a){return"RuntimeError: "+this.a}}
H.a_.prototype={
gi:function(a){return this.a},
gv:function(){return new H.a7(this,[H.b(this,0)])},
B:function(a){var u,t
if(typeof a==="string"){u=this.b
if(u==null)return!1
return this.a7(u,a)}else{t=this.aa(a)
return t}},
aa:function(a){var u=this.d
if(u==null)return!1
return this.O(this.H(u,J.P(a)&0x3ffffff),a)>=0},
q:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.C(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.C(r,b)
s=t==null?null:t.b
return s}else return q.ab(b)},
ab:function(a){var u,t,s=this.d
if(s==null)return
u=this.H(s,J.P(a)&0x3ffffff)
t=this.O(u,a)
if(t<0)return
return u[t].b},
m:function(a,b,c){var u,t,s,r,q,p,o=this
H.h(b,H.b(o,0))
H.h(c,H.b(o,1))
if(typeof b==="string"){u=o.b
o.T(u==null?o.b=o.I():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=o.c
o.T(t==null?o.c=o.I():t,b,c)}else{s=o.d
if(s==null)s=o.d=o.I()
r=J.P(b)&0x3ffffff
q=o.H(s,r)
if(q==null)o.K(s,r,[o.J(b,c)])
else{p=o.O(q,b)
if(p>=0)q[p].b=c
else q.push(o.J(b,c))}}},
t:function(a,b){var u,t,s=this
H.D(b,{func:1,ret:-1,args:[H.b(s,0),H.b(s,1)]})
u=s.e
t=s.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==s.r)throw H.c(P.U(s))
u=u.c}},
T:function(a,b,c){var u,t=this
H.h(b,H.b(t,0))
H.h(c,H.b(t,1))
u=t.C(a,b)
if(u==null)t.K(a,b,t.J(b,c))
else u.b=c},
J:function(a,b){var u=this,t=new H.aF(H.h(a,H.b(u,0)),H.h(b,H.b(u,1)))
if(u.e==null)u.e=u.f=t
else u.f=u.f.c=t;++u.a
u.r=u.r+1&67108863
return t},
O:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.cK(a[t].a,b))return t
return-1},
h:function(a){return P.aK(this)},
C:function(a,b){return a[b]},
H:function(a,b){return a[b]},
K:function(a,b,c){a[b]=c},
a8:function(a,b){delete a[b]},
a7:function(a,b){return this.C(a,b)!=null},
I:function(){var u="<non-identifier-key>",t=Object.create(null)
this.K(t,u,t)
this.a8(t,u)
return t},
$icj:1}
H.aF.prototype={}
H.a7.prototype={
gi:function(a){return this.a.a},
gp:function(a){var u=this.a,t=new H.aG(u,u.r,this.$ti)
t.c=u.e
return t}}
H.aG.prototype={
gn:function(){return this.d},
k:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.U(t))
else{t=u.c
if(t==null){u.sS(null)
return!1}else{u.sS(t.a)
u.c=u.c.c
return!0}}},
sS:function(a){this.d=H.h(a,H.b(this,0))},
$iu:1}
H.be.prototype={
$1:function(a){return this.a(a)},
$S:0}
H.bf.prototype={
$2:function(a,b){return this.a(a,b)},
$S:3}
H.bg.prototype={
$1:function(a){return this.a(H.w(a))},
$S:4}
P.b5.prototype={
gi:function(a){return this.a},
gv:function(){return new P.b6(this,[H.b(this,0)])},
B:function(a){var u,t
if(typeof a==="string"&&a!=="__proto__"){u=this.b
return u==null?!1:u[a]!=null}else if(typeof a==="number"&&(a&1073741823)===a){t=this.c
return t==null?!1:t[a]!=null}else return this.a6(a)},
a6:function(a){var u=this.d
if(u==null)return!1
return this.G(this.Y(u,a),a)>=0},
q:function(a,b){var u,t,s
if(typeof b==="string"&&b!=="__proto__"){u=this.b
t=u==null?null:P.co(u,b)
return t}else if(typeof b==="number"&&(b&1073741823)===b){s=this.c
t=s==null?null:P.co(s,b)
return t}else return this.a9(b)},
a9:function(a){var u,t,s=this.d
if(s==null)return
u=this.Y(s,a)
t=this.G(u,a)
return t<0?null:u[t+1]},
m:function(a,b,c){var u,t,s,r,q=this
H.h(b,H.b(q,0))
H.h(c,H.b(q,1))
u=q.d
if(u==null)u=q.d=P.db()
t=H.cF(b)&1073741823
s=u[t]
if(s==null){P.cp(u,t,[b,c]);++q.a
q.e=null}else{r=q.G(s,b)
if(r>=0)s[r+1]=c
else{s.push(b,c);++q.a
q.e=null}}},
t:function(a,b){var u,t,s,r,q=this,p=H.b(q,0)
H.D(b,{func:1,ret:-1,args:[p,H.b(q,1)]})
u=q.V()
for(t=u.length,s=0;s<t;++s){r=u[s]
b.$2(H.h(r,p),q.q(0,r))
if(u!==q.e)throw H.c(P.U(q))}},
V:function(){var u,t,s,r,q,p,o,n,m,l,k,j=this,i=j.e
if(i!=null)return i
u=new Array(j.a)
u.fixed$length=Array
t=j.b
if(t!=null){s=Object.getOwnPropertyNames(t)
r=s.length
for(q=0,p=0;p<r;++p){u[q]=s[p];++q}}else q=0
o=j.c
if(o!=null){s=Object.getOwnPropertyNames(o)
r=s.length
for(p=0;p<r;++p){u[q]=+s[p];++q}}n=j.d
if(n!=null){s=Object.getOwnPropertyNames(n)
r=s.length
for(p=0;p<r;++p){m=n[s[p]]
l=m.length
for(k=0;k<l;k+=2){u[q]=m[k];++q}}}return j.e=u},
Y:function(a,b){return a[H.cF(b)&1073741823]}}
P.b8.prototype={
G:function(a,b){var u,t,s
if(a==null)return-1
u=a.length
for(t=0;t<u;t+=2){s=a[t]
if(s==null?b==null:s===b)return t}return-1}}
P.b6.prototype={
gi:function(a){return this.a.a},
gp:function(a){var u=this.a
return new P.b7(u,u.V(),this.$ti)}}
P.b7.prototype={
gn:function(){return this.d},
k:function(){var u=this,t=u.b,s=u.c,r=u.a
if(t!==r.e)throw H.c(P.U(r))
else if(s>=t.length){u.sU(null)
return!1}else{u.sU(t[s])
u.c=s+1
return!0}},
sU:function(a){this.d=H.h(a,H.b(this,0))},
$iu:1}
P.aJ.prototype={}
P.aL.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.a(a)
t.a=u+": "
t.a+=H.a(b)},
$S:5}
P.aM.prototype={
t:function(a,b){var u,t,s=this
H.D(b,{func:1,ret:-1,args:[H.b(s,0),H.b(s,1)]})
for(u=s.gv(),u=u.gp(u);u.k();){t=u.gn()
b.$2(t,s.q(0,t))}},
gi:function(a){var u=this.gv()
return u.gi(u)},
h:function(a){return P.aK(this)},
$iaI:1}
P.b9.prototype={}
P.aN.prototype={
q:function(a,b){return this.a.q(0,b)},
t:function(a,b){this.a.t(0,H.D(b,{func:1,ret:-1,args:[H.b(this,0),H.b(this,1)]}))},
gi:function(a){return this.a.a},
gv:function(){var u=this.a
return new H.a7(u,[H.b(u,0)])},
h:function(a){return P.aK(this.a)},
$iaI:1}
P.b0.prototype={}
P.af.prototype={}
P.aR.prototype={
$2:function(a,b){var u,t,s
H.E(a,"$ir")
u=this.b
t=this.a
u.a+=t.a
s=u.a+=H.a(a.a)
u.a=s+": "
u.a+=P.V(b)
t.a=", "},
$S:6}
P.ag.prototype={
gl:function(a){return P.e.prototype.gl.call(this,this)},
h:function(a){return this?"true":"false"}}
P.bc.prototype={}
P.at.prototype={}
P.aS.prototype={
h:function(a){return"Throw of null."}}
P.x.prototype={
gF:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gE:function(){return""},
h:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gF()+o+u
if(!q.a)return t
s=q.gE()
r=P.V(q.b)
return t+s+": "+r}}
P.aV.prototype={
gF:function(){return"RangeError"},
gE:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.a(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.a(s)
else if(t>s)u=": Not in range "+H.a(s)+".."+H.a(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.a(s)}return u}}
P.ax.prototype={
gF:function(){return"RangeError"},
gE:function(){var u,t=H.a1(this.b)
if(typeof t!=="number")return t.ae()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+u},
gi:function(a){return this.f}}
P.aQ.prototype={
h:function(a){var u,t,s,r,q,p,o,n,m=this,l={},k=new P.J("")
l.a=""
for(u=m.c,t=u.length,s=0,r="",q="";s<t;++s,q=", "){p=u[s]
k.a=r+q
r=k.a+=P.V(p)
l.a=", "}m.d.t(0,new P.aR(l,k))
o=P.V(m.a)
n=k.h(0)
u="NoSuchMethodError: method not found: '"+H.a(m.b.a)+"'\nReceiver: "+o+"\nArguments: ["+n+"]"
return u}}
P.b1.prototype={
h:function(a){return"Unsupported operation: "+this.a}}
P.b_.prototype={
h:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.am.prototype={
h:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.V(u)+"."}}
P.aq.prototype={
h:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.b4.prototype={
h:function(a){return"Exception: "+this.a}}
P.y.prototype={}
P.N.prototype={}
P.m.prototype={
P:function(a,b,c){var u=H.c9(this,"m",0)
return H.d6(this,H.D(b,{func:1,ret:c,args:[u]}),u,c)},
gi:function(a){var u,t=this.gp(this)
for(u=0;t.k();)++u
return u},
h:function(a){return P.d2(this,"(",")")}}
P.u.prototype={}
P.B.prototype={$iq:1,$im:1}
P.d.prototype={
gl:function(a){return P.e.prototype.gl.call(this,this)},
h:function(a){return"null"}}
P.a2.prototype={}
P.e.prototype={constructor:P.e,$ie:1,
w:function(a,b){return this===b},
gl:function(a){return H.I(this)},
h:function(a){return"Instance of '"+H.a(H.ac(this))+"'"},
D:function(a,b){H.E(b,"$ibB")
throw H.c(P.ck(this,b.gZ(),b.ga0(),b.ga_()))},
toString:function(){return this.h(this)}}
P.i.prototype={}
P.J.prototype={
gi:function(a){return this.a.length},
h:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
P.r.prototype={}
W.ar.prototype={
h:function(a){return String(a)}}
P.ba.prototype={
$1:function(a){var u,t,s,r,q=this.a
if(q.B(a))return q.q(0,a)
u=J.j(a)
if(!!u.$iaI){t={}
q.m(0,a,t)
for(q=a.gv(),q=q.gp(q);q.k();){s=q.gn()
t[s]=this.$1(a.q(0,s))}return t}else if(!!u.$im){r=[]
q.m(0,a,r)
C.a.L(r,u.P(a,this,null))
return r}else return a},
$S:0}
O.bG.prototype={
h:function(a){return J.a4(this.a)},
$aA:function(){return[M.a8]}}
S.bM.prototype={}
B.bu.prototype={}
B.bv.prototype={}
B.bz.prototype={}
O.bH.prototype={}
M.a8.prototype={}
E.bS.prototype={}
Y.A.prototype={}
Q.bt.prototype={}
T.bw.prototype={}
K.ae.prototype={}
L.c0.prototype={}
L.c_.prototype={}
X.c2.prototype={}
X.c1.prototype={}
X.bZ.prototype={}
Z.bp.prototype={}
Z.bm.prototype={}
Z.bR.prototype={}
Z.a5.prototype={}
R.by.prototype={}
R.bV.prototype={}
R.bx.prototype={}
T.bI.prototype={}
N.bQ.prototype={}
N.bP.prototype={}
Y.bJ.prototype={}
Y.bL.prototype={}
O.bo.prototype={}
G.bq.prototype={}
S.br.prototype={}
O.bs.prototype={}
E.bE.prototype={}
M.bY.prototype={}
F.c3.prototype={}
N.aO.prototype={}
N.a9.prototype={}
N.bX.prototype={}
N.bA.prototype={}
A.bN.prototype={}
A.bO.prototype={}
M.bT.prototype={}
M.bU.prototype={}
Y.o.prototype={}
Y.X.prototype={}
Z.ak.prototype={}
Z.al.prototype={}
D.aE.prototype={}
Z.ad.prototype={}
X.b2.prototype={
$aad:function(){return[K.ae]}}
U.aj.prototype={}
F.G.prototype={
M:function(a,b){var u=J.cL(this.e,P.ds(Z.cS(b)))
return new F.G(u,u,u)}}
F.bK.prototype={
$aA:function(){return[N.a9]}}
O.W.prototype={
$aA:function(){return[Y.o]}}
O.au.prototype={
R:function(a,b,c){var u
if(H.c8(c,{func:1,args:[O.W]})){u=J.cP(this.e,b,P.cr(new O.av(c),{func:1,ret:P.d,args:[Y.o]}))
return new F.G(u,u,u)}u=J.cQ(this.e,b,c,P.cr(new O.aw(null),{func:1,args:[Y.o]}))
return new F.G(u,u,u)},
$aA:function(){return[Y.X]}}
O.av.prototype={
$1:function(a){this.a.$1(new O.W(H.E(a,"$io")))},
$S:1}
O.aw.prototype={
$1:function(a){this.a.$1(new O.W(H.E(a,"$io")))},
$S:1}
E.bi.prototype={
$1:function(a){var u=[P.N],t=P.i,s=P.e
this.a.M(0,new Z.ak("population",X.da("mapbox://examples.8fgz4egr"),new Z.al(P.bF(["base",1.75,"stops",H.t([H.t([12,2],u),H.t([22,180],u)],[[P.B,P.N]])],t,s),H.t(["match",H.t(["get","ethnicity"],[t]),"White","#fbb03b","Black","#223b53","Hispanic","#e55e5e","Asian","#3bb2d0","#ccc"],[s])),"sf2010"))},
$S:7};(function aliases(){var u=J.f.prototype
u.a3=u.D
u=J.a6.prototype
u.a4=u.h})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.e,null)
s(P.e,[H.bD,J.f,J.Q,P.m,H.aH,P.u,H.a0,P.aN,H.an,H.aB,H.T,P.at,P.aM,H.aF,H.aG,P.b7,P.b9,P.ag,P.a2,P.b4,P.y,P.B,P.d,P.i,P.J,P.r,Y.A,D.aE,Z.al,Z.ad])
s(J.f,[J.ay,J.aC,J.a6,J.z,J.aD,J.Y,W.ar])
s(J.a6,[J.aT,J.K,J.Z,S.bM,B.bu,B.bv,B.bz,O.bH,M.a8,E.bS,Q.bt,T.bw,K.ae,L.c0,L.c_,X.c2,Y.X,X.bZ,Z.bp,Z.bm,Z.bR,R.by,R.bV,T.bI,N.bQ,N.bP,Y.bJ,Y.bL,O.bo,G.bq,S.br,O.bs,E.bE,M.bY,F.c3,N.a9,N.bX,N.bA,A.bO,M.bU,Y.o])
t(J.bC,J.z)
s(J.aD,[J.aA,J.az])
s(P.m,[H.q,H.aa,H.b3])
s(H.q,[H.F,H.a7,P.b6])
t(H.as,H.aa)
t(H.aP,P.u)
t(H.ab,H.F)
t(P.af,P.aN)
t(P.b0,P.af)
t(H.ao,P.b0)
t(H.ap,H.an)
s(H.T,[H.aU,H.aY,H.be,H.bf,H.bg,P.aL,P.aR,P.ba,O.av,O.aw,E.bi])
s(H.aY,[H.aX,H.R])
s(P.at,[H.aZ,H.aW,P.aS,P.x,P.aQ,P.b1,P.b_,P.am,P.aq])
t(P.aJ,P.aM)
s(P.aJ,[H.a_,P.b5])
t(P.b8,P.b5)
s(P.a2,[P.bc,P.N])
s(P.x,[P.aV,P.ax])
s(Y.A,[O.bG,O.au,F.bK,O.W])
s(Y.X,[X.c1,Z.a5,R.bx,A.bN,M.bT])
t(N.aO,Z.a5)
t(Z.ak,D.aE)
t(X.b2,Z.ad)
t(U.aj,O.au)
t(F.G,U.aj)
u(P.af,P.b9)})()
var v={mangledGlobalNames:{N:"int",bc:"double",a2:"num",i:"String",ag:"bool",d:"Null",B:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,args:[,]},{func:1,ret:P.d,args:[Y.o]},{func:1,ret:P.d,args:[P.i,,]},{func:1,args:[,P.i]},{func:1,args:[P.i]},{func:1,ret:P.d,args:[,,]},{func:1,ret:P.d,args:[P.r,,]},{func:1,ret:P.d,args:[,]}],interceptorsByTag:null,leafTags:null};(function constants(){var u=hunkHelpers.makeConstList
C.p=J.f.prototype
C.a=J.z.prototype
C.e=J.Y.prototype
C.q=J.Z.prototype
C.i=J.aT.prototype
C.b=J.K.prototype
C.c=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.j=function() {
  var toStringFunction = Object.prototype.toString;
  function getTag(o) {
    var s = toStringFunction.call(o);
    return s.substring(8, s.length - 1);
  }
  function getUnknownTag(object, tag) {
    if (/^HTML[A-Z].*Element$/.test(tag)) {
      var name = toStringFunction.call(object);
      if (name == "[object Object]") return null;
      return "HTMLElement";
    }
  }
  function getUnknownTagGenericBrowser(object, tag) {
    if (self.HTMLElement && object instanceof HTMLElement) return "HTMLElement";
    return getUnknownTag(object, tag);
  }
  function prototypeForTag(tag) {
    if (typeof window == "undefined") return null;
    if (typeof window[tag] == "undefined") return null;
    var constructor = window[tag];
    if (typeof constructor != "function") return null;
    return constructor.prototype;
  }
  function discriminator(tag) { return null; }
  var isBrowser = typeof navigator == "object";
  return {
    getTag: getTag,
    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,
    prototypeForTag: prototypeForTag,
    discriminator: discriminator };
}
C.o=function(getTagFallback) {
  return function(hooks) {
    if (typeof navigator != "object") return hooks;
    var ua = navigator.userAgent;
    if (ua.indexOf("DumpRenderTree") >= 0) return hooks;
    if (ua.indexOf("Chrome") >= 0) {
      function confirm(p) {
        return typeof window == "object" && window[p] && window[p].name == p;
      }
      if (confirm("Window") && confirm("HTMLElement")) return hooks;
    }
    hooks.getTag = getTagFallback;
  };
}
C.k=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.l=function(hooks) {
  var getTag = hooks.getTag;
  var prototypeForTag = hooks.prototypeForTag;
  function getTagFixed(o) {
    var tag = getTag(o);
    if (tag == "Document") {
      if (!!o.xmlVersion) return "!Document";
      return "!HTMLDocument";
    }
    return tag;
  }
  function prototypeForTagFixed(tag) {
    if (tag == "Document") return null;
    return prototypeForTag(tag);
  }
  hooks.getTag = getTagFixed;
  hooks.prototypeForTag = prototypeForTagFixed;
}
C.n=function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
  if (userAgent.indexOf("Firefox") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "GeoGeolocation": "Geolocation",
    "Location": "!Location",
    "WorkerMessageEvent": "MessageEvent",
    "XMLDocument": "!Document"};
  function getTagFirefox(o) {
    var tag = getTag(o);
    return quickMap[tag] || tag;
  }
  hooks.getTag = getTagFirefox;
}
C.m=function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
  if (userAgent.indexOf("Trident/") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "HTMLDDElement": "HTMLElement",
    "HTMLDTElement": "HTMLElement",
    "HTMLPhraseElement": "HTMLElement",
    "Position": "Geoposition"
  };
  function getTagIE(o) {
    var tag = getTag(o);
    var newTag = quickMap[tag];
    if (newTag) return newTag;
    if (tag == "Object") {
      if (window.DataView && (o instanceof window.DataView)) return "DataView";
    }
    return tag;
  }
  function prototypeForTagIE(tag) {
    var constructor = window[tag];
    if (constructor == null) return null;
    return constructor.prototype;
  }
  hooks.getTag = getTagIE;
  hooks.prototypeForTag = prototypeForTagIE;
}
C.d=function(hooks) { return hooks; }

C.f=u([])
C.r=H.t(u([]),[P.r])
C.h=new H.ap(0,{},C.r,[P.r,null])
C.t=new H.a0("call")})();(function staticFields(){$.p=0
$.S=null
$.cf=null
$.c4=!1
$.cC=null
$.cs=null
$.cI=null
$.bb=null
$.bh=null
$.ca=null
$.k=[]})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"dA","cd",function(){return H.cA("_$dart_dartClosure")})
u($,"dB","ce",function(){return H.cA("_$dart_js")})})();(function nativeSupport(){!function(){var u=function(a){var o={}
o[a]=1
return Object.keys(hunkHelpers.convertToFastObject(o))[0]}
v.getIsolateTag=function(a){return u("___dart_"+a+v.isolateTag)}
var t="___dart_isolate_tags_"
var s=Object[t]||(Object[t]=Object.create(null))
var r="_ZxYxX"
for(var q=0;;q++){var p=u(r+"_"+q+"_")
if(!(p in s)){s[p]=1
v.isolateTag=p
break}}v.dispatchPropertyName=v.getIsolateTag("dispatch_record")}()
hunkHelpers.setOrUpdateInterceptorsByTag({ApplicationCacheErrorEvent:J.f,DOMError:J.f,ErrorEvent:J.f,Event:J.f,InputEvent:J.f,MediaError:J.f,NavigatorUserMediaError:J.f,OverconstrainedError:J.f,PositionError:J.f,SensorErrorEvent:J.f,SpeechRecognitionError:J.f,SQLError:J.f,DOMException:W.ar})
hunkHelpers.setOrUpdateLeafTags({ApplicationCacheErrorEvent:true,DOMError:true,ErrorEvent:true,Event:true,InputEvent:true,MediaError:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,SensorErrorEvent:true,SpeechRecognitionError:true,SQLError:true,DOMException:true})})()
Function.prototype.$1=function(a){return this(a)}
Function.prototype.$2=function(a,b){return this(a,b)}
Function.prototype.$3=function(a,b,c){return this(a,b,c)}
Function.prototype.$0=function(){return this()}
Function.prototype.$4=function(a,b,c,d){return this(a,b,c,d)}
Function.prototype.$1$1=function(a){return this(a)}
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(E.cE,[])
else E.cE([])})})()
//# sourceMappingURL=index.dart.js.map
