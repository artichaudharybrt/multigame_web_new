((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,G,E,H,F,A={
yQ(d,e,f,g,h,i){return new A.a1Z(e,d,g,h,i,!0,null)},
a1Z:function a1Z(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
axu:function axu(d){this.a=d},
bZy(){var x,w=J.mL($.nY().a,new A.boa())
w=B.af(w,w.$ti.i("M.E"))
w.$flags=1
x=w
if(x.length!==0)return x
return B.c_(C.kI,!0,y.z)},
ku(d,e,f,g,h,i){return new A.a21(i,d,e,g,f,h,null)},
a20:function a20(d,e){this.a=d
this.b=e},
boa:function boa(){},
LJ:function LJ(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
Tf:function Tf(d){var _=this
_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=null
_.as=!0
_.at=d
_.ax=""
_.c=_.a=null},
b4W:function b4W(){},
b4X:function b4X(d){this.a=d},
b53:function b53(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b4T:function b4T(d,e,f){this.a=d
this.b=e
this.c=f},
b4U:function b4U(d){this.a=d},
b4S:function b4S(d){this.a=d},
b4Z:function b4Z(d){this.a=d},
b5_:function b5_(d){this.a=d},
b4Y:function b4Y(d,e,f){this.a=d
this.b=e
this.c=f},
b4V:function b4V(d){this.a=d},
b52:function b52(d){this.a=d},
b51:function b51(d){this.a=d},
b50:function b50(d){this.a=d},
a21:function a21(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.r=g
_.y=h
_.z=i
_.a=j},
bDa(d){var x,w
if(d==null||d.length===0)return 0
x=B.dv(d,",","")
x=B.dv(x,"\u20b9","")
w=B.Cr(C.c.S(B.dv(x," ","")))
if(w==null)return 0
return C.d.Z(w)},
bD9(d,e){var x,w,v,u,t,s,r=$.nY().a
if(d<0||d>=J.ax(r))return
x=J.N(r)
w=x.gB(r)
v=J.ig(w,y.z)
for(u=y.w,t=0;t<w;++t)v[t]=B.ao(x.h(r,t),u,u)
s=v[d]
x=J.N(s)
x.k(s,"balance",""+C.k.R(A.bDa(x.h(s,"balance"))+e,1000,9999999999))
v[d]=s
$.nY().sq(0,v)},
aPH(d,e){var x,w,v=J.ax($.nY().a)
if(v===0||e<0)return-1
x=C.d.fi(v/2)
w=d?e:x+e
return w<v?w:-1}},D,I,K
J=c[1]
B=c[0]
C=c[2]
G=c[92]
E=c[65]
H=c[97]
F=c[69]
A=a.updateHolder(c[44],A)
D=c[89]
I=c[165]
K=c[47]
A.a1Z.prototype={
u(d){var x,w=this,v=E.eR(d),u=v.a<560,t=u?6:12,s=B.bl(d,null,y.x).w,r=s.r,q=r.gdU(),p=w.r
if(p!=null){u=u?560:480
x=s.a.a-q-t*2>=u}else x=!1
u=new A.axu(r.b+4)
r=y.u
q=B.a([],r)
q.push(u.$2$isLeft(w.e,!0))
q.push(E.S(w.c,1))
q.push(u.$2$isLeft(w.f,!1))
if(x)q.push(p)
return E.P(B.a([E.S(new B.a4(new B.A(t,0,t,0),E.V(q,F.ab,C.i,F.n,0),null),1),w.d],r),F.ab,C.i,F.n)}}
A.a20.prototype={
T(){return"GameSideBotsSide."+this.b}}
A.LJ.prototype={
V(){return new A.Tf(C.bM)}}
A.Tf.prototype={
a4(){this.ag()
this.adB()
$.nY().a8(0,this.gaam())
B.aPG(!1)},
aMQ(){var x,w=this
if(w.c==null)return
x=J.e_($.nY().a,new A.b4W(),y.w).bG(0,";")
if(x===w.ax)return
w.ax=x
w.E(new A.b4X(w))},
aR(d){var x,w,v,u,t,s,r
this.b3(d)
x=this.a
w=d.w
v=x.w
u=w===v
t=d.x
s=!t&&x.x
if(!(t&&!x.x))r=!w&&v
else r=!0
if(u&&!s&&!r)return
$.at.ak$.push(new A.b53(this,!u,s,r))},
adA(d){var x,w=this,v=$.nY().a
if(d<0||d>=J.ax(v))return D.BL[w.at.cX(6)]
x=A.bDa(J.B(J.B(v,d),"balance"))
if(x>=1e7)return D.adf[w.at.cX(5)]
if(x>=5e5)return D.aei[w.at.cX(5)]
return D.BL[w.at.cX(6)]},
axd(d,e){var x,w=this,v=A.aPH(w.a.c===D.dz,d)
if(v<0)return
A.bD9(v,e)
x=w.f
if(x!=null)x.U(0)
if(w.c==null)return
w.E(new A.b4T(w,d,e))
w.f=B.c7(G.kp,new A.b4U(w))},
adB(){var x=this,w=x.d
if(w!=null)w.U(0)
x.d=null
w=x.a.w
if(!w){if(x.c!=null)x.E(new A.b4Z(x))
return}x.d=B.fu(I.zo,new A.b5_(x))},
aTm(){var x,w,v,u=this,t=u.d
if(t!=null)t.U(0)
t=u.e
if(t!=null)t.U(0)
t=u.V6().length
if(t===0)return
x=u.at
w=x.cX(t)
v=u.adA(A.aPH(u.a.c===D.dz,w))*(2+x.cX(8))
u.axd(w,v)
if(u.c==null)return
u.E(new A.b4Y(u,w,v))
u.e=B.c7(H.mI,u.gSx())},
yb(){var x=this,w=x.e
if(w!=null)w.U(0)
x.e=null
if(x.c==null)return
x.E(new A.b4V(x))},
l(){var x,w=this
$.nY().N(0,w.gaam())
x=w.d
if(x!=null)x.U(0)
x=w.e
if(x!=null)x.U(0)
x=w.f
if(x!=null)x.U(0)
w.a9()},
V6(){var x=A.bZy(),w=C.d.fi(x.length/2),v=B.ag(x).c,u=B.ep(x,0,B.fH(w,"count",y.e),v).eT(0,!1),t=B.ep(x,w,null,v).eT(0,!1)
return this.a.c===D.dz?u:t},
u(d){return new B.mB($.nY(),new A.b52(this),null,null,y.l)}}
A.a21.prototype={
u(d){var x=this,w=null,v=x.r,u=E.cP(C.Q,new B.G(v,w,E.P(B.a([x.e,new B.G(w,8,w,w),new A.LJ(x.c,x.d,v,!0,!0,x.y,x.z,w)],y.u),F.j,C.i,F.v),w),F.aq)
return u}}
var z=a.updateTypes(["~()","E2(t,R<ab<i,i>>,c?)"])
A.axu.prototype={
$2$isLeft(d,e){var x=null,w=e?F.U:G.fM
return new B.a4(new B.A(0,this.a,0,0),new B.bM(w,x,x,d,x),x)},
$S:687}
A.boa.prototype={
$1(d){var x=J.B(d,"name")
return C.c.S(x==null?"":x).length!==0},
$S:688}
A.b4W.prototype={
$1(d){var x=J.B(d,"name")
return x==null?"":x},
$S:689}
A.b4X.prototype={
$0(){return this.a.as=!0},
$S:0}
A.b53.prototype={
$1(d){var x,w=this,v=w.a
if(v.c==null)return
if(w.b)v.adB()
if(w.c&&v.a.x)v.aTm()
if(w.d){x=v.a
x=!x.x||x.w}else x=!1
if(x)v.yb()},
$S:2}
A.b4T.prototype={
$0(){var x=this.a
x.z=this.b
x.Q=this.c},
$S:0}
A.b4U.prototype={
$0(){var x=this.a
if(x.c==null)return
x.E(new A.b4S(x))},
$S:0}
A.b4S.prototype={
$0(){var x=this.a
x.Q=x.z=null},
$S:0}
A.b4Z.prototype={
$0(){this.a.r=null},
$S:0}
A.b5_.prototype={
$1(d){var x,w,v,u,t=this.a
if(t.c==null||!t.a.w)return
x=t.V6().length
if(x===0)return
w=t.at.cX(x)
v=t.adA(A.aPH(t.a.c===D.dz,w))
u=A.aPH(t.a.c===D.dz,w)
if(u<0)return
A.bD9(u,-v)},
$S:14}
A.b4Y.prototype={
$0(){var x=this.a
x.r=null
x.x=this.b
x.y=this.c},
$S:0}
A.b4V.prototype={
$0(){var x=this.a
x.y=x.x=null},
$S:0}
A.b52.prototype={
$3(d,e,f){var x,w,v,u,t,s,r,q,p
E.eR(d)
x=this.a
w=x.a.e
v=x.V6()
u=v.length
if(u===0)u=1
t=x.x
s=t==null?null:C.k.aj(t,u)
t=x.z
r=t==null?null:C.k.aj(t,u)
if(x.as)$.at.ak$.push(new A.b51(x))
t=x.a.d
q=x.as
p=x.y
return K.bsQ(q,x.Q,r,!0,t,10,null,w,v,p,s)},
$S:z+1}
A.b51.prototype={
$1(d){var x=this.a
if(x.c!=null&&x.as)x.E(new A.b50(x))},
$S:2}
A.b50.prototype={
$0(){return this.a.as=!1},
$S:0};(function installTearOffs(){var x=a._instance_0u
var w
x(w=A.Tf.prototype,"gaam","aMQ",0)
x(w,"gSx","yb",0)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.O,[A.a1Z,A.a21])
x(B.d8,[A.axu,A.boa,A.b4W,A.b53,A.b5_,A.b52,A.b51])
w(A.a20,B.lN)
w(A.LJ,B.a2)
w(A.Tf,B.a5)
x(B.er,[A.b4X,A.b4T,A.b4U,A.b4S,A.b4Z,A.b4Y,A.b4V,A.b50])})()
B.dp(b.typeUniverse,JSON.parse('{"a1Z":{"O":[],"c":[]},"LJ":{"a2":[],"c":[]},"Tf":{"a5":["LJ"]},"a21":{"O":[],"c":[]}}'))
var y={u:B.a1("w<c>"),r:B.a1("w<r>"),z:B.a1("ab<i,i>"),x:B.a1("f4"),w:B.a1("i"),l:B.a1("mB<R<ab<i,i>>>"),e:B.a1("r")};(function constants(){var x=a.makeConstList
D.dz=new A.a20(0,"left")
D.fr=new A.a20(1,"right")
D.BL=x([10,50,100,500,1000,5000],y.r)
D.adf=x([5000,1e4,25e3,5e4,1e5],y.r)
D.aei=x([1000,2500,5000,1e4,25e3],y.r)})()};
(a=>{a["iZu2lf+hSizwubFEx6l0PGSf/WY="]=a.current})($__dart_deferred_initializers__);