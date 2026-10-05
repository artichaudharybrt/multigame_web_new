((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,G,B={
bDA(d){var x="application/json",w=y.N
w=A.F(w,w)
w.k(0,"Content-Type",x)
w.k(0,"Accept",x)
if(d.length!==0)w.k(0,"Authorization","Bearer "+d)
w.k(0,"ngrok-skip-browser-warning","true")
return w},
AY(d,e,f){var x=0,w=A.p(y.h),v,u,t
var $async$AY=A.q(function(g,h){if(g===1)return A.m(h,w)
for(;;)switch(x){case 0:x=3
return A.e(B.AX("/game-tables/"+A.d3(2,e,C.a4,!1),d,f),$async$AY)
case 3:t=h
if(t==null){v=null
x=1
break}u=B.Z5(t)
v=u==null?t:u
x=1
break
case 1:return A.n(v,w)}})
return A.o($async$AY,w)},
nw(d,e,f,g){var x=0,w=A.p(y.h),v,u
var $async$nw=A.q(function(h,i){if(h===1)return A.m(i,w)
for(;;)switch(x){case 0:u=g==null?null:C.c.S(g)
if(u==null)u=""
v=B.AX(u.length===0?"/game-tables/"+A.d3(2,e,C.a4,!1)+"/game-state":"/game-tables/"+A.d3(2,e,C.a4,!1)+"/game-state?user_id="+A.d3(1,u,C.a4,!0),d,f)
x=1
break
case 1:return A.n(v,w)}})
return A.o($async$nw,w)},
oL(d,e,f,g){var x=0,w=A.p(y.P),v,u
var $async$oL=A.q(function(h,i){if(h===1)return A.m(i,w)
for(;;)switch(x){case 0:u=A.d3(2,e,C.a4,!1)
v=B.jr(A.aa(["user_id",g,"token",f],y.N,y.z),"/game-tables/"+u+"/start-game",d,f)
x=1
break
case 1:return A.n(v,w)}})
return A.o($async$oL,w)},
a8L(d,e,f,g){var x=0,w=A.p(y.P),v,u
var $async$a8L=A.q(function(h,i){if(h===1)return A.m(i,w)
for(;;)switch(x){case 0:u=A.d3(2,e,C.a4,!1)
v=B.jr(A.aa(["user_id",g,"token",f],y.N,y.z),"/game-tables/"+u+"/leave-table",d,f)
x=1
break
case 1:return A.n(v,w)}})
return A.o($async$a8L,w)},
AX(d,e,f){var x=0,w=A.p(y.h),v,u,t,s,r,q,p,o,n,m
var $async$AX=A.q(function(g,h){if(g===1)return A.m(h,w)
for(;;)switch(x){case 0:n=A.ch()+d
m=A.bR(n,0,null)
A.cN("GET",null,e,n)
x=3
return A.e(A.f6(m,B.bDA(f)),$async$AX)
case 3:u=h
t=u.b
s=t>=200&&t<300
r=u.e
q=A.aN(A.aM(r))
p=u.w
A.cM(q.ad(0,p),e,t,s,n)
if(!s||A.aN(A.aM(r)).ad(0,p).length===0||A.aN(A.aM(r)).ad(0,p)==="null"){v=null
x=1
break}o=C.L.bB(0,A.aN(A.aM(r)).ad(0,p),null)
v=y.P.b(o)?o:null
x=1
break
case 1:return A.n(v,w)}})
return A.o($async$AX,w)},
jr(d,e,f,g){var x=0,w=A.p(y.P),v,u,t,s,r,q,p,o,n,m
var $async$jr=A.q(function(h,i){if(h===1)return A.m(i,w)
for(;;)switch(x){case 0:n=A.ch()+e
m=A.bR(n,0,null)
A.cN("POST",d,f,n)
u=B.bDA(g)
x=3
return A.e(F.hL(m,C.L.eB(d,null),u),$async$jr)
case 3:t=i
u=t.b
s=u>=200&&u<300
r=t.e
q=A.aN(A.aM(r))
p=t.w
A.cM(q.ad(0,p),f,u,s,n)
if(!s)throw A.j(B.bDz(B.bV7(t.gjn(0)),u))
o=C.L.bB(0,A.aN(A.aM(r)).ad(0,p),null)
if(y.P.b(o)){v=o
x=1
break}v=A.aa(["data",o],y.N,y.z)
x=1
break
case 1:return A.n(v,w)}})
return A.o($async$jr,w)},
bV7(d){var x,w,v
try{x=y.h.a(C.L.bB(0,d,null))
w=x
w=A.aR(w==null?null:J.B(w,"message"))
if(w==null){w=x
w=A.aR(w==null?null:J.B(w,"error"))}if(w==null)w=d
return w}catch(v){w=d.length!==0?d:"Request failed"
return w}},
bDz(d,e){return new B.ij(d)},
ij:function ij(d){this.a=d},
ox:function ox(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aHE:function aHE(d){this.a=d},
aRz(d){var x=$.aoc()
if(J.f(x.a,d))return
x.sq(0,d)},
AZ:function AZ(d,e){this.c=d
this.a=e},
Ws:function Ws(){var _=this
_.e=_.d=null
_.r=_.f=!1
_.w=0
_.c=_.a=null},
bkc:function bkc(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
bka:function bka(){},
bkb:function bkb(){},
bqa(d){var x,w,v,u,t,s,r,q="bootValue",p="playerIds",o="botPlayerIds",n="noOfPlayers",m=y.f
if(!m.b(d))return null
x=y.N
w=y.z
v=A.ao(d,x,w)
u=v.h(0,"code")
if(typeof u=="number"&&u>=400)return null
t=v.h(0,"table_data")
if(y.j.b(t)){s=J.N(t)
s=s.gbh(t)&&m.b(s.gW(t))}else s=!1
if(s){r=A.ao(m.a(J.fo(t)),x,w)
m=A.d0(r,x,w)
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
Z5(d){var x,w,v,u,t,s,r,q,p="active_game_id",o="currentGameId",n="status"
if(!y.f.b(d))return null
x=y.N
w=y.z
v=A.ao(d,x,w)
u=B.bqa(v)
t=u!=null?A.ao(u,x,w):A.ao(v,x,w)
for(x=["active_game_id","currentGameId","current_game_id","game_status","message"],s=0;s<5;++s){r=x[s]
if(v.h(0,r)!=null&&t.h(0,r)==null)t.k(0,r,v.h(0,r))}if(t.h(0,o)==null&&v.h(0,p)!=null)t.k(0,o,v.h(0,p))
q=v.h(0,"game_status")
x=!1
if(typeof q=="number")if(C.d.ai(q)===1)x=t.h(0,n)==null||J.f(t.h(0,n),"waiting")
if(x)t.k(0,n,"playing")
return t},
lc(d){var x,w,v,u,t,s
if(d==null)return null
x=C.c.S(d)
if(x.length===0)return null
w=x.toUpperCase()
v=w.length
if(v>=3){u=C.c.ac(w,0,2)
t=C.c.bV(w,2)
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
G=c[59]
B=a.updateHolder(c[33],B)
D=c[155]
H=c[145]
I=c[74]
F=c[65]
E=c[69]
B.ij.prototype={
p(d){return this.a},
$ibS:1}
B.ox.prototype={
u(d){var x,w,v=this,u=null,t=v.c,s=y.p
t=A.a([new A.G(t,t,F.rT("assets/anim/playing_card.json",u,u,u,u,u,u,new B.aHE(v),u,E.ah,u,u,u,u,u,u,u,u,u,!0,u,u),u)],s)
x=v.d
if(x!=null){w=v.e
C.b.K(t,A.a([E.aX,A.l(x,u,u,u,u,u,w==null?E.hD:w,C.K,u)],s))}return F.P(t,E.j,C.i,E.v)}}
B.AZ.prototype={
V(){return new B.Ws()}}
B.Ws.prototype={
a4(){var x=this
x.ag()
$.aoc().a8(0,x.gaaB())
$.uk().PK(0,x,x.gaPo(),x.gaRN())
x.o_(0)},
l(){var x,w=this
$.aoc().N(0,w.gaaB())
B.aRz(!1)
$.uk().a.L(0,w)
x=w.e
if(x!=null)x.U(0)
w.Ek()
w.a9()},
aOk(){this.rO()},
o_(d){var x=0,w=A.p(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$o_=A.q(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:s.f=!0
x=3
return A.e($.r0().mM(),$async$o_)
case 3:if(!f||!s.f||s.r){x=1
break}x=4
return A.e($.qZ().bA(0),$async$o_)
case 4:q=s.d
if(q==null)q=s.d=A.Jv()
u=6
x=9
return A.e(q.p5(C.ja),$async$o_)
case 9:u=11
x=14
return A.e(s.d.BT(0.55),$async$o_)
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
return A.e(s.d.kf(0,new A.pi("audio/multi_sound.mp3",null),0),$async$o_)
case 15:s.r=!0
x=16
return A.e(s.rO(),$async$o_)
case 16:u=2
x=8
break
case 6:u=5
n=t.pop()
r=A.a9(n)
s.r=!1
A.fJ().$1("TableGameBackgroundMusic: failed to play audio/multi_sound.mp3: "+A.v(r))
x=8
break
case 5:x=2
break
case 8:case 1:return A.n(v,w)
case 2:return A.m(t.at(-1),w)}})
return A.o($async$o_,w)},
rO(){var x=0,w=A.p(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$rO=A.q(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(!s.f){x=1
break}r=s.d
if(r==null||!s.r){x=1
break}q=$.aoc()
x=q.a?3:4
break
case 3:x=5
return A.e(s.a7_(0,I.mH),$async$rO)
case 5:if(!q.a||!s.f){x=1
break}u=7
x=10
return A.e(r.hp(0),$async$rO)
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
x=r.z===C.j6?15:16
break
case 15:x=17
return A.e(r.ha(0),$async$rO)
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
return A.e(s.a7_(0.32,H.zm),$async$rO)
case 18:case 1:return A.n(v,w)
case 2:return A.m(t.at(-1),w)}})
return A.o($async$rO,w)},
a7_(d,e){var x,w,v,u=this,t={},s=u.e
if(s!=null)s.U(0)
x=u.d
if(x==null)return A.dN(null,y.H)
w=u.w
if(Math.abs(w-d)<0.015){u.w=d
return x.p6(d)}v=Math.max(1,C.k.bk(C.k.bk(e.a,1000),80))
s=new A.aP($.aF,y.D)
t.a=0
u.e=A.fu(D.a1W,new B.bkc(t,u,v,w,d,x,new A.bh(s,y.Q)))
return s},
KO(){var x=0,w=A.p(y.H),v,u=2,t=[],s=this,r,q,p
var $async$KO=A.q(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(!s.f){x=1
break}r=s.e
if(r!=null)r.U(0)
u=4
r=s.d
r=r==null?null:r.hp(0)
x=7
return A.e(y.x.b(r)?r:A.e7(r,y.H),$async$KO)
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
return A.o($async$KO,w)},
La(){var x=0,w=A.p(y.H),v,u=this
var $async$La=A.q(function(d,e){if(d===1)return A.m(e,w)
for(;;)switch(x){case 0:if(!u.f||u.c==null){x=1
break}x=3
return A.e(u.o_(0),$async$La)
case 3:case 1:return A.n(v,w)}})
return A.o($async$La,w)},
Ek(){var x=0,w=A.p(y.H),v=1,u=[],t=this,s,r,q,p,o
var $async$Ek=A.q(function(d,e){if(d===1){u.push(e)
x=v}for(;;)switch(x){case 0:t.r=t.f=!1
s=t.e
if(s!=null)s.U(0)
v=3
s=t.d
s=s==null?null:s.bA(0)
r=y.H
q=y.x
x=6
return A.e(q.b(s)?s:A.e7(s,r),$async$Ek)
case 6:s=t.d
s=s==null?null:s.l()
x=7
return A.e(q.b(s)?s:A.e7(s,r),$async$Ek)
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
return A.o($async$Ek,w)},
u(d){return this.a.c}}
var z=a.updateTypes(["am<~>()","~()"])
B.aHE.prototype={
$3(d,e,f){return A.ai(D.t1,C.M,null,null,this.a.c*0.45)},
$S:20}
B.bkc.prototype={
$1(d){var x=this,w=x.a,v=x.c,u=x.d
u+=(x.e-u)*C.d.R(++w.a/v,0,1)
x.b.w=u
x.f.p6(u).hb(new B.bka(),new B.bkb(),y.a)
if(w.a>=v){d.U(0)
w=x.r
if((w.a.a&30)===0)w.eO(0)}},
$S:14}
B.bka.prototype={
$1(d){},
$S:23}
B.bkb.prototype={
$1(d){},
$S:11};(function installTearOffs(){var x=a._instance_0u
var w
x(w=B.Ws.prototype,"gaaB","aOk",1)
x(w,"gaPo","KO",0)
x(w,"gaRN","La",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.ij,A.I)
x(B.ox,A.O)
w(A.d8,[B.aHE,B.bkc,B.bka,B.bkb])
x(B.AZ,A.a2)
x(B.Ws,A.a5)})()
A.dp(b.typeUniverse,JSON.parse('{"ij":{"bS":[]},"ox":{"O":[],"c":[]},"AZ":{"a2":[],"c":[]},"Ws":{"a5":["AZ"]}}'))
var y=(function rtii(){var x=A.a1
return{x:x("am<~>"),p:x("w<c>"),j:x("R<@>"),P:x("ab<i,@>"),f:x("ab<@,@>"),a:x("bq"),N:x("i"),Q:x("bh<~>"),D:x("aP<~>"),z:x("@"),h:x("ab<i,@>?"),H:x("~")}})();(function constants(){D.vP=new A.cw(0,-0.15)
D.a1W=new A.aT(8e4)
D.r3=new A.A(16,8,16,0)
D.rU=new A.aq(57527,"MaterialIcons",!1)
D.AL=new A.aq(983469,"MaterialIcons",!1)
D.t1=new A.aq(983528,"MaterialIcons",!1)
D.tT=new A.k(0,-4)
D.up=new G.kT("audio/lets_play.mp3")
D.uq=new G.kT("sounds/card_discard.wav")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"c6C","aoc",()=>A.aTU(!1,A.a1("K")))})()};
(a=>{a["rG9Vuvp1v1Vw36/o0lPMkrnuTzU="]=a.current})($__dart_deferred_initializers__);