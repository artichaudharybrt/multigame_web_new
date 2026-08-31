((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,D,N,O,H,I,P,Q,F,E,R,K,L,B={
bnW(d,e,f,g,h,i,j,k,l,m,n){return new B.JI(n,l,e,d,g,m,f,j,h,k,i,null)},
bst(d){var x=null
return new B.aW_(d,x,x,x,x,x,x,x,x,x,x,x,x,x)},
JI:function JI(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
_.d=d
_.e=e
_.r=f
_.w=g
_.x=h
_.at=i
_.ch=j
_.CW=k
_.cx=l
_.dx=m
_.dy=n
_.a=o},
QM:function QM(d,e,f,g){var _=this
_.d=d
_.e=e
_.f=f
_.r=g
_.at=_.as=_.Q=_.z=_.y=_.x=_.w=$
_.ax=null
_.CW=_.ch=_.ay=$
_.c=_.a=null},
aW0:function aW0(d,e,f){this.a=d
this.b=e
this.c=f},
aW_:function aW_(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
_.at=d
_.ay=_.ax=$
_.a=e
_.b=f
_.c=g
_.d=h
_.e=i
_.f=j
_.r=k
_.w=l
_.x=m
_.y=n
_.z=o
_.Q=p
_.as=q},
a0o:function a0o(d,e){this.a=d
this.b=e},
bpO(d,e,f,g){var x=null
return new H.LK(!0,f,x,x,x,g,x,x,!1,x,!0,x,new B.acZ(e,d,g,x,x),x)},
acZ:function acZ(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
JH:function JH(d){var _=this
_.a=!1
_.p1$=0
_.p2$=d
_.p4$=_.p3$=0},
JG:function JG(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
QL:function QL(d,e){var _=this
_.e=_.d=$
_.cC$=d
_.b1$=e
_.c=_.a=null},
aVY:function aVY(d){this.a=d},
aVX:function aVX(d){this.a=d},
aVW:function aVW(){},
aVZ:function aVZ(d){this.a=d},
V0:function V0(){},
e_(d){var x,w,v,u
if(d==null)return C.Fp
x=J.a7(d)
w=x.h(d,"table_data")
v=y.j
if(v.b(w)&&J.eb(w)){u=J.k0(w)
if(y.P.b(u))return B.a0I(u)
if(y.f.b(u))return B.a0I(A.b9(u,y.N,y.z))}if(v.b(x.h(d,"playerIds"))||v.b(x.h(d,"players")))return B.a0I(d)
return C.Fp},
a0I(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=null,k=A.a([],y.s),j=J.a7(d),i=j.h(d,"playerIds")
if(i==null)i=j.h(d,"player_ids")
x=y.j
if(x.b(i))D.b.G(k,J.eg(i,new B.ayG(),y.N))
w=j.h(d,"players")
v=0
if(x.b(w))for(x=J.bg(w),u=y.f;x.D();){t=x.gR(x)
if(u.b(t)&&!J.e(J.S(t,"isBot"),!0))++v}s=j.h(d,"potSummary")
if(y.f.b(s)){x=A.d8(J.S(s,"humanCount"))
r=x==null?l:D.c.al(x)
if(r==null)r=0}else r=0
q=D.b.pv(A.a([k.length,v,r],y.t),new B.ayH())
x=j.h(d,"table_id")
p=x==null?j.h(d,"ludo_table_id"):x
if(p==null)p=j.h(d,"_id")
o=p==null?l:D.d.ar(J.ao(p))
x=j.h(d,"inviteCode")
if(x==null)x=j.h(d,"invite_code")
n=x==null?l:D.d.ar(J.ao(x))
x=j.h(d,"noOfPlayers")
m=A.d8(x==null?j.h(d,"no_of_players"):x)
j=o!=null&&o.length!==0?o:l
x=n!=null&&n.length!==0?n:l
u=m==null?l:D.c.al(m)
return new B.a0H(j,x,k,u==null?2:u,q)},
a0H:function a0H(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ayG:function ayG(){},
ayH:function ayH(){},
bnX(d){var x
d.Y(y.O)
x=A.af(d)
return x.Z},
Hs(d){var x,w,v=null,u=d==null,t=u?v:d.h(0,"turnExpiresAt")
if(t==null)t=u?v:d.h(0,"turn_expires_at")
x=t
if(x==null)return v
try{u=N.bnn(J.ao(x)).afU()
return u}catch(w){return v}},
bfQ(d){var x,w,v=B.Hs(d)
if(v!=null){x=Date.now()
return Math.max(0,D.c.hz(D.l.c2(v.e_(new A.dX(x,0,!1).afU()).a,1000)/1000))}x=d==null
w=x?null:d.h(0,"turnSecondsLeft")
if(w==null)w=x?null:d.h(0,"turn_seconds_left")
if(typeof w=="number"&&D.c.al(w)>0)return D.c.al(w)
return 0},
bvz(d,e){var x=B.bfQ(d)
if(x>0)return x
if(e!=null&&e>0)return e
return 0}},C,G,M
J=c[1]
A=c[0]
D=c[2]
N=c[85]
O=c[182]
H=c[36]
I=c[165]
P=c[284]
Q=c[285]
F=c[108]
E=c[117]
R=c[38]
K=c[49]
L=c[288]
B=a.updateHolder(c[28],B)
C=c[283]
G=c[105]
M=c[127]
B.JI.prototype={
a4(){var x=null
return new B.QM(new A.vP(x,x),new A.eI(x,x),new A.eI(x,x),new A.eI(x,x))}}
B.QM.prototype={
ah(){var x,w=this
w.aF()
w.ay=D.dF
w.CW=D.z
w.a.toString
x=new B.JH($.b6())
w.at=x
x.a9(0,w.ga4G())},
n(){var x=this,w=x.at
w===$&&A.b()
w.P(0,x.ga4G())
x.a.toString
w=x.at
w.p2$=$.b6()
w.p1$=0
w=x.ax
if(w!=null)w.ab(0)
x.ax=null
x.aA()},
aDV(){var x,w,v=this,u=v.c
u.toString
A.hb(u,D.u5,y.a).toString
u=v.c
u.toString
A.hb(u,D.bV,y.y).toString
u=v.at
u===$&&A.b()
x=u.a?"Expanded":"Collapsed"
if(A.bO()===D.aI){u=v.ax
if(u!=null)u.ab(0)
v.ax=A.cE(D.dp,new B.aW0(v,x,D.aW))}else{u=v.c
u.toString
w=A.np(u)
w.toString
K.EL(w,x,D.aW,L.od)}v.a.toString},
a1l(){var x=this.c
x.toString
A.bi_(x)
this.a.toString
switch(1){case 1:case 2:return C.zT}},
a_y(d,e){var x=$.byk(),w=$.blp(),v=x.$ti.i("eH<aI.T>")
v=new A.aA(y.m.a(e),new A.eH(w,x,v),v.i("aA<aI.T>"))
this.w=v
return A.biD(C.a4x,v)},
arn(d,e){if(this.a1l()!==C.a70)return null
return this.a_y(d,e)},
as7(d,e){if(this.a1l()!==C.zT)return null
return this.a_y(d,e)},
avT(d,e){var x,w,v,u,t,s,r,q,p=this,o=null,n=p.f,m=$.blp(),l=A.D(n).i("eH<aI.T>")
y.m.a(e)
p.z=new A.aA(e,new A.eH(m,n,l),l.i("aA<aI.T>"))
l=p.e
n=A.D(l).i("eH<aI.T>")
p.y=new A.aA(e,new A.eH(m,l,n),n.i("aA<aI.T>"))
x=A.af(d)
A.hb(d,D.bV,y.y).toString
n=p.at
n===$&&A.b()
n=n.a
w=n?"Collapse":"Expand for more details"
v=o
switch(x.w.a){case 2:case 4:v=n?"Expanded\n double tap to collapse":"Collapsed\n double tap to expand"
break
case 0:case 1:case 3:case 5:break}n=p.z
m=n.a
m=n.b.X(0,m.gq(m))
if(m==null){n=p.as
n===$&&A.b()
n=n.f}else n=m
m=p.y
l=m.a
l=m.b.X(0,l.gq(l))
m=p.a
m.toString
u=p.at
u=u.a?u.gaOe(u):u.gaTa(u)
t=p.arn(d,e)
s=p.a
r=s.d
s=s.e
q=p.as7(d,e)
p.a.toString
return A.cz(o,o,A.bp7(R.bhY(m.at,o,!0,!0,!1,t,o,u,o,s,r,q,o),o,n,o,l,o),!1,o,o,o,!1,o,o,o,v,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,w,o,o,o,o,o,o,o,o,o,D.ag,o)},
aqW(d,e){var x,w,v,u=null,t=this.a
t.toString
x=this.as
x===$&&A.b()
w=x.d
if(w==null)w=D.q
v=t.ch
x=v==null?x.e:v
if(x==null)x=D.Q
return new A.c2(w,u,u,new A.a4(x,F.a8(t.r,E.k,D.j,E.n),u),u)},
ar9(d,e,f,g){var x,w,v,u=this,t=null,s=u.r,r=$.byj(),q=A.D(s).i("eH<aI.T>")
s=new A.eH(r,s,q)
y.m.a(g)
u.Q=new A.aA(g,s,q.i("aA<aI.T>"))
q=u.d
x=A.D(q).i("eH<aI.T>")
u.x=new A.aA(g,new A.eH(r,q,x),x.i("aA<aI.T>"))
s=s.X(0,g.gq(g))
if(s==null){s=u.as
s===$&&A.b()
s=s.a
w=s}else w=s
if(w==null)w=D.w
s=u.x
r=s.a
v=s.b.X(0,r.gq(r))
if(v==null)v=C.OC
u.a.toString
u.as===$&&A.b()
s=v.gkR()
r=F.a8(A.a([e,f],y.p),E.k,D.j,E.v)
u.a.toString
s=A.bh(!1,D.z,!0,t,new A.a4(s,r,t),D.an,w,0,t,t,v,t,t,D.I)
return s},
aY(d){var x,w,v,u=this
u.b9(d)
x=u.c
x.toString
w=A.af(x)
x=u.c
x.toString
u.as=B.bnX(x)
x=u.c
x.toString
v=B.bst(x)
if(!u.a.dy.l(0,d.dy)||!u.a.dx.l(0,d.dx))u.a97(w)
x=u.a
if(!x.cx.l(0,d.cx)||!u.a.CW.l(0,d.CW))u.a8N(v)
if(!u.a.w.l(0,d.w)||!u.a.x.l(0,d.x))u.a8o()
u.a.toString},
by(){var x,w,v=this,u=v.c
u.toString
x=A.af(u)
u=v.c
u.toString
v.as=B.bnX(u)
u=v.c
u.toString
w=B.bst(u)
v.aL7()
v.a97(x)
v.aLf(w)
v.a8N(w)
v.a8o()
v.aLg()
v.dj()},
aL7(){this.a.toString
this.as===$&&A.b()
this.CW=D.z},
a97(d){var x=this.d,w=this.a,v=w.dy
x.a=v
w=w.dx
x.b=w},
aLf(d){var x,w=this,v=w.e
w.a.toString
x=w.as
x===$&&A.b()
x=x.x
v.a=x==null?d.gCz():x
w.a.toString
x=w.as.w
v.b=x==null?d.gEs():x},
a8N(d){var x=this.f,w=this.a.cx
x.a=w
w=this.a.CW
x.b=w},
a8o(){var x=this.r,w=this.a,v=w.x
x.a=v
w=w.w
x.b=w},
aLg(){var x=this
x.a.toString
x.as===$&&A.b()
x.ay=D.dF
x.ch=null},
v(d){var x,w,v,u=this,t=u.at
t===$&&A.b()
x=u.ay
x===$&&A.b()
w=u.CW
w===$&&A.b()
v=u.ch
v===$&&A.b()
u.a.toString
return new B.JG(t,u.gavS(),u.gaqV(),w,x,v,!1,u.gar8(),null)}}
B.aW_.prototype={
gGC(){var x,w=this,v=w.ay
if(v===$){v=w.ax
if(v===$){x=A.af(w.at)
w.ax!==$&&A.b8()
w.ax=x
v=x}w.ay!==$&&A.b8()
v=w.ay=v.ax}return v},
gEs(){return this.gGC().k3},
gcU(){return this.gGC().b},
gCz(){return this.gGC().k3},
gJy(){var x=this.gGC(),w=x.rx
return w==null?x.k3:w}}
B.a0o.prototype={
O(){return"ListTileControlAffinity."+this.b}}
B.acZ.prototype={
v(d){var x,w=null,v=this.e.a,u=w
if(v==null)v=u
else{v=v.a5(D.de)
v=v==null?w:v.r}x=v
if(x==null)x=14
v=A.cU(d,D.cg)
v=v==null?w:v.gd4()
v=A.V((v==null?D.bk:v).aZ(0,x)/14,1,2)
H.bpP(d)
v=A.as(8,4,v-1)
v.toString
u=A.a([this.d,new G.eJ(1,E.bf,this.c,w)],y.p)
return F.a0(u,E.k,D.j,E.v,v)}}
B.JH.prototype={
I6(d){if(d!==this.a){this.a=d
this.az()}},
aTb(d){this.I6(!0)},
aOf(d){this.I6(!1)}}
B.JG.prototype={
a4(){return new B.QL(null,null)},
aUY(d,e){return this.d.$2(d,e)},
aNv(d,e){return this.e.$2(d,e)},
aTe(d,e,f,g){return this.y.$4(d,e,f,g)}}
B.QL.prototype={
ah(){var x,w,v,u=this,t=null
u.aF()
u.d=A.bw(t,u.a.f,t,t,u)
x=u.c
x.toString
x=A.LP(x)
if(x==null)x=t
else{w=u.c
w.toString
w=x.Ws(w)
x=w}A.lE(x)
if(x==null?u.a.c.a:x){u.d.sq(0,1)
u.a.c.I6(!0)}else u.a.c.I6(!1)
x=y.X
w=y.m.a(u.d)
v=u.a
u.e=A.ca(v.r,new A.aA(w,new A.aC(0,1,x),x.i("aA<aI.T>")),v.w)
u.a.c.a9(0,u.gRD())},
aY(d){var x,w,v,u=this
u.b9(d)
x=u.a
w=x.r
if(w!==d.r){v=u.e
v===$&&A.b()
v.b=w}w=x.f
if(w.a!==d.f.a){v=u.d
v===$&&A.b()
v.e=w}w=d.c
if(x.c!==w){x=u.gRD()
w.P(0,x)
u.a.c.a9(0,x)
if(w.a!==u.a.c.a)u.a83()}},
n(){var x,w=this
w.a.c.P(0,w.gRD())
x=w.d
x===$&&A.b()
x.n()
x=w.e
x===$&&A.b()
x.n()
w.anD()},
a83(){this.M(new B.aVY(this))},
v(d){var x,w,v,u=this,t=u.a
if(!t.c.a){x=u.d
x===$&&A.b()
w=x.gb2(0)===D.aB}else w=!1
x=u.d
x===$&&A.b()
v=new A.DR(w,new A.Ah(!w,t.aNv(d,x),null),null)
x=u.d
t=w?null:v
return A.di(x,new B.aVZ(u),t)}}
B.V0.prototype={
n(){var x=this,w=x.b1$
if(w!=null)w.P(0,x.gfi())
x.b1$=null
x.aA()},
bi(){this.bQ()
this.bH()
this.fj()}}
B.a0H.prototype={
gkV(){var x=this.d
return x>=2&&this.e>=x}}
var z=a.updateTypes(["~()","c(n,cd<H>)","c(n,c,c,cd<H>)"])
B.aW0.prototype={
$0(){var x,w=this.a,v=w.c
v.toString
x=A.np(v)
x.toString
K.EL(x,this.b,this.c,L.od)
v=w.ax
if(v!=null)v.ab(0)
w.ax=null},
$S:0}
B.aVY.prototype={
$0(){var x=this.a,w=x.a.c.a,v=x.d
if(w){v===$&&A.b()
v.bK(0)}else{v===$&&A.b()
v.dh(0).bw(new B.aVX(x),y.H)}w=x.c
w.toString
w=A.LP(w)
if(w!=null){v=x.c
v.toString
w.Xh(v,x.a.c.a)}},
$S:0}
B.aVX.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.M(new B.aVW())},
$S:28}
B.aVW.prototype={
$0(){},
$S:0}
B.aVZ.prototype={
$2(d,e){var x,w,v,u=this.a,t=u.a
t.toString
x=u.d
x===$&&A.b()
w=t.aUY(d,x)
x=u.e
x===$&&A.b()
v=A.nN(new A.c2(D.q,null,x.gq(0),e,null),D.u,null)
return u.a.aTe(d,w,v,u.d)},
$S:66}
B.ayG.prototype={
$1(d){return J.ao(d)},
$S:32}
B.ayH.prototype={
$2(d,e){return d>e?d:e},
$S:124};(function aliases(){var x=B.V0.prototype
x.anD=x.n})();(function installTearOffs(){var x=a._instance_0u,w=a._instance_2u,v=a.installInstanceTearOff,u=a._instance_0i
var t
x(t=B.QM.prototype,"ga4G","aDV",0)
w(t,"gavS","avT",1)
w(t,"gaqV","aqW",1)
v(t,"gar8",0,4,null,["$4"],["ar9"],2,0,0)
u(t=B.JH.prototype,"gaTa","aTb",0)
u(t,"gaOe","aOf",0)
x(B.QL.prototype,"gRD","a83",0)})();(function inheritance(){var x=a.mixinHard,w=a.inheritMany,v=a.inherit
w(A.a3,[B.JI,B.JG])
w(A.a5,[B.QM,B.V0])
w(A.d6,[B.aW0,B.aVY,B.aVW])
v(B.aW_,A.CL)
v(B.a0o,A.h0)
v(B.acZ,A.U)
v(B.JH,A.i6)
v(B.QL,B.V0)
w(A.bV,[B.aVX,B.ayG])
w(A.cY,[B.aVZ,B.ayH])
v(B.a0H,A.G)
x(B.V0,A.fx)})()
A.bJ(b.typeUniverse,JSON.parse('{"JI":{"a3":[],"c":[]},"QM":{"a5":["JI"]},"acZ":{"U":[],"c":[]},"JG":{"a3":[],"c":[]},"JH":{"aF":[]},"QL":{"a5":["JG"]},"bDf":{"dR":[],"bM":[],"bB":[],"c":[]}}'))
var y=(function rtii(){var x=A.A
return{m:x("cd<H>"),O:x("bDf"),s:x("l<f>"),p:x("l<c>"),t:x("l<o>"),j:x("R<@>"),P:x("am<f,@>"),f:x("am<@,@>"),y:x("kq"),N:x("f"),X:x("aC<H>"),a:x("Aw"),z:x("@"),H:x("~")}})();(function constants(){var x=a.makeConstList
C.OC=new A.cS(I.om,D.y,I.om,D.y)
C.w_=new A.d(1,0.5450980392156862,0.3607843137254902,0.9647058823529412,D.e)
C.d3=new A.d(1,0.13333333333333333,0.8274509803921568,0.9333333333333333,D.e)
C.hz=new A.d(1,0.8313725490196079,0.6862745098039216,0.35294117647058826,D.e)
C.wD=new A.d(1,0.3568627450980392,0.12941176470588237,0.7137254901960784,D.e)
C.wI=new A.d(1,0.9019607843137255,0.6274509803921569,0.12549019607843137,D.e)
C.bn=new A.d(1,0.9764705882352941,0.8274509803921568,0.44313725490196076,D.e)
C.lm=new A.d(1,0.23921568627450981,0.8117647058823529,0.41568627450980394,D.e)
C.xh=new A.d(1,0.11764705882352941,0.1607843137254902,0.23137254901960785,D.e)
C.xk=new A.d(1,0.7490196078431373,0.9686274509803922,1,D.e)
C.y0=new A.C(0,0,0,18)
C.y3=new A.C(0,12,0,12)
C.za=new A.ax(62775,"MaterialIcons",!1)
C.jC=new A.ax(63084,"MaterialIcons",!1)
C.zg=new A.ax(63531,"MaterialIcons",!1)
C.zh=new A.ax(983244,"MaterialIcons",!1)
C.zo=new A.ax(985054,"MaterialIcons",!1)
C.a46=new A.ax(983708,"MaterialIcons",!1)
C.zq=new A.d1(C.a46,18,C.d3,null,null,null)
C.a30=new A.ax(57926,"MaterialIcons",!1)
C.a4x=new A.d1(C.a30,null,null,null,null,null)
C.zs=new A.d1(C.jC,20,D.S,null,null,null)
C.a70=new B.a0o(0,"leading")
C.zT=new B.a0o(1,"trailing")
C.a3R=new A.ax(63526,"MaterialIcons",!1)
C.zY=x([P.mk,Q.z9,C.a3R],A.A("l<ax>"))
C.A3=x(["Select players","Create room","Share code"],y.s)
C.A8=x(["Invite code","Join room","Play"],y.s)
C.r6=x([0,0.45,1],A.A("l<H>"))
C.Fp=new B.a0H(null,null,D.ar,2,0)
C.FU=new A.k(0,14)
C.FW=new A.k(2,4)
C.uC=new A.cJ(-0.35,-0.55)
C.Lk=new A.ci(14,null,null,null)
C.Ll=new A.ci(18,null,null,null)
C.auF=new A.b2("Table ID copied",null,null,null,null,null,null,null,null)
C.no=new G.ng(C.auF,null,null,null,null,null,null,null,null,null,null,null,null,M.ap,!1,null,null,null,D.u,null)
C.avF=new A.b2("Invite code copied",null,null,null,null,null,null,null,null)
C.Lx=new G.ng(C.avF,null,null,null,null,null,null,null,null,null,null,null,null,M.ap,!1,null,null,null,D.u,null)
C.tT=new A.y(!0,D.h,null,null,null,null,null,D.D,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.Mj=new A.y(!0,null,null,null,null,null,11,D.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.nw=new A.y(!0,O.cQ,null,null,null,null,11,D.D,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.Mx=new A.b2("PLAYERS",null,C.nw,null,null,null,null,null,null)
C.MA=new A.b2("TABLE ID",null,C.nw,null,null,null,null,null,null)
C.MC=new A.b2("BOOT AMOUNT (\u20b9)",null,C.nw,null,null,null,null,null,null)
C.tU=new A.b2("INVITE CODE",null,C.nw,null,null,null,null,null,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"bWj","blp",()=>A.hy(D.dF))
x($,"bWk","byj",()=>A.hy(D.cb))
x($,"bWl","byk",()=>A.hk(0,0.5,A.A("H")))})()};
(a=>{a["HDCo/DNH7QC0Kd4hVTQrMCO03fc="]=a.current})($__dart_deferred_initializers__);