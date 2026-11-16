((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,E,B={
dj(d){var x,w,v,u,t,s,r,q
if(d==null)return D.HY
x=J.M(d)
w=x.h(d,"data")
v=y.B
if(v.b(w)){u=B.dj(A.an(w,y.w,y.b))
if(u.a!=null)return u}t=x.h(d,"table_data")
s=y.i
if(s.b(t)&&J.cE(t)){r=J.fo(t)
if(y.y.b(r))return B.N6(r)
if(v.b(r))return B.N6(A.an(r,y.w,y.b))}q=x.h(d,"table")
if(v.b(q))return B.N6(A.an(q,y.w,y.b))
if(s.b(x.h(d,"playerIds"))||s.b(x.h(d,"player_ids"))||s.b(x.h(d,"players"))||x.h(d,"table_id")!=null||x.h(d,"_id")!=null)return B.N6(d)
return D.HY},
aDm(d){var x=C.c.O(d==null?"":d)
if(x.length===0||x==="null"||x==="undefined"||x==="0")return!1
if(C.c.bh(x,"bot:"))return!1
return!0},
N6(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=A.a([],y.x),f=J.M(d),e=f.h(d,"playerIds")
if(e==null)e=f.h(d,"player_ids")
x=y.i
if(x.b(e))for(w=J.b_(e);w.A();){v=w.gP(w)
u=v==null?h:J.J(v)
if(u==null)u=""
if(B.aDm(u))g.push(C.c.O(u))}t=f.h(d,"players")
s=0
if(x.b(t))for(x=J.b_(t),w=y.B;x.A();){r=x.gP(x)
if(!w.b(r))continue
q=J.M(r)
if(J.f(q.h(r,"isBot"),!0))continue
p=q.h(r,"userId")
if(p==null)p=q.h(r,"user_id")
q=p==null?q.h(r,"id"):p
if(B.aDm(q==null?h:J.J(q)))++s}o=f.h(d,"potSummary")
if(y.B.b(o)){x=A.cW(J.C(o,"humanCount"))
n=x==null?h:C.d.aj(x)
if(n==null)n=0}else n=0
m=C.b.qx(A.a([g.length,s,n],y.r),new B.aDl())
x=f.h(d,"table_id")
l=x==null?f.h(d,"ludo_table_id"):x
if(l==null)l=f.h(d,"_id")
k=l==null?h:C.c.O(J.J(l))
x=f.h(d,"inviteCode")
if(x==null)x=f.h(d,"invite_code")
j=x==null?h:C.c.O(J.J(x))
x=f.h(d,"noOfPlayers")
i=A.cW(x==null?f.h(d,"no_of_players"):x)
f=k!=null&&k.length!==0?k:h
x=j!=null&&j.length!==0?j:h
w=i==null?h:C.d.aj(i)
return new B.a4j(f,x,g,w==null?2:w,m)},
a4j:function a4j(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
aDl:function aDl(){},
vd(d,e,f){return B.bRO(d,e,f)},
bRO(d,e,f){var x=0,w=A.p(y.A),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h
var $async$vd=A.q(function(g,a0){if(g===1){t.push(a0)
x=u}for(;;)switch(x){case 0:m=A.cb()+"/game-tables/"+A.d6(2,e,C.a6,!1)+"/join-bot"
l=A.bO(m,0,null)
k=y.w
j=y.b
i=A.F(k,j)
if(d!=null&&d>0)J.em(i,"count",d)
u=4
A.cI("POST",i,"game_tables/join_bot",m)
q=E.ayB(f)
x=7
return A.e(G.hA(l,C.O.ew(i,null),q),$async$vd)
case 7:s=a0
q=s.b
p=s
p=A.aK(A.aJ(p.e)).af(0,p.w)
o=s.b>=200&&s.b<300
A.cz(p,"game_tables/join_bot",q,o,m)
if(s.b>=200&&s.b<300){q=s
r=C.O.bz(0,A.aK(A.aJ(q.e)).af(0,q.w),null)
if(y.y.b(r)){v=r
x=1
break}if(y.B.b(r)){k=A.an(r,k,j)
v=k
x=1
break}}u=2
x=6
break
case 4:u=3
h=t.pop()
x=6
break
case 3:x=2
break
case 6:v=null
x=1
break
case 1:return A.n(v,w)
case 2:return A.m(t.at(-1),w)}})
return A.o($async$vd,w)},
J1(d){var x,w,v=J.M(d),u=v.h(d,"turnExpiresAt")
if(u==null)u=v.h(d,"turn_expires_at")
x=u
if(x==null)return null
try{v=F.bAY(J.J(x)).an6()
return v}catch(w){return null}},
byl(d){var x,w,v=B.J1(d)
if(v!=null){x=Date.now()
return Math.max(0,C.d.ft(C.k.bj(v.cA(new A.c5(x,0,!1).an6()).a,1000)/1000))}w=d.h(0,"turnSecondsLeft")
if(w==null)w=d.h(0,"turn_seconds_left")
if(typeof w=="number"&&C.d.aj(w)>0)return C.d.aj(w)
return 0}},D,F,G
J=c[1]
A=c[0]
C=c[2]
E=c[40]
B=a.updateHolder(c[33],B)
D=c[162]
F=c[66]
G=c[68]
B.a4j.prototype={
gl0(){var x=this.d
return x>=2&&this.e>=x}}
var z=a.updateTypes([])
B.aDl.prototype={
$2(d,e){return d>e?d:e},
$S:73};(function inheritance(){var x=a.inherit
x(B.a4j,A.I)
x(B.aDl,A.ec)})()
var y={x:A.X("w<h>"),r:A.X("w<r>"),i:A.X("T<@>"),y:A.X("ab<h,@>"),B:A.X("ab<@,@>"),w:A.X("h"),b:A.X("@"),A:A.X("ab<h,@>?")};(function constants(){D.cP=new A.d(1,0.13333333333333333,0.8274509803921568,0.9333333333333333,C.e)
D.qK=new A.d(1,0.7490196078431373,0.9686274509803922,1,C.e)
D.eT=new A.aU(12e6)
D.ra=new A.aU(15e6)
D.tq=new A.ao(62764,"MaterialIcons",!1)
D.tu=new A.ao(983708,"MaterialIcons",!1)
D.HY=new B.a4j(null,null,C.aa,2,0)})()};
(a=>{a["woWF3IWtBMUtG7/OThV8q5dVzwU="]=a.current})($__dart_deferred_initializers__);