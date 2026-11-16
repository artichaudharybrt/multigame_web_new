((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,D,G,E,F,H,A={
c0A(){var x,w=J.mP($.o7().a,new A.bpW())
w=B.ag(w,w.$ti.i("N.E"))
w.$flags=1
x=w
if(x.length!==0)return x
return B.bI(D.kZ,!0,y.z)},
kx(d,e,f,g,h,i){return new A.a2B(i,d,e,g,f,h,null)},
a2A:function a2A(d,e){this.a=d
this.b=e},
bpW:function bpW(){},
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
b6h:function b6h(){},
b6i:function b6i(d){this.a=d},
b6p:function b6p(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b6e:function b6e(d,e,f){this.a=d
this.b=e
this.c=f},
b6f:function b6f(d){this.a=d},
b6d:function b6d(d){this.a=d},
b6k:function b6k(d){this.a=d},
b6l:function b6l(d){this.a=d},
b6j:function b6j(d,e,f){this.a=d
this.b=e
this.c=f},
b6g:function b6g(d){this.a=d},
b6o:function b6o(d){this.a=d},
b6n:function b6n(d){this.a=d},
b6m:function b6m(d){this.a=d},
a2B:function a2B(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.r=g
_.y=h
_.z=i
_.a=j},
bF3(d){var x,w
if(d==null||d.length===0)return 0
x=B.dA(d,",","")
x=B.dA(x,"\u20b9","")
w=B.xx(D.c.O(B.dA(x," ","")))
if(w==null)return 0
return D.d.Z(w)},
bF2(d,e){var x,w,v,u,t,s,r=$.o7().a
if(d<0||d>=J.au(r))return
x=J.M(r)
w=x.gB(r)
v=J.im(w,y.z)
for(u=y.w,t=0;t<w;++t)v[t]=B.an(x.h(r,t),u,u)
s=v[d]
x=J.M(s)
x.k(s,"balance",""+D.k.S(A.bF3(x.h(s,"balance"))+e,1000,9999999999))
v[d]=s
$.o7().sq(0,v)},
aQJ(d,e){var x,w,v=J.au($.o7().a)
if(v===0||e<0)return-1
x=D.d.ft(v/2)
w=d?e:x+e
return w<v?w:-1}},C,I,K
J=c[1]
B=c[0]
D=c[2]
G=c[97]
E=c[68]
F=c[72]
H=c[103]
A=a.updateHolder(c[45],A)
C=c[94]
I=c[186]
K=c[47]
A.a2A.prototype={
T(){return"GameSideBotsSide."+this.b}}
A.LV.prototype={
V(){return new A.TE(D.bF)}}
A.TE.prototype={
a4(){this.ag()
this.ae8()
$.o7().a9(0,this.gaaU())
B.aQI(!1)},
aNM(){var x,w=this
if(w.c==null)return
x=J.e0($.o7().a,new A.b6h(),y.w).bD(0,";")
if(x===w.ax)return
w.ax=x
w.E(new A.b6i(w))},
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
$.at.am$.push(new A.b6p(this,!u,s,r))},
ae7(d){var x,w=this,v=$.o7().a
if(d<0||d>=J.au(v))return C.Cn[w.at.cS(6)]
x=A.bF3(J.C(J.C(v,d),"balance"))
if(x>=1e7)return C.aft[w.at.cS(5)]
if(x>=5e5)return C.agy[w.at.cS(5)]
return C.Cn[w.at.cS(6)]},
axS(d,e){var x,w=this,v=A.aQJ(w.a.c===C.dD,d)
if(v<0)return
A.bF2(v,e)
x=w.f
if(x!=null)x.U(0)
if(w.c==null)return
w.E(new A.b6e(w,d,e))
w.f=B.c1(G.kG,new A.b6f(w))},
ae8(){var x=this,w=x.d
if(w!=null)w.U(0)
x.d=null
w=x.a.w
if(!w){if(x.c!=null)x.E(new A.b6k(x))
return}x.d=B.fz(I.zX,new A.b6l(x))},
aUt(){var x,w,v,u=this,t=u.d
if(t!=null)t.U(0)
t=u.e
if(t!=null)t.U(0)
t=u.Vz().length
if(t===0)return
x=u.at
w=x.cS(t)
v=u.ae7(A.aQJ(u.a.c===C.dD,w))*(2+x.cS(8))
u.axS(w,v)
if(u.c==null)return
u.E(new A.b6j(u,w,v))
u.e=B.c1(H.n2,u.gSW())},
yl(){var x=this,w=x.e
if(w!=null)w.U(0)
x.e=null
if(x.c==null)return
x.E(new A.b6g(x))},
l(){var x,w=this
$.o7().N(0,w.gaaU())
x=w.d
if(x!=null)x.U(0)
x=w.e
if(x!=null)x.U(0)
x=w.f
if(x!=null)x.U(0)
w.aa()},
Vz(){var x=A.c0A(),w=D.d.ft(x.length/2),v=B.aj(x).c,u=B.e7(x,0,B.fm(w,"count",y.e),v).eX(0,!1),t=B.e7(x,w,null,v).eX(0,!1)
return this.a.c===C.dD?u:t},
u(d){return new B.l9($.o7(),new A.b6o(this),null,null,y.l)}}
A.a2B.prototype={
u(d){var x=this,w=null,v=x.r,u=E.cQ(D.R,new B.G(v,w,E.P(B.a([x.e,new B.G(w,8,w,w),new A.LV(x.c,x.d,v,!0,!0,x.y,x.z,w)],y.u),F.j,D.i,F.v),w),F.ar)
return u}}
var z=a.updateTypes(["~()","E9(t,T<ab<h,h>>,c?)"])
A.bpW.prototype={
$1(d){var x=J.C(d,"name")
return D.c.O(x==null?"":x).length!==0},
$S:693}
A.b6h.prototype={
$1(d){var x=J.C(d,"name")
return x==null?"":x},
$S:694}
A.b6i.prototype={
$0(){return this.a.as=!0},
$S:0}
A.b6p.prototype={
$1(d){var x,w=this,v=w.a
if(v.c==null)return
if(w.b)v.ae8()
if(w.c&&v.a.x)v.aUt()
if(w.d){x=v.a
x=!x.x||x.w}else x=!1
if(x)v.yl()},
$S:2}
A.b6e.prototype={
$0(){var x=this.a
x.z=this.b
x.Q=this.c},
$S:0}
A.b6f.prototype={
$0(){var x=this.a
if(x.c==null)return
x.E(new A.b6d(x))},
$S:0}
A.b6d.prototype={
$0(){var x=this.a
x.Q=x.z=null},
$S:0}
A.b6k.prototype={
$0(){this.a.r=null},
$S:0}
A.b6l.prototype={
$1(d){var x,w,v,u,t=this.a
if(t.c==null||!t.a.w)return
x=t.Vz().length
if(x===0)return
w=t.at.cS(x)
v=t.ae7(A.aQJ(t.a.c===C.dD,w))
u=A.aQJ(t.a.c===C.dD,w)
if(u<0)return
A.bF2(u,-v)},
$S:14}
A.b6j.prototype={
$0(){var x=this.a
x.r=null
x.x=this.b
x.y=this.c},
$S:0}
A.b6g.prototype={
$0(){var x=this.a
x.y=x.x=null},
$S:0}
A.b6o.prototype={
$3(d,e,f){var x,w,v,u,t,s,r,q,p
E.eH(d)
x=this.a
w=x.a.e
v=x.Vz()
u=v.length
if(u===0)u=1
t=x.x
s=t==null?null:D.k.ac(t,u)
t=x.z
r=t==null?null:D.k.ac(t,u)
if(x.as)$.at.am$.push(new A.b6n(x))
t=x.a.d
q=x.as
p=x.y
return K.buG(q,x.Q,r,!0,t,10,null,w,v,p,s)},
$S:z+1}
A.b6n.prototype={
$1(d){var x=this.a
if(x.c!=null&&x.as)x.E(new A.b6m(x))},
$S:2}
A.b6m.prototype={
$0(){return this.a.as=!1},
$S:0};(function installTearOffs(){var x=a._instance_0u
var w
x(w=A.TE.prototype,"gaaU","aNM",0)
x(w,"gSW","yl",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(A.a2A,B.lc)
w(B.cY,[A.bpW,A.b6h,A.b6p,A.b6l,A.b6o,A.b6n])
x(A.LV,B.a3)
x(A.TE,B.a5)
w(B.eb,[A.b6i,A.b6e,A.b6f,A.b6d,A.b6k,A.b6j,A.b6g,A.b6m])
x(A.a2B,B.O)})()
B.da(b.typeUniverse,JSON.parse('{"LV":{"a3":[],"c":[]},"TE":{"a5":["LV"]},"a2B":{"O":[],"c":[]}}'))
var y={u:B.X("w<c>"),r:B.X("w<r>"),z:B.X("ab<h,h>"),w:B.X("h"),l:B.X("l9<T<ab<h,h>>>"),e:B.X("r")};(function constants(){var x=a.makeConstList
C.dD=new A.a2A(0,"left")
C.fx=new A.a2A(1,"right")
C.Cn=x([10,50,100,500,1000,5000],y.r)
C.aft=x([5000,1e4,25e3,5e4,1e5],y.r)
C.agy=x([1000,2500,5000,1e4,25e3],y.r)})()};
(a=>{a["dxvrWRLZyzofRb1VIgXajKewZ70="]=a.current})($__dart_deferred_initializers__);