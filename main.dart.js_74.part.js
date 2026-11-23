((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,D,G,E,F,H,A={
c0G(){var x,w=J.mO($.o9().a,new A.bq2())
w=B.ag(w,w.$ti.i("N.E"))
w.$flags=1
x=w
if(x.length!==0)return x
return B.bF(D.kY,!0,y.z)},
kx(d,e,f,g,h,i){return new A.a2B(i,d,e,g,f,h,null)},
a2A:function a2A(d,e){this.a=d
this.b=e},
bq2:function bq2(){},
LV:function LV(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
TE:function TE(d){var _=this
_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=null
_.as=!0
_.at=d
_.ax=""
_.c=_.a=null},
b6i:function b6i(){},
b6j:function b6j(d){this.a=d},
b6q:function b6q(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b6f:function b6f(d,e,f){this.a=d
this.b=e
this.c=f},
b6g:function b6g(d){this.a=d},
b6e:function b6e(d){this.a=d},
b6l:function b6l(d){this.a=d},
b6m:function b6m(d){this.a=d},
b6k:function b6k(d,e,f){this.a=d
this.b=e
this.c=f},
b6h:function b6h(d){this.a=d},
b6p:function b6p(d){this.a=d},
b6o:function b6o(d){this.a=d},
b6n:function b6n(d){this.a=d},
a2B:function a2B(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.r=g
_.y=h
_.z=i
_.a=j},
bF9(d){var x,w
if(d==null||d.length===0)return 0
x=B.dA(d,",","")
x=B.dA(x,"\u20b9","")
w=B.xx(D.c.P(B.dA(x," ","")))
if(w==null)return 0
return D.d.Z(w)},
bF8(d,e){var x,w,v,u,t,s,r=$.o9().a
if(d<0||d>=J.au(r))return
x=J.M(r)
w=x.gB(r)
v=J.il(w,y.z)
for(u=y.w,t=0;t<w;++t)v[t]=B.an(x.h(r,t),u,u)
s=v[d]
x=J.M(s)
x.k(s,"balance",""+D.k.S(A.bF9(x.h(s,"balance"))+e,1000,9999999999))
v[d]=s
$.o9().sq(0,v)},
aQH(d,e){var x,w,v=J.au($.o9().a)
if(v===0||e<0)return-1
x=D.d.ft(v/2)
w=d?e:x+e
return w<v?w:-1}},C,I,K
J=c[1]
B=c[0]
D=c[2]
G=c[98]
E=c[68]
F=c[72]
H=c[104]
A=a.updateHolder(c[45],A)
C=c[95]
I=c[188]
K=c[47]
A.a2A.prototype={
T(){return"GameSideBotsSide."+this.b}}
A.LV.prototype={
V(){return new A.TE(D.bF)}}
A.TE.prototype={
a4(){this.ag()
this.ae8()
$.o9().a9(0,this.gaaT())
B.aQG(!1)},
aNO(){var x,w=this
if(w.c==null)return
x=J.e0($.o9().a,new A.b6i(),y.w).bD(0,";")
if(x===w.ax)return
w.ax=x
w.E(new A.b6j(w))},
aP(d){var x,w,v,u,t,s,r
this.b1(d)
x=this.a
w=d.w
v=x.w
u=w===v
t=d.x
s=!t&&x.x
if(!(t&&!x.x))r=!w&&v
else r=!0
if(u&&!s&&!r)return
$.as.ak$.push(new A.b6q(this,!u,s,r))},
ae7(d){var x,w=this,v=$.o9().a
if(d<0||d>=J.au(v))return C.Cp[w.at.cS(6)]
x=A.bF9(J.C(J.C(v,d),"balance"))
if(x>=1e7)return C.afv[w.at.cS(5)]
if(x>=5e5)return C.agA[w.at.cS(5)]
return C.Cp[w.at.cS(6)]},
axT(d,e){var x,w=this,v=A.aQH(w.a.c===C.dC,d)
if(v<0)return
A.bF8(v,e)
x=w.f
if(x!=null)x.U(0)
if(w.c==null)return
w.E(new A.b6f(w,d,e))
w.f=B.c0(G.n6,new A.b6g(w))},
ae8(){var x=this,w=x.d
if(w!=null)w.U(0)
x.d=null
w=x.a.w
if(!w){if(x.c!=null)x.E(new A.b6l(x))
return}x.d=B.fA(I.zZ,new A.b6m(x))},
aUu(){var x,w,v,u=this,t=u.d
if(t!=null)t.U(0)
t=u.e
if(t!=null)t.U(0)
t=u.VA().length
if(t===0)return
x=u.at
w=x.cS(t)
v=u.ae7(A.aQH(u.a.c===C.dC,w))*(2+x.cS(8))
u.axT(w,v)
if(u.c==null)return
u.E(new A.b6k(u,w,v))
u.e=B.c0(H.n5,u.gSX())},
ym(){var x=this,w=x.e
if(w!=null)w.U(0)
x.e=null
if(x.c==null)return
x.E(new A.b6h(x))},
l(){var x,w=this
$.o9().N(0,w.gaaT())
x=w.d
if(x!=null)x.U(0)
x=w.e
if(x!=null)x.U(0)
x=w.f
if(x!=null)x.U(0)
w.aa()},
VA(){var x=A.c0G(),w=D.d.ft(x.length/2),v=B.aj(x).c,u=B.e7(x,0,B.fm(w,"count",y.e),v).eX(0,!1),t=B.e7(x,w,null,v).eX(0,!1)
return this.a.c===C.dC?u:t},
u(d){return new B.l9($.o9(),new A.b6p(this),null,null,y.l)}}
A.a2B.prototype={
u(d){var x=this,w=null,v=x.r,u=E.cQ(D.Q,new B.G(v,w,E.P(B.a([x.e,new B.G(w,8,w,w),new A.LV(x.c,x.d,v,!0,!0,x.y,x.z,w)],y.u),F.j,D.i,F.v),w),F.ar)
return u}}
var z=a.updateTypes(["~()","E9(u,T<ab<h,h>>,c?)"])
A.bq2.prototype={
$1(d){var x=J.C(d,"name")
return D.c.P(x==null?"":x).length!==0},
$S:694}
A.b6i.prototype={
$1(d){var x=J.C(d,"name")
return x==null?"":x},
$S:695}
A.b6j.prototype={
$0(){return this.a.as=!0},
$S:0}
A.b6q.prototype={
$1(d){var x,w=this,v=w.a
if(v.c==null)return
if(w.b)v.ae8()
if(w.c&&v.a.x)v.aUu()
if(w.d){x=v.a
x=!x.x||x.w}else x=!1
if(x)v.ym()},
$S:2}
A.b6f.prototype={
$0(){var x=this.a
x.z=this.b
x.Q=this.c},
$S:0}
A.b6g.prototype={
$0(){var x=this.a
if(x.c==null)return
x.E(new A.b6e(x))},
$S:0}
A.b6e.prototype={
$0(){var x=this.a
x.Q=x.z=null},
$S:0}
A.b6l.prototype={
$0(){this.a.r=null},
$S:0}
A.b6m.prototype={
$1(d){var x,w,v,u,t=this.a
if(t.c==null||!t.a.w)return
x=t.VA().length
if(x===0)return
w=t.at.cS(x)
v=t.ae7(A.aQH(t.a.c===C.dC,w))
u=A.aQH(t.a.c===C.dC,w)
if(u<0)return
A.bF8(u,-v)},
$S:14}
A.b6k.prototype={
$0(){var x=this.a
x.r=null
x.x=this.b
x.y=this.c},
$S:0}
A.b6h.prototype={
$0(){var x=this.a
x.y=x.x=null},
$S:0}
A.b6p.prototype={
$3(d,e,f){var x,w,v,u,t,s,r,q,p
E.eG(d)
x=this.a
w=x.a.e
v=x.VA()
u=v.length
if(u===0)u=1
t=x.x
s=t==null?null:D.k.ab(t,u)
t=x.z
r=t==null?null:D.k.ab(t,u)
if(x.as)$.as.ak$.push(new A.b6o(x))
t=x.a.d
q=x.as
p=x.y
return K.buN(q,x.Q,r,!0,t,10,null,w,v,p,s)},
$S:z+1}
A.b6o.prototype={
$1(d){var x=this.a
if(x.c!=null&&x.as)x.E(new A.b6n(x))},
$S:2}
A.b6n.prototype={
$0(){return this.a.as=!1},
$S:0};(function installTearOffs(){var x=a._instance_0u
var w
x(w=A.TE.prototype,"gaaT","aNO",0)
x(w,"gSX","ym",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(A.a2A,B.lc)
w(B.cZ,[A.bq2,A.b6i,A.b6q,A.b6m,A.b6p,A.b6o])
x(A.LV,B.a3)
x(A.TE,B.a5)
w(B.ec,[A.b6j,A.b6f,A.b6g,A.b6e,A.b6l,A.b6k,A.b6h,A.b6n])
x(A.a2B,B.O)})()
B.da(b.typeUniverse,JSON.parse('{"LV":{"a3":[],"c":[]},"TE":{"a5":["LV"]},"a2B":{"O":[],"c":[]}}'))
var y={u:B.a0("w<c>"),r:B.a0("w<r>"),z:B.a0("ab<h,h>"),w:B.a0("h"),l:B.a0("l9<T<ab<h,h>>>"),e:B.a0("r")};(function constants(){var x=a.makeConstList
C.dC=new A.a2A(0,"left")
C.fA=new A.a2A(1,"right")
C.Cp=x([10,50,100,500,1000,5000],y.r)
C.afv=x([5000,1e4,25e3,5e4,1e5],y.r)
C.agA=x([1000,2500,5000,1e4,25e3],y.r)})()};
(a=>{a["zJ8ZmOFr//xVExUwW0F/e4u+OSE="]=a.current})($__dart_deferred_initializers__);