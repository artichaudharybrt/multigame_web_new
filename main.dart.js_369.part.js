((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,S,T,U,N,A1,A2,A3,A4,A5,A6,A7,A8,A9,V,W,Aa,Ab,Ac,Ad,K,Ae,Af,Ag,X,Y,O,Ah,C={
bGR(d){return B.l.au(d,13)},
aFb(d){var x=A.ak(d).i("at<1,o>"),w=A.ae(new A.at(d,C.bvw(),x),x.i("aW.E"))
B.b.eR(w,new C.aFc())
return w},
bqt(d){var x=C.aFb(d),w=x[0],v=x[1]
return w===v&&v===x[2]},
bGP(d){var x,w,v
if(C.bqt(d))return!1
x=C.aFb(d)
w=x[0]
v=x[1]
return w===v||v===x[2]},
bGO(d){return B.b.f2(d,new C.aFa(B.l.c2(d[0],13)))},
bGQ(d){var x,w=new A.at(d,C.bvw(),A.ak(d).i("at<1,o>")).iR(0),v=A.ae(w,A.D(w).c)
B.b.hT(v)
if(v.length!==3)return!1
w=v[2]
x=v[0]
if(w-x===2&&v[1]-x===1)return!0
if(x===0&&v[1]===1&&w===12)return!0
return!1},
bqs(d){var x=C.bqt(d),w=C.bGO(d),v=C.bGQ(d)
if(x)return 6
if(v&&w)return 5
if(v)return 4
if(w)return 3
if(C.bGP(d))return 2
return 1},
bGN(d,e){var x,w,v,u,t,s=C.bqs(d),r=C.bqs(e)
if(s!==r)return s>r?1:-1
x=C.aFb(d)
w=C.aFb(e)
for(v=0;v<3;++v){u=x[v]
t=w[v]
if(u!==t)return u>t?1:-1}return 0},
bGS(d){var x,w,v,u,t,s,r
for(x=y.S,w=y.t,v=0;v<400;++v){u=A.a(new Array(52),w)
for(t=0;t<52;++t)u[t]=t
B.b.No(u,B.bL)
s=A.de(B.b.cB(u,0,3),!0,x)
r=A.de(B.b.cB(u,3,6),!0,x)
if((C.bGN(s,r)>=0?0:1)===d)return new A.Sr(r,s)}x=A.a([0,13,26],w)
return new A.Sr(A.a([2,15,28],w),x)},
aFc:function aFc(){},
aFa:function aFa(d){this.a=d},
aFx:function aFx(d){this.a=d},
bH_(d){var x,w,v,u,t
for(x=["timer","time","value","countdown","t","sec","seconds","timeLeft"],w=J.a7(d),v=0;v<8;++v){u=w.h(d,x[v])
if(A.dg(u))return u
if(typeof u=="number")return B.c.al(u)
if(typeof u=="string"){t=A.e1(B.d.ar(u),null)
if(t!=null)return t}}return null},
bH1(d){var x,w=J.a7(d),v=w.h(d,"data"),u=y.f
if(u.b(v))return A.b9(v,y.N,y.z)
x=w.h(d,"payload")
if(u.b(x))return A.b9(x,y.N,y.z)
return d},
bqw(d){var x,w,v
if(!y.j.b(d))return null
x=A.a([],y.t)
for(w=J.bg(d);w.D();){v=w.gR(w)
if(A.dg(v))x.push(v)
else if(typeof v=="number")x.push(B.c.al(v))}return x.length===3?x:null},
bGZ(d){var x,w,v,u,t,s,r,q,p,o=null,n=J.a7(d),m=n.h(d,"result"),l=m==null?n.h(d,"roundResult"):m,k=l==null?n.h(d,"gameResult"):l
if(typeof k=="string"){x=B.d.ar(k)
if(J.aV(x)!==0&&!J.e(x,"null"))try{k=B.L.c_(0,x,o)}catch(w){k=null}else k=null}n=y.f
if(n.b(k)){m={}
v=y.z
u=A.b9(k,v,v)
t=y.N
m.a=A.E(t,v)
u.aB(0,new C.aFp(m))
s=m.a.h(0,"data")
if(n.b(s)){r=A.b9(s,v,v)
m.a=A.E(t,v)
r.aB(0,new C.aFq(m))}q=m.a.h(0,"result")
if(A.dg(q))p=q
else p=typeof q=="number"?B.c.al(q):o
return new A.AZ(m.a,p)}if(A.dg(k))return new A.AZ(o,k)
if(typeof k=="number")return new A.AZ(o,B.c.al(k))
return new A.AZ(o,o)},
bH0(d,e){var x,w=e.h(0,"result")
if(A.dg(w))x=w
else x=typeof w=="number"?B.c.al(w):-1
switch(d){case 0:return x===0
case 1:return x===1
case 2:return J.e(e.h(0,"sidePair"),!0)
case 3:return J.e(e.h(0,"sideColor"),!0)
case 4:return J.e(e.h(0,"sideSeq"),!0)
case 5:return J.e(e.h(0,"sidePureSeq"),!0)
case 6:return J.e(e.h(0,"sideSet"),!0)
default:return!1}},
vp:function vp(d,e,f){var _=this
_.at=d
_.ay=_.ax=null
_.a=e
_.b=$
_.c=f
_.d=!1},
aFw:function aFw(d){this.a=d},
aFp:function aFp(d){this.a=d},
aFq:function aFq(d){this.a=d},
aFr:function aFr(){},
aFs:function aFs(d){this.a=d},
aFt:function aFt(d){this.a=d},
aFv:function aFv(d){this.a=d},
aFu:function aFu(d){this.a=d},
aFo:function aFo(d){this.a=d},
bqx(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w){return new C.kx(j,h,i,m,u,q,r,v,g,p,o,f,e,d,n,s,w,k,l,t)},
kx:function kx(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l
_.y=m
_.z=n
_.Q=o
_.as=p
_.at=q
_.ax=r
_.ay=s
_.ch=t
_.CW=u
_.cx=v
_.cy=w},
bfh:function bfh(){},
Eo:function Eo(d,e){this.c=d
this.a=e},
aFB:function aFB(d){this.a=d},
aFz:function aFz(){},
aFA:function aFA(){},
aFy:function aFy(){},
aex:function aex(d,e,f){this.c=d
this.d=e
this.a=f},
b5h:function b5h(d){this.a=d},
b5g:function b5g(d,e){this.a=d
this.b=e},
b5j:function b5j(){},
b5i:function b5i(d){this.a=d},
b5k:function b5k(d,e){this.a=d
this.b=e},
b5n:function b5n(d,e){this.a=d
this.b=e},
b5m:function b5m(d,e){this.a=d
this.b=e},
b5e:function b5e(d){this.a=d},
b5f:function b5f(d){this.a=d},
b5d:function b5d(d,e){this.a=d
this.b=e},
b5l:function b5l(){}},D,Ai,Z,Aj,A_,Ak,F,E,I,Al,L,Am,An,G,Ao,Ap,R,Aq,A0,H,Ar,As,At,P,M,Au,Q,Av
J=c[1]
A=c[0]
B=c[2]
S=c[99]
T=c[121]
U=c[61]
N=c[141]
A1=c[75]
A2=c[252]
A3=c[37]
A4=c[220]
A5=c[59]
A6=c[160]
A7=c[191]
A8=c[149]
A9=c[256]
V=c[111]
W=c[98]
Aa=c[182]
Ab=c[197]
Ac=c[113]
Ad=c[189]
K=c[104]
Ae=c[289]
Af=c[116]
Ag=c[266]
X=c[55]
Y=c[305]
O=c[44]
Ah=c[128]
C=a.updateHolder(c[17],C)
D=c[304]
Ai=c[264]
Z=c[225]
Aj=c[306]
A_=c[130]
Ak=c[64]
F=c[108]
E=c[117]
I=c[96]
Al=c[107]
L=c[118]
Am=c[102]
An=c[43]
G=c[105]
Ao=c[132]
Ap=c[88]
R=c[139]
Aq=c[127]
A0=c[123]
H=c[74]
Ar=c[126]
As=c[124]
At=c[125]
P=c[136]
M=c[226]
Au=c[78]
Q=c[146]
Av=c[179]
C.aFx.prototype={
aTl(d){var x=O.nC("red_black")
if(x==null)return A.eK(null,y.T)
return H.lH(x.b+"_1",d)},
ajz(d,e,f,g,h){var x=O.nC("red_black")
if(x==null)return null
return this.a.oo(0,x,e,f,g,h)},
b_x(d){var x=O.nC("red_black")
if(x==null)return A.eK(B.c_,y.L)
return A1.mx(x.b,120,d)}}
C.vp.prototype={
kf(){var x=this
A.hV()
if(x.c.b)return
x.BD()
x.aGO()
x.tT()
K.rm(x.gaGN(),y.H)
x.ay=A.js(D.a_L,new C.aFw(x))},
aO(d){var x=this.ay
if(x!=null)x.ab(0)
x=this.ax
if(x!=null)x.a.$0()
A.hV()
return this.hU(0)},
mA(d){var x,w=this.c
if(w.Q&&w.x===d)return R.aQ[w.r]
x=w.w.h(0,d)
if(x!=null&&x>0)return x
return null},
xh(){var x=0,w=A.t(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$xh=A.u(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.j(s.at.b_x($.aP),$async$xh)
case 7:r=e
q=s.gK()
if((q.c&4)!==0||J.d5(r)){x=1
break}p=s.c
o=J.eg(r,new C.aFr(),y.S)
o=A.ae(o,o.$ti.i("aW.E"))
p=p.aP0(o)
if((q.c&4)===0)s.I(p)
u=2
x=6
break
case 4:u=3
m=t.pop()
x=6
break
case 3:x=2
break
case 6:case 1:return A.q(v,w)
case 2:return A.p(t.at(-1),w)}})
return A.r($async$xh,w)},
tT(){var x=0,w=A.t(y.H),v=1,u=[],t=this,s,r,q,p,o
var $async$tT=A.u(function(d,e){if(d===1){u.push(e)
x=v}for(;;)switch(x){case 0:v=3
x=6
return A.j(t.at.aTl($.aP),$async$tT)
case 6:s=e
r=t.gK()
if((r.c&4)===0&&s!=null&&s.length!==0){q=t.c.fF(s)
if((r.c&4)===0)t.I(q)}v=1
x=5
break
case 3:v=2
o=u.pop()
x=5
break
case 2:x=1
break
case 5:return A.q(null,w)
case 1:return A.p(u.at(-1),w)}})
return A.r($async$tT,w)},
BD(){var x=0,w=A.t(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$BD=A.u(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:n=$.aP
if(n==null||n.length===0){x=1
break}u=4
x=7
return A.j(s.at.a.dt(n),$async$BD)
case 7:r=e
q=s.gK()
if((q.c&4)===0){p=s.c.ec(r)
if((q.c&4)===0)s.I(p)}u=2
x=6
break
case 4:u=3
m=t.pop()
x=6
break
case 3:x=2
break
case 6:case 1:return A.q(v,w)
case 2:return A.p(t.at(-1),w)}})
return A.r($async$BD,w)},
aGO(){var x=this,w=x.ax
if(w!=null)w.a.$0()
x.ax=x.at.ajz(0,new C.aFs(x),new C.aFt(x),new C.aFu(x),new C.aFv(x))},
aGM(d,e){var x,w,v,u,t,s,r,q,p=this,o=null,n=p.gK()
if((n.c&4)!==0)return
x=p.c.w
w=x.gca(x)
v=!1
if(w)if(e!=null){for(x=p.c.w,x=x.gi7(x),x=x.gak(x);x.D();)if(C.bH0(x.gR(x).a,e)){v=!0
break}}else for(x=p.c.w,x=x.gi7(x),x=x.gak(x);x.D();){u=x.gR(x).a
if(u<=1&&u===d){v=!0
break}}x=e==null
u=x?o:e.h(0,"redCards")
if(u==null)u=x?o:e.h(0,"red_cards")
t=C.bqw(u)
u=x?o:e.h(0,"blackCards")
if(u==null)x=x?o:e.h(0,"black_cards")
else x=u
s=C.bqw(x)
if(t==null||s==null){r=C.bGS(d)
t=r.b
s=r.a}if(w){x=$.cq()
x.bX(0,v?V.cz:V.cA)}q=A.de(p.c.cx,!0,y.S)
B.b.fI(q,0,d)
if(q.length>80)q.pop()
x=p.c.aR6(w,q,!1,d,s,t,!0,v)
if((n.c&4)===0)p.I(x)
A.cM(B.bQ,new C.aFo(p),y.H)},
eN(d){return this.aZ2(d)},
aZ2(d){var x=0,w=A.t(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i
var $async$eN=A.u(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:j=s.c
if(!j.d){j=j.fQ("Wait for next round")
if((s.gK().c&4)===0)s.I(j)
x=1
break}m=j.f
if(m==null||m.length===0){j=j.fQ("No active round \u2014 reconnecting\u2026")
if((s.gK().c&4)===0)s.I(j)
s.tT()
x=1
break}m=$.aX
l=m==null?null:m.a
r=l==null?"":l
if(J.aV(r)===0){j=j.fQ("Login required")
if((s.gK().c&4)===0)s.I(j)
x=1
break}q=R.aQ[B.l.W(j.r,0,4)]
j=s.c
if(j.at<q){j=j.fQ("Insufficient balance")
if((s.gK().c&4)===0)s.I(j)
x=1
break}if(!(j.d&&j.c>0&&j.f!=null&&!j.Q)){j=j.fQ(j.c<=0?"Betting time over \u2014 wait for next round":"Betting closed")
if((s.gK().c&4)===0)s.I(j)
x=1
break}$.cq().bX(0,Ac.cY)
j=s.c.aQp(!0,d,!0)
m=s.gK()
if((m.c&4)===0)s.I(j)
u=4
j=s.c.f
j.toString
x=7
return A.j(H.lK(q,d,"red_black",j,$.aP,r),$async$eN)
case 7:if((m.c&4)!==0){x=1
break}j=y.S
p=A.b9(s.c.w,j,j)
j=J.S(p,d)
if(j==null)j=0
J.fO(p,d,j+q)
j=s.c
j=j.aQx(j.at-q,!1,!0,p)
if((m.c&4)===0)s.I(j)
u=2
x=6
break
case 4:u=3
i=t.pop()
o=A.an(i)
if((m.c&4)!==0){x=1
break}n=o instanceof Au.i9?o.a:"Bet failed"
j=s.c.aQB(n,!1,!0,n)
if((m.c&4)===0)s.I(j)
x=6
break
case 3:x=2
break
case 6:case 1:return A.q(v,w)
case 2:return A.p(t.at(-1),w)}})
return A.r($async$eN,w)}}
C.kx.prototype={
kO(d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=a8==null?l.c:a8,i=b1==null?l.d:b1,h=b9==null?l.e:b9,g=b5==null?l.f:b5,f=b6==null?l.r:b6,e=c0==null?l.w:c0
if(a4)x=k
else x=a2==null?l.x:a2
if(a6)w=k
else w=b4==null?l.y:b4
if(a6)v=k
else v=b3==null?l.z:b3
u=a1==null?l.Q:a1
if(a3)t=k
else t=a0==null?l.as:a0
s=d==null?l.at:d
if(a5)r=k
else r=b2==null?l.ax:b2
q=b7==null?l.ay:b7
p=c1==null?l.ch:c1
o=a9==null?l.CW:a9
n=b0==null?l.cx:b0
if(a7)m=k
else m=b8==null?l.cy:b8
return C.bqx(s,t,u,x,l.b,j,l.a,o,n,i,r,v,w,g,f,q,m,h,e,p)},
fm(d){var x=null
return this.kO(x,x,x,x,!1,!1,!1,!1,!1,x,x,x,x,x,x,x,x,d,x,x,x,x,x)},
ec(d){var x=null
return this.kO(d,x,x,x,!1,!1,!1,!1,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x)},
fF(d){var x=null
return this.kO(x,x,x,x,!1,!1,!1,!1,!1,x,x,x,x,x,x,x,d,x,x,x,x,x,x)},
fl(d){var x=null
return this.kO(x,x,x,x,!1,!1,!1,!1,!1,d,x,x,x,x,x,x,x,x,x,x,x,x,x)},
dc(d){var x=null
return this.kO(x,x,x,x,!1,!1,!1,!1,!1,x,x,x,x,x,x,x,x,x,x,x,d,x,x)},
oZ(d){var x=null
return this.kO(x,x,x,x,!1,!1,!1,!1,d,x,x,x,x,x,x,x,x,x,x,x,x,x,x)},
fQ(d){var x=null
return this.kO(x,x,x,x,!1,!1,!1,!1,!1,x,x,x,x,x,x,x,x,x,x,d,x,x,x)},
aP0(d){var x=null
return this.kO(x,x,x,x,!1,!1,!1,!1,!1,x,x,d,x,x,x,x,x,x,x,x,x,x,x)},
aR6(d,e,f,g,h,i,j,k){var x=null
return this.kO(x,x,x,x,!1,!1,!1,!1,!1,x,d,e,f,g,h,i,x,x,j,x,x,x,k)},
aQX(d,e,f,g,h,i){var x=null
return this.kO(x,x,x,x,!1,!1,d,e,!1,x,f,x,g,x,x,x,x,x,h,x,x,i,x)},
aQp(d,e,f){var x=null
return this.kO(x,x,d,e,f,!1,!1,!1,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x)},
aQx(d,e,f,g){var x=null
return this.kO(d,x,e,x,!1,f,!1,!1,!1,x,x,x,x,x,x,x,x,x,x,x,x,g,x)},
aQB(d,e,f,g){var x=null
return this.kO(x,d,e,x,!1,f,!1,!1,!1,x,x,x,x,x,x,x,x,x,x,g,x,x,x)},
gef(){var x=this
return[x.a,x.b,x.c,x.d,x.e,x.f,x.r,x.w,x.x,x.y,x.z,x.Q,x.as,x.at,x.ax,x.ay,x.ch,x.CW,x.cx,x.cy]}}
C.Eo.prototype={
v(d){var x=y.D
return K.hu(Ap.k7(new C.aFy(),new C.aFz(),new C.aFA(),x,y.R),new C.aFB(this),x)}}
C.aex.prototype={
v(d){return this.aGQ(d,this.c,this.d)},
aGQ(d,e,f){var x,w,v,u,t,s,r,q,p,o,n=this,m=null
if(e.b)return A.df(X.bgF(m,A.v(e.a,m,m,m,m,m,m)),B.et,Y.vJ)
x=y.O
w=A.cs(0,A.cl(m,new A.w(m,m,m,m,m,new F.al(P.a_,P.a9,B.t,A.a([D.XA,D.Si,D.Yt],x),m,m),B.m),B.ab))
x=A.cs(0,A.cl(m,new A.w(m,m,m,m,m,new F.al(B.O,B.R,B.t,A.a([A9.bg.m(0.04),B.w,B.i.m(0.55)],x),m,m),B.m),B.ab))
v=y.p
u=A.cs(0,A.et(new A.a4(D.a0z,F.a0(A.a([U.m4(!1,!0,B.o,m,m,76,D.aby),Q.by,U.m4(!1,!0,B.o,m,m,76,N.fc)],v),E.k,B.j,E.n,0),m),!0,m))
t=B.i.m(0.55)
s=F.Z(B.o.m(0.65),1.5)
s=A.a([u,A.aJ(m,F.a8(A.a([A.bh(!1,B.z,!0,m,A.bt(!1,m,!0,A.z(m,A.ar(T.bR,B.o,m,m,20),B.f,m,m,new A.w(t,m,s,m,m,m,B.E),m,42,m,m,m,m,m,42),B.bC,!0,m,m,m,m,m,m,m,m,new C.b5h(d),m,m,m,m,m,m,m),B.f,B.w,0,m,m,m,m,m,B.I)],v),E.k,B.j,E.v),m,m,8,m,40,m)],v)
if(!e.e)s.push(A.aJ(m,A.ar(A0.cS,B.ca,m,m,22),m,m,m,10,10,m))
u=e.ay
if(u)s.push(A.cs(0,A.et(A.cl(m,new A.w(B.i.m(0.42),m,m,m,m,m,B.m),B.ab),!0,m)))
t=y.m
r=Math.min(110,A.bA(d,B.c1,t).w.a.gdP()*0.28)
q=A.a1(I.bF("assets/games_assets/red_black/ic_red_hearts.webp",B.q,m,m,m,m,m,m,m,!1,B.M,E.ai,m,!1,m,!1,m,!1,m,m,L.K,m,m,m),88,64)
p=n.c
o=p.y
q=G.a2(new A.c2(B.a6,m,m,F.a0(A.a([q,Q.aT,o!=null?n.a_O(o):n.a_N(d)],v),E.k,B.j,E.v,0),m),2)
t=A.a1(F.a8(A.a([G.a2(A.aB(new A3.w9(Math.min(48,A.bA(d,B.c1,t).w.a.gdP()*0.12),m,E.ai,B.Q,m),m,m),1),new H.kh(p.c,48,m)],v),E.k,B.W,E.n),m,88)
p=p.z
p=p!=null?n.a_O(p):n.a_N(d)
s.push(new A.a4(D.a1w,F.a8(A.a([A.a1(F.a0(A.a([q,t,G.a2(new A.c2(E.Z,m,m,F.a0(A.a([p,Q.aT,A.a1(I.bF("assets/games_assets/red_black/ic_black_spade.webp",B.q,m,m,m,m,m,m,m,!1,B.M,E.ai,m,!1,m,!1,m,!1,m,m,L.K,m,m,m),88,64)],v),E.k,B.j,E.v,0),m),2)],v),E.k,B.j,E.n,0),r,m),A8.bi,G.a2(n.arX(d),1)],v),E.k,B.j,E.n),m))
if(u)s.push(A.cs(0,n.aHk(d)))
s.push(new A.c2(B.R,m,m,new An.y4(n.aGP(d),m),m))
return A.df(m,m,new A.az(B.B,m,B.av,B.u,A.a([w,x,A.cW(!1,new A.az(B.B,m,B.J,B.f,s,m),!0,B.Q,!0,!1)],v),m))},
a_N(d){var x,w=null,v=J.j1(3,y.l)
for(x=0;x<3;++x)v[x]=new A.hD(x*18,w,w,w,w,w,new I.lf(I.biC(w,w,new Al.l1("assets/games_assets/red_black/card_bg.png",w,w)),w,w,34,48,w,w,B.M,w,E.aR,B.q,L.K,w,!1,!1,w,!1,!1,w),w)
return A.a1(new A.az(B.B,w,B.J,B.f,v,w),48,66)},
a_O(d){var x,w,v,u,t,s,r,q,p,o,n=null,m=J.j1(3,y.l)
for(x=y.p,w=y.V,v=0;v<3;++v){u=d[v]
t=Af.r1[B.l.au(u,13)]
u=B.l.c2(u,13)
s=D.a9d[u]
r=u===1||u===2?B.cv:B.h
u=new A.bb(5,5)
q=new A.aO(B.o.m(0.55),1,B.C,-1)
p=A.a([new A.X(0,B.r,B.i.m(0.35),B.p,3)],w)
o=A.v(t,n,n,n,new A.y(!0,r,n,n,n,n,11,B.P,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n)
m[v]=new A.hD(v*16,n,n,n,n,n,A.z(n,new G.nW(E.aq,B.q,B.f,F.a8(A.a([o,A.v(s,n,n,n,new A.y(!0,r,n,n,n,n,12,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n)],x),E.k,B.W,E.n),n),B.f,n,n,new A.w(D.YK,n,new A.cS(q,q,q,q),new A.cX(u,u,u,u),p,n,B.m),n,46,n,n,Ai.ye,n,n,32),n)}return A.a1(new A.az(B.B,n,B.J,B.f,m,n),46,64)},
arX(d){var x=this.c
return A.cm(new C.b5g(this,x.d&&x.c>0&&x.f!=null&&!x.Q))},
aGR(d){var x=null,w=B.i.m(0.45),v=A.B(8),u=F.Z(B.o.m(0.35),1),t=this.c.cx.length
t=t===0?A.aB(A.v("History",x,x,x,A.J(x,x,B.h.m(0.35),x,x,x,x,x,x,x,x,11,x,x,B.U,x,x,!0,x,x,x,x,x,x,x,x),x,x),x,x):A5.uR(new C.b5i(this),t,Ar.q0,x,!0,B.b4,new C.b5j(),!1)
return A.cl(t,new A.w(w,x,u,v,x,x,B.m),B.ab)},
a4d(d,e,f){var x=null,w=f?0:1,v=this.d.mA(w),u=f?B.cv:Ah.d7,t=e?1:0.62,s=A.B(14),r=A.B(14),q=F.Z(B.o.m(0.55),1.5),p=A.a([new A.X(0,B.r,B.i.m(0.35),As.bE,8)],y.V),o=A.aJ(x,A.z(x,D.avg,B.f,x,x,new A.w(B.i.m(0.35),x,x,A.B(6),x,x,B.m),x,x,x,x,At.m0,x,x,x),x,x,x,8,6,x),n=A.aB(A.v(f?"RED":"BLACK",x,x,x,D.atG,x,x),x,x),m=B.i.m(0.5),l=A.B(20),k=F.Z(B.o.m(0.4),1),j=v!=null
o=A.a([o,n,A.aJ(8,A.aB(A.z(x,A.v(j?"\u20b9 "+A.m(v):"0",x,x,x,D.aq5,x,x),B.f,x,x,new A.w(m,x,k,l,x,x,B.m),x,x,x,x,Ae.jr,x,x,x),x,x),x,x,0,0,x,x)],y.p)
if(j)o.push(A.aJ(0,A.aB(A.eD(H.Yd(v,Math.min(52,A.bA(d,B.c1,y.m).w.a.gdP()*0.12)),0.85),x,x),x,x,0,0,0,x))
return A.eD(A.bh(!1,B.z,!0,x,A.bt(!1,s,!0,S.fc(new A.az(B.B,x,B.J,B.u,o,x),x,new A.w(u,x,q,r,p,x,B.m),x,x,x),x,!0,x,x,x,x,x,x,x,x,new C.b5k(this,w),x,x,x,x,x,x,x),B.f,B.w,0,x,x,x,x,x,B.I),t)},
aIZ(d){var x=y.n
x=A.ae(new A.at(D.a7N,new C.b5n(this,d),x),x.i("aW.E"))
return F.a0(x,E.k,B.j,E.n,0)},
aGP(d){var x,w,v,u,t=null,s=$.aX,r=s==null?t:s.b
if(r==null)r="Player"
s=B.o.m(0.12)
x=F.Z(B.o,2)
x=A.z(t,A.ar(A2.dI,B.o,t,t,24),B.f,t,t,new A.w(s,t,x,t,t,t,B.E),t,46,t,t,t,t,t,46)
s=A.v(r,1,B.G,t,M.atQ,t,t)
w=G.a2(A.v("\u20b9 "+B.c.a7(this.c.at,2),1,B.G,t,D.apJ,t,t),1)
v=B.o.m(0.85)
u=y.p
return H.bod(F.a0(A.a([x,A_.b9,A.a1(F.a8(A.a([s,F.a0(A.a([w,Am.hi(!1,M.My,t,t,t,t,t,t,new C.b5e(d),t,A.a5Z(t,t,B.i.m(0.35),t,t,t,t,t,t,B.o,t,B.X,M.yk,t,t,new A.aO(v,1,B.C,-1),t,B.h5,t,t))],u),E.k,B.j,E.n,0)],u),E.al,B.W,E.n),t,128),Q.by,G.cK(B.a6,F.a0(A.jg(5,new C.b5f(this),!0,y.l),E.k,B.j,E.v,0),B.f,E.aq)],u),E.k,B.j,E.n,0),62,B.Q,Av.y8,B.o)},
aHk(d){var x,w,v,u,t,s,r=null,q=this.c,p=q.ax
if(p==null)return B.aj
x=p===0?"RED":"BLACK"
p=B.i.m(0.82)
w=A.B(16)
v=F.Z(B.o.m(0.55),1)
u=A.a([new A.X(0,B.r,B.i.m(0.5),B.p,20)],y.V)
t=A.a([],y.p)
if(q.CW){q=q.ch
s=q?"WON!":"LOST"
t.push(new A.a4(Ad.pI,A.v(s,r,r,r,A.J(r,r,q?A0.eH:A7.c4,r,r,r,r,r,r,r,r,26,r,r,B.P,r,r,!0,r,r,r,r,r,r,r,r),r,r),r))}t.push(A.v(x,r,r,r,D.arg,r,r))
t.push(Ao.c0)
t.push(I.bF("assets/games_assets/red_black/ic_game_over.png",B.q,r,r,r,r,r,r,new C.b5l(),!1,B.M,E.ai,r,!1,r,!1,r,!1,r,r,L.K,r,r,100))
return A.et(A.aB(A.z(r,F.a8(t,E.k,B.j,E.v),B.f,r,r,new A.w(p,r,v,w,u,r,B.m),r,r,r,r,D.a1d,r,r,r),r,r),!0,r)}}
var z=a.updateTypes(["aj<~>()","Eo(n,am<f,@>)","vp(n)","L(kx,kx)","~(n,kx)","c(n,kx)","h9(+choice,label,mult(o,f,f))","o(o)"])
C.aFc.prototype={
$2(d,e){return B.l.br(e,d)},
$S:124}
C.aFa.prototype={
$1(d){return B.l.c2(d,13)===this.a},
$S:58}
C.aFw.prototype={
$1(d){var x,w=this.a
if((w.gK().c&4)!==0)return
x=w.c
if(x.f==null||!x.e)w.tT()},
$S:21}
C.aFp.prototype={
$2(d,e){this.a.a.p(0,J.ao(d),e)
return e},
$S:72}
C.aFq.prototype={
$2(d,e){this.a.a.p(0,J.ao(d),e)
return e},
$S:72}
C.aFr.prototype={
$1(d){return B.l.W(d,0,1)},
$S:54}
C.aFs.prototype={
$0(){var x,w=this.a,v=w.gK()
if((v.c&4)!==0)return
x=w.c.dc(!0)
if((v.c&4)===0)w.I(x)
w.tT()
w.xh()},
$S:0}
C.aFt.prototype={
$0(){var x,w=this.a,v=w.gK()
if((v.c&4)===0){x=w.c.dc(!1)
if((v.c&4)===0)w.I(x)}},
$S:0}
C.aFv.prototype={
$1(d){var x,w=this.a,v=w.gK()
if((v.c&4)===0){x=w.c.fl(d)
if((v.c&4)===0)w.I(x)}},
$S:11}
C.aFu.prototype={
$1(d){var x,w,v,u,t,s,r,q,p=this.a,o=p.gK()
if((o.c&4)!==0)return
x=C.bH1(d)
w=H.nE(x)
v=A.aU(J.S(x,"status"))
u=v==null?null:v.toLowerCase()
if(w!=null){t=p.c.fF(w)
if((o.c&4)===0)p.I(t)}s=C.bH_(x)
if(s!=null&&u!=="finished"){t=p.c.fl(s)
if((o.c&4)===0)p.I(t)}if(u==="finished"){r=C.bGZ(x)
q=r.b
if(q!=null)p.aGM(B.l.W(q,0,1),r.a)}},
$S:27}
C.aFo.prototype={
$0(){var x,w=this.a,v=w.gK()
if((v.c&4)!==0)return
x=w.c.aQX(!0,!0,!1,!0,!1,D.FE)
if((v.c&4)===0)w.I(x)
w.BD()
w.xh()},
$S:7}
C.bfh.prototype={
$2(d,e){return new C.Eo(A.aU(J.S(e,"gameName")),null)},
$S:z+1}
C.aFB.prototype={
$1(d){var x,w,v=null,u=this.a.c,t=G.cB()
t=new G.fg(t)
t=new Ak.oj(t)
t=new C.aFx(t)
if(u==null)u="Red & Black"
x=O.nC("red_black")
w=$.aX
w=w==null?v:w.d
if(w==null)w=0
u=C.bqx(w,v,!1,v,x==null,0,u,!1,B.c_,!0,v,v,v,v,1,!1,v,!1,D.FE,!1)
y.u.a($.aD.h(0,$.hr()))
u=new C.vp(t,A_.bB,u)
u.kf()
return u},
$S:z+2}
C.aFz.prototype={
$2(d,e){var x=e.cy
return d.cy!=x&&x!=null},
$S:z+3}
C.aFA.prototype={
$2(d,e){var x,w,v=null,u=e.cy
if(u!=null){d.Y(y.q).f.bu(G.cD(v,v,v,v,v,B.u,v,A.v(u,v,v,v,v,v,v),v,Aq.ap,v,v,v,v,v,v,v,v,v,v))
x=K.aT(d,!1,y.D)
w=x.c.oZ(!0)
if((x.gK().c&4)===0)x.I(w)}},
$S:z+4}
C.aFy.prototype={
$2(d,e){var x=null
if(e.b)return A.df(X.bgF(x,A.v(e.a,x,x,x,x,x,x)),B.et,Y.vJ)
return new C.aex(e,K.aT(d,!1,y.D),x)},
$S:z+5}
C.b5h.prototype={
$0(){return A.b1(this.a,!1).ba(0)},
$S:0}
C.b5g.prototype={
$2(d,e){var x=null,w=B.c.W(e.b,280,720),v=Math.min(e.d,w*0.72),u=Math.min(w,v/0.42),t=A.B(18),s=A.a([new A.X(1,B.r,B.o.m(0.25),B.p,14),new A.X(0,B.r,B.i.m(0.6),Ab.eI,18)],y.V),r=u*0.04,q=this.a,p=this.b,o=y.p
return A.aB(A.z(x,A.e5(A.B(15),new A.az(B.B,x,B.av,B.u,A.a([A.z(x,x,B.f,D.VG,x,x,x,x,x,x,x,x,x,x),I.bF("assets/games_assets/red_black/table.webp",B.q,x,x,x,x,x,x,x,!1,B.M,E.aR,x,!1,x,!1,x,!1,x,x,L.K,x,x,x),A.et(A.cl(x,new A.w(x,x,x,x,x,new F.al(B.O,B.R,B.t,A.a([B.i.m(0.12),B.w,B.i.m(0.25)],y.O),x,x),B.m),B.ab),!0,x),new A.a4(new A.C(r,v*0.04,r,v*0.05),F.a8(A.a([A.a1(q.aGR(d),v*0.09,x),A.a1(x,v*0.03,x),G.a2(F.a0(A.a([G.a2(q.a4d(d,p,!0),1),A.a1(x,x,u*0.02),G.a2(q.a4d(d,p,!1),1)],o),E.aa,B.j,E.n,0),5),A.a1(x,v*0.025,x),A.a1(q.aIZ(p),v*0.32,x)],o),E.aa,B.j,E.n),x)],o),x),B.an,x),B.f,x,x,new A.w(x,x,x,t,s,D.a6Q,B.m),x,v,x,x,Ag.jt,x,x,u),x,x)},
$S:41}
C.b5j.prototype={
$2(d,e){return A6.eg},
$S:46}
C.b5i.prototype={
$2(d,e){var x=null,w=this.a.c.cx[e]===0?B.e1:B.j1
return A.z(x,x,B.f,x,x,new A.w(w,x,F.Z(B.o.m(0.4),1),x,x,x,B.E),x,22,x,x,x,x,x,22)},
$S:125}
C.b5k.prototype={
$0(){return this.a.d.eN(this.b)},
$S:0}
C.b5n.prototype={
$1(d){var x=null,w=this.a,v=w.d.mA(d.a),u=this.b?1:0.62,t=A.B(10),s=A.B(10),r=F.Z(B.o.m(0.25),1),q=A.v(d.b,1,B.G,x,D.atP,x,x),p=A.v(d.c,x,x,x,A.J(x,x,B.o.m(0.9),x,x,x,x,x,x,x,x,9,x,x,B.F,x,x,!0,x,x,x,x,x,x,x,x),x,x)
return G.a2(new A.a4(A4.js,A.eD(A.bh(!1,B.z,!0,x,A.bt(!1,t,!0,S.fc(F.a8(A.a([q,p,A.v(v!=null?"\u20b9 "+A.m(v):"0",x,x,x,D.arj,x,x)],y.p),E.k,B.W,E.n),x,new A.w(D.WP,x,r,s,x,x,B.m),x,D.a1i,x),x,!0,x,x,x,x,x,x,x,x,new C.b5m(w,d),x,x,x,x,x,x,x),B.f,B.w,0,x,x,x,x,x,B.I),u),x),1)},
$S:z+6}
C.b5m.prototype={
$0(){return this.a.d.eN(this.b.a)},
$S:0}
C.b5e.prototype={
$0(){this.a.Y(y.q).f.bu(M.Lw)},
$S:0}
C.b5f.prototype={
$1(d){var x,w=null,v=this.a,u=v.c.r===d,t=u?B.o:T.bN
t=F.Z(t,u?3:1.2)
x=u?A.a([new A.X(0,B.r,B.o.m(0.35),B.p,8)],y.V):w
return new A.a4(M.pZ,A.fE(w,A.z(w,A.aB(H.Yd(R.aQ[d],28),w,w),B.f,w,w,new A.w(w,w,t,w,x,w,B.E),w,50,w,w,w,w,w,44),B.aw,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.b5d(v,d),w,w,w,w,w,w),w)},
$S:83}
C.b5d.prototype={
$0(){var x=this.a.d,w=x.c.fm(B.l.W(this.b,0,4))
if((x.gK().c&4)===0)x.I(w)
return null},
$S:0}
C.b5l.prototype={
$3(d,e,f){return B.aj},
$S:13};(function installTearOffs(){var x=a._static_1,w=a._instance_0u
x(C,"bvw","bGR",7)
w(C.vp.prototype,"gaGN","xh",0)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.cY,[C.aFc,C.aFp,C.aFq,C.bfh,C.aFz,C.aFA,C.aFy,C.b5g,C.b5j,C.b5i])
x(A.bV,[C.aFa,C.aFw,C.aFr,C.aFv,C.aFu,C.aFB,C.b5n,C.b5f,C.b5l])
w(C.aFx,A.G)
w(C.vp,W.ht)
x(A.d6,[C.aFs,C.aFt,C.aFo,C.b5h,C.b5k,C.b5m,C.b5e,C.b5d])
w(C.kx,K.fT)
x(A.U,[C.Eo,C.aex])})()
A.bJ(b.typeUniverse,JSON.parse('{"vp":{"cx":["kx"],"eL":["kx"],"cx.0":"kx"},"Eo":{"U":[],"c":[]},"aex":{"U":[],"c":[]}}'))
var y=(function rtii(){var x=A.A
return{w:x("bP<f,f>"),V:x("l<X>"),O:x("l<d>"),p:x("l<c>"),t:x("l<o>"),j:x("R<@>"),L:x("R<o>"),f:x("am<@,@>"),n:x("at<+choice,label,mult(o,f,f),h9>"),m:x("e0"),D:x("vp"),R:x("kx"),N:x("f"),l:x("c"),q:x("fn"),z:x("@"),S:x("o"),u:x("ja?"),T:x("f?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.Si=new A.d(1,0.050980392156862744,0.023529411764705882,0.06274509803921569,B.e)
D.VG=new A.d(1,0.050980392156862744,0.30196078431372547,0.1843137254901961,B.e)
D.WP=new A.d(1,0.17647058823529413,0.17647058823529413,0.20784313725490197,B.e)
D.XA=new A.d(1,0.10196078431372549,0.0392156862745098,0.09411764705882353,B.e)
D.Yt=new A.d(1,0.07058823529411765,0.03137254901960784,0.10980392156862745,B.e)
D.YK=new A.d(1,0.9607843137254902,0.9607843137254902,0.9411764705882353,B.e)
D.a_L=new A.b0(1e7)
D.a0z=new A.C(0,56,0,64)
D.a1d=new A.C(28,20,28,20)
D.a1i=new A.C(2,4,2,4)
D.a1w=new A.C(52,4,52,56)
D.Zw=new A.d(1,0.9882352941176471,0.9647058823529412,0.7294117647058823,B.e)
D.UZ=new A.d(1,0.7019607843137254,0.5294117647058824,0.1568627450980392,B.e)
D.a7j=x([Z.H,D.Zw,D.UZ,Z.H],y.O)
D.a6Q=new F.al(P.a_,P.a9,B.t,D.a7j,null,null)
D.ajT=new A.wv(2,"PAIR","3.5x")
D.ajY=new A.wv(3,"COLOR","10x")
D.ajO=new A.wv(4,"SEQ","15x")
D.ajI=new A.wv(5,"PURE SEQ","100x")
D.ajR=new A.wv(6,"SET","100x")
D.a7N=x([D.ajT,D.ajY,D.ajO,D.ajI,D.ajR],A.A("l<+choice,label,mult(o,f,f)>"))
D.a9d=x(["\u2663","\u2666","\u2665","\u2660"],A.A("l<f>"))
D.aeQ=new A.bP(N.fe,["rajesh jam","809504"],y.w)
D.aeM=new A.bP(N.fe,["rahul","612340"],y.w)
D.aby=x([D.aeQ,D.aeM,N.Fx],A.A("l<am<f,f>>"))
D.FE=new A.bP(B.cc,[],A.A("bP<o,o>"))
D.apJ=new A.y(!0,B.o,null,null,null,null,14,B.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aq5=new A.y(!0,B.o,null,null,null,null,13,B.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.arg=new A.y(!0,B.h,null,null,null,null,32,B.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.arj=new A.y(!0,Aa.cQ,null,null,null,null,9,B.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.atG=new A.y(!0,B.h,null,null,null,null,22,B.P,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.atP=new A.y(!0,B.S,null,null,null,null,8,B.D,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.avg=new A.b2("2X",null,Aj.tQ,null,null,null,null,null,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"bZh","bAp",()=>W.jd(new C.bfh(),"red_black",!1,"Red & Black"))})()};
(a=>{a["vjjyvWZExpmyrH9i+SX9Hc9MQzI="]=a.current})($__dart_deferred_initializers__);