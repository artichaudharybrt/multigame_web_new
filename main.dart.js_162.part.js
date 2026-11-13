((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,X,P,Y,Z,Q,M,C={
bV0(d){return B.k.af(d,13)},
aJY(d){var x=A.aj(d).i("as<1,r>"),w=A.af(new A.as(d,C.bJj(),x),x.i("aX.E"))
B.b.ec(w,new C.aJZ())
return w},
bE4(d){var x=C.aJY(d),w=x[0],v=x[1]
return w===v&&v===x[2]},
bUZ(d){var x,w,v
if(C.bE4(d))return!1
x=C.aJY(d)
w=x[0]
v=x[1]
return w===v||v===x[2]},
bUY(d){return B.b.f9(d,new C.aJX(B.k.bj(d[0],13)))},
bV_(d){var x,w=new A.as(d,C.bJj(),A.aj(d).i("as<1,r>")).ib(0),v=A.af(w,A.H(w).c)
B.b.hn(v)
if(v.length!==3)return!1
w=v[2]
x=v[0]
if(w-x===2&&v[1]-x===1)return!0
if(x===0&&v[1]===1&&w===12)return!0
return!1},
bvu(d){var x=C.bE4(d),w=C.bUY(d),v=C.bV_(d)
if(x)return 6
if(v&&w)return 5
if(v)return 4
if(w)return 3
if(C.bUZ(d))return 2
return 1},
bE5(d,e){var x=C.bUX(d,e)>=0?0:1
return new A.aih(x,C.bvu(x===0?d:e))},
bUX(d,e){var x,w,v,u,t,s=C.bvu(d),r=C.bvu(e)
if(s!==r)return s>r?1:-1
x=C.aJY(d)
w=C.aJY(e)
for(v=0;v<3;++v){u=x[v]
t=w[v]
if(u!==t)return u>t?1:-1}return 0},
aJZ:function aJZ(){},
aJX:function aJX(d){this.a=d},
aKd:function aKd(d){this.a=d},
bV5(d){var x,w,v,u,t
for(x=["timer","time","value","countdown","t","sec","seconds","timeLeft"],w=J.M(d),v=0;v<8;++v){u=w.h(d,x[v])
if(A.cZ(u))return u
if(typeof u=="number")return B.d.aj(u)
if(typeof u=="string"){t=A.cF(B.c.P(u),null)
if(t!=null)return t}}return null},
bV7(d){var x,w=J.M(d),v=w.h(d,"data"),u=y.f
if(u.b(v))return A.ao(v,y.N,y.z)
x=w.h(d,"payload")
if(u.b(x))return A.ao(x,y.N,y.z)
return d},
bvw(d,e){var x,w,v
if(!y.j.b(d))return null
x=A.a([],y.t)
for(w=J.b1(d);w.A();){v=w.gO(w)
if(A.cZ(v))x.push(v)
else if(typeof v=="number")x.push(B.d.aj(v))}if(e!=null)return x.length===e?x:null
return x.length>=3?x:null},
bE7(d){var x,w,v,u
if(d==null)return null
x=d.h(0,"redCards")
w=C.bvw(x==null?d.h(0,"red_cards"):x,3)
x=d.h(0,"blackCards")
v=C.bvw(x==null?d.h(0,"black_cards"):x,3)
if(w!=null&&v!=null)return new A.Vl(v,w)
u=C.bvw(d.h(0,"cards"),null)
if(u!=null&&u.length>=6){x=B.b.cP(u,0,3)
return new A.Vl(B.b.cP(u,3,6),x)}return null},
bV4(d){var x,w,v,u,t,s,r,q,p,o=null,n=J.M(d),m=n.h(d,"result"),l=m==null?n.h(d,"roundResult"):m,k=l==null?n.h(d,"gameResult"):l
if(typeof k=="string"){x=B.c.P(k)
if(J.au(x)!==0&&!J.f(x,"null"))try{k=B.O.bB(0,x,o)}catch(w){k=null}else k=null}n=y.f
if(n.b(k)){m={}
v=y.z
u=A.ao(k,v,v)
t=y.N
m.a=A.F(t,v)
u.aJ(0,new C.aK5(m))
s=m.a.h(0,"data")
if(n.b(s)){r=A.ao(s,v,v)
m.a=A.F(t,v)
r.aJ(0,new C.aK6(m))}q=m.a.h(0,"result")
if(A.cZ(q))p=q
else p=typeof q=="number"?B.d.aj(q):o
return new A.C2(m.a,p)}if(A.cZ(k))return new A.C2(o,k)
if(typeof k=="number")return new A.C2(o,B.d.aj(k))
return new A.C2(o,o)},
bV6(d,e){var x,w,v,u=C.bE7(e)
if(u!=null){x=C.bE5(u.b,u.a)
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
w6:function w6(d,e,f){var _=this
_.at=d
_.ay=_.ax=null
_.a=e
_.b=$
_.c=f
_.d=!1},
aKc:function aKc(d){this.a=d},
aK5:function aK5(d){this.a=d},
aK6:function aK6(d){this.a=d},
aK7:function aK7(){},
aK8:function aK8(d){this.a=d},
aK9:function aK9(d){this.a=d},
aKb:function aKb(d){this.a=d},
aKa:function aKa(d){this.a=d},
aK4:function aK4(d,e,f){this.a=d
this.b=e
this.c=f},
bE8(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w){return new C.kR(j,h,i,m,u,q,r,v,g,p,o,!1,e,d,n,s,w,k,l,t)},
kR:function kR(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w){var _=this
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
bsa:function bsa(){},
FJ:function FJ(d,e){this.c=d
this.a=e},
aKh:function aKh(d){this.a=d},
aKf:function aKf(){},
aKg:function aKg(){},
aKe:function aKe(){},
aiu:function aiu(d,e,f){this.c=d
this.d=e
this.a=f},
bgS:function bgS(d){this.a=d},
bgT:function bgT(d){this.a=d},
bgJ:function bgJ(d){this.a=d},
bgK:function bgK(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
bgM:function bgM(d,e){this.a=d
this.b=e},
bgN:function bgN(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bgL:function bgL(d,e){this.a=d
this.b=e},
bgP:function bgP(){},
bgO:function bgO(d){this.a=d},
bgR:function bgR(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
bgQ:function bgQ(d,e,f){this.a=d
this.b=e
this.c=f},
bgX:function bgX(d,e){this.a=d
this.b=e},
bgW:function bgW(d,e,f){this.a=d
this.b=e
this.c=f},
bgV:function bgV(d,e,f){this.a=d
this.b=e
this.c=f},
bgU:function bgU(){}},D,A_,R,A0,S,A1,N,A2,A3,H,A4,L,A5,T,A6,G,A7,A8,F,E,O,I,K,U,A9,Aa,Ab,V,W
J=c[1]
A=c[0]
B=c[2]
X=c[162]
P=c[71]
Y=c[46]
Z=c[53]
Q=c[176]
M=c[36]
C=a.updateHolder(c[17],C)
D=c[177]
A_=c[164]
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
A7=c[50]
A8=c[84]
F=c[68]
E=c[72]
O=c[65]
I=c[69]
K=c[55]
U=c[47]
A9=c[31]
Aa=c[56]
Ab=c[124]
V=c[140]
W=c[42]
C.aKd.prototype={
b4w(d){var x=M.o2("red_black")
if(x==null)return A.dQ(null,y.T)
return K.o1(x.b+"_1",d)},
aql(d,e,f,g,h){var x=M.o2("red_black")
if(x==null)return null
return this.a.nF(0,x,e,f,g,h)},
bc2(d){var x=M.o2("red_black")
if(x==null)return A.dQ(B.bA,y.L)
return Z.r1(x.b,120,d)}}
C.w6.prototype={
jJ(){var x=this
A.dU()
if(x.c.b)return
x.aRR()
x.aRU()
x.vg()
H.rO(x.gaRT(),y.H)
x.ay=A.fx(A_.mR,new C.aKc(x))},
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
zp(){var x=0,w=A.p(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$zp=A.q(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.e(s.at.bc2($.aA),$async$zp)
case 7:r=e
q=s.gF()
if((q.c&4)!==0||J.cn(r)){x=1
break}p=s.c
o=J.e0(r,new C.aK7(),y.S)
o=A.af(o,o.$ti.i("aX.E"))
p=p.b08(o)
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
return A.o($async$zp,w)},
vg(){var x=0,w=A.p(y.H),v=1,u=[],t=this,s,r,q,p,o
var $async$vg=A.q(function(d,e){if(d===1){u.push(e)
x=v}for(;;)switch(x){case 0:v=3
x=6
return A.e(t.at.b4w($.aA),$async$vg)
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
return A.o($async$vg,w)},
vf(d,e){return this.aLO(d,e)},
aRR(){return this.vf(!1,null)},
aLO(d,e){var x=0,w=A.p(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$vf=A.q(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:m=$.aA
if(m==null||m.length===0){x=1
break}u=4
p=e==null
o=s.at.a
x=p?7:9
break
case 7:x=10
return A.e(o.du(m),$async$vf)
case 10:x=8
break
case 9:x=11
return A.e(o.kn(m),$async$vf)
case 11:case 8:r=g
q=p?r:K.nZ(d,s.c.at,r,e)
x=!p?12:13
break
case 12:x=14
return A.e(H.fb(q),$async$vf)
case 14:case 13:p=s.gF()
if((p.c&4)===0){o=s.c.e4(q)
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
return A.o($async$vf,w)},
aRU(){var x=this,w=x.ax
if(w!=null)w.a.$0()
x.ax=x.at.aql(0,new C.aK8(x),new C.aK9(x),new C.aKa(x),new C.aKb(x))},
aRS(d,e){var x,w,v,u,t,s,r,q,p=this,o={},n=p.gF()
if((n.c&4)!==0)return
x=p.c.w
w=x.gbd(x)
o.a=!1
if(w)if(e!=null){for(x=p.c.w,x=x.gdK(x),x=x.gac(x);x.A();)if(C.bV6(x.gO(x).a,e)){o.a=!0
break}}else for(x=p.c.w,x=x.gdK(x),x=x.gac(x);x.A();){v=x.gO(x).a
if(v<=1&&v===d){o.a=!0
break}}u=C.bE7(e)
x=u==null
t=x?null:u.b
s=x?null:u.a
r=!x?C.bE5(u.b,u.a).a:d
if(w){v=$.bE()
v.bt(0,o.a?P.bN:P.bV)}q=A.bL(p.c.cx,!0,y.S)
B.b.fe(q,0,r)
if(q.length>80)q.pop()
x=p.c.b2L(x,w,q,!1,r,s,t,!0,o.a)
if((n.c&4)===0)p.J(x)
A.cs(B.bd,new C.aK4(o,p,w),y.H)},
eV(d){return this.bam(d)},
bam(d){var x=0,w=A.p(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$eV=A.q(function(e,a0){if(e===1){t.push(a0)
x=u}for(;;)switch(x){case 0:g=s.c
if(!g.d){g=g.hr("Wait for next round")
if((s.gF().c&4)===0)s.J(g)
x=1
break}l=g.f
if(l==null||l.length===0){g=g.hr("No active round \u2014 reconnecting\u2026")
if((s.gF().c&4)===0)s.J(g)
s.vg()
x=1
break}l=$.bd
k=l==null?null:l.a
r=k==null?"":k
if(J.au(r)===0){g=g.hr("Login required")
if((s.gF().c&4)===0)s.J(g)
x=1
break}q=N.aJ[B.k.S(g.r,0,4)]
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
g=g.b1O(g.at-q,!0,!0,j)
i=s.gF()
if((i.c&4)===0)s.J(g)
u=4
x=7
return A.e(K.o4(q,d,"red_black",p,$.aA,r),$async$eV)
case 7:u=2
x=6
break
case 4:u=3
f=t.pop()
o=A.a9(f)
if((i.c&4)!==0){x=1
break}n=o instanceof Aa.hH?o.a:"Bet failed"
m=K.o5(s.c.w,d,q,l)
g=s.c
g=g.b1M(g.at+q,n,n,m)
if((i.c&4)===0)s.J(g)
x=6
break
case 3:x=2
break
case 6:case 1:return A.n(v,w)
case 2:return A.m(t.at(-1),w)}})
return A.o($async$eV,w)}}
C.kR.prototype={
mf(d,e,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=a5==null?m.c:a5,j=a8==null?m.d:a8,i=b6==null?m.e:b6,h=b2==null?m.f:b2,g=b3==null?m.r:b3,f=b7==null?m.w:b7
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
return C.bE8(t,u,!1,x,m.b,k,m.a,p,o,j,s,v,w,h,g,r,n,i,f,q)},
f8(d){var x=null
return this.mf(x,x,!1,!1,!1,!1,!1,x,x,x,x,x,x,x,x,d,x,x,x,x,x)},
e4(d){var x=null
return this.mf(d,x,!1,!1,!1,!1,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x)},
f7(d){var x=null
return this.mf(x,x,!1,!1,!1,!1,!1,x,x,x,x,x,x,x,d,x,x,x,x,x,x)},
ha(d){var x=null
return this.mf(x,x,!1,!1,!1,!1,!1,d,x,x,x,x,x,x,x,x,x,x,x,x,x)},
d7(d){var x=null
return this.mf(x,x,!1,!1,!1,!1,!1,x,x,x,x,x,x,x,x,x,x,x,d,x,x)},
na(d){var x=null
return this.mf(x,x,!1,!1,!1,!1,d,x,x,x,x,x,x,x,x,x,x,x,x,x,x)},
hr(d){var x=null
return this.mf(x,x,!1,!1,!1,!1,!1,x,x,x,x,x,x,x,x,x,x,d,x,x,x)},
b08(d){var x=null
return this.mf(x,x,!1,!1,!1,!1,!1,x,x,d,x,x,x,x,x,x,x,x,x,x,x)},
b2L(d,e,f,g,h,i,j,k,l){var x=null
return this.mf(x,x,!1,!1,!1,d,!1,x,e,f,g,h,i,j,x,x,k,x,x,x,l)},
b2k(d,e,f,g,h,i){var x=null
return this.mf(x,x,!1,!1,d,e,!1,x,f,x,g,x,x,x,x,x,h,x,x,i,x)},
b1O(d,e,f,g){var x=null
return this.mf(d,x,e,f,!1,!1,!1,x,x,x,x,x,x,x,x,x,x,x,x,g,x)},
b1M(d,e,f,g){var x=null
return this.mf(d,e,!1,!1,!1,!1,!1,x,x,x,x,x,x,x,x,x,x,f,x,g,x)},
gdD(){var x=this
return[x.a,x.b,x.c,x.d,x.e,x.f,x.r,x.w,x.x,x.y,x.z,!1,x.as,x.at,x.ax,x.ay,x.ch,x.CW,x.cx,x.cy]}}
C.FJ.prototype={
u(d){var x=y.D
return H.he(A4.jG(new C.aKe(),new C.aKf(),new C.aKg(),x,y.R),new C.aKh(this),x)}}
C.aiu.prototype={
u(d){return this.aRV(d,this.c,this.d)},
aRV(d,e,f){var x,w,v=null
if(e.b)return A.cO(O.JC(v,v,v,v,v,v,A.k(e.a,v,v,v,v,v,v,v,v),v),G.dY,Q.xh,v)
x=A.bk(d,B.w1,y.w).w
w=e.ay&&e.ch
return new A0.hu(w,this.aRQ(d,e,f,x.w.b+6),v)},
aRQ(d,e,f,g){var x,w=this,v=null,u=e.e,t=u&&e.d&&e.c>1,s=A.bP(0,A.bI(v,Y.xP(d,E.U,D.ajY,E.a0,v),B.Y)),r=A.bP(0,A.bI(v,new A.u(v,v,v,v,v,new F.ah(B.P,B.V,B.t,A.a([I.bv.j(0.04),B.w,B.l.j(0.55)],y.O),v,v),B.m),B.Y)),q=y.p,p=A.a([A.bP(0,A.di(new A.a3(new A.A(0,56,0,96),F.S(A.a([U.bux(!1,v,v,!0,B.p,v,v,76,D.ajB,v,v),G.bX,U.bux(!1,v,v,!0,B.p,v,v,76,D.afu,v,v)],q),E.j,B.i,E.n,0),v),!0,v))],q)
if(!u)p.push(A.aH(v,A.ag(A6.dp,B.ci,v,v,22),v,v,v,10,10,v))
u=e.ay
if(u)p.push(A.bP(0,A.di(A.bI(v,new A.u(B.l.j(0.42),v,v,v,v,v,B.m),B.Y),!0,v)))
p.push(new A.a3(new A.A(72,4,72,96),F.P(A.a([new A.G(v,B.d.S(Math.min(118,A.bk(d,B.bJ,y.w).w.a.gdQ()*0.3),92,124),w.az6(d),v),G.aw,F.R(w.azY(d),1)],q),E.j,B.i,E.n),v))
if(u)p.push(A.bP(0,w.aSA(d)))
u=w.c
x=$.bd
x=x==null?v:x.b
if(x==null)x="Player"
p.push(new A.bF(B.V,v,v,new A5.oq(K.n4(u.at,60,58,5,50,N.aJ,B.p,200,w.d.giD(),x,u.d,u.ay,u.r,!0),v),v))
p.push(A.aH(v,F.S(A.a([w.a5J(G.bL,new C.bgS(d)),E.Z,w.a5J(I.c6,new C.bgT(d))],q),E.j,B.i,E.v,0),v,v,8,v,g,v))
return A.cO(v,v,L.ol(new A.ay(B.C,v,B.at,B.u,A.a([s,r,A.cB(!1,new A.ay(B.C,v,B.K,B.f,p,v),B.N,!1)],q),v),t),v)},
a5J(d,e){var x=null,w=B.l.j(0.55),v=F.Q(B.p.j(0.65),1.5)
return A.b_(!1,B.z,!0,x,A.b9(!1,x,!0,A.y(B.q,A.ag(d,B.p,x,x,20),B.f,x,x,new A.u(w,x,v,x,x,x,B.F),x,44,x,x,x,x,x,44),B.bb,!0,x,x,x,x,x,x,x,x,e,x,x,x,x,x,x,x),B.f,B.w,0,x,x,x,x,x,B.G)},
az6(d){return A.cc(new C.bgJ(this))},
a5k(d,e,f,g){var x,w=null,v=B.k.S(e,1,3),u=B.d.S(g*0.62,30,44),t=g+u*(v-1),s=B.l.j(0.32),r=A.x(8),q=F.Q(B.p.j(0.28),1),p=A.a([],y.p)
for(x=0;x<v;++x)p.push(new A.hp(x*u,0,w,w,w,w,d.$1(x),w))
return A.y(w,new A.G(t,f,new A.ay(B.C,w,B.K,B.f,p,w),w),B.f,w,w,new A.u(s,w,q,r,w,w,B.m),w,f+8,w,w,D.a53,w,w,t+10)},
a5j(d,e){return this.a5k(new C.bgM(e,d),3,d,e)},
aAD(d,e,f){var x=d.length
if(x===0)return this.a5j(e,f)
return this.a5k(new C.bgN(this,d,f,e),B.k.S(x,1,3),e,f)},
azY(d){var x=this.c
return A.cc(new C.bgL(this,x.d&&x.c>0&&x.f!=null))},
aRW(d){var x=null,w=B.l.j(0.45),v=A.x(8),u=F.Q(B.p.j(0.35),1),t=this.c.cx.length
t=t===0?A.aC(A.k("History",x,x,x,x,x,A.B(x,x,B.h.j(0.35),x,x,x,x,x,x,x,x,11,x,x,B.R,x,x,!0,x,x,x,x,x,x,x,x),x,x),x,x):O.j4(x,new C.bgO(this),t,I.rt,x,!0,B.aU,new C.bgP(),!1)
return A.bI(t,new A.u(w,x,u,v,x,x,B.m),B.Y)},
aag(d,e,f){var x=f?0:1,w=this.d.kU(x)
return new L.hX(new A.e1(new C.bgR(this,e,x,f?B.ct:G.cO,f,w,d),null),null)},
aUZ(d){var x=y.n
x=A.af(new A.as(D.acT,new C.bgX(this,d),x),x.i("aX.E"))
return F.S(x,E.j,B.i,E.n,0)},
aSA(d){var x,w,v,u,t,s,r=null,q=this.c,p=q.ax
if(p==null)return B.ap
x=p===0?"RED":"BLACK"
p=B.l.j(0.82)
w=A.x(16)
v=F.Q(B.p.j(0.55),1)
u=A.a([new A.U(0,B.r,B.l.j(0.5),B.o,20)],y.V)
t=A.a([],y.p)
if(q.CW){q=q.ch
s=q?"WON!":"LOST"
t.push(new A.a3(I.iy,A.k(s,r,r,r,r,r,A.B(r,r,q?A8.f2:I.cm,r,r,r,r,r,r,r,r,26,r,r,B.D,r,r,!0,r,r,r,r,r,r,r,r),r,r),r))}t.push(A.k(x,r,r,r,r,r,D.aBP,r,r))
t.push(E.aT)
t.push(H.bu("assets/games_assets/red_black/ic_game_over.png",B.q,r,r,r,r,r,r,new C.bgU(),!1,B.T,E.aj,r,!1,r,!1,r,!1,r,r,G.S,r,r,100))
return A.di(A.aC(A.y(r,F.P(t,E.j,B.i,E.v),B.f,r,r,new A.u(p,r,v,w,u,r,B.m),r,r,r,r,D.a4J,r,r,r),r,r),!0,r)}}
var z=a.updateTypes(["~(r)","am<~>()","FJ(t,ab<h,@>)","w6(t)","L(kR,kR)","~(t,kR)","c(t,kR)","im(t,ad)","ed(+choice,label,mult(r,h,h))","r(r)"])
C.aJZ.prototype={
$2(d,e){return B.k.bl(e,d)},
$S:60}
C.aJX.prototype={
$1(d){return B.k.bj(d,13)===this.a},
$S:48}
C.aKc.prototype={
$1(d){var x,w=this.a
if((w.gF().c&4)!==0)return
x=w.c
if(x.f==null||!x.e)w.vg()},
$S:14}
C.aK5.prototype={
$2(d,e){this.a.a.k(0,J.J(d),e)
return e},
$S:70}
C.aK6.prototype={
$2(d,e){this.a.a.k(0,J.J(d),e)
return e},
$S:70}
C.aK7.prototype={
$1(d){return B.k.S(d,0,1)},
$S:59}
C.aK8.prototype={
$0(){var x,w=this.a,v=w.gF()
if((v.c&4)!==0)return
x=w.c.d7(!0)
if((v.c&4)===0)w.J(x)
w.vg()
w.zp()},
$S:0}
C.aK9.prototype={
$0(){var x,w=this.a,v=w.gF()
if((v.c&4)===0){x=w.c.d7(!1)
if((v.c&4)===0)w.J(x)}},
$S:0}
C.aKb.prototype={
$1(d){var x,w=this.a,v=w.gF()
if((v.c&4)===0){x=w.c.ha(d)
if((v.c&4)===0)w.J(x)}},
$S:12}
C.aKa.prototype={
$1(d){var x,w,v,u,t,s,r,q,p=this.a,o=p.gF()
if((o.c&4)!==0)return
x=C.bV7(d)
w=K.mN(x)
v=A.aQ(J.C(x,"status"))
u=v==null?null:v.toLowerCase()
if(w!=null){t=p.c.f7(w)
if((o.c&4)===0)p.J(t)}s=C.bV5(x)
if(s!=null&&u!=="finished"){t=p.c.ha(s)
if((o.c&4)===0)p.J(t)}if(u==="finished"){r=C.bV4(x)
q=r.b
if(q!=null)p.aRS(B.k.S(q,0,1),r.a)}},
$S:28}
C.aK4.prototype={
$0(){var x,w=this.b,v=w.gF()
if((v.c&4)!==0)return
x=w.c.b2k(!0,!0,!1,!0,!1,R.bu)
if((v.c&4)===0)w.J(x)
w.vf(this.c,this.a.a)
w.zp()},
$S:8}
C.bsa.prototype={
$2(d,e){return new C.FJ(A.aQ(J.C(e,"gameName")),null)},
$S:z+2}
C.aKh.prototype={
$1(d){var x,w,v=null,u=this.a.c,t=A.ce()
t=new F.eK(t)
t=new A7.nw(t)
t=new C.aKd(t)
if(u==null)u="Red & Black"
x=M.o2("red_black")
w=$.bd
w=w==null?v:w.d
if(w==null)w=0
u=C.bE8(w,v,!1,v,x==null,0,u,!1,B.bA,!0,v,v,v,v,1,!1,v,!1,R.bu,!1)
y.u.a($.aF.h(0,$.ha()))
u=new C.w6(t,G.bK,u)
u.jJ()
return u},
$S:z+3}
C.aKf.prototype={
$2(d,e){var x=e.cy
return d.cy!=x&&x!=null},
$S:z+4}
C.aKg.prototype={
$2(d,e){var x,w,v=null,u=e.cy
if(u!=null){d.Y(y.q).f.b7(F.ca(v,v,v,v,v,B.u,v,A.k(u,v,v,v,v,v,v,v,v),v,E.a3,v,v,v,v,v,v,v,v,v,v))
x=H.aD(d,!1,y.D)
w=x.c.na(!0)
if((x.gF().c&4)===0)x.J(w)}},
$S:z+5}
C.aKe.prototype={
$2(d,e){var x=null
if(e.b)return A.cO(O.JC(x,x,x,x,x,x,A.k(e.a,x,x,x,x,x,x,x,x),x),G.dY,Q.xh,x)
return new C.aiu(e,H.aD(d,!1,y.D),x)},
$S:z+6}
C.bgS.prototype={
$0(){var x=this.a,w=A.aS(x,!1)
if(w.t_())w.bg(0)
else T.iQ(x)},
$S:0}
C.bgT.prototype={
$0(){return T.iQ(this.a)},
$S:0}
C.bgJ.prototype={
$2(d,e){var x=null,w=e.d,v=B.d.S(w*0.7,52,70),u=B.d.S(w*0.9,68,100),t=w<112?8:12,s=B.d.S(Math.min(96,e.b*0.16),72,100),r=this.a,q=new C.bgK(r,v*0.7142857142857143,v,u*0.7,u,t),p=F.R(q.$1$red(!0),2),o=Math.min(52,w*0.42),n=y.p
return F.S(A.a([p,new A.G(s,x,F.P(A.a([F.R(A.aC(new A9.wS(o,x,E.aj,B.N,x),x,x),1),new L.kz(r.c.c,o,x)],n),E.j,B.a1,E.n),x),F.R(q.$1$red(!1),2)],n),E.j,B.i,E.n,0)},
$S:z+7}
C.bgK.prototype={
$1$red(d){var x,w,v,u,t=this,s=null,r=t.a,q=r.c,p=d?q.y:q.z,o=d?"assets/games_assets/red_black/ic_red_hearts.webp":"assets/games_assets/red_black/ic_black_spade.webp"
q=t.b
x=t.c
w=p!=null?r.aAD(p,x,q):r.a5j(x,q)
r=t.d
q=t.e
x=t.f
v=y.p
u=d?A.a([new A.G(r,q,H.bu(o,B.q,s,s,s,s,s,s,s,!1,B.T,E.aj,s,!1,s,!1,s,!1,s,s,G.S,s,s,s),s),new A.G(x,s,s,s),w],v):A.a([w,new A.G(x,s,s,s),new A.G(r,q,H.bu(o,B.q,s,s,s,s,s,s,s,!1,B.T,E.aj,s,!1,s,!1,s,!1,s,s,G.S,s,s,s),s)],v)
r=d?B.a_:E.W
q=d?B.a_:E.W
return new A.bF(r,s,s,F.cQ(q,F.S(u,E.j,B.i,E.v,0),E.as),s)},
$S:679}
C.bgM.prototype={
$1(d){var x=null,w=this.a
return A.dC(A.x(Math.min(6,w*0.12)),H.bu("assets/games_assets/red_black/card_bg.png",B.q,x,x,x,x,x,x,x,!1,B.T,E.aE,x,!1,this.b,!1,x,!1,x,x,G.S,x,x,w),B.ak,x)},
$S:680}
C.bgN.prototype={
$1(d){var x,w,v,u,t,s,r,q,p,o,n=null,m=this.b[d],l=this.c,k=A3.kU[B.k.af(m,13)]
m=B.k.bj(m,13)
x=D.afv[m]
w=m===1||m===2?B.ct:G.cO
v=Math.min(6,l*0.12)
u=Math.max(3,l*0.07)
t=B.d.S(k==="10"?l*0.26:l*0.32,12,18)
s=B.d.S(l*0.24,10,15)
r=B.d.S(l*0.4,16,28)
m=A.x(v)
q=F.Q(B.p.j(0.7),1.2)
p=A.a([new A.U(0,B.r,B.l.j(0.45),V.Iq,5)],y.V)
o=y.p
return A.y(n,new A.ay(B.C,n,B.K,B.u,A.a([A.aH(n,F.P(A.a([A.k(k,n,n,n,n,n,A.B(n,n,w,n,n,n,n,n,n,n,n,t,n,n,B.D,n,1,!0,n,n,n,n,n,n,n,n),n,n),A.k(x,n,n,n,n,n,A.B(n,n,w,n,n,n,n,n,n,n,n,s,n,n,n,n,1,!0,n,n,n,n,n,n,n,n),n,n)],o),E.j,B.i,E.v),n,n,u,n,u*0.45,n),A.aC(A.k(x,n,n,n,n,n,A.B(n,n,w.j(0.92),n,n,n,n,n,n,n,n,r,n,n,n,n,1,!0,n,n,n,n,n,n,n,n),n,n),n,n)],o),n),B.f,n,n,new A.u(n,n,q,m,p,V.C_,B.m),n,this.d,n,n,n,n,n,l)},
$S:122}
C.bgL.prototype={
$2(d,e){var x=null,w=B.d.S(e.b,280,720),v=Math.min(e.d,w*0.72),u=Math.min(w,v/0.42),t=A.x(18),s=A.a([new A.U(1,B.r,B.p.j(0.25),B.o,14),new A.U(0,B.r,B.l.j(0.6),E.f4,18)],y.V),r=u*0.04,q=this.a,p=this.b,o=y.p
return A.aC(A.y(x,A.dC(A.x(15),new A.ay(B.C,x,B.at,B.u,A.a([A.y(x,x,B.f,D.Xw,x,x,x,x,x,x,x,x,x,x),H.bu("assets/games_assets/red_black/table.webp",B.q,x,x,x,x,x,x,x,!1,B.T,E.aE,x,!1,x,!1,x,!1,x,x,G.S,x,x,x),A.di(A.bI(x,new A.u(x,x,x,x,x,new F.ah(B.P,B.V,B.t,A.a([B.l.j(0.12),B.w,B.l.j(0.25)],y.O),x,x),B.m),B.Y),!0,x),new A.a3(new A.A(r,v*0.04,r,v*0.05),F.P(A.a([new A.G(x,v*0.09,q.aRW(d),x),new A.G(x,v*0.03,x,x),F.R(F.S(A.a([F.R(q.aag(d,p,!0),1),new A.G(u*0.02,x,x,x),F.R(q.aag(d,p,!1),1)],o),E.a8,B.i,E.n,0),5),new A.G(x,v*0.025,x,x),new A.G(x,v*0.32,q.aUZ(p),x)],o),E.a8,B.i,E.n),x)],o),x),B.ak,x),B.f,x,x,new A.u(x,x,x,t,s,D.abh,B.m),x,v,x,x,G.iD,x,x,u),x,x)},
$S:35}
C.bgP.prototype={
$2(d,e){return G.d9},
$S:22}
C.bgO.prototype={
$2(d,e){var x=null,w=this.a.c.cx[e]===0?B.dB:B.i9
return A.y(x,x,B.f,x,x,new A.u(w,x,F.Q(B.p.j(0.4),1),x,x,x,B.F),x,22,x,x,x,x,x,22)},
$S:106}
C.bgR.prototype={
$1(d){var x=this,w=null,v=x.b?1:0.62,u=A.x(14),t=A.x(14),s=F.Q(B.p.j(0.55),1.5),r=A.a([new A.U(0,B.r,B.l.j(0.35),G.bq,8)],y.V),q=A.aH(w,A.y(w,D.aGa,B.f,w,w,new A.u(B.l.j(0.35),w,w,A.x(6),w,w,B.m),w,w,w,w,I.n6,w,w,w),w,w,w,8,6,w),p=A.aC(A.k(x.e?"RED":"BLACK",w,w,w,w,w,D.aEE,w,w),w,w),o=B.l.j(0.5),n=A.x(20),m=F.Q(B.p.j(0.4),1),l=x.f,k=l!=null
q=A.a([q,p,A.aH(8,A.aC(new L.hW(A.y(w,A.k(k?"\u20b9 "+A.v(l):"0",w,w,w,w,w,D.aAm,w,w),B.f,w,w,new A.u(o,w,m,n,w,w,B.m),w,w,w,w,X.n1,w,w,w),w),w,w),w,w,0,0,w,w)],y.p)
if(k)q.push(A.aH(0,A.aC(A.dG(A1.Kv(l,Math.min(76,A.bk(x.r,B.bJ,y.w).w.a.gdQ()*0.18)),0.85),w,w),w,w,0,0,0,w))
return A.dG(A.b_(!1,B.z,!0,w,A.b9(!1,u,!0,H.eZ(new A.ay(B.C,w,B.K,B.u,q,w),w,new A.u(x.d,w,s,t,r,w,B.m),w,w,w),w,!0,w,w,w,w,w,w,w,w,new C.bgQ(x.a,d,x.c),w,w,w,w,w,w,w),B.f,B.w,0,w,w,w,w,w,B.G),v)},
$S:681}
C.bgQ.prototype={
$0(){var x=this.a,w=x.c,v=N.aJ[w.r]
if(w.at>=v)W.v7(this.b,v)
x.d.eV(this.c)},
$S:0}
C.bgX.prototype={
$1(d){var x=this.a,w=x.d.kU(d.a),v=this.b?1:0.62
return F.R(new A.a3(Ab.iB,A.dG(new L.hX(new A.e1(new C.bgW(x,d,w),null),null),v),null),1)},
$S:z+8}
C.bgW.prototype={
$1(d){var x=null,w=this.b,v=A.x(10),u=A.x(10),t=F.Q(B.p.j(0.25),1),s=A.k(w.b,x,1,B.H,x,x,D.aEP,x,x),r=A.k(w.c,x,x,x,x,x,A.B(x,x,B.p.j(0.9),x,x,x,x,x,x,x,x,9,x,x,B.x,x,x,!0,x,x,x,x,x,x,x,x),x,x),q=this.c
return A.b_(!1,B.z,!0,x,A.b9(!1,v,!0,H.eZ(F.P(A.a([s,r,new L.hW(A.k(q!=null?"\u20b9 "+A.v(q):"0",x,x,x,x,x,D.aBS,x,x),x)],y.p),E.j,B.a1,E.n),x,new A.u(D.Z8,x,t,u,x,x,B.m),x,D.a4O,x),x,!0,x,x,x,x,x,x,x,x,new C.bgV(this.a,d,w),x,x,x,x,x,x,x),B.f,B.w,0,x,x,x,x,x,B.G)},
$S:71}
C.bgV.prototype={
$0(){var x=this.a,w=x.c,v=N.aJ[w.r]
if(w.at>=v)W.v7(this.b,v)
x.d.eV(this.c.a)},
$S:0}
C.bgU.prototype={
$3(d,e,f){return B.ap},
$S:15};(function installTearOffs(){var x=a._static_1,w=a._instance_1u,v=a._instance_0u
x(C,"bJj","bV0",9)
var u
w(u=C.w6.prototype,"giD","iE",0)
v(u,"gaRT","zp",1)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.ec,[C.aJZ,C.aK5,C.aK6,C.bsa,C.aKf,C.aKg,C.aKe,C.bgJ,C.bgL,C.bgP,C.bgO])
x(A.cY,[C.aJX,C.aKc,C.aK7,C.aKb,C.aKa,C.aKh,C.bgK,C.bgM,C.bgN,C.bgR,C.bgX,C.bgW,C.bgU])
w(C.aKd,A.I)
w(C.w6,S.hd)
x(A.eb,[C.aK8,C.aK9,C.aK4,C.bgS,C.bgT,C.bgQ,C.bgV])
w(C.kR,H.fQ)
x(A.O,[C.FJ,C.aiu])})()
A.da(b.typeUniverse,JSON.parse('{"w6":{"cE":["kR"],"eT":["kR"],"cE.0":"kR"},"FJ":{"O":[],"c":[]},"aiu":{"O":[],"c":[]}}'))
var y=(function rtii(){var x=A.X
return{l:x("cq<h,h>"),V:x("w<U>"),O:x("w<d>"),m:x("w<ab<h,h>>"),p:x("w<c>"),t:x("w<r>"),j:x("T<@>"),L:x("T<r>"),f:x("ab<@,@>"),n:x("as<+choice,label,mult(r,h,h),ed>"),w:x("f8"),D:x("w6"),R:x("kR"),N:x("h"),q:x("fL"),z:x("@"),S:x("r"),u:x("iU?"),T:x("h?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.Xw=new A.d(1,0.050980392156862744,0.30196078431372547,0.1843137254901961,B.e)
D.Z8=new A.d(1,0.17647058823529413,0.17647058823529413,0.20784313725490197,B.e)
D.a4J=new A.A(28,20,28,20)
D.a4O=new A.A(2,4,2,4)
D.a53=new A.A(5,4,5,4)
D.a1C=new A.d(1,0.9882352941176471,0.9647058823529412,0.7294117647058823,B.e)
D.WA=new A.d(1,0.7019607843137254,0.5294117647058824,0.1568627450980392,B.e)
D.abS=x([I.L,D.a1C,D.WA,I.L],y.O)
D.abh=new F.ah(E.U,E.a0,B.t,D.abS,null,null)
D.atI=new A.xf(2,"PAIR","3.5x")
D.atP=new A.xf(3,"COLOR","10x")
D.atz=new A.xf(4,"SEQ","15x")
D.atu=new A.xf(5,"PURE SEQ","100x")
D.atE=new A.xf(6,"SET","100x")
D.acT=x([D.atI,D.atP,D.atz,D.atu,D.atE],A.X("w<+choice,label,mult(r,h,h)>"))
D.afu=x([B.I_,B.HZ,B.HY],y.m)
D.afv=x(["\u2663","\u2666","\u2665","\u2660"],A.X("w<h>"))
D.ao3=new A.cq(B.fF,["rajesh jam","809504"],y.l)
D.ao1=new A.cq(B.fF,["rahul","612340"],y.l)
D.ajB=x([D.ao3,D.ao1,B.HX],y.m)
D.a_b=new A.d(1,0.10196078431372549,0.0392156862745098,0.09411764705882353,B.e)
D.VO=new A.d(1,0.050980392156862744,0.023529411764705882,0.06274509803921569,B.e)
D.a0d=new A.d(1,0.07058823529411765,0.03137254901960784,0.10980392156862745,B.e)
D.ajY=x([D.a_b,D.VO,D.a0d],y.O)
D.aAm=new A.z(!0,B.p,null,null,null,null,13,B.x,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aBP=new A.z(!0,B.h,null,null,null,null,32,B.D,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aBS=new A.z(!0,G.c_,null,null,null,null,9,B.R,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aEE=new A.z(!0,B.h,null,null,null,null,22,B.D,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aEP=new A.z(!0,B.J,null,null,null,null,8,B.B,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aGa=new A.az("2X",null,G.vs,null,null,null,null,null,null,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"cc8","bNW",()=>S.iY(new C.bsa(),"red_black",!1,"Red & Black"))})()};
(a=>{a["AHmY3UGCZl1llhq1P0AAYKGBkjs="]=a.current})($__dart_deferred_initializers__);