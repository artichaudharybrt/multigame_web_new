((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,K,I,L,B={
buO(a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a0.h(0,"bootValue")
if(d==null)d=a0.h(0,"boot_value")
x=d==null?a0.h(0,"minPot"):d
if(x==null)x=a0.h(0,"min_pot")
if(typeof x=="number")w=x
else{d=A.dn(A.v(x))
w=d==null?0:d}v=a0.h(0,"noOfPlayers")
if(v==null)v=a0.h(0,"no_of_players")
if(A.cX(v))u=v
else if(typeof v=="number"){d=C.d.aj(v)
u=d}else{d=A.cG(A.v(v),e)
if(d==null)d=0
u=d}t=a0.h(0,"playerIds")
if(t==null)t=a0.h(0,"player_ids")
d=y.s
s=A.a([],d)
r=y.j
if(r.b(t))for(q=J.aZ(t);q.A();){p=q.gO(q)
if(p==null)continue
s.push(J.J(p))}o=a0.h(0,"online")
if(o!=null)if(A.cX(o))n=o
else n=typeof o=="number"?C.d.aj(o):A.cG(A.v(o),e)
else n=e
if(s.length===0&&n!=null)for(m=0;m<n;++m)s.push("online_"+m)
l=a0.h(0,"botPlayerIds")
if(l==null)l=a0.h(0,"bot_player_ids")
k=A.a([],d)
if(r.b(l))for(d=J.aZ(l);d.A();){p=d.gO(d)
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
h=typeof i=="number"?C.d.aj(i):A.cG(A.v(i),e)
d=a0.h(0,"poolPoint")
if(d==null)d=a0.h(0,"pool_point")
g=d==null?a0.h(0,"poolLimit"):d
if(g==null)g=a0.h(0,"pool_limit")
if(typeof g=="number")C.d.aj(g)
else A.cG(A.v(g),e)
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
return new B.hk(j,d,w,u,r,s,k,h,f,n,B.bBW(a0.h(0,"joinable")),B.bBW(a0.h(0,"full")))},
bBW(d){var x
if(d==null)return null
if(A.mK(d))return d
if(typeof d=="number")return d!==0
x=J.J(d).toLowerCase()
if(x==="true"||x==="1")return!0
if(x==="false"||x==="0")return!1
return null},
ayB(d){var x="application/json",w=y.N
w=A.F(w,w)
w.k(0,"Content-Type",x)
w.k(0,"Accept",x)
if(d.length!==0)w.k(0,"Authorization","Bearer "+d)
w.k(0,"ngrok-skip-browser-warning","true")
return w},
z0(d,e,f,g){var x=0,w=A.p(y.H),v,u,t,s,r,q,p,o,n,m
var $async$z0=A.q(function(h,i){if(h===1)return A.m(i,w)
for(;;)switch(x){case 0:m=y.N
m=A.F(m,m)
m.k(0,"gameType",d)
m.k(0,"no_of_players",""+f)
m.k(0,"limit",""+e)
u=A.cb()
t=A.p8(null,null,null,null,m,null).f
if(t==null)t=""
s=u+"/game-tables/list?"+t
r=A.bP(s,0,null)
A.cI("GET",m,"game_tables/list",s)
x=3
return A.e(A.f2(r,B.ayB(g)),$async$z0)
case 3:q=i
m=q.b
p=m>=200&&m<300
u=q.e
t=A.aK(A.aJ(u))
o=q.w
A.cy(t.af(0,o),"game_tables/list",m,p,s)
if(!p)throw A.j(B.LX(B.buP(q.giN(0)),m))
n=C.O.bz(0,A.aK(A.aJ(u)).af(0,o),null)
if(!y.P.b(n)){v=D.CJ
x=1
break}v=B.bBX(n)
x=1
break
case 1:return A.n(v,w)}})
return A.o($async$z0,w)},
bBX(d){var x,w,v,u,t,s,r,q,p,o,n
for(x=["table_data","data","tables"],w=y.f,v=y.p,u=y.j,t=J.M(d),s=0;s<3;++s){r=t.h(d,x[s])
if(!u.b(r))continue
q=J.CM(r,w)
q=A.nh(q,new B.ayA(),q.$ti.i("N.E"),v)
p=A.ag(q,A.H(q).i("N.E"))
if(p.length!==0)return p}o=t.h(d,"table")
if(w.b(o)){n=B.buO(A.an(o,y.N,y.z))
if(n.a.length!==0)return A.a([n],y.u)}return D.CJ},
bBY(d){if(d===C.d.h4(d))return C.d.Z(d)
return d},
bRT(d){if(typeof d=="number")return C.d.aj(d)
if(typeof d=="string")return A.cG(C.c.P(d),null)
return null},
bBZ(d,e,f,g){var x,w=J.M(d),v=B.bRT(w.h(d,"code")),u=B.bRS(d,e,g),t=!0
if(u!=null)if(u.a.length!==0)t=v!=null&&v!==200
if(t){x=A.aQ(w.h(d,"message"))
throw A.j(B.LX(x==null?"Could not allocate table":x,f))}return new B.LW(u.a,A.a([u],y.u),d)},
bRS(d,e,f){var x,w,v,u,t,s,r,q=J.C(d,"table")
if(y.f.b(q)){x=B.buO(A.an(q,y.N,y.z))
if(x.a.length!==0)return x}w=B.bBX(d)
v=A.aj(w).i("aR<1>")
u=A.ag(new A.aR(w,new B.ayC(),v),v.i("N.E"))
w=u.length
if(w===0)return null
t=C.d.Z(e)
for(s=0;s<w;++s){r=u[s]
if(C.d.Z(r.c)!==t)continue
v=r.d
v=v>0&&v!==f
if(v)continue
return r}return C.b.gW(u)},
z_(d,e,f,g,h,i){var x=0,w=A.p(y.M),v,u,t,s,r,q,p,o,n,m
var $async$z_=A.q(function(j,k){if(j===1)return A.m(k,w)
for(;;)switch(x){case 0:q=A.cb()+"/game-tables"
p=A.bP(q,0,null)
o=y.N
n=y.z
m=A.F(o,n)
m.k(0,"user_id",i)
m.k(0,"token",h)
m.k(0,"boot_value",B.bBY(d))
m.k(0,"no_of_players",g)
m.k(0,"gameType",f)
if(e!=null)m.H(0,A.aa(["game_count",e,"total_deals",e,"totalDeals",e,"deals",e],o,n))
A.cI("POST",m,"game_tables/allocate",q)
o=B.ayB(h)
x=3
return A.e(F.hB(p,C.O.ew(m,null),o),$async$z_)
case 3:u=k
o=u.b
t=o>=200&&o<300
n=u.e
m=A.aK(A.aJ(n))
s=u.w
A.cy(m.af(0,s),"game_tables/allocate",o,t,q)
if(!t)throw A.j(B.LX(B.buP(u.giN(0)),o))
r=C.O.bz(0,A.aK(A.aJ(n)).af(0,s),null)
if(!y.P.b(r))throw A.j(B.LX("Invalid response",o))
v=B.bBZ(r,d,o,g)
x=1
break
case 1:return A.n(v,w)}})
return A.o($async$z_,w)},
buP(d){var x,w,v
try{x=y.h.a(C.O.bz(0,d,null))
w=x
w=A.aQ(w==null?null:J.C(w,"message"))
if(w==null){w=x
w=A.aQ(w==null?null:J.C(w,"error"))}if(w==null)w=d
return w}catch(v){w=d.length!==0?d:"Request failed"
return w}},
LX(d,e){return new B.vb(d,e)},
hk:function hk(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
ayA:function ayA(){},
ayC:function ayC(){},
LW:function LW(d,e,f){this.a=d
this.b=e
this.c=f},
vb:function vb(d,e){this.a=d
this.b=e},
c4x(d){return F.fO(C.l.j(0.72),!0,new B.bsI(),d,y.y)},
tw:function tw(d,e,f){this.c=d
this.d=e
this.a=f},
ai2:function ai2(){this.d=!1
this.c=this.a=null},
bgB:function bgB(d){this.a=d},
bsI:function bsI(){},
bsG:function bsG(d){this.a=d},
bsH:function bsH(d){this.a=d},
ZD(d,e,f){return A.aS(d,!1).a0G(G.a2z(e,null,f))}},D,M,G,H,F,E
J=c[1]
A=c[0]
C=c[2]
K=c[62]
I=c[119]
L=c[118]
B=a.updateHolder(c[40],B)
D=c[163]
M=c[160]
G=c[66]
H=c[78]
F=c[68]
E=c[72]
B.hk.prototype={
gaoV(){var x=this.z
return x==null?this.f.length+this.r.length:x}}
B.LW.prototype={}
B.vb.prototype={
p(d){return this.a},
$ibQ:1}
B.tw.prototype={
V(){return new B.ai2()}}
B.ai2.prototype={
Jo(){var x=0,w=A.p(y.n),v,u=this,t,s
var $async$Jo=A.q(function(d,e){if(d===1)return A.m(e,w)
for(;;)switch(x){case 0:if(u.d||u.c==null){x=1
break}u.d=!0
t=u.c
t.toString
x=3
return A.e(B.c4x(t),$async$Jo)
case 3:s=e
u.d=!1
if(s===!0&&u.c!=null){t=u.c
t.toString
A.aS(t,!1).bg(0)}case 1:return A.n(v,w)}})
return A.o($async$Jo,w)},
u(d){var x=this.a
return F.bE0(x.d,x.c,new B.bgB(this),y.K)}}
var z=a.updateTypes(["hk(ab<@,@>)","L(hk)","jM(u)"])
B.ayA.prototype={
$1(d){return B.buO(A.an(d,y.N,y.z))},
$S:z+0}
B.ayC.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
B.bgB.prototype={
$2(d,e){if(!d&&!this.a.a.d)this.a.Jo()},
$S:197}
B.bsI.prototype={
$1(d){var x,w,v,u=null,t=A.x(22),s=F.R(D.y2.j(0.65),1.5),r=y.V,q=A.a([new A.U(1,C.r,D.y2.j(0.18),C.o,26),new A.U(0,C.r,C.l.j(0.55),H.f4,20)],r)
r=A.y(u,D.BD,C.f,u,u,new A.t(u,u,u,u,A.a([new A.U(0,C.r,C.bs.j(0.25),C.o,14)],r),D.aaU,C.F),u,58,u,u,u,u,u,58)
x=A.l("Are you sure you want to quit the table?",u,u,u,u,u,A.B(u,u,C.h.j(0.62),u,u,u,u,u,u,u,u,14,u,u,u,u,1.45,!0,u,u,u,u,u,u,u,u),C.M,u)
w=C.h.j(0.28)
v=y.D
return G.yz(u,C.w,new A.cO(D.wQ,A.bJ(new A.a2(D.Ai,F.P(A.a([r,D.jw,D.aIt,E.aY,x,L.oG,F.S(A.a([F.Q(G.a5b(I.vD,new B.bsG(d),A.F9(u,u,u,u,u,u,u,u,u,C.J,u,u,E.eZ,u,new A.cB(A.x(12),C.y),new A.aL(w,1,C.E,-1),u,u,u,u)),1),H.cX,F.Q(G.md(D.aHa,new B.bsH(d),A.oo(C.bs,u,u,C.h,E.eZ,new A.cB(A.x(12),C.y),u)),1)],v),E.j,C.i,E.n,0)],v),E.j,C.i,E.v),u),new A.t(u,u,s,t,q,D.abh,C.m),C.Y),u),u,u,u,H.Aj,C.hK,u,u,u)},
$S:z+2}
B.bsG.prototype={
$0(){A.aS(this.a,!1).ep(0,!1)
return null},
$S:0}
B.bsH.prototype={
$0(){A.aS(this.a,!1).ep(0,!0)
return null},
$S:0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.I,[B.hk,B.LW,B.vb])
x(A.cZ,[B.ayA,B.ayC,B.bsI])
w(B.tw,A.a3)
w(B.ai2,A.a5)
w(B.bgB,A.ed)
x(A.ec,[B.bsG,B.bsH])})()
A.da(b.typeUniverse,JSON.parse('{"vb":{"bQ":[]},"tw":{"a3":[],"c":[]},"ai2":{"a5":["tw"]}}'))
var y=(function rtii(){var x=A.a0
return{M:x("LW"),p:x("hk"),V:x("w<U>"),O:x("w<d>"),u:x("w<hk>"),s:x("w<h>"),D:x("w<c>"),H:x("T<hk>"),j:x("T<@>"),P:x("ab<h,@>"),f:x("ab<@,@>"),K:x("I"),N:x("h"),y:x("L"),z:x("@"),h:x("ab<h,@>?"),n:x("~")}})();(function constants(){var x=a.makeConstList
D.wQ=new A.ac(0,360,0,1/0)
D.ci=new A.d(1,1,0.8784313725490196,0.5411764705882353,C.e)
D.y2=new A.d(1,0.9098039215686274,0.7843137254901961,0.4470588235294118,C.e)
D.zf=new A.d(1,0.10196078431372549,0.13725490196078433,0.2784313725490196,C.e)
D.Ai=new A.A(22,26,22,20)
D.iU=new A.ao(983663,"MaterialIcons",!1)
D.eu=new A.ao(63432,"MaterialIcons",!1)
D.f1=new A.ao(63626,"MaterialIcons",!1)
D.nC=new A.ao(983132,"MaterialIcons",!1)
D.BD=new A.ca(H.Bn,28,C.h,null,null,null)
D.a0M=new A.d(1,0.5568627450980392,0.10588235294117647,0.10588235294117647,C.e)
D.ami=x([C.bs,D.a0M],y.O)
D.aaU=new F.ai(E.S,E.Z,C.t,D.ami,null,null)
D.We=new A.d(1,0.07058823529411765,0.09411764705882353,0.17254901960784313,C.e)
D.adn=x([D.zf,D.We,M.qp],y.O)
D.abh=new F.ai(E.S,E.Z,C.t,D.adn,null,null)
D.CJ=x([],y.u)
D.hL=new A.G(2,null,null,null)
D.oz=new K.kY("sounds/turn_alert.wav")
D.jw=new A.G(null,18,null,null)
D.P_=new A.z(!0,C.h,null,null,null,null,21,C.x,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aHa=new A.aw("Quit",null,I.OQ,null,null,null,null,null,null,null)
D.aIt=new A.aw("Quit the table?",null,D.P_,C.M,null,null,null,null,null,null)})()};
(a=>{a["T4seuN2QKUKhNcEzV+5BRBqbHvQ="]=a.current})($__dart_deferred_initializers__);