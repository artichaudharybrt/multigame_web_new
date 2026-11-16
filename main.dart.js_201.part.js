((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,D,C,F,A={a9n:function a9n(d,e){var _=this
_.a=d
_.b=e
_.c=!1
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.CW=_.ch=_.ay=_.ax=_.at=_.x=_.w=_.r=_.e=_.d=null},aSv:function aSv(d){this.a=d},aSx:function aSx(d){this.a=d},aSw:function aSw(d){this.a=d},aSd:function aSd(d,e){this.a=d
this.b=e},aSf:function aSf(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},aSe:function aSe(d,e,f){this.a=d
this.b=e
this.c=f},aSg:function aSg(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},aSh:function aSh(d){this.a=d},aSi:function aSi(d){this.a=d},aSn:function aSn(d){this.a=d},aSo:function aSo(d){this.a=d},aSp:function aSp(d){this.a=d},aSq:function aSq(d){this.a=d},aSr:function aSr(d){this.a=d},aSs:function aSs(d){this.a=d},aSt:function aSt(d){this.a=d},aSu:function aSu(d){this.a=d},aSj:function aSj(d){this.a=d},aSk:function aSk(){},aSy:function aSy(d){this.a=d},aSl:function aSl(d,e){this.a=d
this.b=e},aSz:function aSz(d){this.a=d},aSm:function aSm(d,e){this.a=d
this.b=e},aSA:function aSA(d){this.a=d},
fp(d,e,f){var x=d==null?"":" | data: "+B.v(B.ji(d,0))
B.dd("[Game] source: "+f+" | "+e+x,"Game")},
mS(d,e,f){var x=d==null?"":" | data: "+B.v(B.ji(d,0))
B.dd("[Game] source: "+f+" | WARN: "+e+x,"Game")},
ri(d,e,f){var x=d==null?"":" | data: "+B.v(B.ji(d,0))
B.dd("[Game] source: "+f+" | ERROR: "+e+x,"Game.error")}},G,E
J=c[1]
B=c[0]
D=c[2]
C=c[62]
F=c[105]
A=a.updateHolder(c[29],A)
G=c[174]
E=c[66]
A.a9n.prototype={
giq(){var x=this.a
x=D.c.bh(x,"/")?x:"/"+x
return E.CX()+x},
tR(d){var x,w,v,u=E.cv()
if(u==null)u=""
x=$.aA
if(x==null)x=""
w=y.w
v=y.b
v=B.d8(B.aa(["userId",u,"user_id",u,"token",x],w,v),w,v)
v.k(0,"tableId",d)
v.k(0,"table_id",d)
return v},
me(){var x,w,v,u,t,s,r=this,q=r.a
C.Cw(q)
x=C.cw(q)
w=r.giq()
q="[Socket] game: "+q+" | url: "
B.dd(q+w+" | connecting...","Socket")
w=new A.aSv(r)
v=new A.aSx(r)
u=new A.aSw(r)
t=new A.aSd(r,x)
x.cG(0,"connect",w)
x.cG(0,"disconnect",v)
x.cG(0,"connect_error",u)
s=r.b
s.push(new A.aSg(x,w,v,u))
t.$3("getTable",new A.aSh(r),r.at)
t.$3("getPrivateTable",new A.aSi(r),r.at)
t.$3("joinRoom",new A.aSn(r),r.ax)
t.$3("startGame",new A.aSo(r),r.ay)
t.$3("getStep",new A.aSp(r),r.ch)
t.$3("move",new A.aSq(r),r.CW)
t.$3("packGame",new A.aSr(r),r.cx)
t.$3("myCard",new A.aSs(r),r.cy)
t.$3("getCard",new A.aSt(r),r.cy)
t.$3("getDropCard",new A.aSu(r),r.cy)
t.$3("dropCard",new A.aSj(r),r.cy)
t.$3("leaveTable",new A.aSk(),null)
t=new A.aSy(r)
x.cG(0,"roomTrigger",t)
s.push(new A.aSl(x,t))
t=new A.aSz(r)
x.cG(0,"ludo_timer",t)
x.cG(0,"turn_timer",t)
s.push(new A.aSm(x,t))
t=x.y
r.c=t
if(!t)x.me()
else{w=r.giq()
B.dd(q+w+" | connected","Socket")
q=r.dy
if(q!=null)q.$1(!0)}},
HN(d){return this.bd9(d)},
bd8(){return this.HN(F.A2)},
bd9(d){var x=0,w=B.p(y.e),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k
var $async$HN=B.q(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:m=r.a
l=C.cw(m)
if(l.y){r.c=!0
A.fp(null,"waitUntilConnected: already connected","table_socket/"+m)
v=!0
x=1
break}m="table_socket/"+m
A.fp(null,"waitUntilConnected: waiting up to "+D.k.bj(d.a,1e6)+"s",m)
if(!l.y)l.me()
q=new B.bh(new B.aP($.aF,y.E),y.D)
p=new A.aSA(q)
J.apd(l,"connect",p)
u=4
x=7
return B.e(q.a.j9(0,d),$async$HN)
case 7:r.c=!0
A.fp(null,"waitUntilConnected: ok",m)
v=!0
s=[1]
x=5
break
s.push(6)
x=5
break
case 4:u=3
k=t.pop()
n=l.y
r.c=n
A.mS(B.aa(["error",r.d],y.w,y.v),"waitUntilConnected: timeout connected="+n,m)
m=r.c
v=m
s=[1]
x=5
break
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
l.d0("connect",p)
x=s.pop()
break
case 6:case 1:return B.n(v,w)
case 2:return B.m(t.at(-1),w)}})
return B.o($async$HN,w)},
l(){var x,w,v
A.fp(null,"dispose listeners","table_socket/"+this.a)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,B.Y)(x),++v)x[v].$0()
D.b.al(x)},
Zx(d){var x=this.tR(d),w=this.a,v=this.giq(),u=B.v(B.ji(x,0))
B.dd("[Socket] game: "+w+" | url: "+v+" | emit: joinRoom | data: "+u,"Socket")
C.cw(w).dL("joinRoom",x)},
aj2(d){var x=this.tR(d),w=this.a,v=this.giq(),u=B.v(B.ji(x,0))
B.dd("[Socket] game: "+w+" | url: "+v+" | emit: startGame | data: "+u,"Socket")
C.cw(w).dL("startGame",x)},
aj_(d){var x=this.tR(d),w=this.a,v=this.giq(),u=B.v(B.ji(x,0))
B.dd("[Socket] game: "+w+" | url: "+v+" | emit: getStep | data: "+u,"Socket")
C.cw(w).dL("getStep",x)},
aj1(d){var x=this.tR(d),w=this.a,v=this.giq(),u=B.v(B.ji(x,0))
B.dd("[Socket] game: "+w+" | url: "+v+" | emit: myCard | data: "+u,"Socket")
C.cw(w).dL("myCard",x)},
aiZ(d){var x=this.tR(d),w=this.a,v=this.giq(),u=B.v(B.ji(x,0))
B.dd("[Socket] game: "+w+" | url: "+v+" | emit: getCard | data: "+u,"Socket")
C.cw(w).dL("getCard",x)},
aj0(d){var x=this.tR(d),w=this.a,v=this.giq(),u=B.v(B.ji(x,0))
B.dd("[Socket] game: "+w+" | url: "+v+" | emit: leaveTable | data: "+u,"Socket")
C.cw(w).dL("leaveTable",x)}}
var z=a.updateTypes([])
A.aSv.prototype={
$1(d){var x,w=this.a
w.c=!0
w.d=null
x=w.giq()
B.dd("[Socket] game: "+w.a+" | url: "+x+" | connected","Socket")
w=w.dy
if(w!=null)w.$1(!0)},
$S:4}
A.aSx.prototype={
$1(d){var x,w=this.a
w.c=!1
x=w.giq()
B.dd("[Socket] game: "+w.a+" | url: "+x+" | disconnected","Socket")
w=w.dy
if(w!=null)w.$1(!1)},
$S:4}
A.aSw.prototype={
$1(d){var x,w,v=this.a
v.c=!1
x=d==null?null:J.J(d)
if(x==null)x="Socket connect failed"
v.d=x
w=v.giq()
B.dd("[Socket] game: "+v.a+" | url: "+w+" | error: "+x,"Socket.error")
w=v.fr
if(w!=null)w.$1(x)
v=v.dy
if(v!=null)v.$1(!1)},
$S:4}
A.aSd.prototype={
$3(d,e,f){var x=this.a,w=new A.aSf(x,d,e,f),v=this.b
v.cG(0,d,w)
x.b.push(new A.aSe(v,d,w))},
$S:690}
A.aSf.prototype={
$1(d){var x,w,v,u,t,s,r,q,p,o=this,n=null
if(y.y.b(d))x=d
else x=y.B.b(d)?B.an(d,y.w,y.b):n
w=o.a
v=w.giq()
u=o.b
t=x==null
s=t?d:x
r="[Socket] game: "+w.a+" | url: "
s=B.v(B.ji(s,0))
B.dd(r+v+" | event: "+u+" | data: "+s,"Socket")
o.c.$1(x)
q=t?n:J.C(x,"code")
if(typeof q=="number"&&q>=400){if(t)p=n
else{v=J.C(x,"message")
v=v==null?n:J.J(v)
p=v}if(p==null)p="Request failed"
w.d=p
v=w.giq()
B.dd(r+v+" | error: "+(u+" \u2192 "+p),"Socket.error")
w=w.fr
if(w!=null)w.$1(p)}w=o.d
if(w!=null)w.$1(x)},
$S:4}
A.aSe.prototype={
$0(){return this.a.d0(this.b,this.c)},
$S:0}
A.aSg.prototype={
$0(){var x=this,w=x.a
w.d0("connect",x.b)
w.d0("disconnect",x.c)
w.d0("connect_error",x.d)},
$S:0}
A.aSh.prototype={
$1(d){return this.a.e=d},
$S:17}
A.aSi.prototype={
$1(d){return this.a.e=d},
$S:17}
A.aSn.prototype={
$1(d){return d},
$S:17}
A.aSo.prototype={
$1(d){return this.a.r=d},
$S:17}
A.aSp.prototype={
$1(d){return this.a.w=d},
$S:17}
A.aSq.prototype={
$1(d){return this.a.x=d},
$S:17}
A.aSr.prototype={
$1(d){return d},
$S:17}
A.aSs.prototype={
$1(d){return d},
$S:17}
A.aSt.prototype={
$1(d){return d},
$S:17}
A.aSu.prototype={
$1(d){return d},
$S:17}
A.aSj.prototype={
$1(d){return d},
$S:17}
A.aSk.prototype={
$1(d){},
$S:17}
A.aSy.prototype={
$1(d){var x=this.a,w=x.giq(),v=B.v(B.ji(d,0))
B.dd("[Socket] game: "+x.a+" | url: "+w+" | event: roomTrigger | data: "+v,"Socket")
x=x.db
if(x!=null)x.$1(d)},
$S:4}
A.aSl.prototype={
$0(){return this.a.d0("roomTrigger",this.b)},
$S:0}
A.aSz.prototype={
$1(d){var x,w,v,u,t=typeof d=="number"?d:B.dn(B.v(d))
if(t==null||!isFinite(t))return
x=D.k.S(D.d.ft(t),0,999)
w=this.a
v=w.giq()
u=B.v(B.ji(x,0))
B.dd("[Socket] game: "+w.a+" | url: "+v+" | event: turn_timer | data: "+u,"Socket")
w=w.dx
if(w!=null)w.$1(x)},
$S:4}
A.aSm.prototype={
$0(){var x=this.a,w=this.b
x.d0("ludo_timer",w)
x.d0("turn_timer",w)},
$S:0}
A.aSA.prototype={
$1(d){var x=this.a
if((x.a.a&30)===0)x.eR(0)},
$S:4};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(A.a9n,B.I)
w(B.cY,[A.aSv,A.aSx,A.aSw,A.aSd,A.aSf,A.aSh,A.aSi,A.aSn,A.aSo,A.aSp,A.aSq,A.aSr,A.aSs,A.aSt,A.aSu,A.aSj,A.aSk,A.aSy,A.aSz,A.aSA])
w(B.eb,[A.aSe,A.aSg,A.aSl,A.aSm])})()
var y={y:B.X("ab<h,@>"),B:B.X("ab<@,@>"),w:B.X("h"),D:B.X("bh<~>"),E:B.X("aP<~>"),e:B.X("L"),b:B.X("@"),v:B.X("h?")};(function constants(){G.Ie=new B.j6(D.r,28)})()};
(a=>{a["7OcTdk3NBbexBPziEXqTbmuhxRQ="]=a.current})($__dart_deferred_initializers__);