((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,D,C,F,A={a9n:function a9n(d,e){var _=this
_.a=d
_.b=e
_.c=!1
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.CW=_.ch=_.ay=_.ax=_.at=_.x=_.w=_.r=_.e=_.d=null},aSt:function aSt(d){this.a=d},aSv:function aSv(d){this.a=d},aSu:function aSu(d){this.a=d},aSb:function aSb(d,e){this.a=d
this.b=e},aSd:function aSd(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},aSc:function aSc(d,e,f){this.a=d
this.b=e
this.c=f},aSe:function aSe(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},aSf:function aSf(d){this.a=d},aSg:function aSg(d){this.a=d},aSl:function aSl(d){this.a=d},aSm:function aSm(d){this.a=d},aSn:function aSn(d){this.a=d},aSo:function aSo(d){this.a=d},aSp:function aSp(d){this.a=d},aSq:function aSq(d){this.a=d},aSr:function aSr(d){this.a=d},aSs:function aSs(d){this.a=d},aSh:function aSh(d){this.a=d},aSi:function aSi(){},aSw:function aSw(d){this.a=d},aSj:function aSj(d,e){this.a=d
this.b=e},aSx:function aSx(d){this.a=d},aSk:function aSk(d,e){this.a=d
this.b=e},aSy:function aSy(d){this.a=d},
fo(d,e,f){var x=d==null?"":" | data: "+B.v(B.jh(d,0))
B.dd("[Game] source: "+f+" | "+e+x,"Game")},
mR(d,e,f){var x=d==null?"":" | data: "+B.v(B.jh(d,0))
B.dd("[Game] source: "+f+" | WARN: "+e+x,"Game")},
rj(d,e,f){var x=d==null?"":" | data: "+B.v(B.jh(d,0))
B.dd("[Game] source: "+f+" | ERROR: "+e+x,"Game.error")}},G,E
J=c[1]
B=c[0]
D=c[2]
C=c[62]
F=c[106]
A=a.updateHolder(c[29],A)
G=c[176]
E=c[66]
A.a9n.prototype={
giq(){var x=this.a
x=D.c.bh(x,"/")?x:"/"+x
return E.CX()+x},
tT(d){var x,w,v,u=E.cv()
if(u==null)u=""
x=$.aA
if(x==null)x=""
w=y.w
v=y.b
v=B.d8(B.aa(["userId",u,"user_id",u,"token",x],w,v),w,v)
v.k(0,"tableId",d)
v.k(0,"table_id",d)
return v},
mf(){var x,w,v,u,t,s,r=this,q=r.a
C.Cw(q)
x=C.cw(q)
w=r.giq()
q="[Socket] game: "+q+" | url: "
B.dd(q+w+" | connecting...","Socket")
w=new A.aSt(r)
v=new A.aSv(r)
u=new A.aSu(r)
t=new A.aSb(r,x)
x.cG(0,"connect",w)
x.cG(0,"disconnect",v)
x.cG(0,"connect_error",u)
s=r.b
s.push(new A.aSe(x,w,v,u))
t.$3("getTable",new A.aSf(r),r.at)
t.$3("getPrivateTable",new A.aSg(r),r.at)
t.$3("joinRoom",new A.aSl(r),r.ax)
t.$3("startGame",new A.aSm(r),r.ay)
t.$3("getStep",new A.aSn(r),r.ch)
t.$3("move",new A.aSo(r),r.CW)
t.$3("packGame",new A.aSp(r),r.cx)
t.$3("myCard",new A.aSq(r),r.cy)
t.$3("getCard",new A.aSr(r),r.cy)
t.$3("getDropCard",new A.aSs(r),r.cy)
t.$3("dropCard",new A.aSh(r),r.cy)
t.$3("leaveTable",new A.aSi(),null)
t=new A.aSw(r)
x.cG(0,"roomTrigger",t)
s.push(new A.aSj(x,t))
t=new A.aSx(r)
x.cG(0,"ludo_timer",t)
x.cG(0,"turn_timer",t)
s.push(new A.aSk(x,t))
t=x.y
r.c=t
if(!t)x.mf()
else{w=r.giq()
B.dd(q+w+" | connected","Socket")
q=r.dy
if(q!=null)q.$1(!0)}},
HR(d){return this.bdd(d)},
bdc(){return this.HR(F.A2)},
bdd(d){var x=0,w=B.p(y.e),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k
var $async$HR=B.q(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:m=r.a
l=C.cw(m)
if(l.y){r.c=!0
A.fo(null,"waitUntilConnected: already connected","table_socket/"+m)
v=!0
x=1
break}m="table_socket/"+m
A.fo(null,"waitUntilConnected: waiting up to "+D.k.bj(d.a,1e6)+"s",m)
if(!l.y)l.mf()
q=new B.bh(new B.aO($.aF,y.E),y.D)
p=new A.aSy(q)
J.apd(l,"connect",p)
u=4
x=7
return B.e(q.a.j9(0,d),$async$HR)
case 7:r.c=!0
A.fo(null,"waitUntilConnected: ok",m)
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
A.mR(B.aa(["error",r.d],y.w,y.v),"waitUntilConnected: timeout connected="+n,m)
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
return B.o($async$HR,w)},
l(){var x,w,v
A.fo(null,"dispose listeners","table_socket/"+this.a)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,B.X)(x),++v)x[v].$0()
D.b.am(x)},
Zw(d){var x=this.tT(d),w=this.a,v=this.giq(),u=B.v(B.jh(x,0))
B.dd("[Socket] game: "+w+" | url: "+v+" | emit: joinRoom | data: "+u,"Socket")
C.cw(w).dL("joinRoom",x)},
aj1(d){var x=this.tT(d),w=this.a,v=this.giq(),u=B.v(B.jh(x,0))
B.dd("[Socket] game: "+w+" | url: "+v+" | emit: startGame | data: "+u,"Socket")
C.cw(w).dL("startGame",x)},
aiZ(d){var x=this.tT(d),w=this.a,v=this.giq(),u=B.v(B.jh(x,0))
B.dd("[Socket] game: "+w+" | url: "+v+" | emit: getStep | data: "+u,"Socket")
C.cw(w).dL("getStep",x)},
aj0(d){var x=this.tT(d),w=this.a,v=this.giq(),u=B.v(B.jh(x,0))
B.dd("[Socket] game: "+w+" | url: "+v+" | emit: myCard | data: "+u,"Socket")
C.cw(w).dL("myCard",x)},
aiY(d){var x=this.tT(d),w=this.a,v=this.giq(),u=B.v(B.jh(x,0))
B.dd("[Socket] game: "+w+" | url: "+v+" | emit: getCard | data: "+u,"Socket")
C.cw(w).dL("getCard",x)},
aj_(d){var x=this.tT(d),w=this.a,v=this.giq(),u=B.v(B.jh(x,0))
B.dd("[Socket] game: "+w+" | url: "+v+" | emit: leaveTable | data: "+u,"Socket")
C.cw(w).dL("leaveTable",x)}}
var z=a.updateTypes([])
A.aSt.prototype={
$1(d){var x,w=this.a
w.c=!0
w.d=null
x=w.giq()
B.dd("[Socket] game: "+w.a+" | url: "+x+" | connected","Socket")
w=w.dy
if(w!=null)w.$1(!0)},
$S:4}
A.aSv.prototype={
$1(d){var x,w=this.a
w.c=!1
x=w.giq()
B.dd("[Socket] game: "+w.a+" | url: "+x+" | disconnected","Socket")
w=w.dy
if(w!=null)w.$1(!1)},
$S:4}
A.aSu.prototype={
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
A.aSb.prototype={
$3(d,e,f){var x=this.a,w=new A.aSd(x,d,e,f),v=this.b
v.cG(0,d,w)
x.b.push(new A.aSc(v,d,w))},
$S:691}
A.aSd.prototype={
$1(d){var x,w,v,u,t,s,r,q,p,o=this,n=null
if(y.y.b(d))x=d
else x=y.B.b(d)?B.an(d,y.w,y.b):n
w=o.a
v=w.giq()
u=o.b
t=x==null
s=t?d:x
r="[Socket] game: "+w.a+" | url: "
s=B.v(B.jh(s,0))
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
A.aSc.prototype={
$0(){return this.a.d0(this.b,this.c)},
$S:0}
A.aSe.prototype={
$0(){var x=this,w=x.a
w.d0("connect",x.b)
w.d0("disconnect",x.c)
w.d0("connect_error",x.d)},
$S:0}
A.aSf.prototype={
$1(d){return this.a.e=d},
$S:17}
A.aSg.prototype={
$1(d){return this.a.e=d},
$S:17}
A.aSl.prototype={
$1(d){return d},
$S:17}
A.aSm.prototype={
$1(d){return this.a.r=d},
$S:17}
A.aSn.prototype={
$1(d){return this.a.w=d},
$S:17}
A.aSo.prototype={
$1(d){return this.a.x=d},
$S:17}
A.aSp.prototype={
$1(d){return d},
$S:17}
A.aSq.prototype={
$1(d){return d},
$S:17}
A.aSr.prototype={
$1(d){return d},
$S:17}
A.aSs.prototype={
$1(d){return d},
$S:17}
A.aSh.prototype={
$1(d){return d},
$S:17}
A.aSi.prototype={
$1(d){},
$S:17}
A.aSw.prototype={
$1(d){var x=this.a,w=x.giq(),v=B.v(B.jh(d,0))
B.dd("[Socket] game: "+x.a+" | url: "+w+" | event: roomTrigger | data: "+v,"Socket")
x=x.db
if(x!=null)x.$1(d)},
$S:4}
A.aSj.prototype={
$0(){return this.a.d0("roomTrigger",this.b)},
$S:0}
A.aSx.prototype={
$1(d){var x,w,v,u,t=typeof d=="number"?d:B.dn(B.v(d))
if(t==null||!isFinite(t))return
x=D.k.S(D.d.ft(t),0,999)
w=this.a
v=w.giq()
u=B.v(B.jh(x,0))
B.dd("[Socket] game: "+w.a+" | url: "+v+" | event: turn_timer | data: "+u,"Socket")
w=w.dx
if(w!=null)w.$1(x)},
$S:4}
A.aSk.prototype={
$0(){var x=this.a,w=this.b
x.d0("ludo_timer",w)
x.d0("turn_timer",w)},
$S:0}
A.aSy.prototype={
$1(d){var x=this.a
if((x.a.a&30)===0)x.eR(0)},
$S:4};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(A.a9n,B.I)
w(B.cZ,[A.aSt,A.aSv,A.aSu,A.aSb,A.aSd,A.aSf,A.aSg,A.aSl,A.aSm,A.aSn,A.aSo,A.aSp,A.aSq,A.aSr,A.aSs,A.aSh,A.aSi,A.aSw,A.aSx,A.aSy])
w(B.ec,[A.aSc,A.aSe,A.aSj,A.aSk])})()
var y={y:B.a0("ab<h,@>"),B:B.a0("ab<@,@>"),w:B.a0("h"),D:B.a0("bh<~>"),E:B.a0("aO<~>"),e:B.a0("L"),b:B.a0("@"),v:B.a0("h?")};(function constants(){G.Ie=new B.jq(D.r,28)})()};
(a=>{a["d5Vzhfq8VeeF7+OF8AecFrgQppE="]=a.current})($__dart_deferred_initializers__);