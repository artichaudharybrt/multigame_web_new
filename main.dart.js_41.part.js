((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
bDq(d,e,f){var x,w,v,u,t,s
if(d==e)return d
if(d==null)return e.b5(0,f)
if(e==null)return d.b5(0,1-f)
x=D.bvy(d.a,d.pu(),e.a,e.pu(),f)
w=A.pd(d.d,e.d,f)
w.toString
v=A.av(d.e,e.e,f)
v.toString
v=Math.max(0,v)
u=A.av(d.f,e.f,f)
u.toString
u=Math.max(0,u)
t=f<0.5
s=t?d.r:e.r
t=t?d.c:e.c
return new C.qq(w,v,u,s,x.a,x.b,t)},
qq:function qq(d,e,f,g,h,i,j){var _=this
_.d=d
_.e=e
_.f=f
_.r=g
_.a=h
_.b=i
_.c=j},
aQX:function aQX(d){this.a=d}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[35],C)
D=c[65]
C.qq.prototype={
vN(d,e,f){var x=this,w=x.d.a5(f).Hw(e),v=x.a,u=x.pu()
x.Vp(e,f)
$.ah()
w=new A.a_P(w,v,u,x.r,x.e,x.f,null)
w.IC()
if(v.length!==u.length)A.az(A.c6('"colors" and "colorStops" arguments must have equal length.',null))
return w},
d_(d,e){return this.vN(0,e,null)},
b5(d,e){var x=this,w=x.a,v=A.ag(w).i("as<1,d>")
w=A.af(new A.as(w,new C.aQX(e),v),v.i("aW.E"))
return new C.qq(x.d,x.e,x.f,x.r,w,x.b,null)},
e6(d,e){if(y.b.b(d))return C.bDq(d,this,e)
return this.Rm(d,e)},
e7(d,e){if(y.b.b(d))return C.bDq(this,d,e)
return this.Rn(d,e)},
n(d,e){var x=this
if(e==null)return!1
if(x===e)return!0
if(J.aw(e)!==A.a6(x))return!1
return e instanceof C.qq&&e.d.n(0,x.d)&&e.e===x.e&&e.f===x.f&&e.r===x.r&&A.dY(e.a,x.a)&&A.dY(e.b,x.b)},
gH(d){var x=this,w=A.cS(x.a),v=x.b
v=v==null?null:A.cS(v)
return A.ar(x.d,x.e,x.f,x.r,x.c,w,v,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a,B.a)},
p(d){var x=this,w=A.a(["center: "+x.d.p(0),"startAngle: "+A.k3(x.e),"endAngle: "+A.k3(x.f),"colors: "+A.v(x.a)],y.h),v=x.b
if(v!=null)w.push("stops: "+A.v(v))
w.push("tileMode: "+x.r.p(0))
return"SweepGradient("+B.b.bG(w,", ")+")"}}
var z=a.updateTypes([])
C.aQX.prototype={
$1(d){var x=A.a3(null,d,this.a)
x.toString
return x},
$S:79};(function inheritance(){var x=a.inherit
x(C.qq,D.E3)
x(C.aQX,A.d8)})()
var y={h:A.a1("w<i>"),b:A.a1("qq?")}};
(a=>{a["S3fFJqKIf1r8mxLnjHT7IGgWtnE="]=a.current})($__dart_deferred_initializers__);