((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
bo3(d){var x,w,v=new B.bq(new Float64Array(16))
v.bG()
for(x=d.length-1;x>0;--x){w=d[x]
if(w!=null)w.xQ(d[x-1],v)}return v},
asY(d,e,f,g){var x,w
if(d==null||e==null)return null
if(d===e)return d
x=d.z
w=e.z
if(x<w){g.push(e.r)
return A.asY(d,e.r,f,g)}else if(x>w){f.push(d.r)
return A.asY(d.r,e,f,g)}f.push(d.r)
g.push(e.r)
return A.asY(d.r,e.r,f,g)},
Dm:function Dm(){this.d=this.a=null},
K_:function K_(d,e,f,g,h,i){var _=this
_.k3=d
_.k4=e
_.ok=f
_.p1=g
_.p4=_.p3=_.p2=null
_.R8=!0
_.ay=_.ax=null
_.a=h
_.b=0
_.e=i
_.f=0
_.r=null
_.w=!0
_.y=_.x=null
_.z=0
_.as=_.Q=null},
a35:function a35(d,e,f,g){var _=this
_.J=d
_.N=null
_.F$=e
_.dy=f
_.b=_.fy=null
_.c=0
_.y=_.d=null
_.z=!0
_.Q=null
_.as=!1
_.at=null
_.ay=$
_.ch=g
_.CW=!1
_.cx=$
_.cy=!0
_.db=!1
_.dx=$},
a31:function a31(d,e,f,g,h,i,j,k){var _=this
_.J=d
_.N=e
_.aC=f
_.bc=g
_.bW=h
_.F$=i
_.dy=j
_.b=_.fy=null
_.c=0
_.y=_.d=null
_.z=!0
_.Q=null
_.as=!1
_.at=null
_.ay=$
_.ch=k
_.CW=!1
_.cx=$
_.cy=!0
_.db=!1
_.dx=$},
aG0:function aG0(d){this.a=d},
bhA(d,e,f,g,h,i,j,k,l,m){return new A.xY(g,h,!1,d,m,k,l,j,i,f,null)},
xY:function xY(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.c=d
_.d=e
_.e=f
_.w=g
_.x=h
_.y=i
_.z=j
_.Q=k
_.as=l
_.ax=m
_.a=n},
QV:function QV(d){var _=this
_.f=_.e=_.d=!1
_.r=d
_.c=_.a=null},
aWL:function aWL(d){this.a=d},
aWJ:function aWJ(d){this.a=d},
aWE:function aWE(d){this.a=d},
aWF:function aWF(d){this.a=d},
aWD:function aWD(d,e){this.a=d
this.b=e},
aWI:function aWI(d){this.a=d},
aWG:function aWG(d){this.a=d},
aWH:function aWH(d,e){this.a=d
this.b=e},
aWK:function aWK(d,e){this.a=d
this.b=e},
bgW(d,e,f,g){return new A.Yh(e,g,f,d,null)},
xp:function xp(d,e,f){this.e=d
this.c=e
this.a=f},
Yh:function Yh(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.x=f
_.c=g
_.a=h},
aES(d,e,f,g,h){var x=h.a,w=h.b
return new B.oh(d,e,f,g,x,w,x,w,x,w,x,w)},
Ct(d){var x=d.Y(y.n),w=x==null?null:x.w.c
return(w==null?C.ez:w).dF(d)}},D,E
B=c[0]
C=c[2]
A=a.updateHolder(c[60],A)
D=c[330]
E=c[136]
A.Dm.prototype={
a5P(d){this.a=d},
a8j(d){if(this.a===d)this.a=null},
k(d){var x=B.c9(this),w=this.a!=null?"<linked>":"<dangling>"
return"<optimized out>#"+x+"("+w+")"}}
A.K_.prototype={
RK(d){var x,w,v,u,t=this
if(t.R8){x=t.Xz()
x.toString
t.p4=B.z2(x)
t.R8=!1}if(t.p4==null)return null
w=new B.oH(new Float64Array(4))
w.Fp(d.a,d.b,0,1)
x=t.p4.X(0,w).a
v=x[0]
u=t.p1
return new B.k(v-u.a,x[1]-u.b)},
kd(d,e,f,g){var x,w=this
if(w.k3.a==null){if(w.k4)return w.pW(d,e.aa(0,w.ok),!0,g)
return!1}x=w.RK(e)
if(x==null)return!1
return w.pW(d,x,!0,g)},
Xz(){var x,w
if(this.p3==null)return null
x=this.p2
w=B.v0(-x.a,-x.b,0)
x=this.p3
x.toString
w.dr(0,x)
return w},
avI(){var x,w,v,u,t,s,r=this
r.p3=null
x=r.k3.a
if(x==null)return
w=y.A
v=B.a([x],w)
u=B.a([r],w)
A.asY(x,r,v,u)
t=A.bo3(v)
x.xQ(null,t)
w=r.p1
t.e6(w.a,w.b,0,1)
s=A.bo3(u)
if(s.k8(s)===0)return
s.dr(0,t)
r.p3=s
r.R8=!0},
gxN(){return!0},
jq(d){var x,w,v=this
if(v.k3.a==null&&!v.k4){v.p2=v.p3=null
v.R8=!0
v.si6(null)
return}v.avI()
x=v.p3
w=y.y
if(x!=null){v.p2=v.ok
v.si6(d.Eh(x.a,w.a(v.x)))
v.k6(d)
d.ba(0)}else{v.p2=null
x=v.ok
v.si6(d.Eh(B.v0(x.a,x.b,0).a,w.a(v.x)))
v.k6(d)
d.ba(0)}v.R8=!0},
xQ(d,e){var x=this.p3
if(x!=null)e.dr(0,x)
else{x=this.ok
e.dr(0,B.v0(x.a,x.b,0))}}}
A.a35.prototype={
svg(d){var x=this,w=x.J
if(w===d)return
w.d=null
x.J=d
w=x.N
if(w!=null)d.d=w
x.aN()},
glm(){return!0},
bM(){var x=this
x.tq()
x.N=x.gC(0)
x.J.d=x.gC(0)},
aE(d,e){var x=this.ch,w=x.a,v=this.J
if(w==null)x.saI(0,B.axc(v,e))
else{y.t.a(w)
w.svg(v)
w.sdg(0,e)}x=x.a
x.toString
d.mU(x,B.hX.prototype.gfK.call(this),C.p)}}
A.a31.prototype={
svg(d){if(this.J===d)return
this.J=d
this.aN()},
saiZ(d){if(this.N===d)return
this.N=d
this.aN()},
sdg(d,e){if(this.aC.l(0,e))return
this.aC=e
this.aN()},
saWb(d){if(this.bc.l(0,d))return
this.bc=d
this.aN()},
saTN(d){if(this.bW.l(0,d))return
this.bW=d
this.aN()},
av(d){this.ch.saI(0,null)
this.q2(0)},
glm(){return!0},
Xq(){var x=y.s.a(B.O.prototype.gaI.call(this,0))
x=x==null?null:x.Xz()
if(x==null){x=new B.bq(new Float64Array(16))
x.bG()}return x},
cZ(d,e){if(this.J.a==null&&!this.N)return!1
return this.dq(d,e)},
dq(d,e){return d.Cc(new A.aG0(this),e,this.Xq())},
aE(d,e){var x,w=this,v=w.J.d,u=v==null?w.aC:w.bc.J8(v).aa(0,w.bW.J8(w.gC(0))).a2(0,w.aC),t=y.s
if(t.a(B.O.prototype.gaI.call(w,0))==null)w.ch.saI(0,new A.K_(w.J,w.N,e,u,B.E(y.B,y.k),B.aH(y.e)))
else{x=t.a(B.O.prototype.gaI.call(w,0))
if(x!=null){x.k3=w.J
x.k4=w.N
x.p1=u
x.ok=e}}t=t.a(B.O.prototype.gaI.call(w,0))
t.toString
d.z0(t,B.hX.prototype.gfK.call(w),C.p,D.ak1)},
dZ(d,e){e.dr(0,this.Xq())}}
A.xY.prototype={
a4(){return new A.QV(new B.c1(null,y.z))}}
A.QV.prototype={
ah(){this.aF()
$.cQ.ao$.push(new A.aWL(this))
$.ay.N$.d.a.f.H(0,this.ga2T())},
n(){$.ay.N$.d.a.f.L(0,this.ga2T())
this.aA()},
a8M(d){this.Hn(new A.aWJ(this))},
ayD(d){if(this.c==null)return
this.a8M(d)},
app(d){if(!this.e)this.Hn(new A.aWE(this))},
apr(d){if(this.e)this.Hn(new A.aWF(this))},
apn(d){var x=this
if(x.f!==d){x.Hn(new A.aWD(x,d))
x.a.toString}},
a4l(d,e){var x,w,v,u,t,s,r=this,q=new A.aWI(r),p=new A.aWH(r,new A.aWG(r))
if(d==null){x=r.a
x.toString
w=x}else w=d
v=q.$1(w)
u=p.$1(w)
if(e!=null)e.$0()
x=r.a
x.toString
t=q.$1(x)
x=r.a
x.toString
s=p.$1(x)
if(u!==s)r.a.y.$1(s)
if(v!==t){q=r.a.z
if(q!=null)q.$1(t)}},
Hn(d){return this.a4l(null,d)},
aCY(d){return this.a4l(d,null)},
aY(d){this.b9(d)
if(this.a.c!==d.c)$.cQ.ao$.push(new A.aWK(this,d))},
gapl(){var x,w=this.c
w.toString
w=B.cU(w,C.iN)
x=w==null?null:w.CW
$label0$0:{if(C.ib===x||x==null){w=this.a.c
break $label0$0}if(C.mL===x){w=!0
break $label0$0}w=null}return w},
v(d){var x,w,v,u=this,t=null,s=u.a,r=s.as
s=s.d
x=u.gapl()
w=u.a
v=B.o9(B.rh(!1,x,w.ax,t,!0,!0,s,!0,t,u.gapm(),t,t,t,t),r,u.r,u.gapo(),u.gapq(),t)
s=w.c
if(s)r=w.w.a!==0
else r=!1
if(r)v=B.wY(w.w,v)
if(s){s=w.x
s=s!=null&&s.gca(s)}else s=!1
if(s){s=u.a.x
s.toString
v=B.a4N(v,t,s)}return v}}
A.xp.prototype={
aV(d){var x=new A.a35(this.e,null,new B.bn(),B.aH(y.d))
x.aT()
x.sbd(null)
return x},
b_(d,e){e.svg(this.e)}}
A.Yh.prototype={
aV(d){var x=new A.a31(this.e,this.f,this.x,E.a_,E.a_,null,new B.bn(),B.aH(y.d))
x.aT()
x.sbd(null)
return x},
b_(d,e){e.svg(this.e)
e.saiZ(this.f)
e.sdg(0,this.x)
e.saWb(E.a_)
e.saTN(E.a_)}}
var z=a.updateTypes(["L(xY)","~(po)","~(n5)","~(n6)","~(L)"])
A.aG0.prototype={
$2(d,e){return this.a.A1(d,e)},
$S:18}
A.aWL.prototype={
$1(d){var x=$.ay.N$.d.a.b
if(x==null)x=B.AP()
this.a.a8M(x)},
$S:3}
A.aWJ.prototype={
$0(){var x=$.ay.N$.d.a.b
switch((x==null?B.AP():x).a){case 0:x=!1
break
case 1:x=!0
break
default:x=null}this.a.d=x},
$S:0}
A.aWE.prototype={
$0(){this.a.e=!0},
$S:0}
A.aWF.prototype={
$0(){this.a.e=!1},
$S:0}
A.aWD.prototype={
$0(){this.a.f=this.b},
$S:0}
A.aWI.prototype={
$1(d){var x=this.a
return x.e&&d.c&&x.d},
$S:z+0}
A.aWG.prototype={
$1(d){var x,w=this.a.c
w.toString
w=B.cU(w,C.iN)
x=w==null?null:w.CW
$label0$0:{if(C.ib===x||x==null){w=d.c
break $label0$0}if(C.mL===x){w=!0
break $label0$0}w=null}return w},
$S:z+0}
A.aWH.prototype={
$1(d){var x=this.a
return x.f&&x.d&&this.b.$1(d)},
$S:z+0}
A.aWK.prototype={
$1(d){this.a.aCY(this.b)},
$S:3};(function installTearOffs(){var x=a._instance_1u
var w
x(w=A.QV.prototype,"ga2T","ayD",1)
x(w,"gapo","app",2)
x(w,"gapq","apr",3)
x(w,"gapm","apn",4)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(A.Dm,B.G)
x(A.K_,B.d9)
w(B.lp,[A.a35,A.a31])
x(A.aG0,B.cY)
x(A.xY,B.a3)
x(A.QV,B.a5)
w(B.bV,[A.aWL,A.aWI,A.aWG,A.aWH,A.aWK])
w(B.d6,[A.aWJ,A.aWE,A.aWF,A.aWD])
w(B.bk,[A.xp,A.Yh])})()
B.bJ(b.typeUniverse,JSON.parse('{"K_":{"d9":[],"fs":[]},"a35":{"N":[],"br":["N"],"O":[],"aS":[]},"a31":{"N":[],"br":["N"],"O":[],"aS":[]},"xY":{"a3":[],"c":[]},"QV":{"a5":["xY"]},"xp":{"bk":[],"aN":[],"c":[]},"Yh":{"bk":[],"aN":[],"c":[]}}'))
var y=(function rtii(){var x=B.A
return{d:x("d9"),n:x("yn"),A:x("l<d9>"),z:x("c1<a5<a3>>"),e:x("fs"),t:x("Do"),B:x("o"),s:x("K_?"),y:x("aO2?"),k:x("~()")}})();(function constants(){D.kQ=new B.pA(B.bvc(),B.A("pA<H>"))
D.Xr=new B.d(0.0392156862745098,0,0,0,C.e)
D.ak1=new B.P(-1/0,-1/0,1/0,1/0)})()};
(a=>{a["U/WzDPsYrm6dPImXc9rugyKfaGA="]=a.current})($__dart_deferred_initializers__);