((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,F,B={
bog(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=d.h(0,"bootValue")
if(h==null)h=d.h(0,"boot_value")
if(typeof h=="number")x=h
else{w=A.eE(A.m(h))
x=w==null?0:w}v=d.h(0,"noOfPlayers")
if(v==null)v=d.h(0,"no_of_players")
if(A.dg(v))u=v
else if(typeof v=="number"){w=C.c.al(v)
u=w}else{w=A.e1(A.m(v),i)
if(w==null)w=0
u=w}t=d.h(0,"playerIds")
if(t==null)t=d.h(0,"player_ids")
w=y.x
s=A.a([],w)
r=y.i
if(r.b(t))for(q=J.bg(t);q.D();){p=q.gR(q)
if(p==null)continue
s.push(J.ao(p))}o=d.h(0,"botPlayerIds")
if(o==null)o=d.h(0,"bot_player_ids")
n=A.a([],w)
if(r.b(o))for(w=J.bg(o);w.D();){p=w.gR(w)
if(p==null)continue
n.push(J.ao(p))}w=A.aU(d.h(0,"table_id"))
if(w==null)w=A.aU(d.h(0,"ludo_table_id"))
if(w==null){w=d.h(0,"_id")
w=w==null?i:J.ao(w)
m=w}else m=w
if(m==null)m=""
w=d.h(0,"totalDeals")
if(w==null)w=d.h(0,"total_deals")
l=w==null?d.h(0,"gameCount"):w
if(l==null)l=d.h(0,"game_count")
k=typeof l=="number"?C.c.al(l):A.e1(A.m(l),i)
w=d.h(0,"poolPoint")
if(w==null)w=d.h(0,"pool_point")
j=w==null?d.h(0,"poolLimit"):w
if(j==null)j=d.h(0,"pool_limit")
if(typeof j=="number")C.c.al(j)
else A.e1(A.m(j),i)
w=A.aU(d.h(0,"gameType"))
if(w==null)w=A.aU(d.h(0,"game_type"))
if(w==null)w=""
r=A.aU(d.h(0,"status"))
return new B.hA(m,w,x,u,r==null?"":r,s,n,k)},
bhE(d){var x="application/json",w=y.w
w=A.E(w,w)
w.p(0,"Content-Type",x)
w.p(0,"Accept",x)
if(d.length!==0)w.p(0,"Authorization","Bearer "+d)
w.p(0,"ngrok-skip-browser-warning","true")
return w},
rn(d,e,f,g,h){var x=0,w=A.t(y.k),v,u,t,s,r,q,p,o,n,m,l,k
var $async$rn=A.u(function(i,j){if(i===1)return A.p(j,w)
for(;;)switch(x){case 0:m=D.cB()+"/game-tables/customise"
l=A.cv(m,0,null)
k=A.ap(["user_id",h,"token",g,"boot_value",d,"no_of_players",f,"gameType",e],y.w,y.b)
D.cO("[API] source: game_tables/customise | POST "+m+" | request: "+k.k(0),"API")
u=B.bhE(g)
x=3
return A.j(D.iS(l,C.L.f1(k,null),u),$async$rn)
case 3:t=j
u=t.b
s=u>=200&&u<300
r=t.e
q=A.b5(A.b4(r))
p=t.w
D.dt(q.ap(0,p),"game_tables/customise",u,s,m)
if(!s)throw A.h(B.a_3(B.boh(t.gk7(0)),u))
o=C.L.c_(0,A.b5(A.b4(r)).ap(0,p),null)
if(!y.y.b(o)){v=E.Ad
x=1
break}n=J.S(o,"table_data")
if(!y.i.b(n)){v=E.Ad
x=1
break}u=J.Wq(n,y.B)
u=A.pK(u,new B.au4(),u.$ti.i("I.E"),y.o)
u=A.ae(u,A.D(u).i("I.E"))
v=u
x=1
break
case 1:return A.q(v,w)}})
return A.r($async$rn,w)},
CV(d,e,f,g,h,a0){var x=0,w=A.t(y.F),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$CV=A.u(function(a1,a2){if(a1===1)return A.p(a2,w)
for(;;)switch(x){case 0:m=D.cB()+"/game-tables"
l=A.cv(m,0,null)
k=y.w
j=y.b
i=A.E(k,j)
i.p(0,"user_id",a0)
i.p(0,"token",h)
i.p(0,"boot_value",d)
i.p(0,"no_of_players",g)
i.p(0,"gameType",f)
if(e!=null)i.G(0,A.ap(["game_count",e,"total_deals",e,"totalDeals",e,"deals",e],k,j))
D.cO("[API] source: game_tables/allocate | POST "+m+" | request: "+i.k(0),"API")
k=B.bhE(h)
x=3
return A.j(D.iS(l,C.L.f1(i,null),k),$async$CV)
case 3:u=a2
k=u.b
t=k>=200&&k<300
j=u.e
i=A.b5(A.b4(j))
s=u.w
D.dt(i.ap(0,s),"game_tables/allocate",k,t,m)
if(!t)throw A.h(B.a_3(B.boh(u.gk7(0)),k))
r=C.L.c_(0,A.b5(A.b4(j)).ap(0,s),null)
if(!y.y.b(r))throw A.h(B.a_3("Invalid response",k))
j=J.a7(r)
i=A.d8(j.h(r,"code"))
q=i==null?null:C.c.al(i)
if(q==null)q=0
p=j.h(r,"table_data")
if(q!==200||!y.i.b(p)||J.d5(p)){o=A.aU(j.h(r,"message"))
throw A.h(B.a_3(o==null?"Could not allocate table":o,k))}j=J.Wq(p,y.B)
j=A.pK(j,new B.au3(),j.$ti.i("I.E"),y.o)
n=A.ae(j,A.D(j).i("I.E"))
if(n.length===0||C.b.ga_(n).a.length===0)throw A.h(B.a_3("Missing table id",k))
v=new B.a_1(C.b.ga_(n).a,n)
x=1
break
case 1:return A.q(v,w)}})
return A.r($async$CV,w)},
boh(d){var x,w,v
try{x=y.A.a(C.L.c_(0,d,null))
w=x
w=A.aU(w==null?null:J.S(w,"message"))
if(w==null){w=x
w=A.aU(w==null?null:J.S(w,"error"))}if(w==null)w=d
return w}catch(v){w=d.length!==0?d:"Request failed"
return w}},
a_3(d,e){return new B.a_2(d)},
hA:function hA(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
au4:function au4(){},
au3:function au3(){},
a_1:function a_1(d,e){this.a=d
this.b=e},
a_2:function a_2(d){this.a=d},
brt(d){var x="application/json",w=y.w
w=A.E(w,w)
w.p(0,"Content-Type",x)
w.p(0,"Accept",x)
if(d.length!==0)w.p(0,"Authorization","Bearer "+d)
w.p(0,"ngrok-skip-browser-warning","true")
return w},
Fc(d,e){var x=0,w=A.t(y.A),v,u,t
var $async$Fc=A.u(function(f,g){if(f===1)return A.p(g,w)
for(;;)switch(x){case 0:x=3
return A.j(B.A5("/game-tables/"+A.dO(2,d,C.a5,!1),"teen_patti/table_by_id",e),$async$Fc)
case 3:t=g
if(t==null){v=null
x=1
break}u=B.beR(t)
v=u==null?t:u
x=1
break
case 1:return A.q(v,w)}})
return A.r($async$Fc,w)},
ox(d,e){var x=0,w=A.t(y.A),v
var $async$ox=A.u(function(f,g){if(f===1)return A.p(g,w)
for(;;)switch(x){case 0:v=B.A5("/game-tables/"+A.dO(2,d,C.a5,!1)+"/game-state","teen_patti/game_state",e)
x=1
break
case 1:return A.q(v,w)}})
return A.r($async$ox,w)},
Fd(d,e,f){var x=0,w=A.t(y.y),v,u
var $async$Fd=A.u(function(g,h){if(g===1)return A.p(h,w)
for(;;)switch(x){case 0:u=A.dO(2,d,C.a5,!1)
v=B.tb(A.ap(["user_id",f,"token",e],y.w,y.b),"/game-tables/"+u+"/start-game","teen_patti/start",e)
x=1
break
case 1:return A.q(v,w)}})
return A.r($async$Fd,w)},
A5(d,e,f){var x=0,w=A.t(y.A),v,u,t,s,r,q,p,o,n,m
var $async$A5=A.u(function(g,h){if(g===1)return A.p(h,w)
for(;;)switch(x){case 0:n=D.cB()+d
m=A.cv(n,0,null)
D.cO("[API] source: "+e+" | GET "+n+" | request: null","API")
x=3
return A.j(A.j6(m,B.brt(f)),$async$A5)
case 3:u=h
t=u.b
s=t>=200&&t<300
r=u.e
q=A.b5(A.b4(r))
p=u.w
D.dt(q.ap(0,p),e,t,s,n)
if(!s||A.b5(A.b4(r)).ap(0,p).length===0||A.b5(A.b4(r)).ap(0,p)==="null"){v=null
x=1
break}o=C.L.c_(0,A.b5(A.b4(r)).ap(0,p),null)
v=y.y.b(o)?o:null
x=1
break
case 1:return A.q(v,w)}})
return A.r($async$A5,w)},
tb(d,e,f,g){var x=0,w=A.t(y.y),v,u,t,s,r,q,p,o,n,m
var $async$tb=A.u(function(h,i){if(h===1)return A.p(i,w)
for(;;)switch(x){case 0:n=D.cB()+e
m=A.cv(n,0,null)
D.cO("[API] source: "+f+" | POST "+n+" | request: "+d.k(0),"API")
u=B.brt(g)
x=3
return A.j(D.iS(m,C.L.f1(d,null),u),$async$tb)
case 3:t=i
u=t.b
s=u>=200&&u<300
r=t.e
q=A.b5(A.b4(r))
p=t.w
D.dt(q.ap(0,p),f,u,s,n)
if(!s)throw A.h(B.brs(B.bIA(t.gk7(0)),u))
o=C.L.c_(0,A.b5(A.b4(r)).ap(0,p),null)
if(y.y.b(o)){v=o
x=1
break}v=A.ap(["data",o],y.w,y.b)
x=1
break
case 1:return A.q(v,w)}})
return A.r($async$tb,w)},
bIA(d){var x,w,v
try{x=y.A.a(C.L.c_(0,d,null))
w=x
w=A.aU(w==null?null:J.S(w,"message"))
if(w==null){w=x
w=A.aU(w==null?null:J.S(w,"error"))}if(w==null)w=d
return w}catch(v){w=d.length!==0?d:"Request failed"
return w}},
brs(d,e){return new B.qb(d)},
qb:function qb(d){this.a=d},
beS(d){var x,w,v,u,t,s,r,q="bootValue",p="playerIds",o="botPlayerIds",n="noOfPlayers",m=y.B
if(!m.b(d))return null
x=y.w
w=y.b
v=A.b9(d,x,w)
u=v.h(0,"code")
if(typeof u=="number"&&u>=400)return null
t=v.h(0,"table_data")
if(y.i.b(t)){s=J.a7(t)
s=s.gca(t)&&m.b(s.ga_(t))}else s=!1
if(s){r=A.b9(m.a(J.k0(t)),x,w)
m=A.dl(r,x,w)
x=r.h(0,q)
m.p(0,q,x==null?r.h(0,"boot_value"):x)
x=r.h(0,p)
m.p(0,p,x==null?r.h(0,"player_ids"):x)
x=r.h(0,o)
m.p(0,o,x==null?r.h(0,"bot_player_ids"):x)
x=r.h(0,n)
m.p(0,n,x==null?r.h(0,"no_of_players"):x)
x=r.h(0,"status")
m.p(0,"status",x==null?"waiting":x)
m.p(0,"_fromAllocate",!0)
return m}return v},
beR(d){var x,w,v,u,t,s,r,q,p="active_game_id",o="currentGameId",n="status"
if(!y.B.b(d))return null
x=y.w
w=y.b
v=A.b9(d,x,w)
u=B.beS(v)
t=u!=null?A.b9(u,x,w):A.b9(v,x,w)
for(x=["active_game_id","currentGameId","current_game_id","game_status","message"],s=0;s<5;++s){r=x[s]
if(v.h(0,r)!=null&&t.h(0,r)==null)t.p(0,r,v.h(0,r))}if(t.h(0,o)==null&&v.h(0,p)!=null)t.p(0,o,v.h(0,p))
q=v.h(0,"game_status")
x=!1
if(typeof q=="number")if(C.c.al(q)===1)x=t.h(0,n)==null||J.e(t.h(0,n),"waiting")
if(x)t.p(0,n,"playing")
return t},
kZ(d){var x,w,v,u,t,s
if(d==null)return null
x=C.d.ar(d)
if(x.length===0)return null
w=x.toUpperCase()
v=w.length
if(v>=3){u=C.d.a0(w,0,2)
t=C.d.bz(w,2)
$label0$0:{if("BP"===u){s="S"
break $label0$0}if("RP"===u){s="H"
break $label0$0}if("BL"===u){s="C"
break $label0$0}if("RS"===u){s="D"
break $label0$0}s=null
break $label0$0}if(s!=null&&t.length!==0)return s+t}if(v>=2)if(C.d.t("HDCS",w[0]))return w
return x}},E,G,D
J=c[1]
A=c[0]
C=c[2]
F=c[90]
B=a.updateHolder(c[39],B)
E=c[297]
G=c[212]
D=c[105]
B.hA.prototype={}
B.a_1.prototype={}
B.a_2.prototype={
k(d){return this.a},
$ibY:1}
B.qb.prototype={
k(d){return this.a},
$ibY:1}
var z=a.updateTypes(["hA(am<@,@>)"])
B.au4.prototype={
$1(d){return B.bog(A.b9(d,y.w,y.b))},
$S:z+0}
B.au3.prototype={
$1(d){return B.bog(A.b9(d,y.w,y.b))},
$S:z+0};(function inheritance(){var x=a.inheritMany
x(A.G,[B.hA,B.a_1,B.a_2,B.qb])
x(A.bV,[B.au4,B.au3])})()
A.bJ(b.typeUniverse,JSON.parse('{"a_2":{"bY":[]},"qb":{"bY":[]}}'))
var y=(function rtii(){var x=A.A
return{F:x("a_1"),o:x("hA"),x:x("l<f>"),k:x("R<hA>"),i:x("R<@>"),y:x("am<f,@>"),B:x("am<@,@>"),w:x("f"),b:x("@"),A:x("am<f,@>?")}})();(function constants(){var x=a.makeConstList
E.wg=new A.d(1,1,1,0.9725490196078431,C.e)
E.pV=new A.C(16,8,16,0)
E.qK=new A.ax(57527,"MaterialIcons",!1)
E.qP=new A.ax(63695,"MaterialIcons",!1)
E.zk=new A.ax(983469,"MaterialIcons",!1)
E.qU=new A.d1(G.jB,20,C.h,null,null,null)
E.Ad=x([],A.A("l<hA>"))
E.rG=new A.k(0,-4)
E.t9=new F.jJ("sounds/card_discard.wav")})()};
(a=>{a["XO6E3GxU/ewPPbweZUB0mYzfLt0="]=a.current})($__dart_deferred_initializers__);