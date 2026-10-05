((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,I,K,L,B={
bsR(a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a0.h(0,"bootValue")
if(d==null)d=a0.h(0,"boot_value")
x=d==null?a0.h(0,"minPot"):d
if(x==null)x=a0.h(0,"min_pot")
if(typeof x=="number")w=x
else{d=A.dj(A.v(x))
w=d==null?0:d}v=a0.h(0,"noOfPlayers")
if(v==null)v=a0.h(0,"no_of_players")
if(A.d4(v))u=v
else if(typeof v=="number"){d=C.d.ai(v)
u=d}else{d=A.cB(A.v(v),e)
if(d==null)d=0
u=d}t=a0.h(0,"playerIds")
if(t==null)t=a0.h(0,"player_ids")
d=y.s
s=A.a([],d)
r=y.j
if(r.b(t))for(q=J.b0(t);q.A();){p=q.gP(q)
if(p==null)continue
s.push(J.L(p))}o=a0.h(0,"online")
if(o!=null)if(A.d4(o))n=o
else n=typeof o=="number"?C.d.ai(o):A.cB(A.v(o),e)
else n=e
if(s.length===0&&n!=null)for(m=0;m<n;++m)s.push("online_"+m)
l=a0.h(0,"botPlayerIds")
if(l==null)l=a0.h(0,"bot_player_ids")
k=A.a([],d)
if(r.b(l))for(d=J.b0(l);d.A();){p=d.gP(d)
if(p==null)continue
k.push(J.L(p))}d=A.aR(a0.h(0,"table_id"))
if(d==null)d=A.aR(a0.h(0,"ludo_table_id"))
if(d==null){d=a0.h(0,"id")
d=d==null?e:J.L(d)}if(d==null){d=a0.h(0,"_id")
d=d==null?e:J.L(d)
j=d}else j=d
if(j==null)j=""
d=a0.h(0,"totalDeals")
if(d==null)d=a0.h(0,"total_deals")
i=d==null?a0.h(0,"gameCount"):d
if(i==null)i=a0.h(0,"game_count")
h=typeof i=="number"?C.d.ai(i):A.cB(A.v(i),e)
d=a0.h(0,"poolPoint")
if(d==null)d=a0.h(0,"pool_point")
g=d==null?a0.h(0,"poolLimit"):d
if(g==null)g=a0.h(0,"pool_limit")
if(typeof g=="number")C.d.ai(g)
else A.cB(A.v(g),e)
d=a0.h(0,"tableName")
if(d==null)d=a0.h(0,"table_name")
if(d==null)d=a0.h(0,"name")
f=d==null?e:C.c.S(J.L(d))
if(f==null)f=""
d=A.aR(a0.h(0,"gameType"))
if(d==null)d=A.aR(a0.h(0,"game_type"))
if(d==null)d=""
r=A.aR(a0.h(0,"status"))
if(r==null)r=""
return new B.hc(j,d,w,u,r,s,k,h,f,n,B.bA2(a0.h(0,"joinable")),B.bA2(a0.h(0,"full")))},
bA2(d){var x
if(d==null)return null
if(A.mI(d))return d
if(typeof d=="number")return d!==0
x=J.L(d).toLowerCase()
if(x==="true"||x==="1")return!0
if(x==="false"||x==="0")return!1
return null},
axS(d){var x="application/json",w=y.N
w=A.F(w,w)
w.k(0,"Content-Type",x)
w.k(0,"Accept",x)
if(d.length!==0)w.k(0,"Authorization","Bearer "+d)
w.k(0,"ngrok-skip-browser-warning","true")
return w},
yS(d,e,f,g){var x=0,w=A.p(y.H),v,u,t,s,r,q,p,o,n,m
var $async$yS=A.q(function(h,i){if(h===1)return A.m(i,w)
for(;;)switch(x){case 0:m=y.N
m=A.F(m,m)
m.k(0,"gameType",d)
m.k(0,"no_of_players",""+f)
m.k(0,"limit",""+e)
u=A.ch()
t=A.u6(null,null,null,null,m,null).f
if(t==null)t=""
s=u+"/game-tables/list?"+t
r=A.bR(s,0,null)
A.cN("GET",m,"game_tables/list",s)
x=3
return A.e(A.f6(r,B.axS(g)),$async$yS)
case 3:q=i
m=q.b
p=m>=200&&m<300
u=q.e
t=A.aN(A.aM(u))
o=q.w
A.cM(t.ad(0,o),"game_tables/list",m,p,s)
if(!p)throw A.j(B.LL(B.bsS(q.gjn(0)),m))
n=C.L.bB(0,A.aN(A.aM(u)).ad(0,o),null)
if(!y.P.b(n)){v=D.C2
x=1
break}v=B.bA3(n)
x=1
break
case 1:return A.n(v,w)}})
return A.o($async$yS,w)},
bA3(d){var x,w,v,u,t,s,r,q,p,o,n
for(x=["table_data","data","tables"],w=y.f,v=y.p,u=y.j,t=J.N(d),s=0;s<3;++s){r=t.h(d,x[s])
if(!u.b(r))continue
q=J.CF(r,w)
q=A.nc(q,new B.axR(),q.$ti.i("M.E"),v)
p=A.af(q,A.H(q).i("M.E"))
if(p.length!==0)return p}o=t.h(d,"table")
if(w.b(o)){n=B.bsR(A.ao(o,y.N,y.z))
if(n.a.length!==0)return A.a([n],y.u)}return D.C2},
bA4(d){if(d===C.d.i2(d))return C.d.Z(d)
return d},
bPN(d){if(typeof d=="number")return C.d.ai(d)
if(typeof d=="string")return A.cB(C.c.S(d),null)
return null},
bA5(d,e,f,g){var x,w=J.N(d),v=B.bPN(w.h(d,"code")),u=B.bPM(d,e,g),t=!0
if(u!=null)if(u.a.length!==0)t=v!=null&&v!==200
if(t){x=A.aR(w.h(d,"message"))
throw A.j(B.LL(x==null?"Could not allocate table":x,f))}return new B.LK(u.a,A.a([u],y.u),d)},
bPM(d,e,f){var x,w,v,u,t,s,r,q=J.B(d,"table")
if(y.f.b(q)){x=B.bsR(A.ao(q,y.N,y.z))
if(x.a.length!==0)return x}w=B.bA3(d)
v=A.ag(w).i("aQ<1>")
u=A.af(new A.aQ(w,new B.axT(),v),v.i("M.E"))
w=u.length
if(w===0)return null
t=C.d.Z(e)
for(s=0;s<w;++s){r=u[s]
if(C.d.Z(r.c)!==t)continue
v=r.d
v=v>0&&v!==f
if(v)continue
return r}return C.b.gW(u)},
yR(d,e,f,g,h,i){var x=0,w=A.p(y.M),v,u,t,s,r,q,p,o,n,m
var $async$yR=A.q(function(j,k){if(j===1)return A.m(k,w)
for(;;)switch(x){case 0:q=A.ch()+"/game-tables"
p=A.bR(q,0,null)
o=y.N
n=y.z
m=A.F(o,n)
m.k(0,"user_id",i)
m.k(0,"token",h)
m.k(0,"boot_value",B.bA4(d))
m.k(0,"no_of_players",g)
m.k(0,"gameType",f)
if(e!=null)m.K(0,A.aa(["game_count",e,"total_deals",e,"totalDeals",e,"deals",e],o,n))
A.cN("POST",m,"game_tables/allocate",q)
o=B.axS(h)
x=3
return A.e(F.hL(p,C.L.eB(m,null),o),$async$yR)
case 3:u=k
o=u.b
t=o>=200&&o<300
n=u.e
m=A.aN(A.aM(n))
s=u.w
A.cM(m.ad(0,s),"game_tables/allocate",o,t,q)
if(!t)throw A.j(B.LL(B.bsS(u.gjn(0)),o))
r=C.L.bB(0,A.aN(A.aM(n)).ad(0,s),null)
if(!y.P.b(r))throw A.j(B.LL("Invalid response",o))
v=B.bA5(r,d,o,g)
x=1
break
case 1:return A.n(v,w)}})
return A.o($async$yR,w)},
bsS(d){var x,w,v
try{x=y.h.a(C.L.bB(0,d,null))
w=x
w=A.aR(w==null?null:J.B(w,"message"))
if(w==null){w=x
w=A.aR(w==null?null:J.B(w,"error"))}if(w==null)w=d
return w}catch(v){w=d.length!==0?d:"Request failed"
return w}},
LL(d,e){return new B.v6(d,e)},
hc:function hc(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
axR:function axR(){},
axT:function axT(){},
LK:function LK(d,e,f){this.a=d
this.b=e
this.c=f},
v6:function v6(d,e){this.a=d
this.b=e},
c2l(d){return F.ht(C.l.j(0.72),!0,new B.bqN(),d,y.y)},
tn:function tn(d,e,f){this.c=d
this.d=e
this.a=f},
ahn:function ahn(){this.d=!1
this.c=this.a=null},
bf6:function bf6(d){this.a=d},
bqN:function bqN(){},
bqL:function bqL(d){this.a=d},
bqM:function bqM(d){this.a=d},
Z8(d,e,f){return A.aZ(d,!1).a0c(G.a2_(e,null,f))}},D,G,H,F,E
J=c[1]
A=c[0]
C=c[2]
I=c[110]
K=c[59]
L=c[109]
B=a.updateHolder(c[38],B)
D=c[145]
G=c[63]
H=c[74]
F=c[65]
E=c[69]
B.hc.prototype={
gaog(){var x=this.z
return x==null?this.f.length+this.r.length:x}}
B.LK.prototype={}
B.v6.prototype={
p(d){return this.a},
$ibS:1}
B.tn.prototype={
V(){return new B.ahn()}}
B.ahn.prototype={
J0(){var x=0,w=A.p(y.n),v,u=this,t,s
var $async$J0=A.q(function(d,e){if(d===1)return A.m(e,w)
for(;;)switch(x){case 0:if(u.d||u.c==null){x=1
break}u.d=!0
t=u.c
t.toString
x=3
return A.e(B.c2l(t),$async$J0)
case 3:s=e
u.d=!1
if(s===!0&&u.c!=null){t=u.c
t.toString
A.aZ(t,!1).bi(0)}case 1:return A.n(v,w)}})
return A.o($async$J0,w)},
u(d){var x=this.a
return F.bC6(x.d,x.c,new B.bf6(this),y.K)}}
var z=a.updateTypes(["hc(ab<@,@>)","K(hc)","jG(t)"])
B.axR.prototype={
$1(d){return B.bsR(A.ao(d,y.N,y.z))},
$S:z+0}
B.axT.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
B.bf6.prototype={
$2(d,e){if(!d&&!this.a.a.d)this.a.J0()},
$S:234}
B.bqN.prototype={
$1(d){var x,w,v,u=null,t=A.x(22),s=F.Q(D.xt.j(0.65),1.5),r=y.V,q=A.a([new A.W(1,C.r,D.xt.j(0.18),C.o,26),new A.W(0,C.r,C.l.j(0.55),H.eZ,20)],r)
r=A.y(u,D.AX,C.f,u,u,new A.u(u,u,u,u,A.a([new A.W(0,C.r,C.bC.j(0.25),C.o,14)],r),D.a8N,C.G),u,58,u,u,u,u,u,58)
x=A.l("Are you sure you want to quit the table?",u,u,u,u,u,A.E(u,u,C.h.j(0.62),u,u,u,u,u,u,u,u,14,u,u,u,u,1.45,!0,u,u,u,u,u,u,u,u),C.K,u)
w=C.h.j(0.28)
v=y.D
return G.yp(u,C.w,new A.cO(D.wi,A.bF(new A.a4(D.zF,F.P(A.a([r,D.jj,D.aFa,E.aX,x,L.og,F.V(A.a([F.S(G.a4D(I.v8,new B.bqL(d),A.F3(u,u,u,u,u,u,u,u,u,C.M,u,u,E.eQ,u,new A.cH(A.x(12),C.x),new A.aO(w,1,C.D,-1),u,u,u,u)),1),H.dq,F.S(G.mb(D.aE0,new B.bqM(d),A.oc(C.bC,u,u,C.h,E.eQ,new A.cH(A.x(12),C.x),u)),1)],v),E.j,C.i,E.n,0)],v),E.j,C.i,E.v),u),new A.u(u,u,s,t,q,D.a98,C.m),C.Y),u),u,u,u,H.zG,C.hz,u,u,u)},
$S:z+2}
B.bqL.prototype={
$0(){A.aZ(this.a,!1).fa(0,!1)
return null},
$S:0}
B.bqM.prototype={
$0(){A.aZ(this.a,!1).fa(0,!0)
return null},
$S:0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.I,[B.hc,B.LK,B.v6])
x(A.d8,[B.axR,B.axT,B.bqN])
w(B.tn,A.a2)
w(B.ahn,A.a5)
w(B.bf6,A.es)
x(A.er,[B.bqL,B.bqM])})()
A.dp(b.typeUniverse,JSON.parse('{"v6":{"bS":[]},"tn":{"a2":[],"c":[]},"ahn":{"a5":["tn"]}}'))
var y=(function rtii(){var x=A.a1
return{M:x("LK"),p:x("hc"),V:x("w<W>"),O:x("w<d>"),u:x("w<hc>"),s:x("w<i>"),D:x("w<c>"),H:x("R<hc>"),j:x("R<@>"),P:x("ab<i,@>"),f:x("ab<@,@>"),K:x("I"),N:x("i"),y:x("K"),z:x("@"),h:x("ab<i,@>?"),n:x("~")}})();(function constants(){var x=a.makeConstList
D.wi=new A.ad(0,360,0,1/0)
D.cf=new A.d(1,1,0.8784313725490196,0.5411764705882353,C.e)
D.xt=new A.d(1,0.9098039215686274,0.7843137254901961,0.4470588235294118,C.e)
D.yd=new A.d(1,0.054901960784313725,0.08235294117647059,0.1568627450980392,C.e)
D.yJ=new A.d(1,0.10196078431372549,0.13725490196078433,0.2784313725490196,C.e)
D.zm=new A.aT(16e5)
D.qL=new A.aT(22e5)
D.zF=new A.A(22,26,22,20)
D.iJ=new A.aq(983663,"MaterialIcons",!1)
D.eq=new A.aq(63432,"MaterialIcons",!1)
D.eV=new A.aq(63626,"MaterialIcons",!1)
D.nb=new A.aq(983132,"MaterialIcons",!1)
D.AX=new A.cq(H.AG,28,C.h,null,null,null)
D.a_d=new A.d(1,0.5568627450980392,0.10588235294117647,0.10588235294117647,C.e)
D.ajH=x([C.bC,D.a_d],y.O)
D.a8N=new F.ak(E.U,E.a0,C.t,D.ajH,null,null)
D.Vc=new A.d(1,0.07058823529411765,0.09411764705882353,0.17254901960784313,C.e)
D.ab9=x([D.yJ,D.Vc,D.yd],y.O)
D.a98=new F.ak(E.U,E.a0,C.t,D.ab9,null,null)
D.C2=x([],y.u)
D.hA=new A.G(2,null,null,null)
D.o9=new K.kT("sounds/turn_alert.wav")
D.jj=new A.G(null,18,null,null)
D.Od=new A.z(!0,C.h,null,null,null,null,21,C.y,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aE0=new A.aD("Quit",null,I.O1,null,null,null,null,null,null,null)
D.aFa=new A.aD("Quit the table?",null,D.Od,C.K,null,null,null,null,null,null)})()};
(a=>{a["NJvTYGITEKSHkvZZXLClidPVm2o="]=a.current})($__dart_deferred_initializers__);