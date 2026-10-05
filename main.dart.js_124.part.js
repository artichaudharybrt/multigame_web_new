((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,E,B={
dg(d){var x,w,v,u,t,s,r,q
if(d==null)return D.Hh
x=J.N(d)
w=x.h(d,"data")
v=y.B
if(v.b(w)){u=B.dg(A.ao(w,y.w,y.b))
if(u.a!=null)return u}t=x.h(d,"table_data")
s=y.i
if(s.b(t)&&J.cJ(t)){r=J.fo(t)
if(y.y.b(r))return B.MS(r)
if(v.b(r))return B.MS(A.ao(r,y.w,y.b))}q=x.h(d,"table")
if(v.b(q))return B.MS(A.ao(q,y.w,y.b))
if(s.b(x.h(d,"playerIds"))||s.b(x.h(d,"player_ids"))||s.b(x.h(d,"players"))||x.h(d,"table_id")!=null||x.h(d,"_id")!=null)return B.MS(d)
return D.Hh},
aCD(d){var x=C.c.S(d==null?"":d)
if(x.length===0||x==="null"||x==="undefined"||x==="0")return!1
if(C.c.bj(x,"bot:"))return!1
return!0},
MS(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=A.a([],y.x),f=J.N(d),e=f.h(d,"playerIds")
if(e==null)e=f.h(d,"player_ids")
x=y.i
if(x.b(e))for(w=J.b0(e);w.A();){v=w.gP(w)
u=v==null?h:J.L(v)
if(u==null)u=""
if(B.aCD(u))g.push(C.c.S(u))}t=f.h(d,"players")
s=0
if(x.b(t))for(x=J.b0(t),w=y.B;x.A();){r=x.gP(x)
if(!w.b(r))continue
q=J.N(r)
if(J.f(q.h(r,"isBot"),!0))continue
p=q.h(r,"userId")
if(p==null)p=q.h(r,"user_id")
q=p==null?q.h(r,"id"):p
if(B.aCD(q==null?h:J.L(q)))++s}o=f.h(d,"potSummary")
if(y.B.b(o)){x=A.cU(J.B(o,"humanCount"))
n=x==null?h:C.d.ai(x)
if(n==null)n=0}else n=0
m=C.b.qw(A.a([g.length,s,n],y.r),new B.aCC())
x=f.h(d,"table_id")
l=x==null?f.h(d,"ludo_table_id"):x
if(l==null)l=f.h(d,"_id")
k=l==null?h:C.c.S(J.L(l))
x=f.h(d,"inviteCode")
if(x==null)x=f.h(d,"invite_code")
j=x==null?h:C.c.S(J.L(x))
x=f.h(d,"noOfPlayers")
i=A.cU(x==null?f.h(d,"no_of_players"):x)
f=k!=null&&k.length!==0?k:h
x=j!=null&&j.length!==0?j:h
w=i==null?h:C.d.ai(i)
return new B.a3L(f,x,g,w==null?2:w,m)},
a3L:function a3L(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
aCC:function aCC(){},
v7(d,e,f){return B.bPO(d,e,f)},
bPO(d,e,f){var x=0,w=A.p(y.A),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h
var $async$v7=A.q(function(g,a0){if(g===1){t.push(a0)
x=u}for(;;)switch(x){case 0:m=A.ch()+"/game-tables/"+A.d3(2,e,C.a4,!1)+"/join-bot"
l=A.bR(m,0,null)
k=y.w
j=y.b
i=A.F(k,j)
if(d!=null&&d>0)J.eh(i,"count",d)
u=4
A.cN("POST",i,"game_tables/join_bot",m)
q=E.axS(f)
x=7
return A.e(G.hL(l,C.L.eB(i,null),q),$async$v7)
case 7:s=a0
q=s.b
p=s
p=A.aN(A.aM(p.e)).ad(0,p.w)
o=s.b>=200&&s.b<300
A.cM(p,"game_tables/join_bot",q,o,m)
if(s.b>=200&&s.b<300){q=s
r=C.L.bB(0,A.aN(A.aM(q.e)).ad(0,q.w),null)
if(y.y.b(r)){v=r
x=1
break}if(y.B.b(r)){k=A.ao(r,k,j)
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
return A.o($async$v7,w)},
IQ(d){var x,w,v=J.N(d),u=v.h(d,"turnExpiresAt")
if(u==null)u=v.h(d,"turn_expires_at")
x=u
if(x==null)return null
try{v=F.bzb(J.L(x)).amv()
return v}catch(w){return null}},
bwy(d){var x,w,v=B.IQ(d)
if(v!=null){x=Date.now()
return Math.max(0,C.d.fi(C.k.bk(v.ct(new A.c3(x,0,!1).amv()).a,1000)/1000))}w=d.h(0,"turnSecondsLeft")
if(w==null)w=d.h(0,"turn_seconds_left")
if(typeof w=="number"&&C.d.ai(w)>0)return C.d.ai(w)
return 0}},D,F,G
J=c[1]
A=c[0]
C=c[2]
E=c[38]
B=a.updateHolder(c[32],B)
D=c[148]
F=c[63]
G=c[65]
B.a3L.prototype={
gkV(){var x=this.d
return x>=2&&this.e>=x}}
var z=a.updateTypes([])
B.aCC.prototype={
$2(d,e){return d>e?d:e},
$S:94};(function inheritance(){var x=a.inherit
x(B.a3L,A.I)
x(B.aCC,A.es)})()
var y={x:A.a1("w<i>"),r:A.a1("w<r>"),i:A.a1("R<@>"),y:A.a1("ab<i,@>"),B:A.a1("ab<@,@>"),w:A.a1("i"),b:A.a1("@"),A:A.a1("ab<i,@>?")};(function constants(){D.cM=new A.d(1,0.13333333333333333,0.8274509803921568,0.9333333333333333,C.e)
D.qi=new A.d(1,0.7490196078431373,0.9686274509803922,1,C.e)
D.fn=new A.aT(12e6)
D.qJ=new A.aT(15e6)
D.t0=new A.aq(62764,"MaterialIcons",!1)
D.t2=new A.aq(983708,"MaterialIcons",!1)
D.Hh=new B.a3L(null,null,C.a7,2,0)})()};
(a=>{a["8WHZCTdCpl7xJma5FfUcEfGyEwE="]=a.current})($__dart_deferred_initializers__);