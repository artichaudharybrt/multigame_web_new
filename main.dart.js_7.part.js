((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,M,O,P,Q,K,G,R,F,L,E,N,S,T,H,B={
c0R(d){var x,w,v="timed out"
if(d instanceof I.hI){x=d.b
if(x==null)x=0
if(x===429||x>=500)return!0
w=d.a.toLowerCase()
return C.c.t(w,"concurrent")||C.c.t(w,"econnreset")||C.c.t(w,"socket")||C.c.t(w,v)||C.c.t(w,"timeout")}w=J.J(d).toLowerCase()
return C.c.t(w,"socket")||C.c.t(w,"connection")||C.c.t(w,v)||C.c.t(w,"timeout")||C.c.t(w,"clientexception")},
bIl(d,e,f){var x,w=d.h(0,e)
if(w!=null)return w
x=A.cu()
x.seS(f.$0().hz(new B.bqv(d,e,x)))
d.k(0,e,x.aM())
return x.aM()},
o4(d,e,f,g,h,i){$.aow=$.aow+1
return $.bNi().qA(new B.bs4(g,i,d,e,null,h,f),y.F).hz(new B.bs5())},
bqk(d,e,f,a0,a1,a2,a3){var x=0,w=A.p(y.F),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$bqk=A.q(function(a5,a6){if(a5===1)return A.m(a6,w)
for(;;)switch(x){case 0:l=A.ce()
k=l+("/matches/rounds/"+A.d6(2,a1,C.a5,!1)+"/bets")
j=A.bQ(k,0,null)
i=y.N
h=A.aa(["userId",a3,"amount",d,"choice",f],i,y.K)
g=C.O.eC(h,null)
A.cL("POST",h,a0,k)
r=A.F(i,i)
r.k(0,"Content-Type","application/json")
r.k(0,"Accept","application/json")
if(a2!=null&&a2.length!==0)r.k(0,"Authorization","Bearer "+a2)
r.k(0,"ngrok-skip-browser-warning","true")
x=3
return A.e($.bNh().rJ("POST",j,r,g,null),$async$bqk)
case 3:u=a6
q=u.b>=200&&u.b<300
r=u.b
p=u
A.cz(A.aM(A.aL(p.e)).af(0,p.w),a0,r,q,k)
if(q){r=u
s=y.h.a(C.O.bB(0,A.aM(A.aL(r.e)).af(0,r.w),null))
o=s==null?A.F(i,y.z):s
n=J.D(o,"data")
if(y.f.b(n)){r=y.z
o=A.an(A.an(n,r,r),i,r)}i=J.M(o)
if(B.Zx(i.h(o,"_id"))==null)A.aQ(i.h(o,"betId"))
if(B.Zx(i.h(o,"roundId"))==null)B.Zx(i.h(o,"gameRoundId"))
A.aQ(i.h(o,"userId"))
r=A.cW(i.h(o,"amount"))
if(r!=null)C.d.aj(r)
r=A.cW(i.h(o,"choice"))
if(r!=null)C.d.aj(r)
A.aQ(i.h(o,"status"))
v=new B.Fk()
x=1
break}t="Bet failed"
try{i=u
s=y.h.a(C.O.bB(0,A.aM(A.aL(i.e)).af(0,i.w),null))
if(s!=null&&J.D(s,"message")!=null)t=A.c1(J.D(s,"message"))
else if(s!=null&&J.D(s,"error")!=null)t=A.c1(J.D(s,"error"))}catch(a4){i=u
if(A.aM(A.aL(i.e)).af(0,i.w).length!==0){i=u
t=A.aM(A.aL(i.e)).af(0,i.w)}}i=t
A.dd("[API] source: "+a0+" | "+k+" | error: "+i,"API.error")
throw A.j(I.M_(t,u.b))
case 1:return A.n(v,w)}})
return A.o($async$bqk,w)},
o1(d,e){return B.bIl($.bZF,d+"|",new B.br6(d,null,e))},
bpz(d,e,f){var x=0,w=A.p(y.T),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$bpz=A.q(function(g,a0){if(g===1)return A.m(a0,w)
for(;;)switch(x){case 0:l=A.ce()
k=l+("/matches/rounds/active/"+A.d6(2,e,C.a5,!1))
j=A.bQ(k,0,null)
i=y.N
A.cL("GET",A.aa(["roomId",e],i,i),"active_round",k)
p=A.F(i,i)
p.k(0,"Accept","application/json")
if(f!=null&&f.length!==0)p.k(0,"Authorization","Bearer "+f)
p.k(0,"ngrok-skip-browser-warning","true")
x=3
return A.e(A.f2(j,p),$async$bpz)
case 3:u=a0
o=u.b>=200&&u.b<300
p=u.b
n=u
A.cz(A.aM(A.aL(n.e)).af(0,n.w),"active_round",p,o,k)
if(o){p=u
p=A.aM(A.aL(p.e)).af(0,p.w).length===0}else p=!0
if(p){v=null
x=1
break}try{p=u
t=C.c.P(A.aM(A.aL(p.e)).af(0,p.w))
if(J.au(t)===0||J.f(t,"null")){v=null
x=1
break}s=C.O.bB(0,t,null)
if(s==null){v=null
x=1
break}r=null
if(y.P.b(s))r=s
else if(y.f.b(s))r=A.an(s,i,y.z)
else{v=null
x=1
break}q=J.D(r,"data")
if(y.f.b(q))r=A.an(q,i,y.z)
i=B.mN(r)
v=i
x=1
break}catch(h){v=null
x=1
break}case 1:return A.n(v,w)}})
return A.o($async$bpz,w)},
bdY:function bdY(d){this.a=0
this.b=d},
bdZ:function bdZ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
be_:function be_(d,e){this.a=d
this.b=e},
be0:function be0(d){this.a=d},
be1:function be1(d){this.a=d},
bqv:function bqv(d,e,f){this.a=d
this.b=e
this.c=f},
bs4:function bs4(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
bs5:function bs5(){},
br6:function br6(d,e,f){this.a=d
this.b=e
this.c=f},
Fk:function Fk(){},
bsG(d,e,f,g,h){var x,w,v,u={},t=d.a
M.Cw(t)
x=M.cv(t)
w=K.CX()
v=w+(C.c.bh(t,"/")?t:"/"+t)
u.a=-1
u.b=null
x.cF(0,"connect",new B.bsI(d,v,e))
x.cF(0,"disconnect",new B.bsJ(d,v,f))
x.cF(0,d.c,new B.bsL(u,h))
x.cF(0,d.d,new B.bsK(u,g))
if(x.y){A.dd("[Socket] game: "+t+" | url: "+v+" | connected","Socket")
e.$0()}return new B.aMj(new B.bsH(x,d))},
aMj:function aMj(d){this.a=d},
bsI:function bsI(d,e,f){this.a=d
this.b=e
this.c=f},
bsJ:function bsJ(d,e,f){this.a=d
this.b=e
this.c=f},
bsL:function bsL(d,e){this.a=d
this.b=e},
bsK:function bsK(d,e){this.a=d
this.b=e},
bsH:function bsH(d,e){this.a=d
this.b=e},
bR9(d,e){var x,w=d.mr(y.G)
if(w==null)return
x=B.a25(d)
if(x!=null)x.bcq(e,w.d)},
a25(d){var x=d.Y(y.x)
return x==null?null:x.f},
E2:function E2(d,e){this.c=d
this.a=e},
To:function To(d){var _=this
_.d=d
_.c=_.a=_.e=null},
n4(d,e,f,g,h,i,j,k,l,m,n,o,p,q){return new B.a2v(d,i,p,l,j,m,k,h,f,e,g,!0,n,o,null)},
bRF(d){var x=d.b
if(!(x<600)){x=d.a
if(x<560)return 78
if(x>=900)return 102
if(x>=700)return 94
return 86}if(d.c)return C.d.S(x*0.17,58,72)
d.a<560
return 60
if(d.d>=600)return 68
return 64},
bRE(d,e,f,g,h){return new B.LU(d,h,g,f,e,null)},
a2v:function a2v(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.z=l
_.Q=m
_.as=n
_.go=o
_.id=p
_.k1=q
_.a=r},
ay9:function ay9(d,e,f,g,h,i,j,k,l,m){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l
_.y=m},
ay8:function ay8(d,e){this.a=d
this.b=e},
LU:function LU(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
akT:function akT(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bln:function bln(d){this.a=d},
aft:function aft(d){this.a=d},
b8Y:function b8Y(){},
ahT:function ahT(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
a2w:function a2w(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
ay7:function ay7(d){this.a=d},
IM:function IM(d,e,f){this.c=d
this.d=e
this.a=f},
amQ:function amQ(d,e){var _=this
_.r=_.f=_.e=_.d=$
_.bU$=d
_.ao$=e
_.c=_.a=null},
bod:function bod(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
JY:function JY(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
Sb:function Sb(d){var _=this
_.d=d
_.x=_.w=_.r=_.f=_.e=null
_.y=$
_.Q=_.z=0
_.as=!1
_.c=_.a=null},
aZu:function aZu(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aZq:function aZq(d){this.a=d},
aZp:function aZp(d){this.a=d},
aZm:function aZm(d,e){this.a=d
this.b=e},
aZn:function aZn(d){this.a=d},
aZl:function aZl(d){this.a=d},
aZo:function aZo(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aZk:function aZk(d){this.a=d},
aZt:function aZt(d,e,f){this.a=d
this.b=e
this.c=f},
aZr:function aZr(d,e,f){this.a=d
this.b=e
this.c=f},
aZs:function aZs(){},
Zj:function Zj(){},
nZ(d,e,f,g){var x,w
if(d){x=f-e
w=$.byz()
w.sq(0,x>0.009?x:0)}return f},
nY(d,e,f,g){var x=A.an(d,g,y.q),w=x.h(0,e)
x.k(0,e,(w==null?0:w)+f)
return x},
o5(d,e,f,g){var x=A.an(d,g,y.q),w=x.h(0,e),v=(w==null?0:w)-f
if(v<=0)x.L(0,e)
else x.k(0,e,v)
return x},
Zx(d){var x,w,v
if(d==null)return null
if(typeof d=="string"){x=C.c.P(d)
return x.length===0?null:x}if(y.f.b(d)){w=J.D(d,"$oid")
if(typeof w=="string"&&w.length!==0)return w}v=J.J(d)
if(v.length===0||v==="null")return null
return v},
mN(d){var x=J.M(d),w=B.Zx(x.h(d,"_id"))
if(w==null)w=B.Zx(x.h(d,"id"))
return w==null?B.Zx(x.h(d,"roundId")):w}},D,I
J=c[1]
A=c[0]
C=c[2]
M=c[62]
O=c[58]
P=c[57]
Q=c[74]
K=c[66]
G=c[77]
R=c[84]
F=c[68]
L=c[59]
E=c[72]
N=c[65]
S=c[176]
T=c[103]
H=c[69]
B=a.updateHolder(c[55],B)
D=c[128]
I=c[56]
B.bdY.prototype={
qA(d,e){var x=new A.aP($.aF,e.i("aP<0>")),w=new B.bdZ(this,d,new A.bh(x,e.i("bh<0>")),e)
if(this.a<3)w.$0()
else this.b.push(w)
return x}}
B.Fk.prototype={}
B.aMj.prototype={}
B.E2.prototype={
V(){return new B.To(new A.bw(null,y.A))}}
B.To.prototype={
bF(){var x,w,v=this
v.d6()
x=v.c
x.toString
w=B.a25(x)
x=v.e
if(x!=w){if(x!=null)x.an9(v.d)
v.e=w
if(w!=null)w.bbu(v.d)}},
l(){var x=this.e
if(x!=null)x.an9(this.d)
this.aa()},
u(d){return new A.hk(this.a.c,this.d)}}
B.a2v.prototype={
u(d){var x,w,v,u,t,s,r,q,p,o=this,n=o.w
if(n==null){n=$.bd
n=n==null?null:n.b
x=n}else x=n
if(x==null)x="Player"
n=A.bk(d,C.d0,y.w).w
w=F.eF(d)
v=!(w.b<600)
u=B.bRF(w)
t=14+Math.max(n.r.c,0)
s=v&&u>=72
if(v)r=s?8:6
else r=5
n=o.z
q=v?Math.max(n,58):Math.min(n,Math.min(o.Q,48))
n=o.as
p=v?Math.max(n,4):Math.min(n,2.5)
n=v?20:16
return new B.a2w(A.cc(new B.ay9(o,u,r,v,s,w,t,q,p,x)),C.N,new A.A(14,r,t,r),n,o.r,u,null)}}
B.LU.prototype={
u(d){var x=this,w=null,v=x.d,u=v?x.e:C.h.j(0.22),t=v?2.4:1,s=x.f,r=Math.min(x.r,Math.max(0,s-t*2)*0.94),q=C.l.j(0.12),p=F.R(u,t),o=y.V,n=A.a([new A.U(0,C.r,C.l.j(0.45),E.aJ,8)],o)
if(v)C.b.H(n,A.a([new A.U(1,C.r,x.e.j(0.55),C.o,12),new A.U(1.2,C.r,C.h.j(0.16),C.o,0)],o))
return A.dG(new A.G(s,s,A.bI(L.y6(A.aC(P.Kv(x.c,r),w,w)),new A.t(q,w,p,w,n,w,C.F),C.Y),w),1)}}
B.akT.prototype={
u(d){var x,w=null,v=this.c,u=this.d,t=A.a([u.j(0.22),C.l.j(0.35)],y.O),s=F.R(u,2.4)
u=A.a([new A.U(0,C.r,u.j(0.22),C.o,4)],y.V)
x=K.bu("assets/icon/user.png",C.p,w,w,w,w,w,w,new B.bln(this),!1,C.T,E.aE,w,!1,w,!1,w,!1,w,w,G.S,w,w,w)
return new A.G(v,v,A.bI(L.y6(x),new A.t(w,w,s,w,u,new F.ai(E.U,E.a0,C.t,t,w,w),C.F),C.Y),w)}}
B.aft.prototype={
u(d){return new A.la($.byz(),new B.b8Y(),null,null,y.e)}}
B.ahT.prototype={
u(d){var x=this,w=null,v=x.f>=52,u=A.k(x.c,w,1,C.H,w,w,A.B(w,w,C.h,w,w,w,w,w,w,w,w,v?15:12,w,w,C.B,w,1.05,!0,w,0.2,w,w,w,D.tE,w,w),w,w),t=v?3:1,s=N.a2x(x.d),r=x.e,q=v?16:13
return F.P(A.a([u,new A.G(w,t,w,w),D.aKW,A.k("\u20b9 "+s,w,1,C.H,w,w,A.B(w,w,r,w,w,w,w,w,w,w,w,q,w,w,C.D,w,1.05,!0,w,0.15,w,w,w,A.a([new A.c7(r.j(0.35),C.o,6)],y.S),w,w),w,w)],y.p),E.X,C.a1,E.v)},
gaG(d){return this.c}}
B.a2w.prototype={
adK(d){var x,w
if(d.d<0.5){x=this.f
w=new A.b9(x,x)
return new A.cM(w,w,w,C.a4)}return A.x(this.f)},
u(d){var x,w,v,u,t,s,r=this,q=null
d.Y(y.I).toString
x=r.d
w=r.adK(x)
v=r.e
u=C.l.j(0.55)
t=x.d<0.5
s=t?14:18
t=t?-3:6
s=A.a([new A.U(0,C.r,u,new A.l(0,t),s),new A.U(0,C.r,r.r.j(0.18),C.o,14)],y.V)
u=r.aVy(new A.A(v.a,v.b,v.c,v.d))
return A.y(q,A.dC(w,new A.G(1/0,r.w,u,q),C.ak,q),C.f,q,q,new A.t(q,q,q,w,s,q,C.m),q,q,q,x,q,q,q,1/0)},
aVy(d){var x=null
return new A.ay(C.p,x,C.K,C.u,A.a([A.bP(0,K.bu("assets/games_assets/common/ic_bottom_strip.webp",C.V,x,x,x,x,x,x,new B.ay7(this),!1,C.T,E.eJ,x,!1,x,!1,x,!1,x,x,G.S,x,x,x)),A.bP(0,new A.a2(d,this.c,x))],y.p),x)}}
B.IM.prototype={
V(){return new B.amQ(null,null)}}
B.amQ.prototype={
a4(){var x,w,v,u,t=this,s=null
t.ag()
x=A.bb(s,E.mY,0,s,1,s,t)
x.bC(0)
t.d!==$&&A.b0()
t.d=x
w=y.t
v=A.bO(C.bu,x,s)
u=w.i("aw<aO.T>")
t.e!==$&&A.b0()
t.e=new A.aw(v,new A.aE(6,-10,w),u)
v=A.bO(D.a9w,x,s)
t.r!==$&&A.b0()
t.r=new A.aw(v,new A.aE(0.72,1,w),u)
u=y.E
u=A.aUG(A.a([new A.ht(new A.aE(0,1,w),12,u),new A.ht(new A.uW(1,1,y.Q),62,u),new A.ht(new A.aE(1,0,w),26,u)],y.s),y.i)
t.f!==$&&A.b0()
t.f=new A.aw(x,u,u.$ti.i("aw<aO.T>"))},
l(){var x=this.d
x===$&&A.b()
x.l()
this.aw1()},
aFm(d){var x,w,v,u
if(d>=1e7)return this.af7(d/1e7)+"Cr"
if(d>=1e5)return this.af7(d/1e5)+"L"
x=C.k.p(Math.abs(d))
for(w=x.length,v=0,u="";v<w;++v){if(v>0&&C.k.ac(w-v,3)===0)u+=","
u+=x[v]}return u.charCodeAt(0)==0?u:u},
af7(d){var x
if(d>=100)return C.k.p(C.d.a_(d))
x=C.d.a_(d*10)/10
if(x===C.d.h3(x))return C.k.p(C.d.aj(x))
return C.d.a1(x,1)},
u(d){var x,w,v,u=this.a.d,t=A.a4(u,H.dM,0.5)
t.toString
x=A.a4(u,D.a1E,0.78)
x.toString
w=A.a4(u,D.Wn,0.42)
w.toString
v=this.d
v===$&&A.b()
return A.co(v,new B.bod(this,w,x,t,D.m6),null)}}
B.JY.prototype={
V(){return new B.Sb(C.bF)}}
B.Sb.prototype={
a4(){var x=this
x.ag()
x.y=800+x.d.cS(21)*5
x.aes()},
bF(){var x,w,v=this
v.d6()
x=v.c
x.toString
x=A.tf(x,null,y.X)
w=x==null?null:x.p3
x=v.f
if(w==x)return
if(x!=null)x.dg(v.gVk())
v.f=w
if(w!=null){w.bT()
x=w.de$
x.b=!0
x.a.push(v.gVk())}},
aOL(d){if(d===C.cM||d===C.ay)this.ad0()},
aP(d){var x,w,v,u,t
this.b1(d)
x=this.a
w=d.d===x.d
v=d.e
u=!v&&x.e
t=v&&!x.e
if(w&&!u&&!t)return
$.at.am$.push(new B.aZu(this,!w,u,t))},
aes(){var x=this,w=x.r
if(w!=null)w.U(0)
x.r=null
if(!x.a.d)return
x.r=A.fy(D.a37,new B.aZq(x))},
aVY(){var x,w,v,u,t=this.d,s=t.GT()?5:10,r=this.y
r===$&&A.b()
x=r+s
w=r-s
v=x<=1000
u=w>=700
if(v&&u)return t.GT()?x:w
if(v)return x
if(u)return w
return r},
aUq(){var x,w=this,v=w.r
if(v!=null)v.U(0)
w.r=null
v=w.w
if(v!=null)v.U(0)
v=w.y
v===$&&A.b()
x=w.d.cS(8)
if(w.c==null)return
w.E(new B.aZm(w,v*(2+x)))
$.at.am$.push(new B.aZn(w))
w.w=A.c0(T.n0,w.gST())},
acu(){var x=this.e
if(x!=null)x.eI(0)
this.e=null},
ad0(){var x=this.e
if(x==null)return
this.e=null
$.at.am$.push(new B.aZl(x))},
aV1(){var x,w,v,u,t,s,r,q,p,o=this,n=o.c
if(n==null||!o.as||o.z<=0)return
x=y.B
w=x.a(n.gak())
if(w==null||w.y==null||w.fy==null)return
n=o.c
n.toString
v=F.vU(n,!1)
if(v==null)return
u=x.a(v.c.gak())
if(u==null||u.y==null||u.fy==null)return
t=A.ch(w.bc(0,null),C.o).ar(0,A.ch(u.bc(0,null),C.o))
s=o.z
r=o.a.c
q=o.Q
o.acu()
p=A.qc(new B.aZo(t,q,s,r),!1,!1)
o.e=p
v.mu(0,p)},
yj(){var x=this,w=x.w
if(w!=null)w.U(0)
x.w=null
x.acu()
if(x.c==null)return
x.E(new B.aZk(x))},
l(){var x=this,w=x.r
if(w!=null)w.U(0)
w=x.w
if(w!=null)w.U(0)
w=x.f
if(w!=null)w.dg(x.gVk())
x.ad0()
x.aa()},
u(d){var x=C.d.S(this.a.f*0.72,28,40),w=A.a4(this.a.c,D.m6,0.35)
w.toString
return new B.E2(new A.e1(new B.aZt(this,x,w),null),null)}}
B.Zj.prototype={
l(){var x=this,w=x.ao$
if(w!=null)w.N(0,x.gcl())
x.ao$=null
x.aa()},
aZ(){this.bb()
this.b8()
this.cm()}}
var z=a.updateTypes(["am<Fk>()","~(ig)","~()"])
B.bdZ.prototype={
$0(){var x,w=this,v=w.a;++v.a
x=w.c
w.b.$0().hh(new B.be_(x,w.d),new B.be0(x),y.H).hz(new B.be1(v))},
$S:0}
B.be_.prototype={
$1(d){var x=this.a
if((x.a.a&30)===0)x.fH(0,d)},
$S(){return this.b.i("bq(0)")}}
B.be0.prototype={
$2(d,e){var x=this.a
if((x.a.a&30)===0)x.mb(d,e)},
$S:41}
B.be1.prototype={
$0(){var x=this.a;--x.a
x=x.b
if(x.length!==0)C.b.fR(x,0).$0()},
$S:8}
B.bqv.prototype={
$0(){var x=this.a,w=this.b,v=x.h(0,w),u=this.c.aM()
if(v==null?u==null:v===u)x.L(0,w)},
$S:8}
B.bs4.prototype={
$0(){var x=0,w=A.p(y.F),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$$0=A.q(function(d,a0){if(d===1){t.push(a0)
x=u}for(;;)switch(x){case 0:f=null
r=1,p=y.H,o=s.a,n=s.b,m=s.c,l=s.d,k=s.e,j=s.f,i=s.r
case 3:if(!(r<=3)){x=5
break}u=7
x=10
return A.e(B.bqk(m,k,l,i,o,j,n),$async$$0)
case 10:h=a0
v=h
x=1
break
u=2
x=9
break
case 7:u=6
e=t.pop()
q=A.a9(e)
f=q
if(J.f(r,3)||!B.c0R(q))throw e
x=11
return A.e(A.cs(new A.aU(1000*(150*r)),null,p),$async$$0)
case 11:x=9
break
case 6:x=2
break
case 9:case 4:++r
x=3
break
case 5:p=f
throw A.j(p==null?I.M_("Bet failed",null):p)
case 1:return A.n(v,w)
case 2:return A.m(t.at(-1),w)}})
return A.o($async$$0,w)},
$S:z+0}
B.bs5.prototype={
$0(){$.aow=$.aow-1},
$S:8}
B.br6.prototype={
$0(){return B.bpz(this.b,this.a,this.c)},
$S:685}
B.bsI.prototype={
$1(d){A.dd("[Socket] game: "+this.a.a+" | url: "+this.b+" | connected","Socket")
this.c.$0()},
$S:4}
B.bsJ.prototype={
$1(d){A.dd("[Socket] game: "+this.a.a+" | url: "+this.b+" | disconnected","Socket")
this.c.$0()},
$S:4}
B.bsL.prototype={
$1(d){var x=I.bI6(d)
if(x==null||x===this.a.a)return
this.a.a=x
this.b.$1(x)},
$S:4}
B.bsK.prototype={
$1(d){var x,w,v=I.bIp(d)
if(v==null)return
x=I.bIq(v)
w=this.a
if(x===w.b)return
w.b=x
this.b.$1(v)},
$S:4}
B.bsH.prototype={
$0(){var x,w=this.a
w.oG("connect")
w.oG("disconnect")
x=this.b
w.oG(x.c)
w.oG(x.d)
O.bxO(x.a)},
$S:0}
B.ay9.prototype={
$2(a3,a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1=null,a2=a4.d
a2=isFinite(a2)?a2:a0.b-a0.c*2
x=Math.max(0,a2)
w=a4.b
a2=a0.d
if(a2)v=a0.e?60:46
else v=30
u=Math.min(Math.max(0,x-14),v)
t=a0.f
s=t.a<560?0.38:0.44
r=a0.a
q=a0.e?168:128
p=Math.min(r.x,q)
if(t.gwG())t=120
else t=a0.e?220:p
o=Math.min(t,w*s)
n=Math.min(w-18,(w+14+a0.r)*0.64-14-18)
m=u+8+o+86+12
t=x*0.88
l=Math.min(a0.w,t)
q=a0.x
k=4*q*2
j=5*l+k
i=Math.max(0,n-m)
if(j>i&&i>0){a2=a2?36:28
l=C.d.S((i-k)/5,Math.min(a2,t),l)
j=5*l+k}a2=n-j
h=Math.max(m,a2)
if(h+j>n)h=Math.max(0,a2)
a2=r.y
a2=a2>0?a2:l
g=Math.min(l*0.92,a2)
f=J.il(5,y.l)
for(a2=r.d,t=r.e,k=r.r,e=0;e<5;++e)f[e]=new A.a2(new A.A(q,0,q,0),A.eZ(a1,new B.LU(a2[e],t===e,k,l,g,a1),C.Q,!1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,new B.ay8(r,e),a1,a1,a1,a1,a1,a1),a1)
d=F.cQ(C.a_,F.S(f,E.j,C.i,E.v,0),E.as)
a2=y.p
t=A.a([],a2)
t.push(D.axk)
q=r.r
t.push(new B.akT(u,q,!1,a1,a1))
t.push(E.Z)
k=new A.cP(new A.ad(0,o,0,x),F.cQ(E.W,new B.ahT(a0.y,r.c,q,x,a1),E.as),a1)
t.push(k)
t.push(new A.a2(D.a4h,new B.JY(q,r.id,r.k1,x,a1),a1))
t.push(G.bZ)
a2=A.a([F.S(t,E.j,C.i,E.n,0)],a2)
if(d!=null)a2.push(A.aH(0,new A.bF(C.a_,a1,a1,d,a1),a1,a1,C.d.S(h,0,Math.max(0,w)),a1,0,C.d.S(j,0,Math.max(0,w-h))))
return new A.G(w,x,A.py(new A.ay(C.C,a1,C.K,C.u,a2,a1),C.u,a1),a1)},
$S:269}
B.ay8.prototype={
$0(){F.Ec()
this.a.f.$1(this.b)},
$S:0}
B.bln.prototype={
$3(d,e,f){var x=this.a
return A.ag(G.cR,x.d,null,null,x.c*0.52)},
$S:20}
B.b8Y.prototype={
$3(d,e,f){var x,w,v=null
if(e==null)return C.ap
x=e>0.009
w=x?"Win +\u20b9"+N.a2x(e):"Win +\u20b90"
return new A.a2(S.zZ,A.k(w,v,1,C.H,v,v,A.B(v,v,x?H.mb:H.mo,v,v,v,v,v,v,v,v,10,v,v,C.x,v,1.05,!0,v,v,v,v,v,v,v,v),v,v),v)},
$S:686}
B.ay7.prototype={
$3(d,e,f){var x,w=null,v=this.a
d.Y(y.I).toString
x=v.adK(v.d)
return A.bI(w,new A.t(w,w,F.R(v.r.j(0.35),1.2),x,w,D.aak,C.m),C.Y)},
$S:74}
B.bod.prototype={
$2(d,e){var x,w,v,u,t,s,r,q,p=this,o=null,n=p.a,m=n.f
m===$&&A.b()
x=m.a
x=J.Ji(m.b.a2(0,x.gq(x)),0,1)
m=n.e
m===$&&A.b()
w=m.a
w=m.b.a2(0,w.gq(w))
m=n.r
m===$&&A.b()
v=m.a
v=m.b.a2(0,v.gq(v))
m=A.a([p.b,p.c],y.O)
u=A.x(20)
t=p.d
s=F.R(t,1.15)
r=A.a([new A.U(0.4,C.r,t.j(0.55),C.o,10),new A.U(0,C.r,C.l.j(0.45),E.aJ,6)],y.V)
q=y.p
return A.dG(A.jb(A.ja(C.p,A.y(o,F.S(A.a([A.ag(G.hm,t,o,o,13),H.aN,F.P(A.a([A.k("JEETE",o,o,o,o,o,A.B(o,o,t,o,o,o,o,o,o,o,o,7.5,o,o,C.x,o,1,!0,o,1.1,o,o,o,o,o,o),o,o),A.k("+\u20b9"+n.aFm(n.a.c),o,o,o,o,o,A.B(o,o,p.e,o,o,o,o,o,o,o,o,11.5,o,o,C.D,o,1.05,!0,o,o,o,o,o,A.a([new A.c7(t.j(0.65),C.o,6)],y.S),o,o),o,o)],q),E.X,C.i,E.v)],q),E.j,C.i,E.v,0),C.f,o,o,new A.t(o,o,s,u,r,new F.ai(C.P,C.V,C.t,m,o,o),C.m),o,o,o,o,D.a5e,o,o,o),v),new A.l(0,w)),x)},
$S:158}
B.aZu.prototype={
$1(d){var x,w=this,v=w.a
if(v.c==null)return
if(w.b)if(v.a.d){v.yj()
v.aes()}else{x=v.r
if(x!=null)x.U(0)
v.r=null}if(w.c&&v.a.e)v.aUq()
if(w.d&&!v.a.e)v.yj()},
$S:2}
B.aZq.prototype={
$1(d){var x,w=this.a
if(w.c==null||!w.a.d)return
w.E(new B.aZp(w))
x=w.x
if(x!=null&&x.e!=null)B.bR9(x,Q.aK[w.d.cS(5)])},
$S:14}
B.aZp.prototype={
$0(){var x=this.a
return x.y=x.aVY()},
$S:0}
B.aZm.prototype={
$0(){var x=this.a
x.as=!0
x.z=this.b;++x.Q},
$S:0}
B.aZn.prototype={
$1(d){var x=this.a
if(x.c==null||!x.as)return
x.aV1()},
$S:2}
B.aZl.prototype={
$1(d){return this.a.eI(0)},
$S:2}
B.aZo.prototype={
$1(d){var x=this,w=null,v=x.a
return A.aH(w,A.di(new B.IM(x.c,x.d,new A.d5(x.b,y.a)),!0,w),w,w,v.a-4,w,v.b-26,w)},
$S:687}
B.aZk.prototype={
$0(){var x=this.a
x.as=!1
x.z=0},
$S:0}
B.aZt.prototype={
$1(d){var x,w,v,u,t,s,r=this,q=null,p=r.a
p.x=d
x=p.a
w=x.f
v=r.b
x=p.as?r.c:x.c.j(0.9)
u=p.as
x=F.R(x,u?1.8:1.4)
t=u?r.c:p.a.c
t=t.j(u?0.55:0.28)
u=p.as
s=u?12:6
t=A.a([new A.U(u?1:0,C.r,t,C.o,s)],y.V)
v=A.y(q,L.y6(K.bu("assets/icon/team.png",C.p,q,q,q,q,q,q,new B.aZr(p,r.c,v),!1,C.T,E.aE,q,!1,v,!1,q,!1,q,q,G.S,q,q,v)),C.f,q,q,new A.t(D.xA,q,x,q,t,q,C.F),q,v,q,q,q,q,q,v)
t=p.y
t===$&&A.b()
x=p.a
return new A.G(78,w,F.S(A.a([v,H.aN,F.Q(F.rh(A.k(""+t,new A.d5(t,y.a),1,C.vr,q,!1,A.B(q,q,x.c,q,q,q,q,q,q,q,q,C.d.S(x.f*0.28,12,15),q,q,C.D,q,1,!0,q,q,q,q,q,A.a([new A.c7(p.a.c.j(0.35),C.o,6)],y.S),q,q),q,q),E.eV,F.r0(),G.eo,C.a9,new B.aZs()),1)],y.p),E.j,C.i,E.n,0),q)},
$S:272}
B.aZr.prototype={
$3(d,e,f){var x=this.a.as?this.b:C.J
return A.ag(G.cR,x,null,null,this.c*0.62)},
$S:20}
B.aZs.prototype={
$2(d,e){return new A.dc(e,!1,A.kV(C.p,d,null,e),null)},
$S:119};(function aliases(){var x=B.Zj.prototype
x.aw1=x.l})();(function installTearOffs(){var x=a._instance_1u,w=a._instance_0u
var v
x(v=B.Sb.prototype,"gVk","aOL",1)
w(v,"gST","yj",2)})();(function inheritance(){var x=a.mixinHard,w=a.inheritMany,v=a.inherit
w(A.I,[B.bdY,B.Fk,B.aMj])
w(A.eb,[B.bdZ,B.be1,B.bqv,B.bs4,B.bs5,B.br6,B.bsH,B.ay8,B.aZp,B.aZm,B.aZk])
w(A.cY,[B.be_,B.bsI,B.bsJ,B.bsL,B.bsK,B.bln,B.b8Y,B.ay7,B.aZu,B.aZq,B.aZn,B.aZl,B.aZo,B.aZt,B.aZr])
w(A.ec,[B.be0,B.ay9,B.bod,B.aZs])
w(A.a3,[B.E2,B.IM,B.JY])
w(A.a5,[B.To,B.Zj,B.Sb])
w(A.O,[B.a2v,B.LU,B.akT,B.aft,B.ahT,B.a2w])
v(B.amQ,B.Zj)
x(B.Zj,A.d0)})()
A.da(b.typeUniverse,JSON.parse('{"E2":{"a3":[],"c":[]},"To":{"a5":["E2"]},"Ho":{"bK":[],"bA":[],"c":[]},"a2v":{"O":[],"c":[]},"LU":{"O":[],"c":[]},"akT":{"O":[],"c":[]},"aft":{"O":[],"c":[]},"ahT":{"O":[],"c":[]},"a2w":{"O":[],"c":[]},"IM":{"a3":[],"c":[]},"JY":{"a3":[],"c":[]},"amQ":{"a5":["IM"]},"Sb":{"a5":["JY"]}}'))
var y=(function rtii(){var x=A.Y
return{Q:x("uW<K>"),I:x("iz"),V:x("w<U>"),O:x("w<d>"),S:x("w<c7>"),s:x("w<ht<K>>"),p:x("w<c>"),A:x("bw<a5<a3>>"),P:x("ab<h,@>"),f:x("ab<@,@>"),w:x("f8"),K:x("I"),F:x("Fk"),N:x("h"),E:x("ht<K>"),t:x("aE<K>"),a:x("d5<r>"),e:x("la<K?>"),l:x("c"),G:x("To"),x:x("Ho"),i:x("K"),z:x("@"),q:x("r"),h:x("ab<h,@>?"),X:x("I?"),B:x("a_?"),T:x("h?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.m6=new A.d(1,1,0.9647058823529412,0.8313725490196079,C.e)
D.xA=new A.d(1,0.10196078431372549,0.10196078431372549,0.1411764705882353,C.e)
D.Wn=new A.d(1,0.22745098039215686,0.1568627450980392,0.06274509803921569,C.e)
D.a1E=new A.d(1,0.07058823529411765,0.047058823529411764,0.023529411764705882,C.e)
D.a37=new A.aU(13e5)
D.a4h=new A.A(14,0,0,0)
D.a51=new A.A(4,0,0,0)
D.a5e=new A.A(6,3,8,3)
D.a9w=new A.ef(0,0.22,G.eo)
D.afp=x([H.xK,R.mc],y.O)
D.aak=new F.ai(C.P,C.V,C.t,D.afp,null,null)
D.avZ=new A.c7(C.af,C.bf,4)
D.tE=x([D.avZ],y.S)
D.axk=new A.G(18,null,null,null)
D.aKW=new B.aft(null)})();(function staticFields(){$.bZF=A.F(y.N,A.Y("am<h?>"))})();(function lazyInitializers(){var x=a.lazyFinal
x($,"cb3","bNh",()=>A.bPm())
x($,"cb4","bNi",()=>new B.bdY(A.a([],A.Y("w<~()>"))))
x($,"c6D","byz",()=>A.aa9(null,A.Y("K?")))})()};
(a=>{a["0UYuaOXObR7bgRi2wOdcTJh4yhQ="]=a.current})($__dart_deferred_initializers__);