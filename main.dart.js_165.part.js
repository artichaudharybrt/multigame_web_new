((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,X,P,Y,Z,Q,M,C={
bVg(d){return B.k.ab(d,13)},
aK_(d){var x=A.aj(d).i("at<1,r>"),w=A.ag(new A.at(d,C.bJy(),x),x.i("aX.E"))
B.b.ed(w,new C.aK0())
return w},
bEj(d){var x=C.aK_(d),w=x[0],v=x[1]
return w===v&&v===x[2]},
bVe(d){var x,w,v
if(C.bEj(d))return!1
x=C.aK_(d)
w=x[0]
v=x[1]
return w===v||v===x[2]},
bVd(d){return B.b.f9(d,new C.aJZ(B.k.bj(d[0],13)))},
bVf(d){var x,w=new A.at(d,C.bJy(),A.aj(d).i("at<1,r>")).ib(0),v=A.ag(w,A.H(w).c)
B.b.hp(v)
if(v.length!==3)return!1
w=v[2]
x=v[0]
if(w-x===2&&v[1]-x===1)return!0
if(x===0&&v[1]===1&&w===12)return!0
return!1},
bvK(d){var x=C.bEj(d),w=C.bVd(d),v=C.bVf(d)
if(x)return 6
if(v&&w)return 5
if(v)return 4
if(w)return 3
if(C.bVe(d))return 2
return 1},
bEk(d,e){var x=C.bVc(d,e)>=0?0:1
return new A.aik(x,C.bvK(x===0?d:e))},
bVc(d,e){var x,w,v,u,t,s=C.bvK(d),r=C.bvK(e)
if(s!==r)return s>r?1:-1
x=C.aK_(d)
w=C.aK_(e)
for(v=0;v<3;++v){u=x[v]
t=w[v]
if(u!==t)return u>t?1:-1}return 0},
aK0:function aK0(){},
aJZ:function aJZ(d){this.a=d},
aKf:function aKf(d){this.a=d},
bVl(d){var x,w,v,u,t
for(x=["timer","time","value","countdown","t","sec","seconds","timeLeft"],w=J.M(d),v=0;v<8;++v){u=w.h(d,x[v])
if(A.cX(u))return u
if(typeof u=="number")return B.d.aj(u)
if(typeof u=="string"){t=A.cG(B.c.P(u),null)
if(t!=null)return t}}return null},
bVn(d){var x,w=J.M(d),v=w.h(d,"data"),u=y.f
if(u.b(v))return A.an(v,y.N,y.z)
x=w.h(d,"payload")
if(u.b(x))return A.an(x,y.N,y.z)
return d},
bvM(d,e){var x,w,v
if(!y.j.b(d))return null
x=A.a([],y.t)
for(w=J.aZ(d);w.A();){v=w.gO(w)
if(A.cX(v))x.push(v)
else if(typeof v=="number")x.push(B.d.aj(v))}if(e!=null)return x.length===e?x:null
return x.length>=3?x:null},
bEm(d){var x,w,v,u
if(d==null)return null
x=d.h(0,"redCards")
w=C.bvM(x==null?d.h(0,"red_cards"):x,3)
x=d.h(0,"blackCards")
v=C.bvM(x==null?d.h(0,"black_cards"):x,3)
if(w!=null&&v!=null)return new A.Vl(v,w)
u=C.bvM(d.h(0,"cards"),null)
if(u!=null&&u.length>=6){x=B.b.cP(u,0,3)
return new A.Vl(B.b.cP(u,3,6),x)}return null},
bVk(d){var x,w,v,u,t,s,r,q,p,o=null,n=J.M(d),m=n.h(d,"result"),l=m==null?n.h(d,"roundResult"):m,k=l==null?n.h(d,"gameResult"):l
if(typeof k=="string"){x=B.c.P(k)
if(J.au(x)!==0&&!J.f(x,"null"))try{k=B.O.bz(0,x,o)}catch(w){k=null}else k=null}n=y.f
if(n.b(k)){m={}
v=y.z
u=A.an(k,v,v)
t=y.N
m.a=A.F(t,v)
u.aJ(0,new C.aK7(m))
s=m.a.h(0,"data")
if(n.b(s)){r=A.an(s,v,v)
m.a=A.F(t,v)
r.aJ(0,new C.aK8(m))}q=m.a.h(0,"result")
if(A.cX(q))p=q
else p=typeof q=="number"?B.d.aj(q):o
return new A.C2(m.a,p)}if(A.cX(k))return new A.C2(o,k)
if(typeof k=="number")return new A.C2(o,B.d.aj(k))
return new A.C2(o,o)},
bVm(d,e){var x,w,v,u=C.bEm(e)
if(u!=null){x=C.bEk(u.b,u.a)
if(d===0||d===1)return d===x.a
if(d>=2&&d<=6)return d===x.b
return!1}w=e.h(0,"winning")
if(w==null)w=e.h(0,"result")
if(A.cX(w))v=w
else v=typeof w=="number"?B.d.aj(w):-1
switch(d){case 0:return v===0
case 1:return v===1
case 2:return J.f(e.h(0,"sidePair"),!0)
case 3:return J.f(e.h(0,"sideColor"),!0)
case 4:return J.f(e.h(0,"sideSeq"),!0)
case 5:return J.f(e.h(0,"sidePureSeq"),!0)
case 6:return J.f(e.h(0,"sideSet"),!0)
default:return!1}},
w4:function w4(d,e,f){var _=this
_.at=d
_.ay=_.ax=null
_.a=e
_.b=$
_.c=f
_.d=!1},
aKe:function aKe(d){this.a=d},
aK7:function aK7(d){this.a=d},
aK8:function aK8(d){this.a=d},
aK9:function aK9(){},
aKa:function aKa(d){this.a=d},
aKb:function aKb(d){this.a=d},
aKd:function aKd(d){this.a=d},
aKc:function aKc(d){this.a=d},
aK6:function aK6(d,e,f){this.a=d
this.b=e
this.c=f},
bEn(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w){return new C.kQ(j,h,i,m,u,q,r,v,g,p,o,!1,e,d,n,s,w,k,l,t)},
kQ:function kQ(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w){var _=this
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
bsq:function bsq(){},
FI:function FI(d,e){this.c=d
this.a=e},
aKj:function aKj(d){this.a=d},
aKh:function aKh(){},
aKi:function aKi(){},
aKg:function aKg(){},
aix:function aix(d,e,f){this.c=d
this.d=e
this.a=f},
bh5:function bh5(d){this.a=d},
bh6:function bh6(d){this.a=d},
bgX:function bgX(d){this.a=d},
bgY:function bgY(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
bh_:function bh_(d,e){this.a=d
this.b=e},
bh0:function bh0(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bgZ:function bgZ(d,e){this.a=d
this.b=e},
bh2:function bh2(){},
bh1:function bh1(d){this.a=d},
bh4:function bh4(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
bh3:function bh3(d,e,f){this.a=d
this.b=e
this.c=f},
bha:function bha(d,e){this.a=d
this.b=e},
bh9:function bh9(d,e,f){this.a=d
this.b=e
this.c=f},
bh8:function bh8(d,e,f){this.a=d
this.b=e
this.c=f},
bh7:function bh7(){}},D,A_,R,A0,S,A1,N,A2,A3,H,A4,L,A5,T,A6,G,A7,A8,F,E,O,I,K,U,A9,Aa,Ab,V,W
J=c[1]
A=c[0]
B=c[2]
X=c[165]
P=c[71]
Y=c[46]
Z=c[53]
Q=c[179]
M=c[37]
C=a.updateHolder(c[17],C)
D=c[180]
A_=c[167]
R=c[73]
A0=c[61]
S=c[64]
A1=c[57]
N=c[74]
A2=c[75]
A3=c[79]
H=c[66]
A4=c[60]
L=c[54]
A5=c[44]
T=c[63]
A6=c[84]
G=c[78]
A7=c[51]
A8=c[85]
F=c[68]
E=c[72]
O=c[65]
I=c[69]
K=c[55]
U=c[47]
A9=c[56]
Aa=c[31]
Ab=c[127]
V=c[143]
W=c[43]
C.aKf.prototype={
b4K(d){var x=M.o3("red_black")
if(x==null)return A.dQ(null,y.T)
return K.o2(x.b+"_1",d)},
aqt(d,e,f,g,h){var x=M.o3("red_black")
if(x==null)return null
return this.a.nF(0,x,e,f,g,h)},
bcj(d){var x=M.o3("red_black")
if(x==null)return A.dQ(B.bA,y.L)
return Z.r3(x.b,120,d)}}
C.w4.prototype={
jJ(){var x=this
A.dU()
if(x.c.b)return
x.aS0()
x.aS3()
x.vj()
H.rP(x.gaS2(),y.H)
x.ay=A.fA(A_.mX,new C.aKe(x))},
aT(d){var x=this.ay
if(x!=null)x.U(0)
x=this.ax
if(x!=null)x.a.$0()
A.dU()
return this.hT(0)},
iE(d){var x=this.c.f8(B.k.S(d,0,4))
if((this.gF().c&4)===0)this.J(x)
return null},
kT(d){var x=this.c.w.h(0,d)
if(x!=null&&x>0)return x
return null},
zr(){var x=0,w=A.p(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$zr=A.q(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.e(s.at.bcj($.aA),$async$zr)
case 7:r=e
q=s.gF()
if((q.c&4)!==0||J.ck(r)){x=1
break}p=s.c
o=J.e0(r,new C.aK9(),y.S)
o=A.ag(o,o.$ti.i("aX.E"))
p=p.b0i(o)
if((q.c&4)===0)s.J(p)
u=2
x=6
break
case 4:u=3
m=t.pop()
x=6
break
case 3:x=2
break
case 6:case 1:return A.n(v,w)
case 2:return A.m(t.at(-1),w)}})
return A.o($async$zr,w)},
vj(){var x=0,w=A.p(y.H),v=1,u=[],t=this,s,r,q,p,o
var $async$vj=A.q(function(d,e){if(d===1){u.push(e)
x=v}for(;;)switch(x){case 0:v=3
x=6
return A.e(t.at.b4K($.aA),$async$vj)
case 6:s=e
r=t.gF()
if((r.c&4)===0&&s!=null&&s.length!==0){q=t.c.f7(s)
if((r.c&4)===0)t.J(q)}v=1
x=5
break
case 3:v=2
o=u.pop()
x=5
break
case 2:x=1
break
case 5:return A.n(null,w)
case 1:return A.m(u.at(-1),w)}})
return A.o($async$vj,w)},
vi(d,e){return this.aLY(d,e)},
aS0(){return this.vi(!1,null)},
aLY(d,e){var x=0,w=A.p(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$vi=A.q(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:m=$.aA
if(m==null||m.length===0){x=1
break}u=4
p=e==null
o=s.at.a
x=p?7:9
break
case 7:x=10
return A.e(o.du(m),$async$vi)
case 10:x=8
break
case 9:x=11
return A.e(o.kn(m),$async$vi)
case 11:case 8:r=g
q=p?r:K.o_(d,s.c.at,r,e)
x=!p?12:13
break
case 12:x=14
return A.e(H.fc(q),$async$vi)
case 14:case 13:p=s.gF()
if((p.c&4)===0){o=s.c.e5(q)
if((p.c&4)===0)s.J(o)}u=2
x=6
break
case 4:u=3
l=t.pop()
x=6
break
case 3:x=2
break
case 6:case 1:return A.n(v,w)
case 2:return A.m(t.at(-1),w)}})
return A.o($async$vi,w)},
aS3(){var x=this,w=x.ax
if(w!=null)w.a.$0()
x.ax=x.at.aqt(0,new C.aKa(x),new C.aKb(x),new C.aKc(x),new C.aKd(x))},
aS1(d,e){var x,w,v,u,t,s,r,q,p=this,o={},n=p.gF()
if((n.c&4)!==0)return
x=p.c.w
w=x.gbc(x)
o.a=!1
if(w)if(e!=null){for(x=p.c.w,x=x.gdM(x),x=x.gad(x);x.A();)if(C.bVm(x.gO(x).a,e)){o.a=!0
break}}else for(x=p.c.w,x=x.gdM(x),x=x.gad(x);x.A();){v=x.gO(x).a
if(v<=1&&v===d){o.a=!0
break}}u=C.bEm(e)
x=u==null
t=x?null:u.b
s=x?null:u.a
r=!x?C.bEk(u.b,u.a).a:d
if(w){v=$.bG()
v.bt(0,o.a?P.bG:P.bY)}q=A.bF(p.c.cx,!0,y.S)
B.b.fe(q,0,r)
if(q.length>80)q.pop()
x=p.c.b2Z(x,w,q,!1,r,s,t,!0,o.a)
if((n.c&4)===0)p.J(x)
A.cr(B.bd,new C.aK6(o,p,w),y.H)},
eW(d){return this.baB(d)},
baB(d){var x=0,w=A.p(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$eW=A.q(function(e,a0){if(e===1){t.push(a0)
x=u}for(;;)switch(x){case 0:g=s.c
if(!g.d){g=g.hu("Wait for next round")
if((s.gF().c&4)===0)s.J(g)
x=1
break}l=g.f
if(l==null||l.length===0){g=g.hu("No active round \u2014 reconnecting\u2026")
if((s.gF().c&4)===0)s.J(g)
s.vj()
x=1
break}l=$.bb
k=l==null?null:l.a
r=k==null?"":k
if(J.au(r)===0){g=g.hu("Login required")
if((s.gF().c&4)===0)s.J(g)
x=1
break}q=N.aK[B.k.S(g.r,0,4)]
g=s.c
if(g.at<q){g=g.hu("Insufficient balance")
if((s.gF().c&4)===0)s.J(g)
x=1
break}if(!(g.d&&g.c>0&&g.f!=null)){g=g.hu(g.c<=0?"Betting time over \u2014 wait for next round":"Betting closed")
if((s.gF().c&4)===0)s.J(g)
x=1
break}$.bG().bt(0,A2.cW)
g=s.c
l=g.f
l.toString
p=l
l=y.S
j=K.nZ(g.w,d,q,l)
g=s.c
g=g.b1Z(g.at-q,!0,!0,j)
i=s.gF()
if((i.c&4)===0)s.J(g)
u=4
x=7
return A.e(K.o5(q,d,"red_black",p,$.aA,r),$async$eW)
case 7:u=2
x=6
break
case 4:u=3
f=t.pop()
o=A.a9(f)
if((i.c&4)!==0){x=1
break}n=o instanceof A9.hK?o.a:"Bet failed"
m=K.o6(s.c.w,d,q,l)
g=s.c
g=g.b1X(g.at+q,n,n,m)
if((i.c&4)===0)s.J(g)
x=6
break
case 3:x=2
break
case 6:case 1:return A.n(v,w)
case 2:return A.m(t.at(-1),w)}})
return A.o($async$eW,w)}}
C.kQ.prototype={
mh(d,e,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=a5==null?m.c:a5,j=a8==null?m.d:a8,i=b6==null?m.e:b6,h=b2==null?m.f:b2,g=b3==null?m.r:b3,f=b7==null?m.w:b7
if(a1)x=l
else x=m.x
if(a3)w=l
else w=b1==null?m.y:b1
if(a3)v=l
else v=b0==null?m.z:b0
if(a0)u=l
else u=e==null?m.as:e
t=d==null?m.at:d
if(a2)s=l
else s=a9==null?m.ax:a9
r=b4==null?m.ay:b4
q=b8==null?m.ch:b8
p=a6==null?m.CW:a6
o=a7==null?m.cx:a7
if(a4)n=l
else n=b5==null?m.cy:b5
return C.bEn(t,u,!1,x,m.b,k,m.a,p,o,j,s,v,w,h,g,r,n,i,f,q)},
f8(d){var x=null
return this.mh(x,x,!1,!1,!1,!1,!1,x,x,x,x,x,x,x,x,d,x,x,x,x,x)},
e5(d){var x=null
return this.mh(d,x,!1,!1,!1,!1,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x)},
f7(d){var x=null
return this.mh(x,x,!1,!1,!1,!1,!1,x,x,x,x,x,x,x,d,x,x,x,x,x,x)},
hc(d){var x=null
return this.mh(x,x,!1,!1,!1,!1,!1,d,x,x,x,x,x,x,x,x,x,x,x,x,x)},
d6(d){var x=null
return this.mh(x,x,!1,!1,!1,!1,!1,x,x,x,x,x,x,x,x,x,x,x,d,x,x)},
nb(d){var x=null
return this.mh(x,x,!1,!1,!1,!1,d,x,x,x,x,x,x,x,x,x,x,x,x,x,x)},
hu(d){var x=null
return this.mh(x,x,!1,!1,!1,!1,!1,x,x,x,x,x,x,x,x,x,x,d,x,x,x)},
b0i(d){var x=null
return this.mh(x,x,!1,!1,!1,!1,!1,x,x,d,x,x,x,x,x,x,x,x,x,x,x)},
b2Z(d,e,f,g,h,i,j,k,l){var x=null
return this.mh(x,x,!1,!1,!1,d,!1,x,e,f,g,h,i,j,x,x,k,x,x,x,l)},
b2w(d,e,f,g,h,i){var x=null
return this.mh(x,x,!1,!1,d,e,!1,x,f,x,g,x,x,x,x,x,h,x,x,i,x)},
b1Z(d,e,f,g){var x=null
return this.mh(d,x,e,f,!1,!1,!1,x,x,x,x,x,x,x,x,x,x,x,x,g,x)},
b1X(d,e,f,g){var x=null
return this.mh(d,e,!1,!1,!1,!1,!1,x,x,x,x,x,x,x,x,x,x,f,x,g,x)},
gdD(){var x=this
return[x.a,x.b,x.c,x.d,x.e,x.f,x.r,x.w,x.x,x.y,x.z,!1,x.as,x.at,x.ax,x.ay,x.ch,x.CW,x.cx,x.cy]}}
C.FI.prototype={
u(d){var x=y.D
return H.hf(A4.jH(new C.aKg(),new C.aKh(),new C.aKi(),x,y.R),new C.aKj(this),x)}}
C.aix.prototype={
u(d){return this.aS4(d,this.c,this.d)},
aS4(d,e,f){var x,w,v=null
if(e.b)return A.cP(O.JA(v,v,v,v,v,v,A.l(e.a,v,v,v,v,v,v,v,v),v),G.dZ,Q.xj,v)
x=A.bk(d,B.w4,y.w).w
w=e.ay&&e.ch
return new A0.hw(w,this.aS_(d,e,f,x.w.b+6),v)},
aS_(d,e,f,g){var x,w=this,v=null,u=e.e,t=u&&e.d&&e.c>1,s=A.bO(0,A.bJ(v,Y.xQ(d,E.S,D.akl,E.Z,v),B.Y)),r=A.bO(0,A.bJ(v,new A.t(v,v,v,v,v,new F.ai(B.Q,B.W,B.t,A.a([I.bv.j(0.04),B.w,B.l.j(0.55)],y.O),v,v),B.m),B.Y)),q=y.p,p=A.a([A.bO(0,A.dh(new A.a2(new A.A(0,56,0,96),F.S(A.a([U.buN(!1,v,v,!0,B.p,v,v,76,D.ajY,v,v),G.bZ,U.buN(!1,v,v,!0,B.p,v,v,76,D.afS,v,v)],q),E.j,B.i,E.n,0),v),!0,v))],q)
if(!u)p.push(A.aH(v,A.ah(A6.dp,B.ck,v,v,22),v,v,v,10,10,v))
u=e.ay
if(u)p.push(A.bO(0,A.dh(A.bJ(v,new A.t(B.l.j(0.42),v,v,v,v,v,B.m),B.Y),!0,v)))
p.push(new A.a2(new A.A(72,4,72,96),F.P(A.a([new A.G(v,B.d.S(Math.min(118,A.bk(d,B.bK,y.w).w.a.gdK()*0.3),92,124),w.aze(d),v),G.aw,F.Q(w.aA5(d),1)],q),E.j,B.i,E.n),v))
if(u)p.push(A.bO(0,w.aSK(d)))
u=w.c
x=$.bb
x=x==null?v:x.b
if(x==null)x="Player"
p.push(new A.bE(B.W,v,v,new A5.os(K.n3(u.at,60,58,5,50,N.aK,B.p,200,w.d.giD(),x,u.d,u.ay,u.r,!0),v),v))
p.push(A.aH(v,F.S(A.a([w.a5O(G.bM,new C.bh5(d)),E.a2,w.a5O(I.c6,new C.bh6(d))],q),E.j,B.i,E.v,0),v,v,8,v,g,v))
return A.cP(v,v,L.on(new A.ay(B.C,v,B.at,B.u,A.a([s,r,A.cC(!1,new A.ay(B.C,v,B.K,B.f,p,v),B.N,!1)],q),v),t),v)},
a5O(d,e){var x=null,w=B.l.j(0.55),v=F.R(B.p.j(0.65),1.5)
return A.b1(!1,B.z,!0,x,A.b9(!1,x,!0,A.y(B.q,A.ah(d,B.p,x,x,20),B.f,x,x,new A.t(w,x,v,x,x,x,B.F),x,44,x,x,x,x,x,44),B.bb,!0,x,x,x,x,x,x,x,x,e,x,x,x,x,x,x,x),B.f,B.w,0,x,x,x,x,x,B.G)},
aze(d){return A.cd(new C.bgX(this))},
a5o(d,e,f,g){var x,w=null,v=B.k.S(e,1,3),u=B.d.S(g*0.62,30,44),t=g+u*(v-1),s=B.l.j(0.32),r=A.x(8),q=F.R(B.p.j(0.28),1),p=A.a([],y.p)
for(x=0;x<v;++x)p.push(new A.hq(x*u,0,w,w,w,w,d.$1(x),w))
return A.y(w,new A.G(t,f,new A.ay(B.C,w,B.K,B.f,p,w),w),B.f,w,w,new A.t(s,w,q,r,w,w,B.m),w,f+8,w,w,D.a5r,w,w,t+10)},
a5n(d,e){return this.a5o(new C.bh_(e,d),3,d,e)},
aAL(d,e,f){var x=d.length
if(x===0)return this.a5n(e,f)
return this.a5o(new C.bh0(this,d,f,e),B.k.S(x,1,3),e,f)},
aA5(d){var x=this.c
return A.cd(new C.bgZ(this,x.d&&x.c>0&&x.f!=null))},
aS5(d){var x=null,w=B.l.j(0.45),v=A.x(8),u=F.R(B.p.j(0.35),1),t=this.c.cx.length
t=t===0?A.aD(A.l("History",x,x,x,x,x,A.B(x,x,B.h.j(0.35),x,x,x,x,x,x,x,x,11,x,x,B.R,x,x,!0,x,x,x,x,x,x,x,x),x,x),x,x):O.j7(x,new C.bh1(this),t,I.rz,x,!0,B.aU,new C.bh2(),!1)
return A.bJ(t,new A.t(w,x,u,v,x,x,B.m),B.Y)},
aak(d,e,f){var x=f?0:1,w=this.d.kT(x)
return new L.hY(new A.e1(new C.bh4(this,e,x,f?B.cd:G.cP,f,w,d),null),null)},
aV8(d){var x=y.n
x=A.ag(new A.at(D.adh,new C.bha(this,d),x),x.i("aX.E"))
return F.S(x,E.j,B.i,E.n,0)},
aSK(d){var x,w,v,u,t,s,r=null,q=this.c,p=q.ax
if(p==null)return B.an
x=p===0?"RED":"BLACK"
p=B.l.j(0.82)
w=A.x(16)
v=F.R(B.p.j(0.55),1)
u=A.a([new A.U(0,B.r,B.l.j(0.5),B.o,20)],y.V)
t=A.a([],y.p)
if(q.CW){q=q.ch
s=q?"WON!":"LOST"
t.push(new A.a2(I.iC,A.l(s,r,r,r,r,r,A.B(r,r,q?A8.fI:I.cf,r,r,r,r,r,r,r,r,26,r,r,B.D,r,r,!0,r,r,r,r,r,r,r,r),r,r),r))}t.push(A.l(x,r,r,r,r,r,D.aCl,r,r))
t.push(E.aY)
t.push(H.bu("assets/games_assets/red_black/ic_game_over.png",B.q,r,r,r,r,r,r,new C.bh7(),!1,B.U,E.aj,r,!1,r,!1,r,!1,r,r,G.T,r,r,100))
return A.dh(A.aD(A.y(r,F.P(t,E.j,B.i,E.v),B.f,r,r,new A.t(p,r,v,w,u,r,B.m),r,r,r,r,D.a56,r,r,r),r,r),!0,r)}}
var z=a.updateTypes(["~(r)","al<~>()","FI(u,ab<h,@>)","w4(u)","L(kQ,kQ)","~(u,kQ)","c(u,kQ)","im(u,ac)","ee(+choice,label,mult(r,h,h))","r(r)"])
C.aK0.prototype={
$2(d,e){return B.k.bl(e,d)},
$S:71}
C.aJZ.prototype={
$1(d){return B.k.bj(d,13)===this.a},
$S:50}
C.aKe.prototype={
$1(d){var x,w=this.a
if((w.gF().c&4)!==0)return
x=w.c
if(x.f==null||!x.e)w.vj()},
$S:14}
C.aK7.prototype={
$2(d,e){this.a.a.k(0,J.J(d),e)
return e},
$S:67}
C.aK8.prototype={
$2(d,e){this.a.a.k(0,J.J(d),e)
return e},
$S:67}
C.aK9.prototype={
$1(d){return B.k.S(d,0,1)},
$S:51}
C.aKa.prototype={
$0(){var x,w=this.a,v=w.gF()
if((v.c&4)!==0)return
x=w.c.d6(!0)
if((v.c&4)===0)w.J(x)
w.vj()
w.zr()},
$S:0}
C.aKb.prototype={
$0(){var x,w=this.a,v=w.gF()
if((v.c&4)===0){x=w.c.d6(!1)
if((v.c&4)===0)w.J(x)}},
$S:0}
C.aKd.prototype={
$1(d){var x,w=this.a,v=w.gF()
if((v.c&4)===0){x=w.c.hc(d)
if((v.c&4)===0)w.J(x)}},
$S:12}
C.aKc.prototype={
$1(d){var x,w,v,u,t,s,r,q,p=this.a,o=p.gF()
if((o.c&4)!==0)return
x=C.bVn(d)
w=K.mN(x)
v=A.aQ(J.C(x,"status"))
u=v==null?null:v.toLowerCase()
if(w!=null){t=p.c.f7(w)
if((o.c&4)===0)p.J(t)}s=C.bVl(x)
if(s!=null&&u!=="finished"){t=p.c.hc(s)
if((o.c&4)===0)p.J(t)}if(u==="finished"){r=C.bVk(x)
q=r.b
if(q!=null)p.aS1(B.k.S(q,0,1),r.a)}},
$S:28}
C.aK6.prototype={
$0(){var x,w=this.b,v=w.gF()
if((v.c&4)!==0)return
x=w.c.b2w(!0,!0,!1,!0,!1,R.bu)
if((v.c&4)===0)w.J(x)
w.vi(this.c,this.a.a)
w.zr()},
$S:7}
C.bsq.prototype={
$2(d,e){return new C.FI(A.aQ(J.C(e,"gameName")),null)},
$S:z+2}
C.aKj.prototype={
$1(d){var x,w,v=null,u=this.a.c,t=A.cb()
t=new F.eL(t)
t=new A7.nx(t)
t=new C.aKf(t)
if(u==null)u="Red & Black"
x=M.o3("red_black")
w=$.bb
w=w==null?v:w.d
if(w==null)w=0
u=C.bEn(w,v,!1,v,x==null,0,u,!1,B.bA,!0,v,v,v,v,1,!1,v,!1,R.bu,!1)
y.u.a($.aF.h(0,$.ha()))
u=new C.w4(t,G.bL,u)
u.jJ()
return u},
$S:z+3}
C.aKh.prototype={
$2(d,e){var x=e.cy
return d.cy!=x&&x!=null},
$S:z+4}
C.aKi.prototype={
$2(d,e){var x,w,v=null,u=e.cy
if(u!=null){d.X(y.q).f.b4(F.c8(v,v,v,v,v,B.u,v,A.l(u,v,v,v,v,v,v,v,v),v,E.a1,v,v,v,v,v,v,v,v,v,v))
x=H.aC(d,!1,y.D)
w=x.c.nb(!0)
if((x.gF().c&4)===0)x.J(w)}},
$S:z+5}
C.aKg.prototype={
$2(d,e){var x=null
if(e.b)return A.cP(O.JA(x,x,x,x,x,x,A.l(e.a,x,x,x,x,x,x,x,x),x),G.dZ,Q.xj,x)
return new C.aix(e,H.aC(d,!1,y.D),x)},
$S:z+6}
C.bh5.prototype={
$0(){var x=this.a,w=A.aS(x,!1)
if(w.t3())w.bg(0)
else T.iT(x)},
$S:0}
C.bh6.prototype={
$0(){return T.iT(this.a)},
$S:0}
C.bgX.prototype={
$2(d,e){var x=null,w=e.d,v=B.d.S(w*0.7,52,70),u=B.d.S(w*0.9,68,100),t=w<112?8:12,s=B.d.S(Math.min(96,e.b*0.16),72,100),r=this.a,q=new C.bgY(r,v*0.7142857142857143,v,u*0.7,u,t),p=F.Q(q.$1$red(!0),2),o=Math.min(52,w*0.42),n=y.p
return F.S(A.a([p,new A.G(s,x,F.P(A.a([F.Q(A.aD(new Aa.wR(o,x,E.aj,B.N,x),x,x),1),new L.ky(r.c.c,o,x)],n),E.j,B.a_,E.n),x),F.Q(q.$1$red(!1),2)],n),E.j,B.i,E.n,0)},
$S:z+7}
C.bgY.prototype={
$1$red(d){var x,w,v,u,t=this,s=null,r=t.a,q=r.c,p=d?q.y:q.z,o=d?"assets/games_assets/red_black/ic_red_hearts.webp":"assets/games_assets/red_black/ic_black_spade.webp"
q=t.b
x=t.c
w=p!=null?r.aAL(p,x,q):r.a5n(x,q)
r=t.d
q=t.e
x=t.f
v=y.p
u=d?A.a([new A.G(r,q,H.bu(o,B.q,s,s,s,s,s,s,s,!1,B.U,E.aj,s,!1,s,!1,s,!1,s,s,G.T,s,s,s),s),new A.G(x,s,s,s),w],v):A.a([w,new A.G(x,s,s,s),new A.G(r,q,H.bu(o,B.q,s,s,s,s,s,s,s,!1,B.U,E.aj,s,!1,s,!1,s,!1,s,s,G.T,s,s,s),s)],v)
r=d?B.a0:E.V
q=d?B.a0:E.V
return new A.bE(r,s,s,F.cQ(q,F.S(u,E.j,B.i,E.v,0),E.ar),s)},
$S:680}
C.bh_.prototype={
$1(d){var x=null,w=this.a
return A.dC(A.x(Math.min(6,w*0.12)),H.bu("assets/games_assets/red_black/card_bg.png",B.q,x,x,x,x,x,x,x,!1,B.U,E.aH,x,!1,this.b,!1,x,!1,x,x,G.T,x,x,w),B.ak,x)},
$S:681}
C.bh0.prototype={
$1(d){var x,w,v,u,t,s,r,q,p,o,n=null,m=this.b[d],l=this.c,k=A3.kX[B.k.ab(m,13)]
m=B.k.bj(m,13)
x=D.afT[m]
w=m===1||m===2?B.cd:G.cP
v=Math.min(6,l*0.12)
u=Math.max(3,l*0.07)
t=B.d.S(k==="10"?l*0.26:l*0.32,12,18)
s=B.d.S(l*0.24,10,15)
r=B.d.S(l*0.4,16,28)
m=A.x(v)
q=F.R(B.p.j(0.7),1.2)
p=A.a([new A.U(0,B.r,B.l.j(0.45),V.Ix,5)],y.V)
o=y.p
return A.y(n,new A.ay(B.C,n,B.K,B.u,A.a([A.aH(n,F.P(A.a([A.l(k,n,n,n,n,n,A.B(n,n,w,n,n,n,n,n,n,n,n,t,n,n,B.D,n,1,!0,n,n,n,n,n,n,n,n),n,n),A.l(x,n,n,n,n,n,A.B(n,n,w,n,n,n,n,n,n,n,n,s,n,n,n,n,1,!0,n,n,n,n,n,n,n,n),n,n)],o),E.j,B.i,E.v),n,n,u,n,u*0.45,n),A.aD(A.l(x,n,n,n,n,n,A.B(n,n,w.j(0.92),n,n,n,n,n,n,n,n,r,n,n,n,n,1,!0,n,n,n,n,n,n,n,n),n,n),n,n)],o),n),B.f,n,n,new A.t(n,n,q,m,p,V.C6,B.m),n,this.d,n,n,n,n,n,l)},
$S:120}
C.bgZ.prototype={
$2(d,e){var x=null,w=B.d.S(e.b,280,720),v=Math.min(e.d,w*0.72),u=Math.min(w,v/0.42),t=A.x(18),s=A.a([new A.U(1,B.r,B.p.j(0.25),B.o,14),new A.U(0,B.r,B.l.j(0.6),E.ez,18)],y.V),r=u*0.04,q=this.a,p=this.b,o=y.p
return A.aD(A.y(x,A.dC(A.x(15),new A.ay(B.C,x,B.at,B.u,A.a([A.y(x,x,B.f,D.XH,x,x,x,x,x,x,x,x,x,x),H.bu("assets/games_assets/red_black/table.webp",B.q,x,x,x,x,x,x,x,!1,B.U,E.aH,x,!1,x,!1,x,!1,x,x,G.T,x,x,x),A.dh(A.bJ(x,new A.t(x,x,x,x,x,new F.ai(B.Q,B.W,B.t,A.a([B.l.j(0.12),B.w,B.l.j(0.25)],y.O),x,x),B.m),B.Y),!0,x),new A.a2(new A.A(r,v*0.04,r,v*0.05),F.P(A.a([new A.G(x,v*0.09,q.aS5(d),x),new A.G(x,v*0.03,x,x),F.Q(F.S(A.a([F.Q(q.aak(d,p,!0),1),new A.G(u*0.02,x,x,x),F.Q(q.aak(d,p,!1),1)],o),E.a7,B.i,E.n,0),5),new A.G(x,v*0.025,x,x),new A.G(x,v*0.32,q.aV8(p),x)],o),E.a7,B.i,E.n),x)],o),x),B.ak,x),B.f,x,x,new A.t(x,x,x,t,s,D.abF,B.m),x,v,x,x,G.hi,x,x,u),x,x)},
$S:36}
C.bh2.prototype={
$2(d,e){return G.d8},
$S:22}
C.bh1.prototype={
$2(d,e){var x=null,w=this.a.c.cx[e]===0?B.dA:B.ic
return A.y(x,x,B.f,x,x,new A.t(w,x,F.R(B.p.j(0.4),1),x,x,x,B.F),x,22,x,x,x,x,x,22)},
$S:122}
C.bh4.prototype={
$1(d){var x=this,w=null,v=x.b?1:0.62,u=A.x(14),t=A.x(14),s=F.R(B.p.j(0.55),1.5),r=A.a([new A.U(0,B.r,B.l.j(0.35),G.bw,8)],y.V),q=A.aH(w,A.y(w,D.aGJ,B.f,w,w,new A.t(B.l.j(0.35),w,w,A.x(6),w,w,B.m),w,w,w,w,I.ng,w,w,w),w,w,w,8,6,w),p=A.aD(A.l(x.e?"RED":"BLACK",w,w,w,w,w,D.aFb,w,w),w,w),o=B.l.j(0.5),n=A.x(20),m=F.R(B.p.j(0.4),1),l=x.f,k=l!=null
q=A.a([q,p,A.aH(8,A.aD(new L.hX(A.y(w,A.l(k?"\u20b9 "+A.v(l):"0",w,w,w,w,w,D.aAP,w,w),B.f,w,w,new A.t(o,w,m,n,w,w,B.m),w,w,w,w,X.nb,w,w,w),w),w,w),w,w,0,0,w,w)],y.p)
if(k)q.push(A.aH(0,A.aD(A.dG(A1.Kt(l,Math.min(76,A.bk(x.r,B.bK,y.w).w.a.gdK()*0.18)),0.85),w,w),w,w,0,0,0,w))
return A.dG(A.b1(!1,B.z,!0,w,A.b9(!1,u,!0,H.f7(new A.ay(B.C,w,B.K,B.u,q,w),w,new A.t(x.d,w,s,t,r,w,B.m),w,w,w),w,!0,w,w,w,w,w,w,w,w,new C.bh3(x.a,d,x.c),w,w,w,w,w,w,w),B.f,B.w,0,w,w,w,w,w,B.G),v)},
$S:682}
C.bh3.prototype={
$0(){var x=this.a,w=x.c,v=N.aK[w.r]
if(w.at>=v)W.v5(this.b,v)
x.d.eW(this.c)},
$S:0}
C.bha.prototype={
$1(d){var x=this.a,w=x.d.kT(d.a),v=this.b?1:0.62
return F.Q(new A.a2(Ab.iE,A.dG(new L.hY(new A.e1(new C.bh9(x,d,w),null),null),v),null),1)},
$S:z+8}
C.bh9.prototype={
$1(d){var x=null,w=this.b,v=A.x(10),u=A.x(10),t=F.R(B.p.j(0.25),1),s=A.l(w.b,x,1,B.H,x,x,D.aFm,x,x),r=A.l(w.c,x,x,x,x,x,A.B(x,x,B.p.j(0.9),x,x,x,x,x,x,x,x,9,x,x,B.x,x,x,!0,x,x,x,x,x,x,x,x),x,x),q=this.c
return A.b1(!1,B.z,!0,x,A.b9(!1,v,!0,H.f7(F.P(A.a([s,r,new L.hX(A.l(q!=null?"\u20b9 "+A.v(q):"0",x,x,x,x,x,D.aCo,x,x),x)],y.p),E.j,B.a_,E.n),x,new A.t(D.Zj,x,t,u,x,x,B.m),x,D.a5b,x),x,!0,x,x,x,x,x,x,x,x,new C.bh8(this.a,d,w),x,x,x,x,x,x,x),B.f,B.w,0,x,x,x,x,x,B.G)},
$S:72}
C.bh8.prototype={
$0(){var x=this.a,w=x.c,v=N.aK[w.r]
if(w.at>=v)W.v5(this.b,v)
x.d.eW(this.c.a)},
$S:0}
C.bh7.prototype={
$3(d,e,f){return B.an},
$S:15};(function installTearOffs(){var x=a._static_1,w=a._instance_1u,v=a._instance_0u
x(C,"bJy","bVg",9)
var u
w(u=C.w4.prototype,"giD","iE",0)
v(u,"gaS2","zr",1)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.ed,[C.aK0,C.aK7,C.aK8,C.bsq,C.aKh,C.aKi,C.aKg,C.bgX,C.bgZ,C.bh2,C.bh1])
x(A.cZ,[C.aJZ,C.aKe,C.aK9,C.aKd,C.aKc,C.aKj,C.bgY,C.bh_,C.bh0,C.bh4,C.bha,C.bh9,C.bh7])
w(C.aKf,A.I)
w(C.w4,S.he)
x(A.ec,[C.aKa,C.aKb,C.aK6,C.bh5,C.bh6,C.bh3,C.bh8])
w(C.kQ,H.fQ)
x(A.O,[C.FI,C.aix])})()
A.da(b.typeUniverse,JSON.parse('{"w4":{"cF":["kQ"],"eV":["kQ"],"cF.0":"kQ"},"FI":{"O":[],"c":[]},"aix":{"O":[],"c":[]}}'))
var y=(function rtii(){var x=A.a0
return{l:x("cq<h,h>"),V:x("w<U>"),O:x("w<d>"),m:x("w<ab<h,h>>"),p:x("w<c>"),t:x("w<r>"),j:x("T<@>"),L:x("T<r>"),f:x("ab<@,@>"),n:x("at<+choice,label,mult(r,h,h),ee>"),w:x("f9"),D:x("w4"),R:x("kQ"),N:x("h"),q:x("fL"),z:x("@"),S:x("r"),u:x("iX?"),T:x("h?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.XH=new A.d(1,0.050980392156862744,0.30196078431372547,0.1843137254901961,B.e)
D.Zj=new A.d(1,0.17647058823529413,0.17647058823529413,0.20784313725490197,B.e)
D.a56=new A.A(28,20,28,20)
D.a5b=new A.A(2,4,2,4)
D.a5r=new A.A(5,4,5,4)
D.a1W=new A.d(1,0.9882352941176471,0.9647058823529412,0.7294117647058823,B.e)
D.WG=new A.d(1,0.7019607843137254,0.5294117647058824,0.1568627450980392,B.e)
D.acf=x([I.L,D.a1W,D.WG,I.L],y.O)
D.abF=new F.ai(E.S,E.Z,B.t,D.acf,null,null)
D.au9=new A.xe(2,"PAIR","3.5x")
D.aug=new A.xe(3,"COLOR","10x")
D.au0=new A.xe(4,"SEQ","15x")
D.atW=new A.xe(5,"PURE SEQ","100x")
D.au5=new A.xe(6,"SET","100x")
D.adh=x([D.au9,D.aug,D.au0,D.atW,D.au5],A.a0("w<+choice,label,mult(r,h,h)>"))
D.afS=x([B.I6,B.I5,B.I4],y.m)
D.afT=x(["\u2663","\u2666","\u2665","\u2660"],A.a0("w<h>"))
D.aot=new A.cq(B.fJ,["rajesh jam","809504"],y.l)
D.aor=new A.cq(B.fJ,["rahul","612340"],y.l)
D.ajY=x([D.aot,D.aor,B.I3],y.m)
D.a_n=new A.d(1,0.10196078431372549,0.0392156862745098,0.09411764705882353,B.e)
D.VY=new A.d(1,0.050980392156862744,0.023529411764705882,0.06274509803921569,B.e)
D.a0s=new A.d(1,0.07058823529411765,0.03137254901960784,0.10980392156862745,B.e)
D.akl=x([D.a_n,D.VY,D.a0s],y.O)
D.aAP=new A.z(!0,B.p,null,null,null,null,13,B.x,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aCl=new A.z(!0,B.h,null,null,null,null,32,B.D,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aCo=new A.z(!0,G.bQ,null,null,null,null,9,B.R,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aFb=new A.z(!0,B.h,null,null,null,null,22,B.D,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aFm=new A.z(!0,B.J,null,null,null,null,8,B.B,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aGJ=new A.aw("2X",null,G.oP,null,null,null,null,null,null,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"ccq","bOb",()=>S.j0(new C.bsq(),"red_black",!1,"Red & Black"))})()};
(a=>{a["J8qZDRPyAhAu8F87ZzTH8yeg4Ac="]=a.current})($__dart_deferred_initializers__);