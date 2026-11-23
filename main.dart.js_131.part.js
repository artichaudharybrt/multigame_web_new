((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,G,B={
bFz(d){var x="application/json",w=y.N
w=A.F(w,w)
w.k(0,"Content-Type",x)
w.k(0,"Accept",x)
if(d.length!==0)w.k(0,"Authorization","Bearer "+d)
w.k(0,"ngrok-skip-browser-warning","true")
return w},
QM(d,e,f){return B.bXd(d,e,f)},
bXd(d,e,f){var x=0,w=A.p(y.h),v,u=2,t=[],s,r,q
var $async$QM=A.q(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:x=f.length!==0?3:4
break
case 3:u=6
s=A.d6(2,d,C.a6,!1)
x=9
return A.e(B.jw(A.aa(["user_id",f],y.N,y.z),"/game-tables/"+s+"/my-card","teen_patti/my_card",e),$async$QM)
case 9:s=h
v=s
x=1
break
u=2
x=8
break
case 6:u=5
q=t.pop()
x=8
break
case 5:x=2
break
case 8:case 4:v=B.B3("/game-tables/"+A.d6(2,d,C.a6,!1)+"/my-card","teen_patti/my_card",e)
x=1
break
case 1:return A.n(v,w)
case 2:return A.m(t.at(-1),w)}})
return A.o($async$QM,w)},
B4(d,e,f){var x=0,w=A.p(y.h),v,u,t
var $async$B4=A.q(function(g,h){if(g===1)return A.m(h,w)
for(;;)switch(x){case 0:x=3
return A.e(B.B3("/game-tables/"+A.d6(2,e,C.a6,!1),d,f),$async$B4)
case 3:t=h
if(t==null){v=null
x=1
break}u=B.ZA(t)
v=u==null?t:u
x=1
break
case 1:return A.n(v,w)}})
return A.o($async$B4,w)},
nD(d,e,f,g){var x=0,w=A.p(y.h),v,u
var $async$nD=A.q(function(h,i){if(h===1)return A.m(i,w)
for(;;)switch(x){case 0:u=g==null?null:C.c.P(g)
if(u==null)u=""
v=B.B3(u.length===0?"/game-tables/"+A.d6(2,e,C.a6,!1)+"/game-state":"/game-tables/"+A.d6(2,e,C.a6,!1)+"/game-state?user_id="+A.d6(1,u,C.a6,!0),d,f)
x=1
break
case 1:return A.n(v,w)}})
return A.o($async$nD,w)},
oV(d,e,f,g){var x=0,w=A.p(y.P),v,u
var $async$oV=A.q(function(h,i){if(h===1)return A.m(i,w)
for(;;)switch(x){case 0:u=A.d6(2,e,C.a6,!1)
v=B.jw(A.aa(["user_id",g,"token",f],y.N,y.z),"/game-tables/"+u+"/start-game",d,f)
x=1
break
case 1:return A.n(v,w)}})
return A.o($async$oV,w)},
a9l(d,e,f,g){var x=0,w=A.p(y.P),v,u
var $async$a9l=A.q(function(h,i){if(h===1)return A.m(i,w)
for(;;)switch(x){case 0:u=A.d6(2,e,C.a6,!1)
v=B.jw(A.aa(["user_id",g,"token",f],y.N,y.z),"/game-tables/"+u+"/leave-table",d,f)
x=1
break
case 1:return A.n(v,w)}})
return A.o($async$a9l,w)},
B3(d,e,f){var x=0,w=A.p(y.h),v,u,t,s,r,q,p,o,n,m
var $async$B3=A.q(function(g,h){if(g===1)return A.m(h,w)
for(;;)switch(x){case 0:n=A.cb()+d
m=A.bP(n,0,null)
A.cI("GET",null,e,n)
x=3
return A.e(A.f2(m,B.bFz(f)),$async$B3)
case 3:u=h
t=u.b
s=t>=200&&t<300
r=u.e
q=A.aK(A.aJ(r))
p=u.w
A.cy(q.af(0,p),e,t,s,n)
if(!s||A.aK(A.aJ(r)).af(0,p).length===0||A.aK(A.aJ(r)).af(0,p)==="null"){v=null
x=1
break}o=C.O.bz(0,A.aK(A.aJ(r)).af(0,p),null)
v=y.P.b(o)?o:null
x=1
break
case 1:return A.n(v,w)}})
return A.o($async$B3,w)},
jw(d,e,f,g){var x=0,w=A.p(y.P),v,u,t,s,r,q,p,o,n,m
var $async$jw=A.q(function(h,i){if(h===1)return A.m(i,w)
for(;;)switch(x){case 0:n=A.cb()+e
m=A.bP(n,0,null)
A.cI("POST",d,f,n)
u=B.bFz(g)
x=3
return A.e(F.hB(m,C.O.ew(d,null),u),$async$jw)
case 3:t=i
u=t.b
s=u>=200&&u<300
r=t.e
q=A.aK(A.aJ(r))
p=t.w
A.cy(q.af(0,p),f,u,s,n)
if(!s)throw A.j(B.bFy(B.bXc(t.giN(0)),u))
o=C.O.bz(0,A.aK(A.aJ(r)).af(0,p),null)
if(y.P.b(o)){v=o
x=1
break}v=A.aa(["data",o],y.N,y.z)
x=1
break
case 1:return A.n(v,w)}})
return A.o($async$jw,w)},
bXc(d){var x,w,v
try{x=y.h.a(C.O.bz(0,d,null))
w=x
w=A.aQ(w==null?null:J.C(w,"message"))
if(w==null){w=x
w=A.aQ(w==null?null:J.C(w,"error"))}if(w==null)w=d
return w}catch(v){w=d.length!==0?d:"Request failed"
return w}},
bFy(d,e){return new B.io(d)},
io:function io(d){this.a=d},
oI:function oI(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aIj:function aIj(d){this.a=d},
aSz(d){var x=$.aoY()
if(J.f(x.a,d))return
x.sq(0,d)},
B5:function B5(d,e){this.c=d
this.a=e},
WT:function WT(){var _=this
_.e=_.d=null
_.r=_.f=!1
_.w=0
_.c=_.a=null},
bm2:function bm2(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
bm0:function bm0(){},
bm1:function bm1(){},
bs3(d){var x,w,v,u,t,s,r,q="bootValue",p="playerIds",o="botPlayerIds",n="noOfPlayers",m=y.f
if(!m.b(d))return null
x=y.N
w=y.z
v=A.an(d,x,w)
u=v.h(0,"code")
if(typeof u=="number"&&u>=400)return null
t=v.h(0,"table_data")
if(y.j.b(t)){s=J.M(t)
s=s.gbc(t)&&m.b(s.gW(t))}else s=!1
if(s){r=A.an(m.a(J.fn(t)),x,w)
m=A.d8(r,x,w)
x=r.h(0,q)
m.k(0,q,x==null?r.h(0,"boot_value"):x)
x=r.h(0,p)
m.k(0,p,x==null?r.h(0,"player_ids"):x)
x=r.h(0,o)
m.k(0,o,x==null?r.h(0,"bot_player_ids"):x)
x=r.h(0,n)
m.k(0,n,x==null?r.h(0,"no_of_players"):x)
x=r.h(0,"status")
m.k(0,"status",x==null?"waiting":x)
m.k(0,"_fromAllocate",!0)
return m}return v},
ZA(d){var x,w,v,u,t,s,r,q,p="active_game_id",o="currentGameId",n="status"
if(!y.f.b(d))return null
x=y.N
w=y.z
v=A.an(d,x,w)
u=B.bs3(v)
t=u!=null?A.an(u,x,w):A.an(v,x,w)
for(x=["active_game_id","currentGameId","current_game_id","game_status","message"],s=0;s<5;++s){r=x[s]
if(v.h(0,r)!=null&&t.h(0,r)==null)t.k(0,r,v.h(0,r))}if(t.h(0,o)==null&&v.h(0,p)!=null)t.k(0,o,v.h(0,p))
q=v.h(0,"game_status")
x=!1
if(typeof q=="number")if(C.d.aj(q)===1)x=t.h(0,n)==null||J.f(t.h(0,n),"waiting")
if(x)t.k(0,n,"playing")
return t},
ka(d){var x,w,v,u,t,s
if(d==null)return null
x=C.c.P(d)
if(x.length===0)return null
w=x.toUpperCase()
v=w.length
if(v>=3){u=C.c.ae(w,0,2)
t=C.c.bS(w,2)
$label0$0:{if("BP"===u){s="S"
break $label0$0}if("RP"===u){s="H"
break $label0$0}if("BL"===u){s="C"
break $label0$0}if("RS"===u){s="D"
break $label0$0}s=null
break $label0$0}if(s!=null&&t.length!==0)return s+t}if(v>=2)if(C.c.t("HDCS",w[0]))return w
return x}},D,H,I,F,E
J=c[1]
A=c[0]
C=c[2]
G=c[62]
B=a.updateHolder(c[34],B)
D=c[172]
H=c[160]
I=c[78]
F=c[68]
E=c[72]
B.io.prototype={
p(d){return this.a},
$ibQ:1}
B.oI.prototype={
u(d){var x,w,v=this,u=null,t=v.c,s=y.p
t=A.a([new A.G(t,t,F.t3("assets/anim/playing_card.json",u,u,u,u,u,u,new B.aIj(v),u,E.aj,u,u,u,u,u,u,u,u,u,!0,u,u),u)],s)
x=v.d
if(x!=null){w=v.e
C.b.H(t,A.a([E.aY,A.l(x,u,u,u,u,u,w==null?E.hP:w,C.M,u)],s))}return F.P(t,E.j,C.i,E.v)}}
B.B5.prototype={
V(){return new B.WT()}}
B.WT.prototype={
a4(){var x=this
x.ag()
$.aoY().a9(0,x.gab7())
$.uq().Q8(0,x,x.gaQr(),x.gaSP())
x.o6(0)},
l(){var x,w=this
$.aoY().N(0,w.gab7())
B.aSz(!1)
$.uq().a.L(0,w)
x=w.e
if(x!=null)x.U(0)
w.EC()
w.aa()},
aPk(){this.rT()},
o6(d){var x=0,w=A.p(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$o6=A.q(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:s.f=!0
x=3
return A.e($.o8().lM(),$async$o6)
case 3:if(!f||!s.f||s.r){x=1
break}x=4
return A.e($.r9().bB(0),$async$o6)
case 4:q=s.d
if(q==null)q=s.d=A.JH()
u=6
x=9
return A.e(q.pb(C.jm),$async$o6)
case 9:u=11
x=14
return A.e(s.d.C3(0.55),$async$o6)
case 14:u=6
x=13
break
case 11:u=10
o=t.pop()
x=13
break
case 10:x=6
break
case 13:if(!s.f){x=1
break}s.w=0
x=15
return A.e(s.d.kl(0,new A.pq("audio/multi_sound.mp3",null),0),$async$o6)
case 15:s.r=!0
x=16
return A.e(s.rT(),$async$o6)
case 16:u=2
x=8
break
case 6:u=5
n=t.pop()
r=A.a9(n)
s.r=!1
A.eY().$1("TableGameBackgroundMusic: failed to play audio/multi_sound.mp3: "+A.v(r))
x=8
break
case 5:x=2
break
case 8:case 1:return A.n(v,w)
case 2:return A.m(t.at(-1),w)}})
return A.o($async$o6,w)},
rT(){var x=0,w=A.p(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$rT=A.q(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(!s.f){x=1
break}r=s.d
if(r==null||!s.r){x=1
break}q=$.aoY()
x=q.a?3:4
break
case 3:x=5
return A.e(s.a7u(0,I.n4),$async$rT)
case 5:if(!q.a||!s.f){x=1
break}u=7
x=10
return A.e(r.hA(0),$async$rT)
case 10:u=2
x=9
break
case 7:u=6
o=t.pop()
x=9
break
case 6:x=2
break
case 9:x=1
break
case 4:u=12
x=r.z===C.ji?15:16
break
case 15:x=17
return A.e(r.hi(0),$async$rT)
case 17:case 16:u=2
x=14
break
case 12:u=11
n=t.pop()
x=14
break
case 11:x=2
break
case 14:x=18
return A.e(s.a7u(0.32,H.re),$async$rT)
case 18:case 1:return A.n(v,w)
case 2:return A.m(t.at(-1),w)}})
return A.o($async$rT,w)},
a7u(d,e){var x,w,v,u=this,t={},s=u.e
if(s!=null)s.U(0)
x=u.d
if(x==null)return A.dQ(null,y.H)
w=u.w
if(Math.abs(w-d)<0.015){u.w=d
return x.pc(d)}v=Math.max(1,C.k.bj(C.k.bj(e.a,1000),80))
s=new A.aO($.aF,y.D)
t.a=0
u.e=A.fA(D.a3K,new B.bm2(t,u,v,w,d,x,new A.bh(s,y.Q)))
return s},
Lb(){var x=0,w=A.p(y.H),v,u=2,t=[],s=this,r,q,p
var $async$Lb=A.q(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(!s.f){x=1
break}r=s.e
if(r!=null)r.U(0)
u=4
r=s.d
r=r==null?null:r.hA(0)
x=7
return A.e(y.x.b(r)?r:A.e9(r,y.H),$async$Lb)
case 7:s.r=!1
u=2
x=6
break
case 4:u=3
p=t.pop()
x=6
break
case 3:x=2
break
case 6:case 1:return A.n(v,w)
case 2:return A.m(t.at(-1),w)}})
return A.o($async$Lb,w)},
Lx(){var x=0,w=A.p(y.H),v,u=this
var $async$Lx=A.q(function(d,e){if(d===1)return A.m(e,w)
for(;;)switch(x){case 0:if(!u.f||u.c==null){x=1
break}x=3
return A.e(u.o6(0),$async$Lx)
case 3:case 1:return A.n(v,w)}})
return A.o($async$Lx,w)},
EC(){var x=0,w=A.p(y.H),v=1,u=[],t=this,s,r,q,p,o
var $async$EC=A.q(function(d,e){if(d===1){u.push(e)
x=v}for(;;)switch(x){case 0:t.r=t.f=!1
s=t.e
if(s!=null)s.U(0)
v=3
s=t.d
s=s==null?null:s.bB(0)
r=y.H
q=y.x
x=6
return A.e(q.b(s)?s:A.e9(s,r),$async$EC)
case 6:s=t.d
s=s==null?null:s.l()
x=7
return A.e(q.b(s)?s:A.e9(s,r),$async$EC)
case 7:v=1
x=5
break
case 3:v=2
o=u.pop()
x=5
break
case 2:x=1
break
case 5:t.d=null
return A.n(null,w)
case 1:return A.m(u.at(-1),w)}})
return A.o($async$EC,w)},
u(d){return this.a.c}}
var z=a.updateTypes(["al<~>()","~()"])
B.aIj.prototype={
$3(d,e,f){return A.ah(D.ts,C.J,null,null,this.a.c*0.45)},
$S:20}
B.bm2.prototype={
$1(d){var x=this,w=x.a,v=x.c,u=x.d
u+=(x.e-u)*C.d.S(++w.a/v,0,1)
x.b.w=u
x.f.pc(u).hj(new B.bm0(),new B.bm1(),y.a)
if(w.a>=v){d.U(0)
w=x.r
if((w.a.a&30)===0)w.eR(0)}},
$S:14}
B.bm0.prototype={
$1(d){},
$S:24}
B.bm1.prototype={
$1(d){},
$S:11};(function installTearOffs(){var x=a._instance_0u
var w
x(w=B.WT.prototype,"gab7","aPk",1)
x(w,"gaQr","Lb",0)
x(w,"gaSP","Lx",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.io,A.I)
x(B.oI,A.O)
w(A.cZ,[B.aIj,B.bm2,B.bm0,B.bm1])
x(B.B5,A.a3)
x(B.WT,A.a5)})()
A.da(b.typeUniverse,JSON.parse('{"io":{"bQ":[]},"oI":{"O":[],"c":[]},"B5":{"a3":[],"c":[]},"WT":{"a5":["B5"]}}'))
var y=(function rtii(){var x=A.a0
return{x:x("al<~>"),p:x("w<c>"),j:x("T<@>"),P:x("ab<h,@>"),f:x("ab<@,@>"),a:x("bq"),N:x("h"),Q:x("bh<~>"),D:x("aO<~>"),z:x("@"),h:x("ab<h,@>?"),H:x("~")}})();(function constants(){D.wl=new A.cx(0,-0.15)
D.a3K=new A.aU(8e4)
D.rv=new A.A(16,8,16,0)
D.tj=new A.ao(57527,"MaterialIcons",!1)
D.Bs=new A.ao(983469,"MaterialIcons",!1)
D.ts=new A.ao(983528,"MaterialIcons",!1)
D.up=new A.k(0,-4)
D.uX=new G.kY("audio/lets_play.mp3")
D.uY=new G.kY("sounds/card_discard.wav")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"c8P","aoY",()=>A.aa9(!1,A.a0("L")))})()};
(a=>{a["XCw5zdsYbDR7NdntLtg5qZJRGLc="]=a.current})($__dart_deferred_initializers__);