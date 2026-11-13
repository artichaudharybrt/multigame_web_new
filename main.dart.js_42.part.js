((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
bFa(d,e,f){var x,w,v,u,t,s
if(d==e)return d
if(d==null)return e.b3(0,f)
if(e==null)return d.b3(0,1-f)
x=D.bxb(d.a,d.pw(),e.a,e.pw(),f)
w=A.pj(d.d,e.d,f)
w.toString
v=A.ax(d.e,e.e,f)
v.toString
v=Math.max(0,v)
u=A.ax(d.f,e.f,f)
u.toString
u=Math.max(0,u)
t=f<0.5
s=t?d.r:e.r
t=t?d.c:e.c
return new C.oT(w,v,u,s,x.a,x.b,t)},
oT:function oT(d,e,f,g,h,i,j){var _=this
_.d=d
_.e=e
_.f=f
_.r=g
_.a=h
_.b=i
_.c=j},
aRT:function aRT(d){this.a=d}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[40],C)
D=c[68]
C.oT.prototype={
vW(d,e,f){var x=this,w=x.d.a6(f).HM(e),v=x.a,u=x.pw()
x.VM(e,f)
$.ai()
w=new A.a0l(w,v,u,x.r,x.e,x.f,null)
w.IT()
if(v.length!==u.length)A.aB(A.c8('"colors" and "colorStops" arguments must have equal length.',null))
return w},
cJ(d,e){return this.vW(0,e,null)},
b3(d,e){var x=this,w=x.a,v=A.aj(w).i("as<1,d>")
w=A.af(new A.as(w,new C.aRT(e),v),v.i("aX.E"))
return new C.oT(x.d,x.e,x.f,x.r,w,x.b,null)},
e9(d,e){if(y.b.b(d))return C.bFa(d,this,e)
return this.RH(d,e)},
ea(d,e){if(y.b.b(d))return C.bFa(this,d,e)
return this.RI(d,e)},
n(d,e){var x=this
if(e==null)return!1
if(x===e)return!0
if(J.av(e)!==A.a6(x))return!1
return e instanceof C.oT&&e.d.n(0,x.d)&&e.e===x.e&&e.f===x.f&&e.r===x.r&&A.dZ(e.a,x.a)&&A.dZ(e.b,x.b)},
gG(d){var x=this,w=A.cV(x.a),v=x.b
v=v==null?null:A.cV(v)
return A.ar(x.d,x.e,x.f,x.r,x.c,w,v,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
p(d){var x=this,w=A.a(["center: "+x.d.p(0),"startAngle: "+A.k8(x.e),"endAngle: "+A.k8(x.f),"colors: "+A.v(x.a)],y.h),v=x.b
if(v!=null)w.push("stops: "+A.v(v))
w.push("tileMode: "+x.r.p(0))
return"SweepGradient("+B.b.bD(w,", ")+")"}}
var z=a.updateTypes([])
C.aRT.prototype={
$1(d){var x=A.a4(null,d,this.a)
x.toString
return x},
$S:77};(function inheritance(){var x=a.inherit
x(C.oT,D.Ea)
x(C.aRT,A.cY)})()
var y={h:A.X("w<h>"),b:A.X("oT?")}};
(a=>{a["1OvdEKvCvG90NUwGxLDZA5foJIU="]=a.current})($__dart_deferred_initializers__);