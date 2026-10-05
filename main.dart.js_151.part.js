((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,X,O,Y,P,L,Z,C={
bTb(d){return B.k.aj(d,13)},
aJk(d){var x=A.ag(d).i("as<1,r>"),w=A.af(new A.as(d,C.bHy(),x),x.i("aW.E"))
B.b.eh(w,new C.aJl())
return w},
bCp(d){var x=C.aJk(d),w=x[0],v=x[1]
return w===v&&v===x[2]},
bT9(d){var x,w,v
if(C.bCp(d))return!1
x=C.aJk(d)
w=x[0]
v=x[1]
return w===v||v===x[2]},
bT8(d){return B.b.f4(d,new C.aJj(B.k.bk(d[0],13)))},
bTa(d){var x,w=new A.as(d,C.bHy(),A.ag(d).i("as<1,r>")).i4(0),v=A.af(w,A.H(w).c)
B.b.hh(v)
if(v.length!==3)return!1
w=v[2]
x=v[0]
if(w-x===2&&v[1]-x===1)return!0
if(x===0&&v[1]===1&&w===12)return!0
return!1},
btO(d){var x=C.bCp(d),w=C.bT8(d),v=C.bTa(d)
if(x)return 6
if(v&&w)return 5
if(v)return 4
if(w)return 3
if(C.bT9(d))return 2
return 1},
bCq(d,e){var x=C.bT7(d,e)>=0?0:1
return new A.ahF(x,C.btO(x===0?d:e))},
bT7(d,e){var x,w,v,u,t,s=C.btO(d),r=C.btO(e)
if(s!==r)return s>r?1:-1
x=C.aJk(d)
w=C.aJk(e)
for(v=0;v<3;++v){u=x[v]
t=w[v]
if(u!==t)return u>t?1:-1}return 0},
aJl:function aJl(){},
aJj:function aJj(d){this.a=d},
aJA:function aJA(d){this.a=d},
bTg(d){var x,w,v,u,t
for(x=["timer","time","value","countdown","t","sec","seconds","timeLeft"],w=J.N(d),v=0;v<8;++v){u=w.h(d,x[v])
if(A.d4(u))return u
if(typeof u=="number")return B.d.ai(u)
if(typeof u=="string"){t=A.cB(B.c.S(u),null)
if(t!=null)return t}}return null},
bTi(d){var x,w=J.N(d),v=w.h(d,"data"),u=y.f
if(u.b(v))return A.ao(v,y.N,y.z)
x=w.h(d,"payload")
if(u.b(x))return A.ao(x,y.N,y.z)
return d},
btQ(d,e){var x,w,v
if(!y.j.b(d))return null
x=A.a([],y.t)
for(w=J.b0(d);w.A();){v=w.gP(w)
if(A.d4(v))x.push(v)
else if(typeof v=="number")x.push(B.d.ai(v))}if(e!=null)return x.length===e?x:null
return x.length>=3?x:null},
bCs(d){var x,w,v,u
if(d==null)return null
x=d.h(0,"redCards")
w=C.btQ(x==null?d.h(0,"red_cards"):x,3)
x=d.h(0,"blackCards")
v=C.btQ(x==null?d.h(0,"black_cards"):x,3)
if(w!=null&&v!=null)return new A.UV(v,w)
u=C.btQ(d.h(0,"cards"),null)
if(u!=null&&u.length>=6){x=B.b.cC(u,0,3)
return new A.UV(B.b.cC(u,3,6),x)}return null},
bTf(d){var x,w,v,u,t,s,r,q,p,o=null,n=J.N(d),m=n.h(d,"result"),l=m==null?n.h(d,"roundResult"):m,k=l==null?n.h(d,"gameResult"):l
if(typeof k=="string"){x=B.c.S(k)
if(J.ax(x)!==0&&!J.f(x,"null"))try{k=B.L.bB(0,x,o)}catch(w){k=null}else k=null}n=y.f
if(n.b(k)){m={}
v=y.z
u=A.ao(k,v,v)
t=y.N
m.a=A.F(t,v)
u.aK(0,new C.aJs(m))
s=m.a.h(0,"data")
if(n.b(s)){r=A.ao(s,v,v)
m.a=A.F(t,v)
r.aK(0,new C.aJt(m))}q=m.a.h(0,"result")
if(A.d4(q))p=q
else p=typeof q=="number"?B.d.ai(q):o
return new A.BV(m.a,p)}if(A.d4(k))return new A.BV(o,k)
if(typeof k=="number")return new A.BV(o,B.d.ai(k))
return new A.BV(o,o)},
bTh(d,e){var x,w,v,u=C.bCs(e)
if(u!=null){x=C.bCq(u.b,u.a)
if(d===0||d===1)return d===x.a
if(d>=2&&d<=6)return d===x.b
return!1}w=e.h(0,"winning")
if(w==null)w=e.h(0,"result")
if(A.d4(w))v=w
else v=typeof w=="number"?B.d.ai(w):-1
switch(d){case 0:return v===0
case 1:return v===1
case 2:return J.f(e.h(0,"sidePair"),!0)
case 3:return J.f(e.h(0,"sideColor"),!0)
case 4:return J.f(e.h(0,"sideSeq"),!0)
case 5:return J.f(e.h(0,"sidePureSeq"),!0)
case 6:return J.f(e.h(0,"sideSet"),!0)
default:return!1}},
w_:function w_(d,e,f){var _=this
_.at=d
_.ay=_.ax=null
_.a=e
_.b=$
_.c=f
_.d=!1},
aJz:function aJz(d){this.a=d},
aJs:function aJs(d){this.a=d},
aJt:function aJt(d){this.a=d},
aJu:function aJu(){},
aJv:function aJv(d){this.a=d},
aJw:function aJw(d){this.a=d},
aJy:function aJy(d){this.a=d},
aJx:function aJx(d){this.a=d},
aJr:function aJr(d,e,f){this.a=d
this.b=e
this.c=f},
bCt(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w){return new C.kN(j,h,i,m,u,q,r,v,g,p,o,!1,e,d,n,s,w,k,l,t)},
kN:function kN(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w){var _=this
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
bqx:function bqx(){},
FB:function FB(d,e){this.c=d
this.a=e},
aJE:function aJE(d){this.a=d},
aJC:function aJC(){},
aJD:function aJD(){},
aJB:function aJB(){},
ahS:function ahS(d,e,f){this.c=d
this.d=e
this.a=f},
bfB:function bfB(d){this.a=d},
bfC:function bfC(d){this.a=d},
bfs:function bfs(d){this.a=d},
bft:function bft(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
bfv:function bfv(d,e){this.a=d
this.b=e},
bfw:function bfw(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bfu:function bfu(d,e){this.a=d
this.b=e},
bfy:function bfy(){},
bfx:function bfx(d){this.a=d},
bfA:function bfA(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
bfz:function bfz(d,e,f){this.a=d
this.b=e
this.c=f},
bfG:function bfG(d,e){this.a=d
this.b=e},
bfF:function bfF(d,e,f){this.a=d
this.b=e
this.c=f},
bfE:function bfE(d,e,f){this.a=d
this.b=e
this.c=f},
bfD:function bfD(){}},D,A_,Q,A0,R,A1,A2,H,A3,A4,M,A5,S,T,G,A6,F,E,N,U,K,I,A7,A8,V,W,A9
J=c[1]
A=c[0]
B=c[2]
X=c[149]
O=c[68]
Y=c[45]
P=c[159]
L=c[36]
Z=c[50]
C=a.updateHolder(c[17],C)
D=c[160]
A_=c[151]
Q=c[70]
A0=c[58]
R=c[61]
A1=c[72]
A2=c[75]
H=c[63]
A3=c[57]
A4=c[54]
M=c[87]
A5=c[40]
S=c[60]
T=c[79]
G=c[74]
A6=c[46]
F=c[65]
E=c[69]
N=c[62]
U=c[47]
K=c[66]
I=c[52]
A7=c[29]
A8=c[117]
V=c[131]
W=c[42]
A9=c[53]
C.aJA.prototype={
b3j(d){var x=L.nU("red_black")
if(x==null)return A.dN(null,y.T)
return I.p1(x.b+"_1",d)},
apP(d,e,f,g,h){var x=L.nU("red_black")
if(x==null)return null
return this.a.pa(0,x,e,f,g,h)},
baK(d){var x=L.nU("red_black")
if(x==null)return A.dN(B.bD,y.L)
return Z.ud(x.b,120,d)}}
C.w_.prototype={
jE(){var x=this
A.e5()
if(x.c.b)return
x.aR_()
x.aR2()
x.v8()
H.v4(x.gaR1(),y.H)
x.ay=A.fu(A_.mC,new C.aJz(x))},
aV(d){var x=this.ay
if(x!=null)x.U(0)
x=this.ax
if(x!=null)x.a.$0()
A.e5()
return this.ic(0)},
jN(d){var x=this.c.fB(B.k.R(d,0,4))
if((this.gF().c&4)===0)this.I(x)
return null},
kN(d){var x=this.c.w.h(0,d)
if(x!=null&&x>0)return x
return null},
zf(){var x=0,w=A.p(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$zf=A.q(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.e(s.at.baK($.aA),$async$zf)
case 7:r=e
q=s.gF()
if((q.c&4)!==0||J.cr(r)){x=1
break}p=s.c
o=J.e_(r,new C.aJu(),y.S)
o=A.af(o,o.$ti.i("aW.E"))
p=p.b_4(o)
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
case 6:case 1:return A.n(v,w)
case 2:return A.m(t.at(-1),w)}})
return A.o($async$zf,w)},
v8(){var x=0,w=A.p(y.H),v=1,u=[],t=this,s,r,q,p,o
var $async$v8=A.q(function(d,e){if(d===1){u.push(e)
x=v}for(;;)switch(x){case 0:v=3
x=6
return A.e(t.at.b3j($.aA),$async$v8)
case 6:s=e
r=t.gF()
if((r.c&4)===0&&s!=null&&s.length!==0){q=t.c.fS(s)
if((r.c&4)===0)t.I(q)}v=1
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
return A.o($async$v8,w)},
v7(d,e){return this.aL5(d,e)},
aR_(){return this.v7(!1,null)},
aL5(d,e){var x=0,w=A.p(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$v7=A.q(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:m=$.aA
if(m==null||m.length===0){x=1
break}u=4
p=e==null
o=s.at.a
x=p?7:9
break
case 7:x=10
return A.e(o.dC(m),$async$v7)
case 10:x=8
break
case 9:x=11
return A.e(o.kZ(m),$async$v7)
case 11:case 8:r=g
q=p?r:I.p0(d,s.c.at,r,e)
x=!p?12:13
break
case 12:x=14
return A.e(H.fi(q),$async$v7)
case 14:case 13:p=s.gF()
if((p.c&4)===0){o=s.c.ej(q)
if((p.c&4)===0)s.I(o)}u=2
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
return A.o($async$v7,w)},
aR2(){var x=this,w=x.ax
if(w!=null)w.a.$0()
x.ax=x.at.apP(0,new C.aJv(x),new C.aJw(x),new C.aJx(x),new C.aJy(x))},
aR0(d,e){var x,w,v,u,t,s,r,q,p=this,o={},n=p.gF()
if((n.c&4)!==0)return
x=p.c.w
w=x.gbh(x)
o.a=!1
if(w)if(e!=null){for(x=p.c.w,x=x.ge5(x),x=x.gab(x);x.A();)if(C.bTh(x.gP(x).a,e)){o.a=!0
break}}else for(x=p.c.w,x=x.ge5(x),x=x.gab(x);x.A();){v=x.gP(x).a
if(v<=1&&v===d){o.a=!0
break}}u=C.bCs(e)
x=u==null
t=x?null:u.b
s=x?null:u.a
r=!x?C.bCq(u.b,u.a).a:d
if(w){v=$.bL()
v.by(0,o.a?O.bW:O.c6)}q=A.c_(p.c.cx,!0,y.S)
B.b.fm(q,0,r)
if(q.length>80)q.pop()
x=p.c.b1z(x,w,q,!1,r,s,t,!0,o.a)
if((n.c&4)===0)p.I(x)
A.ct(B.be,new C.aJr(o,p,w),y.H)},
eS(d){return this.b99(d)},
b99(d){var x=0,w=A.p(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$eS=A.q(function(e,a0){if(e===1){t.push(a0)
x=u}for(;;)switch(x){case 0:g=s.c
if(!g.d){g=g.im("Wait for next round")
if((s.gF().c&4)===0)s.I(g)
x=1
break}l=g.f
if(l==null||l.length===0){g=g.im("No active round \u2014 reconnecting\u2026")
if((s.gF().c&4)===0)s.I(g)
s.v8()
x=1
break}l=$.bd
k=l==null?null:l.a
r=k==null?"":k
if(J.ax(r)===0){g=g.im("Login required")
if((s.gF().c&4)===0)s.I(g)
x=1
break}q=M.aR[B.k.R(g.r,0,4)]
g=s.c
if(g.at<q){g=g.im("Insufficient balance")
if((s.gF().c&4)===0)s.I(g)
x=1
break}if(!(g.d&&g.c>0&&g.f!=null)){g=g.im(g.c<=0?"Betting time over \u2014 wait for next round":"Betting closed")
if((s.gF().c&4)===0)s.I(g)
x=1
break}$.bL().by(0,A1.d6)
g=s.c
l=g.f
l.toString
p=l
l=y.S
j=I.p_(g.w,d,q,l)
g=s.c
g=g.b0H(g.at-q,!0,!0,j)
i=s.gF()
if((i.c&4)===0)s.I(g)
u=4
x=7
return A.e(I.p3(q,d,"red_black",p,$.aA,r),$async$eS)
case 7:u=2
x=6
break
case 4:u=3
f=t.pop()
o=A.a9(f)
if((i.c&4)!==0){x=1
break}n=o instanceof A9.hU?o.a:"Bet failed"
m=I.p4(s.c.w,d,q,l)
g=s.c
g=g.b0G(g.at+q,n,n,m)
if((i.c&4)===0)s.I(g)
x=6
break
case 3:x=2
break
case 6:case 1:return A.n(v,w)
case 2:return A.m(t.at(-1),w)}})
return A.o($async$eS,w)}}
C.kN.prototype={
mb(d,e,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=a5==null?m.c:a5,j=a8==null?m.d:a8,i=b6==null?m.e:b6,h=b2==null?m.f:b2,g=b3==null?m.r:b3,f=b7==null?m.w:b7
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
return C.bCt(t,u,!1,x,m.b,k,m.a,p,o,j,s,v,w,h,g,r,n,i,f,q)},
fB(d){var x=null
return this.mb(x,x,!1,!1,!1,!1,!1,x,x,x,x,x,x,x,x,d,x,x,x,x,x)},
ej(d){var x=null
return this.mb(d,x,!1,!1,!1,!1,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x)},
fS(d){var x=null
return this.mb(x,x,!1,!1,!1,!1,!1,x,x,x,x,x,x,x,d,x,x,x,x,x,x)},
h4(d){var x=null
return this.mb(x,x,!1,!1,!1,!1,!1,d,x,x,x,x,x,x,x,x,x,x,x,x,x)},
dm(d){var x=null
return this.mb(x,x,!1,!1,!1,!1,!1,x,x,x,x,x,x,x,x,x,x,x,d,x,x)},
pZ(d){var x=null
return this.mb(x,x,!1,!1,!1,!1,d,x,x,x,x,x,x,x,x,x,x,x,x,x,x)},
im(d){var x=null
return this.mb(x,x,!1,!1,!1,!1,!1,x,x,x,x,x,x,x,x,x,x,d,x,x,x)},
b_4(d){var x=null
return this.mb(x,x,!1,!1,!1,!1,!1,x,x,d,x,x,x,x,x,x,x,x,x,x,x)},
b1z(d,e,f,g,h,i,j,k,l){var x=null
return this.mb(x,x,!1,!1,!1,d,!1,x,e,f,g,h,i,j,x,x,k,x,x,x,l)},
b1b(d,e,f,g,h,i){var x=null
return this.mb(x,x,!1,!1,d,e,!1,x,f,x,g,x,x,x,x,x,h,x,x,i,x)},
b0H(d,e,f,g){var x=null
return this.mb(d,x,e,f,!1,!1,!1,x,x,x,x,x,x,x,x,x,x,x,x,g,x)},
b0G(d,e,f,g){var x=null
return this.mb(d,e,!1,!1,!1,!1,!1,x,x,x,x,x,x,x,x,x,x,f,x,g,x)},
gdG(){var x=this
return[x.a,x.b,x.c,x.d,x.e,x.f,x.r,x.w,x.x,x.y,x.z,!1,x.as,x.at,x.ax,x.ay,x.ch,x.CW,x.cx,x.cy]}}
C.FB.prototype={
u(d){var x=y.D
return H.hw(A3.ke(new C.aJB(),new C.aJC(),new C.aJD(),x,y.R),new C.aJE(this),x)}}
C.ahS.prototype={
u(d){return this.aR3(d,this.c,this.d)},
aR3(d,e,f){var x,w,v=null
if(e.b)return A.cT(N.Jo(v,v,v,v,v,v,A.l(e.a,v,v,v,v,v,v,v,v),v),G.dT,P.wM,v)
x=A.bl(d,B.vz,y.w).w
w=e.ay&&e.ch
return new A0.hH(w,this.aQZ(d,e,f,x.w.b+6),v)},
aQZ(d,e,f,g){var x,w=this,v=null,u=e.e,t=u&&e.d&&e.c>1,s=A.bO(0,A.bF(v,Y.xH(d,E.U,D.ahS,E.a0,v),B.Y)),r=A.bO(0,A.bF(v,new A.u(v,v,v,v,v,new F.ak(B.Q,B.V,B.t,A.a([K.bq.j(0.04),B.w,B.l.j(0.55)],y.O),v,v),B.m),B.Y)),q=y.p,p=A.a([A.bO(0,A.di(new A.a4(new A.A(0,56,0,96),F.V(A.a([U.bsQ(!1,v,v,!0,B.p,v,v,76,D.ahw,v,v),G.bY,U.bsQ(!1,v,v,!0,B.p,v,v,76,D.adB,v,v)],q),E.j,B.i,E.n,0),v),!0,v))],q)
if(!u)p.push(A.aH(v,A.ai(T.dl,B.ci,v,v,22),v,v,v,10,10,v))
u=e.ay
if(u)p.push(A.bO(0,A.di(A.bF(v,new A.u(B.l.j(0.42),v,v,v,v,v,B.m),B.Y),!0,v)))
p.push(new A.a4(new A.A(72,4,72,96),F.P(A.a([new A.G(v,B.d.R(Math.min(118,A.bl(d,B.bK,y.w).w.a.gdO()*0.3),92,124),w.ayx(d),v),G.aB,F.S(w.azn(d),1)],q),E.j,B.i,E.n),v))
if(u)p.push(A.bO(0,w.aRI(d)))
u=w.c
x=$.bd
x=x==null?v:x.b
if(x==null)x="Player"
p.push(new A.bM(B.V,v,v,new A5.pH(I.og(u.at,60,58,5,50,M.aR,B.p,200,w.d.gjM(),x,u.d,u.ay,u.r,!0),v),v))
p.push(A.aH(v,F.V(A.a([w.a5j(G.bQ,new C.bfB(d)),E.a2,w.a5j(K.cb,new C.bfC(d))],q),E.j,B.i,E.v,0),v,v,8,v,g,v))
return A.cT(v,v,I.ob(new A.ay(B.C,v,B.as,B.u,A.a([s,r,A.cI(!1,new A.ay(B.C,v,B.J,B.f,p,v),B.N,!1)],q),v),t),v)},
a5j(d,e){var x=null,w=B.l.j(0.55),v=F.Q(B.p.j(0.65),1.5)
return A.b4(!1,B.z,!0,x,A.bc(!1,x,!0,A.y(B.q,A.ai(d,B.p,x,x,20),B.f,x,x,new A.u(w,x,v,x,x,x,B.G),x,44,x,x,x,x,x,44),B.bd,!0,x,x,x,x,x,x,x,x,e,x,x,x,x,x,x,x),B.f,B.w,0,x,x,x,x,x,B.F)},
ayx(d){return A.cc(new C.bfs(this))},
a4V(d,e,f,g){var x,w=null,v=B.k.R(e,1,3),u=B.d.R(g*0.62,30,44),t=g+u*(v-1),s=B.l.j(0.32),r=A.x(8),q=F.Q(B.p.j(0.28),1),p=A.a([],y.p)
for(x=0;x<v;++x)p.push(new A.hi(x*u,0,w,w,w,w,d.$1(x),w))
return A.y(w,new A.G(t,f,new A.ay(B.C,w,B.J,B.f,p,w),w),B.f,w,w,new A.u(s,w,q,r,w,w,B.m),w,f+8,w,w,D.a3z,w,w,t+10)},
a4U(d,e){return this.a4V(new C.bfv(e,d),3,d,e)},
aA1(d,e,f){var x=d.length
if(x===0)return this.a4U(e,f)
return this.a4V(new C.bfw(this,d,f,e),B.k.R(x,1,3),e,f)},
azn(d){var x=this.c
return A.cc(new C.bfu(this,x.d&&x.c>0&&x.f!=null))},
aR4(d){var x=null,w=B.l.j(0.45),v=A.x(8),u=F.Q(B.p.j(0.35),1),t=this.c.cx.length
t=t===0?A.aE(A.l("History",x,x,x,x,x,A.E(x,x,B.h.j(0.35),x,x,x,x,x,x,x,x,11,x,x,B.S,x,x,!0,x,x,x,x,x,x,x,x),x,x),x,x):N.jj(x,new C.bfx(this),t,K.r7,x,!0,B.aU,new C.bfy(),!1)
return A.bF(t,new A.u(w,x,u,v,x,x,B.m),B.Y)},
a9R(d,e,f){var x=f?0:1,w=this.d.kN(x)
return new I.hT(new A.e0(new C.bfA(this,e,x,f?B.cP:G.cN,f,w,d),null),null)},
aTY(d){var x=y.n
x=A.af(new A.as(D.ab3,new C.bfG(this,d),x),x.i("aW.E"))
return F.V(x,E.j,B.i,E.n,0)},
aRI(d){var x,w,v,u,t,s,r=null,q=this.c,p=q.ax
if(p==null)return B.ao
x=p===0?"RED":"BLACK"
p=B.l.j(0.82)
w=A.x(16)
v=F.Q(B.p.j(0.55),1)
u=A.a([new A.W(0,B.r,B.l.j(0.5),B.o,20)],y.V)
t=A.a([],y.p)
if(q.CW){q=q.ch
s=q?"WON!":"LOST"
t.push(new A.a4(K.ir,A.l(s,r,r,r,r,r,A.E(r,r,q?T.eY:K.ck,r,r,r,r,r,r,r,r,26,r,r,B.E,r,r,!0,r,r,r,r,r,r,r,r),r,r),r))}t.push(A.l(x,r,r,r,r,r,D.azn,r,r))
t.push(E.aX)
t.push(H.bt("assets/games_assets/red_black/ic_game_over.png",B.q,r,r,r,r,r,r,new C.bfD(),!1,B.T,E.ah,r,!1,r,!1,r,!1,r,r,G.P,r,r,100))
return A.di(A.aE(A.y(r,F.P(t,E.j,B.i,E.v),B.f,r,r,new A.u(p,r,v,w,u,r,B.m),r,r,r,r,D.a3g,r,r,r),r,r),!0,r)}}
var z=a.updateTypes(["~(r)","am<~>()","FB(t,ab<i,@>)","w_(t)","K(kN,kN)","~(t,kN)","c(t,kN)","ih(t,ad)","en(+choice,label,mult(r,i,i))","r(r)"])
C.aJl.prototype={
$2(d,e){return B.k.bm(e,d)},
$S:94}
C.aJj.prototype={
$1(d){return B.k.bk(d,13)===this.a},
$S:50}
C.aJz.prototype={
$1(d){var x,w=this.a
if((w.gF().c&4)!==0)return
x=w.c
if(x.f==null||!x.e)w.v8()},
$S:14}
C.aJs.prototype={
$2(d,e){this.a.a.k(0,J.L(d),e)
return e},
$S:70}
C.aJt.prototype={
$2(d,e){this.a.a.k(0,J.L(d),e)
return e},
$S:70}
C.aJu.prototype={
$1(d){return B.k.R(d,0,1)},
$S:64}
C.aJv.prototype={
$0(){var x,w=this.a,v=w.gF()
if((v.c&4)!==0)return
x=w.c.dm(!0)
if((v.c&4)===0)w.I(x)
w.v8()
w.zf()},
$S:0}
C.aJw.prototype={
$0(){var x,w=this.a,v=w.gF()
if((v.c&4)===0){x=w.c.dm(!1)
if((v.c&4)===0)w.I(x)}},
$S:0}
C.aJy.prototype={
$1(d){var x,w=this.a,v=w.gF()
if((v.c&4)===0){x=w.c.h4(d)
if((v.c&4)===0)w.I(x)}},
$S:12}
C.aJx.prototype={
$1(d){var x,w,v,u,t,s,r,q,p=this.a,o=p.gF()
if((o.c&4)!==0)return
x=C.bTi(d)
w=I.nX(x)
v=A.aR(J.B(x,"status"))
u=v==null?null:v.toLowerCase()
if(w!=null){t=p.c.fS(w)
if((o.c&4)===0)p.I(t)}s=C.bTg(x)
if(s!=null&&u!=="finished"){t=p.c.h4(s)
if((o.c&4)===0)p.I(t)}if(u==="finished"){r=C.bTf(x)
q=r.b
if(q!=null)p.aR0(B.k.R(q,0,1),r.a)}},
$S:32}
C.aJr.prototype={
$0(){var x,w=this.b,v=w.gF()
if((v.c&4)!==0)return
x=w.c.b1b(!0,!0,!1,!0,!1,Q.bH)
if((v.c&4)===0)w.I(x)
w.v7(this.c,this.a.a)
w.zf()},
$S:8}
C.bqx.prototype={
$2(d,e){return new C.FB(A.aR(J.B(e,"gameName")),null)},
$S:z+2}
C.aJE.prototype={
$1(d){var x,w,v=null,u=this.a.c,t=A.ch()
t=new F.eU(t)
t=new A6.oB(t)
t=new C.aJA(t)
if(u==null)u="Red & Black"
x=L.nU("red_black")
w=$.bd
w=w==null?v:w.d
if(w==null)w=0
u=C.bCt(w,v,!1,v,x==null,0,u,!1,B.bD,!0,v,v,v,v,1,!1,v,!1,Q.bH,!1)
y.u.a($.aF.h(0,$.hu()))
u=new C.w_(t,G.bL,u)
u.jE()
return u},
$S:z+3}
C.aJC.prototype={
$2(d,e){var x=e.cy
return d.cy!=x&&x!=null},
$S:z+4}
C.aJD.prototype={
$2(d,e){var x,w,v=null,u=e.cy
if(u!=null){d.a0(y.q).f.bc(F.cb(v,v,v,v,v,B.u,v,A.l(u,v,v,v,v,v,v,v,v),v,E.a5,v,v,v,v,v,v,v,v,v,v))
x=H.aB(d,!1,y.D)
w=x.c.pZ(!0)
if((x.gF().c&4)===0)x.I(w)}},
$S:z+5}
C.aJB.prototype={
$2(d,e){var x=null
if(e.b)return A.cT(N.Jo(x,x,x,x,x,x,A.l(e.a,x,x,x,x,x,x,x,x),x),G.dT,P.wM,x)
return new C.ahS(e,H.aB(d,!1,y.D),x)},
$S:z+6}
C.bfB.prototype={
$0(){var x=this.a,w=A.aZ(x,!1)
if(w.rX())w.bi(0)
else S.j7(x)},
$S:0}
C.bfC.prototype={
$0(){return S.j7(this.a)},
$S:0}
C.bfs.prototype={
$2(d,e){var x=null,w=e.d,v=B.d.R(w*0.7,52,70),u=B.d.R(w*0.9,68,100),t=w<112?8:12,s=B.d.R(Math.min(96,e.b*0.16),72,100),r=this.a,q=new C.bft(r,v*0.7142857142857143,v,u*0.7,u,t),p=F.S(q.$1$red(!0),2),o=Math.min(52,w*0.42),n=y.p
return F.V(A.a([p,new A.G(s,x,F.P(A.a([F.S(A.aE(new A7.wJ(o,x,E.ah,B.N,x),x,x),1),new I.kv(r.c.c,o,x)],n),E.j,B.Z,E.n),x),F.S(q.$1$red(!1),2)],n),E.j,B.i,E.n,0)},
$S:z+7}
C.bft.prototype={
$1$red(d){var x,w,v,u,t=this,s=null,r=t.a,q=r.c,p=d?q.y:q.z,o=d?"assets/games_assets/red_black/ic_red_hearts.webp":"assets/games_assets/red_black/ic_black_spade.webp"
q=t.b
x=t.c
w=p!=null?r.aA1(p,x,q):r.a4U(x,q)
r=t.d
q=t.e
x=t.f
v=y.p
u=d?A.a([new A.G(r,q,H.bt(o,B.q,s,s,s,s,s,s,s,!1,B.T,E.ah,s,!1,s,!1,s,!1,s,s,G.P,s,s,s),s),new A.G(x,s,s,s),w],v):A.a([w,new A.G(x,s,s,s),new A.G(r,q,H.bt(o,B.q,s,s,s,s,s,s,s,!1,B.T,E.ah,s,!1,s,!1,s,!1,s,s,G.P,s,s,s),s)],v)
r=d?B.a_:E.W
q=d?B.a_:E.W
return new A.bM(r,s,s,F.cP(q,F.V(u,E.j,B.i,E.v,0),E.aq),s)},
$S:677}
C.bfv.prototype={
$1(d){var x=null,w=this.a
return A.dy(A.x(Math.min(6,w*0.12)),H.bt("assets/games_assets/red_black/card_bg.png",B.q,x,x,x,x,x,x,x,!1,B.T,E.aD,x,!1,this.b,!1,x,!1,x,x,G.P,x,x,w),B.ai,x)},
$S:678}
C.bfw.prototype={
$1(d){var x,w,v,u,t,s,r,q,p,o,n=null,m=this.b[d],l=this.c,k=A2.kH[B.k.aj(m,13)]
m=B.k.bk(m,13)
x=D.adC[m]
w=m===1||m===2?B.cP:G.cN
v=Math.min(6,l*0.12)
u=Math.max(3,l*0.07)
t=B.d.R(k==="10"?l*0.26:l*0.32,12,18)
s=B.d.R(l*0.24,10,15)
r=B.d.R(l*0.4,16,28)
m=A.x(v)
q=F.Q(B.p.j(0.7),1.2)
p=A.a([new A.W(0,B.r,B.l.j(0.45),V.HR,5)],y.V)
o=y.p
return A.y(n,new A.ay(B.C,n,B.J,B.u,A.a([A.aH(n,F.P(A.a([A.l(k,n,n,n,n,n,A.E(n,n,w,n,n,n,n,n,n,n,n,t,n,n,B.E,n,1,!0,n,n,n,n,n,n,n,n),n,n),A.l(x,n,n,n,n,n,A.E(n,n,w,n,n,n,n,n,n,n,n,s,n,n,n,n,1,!0,n,n,n,n,n,n,n,n),n,n)],o),E.j,B.i,E.v),n,n,u,n,u*0.45,n),A.aE(A.l(x,n,n,n,n,n,A.E(n,n,w.j(0.92),n,n,n,n,n,n,n,n,r,n,n,n,n,1,!0,n,n,n,n,n,n,n,n),n,n),n,n)],o),n),B.f,n,n,new A.u(n,n,q,m,p,V.Bs,B.m),n,this.d,n,n,n,n,n,l)},
$S:102}
C.bfu.prototype={
$2(d,e){var x=null,w=B.d.R(e.b,280,720),v=Math.min(e.d,w*0.72),u=Math.min(w,v/0.42),t=A.x(18),s=A.a([new A.W(1,B.r,B.p.j(0.25),B.o,14),new A.W(0,B.r,B.l.j(0.6),E.f0,18)],y.V),r=u*0.04,q=this.a,p=this.b,o=y.p
return A.aE(A.y(x,A.dy(A.x(15),new A.ay(B.C,x,B.as,B.u,A.a([A.y(x,x,B.f,D.Wt,x,x,x,x,x,x,x,x,x,x),H.bt("assets/games_assets/red_black/table.webp",B.q,x,x,x,x,x,x,x,!1,B.T,E.aD,x,!1,x,!1,x,!1,x,x,G.P,x,x,x),A.di(A.bF(x,new A.u(x,x,x,x,x,new F.ak(B.Q,B.V,B.t,A.a([B.l.j(0.12),B.w,B.l.j(0.25)],y.O),x,x),B.m),B.Y),!0,x),new A.a4(new A.A(r,v*0.04,r,v*0.05),F.P(A.a([new A.G(x,v*0.09,q.aR4(d),x),new A.G(x,v*0.03,x,x),F.S(F.V(A.a([F.S(q.a9R(d,p,!0),1),new A.G(u*0.02,x,x,x),F.S(q.a9R(d,p,!1),1)],o),E.ab,B.i,E.n,0),5),new A.G(x,v*0.025,x,x),new A.G(x,v*0.32,q.aTY(p),x)],o),E.ab,B.i,E.n),x)],o),x),B.ai,x),B.f,x,x,new A.u(x,x,x,t,s,D.a9v,B.m),x,v,x,x,G.mQ,x,x,u),x,x)},
$S:36}
C.bfy.prototype={
$2(d,e){return G.d7},
$S:24}
C.bfx.prototype={
$2(d,e){var x=null,w=this.a.c.cx[e]===0?B.dY:B.jW
return A.y(x,x,B.f,x,x,new A.u(w,x,F.Q(B.p.j(0.4),1),x,x,x,B.G),x,22,x,x,x,x,x,22)},
$S:104}
C.bfA.prototype={
$1(d){var x=this,w=null,v=x.b?1:0.62,u=A.x(14),t=A.x(14),s=F.Q(B.p.j(0.55),1.5),r=A.a([new A.W(0,B.r,B.l.j(0.35),G.br,8)],y.V),q=A.aH(w,A.y(w,D.aDA,B.f,w,w,new A.u(B.l.j(0.35),w,w,A.x(6),w,w,B.m),w,w,w,w,K.mR,w,w,w),w,w,w,8,6,w),p=A.aE(A.l(x.e?"RED":"BLACK",w,w,w,w,w,D.aC6,w,w),w,w),o=B.l.j(0.5),n=A.x(20),m=F.Q(B.p.j(0.4),1),l=x.f,k=l!=null
q=A.a([q,p,A.aH(8,A.aE(new I.hS(A.y(w,A.l(k?"\u20b9 "+A.v(l):"0",w,w,w,w,w,D.axV,w,w),B.f,w,w,new A.u(o,w,m,n,w,w,B.m),w,w,w,w,X.mM,w,w,w),w),w,w),w,w,0,0,w,w)],y.p)
if(k)q.push(A.aH(0,A.aE(A.dB(A4.Kh(l,Math.min(76,A.bl(x.r,B.bK,y.w).w.a.gdO()*0.18)),0.85),w,w),w,w,0,0,0,w))
return A.dB(A.b4(!1,B.z,!0,w,A.bc(!1,u,!0,H.eX(new A.ay(B.C,w,B.J,B.u,q,w),w,new A.u(x.d,w,s,t,r,w,B.m),w,w,w),w,!0,w,w,w,w,w,w,w,w,new C.bfz(x.a,d,x.c),w,w,w,w,w,w,w),B.f,B.w,0,w,w,w,w,w,B.F),v)},
$S:679}
C.bfz.prototype={
$0(){var x=this.a,w=x.c,v=M.aR[w.r]
if(w.at>=v)W.v0(this.b,v)
x.d.eS(this.c)},
$S:0}
C.bfG.prototype={
$1(d){var x=this.a,w=x.d.kN(d.a),v=this.b?1:0.62
return F.S(new A.a4(A8.iv,A.dB(new I.hT(new A.e0(new C.bfF(x,d,w),null),null),v),null),1)},
$S:z+8}
C.bfF.prototype={
$1(d){var x=null,w=this.b,v=A.x(10),u=A.x(10),t=F.Q(B.p.j(0.25),1),s=A.l(w.b,x,1,B.I,x,x,D.aCh,x,x),r=A.l(w.c,x,x,x,x,x,A.E(x,x,B.p.j(0.9),x,x,x,x,x,x,x,x,9,x,x,B.y,x,x,!0,x,x,x,x,x,x,x,x),x,x),q=this.c
return A.b4(!1,B.z,!0,x,A.bc(!1,v,!0,H.eX(F.P(A.a([s,r,new I.hS(A.l(q!=null?"\u20b9 "+A.v(q):"0",x,x,x,x,x,D.azq,x,x),x)],y.p),E.j,B.Z,E.n),x,new A.u(D.XS,x,t,u,x,x,B.m),x,D.a3k,x),x,!0,x,x,x,x,x,x,x,x,new C.bfE(this.a,d,w),x,x,x,x,x,x,x),B.f,B.w,0,x,x,x,x,x,B.F)},
$S:74}
C.bfE.prototype={
$0(){var x=this.a,w=x.c,v=M.aR[w.r]
if(w.at>=v)W.v0(this.b,v)
x.d.eS(this.c.a)},
$S:0}
C.bfD.prototype={
$3(d,e,f){return B.ao},
$S:15};(function installTearOffs(){var x=a._static_1,w=a._instance_1u,v=a._instance_0u
x(C,"bHy","bTb",9)
var u
w(u=C.w_.prototype,"gjM","jN",0)
v(u,"gaR1","zf",1)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.es,[C.aJl,C.aJs,C.aJt,C.bqx,C.aJC,C.aJD,C.aJB,C.bfs,C.bfu,C.bfy,C.bfx])
x(A.d8,[C.aJj,C.aJz,C.aJu,C.aJy,C.aJx,C.aJE,C.bft,C.bfv,C.bfw,C.bfA,C.bfG,C.bfF,C.bfD])
w(C.aJA,A.I)
w(C.w_,R.hv)
x(A.er,[C.aJv,C.aJw,C.aJr,C.bfB,C.bfC,C.bfz,C.bfE])
w(C.kN,H.fW)
x(A.O,[C.FB,C.ahS])})()
A.dp(b.typeUniverse,JSON.parse('{"w_":{"cG":["kN"],"eY":["kN"],"cG.0":"kN"},"FB":{"O":[],"c":[]},"ahS":{"O":[],"c":[]}}'))
var y=(function rtii(){var x=A.a1
return{l:x("co<i,i>"),V:x("w<W>"),O:x("w<d>"),m:x("w<ab<i,i>>"),p:x("w<c>"),t:x("w<r>"),j:x("R<@>"),L:x("R<r>"),f:x("ab<@,@>"),n:x("as<+choice,label,mult(r,i,i),en>"),w:x("f4"),D:x("w_"),R:x("kN"),N:x("i"),q:x("fR"),z:x("@"),S:x("r"),u:x("jd?"),T:x("i?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.Wt=new A.d(1,0.050980392156862744,0.30196078431372547,0.1843137254901961,B.e)
D.XS=new A.d(1,0.17647058823529413,0.17647058823529413,0.20784313725490197,B.e)
D.a3g=new A.A(28,20,28,20)
D.a3k=new A.A(2,4,2,4)
D.a3z=new A.A(5,4,5,4)
D.a0f=new A.d(1,0.9882352941176471,0.9647058823529412,0.7294117647058823,B.e)
D.VE=new A.d(1,0.7019607843137254,0.5294117647058824,0.1568627450980392,B.e)
D.aa3=x([K.R,D.a0f,D.VE,K.R],y.O)
D.a9v=new F.ak(E.U,E.a0,B.t,D.aa3,null,null)
D.arr=new A.x7(2,"PAIR","3.5x")
D.ary=new A.x7(3,"COLOR","10x")
D.ari=new A.x7(4,"SEQ","15x")
D.ard=new A.x7(5,"PURE SEQ","100x")
D.arn=new A.x7(6,"SET","100x")
D.ab3=x([D.arr,D.ary,D.ari,D.ard,D.arn],A.a1("w<+choice,label,mult(r,i,i)>"))
D.adB=x([B.Hq,B.Hp,B.Ho],y.m)
D.adC=x(["\u2663","\u2666","\u2665","\u2660"],A.a1("w<i>"))
D.alS=new A.co(B.fy,["rajesh jam","809504"],y.l)
D.alQ=new A.co(B.fy,["rahul","612340"],y.l)
D.ahw=x([D.alS,D.alQ,B.Hn],y.m)
D.YS=new A.d(1,0.10196078431372549,0.0392156862745098,0.09411764705882353,B.e)
D.UT=new A.d(1,0.050980392156862744,0.023529411764705882,0.06274509803921569,B.e)
D.ZV=new A.d(1,0.07058823529411765,0.03137254901960784,0.10980392156862745,B.e)
D.ahS=x([D.YS,D.UT,D.ZV],y.O)
D.axV=new A.z(!0,B.p,null,null,null,null,13,B.y,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.azn=new A.z(!0,B.h,null,null,null,null,32,B.E,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.azq=new A.z(!0,G.cg,null,null,null,null,9,B.S,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aC6=new A.z(!0,B.h,null,null,null,null,22,B.E,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aCh=new A.z(!0,B.M,null,null,null,null,8,B.B,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aDA=new A.aD("2X",null,G.v_,null,null,null,null,null,null,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"cac","bM7",()=>R.jg(new C.bqx(),"red_black",!1,"Red & Black"))})()};
(a=>{a["LmYI6qPHwOx3ZDGhXE6bQXLiUcA="]=a.current})($__dart_deferred_initializers__);