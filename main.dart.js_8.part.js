((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
M_(d,e){return new B.hH(d,e)},
hH:function hH(d,e){this.a=d
this.b=e},
bI0(d){var x,w,v,u,t
if(A.cZ(d))return d
if(typeof d=="number")return C.d.aj(d)
if(typeof d=="string")return A.cF(C.c.P(d),null)
if(y.l.b(d)){x=y.b
w=A.ao(d,x,x)
for(x=["timer","time","value","countdown","t","sec","seconds"],v=0;v<7;++v){u=w.h(0,x[v])
if(A.cZ(u))return u
if(typeof u=="number")return C.d.aj(u)
if(typeof u=="string"){t=A.cF(C.c.P(u),null)
if(t!=null)return t}}}return null},
bIj(d){if(y.i.b(d))return d
if(y.l.b(d))return A.ao(d,y.g,y.b)
return null},
bIk(d){var x,w,v,u=J.M(d),t=u.h(d,"roundId")
if(t==null)t=u.h(d,"round_id")
if(t==null)t=u.h(d,"_id")
if(t==null)t=u.h(d,"gameId")
x=t==null?u.h(d,"game_id"):t
if(x==null)x=u.h(d,"id")
w=u.h(d,"result")
v=y.l.b(w)?J.C(w,"result"):w
return A.v(u.h(d,"status"))+"|"+A.v(x)+"|"+A.v(v)}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[56],B)
B.hH.prototype={
p(d){return this.a},
$ibT:1}
var z=a.updateTypes([]);(function inheritance(){var x=a.inherit
x(B.hH,A.I)})()
A.da(b.typeUniverse,JSON.parse('{"hH":{"bT":[]}}'))
var y={i:A.X("ab<h,@>"),l:A.X("ab<@,@>"),g:A.X("h"),b:A.X("@")}};
(a=>{a["gw59SZupCLkl6jyoCeUkwnPyrrI="]=a.current})($__dart_deferred_initializers__);