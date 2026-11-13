((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,K,I,L,B={
buy(a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a0.h(0,"bootValue")
if(d==null)d=a0.h(0,"boot_value")
x=d==null?a0.h(0,"minPot"):d
if(x==null)x=a0.h(0,"min_pot")
if(typeof x=="number")w=x
else{d=A.dm(A.v(x))
w=d==null?0:d}v=a0.h(0,"noOfPlayers")
if(v==null)v=a0.h(0,"no_of_players")
if(A.cZ(v))u=v
else if(typeof v=="number"){d=C.d.aj(v)
u=d}else{d=A.cF(A.v(v),e)
if(d==null)d=0
u=d}t=a0.h(0,"playerIds")
if(t==null)t=a0.h(0,"player_ids")
d=y.s
s=A.a([],d)
r=y.j
if(r.b(t))for(q=J.b1(t);q.A();){p=q.gO(q)
if(p==null)continue
s.push(J.J(p))}o=a0.h(0,"online")
if(o!=null)if(A.cZ(o))n=o
else n=typeof o=="number"?C.d.aj(o):A.cF(A.v(o),e)
else n=e
if(s.length===0&&n!=null)for(m=0;m<n;++m)s.push("online_"+m)
l=a0.h(0,"botPlayerIds")
if(l==null)l=a0.h(0,"bot_player_ids")
k=A.a([],d)
if(r.b(l))for(d=J.b1(l);d.A();){p=d.gO(d)
if(p==null)continue
k.push(J.J(p))}d=A.aQ(a0.h(0,"table_id"))
if(d==null)d=A.aQ(a0.h(0,"ludo_table_id"))
if(d==null){d=a0.h(0,"id")
d=d==null?e:J.J(d)}if(d==null){d=a0.h(0,"_id")
d=d==null?e:J.J(d)
j=d}else j=d
if(j==null)j=""
d=a0.h(0,"totalDeals")
if(d==null)d=a0.h(0,"total_deals")
i=d==null?a0.h(0,"gameCount"):d
if(i==null)i=a0.h(0,"game_count")
h=typeof i=="number"?C.d.aj(i):A.cF(A.v(i),e)
d=a0.h(0,"poolPoint")
if(d==null)d=a0.h(0,"pool_point")
g=d==null?a0.h(0,"poolLimit"):d
if(g==null)g=a0.h(0,"pool_limit")
if(typeof g=="number")C.d.aj(g)
else A.cF(A.v(g),e)
d=a0.h(0,"tableName")
if(d==null)d=a0.h(0,"table_name")
if(d==null)d=a0.h(0,"name")
f=d==null?e:C.c.P(J.J(d))
if(f==null)f=""
d=A.aQ(a0.h(0,"gameType"))
if(d==null)d=A.aQ(a0.h(0,"game_type"))
if(d==null)d=""
r=A.aQ(a0.h(0,"status"))
if(r==null)r=""
return new B.hj(j,d,w,u,r,s,k,h,f,n,B.bBH(a0.h(0,"joinable")),B.bBH(a0.h(0,"full")))},
bBH(d){var x
if(d==null)return null
if(A.mK(d))return d
if(typeof d=="number")return d!==0
x=J.J(d).toLowerCase()
if(x==="true"||x==="1")return!0
if(x==="false"||x==="0")return!1
return null},
ayx(d){var x="application/json",w=y.N
w=A.F(w,w)
w.k(0,"Content-Type",x)
w.k(0,"Accept",x)
if(d.length!==0)w.k(0,"Authorization","Bearer "+d)
w.k(0,"ngrok-skip-browser-warning","true")
return w},
z_(d,e,f,g){var x=0,w=A.p(y.H),v,u,t,s,r,q,p,o,n,m
var $async$z_=A.q(function(h,i){if(h===1)return A.m(i,w)
for(;;)switch(x){case 0:m=y.N
m=A.F(m,m)
m.k(0,"gameType",d)
m.k(0,"no_of_players",""+f)
m.k(0,"limit",""+e)
u=A.ce()
t=A.p8(null,null,null,null,m,null).f
if(t==null)t=""
s=u+"/game-tables/list?"+t
r=A.bQ(s,0,null)
A.cL("GET",m,"game_tables/list",s)
x=3
return A.e(A.f1(r,B.ayx(g)),$async$z_)
case 3:q=i
m=q.b
p=m>=200&&m<300
u=q.e
t=A.aM(A.aL(u))
o=q.w
A.cz(t.ae(0,o),"game_tables/list",m,p,s)
if(!p)throw A.j(B.LZ(B.buz(q.gju(0)),m))
n=C.O.bB(0,A.aM(A.aL(u)).ae(0,o),null)
if(!y.P.b(n)){v=D.CC
x=1
break}v=B.bBI(n)
x=1
break
case 1:return A.n(v,w)}})
return A.o($async$z_,w)},
bBI(d){var x,w,v,u,t,s,r,q,p,o,n
for(x=["table_data","data","tables"],w=y.f,v=y.p,u=y.j,t=J.M(d),s=0;s<3;++s){r=t.h(d,x[s])
if(!u.b(r))continue
q=J.CM(r,w)
q=A.nh(q,new B.ayw(),q.$ti.i("N.E"),v)
p=A.af(q,A.H(q).i("N.E"))
if(p.length!==0)return p}o=t.h(d,"table")
if(w.b(o)){n=B.buy(A.ao(o,y.N,y.z))
if(n.a.length!==0)return A.a([n],y.u)}return D.CC},
bBJ(d){if(d===C.d.h3(d))return C.d.a_(d)
return d},
bRD(d){if(typeof d=="number")return C.d.aj(d)
if(typeof d=="string")return A.cF(C.c.P(d),null)
return null},
bBK(d,e,f,g){var x,w=J.M(d),v=B.bRD(w.h(d,"code")),u=B.bRC(d,e,g),t=!0
if(u!=null)if(u.a.length!==0)t=v!=null&&v!==200
if(t){x=A.aQ(w.h(d,"message"))
throw A.j(B.LZ(x==null?"Could not allocate table":x,f))}return new B.LY(u.a,A.a([u],y.u),d)},
bRC(d,e,f){var x,w,v,u,t,s,r,q=J.C(d,"table")
if(y.f.b(q)){x=B.buy(A.ao(q,y.N,y.z))
if(x.a.length!==0)return x}w=B.bBI(d)
v=A.aj(w).i("aR<1>")
u=A.af(new A.aR(w,new B.ayy(),v),v.i("N.E"))
w=u.length
if(w===0)return null
t=C.d.a_(e)
for(s=0;s<w;++s){r=u[s]
if(C.d.a_(r.c)!==t)continue
v=r.d
v=v>0&&v!==f
if(v)continue
return r}return C.b.gW(u)},
yZ(d,e,f,g,h,i){var x=0,w=A.p(y.M),v,u,t,s,r,q,p,o,n,m
var $async$yZ=A.q(function(j,k){if(j===1)return A.m(k,w)
for(;;)switch(x){case 0:q=A.ce()+"/game-tables"
p=A.bQ(q,0,null)
o=y.N
n=y.z
m=A.F(o,n)
m.k(0,"user_id",i)
m.k(0,"token",h)
m.k(0,"boot_value",B.bBJ(d))
m.k(0,"no_of_players",g)
m.k(0,"gameType",f)
if(e!=null)m.H(0,A.aa(["game_count",e,"total_deals",e,"totalDeals",e,"deals",e],o,n))
A.cL("POST",m,"game_tables/allocate",q)
o=B.ayx(h)
x=3
return A.e(F.hP(p,C.O.eC(m,null),o),$async$yZ)
case 3:u=k
o=u.b
t=o>=200&&o<300
n=u.e
m=A.aM(A.aL(n))
s=u.w
A.cz(m.ae(0,s),"game_tables/allocate",o,t,q)
if(!t)throw A.j(B.LZ(B.buz(u.gju(0)),o))
r=C.O.bB(0,A.aM(A.aL(n)).ae(0,s),null)
if(!y.P.b(r))throw A.j(B.LZ("Invalid response",o))
v=B.bBK(r,d,o,g)
x=1
break
case 1:return A.n(v,w)}})
return A.o($async$yZ,w)},
buz(d){var x,w,v
try{x=y.h.a(C.O.bB(0,d,null))
w=x
w=A.aQ(w==null?null:J.C(w,"message"))
if(w==null){w=x
w=A.aQ(w==null?null:J.C(w,"error"))}if(w==null)w=d
return w}catch(v){w=d.length!==0?d:"Request failed"
return w}},
LZ(d,e){return new B.vd(d,e)},
hj:function hj(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.y=l
_.z=m
_.Q=n
_.as=o},
ayw:function ayw(){},
ayy:function ayy(){},
LY:function LY(d,e,f){this.a=d
this.b=e
this.c=f},
vd:function vd(d,e){this.a=d
this.b=e},
c4f(d){return F.fO(C.l.j(0.72),!0,new B.bss(),d,y.y)},
tx:function tx(d,e,f){this.c=d
this.d=e
this.a=f},
ai_:function ai_(){this.d=!1
this.c=this.a=null},
bgn:function bgn(d){this.a=d},
bss:function bss(){},
bsq:function bsq(d){this.a=d},
bsr:function bsr(d){this.a=d},
ZD(d,e,f){return A.aS(d,!1).a0C(G.a2z(e,null,f))}},D,M,G,H,F,E
J=c[1]
A=c[0]
C=c[2]
K=c[62]
I=c[117]
L=c[116]
B=a.updateHolder(c[39],B)
D=c[160]
M=c[157]
G=c[66]
H=c[77]
F=c[68]
E=c[72]
B.hj.prototype={
gaoN(){var x=this.z
return x==null?this.f.length+this.r.length:x}}
B.LY.prototype={}
B.vd.prototype={
p(d){return this.a},
$ibT:1}
B.tx.prototype={
V(){return new B.ai_()}}
B.ai_.prototype={
Jg(){var x=0,w=A.p(y.n),v,u=this,t,s
var $async$Jg=A.q(function(d,e){if(d===1)return A.m(e,w)
for(;;)switch(x){case 0:if(u.d||u.c==null){x=1
break}u.d=!0
t=u.c
t.toString
x=3
return A.e(B.c4f(t),$async$Jg)
case 3:s=e
u.d=!1
if(s===!0&&u.c!=null){t=u.c
t.toString
A.aS(t,!1).bg(0)}case 1:return A.n(v,w)}})
return A.o($async$Jg,w)},
u(d){var x=this.a
return F.bDM(x.d,x.c,new B.bgn(this),y.K)}}
var z=a.updateTypes(["hj(ab<@,@>)","L(hj)","jM(t)"])
B.ayw.prototype={
$1(d){return B.buy(A.ao(d,y.N,y.z))},
$S:z+0}
B.ayy.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
B.bgn.prototype={
$2(d,e){if(!d&&!this.a.a.d)this.a.Jg()},
$S:236}
B.bss.prototype={
$1(d){var x,w,v,u=null,t=A.x(22),s=F.Q(D.xZ.j(0.65),1.5),r=y.V,q=A.a([new A.U(1,C.r,D.xZ.j(0.18),C.o,26),new A.U(0,C.r,C.l.j(0.55),H.f3,20)],r)
r=A.y(u,D.Bw,C.f,u,u,new A.u(u,u,u,u,A.a([new A.U(0,C.r,C.bs.j(0.25),C.o,14)],r),D.aav,C.F),u,58,u,u,u,u,u,58)
x=A.k("Are you sure you want to quit the table?",u,u,u,u,u,A.B(u,u,C.h.j(0.62),u,u,u,u,u,u,u,u,14,u,u,u,u,1.45,!0,u,u,u,u,u,u,u,u),C.M,u)
w=C.h.j(0.28)
v=y.D
return G.yy(u,C.w,new A.cP(D.wO,A.bI(new A.a3(D.Ac,F.P(A.a([r,D.js,D.aHU,E.aT,x,L.oy,F.S(A.a([F.R(G.a5b(I.vA,new B.bsq(d),A.Fa(u,u,u,u,u,u,u,u,u,C.J,u,u,E.eW,u,new A.cA(A.x(12),C.y),new A.aJ(w,1,C.E,-1),u,u,u,u)),1),H.cX,F.R(G.me(D.aGC,new B.bsr(d),A.om(C.bs,u,u,C.h,E.eW,new A.cA(A.x(12),C.y),u)),1)],v),E.j,C.i,E.n,0)],v),E.j,C.i,E.v),u),new A.u(u,u,s,t,q,D.aaU,C.m),C.Y),u),u,u,u,H.Ad,C.hJ,u,u,u)},
$S:z+2}
B.bsq.prototype={
$0(){A.aS(this.a,!1).ep(0,!1)
return null},
$S:0}
B.bsr.prototype={
$0(){A.aS(this.a,!1).ep(0,!0)
return null},
$S:0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.I,[B.hj,B.LY,B.vd])
x(A.cY,[B.ayw,B.ayy,B.bss])
w(B.tx,A.a2)
w(B.ai_,A.a5)
w(B.bgn,A.ec)
x(A.eb,[B.bsq,B.bsr])})()
A.da(b.typeUniverse,JSON.parse('{"vd":{"bT":[]},"tx":{"a2":[],"c":[]},"ai_":{"a5":["tx"]}}'))
var y=(function rtii(){var x=A.X
return{M:x("LY"),p:x("hj"),V:x("w<U>"),O:x("w<d>"),u:x("w<hj>"),s:x("w<h>"),D:x("w<c>"),H:x("T<hj>"),j:x("T<@>"),P:x("ab<h,@>"),f:x("ab<@,@>"),K:x("I"),N:x("h"),y:x("L"),z:x("@"),h:x("ab<h,@>?"),n:x("~")}})();(function constants(){var x=a.makeConstList
D.wO=new A.ad(0,360,0,1/0)
D.cg=new A.d(1,1,0.8784313725490196,0.5411764705882353,C.e)
D.xZ=new A.d(1,0.9098039215686274,0.7843137254901961,0.4470588235294118,C.e)
D.zb=new A.d(1,0.10196078431372549,0.13725490196078433,0.2784313725490196,C.e)
D.r6=new A.aU(22e5)
D.Ac=new A.A(22,26,22,20)
D.iS=new A.an(983663,"MaterialIcons",!1)
D.et=new A.an(63432,"MaterialIcons",!1)
D.f_=new A.an(63626,"MaterialIcons",!1)
D.nt=new A.an(983132,"MaterialIcons",!1)
D.Bw=new A.c9(H.Bg,28,C.h,null,null,null)
D.a0v=new A.d(1,0.5568627450980392,0.10588235294117647,0.10588235294117647,C.e)
D.alT=x([C.bs,D.a0v],y.O)
D.aav=new F.ah(E.U,E.a0,C.t,D.alT,null,null)
D.W7=new A.d(1,0.07058823529411765,0.09411764705882353,0.17254901960784313,C.e)
D.acZ=x([D.zb,D.W7,M.qf],y.O)
D.aaU=new F.ah(E.U,E.a0,C.t,D.acZ,null,null)
D.CC=x([],y.u)
D.hK=new A.G(2,null,null,null)
D.or=new K.kZ("sounds/turn_alert.wav")
D.js=new A.G(null,18,null,null)
D.OS=new A.z(!0,C.h,null,null,null,null,21,C.x,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aGC=new A.az("Quit",null,I.OH,null,null,null,null,null,null,null)
D.aHU=new A.az("Quit the table?",null,D.OS,C.M,null,null,null,null,null,null)})()};
(a=>{a["Ngz18450+W0ZfWwz/EnnBd2497c="]=a.current})($__dart_deferred_initializers__);