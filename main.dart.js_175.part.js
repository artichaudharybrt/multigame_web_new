((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,D,E,C,F,A={a8O:function a8O(d,e){var _=this
_.a=d
_.b=e
_.c=!1
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.CW=_.ch=_.ay=_.ax=_.at=_.x=_.w=_.r=_.e=_.d=null},aRt:function aRt(d){this.a=d},aRv:function aRv(d){this.a=d},aRu:function aRu(d){this.a=d},aRb:function aRb(d,e){this.a=d
this.b=e},aRd:function aRd(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},aRc:function aRc(d,e,f){this.a=d
this.b=e
this.c=f},aRe:function aRe(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},aRf:function aRf(d){this.a=d},aRg:function aRg(d){this.a=d},aRl:function aRl(d){this.a=d},aRm:function aRm(d){this.a=d},aRn:function aRn(d){this.a=d},aRo:function aRo(d){this.a=d},aRp:function aRp(d){this.a=d},aRq:function aRq(d){this.a=d},aRr:function aRr(d){this.a=d},aRs:function aRs(d){this.a=d},aRh:function aRh(d){this.a=d},aRi:function aRi(){},aRw:function aRw(d){this.a=d},aRj:function aRj(d,e){this.a=d
this.b=e},aRx:function aRx(d){this.a=d},aRk:function aRk(d,e){this.a=d
this.b=e},aRy:function aRy(d){this.a=d},
fh(d,e,f){var x=d==null?"":" | data: "+B.v(B.jb(d,0))
B.dR("[Game] source: "+f+" | "+e+x,"Game")},
mP(d,e,f){var x=d==null?"":" | data: "+B.v(B.jb(d,0))
B.dR("[Game] source: "+f+" | WARN: "+e+x,"Game")},
r9(d,e,f){var x=d==null?"":" | data: "+B.v(B.jb(d,0))
B.dR("[Game] source: "+f+" | ERROR: "+e+x,"Game.error")}},G,H
J=c[1]
B=c[0]
D=c[2]
E=c[99]
C=c[59]
F=c[39]
A=a.updateHolder(c[27],A)
G=c[158]
H=c[63]
A.a8O.prototype={
gij(){var x=this.a
x=D.c.bj(x,"/")?x:"/"+x
return H.CQ()+x},
tL(d){var x,w,v,u=F.cF()
if(u==null)u=""
x=$.aA
if(x==null)x=""
w=y.w
v=y.b
v=B.d0(B.aa(["userId",u,"user_id",u,"token",x],w,v),w,v)
v.k(0,"tableId",d)
v.k(0,"table_id",d)
return v},
m9(){var x,w,v,u,t,s,r=this,q=r.a
C.Co(q)
x=C.cu(q)
w=r.gij()
q="[Socket] game: "+q+" | url: "
B.dR(q+w+" | connecting...","Socket")
w=new A.aRt(r)
v=new A.aRv(r)
u=new A.aRu(r)
t=new A.aRb(r,x)
x.cA(0,"connect",w)
x.cA(0,"disconnect",v)
x.cA(0,"connect_error",u)
s=r.b
s.push(new A.aRe(x,w,v,u))
t.$3("getTable",new A.aRf(r),r.at)
t.$3("getPrivateTable",new A.aRg(r),r.at)
t.$3("joinRoom",new A.aRl(r),r.ax)
t.$3("startGame",new A.aRm(r),r.ay)
t.$3("getStep",new A.aRn(r),r.ch)
t.$3("move",new A.aRo(r),r.CW)
t.$3("packGame",new A.aRp(r),r.cx)
t.$3("myCard",new A.aRq(r),r.cy)
t.$3("getCard",new A.aRr(r),r.cy)
t.$3("getDropCard",new A.aRs(r),r.cy)
t.$3("dropCard",new A.aRh(r),r.cy)
t.$3("leaveTable",new A.aRi(),null)
t=new A.aRw(r)
x.cA(0,"roomTrigger",t)
s.push(new A.aRj(x,t))
t=new A.aRx(r)
x.cA(0,"ludo_timer",t)
x.cA(0,"turn_timer",t)
s.push(new A.aRk(x,t))
t=x.y
r.c=t
if(!t)x.m9()
else{w=r.gij()
B.dR(q+w+" | connected","Socket")
q=r.dy
if(q!=null)q.$1(!0)}},
Hv(d){return this.bbD(d)},
bbC(){return this.Hv(E.zr)},
bbD(d){var x=0,w=B.p(y.e),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k
var $async$Hv=B.q(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:m=r.a
l=C.cu(m)
if(l.y){r.c=!0
A.fh(null,"waitUntilConnected: already connected","table_socket/"+m)
v=!0
x=1
break}m="table_socket/"+m
A.fh(null,"waitUntilConnected: waiting up to "+D.k.bk(d.a,1e6)+"s",m)
if(!l.y)l.m9()
q=new B.bh(new B.aP($.aF,y.E),y.D)
p=new A.aRy(q)
J.aou(l,"connect",p)
u=4
x=7
return B.e(q.a.jI(0,d),$async$Hv)
case 7:r.c=!0
A.fh(null,"waitUntilConnected: ok",m)
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
A.mP(B.aa(["error",r.d],y.w,y.v),"waitUntilConnected: timeout connected="+n,m)
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
l.cY("connect",p)
x=s.pop()
break
case 6:case 1:return B.n(v,w)
case 2:return B.m(t.at(-1),w)}})
return B.o($async$Hv,w)},
l(){var x,w,v
A.fh(null,"dispose listeners","table_socket/"+this.a)
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,B.a0)(x),++v)x[v].$0()
D.b.am(x)},
Z2(d){var x=this.tL(d),w=this.a,v=this.gij(),u=B.v(B.jb(x,0))
B.dR("[Socket] game: "+w+" | url: "+v+" | emit: joinRoom | data: "+u,"Socket")
C.cu(w).dI("joinRoom",x)},
air(d){var x=this.tL(d),w=this.a,v=this.gij(),u=B.v(B.jb(x,0))
B.dR("[Socket] game: "+w+" | url: "+v+" | emit: startGame | data: "+u,"Socket")
C.cu(w).dI("startGame",x)},
aio(d){var x=this.tL(d),w=this.a,v=this.gij(),u=B.v(B.jb(x,0))
B.dR("[Socket] game: "+w+" | url: "+v+" | emit: getStep | data: "+u,"Socket")
C.cu(w).dI("getStep",x)},
aiq(d){var x=this.tL(d),w=this.a,v=this.gij(),u=B.v(B.jb(x,0))
B.dR("[Socket] game: "+w+" | url: "+v+" | emit: myCard | data: "+u,"Socket")
C.cu(w).dI("myCard",x)},
aim(d){var x=this.tL(d),w=this.a,v=this.gij(),u=B.v(B.jb(x,0))
B.dR("[Socket] game: "+w+" | url: "+v+" | emit: getCard | data: "+u,"Socket")
C.cu(w).dI("getCard",x)},
aip(d){var x=this.tL(d),w=this.a,v=this.gij(),u=B.v(B.jb(x,0))
B.dR("[Socket] game: "+w+" | url: "+v+" | emit: leaveTable | data: "+u,"Socket")
C.cu(w).dI("leaveTable",x)}}
var z=a.updateTypes([])
A.aRt.prototype={
$1(d){var x,w=this.a
w.c=!0
w.d=null
x=w.gij()
B.dR("[Socket] game: "+w.a+" | url: "+x+" | connected","Socket")
w=w.dy
if(w!=null)w.$1(!0)},
$S:4}
A.aRv.prototype={
$1(d){var x,w=this.a
w.c=!1
x=w.gij()
B.dR("[Socket] game: "+w.a+" | url: "+x+" | disconnected","Socket")
w=w.dy
if(w!=null)w.$1(!1)},
$S:4}
A.aRu.prototype={
$1(d){var x,w,v=this.a
v.c=!1
x=d==null?null:J.L(d)
if(x==null)x="Socket connect failed"
v.d=x
w=v.gij()
B.dR("[Socket] game: "+v.a+" | url: "+w+" | error: "+x,"Socket.error")
w=v.fr
if(w!=null)w.$1(x)
v=v.dy
if(v!=null)v.$1(!1)},
$S:4}
A.aRb.prototype={
$3(d,e,f){var x=this.a,w=new A.aRd(x,d,e,f),v=this.b
v.cA(0,d,w)
x.b.push(new A.aRc(v,d,w))},
$S:686}
A.aRd.prototype={
$1(d){var x,w,v,u,t,s,r,q,p,o=this,n=null
if(y.y.b(d))x=d
else x=y.B.b(d)?B.ao(d,y.w,y.b):n
w=o.a
v=w.gij()
u=o.b
t=x==null
s=t?d:x
r="[Socket] game: "+w.a+" | url: "
s=B.v(B.jb(s,0))
B.dR(r+v+" | event: "+u+" | data: "+s,"Socket")
o.c.$1(x)
q=t?n:J.B(x,"code")
if(typeof q=="number"&&q>=400){if(t)p=n
else{v=J.B(x,"message")
v=v==null?n:J.L(v)
p=v}if(p==null)p="Request failed"
w.d=p
v=w.gij()
B.dR(r+v+" | error: "+(u+" \u2192 "+p),"Socket.error")
w=w.fr
if(w!=null)w.$1(p)}w=o.d
if(w!=null)w.$1(x)},
$S:4}
A.aRc.prototype={
$0(){return this.a.cY(this.b,this.c)},
$S:0}
A.aRe.prototype={
$0(){var x=this,w=x.a
w.cY("connect",x.b)
w.cY("disconnect",x.c)
w.cY("connect_error",x.d)},
$S:0}
A.aRf.prototype={
$1(d){return this.a.e=d},
$S:17}
A.aRg.prototype={
$1(d){return this.a.e=d},
$S:17}
A.aRl.prototype={
$1(d){return d},
$S:17}
A.aRm.prototype={
$1(d){return this.a.r=d},
$S:17}
A.aRn.prototype={
$1(d){return this.a.w=d},
$S:17}
A.aRo.prototype={
$1(d){return this.a.x=d},
$S:17}
A.aRp.prototype={
$1(d){return d},
$S:17}
A.aRq.prototype={
$1(d){return d},
$S:17}
A.aRr.prototype={
$1(d){return d},
$S:17}
A.aRs.prototype={
$1(d){return d},
$S:17}
A.aRh.prototype={
$1(d){return d},
$S:17}
A.aRi.prototype={
$1(d){},
$S:17}
A.aRw.prototype={
$1(d){var x=this.a,w=x.gij(),v=B.v(B.jb(d,0))
B.dR("[Socket] game: "+x.a+" | url: "+w+" | event: roomTrigger | data: "+v,"Socket")
x=x.db
if(x!=null)x.$1(d)},
$S:4}
A.aRj.prototype={
$0(){return this.a.cY("roomTrigger",this.b)},
$S:0}
A.aRx.prototype={
$1(d){var x,w,v,u,t=typeof d=="number"?d:B.dj(B.v(d))
if(t==null||!isFinite(t))return
x=D.k.R(D.d.fi(t),0,999)
w=this.a
v=w.gij()
u=B.v(B.jb(x,0))
B.dR("[Socket] game: "+w.a+" | url: "+v+" | event: turn_timer | data: "+u,"Socket")
w=w.dx
if(w!=null)w.$1(x)},
$S:4}
A.aRk.prototype={
$0(){var x=this.a,w=this.b
x.cY("ludo_timer",w)
x.cY("turn_timer",w)},
$S:0}
A.aRy.prototype={
$1(d){var x=this.a
if((x.a.a&30)===0)x.eO(0)},
$S:4};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(A.a8O,B.I)
w(B.d8,[A.aRt,A.aRv,A.aRu,A.aRb,A.aRd,A.aRf,A.aRg,A.aRl,A.aRm,A.aRn,A.aRo,A.aRp,A.aRq,A.aRr,A.aRs,A.aRh,A.aRi,A.aRw,A.aRx,A.aRy])
w(B.er,[A.aRc,A.aRe,A.aRj,A.aRk])})()
var y={y:B.a1("ab<i,@>"),B:B.a1("ab<@,@>"),w:B.a1("i"),D:B.a1("bh<~>"),E:B.a1("aP<~>"),e:B.a1("K"),b:B.a1("@"),v:B.a1("i?")};(function constants(){G.Hy=new B.jm(D.r,28)})()};
(a=>{a["MRKTrPf104Kb4e2jvHuRrYKcnt4="]=a.current})($__dart_deferred_initializers__);