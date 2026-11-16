((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,X,P,Y,Z,Q,M,C={
bVa(d){return B.k.ac(d,13)},
aK0(d){var x=A.aj(d).i("as<1,r>"),w=A.ag(new A.as(d,C.bJs(),x),x.i("aX.E"))
B.b.ed(w,new C.aK1())
return w},
bEd(d){var x=C.aK0(d),w=x[0],v=x[1]
return w===v&&v===x[2]},
bV8(d){var x,w,v
if(C.bEd(d))return!1
x=C.aK0(d)
w=x[0]
v=x[1]
return w===v||v===x[2]},
bV7(d){return B.b.f9(d,new C.aK_(B.k.bj(d[0],13)))},
bV9(d){var x,w=new A.as(d,C.bJs(),A.aj(d).i("as<1,r>")).ib(0),v=A.ag(w,A.H(w).c)
B.b.hn(v)
if(v.length!==3)return!1
w=v[2]
x=v[0]
if(w-x===2&&v[1]-x===1)return!0
if(x===0&&v[1]===1&&w===12)return!0
return!1},
bvD(d){var x=C.bEd(d),w=C.bV7(d),v=C.bV9(d)
if(x)return 6
if(v&&w)return 5
if(v)return 4
if(w)return 3
if(C.bV8(d))return 2
return 1},
bEe(d,e){var x=C.bV6(d,e)>=0?0:1
return new A.aik(x,C.bvD(x===0?d:e))},
bV6(d,e){var x,w,v,u,t,s=C.bvD(d),r=C.bvD(e)
if(s!==r)return s>r?1:-1
x=C.aK0(d)
w=C.aK0(e)
for(v=0;v<3;++v){u=x[v]
t=w[v]
if(u!==t)return u>t?1:-1}return 0},
aK1:function aK1(){},
aK_:function aK_(d){this.a=d},
aKg:function aKg(d){this.a=d},
bVf(d){var x,w,v,u,t
for(x=["timer","time","value","countdown","t","sec","seconds","timeLeft"],w=J.M(d),v=0;v<8;++v){u=w.h(d,x[v])
if(A.cZ(u))return u
if(typeof u=="number")return B.d.aj(u)
if(typeof u=="string"){t=A.cG(B.c.O(u),null)
if(t!=null)return t}}return null},
bVh(d){var x,w=J.M(d),v=w.h(d,"data"),u=y.f
if(u.b(v))return A.an(v,y.N,y.z)
x=w.h(d,"payload")
if(u.b(x))return A.an(x,y.N,y.z)
return d},
bvF(d,e){var x,w,v
if(!y.j.b(d))return null
x=A.a([],y.t)
for(w=J.b_(d);w.A();){v=w.gP(w)
if(A.cZ(v))x.push(v)
else if(typeof v=="number")x.push(B.d.aj(v))}if(e!=null)return x.length===e?x:null
return x.length>=3?x:null},
bEg(d){var x,w,v,u
if(d==null)return null
x=d.h(0,"redCards")
w=C.bvF(x==null?d.h(0,"red_cards"):x,3)
x=d.h(0,"blackCards")
v=C.bvF(x==null?d.h(0,"black_cards"):x,3)
if(w!=null&&v!=null)return new A.Vl(v,w)
u=C.bvF(d.h(0,"cards"),null)
if(u!=null&&u.length>=6){x=B.b.cP(u,0,3)
return new A.Vl(B.b.cP(u,3,6),x)}return null},
bVe(d){var x,w,v,u,t,s,r,q,p,o=null,n=J.M(d),m=n.h(d,"result"),l=m==null?n.h(d,"roundResult"):m,k=l==null?n.h(d,"gameResult"):l
if(typeof k=="string"){x=B.c.O(k)
if(J.au(x)!==0&&!J.f(x,"null"))try{k=B.O.bz(0,x,o)}catch(w){k=null}else k=null}n=y.f
if(n.b(k)){m={}
v=y.z
u=A.an(k,v,v)
t=y.N
m.a=A.F(t,v)
u.aJ(0,new C.aK8(m))
s=m.a.h(0,"data")
if(n.b(s)){r=A.an(s,v,v)
m.a=A.F(t,v)
r.aJ(0,new C.aK9(m))}q=m.a.h(0,"result")
if(A.cZ(q))p=q
else p=typeof q=="number"?B.d.aj(q):o
return new A.C2(m.a,p)}if(A.cZ(k))return new A.C2(o,k)
if(typeof k=="number")return new A.C2(o,B.d.aj(k))
return new A.C2(o,o)},
bVg(d,e){var x,w,v,u=C.bEg(e)
if(u!=null){x=C.bEe(u.b,u.a)
if(d===0||d===1)return d===x.a
if(d>=2&&d<=6)return d===x.b
return!1}w=e.h(0,"winning")
if(w==null)w=e.h(0,"result")
if(A.cZ(w))v=w
else v=typeof w=="number"?B.d.aj(w):-1
switch(d){case 0:return v===0
case 1:return v===1
case 2:return J.f(e.h(0,"sidePair"),!0)
case 3:return J.f(e.h(0,"sideColor"),!0)
case 4:return J.f(e.h(0,"sideSeq"),!0)
case 5:return J.f(e.h(0,"sidePureSeq"),!0)
case 6:return J.f(e.h(0,"sideSet"),!0)
default:return!1}},
w5:function w5(d,e,f){var _=this
_.at=d
_.ay=_.ax=null
_.a=e
_.b=$
_.c=f
_.d=!1},
aKf:function aKf(d){this.a=d},
aK8:function aK8(d){this.a=d},
aK9:function aK9(d){this.a=d},
aKa:function aKa(){},
aKb:function aKb(d){this.a=d},
aKc:function aKc(d){this.a=d},
aKe:function aKe(d){this.a=d},
aKd:function aKd(d){this.a=d},
aK7:function aK7(d,e,f){this.a=d
this.b=e
this.c=f},
bEh(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w){return new C.kQ(j,h,i,m,u,q,r,v,g,p,o,!1,e,d,n,s,w,k,l,t)},
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
bsj:function bsj(){},
FI:function FI(d,e){this.c=d
this.a=e},
aKk:function aKk(d){this.a=d},
aKi:function aKi(){},
aKj:function aKj(){},
aKh:function aKh(){},
aix:function aix(d,e,f){this.c=d
this.d=e
this.a=f},
bgZ:function bgZ(d){this.a=d},
bh_:function bh_(d){this.a=d},
bgQ:function bgQ(d){this.a=d},
bgR:function bgR(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
bgT:function bgT(d,e){this.a=d
this.b=e},
bgU:function bgU(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bgS:function bgS(d,e){this.a=d
this.b=e},
bgW:function bgW(){},
bgV:function bgV(d){this.a=d},
bgY:function bgY(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
bgX:function bgX(d,e,f){this.a=d
this.b=e
this.c=f},
bh3:function bh3(d,e){this.a=d
this.b=e},
bh2:function bh2(d,e,f){this.a=d
this.b=e
this.c=f},
bh1:function bh1(d,e,f){this.a=d
this.b=e
this.c=f},
bh0:function bh0(){}},D,A_,R,A0,S,A1,N,A2,A3,H,A4,L,A5,T,A6,G,A7,A8,F,E,O,I,K,U,A9,Aa,Ab,V,W
J=c[1]
A=c[0]
B=c[2]
X=c[163]
P=c[71]
Y=c[46]
Z=c[53]
Q=c[177]
M=c[37]
C=a.updateHolder(c[17],C)
D=c[178]
A_=c[165]
R=c[73]
A0=c[61]
S=c[64]
A1=c[57]
N=c[74]
A2=c[75]
A3=c[78]
H=c[66]
A4=c[60]
L=c[54]
A5=c[44]
T=c[63]
A6=c[83]
G=c[77]
A7=c[51]
A8=c[84]
F=c[68]
E=c[72]
O=c[65]
I=c[69]
K=c[55]
U=c[47]
A9=c[56]
Aa=c[31]
Ab=c[125]
V=c[141]
W=c[43]
C.aKg.prototype={
b4G(d){var x=M.o2("red_black")
if(x==null)return A.dQ(null,y.T)
return K.o1(x.b+"_1",d)},
aqs(d,e,f,g,h){var x=M.o2("red_black")
if(x==null)return null
return this.a.nF(0,x,e,f,g,h)},
bcf(d){var x=M.o2("red_black")
if(x==null)return A.dQ(B.bB,y.L)
return Z.r1(x.b,120,d)}}
C.w5.prototype={
jJ(){var x=this
A.dU()
if(x.c.b)return
x.aS_()
x.aS2()
x.vi()
H.rO(x.gaS1(),y.H)
x.ay=A.fz(A_.mW,new C.aKf(x))},
aT(d){var x=this.ay
if(x!=null)x.U(0)
x=this.ax
if(x!=null)x.a.$0()
A.dU()
return this.hU(0)},
iE(d){var x=this.c.f8(B.k.S(d,0,4))
if((this.gF().c&4)===0)this.J(x)
return null},
kU(d){var x=this.c.w.h(0,d)
if(x!=null&&x>0)return x
return null},
zq(){var x=0,w=A.p(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$zq=A.q(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.e(s.at.bcf($.aA),$async$zq)
case 7:r=e
q=s.gF()
if((q.c&4)!==0||J.ck(r)){x=1
break}p=s.c
o=J.e0(r,new C.aKa(),y.S)
o=A.ag(o,o.$ti.i("aX.E"))
p=p.b0h(o)
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
return A.o($async$zq,w)},
vi(){var x=0,w=A.p(y.H),v=1,u=[],t=this,s,r,q,p,o
var $async$vi=A.q(function(d,e){if(d===1){u.push(e)
x=v}for(;;)switch(x){case 0:v=3
x=6
return A.e(t.at.b4G($.aA),$async$vi)
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
return A.o($async$vi,w)},
vh(d,e){return this.aLW(d,e)},
aS_(){return this.vh(!1,null)},
aLW(d,e){var x=0,w=A.p(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$vh=A.q(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:m=$.aA
if(m==null||m.length===0){x=1
break}u=4
p=e==null
o=s.at.a
x=p?7:9
break
case 7:x=10
return A.e(o.du(m),$async$vh)
case 10:x=8
break
case 9:x=11
return A.e(o.kn(m),$async$vh)
case 11:case 8:r=g
q=p?r:K.nZ(d,s.c.at,r,e)
x=!p?12:13
break
case 12:x=14
return A.e(H.fc(q),$async$vh)
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
return A.o($async$vh,w)},
aS2(){var x=this,w=x.ax
if(w!=null)w.a.$0()
x.ax=x.at.aqs(0,new C.aKb(x),new C.aKc(x),new C.aKd(x),new C.aKe(x))},
aS0(d,e){var x,w,v,u,t,s,r,q,p=this,o={},n=p.gF()
if((n.c&4)!==0)return
x=p.c.w
w=x.gbc(x)
o.a=!1
if(w)if(e!=null){for(x=p.c.w,x=x.gdM(x),x=x.gad(x);x.A();)if(C.bVg(x.gP(x).a,e)){o.a=!0
break}}else for(x=p.c.w,x=x.gdM(x),x=x.gad(x);x.A();){v=x.gP(x).a
if(v<=1&&v===d){o.a=!0
break}}u=C.bEg(e)
x=u==null
t=x?null:u.b
s=x?null:u.a
r=!x?C.bEe(u.b,u.a).a:d
if(w){v=$.bE()
v.bt(0,o.a?P.bN:P.bX)}q=A.bI(p.c.cx,!0,y.S)
B.b.fe(q,0,r)
if(q.length>80)q.pop()
x=p.c.b2V(x,w,q,!1,r,s,t,!0,o.a)
if((n.c&4)===0)p.J(x)
A.cs(B.bd,new C.aK7(o,p,w),y.H)},
eW(d){return this.bax(d)},
bax(d){var x=0,w=A.p(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$eW=A.q(function(e,a0){if(e===1){t.push(a0)
x=u}for(;;)switch(x){case 0:g=s.c
if(!g.d){g=g.hr("Wait for next round")
if((s.gF().c&4)===0)s.J(g)
x=1
break}l=g.f
if(l==null||l.length===0){g=g.hr("No active round \u2014 reconnecting\u2026")
if((s.gF().c&4)===0)s.J(g)
s.vi()
x=1
break}l=$.bc
k=l==null?null:l.a
r=k==null?"":k
if(J.au(r)===0){g=g.hr("Login required")
if((s.gF().c&4)===0)s.J(g)
x=1
break}q=N.aK[B.k.S(g.r,0,4)]
g=s.c
if(g.at<q){g=g.hr("Insufficient balance")
if((s.gF().c&4)===0)s.J(g)
x=1
break}if(!(g.d&&g.c>0&&g.f!=null)){g=g.hr(g.c<=0?"Betting time over \u2014 wait for next round":"Betting closed")
if((s.gF().c&4)===0)s.J(g)
x=1
break}$.bE().bt(0,A2.cW)
g=s.c
l=g.f
l.toString
p=l
l=y.S
j=K.nY(g.w,d,q,l)
g=s.c
g=g.b1X(g.at-q,!0,!0,j)
i=s.gF()
if((i.c&4)===0)s.J(g)
u=4
x=7
return A.e(K.o4(q,d,"red_black",p,$.aA,r),$async$eW)
case 7:u=2
x=6
break
case 4:u=3
f=t.pop()
o=A.a9(f)
if((i.c&4)!==0){x=1
break}n=o instanceof A9.hK?o.a:"Bet failed"
m=K.o5(s.c.w,d,q,l)
g=s.c
g=g.b1V(g.at+q,n,n,m)
if((i.c&4)===0)s.J(g)
x=6
break
case 3:x=2
break
case 6:case 1:return A.n(v,w)
case 2:return A.m(t.at(-1),w)}})
return A.o($async$eW,w)}}
C.kQ.prototype={
mg(d,e,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=a5==null?m.c:a5,j=a8==null?m.d:a8,i=b6==null?m.e:b6,h=b2==null?m.f:b2,g=b3==null?m.r:b3,f=b7==null?m.w:b7
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
return C.bEh(t,u,!1,x,m.b,k,m.a,p,o,j,s,v,w,h,g,r,n,i,f,q)},
f8(d){var x=null
return this.mg(x,x,!1,!1,!1,!1,!1,x,x,x,x,x,x,x,x,d,x,x,x,x,x)},
e5(d){var x=null
return this.mg(d,x,!1,!1,!1,!1,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x)},
f7(d){var x=null
return this.mg(x,x,!1,!1,!1,!1,!1,x,x,x,x,x,x,x,d,x,x,x,x,x,x)},
ha(d){var x=null
return this.mg(x,x,!1,!1,!1,!1,!1,d,x,x,x,x,x,x,x,x,x,x,x,x,x)},
d6(d){var x=null
return this.mg(x,x,!1,!1,!1,!1,!1,x,x,x,x,x,x,x,x,x,x,x,d,x,x)},
na(d){var x=null
return this.mg(x,x,!1,!1,!1,!1,d,x,x,x,x,x,x,x,x,x,x,x,x,x,x)},
hr(d){var x=null
return this.mg(x,x,!1,!1,!1,!1,!1,x,x,x,x,x,x,x,x,x,x,d,x,x,x)},
b0h(d){var x=null
return this.mg(x,x,!1,!1,!1,!1,!1,x,x,d,x,x,x,x,x,x,x,x,x,x,x)},
b2V(d,e,f,g,h,i,j,k,l){var x=null
return this.mg(x,x,!1,!1,!1,d,!1,x,e,f,g,h,i,j,x,x,k,x,x,x,l)},
b2t(d,e,f,g,h,i){var x=null
return this.mg(x,x,!1,!1,d,e,!1,x,f,x,g,x,x,x,x,x,h,x,x,i,x)},
b1X(d,e,f,g){var x=null
return this.mg(d,x,e,f,!1,!1,!1,x,x,x,x,x,x,x,x,x,x,x,x,g,x)},
b1V(d,e,f,g){var x=null
return this.mg(d,e,!1,!1,!1,!1,!1,x,x,x,x,x,x,x,x,x,x,f,x,g,x)},
gdD(){var x=this
return[x.a,x.b,x.c,x.d,x.e,x.f,x.r,x.w,x.x,x.y,x.z,!1,x.as,x.at,x.ax,x.ay,x.ch,x.CW,x.cx,x.cy]}}
C.FI.prototype={
u(d){var x=y.D
return H.he(A4.jH(new C.aKh(),new C.aKi(),new C.aKj(),x,y.R),new C.aKk(this),x)}}
C.aix.prototype={
u(d){return this.aS3(d,this.c,this.d)},
aS3(d,e,f){var x,w,v=null
if(e.b)return A.cO(O.JA(v,v,v,v,v,v,A.k(e.a,v,v,v,v,v,v,v,v),v),G.dZ,Q.xi,v)
x=A.bk(d,B.w3,y.w).w
w=e.ay&&e.ch
return new A0.hv(w,this.aRZ(d,e,f,x.w.b+6),v)},
aRZ(d,e,f,g){var x,w=this,v=null,u=e.e,t=u&&e.d&&e.c>1,s=A.bR(0,A.bJ(v,Y.xP(d,E.T,D.akj,E.Z,v),B.Y)),r=A.bR(0,A.bJ(v,new A.u(v,v,v,v,v,new F.ai(B.R,B.W,B.t,A.a([I.bw.j(0.04),B.w,B.l.j(0.55)],y.O),v,v),B.m),B.Y)),q=y.p,p=A.a([A.bR(0,A.di(new A.a2(new A.A(0,56,0,96),F.S(A.a([U.buG(!1,v,v,!0,B.q,v,v,76,D.ajW,v,v),G.bZ,U.buG(!1,v,v,!0,B.q,v,v,76,D.afQ,v,v)],q),E.j,B.i,E.n,0),v),!0,v))],q)
if(!u)p.push(A.aH(v,A.ah(A6.dp,B.cj,v,v,22),v,v,v,10,10,v))
u=e.ay
if(u)p.push(A.bR(0,A.di(A.bJ(v,new A.u(B.l.j(0.42),v,v,v,v,v,B.m),B.Y),!0,v)))
p.push(new A.a2(new A.A(72,4,72,96),F.P(A.a([new A.G(v,B.d.S(Math.min(118,A.bk(d,B.bJ,y.w).w.a.gdK()*0.3),92,124),w.azd(d),v),G.aw,F.Q(w.aA4(d),1)],q),E.j,B.i,E.n),v))
if(u)p.push(A.bR(0,w.aSJ(d)))
u=w.c
x=$.bc
x=x==null?v:x.b
if(x==null)x="Player"
p.push(new A.bF(B.W,v,v,new A5.oq(K.n4(u.at,60,58,5,50,N.aK,B.q,200,w.d.giD(),x,u.d,u.ay,u.r,!0),v),v))
p.push(A.aH(v,F.S(A.a([w.a5P(G.bL,new C.bgZ(d)),E.a2,w.a5P(I.c6,new C.bh_(d))],q),E.j,B.i,E.v,0),v,v,8,v,g,v))
return A.cO(v,v,L.ol(new A.az(B.C,v,B.at,B.u,A.a([s,r,A.cC(!1,new A.az(B.C,v,B.K,B.f,p,v),B.N,!1)],q),v),t),v)},
a5P(d,e){var x=null,w=B.l.j(0.55),v=F.R(B.q.j(0.65),1.5)
return A.aZ(!1,B.z,!0,x,A.b8(!1,x,!0,A.y(B.p,A.ah(d,B.q,x,x,20),B.f,x,x,new A.u(w,x,v,x,x,x,B.F),x,44,x,x,x,x,x,44),B.bb,!0,x,x,x,x,x,x,x,x,e,x,x,x,x,x,x,x),B.f,B.w,0,x,x,x,x,x,B.G)},
azd(d){return A.cd(new C.bgQ(this))},
a5p(d,e,f,g){var x,w=null,v=B.k.S(e,1,3),u=B.d.S(g*0.62,30,44),t=g+u*(v-1),s=B.l.j(0.32),r=A.x(8),q=F.R(B.q.j(0.28),1),p=A.a([],y.p)
for(x=0;x<v;++x)p.push(new A.hp(x*u,0,w,w,w,w,d.$1(x),w))
return A.y(w,new A.G(t,f,new A.az(B.C,w,B.K,B.f,p,w),w),B.f,w,w,new A.u(s,w,q,r,w,w,B.m),w,f+8,w,w,D.a5p,w,w,t+10)},
a5o(d,e){return this.a5p(new C.bgT(e,d),3,d,e)},
aAK(d,e,f){var x=d.length
if(x===0)return this.a5o(e,f)
return this.a5p(new C.bgU(this,d,f,e),B.k.S(x,1,3),e,f)},
aA4(d){var x=this.c
return A.cd(new C.bgS(this,x.d&&x.c>0&&x.f!=null))},
aS4(d){var x=null,w=B.l.j(0.45),v=A.x(8),u=F.R(B.q.j(0.35),1),t=this.c.cx.length
t=t===0?A.aC(A.k("History",x,x,x,x,x,A.B(x,x,B.h.j(0.35),x,x,x,x,x,x,x,x,11,x,x,B.Q,x,x,!0,x,x,x,x,x,x,x,x),x,x),x,x):O.j5(x,new C.bgV(this),t,I.ry,x,!0,B.aW,new C.bgW(),!1)
return A.bJ(t,new A.u(w,x,u,v,x,x,B.m),B.Y)},
aal(d,e,f){var x=f?0:1,w=this.d.kU(x)
return new L.hZ(new A.e1(new C.bgY(this,e,x,f?B.cd:G.cP,f,w,d),null),null)},
aV7(d){var x=y.n
x=A.ag(new A.as(D.ade,new C.bh3(this,d),x),x.i("aX.E"))
return F.S(x,E.j,B.i,E.n,0)},
aSJ(d){var x,w,v,u,t,s,r=null,q=this.c,p=q.ax
if(p==null)return B.ap
x=p===0?"RED":"BLACK"
p=B.l.j(0.82)
w=A.x(16)
v=F.R(B.q.j(0.55),1)
u=A.a([new A.U(0,B.r,B.l.j(0.5),B.o,20)],y.V)
t=A.a([],y.p)
if(q.CW){q=q.ch
s=q?"WON!":"LOST"
t.push(new A.a2(I.iz,A.k(s,r,r,r,r,r,A.B(r,r,q?A8.f3:I.cn,r,r,r,r,r,r,r,r,26,r,r,B.D,r,r,!0,r,r,r,r,r,r,r,r),r,r),r))}t.push(A.k(x,r,r,r,r,r,D.aCm,r,r))
t.push(E.aV)
t.push(H.bu("assets/games_assets/red_black/ic_game_over.png",B.p,r,r,r,r,r,r,new C.bh0(),!1,B.U,E.aj,r,!1,r,!1,r,!1,r,r,G.S,r,r,100))
return A.di(A.aC(A.y(r,F.P(t,E.j,B.i,E.v),B.f,r,r,new A.u(p,r,v,w,u,r,B.m),r,r,r,r,D.a54,r,r,r),r,r),!0,r)}}
var z=a.updateTypes(["~(r)","am<~>()","FI(t,ab<h,@>)","w5(t)","L(kQ,kQ)","~(t,kQ)","c(t,kQ)","hN(t,ad)","ed(+choice,label,mult(r,h,h))","r(r)"])
C.aK1.prototype={
$2(d,e){return B.k.bl(e,d)},
$S:73}
C.aK_.prototype={
$1(d){return B.k.bj(d,13)===this.a},
$S:50}
C.aKf.prototype={
$1(d){var x,w=this.a
if((w.gF().c&4)!==0)return
x=w.c
if(x.f==null||!x.e)w.vi()},
$S:14}
C.aK8.prototype={
$2(d,e){this.a.a.k(0,J.J(d),e)
return e},
$S:69}
C.aK9.prototype={
$2(d,e){this.a.a.k(0,J.J(d),e)
return e},
$S:69}
C.aKa.prototype={
$1(d){return B.k.S(d,0,1)},
$S:53}
C.aKb.prototype={
$0(){var x,w=this.a,v=w.gF()
if((v.c&4)!==0)return
x=w.c.d6(!0)
if((v.c&4)===0)w.J(x)
w.vi()
w.zq()},
$S:0}
C.aKc.prototype={
$0(){var x,w=this.a,v=w.gF()
if((v.c&4)===0){x=w.c.d6(!1)
if((v.c&4)===0)w.J(x)}},
$S:0}
C.aKe.prototype={
$1(d){var x,w=this.a,v=w.gF()
if((v.c&4)===0){x=w.c.ha(d)
if((v.c&4)===0)w.J(x)}},
$S:12}
C.aKd.prototype={
$1(d){var x,w,v,u,t,s,r,q,p=this.a,o=p.gF()
if((o.c&4)!==0)return
x=C.bVh(d)
w=K.mO(x)
v=A.aQ(J.C(x,"status"))
u=v==null?null:v.toLowerCase()
if(w!=null){t=p.c.f7(w)
if((o.c&4)===0)p.J(t)}s=C.bVf(x)
if(s!=null&&u!=="finished"){t=p.c.ha(s)
if((o.c&4)===0)p.J(t)}if(u==="finished"){r=C.bVe(x)
q=r.b
if(q!=null)p.aS0(B.k.S(q,0,1),r.a)}},
$S:31}
C.aK7.prototype={
$0(){var x,w=this.b,v=w.gF()
if((v.c&4)!==0)return
x=w.c.b2t(!0,!0,!1,!0,!1,R.bv)
if((v.c&4)===0)w.J(x)
w.vh(this.c,this.a.a)
w.zq()},
$S:9}
C.bsj.prototype={
$2(d,e){return new C.FI(A.aQ(J.C(e,"gameName")),null)},
$S:z+2}
C.aKk.prototype={
$1(d){var x,w,v=null,u=this.a.c,t=A.cb()
t=new F.eM(t)
t=new A7.nw(t)
t=new C.aKg(t)
if(u==null)u="Red & Black"
x=M.o2("red_black")
w=$.bc
w=w==null?v:w.d
if(w==null)w=0
u=C.bEh(w,v,!1,v,x==null,0,u,!1,B.bB,!0,v,v,v,v,1,!1,v,!1,R.bv,!1)
y.u.a($.aF.h(0,$.ha()))
u=new C.w5(t,G.bK,u)
u.jJ()
return u},
$S:z+3}
C.aKi.prototype={
$2(d,e){var x=e.cy
return d.cy!=x&&x!=null},
$S:z+4}
C.aKj.prototype={
$2(d,e){var x,w,v=null,u=e.cy
if(u!=null){d.X(y.q).f.b4(F.c8(v,v,v,v,v,B.u,v,A.k(u,v,v,v,v,v,v,v,v),v,E.a0,v,v,v,v,v,v,v,v,v,v))
x=H.aD(d,!1,y.D)
w=x.c.na(!0)
if((x.gF().c&4)===0)x.J(w)}},
$S:z+5}
C.aKh.prototype={
$2(d,e){var x=null
if(e.b)return A.cO(O.JA(x,x,x,x,x,x,A.k(e.a,x,x,x,x,x,x,x,x),x),G.dZ,Q.xi,x)
return new C.aix(e,H.aD(d,!1,y.D),x)},
$S:z+6}
C.bgZ.prototype={
$0(){var x=this.a,w=A.aS(x,!1)
if(w.t1())w.bg(0)
else T.iR(x)},
$S:0}
C.bh_.prototype={
$0(){return T.iR(this.a)},
$S:0}
C.bgQ.prototype={
$2(d,e){var x=null,w=e.d,v=B.d.S(w*0.7,52,70),u=B.d.S(w*0.9,68,100),t=w<112?8:12,s=B.d.S(Math.min(96,e.b*0.16),72,100),r=this.a,q=new C.bgR(r,v*0.7142857142857143,v,u*0.7,u,t),p=F.Q(q.$1$red(!0),2),o=Math.min(52,w*0.42),n=y.p
return F.S(A.a([p,new A.G(s,x,F.P(A.a([F.Q(A.aC(new Aa.wR(o,x,E.aj,B.N,x),x,x),1),new L.ky(r.c.c,o,x)],n),E.j,B.a1,E.n),x),F.Q(q.$1$red(!1),2)],n),E.j,B.i,E.n,0)},
$S:z+7}
C.bgR.prototype={
$1$red(d){var x,w,v,u,t=this,s=null,r=t.a,q=r.c,p=d?q.y:q.z,o=d?"assets/games_assets/red_black/ic_red_hearts.webp":"assets/games_assets/red_black/ic_black_spade.webp"
q=t.b
x=t.c
w=p!=null?r.aAK(p,x,q):r.a5o(x,q)
r=t.d
q=t.e
x=t.f
v=y.p
u=d?A.a([new A.G(r,q,H.bu(o,B.p,s,s,s,s,s,s,s,!1,B.U,E.aj,s,!1,s,!1,s,!1,s,s,G.S,s,s,s),s),new A.G(x,s,s,s),w],v):A.a([w,new A.G(x,s,s,s),new A.G(r,q,H.bu(o,B.p,s,s,s,s,s,s,s,!1,B.U,E.aj,s,!1,s,!1,s,!1,s,s,G.S,s,s,s),s)],v)
r=d?B.a_:E.V
q=d?B.a_:E.V
return new A.bF(r,s,s,F.cQ(q,F.S(u,E.j,B.i,E.v,0),E.ar),s)},
$S:679}
C.bgT.prototype={
$1(d){var x=null,w=this.a
return A.dC(A.x(Math.min(6,w*0.12)),H.bu("assets/games_assets/red_black/card_bg.png",B.p,x,x,x,x,x,x,x,!1,B.U,E.aH,x,!1,this.b,!1,x,!1,x,x,G.S,x,x,w),B.ak,x)},
$S:680}
C.bgU.prototype={
$1(d){var x,w,v,u,t,s,r,q,p,o,n=null,m=this.b[d],l=this.c,k=A3.kY[B.k.ac(m,13)]
m=B.k.bj(m,13)
x=D.afR[m]
w=m===1||m===2?B.cd:G.cP
v=Math.min(6,l*0.12)
u=Math.max(3,l*0.07)
t=B.d.S(k==="10"?l*0.26:l*0.32,12,18)
s=B.d.S(l*0.24,10,15)
r=B.d.S(l*0.4,16,28)
m=A.x(v)
q=F.R(B.q.j(0.7),1.2)
p=A.a([new A.U(0,B.r,B.l.j(0.45),V.Iw,5)],y.V)
o=y.p
return A.y(n,new A.az(B.C,n,B.K,B.u,A.a([A.aH(n,F.P(A.a([A.k(k,n,n,n,n,n,A.B(n,n,w,n,n,n,n,n,n,n,n,t,n,n,B.D,n,1,!0,n,n,n,n,n,n,n,n),n,n),A.k(x,n,n,n,n,n,A.B(n,n,w,n,n,n,n,n,n,n,n,s,n,n,n,n,1,!0,n,n,n,n,n,n,n,n),n,n)],o),E.j,B.i,E.v),n,n,u,n,u*0.45,n),A.aC(A.k(x,n,n,n,n,n,A.B(n,n,w.j(0.92),n,n,n,n,n,n,n,n,r,n,n,n,n,1,!0,n,n,n,n,n,n,n,n),n,n),n,n)],o),n),B.f,n,n,new A.u(n,n,q,m,p,V.C4,B.m),n,this.d,n,n,n,n,n,l)},
$S:121}
C.bgS.prototype={
$2(d,e){var x=null,w=B.d.S(e.b,280,720),v=Math.min(e.d,w*0.72),u=Math.min(w,v/0.42),t=A.x(18),s=A.a([new A.U(1,B.r,B.q.j(0.25),B.o,14),new A.U(0,B.r,B.l.j(0.6),E.fF,18)],y.V),r=u*0.04,q=this.a,p=this.b,o=y.p
return A.aC(A.y(x,A.dC(A.x(15),new A.az(B.C,x,B.at,B.u,A.a([A.y(x,x,B.f,D.XI,x,x,x,x,x,x,x,x,x,x),H.bu("assets/games_assets/red_black/table.webp",B.p,x,x,x,x,x,x,x,!1,B.U,E.aH,x,!1,x,!1,x,!1,x,x,G.S,x,x,x),A.di(A.bJ(x,new A.u(x,x,x,x,x,new F.ai(B.R,B.W,B.t,A.a([B.l.j(0.12),B.w,B.l.j(0.25)],y.O),x,x),B.m),B.Y),!0,x),new A.a2(new A.A(r,v*0.04,r,v*0.05),F.P(A.a([new A.G(x,v*0.09,q.aS4(d),x),new A.G(x,v*0.03,x,x),F.Q(F.S(A.a([F.Q(q.aal(d,p,!0),1),new A.G(u*0.02,x,x,x),F.Q(q.aal(d,p,!1),1)],o),E.a7,B.i,E.n,0),5),new A.G(x,v*0.025,x,x),new A.G(x,v*0.32,q.aV7(p),x)],o),E.a7,B.i,E.n),x)],o),x),B.ak,x),B.f,x,x,new A.u(x,x,x,t,s,D.abC,B.m),x,v,x,x,G.iD,x,x,u),x,x)},
$S:33}
C.bgW.prototype={
$2(d,e){return G.d9},
$S:23}
C.bgV.prototype={
$2(d,e){var x=null,w=this.a.c.cx[e]===0?B.dA:B.ia
return A.y(x,x,B.f,x,x,new A.u(w,x,F.R(B.q.j(0.4),1),x,x,x,B.F),x,22,x,x,x,x,x,22)},
$S:120}
C.bgY.prototype={
$1(d){var x=this,w=null,v=x.b?1:0.62,u=A.x(14),t=A.x(14),s=F.R(B.q.j(0.55),1.5),r=A.a([new A.U(0,B.r,B.l.j(0.35),G.br,8)],y.V),q=A.aH(w,A.y(w,D.aGK,B.f,w,w,new A.u(B.l.j(0.35),w,w,A.x(6),w,w,B.m),w,w,w,w,I.nb,w,w,w),w,w,w,8,6,w),p=A.aC(A.k(x.e?"RED":"BLACK",w,w,w,w,w,D.aFc,w,w),w,w),o=B.l.j(0.5),n=A.x(20),m=F.R(B.q.j(0.4),1),l=x.f,k=l!=null
q=A.a([q,p,A.aH(8,A.aC(new L.hY(A.y(w,A.k(k?"\u20b9 "+A.v(l):"0",w,w,w,w,w,D.aAP,w,w),B.f,w,w,new A.u(o,w,m,n,w,w,B.m),w,w,w,w,X.n6,w,w,w),w),w,w),w,w,0,0,w,w)],y.p)
if(k)q.push(A.aH(0,A.aC(A.dG(A1.Kt(l,Math.min(76,A.bk(x.r,B.bJ,y.w).w.a.gdK()*0.18)),0.85),w,w),w,w,0,0,0,w))
return A.dG(A.aZ(!1,B.z,!0,w,A.b8(!1,u,!0,H.f0(new A.az(B.C,w,B.K,B.u,q,w),w,new A.u(x.d,w,s,t,r,w,B.m),w,w,w),w,!0,w,w,w,w,w,w,w,w,new C.bgX(x.a,d,x.c),w,w,w,w,w,w,w),B.f,B.w,0,w,w,w,w,w,B.G),v)},
$S:681}
C.bgX.prototype={
$0(){var x=this.a,w=x.c,v=N.aK[w.r]
if(w.at>=v)W.v6(this.b,v)
x.d.eW(this.c)},
$S:0}
C.bh3.prototype={
$1(d){var x=this.a,w=x.d.kU(d.a),v=this.b?1:0.62
return F.Q(new A.a2(Ab.iC,A.dG(new L.hZ(new A.e1(new C.bh2(x,d,w),null),null),v),null),1)},
$S:z+8}
C.bh2.prototype={
$1(d){var x=null,w=this.b,v=A.x(10),u=A.x(10),t=F.R(B.q.j(0.25),1),s=A.k(w.b,x,1,B.H,x,x,D.aFn,x,x),r=A.k(w.c,x,x,x,x,x,A.B(x,x,B.q.j(0.9),x,x,x,x,x,x,x,x,9,x,x,B.x,x,x,!0,x,x,x,x,x,x,x,x),x,x),q=this.c
return A.aZ(!1,B.z,!0,x,A.b8(!1,v,!0,H.f0(F.P(A.a([s,r,new L.hY(A.k(q!=null?"\u20b9 "+A.v(q):"0",x,x,x,x,x,D.aCp,x,x),x)],y.p),E.j,B.a1,E.n),x,new A.u(D.Zk,x,t,u,x,x,B.m),x,D.a59,x),x,!0,x,x,x,x,x,x,x,x,new C.bh1(this.a,d,w),x,x,x,x,x,x,x),B.f,B.w,0,x,x,x,x,x,B.G)},
$S:61}
C.bh1.prototype={
$0(){var x=this.a,w=x.c,v=N.aK[w.r]
if(w.at>=v)W.v6(this.b,v)
x.d.eW(this.c.a)},
$S:0}
C.bh0.prototype={
$3(d,e,f){return B.ap},
$S:16};(function installTearOffs(){var x=a._static_1,w=a._instance_1u,v=a._instance_0u
x(C,"bJs","bVa",9)
var u
w(u=C.w5.prototype,"giD","iE",0)
v(u,"gaS1","zq",1)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.ec,[C.aK1,C.aK8,C.aK9,C.bsj,C.aKi,C.aKj,C.aKh,C.bgQ,C.bgS,C.bgW,C.bgV])
x(A.cY,[C.aK_,C.aKf,C.aKa,C.aKe,C.aKd,C.aKk,C.bgR,C.bgT,C.bgU,C.bgY,C.bh3,C.bh2,C.bh0])
w(C.aKg,A.I)
w(C.w5,S.hd)
x(A.eb,[C.aKb,C.aKc,C.aK7,C.bgZ,C.bh_,C.bgX,C.bh1])
w(C.kQ,H.fQ)
x(A.O,[C.FI,C.aix])})()
A.da(b.typeUniverse,JSON.parse('{"w5":{"cF":["kQ"],"eV":["kQ"],"cF.0":"kQ"},"FI":{"O":[],"c":[]},"aix":{"O":[],"c":[]}}'))
var y=(function rtii(){var x=A.X
return{l:x("cq<h,h>"),V:x("w<U>"),O:x("w<d>"),m:x("w<ab<h,h>>"),p:x("w<c>"),t:x("w<r>"),j:x("T<@>"),L:x("T<r>"),f:x("ab<@,@>"),n:x("as<+choice,label,mult(r,h,h),ed>"),w:x("f9"),D:x("w5"),R:x("kQ"),N:x("h"),q:x("fL"),z:x("@"),S:x("r"),u:x("iV?"),T:x("h?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.XI=new A.d(1,0.050980392156862744,0.30196078431372547,0.1843137254901961,B.e)
D.Zk=new A.d(1,0.17647058823529413,0.17647058823529413,0.20784313725490197,B.e)
D.a54=new A.A(28,20,28,20)
D.a59=new A.A(2,4,2,4)
D.a5p=new A.A(5,4,5,4)
D.a1U=new A.d(1,0.9882352941176471,0.9647058823529412,0.7294117647058823,B.e)
D.WH=new A.d(1,0.7019607843137254,0.5294117647058824,0.1568627450980392,B.e)
D.acc=x([I.L,D.a1U,D.WH,I.L],y.O)
D.abC=new F.ai(E.T,E.Z,B.t,D.acc,null,null)
D.au8=new A.xe(2,"PAIR","3.5x")
D.auh=new A.xe(3,"COLOR","10x")
D.au_=new A.xe(4,"SEQ","15x")
D.atT=new A.xe(5,"PURE SEQ","100x")
D.au4=new A.xe(6,"SET","100x")
D.ade=x([D.au8,D.auh,D.au_,D.atT,D.au4],A.X("w<+choice,label,mult(r,h,h)>"))
D.afQ=x([B.I4,B.I3,B.I2],y.m)
D.afR=x(["\u2663","\u2666","\u2665","\u2660"],A.X("w<h>"))
D.aor=new A.cq(B.fE,["rajesh jam","809504"],y.l)
D.aop=new A.cq(B.fE,["rahul","612340"],y.l)
D.ajW=x([D.aor,D.aop,B.I1],y.m)
D.a_m=new A.d(1,0.10196078431372549,0.0392156862745098,0.09411764705882353,B.e)
D.VX=new A.d(1,0.050980392156862744,0.023529411764705882,0.06274509803921569,B.e)
D.a0r=new A.d(1,0.07058823529411765,0.03137254901960784,0.10980392156862745,B.e)
D.akj=x([D.a_m,D.VX,D.a0r],y.O)
D.aAP=new A.z(!0,B.q,null,null,null,null,13,B.x,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aCm=new A.z(!0,B.h,null,null,null,null,32,B.D,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aCp=new A.z(!0,G.bP,null,null,null,null,9,B.Q,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aFc=new A.z(!0,B.h,null,null,null,null,22,B.D,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aFn=new A.z(!0,B.J,null,null,null,null,8,B.B,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aGK=new A.aw("2X",null,G.oL,null,null,null,null,null,null,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"cck","bO5",()=>S.iZ(new C.bsj(),"red_black",!1,"Red & Black"))})()};
(a=>{a["WhigyDFUmKyrJcs/KFnjP/4Y2F4="]=a.current})($__dart_deferred_initializers__);