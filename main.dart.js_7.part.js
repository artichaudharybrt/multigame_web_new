((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,M,O,P,Q,K,G,R,F,L,E,N,S,T,H,B={
c0U(d){var x,w,v="timed out"
if(d instanceof I.hK){x=d.b
if(x==null)x=0
if(x===429||x>=500)return!0
w=d.a.toLowerCase()
return C.c.t(w,"concurrent")||C.c.t(w,"econnreset")||C.c.t(w,"socket")||C.c.t(w,v)||C.c.t(w,"timeout")}w=J.J(d).toLowerCase()
return C.c.t(w,"socket")||C.c.t(w,"connection")||C.c.t(w,v)||C.c.t(w,"timeout")||C.c.t(w,"clientexception")},
bIo(d,e,f){var x,w=d.h(0,e)
if(w!=null)return w
x=A.cu()
x.seT(f.$0().hz(new B.bqy(d,e,x)))
d.k(0,e,x.aM())
return x.aM()},
o4(d,e,f,g,h,i){$.aow=$.aow+1
return $.bNl().qB(new B.bs7(g,i,d,e,null,h,f),y.F).hz(new B.bs8())},
bqn(d,e,f,a0,a1,a2,a3){var x=0,w=A.p(y.F),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$bqn=A.q(function(a5,a6){if(a5===1)return A.m(a6,w)
for(;;)switch(x){case 0:l=A.cb()
k=l+("/matches/rounds/"+A.d6(2,a1,C.a6,!1)+"/bets")
j=A.bO(k,0,null)
i=y.N
h=A.aa(["userId",a3,"amount",d,"choice",f],i,y.K)
g=C.O.ew(h,null)
A.cI("POST",h,a0,k)
r=A.F(i,i)
r.k(0,"Content-Type","application/json")
r.k(0,"Accept","application/json")
if(a2!=null&&a2.length!==0)r.k(0,"Authorization","Bearer "+a2)
r.k(0,"ngrok-skip-browser-warning","true")
x=3
return A.e($.bNk().rK("POST",j,r,g,null),$async$bqn)
case 3:u=a6
q=u.b>=200&&u.b<300
r=u.b
p=u
A.cy(A.aK(A.aJ(p.e)).af(0,p.w),a0,r,q,k)
if(q){r=u
s=y.h.a(C.O.bz(0,A.aK(A.aJ(r.e)).af(0,r.w),null))
o=s==null?A.F(i,y.z):s
n=J.C(o,"data")
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
v=new B.Fj()
x=1
break}t="Bet failed"
try{i=u
s=y.h.a(C.O.bz(0,A.aK(A.aJ(i.e)).af(0,i.w),null))
if(s!=null&&J.C(s,"message")!=null)t=A.c2(J.C(s,"message"))
else if(s!=null&&J.C(s,"error")!=null)t=A.c2(J.C(s,"error"))}catch(a4){i=u
if(A.aK(A.aJ(i.e)).af(0,i.w).length!==0){i=u
t=A.aK(A.aJ(i.e)).af(0,i.w)}}i=t
A.dd("[API] source: "+a0+" | "+k+" | error: "+i,"API.error")
throw A.j(I.LY(t,u.b))
case 1:return A.n(v,w)}})
return A.o($async$bqn,w)},
o1(d,e){return B.bIo($.bZI,d+"|",new B.br9(d,null,e))},
bpC(d,e,f){var x=0,w=A.p(y.T),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$bpC=A.q(function(g,a0){if(g===1)return A.m(a0,w)
for(;;)switch(x){case 0:l=A.cb()
k=l+("/matches/rounds/active/"+A.d6(2,e,C.a6,!1))
j=A.bO(k,0,null)
i=y.N
A.cI("GET",A.aa(["roomId",e],i,i),"active_round",k)
p=A.F(i,i)
p.k(0,"Accept","application/json")
if(f!=null&&f.length!==0)p.k(0,"Authorization","Bearer "+f)
p.k(0,"ngrok-skip-browser-warning","true")
x=3
return A.e(A.f3(j,p),$async$bpC)
case 3:u=a0
o=u.b>=200&&u.b<300
p=u.b
n=u
A.cy(A.aK(A.aJ(n.e)).af(0,n.w),"active_round",p,o,k)
if(o){p=u
p=A.aK(A.aJ(p.e)).af(0,p.w).length===0}else p=!0
if(p){v=null
x=1
break}try{p=u
t=C.c.O(A.aK(A.aJ(p.e)).af(0,p.w))
if(J.au(t)===0||J.f(t,"null")){v=null
x=1
break}s=C.O.bz(0,t,null)
if(s==null){v=null
x=1
break}r=null
if(y.P.b(s))r=s
else if(y.f.b(s))r=A.an(s,i,y.z)
else{v=null
x=1
break}q=J.C(r,"data")
if(y.f.b(q))r=A.an(q,i,y.z)
i=B.mO(r)
v=i
x=1
break}catch(h){v=null
x=1
break}case 1:return A.n(v,w)}})
return A.o($async$bpC,w)},
be_:function be_(d){this.a=0
this.b=d},
be0:function be0(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
be1:function be1(d,e){this.a=d
this.b=e},
be2:function be2(d){this.a=d},
be3:function be3(d){this.a=d},
bqy:function bqy(d,e,f){this.a=d
this.b=e
this.c=f},
bs7:function bs7(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
bs8:function bs8(){},
br9:function br9(d,e,f){this.a=d
this.b=e
this.c=f},
Fj:function Fj(){},
bsJ(d,e,f,g,h){var x,w,v,u={},t=d.a
M.Cw(t)
x=M.cw(t)
w=K.CX()
v=w+(C.c.bh(t,"/")?t:"/"+t)
u.a=-1
u.b=null
x.cG(0,"connect",new B.bsL(d,v,e))
x.cG(0,"disconnect",new B.bsM(d,v,f))
x.cG(0,d.c,new B.bsO(u,h))
x.cG(0,d.d,new B.bsN(u,g))
if(x.y){A.dd("[Socket] game: "+t+" | url: "+v+" | connected","Socket")
e.$0()}return new B.aMi(new B.bsK(x,d))},
aMi:function aMi(d){this.a=d},
bsL:function bsL(d,e,f){this.a=d
this.b=e
this.c=f},
bsM:function bsM(d,e,f){this.a=d
this.b=e
this.c=f},
bsO:function bsO(d,e){this.a=d
this.b=e},
bsN:function bsN(d,e){this.a=d
this.b=e},
bsK:function bsK(d,e){this.a=d
this.b=e},
bRc(d,e){var x,w=d.ms(y.G)
if(w==null)return
x=B.a25(d)
if(x!=null)x.bcv(e,w.d)},
a25(d){var x=d.X(y.x)
return x==null?null:x.f},
E2:function E2(d,e){this.c=d
this.a=e},
To:function To(d){var _=this
_.d=d
_.c=_.a=_.e=null},
n4(d,e,f,g,h,i,j,k,l,m,n,o,p,q){return new B.a2v(d,i,p,l,j,m,k,h,f,e,g,!0,n,o,null)},
bRI(d){var x=d.b
if(!(x<600)){x=d.a
if(x<560)return 78
if(x>=900)return 102
if(x>=700)return 94
return 86}if(d.c)return C.d.S(x*0.17,58,72)
d.a<560
return 60
if(d.d>=600)return 68
return 64},
bRH(d,e,f,g,h){return new B.LS(d,h,g,f,e,null)},
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
LS:function LS(d,e,f,g,h,i){var _=this
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
blp:function blp(d){this.a=d},
aft:function aft(d){this.a=d},
b9_:function b9_(){},
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
IK:function IK(d,e,f){this.c=d
this.d=e
this.a=f},
amQ:function amQ(d,e){var _=this
_.r=_.f=_.e=_.d=$
_.bV$=d
_.ao$=e
_.c=_.a=null},
bof:function bof(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
JW:function JW(d,e,f,g,h){var _=this
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
aZw:function aZw(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aZs:function aZs(d){this.a=d},
aZr:function aZr(d){this.a=d},
aZo:function aZo(d,e){this.a=d
this.b=e},
aZp:function aZp(d){this.a=d},
aZn:function aZn(d){this.a=d},
aZq:function aZq(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aZm:function aZm(d){this.a=d},
aZv:function aZv(d,e,f){this.a=d
this.b=e
this.c=f},
aZt:function aZt(d,e,f){this.a=d
this.b=e
this.c=f},
aZu:function aZu(){},
Zj:function Zj(){},
nZ(d,e,f,g){var x,w
if(d){x=f-e
w=$.byC()
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
if(typeof d=="string"){x=C.c.O(d)
return x.length===0?null:x}if(y.f.b(d)){w=J.C(d,"$oid")
if(typeof w=="string"&&w.length!==0)return w}v=J.J(d)
if(v.length===0||v==="null")return null
return v},
mO(d){var x=J.M(d),w=B.Zx(x.h(d,"_id"))
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
B.be_.prototype={
qB(d,e){var x=new A.aP($.aF,e.i("aP<0>")),w=new B.be0(this,d,new A.bh(x,e.i("bh<0>")),e)
if(this.a<3)w.$0()
else this.b.push(w)
return x}}
B.Fj.prototype={}
B.aMi.prototype={}
B.E2.prototype={
V(){return new B.To(new A.bw(null,y.A))}}
B.To.prototype={
bF(){var x,w,v=this
v.d5()
x=v.c
x.toString
w=B.a25(x)
x=v.e
if(x!=w){if(x!=null)x.anc(v.d)
v.e=w
if(w!=null)w.bby(v.d)}},
l(){var x=this.e
if(x!=null)x.anc(this.d)
this.aa()},
u(d){return new A.hk(this.a.c,this.d)}}
B.a2v.prototype={
u(d){var x,w,v,u,t,s,r,q,p,o=this,n=o.w
if(n==null){n=$.bc
n=n==null?null:n.b
x=n}else x=n
if(x==null)x="Player"
n=A.bk(d,C.d0,y.w).w
w=F.eH(d)
v=!(w.b<600)
u=B.bRI(w)
t=14+Math.max(n.r.c,0)
s=v&&u>=72
if(v)r=s?8:6
else r=5
n=o.z
q=v?Math.max(n,58):Math.min(n,Math.min(o.Q,48))
n=o.as
p=v?Math.max(n,4):Math.min(n,2.5)
n=v?20:16
return new B.a2w(A.cd(new B.ay9(o,u,r,v,s,w,t,q,p,x)),C.N,new A.A(14,r,t,r),n,o.r,u,null)}}
B.LS.prototype={
u(d){var x=this,w=null,v=x.d,u=v?x.e:C.h.j(0.22),t=v?2.4:1,s=x.f,r=Math.min(x.r,Math.max(0,s-t*2)*0.94),q=C.l.j(0.12),p=F.R(u,t),o=y.V,n=A.a([new A.U(0,C.r,C.l.j(0.45),E.aJ,8)],o)
if(v)C.b.H(n,A.a([new A.U(1,C.r,x.e.j(0.55),C.o,12),new A.U(1.2,C.r,C.h.j(0.16),C.o,0)],o))
return A.dG(new A.G(s,s,A.bJ(L.y6(A.aC(P.Kt(x.c,r),w,w)),new A.u(q,w,p,w,n,w,C.F),C.Y),w),1)}}
B.akT.prototype={
u(d){var x,w=null,v=this.c,u=this.d,t=A.a([u.j(0.22),C.l.j(0.35)],y.O),s=F.R(u,2.4)
u=A.a([new A.U(0,C.r,u.j(0.22),C.o,4)],y.V)
x=K.bu("assets/icon/user.png",C.p,w,w,w,w,w,w,new B.blp(this),!1,C.U,E.aH,w,!1,w,!1,w,!1,w,w,G.S,w,w,w)
return new A.G(v,v,A.bJ(L.y6(x),new A.u(w,w,s,w,u,new F.ai(E.T,E.Z,C.t,t,w,w),C.F),C.Y),w)}}
B.aft.prototype={
u(d){return new A.l9($.byC(),new B.b9_(),null,null,y.e)}}
B.ahT.prototype={
u(d){var x=this,w=null,v=x.f>=52,u=A.k(x.c,w,1,C.H,w,w,A.B(w,w,C.h,w,w,w,w,w,w,w,w,v?15:12,w,w,C.B,w,1.05,!0,w,0.2,w,w,w,D.tF,w,w),w,w),t=v?3:1,s=N.a2x(x.d),r=x.e,q=v?16:13
return F.P(A.a([u,new A.G(w,t,w,w),D.aLj,A.k("\u20b9 "+s,w,1,C.H,w,w,A.B(w,w,r,w,w,w,w,w,w,w,w,q,w,w,C.D,w,1.05,!0,w,0.15,w,w,w,A.a([new A.c0(r.j(0.35),C.o,6)],y.S),w,w),w,w)],y.p),E.X,C.a1,E.v)},
gaG(d){return this.c}}
B.a2w.prototype={
adL(d){var x,w
if(d.d<0.5){x=this.f
w=new A.b9(x,x)
return new A.cN(w,w,w,C.a5)}return A.x(this.f)},
u(d){var x,w,v,u,t,s,r=this,q=null
d.X(y.I).toString
x=r.d
w=r.adL(x)
v=r.e
u=C.l.j(0.55)
t=x.d<0.5
s=t?14:18
t=t?-3:6
s=A.a([new A.U(0,C.r,u,new A.l(0,t),s),new A.U(0,C.r,r.r.j(0.18),C.o,14)],y.V)
u=r.aVC(new A.A(v.a,v.b,v.c,v.d))
return A.y(q,A.dC(w,new A.G(1/0,r.w,u,q),C.ak,q),C.f,q,q,new A.u(q,q,q,w,s,q,C.m),q,q,q,x,q,q,q,1/0)},
aVC(d){var x=null
return new A.az(C.p,x,C.K,C.u,A.a([A.bR(0,K.bu("assets/games_assets/common/ic_bottom_strip.webp",C.W,x,x,x,x,x,x,new B.ay7(this),!1,C.U,E.eJ,x,!1,x,!1,x,!1,x,x,G.S,x,x,x)),A.bR(0,new A.a2(d,this.c,x))],y.p),x)}}
B.IK.prototype={
V(){return new B.amQ(null,null)}}
B.amQ.prototype={
a4(){var x,w,v,u,t=this,s=null
t.ag()
x=A.bb(s,E.n_,0,s,1,s,t)
x.bC(0)
t.d!==$&&A.b1()
t.d=x
w=y.t
v=A.bP(C.bu,x,s)
u=w.i("ax<aO.T>")
t.e!==$&&A.b1()
t.e=new A.ax(v,new A.aE(6,-10,w),u)
v=A.bP(D.a9M,x,s)
t.r!==$&&A.b1()
t.r=new A.ax(v,new A.aE(0.72,1,w),u)
u=y.E
u=A.aUH(A.a([new A.hu(new A.aE(0,1,w),12,u),new A.hu(new A.uV(1,1,y.Q),62,u),new A.hu(new A.aE(1,0,w),26,u)],y.s),y.i)
t.f!==$&&A.b1()
t.f=new A.ax(x,u,u.$ti.i("ax<aO.T>"))},
l(){var x=this.d
x===$&&A.b()
x.l()
this.aw4()},
aFp(d){var x,w,v,u
if(d>=1e7)return this.af8(d/1e7)+"Cr"
if(d>=1e5)return this.af8(d/1e5)+"L"
x=C.k.p(Math.abs(d))
for(w=x.length,v=0,u="";v<w;++v){if(v>0&&C.k.ac(w-v,3)===0)u+=","
u+=x[v]}return u.charCodeAt(0)==0?u:u},
af8(d){var x
if(d>=100)return C.k.p(C.d.Z(d))
x=C.d.Z(d*10)/10
if(x===C.d.h3(x))return C.k.p(C.d.aj(x))
return C.d.a1(x,1)},
u(d){var x,w,v,u=this.a.d,t=A.a4(u,H.dL,0.5)
t.toString
x=A.a4(u,D.a1P,0.78)
x.toString
w=A.a4(u,D.Ws,0.42)
w.toString
v=this.d
v===$&&A.b()
return A.co(v,new B.bof(this,w,x,t,D.m8),null)}}
B.JW.prototype={
V(){return new B.Sb(C.bF)}}
B.Sb.prototype={
a4(){var x=this
x.ag()
x.y=800+x.d.cS(21)*5
x.aet()},
bF(){var x,w,v=this
v.d5()
x=v.c
x.toString
x=A.tf(x,null,y.X)
w=x==null?null:x.p3
x=v.f
if(w==x)return
if(x!=null)x.dg(v.gVn())
v.f=w
if(w!=null){w.bT()
x=w.de$
x.b=!0
x.a.push(v.gVn())}},
aOP(d){if(d===C.cN||d===C.az)this.ad1()},
aP(d){var x,w,v,u,t
this.b1(d)
x=this.a
w=d.d===x.d
v=d.e
u=!v&&x.e
t=v&&!x.e
if(w&&!u&&!t)return
$.at.am$.push(new B.aZw(this,!w,u,t))},
aet(){var x=this,w=x.r
if(w!=null)w.U(0)
x.r=null
if(!x.a.d)return
x.r=A.fz(D.a3m,new B.aZs(x))},
aW2(){var x,w,v,u,t=this.d,s=t.GU()?5:10,r=this.y
r===$&&A.b()
x=r+s
w=r-s
v=x<=1000
u=w>=700
if(v&&u)return t.GU()?x:w
if(v)return x
if(u)return w
return r},
aUu(){var x,w=this,v=w.r
if(v!=null)v.U(0)
w.r=null
v=w.w
if(v!=null)v.U(0)
v=w.y
v===$&&A.b()
x=w.d.cS(8)
if(w.c==null)return
w.E(new B.aZo(w,v*(2+x)))
$.at.am$.push(new B.aZp(w))
w.w=A.c1(T.n2,w.gSW())},
acv(){var x=this.e
if(x!=null)x.eJ(0)
this.e=null},
ad1(){var x=this.e
if(x==null)return
this.e=null
$.at.am$.push(new B.aZn(x))},
aV5(){var x,w,v,u,t,s,r,q,p,o=this,n=o.c
if(n==null||!o.as||o.z<=0)return
x=y.B
w=x.a(n.gak())
if(w==null||w.y==null||w.fy==null)return
n=o.c
n.toString
v=F.vT(n,!1)
if(v==null)return
u=x.a(v.c.gak())
if(u==null||u.y==null||u.fy==null)return
t=A.ch(w.bd(0,null),C.o).ar(0,A.ch(u.bd(0,null),C.o))
s=o.z
r=o.a.c
q=o.Q
o.acv()
p=A.qc(new B.aZq(t,q,s,r),!1,!1)
o.e=p
v.mv(0,p)},
yl(){var x=this,w=x.w
if(w!=null)w.U(0)
x.w=null
x.acv()
if(x.c==null)return
x.E(new B.aZm(x))},
l(){var x=this,w=x.r
if(w!=null)w.U(0)
w=x.w
if(w!=null)w.U(0)
w=x.f
if(w!=null)w.dg(x.gVn())
x.ad1()
x.aa()},
u(d){var x=C.d.S(this.a.f*0.72,28,40),w=A.a4(this.a.c,D.m8,0.35)
w.toString
return new B.E2(new A.e1(new B.aZv(this,x,w),null),null)}}
B.Zj.prototype={
l(){var x=this,w=x.ao$
if(w!=null)w.N(0,x.gcl())
x.ao$=null
x.aa()},
aZ(){this.bb()
this.b8()
this.cm()}}
var z=a.updateTypes(["am<Fj>()","~(ih)","~()"])
B.be0.prototype={
$0(){var x,w=this,v=w.a;++v.a
x=w.c
w.b.$0().hh(new B.be1(x,w.d),new B.be2(x),y.H).hz(new B.be3(v))},
$S:0}
B.be1.prototype={
$1(d){var x=this.a
if((x.a.a&30)===0)x.fH(0,d)},
$S(){return this.b.i("bq(0)")}}
B.be2.prototype={
$2(d,e){var x=this.a
if((x.a.a&30)===0)x.mc(d,e)},
$S:43}
B.be3.prototype={
$0(){var x=this.a;--x.a
x=x.b
if(x.length!==0)C.b.fR(x,0).$0()},
$S:9}
B.bqy.prototype={
$0(){var x=this.a,w=this.b,v=x.h(0,w),u=this.c.aM()
if(v==null?u==null:v===u)x.L(0,w)},
$S:9}
B.bs7.prototype={
$0(){var x=0,w=A.p(y.F),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$$0=A.q(function(d,a0){if(d===1){t.push(a0)
x=u}for(;;)switch(x){case 0:f=null
r=1,p=y.H,o=s.a,n=s.b,m=s.c,l=s.d,k=s.e,j=s.f,i=s.r
case 3:if(!(r<=3)){x=5
break}u=7
x=10
return A.e(B.bqn(m,k,l,i,o,j,n),$async$$0)
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
if(J.f(r,3)||!B.c0U(q))throw e
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
throw A.j(p==null?I.LY("Bet failed",null):p)
case 1:return A.n(v,w)
case 2:return A.m(t.at(-1),w)}})
return A.o($async$$0,w)},
$S:z+0}
B.bs8.prototype={
$0(){$.aow=$.aow-1},
$S:9}
B.br9.prototype={
$0(){return B.bpC(this.b,this.a,this.c)},
$S:685}
B.bsL.prototype={
$1(d){A.dd("[Socket] game: "+this.a.a+" | url: "+this.b+" | connected","Socket")
this.c.$0()},
$S:4}
B.bsM.prototype={
$1(d){A.dd("[Socket] game: "+this.a.a+" | url: "+this.b+" | disconnected","Socket")
this.c.$0()},
$S:4}
B.bsO.prototype={
$1(d){var x=I.bI9(d)
if(x==null||x===this.a.a)return
this.a.a=x
this.b.$1(x)},
$S:4}
B.bsN.prototype={
$1(d){var x,w,v=I.bIs(d)
if(v==null)return
x=I.bIt(v)
w=this.a
if(x===w.b)return
w.b=x
this.b.$1(v)},
$S:4}
B.bsK.prototype={
$0(){var x,w=this.a
w.oG("connect")
w.oG("disconnect")
x=this.b
w.oG(x.c)
w.oG(x.d)
O.bxR(x.a)},
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
if(t.gwH())t=120
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
f=J.im(5,y.l)
for(a2=r.d,t=r.e,k=r.r,e=0;e<5;++e)f[e]=new A.a2(new A.A(q,0,q,0),A.f_(a1,new B.LS(a2[e],t===e,k,l,g,a1),C.P,!1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,new B.ay8(r,e),a1,a1,a1,a1,a1,a1),a1)
d=F.cQ(C.a_,F.S(f,E.j,C.i,E.v,0),E.ar)
a2=y.p
t=A.a([],a2)
t.push(D.axH)
q=r.r
t.push(new B.akT(u,q,!1,a1,a1))
t.push(E.a2)
k=new A.cP(new A.ad(0,o,0,x),F.cQ(E.V,new B.ahT(a0.y,r.c,q,x,a1),E.ar),a1)
t.push(k)
t.push(new A.a2(D.a4w,new B.JW(q,r.id,r.k1,x,a1),a1))
t.push(G.bZ)
a2=A.a([F.S(t,E.j,C.i,E.n,0)],a2)
if(d!=null)a2.push(A.aH(0,new A.bF(C.a_,a1,a1,d,a1),a1,a1,C.d.S(h,0,Math.max(0,w)),a1,0,C.d.S(j,0,Math.max(0,w-h))))
return new A.G(w,x,A.pz(new A.az(C.C,a1,C.K,C.u,a2,a1),C.u,a1),a1)},
$S:269}
B.ay8.prototype={
$0(){F.Ec()
this.a.f.$1(this.b)},
$S:0}
B.blp.prototype={
$3(d,e,f){var x=this.a
return A.ah(G.cR,x.d,null,null,x.c*0.52)},
$S:21}
B.b9_.prototype={
$3(d,e,f){var x,w,v=null
if(e==null)return C.ap
x=e>0.009
w=x?"Win +\u20b9"+N.a2x(e):"Win +\u20b90"
return new A.a2(S.A1,A.k(w,v,1,C.H,v,v,A.B(v,v,x?H.md:H.mr,v,v,v,v,v,v,v,v,10,v,v,C.x,v,1.05,!0,v,v,v,v,v,v,v,v),v,v),v)},
$S:686}
B.ay7.prototype={
$3(d,e,f){var x,w=null,v=this.a
d.X(y.I).toString
x=v.adL(v.d)
return A.bJ(w,new A.u(w,w,F.R(v.r.j(0.35),1.2),x,w,D.aaz,C.m),C.Y)},
$S:67}
B.bof.prototype={
$2(d,e){var x,w,v,u,t,s,r,q,p=this,o=null,n=p.a,m=n.f
m===$&&A.b()
x=m.a
x=J.Jg(m.b.a2(0,x.gq(x)),0,1)
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
return A.dG(A.jb(A.ja(C.p,A.y(o,F.S(A.a([A.ah(G.hl,t,o,o,13),H.aN,F.P(A.a([A.k("JEETE",o,o,o,o,o,A.B(o,o,t,o,o,o,o,o,o,o,o,7.5,o,o,C.x,o,1,!0,o,1.1,o,o,o,o,o,o),o,o),A.k("+\u20b9"+n.aFp(n.a.c),o,o,o,o,o,A.B(o,o,p.e,o,o,o,o,o,o,o,o,11.5,o,o,C.D,o,1.05,!0,o,o,o,o,o,A.a([new A.c0(t.j(0.65),C.o,6)],y.S),o,o),o,o)],q),E.X,C.i,E.v)],q),E.j,C.i,E.v,0),C.f,o,o,new A.u(o,o,s,u,r,new F.ai(C.R,C.W,C.t,m,o,o),C.m),o,o,o,o,D.a5u,o,o,o),v),new A.l(0,w)),x)},
$S:163}
B.aZw.prototype={
$1(d){var x,w=this,v=w.a
if(v.c==null)return
if(w.b)if(v.a.d){v.yl()
v.aet()}else{x=v.r
if(x!=null)x.U(0)
v.r=null}if(w.c&&v.a.e)v.aUu()
if(w.d&&!v.a.e)v.yl()},
$S:2}
B.aZs.prototype={
$1(d){var x,w=this.a
if(w.c==null||!w.a.d)return
w.E(new B.aZr(w))
x=w.x
if(x!=null&&x.e!=null)B.bRc(x,Q.aK[w.d.cS(5)])},
$S:14}
B.aZr.prototype={
$0(){var x=this.a
return x.y=x.aW2()},
$S:0}
B.aZo.prototype={
$0(){var x=this.a
x.as=!0
x.z=this.b;++x.Q},
$S:0}
B.aZp.prototype={
$1(d){var x=this.a
if(x.c==null||!x.as)return
x.aV5()},
$S:2}
B.aZn.prototype={
$1(d){return this.a.eJ(0)},
$S:2}
B.aZq.prototype={
$1(d){var x=this,w=null,v=x.a
return A.aH(w,A.di(new B.IK(x.c,x.d,new A.d5(x.b,y.a)),!0,w),w,w,v.a-4,w,v.b-26,w)},
$S:687}
B.aZm.prototype={
$0(){var x=this.a
x.as=!1
x.z=0},
$S:0}
B.aZv.prototype={
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
v=A.y(q,L.y6(K.bu("assets/icon/team.png",C.p,q,q,q,q,q,q,new B.aZt(p,r.c,v),!1,C.U,E.aH,q,!1,v,!1,q,!1,q,q,G.S,q,q,v)),C.f,q,q,new A.u(D.xA,q,x,q,t,q,C.F),q,v,q,q,q,q,q,v)
t=p.y
t===$&&A.b()
x=p.a
return new A.G(78,w,F.S(A.a([v,H.aN,F.Q(F.rh(A.k(""+t,new A.d5(t,y.a),1,C.vs,q,!1,A.B(q,q,x.c,q,q,q,q,q,q,q,q,C.d.S(x.f*0.28,12,15),q,q,C.D,q,1,!0,q,q,q,q,q,A.a([new A.c0(p.a.c.j(0.35),C.o,6)],y.S),q,q),q,q),E.eV,F.r0(),G.eo,C.a9,new B.aZu()),1)],y.p),E.j,C.i,E.n,0),q)},
$S:272}
B.aZt.prototype={
$3(d,e,f){var x=this.a.as?this.b:C.J
return A.ah(G.cR,x,null,null,this.c*0.62)},
$S:21}
B.aZu.prototype={
$2(d,e){return new A.dc(e,!1,A.kU(C.p,d,null,e),null)},
$S:122};(function aliases(){var x=B.Zj.prototype
x.aw4=x.l})();(function installTearOffs(){var x=a._instance_1u,w=a._instance_0u
var v
x(v=B.Sb.prototype,"gVn","aOP",1)
w(v,"gSW","yl",2)})();(function inheritance(){var x=a.mixinHard,w=a.inheritMany,v=a.inherit
w(A.I,[B.be_,B.Fj,B.aMi])
w(A.eb,[B.be0,B.be3,B.bqy,B.bs7,B.bs8,B.br9,B.bsK,B.ay8,B.aZr,B.aZo,B.aZm])
w(A.cY,[B.be1,B.bsL,B.bsM,B.bsO,B.bsN,B.blp,B.b9_,B.ay7,B.aZw,B.aZs,B.aZp,B.aZn,B.aZq,B.aZv,B.aZt])
w(A.ec,[B.be2,B.ay9,B.bof,B.aZu])
w(A.a3,[B.E2,B.IK,B.JW])
w(A.a5,[B.To,B.Zj,B.Sb])
w(A.O,[B.a2v,B.LS,B.akT,B.aft,B.ahT,B.a2w])
v(B.amQ,B.Zj)
x(B.Zj,A.d0)})()
A.da(b.typeUniverse,JSON.parse('{"E2":{"a3":[],"c":[]},"To":{"a5":["E2"]},"Hm":{"bL":[],"bA":[],"c":[]},"a2v":{"O":[],"c":[]},"LS":{"O":[],"c":[]},"akT":{"O":[],"c":[]},"aft":{"O":[],"c":[]},"ahT":{"O":[],"c":[]},"a2w":{"O":[],"c":[]},"IK":{"a3":[],"c":[]},"JW":{"a3":[],"c":[]},"amQ":{"a5":["IK"]},"Sb":{"a5":["JW"]}}'))
var y=(function rtii(){var x=A.X
return{Q:x("uV<K>"),I:x("iA"),V:x("w<U>"),O:x("w<d>"),S:x("w<c0>"),s:x("w<hu<K>>"),p:x("w<c>"),A:x("bw<a5<a3>>"),P:x("ab<h,@>"),f:x("ab<@,@>"),w:x("f9"),K:x("I"),F:x("Fj"),N:x("h"),E:x("hu<K>"),t:x("aE<K>"),a:x("d5<r>"),e:x("l9<K?>"),l:x("c"),G:x("To"),x:x("Hm"),i:x("K"),z:x("@"),q:x("r"),h:x("ab<h,@>?"),X:x("I?"),B:x("a_?"),T:x("h?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.m8=new A.d(1,1,0.9647058823529412,0.8313725490196079,C.e)
D.xA=new A.d(1,0.10196078431372549,0.10196078431372549,0.1411764705882353,C.e)
D.Ws=new A.d(1,0.22745098039215686,0.1568627450980392,0.06274509803921569,C.e)
D.a1P=new A.d(1,0.07058823529411765,0.047058823529411764,0.023529411764705882,C.e)
D.a3m=new A.aU(13e5)
D.a4w=new A.A(14,0,0,0)
D.a5h=new A.A(4,0,0,0)
D.a5u=new A.A(6,3,8,3)
D.a9M=new A.ef(0,0.22,G.eo)
D.afG=x([H.xK,R.mf],y.O)
D.aaz=new F.ai(C.R,C.W,C.t,D.afG,null,null)
D.awm=new A.c0(C.af,C.bh,4)
D.tF=x([D.awm],y.S)
D.axH=new A.G(18,null,null,null)
D.aLj=new B.aft(null)})();(function staticFields(){$.bZI=A.F(y.N,A.X("am<h?>"))})();(function lazyInitializers(){var x=a.lazyFinal
x($,"cb6","bNk",()=>A.bPp())
x($,"cb7","bNl",()=>new B.be_(A.a([],A.X("w<~()>"))))
x($,"c6G","byC",()=>A.aa9(null,A.X("K?")))})()};
(a=>{a["Fg58nNkXibwFWr3MGqs8XpiKgg8="]=a.current})($__dart_deferred_initializers__);