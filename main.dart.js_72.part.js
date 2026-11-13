((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,D,G,E,F,H,A={
c0q(){var x,w=J.mP($.o7().a,new A.bpN())
w=B.af(w,w.$ti.i("N.E"))
w.$flags=1
x=w
if(x.length!==0)return x
return B.bL(D.kV,!0,y.z)},
ky(d,e,f,g,h,i){return new A.a2B(i,d,e,g,f,h,null)},
a2A:function a2A(d,e){this.a=d
this.b=e},
bpN:function bpN(){},
LX:function LX(d,e,f,g,h,i,j,k){var _=this
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
b6a:function b6a(){},
b6b:function b6b(d){this.a=d},
b6i:function b6i(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b67:function b67(d,e,f){this.a=d
this.b=e
this.c=f},
b68:function b68(d){this.a=d},
b66:function b66(d){this.a=d},
b6d:function b6d(d){this.a=d},
b6e:function b6e(d){this.a=d},
b6c:function b6c(d,e,f){this.a=d
this.b=e
this.c=f},
b69:function b69(d){this.a=d},
b6h:function b6h(d){this.a=d},
b6g:function b6g(d){this.a=d},
b6f:function b6f(d){this.a=d},
a2B:function a2B(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.r=g
_.y=h
_.z=i
_.a=j},
bEV(d){var x,w
if(d==null||d.length===0)return 0
x=B.dz(d,",","")
x=B.dz(x,"\u20b9","")
w=B.xy(D.c.P(B.dz(x," ","")))
if(w==null)return 0
return D.d.a_(w)},
bEU(d,e){var x,w,v,u,t,s,r=$.o7().a
if(d<0||d>=J.au(r))return
x=J.M(r)
w=x.gB(r)
v=J.il(w,y.z)
for(u=y.w,t=0;t<w;++t)v[t]=B.ao(x.h(r,t),u,u)
s=v[d]
x=J.M(s)
x.k(s,"balance",""+D.k.S(A.bEV(x.h(s,"balance"))+e,1000,9999999999))
v[d]=s
$.o7().sq(0,v)},
aQD(d,e){var x,w,v=J.au($.o7().a)
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
H=c[102]
A=a.updateHolder(c[45],A)
C=c[94]
I=c[185]
K=c[47]
A.a2A.prototype={
T(){return"GameSideBotsSide."+this.b}}
A.LX.prototype={
V(){return new A.TE(D.bF)}}
A.TE.prototype={
a4(){this.ag()
this.ae3()
$.o7().a9(0,this.gaaP())
B.aQC(!1)},
aND(){var x,w=this
if(w.c==null)return
x=J.e0($.o7().a,new A.b6a(),y.w).bD(0,";")
if(x===w.ax)return
w.ax=x
w.E(new A.b6b(w))},
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
$.at.am$.push(new A.b6i(this,!u,s,r))},
ae2(d){var x,w=this,v=$.o7().a
if(d<0||d>=J.au(v))return C.Ci[w.at.cS(6)]
x=A.bEV(J.C(J.C(v,d),"balance"))
if(x>=1e7)return C.af6[w.at.cS(5)]
if(x>=5e5)return C.agc[w.at.cS(5)]
return C.Ci[w.at.cS(6)]},
axL(d,e){var x,w=this,v=A.aQD(w.a.c===C.dE,d)
if(v<0)return
A.bEU(v,e)
x=w.f
if(x!=null)x.U(0)
if(w.c==null)return
w.E(new A.b67(w,d,e))
w.f=B.c0(G.kC,new A.b68(w))},
ae3(){var x=this,w=x.d
if(w!=null)w.U(0)
x.d=null
w=x.a.w
if(!w){if(x.c!=null)x.E(new A.b6d(x))
return}x.d=B.fx(I.zT,new A.b6e(x))},
aUk(){var x,w,v,u=this,t=u.d
if(t!=null)t.U(0)
t=u.e
if(t!=null)t.U(0)
t=u.Vt().length
if(t===0)return
x=u.at
w=x.cS(t)
v=u.ae2(A.aQD(u.a.c===C.dE,w))*(2+x.cS(8))
u.axL(w,v)
if(u.c==null)return
u.E(new A.b6c(u,w,v))
u.e=B.c0(H.mY,u.gSR())},
yj(){var x=this,w=x.e
if(w!=null)w.U(0)
x.e=null
if(x.c==null)return
x.E(new A.b69(x))},
l(){var x,w=this
$.o7().N(0,w.gaaP())
x=w.d
if(x!=null)x.U(0)
x=w.e
if(x!=null)x.U(0)
x=w.f
if(x!=null)x.U(0)
w.aa()},
Vt(){var x=A.c0q(),w=D.d.ft(x.length/2),v=B.aj(x).c,u=B.e7(x,0,B.fl(w,"count",y.e),v).eW(0,!1),t=B.e7(x,w,null,v).eW(0,!1)
return this.a.c===C.dE?u:t},
u(d){return new B.la($.o7(),new A.b6h(this),null,null,y.l)}}
A.a2B.prototype={
u(d){var x=this,w=null,v=x.r,u=E.cQ(D.P,new B.G(v,w,E.P(B.a([x.e,new B.G(w,8,w,w),new A.LX(x.c,x.d,v,!0,!0,x.y,x.z,w)],y.u),F.j,D.i,F.v),w),F.as)
return u}}
var z=a.updateTypes(["~()","E9(t,T<ab<h,h>>,c?)"])
A.bpN.prototype={
$1(d){var x=J.C(d,"name")
return D.c.P(x==null?"":x).length!==0},
$S:693}
A.b6a.prototype={
$1(d){var x=J.C(d,"name")
return x==null?"":x},
$S:694}
A.b6b.prototype={
$0(){return this.a.as=!0},
$S:0}
A.b6i.prototype={
$1(d){var x,w=this,v=w.a
if(v.c==null)return
if(w.b)v.ae3()
if(w.c&&v.a.x)v.aUk()
if(w.d){x=v.a
x=!x.x||x.w}else x=!1
if(x)v.yj()},
$S:2}
A.b67.prototype={
$0(){var x=this.a
x.z=this.b
x.Q=this.c},
$S:0}
A.b68.prototype={
$0(){var x=this.a
if(x.c==null)return
x.E(new A.b66(x))},
$S:0}
A.b66.prototype={
$0(){var x=this.a
x.Q=x.z=null},
$S:0}
A.b6d.prototype={
$0(){this.a.r=null},
$S:0}
A.b6e.prototype={
$1(d){var x,w,v,u,t=this.a
if(t.c==null||!t.a.w)return
x=t.Vt().length
if(x===0)return
w=t.at.cS(x)
v=t.ae2(A.aQD(t.a.c===C.dE,w))
u=A.aQD(t.a.c===C.dE,w)
if(u<0)return
A.bEU(u,-v)},
$S:14}
A.b6c.prototype={
$0(){var x=this.a
x.r=null
x.x=this.b
x.y=this.c},
$S:0}
A.b69.prototype={
$0(){var x=this.a
x.y=x.x=null},
$S:0}
A.b6h.prototype={
$3(d,e,f){var x,w,v,u,t,s,r,q,p
E.eF(d)
x=this.a
w=x.a.e
v=x.Vt()
u=v.length
if(u===0)u=1
t=x.x
s=t==null?null:D.k.af(t,u)
t=x.z
r=t==null?null:D.k.af(t,u)
if(x.as)$.at.am$.push(new A.b6g(x))
t=x.a.d
q=x.as
p=x.y
return K.bux(q,x.Q,r,!0,t,10,null,w,v,p,s)},
$S:z+1}
A.b6g.prototype={
$1(d){var x=this.a
if(x.c!=null&&x.as)x.E(new A.b6f(x))},
$S:2}
A.b6f.prototype={
$0(){return this.a.as=!1},
$S:0};(function installTearOffs(){var x=a._instance_0u
var w
x(w=A.TE.prototype,"gaaP","aND",0)
x(w,"gSR","yj",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(A.a2A,B.ld)
w(B.cY,[A.bpN,A.b6a,A.b6i,A.b6e,A.b6h,A.b6g])
x(A.LX,B.a2)
x(A.TE,B.a5)
w(B.eb,[A.b6b,A.b67,A.b68,A.b66,A.b6d,A.b6c,A.b69,A.b6f])
x(A.a2B,B.O)})()
B.da(b.typeUniverse,JSON.parse('{"LX":{"a2":[],"c":[]},"TE":{"a5":["LX"]},"a2B":{"O":[],"c":[]}}'))
var y={u:B.X("w<c>"),r:B.X("w<r>"),z:B.X("ab<h,h>"),w:B.X("h"),l:B.X("la<T<ab<h,h>>>"),e:B.X("r")};(function constants(){var x=a.makeConstList
C.dE=new A.a2A(0,"left")
C.fy=new A.a2A(1,"right")
C.Ci=x([10,50,100,500,1000,5000],y.r)
C.af6=x([5000,1e4,25e3,5e4,1e5],y.r)
C.agc=x([1000,2500,5000,1e4,25e3],y.r)})()};
(a=>{a["PNNlyiFlYI7XB5Fcswc/3UVpkig="]=a.current})($__dart_deferred_initializers__);