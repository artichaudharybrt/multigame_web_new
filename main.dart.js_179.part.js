((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,A4,A5,A0,A6,A1,N,A7,A8,V,O,M,A9,L,R,Aa,S,T,Ab,Ac,W,Ad,U,X,Q,Y,B={Lz:function Lz(){},
bR5(d){var w,v,u,t
for(w=new A.iR(d),v=x.F,w=new A.cd(w,w.gB(0),v.i("cd<aI.E>")),v=v.i("aI.E"),u=2166136261;w.A();){t=w.d
u^=t==null?v.a(t):t
t=((u&2147483647)-((u&2147483648)>>>0))*16777619
u=((t&2147483647)-((t&2147483648)>>>0)&-1)>>>0}return u},
bB9(d){var w=C.c.S(d)
return C.c.bj(w,"bot:")||C.c.bj(w,"robot_")},
bR6(d){var w,v=C.c.S(d)
if(v.length===0)return!0
w=A.bK("\\bbot\\b",!1,!1)
if(w.b.test(v))return!0
w=A.bK("^(bot(\\s*\\(cpu\\))?|bot\\s*player\\s*\\d+|cpu|computer|player(\\s*\\d+)?|p\\d+)$",!1,!1)
if(w.b.test(v))return!0
w=A.bK("^(red|yellow|blue|green)(\\s+player)?$",!1,!1)
if(w.b.test(v))return!0
w=A.bK("^\\+?\\d[\\d\\s-]{6,}$",!0,!1)
if(w.b.test(v))return!0
w=A.bK("\\d{4,}",!0,!1)
if(w.b.test(v)){w=A.bK("[a-zA-Z]{2,}",!0,!1)
w=!w.b.test(v)}else w=!1
if(w)return!0
return!1},
a3z(d,e,f){var w=B.bR5(e+"|"+d+"|"+f)
return D.aiC[C.k.aj(w,30)]+" "+D.acN[C.k.aj(w>>>8,20)]},
bR7(d,e){var w,v,u,t,s,r,q,p=x.N,o=A.bf(p),n=A.F(p,p)
for(p=d.length,w=e+"#",v=0;v<d.length;d.length===p||(0,A.a0)(d),++v){u=d[v]
t=u.b
s=u.a
r=B.a3z(t,e,s)
q=0
for(;;){if(!(o.t(0,r)&&q<400))break;++q
r=B.a3z(t,w+q,s)}o.M(0,r)
n.k(0,t,r)}return n},
bR4(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p,o,n,m,l
if(f)return"You"
w=i>=0?i:g
v=w>=0&&w<h.length?C.c.S(h[w]):""
u=B.bR2(e,j,k)
t=x.A
s=B.bR0(g,w,A.a([e,j],t),v)
if(s.length!==0)return s
r=A.a([],x.L)
for(q=0;q<h.length;++q){p=C.c.S(h[q])
if(p.length===0)continue
if(!B.bR3(A.a([e,j],t),p)){o=C.c.S(p)
n=C.c.bj(o,"bot:")||C.c.bj(o,"robot_")}else n=!0
if(n)r.push(new A.ahH(q,p))}if(!d)if(v.length!==0){t=C.b.ea(r,new B.aBI(v))||B.bB9(v)
m=t}else m=!1
else m=!0
if(!m)return""
t=v.length!==0
if(t&&C.b.ea(r,new B.aBJ(v))){t=B.bR7(r,u.length!==0?u:C.b.bG(h,",")).h(0,v)
return t==null?B.a3z(v,u,w):t}l=t?v:"seat:"+w
return B.a3z(l,u.length!==0?u:k,w)},
bR2(d,e,f){var w,v,u,t,s,r,q,p
for(w=[d,e],v=0;v<2;++v){u=w[v]
if(u==null)continue
t=J.N(u)
s=t.h(u,"gameId")
if(s==null)s=t.h(u,"game_id")
r=s==null?null:C.c.S(J.L(s))
if(r==null)r=""
if(r.length!==0)return r}for(w=[d,e],v=0;v<2;++v){u=w[v]
if(u==null)continue
t=J.N(u)
q=t.h(u,"tableId")
if(q==null)q=t.h(u,"table_id")
p=q==null?null:C.c.S(J.L(q))
if(p==null)p=""
if(p.length!==0)return p}return C.c.S(f)},
bR0(d,e,f,g){var w,v,u=d>=0&&d<4?D.aiD[d]:""
for(w=0;w<2;++w){v=B.bR1(f[w],u,e,g)
if(v.length!==0)return v}return""},
bR1(a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=null
if(a2==null)return""
w=J.N(a2)
v=[w.h(a2,"players"),w.h(a2,"playerList"),w.h(a2,"joinedPlayers")]
for(w=a3.length!==0,u=a5.length!==0,t=x.N,s=x.z,r=x.f,q=x.j,p=0;p<3;++p){o=v[p]
if(!q.b(o))continue
for(n=J.b0(o),m=a1,l=m,k=l;n.A();){j=n.gP(n)
if(!r.b(j))continue
i=A.ao(j,t,s)
h=i.h(0,"userId")
if(h==null)h=i.h(0,"user_id")
if(h==null)h=i.h(0,"id")
if(h==null)h=i.h(0,"_id")
g=h==null?a1:C.c.S(J.L(h))
if(u&&g===a5)k=i
f=i.h(0,"seatIndex")
if(f==null)f=i.h(0,"seat_index")
if(typeof f=="number"&&C.d.ai(f)===a4)l=l==null?i:l
h=i.h(0,"ludoColor")
if(h==null)h=i.h(0,"ludo_color")
if(h==null)h=i.h(0,"color")
e=h==null?a1:J.L(h).toLowerCase()
if(w&&e===a3)m=m==null?i:m}d=k==null?l:k
if(d==null)d=m
if(d==null)continue
a0=B.bB8(d)
if(a0.length!==0)return a0}return""},
bR3(d,e){var w,v,u,t,s,r,q,p,o,n,m
for(w=x.f,v=x.j,u=x.N,t=0;t<2;++t){s=d[t]
if(s==null)continue
r=J.N(s)
q=r.h(s,"botPlayerIds")
if(q==null)q=r.h(s,"bot_player_ids")
if(v.b(q)&&J.e_(q,new B.aBH(),u).t(0,e))return!0
p=r.h(s,"players")
if(!v.b(p))continue
for(r=J.b0(p);r.A();){o=r.gP(r)
if(!w.b(o))continue
n=J.N(o)
m=n.h(o,"userId")
if(m==null)m=n.h(o,"user_id")
if((m==null?null:J.L(m))!==e)continue
if(J.f(n.h(o,"isBot"),!0)||J.f(n.h(o,"seatKind"),"bot"))return!0}}return!1},
bB8(d){var w,v,u,t
for(w=0;w<6;++w){v=d.h(0,D.abm[w])
u=v==null?null:C.c.S(J.L(v))
if(u==null)u=""
if(!B.bR6(u))return u}t=d.h(0,"user")
if(x.f.b(t))return B.bB8(A.ao(t,x.N,x.z))
return""},
aBI:function aBI(d){this.a=d},
aBJ:function aBJ(d){this.a=d},
aBH:function aBH(){},
bR9(d){var w=C.b.ew(D.nl,d)
if(w<0)return(d+1)%4
return D.nl[C.k.aj(w+1,4)]},
bR8(d,e){var w,v,u
if(e===4)return A.bp(4,!0,!1,x.y)
w=A.bp(4,!1,!1,x.y)
w[d]=!0
if(e===2){w[G.BB[d]]=!0
return w}for(v=A.ag(w).i("aQ<1>"),u=d;new A.aQ(w,new B.aBK(),v).gB(0)<3;){u=B.bR9(u)
w[u]=!0}return w},
bRa(d,e){var w,v,u=A.a([],x.t)
for(w=0;w<4;++w){v=D.nl[w]
if(v<4&&d[v])u.push(v)}return u},
aBK:function aBK(){},
MO:function MO(){},
bRl(d){switch(d){case"local":return D.alH
case"computer":return D.alG
case"online":default:return D.alF}},
MR:function MR(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a3D:function a3D(d,e){this.a=d
this.b=e},
t_:function t_(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bRj(d,e){var w,v,u,t,s,r,q,p,o=A.bK("[\\s_-]",!0,!1),n=A.dv(e.toLowerCase(),o,""),m=A.a([],x.a)
for(o=J.b0(d);o.A();){w=o.gP(o)
v=w.a
if(v.length===0)continue
u=w.b
if(u.length!==0){t=A.bK("[\\s_-]",!0,!1)
u=A.dv(u.toLowerCase(),t,"")!==n}else u=!1
if(u)continue
s=C.d.Z(w.c)
r=w.d
r=r>0?r:4
q=w.z
if(q==null)q=w.f.length+w.r.length
p=C.c.S(w.y)
if(p.length!==0)w=p
else w=s>0?"Ludo-"+s:"Table"
m.push(new B.t_(s,r,""+q+" / "+r,w,v))}C.b.eh(m,new B.aCx())
return m},
zz:function zz(d,e,f,g,h){var _=this
_.as=d
_.at=e
_.ax=f
_.a=g
_.b=$
_.c=h
_.d=!1},
aCv:function aCv(d,e){this.a=d
this.b=e},
aCw:function aCw(){},
aCx:function aCx(){},
q1:function q1(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
vG:function vG(d,e){this.c=d
this.a=e},
afl:function afl(){this.c=this.a=null},
bq_:function bq_(){},
ML:function ML(d,e,f){this.c=d
this.d=e
this.a=f},
TQ:function TQ(d,e,f,g,h,i){var _=this
_.f=_.e=_.d=$
_.r=d
_.w=0
_.y=_.x=1
_.z=e
_.as=_.Q=!1
_.at=f
_.ay=_.ax=!1
_.ch=null
_.CW=g
_.db=_.cy=_.cx=$
_.cN$=h
_.aO$=i
_.c=_.a=null},
b9i:function b9i(){},
b9g:function b9g(d,e){this.a=d
this.b=e},
b9h:function b9h(d){this.a=d},
b9f:function b9f(d){this.a=d},
b92:function b92(d){this.a=d},
b93:function b93(d){this.a=d},
b8Y:function b8Y(d){this.a=d},
b8Z:function b8Z(d,e){this.a=d
this.b=e},
b9_:function b9_(d){this.a=d},
b90:function b90(d){this.a=d},
b91:function b91(d,e,f){this.a=d
this.b=e
this.c=f},
b8P:function b8P(d){this.a=d},
b8Q:function b8Q(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b8R:function b8R(d){this.a=d},
b8S:function b8S(d){this.a=d},
b8T:function b8T(d){this.a=d},
b8U:function b8U(d){this.a=d},
b96:function b96(){},
b97:function b97(d,e,f){this.a=d
this.b=e
this.c=f},
b95:function b95(d,e){this.a=d
this.b=e},
b98:function b98(d){this.a=d},
b99:function b99(d,e){this.a=d
this.b=e},
b8X:function b8X(){},
b8V:function b8V(d){this.a=d},
b8W:function b8W(d){this.a=d},
b9b:function b9b(){},
b9e:function b9e(d){this.a=d},
b9c:function b9c(d){this.a=d},
b9a:function b9a(){},
b9d:function b9d(d){this.a=d},
b94:function b94(d){this.a=d},
bng:function bng(d){this.a=d},
XZ:function XZ(){},
ams:function ams(){},
Y_:function Y_(){},
bEN(d,e,f,g,h,i,j,k){return new B.afV(d,f,g,k,j,h,i,e,null)},
MM:function MM(d){this.a=d},
TR:function TR(){this.c=this.a=null},
b9j:function b9j(d){this.a=d},
b9k:function b9k(d){this.a=d},
b9l:function b9l(d){this.a=d},
b9m:function b9m(d){this.a=d},
abx:function abx(d,e){this.c=d
this.a=e},
aZY:function aZY(d){this.a=d},
TF:function TF(d,e){this.c=d
this.a=e},
b7J:function b7J(){},
acD:function acD(d){this.a=d},
afi:function afi(d){this.a=d},
afG:function afG(d,e){this.c=d
this.a=e},
Cf:function Cf(d,e,f){this.c=d
this.d=e
this.a=f},
C9:function C9(d,e,f){this.c=d
this.d=e
this.a=f},
ae3:function ae3(d,e,f){this.c=d
this.d=e
this.a=f},
Vu:function Vu(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
afV:function afV(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
ahx:function ahx(d,e){this.c=d
this.a=e},
abk:function abk(d,e){this.b=d
this.a=e},
alv:function alv(d){this.a=d},
WP:function WP(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bnh:function bnh(d){this.a=d},
amt:function amt(){},
Y0:function Y0(){},
vE:function vE(d,e){this.c=d
this.a=e},
TS:function TS(d,e,f,g){var _=this
_.d=100
_.e=2
_.f=d
_.r=e
_.w=f
_.z=_.y=_.x=null
_.ax=_.at=_.as=_.Q=!1
_.db=_.cy=_.cx=_.CW=_.ch=_.ay=null
_.dx=g
_.c=_.a=null},
ba4:function ba4(d){this.a=d},
ba5:function ba5(d,e){this.a=d
this.b=e},
ba6:function ba6(d,e){this.a=d
this.b=e},
ba7:function ba7(d){this.a=d},
ba8:function ba8(d,e){this.a=d
this.b=e},
ba9:function ba9(d){this.a=d},
baa:function baa(d){this.a=d},
bab:function bab(d){this.a=d},
bac:function bac(d,e){this.a=d
this.b=e},
bal:function bal(d){this.a=d},
b9B:function b9B(d,e,f){this.a=d
this.b=e
this.c=f},
b9I:function b9I(d,e){this.a=d
this.b=e},
bah:function bah(d,e){this.a=d
this.b=e},
ba0:function ba0(d){this.a=d},
bai:function bai(d,e){this.a=d
this.b=e},
baj:function baj(d,e){this.a=d
this.b=e},
bak:function bak(d,e){this.a=d
this.b=e},
b9v:function b9v(d){this.a=d},
b9w:function b9w(d){this.a=d},
b9x:function b9x(d){this.a=d},
b9y:function b9y(d){this.a=d},
b9z:function b9z(d){this.a=d},
b9A:function b9A(d){this.a=d},
b9u:function b9u(d){this.a=d},
b9R:function b9R(d){this.a=d},
b9S:function b9S(d){this.a=d},
b9T:function b9T(d){this.a=d},
b9U:function b9U(d,e){this.a=d
this.b=e},
b9V:function b9V(d,e,f){this.a=d
this.b=e
this.c=f},
b9W:function b9W(d){this.a=d},
b9X:function b9X(d){this.a=d},
b9Y:function b9Y(d,e){this.a=d
this.b=e},
b9Z:function b9Z(d,e){this.a=d
this.b=e},
bam:function bam(d){this.a=d},
b9C:function b9C(d){this.a=d},
b9D:function b9D(d,e){this.a=d
this.b=e},
b9E:function b9E(d,e){this.a=d
this.b=e},
b9F:function b9F(d){this.a=d},
b9G:function b9G(d){this.a=d},
b9H:function b9H(d){this.a=d},
b9L:function b9L(d){this.a=d},
b9M:function b9M(d){this.a=d},
b9N:function b9N(d){this.a=d},
b9O:function b9O(d,e){this.a=d
this.b=e},
b9P:function b9P(d,e){this.a=d
this.b=e},
b9Q:function b9Q(d,e){this.a=d
this.b=e},
bad:function bad(d){this.a=d},
bae:function bae(d){this.a=d},
baf:function baf(d){this.a=d},
bag:function bag(d){this.a=d},
b9p:function b9p(d,e){this.a=d
this.b=e},
b9r:function b9r(d){this.a=d},
b9q:function b9q(d){this.a=d},
b9s:function b9s(d,e){this.a=d
this.b=e},
b9t:function b9t(){},
b9n:function b9n(d){this.a=d},
ba2:function ba2(){},
ba3:function ba3(d){this.a=d},
ba1:function ba1(d,e){this.a=d
this.b=e},
b9o:function b9o(d){this.a=d},
ban:function ban(d){this.a=d},
b9J:function b9J(d){this.a=d},
ba_:function ba_(d){this.a=d},
b9K:function b9K(d){this.a=d},
bni:function bni(d){this.a=d},
amu:function amu(){},
Y1:function Y1(){},
EL:function EL(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
TT:function TT(d,e,f,g,h,i){var _=this
_.r=_.f=_.e=_.d=null
_.w=!1
_.z=_.y=_.x=null
_.ax=_.at=_.as=_.Q=!1
_.CW=_.ch=_.ay=null
_.cx=!1
_.cy=null
_.fr=_.dy=_.dx=_.db=!1
_.fx=1
_.fy=d
_.k1=_.id=_.go=null
_.k3=!1
_.rx=_.RG=_.R8=_.p4=_.p3=_.p2=_.p1=_.ok=_.k4=null
_.ry=e
_.x1=_.to=null
_.y1=_.xr=_.x2=$
_.y2=f
_.aZ=null
_.ak=0
_.C=null
_.X=!1
_.Y=""
_.ae=!1
_.aq=_.a3=null
_.ar=10
_.aE=_.aG=_.aY=_.aA=null
_.bw=g
_.cN$=h
_.aO$=i
_.c=_.a=null},
bb8:function bb8(d){this.a=d},
bb9:function bb9(d){this.a=d},
baV:function baV(d){this.a=d},
baU:function baU(d){this.a=d},
baW:function baW(d){this.a=d},
bar:function bar(d,e){this.a=d
this.b=e},
bat:function bat(d,e){this.a=d
this.b=e},
baD:function baD(d,e){this.a=d
this.b=e},
bb_:function bb_(d){this.a=d},
bb0:function bb0(d,e){this.a=d
this.b=e},
bas:function bas(d){this.a=d},
baI:function baI(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
baY:function baY(d,e){this.a=d
this.b=e},
baF:function baF(d){this.a=d},
baE:function baE(d,e,f){this.a=d
this.b=e
this.c=f},
baZ:function baZ(d,e,f){this.a=d
this.b=e
this.c=f},
bau:function bau(d){this.a=d},
bav:function bav(d){this.a=d},
baJ:function baJ(d){this.a=d},
baK:function baK(d){this.a=d},
baL:function baL(d){this.a=d},
baM:function baM(d){this.a=d},
baN:function baN(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
baO:function baO(d){this.a=d},
baP:function baP(d,e){this.a=d
this.b=e},
baQ:function baQ(){},
baR:function baR(d){this.a=d},
baS:function baS(d,e){this.a=d
this.b=e},
baT:function baT(d){this.a=d},
baX:function baX(d){this.a=d},
baH:function baH(d){this.a=d},
baG:function baG(d,e,f){this.a=d
this.b=e
this.c=f},
bap:function bap(d,e){this.a=d
this.b=e},
baq:function baq(d,e,f){this.a=d
this.b=e
this.c=f},
bao:function bao(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bax:function bax(d,e){this.a=d
this.b=e},
bay:function bay(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
baz:function baz(d){this.a=d},
baA:function baA(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
baB:function baB(d,e,f){this.a=d
this.b=e
this.c=f},
baC:function baC(d){this.a=d},
baw:function baw(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bb3:function bb3(d,e,f){this.a=d
this.b=e
this.c=f},
bb2:function bb2(d){this.a=d},
bb4:function bb4(){},
bb5:function bb5(d){this.a=d},
bb6:function bb6(d){this.a=d},
bb7:function bb7(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
bb1:function bb1(d,e,f){this.a=d
this.b=e
this.c=f},
bnj:function bnj(d){this.a=d},
Y2:function Y2(){},
amv:function amv(){},
Y3:function Y3(){},
bYO(d){var w,v,u,t=C.k.p(Math.abs(d)),s=new A.eB("")
for(w=t.length,v=0,u="";v<w;++v){if(v>0&&C.k.aj(w-v,3)===0)u=s.a=u+","
u+=t[v]
s.a=u}return d<0?"-"+s.p(0):u.charCodeAt(0)==0?u:u},
a3E:function a3E(d,e,f){this.c=d
this.d=e
this.a=f},
aCy:function aCy(d){this.a=d},
TU:function TU(d,e,f){this.c=d
this.d=e
this.a=f},
afk:function afk(){this.c=this.a=null},
bbj:function bbj(d,e){this.a=d
this.b=e},
bbh:function bbh(d){this.a=d},
bbi:function bbi(d,e){this.a=d
this.b=e},
bbe:function bbe(d,e){this.a=d
this.b=e},
bbd:function bbd(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bbg:function bbg(){},
bbf:function bbf(d,e){this.a=d
this.b=e},
bbc:function bbc(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bba:function bba(d,e,f){this.a=d
this.b=e
this.c=f},
bbb:function bbb(d,e,f){this.a=d
this.b=e
this.c=f},
af6:function af6(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
b7V:function b7V(){},
C5:function C5(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
ab0:function ab0(d){this.a=d},
ag7:function ag7(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
agq:function agq(d,e){this.c=d
this.a=e},
bnk:function bnk(d){this.a=d},
amw:function amw(){},
Y4:function Y4(){},
a3K:function a3K(d,e){this.c=d
this.a=e},
TV:function TV(d,e){this.c=d
this.a=e},
TW:function TW(){this.d=2
this.c=this.a=null},
bbn:function bbn(d){this.a=d},
bbp:function bbp(){},
bbo:function bbo(d){this.a=d},
bbm:function bbm(d){this.a=d},
bbl:function bbl(d,e){this.a=d
this.b=e},
bbk:function bbk(d,e){this.a=d
this.b=e},
bnl:function bnl(d){this.a=d},
amx:function amx(){},
Y5:function Y5(){},
MK:function MK(d,e){this.b=d
this.a=e},
aBX:function aBX(d){this.a=d},
aC0:function aC0(){},
aC_:function aC_(){},
aC1:function aC1(){},
aBZ:function aBZ(){},
aBY:function aBY(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aC3:function aC3(d){this.a=d},
aC2:function aC2(d){this.a=d},
aC4:function aC4(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aBW:function aBW(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aBV:function aBV(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aBT:function aBT(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aBU:function aBU(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aBS:function aBS(d,e){this.a=d
this.b=e},
bRi(){var w,v,u,t,s,r,q,p,o={}
o.a=o.b=0
w=A.a([],x.J)
v=new B.aCh(o,w)
u=new B.aCi(o,v)
t=new B.aCe(o,v)
s=new B.aCk(o,v)
r=new B.aCc(o,v)
o.b=1
o.a=6
v.$0()
u.$1(4)
new B.aCl(new B.aCb(o,v),s,u,r).$0()
new B.aCj(new B.aCg(o,v),u,r,t).$0()
new B.aCd(new B.aCf(o,v),r,t,s).$0()
new B.aCa(o,v).$0()
t.$1(5)
s.$1(2)
q=w.length
if(q!==52)throw A.j(A.aX("Ludo track outer ring expected 52 cells, got "+q+" \u2014 check port."))
p=new B.aCm(w,A.a([],x.E))
o.b=0
o.a=7
p.$2(new B.aCn(),new B.aCo(o,u,7,v))
o.b=7
o.a=0
p.$2(new B.aCp(),new B.aCq(o,r,7,v))
o.b=15
o.a=7
p.$2(new B.aCr(),new B.aCs(o,t,7,v))
o.b=7
o.a=15
p.$2(new B.aCt(),new B.aCu(o,s,7,v))
return new B.aC9(A.ep(w,0,A.fH(52,"count",x.S),x.T).eT(0,!1))},
aC5(d){var w
$label0$0:{if(0===d){w=D.LW
break $label0$0}if(1===d){w=D.aq5
break $label0$0}if(2===d){w=D.aqe
break $label0$0}if(3===d){w=D.aq6
break $label0$0}w=D.LW
break $label0$0}return w},
bRg(d,e){var w=B.aC5(d),v=e===0||e===2?-0.9212500000000001:0.9212500000000001
return w.a+v},
bRh(d,e){var w=B.aC5(d),v=e===0||e===1?-0.9212500000000001:0.9212500000000001
return w.b+v},
f3:function f3(d,e){this.a=d
this.b=e},
aC9:function aC9(d){this.a=d},
aCh:function aCh(d,e){this.a=d
this.b=e},
aCi:function aCi(d,e){this.a=d
this.b=e},
aCe:function aCe(d,e){this.a=d
this.b=e},
aCk:function aCk(d,e){this.a=d
this.b=e},
aCc:function aCc(d,e){this.a=d
this.b=e},
aCb:function aCb(d,e){this.a=d
this.b=e},
aCg:function aCg(d,e){this.a=d
this.b=e},
aCa:function aCa(d,e){this.a=d
this.b=e},
aCf:function aCf(d,e){this.a=d
this.b=e},
aCl:function aCl(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aCj:function aCj(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aCd:function aCd(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aCm:function aCm(d,e){this.a=d
this.b=e},
aCn:function aCn(){},
aCo:function aCo(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aCp:function aCp(){},
aCq:function aCq(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aCr:function aCr(){},
aCs:function aCs(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aCt:function aCt(){},
aCu:function aCu(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
jl:function jl(d,e,f){this.a=d
this.b=e
this.c=f},
jL:function jL(d){this.a=d},
aC6:function aC6(){},
vB:function vB(d,e){this.a=d
this.b=e},
bHj(d,e,f,g,h,i,j,k){var w=Math.max(2,d-k-2),v=Math.max(2,d-j-2)
return new A.k(C.d.R(f*e+h-k/2,2,w),C.d.R(g*e+i-j*0.58,2,v))},
bBe(d,e,f,g,h,i,j,k,l,m){return new B.a3C(k,h,l,i,g,m,e,j,f,d,null)},
bBf(d,e,f,g,h,i){return new B.a3F(h,e,d,g,i,f,null)},
a3N:function a3N(d,e,f){this.a=d
this.b=e
this.c=f},
a3C:function a3C(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.z=l
_.Q=m
_.a=n},
aC8:function aC8(){},
aC7:function aC7(d,e){this.a=d
this.b=e},
Tq:function Tq(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aeg:function aeg(d,e){var _=this
_.d=$
_.bS$=d
_.an$=e
_.c=_.a=null},
b6r:function b6r(d){this.a=d},
a3F:function a3F(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
a3G:function a3G(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
xe:function xe(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
XP:function XP(){},
aBE(d){var w="application/json",v=x.N
v=A.F(v,v)
v.k(0,"Content-Type",w)
v.k(0,"Accept",w)
if(d.length!==0)v.k(0,"Authorization","Bearer "+d)
v.k(0,"ngrok-skip-browser-warning","true")
return v},
aBF(a1,a2,a3,a4,a5){var w=0,v=A.p(x.c),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$aBF=A.q(function(a6,a7){if(a6===1)return A.m(a7,v)
for(;;)switch(w){case 0:h=A.ch()+"/game-tables"
g=A.bR(h,0,null)
f=x.N
e=x.z
d=A.aa(["user_id",a5,"token",a4,"boot_value",a1,"no_of_players",a3,"gameType",a2],f,e)
a0=C.L.eB(d,null)
A.cN("POST",d,"ludo_allocate",h)
w=3
return A.e(F.hL(g,a0,B.aBE(a4)).jI(0,R.fn),$async$aBF)
case 3:t=a7
s=t.b
r=s>=200&&s<300
q=t.e
p=A.aN(A.aM(q))
o=t.w
A.cM(p.ad(0,o),"ludo_allocate",s,r,h)
if(!r)throw A.j(B.EJ(B.bB7(t.gjn(0)),s))
n=x.h.a(C.L.bB(0,A.aN(A.aM(q)).ad(0,o),null))
q=n==null
p=A.cU(q?null:J.B(n,"code"))
m=p==null?null:C.d.ai(p)
if(m==null)m=0
l=q?null:J.B(n,"table_data")
if(m!==200||!x.j.b(l)||J.cr(l)){k=A.aR(q?null:J.B(n,"message"))
throw A.j(B.EJ(k==null?"Could not join table":k,s))}j=J.fo(l)
if(!x.P.b(j))throw A.j(B.EJ("Invalid table_data",s))
q=J.N(j)
p=A.aR(q.h(j,"table_id"))
if(p==null)p=A.aR(q.h(j,"ludo_table_id"))
i=p==null?A.aR(q.h(j,"_id")):p
if(i==null)i=""
if(i.length===0)throw A.j(B.EJ("Missing table id",s))
A.ao(j,f,e)
u=new B.ME(i)
w=1
break
case 1:return A.n(u,v)}})
return A.o($async$aBF,v)},
a3y(d,e,f){var w=0,v=A.p(x.P),u,t
var $async$a3y=A.q(function(g,h){if(g===1)return A.m(h,v)
for(;;)switch(w){case 0:t=A.d3(2,d,C.a4,!1)
u=B.vA(A.aa(["user_id",f,"userId",f,"token",e],x.N,x.z),"/game-tables/"+t+"/join","ludo_join",e)
w=1
break
case 1:return A.n(u,v)}})
return A.o($async$a3y,v)},
btj(d,e,f,g){var w=0,v=A.p(x.P),u,t,s,r,q
var $async$btj=A.q(function(h,i){if(h===1)return A.m(i,v)
for(;;)switch(w){case 0:s=C.c.S(e).toUpperCase()
r=d==null?null:C.c.S(d)
q=A.F(x.N,x.z)
q.k(0,"inviteCode",s)
q.k(0,"invite_code",s)
q.k(0,"code",s)
q.k(0,"user_id",g)
q.k(0,"userId",g)
q.k(0,"token",f)
q.k(0,"private_table",!0)
t=r!=null
if(t&&r.length!==0)q.k(0,"gameType",r)
if(t&&r.length!==0)q.k(0,"game_type",r)
u=B.vA(q,"/game-tables/join-by-code","ludo_join_by_code",f)
w=1
break
case 1:return A.n(u,v)}})
return A.o($async$btj,v)},
MG(d,e){return B.bR_(d,e)},
bR_(d,e){var w=0,v=A.p(x.h),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$MG=A.q(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
r=A.ch()+("/game-tables/"+A.d3(2,d,C.a4,!1))
q=A.bR(r,0,null)
A.cN("GET",null,"ludo_table_get",r)
w=7
return A.e(A.f6(q,B.aBE(e)).jI(0,W.mC),$async$MG)
case 7:p=g
o=p.b>=200&&p.b<300
n=p.b
m=p
A.cM(A.aN(A.aM(m.e)).ad(0,m.w),"ludo_table_get",n,o,r)
if(!o){u=null
w=1
break}n=p
n=B.bB6(A.aN(A.aM(n.e)).ad(0,n.w))
u=n
w=1
break
t=2
w=6
break
case 4:t=3
k=s.pop()
u=null
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.n(u,v)
case 2:return A.m(s.at(-1),v)}})
return A.o($async$MG,v)},
a3x(d,e){return B.bQZ(d,e)},
bQZ(d,e){var w=0,v=A.p(x.h),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$a3x=A.q(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
r=A.ch()+("/game-tables/"+A.d3(2,d,C.a4,!1)+"/game-state")
q=A.bR(r,0,null)
A.cN("GET",null,"ludo_game_state",r)
w=7
return A.e(A.f6(q,B.aBE(e)).jI(0,W.mC),$async$a3x)
case 7:p=g
o=p.b>=200&&p.b<300
m=p.b
l=p
A.cM(A.aN(A.aM(l.e)).ad(0,l.w),"ludo_game_state",m,o,r)
if(o){m=p
m=A.aN(A.aM(m.e)).ad(0,m.w)==="null"}else m=!0
if(m){u=null
w=1
break}m=p
n=B.bB6(A.aN(A.aM(m.e)).ad(0,m.w))
if(n==null){u=null
w=1
break}if(B.bBc(n)!=null){u=null
w=1
break}m=B.EK(n)
u=m
w=1
break
t=2
w=6
break
case 4:t=3
j=s.pop()
u=null
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.n(u,v)
case 2:return A.m(s.at(-1),v)}})
return A.o($async$a3x,v)},
bB6(d){var w,v,u=null,t=C.c.S(d)
if(t.length===0||t==="null")return u
try{w=C.L.bB(0,d,u)
if(x.P.b(w))return w
if(x.f.b(w)){t=A.ao(w,x.N,x.z)
return t}}catch(v){return u}return u},
aBG(d,e,f){var w=0,v=A.p(x.P),u,t
var $async$aBG=A.q(function(g,h){if(g===1)return A.m(h,v)
for(;;)switch(w){case 0:t=A.d3(2,d,C.a4,!1)
u=B.vA(A.aa(["user_id",f,"token",e],x.N,x.z),"/game-tables/"+t+"/start-game","ludo_start",e)
w=1
break
case 1:return A.n(u,v)}})
return A.o($async$aBG,v)},
btm(d,e,f){var w=0,v=A.p(x.P),u,t
var $async$btm=A.q(function(g,h){if(g===1)return A.m(h,v)
for(;;)switch(w){case 0:t=A.d3(2,d,C.a4,!1)
u=B.vA(A.aa(["user_id",f,"token",e],x.N,x.z),"/game-tables/"+t+"/dice","ludo_dice",e)
w=1
break
case 1:return A.n(u,v)}})
return A.o($async$btm,v)},
btl(d,e,f,g,h){var w=0,v=A.p(x.P),u,t
var $async$btl=A.q(function(i,j){if(i===1)return A.m(j,v)
for(;;)switch(w){case 0:t=A.aa(["user_id",h,"token",f,"token_index",g,"tokenIndex",g],x.N,x.z)
t.k(0,"dice_value",d)
t.k(0,"diceValue",d)
u=B.vA(t,"/game-tables/"+A.d3(2,e,C.a4,!1)+"/move","ludo_move",f)
w=1
break
case 1:return A.n(u,v)}})
return A.o($async$btl,v)},
btk(d,e,f){var w=0,v=A.p(x.P),u,t
var $async$btk=A.q(function(g,h){if(g===1)return A.m(h,v)
for(;;)switch(w){case 0:t=A.d3(2,d,C.a4,!1)
u=B.vA(A.aa(["user_id",f,"token",e],x.N,x.z),"/game-tables/"+t+"/leave-table","ludo_leave",e)
w=1
break
case 1:return A.n(u,v)}})
return A.o($async$btk,v)},
vA(d,e,f,g){var w=0,v=A.p(x.P),u,t,s,r,q,p,o,n,m,l,k
var $async$vA=A.q(function(h,i){if(h===1)return A.m(i,v)
for(;;)switch(w){case 0:m=A.ch()+e
l=A.bR(m,0,null)
k=C.L.eB(d,null)
A.cN("POST",d,f,m)
w=3
return A.e(F.hL(l,k,B.aBE(g)).jI(0,R.fn),$async$vA)
case 3:t=i
s=t.b
r=s>=200&&s<300
q=t.e
p=A.aN(A.aM(q))
o=t.w
A.cM(p.ad(0,o),f,s,r,m)
if(!r)throw A.j(B.EJ(B.bB7(t.gjn(0)),s))
n=C.L.bB(0,A.aN(A.aM(q)).ad(0,o),null)
if(x.P.b(n)){u=n
w=1
break}throw A.j(B.EJ("Invalid JSON",s))
case 1:return A.n(u,v)}})
return A.o($async$vA,v)},
bB7(d){var w,v,u
try{w=x.h.a(C.L.bB(0,d,null))
v=w
v=A.aR(v==null?null:J.B(v,"message"))
if(v==null){v=w
v=A.aR(v==null?null:J.B(v,"error"))}if(v==null)v=d
return v}catch(u){v=d.length!==0?d:"Request failed"
return v}},
EJ(d,e){return new B.lv(d)},
ME:function ME(d){this.a=d},
lv:function lv(d){this.a=d},
bBc(d){var w,v=J.N(d),u=v.h(d,"code")
if(typeof u=="number"&&u>=400){v=v.h(d,"message")
v=v==null?null:J.L(v)
return v==null?"Request failed":v}if(J.f(v.h(d,"success"),!1)){v=v.h(d,"message")
w=v==null?null:J.L(v)
if(w!=null&&w.length!==0)return w}return null},
EK(d){var w,v,u,t,s,r,q,p,o="ludoState",n="ludo_state",m=null,l=J.N(d),k=x.f
if(k.b(l.h(d,o))||k.b(l.h(d,n)))return B.aBL(d)
for(w=["data","game","state","payload","result"],v=x.N,u=x.z,t=x.j,s=0;s<5;++s){r=l.h(d,w[s])
if(!k.b(r))continue
q=A.ao(r,v,u)
if(k.b(q.h(0,o))||k.b(q.h(0,n))||t.b(q.h(0,"cards"))||q.h(0,"currentTurnIndex")!=null||q.h(0,"current_turn_index")!=null){l=A.EA(m,m,v,u)
l.K(0,d)
l.K(0,q)
return B.aBL(l)}if(k.b(q.h(0,"data"))||k.b(q.h(0,"game"))){l=A.EA(m,m,v,u)
l.K(0,d)
l.K(0,q)
return B.EK(l)}}p=l.h(d,"table")
if(k.b(p)){q=A.ao(p,v,u)
if(k.b(q.h(0,o))||k.b(q.h(0,n))){l=A.d0(d,v,u)
l.K(0,q)
return B.aBL(l)}}return B.aBL(d)},
aBL(d){var w,v,u="ludoState",t=J.N(d),s=x.f
if(s.b(t.h(d,u)))return d
w=t.h(d,"ludo_state")
if(s.b(w)){t=x.N
s=x.z
v=A.d0(d,t,s)
v.k(0,u,A.ao(w,t,s))
return v}return d},
a3B(d){var w,v,u
if(d==null)return!1
w=B.EK(d)
v=J.N(w)
if(x.f.b(v.h(w,"ludoState")))return!0
u=x.j
return u.b(v.h(w,"cards"))&&J.cJ(u.a(v.h(w,"cards")))},
rV(d){var w,v,u,t,s,r,q,p,o,n,m="positions"
if(d==null)return D.kN
w=B.EK(d)
v=J.N(w)
u=v.h(w,"ludoState")
t=x.f.b(u)?A.ao(u,x.N,x.z):null
s=t==null
r=s?null:t.h(0,"engine")
if(r==null)r=v.h(w,"engine")
q=(r==null?null:J.L(r).toLowerCase())==="board"
if(q&&!s){p=B.bRb(t.h(0,m))
if(p.length!==0)return p}r=[]
s=!s
if(s)r.push(t.h(0,"cards"))
if(s)r.push(t.h(0,"tokens"))
if(s)r.push(t.h(0,"pawns"))
if(!q&&s)r.push(t.h(0,m))
r.push(v.h(w,"cards"))
r.push(v.h(w,"tokens"))
for(v=r.length,o=0;o<r.length;r.length===v||(0,A.a0)(r),++o){n=B.bRc(r[o])
if(n.length!==0)return n}return D.kN},
bRb(d){var w,v,u,t,s,r,q,p,o,n=x.j
if(!n.b(d)||J.cr(d))return D.kN
w=A.a([],x.G)
for(v=J.b0(d),u=x.N,t=x.z,s=x.Y;v.A();){r=v.gP(v)
if(!n.b(r))continue
q=A.a([],s)
for(p=J.b0(r);p.A();){o=B.aBO(p.gP(p))
q.push(A.aa(["stepNo",o<0?0:o+1,"packed",!1],u,t))}if(q.length!==0)w.push(q)}return w},
bRc(d){var w,v,u,t,s,r,q,p,o,n,m=x.j
if(m.b(d)){w=A.a([],x.G)
for(v=J.b0(d),u=x.f,t=x.Y;v.A();){s=v.gP(v)
if(m.b(s)){r=A.a([],t)
for(q=J.b0(s);q.A();)r.push(B.a3A(q.gP(q)))
w.push(r)}else if(u.b(s))w.push(A.a([B.a3A(s)],t))
else if(typeof s=="number"||typeof s=="string")w.push(A.a([B.a3A(s)],t))}m=x.m
m=A.af(new A.aQ(w,new B.aBM(),m),m.i("M.E"))
return m}if(x.f.b(d)){v=J.bX(d)
u=x.aa
p=A.af(new A.dJ(J.e_(v.gcI(d),new B.aBN(),x.a3),u),u.i("M.E"))
C.b.hh(p)
if(p.length===0)return D.kN
w=A.a([],x.G)
for(u=p.length,t=x.Y,o=0;o<p.length;p.length===u||(0,A.a0)(p),++o){n=p[o]
s=v.h(d,""+n)
if(s==null)s=v.h(d,n)
if(m.b(s)){r=A.a([],t)
for(q=J.b0(s);q.A();)r.push(B.a3A(q.gP(q)))
w.push(r)}else w.push(A.a([B.a3A(s)],t))}return w}return D.kN},
a3A(d){var w,v,u
if(x.f.b(d)){w=A.ao(d,x.N,x.z)
if(!w.aw(0,"stepNo")&&!w.aw(0,"step_no")){v=w.h(0,"position")
u=v==null?w.h(0,"pos"):v
if(u==null)u=w.h(0,"cell")
if(u!=null)w.k(0,"stepNo",B.aBO(u))}return w}if(typeof d=="number"||typeof d=="string")return A.aa(["stepNo",B.aBO(d)],x.N,x.z)
return C.cq},
MJ(d){var w=J.N(d),v=w.h(d,"stepNo")
if(v==null)v=w.h(d,"step_no")
if(v==null)v=w.h(d,"position")
if(v==null)v=w.h(d,"pos")
if(v==null)v=w.h(d,"currentPosition")
if(v==null)v=w.h(d,"current_position")
if(v==null)v=w.h(d,"steps")
w=v==null?w.h(d,"step"):v
return B.aBO(w==null?0:w)},
aBO(d){var w
if(typeof d=="number")return C.d.ai(d)
w=A.cB(A.v(d),null)
return w==null?0:w},
bRf(d){var w,v,u,t=A.a([],x.s)
for(w=J.b0(d);w.A();){v=w.gP(w)
u=v==null?null:C.c.S(J.L(v))
if(u==null)u=""
if(L.aCD(u))t.push(u)}return t},
btn(d,e){var w,v,u=d==null,t=u?null:d.h(0,"playerIds")
if(t==null)t=u?null:d.h(0,"player_ids")
if(x.j.b(t)&&J.cJ(t)){w=B.bRf(t)
if(w.length!==0)return w}v=B.bRe(u?null:d.h(0,"players"))
if(v.length!==0)return v
if(e!=null&&J.cJ(e))return L.MS(e).c
return C.a7},
MI(d,e){var w=null,v="playerIds",u="player_ids",t="botPlayerIds",s="bot_player_ids",r=A.a([],x.s),q=new B.aBQ(r),p=d==null,o=p?w:d.h(0,v)
if(o==null)o=p?w:d.h(0,u)
q.$1(o)
o=p?w:d.h(0,t)
if(o==null)p=p?w:d.h(0,s)
else p=o
q.$1(p)
p=e==null
o=p?w:J.B(e,v)
if(o==null)o=p?w:J.B(e,u)
q.$1(o)
o=p?w:J.B(e,t)
if(o==null)p=p?w:J.B(e,s)
else p=o
q.$1(p)
if(r.length!==0)return r
return B.btn(d,e)},
q0(d,e){var w,v,u,t,s,r,q,p,o,n=null
if(e.length===0)return-1
w=C.b.ew(B.MI(d,n),e)
if(w>=0)return w
v=C.b.ew(B.btn(d,n),e)
if(v>=0)return v
u=d==null?n:d.h(0,"players")
if(x.j.b(u))for(t=J.b0(u),s=x.f;t.A();){r=t.gP(t)
if(!s.b(r))continue
q=J.N(r)
p=q.h(r,"userId")
if(p==null)p=q.h(r,"user_id")
if((p==null?n:J.L(p))!==e)continue
o=q.h(r,"seatIndex")
if(o==null)o=q.h(r,"seat_index")
if(typeof o=="number")return C.d.ai(o)}return-1},
bRe(d){var w,v,u,t,s,r,q,p,o
if(!x.j.b(d)||J.cr(d))return C.a7
w=A.F(x.S,x.N)
for(v=J.b0(d),u=x.f;v.A();){t=v.gP(v)
if(!u.b(t))continue
s=J.N(t)
r=s.h(t,"userId")
if(r==null)r=s.h(t,"user_id")
q=r==null?null:C.c.S(J.L(r))
if(q==null||!L.aCD(q))continue
p=s.h(t,"seatIndex")
if(p==null)p=s.h(t,"seat_index")
if(typeof p=="number")w.k(0,C.d.ai(p),q)}if(w.a===0)return C.a7
v=w.$ti.i("cj<1>")
o=A.af(new A.cj(w,v),v.i("M.E"))
C.b.hh(o)
v=A.ag(o).i("as<1,i>")
v=A.af(new A.as(o,new B.aBP(w),v),v.i("aW.E"))
return v},
op(d){var w,v,u,t,s
if(d==null)return-1
w=d.h(0,"currentTurnIndex")
if(w==null)w=d.h(0,"current_turn_index")
v=w==null?d.h(0,"nextTurnIndex"):w
if(v==null)v=d.h(0,"next_turn_index")
if(typeof v=="number")return C.d.ai(v)
if(typeof v=="string"){u=A.cB(v,null)
if(u!=null)return u}t=d.h(0,"chaal")
if(typeof t=="string"&&t.length!==0){s=C.b.ew(B.btn(d,null),t)
if(s>=0)return s}return-1},
aBR(d){var w,v=null,u=d==null,t=u?v:J.B(d,"winnerId")
if(t==null)t=u?v:J.B(d,"winner_user_id")
if(t==null)return v
w=C.c.S(J.L(t))
return w.length===0?v:w},
MH(d){var w,v,u
if(d==null)return!1
w=J.N(d)
v=w.h(d,"status")
if((v==null?null:J.L(v))==="waiting")return!0
u=w.h(d,"game_status")
if(u==null)u=w.h(d,"gameStatus")
w=J.fI(u)
if(w.n(u,0)||w.n(u,"0"))return!0
return!1},
oq(d){var w,v,u
if(d==null)return!1
if(B.MH(d))return!1
w=J.N(d)
if(J.f(w.h(d,"gameFinished"),!0)||J.f(w.h(d,"game_finished"),!0))return!0
v=w.h(d,"status")
if((v==null?null:J.L(v))==="finished")return!0
u=w.h(d,"game_status")
if(u==null)u=w.h(d,"gameStatus")
w=J.fI(u)
if(w.n(u,2)||w.n(u,"2"))return!0
return B.aBR(d)!=null},
rU(d){var w,v=d==null?null:d.h(0,"ludoState")
if(x.f.b(v)){w=J.B(v,"phase")
return(w==null?null:J.L(w))==="moving"?"moving":"rolling"}return"rolling"},
vD(d){var w,v,u,t,s=d==null,r=s?null:J.B(d,"ludoState")
if(!x.f.b(r)){w=s?null:J.B(d,"dice")
if(typeof w=="number")return C.d.ai(w)
return 0}v=J.N(r)
u=v.h(r,"lastDice")
t=u==null?v.h(r,"last_dice"):u
if(t==null)t=s?null:J.B(d,"dice")
if(typeof t=="number")return C.d.ai(t)
return 0},
bBa(d,e){var w,v,u,t,s,r,q="status"
if(B.oq(e))return
w=B.MH(e)
v=J.N(e)
u=v.h(e,q)
t=u==null?null:J.L(u)
u=!w
if(!(!u||t==="rolling"||t==="moving"||t==="playing"||B.a3B(e))&&u)return
for(s=0;s<4;++s){r=D.BY[s]
if(J.f(v.h(e,r),!0))continue
d.L(0,r)}if(w){d.k(0,q,"waiting")
d.k(0,"game_status",0)}else{v=d.h(0,q)
if((v==null?null:J.L(v))==="finished"&&t!=="finished")d.k(0,q,t==null?"rolling":t)}},
q_(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f="dice",e="message",d="ludoState",a0="cards",a1="tokens",a2="phase",a3="lastDice",a4="last_dice"
if(a6==null||J.cr(a6))return a5
a6=B.EK(a6)
if(!B.a3B(a6)&&a5!=null){w=A.ao(a5,x.N,x.z)
for(v=J.N(a6),u=!1,t=0;t<27;++t){s=D.BR[t]
if(v.aw(a6,s)&&v.h(a6,s)!=null){w.k(0,s,v.h(a6,s))
u=!0}}if(v.h(a6,f)!=null){w.k(0,f,v.h(a6,f))
u=!0}if(v.h(a6,e)!=null){w.k(0,e,v.h(a6,e))
u=!0}if(u){B.bBb(w,a6)
B.bBa(w,a6)}return u?w:a5}v=a5!=null
r=x.N
q=x.z
w=v?A.ao(a5,r,q):A.F(r,q)
for(p=J.pa(a6),p=p.gab(p),o=x.f;p.A();){n=p.gP(p)
s=n.a
m=n.b
if(m==null)continue
if(s==="ludoState"&&o.b(m)){l=w.h(0,d)
if(o.b(l)){n=A.ao(l,r,q)
k=A.ao(m,r,q)
j=A.EA(null,null,r,q)
j.K(0,n)
j.K(0,k)
i=B.rV(A.aa(["ludoState",n],r,q))
h=B.rV(A.aa(["ludoState",k],r,q))
k=h.length===0
if(k&&i.length!==0){if(n.h(0,a0)!=null)j.k(0,a0,n.h(0,a0))
if(n.h(0,a1)!=null)j.k(0,a1,n.h(0,a1))
g=!0}else{g=i.length!==0&&!k&&B.bRd(i,h)
if(g){if(n.h(0,a0)!=null)j.k(0,a0,n.h(0,a0))
if(n.h(0,a1)!=null)j.k(0,a1,n.h(0,a1))}}if(g){if(n.h(0,a2)!=null)j.k(0,a2,n.h(0,a2))
if(n.h(0,a3)!=null)j.k(0,a3,n.h(0,a3))
if(n.h(0,a4)!=null)j.k(0,a4,n.h(0,a4))}w.k(0,d,j)}else w.k(0,d,A.ao(m,r,q))
continue}w.k(0,s,m)}if(v)for(t=0;t<27;++t){s=D.BR[t]
if(C.b.t(D.BY,s))continue
if(!w.aw(0,s)||w.h(0,s)==null){l=a5.h(0,s)
if(l!=null)w.k(0,s,l)}}B.bBb(w,a6)
B.bBa(w,a6)
return w},
bBb(d,e){var w,v,u="currentTurnIndex",t="current_turn_index",s="nextTurnIndex",r="next_turn_index",q=J.N(e),p=q.h(e,u)
if(p==null)p=q.h(e,t)
w=q.h(e,s)
if(w==null)w=q.h(e,r)
v=p==null?w:p
if(v==null)return
d.k(0,u,v)
d.k(0,t,v)
if(w!=null){d.k(0,s,w)
d.k(0,r,w)}},
bRd(d,e){var w,v,u,t,s,r,q,p,o,n,m=e.length
if(m===0&&d.length!==0)return!0
w=d.length
if(w<m)m=w
for(v=0,u=0,t=0;t<m;++t){s=d[t]
r=e[t]
q=J.N(s)
p=J.N(r)
o=q.gB(s)<p.gB(r)?q.gB(s):p.gB(r)
for(n=0;n<o;++n){v+=B.MJ(q.h(s,n))
u+=B.MJ(p.h(r,n))}}return v>0&&u===0},
aBM:function aBM(){},
aBN:function aBN(){},
aBQ:function aBQ(d){this.a=d},
aBP:function aBP(d){this.a=d},
vF(){var w=0,v=A.p(x.H)
var $async$vF=A.q(function(d,e){if(d===1)return A.m(e,v)
for(;;)switch(w){case 0:$.jM=$.jM+1
w=2
return A.e(A.hg(),$async$vF)
case 2:return A.n(null,v)}})
return A.o($async$vF,v)},
rX(){var w=0,v=A.p(x.H),u
var $async$rX=A.q(function(d,e){if(d===1)return A.m(e,v)
for(;;)switch(w){case 0:u=$.jM
w=(u>0?$.jM=u-1:u)===0?2:4
break
case 2:w=5
return A.e(A.e5(),$async$rX)
case 5:w=3
break
case 4:w=6
return A.e(A.hg(),$async$rX)
case 6:case 3:return A.n(null,v)}})
return A.o($async$rX,v)},
rY:function rY(){},
vC:function vC(d,e){this.b=d
this.a=e},
MF:function MF(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
afh:function afh(d){var _=this
_.d=null
_.e=1
_.f=!1
_.r=d
_.c=_.a=null},
b8K:function b8K(d,e){this.a=d
this.b=e},
b8J:function b8J(d){this.a=d},
b8I:function b8I(){},
b8L:function b8L(d,e){this.a=d
this.b=e},
b8N:function b8N(d){this.a=d},
b8M:function b8M(){},
bBg(d,e,f,g){return new B.a3H(e,f,d,g,null)},
bBh(d,e,f,g,h,i,j,k,l,m,n,o,p){return new B.a3I(d,k,n,g,i,m,o,h,f,l,j,p,!0,null)},
bHi(d){var w,v,u
for(w=J.b0(d),v=0;w.A();){u=w.gP(w)
if(u.c)v+=40
else if(!u.a)v+=10+C.k.bk(C.k.R(u.b,0,56),4)}return v},
bwk(d){return J.mL(d,new B.bpZ()).gB(0)},
a3H:function a3H(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aCA:function aCA(d){this.a=d},
afm:function afm(d){this.a=d},
U4:function U4(d,e){this.c=d
this.a=e},
zy:function zy(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
a3M:function a3M(d,e,f){this.c=d
this.d=e
this.a=f},
a3I:function a3I(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.z=l
_.Q=m
_.as=n
_.at=o
_.ax=p
_.a=q},
aCB:function aCB(d,e,f){this.a=d
this.b=e
this.c=f},
MN:function MN(d,e,f){this.c=d
this.d=e
this.a=f},
aCz:function aCz(d){this.a=d},
VU:function VU(d,e){this.c=d
this.a=e},
zA:function zA(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
MP:function MP(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bpZ:function bpZ(){},
zB:function zB(d,e){this.c=d
this.a=e},
aCE:function aCE(d){this.a=d},
afj:function afj(d){this.a=d},
a3J(d){if(d<2)return 2
if(d>4)return 4
return d},
bRk(d){var w,v,u=B.a3J(d),t=A.bp(4,!1,!1,x.y)
for(w=0;w<u;++w){v=D.iR.h(0,B.MQ(w,u))
if(v==null)v=0
if(v<4)t[v]=!0}return t},
MQ(d,e){var w,v=B.a3J(e)
if(v===2)w=D.aad
else w=v===3?D.aac:D.aab
if(d<0||d>=w.length)return C.b.gW(w)
return w[d]},
rZ(d,e){var w=D.iR.h(0,B.MQ(d,e))
return w==null?0:w},
bBi(d,e){var w,v,u=B.a3J(e)
for(w=0;w<u;++w){v=D.iR.h(0,B.MQ(w,u))
if((v==null?0:v)===d)return w}return 0},
axV(d,e,f,g,h){var w=0,v=A.p(x.M),u,t
var $async$axV=A.q(function(i,j){if(i===1)return A.m(j,v)
for(;;)switch(w){case 0:t=O
w=3
return A.e(B.axU(d,e,f,g,h),$async$axV)
case 3:u=t.bA5(j,d,200,f)
w=1
break
case 1:return A.n(u,v)}})
return A.o($async$axV,v)},
axU(d,e,f,g,h){var w=0,v=A.p(x.P),u,t,s,r,q,p,o,n,m,l,k
var $async$axU=A.q(function(i,j){if(i===1)return A.m(j,v)
for(;;)switch(w){case 0:m=A.ch()+"/game-tables/customise"
l=A.bR(m,0,null)
k=A.aa(["user_id",h,"token",g,"boot_value",O.bA4(d),"no_of_players",f,"gameType",e],x.N,x.z)
A.cN("POST",k,"game_tables/customise",m)
t=O.axS(g)
w=3
return A.e(F.hL(l,C.L.eB(k,null),t),$async$axU)
case 3:s=j
t=s.b
r=t>=200&&t<300
q=s.e
p=A.aN(A.aM(q))
o=s.w
A.cM(p.ad(0,o),"game_tables/customise",t,r,m)
if(!r)throw A.j(O.LL(O.bsS(s.gjn(0)),t))
n=C.L.bB(0,A.aN(A.aM(q)).ad(0,o),null)
if(!x.P.b(n))throw A.j(O.LL("Invalid response",t))
u=n
w=1
break
case 1:return A.n(u,v)}})
return A.o($async$axU,v)},
bRm(d){var w=C.c.S(d)
if(w.length===0||w==="null"||w==="undefined"||w==="0")return!1
return!0},
bw6(d){var w=N.cu(d)
if(!w.y)w.m9()},
bHk(d,e,f){var w,v=L.IQ(d),u=v==null?null:v.amp()
if(u==null)u=""
v=d.h(0,"turnTimerEpoch")
if(v==null){v=d.h(0,"turn_timer_epoch")
w=v}else w=v
return""+f+":"+u+":"+A.v(w==null?"":w)+":"+e},
bp7(d){if(d<=0)return 0
return Math.min(10,d)},
c25(d,e){var w=L.bwy(d)
if(w>0)return B.bp7(w)
if(e!=null&&e>0)return B.bp7(e)
return 0},
bBd(d,e){return new F.rW(e,d,null)}},D,Ae,A2,I,A3,K,Af,Ag,Ah,H,Ai,Z,F,E,P,G,Aj,Ak,A_,Al,Am,An
J=c[1]
A=c[0]
C=c[2]
A4=c[149]
A5=c[25]
A0=c[107]
A6=c[110]
A1=c[152]
N=c[59]
A7=c[105]
A8=c[109]
V=c[68]
O=c[38]
M=c[145]
A9=c[150]
L=c[32]
R=c[148]
Aa=c[153]
S=c[39]
T=c[122]
Ab=c[55]
Ac=c[93]
W=c[151]
Ad=c[114]
U=c[64]
X=c[128]
Q=c[92]
Y=c[146]
B=a.updateHolder(c[15],B)
D=c[144]
Ae=c[58]
A2=c[26]
I=c[147]
A3=c[61]
K=c[63]
Af=c[43]
Ag=c[60]
Ah=c[80]
H=c[74]
Ai=c[35]
Z=c[83]
F=c[65]
E=c[69]
P=c[62]
G=c[66]
Aj=c[30]
Ak=c[37]
A_=c[136]
Al=c[139]
Am=c[49]
An=c[124]
B.Lz.prototype={
n(d,e){if(e==null)return!1
if(J.aw(e)!==A.a6(this))return!1
return e instanceof B.Lz},
gH(d){return A.ar("tnum",1,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
p(d){return"FontFeature('tnum', 1)"}}
B.MO.prototype={
Gk(d,e,f,g,h){return this.b6c(d,e,f,g,h)},
b6c(d,e,f,g,h){var w=0,v=A.p(x.c),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$Gk=A.q(function(a0,a1){if(a0===1){s.push(a1)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.e(B.axV(d,e,f,g,h),$async$Gk)
case 7:q=a1
m=r.a4_(q)
u=m
w=1
break
t=2
w=6
break
case 4:t=3
j=s.pop()
m=A.a9(j)
w=m instanceof O.v6?8:10
break
case 8:p=m
t=12
w=15
return A.e(O.yR(d,null,e,f,g,h),$async$Gk)
case 15:o=a1
m=r.a4_(o)
u=m
w=1
break
t=3
w=14
break
case 12:t=11
i=s.pop()
m=A.a9(i)
if(m instanceof O.v6){n=m
m=n.a
k=n.b
throw A.j(B.EJ(m,k))}else throw i
w=14
break
case 11:w=3
break
case 14:w=9
break
case 10:throw j
case 9:w=6
break
case 3:w=2
break
case 6:case 1:return A.n(u,v)
case 2:return A.m(s.at(-1),v)}})
return A.o($async$Gk,v)},
a4_(d){var w=d.b
A.aa(["table_id",C.b.gW(w).a,"ludo_table_id",C.b.gW(w).a,"gameType",C.b.gW(w).b,"bootValue",C.b.gW(w).c,"noOfPlayers",C.b.gW(w).d],x.N,x.z)
return new B.ME(d.a)}}
B.MR.prototype={}
B.a3D.prototype={
T(){return"LudoOnlineLobbyMode."+this.b}}
B.t_.prototype={
n(d,e){var w,v=this
if(e==null)return!1
if(v!==e)w=e instanceof B.t_&&v.a===e.a&&v.b===e.b&&v.c===e.c&&v.d===e.d&&v.e===e.e
else w=!0
return w},
gH(d){var w=this
return A.ar(w.a,w.b,w.c,w.d,w.e,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)}}
B.zz.prototype={
gaoc(){var w=this.at
if(w>=2)return w>4?4:w
return this.as.a==="computer"?2:4},
h7(){var w=0,v=A.p(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k
var $async$h7=A.q(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=r.c.oi(null,!0,!0,D.C3)
l=r.gF()
if((l.c&4)===0)r.I(m)
q=$.aA
if(q==null||q.length===0){m=r.c.A9("Please log in to play",!1)
if((l.c&4)===0)r.I(m)
w=1
break}t=4
w=7
return A.e(r.K7(q),$async$h7)
case 7:p=e
m=r.c.Fb(!1,B.bRj(p,r.as.c))
if((l.c&4)===0)r.I(m)
t=2
w=6
break
case 4:t=3
k=s.pop()
o=A.a9(k)
m=r.c.Ac(A.v(o),!0,!1)
if((l.c&4)===0)r.I(m)
w=6
break
case 3:w=2
break
case 6:case 1:return A.n(u,v)
case 2:return A.m(s.at(-1),v)}})
return A.o($async$h7,v)},
K7(d){return this.aLe(d)},
aLe(d){var w=0,v=A.p(x.u),u,t=this,s,r,q,p,o,n,m
var $async$K7=A.q(function(e,f){if(e===1)return A.m(f,v)
for(;;)switch(w){case 0:o=t.as.a
n=o==="computer"||o==="local"?A.a([t.gaoc()],x.t):D.BD
o=x.Q
s=A.F(x.N,o)
m=J
w=3
return A.e(A.hb(new A.as(n,new B.aCv(t,d),A.ag(n).i("as<1,am<R<hc>>>")),x.u),$async$K7)
case 3:o=m.bxz(f,new B.aCw(),o),r=o.$ti,o=new A.mX(J.b0(o.a),o.b,C.hS,r.i("mX<1,2>")),r=r.y[1]
case 4:if(!o.A()){w=5
break}q=o.d
if(q==null)q=r.a(q)
p=q.a
if(p.length===0){w=4
break}s.k(0,p,q)
w=4
break
case 5:o=s.$ti.i("bZ<2>")
o=A.af(new A.bZ(s,o),o.i("M.E"))
u=o
w=1
break
case 1:return A.n(u,v)}})
return A.o($async$K7,v)},
AS(d){return this.b6d(d)},
b6d(a2){var w=0,v=A.p(x.v),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$AS=A.q(function(a3,a4){if(a3===1){s.push(a4)
w=t}for(;;)switch(w){case 0:d=$.aA
a0=S.cF()
if(a0==null){k=$.bd
a0=k==null?null:k.a}q=a0
if(d==null||d.length===0||q==null||q.length===0){k=r.c.Fa("Please log in to play",!0)
if((r.gF().c&4)===0)r.I(k)
u=null
w=1
break}k=r.c.mf(null,!0,!0)
j=r.gF()
if((j.c&4)===0)r.I(k)
t=4
i=C.c.S(a2.e)
p=i
w=J.ax(p)!==0?7:8
break
case 7:w=9
return A.e(B.a3y(p,d,q),$async$AS)
case 9:k=r.c.F9(!1)
if((j.c&4)===0)r.I(k)
u=p
w=1
break
case 8:k=r.as
h=k.a
h=h==="computer"||h==="local"
g=a2.a
f=a2.b
k=k.c
w=h?10:12
break
case 10:w=13
return A.e(r.ax.Gk(g,k,f,d,q),$async$AS)
case 13:w=11
break
case 12:w=14
return A.e(B.aBF(g,k,f,d,q),$async$AS)
case 14:case 11:o=a4
k=r.c.F9(!1)
if((j.c&4)===0)r.I(k)
k=o.a
u=k
w=1
break
t=2
w=6
break
case 4:t=3
a1=s.pop()
k=A.a9(a1)
if(k instanceof B.lv){n=k
k=r.c.mf(n.a,!0,!1)
if((j.c&4)===0)r.I(k)
u=null
w=1
break}else if(k instanceof O.v6){m=k
k=r.c.mf(m.a,!0,!1)
if((j.c&4)===0)r.I(k)
u=null
w=1
break}else{l=k
k=r.c.mf(A.v(l),!0,!1)
if((j.c&4)===0)r.I(k)
u=null
w=1
break}w=6
break
case 3:w=2
break
case 6:case 1:return A.n(u,v)
case 2:return A.m(s.at(-1),v)}})
return A.o($async$AS,v)},
F0(d){return this.aYW(d)},
aYW(d){var w=0,v=A.p(x.y),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g
var $async$F0=A.q(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:i=$.aA
h=S.cF()
if(h==null){m=$.bd
h=m==null?null:m.a}q=h
if(i==null||i.length===0||q==null||q.length===0){m=r.c.Fa("Please log in to play",!0)
if((r.gF().c&4)===0)r.I(m)
u=!1
w=1
break}m=d.a
if(m<=0){m=r.c.Fa("Invalid table boot",!0)
if((r.gF().c&4)===0)r.I(m)
u=!1
w=1
break}l=r.c.mf(null,!0,!0)
k=r.gF()
if((k.c&4)===0)r.I(l)
t=4
l=A.ch()
w=7
return A.e(new F.eU(l).Fn(m,"ludo_local_boot:"+m+":"+d.b+":"+q+":"+Date.now(),"game_bet",i,q),$async$F0)
case 7:p=f
w=8
return A.e(K.fi(p),$async$F0)
case 8:m=r.c.F9(!1)
if((k.c&4)===0)r.I(m)
u=!0
w=1
break
t=2
w=6
break
case 4:t=3
g=s.pop()
m=A.a9(g)
if(m instanceof F.pj){o=m
m=r.c.mf(o.a,!0,!1)
if((k.c&4)===0)r.I(m)
u=!1
w=1
break}else{n=m
m=r.c.mf(A.v(n),!0,!1)
if((k.c&4)===0)r.I(m)
u=!1
w=1
break}w=6
break
case 3:w=2
break
case 6:case 1:return A.n(u,v)
case 2:return A.m(s.at(-1),v)}})
return A.o($async$F0,v)}}
B.q1.prototype={
vI(d,e,f,g,h){var w=this,v=g==null?w.a:g,u=f==null?w.b:f,t=h==null?w.c:h
return new B.q1(v,u,t,e?d:w.d)},
Fa(d,e){return this.vI(d,e,null,null,null)},
mf(d,e,f){return this.vI(d,e,f,null,null)},
F9(d){return this.vI(null,!1,d,null,null)},
A9(d,e){return this.vI(d,!1,null,e,null)},
oi(d,e,f,g){return this.vI(d,e,null,f,g)},
Fb(d,e){return this.vI(null,!1,null,d,e)},
Ac(d,e,f){return this.vI(d,e,null,f,null)},
gdG(){var w=this
return[w.a,w.b,w.c,w.d]}}
B.vG.prototype={
V(){return new B.afl()}}
B.afl.prototype={
a4(){this.ag()
A.e5()},
u(d){return Aj.bth("assets/anim/ludo.json",C.l,this.a.c,E.ah,C.be,!1,0.55)}}
B.ML.prototype={
V(){var w=$.p6(),v=A.bp(4,1,!1,x.S),u=A.a([],x.t)
return new B.TQ(new B.jL(w),v,u,C.bM,null,null)}}
B.TQ.prototype={
a4(){var w,v,u,t,s,r=this,q=null
r.aul()
w=J.ig(4,x.y)
for(v=r.a,u=0;t=u<4,t;++u){v.toString
w[u]=t&&v.c[u]}r.d=w
r.a.toString
v=B.bRa(w,q)
r.e=v
if(v.length===0)r.e=A.c_(D.nl,!0,x.S)
w=J.ig(4,x.I)
for(v=x.r,s=0;s<4;++s)w[s]=A.bp(4,D.fx,!1,v)
r.f=w
v=new B.b9i()
v.$0()
$.at.aW$.push(r)
$.at.ak$.push(new B.b9g(r,v))
r.cx=A.bb(q,C.il,0,q,1,q,r)
v=A.bb(q,Q.kp,0,q,1,q,r)
v.i1(0,!0)
r.cy=v
t=x.Z
r.db=new A.au(A.bN(C.d0,v,q),new A.aC(0.35,1,t),t.i("au<aL.T>"))
$.at.ak$.push(new B.b9h(r))},
kC(d){this.a.toString
return!1},
kM(d){if(d===C.hN||d===C.jB||d===C.hO)return
if(d===C.cw){if($.jM>0)A.hg()
$.at.ak$.push(new B.b9f(this))}},
l(){var w,v=this
$.at.h8(v)
w=v.cx
w===$&&A.b()
w.l()
w=v.cy
w===$&&A.b()
w.l()
v.auk()},
ghv(){var w=this.e
w===$&&A.b()
return w[C.k.aj(this.w,w.length)]},
vc(){var w=this
if(w.c==null||!w.kC(w.ghv())||w.Q||w.as||w.ax||w.ay)return
w.vb()},
vb(){var w=0,v=A.p(x.H),u,t=2,s=[],r=[],q=this,p,o,n
var $async$vb=A.q(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.ax){w=1
break}q.ax=!0
t=3
n=x.H
w=6
return A.e(A.ct(M.zm,null,n),$async$vb)
case 6:if(q.c==null||!q.kC(q.ghv())||q.Q||q.as){r=[1]
w=4
break}w=7
return A.e(q.yQ(!0),$async$vb)
case 7:if(q.c==null||!q.as||!q.kC(q.ghv())){r=[1]
w=4
break}w=8
return A.e(A.ct(C.h3,null,n),$async$vb)
case 8:if(q.c==null||!q.as||!q.kC(q.ghv())){r=[1]
w=4
break}p=A.c_(q.at,!0,x.S)
if(J.ax(p)===0){q.E(new B.b92(q))
if(q.y===6)q.vc()
else q.RM()
r=[1]
w=4
break}o=q.aPU(q.ghv(),p,q.y)
w=9
return A.e(q.Co(q.ghv(),o),$async$vb)
case 9:r.push(5)
w=4
break
case 3:r=[2]
case 4:t=2
q.ax=!1
if(q.c!=null)$.at.ak$.push(new B.b93(q))
w=r.pop()
break
case 5:case 1:return A.n(u,v)
case 2:return A.m(s.at(-1),v)}})
return A.o($async$vb,v)},
aPU(d,e,f){var w,v,u,t,s,r,q,p,o,n=C.b.gW(e)
for(w=e.length,v=this.CW,u=f===6,t=-2147483647,s=0;s<e.length;e.length===w||(0,A.a0)(e),++s){r=e[s]
q=this.f
q===$&&A.b()
p=q[d][r]
q=p.a
o=q&&u?80:0
if(!q){q=p.b
o=(q+f>=56?o+200:o)+q
if(this.afZ(d,r,f))o+=120}o+=v.cX(8)
if(o>t){t=o
n=r}}return n},
afZ(d,e,f){var w,v,u,t,s,r,q=this,p=q.f
p===$&&A.b()
w=p[d][e]
if(w.a||w.c||w.b>50)return!1
if(w.b+f>50)return!1
p=q.r
v=p.oZ(d,w)
v.toString
u=C.k.aj(v+f,52)
if(D.o8.t(0,u))return!1
for(t=0;t<4;++t){if(t!==d){v=q.d
v===$&&A.b()
v=!v[t]}else v=!0
if(v)continue
for(s=0;s<4;++s){r=q.f[t][s]
if(p.oZ(t,r)===u&&!r.a&&!r.c)return!0}}return!1},
yQ(d){return this.aRV(d)},
a9C(){return this.yQ(!1)},
aRV(d){var w=0,v=A.p(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i
var $async$yQ=A.q(function(e,f){if(e===1)return A.m(f,v)
for(;;)switch(w){case 0:if(t.Q||t.as||t.ay){w=1
break}s=!d
if(s&&t.kC(t.ghv())){w=1
break}t.E(new B.b8Y(t))
if(s)P.ds()
$.bL().by(0,A_.li)
r=t.CW
q=d?16:14
s=x.H,p=q-2,o=q-4,n=0
case 3:if(!(n<q)){w=5
break}if(t.c==null){w=1
break}m=t.cx
m===$&&A.b()
m.z=C.bF
m.y=m.w=null
m.r.ue(0,!0)
m.Db(0)
m.aD()
l=m.Q
l===$&&A.b()
if(m.as!==l){m.as=l
m.wH(l)}m.IK(m.b)
new B.b8Z(t,r).$0()
t.c.dh()
if(d)k=n<o?110:160
else if(n<o)k=85
else{m=n<p?110:140
k=m}w=6
return A.e(A.ct(new A.aT(1000*k),null,s),$async$yQ)
case 6:case 4:++n
w=3
break
case 5:if(t.c==null){w=1
break}p=t.cx
p===$&&A.b()
p.sq(0,0)
j=t.ghv()
i=t.y=t.x
t.z[j]=i
t.E(new B.b9_(t))
w=7
return A.e(A.ct(A.c8(0,d?800:550,0),null,s),$async$yQ)
case 7:if(t.c==null){w=1
break}s=t.f
s===$&&A.b()
if(t.r.a_C(s,j,i).length===0){if(t.c==null){w=1
break}t.E(new B.b90(t))
w=1
break}t.E(new B.b91(t,j,i))
if(d){w=1
break}t.vc()
case 1:return A.n(u,v)}})
return A.o($async$yQ,v)},
RM(){var w,v,u=this
u.as=!1
u.at=A.a([],x.t)
w=u.w
v=u.e
v===$&&A.b()
u.w=(w+1)%v.length
$.at.ak$.push(new B.b8P(u))},
aMP(d,e){var w=this
if(!w.as||d!==w.ghv())return
if(!C.b.t(w.at,e))return
if(w.kC(w.ghv())||w.ay)return
w.Co(d,e)},
Co(d,e){return this.axq(d,e)},
axq(d,e){var w=0,v=A.p(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$Co=A.q(function(f,g){if(f===1)return A.m(g,v)
for(;;)switch(w){case 0:l=t.ghv()
if(d!==l||t.ay){w=1
break}s=t.y
r=t.f
r===$&&A.b()
q=r[l][e]
p=t.afZ(l,e,s)
r=t.r
o=r.a_D(l,s,q,e)
w=o.length>1?3:4
break
case 3:$.bL().by(0,D.ur)
t.ay=!0
t.E(new B.b8Q(t,l,e,o))
n=x.H,m=1
case 5:if(!(m<o.length)){w=7
break}if(t.c==null){t.ay=!1
t.ch=null
w=1
break}t.a.toString
w=8
return A.e(A.ct(new A.aT(11e4),null,n),$async$Co)
case 8:case 6:++m
w=5
break
case 7:if(t.c!=null)t.E(new B.b8R(t))
t.ay=!1
case 4:if(t.c==null){w=1
break}r.agl(t.f,l,s,e)
if(p)$.bL().by(0,D.MT)
else if(t.f[l][e].c)$.bL().by(0,D.atv)
if(r.b9i(t.f[l])){t.E(new B.b8S(t))
t.aTX(l)
w=1
break}if(s===6){t.E(new B.b8T(t))
t.vc()
w=1
break}t.E(new B.b8U(t))
case 1:return A.n(u,v)}})
return A.o($async$Co,v)},
aTX(d){var w,v,u=this,t={}
u.a.toString
w=$.bL()
w.by(0,V.bW)
u.a.toString
v=D.no[d]+" wins!"
t.a=new B.b96()
w=u.c
w.toString
F.ht(null,!1,new B.b97(u,v,d),w,x.H).hH(new B.b98(t))
$.at.ak$.push(new B.b99(t,u))},
CH(){var w=0,v=A.p(x.H),u=this,t
var $async$CH=A.q(function(d,e){if(d===1)return A.m(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return A.e(F.ht(C.l.j(0.72),!0,new B.b8X(),t,x.y),$async$CH)
case 2:if(e===!0&&u.c!=null){t=u.c
t.toString
A.aZ(t,!1).bi(0)}return A.n(null,v)}})
return A.o($async$CH,v)},
u(d){var w,v,u,t,s,r,q=this,p=null,o=!q.Q&&!q.as&&!q.kC(q.ghv())&&!q.ay,n=q.d
n===$&&A.b()
w=new A.aQ(n,new B.b9b(),A.ag(n).i("aQ<1>")).gB(0)
q.a.toString
n=x.p
v=A.a([B.bBg("Local \xb7 Pass & Play",q.gaBa(),new B.b9c(d),w)],n)
if(q.Q||q.y>0){u=G.ie.j(0.88)
t=A.x(20)
s=F.Q(G.ac.j(0.7),1)
v.push(new A.a4(G.qU,A.y(p,A.l(q.Q?"Rolling\u2026":"This turn: "+q.y,p,p,p,p,p,D.Oi,p,p),C.f,p,p,new A.u(u,p,s,t,p,p,C.m),p,p,p,p,Y.r0,p,p,p),p))}u=F.S(new B.MN(A.a([q.Le(0),q.Le(1),q.Le(2),q.Le(3)],x.o),q.gay6(),p),1)
t=q.Q&&!q.kC(q.ghv())
if(q.as&&!q.kC(q.ghv()))s="Pick a token"
else if(q.kC(q.ghv()))s="Opponent"
else{q.a.toString
s=D.no[q.ghv()]+"'s Turn"}r=q.as&&!q.kC(q.ghv())?"Move":"Roll Dice"
v.push(F.S(F.P(A.a([u,new A.a4(D.a2Z,new B.MP(o,new B.b9d(q),t,r,s,p),p)],n),E.j,C.i,E.n),1))
return F.bC6(!1,A.cT(p,D.q1,new B.zB(A.cI(!0,F.P(v,E.j,C.i,E.n),C.N,!0),p),p),new B.b9e(q),x.K)},
Le(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.d
k===$&&A.b()
if(!k[d])return null
w=d===l.ghv()
k=D.e3[d]
if(l.kC(d))v=B.a3z("computer:"+d,"",d)
else{l.a.toString
v=D.no[d]+" Player"}u=l.f
u===$&&A.b()
u=B.bHi(u[d])
t=w&&l.Q?l.x:l.z[d]
s=w&&l.Q
r=l.cx
r===$&&A.b()
q=l.db
q===$&&A.b()
p=l.kC(d)
o=w&&!l.as&&!l.kC(d)&&!l.ay
n=w&&l.as
m=l.f
n=n?"Pick \xb7 Win "+B.bwk(m[d])+"/4":"Win "+B.bwk(m[d])+"/4"
return B.bBh(k,!0,o,t,q,w,p,v,new B.b94(l),s,u,r,n)},
ay7(d){var w,v,u,t,s,r=this,q=null,p=D.e3[r.ghv()],o=r.d
o===$&&A.b()
w=A.dE(C.fD,q,q,new B.MK(o,q),C.a8)
v=r.f
v===$&&A.b()
u=r.ghv()
t=r.at
s=r.as&&!r.ay
return new B.zA(d,new A.ay(C.C,q,C.as,C.u,A.a([w,B.bBe(r.ch,t,r.gaMO(),D.e3,o,r.r,s,d,v,u)],x.p),q),p,q)}}
B.XZ.prototype={
b1(){this.ba()
this.b9()
this.dl()},
l(){var w=this,v=w.aO$
if(v!=null)v.N(0,w.gde())
w.aO$=null
w.a9()}}
B.ams.prototype={}
B.Y_.prototype={
a4(){this.ag()
B.vF()
$.at.ak$.push(new B.bng(this))},
l(){B.rX()
this.auj()}}
B.MM.prototype={
V(){return new B.TR()}}
B.TR.prototype={
a4(){this.aun()
$.at.aW$.push(this)},
kM(d){if(d===C.cw)if($.jM>0)A.hg()},
l(){$.at.h8(this)
this.aum()},
aLz(){var w,v=this.c
if(v==null)return
w=A.aZ(v,!1)
if(w.rX())w.bi(0)},
u(a2){var w,v,u,t,s,r=this,q=null,p=A.bl(a2,C.bK,x.w).w.a,o=p.a>=640,n=p.b,m=n<520,l=!o||m,k=o?820:420,j=r.gaLy(),i=A.bO(0,A.eW(C.bi,A.bF(q,new A.u(q,q,q,q,q,new F.ak(C.Q,C.V,C.t,A.a([C.l.j(0.72),C.l.j(0.9)],x.O),q,q),C.m),C.Y),C.O,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,j,q,q,q,q,q,q)),h=o?20:14,g=m?6:12,f=A.x(22),e=F.Q(I.b7.j(0.75),1.4),d=A.a([new A.W(1,C.r,I.b7.j(0.14),C.o,28),new A.W(0,C.r,C.l.j(0.55),D.ana,30)],x.V),a0=A.x(21),a1=o?20:16
if(m)w=14
else w=o?20:16
v=o?20:16
if(m)u=12
else u=o?18:16
if(o){t=F.S(new B.TF(l,q),4)
s=m?10:18
s=new A.zg(F.V(A.a([t,new A.G(s,q,q,q),F.S(new B.Vu(new B.b9j(r),new B.b9k(r),l,q),6)],x.p),E.ab,C.i,E.n,0),q)
t=s}else t=F.P(A.a([D.aHY,Q.bk,new B.Vu(new B.b9l(r),new B.b9m(r),!0,q)],x.p),E.j,C.i,E.v)
s=x.p
return A.cT(q,C.w,new A.ay(C.C,q,C.J,C.u,A.a([i,A.cI(!0,A.aE(new A.a4(new A.A(h,g,h,g),A.b4(!1,C.z,!0,q,new A.cO(new A.ad(0,k,0,n*0.92),A.bF(A.dy(a0,new A.ay(C.C,q,C.J,C.u,A.a([new A.a4(new A.A(a1,w,v,u),A.ek(t,q,C.O,q,G.ee,C.a1),q),A.aH(q,new B.abx(j,q),q,q,q,8,8,q)],s),q),C.ai,q),new A.u(q,q,e,f,d,D.apR,C.m),C.Y),q),C.f,C.w,0,q,q,q,q,q,C.F),q),q,q),C.N,!0)],s),q),q)}}
B.abx.prototype={
u(d){var w=null
return new A.G(44,44,A.rS(C.bi,A.bF(D.U_,new A.u(D.xw.j(0.92),w,F.Q(I.b7.j(0.85),1.2),w,w,w,C.G),C.Y),w,new B.aZY(this),w,w,w),w)}}
B.TF.prototype={
u(d){var w=null,v=this.c,u=v?C.i:C.Z,t=v?12:16,s=K.G1(C.jD,D.aEV,new B.b7J()),r=x.p,q=F.V(A.a([F.S(A.y(w,w,C.f,I.b7.j(0.45),w,w,w,1,w,w,w,w,w,w),1),new A.a4(E.eR,F.fv(C.q,0.7853981633974483,A.y(w,w,C.f,w,w,new A.u(I.b7,w,w,A.x(1.5),w,w,C.m),w,7,w,w,w,w,w,7)),w),F.S(A.y(w,w,C.f,I.b7.j(0.45),w,w,w,1,w,w,w,w,w,w),1)],r),E.j,C.i,E.n,0),p=A.l("FRIENDS MULTIPLAYER",w,w,w,w,w,A.E(w,w,G.ib.j(0.95),w,w,w,w,w,w,w,w,11,w,w,C.B,w,w,!0,w,1.4,w,w,w,w,w,w),w,w),o=v?12:16,n=A.ai(M.eq,G.ib.j(0.9),w,w,20),m=C.h.j(0.78)
t=A.a([D.aHu,new A.G(w,t,w,w),s,D.aCW,E.aX,q,E.aN,p,new A.G(w,o,w,w),F.V(A.a([n,H.aT,F.S(A.l("Play with friends in a private room. Host a table and share your invite code, or join using a code from a friend.",w,w,w,w,w,A.E(w,w,m,w,w,w,w,w,w,w,w,v?12.5:13.5,w,w,C.av,w,1.45,!0,w,w,w,w,w,w,w,w),w,w),1)],r),E.X,C.i,E.n,0)],r)
if(!v)C.b.K(t,A.a([Q.bk,D.aI_],r))
return F.P(t,E.X,u,E.v)}}
B.acD.prototype={
u(d){var w,v=null,u=A.x(10),t=x.V
u=F.fv(C.q,0.7853981633974483,A.y(v,v,C.f,v,v,new A.u(v,v,F.Q(G.eJ.j(0.85),1.6),u,A.a([new A.W(0,C.r,G.eJ.j(0.35),C.o,14),new A.W(0,C.r,G.ib.j(0.25),C.o,18)],t),v,C.m),v,42,v,v,v,v,v,42))
w=A.x(8)
t=A.a([new A.W(0,C.r,I.b7.j(0.45),C.o,10)],t)
return new A.G(58,58,new A.ay(C.q,v,C.J,C.u,A.a([u,F.fv(C.q,-0.18,A.y(v,A.dE(v,v,v,new B.vC(5,v),C.a8),C.f,v,v,new A.u(v,v,v,w,t,D.a9z,C.m),v,34,v,v,v,v,v,34))],x.p),v),v)}}
B.afi.prototype={
u(d){var w=null,v=A.aH(4,new B.ae3(G.eJ,120,w),w,w,36,w,w,w),u=A.aH(10,new B.afG(100,w),w,w,12,w,w,w),t=A.aH(22,new B.C9(D.dw,28,w),w,w,78,w,w,w),s=A.aH(36,new B.C9(D.dx,25.76,w),w,w,104,w,w,w),r=A.aH(8,new B.C9(D.dW,24.64,w),w,w,92,w,w,w),q=A.aH(18,new B.C9(D.ei,25.2,w),w,w,128,w,w,w),p=A.x(8),o=A.a([new A.W(0,C.r,C.l.j(0.4),D.ann,10),new A.W(0,C.r,G.eJ.j(0.35),C.o,14)],x.V)
return new A.G(1/0,118,new A.ay(C.C,w,C.J,C.f,A.a([v,u,t,s,r,q,A.aH(28,F.fv(C.q,0.22,A.y(w,A.dE(w,w,w,new B.vC(5,w),C.a8),C.f,w,w,new A.u(C.jN,w,w,p,o,w,C.m),w,44,w,w,w,w,w,44)),w,w,158,w,w,w)],x.p),w),w)}}
B.afG.prototype={
u(d){var w,v,u,t=null,s=this.c,r=A.x(14),q=A.a([D.dw.j(0.55),D.xC,D.dx.j(0.45)],x.O),p=F.Q(C.h.j(0.18),1.2),o=A.a([new A.W(0,C.r,G.eJ.j(0.3),C.o,18)],x.V),n=s*0.34,m=A.aH(t,new B.Cf(D.dw,n,t),t,t,8,t,8,t),l=s*0.28,k=A.aH(t,new B.Cf(D.dW,l,t),t,t,t,8,8,t)
l=A.aH(8,new B.Cf(D.ei,l,t),t,t,8,t,t,t)
n=A.aH(8,new B.Cf(D.dx,n,t),t,t,t,8,t,t)
w=s*0.22
v=C.h.j(0.12)
u=A.x(4)
return A.y(t,new A.ay(C.C,t,C.J,C.u,A.a([m,k,l,n,A.aE(A.y(t,t,C.f,t,t,new A.u(v,t,F.Q(I.b7.j(0.5),1),u,t,t,C.m),t,w,t,t,t,t,t,w),t,t)],x.p),t),C.f,t,t,new A.u(t,t,p,r,o,new F.ak(E.U,E.a0,C.t,q,t,t),C.m),t,s,t,t,t,t,t,s)}}
B.Cf.prototype={
u(d){var w=null,v=this.d,u=this.c.j(0.85),t=A.x(6)
return A.y(w,w,C.f,w,w,new A.u(u,w,F.Q(C.h.j(0.25),1),t,w,w,C.m),w,v,w,w,w,w,w,v)}}
B.C9.prototype={
u(d){var w,v,u=null,t=this.d,s=A.x(t*0.35),r=this.c,q=A.a3(r,C.h,0.35)
q.toString
w=A.a3(r,C.l,0.25)
w.toString
w=A.a([q,r,w],x.O)
q=F.Q(C.h.j(0.55),1.2)
r=A.a([new A.W(0,C.r,r.j(0.55),H.br,8)],x.V)
v=t*0.38
return A.y(u,new A.bM(Z.p3,u,u,A.y(u,u,C.f,u,u,new A.u(C.h.j(0.85),u,u,u,u,u,C.G),u,v,u,u,u,u,u,v),u),C.f,u,u,new A.u(u,u,q,s,r,new F.ak(C.Q,C.V,C.t,w,u,u),C.m),u,t*1.15,u,u,u,u,u,t)}}
B.ae3.prototype={
u(d){var w=null,v=this.d,u=this.c
return A.y(w,w,C.f,w,w,new A.u(w,w,w,w,w,new K.d5(C.q,0.5,C.t,w,0,A.a([u.j(0.35),u.j(0)],x.O),w,w),C.G),w,v,w,w,w,w,w,v)}}
B.Vu.prototype={
u(d){var w=null,v=this.e,u=v?0:8,t=B.bEN(D.Wq,v,G.eJ,M.eq,this.c,!0,"Create a private table and share invite code with your friends.","HOST A ROOM"),s=v?10:14,r=B.bEN(I.b7,v,I.i7,D.a5o,this.d,!1,"Enter invite code from your host to join the game.","JOIN A ROOM")
v=v?10:14
return F.P(A.a([new A.G(w,u,w,w),t,new A.G(w,s,w,w),r,new A.G(w,v,w,w),D.aJh],x.p),E.ab,C.i,E.v)}}
B.afV.prototype={
u(a3){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=A.x(16),j=A.x(16),i=x.O,h=A.a([D.xw.j(0.95),D.a_z],i),g=m.c,f=F.Q(g.j(0.9),1.5),e=m.d,d=x.V,a0=A.a([new A.W(0.5,C.r,e.j(0.32),C.o,18)],d),a1=x.p,a2=A.a([A.bO(0,A.dy(A.x(15),A.dE(l,l,l,new B.abk(g.j(0.06),l),C.a8),C.ai,l))],a1)
if(m.x)a2.push(A.aH(l,new B.ahx(g,l),l,l,l,0,0,l))
w=m.y
v=w?12:14
u=w?12:18
t=w?12:14
s=w?12:18
r=w?42:50
w=w?42:50
q=A.x(13)
p=A.a([g.j(0.35),g.j(0.1)],i)
o=F.Q(g.j(0.55),1)
n=A.a([new A.W(0,C.r,e.j(0.3),C.o,10)],d)
r=A.y(l,A.ai(m.e,g,l,l,24),C.f,l,l,new A.u(l,l,o,q,n,new F.ak(E.U,E.a0,C.t,p,l,l),C.m),l,w,l,l,l,l,l,r)
i=F.S(F.P(A.a([A.l(m.f,l,l,l,l,l,D.aAM,l,l),H.aB,A.y(l,l,C.f,l,l,new A.u(l,l,l,l,l,new F.ak(E.W,C.a_,C.t,A.a([g.j(0.85),g.j(0)],i),l,l),C.m),l,1.5,l,l,l,l,l,36),H.aB,A.l(m.r,l,l,l,l,l,A.E(l,l,C.h.j(0.55),l,l,l,l,l,l,l,l,12,l,l,C.av,l,1.3,!0,l,l,l,l,l,l,l,l),l,l)],a1),E.X,C.i,E.n),1)
g=F.Q(g.j(0.9),1.4)
d=A.a([new A.W(0,C.r,e.j(0.35),C.o,10)],d)
a2.push(new A.a4(new A.A(v,u,t,s),F.V(A.a([r,G.Ns,i,E.a2,A.y(l,A.ai(H.iH,C.h.j(0.95),l,l,22),C.f,l,l,new A.u(l,l,g,l,d,l,C.G),l,36,l,l,l,l,l,36)],a1),E.j,C.i,E.n,0),l))
return A.b4(!1,C.z,!0,l,A.bc(!1,k,!0,K.eX(new A.ay(C.C,l,C.J,C.f,a2,l),l,new A.u(l,l,f,j,a0,new F.ak(E.U,E.a0,C.t,h,l,l),C.m),l,l,l),l,!0,l,l,l,l,l,l,l,l,m.w,l,l,l,l,l,l,l),C.f,C.w,0,l,l,l,l,l,C.F)}}
B.ahx.prototype={
u(d){var w=null,v=this.c,u=A.a3(v,C.h,0.25)
u.toString
u=A.a([u,v],x.O)
return A.y(w,D.as2,C.f,w,w,new A.u(w,w,w,D.Qz,A.a([new A.W(0,C.r,v.j(0.4),C.o,8)],x.V),new F.ak(E.W,C.a_,C.t,u,w,w),C.m),w,w,w,w,D.a2u,w,w,w)}}
B.abk.prototype={
aM(d,e){var w,v,u,t,s,r,q
$.ah()
w=A.ap()
w.r=this.b.gq(0)
w.c=1
for(v=e.a,u=e.b,t=d.a,s=0;s<v;s+=18){r=w.bd()
t.drawLine.apply(t,[s,0,s,u,r])
r.delete()}for(q=0;q<u;q+=18){r=w.bd()
t.drawLine.apply(t,[0,q,v,q,r])
r.delete()}},
cB(d){return!d.b.n(0,this.b)}}
B.alv.prototype={
u(d){var w=null,v=C.l.j(0.28),u=A.x(14),t=F.Q(C.h.j(0.08),1)
return A.y(w,F.V(A.a([F.S(new B.WP(M.eq,G.ib,"2 OR 4 PLAYERS","Private Lobby",w),1),A.y(w,w,C.f,C.h.j(0.12),w,w,w,32,w,w,w,w,w,1),D.a45],x.p),E.j,C.i,E.n,0),C.f,w,w,new A.u(v,w,t,u,w,w,C.m),w,w,w,w,G.dy,w,w,w)}}
B.WP.prototype={
u(d){var w=this,v=null,u=x.p
return F.V(A.a([A.ai(w.c,w.d,v,v,16),E.a2,new F.dM(1,E.aZ,F.P(A.a([A.l(w.e,v,1,C.I,v,v,D.azR,v,v),A.l(w.f,v,1,C.I,v,v,A.E(v,v,C.h.j(0.5),v,v,v,v,v,v,v,v,10,v,v,C.av,v,v,!0,v,v,v,v,v,v,v,v),v,v)],u),E.X,C.i,E.n),v)],u),E.j,C.Z,E.n,0)}}
B.amt.prototype={}
B.Y0.prototype={
a4(){this.ag()
B.vF()
$.at.ak$.push(new B.bnh(this))},
l(){B.rX()
this.a9()}}
B.vE.prototype={
V(){var w=$.b5()
return new B.TS(new F.ee(E.bV,w),new F.ee(new A.dl("100",C.cI,C.bp),w),new F.ee(E.bV,w),new B.MO())}}
B.TS.prototype={
a4(){this.aup()
$.at.aW$.push(this)
this.aLK()},
kM(d){if(d===C.cw)if($.jM>0)A.hg()},
l(){var w,v,u,t,s,r=this,q=r.CW
if(q!=null)q.U(0)
q=r.ch
if(q!=null)q.U(0)
w=N.cu("ludo_online")
v=r.cx
if(v!=null)w.cY("getPrivateTable",v)
u=r.cy
if(u!=null)w.cY("roomTrigger",u)
t=r.db
if(t!=null)w.cY("startGame",t)
r.db=r.cy=r.cx=null
q=r.f
s=q.p2$=$.b5()
q.p1$=0
q=r.r
q.p2$=s
q.p1$=0
q=r.w
q.p2$=s
q.p1$=0
$.at.h8(r)
r.auo()},
gnR(){var w=$.aA,v=S.anZ(w==null?"":w)
if(v!=null&&v.length!==0)return v
w=$.bd
return w==null?null:w.a},
guZ(){var w=L.dg(this.z).b
return C.c.S(w==null?"":w).toUpperCase()},
gjd(){var w=C.c.S(this.f.a.a)
if(!(w.length!==0)){w=L.dg(this.z).a
if(w==null)w=""}return w},
gnQ(){return L.dg(this.z).d>0?L.dg(this.z).d:this.e},
yV(d){var w,v,u,t,s=this.gnR()
if(s==null)s=""
w=$.aA
if(w==null)w=""
v=d==null?this.gjd():d
u=A.F(x.N,x.z)
u.k(0,"userId",s)
u.k(0,"user_id",s)
u.k(0,"token",w)
t=v.length!==0
if(t)u.k(0,"tableId",v)
if(t)u.k(0,"table_id",v)
return u},
aLL(){return this.yV(null)},
aLK(){var w,v,u,t,s=this,r="ludo_online"
N.Co(r)
w=N.cu(r)
v=new B.ba4(s)
u=new B.ba9(s)
t=new B.bab(s)
s.cx=v
s.cy=u
s.db=t
if(s.a.c===D.iO)w.cA(0,"getPrivateTable",v)
w.cA(0,"roomTrigger",u)
w.cA(0,"startGame",t)},
Kg(){if(this.gjd().length===0)return
this.E(new B.bal(this))},
rn(d){return this.aDv(d)},
aDv(d){var w=0,v=A.p(x.y),u,t=2,s=[],r,q,p,o,n
var $async$rn=A.q(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:o=N.cu("ludo_online")
if(o.y){d.$0()
u=!0
w=1
break}r=new A.bh(new A.aP($.aF,x.d4),x.aY)
q=A.cv()
q.b=new B.b9B(o,q,r)
J.aou(o,"connect",q.aT())
if(o.y){o.cY("connect",q.aT())
d.$0()
u=!0
w=1
break}o.m9()
t=4
w=7
return A.e(r.a.jI(0,R.fn),$async$rn)
case 7:t=2
w=6
break
case 4:t=3
n=s.pop()
if(A.a9(n) instanceof A.qz){o.cY("connect",q.aT())
if(o.y){d.$0()
u=!0
w=1
break}u=!1
w=1
break}else throw n
w=6
break
case 3:w=2
break
case 6:d.$0()
u=!0
w=1
break
case 1:return A.n(u,v)
case 2:return A.m(s.at(-1),v)}})
return A.o($async$rn,v)},
yR(d,e){return this.aEb(d,e)},
Uz(d){return this.yR(d,!1)},
aEb(d,e){var w=0,v=A.p(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i,h,g
var $async$yR=A.q(function(f,a0){if(f===1){s.push(a0)
w=t}for(;;)switch(w){case 0:h=$.aA
if(h==null||h.length===0||d.length===0){w=1
break}m=!e
if(m&&q.ax){w=1
break}l=new A.c3(Date.now(),0,!1)
if(m){m=q.ay
m=m!=null&&l.ct(m).a<15e5}else m=!1
if(m){w=1
break}q.ax=!0
q.ay=l
t=4
w=7
return A.e(B.MG(d,h),$async$yR)
case 7:p=a0
if(q.c==null||p==null){r=[1]
w=5
break}k=q.yU(p)
o=k==null?p:k
n=L.dg(o)
if(n.a!=null&&n.a.length!==0){q.E(new B.b9I(q,o))
m=q.f
if(C.c.S(m.a.a).length===0){j=n.a
j.toString
m.sd6(0,j)}q.Kg()
if(q.Dw(o)||q.Dw(p)){q.ro()
r=[1]
w=5
break}q.Ke()}r.push(6)
w=5
break
case 4:t=3
g=s.pop()
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
q.ax=!1
w=r.pop()
break
case 6:case 1:return A.n(u,v)
case 2:return A.m(s.at(-1),v)}})
return A.o($async$yR,v)},
UA(d){var w=this,v=w.CW
if(v!=null)v.U(0)
if(d.length===0)return
w.Uz(d)
w.CW=A.fu(C.be,new B.bah(w,d))},
Ke(){var w,v=this
if(!L.dg(v.z).gkV()){v.as=!1
return}w=v.gjd()
if(w.length===0||v.gnR()==null||$.aA==null||v.as)return
v.as=!0
v.E(new B.ba0(v))
v.zw(w)},
a40(d){var w,v=d.toLowerCase()
if(C.c.t(v,"already"))w=C.c.t(v,"start")||C.c.t(v,"playing")||C.c.t(v,"begun")
else w=!1
return w},
zw(d){return this.aUO(d)},
aUO(d){var w=0,v=A.p(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f
var $async$zw=A.q(function(e,a0){if(e===1){s.push(a0)
w=t}for(;;)switch(w){case 0:h=r.gnR()
g=$.aA
if(h==null||g==null||g.length===0){w=1
break}w=3
return A.e(r.rn(new B.bai(r,d)),$async$zw)
case 3:if(r.c==null||r.at){w=1
break}t=5
w=8
return A.e(B.aBG(d,g,h),$async$zw)
case 8:q=a0
if(r.c==null||r.at){w=1
break}p=J.B(q,"code")
o=p!=null&&!J.f(p,200)&&!J.f(p,"200")
n=J.f(J.B(q,"success"),!1)||o
if(n){k=J.B(q,"message")
j=k==null?null:J.L(k)
m=j==null?"":j
if(r.a40(m)){r.ro()
w=1
break}if(J.ax(m)!==0){r.as=!1
r.E(new B.baj(r,m))}w=1
break}r.ro()
t=2
w=7
break
case 5:t=4
f=s.pop()
k=A.a9(f)
if(k instanceof B.lv){l=k
if(r.c==null||r.at){w=1
break}if(r.a40(l.a)){r.ro()
w=1
break}r.as=!1
r.E(new B.bak(r,l))}else r.as=!1
w=7
break
case 4:w=2
break
case 7:case 1:return A.n(u,v)
case 2:return A.m(s.at(-1),v)}})
return A.o($async$zw,v)},
ro(){var w,v=this,u="ludo_online",t=v.gjd()
if(t.length===0||v.c==null||v.at)return
v.at=!0
w=v.CW
if(w!=null)w.U(0)
w=v.ch
if(w!=null)w.U(0)
w=v.c
w.toString
O.Z8(w,new B.EL(t,v.d,v.gnQ(),u,u,null),x.X)},
Kc(){var w=0,v=A.p(x.H),u,t=this,s,r
var $async$Kc=A.q(function(d,e){if(d===1)return A.m(e,v)
for(;;)switch(w){case 0:t.E(new B.b9v(t))
if(t.gnR()!=null){s=$.aA
s=s==null||s.length===0}else s=!0
if(s){t.E(new B.b9w(t))
w=1
break}t.E(new B.b9x(t))
w=3
return A.e(t.rn(new B.b9y(t)),$async$Kc)
case 3:r=e
if(t.c==null){w=1
break}if(!r){t.E(new B.b9z(t))
w=1
break}A.ct(R.qJ,new B.b9A(t),x.H)
case 1:return A.n(u,v)}})
return A.o($async$Kc,v)},
yT(){var w=0,v=A.p(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f
var $async$yT=A.q(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:r.E(new B.b9R(r))
q=C.c.S(r.f.a.a)
if(J.ax(q)===0){r.E(new B.b9S(r))
w=1
break}if(r.gnR()==null||$.aA==null){r.E(new B.b9T(r))
w=1
break}t=4
j={}
i=r.gnR()
i.toString
h=$.aA
h.toString
w=7
return A.e(B.a3y(q,h,i),$async$yT)
case 7:p=e
if(r.c==null){w=1
break}j.a=null
o=J.B(p,"table_data")
if(x.j.b(o)&&J.cJ(o))j.a=A.aa(["code",200,"table_data",o],x.N,x.z)
else if(x.f.b(J.B(p,"table")))j.a=A.aa(["code",200,"table_data",[J.B(p,"table")]],x.N,x.z)
r.E(new B.b9U(j,r))
n=N.cu("ludo_online")
w=8
return A.e(r.rn(new B.b9V(r,n,q)),$async$yT)
case 8:m=e
if(r.c==null){w=1
break}if(!m){r.E(new B.b9W(r))
w=1
break}w=9
return A.e(r.yR(q,!0),$async$yT)
case 9:r.UA(q)
r.E(new B.b9X(r))
r.Kg()
r.Ke()
t=2
w=6
break
case 4:t=3
f=s.pop()
j=A.a9(f)
if(j instanceof B.lv){l=j
if(r.c!=null)r.E(new B.b9Y(r,l))}else{k=j
if(r.c!=null)r.E(new B.b9Z(r,k))}w=6
break
case 3:w=2
break
case 6:case 1:return A.n(u,v)
case 2:return A.m(s.at(-1),v)}})
return A.o($async$yT,v)},
yU(d){var w,v,u,t,s=J.N(d),r=s.h(d,"table_data"),q=x.j
if(q.b(r)&&J.cJ(r))return A.aa(["code",200,"table_data",r],x.N,x.z)
w=s.h(d,"table")
v=x.f
if(v.b(w)){s=x.N
q=x.z
return A.aa(["code",200,"table_data",A.a([A.ao(w,s,q)],x.Y)],s,q)}u=s.h(d,"data")
if(v.b(u)){t=this.yU(A.ao(u,x.N,x.z))
if(t!=null)return t}if(s.h(d,"table_id")!=null||s.h(d,"_id")!=null||q.b(s.h(d,"playerIds"))||q.b(s.h(d,"player_ids")))return A.aa(["code",200,"table_data",A.a([d],x.Y)],x.N,x.z)
return null},
Dw(d){var w,v,u,t,s,r,q,p=null,o="game_status"
if(d==null)return!1
w=J.N(d)
v=w.h(d,"table_data")
if(x.j.b(v)){u=J.N(v)
u=u.gbh(v)&&x.f.b(u.gW(v))}else u=!1
t=u?A.ao(x.f.a(J.fo(v)),x.N,x.z):p
u=t==null
s=u?p:t.h(0,"status")
if(s==null)s=w.h(d,"status")
r=s==null?p:J.L(s).toLowerCase()
if(r==="playing"||r==="started"||r==="in_progress")return!0
s=u?p:t.h(0,o)
if(s==null){u=u?p:t.h(0,"gameStatus")
q=u}else q=s
if(q==null)q=w.h(d,o)
w=J.fI(q)
if(w.n(q,1)||w.n(q,"1")||w.n(q,!0))return!0
return!1},
Kh(d){var w,v,u=this.yU(d)
u=L.dg(u==null?d:u).a
if(u!=null&&u.length!==0)return u
u=J.N(d)
w=u.h(d,"tableId")
u=w==null?u.h(d,"table_id"):w
v=u==null?null:C.c.S(J.L(u))
if(v!=null&&v.length!==0)return v
return null},
a9H(d){var w,v,u,t=C.c.S(d)
if(t.length===0)return!1
w=this.gnR()
v=C.c.S(w==null?"":w)
if(v.length!==0&&v===t)return!0
w=$.bd
w=w==null?null:w.a
u=C.c.S(w==null?"":w)
return u.length!==0&&u===t},
aLA(d){var w,v=d.toLowerCase()
if(C.c.t(v,"already"))w=C.c.t(v,"seat")||C.c.t(v,"join")||C.c.t(v,"in")
else w=!1
return w},
a9M(d){return C.b.ea(d.c,new B.bam(this))||d.e>=2},
zd(d){return this.aQN(d)},
aQN(d){var w=0,v=A.p(x.h),u,t=this,s,r,q
var $async$zd=A.q(function(e,f){if(e===1)return A.m(f,v)
for(;;)switch(w){case 0:q=$.aA
if(q==null||q.length===0||d.length===0){u=null
w=1
break}w=3
return A.e(B.MG(d,q),$async$zd)
case 3:s=f
if(s==null){u=null
w=1
break}r=t.yU(s)
u=r==null?s:r
w=1
break
case 1:return A.n(u,v)}})
return A.o($async$zd,v)},
Dv(d){return this.aSO(d)},
aSO(d){var w=0,v=A.p(x.h),u,t=2,s=[],r=this,q,p,o,n,m
var $async$Dv=A.q(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
p=r.gnR()
p.toString
o=$.aA
o.toString
w=7
return A.e(B.a3y(d,o,p),$async$Dv)
case 7:p=f
u=p
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
p=A.a9(m)
if(p instanceof B.lv){q=p
if(r.aLA(q.a)){u=null
w=1
break}throw m}else throw m
w=6
break
case 3:w=2
break
case 6:case 1:return A.n(u,v)
case 2:return A.m(s.at(-1),v)}})
return A.o($async$Dv,v)},
yS(d){return this.aEp(d)},
aEp(d){var w=0,v=A.p(x.v),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f
var $async$yS=A.q(function(e,a0){if(e===1){s.push(a0)
w=t}for(;;)switch(w){case 0:g=$.aA
if(g==null||g.length===0){u=null
w=1
break}q=C.c.S(d).toUpperCase()
k=0
case 3:if(!(k<2)){w=5
break}p=D.ai0[k]
t=7
w=10
return A.e(O.yS(p,50,r.e,g),$async$yS)
case 10:o=a0
j=J.b0(o)
case 11:if(!j.A()){w=12
break}n=j.gP(j)
if(n.a.length===0){w=11
break}w=13
return A.e(r.zd(n.a),$async$yS)
case 13:m=a0
if(m==null){w=11
break}l=L.dg(m)
i=l.b
if(C.c.S(i==null?"":i).toUpperCase()!==q){w=11
break}if(r.a9M(l)){j=l.a
if(j==null)j=n.a
u=j
w=1
break}w=11
break
case 12:t=2
w=9
break
case 7:t=6
f=s.pop()
w=9
break
case 6:w=2
break
case 9:case 4:++k
w=3
break
case 5:u=null
w=1
break
case 1:return A.n(u,v)
case 2:return A.m(s.at(-1),v)}})
return A.o($async$yS,v)},
px(d,e){return this.aDK(d,e)},
aDK(d,e){var w=0,v=A.p(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$px=A.q(function(f,g){if(f===1)return A.m(g,v)
for(;;)switch(w){case 0:l={}
k=l.a=t.yU(d)
j=t.Kh(d)
if(j==null){s=C.c.S(e)
j=s.length!==0?s:null}l.b=j
w=j!=null&&j.length!==0?3:5
break
case 3:w=6
return A.e(t.Dv(j),$async$px)
case 6:r=g
if(r!=null){q=t.yU(r)
k=q==null?k:q
l.a=k
p=t.Kh(r)
j=p==null?j:p
l.b=j
s=k}else s=k
w=7
return A.e(t.zd(j),$async$px)
case 7:o=g
if(o!=null){l.a=o
p=L.dg(o).a
j=p==null?j:p
l.b=j
n=j
s=o}else n=j
w=4
break
case 5:n=j
s=k
case 4:if(n==null||n.length===0){t.E(new B.b9C(t))
w=1
break}if(s!=null)t.E(new B.b9D(l,t))
t.f.sd6(0,l.b)
t.UA(l.b)
w=8
return A.e(t.rn(new B.b9E(l,t)),$async$px)
case 8:m=g
if(t.c==null){w=1
break}if(!m){t.E(new B.b9F(t))
w=1
break}w=9
return A.e(t.yR(l.b,!0),$async$px)
case 9:if(t.c==null){w=1
break}l=l.a
if(t.Dw(l==null?t.z:l)||t.Dw(d)){t.E(new B.b9G(t))
t.ro()
w=1
break}t.E(new B.b9H(t))
t.Kg()
t.Ke()
case 1:return A.n(u,v)}})
return A.o($async$px,v)},
lT(){var w=0,v=A.p(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$lT=A.q(function(b0,b1){if(b0===1){s.push(b1)
w=t}for(;;)switch(w){case 0:a6=$.at.O$.d.c
if(a6!=null)a6.iw()
r.E(new B.b9L(r))
q=C.c.S(r.w.a.a).toUpperCase()
if(J.ax(q)===0){r.E(new B.b9M(r))
w=1
break}if(r.gnR()==null||$.aA==null){r.E(new B.b9N(r))
w=1
break}t=4
a0={}
w=7
return A.e(r.yS(q),$async$lT)
case 7:p=b1
if(r.c==null){w=1
break}w=p!=null&&p.length!==0?8:9
break
case 8:w=10
return A.e(r.px(C.cq,p),$async$lT)
case 10:w=1
break
case 9:o=null
a0.a=null
a1=0
case 11:if(!(a1<3)){w=13
break}n=D.ai1[a1]
m=null
t=15
a6=r.gnR()
a6.toString
a2=$.aA
a2.toString
w=18
return A.e(B.btj(n,q,a2,a6),$async$lT)
case 18:m=b1
t=4
w=17
break
case 15:t=14
a7=s.pop()
a6=A.a9(a7)
if(a6 instanceof B.lv){l=a6
a0.a=l
a4=l.a.toLowerCase()
if(A.fn(a4,"already",0)){a6=!0
if(!A.fn(a4,"seat",0))if(!A.fn(a4,"join",0))a6=A.fn(a4,"in",0)}else a6=!1
if(a6){w=13
break}w=12
break}else throw a7
w=17
break
case 14:w=4
break
case 17:o=m
k=r.Kh(m)
if(k==null||k.length===0){w=12
break}j=null
t=20
w=23
return A.e(r.Dv(k),$async$lT)
case 23:j=b1
t=4
w=22
break
case 20:t=19
a8=s.pop()
a6=A.a9(a8)
if(a6 instanceof B.lv){i=a6
a0.a=i
a4=i.a.toLowerCase()
if(A.fn(a4,"already",0)){a6=!0
if(!A.fn(a4,"seat",0))if(!A.fn(a4,"join",0))a6=A.fn(a4,"in",0)}else a6=!1
if(!a6){w=12
break}}else throw a8
w=22
break
case 19:w=4
break
case 22:if(j!=null){o=j
a5=r.Kh(j)
k=a5==null?k:a5}w=24
return A.e(r.zd(k),$async$lT)
case 24:h=b1
if(r.c==null){w=1
break}a6=h
g=L.dg(a6==null?o:a6)
w=r.a9M(g)?25:26
break
case 25:w=27
return A.e(r.px(o,k),$async$lT)
case 27:w=1
break
case 26:case 12:++a1
w=11
break
case 13:w=28
return A.e(r.yS(q),$async$lT)
case 28:f=b1
if(r.c==null){w=1
break}w=f!=null&&f.length!==0?29:30
break
case 29:w=31
return A.e(r.px(C.cq,f),$async$lT)
case 31:w=1
break
case 30:r.E(new B.b9O(a0,r))
t=2
w=6
break
case 4:t=3
a9=s.pop()
a6=A.a9(a9)
if(a6 instanceof B.lv){e=a6
if(r.c!=null)r.E(new B.b9P(r,e))}else{d=a6
if(r.c!=null)r.E(new B.b9Q(r,d))}w=6
break
case 3:w=2
break
case 6:case 1:return A.n(u,v)
case 2:return A.m(s.at(-1),v)}})
return A.o($async$lT,v)},
Kf(){var w=0,v=A.p(x.H),u,t=this,s
var $async$Kf=A.q(function(d,e){if(d===1)return A.m(e,v)
for(;;)switch(w){case 0:t.E(new B.bad(t))
s=t.gjd()
if(s.length===0){t.E(new B.bae(t))
w=1
break}if(!L.dg(t.z).gkV()){t.E(new B.baf(t))
w=1
break}t.E(new B.bag(t))
t.as=!0
w=3
return A.e(t.zw(s),$async$Kf)
case 3:case 1:return A.n(u,v)}})
return A.o($async$Kf,v)},
u(d){var w,v,u=this,t=null,s=A.a([A.cI(!0,A.aE(new A.cO(G.wf,u.a.c===D.iO?u.aLD(d):u.aLE(d),t),t,t),C.N,!0)],x.p)
if(u.Q){w=C.l.j(0.55)
v=u.y
s.push(A.bO(0,new A.dh(w,A.aE(B.bBd(v==null?"Please wait\u2026":v,180),t,t),t)))}return A.cT(t,D.xa,new B.zB(new A.ay(C.C,t,C.J,C.u,s,t),t),t)},
aLD(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=F.eR(d),k=L.dg(n.z),j=L.dg(n.z).gkV()&&!n.Q,i=C.k.R(l.geP(),14,20),h=n.a9E(d,"CREATE ROOM")
if(n.gjd().length===0)w=0
else w=n.guZ().length===0?1:2
v=x.p
w=A.a([h,E.aX,n.a9D(w,I.BO)],v)
h=n.x
if(h!=null)C.b.K(w,A.a([H.aI,n.Kb(h,!0)],v))
h=n.y
if(h!=null)C.b.K(w,A.a([H.aI,n.Kb(h,!1)],v))
w.push(H.bX)
h=F.V(A.a([F.S(n.aLJ(),1),H.dq,F.S(n.aLC(),1)],v),E.X,C.i,E.n,0)
u=n.Q
t=u?"Creating\u2026":"Create Room (Host)"
k=A.a([h,H.bX,n.aLH(I.AS,t,u?m:n.gaLF()),M.jj,n.a9J(k.e)],v)
if(n.guZ().length!==0)C.b.K(k,A.a([H.bX,n.a9G()],v))
k.push(H.bX)
k.push(I.OD)
k.push(H.aB)
k.push(n.a9N())
k.push(H.aI)
h=F.S(n.a9K(H.eU,"Copy",n.gjd().length===0?m:new B.b9p(n,d)),1)
u=F.S(n.Kd(!0,M.eV,"JOIN",n.Q?m:n.ga9I()),1)
t=j?n.gaLM():m
s=A.x(12)
r=A.x(12)
q=j?G.xU:I.yM
p=F.Q(j?I.wY:C.h.j(0.08),1)
o=A.ai(T.kC,j?C.h:C.b8,m,m,18)
k.push(F.V(A.a([h,E.a2,u,E.a2,F.S(A.b4(!1,C.z,!0,m,A.bc(!1,s,!0,K.eX(F.V(A.a([o,G.aM,new F.dM(1,E.aZ,A.l("Start Match",m,1,C.I,m,m,A.E(m,m,j?C.h:C.b8,m,m,m,m,m,m,m,m,11,m,m,C.y,m,m,!0,m,0.15,m,m,m,m,m,m),m,m),m)],v),E.j,C.Z,E.n,0),m,new A.u(q,m,p,r,m,m,C.m),46,m,m),m,!0,m,m,m,m,m,m,m,m,t,m,m,m,m,m,m,m),C.f,C.w,0,m,m,m,m,m,C.F),1)],v),E.j,C.i,E.n,0))
w.push(n.a9F(F.P(k,E.ab,C.i,E.n)))
w.push(Q.bk)
w.push(n.a9O())
w.push(H.aI)
return A.ek(F.P(w,E.ab,C.i,E.n),m,C.O,new A.A(i,10,i,10),m,C.a1)},
aLE(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=C.k.R(F.eR(d).geP(),14,20),h=k.a9E(d,"JOIN ROOM")
if(k.gjd().length===0)w=0
else w=L.dg(k.z).gkV()?2:1
v=x.p
w=A.a([h,E.aX,k.a9D(w,I.BW)],v)
h=k.x
if(h!=null)C.b.K(w,A.a([H.aI,k.Kb(h,!0)],v))
h=k.y
if(h!=null)C.b.K(w,A.a([H.aI,k.Kb(h,!1)],v))
w.push(H.bX)
h=F.S(k.aLO(k.w,"Enter code (e.g. A7Q)",new B.b9q(k),new B.b9r(k),H.ls,C.NY),1)
h=A.a([I.v9,H.aB,F.V(A.a([h,E.a2,new A.G(110,j,k.Kd(!0,M.eV,"JOIN",k.Q?j:k.gaLI()),j)],v),E.j,C.i,E.n,0)],v)
if(k.guZ().length!==0)C.b.K(h,A.a([H.bX,k.a9G()],v))
h.push(M.jj)
h.push(k.a9J(L.dg(k.z).e))
h.push(H.bX)
u=A.x(12)
t=C.h.j(0.08)
s=A.x(12)
r=G.ac.j(0.25)
q=C.h.j(0.03)
p=C.h.j(0.03)
o=G.ac.j(0.7)
n=A.l("Use only if you have the host's table ID",j,j,j,j,j,A.E(j,j,C.h.j(0.45),j,j,j,j,j,j,j,j,11,j,j,j,j,j,!0,j,j,j,j,j,j,j,j),j,j)
m=k.a9N()
l=F.S(k.a9K(H.eU,"Copy",k.gjd().length===0?j:new B.b9s(k,d)),1)
h.push(A2.bzM(q,A.a([H.aB,m,E.aX,F.V(A.a([l,E.a2,F.S(k.Kd(!0,M.eV,"JOIN",k.Q?j:k.ga9I()),1)],v),E.j,C.i,E.n,0)],v),j,p,o,new A.cH(u,new A.aO(t,1,C.D,-1)),G.ac,new A.cH(s,new A.aO(r,1,C.D,-1)),n,C.N,D.aDq))
w.push(k.a9F(F.P(h,E.ab,C.i,E.n)))
w.push(Q.bk)
w.push(k.a9O())
w.push(E.aN)
return A.ek(F.P(w,E.ab,C.i,E.n),j,C.O,new A.A(i,10,i,10),j,C.a1)},
a9E(d,e){var w,v,u,t,s=this,r=null,q=x.p,p=A.a([s.aLB(d),H.bY],q)
if(s.gjd().length!==0)w=L.dg(s.z).gkV()||s.Dw(s.z)
else w=!1
if(w)p.push(P.QB(A.ai(D.a64,G.ac,r,r,18),A.l("Enter Match",r,r,r,r,r,A.E(r,r,G.ac.j(0.95),r,r,r,r,r,r,r,r,13,r,r,C.B,r,r,!0,r,r,r,r,r,r,r,r),r,r),s.gaLG()))
p=F.V(p,E.j,C.i,E.n,0)
w=A.a([G.dX.j(0.35),G.ac.j(0.18)],x.O)
v=A.x(16)
u=F.Q(G.ac.j(0.45),1)
w=A.y(r,A.ai(G.rY,G.dX,r,r,28),C.f,r,r,new A.u(r,r,u,v,r,new F.ak(E.W,C.a_,C.t,w,r,r),C.m),r,52,r,r,r,r,r,52)
v=K.G1(C.jD,D.aDF,new B.b9t())
u=A.l(e,r,r,r,r,r,D.aAj,C.K,r)
t=s.a.c===D.iO?"Set stakes and invite friends":"Enter invite code from your host"
return F.P(A.a([p,E.aN,w,E.aX,v,Q.b3,u,Q.b3,A.l(t,r,r,r,r,r,A.E(r,r,C.h.j(0.5),r,r,r,r,r,r,r,r,13,r,r,C.av,r,r,!0,r,r,r,r,r,r,r,r),C.K,r)],q),E.j,C.i,E.n)},
aLB(d){var w=null,v=A.x(12),u=A.x(12),t=F.Q(G.ac.j(0.75),1.5),s=C.l.j(0.35)
return A.b4(!1,C.z,!0,w,A.bc(!1,v,!0,A.y(w,A.ai(H.bQ,G.ac,w,w,18),C.f,w,w,new A.u(s,w,t,u,w,w,C.m),w,44,w,w,w,w,w,44),w,!0,w,w,w,w,w,w,w,w,new B.b9n(d),w,w,w,w,w,w,w),C.f,C.w,0,w,w,w,w,w,C.F)},
a9D(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=x.p,j=A.a([],k)
for(w=x.O,v=x.V,u=0;u<3;++u){t=A.a([],k)
if(u>0){s=u<=d?A.a([G.ac.j(0.15),G.ac.j(0.55)],w):A.a([C.h.j(0.06),C.h.j(0.06)],w)
r=new A.b8(1,1)
t.push(new F.en(1,E.cD,A.y(l,l,C.f,l,l,new A.u(l,l,l,new A.cK(r,r,r,r),l,new F.ak(E.W,C.a_,C.t,s,l,l),C.m),l,2,l,I.zs,l,l,l,l),l))}s=e[u]
r=I.BA[u]
q=u<=d
p=u===d
if(q)o=G.ac.j(p?0.28:0.14)
else o=C.h.j(0.05)
if(p)n=G.dX
else n=q?G.ac.j(0.55):C.h.j(0.15)
m=new A.aO(n,p?2:1.5,C.D,-1)
n=p?A.a([new A.W(0,C.r,G.ac.j(0.25),C.o,10)],v):l
r=A.y(l,A.ai(r,q?G.dX:C.b8,l,l,17),C.f,l,l,new A.u(o,l,new A.cx(m,m,m,m),l,n,l,C.G),l,38,l,l,l,l,l,38)
if(p)q=C.h
else q=q?C.h.j(0.75):C.b8
p=p?C.B:C.S
t.push(F.P(A.a([r,H.aB,new A.G(76,l,A.l(s,l,2,C.I,l,l,new A.z(!0,q,l,l,l,l,10,p,l,l,l,l,1.15,l,l,l,l,l,l,l,l,l,l,l,l,l),C.K,l),l)],k),E.j,C.i,E.v))
C.b.K(j,t)}return new A.a4(E.ca,F.V(j,E.j,C.i,E.n,0),l)},
a9F(d){var w=null,v=A.x(22)
return A.y(w,d,C.f,w,w,new A.u(w,w,F.Q(I.i7.j(0.5),1.5),v,A.a([new A.W(0,C.r,G.ac.j(0.1),C.o,28),new A.W(0,C.r,C.l.j(0.5),G.nH,24)],x.V),D.a9g,C.m),w,w,w,w,Ad.zD,w,w,w)},
aLJ(){var w,v=null,u=A.x(12),t=F.Q(C.h.j(0.12),1),s=this.e,r=A.ai(I.AF,G.ac.j(0.9),v,v,v),q=x.D
q=A.af(new A.as(D.aay,new B.ba2(),q),q.i("aW.E"))
w=this.Q?v:new B.ba3(this)
return F.P(A.a([I.OE,H.aB,A.y(v,new P.yt(P.bsz(D.Zk,v,r,!0,q,w,I.v3,s,x.S),v),C.f,v,v,new A.u(D.m5,v,t,u,v,v,C.m),v,v,v,v,E.fp,v,v,v)],x.p),E.X,C.i,E.n)},
aLC(){return F.P(A.a([I.OC,H.aB,this.aLN(this.r,"100",E.jl,new B.b9o(this))],x.p),E.X,C.i,E.n)},
a9L(d,e,f,g,h,i,j){var w=null,v=A.E(w,w,C.h.j(0.35),w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,w,w,w,w,w,w,w)
return F.nz(w,C.a7,!1,w,!0,C.u,w,F.p5(),d,w,w,w,w,w,2,F.oi(w,w,w,G.em,w,w,w,w,!0,new U.ed(4,A.x(12),new A.aO(C.h.j(0.12),1,C.D,-1)),w,w,w,w,w,D.m5,!0,w,w,w,w,new U.ed(4,A.x(12),new A.aO(G.ac.j(0.65),1,C.D,-1)),w,w,w,w,w,w,w,w,v,e,w,w,w,w,w,w,w,w,w,!0,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w),C.O,!0,w,!0,w,!1,w,E.ct,w,w,w,w,f,w,w,w,1,w,w,!1,"\u2022",w,g,w,h,w,!1,w,w,!1,w,!0,w,E.dk,w,w,w,w,w,w,w,w,w,w,w,I.v3,!0,C.b0,w,i,w,j,w,w)},
aLO(d,e,f,g,h,i){return this.a9L(d,e,null,f,g,h,i)},
aLN(d,e,f,g){return this.a9L(d,e,f,g,null,E.dr,null)},
a9N(){var w=null,v=A.E(w,w,C.h.j(0.35),w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,w,w,w,w,w,w,w)
return F.nz(w,C.a7,!1,w,!0,C.u,w,F.p5(),this.f,w,w,w,w,w,2,F.oi(w,w,w,G.em,w,w,w,w,!0,new U.ed(4,A.x(12),new A.aO(C.h.j(0.12),1,C.D,-1)),w,w,w,w,w,D.m5,!0,w,w,w,w,new U.ed(4,A.x(12),new A.aO(G.ac.j(0.65),1,C.D,-1)),w,w,w,w,w,w,w,w,v,"Enter Table ID",w,w,w,w,w,w,w,w,w,!0,!0,w,w,w,w,w,w,w,w,A.ai(I.AI,G.ac.j(0.75),w,w,w),w,w,w,w,w),C.O,!0,w,!0,w,!1,w,E.ct,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,new B.ban(this),w,w,w,!1,w,w,!1,w,!0,w,E.dk,w,w,w,w,w,w,w,w,w,w,w,I.v0,!0,C.b0,w,E.dr,w,w,w,w)},
Kd(d,e,f,g){var w,v,u,t=null,s=g!=null,r=s?new B.b9J(g):t,q=A.x(d?12:14),p=d?46:52,o=A.x(d?12:14),n=x.O
n=s?new F.ak(E.W,C.a_,C.t,A.a([G.dX.j(0.95),C.p,I.y1],n),t,t):new F.ak(E.W,C.a_,C.t,A.a([C.h.j(0.08),C.h.j(0.05)],n),t,t)
w=s?A.a([new A.W(0,C.r,G.ac.j(0.35),E.cF,12)],x.V):t
v=d?16:20
v=A.ai(e,s?C.ae:C.b8,t,t,v)
u=s?G.ie:C.b8
return A.b4(!1,C.z,!0,t,A.bc(!1,q,!0,K.eX(F.V(A.a([v,H.b9,new F.dM(1,E.aZ,A.l(f,t,1,C.I,t,t,A.E(t,t,u,t,t,t,t,t,t,t,t,d?12:14,t,t,C.y,t,t,!0,t,0.2,t,t,t,t,t,t),t,t),t)],x.p),E.j,C.Z,E.n,0),t,new A.u(t,t,t,o,w,n,C.m),p,t,t),t,!0,t,t,t,t,t,t,t,t,r,t,t,t,t,t,t,t),C.f,C.w,0,t,t,t,t,t,C.F)},
aLH(d,e,f){return this.Kd(!1,d,e,f)},
a9K(d,e,f){var w=null,v=f!=null,u=v?G.dX:C.b8,t=v?G.ac:H.c2
t=A.F3(w,w,w,w,w,w,w,w,w,u,w,w,G.h5,w,new A.cH(A.x(12),C.x),new A.aO(t,1.5,C.D,-1),w,w,w,w)
return A2.bBK(A.ai(d,w,w,w,16),A.l(e,w,w,w,w,w,I.Oj,w,w),f,t)},
a9J(d){var w=null,v=C.l.j(0.35),u=A.x(14),t=F.Q(C.h.j(0.08),1),s=A.y(w,w,C.f,w,w,D.Rm,w,8,w,w,w,w,w,8),r=G.ac.j(0.15),q=A.x(20),p=F.Q(G.ac.j(0.35),1),o=x.p
o=A.a([F.V(A.a([s,E.a2,D.aEI,H.bY,A.y(w,A.l(""+d+"/"+this.gnQ()+" Joined",w,w,w,w,w,A.E(w,w,G.dX,w,w,w,w,w,w,w,w,11,w,w,C.y,w,w,!0,w,w,w,w,w,w,w,w),w,w),C.f,w,w,new A.u(r,w,p,q,w,w,C.m),w,w,w,w,H.it,w,w,w)],o),E.j,C.i,E.n,0),H.aI],o)
C.b.K(o,A.jk(this.gnQ(),new B.ba_(this),!0,x.l))
return A.y(w,F.P(o,E.ab,C.i,E.n),C.f,w,w,new A.u(v,w,t,u,w,w,C.m),w,w,w,w,G.dy,w,w,w)},
a9G(){var w=null,v=A.x(12),u=F.Q(R.cM.j(0.45),1),t=x.p
return F.P(A.a([I.v9,H.aB,A.y(w,F.V(A.a([I.AU,H.aT,F.S(A.l(this.guZ(),w,w,w,w,w,Q.v2,w,w),1),A.dG(w,w,w,I.AZ,w,w,new B.b9K(this),w,w,w,w,w)],t),E.j,C.i,E.n,0),C.f,w,w,new A.u(D.m5,w,u,v,w,w,C.m),w,w,w,w,A4.mM,w,w,w)],t),E.X,C.i,E.n)},
a9O(){var w=null
return F.V(A.a([A.ai(D.a5y,G.ac.j(0.55),w,w,14),H.b9,A.l("Fair Play  \xb7  Secure  \xb7  Trusted",w,w,w,w,w,A.E(w,w,G.ac.j(0.55),w,w,w,w,w,w,w,w,11,w,w,C.S,w,w,!0,w,0.3,w,w,w,w,w,w),w,w)],x.p),E.j,C.Z,E.n,0)},
Kb(d,e){var w,v,u,t,s,r,q=null
if(e)w=C.c.t(d.toLowerCase(),"network")||C.c.t(d.toLowerCase(),"connect")||C.c.t(d.toLowerCase(),"timeout")||C.c.t(d.toLowerCase(),"timed out")||C.c.t(d.toLowerCase(),"server")
else w=!1
v=(e?C.aF:R.cM).j(0.12)
u=A.x(12)
t=F.Q((e?C.aF:R.cM).j(0.4),1)
s=x.p
r=A.a([],s)
if(w)C.b.K(r,A.a([D.alz,E.aN],s))
r.push(A.l(d,q,q,q,q,q,A.E(q,q,e?C.i6:R.qi,q,q,q,q,q,q,q,q,12,q,q,C.S,q,q,!0,q,q,q,q,q,q,q,q),C.K,q))
return A.y(q,F.P(r,E.j,C.i,E.n),C.f,q,q,new A.u(v,q,t,u,q,q,C.m),q,q,q,q,G.dy,q,q,q)}}
B.amu.prototype={}
B.Y1.prototype={
a4(){this.ag()
B.vF()
$.at.ak$.push(new B.bni(this))},
l(){B.rX()
this.a9()}}
B.EL.prototype={
V(){var w=x.S,v=A.bp(4,0,!1,w)
return new B.TT(v,A.F(x.N,w),C.bM,new B.MO(),null,null)}}
B.TT.prototype={
a4(){var w,v,u=this,t=null
u.aus()
$.at.aW$.push(u)
u.x2=A.bb(t,C.il,0,t,1,t,u)
w=A.bb(t,Q.kp,0,t,1,t,u)
w.i1(0,!0)
u.xr=w
v=x.Z
u.y1=new A.au(A.bN(C.d0,w,t),new A.aC(0.35,1,v),v.i("au<aL.T>"))
u.aLP()
u.E1()
u.d=A.fu(M.qL,new B.bb8(u))
u.a3=A.fu(C.bO,new B.bb9(u))},
kM(d){var w,v,u,t,s,r=this
if(d===C.hN||d===C.jB||d===C.hO){if(!r.cx){w=r.ak
if(!(w>0))if(r.aq!=null){w=r.ar
v=Date.now()
u=r.aq
u.toString
u=Math.max(0,w-C.k.bk(new A.c3(v,0,!1).ct(u).a,1e6))
w=u}else w=10
r.cy=w}r.cx=!0
return}if(d===C.cw){t=r.cx
r.cx=!1
if($.jM>0)A.hg()
if(t&&r.cy!=null){w=r.cy
w.toString
s=C.k.R(w,1,10)
r.aq=new A.c3(Date.now(),0,!1)
r.ak=r.ar=s
r.ae=!1
r.cy=null}if(r.c!=null&&!r.dy&&!r.fr){r.n0(!0,!0)
r.uL()}}},
ky(){var w=$.aA,v=S.anZ(w==null?"":w)
if(v!=null&&v.length!==0)return v
w=$.bd
w=w==null?null:w.a
return w==null?"":w},
UB(){var w=$.aA,v=this.ky(),u=w==null?"":w,t=this.a.c
return A.aa(["userId",v,"user_id",v,"token",u,"tableId",t,"table_id",t],x.N,x.z)},
aLP(){var w,v,u=this
N.Co(u.a.f)
B.bw6(u.a.f)
w=N.cu(u.a.f)
v=new B.baV(u)
u.aA=v
u.aY=u.gaxf()
u.aG=new B.baW(u)
u.aE=u.gaNy()
w.cA(0,"roomTrigger",v)
v=u.aY
v.toString
w.cA(0,"getStep",v)
v=u.aY
v.toString
w.cA(0,"startGame",v)
v=u.aY
v.toString
w.cA(0,"dice",v)
v=u.aY
v.toString
w.cA(0,"move",v)
v=u.aE
v.toString
w.cA(0,"ludo_timer",v)
v=u.aG
v.toString
w.cA(0,"connect",v)
if(w.y)u.a6H()},
V3(d){var w,v,u="table_id",t="table",s=J.N(d),r=s.h(d,"tableId")
if(r==null)r=s.h(d,u)
if(r==null)r=s.h(d,"ludo_table_id")
if(r==null){r=x.f
if(r.b(s.h(d,t))){w=J.B(r.a(s.h(d,t)),u)
s=w==null?J.B(r.a(s.h(d,t)),"tableId"):w}else s=null}else s=r
v=s==null?null:J.L(s)
if(v==null||v.length===0)return!0
return v===this.a.c},
yD(d){var w
if(d==null||d.length===0)return!1
w=d.toLowerCase()
return C.c.t(w,"unreachable")||C.c.t(w,"socket hang up")||C.c.t(w,"econnreset")||C.c.t(w,"econnrefused")||C.c.t(w,"timed out")||C.c.t(w,"timeout")||C.c.t(w,"gateway")||C.c.t(w,"502")||C.c.t(w,"503")||C.c.t(w,"504")},
a6H(){var w,v,u=this,t=$.aA,s=u.ky()
if(t==null||t.length===0||s.length===0)return
w=u.UB()
v=N.cu(u.a.f)
if(!v.y)B.bw6(u.a.f)
v.dI("joinRoom",w)
v.dI("getStep",w)},
uL(){var w,v,u,t=this,s=$.aA,r=t.ky()
if(s==null||s.length===0||r.length===0)return
w=new A.c3(Date.now(),0,!1)
v=t.r
if(v!=null&&w.ct(v).a<18e5)return
t.r=w
u=N.cu(t.a.f)
if(!u.y)B.bw6(t.a.f)
u.dI("getStep",t.UB())},
axg(d){var w,v,u,t,s,r,q=this
if(q.c==null||!x.f.b(d))return
w=B.EK(A.ao(d,x.N,x.z))
if(!q.V3(w))return
v=B.bBc(w)
if(v!=null){u=v.toLowerCase()
if(q.yD(v)||C.c.t(u,"no active game")||C.c.t(u,"waiting for players")||C.c.t(u,"not started"))return
q.E(new B.bar(q,v))
return}t=B.a3B(w)
s=J.bX(w)
r=s.aw(w,"currentTurnIndex")||s.aw(w,"current_turn_index")||s.aw(w,"nextTurnIndex")||s.aw(w,"next_turn_index")||s.aw(w,"playerIds")||s.aw(w,"player_ids")||s.aw(w,"dice")||s.aw(w,"turnExpiresAt")||s.aw(w,"turn_expires_at")
if(!t&&!r)return
if(q.dy||q.fr){q.to=B.q_(q.to,w)
return}q.SE(w)},
TA(){var w=this,v=w.to
if(v==null||w.dy||w.fr)return
w.to=null
w.SE(v)},
a4r(d){var w,v,u,t,s,r,q,p,o,n
if(d==null)return""
w=B.rU(d)
v=B.op(d)
u=B.vD(d)
t=B.oq(d)
s=B.aBR(d)
if(s==null)s=""
r=B.rV(d)
q=w+"|"+v+"|"+u+"|"+t+"|"+s+"|"
for(p=r.length,o=0;o<r.length;r.length===p||(0,A.a0)(r),++o){for(n=J.b0(r[o]);n.A();)q+=""+B.MJ(n.gP(n))+"."
q+=";"}return q.charCodeAt(0)==0?q:q},
Ue(d){var w,v,u,t,s,r,q,p,o,n=this,m="ludoState",l=n.CW
if(l==null||l<=0)return
w=n.y
if(w==null)w=d
v=B.q0(w,n.ky())
u=B.op(d)
t=B.vD(d)
s=B.rU(d)
w=v>=0
r=!1
if(w)if(u>=0)if(u!==v)r=t<=0||s==="rolling"
if(r){n.CW=null
return}q=d.h(0,m)
r=x.N
p=x.z
o=x.f.b(q)?A.ao(q,r,p):A.F(r,p)
o.k(0,"phase","moving")
o.k(0,"lastDice",l)
d.k(0,m,o)
d.k(0,"dice",l)
if(w){d.k(0,"currentTurnIndex",v)
d.k(0,"current_turn_index",v)}},
SE(d){var w,v=this,u=B.q_(v.y,d)
if(u!=null){w=v.CW
w=w!=null&&w>0}else w=!1
if(w)v.Ue(u)
if(v.a4r(u)===v.a4r(v.y)){v.y=u
v.W4()
return}v.E(new B.bat(v,u))
v.Vn()
v.a6a()
v.W4()},
a6a(){var w,v,u,t,s,r,q,p=this,o=p.y
if(o==null)return
w=p.ky()
v=B.q0(o,w)
u=B.oq(o)
t=B.op(o)
s=v>=0&&t===v&&!u
if(u&&!p.X){r=B.aBR(o)
q=$.bL()
q.by(0,r===w?V.bW:V.c6)}else if(s&&p.C===!1)$.bL().by(0,M.o9)
p.X=u
p.C=s},
aNz(d){var w,v,u=this
if(u.c==null)return
w=typeof d=="number"?d:A.dj(A.v(d))
if(w==null||!isFinite(w))return
v=B.bp7(Math.max(0,C.d.fi(w)))
u.E(new B.baD(u,v))
if(v===0&&!u.cx&&u.CW==null)u.a9P()},
Sw(){var w=this
w.ak=0
w.Y=""
w.aZ=w.aq=null
w.ae=!1},
L6(){var w,v,u=this
u.ae=!1
u.aZ=null
u.aq=new A.c3(Date.now(),0,!1)
u.ak=u.ar=10
w=u.y
if(w!=null){v=B.op(w)
u.Y=B.bHk(w,B.rU(w),v)}},
Vn(){var w,v,u,t=this,s=t.y
if(s==null)return
w=B.op(s)
v=B.bHk(s,B.rU(s),w)
if(v===t.Y)return
t.Y=v
t.ae=!1
u=B.c25(s,t.aZ)
t.aq=new A.c3(Date.now(),0,!1)
t.ar=u>0?u:10},
aLQ(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this
if(i.c==null||i.cx)return
w=i.y
v=B.q0(w,i.ky())
u=B.op(w)
t=B.rU(w)
s=B.oq(w)
r=w!=null&&v>=0&&u===v&&!s
q=i.ch!=null||i.RG!=null||i.fr
p=i.CW
o=p==null
n=!o&&p>0&&t==="moving"
if(r)m=(t==="rolling"||n)&&!i.dy&&!q
else m=!1
if(!m){if(i.ak!==0||i.Y.length!==0)if(o)i.E(new B.bb_(i))
return}i.Vn()
if(i.aq!=null){p=i.ar
o=Date.now()
l=i.aq
l.toString
k=Math.max(0,p-C.k.bk(new A.c3(o,0,!1).ct(l).a,1e6))}else k=0
j=B.bp7(k)
if(j!==i.ak)i.E(new B.bb0(i,j))
if(j===0&&!i.cx&&i.CW==null)i.a9P()},
gnP(){var w,v,u=this,t=null
if(!(B.a3B(u.y)&&!B.MH(u.y)))if(B.MH(u.y)||B.MH(u.x))return!1
w=u.x
if(w==null)w=t
else{w=J.B(w,"status")
w=w==null?t:J.L(w)}if(w==="playing")return!0
w=u.y
w=w==null?t:w.h(0,"gameId")
if(w==null){w=u.y
w=w==null?t:w.h(0,"game_id")}v=w==null?t:C.c.S(J.L(w))
return(v==null?"":v).length!==0},
Dj(){var w,v,u,t=this
if(!t.gnP()||B.oq(t.y))return!1
w=t.ky()
v=B.q0(t.y,w)
u=B.op(t.y)
if(v<0||u<0)return!1
return u!==v},
nH(){var w=0,v=A.p(x.H),u,t=2,s=[],r=[],q=this,p,o,n
var $async$nH=A.q(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(!q.gpr()){q.n0(!0,!0)
w=1
break}w=q.c==null||q.dx?3:4
break
case 3:w=5
return A.e(q.n0(!0,!0),$async$nH)
case 5:w=1
break
case 4:q.dx=!0
q.aQs()
t=6
o=x.H
w=9
return A.e(A.ct(C.h3,null,o),$async$nH)
case 9:q.uL()
p=0,n=q.gazP()
case 10:if(!(p<12)){w=12
break}if(q.c==null){r=[1]
w=7
break}w=13
return A.e(q.n0(!0,!0),$async$nH)
case 13:if(q.c!=null){n.$0()
q.c.dh()
q.W4()}if(!q.Dj()){if(q.c!=null){new B.bas(q).$0()
q.c.dh()}r=[1]
w=7
break}w=14
return A.e(A.ct(new A.aT(1000*(900+p*100)),null,o),$async$nH)
case 14:case 11:++p
w=10
break
case 12:r.push(8)
w=7
break
case 6:r=[2]
case 7:t=2
q.dx=!1
w=r.pop()
break
case 8:case 1:return A.n(u,v)
case 2:return A.m(s.at(-1),v)}})
return A.o($async$nH,v)},
JU(d,e){if(e>=4)return
if(d<1||d>6)return
this.fy[e]=d},
azQ(){var w,v,u,t=this
if(B.rU(t.y)==="rolling")return
w=B.vD(t.y)
if(w<=0)return
v=B.op(t.y)
if(v<0)return
u=B.rZ(v,t.ghO())
t.JU(w,u)
if(!t.dy){t.id=C.k.R(w,1,6)
t.k1=u}},
a9P(){var w=this
if(w.ae)return
w.ae=!0
if(w.gnP())w.uL()
else w.pB()},
E1(){var w=0,v=A.p(x.H),u=this
var $async$E1=A.q(function(d,e){if(d===1)return A.m(e,v)
for(;;)switch(w){case 0:u.uL()
w=u.gnP()?2:4
break
case 2:w=5
return A.e(u.VZ(!0),$async$E1)
case 5:w=3
break
case 4:w=6
return A.e(u.pB(),$async$E1)
case 6:case 3:return A.n(null,v)}})
return A.o($async$E1,v)},
n0(d,e){return this.aVa(d,e)},
VY(d){return this.n0(d,!1)},
VZ(d){return this.n0(!1,d)},
aVa(d,e){var w=0,v=A.p(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m
var $async$n0=A.q(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(q.w){w=1
break}if(!e)q.uL()
p=$.aA
if(p==null||p.length===0){w=1
break}n=new A.c3(Date.now(),0,!1)
if(!d){m=q.f
m=m!=null&&n.ct(m).a<16e5}else m=!1
if(m){w=1
break}q.f=n
q.w=!0
t=3
w=6
return A.e(B.a3x(q.a.c,p),$async$n0)
case 6:o=g
if(q.c==null||o==null){r=[1]
w=4
break}if(!q.V3(o)){r=[1]
w=4
break}if(q.dy||q.fr){q.to=B.q_(q.to,o)
r=[1]
w=4
break}m=q.z
if(m!=null&&q.yD(m))q.z=null
q.SE(o)
r.push(5)
w=4
break
case 3:r=[2]
case 4:t=2
q.w=!1
w=r.pop()
break
case 5:case 1:return A.n(u,v)
case 2:return A.m(s.at(-1),v)}})
return A.o($async$n0,v)},
pB(){var w=0,v=A.p(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i,h,g,f
var $async$pB=A.q(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.w){w=1
break}p=$.aA
if(p==null||p.length===0){w=1
break}j=new A.c3(Date.now(),0,!1)
i=q.f
if(i!=null&&j.ct(i).a<3e6){w=1
break}q.f=j
q.w=!0
t=3
i={}
w=6
return A.e(B.a3x(q.a.c,p),$async$pB)
case 6:o=e
i.a=null
w=o==null||q.x==null?7:9
break
case 7:f=i
w=10
return A.e(B.MG(q.a.c,p),$async$pB)
case 10:e=f.a=e
w=8
break
case 9:e=null
case 8:h=e
if(q.c==null){r=[1]
w=4
break}n=q.aE3(h)
m=n!=null||h!=null
l=o!=null&&q.V3(o)
h=n
if(h==null)h=q.x
if(h==null)g=null
else{h=J.B(h,"status")
g=h==null?null:J.L(h)}k=g
q.E(new B.baI(i,q,m,n,l,k,o))
q.Vn()
q.a6a()
q.Dx()
r.push(5)
w=4
break
case 3:r=[2]
case 4:t=2
q.w=!1
w=r.pop()
break
case 5:case 1:return A.n(u,v)
case 2:return A.m(s.at(-1),v)}})
return A.o($async$pB,v)},
Ki(){var w=0,v=A.p(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Ki=A.q(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(r.as){w=1
break}q=$.aA
p=r.ky()
if(q==null||q.length===0||J.ax(p)===0){w=1
break}o=r.x
if(o==null)n=null
else{o=J.B(o,"status")
n=o==null?null:J.L(o)}if(n!=="waiting"){w=1
break}if(r.gnP()){w=1
break}if(B.oq(r.y)){w=1
break}if(B.a3B(r.y)){w=1
break}r.as=!0
t=4
w=7
return A.e(B.btk(r.a.c,q,p),$async$Ki)
case 7:t=2
w=6
break
case 4:t=3
l=s.pop()
r.as=!1
w=6
break
case 3:w=2
break
case 6:case 1:return A.n(u,v)
case 2:return A.m(s.at(-1),v)}})
return A.o($async$Ki,v)},
aQs(){var w,v,u,t,s=this
if(!s.gpr()||s.dy||s.c==null)return
w=s.y
if(w==null||B.oq(w))return
v=B.q0(w,s.ky())
u=B.op(w)
if(v<0||u<0)return
t=u===v?s.aMG(u):u
if(t<0||t===v)return
s.VR(B.rZ(t,s.ghO()))},
aMG(d){var w,v,u,t,s=this.ghO()
if(s<=0)return-1
w=B.MI(this.y,this.x)
for(v=w.length,u=1;u<=s;++u){t=C.k.aj(d+u,s)
if(t<v&&C.c.S(w[t]).length!==0)return t}return C.k.aj(d+1,s)},
VR(d){var w=this,v=w.c
if(v==null)return
if(w.k3&&w.k4===d)return
v=w.p1
if(v!=null)v.U(0)
w.p2=w.p1=null
$.bL().by(0,A_.li)
w.E(new B.baY(w,d))},
aQH(d,e){var w,v,u=this
if(e<1||e>6)return
u.VR(d)
if(u.p2===e&&u.p1!=null)return
u.p2=e
w=u.p1
if(w!=null)w.U(0)
v=u.ok
if(v==null)v=new A.c3(Date.now(),0,!1)
u.p1=A.c7(A.c8(0,Math.max(0,900-C.k.bk(new A.c3(Date.now(),0,!1).ct(v).a,1000)),0),new B.baF(u))},
adP(){var w=this,v=w.p1
if(v!=null)v.U(0)
w.p1=null
if(w.c==null)return
if(!w.k3&&w.p2==null)return
w.E(new B.baZ(w,w.k4,w.p2))},
W4(){var w,v,u,t,s,r,q,p=this
if(!p.gpr()||p.dy||p.c==null)return
w=p.y
if(w==null||B.oq(w)){p.adP()
return}v=B.q0(w,p.ky())
u=B.op(w)
t=B.rU(w)
s=B.vD(w)
if(v<0||u<0||u===v){if(p.k3)p.adP()
return}r=B.rZ(u,p.ghO())
if(t==="rolling"){q=p.p1
if(q!=null)q.U(0)
p.p2=p.p1=null
p.VR(r)
return}if(s>0)p.aQH(r,C.k.R(s,1,6))},
l(){var w,v,u,t,s,r=this,q=r.d
if(q!=null)q.U(0)
q=r.p1
if(q!=null)q.U(0)
q=r.e
if(q!=null)q.U(0)
q=r.a3
if(q!=null)q.U(0)
q=r.x1
if(q!=null)q.U(0)
q=r.x2
q===$&&A.b()
q.l()
q=r.xr
q===$&&A.b()
q.l()
$.at.h8(r)
w=N.cu(r.a.f)
v=r.aA
if(v!=null)w.cY("roomTrigger",v)
u=r.aY
if(u!=null){w.cY("getStep",u)
w.cY("startGame",u)
w.cY("dice",u)
w.cY("move",u)}t=r.aG
if(t!=null)w.cY("connect",t)
s=r.aE
if(s!=null)w.cY("ludo_timer",s)
r.Ki()
Ab.bw4(r.a.f)
r.aur()},
aE3(d){var w,v
if(d==null)return null
w=J.B(d,"table_data")
if(x.j.b(w)&&J.cJ(w)){v=J.fo(w)
if(x.P.b(v))return v
if(x.f.b(v))return A.ao(v,x.N,x.z)}return d},
gaa6(){var w=this.x
return L.MS(w==null?A.F(x.N,x.z):w)},
Kx(){return this.gaa6().d>0?this.gaa6().d:this.a.e},
gpr(){return C.c.t(this.a.r.toLowerCase(),"computer")},
axh(d){var w,v,u,t
if(d==null||J.cr(d))return
w=J.N(d)
v=w.h(d,"table")
u=v==null?w.h(d,"data"):v
if(u==null)u=d
if(!x.f.b(u))return
w=x.N
v=x.z
t=A.ao(u,w,v)
v=A.F(w,v)
w=this.x
if(w!=null)v.K(0,w)
v.K(0,t)
this.x=v},
Dx(){var w=0,v=A.p(x.H),u,t=this,s,r,q,p
var $async$Dx=A.q(function(d,e){if(d===1)return A.m(e,v)
for(;;)switch(w){case 0:if(t.c==null||t.at||t.ax){w=1
break}if(t.gnP()){t.at=!0
w=1
break}s=t.x
s=s==null?null:J.B(s,"status")
if(s==null){s=t.y
s=s==null?null:s.h(0,"status")}if((s==null?null:J.L(s))==="playing"){t.at=!0
w=1
break}if(t.x==null&&t.y==null){w=1
break}s=Date.now()
r=t.ay
if(r!=null&&new A.c3(s,0,!1).ct(r).a<4e6){w=1
break}w=t.gpr()?3:4
break
case 3:w=5
return A.e(t.nN(!1),$async$Dx)
case 5:w=1
break
case 4:q=t.a.r.toLowerCase()
w=C.c.t(q,"local")&&!C.c.t(q,"computer")?6:7
break
case 6:p=t.Kx()
w=B.MI(t.y,t.x).length>=p&&p>0?8:9
break
case 8:w=10
return A.e(t.nN(!1),$async$Dx)
case 10:case 9:case 7:case 1:return A.n(u,v)}})
return A.o($async$Dx,v)},
nN(d){return this.aEf(d)},
aEf(a4){var w=0,v=A.p(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3
var $async$nN=A.q(function(a5,a6){if(a5===1){s.push(a6)
w=t}for(;;)switch(w){case 0:if(q.c==null||q.ax){w=1
break}if(q.gnP()){q.at=!0
w=1
break}p=$.aA
o=q.ky()
if(p==null||p.length===0||J.ax(o)===0){w=1
break}q.ax=!0
q.ay=new A.c3(Date.now(),0,!1)
q.E(new B.bau(q))
t=4
n=q.Kx()
m=B.MI(q.y,q.x).length
l=n-m
w=l>0&&q.gpr()?7:8
break
case 7:w=9
return A.e(L.v7(l,q.a.c,p),$async$nN)
case 9:k=a6
if(q.c==null){r=[1]
w=5
break}q.axh(k)
case 8:j=N.cu(q.a.f)
j.dI("startGame",q.UB())
w=10
return A.e(B.aBG(q.a.c,p,o),$async$nN)
case 10:i=a6
P.ds()
a0=x.f
if(a0.b(J.B(i,"ludoState"))||a0.b(J.B(i,"table"))){q.y=B.q_(q.y,i)
h=J.B(i,"table")
if(a0.b(h)){a0=x.N
a1=x.z
g=A.F(a0,a1)
f=q.x
if(f!=null)J.CA(g,f)
J.CA(g,A.ao(h,a0,a1))
q.x=g}}q.at=!0
q.r=q.f=null
w=11
return A.e(q.VY(!0),$async$nN)
case 11:w=q.c!=null&&q.Dj()?12:13
break
case 12:w=14
return A.e(q.nH(),$async$nN)
case 14:case 13:w=q.c!=null&&!q.gnP()?15:16
break
case 15:w=17
return A.e(q.pB(),$async$nN)
case 17:case 16:r.push(6)
w=5
break
case 4:t=3
a3=s.pop()
g=A.a9(a3)
if(g instanceof B.lv){e=g
if(a4&&q.c!=null&&!q.yD(e.a))q.c.a0(x.q).f.bc(F.cb(null,null,null,null,null,C.u,null,A.l(e.a,null,null,null,null,null,null,null,null),null,E.a5,null,null,null,null,null,null,null,null,null,null))}else{d=g
if(a4&&q.c!=null&&!q.yD(A.v(d)))q.c.a0(x.q).f.bc(F.cb(null,null,null,null,null,C.u,null,A.l(A.v(d),null,null,null,null,null,null,null,null),null,E.a5,null,null,null,null,null,null,null,null,null,null))}r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
q.ax=!1
if(q.c!=null)q.E(new B.bav(q))
w=r.pop()
break
case 6:case 1:return A.n(u,v)
case 2:return A.m(s.at(-1),v)}})
return A.o($async$nN,v)},
aUx(){return this.nN(!0)},
pC(){var w=0,v=A.p(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4
var $async$pC=A.q(function(d5,d6){if(d5===1){s.push(d6)
w=t}for(;;)switch(w){case 0:d2=$.aA
d3=q.ky()
if(d2==null||d2.length===0||J.ax(d3)===0){w=1
break}if(B.oq(q.y)){w=1
break}if(q.dy||q.fr||q.Q){w=1
break}b8=B.q0(q.y,d3)
p=b8>=0?B.rZ(b8,q.ghO()):0
q.E(new B.baJ(q))
P.ds()
$.bL().by(0,A_.li)
t=4
b9={}
o=B.btm(q.a.c,d2,d3)
b9.a=b9.b=null
o.bH(new B.baK(b9),x.P).m5(new B.baL(b9))
n=new A.c3(Date.now(),0,!1)
c0=x.H
case 7:if(!(q.c!=null)){w=8
break}c1=Date.now()
c2=n
c3=c2.a
m=C.k.bk(0-c2.b+1000*(c1-c3),1000)
l=b9.b!=null||b9.a!=null
if(l&&m>=1000){w=8
break}if(m>=2000){w=8
break}c1=q.x2
c1===$&&A.b()
c1.z=C.bF
c1.y=c1.w=null
c1.r.ue(0,!0)
c1.Db(0)
c1.aD()
c2=c1.Q
c2===$&&A.b()
if(c1.as!==c2){c1.as=c2
c1.wH(c2)}c1.IK(c1.b)
new B.baM(q).$0()
q.c.dh()
w=9
return A.e(A.ct(E.km,null,c0),$async$pC)
case 9:w=7
break
case 8:c1=b9.a
if(c1!=null)throw A.j(c1)
k=new A.c3(Date.now(),0,!1).pg(6e6)
case 10:c1=!1
if(b9.b==null)if(q.c!=null){c1=Date.now()
c2=k
c3=c2.a
if(c1>=c3)c1=c1===c3&&0<c2.b
else c1=!0}if(!c1){w=11
break}w=12
return A.e(A.ct(C.qN,null,c0),$async$pC)
case 12:w=10
break
case 11:if(q.c==null){r=[1]
w=5
break}c1=b9.b
if(c1==null){c0=A.aX("Dice roll timed out")
throw A.j(c0)}j=B.EK(c1)
c4=J.B(j,"dice")
i=c4==null?B.vD(j):c4
if(typeof i=="number"&&C.d.ai(i)>0)q.go=C.d.ai(i)
c5=q.go
h=c5==null?B.vD(j):c5
if(q.c==null){r=[1]
w=5
break}c1=q.x2
c1===$&&A.b()
c1.sq(0,0)
q.E(new B.baN(q,j,h,p))
if(h>0){c6=J.B(j,"mustMove")
g=c6==null?J.B(j,"must_move"):c6
c7=!0
if(!J.f(g,!1))if(!J.f(g,0)){c1=g
c1=(c1==null?null:J.L(c1))==="false"
c7=c1}f=c7
if(!f)q.CW=h}q.TA()
if(h<=0){r=[1]
w=5
break}w=13
return A.e(A.ct(A9.qP,null,c0),$async$pC)
case 13:if(q.c==null){r=[1]
w=5
break}c8=J.B(j,"mustMove")
e=c8==null?J.B(j,"must_move"):c8
c9=!0
if(!J.f(e,!1))if(!J.f(e,0)){c0=e
c0=(c0==null?null:J.L(c0))==="false"
c9=c0}d=c9
a0=B.q0(q.y,d3)
a1=a0>=0?B.rZ(a0,q.ghO()):-1
a2=B.rV(q.y)
a3=q.Jc(q.zE(a2,q.ghO()))
c0=$.p6()
a4=new B.jL(c0)
a5=q.Kt(a2,h,a3,a1,q.ghO(),a4,!0)
w=d&&J.ax(a5)===0&&!J.f(h,6)?14:15
break
case 14:q.CW=null
if(q.c!=null)q.E(new B.baO(q))
w=16
return A.e(q.nH(),$async$pC)
case 16:r=[1]
w=5
break
case 15:q.CW=h
q.E(new B.baP(q,h))
a6=B.q0(q.y,d3)
a7=a6>=0?B.rZ(a6,q.ghO()):-1
a8=B.rV(q.y)
a9=q.Jc(q.zE(a8,q.ghO()))
b0=new B.jL(c0)
d0=q.Kt(a8,h,a9,a7,q.ghO(),b0,!0)
b9.c=d0
if(d0.length===0&&J.f(h,6)&&a7>=0&&a7<J.ax(a9)){b1=A.a([],x.t)
for(b2=0;b2<J.ax(J.B(a9,a7));++b2){b3=J.B(J.B(a9,a7),b2)
if(b3.a&&!b3.c)J.dZ(b1,b2)}b9.c=b1}c0=b9.c.length
w=c0===0?17:18
break
case 17:w=J.f(h,6)?19:20
break
case 19:w=21
return A.e(q.n0(!0,!0),$async$pC)
case 21:if(q.c==null){r=[1]
w=5
break}b4=B.rV(q.y)
b5=q.Jc(q.zE(b4,q.ghO()))
b6=q.Kt(b4,h,b5,a7,q.ghO(),b0,!0)
if(J.ax(b6)===1){q.py(J.fo(b6))
r=[1]
w=5
break}if(J.ax(b6)!==0){q.L6()
if(q.c!=null)q.E(new B.baQ())
r=[1]
w=5
break}q.CW=null
q.E(new B.baR(q))
q.L6()
r=[1]
w=5
break
case 20:q.CW=null
w=22
return A.e(q.Ef(h,a6),$async$pC)
case 22:r=[1]
w=5
break
case 18:if(c0===1)$.at.ak$.push(new B.baS(b9,q))
else q.L6()
r.push(6)
w=5
break
case 4:t=3
d4=s.pop()
c0=A.a9(d4)
if(c0 instanceof B.lv){b7=c0
if(q.c!=null&&!q.yD(b7.a))q.c.a0(x.q).f.bc(F.cb(null,null,null,null,null,C.u,null,A.l(b7.a,null,null,null,null,null,null,null,null),null,E.a5,null,null,null,null,null,null,null,null,null,null))}r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null){c0=q.x2
c0===$&&A.b()
c0.sq(0,0)
if(q.dy)q.E(new B.baT(q))}w=r.pop()
break
case 6:case 1:return A.n(u,v)
case 2:return A.m(s.at(-1),v)}})
return A.o($async$pC,v)},
Ef(d,e){return this.aUp(d,e)},
aUp(d,e){var w=0,v=A.p(x.H),u,t=this
var $async$Ef=A.q(function(f,g){if(f===1)return A.m(g,v)
for(;;)switch(w){case 0:if(t.c==null){w=1
break}t.CW=null
t.E(new B.baX(t))
w=3
return A.e(t.nH(),$async$Ef)
case 3:case 1:return A.n(u,v)}})
return A.o($async$Ef,v)},
aVX(d,e){return d.a===e.a&&d.c===e.c&&d.b===e.b},
Uq(d,e,f,g,h){var w,v=this.R8===g&&this.RG===h,u=!f.a
if(u&&!f.c&&d.a){if(v)return!0
u=$.p6()
w=new B.jL(u).oZ(g,f)
if(w!=null&&new B.jL(u).ale(e,g,w)||this.ry.aw(0,""+g+":"+h))return!1
return!0}if(f.c&&!d.c)return!0
if(u&&!d.a&&f.b>d.b)return!0
return!1},
Km(d,e,f){var w=this.ry.h(0,""+d+":"+e)
if(w==null||f.a||f.c)return f
if(new B.jL($.p6()).oZ(d,f)===w)return D.fx
return f},
KZ(d,e,f){var w,v,u,t,s,r,q,p=this.ry,o=!1,n=0
for(;;){if(!(n<d.length&&n<e.length))break
w=""+n+":"
v=0
for(;;){if(!(v<J.ax(d[n])&&v<J.ax(e[n])))break
c$0:{u=J.B(d[n],v)
t=J.B(e[n],v)
if(u.a||u.c||!t.a)break c$0
s=$.p6()
r=new B.jL(s).oZ(n,u)
if(r==null||D.o8.t(0,r))break c$0
if(!new B.jL(s).ale(e,n,r))break c$0
q=w+v
s=p.aw(0,q)
p.k(0,q,r)
if(!s)o=!0}++v}++n}if(f&&o)$.bL().by(0,D.MT)},
axn(d){var w,v,u,t,s,r,q,p,o,n=A.a([],x.s)
for(w=this.ry,v=new A.eb(w,A.H(w).i("eb<1,2>")).gab(0);v.A();){u=v.d
t=u.a
s=t.split(":")
if(s.length!==2)continue
r=A.cB(s[0],null)
q=A.cB(s[1],null)
if(r==null||q==null)continue
if(r<0||r>=d.length||q<0||q>=J.ax(d[r]))continue
p=J.B(d[r],q)
if(p.a)continue
if(p.c){n.push(t)
continue}if(new B.jL($.p6()).oZ(r,p)===u.b)J.eh(d[r],q,D.fx)
else n.push(t)}for(v=n.length,o=0;o<n.length;n.length===v||(0,A.a0)(n),++o)w.L(0,n[o])},
aJW(){var w,v,u=this,t=B.op(u.y)
if(t<0)return null
w=u.ghO()
if(w<=0)return null
v=B.vD(u.y)
return B.rZ(B.rU(u.y)==="rolling"&&v===6?t:C.k.aj(t-1+w,w),w)},
Js(d,e){var w,v,u=this,t=u.pm(d)
u.axn(t)
w=u.rx
if(w==null)w=u.aJW()
if(w==null)return t
v=u.pm(t)
new B.jL($.p6()).Yw(t,w)
u.KZ(v,t,e)
return t},
a76(d){return this.Js(d,!1)},
pm(d){var w,v,u,t=A.a([],x.R)
for(w=d.length,v=x.r,u=0;u<d.length;d.length===w||(0,A.a0)(d),++u)t.push(A.c_(d[u],!0,v))
return t},
a9q(){var w=B.rV(this.y)
if(w.length===0)return null
return this.zE(w,this.ghO())},
ghO(){var w=this.Kx()
return B.a3J(w>0?w:this.a.e)},
Jc(d){var w,v,u,t,s,r,q,p,o=this,n=o.a9q()
if(n==null)n=d
w=o.p4
if(w==null)return o.a76(n)
v=o.pm(n)
u=w.length
t=v.length
u=u<t?u:t
for(s=0;s<u;++s){r=J.ax(w[s])<J.ax(v[s])?J.ax(w[s]):J.ax(v[s])
for(q=0;q<r;++q){p=J.B(w[s],q)
if(o.Uq(n[s][q],n,p,s,q))J.eh(v[s],q,J.B(w[s],q))}}return o.a76(v)},
E0(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=k.a9q()
if(j==null)return
w=new B.baH(k)
if(k.fr)return
v=k.R8
u=k.RG
if(v!=null&&u!=null&&k.p4!=null){t=k.pm(j)
s=k.p4
if(v<s.length&&u<J.ax(s[v])&&v<t.length&&u<J.ax(t[v])){r=J.B(k.p4[v],u)
q=j[v][u]
if(k.aVX(r,q)){s=k.x1
if(s!=null)s.U(0)
k.RG=k.R8=k.x1=null
w.$1(t)}else if(k.Uq(q,j,r,v,u)){J.eh(t[v],u,r)
w.$1(t)}else{s=k.x1
if(s!=null)s.U(0)
k.RG=k.R8=k.x1=null
w.$1(t)}}else w.$1(t)
return}p=k.p4
if(p!=null&&!k.Q){k.aMK(p,j)
t=k.pm(j)
o=!1
n=0
for(;;){if(!(n<p.length&&n<t.length))break
m=0
for(;;){if(!(m<J.ax(p[n])&&m<J.ax(t[n])))break
s=J.B(p[n],m)
if(k.Uq(j[n][m],j,s,n,m)){J.eh(t[n],m,J.B(p[n],m))
o=!0}++m}++n}if(o){w.$1(t)
return}l=k.aEs(p,j)
if(l!=null){$.at.ak$.push(new B.baG(k,l,j))
return}}w.$1(j)},
aMK(d,e){var w,v,u,t,s,r,q,p,o=this,n=null,m=0
for(;;){if(!(m<d.length&&m<e.length))break
w=0
for(;;){if(!(w<J.ax(d[m])&&w<e[m].length))break
v=o.Km(m,w,J.B(d[m],w))
u=o.Km(m,w,e[m][w])
t=v.a
s=t&&!u.a&&!u.c
r=!t&&!u.a&&!v.c&&u.b>v.b
if(s||r)n=m;++w}++m}if(n!=null)o.rx=n
o.KZ(d,e,!0)
q=o.rx
if(q==null)return
p=o.pm(e)
new B.jL($.p6()).Yw(p,q)
o.KZ(e,p,!0)},
aEs(d,e){var w,v,u,t,s,r,q=null,p=0,o=0
for(;;){if(!(o<d.length&&o<e.length))break
w=0
for(;;){if(!(w<J.ax(d[o])&&w<e[o].length))break
c$0:{v=this.Km(o,w,J.B(d[o],w))
u=this.Km(o,w,e[o][w])
t=v.a
s=u.a
if(t===s&&v.c===u.c&&v.b===u.b)break c$0;++p
if(t&&!s)q=new A.UZ([6,v,o,w])
else if(!t&&!s&&!v.c&&u.b>v.b){r=u.b-v.b
if(r>=1&&r<=6)q=new A.UZ([r,v,o,w])}}++w}++o}if(q==null||p>4)return null
return q},
IJ(d,e){return this.ax2(d,e)},
ax2(d,e){var w=0,v=A.p(x.H),u,t=this,s,r,q,p,o,n
var $async$IJ=A.q(function(f,g){if(f===1)return A.m(g,v)
for(;;)switch(w){case 0:if(t.c==null||t.fr||t.RG!=null){w=1
break}s=$.p6()
r=d.a
q=r[2]
p=r[3]
o=r[1]
n=new B.jL(s).a_D(q,r[0],o,p)
if(n.length<=1){t.rx=r[2]
t.E(new B.bap(t,e))
w=1
break}$.bL().by(0,D.ur)
w=3
return A.e(t.Ck(r[2],r[3],n,!1,190),$async$IJ)
case 3:if(t.c==null){w=1
break}t.E(new B.baq(t,d,e))
t.fr=!1
t.TA()
case 1:return A.n(u,v)}})
return A.o($async$IJ,v)},
Ck(d,e,f,g,h){return this.ax1(d,e,f,!1,h)},
ax0(d,e,f,g){return this.Ck(d,e,f,g,null)},
ax1(d,e,f,g,h){var w=0,v=A.p(x.H),u,t=this,s,r
var $async$Ck=A.q(function(i,j){if(i===1)return A.m(j,v)
for(;;)switch(w){case 0:if(f.length<=1){w=1
break}t.fr=!0
t.E(new B.bao(t,d,e,f))
s=f.length
r=h==null?110:h
w=3
return A.e(A.ct(A.c8(0,(s-1)*r,0),null,x.H),$async$Ck)
case 3:if(t.c==null){t.fr=!1
t.p3=null
w=1
break}case 1:return A.n(u,v)}})
return A.o($async$Ck,v)},
py(d){return this.aMn(d)},
aMn(b7){var w=0,v=A.p(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6
var $async$py=A.q(function(b8,b9){if(b8===1){s.push(b9)
w=t}for(;;)switch(w){case 0:b3={}
b4=$.aA
b5=q.ky()
if(b4==null||b4.length===0||J.ax(b5)===0){w=1
break}if(B.oq(q.y)){w=1
break}if(q.dy||q.fr||q.Q){w=1
break}if(q.RG!=null){w=1
break}j=q.y
i=b3.a=B.vD(j)
if(i<=0){i=q.CW
h=b3.a=i==null?0:i}else h=i
if(h<=0){w=1
break}g=B.rV(j)
f=q.ghO()
e=B.q0(j,b5)
if(e<0){w=1
break}p=B.rZ(e,f)
o=B.bBi(p,f)
h=q.p4
if(h!=null)d=q.pm(h)
else d=g.length===0?q.a6K():q.zE(g,f)
for(h=x.b;a0=d.length,a0<4;){a1=A.a(new Array(4),h)
for(a2=0;a2<4;++a2)a1[a2]=D.fx
d.push(a1)}if(p<0||p>=a0){w=1
break}if(b7<0||b7>=J.ax(d[p])){w=1
break}a3=J.B(d[p],b7)
a4=new B.jL($.p6())
h=b3.a
if(!a4.XD(h,a3)){w=1
break}a5=a4.a_D(p,h,a3,b7)
q.E(new B.bax(q,d))
P.ds()
$.bL().by(0,D.ur)
w=a5.length>1?3:4
break
case 3:w=5
return A.e(q.ax0(p,b7,a5,!1),$async$py)
case 5:case 4:if(q.c==null){q.fr=!1
w=1
break}n=q.pm(d)
a6=a4.agl(n,p,b3.a,b7)
q.rx=p
q.KZ(d,n,a6!=null)
h=J.B(J.B(n,p),b7)
b3.b=q.TE(b3.a,j,o,h,b7)
a7=0
for(;;){if(!(a7<J.ax(n)&&a7<d.length))break
c$0:{a8=q.acV(a7)
if(a8<0)break c$0
a9=0
for(;;){if(!(a9<J.ax(J.B(n,a7))&&a9<J.ax(d[a7])))break
c$1:{b0=J.B(d[a7],a9)
b1=J.B(J.B(n,a7),a9)
if(b0.a||b0.c||!b1.a)break c$1
h=b3.b
b3.b=q.TE(b3.a,h,a8,b1,a9)}++a9}}++a7}q.E(new B.bay(b3,q,n,p,b7,e))
h=q.fr=!1
q.TA()
a0=q.x1
if(a0!=null)a0.U(0)
q.x1=A.c7(W.mC,new B.baz(q))
t=7
a0=q.a.c
w=10
return A.e(B.btl(b3.a,a0,b4,b7,b5),$async$py)
case 10:m=b9
if(q.c!=null){a0=q.x1
if(a0!=null)a0.U(0)
q.CW=q.x1=null
q.E(new B.baA(b3,q,m,o,b7,n,p))}w=b3.a!==6?11:13
break
case 11:w=14
return A.e(q.nH(),$async$py)
case 14:w=12
break
case 13:w=15
return A.e(q.VY(!0),$async$py)
case 15:q.uL()
case 12:r.push(9)
w=8
break
case 7:t=6
b6=s.pop()
a0=A.a9(b6)
if(a0 instanceof B.lv){l=a0
if(q.c!=null?!q.yD(l.a):h)q.c.a0(x.q).f.bc(F.cb(null,null,null,null,null,C.u,null,A.l(l.a,null,null,null,null,null,null,null,null),null,E.a5,null,null,null,null,null,null,null,null,null,null))
if(q.c!=null){h=q.x1
if(h!=null)h.U(0)
q.x1=null
q.CW=b3.a
q.E(new B.baB(b3,q,n))}q.VY(!0)}else{k=a0
h=q.c
if(h!=null){q.CW=b3.a
h.a0(x.q).f.bc(F.cb(null,null,null,null,null,C.u,null,A.l(A.v(k),null,null,null,null,null,null,null,null),null,E.a5,null,null,null,null,null,null,null,null,null,null))}}r.push(9)
w=8
break
case 6:r=[2]
case 8:t=2
if(q.c!=null)q.E(new B.baC(q))
w=r.pop()
break
case 9:case 1:return A.n(u,v)
case 2:return A.m(s.at(-1),v)}})
return A.o($async$py,v)},
TE(d,e,f,g,h){var w,v,u,t,s,r,q,p,o="ludoState",n=x.N,m=x.z,l=e==null?A.F(n,m):A.ao(e,n,m),k=l.h(0,o),j=x.f.b(k)?A.ao(k,n,m):A.F(n,m),i=B.rV(l)
if(i.length===0){w=this.ghO()
v=J.ig(w,x.U)
for(u=x.Y,t=0;t<w;++t){s=A.a(new Array(4),u)
for(r=0;r<4;++r)s[r]=A.aa(["stepNo",0],n,m)
v[t]=s}i=v}for(u=x.Y;i.length<=f;){v=A.a(new Array(4),u)
for(q=0;q<4;++q)v[q]=A.aa(["stepNo",0],n,m)
C.b.M(i,v)}p=A.c_(i[f],!0,x.P)
while(p.length<=h)p.push(A.aa(["stepNo",0],n,m))
n=A.d0(p[h],n,m)
n.k(0,"stepNo",this.adJ(g))
n.k(0,"packed",!1)
p[h]=n
i.$flags&2&&A.aG(i)
i[f]=p
j.k(0,"cards",i)
if(!g.a){j.k(0,"lastDice",0)
j.k(0,"phase","rolling")}l.k(0,o,j)
l.k(0,"dice",0)
return l},
adJ(d){if(d.c)return 57
if(d.a)return 0
return d.b+1},
aBu(d,e,f,g){if(g!==e)return 0
if(d>0)return d
return 0},
acV(d){var w,v,u=this.ghO()
for(w=0;w<u;++w){v=D.iR.h(0,B.MQ(w,u))
if((v==null?0:v)===d)return w}return-1},
aVV(d,e){if(e)return D.alI
if(d<=0)return D.fx
if(d>=57)return D.tD
return new B.jl(!1,d-1,!1)},
a6K(){var w,v,u,t,s=J.ig(4,x.I)
for(w=x.b,v=0;v<4;++v){u=A.a(new Array(4),w)
for(t=0;t<4;++t)u[t]=D.fx
s[v]=u}return s},
aQ5(d,e){var w,v,u=B.bRk(e)
for(w=0;w<d.length;++w){v=D.iR.h(0,B.MQ(w,e))
if(v==null)v=0
if(v<4)u[v]=!0}return u},
zE(d,e){var w,v,u,t,s,r,q,p,o=this.a6K()
for(w=0;w<d.length;++w){v=D.iR.h(0,B.MQ(w,e))
if(v==null)v=0
u=d[w]
for(t=J.N(u),s=0;s<4;++s){r=s<t.gB(u)?t.h(u,s):C.cq
q=B.MJ(r)
p=J.f(J.B(r,"packed"),!0)
o[v][s]=this.aVV(q,p)}}return o},
Kt(d,e,f,g,h,i,j){var w,v,u,t,s,r,q,p,o,n,m,l,k
if(!j||e<=0||g<0)return C.bD
w=new B.baw(f,i,g,e)
v=e===6
if(v){u=w.$0()
if(J.ax(u)!==0)return u}t=B.bBi(g,h)
s=!1
if(t<d.length&&g<f.length){r=d[t]
for(q=J.N(r),p=0;p<4;++p){o=B.MJ(p<q.gB(r)?q.h(r,p):C.cq)
if(o!==this.adJ(p<J.ax(f[g])?J.B(f[g],p):D.fx)){s=!0
break}}}if(s)return w.$0()
n=A.a([],x.t)
q=d.length
if(t<q){r=d[t]
for(q=J.N(r),p=0;p<4;++p){m=p<q.gB(r)?q.h(r,p):C.cq
l=J.f(J.B(m,"packed"),!0)
k=B.MJ(m)
if(l)continue
if(k>=57)continue
if(k<=0){if(v)n.push(p)}else if(k+e<=57)n.push(p)}}if(n.length!==0)return n
return w.$0()},
aCf(d,e,f,g){var w,v,u=this
if(u.k3&&u.k4===e)return C.k.R(u.fx,1,6)
if(u.dy&&g===e)return u.fx
w=u.id
if(w!=null&&w>0&&u.k1===e)return w
v=e>=0&&e<4?u.fy[e]:0
if(v>0)return v
if(g===e&&d>0)return d
return u.aBu(d,e,f,g)},
aBt(d,e,f,g,h,i,a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
if(!d)return null
w=D.e3[a1]
v=j.acV(a1)
u=B.MI(j.y,j.x)
t=v>=0&&v<u.length?u[v]:""
s=j.y
r=j.x
q=j.a.c
p=B.bR4(j.gpr(),s,g,a1,u,v,r,q)
o=p.length!==0?p:D.no[a1]+" Player"
n=f>0?C.k.R(f,1,6):0
m=e&&h&&!i
s=B.bHi(a3)
r=j.x2
r===$&&A.b()
q=j.y1
q===$&&A.b()
l=m?a2:null
if(!g)k=B.bB9(t)||j.gpr()
else k=!1
return B.bBh(w,!0,m,n,q,a0,k,o,l,i,s,r,"Win "+B.bwk(a3)+"/4")},
u(c8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3=this,c4=null,c5=$.aA,c6=c3.x,c7=A.aR(c6==null?c4:J.B(c6,"status"))
if(c7==null)c7="\u2026"
w=c3.Kx()
v=c3.ky()
u=c3.y
t=B.q0(u,v)
s=B.op(u)
r=B.rU(u)
q=B.vD(u)
p=B.aBR(u)
o=B.oq(u)&&c7!=="waiting"
n=B.rV(u)
m=c3.ghO()
l=c3.aQ5(n,m)
k=c3.zE(n,m)
j=new B.jL($.p6())
c6=t>=0
i=c6?B.rZ(t,m):-1
h=s>=0
g=h?B.rZ(s,m):-1
f=B.MI(c3.y,c3.x).length
e=c7==="waiting"&&!c3.gnP()
d=!1
if(e)if(!c3.Q){if(c5!=null)a0=c3.gpr()||f>=w
else a0=d
d=a0}if(e)a1=0
else if(q>0)a1=q
else{a0=c3.CW
if(a0==null)a0=0
a1=a0}a0=u!=null
a2=a0&&c6&&h&&s===t&&!o&&!e
c6=c3.ch
if(c6!=null&&h&&s!==c6)c6=c3.ch=null
a3=a0&&a2&&r==="rolling"&&!o&&!e&&!c3.dy&&!c3.fr&&c3.RG==null&&c3.CW==null&&c6==null
a4=!1
if(a0)if(a2){c6=(r==="moving"||c3.CW!=null)&&a1>0&&!o&&!c3.dy&&!c3.fr&&c3.RG==null
a4=c6}a5=c3.Jc(k)
a6=c3.Kt(n,a1,a5,i<0?0:i,m,j,a4)
a7=a2&&r==="moving"&&a1>0&&a6.length===0
if(a7&&c3.CW!==6&&!c3.Q&&!c3.db){c3.db=!0
$.at.ak$.push(new B.bb3(c3,a1,s))}if(!a7)c3.db=!1
a8=new A.aQ(l,new B.bb4(),A.ag(l).i("aQ<1>")).gB(0)
a9=g>=0&&g<4?D.e3[g]:G.ac
c6=c5==null
b0=!c6&&c3.x==null&&c3.y==null
h=o&&v.length!==0&&p===v
if(c6)c6=D.TZ
else if(b0){c6=c3.z
c6=A.cI(!0,new A.ay(C.C,c4,C.J,C.u,A.a([A.aE(B.bBd(c6==null?"Connecting\u2026":c6,200),c4,c4),A.aH(c4,A.dG(c4,c4,c4,D.a6J,c4,c4,new B.bb5(c8),c4,c4,c4,c4,c4),c4,c4,4,c4,4,c4)],x.p),c4),C.N,!0)}else{c6=c3.a
b1=c6.r.toLowerCase()
if(C.c.t(b1,"computer"))b2="Computer"
else b2=C.c.t(b1,"local")?"Local":"Online"
a0=x.p
c6=A.a([B.bBg("\u20b9"+c6.d+" \xb7 "+b2,new B.bb6(c8),c4,C.k.R(a8,2,4))],a0)
b3=!0
if(!c3.dy)if(!c3.k3){b3=c3.id
b3=b3!=null&&b3>0}if(b3&&!e&&!o){b3=G.ie.j(0.88)
b4=A.x(20)
b5=F.Q(G.ac.j(0.7),1)
c6.push(new A.a4(G.qU,A.y(c4,A.l(c3.dy||c3.k3?"Rolling\u2026":"This turn: "+A.v(c3.id),c4,c4,c4,c4,c4,D.Oi,c4,c4),C.f,c4,c4,new A.u(b3,c4,b5,b4,c4,c4,C.m),c4,c4,c4,c4,Y.r0,c4,c4,c4),c4))}b3=c3.ak
if(b3>0&&!e&&!o)c6.push(new B.a3M(b3,10,c4))
b3=A.a([],x.o)
for(b4=[0,1,2,3],b5=c3.gaRU(),b6=0;b6<4;++b6){b7=b4[b6]
b8=l[b7]
b9=g===b7
c0=i===b7
c1=c3.aCf(a1,b7,r,g)
if(!(c3.dy&&b9))c2=c3.k3&&c3.k4===b7
else c2=!0
b3.push(c3.aBt(b8,a3,c1,c0,c0,c2,b9,b7,b5,a5[b7]))}b3=A.a([new B.MN(b3,new B.bb7(c3,a9,l,a5,j,g,a6,a4,i),c4)],a0)
if(o){b4=A.a([H.fh.j(0.9),C.l.j(0.8)],x.O)
b8=A.x(16)
b9=F.Q(G.ac.j(0.55),1)
b3.push(new A.bM(C.q,c4,c4,A.y(c4,A.l(p===v?"You won!":"Game over",c4,c4,c4,c4,c4,D.azW,c4,c4),C.f,c4,c4,new A.u(c4,c4,b9,b8,c4,new F.ak(E.W,C.a_,C.t,b4,c4,c4),C.m),c4,c4,c4,G.qY,D.a38,c4,c4,c4),c4))}if(c3.z!=null){b4=C.dY.j(0.8)
b8=A.x(10)
b9=F.Q(G.ck.j(0.5),1)
c0=c3.z
c0.toString
b3.push(new A.bM(C.Q,c4,c4,A.y(c4,A.l(c0,c4,c4,c4,c4,c4,A0.oo,c4,c4),C.f,c4,c4,new A.u(b4,c4,b9,b8,c4,c4,C.m),c4,c4,c4,Ac.qV,G.r1,c4,c4,c4),c4))}c6.push(F.S(new A.ay(C.C,c4,C.J,C.u,b3,c4),1))
c6.push(H.aB)
if(e){if(c3.Q)b3="Starting match\u2026"
else b3=f>=w?"Table full \u2014 starting\u2026":"Waiting for players "+f+" / "+w
b3=A.l(b3,c4,c4,c4,c4,c4,E.hD,c4,c4)
b4=d?c3.gaUw():c4
b5=A.oc(A1.x_,A1.x_.j(0.4),c4,C.h,D.a3n,new A.cH(A.x(16),C.x),c4)
c6.push(new A.a4(D.a2P,F.P(A.a([b3,E.aN,K.mb(A.l(c3.Q?"\u2026":"Start game",c4,c4,c4,c4,c4,c4,c4,c4),b4,b5)],a0),E.j,C.i,E.n),c4))}else{b3=c3.dy&&a2
if(a4)b4="Pick a token"
else if(a2)b4="Your Turn"
else{if(c3.gpr())b4=c3.dx||c3.Dj()
else b4=!1
if(b4)b4="Computer playing\u2026"
else b4=c3.Dj()?"Opponent's turn":"Wait"}c6.push(new A.a4(D.zC,new B.MP(a3,b5,b3,a4?"Move":"Roll Dice",b4,c4),c4))}c6=A.a([F.P(c6,E.j,C.i,E.n)],a0)
if(c3.Q)c6.push(A.bO(0,new A.dh(C.l.j(0.45),D.TS,c4)))
c6=A.cI(!0,new A.ay(C.C,c4,C.J,C.u,c6,c4),C.N,!0)}return new Ae.hH(h,new O.tn(A.cT(c4,D.q1,new B.zB(c6,c4),c4),!1,c4),c4)}}
B.Y2.prototype={
b1(){this.ba()
this.b9()
this.dl()},
l(){var w=this,v=w.aO$
if(v!=null)v.N(0,w.gde())
w.aO$=null
w.a9()}}
B.amv.prototype={}
B.Y3.prototype={
a4(){this.ag()
B.vF()
$.at.ak$.push(new B.bnj(this))},
l(){B.rX()
this.auq()}}
B.a3E.prototype={
u(d){return K.hw(new B.TU(this.c,this.d,null),new B.aCy(this),x.W)}}
B.TU.prototype={
V(){return new B.afk()}}
B.afk.prototype={
a4(){this.auu()
$.at.aW$.push(this)},
kM(d){if(d===C.cw)if($.jM>0)A.hg()},
l(){$.at.h8(this)
this.aut()},
gaV_(){switch(this.a.c.a){case"computer":return"Play against the computer"
case"local":return"Same phone \xb7 pass and play"
default:return"Join a public table"}},
u(d){var w=null
return A.cT(w,C.l,new B.zB(A.cI(!0,K.xN(w,w,new B.bbj(this,this.a.d),x.W,x.B),C.N,!0),w),w)},
z6(d,e){return this.aNI(d,e)},
aNI(d,e){var w=0,v=A.p(x.H),u,t=this,s,r,q
var $async$z6=A.q(function(f,g){if(f===1)return A.m(g,v)
for(;;)switch(w){case 0:q={}
w=t.a.c.a==="local"?3:4
break
case 3:q={}
q.a=!1
w=5
return A.e(F.uj(d,C.be,new B.bba(q,t,e).$0(),"assets/anim/ludo.json"),$async$z6)
case 5:s=t.c
if(s==null){w=1
break}if(!q.a){r=K.aB(s,!1,x.W).c.d
if(r==null)r="Could not deduct table amount"
d.a0(x.q).f.bc(F.cb(null,null,null,null,null,C.u,null,A.l(r,null,null,null,null,null,null,null,null),null,E.a5,null,null,null,null,null,null,null,null,null,null))
w=1
break}O.Z8(d,new B.ML(B.bR8(0,B.a3J(e.b)),!1,null),x.X)
w=1
break
case 4:q.a=null
w=6
return A.e(F.uj(d,C.be,new B.bbb(q,t,e).$0(),"assets/anim/ludo.json"),$async$z6)
case 6:s=t.c
if(s==null){w=1
break}q=q.a
if(q==null||q.length===0){r=K.aB(s,!1,x.W).c.d
if(r==null)r="Could not join table"
d.a0(x.q).f.bc(F.cb(null,null,null,null,null,C.u,null,A.l(r,null,null,null,null,null,null,null,null),null,E.a5,null,null,null,null,null,null,null,null,null,null))
w=1
break}s=t.a.c
O.Z8(d,new B.EL(q,e.a,e.b,s.d,s.c,null),x.X)
case 1:return A.n(u,v)}})
return A.o($async$z6,v)}}
B.af6.prototype={
u(d){var w=this,v=null,u=x.p,t=A.a([new B.zy(H.eT,w.e,38,v),H.bY],u),s=D.m9.j(0.92),r=A.x(20),q=F.Q(G.ac.j(0.45),1)
t.push(A.y(v,F.V(A.a([A.ai(M.eq,D.cO.j(0.95),v,v,15),G.aM,A.l(""+w.f+" Players",v,v,v,v,v,G.oq,v,v)],u),E.j,C.i,E.v,0),C.f,v,v,new A.u(s,v,q,r,v,v,C.m),v,v,v,v,G.iu,v,v,v))
return new A.a4(D.a2M,F.P(A.a([F.V(t,E.j,C.i,E.n,0),H.bx,F.cP(C.q,K.G1(H.w2,A.l(w.c,v,1,v,v,v,D.axl,v,v),new B.b7V()),E.aq),Q.b3,A.l(w.d,v,v,v,v,v,A.E(v,v,C.h.j(0.62),v,v,v,v,v,v,v,v,13,v,v,C.av,v,v,!0,v,v,v,v,v,v,v,v),v,v),E.aX],u),E.j,C.i,E.n),v)}}
B.C5.prototype={
u(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.x(16),l=o.d,k=A.a3(D.m9,l,0.1)
k.toString
w=x.O
k=A.a([k,D.mb.j(0.96)],w)
v=F.Q(G.ac.j(0.38),1)
u=A.a([new A.W(0,C.r,l.j(0.16),E.cF,14),new A.W(0,C.r,C.l.j(0.35),H.br,8)],x.V)
t=A.x(15)
s=A.aH(n,A.ai(G.rY,C.h.j(0.035),n,n,72),n,n,n,86,-10,n)
r=A.a3(l,C.h,0.35)
r.toString
w=A.y(n,n,C.f,n,n,new A.u(n,n,n,n,n,new F.ak(C.Q,C.V,C.t,A.a([r,l],w),n,n),C.m),n,n,n,n,n,n,n,5)
l=o.c
r=l.d
r=r.length!==0?r:"TABLE"
q=x.p
r=A.a([A.l(r,n,1,C.I,n,n,A.E(n,n,D.cO.j(0.9),n,n,n,n,n,n,n,n,13,n,n,C.y,n,n,!0,n,n,n,n,n,n,n,n),n,n),H.jk,F.cP(E.W,A.l("\u20b9 "+B.bYO(l.a),n,1,n,n,n,D.awx,n,n),E.aq)],q)
p=o.e
if(!p)C.b.K(r,A.a([H.bx,A.l(""+l.b+" players",n,n,n,n,n,A.E(n,n,C.h.j(0.55),n,n,n,n,n,n,n,n,11,n,n,C.S,n,n,!0,n,n,n,n,n,n,n,n),n,n)],q))
return A.y(n,A.dy(t,new A.ay(C.C,n,C.J,C.u,A.a([s,F.V(A.a([w,H.dq,D.aHd,H.dq,F.S(new A.a4(G.h5,F.P(r,E.X,C.Z,E.n),n),1),new B.ag7(l.c,l.b,p,n),E.a2,new A.a4(G.zt,new B.agq(o.f,n),n)],q),E.j,C.i,E.n,0)],q),n),C.ai,n),C.f,n,n,new A.u(n,n,v,m,u,new F.ak(E.U,E.a0,C.t,k,n,n),C.m),n,n,n,n,n,n,n,n)}}
B.ab0.prototype={
u(d){var w=null
return A.y(C.q,D.aCY,C.f,w,w,new A.u(w,w,F.Q(D.m6,1.4),w,A.a([new A.W(0,C.r,G.ac.j(0.4),C.o,8)],x.V),D.apT,C.G),w,46,w,w,w,w,w,46)}}
B.ag7.prototype={
u(d){var w,v,u=null,t=this.c,s=t.split("/"),r=s.length===2,q=r?A.cB(C.c.S(s[0]),u):u,p=r?A.cB(C.c.S(s[1]),u):u
if(q!=null&&p!=null&&p>0&&p<=6){t=x.p
r=A.a([],t)
for(w=0;w<p;++w)r.push(new A.a4(D.a33,A.ai(H.cR,w<q?D.cO:C.h.j(0.22),u,u,15),u))
return F.P(A.a([F.V(r,E.j,C.i,E.v,0),H.bx,A.l(A.v(q)+" / "+A.v(p),u,u,u,u,u,D.Oq,u,u)],t),E.j,C.i,E.v)}r=A.ai(M.eq,D.cO.j(0.9),u,u,16)
t=A.l(t,u,u,u,u,u,G.v6,u,u)
v=this.e?"seated":""+this.d+"P"
return F.P(A.a([r,H.bx,t,A.l(v,u,u,u,u,u,A.E(u,u,C.h.j(0.5),u,u,u,u,u,u,u,u,9,u,u,C.S,u,u,!0,u,u,u,u,u,u,u,u),u,u)],x.p),E.j,C.i,E.v)}}
B.agq.prototype={
u(d){var w=null,v=A.x(12),u=A.x(12)
return A.b4(!1,C.z,!0,w,A.bc(!1,v,!0,K.eX(D.ao3,w,new A.u(w,w,F.Q(C.h.j(0.28),1),u,A.a([new A.W(0,C.r,D.dW.j(0.35),H.br,8)],x.V),D.a8J,C.m),w,w,w),w,!0,w,w,w,w,w,w,w,w,this.c,w,w,w,w,w,w,w),C.f,C.w,0,w,w,w,w,w,C.F)}}
B.amw.prototype={}
B.Y4.prototype={
a4(){this.ag()
B.vF()
$.at.ak$.push(new B.bnk(this))},
l(){B.rX()
this.a9()}}
B.a3K.prototype={
u(d){return new B.TV(this.c,null)}}
B.TV.prototype={
V(){return new B.TW()}}
B.TW.prototype={
a4(){this.auw()
$.at.aW$.push(this)},
kM(d){if(d===C.cw)if($.jM>0)A.hg()},
l(){$.at.h8(this)
this.auv()},
aBk(){var w=this.c
w.toString
P.m_(w,new B.a3E(this.a.c,this.d,null),x.X)},
u(d){var w=null
return A.cT(w,w,new A.ay(C.C,w,C.J,C.u,A.a([A.bO(0,A.eW(C.bi,G.a0p,C.O,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new B.bbn(d),w,w,w,w,w,w)),A.cI(!0,A.aE(new A.a4(D.zH,A.eW(w,A.cc(new B.bbo(this)),C.O,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new B.bbp(),w,w,w,w,w,w),w),w,w),C.N,!0)],x.p),w),w)}}
B.amx.prototype={}
B.Y5.prototype={
a4(){this.ag()
B.vF()
$.at.ak$.push(new B.bnl(this))},
l(){B.rX()
this.a9()}}
B.MK.prototype={
aM(b8,b9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=null,b4=b9.a,b5=b9.b,b6=Math.min(b4,b5),b7=b8.a
J.b2(b7.save())
b7.translate((b4-b6)/2,(b5-b6)/2)
w=b6/15
b5=b6*0.035
b4=0+b6
v=A.jn(new A.U(0,0,b4,b4),new A.b8(b5,b5))
b5=b6*0.006
u=v.dN(new A.k(b5,b6*0.014))
$.ah()
t=A.ap()
t.r=C.l.j(0.4).gq(0)
s=b6*0.022
t.z=new A.jm(C.r,s)
b8.cQ(u,t)
t=A.ap()
t.sdd(D.a8Q.d_(0,new A.U(0,0,b4,b4)))
b8.cQ(v,t)
r=new B.aBX(w)
q=new B.aC0()
p=new B.aC_()
o=new B.aC1()
n=new B.aBZ()
m=new B.aBY(q,p,o,n)
l=new B.aC3(m)
k=new B.aC2(m)
j=new B.aC4(q,p,o,n)
for(b4=-(b6*0.001),u=b6*0.0014,i=0;i<15;++i)for(h=0;h<15;++h){if(!j.$2(h,i))continue
t=r.$2(h,i)
g=t.a-b4
f=t.b-b4
e=t.c+b4
t=t.d+b4
d=new A.U(g,f,e,t)
$.ah()
a0=new A.f8(C.ba,C.aW,C.bo,C.by,C.bn)
a0.sdd(D.a8W.d_(0,d))
a1=a0.bd()
b7.drawRect(A.dw(d),a1)
a1.delete()
a2=new A.f8(C.ba,C.aW,C.bo,C.by,C.bn)
a2.r=C.h.j(0.8).gq(0)
a0=Math.max(0.7,u)
a2.c=a0
a3=new A.f8(C.ba,C.aW,C.bo,C.by,C.bn)
a3.r=C.l.j(0.1).gq(0)
a3.c=a0
a1=a2.bd()
b7.drawLine.apply(b7,[g,f,e,f,a1])
a1.delete()
a1=a2.bd()
b7.drawLine.apply(b7,[g,f,g,t,a1])
a1.delete()
a1=a3.bd()
b7.drawLine.apply(b7,[g,t,e,t,a1])
a1.delete()
a1=a3.bd()
b7.drawLine.apply(b7,[e,f,e,t,a1])
a1.delete()}b4=6*w
u=0+b4
t=b2.b
b2.Jk(b8,new A.U(0,0,u,u),D.dw,t[0],b6,w)
g=9*w
b4=g+b4
b2.Jk(b8,new A.U(g,0,b4,u),D.dW,t[3],b6,w)
b2.Jk(b8,new A.U(g,g,b4,b4),D.ei,t[1],b6,w)
b2.Jk(b8,new A.U(0,g,u,b4),D.dx,t[2],b6,w)
b2.rb(b8,w,7,1,7,5,D.dW,!0)
b2.rb(b8,w,1,7,5,7,D.dw,!1)
b2.rb(b8,w,7,9,7,13,D.dx,!0)
b2.rb(b8,w,9,7,13,7,D.ei,!1)
b2.rb(b8,w,1,6,1,6,D.dw,!1)
b2.rb(b8,w,8,1,8,1,D.dW,!0)
b2.rb(b8,w,13,8,13,8,D.ei,!1)
b2.rb(b8,w,6,13,6,13,D.dx,!0)
$.ah()
a4=A.ap()
a4.r=H.cN.j(0.5).gq(0)
a4.b=C.at
a4.c=Math.max(1,b6*0.0026)
a5=A.ap()
a5.r=C.h.j(0.3).gq(0)
a5.b=C.at
a5.c=Math.max(0.7,b6*0.0016)
for(a6=1;a6<15;++a6){a7=a6*w
for(b4=a7+0.6,u=a6-1,i=0;i<15;++i){if(l.$2(u,i))continue
t=i*w
g=(i+1)*w
a1=a5.bd()
b7.drawLine.apply(b7,[b4,t,b4,g,a1])
a1.delete()
a1=a4.bd()
b7.drawLine.apply(b7,[a7,t,a7,g,a1])
a1.delete()}}for(a8=1;a8<15;++a8){a9=a8*w
for(b4=a9+0.6,u=a8-1,h=0;h<15;++h){if(k.$2(h,u))continue
t=h*w
g=(h+1)*w
a1=a5.bd()
b7.drawLine.apply(b7,[t,b4,g,b4,a1])
a1.delete()
a1=a4.bd()
b7.drawLine.apply(b7,[t,a9,g,a9,a1])
a1.delete()}}b2.aD1(b8,w,b6)
b4=w*0.28
b2.Ji(b8,r.$2(1,6).gb6(),b4,D.dw)
b2.Jl(b8,r.$2(1,6),D.dw,0)
b2.Ji(b8,r.$2(8,1).gb6(),b4,D.dW)
b2.Jl(b8,r.$2(8,1),D.dW,1.5707963267948966)
b2.Ji(b8,r.$2(13,8).gb6(),b4,D.ei)
b2.Jl(b8,r.$2(13,8),D.ei,3.141592653589793)
b2.Ji(b8,r.$2(6,13).gb6(),b4,D.dx)
b2.Jl(b8,r.$2(6,13),D.dx,-1.5707963267948966)
b0=v.co(-s)
b1=A.bs($.ah().w)
b1.a_(new A.h6(v))
b1.a_(new A.h6(b0))
b1.sti(E.l4)
s=A.ap()
b4=v.a
u=v.b
t=v.c
g=v.d
s.sdd(D.a9s.d_(0,new A.U(b4,u,t,g)))
b8.dg(b1,s)
s=A.ap()
s.b=C.at
s.c=b6*0.005
f=x.O
s.sdd(new F.ak(E.U,E.a0,C.t,A.a([C.h.j(0.45),C.h.j(0.05),C.l.j(0.35)],f),b3,b3).d_(0,new A.U(b4,u,t,g)))
b8.cQ(v,s)
s=A.ap()
s.b=C.at
s.c=b6*0.008
s.sdd(new Ai.qq(C.q,0,6.283185307179586,C.t,A.a([D.dw.j(0.7),D.ei.j(0.7),D.dW.j(0.7),D.dx.j(0.7),D.dw.j(0.7)],f),b3,b3).d_(0,new A.U(b0.a,b0.b,b0.c,b0.d)))
s.z=new A.jm(C.r,b5)
b8.cQ(b0,s)
s=A.ap()
s.b=C.at
s.c=b6*0.0035
s.r=C.h.j(0.2).gq(0)
b8.cQ(b0,s)
b7.restore()},
Jk(a5,a6,a7,a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
if(a8)w=a7
else{v=A.a3(a7,C.HC,0.48)
v.toString
w=v}v=A.a3(w,C.h,0.3)
v.toString
u=A.a3(w,C.l,0.3)
u.toString
t=a9*0.016
s=A.jn(a6,new A.b8(t,t))
t=s.dN(new A.k(b0*0.04,b0*0.06))
r=$.ah()
q=A.ap()
q.r=C.l.j(0.18).gq(0)
q.z=new A.jm(C.r,b0*0.12)
a5.cQ(t,q)
q=A.ap()
t=x.O
q.sdd(new F.ak(E.U,E.a0,C.t,A.a([v,w,u],t),D.abz,null).d_(0,a6))
a5.cQ(s,q)
q=s.co(-(a9*0.004))
u=A.ap()
u.b=C.at
u.c=a9*0.007
u.r=C.l.j(0.2).gq(0)
a5.cQ(q,u)
u=a9*0.002
q=s.co(-u)
v=A.ap()
v.b=C.at
p=a9*0.003
v.c=p
v.r=C.h.j(0.32).gq(0)
a5.cQ(q,v)
o=a6.gb6().a
n=a6.gb6().b
m=b0*3.25/2
l=A.bs(r.w)
l.a_(new A.dO(o,n-m))
l.a_(new A.bJ(o+m,n))
l.a_(new A.bJ(o,n+m))
l.a_(new A.bJ(o-m,n))
l.a_(new A.fp())
r=A.Ev(l,new A.k(1,1.5))
v=A.ap()
v.r=C.l.j(0.12).gq(0)
a5.dg(r,v)
v=A.ap()
v.sdd(D.a8x.d_(0,A.hZ(new A.k(o,n),m)))
a5.dg(l,v)
v=A.ap()
v.b=C.at
v.c=p
v.r=C.l.j(0.22).gq(0)
a5.dg(l,v)
k=b0*0.5
j=m*0.55
for(v=o-j,r=n-j,q=o+j,p=n+j,p=[new A.k(v,r),new A.k(q,r),new A.k(v,p),new A.k(q,p)],q=k*0.08,v=k*0.3,r=a5.a,i=k*0.95,h=a9*0.0025,g=k*0.06,f=k*0.72,e=0;e<4;++e){d=p[e]
a0=d.a
a1=d.b
a2=new A.f8(C.ba,C.aW,C.bo,C.by,C.bn)
a2.r=C.l.j(0.2).gq(0)
a2.z=new A.jm(C.r,v)
a3=a2.bd()
r.drawCircle(a0,a1+q,k,a3)
a3.delete()
a2=new A.f8(C.ba,C.aW,C.bo,C.by,C.bn)
a4=A.a3(w,D.a_q,0.72)
a4.toString
a2.sdd(new K.d5(D.Py,0.5,C.t,null,0,A.a([I.xW,a4,A.a3(w,C.l,0.2).j(0.4)],t),Ah.kM,null).d_(0,A.hZ(d,k)))
a3=a2.bd()
r.drawCircle(a0,a1,i,a3)
a3.delete()
a2=new A.f8(C.ba,C.aW,C.bo,C.by,C.bn)
a2.b=C.at
a2.c=Math.max(1,h)
a2.r=C.l.j(0.3).gq(0)
a3=a2.bd()
r.drawCircle(a0,a1,i,a3)
a3.delete()
a1=A.hZ(new A.k(a0,a1-g),f)
a0=new A.f8(C.ba,C.aW,C.bo,C.by,C.bn)
a0.b=C.at
a0.c=Math.max(1,u)
a0.r=C.h.j(0.55).gq(0)
a3=a0.bd()
r.drawArc.apply(r,[A.dw(a1),206.99999999999997,135,!1,a3])
a3.delete()}},
rb(a2,a3,a4,a5,a6,a7,a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=A.a3(a8,C.h,0.28)
a1.toString
w=A.a3(a8,C.l,0.22)
w.toString
for(v=a2.a,u=x.O,t=-(a3*0.03),s=a3*0.08,r=a4;r<=a6;++r)for(q=r*a3,p=q+a3,o=q-t,n=p+t,m=n+-1,l=a5;l<=a7;++l){k=l*a3
j=k+a3
i=k-t
h=j+t
g=A.jn(new A.U(o,i,n,h),new A.b8(s,s))
$.ah()
f=new A.f8(C.ba,C.aW,C.bo,C.by,C.bn)
e=a9?C.Q:E.W
d=a9?C.V:C.a_
f.sdd(new F.ak(e,d,C.t,A.a([a1,a8,w],u),null,null).d_(0,new A.U(q,k,p,j)))
a0=f.bd()
v.drawRRect(A.mK(g),a0)
a0.delete()
g=o+1;++i
k=a9?new A.k(m,i):new A.k(g,h+-1)
j=new A.f8(C.ba,C.aW,C.bo,C.by,C.bn)
j.r=C.h.j(0.4).gq(0)
j.c=1.1
a0=j.bd()
v.drawLine.apply(v,[g,i,k.a,k.b,a0])
a0.delete()}},
aD1(d,e,f){var w,v,u,t,s=7.5*e,r=3*e,q=A.j_(new A.k(s,s),r,r),p=e*0.1
p=A.jn(q,new A.b8(p,p))
$.ah()
w=A.ap()
w.r=C.l.j(0.14).gq(0)
w.z=new A.jm(C.r,e*0.12)
d.cQ(p,w)
v=r*0.48
u=v*0.88
w=new B.aBS(d,f)
w.$3(new B.aBW(s,s,v,u).$0(),D.dW,C.Q)
w.$3(new B.aBV(s,v,s,u).$0(),D.ei,C.a_)
w.$3(new B.aBT(s,s,v,u).$0(),D.dx,C.V)
w.$3(new B.aBU(s,v,s,u).$0(),D.dw,E.W)
w=e*0.18
t=A.jn(q.co(-(r*0.2)),new A.b8(w,w))
w=t.dN(D.anF)
p=A.ap()
p.r=C.l.j(0.22).gq(0)
d.cQ(w,p)
p=A.ap()
p.sdd(D.a9w.d_(0,new A.U(t.a,t.b,t.c,t.d)))
d.cQ(t,p)
p=A.ap()
p.b=C.at
p.c=f*0.0035
p.r=C.l.j(0.28).gq(0)
d.cQ(t,p)},
Jl(d,e,f,g){var w,v,u,t,s,r,q=e.gb6(),p=e.gdO()*0.4,o=d.a
J.b2(o.save())
o.translate(q.a,q.b)
d.a0A(0,g)
w=A.bs($.ah().w)
v=-p
u=v*0.35
w.a_(new A.dO(u,v*0.45))
w.a_(new A.bJ(p*0.55,0))
w.a_(new A.bJ(u,p*0.45))
w.a_(new A.fp())
u=A.ap()
t=A.a3(f,C.h,0.4)
t.toString
s=A.a3(f,C.l,0.2)
s.toString
r=v+p*2
u.sdd(new F.ak(C.Q,C.V,C.t,A.a([t,f,s],x.O),null,null).d_(0,new A.U(v,v,r,r)))
d.dg(w,u)
u=A.ap()
u.b=C.at
u.c=Math.max(1,p*0.08)
u.r=C.l.j(0.4).gq(0)
d.dg(w,u)
o.restore()},
Ji(d,e,f,g){var w,v,u
$.ah()
w=A.ap()
v=A.a3(g,C.h,0.45)
v.toString
u=A.a3(g,C.l,0.25)
u.toString
w.sdd(new K.d5(Z.vQ,0.5,C.t,null,0,A.a([v,g,u],x.O),null,null).d_(0,A.hZ(e,f)))
this.a6y(d,e,f,w)
w=A.ap()
w.b=C.at
w.c=f*0.12
w.r=C.l.j(0.4).gq(0)
this.a6y(d,e,f,w)},
a6y(d,e,f,g){var w,v,u,t,s,r,q,p=A.bs($.ah().w)
for(w=p.e,v=e.a,u=e.b,t=0;t<5;++t){s=t*4*3.141592653589793/5-1.5707963267948966
r=v+f*Math.cos(s)
q=u+f*Math.sin(s)
if(t===0){r=new A.dO(r,q)
w.push(r)
q=p.d
if(q!=null)r.cP(q)}else{r=new A.bJ(r,q)
w.push(r)
q=p.d
if(q!=null)r.cP(q)}}p.a_(new A.fp())
d.dg(p,g)},
cB(d){return!A.dY(d.b,this.b)}}
B.f3.prototype={
n(d,e){if(e==null)return!1
return e instanceof B.f3&&e.a===this.a&&e.b===this.b},
gH(d){return A.ar(this.a,this.b,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)}}
B.aC9.prototype={}
B.jl.prototype={}
B.jL.prototype={
MN(d,e){var w,v
if(e.c||e.b>=56)return D.Hf
if(e.a)return null
w=e.b
if(w<=50)return this.a.a[C.k.aj(D.Bx[d]+w,52)]
if(w<56){v=D.adE[d]
return v[w-51]}return D.Hf},
oZ(d,e){if(e.a||e.c||e.b>50)return null
return C.k.aj(D.Bx[d]+e.b,52)},
XD(d,e){if(d<1||d>6)return!1
if(e.c)return!1
if(e.a)return d===6
if(e.b+d>56)return!1
return!0},
agl(d,e,f,g){var w,v,u=J.B(d[e],g)
if(!this.XD(f,u))return null
if(u.a){J.eh(d[e],g,D.Hi)
return null}w=u.b+f
if(w>=56)J.eh(d[e],g,D.tD)
else{v=d[e]
J.eh(v,g,new B.jl(!1,w,u.c))}return this.Yw(d,e)},
Yw(d,e){var w,v,u,t,s,r,q
if(e<0||e>=d.length)return null
for(w=x.t,v=null,u=0;u<J.ax(d[e]);++u){t=this.oZ(e,J.B(d[e],u))
if(t==null||D.o8.t(0,t))continue
for(s=0;s<d.length;++s){if(s===e)continue
for(r=0;r<J.ax(d[s]);++r){q=J.B(d[s],r)
if(q.a||q.c)continue
if(this.oZ(s,q)!==t)continue
J.eh(d[s],r,D.fx)
if(v==null)v=A.a([s,r],w)}}}return v},
ale(d,e,f){var w,v
if(D.o8.t(0,f))return!1
for(w=0;w<d.length;++w){if(w===e)continue
for(v=0;v<J.ax(d[w]);++v)if(this.oZ(w,J.B(d[w],v))===f)return!0}return!1},
a_C(d,e,f){var w,v=A.a([],x.t)
for(w=0;w<4;++w)if(this.XD(f,J.B(d[e],w)))v.push(w)
return v},
b9i(d){return C.b.f4(d,new B.aC6())},
a_D(d,e,f,g){var w,v,u,t,s,r,q,p=A.a([],x.e)
if(f.a){p.push(new B.vB(B.bRg(d,g),B.bRh(d,g)))
w=this.MN(d,D.Hi)
if(w!=null)p.push(new B.vB(w.a+0.5,w.b+0.5))
return p}v=this.MN(d,f)
if(v!=null)p.push(new B.vB(v.a+0.5,v.b+0.5))
for(u=f.b,t=1;t<=e;++t){s=u+t
if(s>56)break
r=s>=56
q=this.MN(d,r?D.tD:new B.jl(!1,s,!1))
if(q==null)continue
p.push(new B.vB(q.a+0.5,q.b+0.5))
if(r)break}return p}}
B.vB.prototype={}
B.a3N.prototype={}
B.a3C.prototype={
u(a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=d.c/15,a2=a1*0.78,a3=a1*0.96,a4=A.a([],x._)
for(w=d.f,v=d.e,u=d.Q,t=u!=null,s=d.d,r=0;r<4;++r){if(!s[r])continue
for(q=100+r,p=200+r*4,o=0;o<4;++o){if(t&&u.a===r&&u.b===o)continue
n=J.B(v[r],o)
if(n.a&&!n.c){m=B.aC5(r)
l=o!==0
k=!l||o===2?-0.9212500000000001:0.9212500000000001
j=B.aC5(r)
i=!l||o===1?-0.9212500000000001:0.9212500000000001
a4.push(new B.xe(r,o,new B.f3(p+o,0),m.a+k,j.b+i,!1))}else{m=w.MN(r,n)
if(m==null)continue
l=n.c
a4.push(new B.xe(r,o,l?new B.f3(q,100):m,a0,a0,l))}}}h=A.F(x.T,x.g)
for(w=a4.length,g=0;g<a4.length;a4.length===w||(0,A.a0)(a4),++g){f=a4[g]
J.dZ(h.c6(0,f.c,new B.aC8()),f)}w=A.a([],x.p)
for(v=a4.length,g=0;g<a4.length;a4.length===v||(0,A.a0)(a4),++g){e=a4[g]
s=e.c
q=h.h(0,s)
q.toString
q=J.brA(q,e)
s=h.h(0,s)
s.toString
w.push(d.aVW(a1,e,q,J.ax(s),a3,a2))}if(t&&u.c.length!==0){v=u.a
t=u.b
w.push(new B.Tq(a1,a2,a3,u.c,d.r[v],110,new A.d6("hop-"+v+"-"+t,x.i)))}return new A.ay(C.C,a0,C.as,C.u,w,a0)},
aVW(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o=this,n=null,m=g>1,l=m?Math.cos(f*2*3.141592653589793/g)*d*0.18:0,k=m?Math.sin(f*2*3.141592653589793/g)*d*0.18:0
m=e.f
w=0
v=0
if(m)switch(e.a){case 0:w=-d*0.28
break
case 1:w=d*0.28
break
case 2:v=d*0.28
break
case 3:v=-d*0.28
break
default:break}u=e.d
t=u==null
if(t)u=m?7.5:e.c.a+0.5
s=e.e
if(s==null)s=m?7.5:e.c.b+0.5
r=B.bHj(d*15,d,u,s,l+w,k+v,h,i)
q=o.y&&e.a===o.w&&C.b.t(o.x,e.b)
p=!t&&q
m=q?new B.aC7(o,e):n
return A.aH(n,A.eW(n,B.bBf(o.r[e.a],h,!1,q,i,p),C.O,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,m,n,n,n,n,n,n),n,n,r.a,n,r.b,n)}}
B.Tq.prototype={
V(){return new B.aeg(null,null)}}
B.aeg.prototype={
a4(){var w,v=this
v.ag()
w=v.a
w=A.bb(null,A.c8(0,Math.max(1,w.f.length-1)*w.w,0),0,null,1,null,v)
w.bC(0)
v.d!==$&&A.b1()
v.d=w},
l(){var w=this.d
w===$&&A.b()
w.l()
this.au8()},
aQ7(d){var w,v,u,t,s,r,q,p=this.a.f
if(p.length<=1)return C.b.gW(p)
w=C.d.R(d,0,1)*(p.length-1)
v=C.k.R(C.d.f6(w),0,p.length-2)
u=C.bv.a1(0,w-v)
t=p[v]
s=p[v+1]
r=t.a
q=t.b
return new B.vB(r+(s.a-r)*u,q+(s.b-q)*u)},
u(d){var w,v,u,t=this.d
t===$&&A.b()
w=this.a
v=w.d
u=w.e
return A.cn(t,new B.b6r(this),B.bBf(w.r,u,!0,!1,v,!1))}}
B.a3F.prototype={
u(d){var w,v,u,t=this,s=null,r=t.c,q=t.d,p=A.a([],x.V),o=t.f
if(o){w=t.e.j(0.55)
v=t.r
u=v?14:9
p.push(new A.W(v?1.5:0.5,C.r,w,C.o,u))}if(t.r)p.push(new A.W(0,C.r,C.h.j(0.55),C.o,10))
return K.ja(s,A.dE(s,s,s,new B.a3G(t.e,o,t.w,s),new A.a_(r,q)),s,C.a9,new A.u(s,s,s,s,p,s,C.m),C.z,s,q,s,s,r)}}
B.a3G.prototype={
aM(b3,b4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=null,a7=b4.a,a8=b4.b,a9=a7/2,b0=this.b,b1=this.d,b2=A.a3(b0,C.h,b1?0.45:0.32)
b2.toString
w=A.a3(b0,C.l,0.38)
w.toString
v=A.a3(b0,C.l,0.55)
v.toString
u=$.ah()
t=A.ap()
t.r=C.l.j(b1?0.22:0.38).gq(0)
t.z=new A.jm(C.r,b1?2.5:3.5)
s=a7*0.04
r=b1?0.62:0.78
q=b1?0.08:0.12
b3.mj(A.j_(new A.k(a9+s,a8*0.92),a8*q,a7*r),t)
p=a8*0.62
o=a8*0.9
n=(p+o)/2
m=a7*0.42
r=o-p
l=r/2
u=u.w
k=A.bs(u)
k.a_(new A.iQ(A.j_(new A.k(a9,n),l*2,m*2)))
j=A.ap()
q=x.O
j.sdd(new F.ak(E.U,E.a0,C.t,A.a([b2,b0,w],q),I.np,a6).d_(0,new A.U(0,p,0+a7,p+r)))
b3.dg(k,j)
i=A.ap()
i.b=C.at
r=i.c=Math.max(1,s)
i.r=C.h.j(0.35).gq(0)
h=l*0.15
b3.Fx(A.j_(new A.k(a9,n-h),l*1.1,m*1.7),3.6128315516282616,2.199114857512855,!1,i)
h=A.j_(new A.k(a9,n+h),l*1.2,m*1.85)
g=A.ap()
g.b=C.at
g.c=Math.max(1.2,a7*0.05)
g.r=v.j(0.55).gq(0)
b3.Fx(h,0.15,2.199114857512855,!1,g)
f=a8*0.34
e=a8*0.52
d=A.bs(u)
g=a7*0.16
d.a_(new A.dO(a9-g,f))
h=a7*0.2
v=a7*0.28
a0=a8*0.02
a1=p+a0
d.a_(new A.vX(a9-h,e,a9-v,a1))
a2=a8*0.06
d.a_(new A.vX(a9,p+a2,a9+v,a1))
d.a_(new A.vX(a9+h,e,a9+g,f))
d.a_(new A.fp())
a3=A.ap()
g=a7*0.3
h=a9-g
a3.sdd(new F.ak(D.Pv,D.PG,C.t,A.a([b2,b0,w],q),D.aco,a6).d_(0,new A.U(h,f,h+a7*0.6,f+(p-f))))
b3.dg(d,a3)
u=A.bs(u)
u.a_(new A.dO(a9-a7*0.1,f+a0))
u.a_(new A.vX(a9-a7*0.14,e,a9-a7*0.18,p))
u.a_(new A.vX(a9-a7*0.08,e,a9-s,f+a8*0.04))
u.a_(new A.fp())
s=A.ap()
s.r=C.h.j(0.22).gq(0)
b3.dg(u,s)
s=a8*0.28
a4=new A.k(a9,s)
a5=A.ap()
v=A.a3(b0,C.h,b1?0.62:0.5)
v.toString
a5.sdd(new K.d5(D.PK,0.95,C.t,a6,0,A.a([v,b2,b0,w],q),D.ae5,a6).d_(0,A.hZ(a4,g)))
b3.cM(a4,g,a5)
b0=A.ap()
b0.b=C.at
v=this.c
b0.c=v?Math.max(1.6,a7*0.06):r
b0.r=(v?C.h.j(0.95):C.l.j(0.28)).gq(0)
b3.cM(a4,g,b0)
b0=g*0.38
b0=A.j_(new A.k(a9-g*0.32,s-b0),b0,g*0.55)
u=A.ap()
u.r=C.h.j(b1?0.85:0.72).gq(0)
b3.mj(b0,u)
b0=A.ap()
b0.r=C.h.j(0.35).gq(0)
b3.cM(new A.k(a9+g*0.18,s-g*0.15),g*0.08,b0)
b0=a7*0.38
g=A.j_(new A.k(a9,f+a8*0.01),a2,b0)
s=A.ap()
v=a9-a7*0.19
s.sdd(new F.ak(E.W,C.a_,C.t,A.a([b2,w],q),a6,a6).d_(0,new A.U(v,f,v+b0,f+a2)))
b3.mj(g,s)},
cB(d){return!d.b.n(0,this.b)||d.c!==this.c||d.d!==this.d}}
B.xe.prototype={}
B.XP.prototype={
l(){var w=this,v=w.an$
if(v!=null)v.N(0,w.gce())
w.an$=null
w.a9()},
b1(){this.ba()
this.b9()
this.cf()}}
B.ME.prototype={}
B.lv.prototype={
p(d){return this.a},
$ibS:1}
B.rY.prototype={}
B.vC.prototype={
aM(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=this.b
if(k<=0)return
w=e.gdO()*0.11
$.ah()
v=A.ap()
v.r=G.px.gq(0)
u=e.a
t=u/2
s=e.b
r=s/2
q=u*0.22
p=s*0.22
u-=q
s-=p
o=[new A.k(q,p),new A.k(t,p),new A.k(u,p),new A.k(q,r),new A.k(t,r),new A.k(u,r),new A.k(q,s),new A.k(t,s),new A.k(u,s)]
for(k=D.am3.h(0,C.k.R(k,1,6)),u=k.length,s=d.a,n=0;n<u;++n){m=o[k[n]]
l=v.bd()
s.drawCircle(m.a,m.b,w,l)
l.delete()}},
cB(d){return d.b!==this.b}}
B.MF.prototype={
V(){return new B.afh(C.bM)}}
B.afh.prototype={
a4(){var w,v=this
v.ag()
w=v.a.d
v.e=w>0?C.k.R(w,1,6):1
if(v.a.e)v.adH()},
aR(d){var w,v,u,t=this
t.b3(d)
w=t.a
v=w.e
if(v&&!d.e)t.adH()
else{v=!v
if(v&&d.e)t.aUS(w.d)
else{if(v){u=w.d
u=u!==d.d&&u>0}else u=!1
if(u)t.e=C.k.R(w.d,1,6)
else if(t.f&&v&&w.d>0)t.e=C.k.R(w.d,1,6)}}},
adH(){var w=this,v=w.d
if(v!=null)v.U(0)
w.f=!1
v=Date.now()
w.a.f.i1(0,!0)
w.d=A.fu(E.km,new B.b8K(w,new A.c3(v,0,!1)))},
aEL(){var w,v=this,u=v.d
if(u!=null)u.U(0)
v.d=null
v.f=!0
u=v.a.f
w=u.r
if(w!=null&&w.a!=null){u.bA(0)
v.a.f.sq(0,0)}if(v.c==null)return
v.E(new B.b8I())},
aUS(d){var w,v,u=this,t=u.d
if(t!=null)t.U(0)
u.d=null
t=u.f=!1
w=u.a.f
v=w.r
if(v!=null?v.a!=null:t){w.bA(0)
u.a.f.sq(0,0)}if(u.c==null)return
u.E(new B.b8L(u,d))},
l(){var w=this.d
if(w!=null)w.U(0)
this.a9()},
u(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.a.d,i=j>0?C.k.R(j,1,6):0
if(l.a.e&&!l.f)w=C.k.R(l.e,1,6)
else w=i>0?i:C.k.R(l.e,1,6)
j=l.a
v=j.f
u=j.r
t=u&&!j.e?j.w:k
s=!u
r=!s||j.e||j.d>0?1:0.35
q=j.x
p=j.e
o=p?C.h:C.jN
n=A.x(10)
if(p)m=j.c
else m=!s||j.d>0?j.c:H.c2
if(p)s=3
else s=!s||j.d>0?2.5:1.5
s=F.Q(m,s)
if(p)j=j.c.j(0.45)
else j=u?j.c.j(0.35):C.l.j(0.25)
u=l.a
p=u.e
if(p)u=12
else u=u.r?8:4
p=p?1:0
u=A.a([new A.W(p,C.r,j,C.o,u),new A.W(0,C.r,C.l.j(0.22),E.aH,4)],x.V)
j=l.a
p=j.x
m=p*0.14
if(w>0){j=p*0.58
j=F.r8(A.dE(k,k,new A.d6(w,x.k),new B.vC(w,k),new A.a_(j,j)),E.km,F.qT(),C.bN,C.cQ,new B.b8M())}else{j=j.r||j.e?G.px:C.b8
p=A.aE(A.l("?",k,k,k,k,k,A.E(k,k,j,k,k,k,k,k,k,k,k,p*0.38,k,k,C.E,k,1,!0,k,k,k,k,k,k,k,k),k,k),k,k)
j=p}return A.cn(v,new B.b8N(l),A.eW(k,A.dB(K.ja(k,j,k,C.a9,new A.u(o,k,s,n,u,k,C.m),C.bO,k,q,k,new A.A(m,m,m,m),q),r),C.O,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,t,k,k,k,k,k,k))}}
B.a3H.prototype={
u(d){var w,v,u,t,s=this,r=null,q=x.p,p=A.a([new B.zy(H.bQ,s.c,36,r),H.b9,new B.zy(G.cb,new B.aCA(d),36,r)],q),o=s.d
if(o!=null)C.b.K(p,A.a([H.b9,new B.zy(A7.ne,o,36,r)],q))
p=F.V(p,E.j,C.i,E.v,0)
o=D.m9.j(0.9)
w=A.x(20)
v=F.Q(G.ac.j(0.35),1)
w=F.S(F.P(A.a([D.a4b,Q.b3,F.cP(C.q,A.y(r,A.l(s.e,r,1,r,r,!1,A.E(r,r,C.h.j(0.85),r,r,r,r,r,r,r,r,11,r,r,C.S,r,r,!0,r,0.3,r,r,r,r,r,r),r,r),C.f,r,r,new A.u(o,r,v,w,r,r,C.m),r,r,r,r,H.it,r,r,r),E.aq)],q),E.j,C.i,E.n),1)
v=A.a([],q)
o=D.m9.j(0.92)
u=A.x(20)
t=F.Q(G.ac.j(0.4),1)
v.push(A.y(r,F.V(A.a([A.ai(M.eq,D.cO.j(0.95),r,r,16),G.aM,A.l(""+s.f+" Players",r,r,r,r,r,D.Oq,r,r)],q),E.j,C.i,E.v,0),C.f,r,r,new A.u(o,r,t,u,r,r,C.m),r,r,r,r,G.iu,r,r,r))
return new A.a4(D.a2C,F.P(A.a([F.V(A.a([p,w,F.V(v,E.j,C.i,E.v,0)],q),E.j,C.i,E.n,0),E.aN,A.y(r,r,C.f,r,r,new A.u(r,r,r,r,r,new F.ak(E.W,C.a_,C.t,A.a([C.w,G.ac.j(0.45),C.w],x.O),r,r),C.m),r,1,r,E.ca,r,r,r,r)],q),E.j,C.i,E.n),r)}}
B.afm.prototype={
u(d){var w,v=null,u=x.x,t=A.ai(Y.AP,D.cO,v,A.a([new A.cl(G.ac.j(0.55),C.o,6)],u),15)
$.ah()
w=A.ap()
w.sdd(D.a8P.d_(0,D.arH))
return F.V(A.a([D.aI4,D.auX,t,H.d7,A.l("LUDO",v,v,v,v,v,A.E(v,v,v,v,v,v,v,v,v,v,v,22,v,v,C.E,w,1,!0,v,4.2,v,v,v,A.a([new A.cl(G.ac.j(0.45),C.o,8),Aa.MV],u),v,v),v,v),H.d7,D.aI5],x.p),E.j,C.Z,E.v,0)}}
B.U4.prototype={
u(d){var w,v,u=null,t=A.x(5),s=this.c,r=A.a3(s,C.h,0.35)
r.toString
w=A.a3(s,C.l,0.25)
w.toString
w=A.a([r,s,w],x.O)
r=A.a([new A.W(0,C.r,s.j(0.45),E.aH,6)],x.V)
v=F.Q(C.h.j(0.35),1)
return A.y(u,A.dE(u,u,u,new B.vC(s.n(0,D.dx)?5:3,u),C.a8),C.f,u,u,new A.u(u,u,v,t,r,new F.ak(E.U,E.a0,C.t,w,u,u),C.m),u,16,u,u,u,u,u,16)}}
B.zy.prototype={
u(d){var w=null,v=this.e,u=F.Q(G.ac,1.6),t=A.a([new A.W(0,C.r,G.ac.j(0.22),C.o,8)],x.V)
return A.b4(!1,C.z,!0,w,A.bc(!1,w,!0,K.eX(A.ai(this.c,D.cO,w,w,v*0.42),w,new A.u(w,w,u,w,t,D.a8t,C.G),v,w,v),C.bd,!0,w,w,w,w,w,w,w,w,this.d,w,w,w,w,w,w,w),C.f,C.w,0,w,w,w,w,w,C.F)}}
B.a3M.prototype={
u(d){var w,v,u,t,s,r,q,p,o=null,n=this.c
if(n<=0)return C.ao
w=C.c.hF(C.k.p(C.k.bk(n,60)),2,"0")
v=C.c.hF(C.k.p(C.k.aj(n,60)),2,"0")
u=n<=3
t=C.d.R(n/Math.max(1,this.d),0,1)
s=u?C.dh:D.cO
n=x.p
r=F.V(A.a([A.ai(D.a5x,s,o,o,14),H.b9,A.l("Time left",o,o,o,o,o,A.E(o,o,C.h.j(0.72),o,o,o,o,o,o,o,o,11,o,o,C.S,o,o,!0,o,0.3,o,o,o,o,o,o),o,o),H.bY,A.l(w+":"+v,o,o,o,o,o,A.E(o,o,s,o,o,o,o,o,o,o,D.ada,13,o,o,C.y,o,o,!0,o,0.6,o,o,o,o,o,o),o,o)],n),E.j,C.i,E.n,0)
q=A.x(99)
p=C.h.j(0.08)
return new A.a4(D.a2Y,F.P(A.a([r,H.aB,A.dy(q,new A.G(o,4,new A.ay(C.C,o,C.as,C.u,A.a([new A.dh(p,o,o),Ak.ax5(E.W,A.bF(o,new A.u(o,o,o,o,o,new F.ak(E.W,C.a_,C.t,u?D.aeu:D.aaK,o,o),C.m),C.Y),o,t)],n),o),o),C.ai,o)],n),E.j,C.i,E.n),o)}}
B.a3I.prototype={
u(d){var w=this.r?this.y:D.PP
return A.cn(w,new B.aCB(this,32,34),null)},
gaH(d){return this.d}}
B.MN.prototype={
u(d){var w,v=x.p,u=A.a([],v),t=this.c,s=t[0]
if(s!=null)u.push(s)
s=t[3]
if(s!=null)u.push(s)
s=A.a([],v)
w=t[2]
if(w!=null)s.push(w)
t=t[1]
if(t!=null)s.push(t)
v=A.a([],v)
if(u.length!==0)v.push(new B.VU(u,null))
v.push(F.S(new A.a4(D.a3I,A.cc(new B.aCz(this)),null),1))
if(s.length!==0)v.push(new B.VU(s,null))
return F.P(v,E.j,C.i,E.n)}}
B.VU.prototype={
u(d){var w,v,u,t=x.p,s=A.a([],t)
for(w=this.c,v=0;v<w.length;++v){u=A.a([],t)
if(v>0)u.push(E.a2)
u.push(new F.en(1,E.cD,w[v],null))
C.b.K(s,u)}return new A.a4(E.fp,F.V(s,E.j,C.i,E.n,0),null)}}
B.zA.prototype={
u(d){var w=null,v=this.c,u=v+10,t=A.x(16),s=A.a([new A.W(0,C.r,this.e.j(0.16),C.o,18),new A.W(0,C.r,C.l.j(0.45),E.f0,16)],x.V),r=F.Q(C.h.j(0.14),1)
return A.y(w,A.dy(A.x(13),new A.G(v,v,this.d,w),C.ai,w),C.f,w,w,new A.u(w,w,r,t,s,D.a8w,C.m),w,u,w,w,D.a3V,w,w,u)}}
B.MP.prototype={
u(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.c,k=l||n.e,j=k?1:0.45
l=l&&!n.e?n.d:m
w=A.x(16)
v=A.x(16)
u=k?D.aed:D.aeo
t=F.Q(k?G.ac.j(0.9):C.h.j(0.14),1.4)
s=x.V
r=A.a([],s)
if(k)r.push(new A.W(0,C.r,D.q5.j(0.35),E.cF,14))
q=A.x(8)
s=A.a([new A.W(0,C.r,C.l.j(0.25),E.aH,4)],s)
p=n.e
s=A.y(m,A.dE(m,m,m,new B.vC(p?6:5,m),C.a8),C.f,m,m,new A.u(C.h,m,m,q,s,m,C.m),m,36,m,m,An.r6,m,m,36)
q=p?"Rolling\u2026":n.r
q=A.l(q,m,m,m,m,m,A.E(m,m,D.cO.j(0.9),m,m,m,m,m,m,m,m,11,m,m,C.S,m,1.1,!0,m,m,m,m,m,m,m,m),m,m)
o=x.p
return A.dB(A.b4(!1,C.z,!0,m,A.bc(!1,w,!0,K.eX(F.V(A.a([s,H.dq,F.P(A.a([q,A.l(p?"Wait":n.f,m,m,m,m,m,D.axW,m,m)],o),E.X,C.i,E.v)],o),E.j,C.Z,E.n,0),m,new A.u(m,m,t,v,r,new F.ak(C.Q,C.V,C.t,u,m,m),C.m),m,D.a30,1/0),m,!0,m,m,m,m,m,m,m,m,l,m,m,m,m,m,m,m),C.f,C.w,0,m,m,m,m,m,C.F),j)}}
B.zB.prototype={
u(d){var w=null,v=K.kb(d)===C.cm,u=v?Am.brS(d,D.BH):D.BH,t=K.bt("assets/games_assets/common/home_bg2.jpg",C.q,w,w,w,w,w,w,new B.aCE(d),!1,C.T,E.aD,w,!1,w,!1,w,!1,w,w,H.P,w,w,w)
t=A.a([t,A.bF(w,new A.u(w,w,w,w,w,new F.ak(C.Q,C.V,C.t,v?A.a([u[0].j(0.9),u[1].j(0.94),u[2].j(0.95)],x.O):u,w,w),C.m),C.Y),D.a1_],x.p)
C.b.K(t,this.aBv())
t.push(this.c)
return new A.ay(C.C,w,C.as,C.u,t,w)},
aBv(){var w,v,u=null,t=A.a([],x.p)
for(w=x.O,v=0;v<4;++v)t.push(new A.bM(D.ajo[v],u,u,A.y(u,u,C.f,u,u,new A.u(u,u,u,u,u,new K.d5(C.q,0.5,C.t,u,0,A.a([D.e3[D.By[v]].j(0.08),D.e3[D.By[v]].j(0)],w),u,u),C.G),u,160,u,u,u,u,u,160),u))
return t}}
B.afj.prototype={
aM(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=new A.x5()
k.xY(7)
$.ah()
w=A.ap()
w.r=C.h.j(0.028).gq(0)
v=A.ap()
v.r=C.h.j(0.04).gq(0)
v.b=C.at
v.c=1
for(u=e.a,t=e.b,s=d.a,r=0;r<18;++r){q=k.b8()*u
p=k.b8()*t
o=10+k.b8()*18
n=o*0.18
m=A.jn(A.j_(new A.k(q,p),o,o),new A.b8(n,n))
J.b2(s.save())
s.translate(q,p)
s.rotate(k.b8()*3.141592653589793*180/3.141592653589793,0,0)
s.translate(-q,-p)
l=w.bd()
s.drawRRect(A.mK(m),l)
l.delete()
l=v.bd()
s.drawRRect(A.mK(m),l)
l.delete()
s.restore()}},
cB(d){return!1}}
var z=a.updateTypes(["am<~>()","~()","~(@)","C5(t,r)","K(jl)","am<R<hc>>(r)","R<hc>(R<hc>)","r(t_,t_)","vG(t,ab<i,@>)","~(r,r)","c(J)","i9(t)","us(t)","tx(t)","iS<r>(r)","~(R<R<jl>>)","zA(J)","zz(t)","ki(t,q1)","D7(t,ad)","en(r)","R<xe>()"])
B.aBI.prototype={
$1(d){return d.b===this.a},
$S:232}
B.aBJ.prototype={
$1(d){return d.b===this.a},
$S:232}
B.aBH.prototype={
$1(d){return J.L(d)},
$S:33}
B.aBK.prototype={
$1(d){return d},
$S:122}
B.aCv.prototype={
$1(d){return O.yS(this.a.as.c,50,d,this.b)},
$S:z+5}
B.aCw.prototype={
$1(d){return d},
$S:z+6}
B.aCx.prototype={
$2(d,e){var w=C.k.bm(d.a,e.a)
if(w!==0)return w
return C.k.bm(d.b,e.b)},
$S:z+7}
B.bq_.prototype={
$2(d,e){var w=A.aR(J.B(e,"mode"))
if(w==null)w="online"
if(w==="online")return D.alE
return new B.vG(new B.a3K(B.bRl(w),null),null)},
$S:z+8}
B.b9i.prototype={
$0(){if($.jM>0)A.hg()},
$S:0}
B.b9g.prototype={
$1(d){if(this.a.c!=null)this.b.$0()},
$S:2}
B.b9h.prototype={
$1(d){return this.a.vc()},
$S:2}
B.b9f.prototype={
$1(d){var w=this.a
if(w.c!=null)w.vc()},
$S:2}
B.b92.prototype={
$0(){var w=this.a
w.as=!1
w.at=A.a([],x.t)},
$S:0}
B.b93.prototype={
$1(d){this.a.vc()},
$S:2}
B.b8Y.prototype={
$0(){return this.a.Q=!0},
$S:0}
B.b8Z.prototype={
$0(){return this.a.x=this.b.cX(6)+1},
$S:0}
B.b9_.prototype={
$0(){return this.a.Q=!1},
$S:0}
B.b90.prototype={
$0(){this.a.RM()},
$S:0}
B.b91.prototype={
$0(){var w,v=this.a
v.as=!0
w=v.f
w===$&&A.b()
v.at=v.r.a_C(w,this.b,this.c)},
$S:0}
B.b8P.prototype={
$1(d){this.a.vc()},
$S:2}
B.b8Q.prototype={
$0(){var w=this,v=w.a
v.as=!1
v.at=A.a([],x.t)
v.ch=new B.a3N(w.b,w.c,w.d)},
$S:0}
B.b8R.prototype={
$0(){return this.a.ch=null},
$S:0}
B.b8S.prototype={
$0(){var w=this.a
w.as=!1
w.at=A.a([],x.t)},
$S:0}
B.b8T.prototype={
$0(){var w=this.a
w.as=!1
w.at=A.a([],x.t)},
$S:0}
B.b8U.prototype={
$0(){var w=this.a
w.as=!1
w.at=A.a([],x.t)
w.RM()},
$S:0}
B.b96.prototype={
$0(){},
$S:0}
B.b97.prototype={
$1(d){var w=null,v=A.x(20),u=A.l(this.b,w,w,w,w,w,A.E(w,w,D.e3[this.c],w,w,w,w,w,w,w,w,w,w,w,C.B,w,w,!0,w,w,w,w,w,w,w,w),w,w)
return K.mN(A.a([K.mb(D.aDk,new B.b95(this.a,d),w)],x.p),D.mb,D.aDc,w,new A.cH(v,C.x),u)},
$S:z+11}
B.b95.prototype={
$0(){A.aZ(this.b,!1).fa(0,null)
var w=this.a.c
w.toString
A.aZ(w,!1).fa(0,null)},
$S:0}
B.b98.prototype={
$0(){return this.a.a.$0()},
$S:0}
B.b99.prototype={
$1(d){var w=this.b.c
if(w==null)return
this.a.a=N.buP(w)},
$S:2}
B.b8X.prototype={
$1(d){var w,v,u=null,t=x.O,s=A.a([M.yJ,D.mb,M.yd],t),r=A.x(22),q=F.Q(G.ac.j(0.65),1.5),p=x.V,o=A.a([new A.W(1,C.r,G.ac.j(0.18),C.o,26),new A.W(0,C.r,C.l.j(0.55),H.eZ,20)],p)
t=A.a([C.bC.j(0.5),C.dY.j(0.28)],t)
t=A.y(u,M.AX,C.f,u,u,new A.u(u,u,F.Q(H.i3.j(0.5),1),u,A.a([new A.W(0,C.r,C.bC.j(0.25),C.o,14)],p),new F.ak(E.U,E.a0,C.t,t,u,u),C.G),u,58,u,u,u,u,u,58)
p=A.l("Your current match will end.\nAll progress will be lost.",u,u,u,u,u,A.E(u,u,C.h.j(0.62),u,u,u,u,u,u,u,u,14,u,u,u,u,1.45,!0,u,u,u,u,u,u,u,u),C.K,u)
w=C.h.j(0.28)
v=x.p
return A5.byd(A.bF(new A.a4(M.zF,F.P(A.a([t,M.jj,D.aDf,E.aX,p,A8.og,F.V(A.a([F.S(K.a4D(A6.v8,new B.b8V(d),A.F3(u,u,u,u,u,u,u,u,u,C.M,u,u,E.eQ,u,new A.cH(A.x(12),C.x),new A.aO(w,1,C.D,-1),u,u,u,u)),1),H.dq,F.S(K.mb(A0.OB,new B.b8W(d),A.oc(C.bC,u,u,C.h,E.eQ,new A.cH(A.x(12),C.x),u)),1)],v),E.j,C.i,E.n,0)],v),E.j,C.i,E.v),u),new A.u(u,u,q,r,o,new F.ak(E.U,E.a0,C.t,s,u,u),C.m),C.Y),400)},
$S:z+12}
B.b8V.prototype={
$0(){A.aZ(this.a,!1).fa(0,!1)
return null},
$S:0}
B.b8W.prototype={
$0(){A.aZ(this.a,!1).fa(0,!0)
return null},
$S:0}
B.b9b.prototype={
$1(d){return d},
$S:122}
B.b9e.prototype={
$2(d,e){if(!d)this.a.CH()},
$S:234}
B.b9c.prototype={
$0(){A.aZ(this.a,!1).fq(0,A.iC(new B.b9a(),null,x.H))},
$S:0}
B.b9a.prototype={
$1(d){return G.MS},
$S:z+13}
B.b9d.prototype={
$0(){return this.a.a9C()},
$S:0}
B.b94.prototype={
$0(){return this.a.a9C()},
$S:0}
B.bng.prototype={
$1(d){if(this.a.c!=null)if($.jM>0)A.hg()},
$S:2}
B.b9j.prototype={
$0(){var w=this.a.c
w.toString
P.m_(w,new B.vE(D.iO,null),x.X)
return null},
$S:0}
B.b9k.prototype={
$0(){var w=this.a.c
w.toString
P.m_(w,new B.vE(D.Hg,null),x.X)
return null},
$S:0}
B.b9l.prototype={
$0(){var w=this.a.c
w.toString
P.m_(w,new B.vE(D.iO,null),x.X)
return null},
$S:0}
B.b9m.prototype={
$0(){var w=this.a.c
w.toString
P.m_(w,new B.vE(D.Hg,null),x.X)
return null},
$S:0}
B.aZY.prototype={
$1(d){return this.a.c.$0()},
$S:56}
B.b7J.prototype={
$1(d){return D.a94.d_(0,d)},
$S:60}
B.bnh.prototype={
$1(d){if(this.a.c!=null)if($.jM>0)A.hg()},
$S:2}
B.ba4.prototype={
$1(d){var w,v,u,t,s,r=this.a
if(r.c==null)return
if(x.f.b(d)){w=A.ao(d,x.N,x.z)
v=w.h(0,"code")
u=J.fI(v)
if(u.n(v,200)||u.n(v,"200")){r.E(new B.ba5(r,w))
t=L.dg(w)
u=t.a
if(u!=null){r.f.sd6(0,u)
s=t.d
if(s>0)r.e=s
r.rn(new B.ba6(r,t))
r.UA(u)}r.E(new B.ba7(r))
r.Kg()
r.Ke()}else r.E(new B.ba8(r,w))}},
$S:4}
B.ba5.prototype={
$0(){var w=this.a
w.z=this.b
w.x=null},
$S:0}
B.ba6.prototype={
$0(){N.cu("ludo_online").dI("joinRoom",this.a.yV(this.b.a))},
$S:0}
B.ba7.prototype={
$0(){return this.a.Q=!1},
$S:0}
B.ba8.prototype={
$0(){var w=this.a,v=this.b.h(0,"message")
v=v==null?null:J.L(v)
w.x=v==null?"Room create failed":v
w.Q=!1},
$S:0}
B.ba9.prototype={
$1(d){var w,v=this.a
if(v.c==null)return
if(J.f(d,"game_started")){v.ro()
return}if(v.gjd().length===0)return
w=v.ch
if(w!=null)w.U(0)
v.ch=A.c7(Al.kn,new B.baa(v))},
$S:4}
B.baa.prototype={
$0(){var w=this.a
if(w.c==null||w.gjd().length===0)return
w.Uz(w.gjd())},
$S:0}
B.bab.prototype={
$1(d){var w,v,u,t,s=this.a
if(s.c==null)return
w=x.f
if(w.b(d)){v=A.ao(d,x.N,x.z)
if(J.f(v.h(0,"success"),!1)){w=v.h(0,"message")
u=w==null?null:J.L(w)
if(u!=null&&u.length!==0)s.E(new B.bac(s,u))
return}t=!0
if(!J.f(v.h(0,"success"),!0))if(!w.b(v.h(0,"ludoState"))){w=v.h(0,"gameId")
if(w==null)w=v.h(0,"game_id")
w=(w==null?null:J.L(w).length!==0)===!0
t=w}if(t)s.ro()}},
$S:4}
B.bac.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.bal.prototype={
$0(){var w,v,u=this.a
if(L.dg(u.z).gkV())w="All "+u.gnQ()+" players ready \u2014 starting match\u2026"
else{w=u.guZ()
v=u.z
w=w.length!==0?"Waiting: "+L.dg(v).e+"/"+u.gnQ()+" joined. Share code: "+u.guZ():"Waiting: "+L.dg(v).e+"/"+u.gnQ()+" joined. Generating invite code\u2026"}u.y=w},
$S:0}
B.b9B.prototype={
$1(d){var w
this.a.cY("connect",this.b.aT())
w=this.c
if((w.a.a&30)===0)w.eO(0)},
$S:4}
B.b9I.prototype={
$0(){var w=this.a
w.z=this.b
w.x=null},
$S:0}
B.bah.prototype={
$1(d){this.a.Uz(this.b)},
$S:14}
B.ba0.prototype={
$0(){var w=this.a
w.y="Lobby full ("+w.gnQ()+"/"+w.gnQ()+") \u2014 starting match\u2026"},
$S:0}
B.bai.prototype={
$0(){var w=N.cu("ludo_online"),v=this.a,u=this.b
w.dI("joinRoom",v.yV(u))
w.dI("startGame",v.yV(u))},
$S:0}
B.baj.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.bak.prototype={
$0(){return this.a.x=this.b.a},
$S:0}
B.b9v.prototype={
$0(){var w=this.a
w.y=w.x=null
w.Q=!0},
$S:0}
B.b9w.prototype={
$0(){var w=this.a
w.x="Please log in to continue."
w.Q=!1},
$S:0}
B.b9x.prototype={
$0(){var w=this.a
return w.y="Creating room ("+w.e+" players)\u2026"},
$S:0}
B.b9y.prototype={
$0(){var w="ludo_online",v=N.cu(w),u=this.a,t=A.d0(u.aLL(),x.N,x.z)
t.k(0,"bootValue",u.d)
t.k(0,"boot_value",u.d)
t.k(0,"noOfPlayers",u.e)
t.k(0,"no_of_players",u.e)
t.k(0,"gameType",w)
t.k(0,"game_type",w)
t.k(0,"private_table",!0)
v.dI("getPrivateTable",t)},
$S:0}
B.b9z.prototype={
$0(){var w=this.a
w.x="Could not connect to server \u2014 check network and URL."
w.Q=!1},
$S:0}
B.b9A.prototype={
$0(){var w=this.a
if(w.c==null||!w.Q)return
w.E(new B.b9u(w))},
$S:8}
B.b9u.prototype={
$0(){var w=this.a
w.Q=!1
if(w.gjd().length===0)w.x="No response from server \u2014 timed out."},
$S:0}
B.b9R.prototype={
$0(){var w=this.a
w.y=w.x=null
w.Q=!0},
$S:0}
B.b9S.prototype={
$0(){var w=this.a
w.x="Enter a table ID from your host."
w.Q=!1},
$S:0}
B.b9T.prototype={
$0(){var w=this.a
w.x="Please log in to continue."
w.Q=!1},
$S:0}
B.b9U.prototype={
$0(){var w=this.a.a
if(w!=null)this.b.z=w},
$S:0}
B.b9V.prototype={
$0(){this.b.dI("joinRoom",this.a.yV(this.c))},
$S:0}
B.b9W.prototype={
$0(){var w=this.a
w.x=y.d
w.Q=!1},
$S:0}
B.b9X.prototype={
$0(){var w=this.a
w.y="Joined successfully. Match starts when lobby is full."
w.Q=!1},
$S:0}
B.b9Y.prototype={
$0(){var w=this.a
w.x=this.b.a
w.Q=!1},
$S:0}
B.b9Z.prototype={
$0(){var w=this.a
w.x=A.v(this.b)
w.Q=!1},
$S:0}
B.bam.prototype={
$1(d){return!this.a.a9H(d)},
$S:9}
B.b9C.prototype={
$0(){var w=this.a
w.x="Join failed \u2014 could not read table from server. Try again."
w.Q=!1},
$S:0}
B.b9D.prototype={
$0(){return this.b.z=this.a.a},
$S:0}
B.b9E.prototype={
$0(){N.cu("ludo_online").dI("joinRoom",this.b.yV(this.a.b))
return null},
$S:0}
B.b9F.prototype={
$0(){var w=this.a
w.x=y.d
w.Q=!1},
$S:0}
B.b9G.prototype={
$0(){return this.a.Q=!1},
$S:0}
B.b9H.prototype={
$0(){var w=this.a
w.y="Joined by code. Match starts when lobby is full."
w.Q=!1},
$S:0}
B.b9L.prototype={
$0(){var w=this.a
w.y=w.x=null
w.Q=!0},
$S:0}
B.b9M.prototype={
$0(){var w=this.a
w.x="Enter invite code (3\u20134 characters)."
w.Q=!1},
$S:0}
B.b9N.prototype={
$0(){var w=this.a
w.x="Please log in to continue."
w.Q=!1},
$S:0}
B.b9O.prototype={
$0(){var w,v=this.b
v.y=v.z=null
w=this.a.a
w=w==null?null:w.a
v.x=w==null?"Join nahi hua \u2014 host ki table pe seat nahi mili. Dono phones pe alag-alag account se login karo, naya room banao, phir code se JOIN karo.":w
v.Q=!1},
$S:0}
B.b9P.prototype={
$0(){var w=this.a
w.x=this.b.a
w.Q=!1},
$S:0}
B.b9Q.prototype={
$0(){var w=this.a
w.x=A.v(this.b)
w.Q=!1},
$S:0}
B.bad.prototype={
$0(){var w=this.a
w.y=w.x=null},
$S:0}
B.bae.prototype={
$0(){return this.a.x="tableId missing."},
$S:0}
B.baf.prototype={
$0(){var w=this.a
return w.x="Only "+L.dg(w.z).e+"/"+w.gnQ()+" players \u2014 wait for everyone to join."},
$S:0}
B.bag.prototype={
$0(){return this.a.y="Starting game\u2026"},
$S:0}
B.b9p.prototype={
$0(){F.lj(new F.jD(this.a.gjd()))
this.b.a0(x.q).f.bc(I.oh)},
$S:0}
B.b9r.prototype={
$1(d){var w=this.a
if(!w.Q)w.lT()},
$S:18}
B.b9q.prototype={
$1(d){var w,v=d.toUpperCase()
if(v!==d){w=this.a.w
w.mR(0,w.a.Yi(F.nA(C.H,v.length),v))}},
$S:18}
B.b9s.prototype={
$0(){F.lj(new F.jD(this.a.gjd()))
this.b.a0(x.q).f.bc(I.oh)},
$S:0}
B.b9t.prototype={
$1(d){return D.a9p.d_(0,d)},
$S:60}
B.b9n.prototype={
$0(){return A.aZ(this.a,!1).oy()},
$S:0}
B.ba2.prototype={
$1(d){var w=null
return P.bsA(A.l(""+d+" Players",w,w,w,w,w,w,w,w),d,x.S)},
$S:z+14}
B.ba3.prototype={
$1(d){var w
if(d!=null){w=this.a
w.E(new B.ba1(w,d))}},
$S:235}
B.ba1.prototype={
$0(){return this.a.e=this.b},
$S:0}
B.b9o.prototype={
$1(d){var w=this.a,v=A.cB(d,null)
return w.d=v==null?w.d:v},
$S:18}
B.ban.prototype={
$1(d){var w=this.a,v=w.CW
if(v!=null)v.U(0)
w.CW=null},
$S:18}
B.b9J.prototype={
$0(){var w=$.at.O$.d.c
if(w!=null)w.iw()
this.a.$0()},
$S:0}
B.ba_.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=d<L.dg(r.z).c.length,p=q?L.dg(r.z).c[d]:s,o=p!=null,n=o&&r.a9H(p),m=o&&p.length>8?"\u2026"+C.c.bV(p,p.length-6):p
if(q)if(n){o="You"+(r.a.c===D.iO&&d===0?" (Host)":"")
w=o}else{o="Player "+A.v(m)
w=o}else w="Waiting for player\u2026"
r=d<r.gnQ()-1?8:0
if(q)o=n?R.cM.j(0.16):G.ac.j(0.18)
else o=C.w
if(q)v=n?R.cM.j(0.55):G.ac.j(0.55)
else v=C.h.j(0.18)
v=F.Q(v,1.5)
if(q)u=n?T.iI:H.cR
else u=I.AB
if(q)t=n?R.cM:G.dX
else t=C.b8
v=A.y(s,A.ai(u,t,s,s,18),C.f,s,s,new A.u(o,s,v,s,s,s,C.G),s,36,s,s,s,s,s,36)
o=q?C.h.j(0.92):C.h.j(0.42)
return new A.a4(new A.A(0,0,0,r),F.V(A.a([v,H.aT,F.S(A.l(w,s,s,s,s,s,A.E(s,s,o,s,s,s,s,s,s,s,s,13,s,s,q?C.S:C.av,s,s,!0,s,s,s,s,s,s,s,s),s,s),1)],x.p),E.j,C.i,E.n,0),s)},
$S:93}
B.b9K.prototype={
$0(){var w=this.a
F.lj(new F.jD(w.guZ()))
w.c.a0(x.q).f.bc(I.NA)},
$S:0}
B.bni.prototype={
$1(d){if(this.a.c!=null)if($.jM>0)A.hg()},
$S:2}
B.bb8.prototype={
$1(d){var w=this.a
if(w.c==null||w.dy||w.fr||w.Q)return
if(w.w||w.dx)return
if(w.gnP()){if(!N.cu(w.a.f).y)w.VZ(!0)}else w.pB()},
$S:14}
B.bb9.prototype={
$1(d){return this.a.aLQ()},
$S:14}
B.baV.prototype={
$1(d){var w=this.a,v=w.e
if(v!=null)v.U(0)
w.e=A.c7(C.cC,new B.baU(w))},
$S:4}
B.baU.prototype={
$0(){var w=this.a
if(w.c==null||w.w||w.dx)return
if(w.CW!=null||w.dy||w.fr)return
if(w.gnP())w.VZ(!0)
else w.pB()},
$S:0}
B.baW.prototype={
$1(d){return this.a.a6H()},
$S:4}
B.bar.prototype={
$0(){return this.a.z=this.b},
$S:0}
B.bat.prototype={
$0(){var w=this.a
w.y=this.b
w.z=null
w.E0()},
$S:0}
B.baD.prototype={
$0(){return this.a.aZ=this.b},
$S:0}
B.bb_.prototype={
$0(){this.a.Sw()},
$S:0}
B.bb0.prototype={
$0(){return this.a.ak=this.b},
$S:0}
B.bas.prototype={
$0(){var w=this.a
w.z=w.ch=null},
$S:0}
B.baI.prototype={
$0(){var w,v,u,t,s,r,q,p=this,o=p.c
if(o){s=p.d
if(s==null)s=p.a.a
p.b.x=s}s=p.e
if(s){if(p.f==="waiting"){r=p.r
q=B.oq(r)&&!B.MH(r)}else q=!1
w=q
if(!w){r=p.b
r.y=B.q_(r.y,p.r)}r=J.B(p.r,"status")
v=r==null?null:J.L(r)
if(v!=null&&v.length!==0){r=p.b
u=A.F(x.N,x.z)
t=r.x
if(t!=null)J.CA(u,t)
J.eh(u,"status",v)
r.x=u}}u=!0
if(!o)if(!s){u=p.b
u=u.y!=null||u.x!=null}if(u){u=p.b
u.z=null}else{u=p.b
if(u.y==null&&u.x==null)u.z="Could not load game \u2014 check network / server URL"}u.E0()},
$S:0}
B.baY.prototype={
$0(){var w=this.a
w.k3=!0
w.k4=this.b
w.ok=new A.c3(Date.now(),0,!1)},
$S:0}
B.baF.prototype={
$0(){var w,v,u=this.a
u.p1=null
if(u.c==null||!u.k3)return
w=u.p2
v=u.k4
if(w==null||v==null)return
if(B.rU(u.y)==="rolling"&&u.Dj())return
u.E(new B.baE(u,v,w))},
$S:0}
B.baE.prototype={
$0(){var w,v,u=this.a
u.k3=!1
u.p2=null
w=this.b
v=this.c
u.JU(v,w)
u.id=v
u.k1=w},
$S:0}
B.baZ.prototype={
$0(){var w,v,u=this,t=u.a
t.k3=!1
t.p2=null
w=u.b
if(w!=null){v=u.c
v=v!=null&&v>0}else v=!1
if(v){v=u.c
t.JU(v,w)
t.id=v
t.k1=w}},
$S:0}
B.bau.prototype={
$0(){return this.a.Q=!0},
$S:0}
B.bav.prototype={
$0(){return this.a.Q=!1},
$S:0}
B.baJ.prototype={
$0(){var w=this.a
w.dy=!0
w.go=null
w.fx=w.y2.cX(6)+1},
$S:0}
B.baK.prototype={
$1(d){return this.a.b=d},
$S:584}
B.baL.prototype={
$1(d){this.a.a=d
return A.F(x.N,x.z)},
$S:585}
B.baM.prototype={
$0(){var w=this.a
return w.fx=w.y2.cX(6)+1},
$S:0}
B.baN.prototype={
$0(){var w,v,u=this,t=u.a
t.y=B.q_(t.y,u.b)
v=u.c
if(v>0){w=C.k.R(v,1,6)
t.fx=w
t.id=w
v=u.d
t.k1=v
t.JU(w,v)}t.dy=!1
t.go=null
t.E0()},
$S:0}
B.baO.prototype={
$0(){return this.a.ch=null},
$S:0}
B.baP.prototype={
$0(){var w=this.a,v=this.b,u=x.N
u=w.y=B.q_(w.y,A.aa(["dice",v,"ludoState",A.aa(["lastDice",v,"phase","moving"],u,x.K)],u,x.z))
if(u!=null)w.Ue(u)},
$S:0}
B.baQ.prototype={
$0(){},
$S:0}
B.baR.prototype={
$0(){var w=this.a,v=x.N
w.y=B.q_(w.y,A.aa(["dice",0,"ludoState",A.aa(["lastDice",0,"phase","rolling"],v,x.K)],v,x.z))},
$S:0}
B.baS.prototype={
$1(d){var w=this.b
if(w.c==null)return
w.py(C.b.gW(this.a.c))},
$S:2}
B.baT.prototype={
$0(){return this.a.dy=!1},
$S:0}
B.baX.prototype={
$0(){var w=this.a,v=x.N
w.y=B.q_(w.y,A.aa(["dice",0,"ludoState",A.aa(["lastDice",0,"phase","rolling"],v,x.K)],v,x.z))
w.Sw()
w.ch=null},
$S:0}
B.baH.prototype={
$1(d){var w=this.a
w.p4=w.Js(d,!0)},
$S:z+15}
B.baG.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.IJ(this.b,this.c)},
$S:2}
B.bap.prototype={
$0(){var w=this.a
return w.p4=w.Js(this.b,!0)},
$S:0}
B.baq.prototype={
$0(){var w=this.a
w.rx=this.b.a[2]
w.p4=w.Js(this.c,!0)
w.p3=null},
$S:0}
B.bao.prototype={
$0(){var w=this
w.a.p3=new B.a3N(w.b,w.c,w.d)},
$S:0}
B.bax.prototype={
$0(){var w=this.a
w.p4=w.pm(this.b)},
$S:0}
B.bay.prototype={
$0(){var w,v=this,u=v.b,t=v.a
u.y=t.b
u.p4=v.c
u.R8=v.d
u.RG=v.e
u.p3=null
w=v.f
if(t.a===6){u.ch=null
u.L6()}else if(w>=0){u.ch=w
u.Sw()}},
$S:0}
B.baz.prototype={
$0(){var w=this.a
if(w.c==null||w.RG==null)return
w.n0(!0,!0)
w.uL()},
$S:0}
B.baA.prototype={
$0(){var w,v,u,t=this,s=t.b,r=B.q_(s.y,t.c)
s.y=r
w=t.e
v=t.f
u=J.B(v[t.r],w)
s.y=s.TE(t.a.a,r,t.d,u,w)
s.RG=s.R8=null
s.p4=v
s.E0()},
$S:0}
B.baB.prototype={
$0(){var w,v,u,t=this.b
t.RG=t.R8=null
t.p4=this.c
w=t.y
v=this.a.a
u=x.N
u=t.y=B.q_(w,A.aa(["dice",v,"ludoState",A.aa(["lastDice",v,"phase","moving"],u,x.K)],u,x.z))
if(u!=null)t.Ue(u)},
$S:0}
B.baC.prototype={
$0(){return this.a.E0()},
$S:0}
B.baw.prototype={
$0(){var w=this,v=w.c>=w.a.length
if(v)return C.bD
return w.b.a_C(w.a,w.c,w.d)},
$S:586}
B.bb3.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.Ef(this.b,this.c)
if(w.c!=null)w.E(new B.bb2(w))},
$S:2}
B.bb2.prototype={
$0(){return this.a.db=!1},
$S:0}
B.bb4.prototype={
$1(d){return d},
$S:122}
B.bb5.prototype={
$0(){return A.aZ(this.a,!1).oy()},
$S:0}
B.bb6.prototype={
$0(){return A.aZ(this.a,!1).oy()},
$S:0}
B.bb7.prototype={
$1(d){var w=this,v=null,u=w.c,t=w.r,s=w.a
return new B.zA(d,new A.ay(C.C,v,C.as,C.u,A.a([new A.j0(A.dE(C.fD,v,v,new B.MK(u,v),C.a8),v),B.bBe(s.p3,t,new B.bb1(s,w.x,t),D.e3,u,w.e,w.w,d,w.d,w.f)],x.p),v),w.b,v)},
$S:z+16}
B.bb1.prototype={
$2(d,e){var w,v=this.a
if(v.dy||v.fr||v.RG!=null)return
w=this.b
if(w<0)return
if(d!==w)return
if(!C.b.t(this.c,e))return
v.py(e)},
$S:587}
B.bnj.prototype={
$1(d){if(this.a.c!=null)if($.jM>0)A.hg()},
$S:2}
B.aCy.prototype={
$1(d){var w=this.a
x.an.a($.aF.h(0,$.hu()))
w=new B.zz(w.c,w.d,new B.MO(),H.bL,D.alD)
w.h7()
return w},
$S:z+17}
B.bbj.prototype={
$2(d,e){var w=null,v=e.c,u=this.a,t=x.p,s=A.a([new B.af6(u.a.c.b,u.gaV_(),new B.bbh(d),this.b,w)],t),r=e.d
if(r!=null&&r.length!==0)s.push(new A.a4(D.zC,A.l(r,w,w,w,w,w,D.azB,C.K,w),w))
s.push(new A.a4(D.a32,F.V(A.a([A.l("TABLES",w,w,w,w,w,A.E(w,w,D.cO.j(0.9),w,w,w,w,w,w,w,w,11,w,w,C.y,w,w,!0,w,1.6,w,w,w,w,w,w),w,w),H.aT,F.S(A.y(w,w,C.f,G.ac.j(0.28),w,w,w,1,w,w,w,w,w,w),1),H.aT,A.l(""+v.length,w,w,w,w,w,A.E(w,w,C.h.j(0.7),w,w,w,w,w,w,w,w,12,w,w,C.B,w,w,!0,w,w,w,w,w,w,w,w),w,w)],t),E.j,C.i,E.n,0),w))
if(e.a)u=D.TP
else u=v.length===0?D.TR:A.cc(new B.bbi(u,v))
s.push(F.S(u,1))
return F.P(s,E.j,C.i,E.n)},
$S:z+18}
B.bbh.prototype={
$0(){return A.aZ(this.a,!1).bi(0)},
$S:0}
B.bbi.prototype={
$2(d,e){var w,v=this
if(e.b>=640){w=v.b
return P.bsW(null,D.ava,new B.bbe(v.a,w),w.length,D.zz,G.ee)}w=v.b
return P.jj(null,new B.bbf(v.a,w),w.length,D.zz,G.ee,!1,C.a1,new B.bbg(),!1)},
$S:z+19}
B.bbe.prototype={
$2(d,e){var w=this.b,v=w[e],u=D.e3[C.k.aj(e,4)],t=this.a,s=t.a.c.a
s=s==="computer"||s==="local"
return new B.C5(v,u,s,new B.bbd(t,d,w,e),null)},
$S:z+3}
B.bbd.prototype={
$0(){var w=this
return w.a.z6(w.b,w.c[w.d])},
$S:0}
B.bbg.prototype={
$2(d,e){return E.aX},
$S:24}
B.bbf.prototype={
$2(d,e){var w=this.b,v=w[e],u=D.e3[C.k.aj(e,4)],t=this.a,s=t.a.c.a
s=s==="computer"||s==="local"
return new B.C5(v,u,s,new B.bbc(t,d,w,e),null)},
$S:z+3}
B.bbc.prototype={
$0(){var w=this
return w.a.z6(w.b,w.c[w.d])},
$S:0}
B.bba.prototype={
$0(){var w=0,v=A.p(x.d),u=this,t,s
var $async$$0=A.q(function(d,e){if(d===1)return A.m(e,v)
for(;;)switch(w){case 0:t=u.b.c
t.toString
s=u.a
w=2
return A.e(K.aB(t,!1,x.W).F0(u.c),$async$$0)
case 2:s.a=e
return A.n(null,v)}})
return A.o($async$$0,v)},
$S:52}
B.bbb.prototype={
$0(){var w=0,v=A.p(x.d),u=this,t,s
var $async$$0=A.q(function(d,e){if(d===1)return A.m(e,v)
for(;;)switch(w){case 0:t=u.b.c
t.toString
s=u.a
w=2
return A.e(K.aB(t,!1,x.W).AS(u.c),$async$$0)
case 2:s.a=e
return A.n(null,v)}})
return A.o($async$$0,v)},
$S:52}
B.b7V.prototype={
$1(d){return D.a8U.d_(0,d)},
$S:60}
B.bnk.prototype={
$1(d){if(this.a.c!=null)if($.jM>0)A.hg()},
$S:2}
B.bbn.prototype={
$0(){return A.aZ(this.a,!1).bi(0)},
$S:0}
B.bbp.prototype={
$0(){},
$S:0}
B.bbo.prototype={
$2(d,e){var w,v,u,t=null,s=A.x(22),r=F.Q(G.ac.j(0.7),2),q=x.V,p=A.a([new A.W(0,C.r,G.ac.j(0.2),C.o,24),new A.W(0,C.r,C.l.j(0.45),G.nH,24)],q),o=this.a,n=x.C
n=A.af(new A.as(D.BD,new B.bbm(o),n),n.i("aW.E"))
n=F.V(n,E.j,C.i,E.n,0)
w=o.a.c.a==="computer"
v=o.d
v=A.l(w?"You + "+(v-1)+" computer":""+v+" player game",t,t,t,t,t,D.aC9,t,t)
u=x.p
p=A.y(t,F.P(A.a([D.aE3,E.aX,n,M.jj,v,H.aB,A.l(w?"Computer fills empty seats":"Same phone \u2014 pass & play (no computer)",t,t,t,t,t,D.axS,C.K,t),H.bX,new A.G(200,52,K.mb(D.aEZ,o.gaBj(),A.oc(D.q5,t,4,C.h,t,new A.cH(A.x(14),C.x),t)),t)],u),E.j,C.i,E.v),C.f,t,t,new A.u(D.mb,t,r,s,p,t,C.m),t,t,t,D.a2j,D.a37,t,t,t)
s=A.x(6)
q=A.a([new A.W(0,C.r,D.cO.j(0.35),D.anm,8)],q)
r=A.bBn(-0.02)
return new A.cO(new A.ad(0,1/0,0,e.d*0.92),A.ek(new A.ay(C.Q,t,C.J,C.f,A.a([p,A.y(t,A.l(o.a.c.a==="computer"?"vs Computer":"Play Local",t,t,t,t,t,D.ay9,t,t),C.f,t,t,new A.u(D.cO,t,t,s,q,t,C.m),t,t,t,t,D.zH,r,t,t)],u),t),t,C.O,t,H.jL,C.a1),t)},
$S:136}
B.bbm.prototype={
$1(d){var w=null,v=this.a,u=v.d===d,t=u?D.q5:C.dg,s=A.x(10),r=A.x(10)
return F.S(new A.a4(E.ca,A.b4(!1,C.z,!0,s,A.bc(!1,r,!0,new A.a4(G.h5,A.aE(A.l(""+d,w,w,w,w,w,A.E(w,w,C.h,w,w,w,w,w,w,w,w,22,w,w,u?C.B:C.S,w,w,!0,w,w,w,w,w,w,w,w),w,w),w,w),w),w,!0,w,w,w,w,w,w,w,w,new B.bbl(v,d),w,w,w,w,w,w,w),C.f,t,0,w,w,w,w,w,C.F),w),1)},
$S:z+20}
B.bbl.prototype={
$0(){var w=this.a
return w.E(new B.bbk(w,this.b))},
$S:0}
B.bbk.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.bnl.prototype={
$1(d){if(this.a.c!=null)if($.jM>0)A.hg()},
$S:2}
B.aBX.prototype={
$2(d,e){var w=this.a,v=d*w,u=e*w
return new A.U(v,u,v+w,u+w)},
$S:589}
B.aC0.prototype={
$2(d,e){return d<6&&e<6},
$S:54}
B.aC_.prototype={
$2(d,e){return d>=9&&e<6},
$S:54}
B.aC1.prototype={
$2(d,e){return d>=9&&e>=9},
$S:54}
B.aBZ.prototype={
$2(d,e){return d<6&&e>=9},
$S:54}
B.aBY.prototype={
$2(d,e){var w=this
if(w.a.$2(d,e))return 0
if(w.b.$2(d,e))return 1
if(w.c.$2(d,e))return 2
if(w.d.$2(d,e))return 3
return null},
$S:590}
B.aC3.prototype={
$2(d,e){var w=this.a,v=w.$2(d,e),u=w.$2(d+1,e)
return v!=null&&v===u},
$S:54}
B.aC2.prototype={
$2(d,e){var w=this.a,v=w.$2(d,e),u=w.$2(d,e+1)
return v!=null&&v===u},
$S:54}
B.aC4.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=this
if(p.a.$2(d,e)||p.b.$2(d,e)||p.c.$2(d,e)||p.d.$2(d,e))return!1
w=d>=6
v=w&&d<9&&e<6
u=w&&d<9&&e>=9
t=e>=6
s=t&&e<9&&d<6
r=t&&e<9&&d>=9
q=w&&d<9&&t&&e<9
return v||u||s||r||q},
$S:54}
B.aBW.prototype={
$0(){var w,v=this,u=A.bs($.ah().w),t=v.a,s=v.b
u.a_(new A.dO(t,s-v.c))
w=v.d
u.a_(new A.bJ(t-w,s))
u.a_(new A.bJ(t+w,s))
u.a_(new A.fp())
return u},
$S:106}
B.aBV.prototype={
$0(){var w,v=this,u=A.bs($.ah().w),t=v.a,s=v.c
u.a_(new A.dO(t+v.b,s))
w=v.d
u.a_(new A.bJ(t,s-w))
u.a_(new A.bJ(t,s+w))
u.a_(new A.fp())
return u},
$S:106}
B.aBT.prototype={
$0(){var w,v=this,u=A.bs($.ah().w),t=v.a,s=v.b
u.a_(new A.dO(t,s+v.c))
w=v.d
u.a_(new A.bJ(t-w,s))
u.a_(new A.bJ(t+w,s))
u.a_(new A.fp())
return u},
$S:106}
B.aBU.prototype={
$0(){var w,v=this,u=A.bs($.ah().w),t=v.a,s=v.c
u.a_(new A.dO(t-v.b,s))
w=v.d
u.a_(new A.bJ(t,s-w))
u.a_(new A.bJ(t,s+w))
u.a_(new A.fp())
return u},
$S:106}
B.aBS.prototype={
$3(d,e,f){var w,v,u,t,s=d.gdu().a
s===$&&A.b()
w=A.ue(s.a.getBounds())
s=this.a
$.ah()
v=A.ap()
u=A.a3(e,C.h,0.38)
u.toString
t=A.a3(e,C.l,0.28)
t.toString
v.sdd(new F.ak(f,new A.cw(-f.a,-f.b),C.t,A.a([u,e,t],x.O),null,null).d_(0,w))
s.dg(d,v)
v=A.ap()
v.b=C.at
v.c=this.b*0.0028
v.r=C.l.j(0.32).gq(0)
s.dg(d,v)},
$S:592}
B.aCh.prototype={
$0(){var w=this.a
this.b.push(new B.f3(C.k.R(C.d.Z(w.b/1),0,14),C.k.R(C.d.Z(w.a/1),0,14)))},
$S:0}
B.aCi.prototype={
$1(d){var w,v,u
for(w=this.a,v=this.b,u=0;u<d;++u){++w.b
v.$0()}},
$S:12}
B.aCe.prototype={
$1(d){var w,v,u
for(w=this.a,v=this.b,u=0;u<d;++u){--w.b
v.$0()}},
$S:12}
B.aCk.prototype={
$1(d){var w,v,u
for(w=this.a,v=this.b,u=0;u<d;++u){--w.a
v.$0()}},
$S:12}
B.aCc.prototype={
$1(d){var w,v,u
for(w=this.a,v=this.b,u=0;u<d;++u){++w.a
v.$0()}},
$S:12}
B.aCb.prototype={
$0(){var w=this.a;++w.b;--w.a
this.b.$0()},
$S:0}
B.aCg.prototype={
$0(){var w=this.a;++w.b;++w.a
this.b.$0()},
$S:0}
B.aCa.prototype={
$0(){var w=this.a;--w.b;--w.a
this.b.$0()},
$S:0}
B.aCf.prototype={
$0(){var w=this.a;--w.b;++w.a
this.b.$0()},
$S:0}
B.aCl.prototype={
$0(){var w=this
w.a.$0()
w.b.$1(5)
w.c.$1(2)
w.d.$1(5)},
$S:0}
B.aCj.prototype={
$0(){var w=this
w.a.$0()
w.b.$1(5)
w.c.$1(2)
w.d.$1(5)},
$S:0}
B.aCd.prototype={
$0(){var w=this
w.a.$0()
w.b.$1(5)
w.c.$1(2)
w.d.$1(5)},
$S:0}
B.aCm.prototype={
$2(d,e){var w,v
d.$0()
w=this.a
v=w.length
e.$0()
this.b.push(C.b.hN(w,v))},
$S:593}
B.aCn.prototype={
$0(){},
$S:0}
B.aCo.prototype={
$0(){var w,v=this
v.b.$1(5)
w=v.a
w.a=w.b=v.c
v.d.$0()},
$S:0}
B.aCp.prototype={
$0(){},
$S:0}
B.aCq.prototype={
$0(){var w,v=this
v.b.$1(5)
w=v.a
w.a=w.b=v.c
v.d.$0()},
$S:0}
B.aCr.prototype={
$0(){},
$S:0}
B.aCs.prototype={
$0(){var w,v=this
v.b.$1(5)
w=v.a
w.a=w.b=v.c
v.d.$0()},
$S:0}
B.aCt.prototype={
$0(){},
$S:0}
B.aCu.prototype={
$0(){var w,v=this
v.b.$1(5)
w=v.a
w.a=w.b=v.c
v.d.$0()},
$S:0}
B.aC6.prototype={
$1(d){return d.c},
$S:z+4}
B.aC8.prototype={
$0(){return A.a([],x._)},
$S:z+21}
B.aC7.prototype={
$0(){var w=this.b
return this.a.z.$2(w.a,w.b)},
$S:0}
B.b6r.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=p.d
o===$&&A.b()
w=o.x
w===$&&A.b()
v=p.aQ7(w)
w=p.a
u=w.c
t=w.d
s=B.bHj(u*15,u,v.a,v.b,0,0,w.e,t)
r=Math.max(1,p.a.f.length-1)
o=o.x
o===$&&A.b()
o=Math.sin(C.d.aj(o*r,1)*3.141592653589793)
e.toString
return new A.ay(C.C,q,C.as,C.f,A.a([A.aH(q,e,q,q,s.a,q,s.b+o*-5,q)],x.p),q)},
$S:112}
B.aBM.prototype={
$1(d){return J.cJ(d)},
$S:595}
B.aBN.prototype={
$1(d){return A.cB(A.v(d),null)},
$S:240}
B.aBQ.prototype={
$1(d){var w,v,u,t
if(!x.j.b(d))return
for(w=J.b0(d),v=this.a;w.A();){u=w.gP(w)
t=u==null?null:C.c.S(J.L(u))
if(t==null)t=""
if(!B.bRm(t))continue
if(!C.b.t(v,t))v.push(t)}},
$S:4}
B.aBP.prototype={
$1(d){var w=this.a.h(0,d)
w.toString
return w},
$S:55}
B.b8K.prototype={
$1(d){var w=this.a
if(w.c==null)return
if(new A.c3(Date.now(),0,!1).ct(this.b).a>=2e6){w.aEL()
return}w.E(new B.b8J(w))},
$S:14}
B.b8J.prototype={
$0(){var w=this.a
return w.e=1+w.r.cX(6)},
$S:0}
B.b8I.prototype={
$0(){},
$S:0}
B.b8L.prototype={
$0(){var w,v=this.b
if(v>0)this.a.e=C.k.R(v,1,6)
else{v=this.a
w=v.a.d
if(w>0)v.e=C.k.R(w,1,6)}},
$S:0}
B.b8N.prototype={
$2(d,e){var w,v,u,t,s,r=this.a,q=r.a.f.x
q===$&&A.b()
q=C.d.R(q,0,1)*3.141592653589793
w=Math.sin(q)
v=Math.sin(q*6)
u=r.a.e?5:0
q=Math.cos(q*5)
r=r.a.e
t=r?3:0
s=r?w*0.28:0
return A.j4(F.fv(C.q,s,A.j3(C.q,e,r?1+w*0.1:1)),new A.k(w*v*u,w*q*t))},
$S:19}
B.b8M.prototype={
$2(d,e){var w=x.Z
return A.kP(C.q,new A.db(e,!1,d,null),null,new A.au(e,new A.aC(0.6,1,w),w.i("au<aL.T>")))},
$S:156}
B.aCA.prototype={
$0(){return Ag.j7(this.a)},
$S:0}
B.aCB.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=this.a,h=i.r
if(h){w=i.y
v=w.a
u=w.b.a1(0,v.gq(v))}else u=0
w=D.XW.j(0.94)
v=A.x(14)
t=h?i.c.j(0.7+u*0.25):C.h.j(0.1)
t=F.Q(t,h?1.4:1)
s=A.a([],x.V)
if(h)s.push(new A.W(0,C.r,i.c.j(0.22+u*0.12),C.o,12))
s.push(new A.W(0,C.r,C.l.j(0.28),H.br,8))
r=this.b
q=i.c
p=A.y(j,j,C.f,j,j,new A.u(q,j,j,A.x(2),j,j,C.m),j,r,j,j,j,j,j,3)
o=A.a3(q,C.h,0.35)
o.toString
n=A.a3(q,C.l,0.28)
n.toString
n=A.a([o,q,n],x.O)
o=F.Q(C.h.j(h?0.9:0.28),1.4)
m=i.as?D.a67:H.cR
r=A.y(j,A.ai(m,C.h.j(0.95),j,j,r*0.5),C.f,j,j,new A.u(j,j,o,j,j,new K.d5(D.PH,0.5,C.t,j,0,n,j,j),C.G),j,r,j,j,j,j,j,r)
o=C.h.j(h?1:0.78)
o=A.l(i.d,j,1,C.I,j,j,A.E(j,j,o,j,j,j,j,j,j,j,j,12.5,j,j,C.B,j,1.1,!0,j,0.1,j,j,j,j,j,j),j,j)
n=D.cO.j(h?0.95:0.7)
m=x.p
n=F.S(F.P(A.a([o,H.fE,A.l(i.at,j,1,C.I,j,j,A.E(j,j,n,j,j,j,j,j,j,j,j,10,j,j,C.S,j,1.05,!0,j,j,j,j,j,j,j,j),j,j)],m),E.X,C.i,E.v),1)
o=A.x(9)
l=F.Q(h||i.w?q.j(0.8):C.h.j(0.12),1)
k=i.z
h=k?i.Q:j
return A.y(j,F.V(A.a([p,E.a2,r,E.a2,n,H.b9,A.y(j,new B.MF(q,i.f,i.w,i.x,k,h,this.c,j),C.f,j,j,new A.u(D.Xg,j,l,o,j,j,C.m),j,j,j,j,G.ku,j,j,j)],m),E.j,C.i,E.n,0),C.f,j,j,new A.u(w,j,t,v,s,j,C.m),j,j,j,j,new A.A(8,6,6,6),j,j,j)},
$S:67}
B.aCz.prototype={
$2(d,e){var w=Math.min(e.b,e.d),v=w-14
if(v<96)v=Math.max(72,w-4)
return A.aE(this.a.d.$1(v),null,null)},
$S:36}
B.bpZ.prototype={
$1(d){return d.c},
$S:z+4}
B.aCE.prototype={
$3(d,e,f){return new A.dh(Af.uv(this.a,D.q1),null,null)},
$S:96};(function aliases(){var w=B.XZ.prototype
w.auj=w.l
w=B.Y_.prototype
w.aul=w.a4
w.auk=w.l
w=B.Y0.prototype
w.aun=w.a4
w.aum=w.l
w=B.Y1.prototype
w.aup=w.a4
w.auo=w.l
w=B.Y2.prototype
w.auq=w.l
w=B.Y3.prototype
w.aus=w.a4
w.aur=w.l
w=B.Y4.prototype
w.auu=w.a4
w.aut=w.l
w=B.Y5.prototype
w.auw=w.a4
w.auv=w.l
w=B.XP.prototype
w.au8=w.l})();(function installTearOffs(){var w=a._instance_2u,v=a._instance_0u,u=a._instance_1u
var t
w(t=B.TQ.prototype,"gaMO","aMP",9)
v(t,"gaBa","CH",0)
u(t,"gay6","ay7",10)
v(B.TR.prototype,"gaLy","aLz",1)
v(t=B.TS.prototype,"gaLG","ro",1)
v(t,"gaLF","Kc",0)
v(t,"ga9I","yT",0)
v(t,"gaLI","lT",0)
v(t,"gaLM","Kf",0)
u(t=B.TT.prototype,"gaxf","axg",2)
u(t,"gaNy","aNz",2)
v(t,"gazP","azQ",1)
v(t,"gaUw","aUx",0)
v(t,"gaRU","pC",0)
v(B.TW.prototype,"gaBj","aBk",1)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(A.I,[B.Lz,B.MO,B.MR,B.t_,B.f3,B.aC9,B.jl,B.jL,B.vB,B.a3N,B.xe,B.ME,B.lv,B.rY])
u(A.d8,[B.aBI,B.aBJ,B.aBH,B.aBK,B.aCv,B.aCw,B.b9g,B.b9h,B.b9f,B.b93,B.b8P,B.b97,B.b99,B.b8X,B.b9b,B.b9a,B.bng,B.aZY,B.b7J,B.bnh,B.ba4,B.ba9,B.bab,B.b9B,B.bah,B.bam,B.b9r,B.b9q,B.b9t,B.ba2,B.ba3,B.b9o,B.ban,B.ba_,B.bni,B.bb8,B.bb9,B.baV,B.baW,B.baK,B.baL,B.baS,B.baH,B.baG,B.bb3,B.bb4,B.bb7,B.bnj,B.aCy,B.b7V,B.bnk,B.bbm,B.bnl,B.aBS,B.aCi,B.aCe,B.aCk,B.aCc,B.aC6,B.aBM,B.aBN,B.aBQ,B.aBP,B.b8K,B.bpZ,B.aCE])
t(B.a3D,A.lN)
t(B.zz,A3.hv)
u(A.es,[B.aCx,B.bq_,B.b9e,B.bb1,B.bbj,B.bbi,B.bbe,B.bbg,B.bbf,B.bbo,B.aBX,B.aC0,B.aC_,B.aC1,B.aBZ,B.aBY,B.aC3,B.aC2,B.aC4,B.aCm,B.b6r,B.b8N,B.b8M,B.aCB,B.aCz])
t(B.q1,K.fW)
u(A.a2,[B.vG,B.ML,B.MM,B.vE,B.EL,B.TU,B.TV,B.Tq,B.MF])
u(A.a5,[B.afl,B.XZ,B.amt,B.amu,B.Y2,B.amw,B.amx,B.XP,B.afh])
t(B.ams,B.XZ)
t(B.Y_,B.ams)
t(B.TQ,B.Y_)
u(A.er,[B.b9i,B.b92,B.b8Y,B.b8Z,B.b9_,B.b90,B.b91,B.b8Q,B.b8R,B.b8S,B.b8T,B.b8U,B.b96,B.b95,B.b98,B.b8V,B.b8W,B.b9c,B.b9d,B.b94,B.b9j,B.b9k,B.b9l,B.b9m,B.ba5,B.ba6,B.ba7,B.ba8,B.baa,B.bac,B.bal,B.b9I,B.ba0,B.bai,B.baj,B.bak,B.b9v,B.b9w,B.b9x,B.b9y,B.b9z,B.b9A,B.b9u,B.b9R,B.b9S,B.b9T,B.b9U,B.b9V,B.b9W,B.b9X,B.b9Y,B.b9Z,B.b9C,B.b9D,B.b9E,B.b9F,B.b9G,B.b9H,B.b9L,B.b9M,B.b9N,B.b9O,B.b9P,B.b9Q,B.bad,B.bae,B.baf,B.bag,B.b9p,B.b9s,B.b9n,B.ba1,B.b9J,B.b9K,B.baU,B.bar,B.bat,B.baD,B.bb_,B.bb0,B.bas,B.baI,B.baY,B.baF,B.baE,B.baZ,B.bau,B.bav,B.baJ,B.baM,B.baN,B.baO,B.baP,B.baQ,B.baR,B.baT,B.baX,B.bap,B.baq,B.bao,B.bax,B.bay,B.baz,B.baA,B.baB,B.baC,B.baw,B.bb2,B.bb5,B.bb6,B.bbh,B.bbd,B.bbc,B.bba,B.bbb,B.bbn,B.bbp,B.bbl,B.bbk,B.aBW,B.aBV,B.aBT,B.aBU,B.aCh,B.aCb,B.aCg,B.aCa,B.aCf,B.aCl,B.aCj,B.aCd,B.aCn,B.aCo,B.aCp,B.aCq,B.aCr,B.aCs,B.aCt,B.aCu,B.aC8,B.aC7,B.b8J,B.b8I,B.b8L,B.aCA])
t(B.Y0,B.amt)
t(B.TR,B.Y0)
u(A.O,[B.abx,B.TF,B.acD,B.afi,B.afG,B.Cf,B.C9,B.ae3,B.Vu,B.afV,B.ahx,B.alv,B.WP,B.a3E,B.af6,B.C5,B.ab0,B.ag7,B.agq,B.a3K,B.a3C,B.a3F,B.a3H,B.afm,B.U4,B.zy,B.a3M,B.a3I,B.MN,B.VU,B.zA,B.MP,B.zB])
u(A.kl,[B.abk,B.MK,B.a3G,B.vC,B.afj])
t(B.Y1,B.amu)
t(B.TS,B.Y1)
t(B.amv,B.Y2)
t(B.Y3,B.amv)
t(B.TT,B.Y3)
t(B.Y4,B.amw)
t(B.afk,B.Y4)
t(B.Y5,B.amx)
t(B.TW,B.Y5)
t(B.aeg,B.XP)
w(B.XZ,A.dP)
v(B.ams,A.dt)
w(B.Y_,B.rY)
v(B.amt,A.dt)
w(B.Y0,B.rY)
v(B.amu,A.dt)
w(B.Y1,B.rY)
w(B.Y2,A.dP)
v(B.amv,A.dt)
w(B.Y3,B.rY)
v(B.amw,A.dt)
w(B.Y4,B.rY)
v(B.amx,A.dt)
w(B.Y5,B.rY)
w(B.XP,A.cY)})()
A.dp(b.typeUniverse,JSON.parse('{"zz":{"cG":["q1"],"eY":["q1"],"cG.0":"q1"},"vG":{"a2":[],"c":[]},"afl":{"a5":["vG"]},"ML":{"a2":[],"c":[]},"TQ":{"a5":["ML"],"dt":[]},"MM":{"a2":[],"c":[]},"TR":{"a5":["MM"],"dt":[]},"abx":{"O":[],"c":[]},"TF":{"O":[],"c":[]},"acD":{"O":[],"c":[]},"afi":{"O":[],"c":[]},"afG":{"O":[],"c":[]},"Cf":{"O":[],"c":[]},"C9":{"O":[],"c":[]},"ae3":{"O":[],"c":[]},"Vu":{"O":[],"c":[]},"afV":{"O":[],"c":[]},"ahx":{"O":[],"c":[]},"abk":{"aK":[]},"alv":{"O":[],"c":[]},"WP":{"O":[],"c":[]},"vE":{"a2":[],"c":[]},"TS":{"a5":["vE"],"dt":[]},"EL":{"a2":[],"c":[]},"TT":{"a5":["EL"],"dt":[]},"TU":{"a2":[],"c":[]},"C5":{"O":[],"c":[]},"a3E":{"O":[],"c":[]},"afk":{"a5":["TU"],"dt":[]},"af6":{"O":[],"c":[]},"ab0":{"O":[],"c":[]},"ag7":{"O":[],"c":[]},"agq":{"O":[],"c":[]},"TV":{"a2":[],"c":[]},"a3K":{"O":[],"c":[]},"TW":{"a5":["TV"],"dt":[]},"MK":{"aK":[]},"Tq":{"a2":[],"c":[]},"a3C":{"O":[],"c":[]},"aeg":{"a5":["Tq"]},"a3F":{"O":[],"c":[]},"a3G":{"aK":[]},"lv":{"bS":[]},"MF":{"a2":[],"c":[]},"vC":{"aK":[]},"afh":{"a5":["MF"]},"zA":{"O":[],"c":[]},"a3H":{"O":[],"c":[]},"afm":{"O":[],"c":[]},"U4":{"O":[],"c":[]},"zy":{"O":[],"c":[]},"a3M":{"O":[],"c":[]},"a3I":{"O":[],"c":[]},"MN":{"O":[],"c":[]},"VU":{"O":[],"c":[]},"MP":{"O":[],"c":[]},"zB":{"O":[],"c":[]},"afj":{"aK":[]}}'))
A.Ca(b.typeUniverse,JSON.parse('{"rY":1}'))
var y={d:"Joined table, but socket connect failed. Tap JOIN again."}
var x=(function rtii(){var w=A.a1
return{F:w("iR"),M:w("LK"),Q:w("hc"),V:w("w<W>"),O:w("w<d>"),E:w("w<R<f3>>"),R:w("w<R<jl>>"),G:w("w<R<ab<i,@>>>"),e:w("w<vB>"),J:w("w<f3>"),a:w("w<t_>"),b:w("w<jl>"),Y:w("w<ab<i,@>>"),L:w("w<+seatIndex,userId(r,i)>"),x:w("w<cl>"),s:w("w<i>"),p:w("w<c>"),_:w("w<xe>"),n:w("w<J>"),t:w("w<r>"),A:w("w<ab<i,@>?>"),o:w("w<c?>"),u:w("R<hc>"),I:w("R<jl>"),U:w("R<ab<i,@>>"),g:w("R<xe>"),j:w("R<@>"),c:w("ME"),T:w("f3"),W:w("zz"),B:w("q1"),r:w("jl"),P:w("ab<i,@>"),f:w("ab<@,@>"),C:w("as<r,en>"),D:w("as<r,iS<r>>"),w:w("f4"),d:w("bq"),K:w("I"),N:w("i"),Z:w("aC<J>"),i:w("d6<i>"),k:w("d6<r>"),m:w("aQ<R<ab<i,@>>>"),aa:w("dJ<r>"),l:w("c"),aY:w("bh<~>"),d4:w("aP<~>"),q:w("fR"),y:w("K"),z:w("@"),S:w("r"),an:w("jd?"),h:w("ab<i,@>?"),X:w("I?"),v:w("i?"),a3:w("r?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.Pv=new A.cw(-0.6,-1)
D.Py=new A.cw(-0.25,-0.35)
D.PG=new A.cw(0.7,1)
D.PH=new A.cw(-0.35,-0.4)
D.PK=new A.cw(-0.45,-0.55)
D.PP=new A.r7(0,A.a1("r7<J>"))
D.apZ=new A.b8(15,15)
D.Qz=new A.cK(C.a3,D.apZ,G.j8,C.a3)
D.Rm=new A.u(G.kb,null,null,null,null,null,C.G)
D.Ot=new A.z(!0,C.M,null,null,null,null,null,C.S,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aDo=new A.aD("Loading tables\u2026",null,D.Ot,null,null,null,null,null,null,null)
D.TP=new A.cW(C.q,null,null,D.aDo,null)
D.aDD=new A.aD("No tables found",null,D.Ot,null,null,null,null,null,null,null)
D.TR=new A.cW(C.q,null,null,D.aDD,null)
D.alB=new F.rW(160,"Starting\u2026",null)
D.TS=new A.cW(C.q,null,null,D.alB,null)
D.aEz=new A.aD("Session expired",null,C.eA,null,null,null,null,null,null,null)
D.TZ=new A.cW(C.q,null,null,D.aEz,null)
D.a70=new A.cq(H.eT,18,C.h,null,null,null)
D.U_=new A.cW(C.q,null,null,D.a70,null)
D.xa=new A.d(1,0.047058823529411764,0.08627450980392157,0.2,C.e)
D.dw=new A.d(1,0.9019607843137255,0.11764705882352941,0.1450980392156863,C.e)
D.Wq=new A.d(1,0.23137254901960785,0.6196078431372549,1,C.e)
D.xw=new A.d(1,0.07058823529411765,0.07058823529411765,0.1803921568627451,C.e)
D.xC=new A.d(1,0.10196078431372549,0.06274509803921569,0.25098039215686274,C.e)
D.m5=new A.d(1,0.07058823529411765,0.10588235294117647,0.2,C.e)
D.Xg=new A.d(1,0.047058823529411764,0.050980392156862744,0.09411764705882353,C.e)
D.ei=new A.d(1,0.9764705882352941,0.6588235294117647,0,C.e)
D.m6=new A.d(1,1,0.9450980392156862,0.6588235294117647,C.e)
D.XW=new A.d(1,0.0784313725490196,0.08627450980392157,0.17254901960784313,C.e)
D.cO=new A.d(1,0.9764705882352941,0.8313725490196079,0.13725490196078433,C.e)
D.m9=new A.d(1,0.10196078431372549,0.10588235294117647,0.2196078431372549,C.e)
D.mb=new A.d(1,0.07058823529411765,0.07450980392156863,0.16470588235294117,C.e)
D.dW=new A.d(1,0.17647058823529413,0.7019607843137254,0.13725490196078433,C.e)
D.Zk=new A.d(1,0.0392156862745098,0.07058823529411765,0.1568627450980392,C.e)
D.q1=new A.d(1,0.0392156862745098,0.043137254901960784,0.11764705882352941,C.e)
D.q5=new A.d(1,0.3568627450980392,0.17647058823529413,0.5568627450980392,C.e)
D.a_q=new A.d(1,0.9098039215686274,0.8784313725490196,0.8313725490196079,C.e)
D.a_z=new A.d(1,0.0392156862745098,0.0392156862745098,0.10980392156862745,C.e)
D.dx=new A.d(1,0,0.4392156862745098,0.7333333333333333,C.e)
D.aI0=new B.afj(null)
D.a1_=new A.m6(D.aI0,null,C.a8,null,null)
D.a2j=new A.A(0,22,0,0)
D.a2u=new A.A(10,5,12,5)
D.a2C=new A.A(12,2,12,0)
D.zz=new A.A(14,0,14,18)
D.a2M=new A.A(14,8,14,6)
D.a2P=new A.A(16,0,16,12)
D.zC=new A.A(16,0,16,8)
D.a2Y=new A.A(16,8,16,2)
D.a2Z=new A.A(16,8,16,8)
D.a30=new A.A(18,12,18,12)
D.a32=new A.A(18,2,18,10)
D.a33=new A.A(1,0,1,0)
D.a37=new A.A(20,36,20,22)
D.a38=new A.A(22,12,22,12)
D.zH=new A.A(28,8,28,8)
D.a3n=new A.A(32,14,32,14)
D.a3I=new A.A(6,8,6,8)
D.a3V=new A.A(3.5,3.5,3.5,3.5)
D.aJf=new B.WP(M.iJ,I.ma,"100% SECURE","Fair Play Guaranteed",null)
D.a45=new F.en(1,E.cD,D.aJf,null)
D.aI1=new B.afm(null)
D.a4b=new F.mY(E.aq,C.q,D.aI1,null)
D.a5o=new A.aq(61533,"MaterialIcons",!1)
D.a5x=new A.aq(62538,"MaterialIcons",!1)
D.a5y=new A.aq(62589,"MaterialIcons",!1)
D.a64=new A.aq(983202,"MaterialIcons",!1)
D.a67=new A.aq(983450,"MaterialIcons",!1)
D.a6J=new A.cq(E.fs,null,C.h,null,null,null)
D.VL=new A.d(1,0.11764705882352941,0.12156862745098039,0.22745098039215686,C.e)
D.WA=new A.d(1,0.054901960784313725,0.058823529411764705,0.13333333333333333,C.e)
D.ajt=w([D.VL,D.WA],x.O)
D.a8t=new F.ak(E.U,E.a0,C.t,D.ajt,null,null)
D.WP=new A.d(1,0.22745098039215686,0.24313725490196078,0.34509803921568627,C.e)
D.XD=new A.d(1,0.08627450980392157,0.09411764705882353,0.1411764705882353,C.e)
D.a_D=new A.d(1,0.047058823529411764,0.054901960784313725,0.09411764705882353,C.e)
D.afR=w([D.WP,D.XD,D.a_D],x.O)
D.a8w=new F.ak(E.U,E.a0,C.t,D.afR,null,null)
D.V1=new A.d(1,1,0.9921568627450981,0.9725490196078431,C.e)
D.a_e=new A.d(1,0.9411764705882353,0.9215686274509803,0.8784313725490196,C.e)
D.a_U=new A.d(1,0.8784313725490196,0.8470588235294118,0.792156862745098,C.e)
D.afI=w([D.V1,D.a_e,D.a_U],x.O)
D.a8x=new F.ak(C.Q,C.V,C.t,D.afI,null,null)
D.Y6=new A.d(1,0.23921568627450981,0.8627450980392157,0.41568627450980394,C.e)
D.W5=new A.d(1,0.0784313725490196,0.5803921568627451,0.22745098039215686,C.e)
D.ajf=w([D.Y6,D.W5],x.O)
D.a8J=new F.ak(C.Q,C.V,C.t,D.ajf,null,null)
D.af4=w([D.m6,D.cO,X.lV],x.O)
D.a8P=new F.ak(C.Q,C.V,C.t,D.af4,null,null)
D.Y_=new A.d(1,0.9764705882352941,0.9607843137254902,0.9294117647058824,C.e)
D.Ve=new A.d(1,0.9294117647058824,0.9019607843137255,0.8549019607843137,C.e)
D.ZS=new A.d(1,0.8862745098039215,0.8549019607843137,0.796078431372549,C.e)
D.ahd=w([D.Y_,D.Ve,D.ZS],x.O)
D.a8Q=new F.ak(E.U,E.a0,C.t,D.ahd,null,null)
D.a_W=new A.d(1,0.7843137254901961,0.5725490196078431,0.16470588235294117,C.e)
D.aiz=w([D.m6,D.cO,D.a_W],x.O)
D.a8U=new F.ak(C.Q,C.V,C.t,D.aiz,null,null)
D.UH=new A.d(1,0.9568627450980393,0.9411764705882353,0.9098039215686274,C.e)
D.VK=new A.d(1,0.9019607843137255,0.8745098039215686,0.8235294117647058,C.e)
D.afj=w([C.h,D.UH,D.VK],x.O)
D.a8W=new F.ak(E.U,E.a0,C.t,D.afj,null,null)
D.WR=new A.d(1,1,0.9411764705882353,0.7215686274509804,C.e)
D.ahD=w([D.WR,I.b7,I.i7],x.O)
D.a94=new F.ak(C.Q,C.V,C.t,D.ahD,null,null)
D.WK=new A.d(1,0.0784313725490196,0.10588235294117647,0.23137254901960785,C.e)
D.acr=w([D.WK,D.xa],x.O)
D.a9g=new F.ak(E.U,E.a0,C.t,D.acr,null,null)
D.agE=w([G.dX,G.ac],x.O)
D.a9p=new F.ak(E.W,C.a_,C.t,D.agE,null,null)
D.a06=new A.d(1,0.2901960784313726,0.3058823529411765,0.41568627450980394,C.e)
D.UK=new A.d(1,0.11764705882352941,0.12941176470588237,0.21176470588235294,C.e)
D.Va=new A.d(1,0.047058823529411764,0.054901960784313725,0.10196078431372549,C.e)
D.ZK=new A.d(1,0.17254901960784313,0.18823529411764706,0.2823529411764706,C.e)
D.agA=w([D.a06,D.UK,D.Va,D.ZK],x.O)
D.adg=w([0,0.35,0.65,1],x.n)
D.a9s=new F.ak(E.U,E.a0,C.t,D.agA,D.adg,null)
D.a_i=new A.d(1,0.9490196078431372,0.9294117647058824,0.8941176470588236,C.e)
D.Xh=new A.d(1,0.8470588235294118,0.8156862745098039,0.7607843137254902,C.e)
D.agq=w([C.h,D.a_i,D.Xh],x.O)
D.a9w=new F.ak(E.U,E.a0,C.t,D.agq,null,null)
D.afa=w([M.cf,G.ac,X.lV],x.O)
D.a9z=new F.ak(E.U,E.a0,C.t,D.afa,null,null)
D.Bx=w([0,26,39,13],x.t)
D.nl=w([0,3,1,2],x.t)
D.By=w([0,3,2,1],x.t)
D.aab=w([1,2,3,4],x.t)
D.aac=w([1,2,4],x.t)
D.aad=w([1,3],x.t)
D.BD=w([2,3,4],x.t)
D.aay=w([2,4],x.t)
D.aaK=w([D.m6,G.ac],x.O)
D.abm=w(["name","userName","user_name","username","displayName","display_name"],x.s)
D.abz=w([0,0.42,1],x.n)
D.UW=new A.d(0.9019607843137255,0.0392156862745098,0.043137254901960784,0.11764705882352941,C.e)
D.X9=new A.d(0.9411764705882353,0.0784313725490196,0.08235294117647059,0.18823529411764706,C.e)
D.ZD=new A.d(0.9490196078431372,0.0392156862745098,0.043137254901960784,0.11764705882352941,C.e)
D.BH=w([D.UW,D.X9,D.ZD],x.O)
D.aco=w([0,0.4,1],x.n)
D.acN=w(["Sharma","Verma","Patel","Singh","Kumar","Gupta","Mehta","Joshi","Reddy","Nair","Iyer","Chopra","Malhotra","Kapoor","Bansal","Desai","Shah","Khan","Das","Pillai"],x.s)
D.e3=w([D.dw,D.ei,D.dx,D.dW],x.O)
D.Sx=new B.Lz()
D.ada=w([D.Sx],A.a1("w<Lz>"))
D.ali=new B.f3(1,7)
D.alj=new B.f3(2,7)
D.alk=new B.f3(3,7)
D.all=new B.f3(4,7)
D.alm=new B.f3(5,7)
D.aiM=w([D.ali,D.alj,D.alk,D.all,D.alm],x.J)
D.alh=new B.f3(13,7)
D.alg=new B.f3(12,7)
D.alf=new B.f3(11,7)
D.ale=new B.f3(10,7)
D.alx=new B.f3(9,7)
D.aif=w([D.alh,D.alg,D.alf,D.ale,D.alx],x.J)
D.alr=new B.f3(7,13)
D.alq=new B.f3(7,12)
D.alp=new B.f3(7,11)
D.alo=new B.f3(7,10)
D.alw=new B.f3(7,9)
D.aie=w([D.alr,D.alq,D.alp,D.alo,D.alw],x.J)
D.aln=new B.f3(7,1)
D.als=new B.f3(7,2)
D.alt=new B.f3(7,3)
D.alu=new B.f3(7,4)
D.alv=new B.f3(7,5)
D.aiP=w([D.aln,D.als,D.alt,D.alu,D.alv],x.J)
D.adE=w([D.aiM,D.aif,D.aie,D.aiP],x.E)
D.BR=w(["playerIds","player_ids","currentTurnIndex","current_turn_index","nextTurnIndex","next_turn_index","status","winnerId","winner_user_id","gameId","game_id","tableId","table_id","gameType","game_type","bootValue","boot_value","players","gameFinished","game_finished","message","turnExpiresAt","turn_expires_at","turnSecondsLeft","turn_seconds_left","turnTimerEpoch","turn_timer_epoch"],x.s)
D.ae5=w([0,0.28,0.65,1],x.n)
D.WU=new A.d(1,0.4196078431372549,0.22745098039215686,0.6588235294117647,C.e)
D.XV=new A.d(1,0.23921568627450981,0.12156862745098039,0.43137254901960786,C.e)
D.aed=w([D.WU,D.XV],x.O)
D.X4=new A.d(1,0.16470588235294117,0.16862745098039217,0.27058823529411763,C.e)
D.Z4=new A.d(1,0.10196078431372549,0.10588235294117647,0.18823529411764706,C.e)
D.aeo=w([D.X4,D.Z4],x.O)
D.aeu=w([H.i3,C.dh],x.O)
D.no=w(["Red","Yellow","Blue","Green"],x.s)
D.BY=w(["winnerId","winner_user_id","gameFinished","game_finished"],x.s)
D.kN=w([],x.G)
D.C3=w([],x.a)
D.ai0=w(["ludo_online","ludo"],x.s)
D.ai1=w(["ludo_online","ludo",null],A.a1("w<i?>"))
D.aiC=w(["Aarav","Vihaan","Aditya","Kabir","Arjun","Rohan","Ishaan","Vivaan","Reyansh","Shaurya","Karan","Dev","Yash","Ayaan","Rudra","Ananya","Diya","Isha","Kiara","Myra","Saanvi","Aadhya","Anika","Pari","Riya","Meera","Nisha","Pooja","Sneha","Tara"],x.s)
D.aiD=w(["red","yellow","blue","green"],x.s)
D.ajo=w([E.U,Q.fM,E.hM,E.a0],A.a1("w<cw>"))
D.Hf=new B.f3(7,7)
D.alz=new F.rW(96,null,null)
D.iO=new B.a3D(0,"create")
D.Hg=new B.a3D(1,"join")
D.alD=new B.q1(!1,!1,D.C3,null)
D.alC=new B.MM(null)
D.alE=new B.vG(D.alC,null)
D.alF=new B.MR("online","Ludo Online","ludo_online","ludo_online")
D.alG=new B.MR("computer","Ludo vs Computer","ludo_computer","ludo_computer")
D.alH=new B.MR("local","Ludo Local","ludo_local","ludo")
D.Hi=new B.jl(!1,0,!1)
D.tD=new B.jl(!1,56,!0)
D.fx=new B.jl(!0,0,!1)
D.alI=new B.jl(!0,0,!0)
D.aaO=w([4],x.t)
D.a9P=w([0,8],x.t)
D.a9N=w([0,4,8],x.t)
D.a9M=w([0,2,6,8],x.t)
D.ajl=w([0,2,4,6,8],x.t)
D.agD=w([0,2,3,5,6,8],x.t)
D.am3=new A.dd([1,D.aaO,2,D.a9P,3,D.a9N,4,D.a9M,5,D.ajl,6,D.agD],A.a1("dd<r,R<r>>"))
D.iR=new A.dd([1,0,3,1,4,2,2,3],A.a1("dd<r,r>"))
D.ana=new A.k(0,14)
D.anm=new A.k(2,3)
D.ann=new A.k(2,4)
D.anF=new A.k(1.2,1.8)
D.a6y=new A.cq(T.kC,18,C.h,null,null,null)
D.axi=new A.z(!0,C.h,null,null,null,null,13,C.y,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aEU=new A.aD("Play",null,D.axi,null,null,null,null,null,null,null)
D.aaJ=w([D.a6y,M.hA,D.aEU],x.p)
D.as7=new F.ih(C.aU,C.i,E.v,E.j,null,C.cV,null,0,D.aaJ,null)
D.ao3=new A.a4(G.mL,D.as7,null)
D.PC=new A.cw(-0.35,-0.55)
D.a_F=new A.d(1,0.027450980392156862,0.027450980392156862,0.10196078431372549,C.e)
D.adh=w([D.xC,D.a_F],x.O)
D.apR=new K.d5(D.PC,1.15,C.t,null,0,D.adh,null,null)
D.PJ=new A.cw(-0.3,-0.35)
D.a0g=new A.d(1,1,0.9647058823529412,0.7843137254901961,C.e)
D.afz=w([D.a0g,D.cO,X.lV],x.O)
D.apT=new K.d5(D.PJ,0.5,C.t,null,0,D.afz,null,null)
D.aq5=new A.aS(12,12)
D.aq6=new A.aS(12,3)
D.aqe=new A.aS(3,12)
D.LW=new A.aS(3,3)
D.arH=new A.U(0,0,120,36)
D.a6U=new A.cq(T.iI,12,H.aY,null,null,null)
D.Zh=new A.d(1,0.0392156862745098,0.10196078431372549,0.22745098039215686,C.e)
D.aA0=new A.z(!0,D.Zh,null,null,null,null,9,C.E,null,0.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aDw=new A.aD("RECOMMENDED",null,D.aA0,null,null,null,null,null,null,null)
D.afM=w([D.a6U,G.aM,D.aDw],x.p)
D.as2=new F.ih(C.aU,C.i,E.v,E.j,null,C.cV,null,0,D.afM,null)
D.o8=new A.fX([0,8,13,21,26,34,39,47,51],A.a1("fX<r>"))
D.MT=new N.kT("sounds/token_capture.wav")
D.atv=new N.kT("sounds/token_home.wav")
D.ur=new N.kT("sounds/token_move.wav")
D.auX=new A.G(7,null,null,null)
D.ava=new P.PZ(2,12,12,1,96)
D.awx=new A.z(!0,C.h,null,null,null,null,20,C.y,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.axl=new A.z(!0,C.h,null,null,null,null,24,C.E,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.axS=new A.z(!0,C.k9,null,null,null,null,13,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.axW=new A.z(!0,C.h,null,null,null,null,18,C.E,null,0.4,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ay9=new A.z(!0,Z.yT,null,null,null,null,20,C.B,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.azB=new A.z(!0,H.pu,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.azR=new A.z(!0,C.h,null,null,null,null,11.5,C.y,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.azW=new A.z(!0,C.h,null,null,null,null,16,C.E,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aAj=new A.z(!0,C.h,null,null,null,null,24,C.y,null,0.5,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aAM=new A.z(!0,C.h,null,null,null,null,15,C.y,null,0.4,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.VB=new A.d(1,1,0.9568627450980393,0.8235294117647058,C.e)
D.Oi=new A.z(!0,D.VB,null,null,null,null,13,C.y,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.Oq=new A.z(!0,C.h,null,null,null,null,11,C.B,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aC9=new A.z(!0,C.h,null,null,null,null,19,C.S,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.azd=new A.z(!0,C.h,null,null,null,null,28,C.y,null,1,null,null,1.05,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aCW=new A.aD("ONLINE",null,D.azd,null,null,null,null,null,null,null)
D.Zj=new A.d(1,0.35294117647058826,0.22745098039215686,0.03137254901960784,C.e)
D.aBC=new A.z(!0,D.Zj,null,null,null,null,22,C.E,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aCY=new A.aD("\u20b9",null,D.aBC,null,null,null,null,null,null,null)
D.aDc=new A.aD("All four tokens reached home.",null,C.fF,null,null,null,null,null,null,null)
D.aDf=new A.aD("Leave Game?",null,M.Od,C.K,null,null,null,null,null,null)
D.aDk=new A.aD("OK",null,null,null,null,null,null,null,null,null)
D.aDq=new A.aD("Advanced: Join by Table ID",null,I.v0,null,null,null,null,null,null,null)
D.axp=new A.z(!0,C.h,null,null,null,null,14,C.y,null,3.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aDF=new A.aD("LUDO",null,D.axp,null,null,null,null,null,null,null)
D.aAV=new A.z(!0,C.M,null,null,null,null,14,C.S,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aE3=new A.aD("Players",null,D.aAV,null,null,null,null,null,null,null)
D.aAv=new A.z(!0,C.h,null,null,null,null,12,C.y,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aEI=new A.aD("LOBBY STATUS",null,D.aAv,null,null,null,null,null,null,null)
D.ay7=new A.z(!0,C.h,null,null,null,null,30,C.E,null,1.2,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aEV=new A.aD("LUDO",null,D.ay7,null,null,null,null,null,null,null)
D.aCx=new A.z(!0,null,null,null,null,null,18,C.B,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aEZ=new A.aD("CONTINUE",null,D.aCx,null,null,null,null,null,null,null)
D.aHd=new B.ab0(null)
D.aHu=new B.acD(null)
D.aHY=new B.TF(!0,null)
D.aI_=new B.afi(null)
D.aI4=new B.U4(D.dx,null)
D.aI5=new B.U4(D.dw,null)
D.aJh=new B.alv(null)})();(function staticFields(){$.jM=0})();(function lazyInitializers(){var w=a.lazyFinal
w($,"ca0","bM_",()=>A3.jg(new B.bq_(),"ludo",!0,"Ludo"))
w($,"c4J","p6",()=>B.bRi())})()};
(a=>{a["NM4hfCVy1BBaPdnNlGFQklQFsWY="]=a.current})($__dart_deferred_initializers__);