((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,G,B={
bFq(d){var x="application/json",w=y.N
w=A.F(w,w)
w.k(0,"Content-Type",x)
w.k(0,"Accept",x)
if(d.length!==0)w.k(0,"Authorization","Bearer "+d)
w.k(0,"ngrok-skip-browser-warning","true")
return w},
QN(d,e,f){return B.bX4(d,e,f)},
bX4(d,e,f){var x=0,w=A.p(y.h),v,u=2,t=[],s,r,q
var $async$QN=A.q(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:x=f.length!==0?3:4
break
case 3:u=6
s=A.d6(2,d,C.a5,!1)
x=9
return A.e(B.jw(A.aa(["user_id",f],y.N,y.z),"/game-tables/"+s+"/my-card","teen_patti/my_card",e),$async$QN)
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
case 8:case 4:v=B.B2("/game-tables/"+A.d6(2,d,C.a5,!1)+"/my-card","teen_patti/my_card",e)
x=1
break
case 1:return A.n(v,w)
case 2:return A.m(t.at(-1),w)}})
return A.o($async$QN,w)},
B3(d,e,f){var x=0,w=A.p(y.h),v,u,t
var $async$B3=A.q(function(g,h){if(g===1)return A.m(h,w)
for(;;)switch(x){case 0:x=3
return A.e(B.B2("/game-tables/"+A.d6(2,e,C.a5,!1),d,f),$async$B3)
case 3:t=h
if(t==null){v=null
x=1
break}u=B.ZA(t)
v=u==null?t:u
x=1
break
case 1:return A.n(v,w)}})
return A.o($async$B3,w)},
nC(d,e,f,g){var x=0,w=A.p(y.h),v,u
var $async$nC=A.q(function(h,i){if(h===1)return A.m(i,w)
for(;;)switch(x){case 0:u=g==null?null:C.c.P(g)
if(u==null)u=""
v=B.B2(u.length===0?"/game-tables/"+A.d6(2,e,C.a5,!1)+"/game-state":"/game-tables/"+A.d6(2,e,C.a5,!1)+"/game-state?user_id="+A.d6(1,u,C.a5,!0),d,f)
x=1
break
case 1:return A.n(v,w)}})
return A.o($async$nC,w)},
oV(d,e,f,g){var x=0,w=A.p(y.P),v,u
var $async$oV=A.q(function(h,i){if(h===1)return A.m(i,w)
for(;;)switch(x){case 0:u=A.d6(2,e,C.a5,!1)
v=B.jw(A.aa(["user_id",g,"token",f],y.N,y.z),"/game-tables/"+u+"/start-game",d,f)
x=1
break
case 1:return A.n(v,w)}})
return A.o($async$oV,w)},
a9l(d,e,f,g){var x=0,w=A.p(y.P),v,u
var $async$a9l=A.q(function(h,i){if(h===1)return A.m(i,w)
for(;;)switch(x){case 0:u=A.d6(2,e,C.a5,!1)
v=B.jw(A.aa(["user_id",g,"token",f],y.N,y.z),"/game-tables/"+u+"/leave-table",d,f)
x=1
break
case 1:return A.n(v,w)}})
return A.o($async$a9l,w)},
B2(d,e,f){var x=0,w=A.p(y.h),v,u,t,s,r,q,p,o,n,m
var $async$B2=A.q(function(g,h){if(g===1)return A.m(h,w)
for(;;)switch(x){case 0:n=A.ce()+d
m=A.bQ(n,0,null)
A.cL("GET",null,e,n)
x=3
return A.e(A.f2(m,B.bFq(f)),$async$B2)
case 3:u=h
t=u.b
s=t>=200&&t<300
r=u.e
q=A.aM(A.aL(r))
p=u.w
A.cz(q.af(0,p),e,t,s,n)
if(!s||A.aM(A.aL(r)).af(0,p).length===0||A.aM(A.aL(r)).af(0,p)==="null"){v=null
x=1
break}o=C.O.bB(0,A.aM(A.aL(r)).af(0,p),null)
v=y.P.b(o)?o:null
x=1
break
case 1:return A.n(v,w)}})
return A.o($async$B2,w)},
jw(d,e,f,g){var x=0,w=A.p(y.P),v,u,t,s,r,q,p,o,n,m
var $async$jw=A.q(function(h,i){if(h===1)return A.m(i,w)
for(;;)switch(x){case 0:n=A.ce()+e
m=A.bQ(n,0,null)
A.cL("POST",d,f,n)
u=B.bFq(g)
x=3
return A.e(F.hQ(m,C.O.eC(d,null),u),$async$jw)
case 3:t=i
u=t.b
s=u>=200&&u<300
r=t.e
q=A.aM(A.aL(r))
p=t.w
A.cz(q.af(0,p),f,u,s,n)
if(!s)throw A.j(B.bFp(B.bX3(t.gju(0)),u))
o=C.O.bB(0,A.aM(A.aL(r)).af(0,p),null)
if(y.P.b(o)){v=o
x=1
break}v=A.aa(["data",o],y.N,y.z)
x=1
break
case 1:return A.n(v,w)}})
return A.o($async$jw,w)},
bX3(d){var x,w,v
try{x=y.h.a(C.O.bB(0,d,null))
w=x
w=A.aQ(w==null?null:J.D(w,"message"))
if(w==null){w=x
w=A.aQ(w==null?null:J.D(w,"error"))}if(w==null)w=d
return w}catch(v){w=d.length!==0?d:"Request failed"
return w}},
bFp(d,e){return new B.io(d)},
io:function io(d){this.a=d},
oG:function oG(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aIl:function aIl(d){this.a=d},
aSA(d){var x=$.aoY()
if(J.f(x.a,d))return
x.sq(0,d)},
B4:function B4(d,e){this.c=d
this.a=e},
WT:function WT(){var _=this
_.e=_.d=null
_.r=_.f=!1
_.w=0
_.c=_.a=null},
blU:function blU(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
blS:function blS(){},
blT:function blT(){},
brU(d){var x,w,v,u,t,s,r,q="bootValue",p="playerIds",o="botPlayerIds",n="noOfPlayers",m=y.f
if(!m.b(d))return null
x=y.N
w=y.z
v=A.an(d,x,w)
u=v.h(0,"code")
if(typeof u=="number"&&u>=400)return null
t=v.h(0,"table_data")
if(y.j.b(t)){s=J.M(t)
s=s.gbd(t)&&m.b(s.gW(t))}else s=!1
if(s){r=A.an(m.a(J.fs(t)),x,w)
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
u=B.brU(v)
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
D=c[170]
H=c[158]
I=c[77]
F=c[68]
E=c[72]
B.io.prototype={
p(d){return this.a},
$ibT:1}
B.oG.prototype={
u(d){var x,w,v=this,u=null,t=v.c,s=y.p
t=A.a([new A.G(t,t,F.t2("assets/anim/playing_card.json",u,u,u,u,u,u,new B.aIl(v),u,E.aj,u,u,u,u,u,u,u,u,u,!0,u,u),u)],s)
x=v.d
if(x!=null){w=v.e
C.b.H(t,A.a([E.aV,A.k(x,u,u,u,u,u,w==null?E.hO:w,C.M,u)],s))}return F.P(t,E.j,C.i,E.v)}}
B.B4.prototype={
V(){return new B.WT()}}
B.WT.prototype={
a4(){var x=this
x.ag()
$.aoY().a9(0,x.gab7())
$.ur().Q4(0,x,x.gaQl(),x.gaSK())
x.o5(0)},
l(){var x,w=this
$.aoY().N(0,w.gab7())
B.aSA(!1)
$.ur().a.L(0,w)
x=w.e
if(x!=null)x.U(0)
w.Ey()
w.aa()},
aPe(){this.rQ()},
o5(d){var x=0,w=A.p(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$o5=A.q(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:s.f=!0
x=3
return A.e($.o6().lL(),$async$o5)
case 3:if(!f||!s.f||s.r){x=1
break}x=4
return A.e($.r7().bA(0),$async$o5)
case 4:q=s.d
if(q==null)q=s.d=A.JJ()
u=6
x=9
return A.e(q.pa(C.jk),$async$o5)
case 9:u=11
x=14
return A.e(s.d.C2(0.55),$async$o5)
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
return A.e(s.d.kl(0,new A.pq("audio/multi_sound.mp3",null),0),$async$o5)
case 15:s.r=!0
x=16
return A.e(s.rQ(),$async$o5)
case 16:u=2
x=8
break
case 6:u=5
n=t.pop()
r=A.a9(n)
s.r=!1
A.eW().$1("TableGameBackgroundMusic: failed to play audio/multi_sound.mp3: "+A.v(r))
x=8
break
case 5:x=2
break
case 8:case 1:return A.n(v,w)
case 2:return A.m(t.at(-1),w)}})
return A.o($async$o5,w)},
rQ(){var x=0,w=A.p(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$rQ=A.q(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(!s.f){x=1
break}r=s.d
if(r==null||!s.r){x=1
break}q=$.aoY()
x=q.a?3:4
break
case 3:x=5
return A.e(s.a7u(0,I.n_),$async$rQ)
case 5:if(!q.a||!s.f){x=1
break}u=7
x=10
return A.e(r.hw(0),$async$rQ)
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
x=r.z===C.jg?15:16
break
case 15:x=17
return A.e(r.hg(0),$async$rQ)
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
return A.e(s.a7u(0.32,H.r9),$async$rQ)
case 18:case 1:return A.n(v,w)
case 2:return A.m(t.at(-1),w)}})
return A.o($async$rQ,w)},
a7u(d,e){var x,w,v,u=this,t={},s=u.e
if(s!=null)s.U(0)
x=u.d
if(x==null)return A.dQ(null,y.H)
w=u.w
if(Math.abs(w-d)<0.015){u.w=d
return x.pb(d)}v=Math.max(1,C.k.bj(C.k.bj(e.a,1000),80))
s=new A.aP($.aF,y.D)
t.a=0
u.e=A.fy(D.a3t,new B.blU(t,u,v,w,d,x,new A.bh(s,y.Q)))
return s},
L9(){var x=0,w=A.p(y.H),v,u=2,t=[],s=this,r,q,p
var $async$L9=A.q(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(!s.f){x=1
break}r=s.e
if(r!=null)r.U(0)
u=4
r=s.d
r=r==null?null:r.hw(0)
x=7
return A.e(y.x.b(r)?r:A.e9(r,y.H),$async$L9)
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
return A.o($async$L9,w)},
Lv(){var x=0,w=A.p(y.H),v,u=this
var $async$Lv=A.q(function(d,e){if(d===1)return A.m(e,w)
for(;;)switch(x){case 0:if(!u.f||u.c==null){x=1
break}x=3
return A.e(u.o5(0),$async$Lv)
case 3:case 1:return A.n(v,w)}})
return A.o($async$Lv,w)},
Ey(){var x=0,w=A.p(y.H),v=1,u=[],t=this,s,r,q,p,o
var $async$Ey=A.q(function(d,e){if(d===1){u.push(e)
x=v}for(;;)switch(x){case 0:t.r=t.f=!1
s=t.e
if(s!=null)s.U(0)
v=3
s=t.d
s=s==null?null:s.bA(0)
r=y.H
q=y.x
x=6
return A.e(q.b(s)?s:A.e9(s,r),$async$Ey)
case 6:s=t.d
s=s==null?null:s.l()
x=7
return A.e(q.b(s)?s:A.e9(s,r),$async$Ey)
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
return A.o($async$Ey,w)},
u(d){return this.a.c}}
var z=a.updateTypes(["am<~>()","~()"])
B.aIl.prototype={
$3(d,e,f){return A.ag(D.tq,C.J,null,null,this.a.c*0.45)},
$S:20}
B.blU.prototype={
$1(d){var x=this,w=x.a,v=x.c,u=x.d
u+=(x.e-u)*C.d.S(++w.a/v,0,1)
x.b.w=u
x.f.pb(u).hh(new B.blS(),new B.blT(),y.a)
if(w.a>=v){d.U(0)
w=x.r
if((w.a.a&30)===0)w.eQ(0)}},
$S:14}
B.blS.prototype={
$1(d){},
$S:24}
B.blT.prototype={
$1(d){},
$S:11};(function installTearOffs(){var x=a._instance_0u
var w
x(w=B.WT.prototype,"gab7","aPe",1)
x(w,"gaQl","L9",0)
x(w,"gaSK","Lv",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.io,A.I)
x(B.oG,A.O)
w(A.cY,[B.aIl,B.blU,B.blS,B.blT])
x(B.B4,A.a3)
x(B.WT,A.a5)})()
A.da(b.typeUniverse,JSON.parse('{"io":{"bT":[]},"oG":{"O":[],"c":[]},"B4":{"a3":[],"c":[]},"WT":{"a5":["B4"]}}'))
var y=(function rtii(){var x=A.Y
return{x:x("am<~>"),p:x("w<c>"),j:x("T<@>"),P:x("ab<h,@>"),f:x("ab<@,@>"),a:x("bq"),N:x("h"),Q:x("bh<~>"),D:x("aP<~>"),z:x("@"),h:x("ab<h,@>?"),H:x("~")}})();(function constants(){D.wj=new A.cx(0,-0.15)
D.a3t=new A.aU(8e4)
D.rt=new A.A(16,8,16,0)
D.th=new A.ao(57527,"MaterialIcons",!1)
D.Bn=new A.ao(983469,"MaterialIcons",!1)
D.tq=new A.ao(983528,"MaterialIcons",!1)
D.un=new A.l(0,-4)
D.uV=new G.kZ("audio/lets_play.mp3")
D.uW=new G.kZ("sounds/card_discard.wav")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"c8G","aoY",()=>A.aa9(!1,A.Y("L")))})()};
(a=>{a["r0PRsKF7zf9/Is2PwbPJdFJ2YfY="]=a.current})($__dart_deferred_initializers__);