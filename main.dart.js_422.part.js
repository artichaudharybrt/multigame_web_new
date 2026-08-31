((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,E,A={a5P:function a5P(d,e){var _=this
_.a=d
_.b=e
_.c=!1
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.CW=_.ch=_.ay=_.ax=_.at=_.x=_.w=_.r=_.e=null},aMz:function aMz(d){this.a=d},aMB:function aMB(d){this.a=d},aMA:function aMA(d){this.a=d},aMh:function aMh(d,e){this.a=d
this.b=e},aMj:function aMj(d,e,f){this.a=d
this.b=e
this.c=f},aMi:function aMi(d,e,f){this.a=d
this.b=e
this.c=f},aMk:function aMk(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},aMl:function aMl(d){this.a=d},aMm:function aMm(d){this.a=d},aMr:function aMr(d){this.a=d},aMs:function aMs(d){this.a=d},aMt:function aMt(d){this.a=d},aMu:function aMu(d){this.a=d},aMv:function aMv(d){this.a=d},aMw:function aMw(d){this.a=d},aMx:function aMx(d){this.a=d},aMy:function aMy(d){this.a=d},aMn:function aMn(d){this.a=d},aMo:function aMo(){},aMC:function aMC(d){this.a=d},aMp:function aMp(d,e){this.a=d
this.b=e},aMD:function aMD(d){this.a=d},aMq:function aMq(d,e){this.a=d
this.b=e}},D,F
J=c[1]
B=c[0]
C=c[2]
E=c[92]
A=a.updateHolder(c[29],A)
D=c[301]
F=c[38]
A.a5P.prototype={
aK7(){var x,w=$.aX,v=w==null?null:C.d.ar(w.a)
if(v!=null&&v.length!==0)return v
x=$.aP
return F.bev(x==null?"":x)},
n0(d){var x,w,v,u=this.aK7()
if(u==null)u=""
x=$.aP
if(x==null)x=""
w=y.g
v=y.b
v=B.dl(B.ap(["userId",u,"user_id",u,"token",x],w,v),w,v)
v.p(0,"tableId",d)
v.p(0,"table_id",d)
return v},
r0(){var x,w=this,v=E.cT(w.a),u=new A.aMz(w),t=new A.aMB(w),s=new A.aMA(w),r=new A.aMh(w,v)
v.cz(0,"connect",u)
v.cz(0,"disconnect",t)
v.cz(0,"connect_error",s)
x=w.b
x.push(new A.aMk(v,u,t,s))
r.$3("getTable",new A.aMl(w),w.at)
r.$3("getPrivateTable",new A.aMm(w),w.at)
r.$3("joinRoom",new A.aMr(w),w.ax)
r.$3("startGame",new A.aMs(w),w.ay)
r.$3("getStep",new A.aMt(w),w.ch)
r.$3("move",new A.aMu(w),w.CW)
r.$3("packGame",new A.aMv(w),w.cx)
r.$3("myCard",new A.aMw(w),w.cy)
r.$3("getCard",new A.aMx(w),w.cy)
r.$3("getDropCard",new A.aMy(w),w.cy)
r.$3("dropCard",new A.aMn(w),w.cy)
r.$3("leaveTable",new A.aMo(),null)
r=new A.aMC(w)
v.cz(0,"roomTrigger",r)
x.push(new A.aMp(v,r))
r=new A.aMD(w)
v.cz(0,"ludo_timer",r)
v.cz(0,"turn_timer",r)
x.push(new A.aMq(v,r))
r=v.y
w.c=r
if(!r)v.r0()},
n(){var x,w,v
for(x=this.b,w=x.length,v=0;v<x.length;x.length===w||(0,B.W)(x),++v)x[v].$0()
C.b.af(x)}}
var z=a.updateTypes([])
A.aMz.prototype={
$1(d){var x=this.a
x.c=!0
x=x.dy
if(x!=null)x.$1(!0)},
$S:6}
A.aMB.prototype={
$1(d){var x=this.a
x.c=!1
x=x.dy
if(x!=null)x.$1(!1)},
$S:6}
A.aMA.prototype={
$1(d){var x,w,v=this.a
v.c=!1
x=d==null?null:J.ao(d)
if(x==null)x="Socket connect failed"
w=v.fr
if(w!=null)w.$1(x)
v=v.dy
if(v!=null)v.$1(!1)},
$S:6}
A.aMh.prototype={
$3(d,e,f){var x=this.a,w=new A.aMj(x,e,f),v=this.b
v.cz(0,d,w)
x.b.push(new A.aMi(v,d,w))},
$S:634}
A.aMj.prototype={
$1(d){var x,w,v,u,t=null
if(y.i.b(d))x=d
else x=y.l.b(d)?B.b9(d,y.g,y.b):t
this.b.$1(x)
w=x==null
v=w?t:J.S(x,"code")
if(typeof v=="number"&&v>=400){if(w)u=t
else{w=J.S(x,"message")
w=w==null?t:J.ao(w)
u=w}if(u==null)u="Request failed"
w=this.a.fr
if(w!=null)w.$1(u)}w=this.c
if(w!=null)w.$1(x)},
$S:6}
A.aMi.prototype={
$0(){return this.a.df(this.b,this.c)},
$S:0}
A.aMk.prototype={
$0(){var x=this,w=x.a
w.df("connect",x.b)
w.df("disconnect",x.c)
w.df("connect_error",x.d)},
$S:0}
A.aMl.prototype={
$1(d){return this.a.e=d},
$S:12}
A.aMm.prototype={
$1(d){return this.a.e=d},
$S:12}
A.aMr.prototype={
$1(d){return d},
$S:12}
A.aMs.prototype={
$1(d){return this.a.r=d},
$S:12}
A.aMt.prototype={
$1(d){return this.a.w=d},
$S:12}
A.aMu.prototype={
$1(d){return this.a.x=d},
$S:12}
A.aMv.prototype={
$1(d){return d},
$S:12}
A.aMw.prototype={
$1(d){return d},
$S:12}
A.aMx.prototype={
$1(d){return d},
$S:12}
A.aMy.prototype={
$1(d){return d},
$S:12}
A.aMn.prototype={
$1(d){return d},
$S:12}
A.aMo.prototype={
$1(d){},
$S:12}
A.aMC.prototype={
$1(d){var x=this.a.db
if(x!=null)x.$1(d)},
$S:6}
A.aMp.prototype={
$0(){return this.a.df("roomTrigger",this.b)},
$S:0}
A.aMD.prototype={
$1(d){var x,w,v=typeof d=="number"?d:B.eE(B.m(d))
if(v==null||!isFinite(v))return
x=C.l.W(C.c.hz(v),0,999)
w=this.a.dx
if(w!=null)w.$1(x)},
$S:6}
A.aMq.prototype={
$0(){var x=this.a,w=this.b
x.df("ludo_timer",w)
x.df("turn_timer",w)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(A.a5P,B.G)
w(B.bV,[A.aMz,A.aMB,A.aMA,A.aMh,A.aMj,A.aMl,A.aMm,A.aMr,A.aMs,A.aMt,A.aMu,A.aMv,A.aMw,A.aMx,A.aMy,A.aMn,A.aMo,A.aMC,A.aMD])
w(B.d6,[A.aMi,A.aMk,A.aMp,A.aMq])})()
var y={i:B.A("am<f,@>"),l:B.A("am<@,@>"),g:B.A("f"),b:B.A("@")};(function constants(){D.zd=new B.ax(63239,"MaterialIcons",!1)
D.FH=new B.jh(C.r,28)})()};
(a=>{a["ZFVU+Xnt62rGotavs5RR4kGZwt0="]=a.current})($__dart_deferred_initializers__);