((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,W,A5,A6,A7,A8,A1,N,A9,A2,Aa,X,Ab,Ac,O,M,Ad,L,R,Ae,A3,Af,T,U,Ag,Y,Z,Q,V,Ah,Ai,Aj,A4,A_,B={LN:function LN(){},
bT3(d,e){var w,v,u,t,s,r,q,p=x.N,o=A.bf(p),n=A.F(p,p)
for(p=d.length,w=e+"#",v=0;v<d.length;d.length===p||(0,A.X)(d),++v){u=d[v]
t=u.b
s=u.a
r=S.MW(t,e,s)
q=0
for(;;){if(!(o.t(0,r)&&q<400))break;++q
r=S.MW(t,w+q,s)}o.M(0,r)
n.k(0,t,r)}return n},
bT1(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p,o,n,m,l
if(f)return"You"
w=i>=0?i:g
v=w>=0&&w<h.length?C.c.P(h[w]):""
u=B.bT_(e,j,k)
t=x.A
s=B.bSY(g,w,A.a([e,j],t),v)
if(s.length!==0)return s
r=A.a([],x.L)
for(q=0;q<h.length;++q){p=C.c.P(h[q])
if(p.length===0)continue
if(!B.bT0(A.a([e,j],t),p)){o=C.c.P(p)
n=C.c.bh(o,"bot:")||C.c.bh(o,"robot_")}else n=!0
if(n)r.push(new A.aim(q,p))}if(!d)if(v.length!==0){t=C.b.ee(r,new B.aCr(v))||S.bCU(v)
m=t}else m=!1
else m=!0
if(!m)return""
t=v.length!==0
if(t&&C.b.ee(r,new B.aCs(v))){t=B.bT3(r,u.length!==0?u:C.b.bD(h,",")).h(0,v)
return t==null?S.MW(v,u,w):t}l=t?v:"seat:"+w
return S.MW(l,u.length!==0?u:k,w)},
bT_(d,e,f){var w,v,u,t,s,r,q,p
for(w=[d,e],v=0;v<2;++v){u=w[v]
if(u==null)continue
t=J.M(u)
s=t.h(u,"gameId")
if(s==null)s=t.h(u,"game_id")
r=s==null?null:C.c.P(J.J(s))
if(r==null)r=""
if(r.length!==0)return r}for(w=[d,e],v=0;v<2;++v){u=w[v]
if(u==null)continue
t=J.M(u)
q=t.h(u,"tableId")
if(q==null)q=t.h(u,"table_id")
p=q==null?null:C.c.P(J.J(q))
if(p==null)p=""
if(p.length!==0)return p}return C.c.P(f)},
bSY(d,e,f,g){var w,v,u=d>=0&&d<4?D.akT[d]:""
for(w=0;w<2;++w){v=B.bSZ(f[w],u,e,g)
if(v.length!==0)return v}return""},
bSZ(a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=null
if(a2==null)return""
w=J.M(a2)
v=[w.h(a2,"players"),w.h(a2,"playerList"),w.h(a2,"joinedPlayers")]
for(w=a3.length!==0,u=a5.length!==0,t=x.N,s=x.z,r=x.f,q=x.j,p=0;p<3;++p){o=v[p]
if(!q.b(o))continue
for(n=J.b1(o),m=a1,l=m,k=l;n.A();){j=n.gO(n)
if(!r.b(j))continue
i=A.an(j,t,s)
h=i.h(0,"userId")
if(h==null)h=i.h(0,"user_id")
if(h==null)h=i.h(0,"id")
if(h==null)h=i.h(0,"_id")
g=h==null?a1:C.c.P(J.J(h))
if(u&&g===a5)k=i
f=i.h(0,"seatIndex")
if(f==null)f=i.h(0,"seat_index")
if(typeof f=="number"&&C.d.aj(f)===a4)l=l==null?i:l
h=i.h(0,"ludoColor")
if(h==null)h=i.h(0,"ludo_color")
if(h==null)h=i.h(0,"color")
e=h==null?a1:J.J(h).toLowerCase()
if(w&&e===a3)m=m==null?i:m}d=k==null?l:k
if(d==null)d=m
if(d==null)continue
a0=B.bCT(d)
if(a0.length!==0)return a0}return""},
bT0(d,e){var w,v,u,t,s,r,q,p,o,n,m
for(w=x.f,v=x.j,u=x.N,t=0;t<2;++t){s=d[t]
if(s==null)continue
r=J.M(s)
q=r.h(s,"botPlayerIds")
if(q==null)q=r.h(s,"bot_player_ids")
if(v.b(q)&&J.e0(q,new B.aCq(),u).t(0,e))return!0
p=r.h(s,"players")
if(!v.b(p))continue
for(r=J.b1(p);r.A();){o=r.gO(r)
if(!w.b(o))continue
n=J.M(o)
m=n.h(o,"userId")
if(m==null)m=n.h(o,"user_id")
if((m==null?null:J.J(m))!==e)continue
if(J.f(n.h(o,"isBot"),!0)||J.f(n.h(o,"seatKind"),"bot"))return!0}}return!1},
bCT(d){var w,v,u,t
for(w=0;w<6;++w){v=d.h(0,D.adg[w])
u=v==null?null:C.c.P(J.J(v))
if(u==null)u=""
if(!S.bCV(u))return u}t=d.h(0,"user")
if(x.f.b(t))return B.bCT(A.an(t,x.N,x.z))
return""},
aCr:function aCr(d){this.a=d},
aCs:function aCs(d){this.a=d},
aCq:function aCq(){},
bT5(d){var w=C.b.en(D.nF,d)
if(w<0)return(d+1)%4
return D.nF[C.k.ac(w+1,4)]},
bT4(d,e){var w,v,u
if(e===4)return A.bp(4,!0,!1,x.y)
w=A.bp(4,!1,!1,x.y)
w[d]=!0
if(e===2){w[G.Ca[d]]=!0
return w}for(v=A.aj(w).i("aR<1>"),u=d;new A.aR(w,new B.aCt(),v).gB(0)<3;){u=B.bT5(u)
w[u]=!0}return w},
bT6(d,e){var w,v,u=A.a([],x.t)
for(w=0;w<4;++w){v=D.nF[w]
if(v<4&&d[v])u.push(v)}return u},
aCt:function aCt(){},
N3:function N3(){},
bTh(d){switch(d){case"local":return D.anY
case"computer":return D.anX
case"online":default:return D.anW}},
N6:function N6(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a4b:function a4b(d,e){this.a=d
this.b=e},
t9:function t9(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bTf(d,e){var w,v,u,t,s,r,q,p,o=A.bN("[\\s_-]",!0,!1),n=A.dA(e.toLowerCase(),o,""),m=A.a([],x.a)
for(o=J.b1(d);o.A();){w=o.gO(o)
v=w.a
if(v.length===0)continue
u=w.b
if(u.length!==0){t=A.bN("[\\s_-]",!0,!1)
u=A.dA(u.toLowerCase(),t,"")!==n}else u=!1
if(u)continue
s=C.d.a_(w.c)
r=w.d
r=r>0?r:4
q=w.z
if(q==null)q=w.f.length+w.r.length
p=C.c.P(w.y)
if(p.length!==0)w=p
else w=s>0?"Ludo-"+s:"Table"
m.push(new B.t9(s,r,""+q+" / "+r,w,v))}C.b.ec(m,new B.aDg())
return m},
zG:function zG(d,e,f,g,h){var _=this
_.as=d
_.at=e
_.ax=f
_.a=g
_.b=$
_.c=h
_.d=!1},
aDe:function aDe(d,e){this.a=d
this.b=e},
aDf:function aDf(){},
aDg:function aDg(){},
q7:function q7(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
vN:function vN(d,e){this.c=d
this.a=e},
afY:function afY(){this.c=this.a=null},
brJ:function brJ(){},
N0:function N0(d,e,f){this.c=d
this.d=e
this.a=f},
Ug:function Ug(d,e,f,g,h,i){var _=this
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
_.cM$=h
_.aL$=i
_.c=_.a=null},
baD:function baD(){},
baB:function baB(d,e){this.a=d
this.b=e},
baC:function baC(d){this.a=d},
baA:function baA(d){this.a=d},
ban:function ban(d){this.a=d},
bao:function bao(d){this.a=d},
bai:function bai(d){this.a=d},
baj:function baj(d,e){this.a=d
this.b=e},
bak:function bak(d){this.a=d},
bal:function bal(d){this.a=d},
bam:function bam(d,e,f){this.a=d
this.b=e
this.c=f},
ba9:function ba9(d){this.a=d},
baa:function baa(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bab:function bab(d){this.a=d},
bac:function bac(d){this.a=d},
bad:function bad(d){this.a=d},
bae:function bae(d){this.a=d},
bar:function bar(){},
bas:function bas(d,e,f){this.a=d
this.b=e
this.c=f},
baq:function baq(d,e){this.a=d
this.b=e},
bat:function bat(d){this.a=d},
bau:function bau(d,e){this.a=d
this.b=e},
bah:function bah(){},
baf:function baf(d){this.a=d},
bag:function bag(d){this.a=d},
baw:function baw(){},
baz:function baz(d){this.a=d},
bax:function bax(d){this.a=d},
bav:function bav(){},
bay:function bay(d){this.a=d},
bap:function bap(d){this.a=d},
boY:function boY(d){this.a=d},
Yr:function Yr(){},
and:function and(){},
Ys:function Ys(){},
bGD(d,e,f,g,h,i,j,k){return new B.agx(d,f,g,k,j,h,i,e,null)},
N1:function N1(d){this.a=d},
Uh:function Uh(){this.c=this.a=null},
baE:function baE(d){this.a=d},
baF:function baF(d){this.a=d},
baG:function baG(d){this.a=d},
baH:function baH(d){this.a=d},
ac7:function ac7(d,e){this.c=d
this.a=e},
b01:function b01(d){this.a=d},
U5:function U5(d,e){this.c=d
this.a=e},
b93:function b93(){},
add:function add(d){this.a=d},
afV:function afV(d){this.a=d},
agi:function agi(d,e){this.c=d
this.a=e},
Cn:function Cn(d,e,f){this.c=d
this.d=e
this.a=f},
Ch:function Ch(d,e,f){this.c=d
this.d=e
this.a=f},
aeF:function aeF(d,e,f){this.c=d
this.d=e
this.a=f},
VV:function VV(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
agx:function agx(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
aic:function aic(d,e){this.c=d
this.a=e},
abV:function abV(d,e){this.b=d
this.a=e},
ame:function ame(d){this.a=d},
Xf:function Xf(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
boZ:function boZ(d){this.a=d},
ane:function ane(){},
Yt:function Yt(){},
vL:function vL(d,e){this.c=d
this.a=e},
Ui:function Ui(d,e,f,g){var _=this
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
bbp:function bbp(d){this.a=d},
bbq:function bbq(d,e){this.a=d
this.b=e},
bbr:function bbr(d,e){this.a=d
this.b=e},
bbs:function bbs(d){this.a=d},
bbt:function bbt(d,e){this.a=d
this.b=e},
bbu:function bbu(d){this.a=d},
bbv:function bbv(d){this.a=d},
bbw:function bbw(d){this.a=d},
bbx:function bbx(d,e){this.a=d
this.b=e},
bbG:function bbG(d){this.a=d},
baW:function baW(d,e,f){this.a=d
this.b=e
this.c=f},
bb2:function bb2(d,e){this.a=d
this.b=e},
bbC:function bbC(d,e){this.a=d
this.b=e},
bbl:function bbl(d){this.a=d},
bbD:function bbD(d,e){this.a=d
this.b=e},
bbE:function bbE(d,e){this.a=d
this.b=e},
bbF:function bbF(d,e){this.a=d
this.b=e},
baQ:function baQ(d){this.a=d},
baR:function baR(d){this.a=d},
baS:function baS(d){this.a=d},
baT:function baT(d){this.a=d},
baU:function baU(d){this.a=d},
baV:function baV(d){this.a=d},
baP:function baP(d){this.a=d},
bbb:function bbb(d){this.a=d},
bbc:function bbc(d){this.a=d},
bbd:function bbd(d){this.a=d},
bbe:function bbe(d,e){this.a=d
this.b=e},
bbf:function bbf(d,e,f){this.a=d
this.b=e
this.c=f},
bbg:function bbg(d){this.a=d},
bbh:function bbh(d){this.a=d},
bbi:function bbi(d,e){this.a=d
this.b=e},
bbj:function bbj(d,e){this.a=d
this.b=e},
bbH:function bbH(d){this.a=d},
baX:function baX(d){this.a=d},
baY:function baY(d,e){this.a=d
this.b=e},
baZ:function baZ(d,e){this.a=d
this.b=e},
bb_:function bb_(d){this.a=d},
bb0:function bb0(d){this.a=d},
bb1:function bb1(d){this.a=d},
bb5:function bb5(d){this.a=d},
bb6:function bb6(d){this.a=d},
bb7:function bb7(d){this.a=d},
bb8:function bb8(d,e){this.a=d
this.b=e},
bb9:function bb9(d,e){this.a=d
this.b=e},
bba:function bba(d,e){this.a=d
this.b=e},
bby:function bby(d){this.a=d},
bbz:function bbz(d){this.a=d},
bbA:function bbA(d){this.a=d},
bbB:function bbB(d){this.a=d},
baK:function baK(d,e){this.a=d
this.b=e},
baM:function baM(d){this.a=d},
baL:function baL(d){this.a=d},
baN:function baN(d,e){this.a=d
this.b=e},
baO:function baO(){},
baI:function baI(d){this.a=d},
bbn:function bbn(){},
bbo:function bbo(d){this.a=d},
bbm:function bbm(d,e){this.a=d
this.b=e},
baJ:function baJ(d){this.a=d},
bbI:function bbI(d){this.a=d},
bb3:function bb3(d){this.a=d},
bbk:function bbk(d){this.a=d},
bb4:function bb4(d){this.a=d},
bp_:function bp_(d){this.a=d},
anf:function anf(){},
Yu:function Yu(){},
ES:function ES(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
Uj:function Uj(d,e,f,g,h,i){var _=this
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
_.aW=null
_.am=0
_.C=null
_.a0=!1
_.X=""
_.ah=!1
_.aq=_.a3=null
_.au=10
_.aF=_.aR=_.aX=_.aC=null
_.bx=g
_.cM$=h
_.aL$=i
_.c=_.a=null},
bct:function bct(d){this.a=d},
bcu:function bcu(d){this.a=d},
bcf:function bcf(d){this.a=d},
bce:function bce(d){this.a=d},
bcg:function bcg(d){this.a=d},
bbM:function bbM(d,e){this.a=d
this.b=e},
bbO:function bbO(d,e){this.a=d
this.b=e},
bbY:function bbY(d,e){this.a=d
this.b=e},
bck:function bck(d){this.a=d},
bcl:function bcl(d,e){this.a=d
this.b=e},
bbN:function bbN(d){this.a=d},
bc2:function bc2(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
bci:function bci(d,e){this.a=d
this.b=e},
bc_:function bc_(d){this.a=d},
bbZ:function bbZ(d,e,f){this.a=d
this.b=e
this.c=f},
bcj:function bcj(d,e,f){this.a=d
this.b=e
this.c=f},
bbP:function bbP(d){this.a=d},
bbQ:function bbQ(d){this.a=d},
bc3:function bc3(d){this.a=d},
bc4:function bc4(d){this.a=d},
bc5:function bc5(d){this.a=d},
bc6:function bc6(d){this.a=d},
bc7:function bc7(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bc8:function bc8(d){this.a=d},
bc9:function bc9(d,e){this.a=d
this.b=e},
bca:function bca(){},
bcb:function bcb(d){this.a=d},
bcc:function bcc(d,e){this.a=d
this.b=e},
bcd:function bcd(d){this.a=d},
bch:function bch(d){this.a=d},
bc1:function bc1(d){this.a=d},
bc0:function bc0(d,e,f){this.a=d
this.b=e
this.c=f},
bbK:function bbK(d,e){this.a=d
this.b=e},
bbL:function bbL(d,e,f){this.a=d
this.b=e
this.c=f},
bbJ:function bbJ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bbS:function bbS(d,e){this.a=d
this.b=e},
bbT:function bbT(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
bbU:function bbU(d){this.a=d},
bbV:function bbV(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
bbW:function bbW(d,e,f){this.a=d
this.b=e
this.c=f},
bbX:function bbX(d){this.a=d},
bbR:function bbR(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bco:function bco(d,e,f){this.a=d
this.b=e
this.c=f},
bcn:function bcn(d){this.a=d},
bcp:function bcp(){},
bcq:function bcq(d){this.a=d},
bcr:function bcr(d){this.a=d},
bcs:function bcs(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
bcm:function bcm(d,e,f){this.a=d
this.b=e
this.c=f},
bp0:function bp0(d){this.a=d},
Yv:function Yv(){},
ang:function ang(){},
Yw:function Yw(){},
c_N(d){var w,v,u,t=C.k.p(Math.abs(d)),s=new A.eB("")
for(w=t.length,v=0,u="";v<w;++v){if(v>0&&C.k.ac(w-v,3)===0)u=s.a=u+","
u+=t[v]
s.a=u}return d<0?"-"+s.p(0):u.charCodeAt(0)==0?u:u},
a4c:function a4c(d,e,f){this.c=d
this.d=e
this.a=f},
aDh:function aDh(d){this.a=d},
Uk:function Uk(d,e,f){this.c=d
this.d=e
this.a=f},
afX:function afX(){this.c=this.a=null},
bcE:function bcE(d,e){this.a=d
this.b=e},
bcC:function bcC(d){this.a=d},
bcD:function bcD(d,e){this.a=d
this.b=e},
bcz:function bcz(d,e){this.a=d
this.b=e},
bcy:function bcy(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bcB:function bcB(){},
bcA:function bcA(d,e){this.a=d
this.b=e},
bcx:function bcx(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bcv:function bcv(d,e,f){this.a=d
this.b=e
this.c=f},
bcw:function bcw(d,e,f){this.a=d
this.b=e
this.c=f},
afJ:function afJ(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
b9f:function b9f(){},
Cd:function Cd(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
abB:function abB(d){this.a=d},
agL:function agL(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ah5:function ah5(d,e){this.c=d
this.a=e},
bp1:function bp1(d){this.a=d},
anh:function anh(){},
Yx:function Yx(){},
a4i:function a4i(d,e){this.c=d
this.a=e},
Ul:function Ul(d,e){this.c=d
this.a=e},
Um:function Um(){this.d=2
this.c=this.a=null},
bcI:function bcI(d){this.a=d},
bcK:function bcK(){},
bcJ:function bcJ(d){this.a=d},
bcH:function bcH(d){this.a=d},
bcG:function bcG(d,e){this.a=d
this.b=e},
bcF:function bcF(d,e){this.a=d
this.b=e},
bp2:function bp2(d){this.a=d},
ani:function ani(){},
Yy:function Yy(){},
N_:function N_(d,e){this.b=d
this.a=e},
aCG:function aCG(d){this.a=d},
aCK:function aCK(){},
aCJ:function aCJ(){},
aCL:function aCL(){},
aCI:function aCI(){},
aCH:function aCH(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aCN:function aCN(d){this.a=d},
aCM:function aCM(d){this.a=d},
aCO:function aCO(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aCF:function aCF(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aCE:function aCE(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aCC:function aCC(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aCD:function aCD(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aCB:function aCB(d,e){this.a=d
this.b=e},
bTe(){var w,v,u,t,s,r,q,p,o={}
o.a=o.b=0
w=A.a([],x.J)
v=new B.aD0(o,w)
u=new B.aD1(o,v)
t=new B.aCY(o,v)
s=new B.aD3(o,v)
r=new B.aCW(o,v)
o.b=1
o.a=6
v.$0()
u.$1(4)
new B.aD4(new B.aCV(o,v),s,u,r).$0()
new B.aD2(new B.aD_(o,v),u,r,t).$0()
new B.aCX(new B.aCZ(o,v),r,t,s).$0()
new B.aCU(o,v).$0()
t.$1(5)
s.$1(2)
q=w.length
if(q!==52)throw A.j(A.aY("Ludo track outer ring expected 52 cells, got "+q+" \u2014 check port."))
p=new B.aD5(w,A.a([],x.E))
o.b=0
o.a=7
p.$2(new B.aD6(),new B.aD7(o,u,7,v))
o.b=7
o.a=0
p.$2(new B.aD8(),new B.aD9(o,r,7,v))
o.b=15
o.a=7
p.$2(new B.aDa(),new B.aDb(o,t,7,v))
o.b=7
o.a=15
p.$2(new B.aDc(),new B.aDd(o,s,7,v))
return new B.aCT(A.e7(w,0,A.fl(52,"count",x.S),x.T).eW(0,!1))},
aCP(d){var w
$label0$0:{if(0===d){w=D.My
break $label0$0}if(1===d){w=D.asr
break $label0$0}if(2===d){w=D.asA
break $label0$0}if(3===d){w=D.ass
break $label0$0}w=D.My
break $label0$0}return w},
bTc(d,e){var w=B.aCP(d),v=e===0||e===2?-0.9212500000000001:0.9212500000000001
return w.a+v},
bTd(d,e){var w=B.aCP(d),v=e===0||e===1?-0.9212500000000001:0.9212500000000001
return w.b+v},
f7:function f7(d,e){this.a=d
this.b=e},
aCT:function aCT(d){this.a=d},
aD0:function aD0(d,e){this.a=d
this.b=e},
aD1:function aD1(d,e){this.a=d
this.b=e},
aCY:function aCY(d,e){this.a=d
this.b=e},
aD3:function aD3(d,e){this.a=d
this.b=e},
aCW:function aCW(d,e){this.a=d
this.b=e},
aCV:function aCV(d,e){this.a=d
this.b=e},
aD_:function aD_(d,e){this.a=d
this.b=e},
aCU:function aCU(d,e){this.a=d
this.b=e},
aCZ:function aCZ(d,e){this.a=d
this.b=e},
aD4:function aD4(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aD2:function aD2(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aCX:function aCX(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aD5:function aD5(d,e){this.a=d
this.b=e},
aD6:function aD6(){},
aD7:function aD7(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aD8:function aD8(){},
aD9:function aD9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aDa:function aDa(){},
aDb:function aDb(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aDc:function aDc(){},
aDd:function aDd(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
jq:function jq(d,e,f){this.a=d
this.b=e
this.c=f},
jR:function jR(d){this.a=d},
aCQ:function aCQ(){},
vI:function vI(d,e){this.a=d
this.b=e},
bJa(d,e,f,g,h,i,j,k){var w=Math.max(2,d-k-2),v=Math.max(2,d-j-2)
return new A.l(C.d.S(f*e+h-k/2,2,w),C.d.S(g*e+i-j*0.58,2,v))},
bD_(d,e,f,g,h,i,j,k,l,m){return new B.a4a(k,h,l,i,g,m,e,j,f,d,null)},
bD0(d,e,f,g,h,i){return new B.a4d(h,e,d,g,i,f,null)},
a4l:function a4l(d,e,f){this.a=d
this.b=e
this.c=f},
a4a:function a4a(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
aCS:function aCS(){},
aCR:function aCR(d,e){this.a=d
this.b=e},
TR:function TR(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aeS:function aeS(d,e){var _=this
_.d=$
_.bU$=d
_.ao$=e
_.c=_.a=null},
b7L:function b7L(d){this.a=d},
a4d:function a4d(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
a4e:function a4e(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
xm:function xm(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
Yh:function Yh(){},
aCn(d){var w="application/json",v=x.N
v=A.F(v,v)
v.k(0,"Content-Type",w)
v.k(0,"Accept",w)
if(d.length!==0)v.k(0,"Authorization","Bearer "+d)
v.k(0,"ngrok-skip-browser-warning","true")
return v},
aCo(a1,a2,a3,a4,a5){var w=0,v=A.p(x.c),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$aCo=A.q(function(a6,a7){if(a6===1)return A.m(a7,v)
for(;;)switch(w){case 0:h=A.ce()+"/game-tables"
g=A.bQ(h,0,null)
f=x.N
e=x.z
d=A.aa(["user_id",a5,"token",a4,"boot_value",a1,"no_of_players",a3,"gameType",a2],f,e)
a0=C.O.eC(d,null)
A.cL("POST",d,"ludo_allocate",h)
w=3
return A.e(F.hQ(g,a0,B.aCn(a4)).j8(0,R.eT),$async$aCo)
case 3:t=a7
s=t.b
r=s>=200&&s<300
q=t.e
p=A.aM(A.aL(q))
o=t.w
A.cz(p.af(0,o),"ludo_allocate",s,r,h)
if(!r)throw A.j(B.EQ(B.bCS(t.gju(0)),s))
n=x.h.a(C.O.bB(0,A.aM(A.aL(q)).af(0,o),null))
q=n==null
p=A.cW(q?null:J.D(n,"code"))
m=p==null?null:C.d.aj(p)
if(m==null)m=0
l=q?null:J.D(n,"table_data")
if(m!==200||!x.j.b(l)||J.cn(l)){k=A.aQ(q?null:J.D(n,"message"))
throw A.j(B.EQ(k==null?"Could not join table":k,s))}j=J.fs(l)
if(!x.P.b(j))throw A.j(B.EQ("Invalid table_data",s))
q=J.M(j)
p=A.aQ(q.h(j,"table_id"))
if(p==null)p=A.aQ(q.h(j,"ludo_table_id"))
i=p==null?A.aQ(q.h(j,"_id")):p
if(i==null)i=""
if(i.length===0)throw A.j(B.EQ("Missing table id",s))
A.an(j,f,e)
u=new B.MT(i)
w=1
break
case 1:return A.n(u,v)}})
return A.o($async$aCo,v)},
a47(d,e,f){var w=0,v=A.p(x.P),u,t
var $async$a47=A.q(function(g,h){if(g===1)return A.m(h,v)
for(;;)switch(w){case 0:t=A.d6(2,d,C.a5,!1)
u=B.vH(A.aa(["user_id",f,"userId",f,"token",e],x.N,x.z),"/game-tables/"+t+"/join","ludo_join",e)
w=1
break
case 1:return A.n(u,v)}})
return A.o($async$a47,v)},
bv5(d,e,f,g){var w=0,v=A.p(x.P),u,t,s,r,q
var $async$bv5=A.q(function(h,i){if(h===1)return A.m(i,v)
for(;;)switch(w){case 0:s=C.c.P(e).toUpperCase()
r=d==null?null:C.c.P(d)
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
u=B.vH(q,"/game-tables/join-by-code","ludo_join_by_code",f)
w=1
break
case 1:return A.n(u,v)}})
return A.o($async$bv5,v)},
MV(d,e){return B.bSX(d,e)},
bSX(d,e){var w=0,v=A.p(x.h),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$MV=A.q(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
r=A.ce()+("/game-tables/"+A.d6(2,d,C.a5,!1))
q=A.bQ(r,0,null)
A.cL("GET",null,"ludo_table_get",r)
w=7
return A.e(A.f2(q,B.aCn(e)).j8(0,Y.mU),$async$MV)
case 7:p=g
o=p.b>=200&&p.b<300
n=p.b
m=p
A.cz(A.aM(A.aL(m.e)).af(0,m.w),"ludo_table_get",n,o,r)
if(!o){u=null
w=1
break}n=p
n=B.bCR(A.aM(A.aL(n.e)).af(0,n.w))
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
return A.o($async$MV,v)},
a46(d,e){return B.bSW(d,e)},
bSW(d,e){var w=0,v=A.p(x.h),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$a46=A.q(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
r=A.ce()+("/game-tables/"+A.d6(2,d,C.a5,!1)+"/game-state")
q=A.bQ(r,0,null)
A.cL("GET",null,"ludo_game_state",r)
w=7
return A.e(A.f2(q,B.aCn(e)).j8(0,Y.mU),$async$a46)
case 7:p=g
o=p.b>=200&&p.b<300
m=p.b
l=p
A.cz(A.aM(A.aL(l.e)).af(0,l.w),"ludo_game_state",m,o,r)
if(o){m=p
m=A.aM(A.aL(m.e)).af(0,m.w)==="null"}else m=!0
if(m){u=null
w=1
break}m=p
n=B.bCR(A.aM(A.aL(m.e)).af(0,m.w))
if(n==null){u=null
w=1
break}if(B.bCY(n)!=null){u=null
w=1
break}m=B.ER(n)
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
return A.o($async$a46,v)},
bCR(d){var w,v,u=null,t=C.c.P(d)
if(t.length===0||t==="null")return u
try{w=C.O.bB(0,d,u)
if(x.P.b(w))return w
if(x.f.b(w)){t=A.an(w,x.N,x.z)
return t}}catch(v){return u}return u},
aCp(d,e,f){var w=0,v=A.p(x.P),u,t
var $async$aCp=A.q(function(g,h){if(g===1)return A.m(h,v)
for(;;)switch(w){case 0:t=A.d6(2,d,C.a5,!1)
u=B.vH(A.aa(["user_id",f,"token",e],x.N,x.z),"/game-tables/"+t+"/start-game","ludo_start",e)
w=1
break
case 1:return A.n(u,v)}})
return A.o($async$aCp,v)},
bv8(d,e,f){var w=0,v=A.p(x.P),u,t
var $async$bv8=A.q(function(g,h){if(g===1)return A.m(h,v)
for(;;)switch(w){case 0:t=A.d6(2,d,C.a5,!1)
u=B.vH(A.aa(["user_id",f,"token",e],x.N,x.z),"/game-tables/"+t+"/dice","ludo_dice",e)
w=1
break
case 1:return A.n(u,v)}})
return A.o($async$bv8,v)},
bv7(d,e,f,g,h){var w=0,v=A.p(x.P),u,t
var $async$bv7=A.q(function(i,j){if(i===1)return A.m(j,v)
for(;;)switch(w){case 0:t=A.aa(["user_id",h,"token",f,"token_index",g,"tokenIndex",g],x.N,x.z)
t.k(0,"dice_value",d)
t.k(0,"diceValue",d)
u=B.vH(t,"/game-tables/"+A.d6(2,e,C.a5,!1)+"/move","ludo_move",f)
w=1
break
case 1:return A.n(u,v)}})
return A.o($async$bv7,v)},
bv6(d,e,f){var w=0,v=A.p(x.P),u,t
var $async$bv6=A.q(function(g,h){if(g===1)return A.m(h,v)
for(;;)switch(w){case 0:t=A.d6(2,d,C.a5,!1)
u=B.vH(A.aa(["user_id",f,"token",e],x.N,x.z),"/game-tables/"+t+"/leave-table","ludo_leave",e)
w=1
break
case 1:return A.n(u,v)}})
return A.o($async$bv6,v)},
vH(d,e,f,g){var w=0,v=A.p(x.P),u,t,s,r,q,p,o,n,m,l,k
var $async$vH=A.q(function(h,i){if(h===1)return A.m(i,v)
for(;;)switch(w){case 0:m=A.ce()+e
l=A.bQ(m,0,null)
k=C.O.eC(d,null)
A.cL("POST",d,f,m)
w=3
return A.e(F.hQ(l,k,B.aCn(g)).j8(0,R.eT),$async$vH)
case 3:t=i
s=t.b
r=s>=200&&s<300
q=t.e
p=A.aM(A.aL(q))
o=t.w
A.cz(p.af(0,o),f,s,r,m)
if(!r)throw A.j(B.EQ(B.bCS(t.gju(0)),s))
n=C.O.bB(0,A.aM(A.aL(q)).af(0,o),null)
if(x.P.b(n)){u=n
w=1
break}throw A.j(B.EQ("Invalid JSON",s))
case 1:return A.n(u,v)}})
return A.o($async$vH,v)},
bCS(d){var w,v,u
try{w=x.h.a(C.O.bB(0,d,null))
v=w
v=A.aQ(v==null?null:J.D(v,"message"))
if(v==null){v=w
v=A.aQ(v==null?null:J.D(v,"error"))}if(v==null)v=d
return v}catch(u){v=d.length!==0?d:"Request failed"
return v}},
EQ(d,e){return new B.lC(d)},
MT:function MT(d){this.a=d},
lC:function lC(d){this.a=d},
bCY(d){var w,v=J.M(d),u=v.h(d,"code")
if(typeof u=="number"&&u>=400){v=v.h(d,"message")
v=v==null?null:J.J(v)
return v==null?"Request failed":v}if(J.f(v.h(d,"success"),!1)){v=v.h(d,"message")
w=v==null?null:J.J(v)
if(w!=null&&w.length!==0)return w}return null},
ER(d){var w,v,u,t,s,r,q,p,o="ludoState",n="ludo_state",m=null,l=J.M(d),k=x.f
if(k.b(l.h(d,o))||k.b(l.h(d,n)))return B.aCu(d)
for(w=["data","game","state","payload","result"],v=x.N,u=x.z,t=x.j,s=0;s<5;++s){r=l.h(d,w[s])
if(!k.b(r))continue
q=A.an(r,v,u)
if(k.b(q.h(0,o))||k.b(q.h(0,n))||t.b(q.h(0,"cards"))||q.h(0,"currentTurnIndex")!=null||q.h(0,"current_turn_index")!=null){l=A.EH(m,m,v,u)
l.H(0,d)
l.H(0,q)
return B.aCu(l)}if(k.b(q.h(0,"data"))||k.b(q.h(0,"game"))){l=A.EH(m,m,v,u)
l.H(0,d)
l.H(0,q)
return B.ER(l)}}p=l.h(d,"table")
if(k.b(p)){q=A.an(p,v,u)
if(k.b(q.h(0,o))||k.b(q.h(0,n))){l=A.d8(d,v,u)
l.H(0,q)
return B.aCu(l)}}return B.aCu(d)},
aCu(d){var w,v,u="ludoState",t=J.M(d),s=x.f
if(s.b(t.h(d,u)))return d
w=t.h(d,"ludo_state")
if(s.b(w)){t=x.N
s=x.z
v=A.d8(d,t,s)
v.k(0,u,A.an(w,t,s))
return v}return d},
a49(d){var w,v,u
if(d==null)return!1
w=B.ER(d)
v=J.M(w)
if(x.f.b(v.h(w,"ludoState")))return!0
u=x.j
return u.b(v.h(w,"cards"))&&J.cD(u.a(v.h(w,"cards")))},
t4(d){var w,v,u,t,s,r,q,p,o,n,m="positions"
if(d==null)return D.l0
w=B.ER(d)
v=J.M(w)
u=v.h(w,"ludoState")
t=x.f.b(u)?A.an(u,x.N,x.z):null
s=t==null
r=s?null:t.h(0,"engine")
if(r==null)r=v.h(w,"engine")
q=(r==null?null:J.J(r).toLowerCase())==="board"
if(q&&!s){p=B.bT7(t.h(0,m))
if(p.length!==0)return p}r=[]
s=!s
if(s)r.push(t.h(0,"cards"))
if(s)r.push(t.h(0,"tokens"))
if(s)r.push(t.h(0,"pawns"))
if(!q&&s)r.push(t.h(0,m))
r.push(v.h(w,"cards"))
r.push(v.h(w,"tokens"))
for(v=r.length,o=0;o<r.length;r.length===v||(0,A.X)(r),++o){n=B.bT8(r[o])
if(n.length!==0)return n}return D.l0},
bT7(d){var w,v,u,t,s,r,q,p,o,n=x.j
if(!n.b(d)||J.cn(d))return D.l0
w=A.a([],x.G)
for(v=J.b1(d),u=x.N,t=x.z,s=x.Y;v.A();){r=v.gO(v)
if(!n.b(r))continue
q=A.a([],s)
for(p=J.b1(r);p.A();){o=B.aCx(p.gO(p))
q.push(A.aa(["stepNo",o<0?0:o+1,"packed",!1],u,t))}if(q.length!==0)w.push(q)}return w},
bT8(d){var w,v,u,t,s,r,q,p,o,n,m=x.j
if(m.b(d)){w=A.a([],x.G)
for(v=J.b1(d),u=x.f,t=x.Y;v.A();){s=v.gO(v)
if(m.b(s)){r=A.a([],t)
for(q=J.b1(s);q.A();)r.push(B.a48(q.gO(q)))
w.push(r)}else if(u.b(s))w.push(A.a([B.a48(s)],t))
else if(typeof s=="number"||typeof s=="string")w.push(A.a([B.a48(s)],t))}m=x.m
m=A.af(new A.aR(w,new B.aCv(),m),m.i("N.E"))
return m}if(x.f.b(d)){v=J.bY(d)
u=x.U
p=A.af(new A.dM(J.e0(v.gcD(d),new B.aCw(),x.a3),u),u.i("N.E"))
C.b.hn(p)
if(p.length===0)return D.l0
w=A.a([],x.G)
for(u=p.length,t=x.Y,o=0;o<p.length;p.length===u||(0,A.X)(p),++o){n=p[o]
s=v.h(d,""+n)
if(s==null)s=v.h(d,n)
if(m.b(s)){r=A.a([],t)
for(q=J.b1(s);q.A();)r.push(B.a48(q.gO(q)))
w.push(r)}else w.push(A.a([B.a48(s)],t))}return w}return D.l0},
a48(d){var w,v,u
if(x.f.b(d)){w=A.an(d,x.N,x.z)
if(!w.aw(0,"stepNo")&&!w.aw(0,"step_no")){v=w.h(0,"position")
u=v==null?w.h(0,"pos"):v
if(u==null)u=w.h(0,"cell")
if(u!=null)w.k(0,"stepNo",B.aCx(u))}return w}if(typeof d=="number"||typeof d=="string")return A.aa(["stepNo",B.aCx(d)],x.N,x.z)
return C.cm},
MZ(d){var w=J.M(d),v=w.h(d,"stepNo")
if(v==null)v=w.h(d,"step_no")
if(v==null)v=w.h(d,"position")
if(v==null)v=w.h(d,"pos")
if(v==null)v=w.h(d,"currentPosition")
if(v==null)v=w.h(d,"current_position")
if(v==null)v=w.h(d,"steps")
w=v==null?w.h(d,"step"):v
return B.aCx(w==null?0:w)},
aCx(d){var w
if(typeof d=="number")return C.d.aj(d)
w=A.cF(A.v(d),null)
return w==null?0:w},
bTb(d){var w,v,u,t=A.a([],x.s)
for(w=J.b1(d);w.A();){v=w.gO(w)
u=v==null?null:C.c.P(J.J(v))
if(u==null)u=""
if(L.aDm(u))t.push(u)}return t},
bv9(d,e){var w,v,u=d==null,t=u?null:d.h(0,"playerIds")
if(t==null)t=u?null:d.h(0,"player_ids")
if(x.j.b(t)&&J.cD(t)){w=B.bTb(t)
if(w.length!==0)return w}v=B.bTa(u?null:d.h(0,"players"))
if(v.length!==0)return v
if(e!=null&&J.cD(e))return L.N7(e).c
return C.aa},
MY(d,e){var w=null,v="playerIds",u="player_ids",t="botPlayerIds",s="bot_player_ids",r=A.a([],x.s),q=new B.aCz(r),p=d==null,o=p?w:d.h(0,v)
if(o==null)o=p?w:d.h(0,u)
q.$1(o)
o=p?w:d.h(0,t)
if(o==null)p=p?w:d.h(0,s)
else p=o
q.$1(p)
p=e==null
o=p?w:J.D(e,v)
if(o==null)o=p?w:J.D(e,u)
q.$1(o)
o=p?w:J.D(e,t)
if(o==null)p=p?w:J.D(e,s)
else p=o
q.$1(p)
if(r.length!==0)return r
return B.bv9(d,e)},
q6(d,e){var w,v,u,t,s,r,q,p,o,n=null
if(e.length===0)return-1
w=C.b.en(B.MY(d,n),e)
if(w>=0)return w
v=C.b.en(B.bv9(d,n),e)
if(v>=0)return v
u=d==null?n:d.h(0,"players")
if(x.j.b(u))for(t=J.b1(u),s=x.f;t.A();){r=t.gO(t)
if(!s.b(r))continue
q=J.M(r)
p=q.h(r,"userId")
if(p==null)p=q.h(r,"user_id")
if((p==null?n:J.J(p))!==e)continue
o=q.h(r,"seatIndex")
if(o==null)o=q.h(r,"seat_index")
if(typeof o=="number")return C.d.aj(o)}return-1},
bTa(d){var w,v,u,t,s,r,q,p,o
if(!x.j.b(d)||J.cn(d))return C.aa
w=A.F(x.S,x.N)
for(v=J.b1(d),u=x.f;v.A();){t=v.gO(v)
if(!u.b(t))continue
s=J.M(t)
r=s.h(t,"userId")
if(r==null)r=s.h(t,"user_id")
q=r==null?null:C.c.P(J.J(r))
if(q==null||!L.aDm(q))continue
p=s.h(t,"seatIndex")
if(p==null)p=s.h(t,"seat_index")
if(typeof p=="number")w.k(0,C.d.aj(p),q)}if(w.a===0)return C.aa
v=w.$ti.i("cl<1>")
o=A.af(new A.cl(w,v),v.i("N.E"))
C.b.hn(o)
v=A.aj(o).i("as<1,h>")
v=A.af(new A.as(o,new B.aCy(w),v),v.i("aX.E"))
return v},
oy(d){var w,v,u,t,s
if(d==null)return-1
w=d.h(0,"currentTurnIndex")
if(w==null)w=d.h(0,"current_turn_index")
v=w==null?d.h(0,"nextTurnIndex"):w
if(v==null)v=d.h(0,"next_turn_index")
if(typeof v=="number")return C.d.aj(v)
if(typeof v=="string"){u=A.cF(v,null)
if(u!=null)return u}t=d.h(0,"chaal")
if(typeof t=="string"&&t.length!==0){s=C.b.en(B.bv9(d,null),t)
if(s>=0)return s}return-1},
aCA(d){var w,v=null,u=d==null,t=u?v:J.D(d,"winnerId")
if(t==null)t=u?v:J.D(d,"winner_user_id")
if(t==null)return v
w=C.c.P(J.J(t))
return w.length===0?v:w},
MX(d){var w,v,u
if(d==null)return!1
w=J.M(d)
v=w.h(d,"status")
if((v==null?null:J.J(v))==="waiting")return!0
u=w.h(d,"game_status")
if(u==null)u=w.h(d,"gameStatus")
w=J.fN(u)
if(w.n(u,0)||w.n(u,"0"))return!0
return!1},
oz(d){var w,v,u
if(d==null)return!1
if(B.MX(d))return!1
w=J.M(d)
if(J.f(w.h(d,"gameFinished"),!0)||J.f(w.h(d,"game_finished"),!0))return!0
v=w.h(d,"status")
if((v==null?null:J.J(v))==="finished")return!0
u=w.h(d,"game_status")
if(u==null)u=w.h(d,"gameStatus")
w=J.fN(u)
if(w.n(u,2)||w.n(u,"2"))return!0
return B.aCA(d)!=null},
t3(d){var w,v=d==null?null:d.h(0,"ludoState")
if(x.f.b(v)){w=J.D(v,"phase")
return(w==null?null:J.J(w))==="moving"?"moving":"rolling"}return"rolling"},
vK(d){var w,v,u,t,s=d==null,r=s?null:J.D(d,"ludoState")
if(!x.f.b(r)){w=s?null:J.D(d,"dice")
if(typeof w=="number")return C.d.aj(w)
return 0}v=J.M(r)
u=v.h(r,"lastDice")
t=u==null?v.h(r,"last_dice"):u
if(t==null)t=s?null:J.D(d,"dice")
if(typeof t=="number")return C.d.aj(t)
return 0},
bCW(d,e){var w,v,u,t,s,r,q="status"
if(B.oz(e))return
w=B.MX(e)
v=J.M(e)
u=v.h(e,q)
t=u==null?null:J.J(u)
u=!w
if(!(!u||t==="rolling"||t==="moving"||t==="playing"||B.a49(e))&&u)return
for(s=0;s<4;++s){r=D.Cy[s]
if(J.f(v.h(e,r),!0))continue
d.L(0,r)}if(w){d.k(0,q,"waiting")
d.k(0,"game_status",0)}else{v=d.h(0,q)
if((v==null?null:J.J(v))==="finished"&&t!=="finished")d.k(0,q,t==null?"rolling":t)}},
q5(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f="dice",e="message",d="ludoState",a0="cards",a1="tokens",a2="phase",a3="lastDice",a4="last_dice"
if(a6==null||J.cn(a6))return a5
a6=B.ER(a6)
if(!B.a49(a6)&&a5!=null){w=A.an(a5,x.N,x.z)
for(v=J.M(a6),u=!1,t=0;t<27;++t){s=D.Cq[t]
if(v.aw(a6,s)&&v.h(a6,s)!=null){w.k(0,s,v.h(a6,s))
u=!0}}if(v.h(a6,f)!=null){w.k(0,f,v.h(a6,f))
u=!0}if(v.h(a6,e)!=null){w.k(0,e,v.h(a6,e))
u=!0}if(u){B.bCX(w,a6)
B.bCW(w,a6)}return u?w:a5}v=a5!=null
r=x.N
q=x.z
w=v?A.an(a5,r,q):A.F(r,q)
for(p=J.pg(a6),p=p.gad(p),o=x.f;p.A();){n=p.gO(p)
s=n.a
m=n.b
if(m==null)continue
if(s==="ludoState"&&o.b(m)){l=w.h(0,d)
if(o.b(l)){n=A.an(l,r,q)
k=A.an(m,r,q)
j=A.EH(null,null,r,q)
j.H(0,n)
j.H(0,k)
i=B.t4(A.aa(["ludoState",n],r,q))
h=B.t4(A.aa(["ludoState",k],r,q))
k=h.length===0
if(k&&i.length!==0){if(n.h(0,a0)!=null)j.k(0,a0,n.h(0,a0))
if(n.h(0,a1)!=null)j.k(0,a1,n.h(0,a1))
g=!0}else{g=i.length!==0&&!k&&B.bT9(i,h)
if(g){if(n.h(0,a0)!=null)j.k(0,a0,n.h(0,a0))
if(n.h(0,a1)!=null)j.k(0,a1,n.h(0,a1))}}if(g){if(n.h(0,a2)!=null)j.k(0,a2,n.h(0,a2))
if(n.h(0,a3)!=null)j.k(0,a3,n.h(0,a3))
if(n.h(0,a4)!=null)j.k(0,a4,n.h(0,a4))}w.k(0,d,j)}else w.k(0,d,A.an(m,r,q))
continue}w.k(0,s,m)}if(v)for(t=0;t<27;++t){s=D.Cq[t]
if(C.b.t(D.Cy,s))continue
if(!w.aw(0,s)||w.h(0,s)==null){l=a5.h(0,s)
if(l!=null)w.k(0,s,l)}}B.bCX(w,a6)
B.bCW(w,a6)
return w},
bCX(d,e){var w,v,u="currentTurnIndex",t="current_turn_index",s="nextTurnIndex",r="next_turn_index",q=J.M(e),p=q.h(e,u)
if(p==null)p=q.h(e,t)
w=q.h(e,s)
if(w==null)w=q.h(e,r)
v=p==null?w:p
if(v==null)return
d.k(0,u,v)
d.k(0,t,v)
if(w!=null){d.k(0,s,w)
d.k(0,r,w)}},
bT9(d,e){var w,v,u,t,s,r,q,p,o,n,m=e.length
if(m===0&&d.length!==0)return!0
w=d.length
if(w<m)m=w
for(v=0,u=0,t=0;t<m;++t){s=d[t]
r=e[t]
q=J.M(s)
p=J.M(r)
o=q.gB(s)<p.gB(r)?q.gB(s):p.gB(r)
for(n=0;n<o;++n){v+=B.MZ(q.h(s,n))
u+=B.MZ(p.h(r,n))}}return v>0&&u===0},
aCv:function aCv(){},
aCw:function aCw(){},
aCz:function aCz(d){this.a=d},
aCy:function aCy(d){this.a=d},
vM(){var w=0,v=A.p(x.H)
var $async$vM=A.q(function(d,e){if(d===1)return A.m(e,v)
for(;;)switch(w){case 0:$.jS=$.jS+1
w=2
return A.e(A.hn(),$async$vM)
case 2:return A.n(null,v)}})
return A.o($async$vM,v)},
t6(){var w=0,v=A.p(x.H),u
var $async$t6=A.q(function(d,e){if(d===1)return A.m(e,v)
for(;;)switch(w){case 0:u=$.jS
w=(u>0?$.jS=u-1:u)===0?2:4
break
case 2:w=5
return A.e(A.dU(),$async$t6)
case 5:w=3
break
case 4:w=6
return A.e(A.hn(),$async$t6)
case 6:case 3:return A.n(null,v)}})
return A.o($async$t6,v)},
t7:function t7(){},
vJ:function vJ(d,e){this.b=d
this.a=e},
MU:function MU(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
afU:function afU(d){var _=this
_.d=null
_.e=1
_.f=!1
_.r=d
_.c=_.a=null},
ba4:function ba4(d,e){this.a=d
this.b=e},
ba3:function ba3(d){this.a=d},
ba2:function ba2(){},
ba5:function ba5(d,e){this.a=d
this.b=e},
ba7:function ba7(d){this.a=d},
ba6:function ba6(){},
bD1(d,e,f,g){return new B.a4f(e,f,d,g,null)},
bD2(d,e,f,g,h,i,j,k,l,m,n,o,p){return new B.a4g(d,k,n,g,i,m,o,h,f,l,j,p,!0,null)},
bJ9(d){var w,v,u
for(w=J.b1(d),v=0;w.A();){u=w.gO(w)
if(u.c)v+=40
else if(!u.a)v+=10+C.k.bj(C.k.S(u.b,0,56),4)}return v},
by3(d){return J.mP(d,new B.brI()).gB(0)},
a4f:function a4f(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aDj:function aDj(d){this.a=d},
afZ:function afZ(d){this.a=d},
Uv:function Uv(d,e){this.c=d
this.a=e},
zF:function zF(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
a4k:function a4k(d,e,f){this.c=d
this.d=e
this.a=f},
a4g:function a4g(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
aDk:function aDk(d,e,f){this.a=d
this.b=e
this.c=f},
N2:function N2(d,e,f){this.c=d
this.d=e
this.a=f},
aDi:function aDi(d){this.a=d},
Wk:function Wk(d,e){this.c=d
this.a=e},
zH:function zH(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
N4:function N4(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
brI:function brI(){},
zI:function zI(d,e){this.c=d
this.a=e},
aDn:function aDn(d){this.a=d},
afW:function afW(d){this.a=d},
a4h(d){if(d<2)return 2
if(d>4)return 4
return d},
bTg(d){var w,v,u=B.a4h(d),t=A.bp(4,!1,!1,x.y)
for(w=0;w<u;++w){v=D.j_.h(0,B.N5(w,u))
if(v==null)v=0
if(v<4)t[v]=!0}return t},
N5(d,e){var w,v=B.a4h(e)
if(v===2)w=D.ac6
else w=v===3?D.ac5:D.ac4
if(d<0||d>=w.length)return C.b.gW(w)
return w[d]},
t8(d,e){var w=D.j_.h(0,B.N5(d,e))
return w==null?0:w},
bD3(d,e){var w,v,u=B.a4h(e)
for(w=0;w<u;++w){v=D.j_.h(0,B.N5(w,u))
if((v==null?0:v)===d)return w}return 0},
ayE(d,e,f,g,h){var w=0,v=A.p(x.M),u,t
var $async$ayE=A.q(function(i,j){if(i===1)return A.m(j,v)
for(;;)switch(w){case 0:t=O
w=3
return A.e(B.ayD(d,e,f,g,h),$async$ayE)
case 3:u=t.bBQ(j,d,200,f)
w=1
break
case 1:return A.n(u,v)}})
return A.o($async$ayE,v)},
ayD(d,e,f,g,h){var w=0,v=A.p(x.P),u,t,s,r,q,p,o,n,m,l,k
var $async$ayD=A.q(function(i,j){if(i===1)return A.m(j,v)
for(;;)switch(w){case 0:m=A.ce()+"/game-tables/customise"
l=A.bQ(m,0,null)
k=A.aa(["user_id",h,"token",g,"boot_value",O.bBP(d),"no_of_players",f,"gameType",e],x.N,x.z)
A.cL("POST",k,"game_tables/customise",m)
t=O.ayB(g)
w=3
return A.e(F.hQ(l,C.O.eC(k,null),t),$async$ayD)
case 3:s=j
t=s.b
r=t>=200&&t<300
q=s.e
p=A.aM(A.aL(q))
o=s.w
A.cz(p.af(0,o),"game_tables/customise",t,r,m)
if(!r)throw A.j(O.LZ(O.buF(s.gju(0)),t))
n=C.O.bB(0,A.aM(A.aL(q)).af(0,o),null)
if(!x.P.b(n))throw A.j(O.LZ("Invalid response",t))
u=n
w=1
break
case 1:return A.n(u,v)}})
return A.o($async$ayD,v)},
bTi(d){var w=C.c.P(d)
if(w.length===0||w==="null"||w==="undefined"||w==="0")return!1
return!0},
bxQ(d){var w=N.cv(d)
if(!w.y)w.md()},
bJb(d,e,f){var w,v=L.J3(d),u=v==null?null:v.amX()
if(u==null)u=""
v=d.h(0,"turnTimerEpoch")
if(v==null){v=d.h(0,"turn_timer_epoch")
w=v}else w=v
return""+f+":"+u+":"+A.v(w==null?"":w)+":"+e},
bqR(d){if(d<=0)return 0
return Math.min(10,d)},
c45(d,e){var w=L.byi(d)
if(w>0)return B.bqR(w)
if(e!=null&&e>0)return B.bqR(e)
return 0},
bCZ(d,e){return new F.t5(e,d,null)}},D,S,I,K,Ak,Al,Am,H,An,A0,F,E,P,G,Ao,Ap
J=c[1]
A=c[0]
C=c[2]
W=c[147]
A5=c[151]
A6=c[51]
A7=c[133]
A8=c[163]
A1=c[166]
N=c[62]
A9=c[26]
A2=c[115]
Aa=c[118]
X=c[71]
Ab=c[113]
Ac=c[117]
O=c[39]
M=c[161]
Ad=c[164]
L=c[33]
R=c[162]
Ae=c[168]
A3=c[158]
Af=c[58]
T=c[130]
U=c[67]
Ag=c[98]
Y=c[165]
Z=c[138]
Q=c[97]
V=c[167]
Ah=c[169]
Ai=c[61]
Aj=c[122]
A4=c[64]
A_=c[159]
B=a.updateHolder(c[15],B)
D=c[157]
S=c[27]
I=c[160]
K=c[66]
Ak=c[43]
Al=c[63]
Am=c[85]
H=c[77]
An=c[40]
A0=c[88]
F=c[68]
E=c[72]
P=c[65]
G=c[69]
Ao=c[32]
Ap=c[37]
B.LN.prototype={
n(d,e){if(e==null)return!1
if(J.av(e)!==A.a6(this))return!1
return e instanceof B.LN},
gG(d){return A.ar("tnum",1,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
p(d){return"FontFeature('tnum', 1)"}}
B.N3.prototype={
GB(d,e,f,g,h){return this.b7v(d,e,f,g,h)},
b7v(d,e,f,g,h){var w=0,v=A.p(x.c),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$GB=A.q(function(a0,a1){if(a0===1){s.push(a1)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.e(B.ayE(d,e,f,g,h),$async$GB)
case 7:q=a1
m=r.a4s(q)
u=m
w=1
break
t=2
w=6
break
case 4:t=3
j=s.pop()
m=A.a9(j)
w=m instanceof O.vd?8:10
break
case 8:p=m
t=12
w=15
return A.e(O.yZ(d,null,e,f,g,h),$async$GB)
case 15:o=a1
m=r.a4s(o)
u=m
w=1
break
t=3
w=14
break
case 12:t=11
i=s.pop()
m=A.a9(i)
if(m instanceof O.vd){n=m
m=n.a
k=n.b
throw A.j(B.EQ(m,k))}else throw i
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
return A.o($async$GB,v)},
a4s(d){var w=d.b
A.aa(["table_id",C.b.gW(w).a,"ludo_table_id",C.b.gW(w).a,"gameType",C.b.gW(w).b,"bootValue",C.b.gW(w).c,"noOfPlayers",C.b.gW(w).d],x.N,x.z)
return new B.MT(d.a)}}
B.N6.prototype={}
B.a4b.prototype={
T(){return"LudoOnlineLobbyMode."+this.b}}
B.t9.prototype={
n(d,e){var w,v=this
if(e==null)return!1
if(v!==e)w=e instanceof B.t9&&v.a===e.a&&v.b===e.b&&v.c===e.c&&v.d===e.d&&v.e===e.e
else w=!0
return w},
gG(d){var w=this
return A.ar(w.a,w.b,w.c,w.d,w.e,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)}}
B.zG.prototype={
gaoN(){var w=this.at
if(w>=2)return w>4?4:w
return this.as.a==="computer"?2:4},
hd(){var w=0,v=A.p(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k
var $async$hd=A.q(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=r.c.oo(null,!0,!0,D.CF)
l=r.gF()
if((l.c&4)===0)r.J(m)
q=$.aA
if(q==null||q.length===0){m=r.c.Ai("Please log in to play",!1)
if((l.c&4)===0)r.J(m)
w=1
break}t=4
w=7
return A.e(r.Kr(q),$async$hd)
case 7:p=e
m=r.c.Fr(!1,B.bTf(p,r.as.c))
if((l.c&4)===0)r.J(m)
t=2
w=6
break
case 4:t=3
k=s.pop()
o=A.a9(k)
m=r.c.Al(A.v(o),!0,!1)
if((l.c&4)===0)r.J(m)
w=6
break
case 3:w=2
break
case 6:case 1:return A.n(u,v)
case 2:return A.m(s.at(-1),v)}})
return A.o($async$hd,v)},
Kr(d){return this.aM2(d)},
aM2(d){var w=0,v=A.p(x.u),u,t=this,s,r,q,p,o,n,m
var $async$Kr=A.q(function(e,f){if(e===1)return A.m(f,v)
for(;;)switch(w){case 0:o=t.as.a
n=o==="computer"||o==="local"?A.a([t.gaoN()],x.t):D.Cc
o=x.F
s=A.F(x.N,o)
m=J
w=3
return A.e(A.hi(new A.as(n,new B.aDe(t,d),A.aj(n).i("as<1,am<T<hj>>>")),x.u),$async$Kr)
case 3:o=m.bzk(f,new B.aDf(),o),r=o.$ti,o=new A.n_(J.b1(o.a),o.b,C.i2,r.i("n_<1,2>")),r=r.y[1]
case 4:if(!o.A()){w=5
break}q=o.d
if(q==null)q=r.a(q)
p=q.a
if(p.length===0){w=4
break}s.k(0,p,q)
w=4
break
case 5:o=s.$ti.i("c_<2>")
o=A.af(new A.c_(s,o),o.i("N.E"))
u=o
w=1
break
case 1:return A.n(u,v)}})
return A.o($async$Kr,v)},
B_(d){return this.b7w(d)},
b7w(a2){var w=0,v=A.p(x.v),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$B_=A.q(function(a3,a4){if(a3===1){s.push(a4)
w=t}for(;;)switch(w){case 0:d=$.aA
a0=K.cw()
if(a0==null){k=$.bd
a0=k==null?null:k.a}q=a0
if(d==null||d.length===0||q==null||q.length===0){k=r.c.Fq("Please log in to play",!0)
if((r.gF().c&4)===0)r.J(k)
u=null
w=1
break}k=r.c.mj(null,!0,!0)
j=r.gF()
if((j.c&4)===0)r.J(k)
t=4
i=C.c.P(a2.e)
p=i
w=J.au(p)!==0?7:8
break
case 7:w=9
return A.e(B.a47(p,d,q),$async$B_)
case 9:k=r.c.Fp(!1)
if((j.c&4)===0)r.J(k)
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
return A.e(r.ax.GB(g,k,f,d,q),$async$B_)
case 13:w=11
break
case 12:w=14
return A.e(B.aCo(g,k,f,d,q),$async$B_)
case 14:case 11:o=a4
k=r.c.Fp(!1)
if((j.c&4)===0)r.J(k)
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
if(k instanceof B.lC){n=k
k=r.c.mj(n.a,!0,!1)
if((j.c&4)===0)r.J(k)
u=null
w=1
break}else if(k instanceof O.vd){m=k
k=r.c.mj(m.a,!0,!1)
if((j.c&4)===0)r.J(k)
u=null
w=1
break}else{l=k
k=r.c.mj(A.v(l),!0,!1)
if((j.c&4)===0)r.J(k)
u=null
w=1
break}w=6
break
case 3:w=2
break
case 6:case 1:return A.n(u,v)
case 2:return A.m(s.at(-1),v)}})
return A.o($async$B_,v)},
Fg(d){return this.b_5(d)},
b_5(d){var w=0,v=A.p(x.y),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g
var $async$Fg=A.q(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:i=$.aA
h=K.cw()
if(h==null){m=$.bd
h=m==null?null:m.a}q=h
if(i==null||i.length===0||q==null||q.length===0){m=r.c.Fq("Please log in to play",!0)
if((r.gF().c&4)===0)r.J(m)
u=!1
w=1
break}m=d.a
if(m<=0){m=r.c.Fq("Invalid table boot",!0)
if((r.gF().c&4)===0)r.J(m)
u=!1
w=1
break}l=r.c.mj(null,!0,!0)
k=r.gF()
if((k.c&4)===0)r.J(l)
t=4
l=A.ce()
w=7
return A.e(new F.eK(l).FE(m,"ludo_local_boot:"+m+":"+d.b+":"+q+":"+Date.now(),"game_bet",i,q),$async$Fg)
case 7:p=f
w=8
return A.e(K.fb(p),$async$Fg)
case 8:m=r.c.Fp(!1)
if((k.c&4)===0)r.J(m)
u=!0
w=1
break
t=2
w=6
break
case 4:t=3
g=s.pop()
m=A.a9(g)
if(m instanceof F.pr){o=m
m=r.c.mj(o.a,!0,!1)
if((k.c&4)===0)r.J(m)
u=!1
w=1
break}else{n=m
m=r.c.mj(A.v(n),!0,!1)
if((k.c&4)===0)r.J(m)
u=!1
w=1
break}w=6
break
case 3:w=2
break
case 6:case 1:return A.n(u,v)
case 2:return A.m(s.at(-1),v)}})
return A.o($async$Fg,v)}}
B.q7.prototype={
vS(d,e,f,g,h){var w=this,v=g==null?w.a:g,u=f==null?w.b:f,t=h==null?w.c:h
return new B.q7(v,u,t,e?d:w.d)},
Fq(d,e){return this.vS(d,e,null,null,null)},
mj(d,e,f){return this.vS(d,e,f,null,null)},
Fp(d){return this.vS(null,!1,d,null,null)},
Ai(d,e){return this.vS(d,!1,null,e,null)},
oo(d,e,f,g){return this.vS(d,e,null,f,g)},
Fr(d,e){return this.vS(null,!1,null,d,e)},
Al(d,e,f){return this.vS(d,e,null,f,null)},
gdD(){var w=this
return[w.a,w.b,w.c,w.d]}}
B.vN.prototype={
V(){return new B.afY()}}
B.afY.prototype={
a4(){this.ag()
A.dU()},
u(d){return Ao.bv3("assets/anim/ludo.json",C.l,this.a.c,E.aj,C.bd,!1,0.55)}}
B.N0.prototype={
V(){var w=$.pc(),v=A.bp(4,1,!1,x.S),u=A.a([],x.t)
return new B.Ug(new B.jR(w),v,u,C.bF,null,null)}}
B.Ug.prototype={
a4(){var w,v,u,t,s,r=this,q=null
r.auW()
w=J.il(4,x.y)
for(v=r.a,u=0;t=u<4,t;++u){v.toString
w[u]=t&&v.c[u]}r.d=w
r.a.toString
v=B.bT6(w,q)
r.e=v
if(v.length===0)r.e=A.bL(D.nF,!0,x.S)
w=J.il(4,x.I)
for(v=x.r,s=0;s<4;++s)w[s]=A.bp(4,D.fF,!1,v)
r.f=w
v=new B.baD()
v.$0()
$.at.b9$.push(r)
$.at.am$.push(new B.baB(r,v))
r.cx=A.bb(q,C.iu,0,q,1,q,r)
v=A.bb(q,Q.kE,0,q,1,q,r)
v.hN(0,!0)
r.cy=v
t=x.Z
r.db=new A.aw(A.bO(C.d4,v,q),new A.aE(0.35,1,t),t.i("aw<aO.T>"))
$.at.am$.push(new B.baC(r))},
kJ(d){this.a.toString
return!1},
kT(d){if(d===C.hY||d===C.jM||d===C.hZ)return
if(d===C.cA){if($.jS>0)A.hn()
$.at.am$.push(new B.baA(this))}},
l(){var w,v=this
$.at.he(v)
w=v.cx
w===$&&A.b()
w.l()
w=v.cy
w===$&&A.b()
w.l()
v.auV()},
ghD(){var w=this.e
w===$&&A.b()
return w[C.k.ac(this.w,w.length)]},
vn(){var w=this
if(w.c==null||!w.kJ(w.ghD())||w.Q||w.as||w.ax||w.ay)return
w.vm()},
vm(){var w=0,v=A.p(x.H),u,t=2,s=[],r=[],q=this,p,o,n
var $async$vm=A.q(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.ax){w=1
break}q.ax=!0
t=3
n=x.H
w=6
return A.e(A.cs(A3.r9,null,n),$async$vm)
case 6:if(q.c==null||!q.kJ(q.ghD())||q.Q||q.as){r=[1]
w=4
break}w=7
return A.e(q.z_(!0),$async$vm)
case 7:if(q.c==null||!q.as||!q.kJ(q.ghD())){r=[1]
w=4
break}w=8
return A.e(A.cs(C.hd,null,n),$async$vm)
case 8:if(q.c==null||!q.as||!q.kJ(q.ghD())){r=[1]
w=4
break}p=A.bL(q.at,!0,x.S)
if(J.au(p)===0){q.E(new B.ban(q))
if(q.y===6)q.vn()
else q.S7()
r=[1]
w=4
break}o=q.aQR(q.ghD(),p,q.y)
w=9
return A.e(q.Cz(q.ghD(),o),$async$vm)
case 9:r.push(5)
w=4
break
case 3:r=[2]
case 4:t=2
q.ax=!1
if(q.c!=null)$.at.am$.push(new B.bao(q))
w=r.pop()
break
case 5:case 1:return A.n(u,v)
case 2:return A.m(s.at(-1),v)}})
return A.o($async$vm,v)},
aQR(d,e,f){var w,v,u,t,s,r,q,p,o,n=C.b.gW(e)
for(w=e.length,v=this.CW,u=f===6,t=-2147483647,s=0;s<e.length;e.length===w||(0,A.X)(e),++s){r=e[s]
q=this.f
q===$&&A.b()
p=q[d][r]
q=p.a
o=q&&u?80:0
if(!q){q=p.b
o=(q+f>=56?o+200:o)+q
if(this.agu(d,r,f))o+=120}o+=v.cS(8)
if(o>t){t=o
n=r}}return n},
agu(d,e,f){var w,v,u,t,s,r,q=this,p=q.f
p===$&&A.b()
w=p[d][e]
if(w.a||w.c||w.b>50)return!1
if(w.b+f>50)return!1
p=q.r
v=p.p7(d,w)
v.toString
u=C.k.ac(v+f,52)
if(D.ot.t(0,u))return!1
for(t=0;t<4;++t){if(t!==d){v=q.d
v===$&&A.b()
v=!v[t]}else v=!0
if(v)continue
for(s=0;s<4;++s){r=q.f[t][s]
if(p.p7(t,r)===u&&!r.a&&!r.c)return!0}}return!1},
z_(d){return this.aSS(d)},
aa5(){return this.z_(!1)},
aSS(d){var w=0,v=A.p(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i
var $async$z_=A.q(function(e,f){if(e===1)return A.m(f,v)
for(;;)switch(w){case 0:if(t.Q||t.as||t.ay){w=1
break}s=!d
if(s&&t.kJ(t.ghD())){w=1
break}t.E(new B.bai(t))
if(s)P.dk()
$.bE().bt(0,W.lv)
r=t.CW
q=d?16:14
s=x.H,p=q-2,o=q-4,n=0
case 3:if(!(n<q)){w=5
break}if(t.c==null){w=1
break}m=t.cx
m===$&&A.b()
m.z=C.bH
m.y=m.w=null
m.r.uj(0,!0)
m.Dl(0)
m.aE()
l=m.Q
l===$&&A.b()
if(m.as!==l){m.as=l
m.wS(l)}m.J1(m.b)
new B.baj(t,r).$0()
t.c.dk()
if(d)k=n<o?110:160
else if(n<o)k=85
else{m=n<p?110:140
k=m}w=6
return A.e(A.cs(new A.aU(1000*k),null,s),$async$z_)
case 6:case 4:++n
w=3
break
case 5:if(t.c==null){w=1
break}p=t.cx
p===$&&A.b()
p.sq(0,0)
j=t.ghD()
i=t.y=t.x
t.z[j]=i
t.E(new B.bak(t))
w=7
return A.e(A.cs(A.cb(0,d?800:550,0),null,s),$async$z_)
case 7:if(t.c==null){w=1
break}s=t.f
s===$&&A.b()
if(t.r.a04(s,j,i).length===0){if(t.c==null){w=1
break}t.E(new B.bal(t))
w=1
break}t.E(new B.bam(t,j,i))
if(d){w=1
break}t.vn()
case 1:return A.n(u,v)}})
return A.o($async$z_,v)},
S7(){var w,v,u=this
u.as=!1
u.at=A.a([],x.t)
w=u.w
v=u.e
v===$&&A.b()
u.w=(w+1)%v.length
$.at.am$.push(new B.ba9(u))},
aNH(d,e){var w=this
if(!w.as||d!==w.ghD())return
if(!C.b.t(w.at,e))return
if(w.kJ(w.ghD())||w.ay)return
w.Cz(d,e)},
Cz(d,e){return this.ay2(d,e)},
ay2(d,e){var w=0,v=A.p(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$Cz=A.q(function(f,g){if(f===1)return A.m(g,v)
for(;;)switch(w){case 0:l=t.ghD()
if(d!==l||t.ay){w=1
break}s=t.y
r=t.f
r===$&&A.b()
q=r[l][e]
p=t.agu(l,e,s)
r=t.r
o=r.a05(l,s,q,e)
w=o.length>1?3:4
break
case 3:$.bE().bt(0,D.uX)
t.ay=!0
t.E(new B.baa(t,l,e,o))
n=x.H,m=1
case 5:if(!(m<o.length)){w=7
break}if(t.c==null){t.ay=!1
t.ch=null
w=1
break}t.a.toString
w=8
return A.e(A.cs(new A.aU(11e4),null,n),$async$Cz)
case 8:case 6:++m
w=5
break
case 7:if(t.c!=null)t.E(new B.bab(t))
t.ay=!1
case 4:if(t.c==null){w=1
break}r.agS(t.f,l,s,e)
if(p)$.bE().bt(0,D.Ny)
else if(t.f[l][e].c)$.bE().bt(0,D.avV)
if(r.baF(t.f[l])){t.E(new B.bac(t))
t.aV2(l)
w=1
break}if(s===6){t.E(new B.bad(t))
t.vn()
w=1
break}t.E(new B.bae(t))
case 1:return A.n(u,v)}})
return A.o($async$Cz,v)},
aV2(d){var w,v,u=this,t={}
u.a.toString
w=$.bE()
w.bt(0,X.bN)
u.a.toString
v=D.nI[d]+" wins!"
t.a=new B.bar()
w=u.c
w.toString
F.fO(null,!1,new B.bas(u,v,d),w,x.H).hz(new B.bat(t))
$.at.am$.push(new B.bau(t,u))},
CS(){var w=0,v=A.p(x.H),u=this,t
var $async$CS=A.q(function(d,e){if(d===1)return A.m(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return A.e(F.fO(C.l.j(0.72),!0,new B.bah(),t,x.y),$async$CS)
case 2:if(e===!0&&u.c!=null){t=u.c
t.toString
A.aS(t,!1).bg(0)}return A.n(null,v)}})
return A.o($async$CS,v)},
u(d){var w,v,u,t,s,r,q=this,p=null,o=!q.Q&&!q.as&&!q.kJ(q.ghD())&&!q.ay,n=q.d
n===$&&A.b()
w=new A.aR(n,new B.baw(),A.aj(n).i("aR<1>")).gB(0)
q.a.toString
n=x.p
v=A.a([B.bD1("Local \xb7 Pass & Play",q.gaBR(),new B.bax(d),w)],n)
if(q.Q||q.y>0){u=G.im.j(0.88)
t=A.x(20)
s=F.R(G.a6.j(0.7),1)
v.push(new A.a2(G.rj,A.y(p,A.k(q.Q?"Rolling\u2026":"This turn: "+q.y,p,p,p,p,p,D.OY,p,p),C.f,p,p,new A.t(u,p,s,t,p,p,C.m),p,p,p,p,A_.rq,p,p,p),p))}u=F.Q(new B.N2(A.a([q.Lz(0),q.Lz(1),q.Lz(2),q.Lz(3)],x.o),q.gayK(),p),1)
t=q.Q&&!q.kJ(q.ghD())
if(q.as&&!q.kJ(q.ghD()))s="Pick a token"
else if(q.kJ(q.ghD()))s="Opponent"
else{q.a.toString
s=D.nI[q.ghD()]+"'s Turn"}r=q.as&&!q.kJ(q.ghD())?"Move":"Roll Dice"
v.push(F.Q(F.P(A.a([u,new A.a2(D.a4y,new B.N4(o,new B.bay(q),t,r,s,p),p)],n),E.j,C.i,E.n),1))
return F.bDS(!1,A.cO(p,D.qq,new B.zI(A.cB(!0,F.P(v,E.j,C.i,E.n),C.N,!0),p),p),new B.baz(q),x.K)},
Lz(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.d
k===$&&A.b()
if(!k[d])return null
w=d===l.ghD()
k=D.e7[d]
if(l.kJ(d))v=S.MW("computer:"+d,"",d)
else{l.a.toString
v=D.nI[d]+" Player"}u=l.f
u===$&&A.b()
u=B.bJ9(u[d])
t=w&&l.Q?l.x:l.z[d]
s=w&&l.Q
r=l.cx
r===$&&A.b()
q=l.db
q===$&&A.b()
p=l.kJ(d)
o=w&&!l.as&&!l.kJ(d)&&!l.ay
n=w&&l.as
m=l.f
n=n?"Pick \xb7 Win "+B.by3(m[d])+"/4":"Win "+B.by3(m[d])+"/4"
return B.bD2(k,!0,o,t,q,w,p,v,new B.bap(l),s,u,r,n)},
ayL(d){var w,v,u,t,s,r=this,q=null,p=D.e7[r.ghD()],o=r.d
o===$&&A.b()
w=A.dm(C.fb,q,q,new B.N_(o,q),C.ab)
v=r.f
v===$&&A.b()
u=r.ghD()
t=r.at
s=r.as&&!r.ay
return new B.zH(d,new A.ay(C.C,q,C.at,C.u,A.a([w,B.bD_(r.ch,t,r.gaNG(),D.e7,o,r.r,s,d,v,u)],x.p),q),p,q)}}
B.Yr.prototype={
aZ(){this.bb()
this.b8()
this.di()},
l(){var w=this,v=w.aL$
if(v!=null)v.N(0,w.gdd())
w.aL$=null
w.aa()}}
B.and.prototype={}
B.Ys.prototype={
a4(){this.ag()
B.vM()
$.at.am$.push(new B.boY(this))},
l(){B.t6()
this.auU()}}
B.N1.prototype={
V(){return new B.Uh()}}
B.Uh.prototype={
a4(){this.auY()
$.at.b9$.push(this)},
kT(d){if(d===C.cA)if($.jS>0)A.hn()},
l(){$.at.he(this)
this.auX()},
aMn(){var w,v=this.c
if(v==null)return
w=A.aS(v,!1)
if(w.t0())w.bg(0)},
u(a2){var w,v,u,t,s,r=this,q=null,p=A.bk(a2,C.bJ,x.w).w.a,o=p.a>=640,n=p.b,m=n<520,l=!o||m,k=o?820:420,j=r.gaMm(),i=A.bP(0,A.eZ(C.bm,A.bI(q,new A.t(q,q,q,q,q,new F.ai(C.P,C.V,C.t,A.a([C.l.j(0.72),C.l.j(0.9)],x.O),q,q),C.m),C.Y),C.Q,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,j,q,q,q,q,q,q)),h=o?20:14,g=m?6:12,f=A.x(22),e=F.R(I.ba.j(0.75),1.4),d=A.a([new A.U(1,C.r,I.ba.j(0.14),C.o,28),new A.U(0,C.r,C.l.j(0.55),D.apr,30)],x.V),a0=A.x(21),a1=o?20:16
if(m)w=14
else w=o?20:16
v=o?20:16
if(m)u=12
else u=o?18:16
if(o){t=F.Q(new B.U5(l,q),4)
s=m?10:18
s=new A.zo(F.S(A.a([t,new A.G(s,q,q,q),F.Q(new B.VV(new B.baE(r),new B.baF(r),l,q),6)],x.p),E.a7,C.i,E.n,0),q)
t=s}else t=F.P(A.a([D.aKY,Q.bi,new B.VV(new B.baG(r),new B.baH(r),!0,q)],x.p),E.j,C.i,E.v)
s=x.p
return A.cO(q,C.w,new A.ay(C.C,q,C.K,C.u,A.a([i,A.cB(!0,A.aC(new A.a2(new A.A(h,g,h,g),A.aZ(!1,C.z,!0,q,new A.cP(new A.ad(0,k,0,n*0.92),A.bI(A.dC(a0,new A.ay(C.C,q,C.K,C.u,A.a([new A.a2(new A.A(a1,w,v,u),A.e6(t,q,C.Q,q,G.ei,C.a2),q),A.aH(q,new B.ac7(j,q),q,q,q,8,8,q)],s),q),C.ak,q),new A.t(q,q,e,f,d,D.asa,C.m),C.Y),q),C.f,C.w,0,q,q,q,q,q,C.G),q),q,q),C.N,!0)],s),q),q)}}
B.ac7.prototype={
u(d){var w=null
return new A.G(44,44,A.t1(C.bm,A.bI(D.UT,new A.t(D.y3.j(0.92),w,F.R(I.ba.j(0.85),1.2),w,w,w,C.F),C.Y),w,new B.b01(this),w,w,w),w)}}
B.U5.prototype={
u(d){var w=null,v=this.c,u=v?C.i:C.a1,t=v?12:16,s=K.Gd(C.jO,D.aHO,new B.b93()),r=x.p,q=F.S(A.a([F.Q(A.y(w,w,C.f,I.ba.j(0.45),w,w,w,1,w,w,w,w,w,w),1),new A.a2(E.eY,F.f0(C.p,0.7853981633974483,A.y(w,w,C.f,w,w,new A.t(I.ba,w,w,A.x(1.5),w,w,C.m),w,7,w,w,w,w,w,7)),w),F.Q(A.y(w,w,C.f,I.ba.j(0.45),w,w,w,1,w,w,w,w,w,w),1)],r),E.j,C.i,E.n,0),p=A.k("FRIENDS MULTIPLAYER",w,w,w,w,w,A.B(w,w,G.ij.j(0.95),w,w,w,w,w,w,w,w,11,w,w,C.B,w,w,!0,w,1.4,w,w,w,w,w,w),w,w),o=v?12:16,n=A.ag(M.eu,G.ij.j(0.9),w,w,20),m=C.h.j(0.78)
t=A.a([D.aKt,new A.G(w,t,w,w),s,D.aFE,E.aV,q,E.aH,p,new A.G(w,o,w,w),F.S(A.a([n,H.aT,F.Q(A.k("Play with friends in a private room. Host a table and share your invite code, or join using a code from a friend.",w,w,w,w,w,A.B(w,w,m,w,w,w,w,w,w,w,w,v?12.5:13.5,w,w,C.av,w,1.45,!0,w,w,w,w,w,w,w,w),w,w),1)],r),E.X,C.i,E.n,0)],r)
if(!v)C.b.H(t,A.a([Q.bi,D.aL_],r))
return F.P(t,E.X,u,E.v)}}
B.add.prototype={
u(d){var w,v=null,u=A.x(10),t=x.V
u=F.f0(C.p,0.7853981633974483,A.y(v,v,C.f,v,v,new A.t(v,v,F.R(G.eO.j(0.85),1.6),u,A.a([new A.U(0,C.r,G.eO.j(0.35),C.o,14),new A.U(0,C.r,G.ij.j(0.25),C.o,18)],t),v,C.m),v,42,v,v,v,v,v,42))
w=A.x(8)
t=A.a([new A.U(0,C.r,I.ba.j(0.45),C.o,10)],t)
return new A.G(58,58,new A.ay(C.p,v,C.K,C.u,A.a([u,F.f0(C.p,-0.18,A.y(v,A.dm(v,v,v,new B.vJ(5,v),C.ab),C.f,v,v,new A.t(v,v,v,w,t,D.abq,C.m),v,34,v,v,v,v,v,34))],x.p),v),v)}}
B.afV.prototype={
u(d){var w=null,v=A.aH(4,new B.aeF(G.eO,120,w),w,w,36,w,w,w),u=A.aH(10,new B.agi(100,w),w,w,12,w,w,w),t=A.aH(22,new B.Ch(D.dz,28,w),w,w,78,w,w,w),s=A.aH(36,new B.Ch(D.dC,25.76,w),w,w,104,w,w,w),r=A.aH(8,new B.Ch(D.e1,24.64,w),w,w,92,w,w,w),q=A.aH(18,new B.Ch(D.em,25.2,w),w,w,128,w,w,w),p=A.x(8),o=A.a([new A.U(0,C.r,C.l.j(0.4),D.apE,10),new A.U(0,C.r,G.eO.j(0.35),C.o,14)],x.V)
return new A.G(1/0,118,new A.ay(C.C,w,C.K,C.f,A.a([v,u,t,s,r,q,A.aH(28,F.f0(C.p,0.22,A.y(w,A.dm(w,w,w,new B.vJ(5,w),C.ab),C.f,w,w,new A.t(C.jZ,w,w,p,o,w,C.m),w,44,w,w,w,w,w,44)),w,w,158,w,w,w)],x.p),w),w)}}
B.agi.prototype={
u(d){var w,v,u,t=null,s=this.c,r=A.x(14),q=A.a([D.dz.j(0.55),D.y9,D.dC.j(0.45)],x.O),p=F.R(C.h.j(0.18),1.2),o=A.a([new A.U(0,C.r,G.eO.j(0.3),C.o,18)],x.V),n=s*0.34,m=A.aH(t,new B.Cn(D.dz,n,t),t,t,8,t,8,t),l=s*0.28,k=A.aH(t,new B.Cn(D.e1,l,t),t,t,t,8,8,t)
l=A.aH(8,new B.Cn(D.em,l,t),t,t,8,t,t,t)
n=A.aH(8,new B.Cn(D.dC,n,t),t,t,t,8,t,t)
w=s*0.22
v=C.h.j(0.12)
u=A.x(4)
return A.y(t,new A.ay(C.C,t,C.K,C.u,A.a([m,k,l,n,A.aC(A.y(t,t,C.f,t,t,new A.t(v,t,F.R(I.ba.j(0.5),1),u,t,t,C.m),t,w,t,t,t,t,t,w),t,t)],x.p),t),C.f,t,t,new A.t(t,t,p,r,o,new F.ai(E.U,E.a0,C.t,q,t,t),C.m),t,s,t,t,t,t,t,s)}}
B.Cn.prototype={
u(d){var w=null,v=this.d,u=this.c.j(0.85),t=A.x(6)
return A.y(w,w,C.f,w,w,new A.t(u,w,F.R(C.h.j(0.25),1),t,w,w,C.m),w,v,w,w,w,w,w,v)}}
B.Ch.prototype={
u(d){var w,v,u=null,t=this.d,s=A.x(t*0.35),r=this.c,q=A.a4(r,C.h,0.35)
q.toString
w=A.a4(r,C.l,0.25)
w.toString
w=A.a([q,r,w],x.O)
q=F.R(C.h.j(0.55),1.2)
r=A.a([new A.U(0,C.r,r.j(0.55),H.bq,8)],x.V)
v=t*0.38
return A.y(u,new A.bF(A0.pq,u,u,A.y(u,u,C.f,u,u,new A.t(C.h.j(0.85),u,u,u,u,u,C.F),u,v,u,u,u,u,u,v),u),C.f,u,u,new A.t(u,u,q,s,r,new F.ai(C.P,C.V,C.t,w,u,u),C.m),u,t*1.15,u,u,u,u,u,t)}}
B.aeF.prototype={
u(d){var w=null,v=this.d,u=this.c
return A.y(w,w,C.f,w,w,new A.t(w,w,w,w,w,new K.cN(C.p,0.5,C.t,w,0,A.a([u.j(0.35),u.j(0)],x.O),w,w),C.F),w,v,w,w,w,w,w,v)}}
B.VV.prototype={
u(d){var w=null,v=this.e,u=v?0:8,t=B.bGD(D.Xu,v,G.eO,M.eu,this.c,!0,"Create a private table and share invite code with your friends.","HOST A ROOM"),s=v?10:14,r=B.bGD(I.ba,v,I.ie,D.a7_,this.d,!1,"Enter invite code from your host to join the game.","JOIN A ROOM")
v=v?10:14
return F.P(A.a([new A.G(w,u,w,w),t,new A.G(w,s,w,w),r,new A.G(w,v,w,w),D.aMi],x.p),E.a7,C.i,E.v)}}
B.agx.prototype={
u(a3){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=A.x(16),j=A.x(16),i=x.O,h=A.a([D.y3.j(0.95),D.a0Z],i),g=m.c,f=F.R(g.j(0.9),1.5),e=m.d,d=x.V,a0=A.a([new A.U(0.5,C.r,e.j(0.32),C.o,18)],d),a1=x.p,a2=A.a([A.bP(0,A.dC(A.x(15),A.dm(l,l,l,new B.abV(g.j(0.06),l),C.ab),C.ak,l))],a1)
if(m.x)a2.push(A.aH(l,new B.aic(g,l),l,l,l,0,0,l))
w=m.y
v=w?12:14
u=w?12:18
t=w?12:14
s=w?12:18
r=w?42:50
w=w?42:50
q=A.x(13)
p=A.a([g.j(0.35),g.j(0.1)],i)
o=F.R(g.j(0.55),1)
n=A.a([new A.U(0,C.r,e.j(0.3),C.o,10)],d)
r=A.y(l,A.ag(m.e,g,l,l,24),C.f,l,l,new A.t(l,l,o,q,n,new F.ai(E.U,E.a0,C.t,p,l,l),C.m),l,w,l,l,l,l,l,r)
i=F.Q(F.P(A.a([A.k(m.f,l,l,l,l,l,D.aDq,l,l),H.aw,A.y(l,l,C.f,l,l,new A.t(l,l,l,l,l,new F.ai(E.W,C.a_,C.t,A.a([g.j(0.85),g.j(0)],i),l,l),C.m),l,1.5,l,l,l,l,l,36),H.aw,A.k(m.r,l,l,l,l,l,A.B(l,l,C.h.j(0.55),l,l,l,l,l,l,l,l,12,l,l,C.av,l,1.3,!0,l,l,l,l,l,l,l,l),l,l)],a1),E.X,C.i,E.n),1)
g=F.R(g.j(0.9),1.4)
d=A.a([new A.U(0,C.r,e.j(0.35),C.o,10)],d)
a2.push(new A.a2(new A.A(v,u,t,s),F.S(A.a([r,G.O8,i,E.Z,A.y(l,A.ag(H.iR,C.h.j(0.95),l,l,22),C.f,l,l,new A.t(l,l,g,l,d,l,C.F),l,36,l,l,l,l,l,36)],a1),E.j,C.i,E.n,0),l))
return A.aZ(!1,C.z,!0,l,A.b8(!1,k,!0,K.f_(new A.ay(C.C,l,C.K,C.f,a2,l),l,new A.t(l,l,f,j,a0,new F.ai(E.U,E.a0,C.t,h,l,l),C.m),l,l,l),l,!0,l,l,l,l,l,l,l,l,m.w,l,l,l,l,l,l,l),C.f,C.w,0,l,l,l,l,l,C.G)}}
B.aic.prototype={
u(d){var w=null,v=this.c,u=A.a4(v,C.h,0.25)
u.toString
u=A.a([u,v],x.O)
return A.y(w,D.auq,C.f,w,w,new A.t(w,w,w,D.Rg,A.a([new A.U(0,C.r,v.j(0.4),C.o,8)],x.V),new F.ai(E.W,C.a_,C.t,u,w,w),C.m),w,w,w,w,D.a42,w,w,w)}}
B.abV.prototype={
aH(d,e){var w,v,u,t,s,r,q
$.ah()
w=A.al()
w.r=this.b.gq(0)
w.c=1
for(v=e.a,u=e.b,t=d.a,s=0;s<v;s+=18){r=w.ba()
t.drawLine.apply(t,[s,0,s,u,r])
r.delete()}for(q=0;q<u;q+=18){r=w.ba()
t.drawLine.apply(t,[0,q,v,q,r])
r.delete()}},
cj(d){return!d.b.n(0,this.b)}}
B.ame.prototype={
u(d){var w=null,v=C.l.j(0.28),u=A.x(14),t=F.R(C.h.j(0.08),1)
return A.y(w,F.S(A.a([F.Q(new B.Xf(M.eu,G.ij,"2 OR 4 PLAYERS","Private Lobby",w),1),A.y(w,w,C.f,C.h.j(0.12),w,w,w,32,w,w,w,w,w,1),D.a5G],x.p),E.j,C.i,E.n,0),C.f,w,w,new A.t(v,w,t,u,w,w,C.m),w,w,w,w,G.dD,w,w,w)}}
B.Xf.prototype={
u(d){var w=this,v=null,u=x.p
return F.S(A.a([A.ag(w.c,w.d,v,v,16),E.Z,new F.dP(1,E.b2,F.P(A.a([A.k(w.e,v,1,C.H,v,v,D.aCt,v,v),A.k(w.f,v,1,C.H,v,v,A.B(v,v,C.h.j(0.5),v,v,v,v,v,v,v,v,10,v,v,C.av,v,v,!0,v,v,v,v,v,v,v,v),v,v)],u),E.X,C.i,E.n),v)],u),E.j,C.a1,E.n,0)}}
B.ane.prototype={}
B.Yt.prototype={
a4(){this.ag()
B.vM()
$.at.am$.push(new B.boZ(this))},
l(){B.t6()
this.aa()}}
B.vL.prototype={
V(){var w=$.b5()
return new B.Ui(new F.ej(E.c0,w),new F.ej(new A.dq("100",C.cJ,C.bs),w),new F.ej(E.c0,w),new B.N3())}}
B.Ui.prototype={
a4(){this.av_()
$.at.b9$.push(this)
this.aMy()},
kT(d){if(d===C.cA)if($.jS>0)A.hn()},
l(){var w,v,u,t,s,r=this,q=r.CW
if(q!=null)q.U(0)
q=r.ch
if(q!=null)q.U(0)
w=N.cv("ludo_online")
v=r.cx
if(v!=null)w.d0("getPrivateTable",v)
u=r.cy
if(u!=null)w.d0("roomTrigger",u)
t=r.db
if(t!=null)w.d0("startGame",t)
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
$.at.he(r)
r.auZ()},
gnX(){var w=$.aA,v=K.aoK(w==null?"":w)
if(v!=null&&v.length!==0)return v
w=$.bd
return w==null?null:w.a},
gv6(){var w=L.dj(this.z).b
return C.c.P(w==null?"":w).toUpperCase()},
gjk(){var w=C.c.P(this.f.a.a)
if(!(w.length!==0)){w=L.dj(this.z).a
if(w==null)w=""}return w},
gnW(){return L.dj(this.z).d>0?L.dj(this.z).d:this.e},
z4(d){var w,v,u,t,s=this.gnX()
if(s==null)s=""
w=$.aA
if(w==null)w=""
v=d==null?this.gjk():d
u=A.F(x.N,x.z)
u.k(0,"userId",s)
u.k(0,"user_id",s)
u.k(0,"token",w)
t=v.length!==0
if(t)u.k(0,"tableId",v)
if(t)u.k(0,"table_id",v)
return u},
aMz(){return this.z4(null)},
aMy(){var w,v,u,t,s=this,r="ludo_online"
N.Cw(r)
w=N.cv(r)
v=new B.bbp(s)
u=new B.bbu(s)
t=new B.bbw(s)
s.cx=v
s.cy=u
s.db=t
if(s.a.c===D.iX)w.cF(0,"getPrivateTable",v)
w.cF(0,"roomTrigger",u)
w.cF(0,"startGame",t)},
KB(){if(this.gjk().length===0)return
this.E(new B.bbG(this))},
rp(d){return this.aEf(d)},
aEf(d){var w=0,v=A.p(x.y),u,t=2,s=[],r,q,p,o,n
var $async$rp=A.q(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:o=N.cv("ludo_online")
if(o.y){d.$0()
u=!0
w=1
break}r=new A.bh(new A.aP($.aF,x.d4),x.aY)
q=A.cu()
q.b=new B.baW(o,q,r)
J.apd(o,"connect",q.aM())
if(o.y){o.d0("connect",q.aM())
d.$0()
u=!0
w=1
break}o.md()
t=4
w=7
return A.e(r.a.j8(0,R.eT),$async$rp)
case 7:t=2
w=6
break
case 4:t=3
n=s.pop()
if(A.a9(n) instanceof A.qG){o.d0("connect",q.aM())
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
return A.o($async$rp,v)},
z0(d,e){return this.aEX(d,e)},
UX(d){return this.z0(d,!1)},
aEX(d,e){var w=0,v=A.p(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i,h,g
var $async$z0=A.q(function(f,a0){if(f===1){s.push(a0)
w=t}for(;;)switch(w){case 0:h=$.aA
if(h==null||h.length===0||d.length===0){w=1
break}m=!e
if(m&&q.ax){w=1
break}l=new A.c4(Date.now(),0,!1)
if(m){m=q.ay
m=m!=null&&l.cA(m).a<15e5}else m=!1
if(m){w=1
break}q.ax=!0
q.ay=l
t=4
w=7
return A.e(B.MV(d,h),$async$z0)
case 7:p=a0
if(q.c==null||p==null){r=[1]
w=5
break}k=q.z3(p)
o=k==null?p:k
n=L.dj(o)
if(n.a!=null&&n.a.length!==0){q.E(new B.bb2(q,o))
m=q.f
if(C.c.P(m.a.a).length===0){j=n.a
j.toString
m.sda(0,j)}q.KB()
if(q.DG(o)||q.DG(p)){q.rq()
r=[1]
w=5
break}q.Kz()}r.push(6)
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
return A.o($async$z0,v)},
UY(d){var w=this,v=w.CW
if(v!=null)v.U(0)
if(d.length===0)return
w.UX(d)
w.CW=A.fy(C.bd,new B.bbC(w,d))},
Kz(){var w,v=this
if(!L.dj(v.z).gl0()){v.as=!1
return}w=v.gjk()
if(w.length===0||v.gnX()==null||$.aA==null||v.as)return
v.as=!0
v.E(new B.bbl(v))
v.zF(w)},
a4t(d){var w,v=d.toLowerCase()
if(C.c.t(v,"already"))w=C.c.t(v,"start")||C.c.t(v,"playing")||C.c.t(v,"begun")
else w=!1
return w},
zF(d){return this.aVV(d)},
aVV(d){var w=0,v=A.p(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f
var $async$zF=A.q(function(e,a0){if(e===1){s.push(a0)
w=t}for(;;)switch(w){case 0:h=r.gnX()
g=$.aA
if(h==null||g==null||g.length===0){w=1
break}w=3
return A.e(r.rp(new B.bbD(r,d)),$async$zF)
case 3:if(r.c==null||r.at){w=1
break}t=5
w=8
return A.e(B.aCp(d,g,h),$async$zF)
case 8:q=a0
if(r.c==null||r.at){w=1
break}p=J.D(q,"code")
o=p!=null&&!J.f(p,200)&&!J.f(p,"200")
n=J.f(J.D(q,"success"),!1)||o
if(n){k=J.D(q,"message")
j=k==null?null:J.J(k)
m=j==null?"":j
if(r.a4t(m)){r.rq()
w=1
break}if(J.au(m)!==0){r.as=!1
r.E(new B.bbE(r,m))}w=1
break}r.rq()
t=2
w=7
break
case 5:t=4
f=s.pop()
k=A.a9(f)
if(k instanceof B.lC){l=k
if(r.c==null||r.at){w=1
break}if(r.a4t(l.a)){r.rq()
w=1
break}r.as=!1
r.E(new B.bbF(r,l))}else r.as=!1
w=7
break
case 4:w=2
break
case 7:case 1:return A.n(u,v)
case 2:return A.m(s.at(-1),v)}})
return A.o($async$zF,v)},
rq(){var w,v=this,u="ludo_online",t=v.gjk()
if(t.length===0||v.c==null||v.at)return
v.at=!0
w=v.CW
if(w!=null)w.U(0)
w=v.ch
if(w!=null)w.U(0)
w=v.c
w.toString
O.ZD(w,new B.ES(t,v.d,v.gnW(),u,u,null),x.X)},
Kx(){var w=0,v=A.p(x.H),u,t=this,s,r
var $async$Kx=A.q(function(d,e){if(d===1)return A.m(e,v)
for(;;)switch(w){case 0:t.E(new B.baQ(t))
if(t.gnX()!=null){s=$.aA
s=s==null||s.length===0}else s=!0
if(s){t.E(new B.baR(t))
w=1
break}t.E(new B.baS(t))
w=3
return A.e(t.rp(new B.baT(t)),$async$Kx)
case 3:r=e
if(t.c==null){w=1
break}if(!r){t.E(new B.baU(t))
w=1
break}A.cs(R.r8,new B.baV(t),x.H)
case 1:return A.n(u,v)}})
return A.o($async$Kx,v)},
z2(){var w=0,v=A.p(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f
var $async$z2=A.q(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:r.E(new B.bbb(r))
q=C.c.P(r.f.a.a)
if(J.au(q)===0){r.E(new B.bbc(r))
w=1
break}if(r.gnX()==null||$.aA==null){r.E(new B.bbd(r))
w=1
break}t=4
j={}
i=r.gnX()
i.toString
h=$.aA
h.toString
w=7
return A.e(B.a47(q,h,i),$async$z2)
case 7:p=e
if(r.c==null){w=1
break}j.a=null
o=J.D(p,"table_data")
if(x.j.b(o)&&J.cD(o))j.a=A.aa(["code",200,"table_data",o],x.N,x.z)
else if(x.f.b(J.D(p,"table")))j.a=A.aa(["code",200,"table_data",[J.D(p,"table")]],x.N,x.z)
r.E(new B.bbe(j,r))
n=N.cv("ludo_online")
w=8
return A.e(r.rp(new B.bbf(r,n,q)),$async$z2)
case 8:m=e
if(r.c==null){w=1
break}if(!m){r.E(new B.bbg(r))
w=1
break}w=9
return A.e(r.z0(q,!0),$async$z2)
case 9:r.UY(q)
r.E(new B.bbh(r))
r.KB()
r.Kz()
t=2
w=6
break
case 4:t=3
f=s.pop()
j=A.a9(f)
if(j instanceof B.lC){l=j
if(r.c!=null)r.E(new B.bbi(r,l))}else{k=j
if(r.c!=null)r.E(new B.bbj(r,k))}w=6
break
case 3:w=2
break
case 6:case 1:return A.n(u,v)
case 2:return A.m(s.at(-1),v)}})
return A.o($async$z2,v)},
z3(d){var w,v,u,t,s=J.M(d),r=s.h(d,"table_data"),q=x.j
if(q.b(r)&&J.cD(r))return A.aa(["code",200,"table_data",r],x.N,x.z)
w=s.h(d,"table")
v=x.f
if(v.b(w)){s=x.N
q=x.z
return A.aa(["code",200,"table_data",A.a([A.an(w,s,q)],x.Y)],s,q)}u=s.h(d,"data")
if(v.b(u)){t=this.z3(A.an(u,x.N,x.z))
if(t!=null)return t}if(s.h(d,"table_id")!=null||s.h(d,"_id")!=null||q.b(s.h(d,"playerIds"))||q.b(s.h(d,"player_ids")))return A.aa(["code",200,"table_data",A.a([d],x.Y)],x.N,x.z)
return null},
DG(d){var w,v,u,t,s,r,q,p=null,o="game_status"
if(d==null)return!1
w=J.M(d)
v=w.h(d,"table_data")
if(x.j.b(v)){u=J.M(v)
u=u.gbd(v)&&x.f.b(u.gW(v))}else u=!1
t=u?A.an(x.f.a(J.fs(v)),x.N,x.z):p
u=t==null
s=u?p:t.h(0,"status")
if(s==null)s=w.h(d,"status")
r=s==null?p:J.J(s).toLowerCase()
if(r==="playing"||r==="started"||r==="in_progress")return!0
s=u?p:t.h(0,o)
if(s==null){u=u?p:t.h(0,"gameStatus")
q=u}else q=s
if(q==null)q=w.h(d,o)
w=J.fN(q)
if(w.n(q,1)||w.n(q,"1")||w.n(q,!0))return!0
return!1},
KC(d){var w,v,u=this.z3(d)
u=L.dj(u==null?d:u).a
if(u!=null&&u.length!==0)return u
u=J.M(d)
w=u.h(d,"tableId")
u=w==null?u.h(d,"table_id"):w
v=u==null?null:C.c.P(J.J(u))
if(v!=null&&v.length!==0)return v
return null},
aaa(d){var w,v,u,t=C.c.P(d)
if(t.length===0)return!1
w=this.gnX()
v=C.c.P(w==null?"":w)
if(v.length!==0&&v===t)return!0
w=$.bd
w=w==null?null:w.a
u=C.c.P(w==null?"":w)
return u.length!==0&&u===t},
aMo(d){var w,v=d.toLowerCase()
if(C.c.t(v,"already"))w=C.c.t(v,"seat")||C.c.t(v,"join")||C.c.t(v,"in")
else w=!1
return w},
aaf(d){return C.b.ee(d.c,new B.bbH(this))||d.e>=2},
zn(d){return this.aRJ(d)},
aRJ(d){var w=0,v=A.p(x.h),u,t=this,s,r,q
var $async$zn=A.q(function(e,f){if(e===1)return A.m(f,v)
for(;;)switch(w){case 0:q=$.aA
if(q==null||q.length===0||d.length===0){u=null
w=1
break}w=3
return A.e(B.MV(d,q),$async$zn)
case 3:s=f
if(s==null){u=null
w=1
break}r=t.z3(s)
u=r==null?s:r
w=1
break
case 1:return A.n(u,v)}})
return A.o($async$zn,v)},
DF(d){return this.aTS(d)},
aTS(d){var w=0,v=A.p(x.h),u,t=2,s=[],r=this,q,p,o,n,m
var $async$DF=A.q(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
p=r.gnX()
p.toString
o=$.aA
o.toString
w=7
return A.e(B.a47(d,o,p),$async$DF)
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
if(p instanceof B.lC){q=p
if(r.aMo(q.a)){u=null
w=1
break}throw m}else throw m
w=6
break
case 3:w=2
break
case 6:case 1:return A.n(u,v)
case 2:return A.m(s.at(-1),v)}})
return A.o($async$DF,v)},
z1(d){return this.aFa(d)},
aFa(d){var w=0,v=A.p(x.v),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f
var $async$z1=A.q(function(e,a0){if(e===1){s.push(a0)
w=t}for(;;)switch(w){case 0:g=$.aA
if(g==null||g.length===0){u=null
w=1
break}q=C.c.P(d).toUpperCase()
k=0
case 3:if(!(k<2)){w=5
break}p=D.akb[k]
t=7
w=10
return A.e(O.z_(p,50,r.e,g),$async$z1)
case 10:o=a0
j=J.b1(o)
case 11:if(!j.A()){w=12
break}n=j.gO(j)
if(n.a.length===0){w=11
break}w=13
return A.e(r.zn(n.a),$async$z1)
case 13:m=a0
if(m==null){w=11
break}l=L.dj(m)
i=l.b
if(C.c.P(i==null?"":i).toUpperCase()!==q){w=11
break}if(r.aaf(l)){j=l.a
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
return A.o($async$z1,v)},
pA(d,e){return this.aEu(d,e)},
aEu(d,e){var w=0,v=A.p(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$pA=A.q(function(f,g){if(f===1)return A.m(g,v)
for(;;)switch(w){case 0:l={}
k=l.a=t.z3(d)
j=t.KC(d)
if(j==null){s=C.c.P(e)
j=s.length!==0?s:null}l.b=j
w=j!=null&&j.length!==0?3:5
break
case 3:w=6
return A.e(t.DF(j),$async$pA)
case 6:r=g
if(r!=null){q=t.z3(r)
k=q==null?k:q
l.a=k
p=t.KC(r)
j=p==null?j:p
l.b=j
s=k}else s=k
w=7
return A.e(t.zn(j),$async$pA)
case 7:o=g
if(o!=null){l.a=o
p=L.dj(o).a
j=p==null?j:p
l.b=j
n=j
s=o}else n=j
w=4
break
case 5:n=j
s=k
case 4:if(n==null||n.length===0){t.E(new B.baX(t))
w=1
break}if(s!=null)t.E(new B.baY(l,t))
t.f.sda(0,l.b)
t.UY(l.b)
w=8
return A.e(t.rp(new B.baZ(l,t)),$async$pA)
case 8:m=g
if(t.c==null){w=1
break}if(!m){t.E(new B.bb_(t))
w=1
break}w=9
return A.e(t.z0(l.b,!0),$async$pA)
case 9:if(t.c==null){w=1
break}l=l.a
if(t.DG(l==null?t.z:l)||t.DG(d)){t.E(new B.bb0(t))
t.rq()
w=1
break}t.E(new B.bb1(t))
t.KB()
t.Kz()
case 1:return A.n(u,v)}})
return A.o($async$pA,v)},
lX(){var w=0,v=A.p(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$lX=A.q(function(b0,b1){if(b0===1){s.push(b1)
w=t}for(;;)switch(w){case 0:a6=$.at.R$.d.c
if(a6!=null)a6.iC()
r.E(new B.bb5(r))
q=C.c.P(r.w.a.a).toUpperCase()
if(J.au(q)===0){r.E(new B.bb6(r))
w=1
break}if(r.gnX()==null||$.aA==null){r.E(new B.bb7(r))
w=1
break}t=4
a0={}
w=7
return A.e(r.z1(q),$async$lX)
case 7:p=b1
if(r.c==null){w=1
break}w=p!=null&&p.length!==0?8:9
break
case 8:w=10
return A.e(r.pA(C.cm,p),$async$lX)
case 10:w=1
break
case 9:o=null
a0.a=null
a1=0
case 11:if(!(a1<3)){w=13
break}n=D.akc[a1]
m=null
t=15
a6=r.gnX()
a6.toString
a2=$.aA
a2.toString
w=18
return A.e(B.bv5(n,q,a2,a6),$async$lX)
case 18:m=b1
t=4
w=17
break
case 15:t=14
a7=s.pop()
a6=A.a9(a7)
if(a6 instanceof B.lC){l=a6
a0.a=l
a4=l.a.toLowerCase()
if(A.fr(a4,"already",0)){a6=!0
if(!A.fr(a4,"seat",0))if(!A.fr(a4,"join",0))a6=A.fr(a4,"in",0)}else a6=!1
if(a6){w=13
break}w=12
break}else throw a7
w=17
break
case 14:w=4
break
case 17:o=m
k=r.KC(m)
if(k==null||k.length===0){w=12
break}j=null
t=20
w=23
return A.e(r.DF(k),$async$lX)
case 23:j=b1
t=4
w=22
break
case 20:t=19
a8=s.pop()
a6=A.a9(a8)
if(a6 instanceof B.lC){i=a6
a0.a=i
a4=i.a.toLowerCase()
if(A.fr(a4,"already",0)){a6=!0
if(!A.fr(a4,"seat",0))if(!A.fr(a4,"join",0))a6=A.fr(a4,"in",0)}else a6=!1
if(!a6){w=12
break}}else throw a8
w=22
break
case 19:w=4
break
case 22:if(j!=null){o=j
a5=r.KC(j)
k=a5==null?k:a5}w=24
return A.e(r.zn(k),$async$lX)
case 24:h=b1
if(r.c==null){w=1
break}a6=h
g=L.dj(a6==null?o:a6)
w=r.aaf(g)?25:26
break
case 25:w=27
return A.e(r.pA(o,k),$async$lX)
case 27:w=1
break
case 26:case 12:++a1
w=11
break
case 13:w=28
return A.e(r.z1(q),$async$lX)
case 28:f=b1
if(r.c==null){w=1
break}w=f!=null&&f.length!==0?29:30
break
case 29:w=31
return A.e(r.pA(C.cm,f),$async$lX)
case 31:w=1
break
case 30:r.E(new B.bb8(a0,r))
t=2
w=6
break
case 4:t=3
a9=s.pop()
a6=A.a9(a9)
if(a6 instanceof B.lC){e=a6
if(r.c!=null)r.E(new B.bb9(r,e))}else{d=a6
if(r.c!=null)r.E(new B.bba(r,d))}w=6
break
case 3:w=2
break
case 6:case 1:return A.n(u,v)
case 2:return A.m(s.at(-1),v)}})
return A.o($async$lX,v)},
KA(){var w=0,v=A.p(x.H),u,t=this,s
var $async$KA=A.q(function(d,e){if(d===1)return A.m(e,v)
for(;;)switch(w){case 0:t.E(new B.bby(t))
s=t.gjk()
if(s.length===0){t.E(new B.bbz(t))
w=1
break}if(!L.dj(t.z).gl0()){t.E(new B.bbA(t))
w=1
break}t.E(new B.bbB(t))
t.as=!0
w=3
return A.e(t.zF(s),$async$KA)
case 3:case 1:return A.n(u,v)}})
return A.o($async$KA,v)},
u(d){var w,v,u=this,t=null,s=A.a([A.cB(!0,A.aC(new A.cP(G.wM,u.a.c===D.iX?u.aMr(d):u.aMs(d),t),t,t),C.N,!0)],x.p)
if(u.Q){w=C.l.j(0.55)
v=u.y
s.push(A.bP(0,new A.dl(w,A.aC(B.bCZ(v==null?"Please wait\u2026":v,180),t,t),t)))}return A.cO(t,D.xI,new B.zI(new A.ay(C.C,t,C.K,C.u,s,t),t),t)},
aMr(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=F.eF(d),k=L.dj(n.z),j=L.dj(n.z).gl0()&&!n.Q,i=C.k.S(l.ge3(),14,20),h=n.aa7(d,"CREATE ROOM")
if(n.gjk().length===0)w=0
else w=n.gv6().length===0?1:2
v=x.p
w=A.a([h,E.aV,n.aa6(w,I.Cn)],v)
h=n.x
if(h!=null)C.b.H(w,A.a([H.aG,n.Kw(h,!0)],v))
h=n.y
if(h!=null)C.b.H(w,A.a([H.aG,n.Kw(h,!1)],v))
w.push(H.bY)
h=F.S(A.a([F.Q(n.aMx(),1),H.cX,F.Q(n.aMq(),1)],v),E.X,C.i,E.n,0)
u=n.Q
t=u?"Creating\u2026":"Create Room (Host)"
k=A.a([h,H.bY,n.aMv(I.Bu,t,u?m:n.gaMt()),M.ju,n.aac(k.e)],v)
if(n.gv6().length!==0)C.b.H(k,A.a([H.bY,n.aa9()],v))
k.push(H.bY)
k.push(I.Pj)
k.push(H.aw)
k.push(n.aag())
k.push(H.aG)
h=F.Q(n.aad(H.et,"Copy",n.gjk().length===0?m:new B.baK(n,d)),1)
u=F.Q(n.Ky(!0,M.f0,"JOIN",n.Q?m:n.gaab()),1)
t=j?n.gaMA():m
s=A.x(12)
r=A.x(12)
q=j?G.yr:I.zf
p=F.R(j?I.xv:C.h.j(0.08),1)
o=A.ag(T.kQ,j?C.h:C.b1,m,m,18)
k.push(F.S(A.a([h,E.Z,u,E.Z,F.Q(A.aZ(!1,C.z,!0,m,A.b8(!1,s,!0,K.f_(F.S(A.a([o,G.aN,new F.dP(1,E.b2,A.k("Start Match",m,1,C.H,m,m,A.B(m,m,j?C.h:C.b1,m,m,m,m,m,m,m,m,11,m,m,C.x,m,m,!0,m,0.15,m,m,m,m,m,m),m,m),m)],v),E.j,C.a1,E.n,0),m,new A.t(q,m,p,r,m,m,C.m),46,m,m),m,!0,m,m,m,m,m,m,m,m,t,m,m,m,m,m,m,m),C.f,C.w,0,m,m,m,m,m,C.G),1)],v),E.j,C.i,E.n,0))
w.push(n.aa8(F.P(k,E.a7,C.i,E.n)))
w.push(Q.bi)
w.push(n.aah())
w.push(H.aG)
return A.e6(F.P(w,E.a7,C.i,E.n),m,C.Q,new A.A(i,10,i,10),m,C.a2)},
aMs(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=C.k.S(F.eF(d).ge3(),14,20),h=k.aa7(d,"JOIN ROOM")
if(k.gjk().length===0)w=0
else w=L.dj(k.z).gl0()?2:1
v=x.p
w=A.a([h,E.aV,k.aa6(w,I.Cw)],v)
h=k.x
if(h!=null)C.b.H(w,A.a([H.aG,k.Kw(h,!0)],v))
h=k.y
if(h!=null)C.b.H(w,A.a([H.aG,k.Kw(h,!1)],v))
w.push(H.bY)
h=F.Q(k.aMC(k.w,"Enter code (e.g. A7Q)",new B.baL(k),new B.baM(k),H.lG,C.OF),1)
h=A.a([I.vC,H.aw,F.S(A.a([h,E.Z,new A.G(110,j,k.Ky(!0,M.f0,"JOIN",k.Q?j:k.gaMw()),j)],v),E.j,C.i,E.n,0)],v)
if(k.gv6().length!==0)C.b.H(h,A.a([H.bY,k.aa9()],v))
h.push(M.ju)
h.push(k.aac(L.dj(k.z).e))
h.push(H.bY)
u=A.x(12)
t=C.h.j(0.08)
s=A.x(12)
r=G.a6.j(0.25)
q=C.h.j(0.03)
p=C.h.j(0.03)
o=G.a6.j(0.7)
n=A.k("Use only if you have the host's table ID",j,j,j,j,j,A.B(j,j,C.h.j(0.45),j,j,j,j,j,j,j,j,11,j,j,j,j,j,!0,j,j,j,j,j,j,j,j),j,j)
m=k.aag()
l=F.Q(k.aad(H.et,"Copy",k.gjk().length===0?j:new B.baN(k,d)),1)
h.push(S.bBw(q,A.a([H.aw,m,E.aV,F.S(A.a([l,E.Z,F.Q(k.Ky(!0,M.f0,"JOIN",k.Q?j:k.gaab()),1)],v),E.j,C.i,E.n,0)],v),j,p,o,new A.cA(u,new A.aJ(t,1,C.E,-1)),G.a6,new A.cA(s,new A.aJ(r,1,C.E,-1)),n,C.N,D.aGb))
w.push(k.aa8(F.P(h,E.a7,C.i,E.n)))
w.push(Q.bi)
w.push(k.aah())
w.push(E.aH)
return A.e6(F.P(w,E.a7,C.i,E.n),j,C.Q,new A.A(i,10,i,10),j,C.a2)},
aa7(d,e){var w,v,u,t,s=this,r=null,q=x.p,p=A.a([s.aMp(d),H.bZ],q)
if(s.gjk().length!==0)w=L.dj(s.z).gl0()||s.DG(s.z)
else w=!1
if(w)p.push(P.B9(A.ag(D.a7I,G.a6,r,r,18),A.k("Enter Match",r,r,r,r,r,A.B(r,r,G.a6.j(0.95),r,r,r,r,r,r,r,r,13,r,r,C.B,r,r,!0,r,r,r,r,r,r,r,r),r,r),s.gaMu(),r))
p=F.S(p,E.j,C.i,E.n,0)
w=A.a([G.e2.j(0.35),G.a6.j(0.18)],x.O)
v=A.x(16)
u=F.R(G.a6.j(0.45),1)
w=A.y(r,A.ag(G.tl,G.e2,r,r,28),C.f,r,r,new A.t(r,r,u,v,r,new F.ai(E.W,C.a_,C.t,w,r,r),C.m),r,52,r,r,r,r,r,52)
v=K.Gd(C.jO,D.aGr,new B.baO())
u=A.k(e,r,r,r,r,r,D.aCX,C.M,r)
t=s.a.c===D.iX?"Set stakes and invite friends":"Enter invite code from your host"
return F.P(A.a([p,E.aH,w,E.aV,v,Q.aZ,u,Q.aZ,A.k(t,r,r,r,r,r,A.B(r,r,C.h.j(0.5),r,r,r,r,r,r,r,r,13,r,r,C.av,r,r,!0,r,r,r,r,r,r,r,r),C.M,r)],q),E.j,C.i,E.n)},
aMp(d){var w=null,v=A.x(12),u=A.x(12),t=F.R(G.a6.j(0.75),1.5),s=C.l.j(0.35)
return A.aZ(!1,C.z,!0,w,A.b8(!1,v,!0,A.y(w,A.ag(H.bL,G.a6,w,w,18),C.f,w,w,new A.t(s,w,t,u,w,w,C.m),w,44,w,w,w,w,w,44),w,!0,w,w,w,w,w,w,w,w,new B.baI(d),w,w,w,w,w,w,w),C.f,C.w,0,w,w,w,w,w,C.G)},
aa6(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=x.p,j=A.a([],k)
for(w=x.O,v=x.V,u=0;u<3;++u){t=A.a([],k)
if(u>0){s=u<=d?A.a([G.a6.j(0.15),G.a6.j(0.55)],w):A.a([C.h.j(0.06),C.h.j(0.06)],w)
r=new A.b9(1,1)
t.push(new F.ed(1,E.cl,A.y(l,l,C.f,l,l,new A.t(l,l,l,new A.cM(r,r,r,r),l,new F.ai(E.W,C.a_,C.t,s,l,l),C.m),l,2,l,I.A_,l,l,l,l),l))}s=e[u]
r=I.C9[u]
q=u<=d
p=u===d
if(q)o=G.a6.j(p?0.28:0.14)
else o=C.h.j(0.05)
if(p)n=G.e2
else n=q?G.a6.j(0.55):C.h.j(0.15)
m=new A.aJ(n,p?2:1.5,C.E,-1)
n=p?A.a([new A.U(0,C.r,G.a6.j(0.25),C.o,10)],v):l
r=A.y(l,A.ag(r,q?G.e2:C.b1,l,l,17),C.f,l,l,new A.t(o,l,new A.cy(m,m,m,m),l,n,l,C.F),l,38,l,l,l,l,l,38)
if(p)q=C.h
else q=q?C.h.j(0.75):C.b1
p=p?C.B:C.R
t.push(F.P(A.a([r,H.aw,new A.G(76,l,A.k(s,l,2,C.H,l,l,new A.z(!0,q,l,l,l,l,10,p,l,l,l,l,1.15,l,l,l,l,l,l,l,l,l,l,l,l,l),C.M,l),l)],k),E.j,C.i,E.v))
C.b.H(j,t)}return new A.a2(E.ce,F.S(j,E.j,C.i,E.n,0),l)},
aa8(d){var w=null,v=A.x(22)
return A.y(w,d,C.f,w,w,new A.t(w,w,F.R(I.ie.j(0.5),1.5),v,A.a([new A.U(0,C.r,G.a6.j(0.1),C.o,28),new A.U(0,C.r,C.l.j(0.5),G.o1,24)],x.V),D.ab7,C.m),w,w,w,w,Aj.Aa,w,w,w)},
aMx(){var w,v=null,u=A.x(12),t=F.R(C.h.j(0.12),1),s=this.e,r=A.ag(I.Bh,G.a6.j(0.9),v,v,v),q=x.D
q=A.af(new A.as(D.acr,new B.bbn(),q),q.i("aX.E"))
w=this.Q?v:new B.bbo(this)
return F.P(A.a([I.Pl,H.aw,A.y(v,new P.yC(P.bum(D.a_H,v,r,!0,q,w,I.vx,s,x.S),v),C.f,v,v,new A.t(D.mi,v,t,u,v,v,C.m),v,v,v,v,E.fx,v,v,v)],x.p),E.X,C.i,E.n)},
aMq(){return F.P(A.a([I.Pi,H.aw,this.aMB(this.r,"100",E.jw,new B.baJ(this))],x.p),E.X,C.i,E.n)},
aae(d,e,f,g,h,i,j){var w=null,v=A.B(w,w,C.h.j(0.35),w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,w,w,w,w,w,w,w)
return F.nF(w,C.aa,!1,w,!0,C.u,w,F.pb(),d,w,w,w,w,w,2,F.os(w,w,w,G.ep,w,w,w,w,!0,new U.ei(4,A.x(12),new A.aJ(C.h.j(0.12),1,C.E,-1)),w,w,w,w,w,D.mi,!0,w,w,w,w,new U.ei(4,A.x(12),new A.aJ(G.a6.j(0.65),1,C.E,-1)),w,w,w,w,w,w,w,w,v,e,w,w,w,w,w,w,w,w,w,!0,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w),C.Q,!0,w,!0,w,!1,w,E.cx,w,w,w,w,f,w,w,w,1,w,w,!1,"\u2022",w,g,w,h,w,!1,w,w,!1,w,!0,w,E.dn,w,w,w,w,w,w,w,w,w,w,w,I.vx,!0,C.b0,w,i,w,j,w,w)},
aMC(d,e,f,g,h,i){return this.aae(d,e,null,f,g,h,i)},
aMB(d,e,f,g){return this.aae(d,e,f,g,null,E.dt,null)},
aag(){var w=null,v=A.B(w,w,C.h.j(0.35),w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,w,w,w,w,w,w,w)
return F.nF(w,C.aa,!1,w,!0,C.u,w,F.pb(),this.f,w,w,w,w,w,2,F.os(w,w,w,G.ep,w,w,w,w,!0,new U.ei(4,A.x(12),new A.aJ(C.h.j(0.12),1,C.E,-1)),w,w,w,w,w,D.mi,!0,w,w,w,w,new U.ei(4,A.x(12),new A.aJ(G.a6.j(0.65),1,C.E,-1)),w,w,w,w,w,w,w,w,v,"Enter Table ID",w,w,w,w,w,w,w,w,w,!0,!0,w,w,w,w,w,w,w,w,A.ag(I.Bk,G.a6.j(0.75),w,w,w),w,w,w,w,w),C.Q,!0,w,!0,w,!1,w,E.cx,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,new B.bbI(this),w,w,w,!1,w,w,!1,w,!0,w,E.dn,w,w,w,w,w,w,w,w,w,w,w,I.vu,!0,C.b0,w,E.dt,w,w,w,w)},
Ky(d,e,f,g){var w,v,u,t=null,s=g!=null,r=s?new B.bb3(g):t,q=A.x(d?12:14),p=d?46:52,o=A.x(d?12:14),n=x.O
n=s?new F.ai(E.W,C.a_,C.t,A.a([G.e2.j(0.95),C.q,I.yy],n),t,t):new F.ai(E.W,C.a_,C.t,A.a([C.h.j(0.08),C.h.j(0.05)],n),t,t)
w=s?A.a([new A.U(0,C.r,G.a6.j(0.35),E.cG,12)],x.V):t
v=d?16:20
v=A.ag(e,s?C.ac:C.b1,t,t,v)
u=s?G.im:C.b1
return A.aZ(!1,C.z,!0,t,A.b8(!1,q,!0,K.f_(F.S(A.a([v,H.aU,new F.dP(1,E.b2,A.k(f,t,1,C.H,t,t,A.B(t,t,u,t,t,t,t,t,t,t,t,d?12:14,t,t,C.x,t,t,!0,t,0.2,t,t,t,t,t,t),t,t),t)],x.p),E.j,C.a1,E.n,0),t,new A.t(t,t,t,o,w,n,C.m),p,t,t),t,!0,t,t,t,t,t,t,t,t,r,t,t,t,t,t,t,t),C.f,C.w,0,t,t,t,t,t,C.G)},
aMv(d,e,f){return this.Ky(!1,d,e,f)},
aad(d,e,f){var w=null,v=f!=null,u=v?G.e2:C.b1,t=v?G.a6:H.bQ
t=A.Fa(w,w,w,w,w,w,w,w,w,u,w,w,G.fw,w,new A.cA(A.x(12),C.y),new A.aJ(t,1.5,C.E,-1),w,w,w,w)
return S.bDv(A.ag(d,w,w,w,16),A.k(e,w,w,w,w,w,I.OZ,w,w),f,t)},
aac(d){var w=null,v=C.l.j(0.35),u=A.x(14),t=F.R(C.h.j(0.08),1),s=A.y(w,w,C.f,w,w,D.S7,w,8,w,w,w,w,w,8),r=G.a6.j(0.15),q=A.x(20),p=F.R(G.a6.j(0.35),1),o=x.p
o=A.a([F.S(A.a([s,E.Z,D.aHA,H.bZ,A.y(w,A.k(""+d+"/"+this.gnW()+" Joined",w,w,w,w,w,A.B(w,w,G.e2,w,w,w,w,w,w,w,w,11,w,w,C.x,w,w,!0,w,w,w,w,w,w,w,w),w,w),C.f,w,w,new A.t(r,w,p,q,w,w,C.m),w,w,w,w,H.hf,w,w,w)],o),E.j,C.i,E.n,0),H.aG],o)
C.b.H(o,A.jp(this.gnW(),new B.bbk(this),!0,x.l))
return A.y(w,F.P(o,E.a7,C.i,E.n),C.f,w,w,new A.t(v,w,t,u,w,w,C.m),w,w,w,w,G.dD,w,w,w)},
aa9(){var w=null,v=A.x(12),u=F.R(R.cN.j(0.45),1),t=x.p
return F.P(A.a([I.vC,H.aw,A.y(w,F.S(A.a([I.Bw,H.aT,F.Q(A.k(this.gv6(),w,w,w,w,w,Q.vw,w,w),1),A.dw(w,w,w,I.BA,w,w,new B.bb4(this),w,w,w,w,w)],t),E.j,C.i,E.n,0),C.f,w,w,new A.t(D.mi,w,u,v,w,w,C.m),w,w,w,w,A8.n4,w,w,w)],t),E.X,C.i,E.n)},
aah(){var w=null
return F.S(A.a([A.ag(D.a79,G.a6.j(0.55),w,w,14),H.aU,A.k("Fair Play  \xb7  Secure  \xb7  Trusted",w,w,w,w,w,A.B(w,w,G.a6.j(0.55),w,w,w,w,w,w,w,w,11,w,w,C.R,w,w,!0,w,0.3,w,w,w,w,w,w),w,w)],x.p),E.j,C.a1,E.n,0)},
Kw(d,e){var w,v,u,t,s,r,q=null
if(e)w=C.c.t(d.toLowerCase(),"network")||C.c.t(d.toLowerCase(),"connect")||C.c.t(d.toLowerCase(),"timeout")||C.c.t(d.toLowerCase(),"timed out")||C.c.t(d.toLowerCase(),"server")
else w=!1
v=(e?C.aF:R.cN).j(0.12)
u=A.x(12)
t=F.R((e?C.aF:R.cN).j(0.4),1)
s=x.p
r=A.a([],s)
if(w)C.b.H(r,A.a([D.anQ,E.aH],s))
r.push(A.k(d,q,q,q,q,q,A.B(q,q,e?C.h7:R.qI,q,q,q,q,q,q,q,q,12,q,q,C.R,q,q,!0,q,q,q,q,q,q,q,q),C.M,q))
return A.y(q,F.P(r,E.j,C.i,E.n),C.f,q,q,new A.t(v,q,t,u,q,q,C.m),q,q,q,q,G.dD,q,q,q)}}
B.anf.prototype={}
B.Yu.prototype={
a4(){this.ag()
B.vM()
$.at.am$.push(new B.bp_(this))},
l(){B.t6()
this.aa()}}
B.ES.prototype={
V(){var w=x.S,v=A.bp(4,0,!1,w)
return new B.Uj(v,A.F(x.N,w),C.bF,new B.N3(),null,null)}}
B.Uj.prototype={
a4(){var w,v,u=this,t=null
u.av2()
$.at.b9$.push(u)
u.x2=A.bb(t,C.iu,0,t,1,t,u)
w=A.bb(t,Q.kE,0,t,1,t,u)
w.hN(0,!0)
u.xr=w
v=x.Z
u.y1=new A.aw(A.bO(C.d4,w,t),new A.aE(0.35,1,v),v.i("aw<aO.T>"))
u.aMD()
u.Ed()
u.d=A.fy(M.ra,new B.bct(u))
u.a3=A.fy(C.bS,new B.bcu(u))},
kT(d){var w,v,u,t,s,r=this
if(d===C.hY||d===C.jM||d===C.hZ){if(!r.cx){w=r.am
if(!(w>0))if(r.aq!=null){w=r.au
v=Date.now()
u=r.aq
u.toString
u=Math.max(0,w-C.k.bj(new A.c4(v,0,!1).cA(u).a,1e6))
w=u}else w=10
r.cy=w}r.cx=!0
return}if(d===C.cA){t=r.cx
r.cx=!1
if($.jS>0)A.hn()
if(t&&r.cy!=null){w=r.cy
w.toString
s=C.k.S(w,1,10)
r.aq=new A.c4(Date.now(),0,!1)
r.am=r.au=s
r.ah=!1
r.cy=null}if(r.c!=null&&!r.dy&&!r.fr){r.n3(!0,!0)
r.uT()}}},
kF(){var w=$.aA,v=K.aoK(w==null?"":w)
if(v!=null&&v.length!==0)return v
w=$.bd
w=w==null?null:w.a
return w==null?"":w},
UZ(){var w=$.aA,v=this.kF(),u=w==null?"":w,t=this.a.c
return A.aa(["userId",v,"user_id",v,"token",u,"tableId",t,"table_id",t],x.N,x.z)},
aMD(){var w,v,u=this
N.Cw(u.a.f)
B.bxQ(u.a.f)
w=N.cv(u.a.f)
v=new B.bcf(u)
u.aC=v
u.aX=u.gaxR()
u.aR=new B.bcg(u)
u.aF=u.gaOq()
w.cF(0,"roomTrigger",v)
v=u.aX
v.toString
w.cF(0,"getStep",v)
v=u.aX
v.toString
w.cF(0,"startGame",v)
v=u.aX
v.toString
w.cF(0,"dice",v)
v=u.aX
v.toString
w.cF(0,"move",v)
v=u.aF
v.toString
w.cF(0,"ludo_timer",v)
v=u.aR
v.toString
w.cF(0,"connect",v)
if(w.y)u.a7b()},
Vt(d){var w,v,u="table_id",t="table",s=J.M(d),r=s.h(d,"tableId")
if(r==null)r=s.h(d,u)
if(r==null)r=s.h(d,"ludo_table_id")
if(r==null){r=x.f
if(r.b(s.h(d,t))){w=J.D(r.a(s.h(d,t)),u)
s=w==null?J.D(r.a(s.h(d,t)),"tableId"):w}else s=null}else s=r
v=s==null?null:J.J(s)
if(v==null||v.length===0)return!0
return v===this.a.c},
yN(d){var w
if(d==null||d.length===0)return!1
w=d.toLowerCase()
return C.c.t(w,"unreachable")||C.c.t(w,"socket hang up")||C.c.t(w,"econnreset")||C.c.t(w,"econnrefused")||C.c.t(w,"timed out")||C.c.t(w,"timeout")||C.c.t(w,"gateway")||C.c.t(w,"502")||C.c.t(w,"503")||C.c.t(w,"504")},
a7b(){var w,v,u=this,t=$.aA,s=u.kF()
if(t==null||t.length===0||s.length===0)return
w=u.UZ()
v=N.cv(u.a.f)
if(!v.y)B.bxQ(u.a.f)
v.dJ("joinRoom",w)
v.dJ("getStep",w)},
uT(){var w,v,u,t=this,s=$.aA,r=t.kF()
if(s==null||s.length===0||r.length===0)return
w=new A.c4(Date.now(),0,!1)
v=t.r
if(v!=null&&w.cA(v).a<18e5)return
t.r=w
u=N.cv(t.a.f)
if(!u.y)B.bxQ(t.a.f)
u.dJ("getStep",t.UZ())},
axS(d){var w,v,u,t,s,r,q=this
if(q.c==null||!x.f.b(d))return
w=B.ER(A.an(d,x.N,x.z))
if(!q.Vt(w))return
v=B.bCY(w)
if(v!=null){u=v.toLowerCase()
if(q.yN(v)||C.c.t(u,"no active game")||C.c.t(u,"waiting for players")||C.c.t(u,"not started"))return
q.E(new B.bbM(q,v))
return}t=B.a49(w)
s=J.bY(w)
r=s.aw(w,"currentTurnIndex")||s.aw(w,"current_turn_index")||s.aw(w,"nextTurnIndex")||s.aw(w,"next_turn_index")||s.aw(w,"playerIds")||s.aw(w,"player_ids")||s.aw(w,"dice")||s.aw(w,"turnExpiresAt")||s.aw(w,"turn_expires_at")
if(!t&&!r)return
if(q.dy||q.fr){q.to=B.q5(q.to,w)
return}q.T_(w)},
TW(){var w=this,v=w.to
if(v==null||w.dy||w.fr)return
w.to=null
w.T_(v)},
a4U(d){var w,v,u,t,s,r,q,p,o,n
if(d==null)return""
w=B.t3(d)
v=B.oy(d)
u=B.vK(d)
t=B.oz(d)
s=B.aCA(d)
if(s==null)s=""
r=B.t4(d)
q=w+"|"+v+"|"+u+"|"+t+"|"+s+"|"
for(p=r.length,o=0;o<r.length;r.length===p||(0,A.X)(r),++o){for(n=J.b1(r[o]);n.A();)q+=""+B.MZ(n.gO(n))+"."
q+=";"}return q.charCodeAt(0)==0?q:q},
UA(d){var w,v,u,t,s,r,q,p,o,n=this,m="ludoState",l=n.CW
if(l==null||l<=0)return
w=n.y
if(w==null)w=d
v=B.q6(w,n.kF())
u=B.oy(d)
t=B.vK(d)
s=B.t3(d)
w=v>=0
r=!1
if(w)if(u>=0)if(u!==v)r=t<=0||s==="rolling"
if(r){n.CW=null
return}q=d.h(0,m)
r=x.N
p=x.z
o=x.f.b(q)?A.an(q,r,p):A.F(r,p)
o.k(0,"phase","moving")
o.k(0,"lastDice",l)
d.k(0,m,o)
d.k(0,"dice",l)
if(w){d.k(0,"currentTurnIndex",v)
d.k(0,"current_turn_index",v)}},
T_(d){var w,v=this,u=B.q5(v.y,d)
if(u!=null){w=v.CW
w=w!=null&&w>0}else w=!1
if(w)v.UA(u)
if(v.a4U(u)===v.a4U(v.y)){v.y=u
v.Ww()
return}v.E(new B.bbO(v,u))
v.VN()
v.a6F()
v.Ww()},
a6F(){var w,v,u,t,s,r,q,p=this,o=p.y
if(o==null)return
w=p.kF()
v=B.q6(o,w)
u=B.oz(o)
t=B.oy(o)
s=v>=0&&t===v&&!u
if(u&&!p.a0){r=B.aCA(o)
q=$.bE()
q.bt(0,r===w?X.bN:X.bX)}else if(s&&p.C===!1)$.bE().bt(0,M.ou)
p.a0=u
p.C=s},
aOr(d){var w,v,u=this
if(u.c==null)return
w=typeof d=="number"?d:A.dn(A.v(d))
if(w==null||!isFinite(w))return
v=B.bqR(Math.max(0,C.d.ft(w)))
u.E(new B.bbY(u,v))
if(v===0&&!u.cx&&u.CW==null)u.aai()},
SS(){var w=this
w.am=0
w.X=""
w.aW=w.aq=null
w.ah=!1},
Lr(){var w,v,u=this
u.ah=!1
u.aW=null
u.aq=new A.c4(Date.now(),0,!1)
u.am=u.au=10
w=u.y
if(w!=null){v=B.oy(w)
u.X=B.bJb(w,B.t3(w),v)}},
VN(){var w,v,u,t=this,s=t.y
if(s==null)return
w=B.oy(s)
v=B.bJb(s,B.t3(s),w)
if(v===t.X)return
t.X=v
t.ah=!1
u=B.c45(s,t.aW)
t.aq=new A.c4(Date.now(),0,!1)
t.au=u>0?u:10},
aME(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this
if(i.c==null||i.cx)return
w=i.y
v=B.q6(w,i.kF())
u=B.oy(w)
t=B.t3(w)
s=B.oz(w)
r=w!=null&&v>=0&&u===v&&!s
q=i.ch!=null||i.RG!=null||i.fr
p=i.CW
o=p==null
n=!o&&p>0&&t==="moving"
if(r)m=(t==="rolling"||n)&&!i.dy&&!q
else m=!1
if(!m){if(i.am!==0||i.X.length!==0)if(o)i.E(new B.bck(i))
return}i.VN()
if(i.aq!=null){p=i.au
o=Date.now()
l=i.aq
l.toString
k=Math.max(0,p-C.k.bj(new A.c4(o,0,!1).cA(l).a,1e6))}else k=0
j=B.bqR(k)
if(j!==i.am)i.E(new B.bcl(i,j))
if(j===0&&!i.cx&&i.CW==null)i.aai()},
gnV(){var w,v,u=this,t=null
if(!(B.a49(u.y)&&!B.MX(u.y)))if(B.MX(u.y)||B.MX(u.x))return!1
w=u.x
if(w==null)w=t
else{w=J.D(w,"status")
w=w==null?t:J.J(w)}if(w==="playing")return!0
w=u.y
w=w==null?t:w.h(0,"gameId")
if(w==null){w=u.y
w=w==null?t:w.h(0,"game_id")}v=w==null?t:C.c.P(J.J(w))
return(v==null?"":v).length!==0},
Dt(){var w,v,u,t=this
if(!t.gnV()||B.oz(t.y))return!1
w=t.kF()
v=B.q6(t.y,w)
u=B.oy(t.y)
if(v<0||u<0)return!1
return u!==v},
nL(){var w=0,v=A.p(x.H),u,t=2,s=[],r=[],q=this,p,o,n
var $async$nL=A.q(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(!q.gpv()){q.n3(!0,!0)
w=1
break}w=q.c==null||q.dx?3:4
break
case 3:w=5
return A.e(q.n3(!0,!0),$async$nL)
case 5:w=1
break
case 4:q.dx=!0
q.aRo()
t=6
o=x.H
w=9
return A.e(A.cs(C.hd,null,o),$async$nL)
case 9:q.uT()
p=0,n=q.gaAt()
case 10:if(!(p<12)){w=12
break}if(q.c==null){r=[1]
w=7
break}w=13
return A.e(q.n3(!0,!0),$async$nL)
case 13:if(q.c!=null){n.$0()
q.c.dk()
q.Ww()}if(!q.Dt()){if(q.c!=null){new B.bbN(q).$0()
q.c.dk()}r=[1]
w=7
break}w=14
return A.e(A.cs(new A.aU(1000*(900+p*100)),null,o),$async$nL)
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
return A.o($async$nL,v)},
Kd(d,e){if(e>=4)return
if(d<1||d>6)return
this.fy[e]=d},
aAu(){var w,v,u,t=this
if(B.t3(t.y)==="rolling")return
w=B.vK(t.y)
if(w<=0)return
v=B.oy(t.y)
if(v<0)return
u=B.t8(v,t.ghW())
t.Kd(w,u)
if(!t.dy){t.id=C.k.S(w,1,6)
t.k1=u}},
aai(){var w=this
if(w.ah)return
w.ah=!0
if(w.gnV())w.uT()
else w.pE()},
Ed(){var w=0,v=A.p(x.H),u=this
var $async$Ed=A.q(function(d,e){if(d===1)return A.m(e,v)
for(;;)switch(w){case 0:u.uT()
w=u.gnV()?2:4
break
case 2:w=5
return A.e(u.Wq(!0),$async$Ed)
case 5:w=3
break
case 4:w=6
return A.e(u.pE(),$async$Ed)
case 6:case 3:return A.n(null,v)}})
return A.o($async$Ed,v)},
n3(d,e){return this.aWi(d,e)},
Wp(d){return this.n3(d,!1)},
Wq(d){return this.n3(!1,d)},
aWi(d,e){var w=0,v=A.p(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m
var $async$n3=A.q(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(q.w){w=1
break}if(!e)q.uT()
p=$.aA
if(p==null||p.length===0){w=1
break}n=new A.c4(Date.now(),0,!1)
if(!d){m=q.f
m=m!=null&&n.cA(m).a<16e5}else m=!1
if(m){w=1
break}q.f=n
q.w=!0
t=3
w=6
return A.e(B.a46(q.a.c,p),$async$n3)
case 6:o=g
if(q.c==null||o==null){r=[1]
w=4
break}if(!q.Vt(o)){r=[1]
w=4
break}if(q.dy||q.fr){q.to=B.q5(q.to,o)
r=[1]
w=4
break}m=q.z
if(m!=null&&q.yN(m))q.z=null
q.T_(o)
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
return A.o($async$n3,v)},
pE(){var w=0,v=A.p(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i,h,g,f
var $async$pE=A.q(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.w){w=1
break}p=$.aA
if(p==null||p.length===0){w=1
break}j=new A.c4(Date.now(),0,!1)
i=q.f
if(i!=null&&j.cA(i).a<3e6){w=1
break}q.f=j
q.w=!0
t=3
i={}
w=6
return A.e(B.a46(q.a.c,p),$async$pE)
case 6:o=e
i.a=null
w=o==null||q.x==null?7:9
break
case 7:f=i
w=10
return A.e(B.MV(q.a.c,p),$async$pE)
case 10:e=f.a=e
w=8
break
case 9:e=null
case 8:h=e
if(q.c==null){r=[1]
w=4
break}n=q.aEP(h)
m=n!=null||h!=null
l=o!=null&&q.Vt(o)
h=n
if(h==null)h=q.x
if(h==null)g=null
else{h=J.D(h,"status")
g=h==null?null:J.J(h)}k=g
q.E(new B.bc2(i,q,m,n,l,k,o))
q.VN()
q.a6F()
q.DH()
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
return A.o($async$pE,v)},
KD(){var w=0,v=A.p(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$KD=A.q(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(r.as){w=1
break}q=$.aA
p=r.kF()
if(q==null||q.length===0||J.au(p)===0){w=1
break}o=r.x
if(o==null)n=null
else{o=J.D(o,"status")
n=o==null?null:J.J(o)}if(n!=="waiting"){w=1
break}if(r.gnV()){w=1
break}if(B.oz(r.y)){w=1
break}if(B.a49(r.y)){w=1
break}r.as=!0
t=4
w=7
return A.e(B.bv6(r.a.c,q,p),$async$KD)
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
return A.o($async$KD,v)},
aRo(){var w,v,u,t,s=this
if(!s.gpv()||s.dy||s.c==null)return
w=s.y
if(w==null||B.oz(w))return
v=B.q6(w,s.kF())
u=B.oy(w)
if(v<0||u<0)return
t=u===v?s.aNx(u):u
if(t<0||t===v)return
s.Wi(B.t8(t,s.ghW()))},
aNx(d){var w,v,u,t,s=this.ghW()
if(s<=0)return-1
w=B.MY(this.y,this.x)
for(v=w.length,u=1;u<=s;++u){t=C.k.ac(d+u,s)
if(t<v&&C.c.P(w[t]).length!==0)return t}return C.k.ac(d+1,s)},
Wi(d){var w=this,v=w.c
if(v==null)return
if(w.k3&&w.k4===d)return
v=w.p1
if(v!=null)v.U(0)
w.p2=w.p1=null
$.bE().bt(0,W.lv)
w.E(new B.bci(w,d))},
aRD(d,e){var w,v,u=this
if(e<1||e>6)return
u.Wi(d)
if(u.p2===e&&u.p1!=null)return
u.p2=e
w=u.p1
if(w!=null)w.U(0)
v=u.ok
if(v==null)v=new A.c4(Date.now(),0,!1)
u.p1=A.c0(A.cb(0,Math.max(0,900-C.k.bj(new A.c4(Date.now(),0,!1).cA(v).a,1000)),0),new B.bc_(u))},
aek(){var w=this,v=w.p1
if(v!=null)v.U(0)
w.p1=null
if(w.c==null)return
if(!w.k3&&w.p2==null)return
w.E(new B.bcj(w,w.k4,w.p2))},
Ww(){var w,v,u,t,s,r,q,p=this
if(!p.gpv()||p.dy||p.c==null)return
w=p.y
if(w==null||B.oz(w)){p.aek()
return}v=B.q6(w,p.kF())
u=B.oy(w)
t=B.t3(w)
s=B.vK(w)
if(v<0||u<0||u===v){if(p.k3)p.aek()
return}r=B.t8(u,p.ghW())
if(t==="rolling"){q=p.p1
if(q!=null)q.U(0)
p.p2=p.p1=null
p.Wi(r)
return}if(s>0)p.aRD(r,C.k.S(s,1,6))},
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
$.at.he(r)
w=N.cv(r.a.f)
v=r.aC
if(v!=null)w.d0("roomTrigger",v)
u=r.aX
if(u!=null){w.d0("getStep",u)
w.d0("startGame",u)
w.d0("dice",u)
w.d0("move",u)}t=r.aR
if(t!=null)w.d0("connect",t)
s=r.aF
if(s!=null)w.d0("ludo_timer",s)
r.KD()
Af.bxO(r.a.f)
r.av1()},
aEP(d){var w,v
if(d==null)return null
w=J.D(d,"table_data")
if(x.j.b(w)&&J.cD(w)){v=J.fs(w)
if(x.P.b(v))return v
if(x.f.b(v))return A.an(v,x.N,x.z)}return d},
gaaC(){var w=this.x
return L.N7(w==null?A.F(x.N,x.z):w)},
KS(){return this.gaaC().d>0?this.gaaC().d:this.a.e},
gpv(){return C.c.t(this.a.r.toLowerCase(),"computer")},
axT(d){var w,v,u,t
if(d==null||J.cn(d))return
w=J.M(d)
v=w.h(d,"table")
u=v==null?w.h(d,"data"):v
if(u==null)u=d
if(!x.f.b(u))return
w=x.N
v=x.z
t=A.an(u,w,v)
v=A.F(w,v)
w=this.x
if(w!=null)v.H(0,w)
v.H(0,t)
this.x=v},
DH(){var w=0,v=A.p(x.H),u,t=this,s,r,q,p
var $async$DH=A.q(function(d,e){if(d===1)return A.m(e,v)
for(;;)switch(w){case 0:if(t.c==null||t.at||t.ax){w=1
break}if(t.gnV()){t.at=!0
w=1
break}s=t.x
s=s==null?null:J.D(s,"status")
if(s==null){s=t.y
s=s==null?null:s.h(0,"status")}if((s==null?null:J.J(s))==="playing"){t.at=!0
w=1
break}if(t.x==null&&t.y==null){w=1
break}s=Date.now()
r=t.ay
if(r!=null&&new A.c4(s,0,!1).cA(r).a<4e6){w=1
break}w=t.gpv()?3:4
break
case 3:w=5
return A.e(t.nS(!1),$async$DH)
case 5:w=1
break
case 4:q=t.a.r.toLowerCase()
w=C.c.t(q,"local")&&!C.c.t(q,"computer")?6:7
break
case 6:p=t.KS()
w=B.MY(t.y,t.x).length>=p&&p>0?8:9
break
case 8:w=10
return A.e(t.nS(!1),$async$DH)
case 10:case 9:case 7:case 1:return A.n(u,v)}})
return A.o($async$DH,v)},
nS(d){return this.aF0(d)},
aF0(a4){var w=0,v=A.p(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3
var $async$nS=A.q(function(a5,a6){if(a5===1){s.push(a6)
w=t}for(;;)switch(w){case 0:if(q.c==null||q.ax){w=1
break}if(q.gnV()){q.at=!0
w=1
break}p=$.aA
o=q.kF()
if(p==null||p.length===0||J.au(o)===0){w=1
break}q.ax=!0
q.ay=new A.c4(Date.now(),0,!1)
q.E(new B.bbP(q))
t=4
n=q.KS()
m=B.MY(q.y,q.x).length
l=n-m
w=l>0&&q.gpv()?7:8
break
case 7:w=9
return A.e(L.ve(l,q.a.c,p),$async$nS)
case 9:k=a6
if(q.c==null){r=[1]
w=5
break}q.axT(k)
case 8:j=N.cv(q.a.f)
j.dJ("startGame",q.UZ())
w=10
return A.e(B.aCp(q.a.c,p,o),$async$nS)
case 10:i=a6
P.dk()
a0=x.f
if(a0.b(J.D(i,"ludoState"))||a0.b(J.D(i,"table"))){q.y=B.q5(q.y,i)
h=J.D(i,"table")
if(a0.b(h)){a0=x.N
a1=x.z
g=A.F(a0,a1)
f=q.x
if(f!=null)J.CH(g,f)
J.CH(g,A.an(h,a0,a1))
q.x=g}}q.at=!0
q.r=q.f=null
w=11
return A.e(q.Wp(!0),$async$nS)
case 11:w=q.c!=null&&q.Dt()?12:13
break
case 12:w=14
return A.e(q.nL(),$async$nS)
case 14:case 13:w=q.c!=null&&!q.gnV()?15:16
break
case 15:w=17
return A.e(q.pE(),$async$nS)
case 17:case 16:r.push(6)
w=5
break
case 4:t=3
a3=s.pop()
g=A.a9(a3)
if(g instanceof B.lC){e=g
if(a4&&q.c!=null&&!q.yN(e.a))q.c.Y(x.q).f.b7(F.ca(null,null,null,null,null,C.u,null,A.k(e.a,null,null,null,null,null,null,null,null),null,E.a3,null,null,null,null,null,null,null,null,null,null))}else{d=g
if(a4&&q.c!=null&&!q.yN(A.v(d)))q.c.Y(x.q).f.b7(F.ca(null,null,null,null,null,C.u,null,A.k(A.v(d),null,null,null,null,null,null,null,null),null,E.a3,null,null,null,null,null,null,null,null,null,null))}r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
q.ax=!1
if(q.c!=null)q.E(new B.bbQ(q))
w=r.pop()
break
case 6:case 1:return A.n(u,v)
case 2:return A.m(s.at(-1),v)}})
return A.o($async$nS,v)},
aVE(){return this.nS(!0)},
pF(){var w=0,v=A.p(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4
var $async$pF=A.q(function(d5,d6){if(d5===1){s.push(d6)
w=t}for(;;)switch(w){case 0:d2=$.aA
d3=q.kF()
if(d2==null||d2.length===0||J.au(d3)===0){w=1
break}if(B.oz(q.y)){w=1
break}if(q.dy||q.fr||q.Q){w=1
break}b8=B.q6(q.y,d3)
p=b8>=0?B.t8(b8,q.ghW()):0
q.E(new B.bc3(q))
P.dk()
$.bE().bt(0,W.lv)
t=4
b9={}
o=B.bv8(q.a.c,d2,d3)
b9.a=b9.b=null
o.bI(new B.bc4(b9),x.P).m9(new B.bc5(b9))
n=new A.c4(Date.now(),0,!1)
c0=x.H
case 7:if(!(q.c!=null)){w=8
break}c1=Date.now()
c2=n
c3=c2.a
m=C.k.bj(0-c2.b+1000*(c1-c3),1000)
l=b9.b!=null||b9.a!=null
if(l&&m>=1000){w=8
break}if(m>=2000){w=8
break}c1=q.x2
c1===$&&A.b()
c1.z=C.bH
c1.y=c1.w=null
c1.r.uj(0,!0)
c1.Dl(0)
c1.aE()
c2=c1.Q
c2===$&&A.b()
if(c1.as!==c2){c1.as=c2
c1.wS(c2)}c1.J1(c1.b)
new B.bc6(q).$0()
q.c.dk()
w=9
return A.e(A.cs(E.kB,null,c0),$async$pF)
case 9:w=7
break
case 8:c1=b9.a
if(c1!=null)throw A.j(c1)
k=new A.c4(Date.now(),0,!1).pk(6e6)
case 10:c1=!1
if(b9.b==null)if(q.c!=null){c1=Date.now()
c2=k
c3=c2.a
if(c1>=c3)c1=c1===c3&&0<c2.b
else c1=!0}if(!c1){w=11
break}w=12
return A.e(A.cs(C.rc,null,c0),$async$pF)
case 12:w=10
break
case 11:if(q.c==null){r=[1]
w=5
break}c1=b9.b
if(c1==null){c0=A.aY("Dice roll timed out")
throw A.j(c0)}j=B.ER(c1)
c4=J.D(j,"dice")
i=c4==null?B.vK(j):c4
if(typeof i=="number"&&C.d.aj(i)>0)q.go=C.d.aj(i)
c5=q.go
h=c5==null?B.vK(j):c5
if(q.c==null){r=[1]
w=5
break}c1=q.x2
c1===$&&A.b()
c1.sq(0,0)
q.E(new B.bc7(q,j,h,p))
if(h>0){c6=J.D(j,"mustMove")
g=c6==null?J.D(j,"must_move"):c6
c7=!0
if(!J.f(g,!1))if(!J.f(g,0)){c1=g
c1=(c1==null?null:J.J(c1))==="false"
c7=c1}f=c7
if(!f)q.CW=h}q.TW()
if(h<=0){r=[1]
w=5
break}w=13
return A.e(A.cs(Ad.re,null,c0),$async$pF)
case 13:if(q.c==null){r=[1]
w=5
break}c8=J.D(j,"mustMove")
e=c8==null?J.D(j,"must_move"):c8
c9=!0
if(!J.f(e,!1))if(!J.f(e,0)){c0=e
c0=(c0==null?null:J.J(c0))==="false"
c9=c0}d=c9
a0=B.q6(q.y,d3)
a1=a0>=0?B.t8(a0,q.ghW()):-1
a2=B.t4(q.y)
a3=q.Jw(q.zN(a2,q.ghW()))
c0=$.pc()
a4=new B.jR(c0)
a5=q.KO(a2,h,a3,a1,q.ghW(),a4,!0)
w=d&&J.au(a5)===0&&!J.f(h,6)?14:15
break
case 14:q.CW=null
if(q.c!=null)q.E(new B.bc8(q))
w=16
return A.e(q.nL(),$async$pF)
case 16:r=[1]
w=5
break
case 15:q.CW=h
q.E(new B.bc9(q,h))
a6=B.q6(q.y,d3)
a7=a6>=0?B.t8(a6,q.ghW()):-1
a8=B.t4(q.y)
a9=q.Jw(q.zN(a8,q.ghW()))
b0=new B.jR(c0)
d0=q.KO(a8,h,a9,a7,q.ghW(),b0,!0)
b9.c=d0
if(d0.length===0&&J.f(h,6)&&a7>=0&&a7<J.au(a9)){b1=A.a([],x.t)
for(b2=0;b2<J.au(J.D(a9,a7));++b2){b3=J.D(J.D(a9,a7),b2)
if(b3.a&&!b3.c)J.e_(b1,b2)}b9.c=b1}c0=b9.c.length
w=c0===0?17:18
break
case 17:w=J.f(h,6)?19:20
break
case 19:w=21
return A.e(q.n3(!0,!0),$async$pF)
case 21:if(q.c==null){r=[1]
w=5
break}b4=B.t4(q.y)
b5=q.Jw(q.zN(b4,q.ghW()))
b6=q.KO(b4,h,b5,a7,q.ghW(),b0,!0)
if(J.au(b6)===1){q.pB(J.fs(b6))
r=[1]
w=5
break}if(J.au(b6)!==0){q.Lr()
if(q.c!=null)q.E(new B.bca())
r=[1]
w=5
break}q.CW=null
q.E(new B.bcb(q))
q.Lr()
r=[1]
w=5
break
case 20:q.CW=null
w=22
return A.e(q.Et(h,a6),$async$pF)
case 22:r=[1]
w=5
break
case 18:if(c0===1)$.at.am$.push(new B.bcc(b9,q))
else q.Lr()
r.push(6)
w=5
break
case 4:t=3
d4=s.pop()
c0=A.a9(d4)
if(c0 instanceof B.lC){b7=c0
if(q.c!=null&&!q.yN(b7.a))q.c.Y(x.q).f.b7(F.ca(null,null,null,null,null,C.u,null,A.k(b7.a,null,null,null,null,null,null,null,null),null,E.a3,null,null,null,null,null,null,null,null,null,null))}r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null){c0=q.x2
c0===$&&A.b()
c0.sq(0,0)
if(q.dy)q.E(new B.bcd(q))}w=r.pop()
break
case 6:case 1:return A.n(u,v)
case 2:return A.m(s.at(-1),v)}})
return A.o($async$pF,v)},
Et(d,e){return this.aVv(d,e)},
aVv(d,e){var w=0,v=A.p(x.H),u,t=this
var $async$Et=A.q(function(f,g){if(f===1)return A.m(g,v)
for(;;)switch(w){case 0:if(t.c==null){w=1
break}t.CW=null
t.E(new B.bch(t))
w=3
return A.e(t.nL(),$async$Et)
case 3:case 1:return A.n(u,v)}})
return A.o($async$Et,v)},
aX5(d,e){return d.a===e.a&&d.c===e.c&&d.b===e.b},
UN(d,e,f,g,h){var w,v=this.R8===g&&this.RG===h,u=!f.a
if(u&&!f.c&&d.a){if(v)return!0
u=$.pc()
w=new B.jR(u).p7(g,f)
if(w!=null&&new B.jR(u).alP(e,g,w)||this.ry.aw(0,""+g+":"+h))return!1
return!0}if(f.c&&!d.c)return!0
if(u&&!d.a&&f.b>d.b)return!0
return!1},
KH(d,e,f){var w=this.ry.h(0,""+d+":"+e)
if(w==null||f.a||f.c)return f
if(new B.jR($.pc()).p7(d,f)===w)return D.fF
return f},
Lj(d,e,f){var w,v,u,t,s,r,q,p=this.ry,o=!1,n=0
for(;;){if(!(n<d.length&&n<e.length))break
w=""+n+":"
v=0
for(;;){if(!(v<J.au(d[n])&&v<J.au(e[n])))break
c$0:{u=J.D(d[n],v)
t=J.D(e[n],v)
if(u.a||u.c||!t.a)break c$0
s=$.pc()
r=new B.jR(s).p7(n,u)
if(r==null||D.ot.t(0,r))break c$0
if(!new B.jR(s).alP(e,n,r))break c$0
q=w+v
s=p.aw(0,q)
p.k(0,q,r)
if(!s)o=!0}++v}++n}if(f&&o)$.bE().bt(0,D.Ny)},
ay_(d){var w,v,u,t,s,r,q,p,o,n=A.a([],x.s)
for(w=this.ry,v=new A.eg(w,A.H(w).i("eg<1,2>")).gad(0);v.A();){u=v.d
t=u.a
s=t.split(":")
if(s.length!==2)continue
r=A.cF(s[0],null)
q=A.cF(s[1],null)
if(r==null||q==null)continue
if(r<0||r>=d.length||q<0||q>=J.au(d[r]))continue
p=J.D(d[r],q)
if(p.a)continue
if(p.c){n.push(t)
continue}if(new B.jR($.pc()).p7(r,p)===u.b)J.em(d[r],q,D.fF)
else n.push(t)}for(v=n.length,o=0;o<n.length;n.length===v||(0,A.X)(n),++o)w.L(0,n[o])},
aKI(){var w,v,u=this,t=B.oy(u.y)
if(t<0)return null
w=u.ghW()
if(w<=0)return null
v=B.vK(u.y)
return B.t8(B.t3(u.y)==="rolling"&&v===6?t:C.k.ac(t-1+w,w),w)},
JM(d,e){var w,v,u=this,t=u.pq(d)
u.ay_(t)
w=u.rx
if(w==null)w=u.aKI()
if(w==null)return t
v=u.pq(t)
new B.jR($.pc()).YZ(t,w)
u.Lj(v,t,e)
return t},
a7B(d){return this.JM(d,!1)},
pq(d){var w,v,u,t=A.a([],x.Q)
for(w=d.length,v=x.r,u=0;u<d.length;d.length===w||(0,A.X)(d),++u)t.push(A.bL(d[u],!0,v))
return t},
a9U(){var w=B.t4(this.y)
if(w.length===0)return null
return this.zN(w,this.ghW())},
ghW(){var w=this.KS()
return B.a4h(w>0?w:this.a.e)},
Jw(d){var w,v,u,t,s,r,q,p,o=this,n=o.a9U()
if(n==null)n=d
w=o.p4
if(w==null)return o.a7B(n)
v=o.pq(n)
u=w.length
t=v.length
u=u<t?u:t
for(s=0;s<u;++s){r=J.au(w[s])<J.au(v[s])?J.au(w[s]):J.au(v[s])
for(q=0;q<r;++q){p=J.D(w[s],q)
if(o.UN(n[s][q],n,p,s,q))J.em(v[s],q,J.D(w[s],q))}}return o.a7B(v)},
Ec(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=k.a9U()
if(j==null)return
w=new B.bc1(k)
if(k.fr)return
v=k.R8
u=k.RG
if(v!=null&&u!=null&&k.p4!=null){t=k.pq(j)
s=k.p4
if(v<s.length&&u<J.au(s[v])&&v<t.length&&u<J.au(t[v])){r=J.D(k.p4[v],u)
q=j[v][u]
if(k.aX5(r,q)){s=k.x1
if(s!=null)s.U(0)
k.RG=k.R8=k.x1=null
w.$1(t)}else if(k.UN(q,j,r,v,u)){J.em(t[v],u,r)
w.$1(t)}else{s=k.x1
if(s!=null)s.U(0)
k.RG=k.R8=k.x1=null
w.$1(t)}}else w.$1(t)
return}p=k.p4
if(p!=null&&!k.Q){k.aNB(p,j)
t=k.pq(j)
o=!1
n=0
for(;;){if(!(n<p.length&&n<t.length))break
m=0
for(;;){if(!(m<J.au(p[n])&&m<J.au(t[n])))break
s=J.D(p[n],m)
if(k.UN(j[n][m],j,s,n,m)){J.em(t[n],m,J.D(p[n],m))
o=!0}++m}++n}if(o){w.$1(t)
return}l=k.aFd(p,j)
if(l!=null){$.at.am$.push(new B.bc0(k,l,j))
return}}w.$1(j)},
aNB(d,e){var w,v,u,t,s,r,q,p,o=this,n=null,m=0
for(;;){if(!(m<d.length&&m<e.length))break
w=0
for(;;){if(!(w<J.au(d[m])&&w<e[m].length))break
v=o.KH(m,w,J.D(d[m],w))
u=o.KH(m,w,e[m][w])
t=v.a
s=t&&!u.a&&!u.c
r=!t&&!u.a&&!v.c&&u.b>v.b
if(s||r)n=m;++w}++m}if(n!=null)o.rx=n
o.Lj(d,e,!0)
q=o.rx
if(q==null)return
p=o.pq(e)
new B.jR($.pc()).YZ(p,q)
o.Lj(e,p,!0)},
aFd(d,e){var w,v,u,t,s,r,q=null,p=0,o=0
for(;;){if(!(o<d.length&&o<e.length))break
w=0
for(;;){if(!(w<J.au(d[o])&&w<e[o].length))break
c$0:{v=this.KH(o,w,J.D(d[o],w))
u=this.KH(o,w,e[o][w])
t=v.a
s=u.a
if(t===s&&v.c===u.c&&v.b===u.b)break c$0;++p
if(t&&!s)q=new A.Vp([6,v,o,w])
else if(!t&&!s&&!v.c&&u.b>v.b){r=u.b-v.b
if(r>=1&&r<=6)q=new A.Vp([r,v,o,w])}}++w}++o}if(q==null||p>4)return null
return q},
J0(d,e){return this.axE(d,e)},
axE(d,e){var w=0,v=A.p(x.H),u,t=this,s,r,q,p,o,n
var $async$J0=A.q(function(f,g){if(f===1)return A.m(g,v)
for(;;)switch(w){case 0:if(t.c==null||t.fr||t.RG!=null){w=1
break}s=$.pc()
r=d.a
q=r[2]
p=r[3]
o=r[1]
n=new B.jR(s).a05(q,r[0],o,p)
if(n.length<=1){t.rx=r[2]
t.E(new B.bbK(t,e))
w=1
break}$.bE().bt(0,D.uX)
w=3
return A.e(t.Cv(r[2],r[3],n,!1,190),$async$J0)
case 3:if(t.c==null){w=1
break}t.E(new B.bbL(t,d,e))
t.fr=!1
t.TW()
case 1:return A.n(u,v)}})
return A.o($async$J0,v)},
Cv(d,e,f,g,h){return this.axD(d,e,f,!1,h)},
axC(d,e,f,g){return this.Cv(d,e,f,g,null)},
axD(d,e,f,g,h){var w=0,v=A.p(x.H),u,t=this,s,r
var $async$Cv=A.q(function(i,j){if(i===1)return A.m(j,v)
for(;;)switch(w){case 0:if(f.length<=1){w=1
break}t.fr=!0
t.E(new B.bbJ(t,d,e,f))
s=f.length
r=h==null?110:h
w=3
return A.e(A.cs(A.cb(0,(s-1)*r,0),null,x.H),$async$Cv)
case 3:if(t.c==null){t.fr=!1
t.p3=null
w=1
break}case 1:return A.n(u,v)}})
return A.o($async$Cv,v)},
pB(d){return this.aNe(d)},
aNe(b7){var w=0,v=A.p(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6
var $async$pB=A.q(function(b8,b9){if(b8===1){s.push(b9)
w=t}for(;;)switch(w){case 0:b3={}
b4=$.aA
b5=q.kF()
if(b4==null||b4.length===0||J.au(b5)===0){w=1
break}if(B.oz(q.y)){w=1
break}if(q.dy||q.fr||q.Q){w=1
break}if(q.RG!=null){w=1
break}j=q.y
i=b3.a=B.vK(j)
if(i<=0){i=q.CW
h=b3.a=i==null?0:i}else h=i
if(h<=0){w=1
break}g=B.t4(j)
f=q.ghW()
e=B.q6(j,b5)
if(e<0){w=1
break}p=B.t8(e,f)
o=B.bD3(p,f)
h=q.p4
if(h!=null)d=q.pq(h)
else d=g.length===0?q.a7e():q.zN(g,f)
for(h=x.b;a0=d.length,a0<4;){a1=A.a(new Array(4),h)
for(a2=0;a2<4;++a2)a1[a2]=D.fF
d.push(a1)}if(p<0||p>=a0){w=1
break}if(b7<0||b7>=J.au(d[p])){w=1
break}a3=J.D(d[p],b7)
a4=new B.jR($.pc())
h=b3.a
if(!a4.Y5(h,a3)){w=1
break}a5=a4.a05(p,h,a3,b7)
q.E(new B.bbS(q,d))
P.dk()
$.bE().bt(0,D.uX)
w=a5.length>1?3:4
break
case 3:w=5
return A.e(q.axC(p,b7,a5,!1),$async$pB)
case 5:case 4:if(q.c==null){q.fr=!1
w=1
break}n=q.pq(d)
a6=a4.agS(n,p,b3.a,b7)
q.rx=p
q.Lj(d,n,a6!=null)
h=J.D(J.D(n,p),b7)
b3.b=q.U_(b3.a,j,o,h,b7)
a7=0
for(;;){if(!(a7<J.au(n)&&a7<d.length))break
c$0:{a8=q.ads(a7)
if(a8<0)break c$0
a9=0
for(;;){if(!(a9<J.au(J.D(n,a7))&&a9<J.au(d[a7])))break
c$1:{b0=J.D(d[a7],a9)
b1=J.D(J.D(n,a7),a9)
if(b0.a||b0.c||!b1.a)break c$1
h=b3.b
b3.b=q.U_(b3.a,h,a8,b1,a9)}++a9}}++a7}q.E(new B.bbT(b3,q,n,p,b7,e))
h=q.fr=!1
q.TW()
a0=q.x1
if(a0!=null)a0.U(0)
q.x1=A.c0(Y.mU,new B.bbU(q))
t=7
a0=q.a.c
w=10
return A.e(B.bv7(b3.a,a0,b4,b7,b5),$async$pB)
case 10:m=b9
if(q.c!=null){a0=q.x1
if(a0!=null)a0.U(0)
q.CW=q.x1=null
q.E(new B.bbV(b3,q,m,o,b7,n,p))}w=b3.a!==6?11:13
break
case 11:w=14
return A.e(q.nL(),$async$pB)
case 14:w=12
break
case 13:w=15
return A.e(q.Wp(!0),$async$pB)
case 15:q.uT()
case 12:r.push(9)
w=8
break
case 7:t=6
b6=s.pop()
a0=A.a9(b6)
if(a0 instanceof B.lC){l=a0
if(q.c!=null?!q.yN(l.a):h)q.c.Y(x.q).f.b7(F.ca(null,null,null,null,null,C.u,null,A.k(l.a,null,null,null,null,null,null,null,null),null,E.a3,null,null,null,null,null,null,null,null,null,null))
if(q.c!=null){h=q.x1
if(h!=null)h.U(0)
q.x1=null
q.CW=b3.a
q.E(new B.bbW(b3,q,n))}q.Wp(!0)}else{k=a0
h=q.c
if(h!=null){q.CW=b3.a
h.Y(x.q).f.b7(F.ca(null,null,null,null,null,C.u,null,A.k(A.v(k),null,null,null,null,null,null,null,null),null,E.a3,null,null,null,null,null,null,null,null,null,null))}}r.push(9)
w=8
break
case 6:r=[2]
case 8:t=2
if(q.c!=null)q.E(new B.bbX(q))
w=r.pop()
break
case 9:case 1:return A.n(u,v)
case 2:return A.m(s.at(-1),v)}})
return A.o($async$pB,v)},
U_(d,e,f,g,h){var w,v,u,t,s,r,q,p,o="ludoState",n=x.N,m=x.z,l=e==null?A.F(n,m):A.an(e,n,m),k=l.h(0,o),j=x.f.b(k)?A.an(k,n,m):A.F(n,m),i=B.t4(l)
if(i.length===0){w=this.ghW()
v=J.il(w,x.R)
for(u=x.Y,t=0;t<w;++t){s=A.a(new Array(4),u)
for(r=0;r<4;++r)s[r]=A.aa(["stepNo",0],n,m)
v[t]=s}i=v}for(u=x.Y;i.length<=f;){v=A.a(new Array(4),u)
for(q=0;q<4;++q)v[q]=A.aa(["stepNo",0],n,m)
C.b.M(i,v)}p=A.bL(i[f],!0,x.P)
while(p.length<=h)p.push(A.aa(["stepNo",0],n,m))
n=A.d8(p[h],n,m)
n.k(0,"stepNo",this.aee(g))
n.k(0,"packed",!1)
p[h]=n
i.$flags&2&&A.aG(i)
i[f]=p
j.k(0,"cards",i)
if(!g.a){j.k(0,"lastDice",0)
j.k(0,"phase","rolling")}l.k(0,o,j)
l.k(0,"dice",0)
return l},
aee(d){if(d.c)return 57
if(d.a)return 0
return d.b+1},
aCb(d,e,f,g){if(g!==e)return 0
if(d>0)return d
return 0},
ads(d){var w,v,u=this.ghW()
for(w=0;w<u;++w){v=D.j_.h(0,B.N5(w,u))
if((v==null?0:v)===d)return w}return-1},
aX3(d,e){if(e)return D.anZ
if(d<=0)return D.fF
if(d>=57)return D.u7
return new B.jq(!1,d-1,!1)},
a7e(){var w,v,u,t,s=J.il(4,x.I)
for(w=x.b,v=0;v<4;++v){u=A.a(new Array(4),w)
for(t=0;t<4;++t)u[t]=D.fF
s[v]=u}return s},
aR1(d,e){var w,v,u=B.bTg(e)
for(w=0;w<d.length;++w){v=D.j_.h(0,B.N5(w,e))
if(v==null)v=0
if(v<4)u[v]=!0}return u},
zN(d,e){var w,v,u,t,s,r,q,p,o=this.a7e()
for(w=0;w<d.length;++w){v=D.j_.h(0,B.N5(w,e))
if(v==null)v=0
u=d[w]
for(t=J.M(u),s=0;s<4;++s){r=s<t.gB(u)?t.h(u,s):C.cm
q=B.MZ(r)
p=J.f(J.D(r,"packed"),!0)
o[v][s]=this.aX3(q,p)}}return o},
KO(d,e,f,g,h,i,j){var w,v,u,t,s,r,q,p,o,n,m,l,k
if(!j||e<=0||g<0)return C.bA
w=new B.bbR(f,i,g,e)
v=e===6
if(v){u=w.$0()
if(J.au(u)!==0)return u}t=B.bD3(g,h)
s=!1
if(t<d.length&&g<f.length){r=d[t]
for(q=J.M(r),p=0;p<4;++p){o=B.MZ(p<q.gB(r)?q.h(r,p):C.cm)
if(o!==this.aee(p<J.au(f[g])?J.D(f[g],p):D.fF)){s=!0
break}}}if(s)return w.$0()
n=A.a([],x.t)
q=d.length
if(t<q){r=d[t]
for(q=J.M(r),p=0;p<4;++p){m=p<q.gB(r)?q.h(r,p):C.cm
l=J.f(J.D(m,"packed"),!0)
k=B.MZ(m)
if(l)continue
if(k>=57)continue
if(k<=0){if(v)n.push(p)}else if(k+e<=57)n.push(p)}}if(n.length!==0)return n
return w.$0()},
aD_(d,e,f,g){var w,v,u=this
if(u.k3&&u.k4===e)return C.k.S(u.fx,1,6)
if(u.dy&&g===e)return u.fx
w=u.id
if(w!=null&&w>0&&u.k1===e)return w
v=e>=0&&e<4?u.fy[e]:0
if(v>0)return v
if(g===e&&d>0)return d
return u.aCb(d,e,f,g)},
aCa(d,e,f,g,h,i,a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
if(!d)return null
w=D.e7[a1]
v=j.ads(a1)
u=B.MY(j.y,j.x)
t=v>=0&&v<u.length?u[v]:""
s=j.y
r=j.x
q=j.a.c
p=B.bT1(j.gpv(),s,g,a1,u,v,r,q)
o=p.length!==0?p:D.nI[a1]+" Player"
n=f>0?C.k.S(f,1,6):0
m=e&&h&&!i
s=B.bJ9(a3)
r=j.x2
r===$&&A.b()
q=j.y1
q===$&&A.b()
l=m?a2:null
if(!g)k=S.bCU(t)||j.gpv()
else k=!1
return B.bD2(w,!0,m,n,q,a0,k,o,l,i,s,r,"Win "+B.by3(a3)+"/4")},
u(c8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3=this,c4=null,c5=$.aA,c6=c3.x,c7=A.aQ(c6==null?c4:J.D(c6,"status"))
if(c7==null)c7="\u2026"
w=c3.KS()
v=c3.kF()
u=c3.y
t=B.q6(u,v)
s=B.oy(u)
r=B.t3(u)
q=B.vK(u)
p=B.aCA(u)
o=B.oz(u)&&c7!=="waiting"
n=B.t4(u)
m=c3.ghW()
l=c3.aR1(n,m)
k=c3.zN(n,m)
j=new B.jR($.pc())
c6=t>=0
i=c6?B.t8(t,m):-1
h=s>=0
g=h?B.t8(s,m):-1
f=B.MY(c3.y,c3.x).length
e=c7==="waiting"&&!c3.gnV()
d=!1
if(e)if(!c3.Q){if(c5!=null)a0=c3.gpv()||f>=w
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
a4=c6}a5=c3.Jw(k)
a6=c3.KO(n,a1,a5,i<0?0:i,m,j,a4)
a7=a2&&r==="moving"&&a1>0&&a6.length===0
if(a7&&c3.CW!==6&&!c3.Q&&!c3.db){c3.db=!0
$.at.am$.push(new B.bco(c3,a1,s))}if(!a7)c3.db=!1
a8=new A.aR(l,new B.bcp(),A.aj(l).i("aR<1>")).gB(0)
a9=g>=0&&g<4?D.e7[g]:G.a6
c6=c5==null
b0=!c6&&c3.x==null&&c3.y==null
h=o&&v.length!==0&&p===v
if(c6)c6=D.US
else if(b0){c6=c3.z
c6=A.cB(!0,new A.ay(C.C,c4,C.K,C.u,A.a([A.aC(B.bCZ(c6==null?"Connecting\u2026":c6,200),c4,c4),A.aH(c4,A.dw(c4,c4,c4,D.a8m,c4,c4,new B.bcq(c8),c4,c4,c4,c4,c4),c4,c4,4,c4,4,c4)],x.p),c4),C.N,!0)}else{c6=c3.a
b1=c6.r.toLowerCase()
if(C.c.t(b1,"computer"))b2="Computer"
else b2=C.c.t(b1,"local")?"Local":"Online"
a0=x.p
c6=A.a([B.bD1("\u20b9"+c6.d+" \xb7 "+b2,new B.bcr(c8),c4,C.k.S(a8,2,4))],a0)
b3=!0
if(!c3.dy)if(!c3.k3){b3=c3.id
b3=b3!=null&&b3>0}if(b3&&!e&&!o){b3=G.im.j(0.88)
b4=A.x(20)
b5=F.R(G.a6.j(0.7),1)
c6.push(new A.a2(G.rj,A.y(c4,A.k(c3.dy||c3.k3?"Rolling\u2026":"This turn: "+A.v(c3.id),c4,c4,c4,c4,c4,D.OY,c4,c4),C.f,c4,c4,new A.t(b3,c4,b5,b4,c4,c4,C.m),c4,c4,c4,c4,A_.rq,c4,c4,c4),c4))}b3=c3.am
if(b3>0&&!e&&!o)c6.push(new B.a4k(b3,10,c4))
b3=A.a([],x.o)
for(b4=[0,1,2,3],b5=c3.gaSR(),b6=0;b6<4;++b6){b7=b4[b6]
b8=l[b7]
b9=g===b7
c0=i===b7
c1=c3.aD_(a1,b7,r,g)
if(!(c3.dy&&b9))c2=c3.k3&&c3.k4===b7
else c2=!0
b3.push(c3.aCa(b8,a3,c1,c0,c0,c2,b9,b7,b5,a5[b7]))}b3=A.a([new B.N2(b3,new B.bcs(c3,a9,l,a5,j,g,a6,a4,i),c4)],a0)
if(o){b4=A.a([H.dY.j(0.9),C.l.j(0.8)],x.O)
b8=A.x(16)
b9=F.R(G.a6.j(0.55),1)
b3.push(new A.bF(C.p,c4,c4,A.y(c4,A.k(p===v?"You won!":"Game over",c4,c4,c4,c4,c4,D.aCy,c4,c4),C.f,c4,c4,new A.t(c4,c4,b9,b8,c4,new F.ai(E.W,C.a_,C.t,b4,c4,c4),C.m),c4,c4,c4,G.rn,D.a4I,c4,c4,c4),c4))}if(c3.z!=null){b4=C.dB.j(0.8)
b8=A.x(10)
b9=F.R(G.cn.j(0.5),1)
c0=c3.z
c0.toString
b3.push(new A.bF(C.P,c4,c4,A.y(c4,A.k(c0,c4,c4,c4,c4,c4,A2.oJ,c4,c4),C.f,c4,c4,new A.t(b4,c4,b9,b8,c4,c4,C.m),c4,c4,c4,Ag.rk,G.rr,c4,c4,c4),c4))}c6.push(F.Q(new A.ay(C.C,c4,C.K,C.u,b3,c4),1))
c6.push(H.aw)
if(e){if(c3.Q)b3="Starting match\u2026"
else b3=f>=w?"Table full \u2014 starting\u2026":"Waiting for players "+f+" / "+w
b3=A.k(b3,c4,c4,c4,c4,c4,E.hO,c4,c4)
b4=d?c3.gaVD():c4
b5=A.om(A1.xx,A1.xx.j(0.4),c4,C.h,D.a4X,new A.cA(A.x(16),C.y),c4)
c6.push(new A.a2(D.a4o,F.P(A.a([b3,E.aH,K.me(A.k(c3.Q?"\u2026":"Start game",c4,c4,c4,c4,c4,c4,c4,c4),b4,b5)],a0),E.j,C.i,E.n),c4))}else{b3=c3.dy&&a2
if(a4)b4="Pick a token"
else if(a2)b4="Your Turn"
else{if(c3.gpv())b4=c3.dx||c3.Dt()
else b4=!1
if(b4)b4="Computer playing\u2026"
else b4=c3.Dt()?"Opponent's turn":"Wait"}c6.push(new A.a2(D.A9,new B.N4(a3,b5,b3,a4?"Move":"Roll Dice",b4,c4),c4))}c6=A.a([F.P(c6,E.j,C.i,E.n)],a0)
if(c3.Q)c6.push(A.bP(0,new A.dl(C.l.j(0.45),D.UK,c4)))
c6=A.cB(!0,new A.ay(C.C,c4,C.K,C.u,c6,c4),C.N,!0)}return new Ai.hu(h,new O.tx(A.cO(c4,D.qq,new B.zI(c6,c4),c4),!1,c4),c4)}}
B.Yv.prototype={
aZ(){this.bb()
this.b8()
this.di()},
l(){var w=this,v=w.aL$
if(v!=null)v.N(0,w.gdd())
w.aL$=null
w.aa()}}
B.ang.prototype={}
B.Yw.prototype={
a4(){this.ag()
B.vM()
$.at.am$.push(new B.bp0(this))},
l(){B.t6()
this.av0()}}
B.a4c.prototype={
u(d){return K.he(new B.Uk(this.c,this.d,null),new B.aDh(this),x.W)}}
B.Uk.prototype={
V(){return new B.afX()}}
B.afX.prototype={
a4(){this.av4()
$.at.b9$.push(this)},
kT(d){if(d===C.cA)if($.jS>0)A.hn()},
l(){$.at.he(this)
this.av3()},
gaW7(){switch(this.a.c.a){case"computer":return"Play against the computer"
case"local":return"Same phone \xb7 pass and play"
default:return"Join a public table"}},
u(d){var w=null
return A.cO(w,C.l,new B.zI(A.cB(!0,K.xV(w,w,new B.bcE(this,this.a.d),x.W,x.B),C.N,!0),w),w)},
zg(d,e){return this.aOA(d,e)},
aOA(d,e){var w=0,v=A.p(x.H),u,t=this,s,r,q
var $async$zg=A.q(function(f,g){if(f===1)return A.m(g,v)
for(;;)switch(w){case 0:q={}
w=t.a.c.a==="local"?3:4
break
case 3:q={}
q.a=!1
w=5
return A.e(F.uq(d,C.bd,new B.bcv(q,t,e).$0(),"assets/anim/ludo.json"),$async$zg)
case 5:s=t.c
if(s==null){w=1
break}if(!q.a){r=K.aD(s,!1,x.W).c.d
if(r==null)r="Could not deduct table amount"
d.Y(x.q).f.b7(F.ca(null,null,null,null,null,C.u,null,A.k(r,null,null,null,null,null,null,null,null),null,E.a3,null,null,null,null,null,null,null,null,null,null))
w=1
break}O.ZD(d,new B.N0(B.bT4(0,B.a4h(e.b)),!1,null),x.X)
w=1
break
case 4:q.a=null
w=6
return A.e(F.uq(d,C.bd,new B.bcw(q,t,e).$0(),"assets/anim/ludo.json"),$async$zg)
case 6:s=t.c
if(s==null){w=1
break}q=q.a
if(q==null||q.length===0){r=K.aD(s,!1,x.W).c.d
if(r==null)r="Could not join table"
d.Y(x.q).f.b7(F.ca(null,null,null,null,null,C.u,null,A.k(r,null,null,null,null,null,null,null,null),null,E.a3,null,null,null,null,null,null,null,null,null,null))
w=1
break}s=t.a.c
O.ZD(d,new B.ES(q,e.a,e.b,s.d,s.c,null),x.X)
case 1:return A.n(u,v)}})
return A.o($async$zg,v)}}
B.afJ.prototype={
u(d){var w=this,v=null,u=x.p,t=A.a([new B.zF(H.f_,w.e,38,v),H.bZ],u),s=D.mp.j(0.92),r=A.x(20),q=F.R(G.a6.j(0.45),1)
t.push(A.y(v,F.S(A.a([A.ag(M.eu,D.cP.j(0.95),v,v,15),G.aN,A.k(""+w.f+" Players",v,v,v,v,v,G.oM,v,v)],u),E.j,C.i,E.v,0),C.f,v,v,new A.t(s,v,q,r,v,v,C.m),v,v,v,v,G.hg,v,v,v))
return new A.a2(D.a4l,F.P(A.a([F.S(t,E.j,C.i,E.n,0),H.bB,F.cQ(C.p,K.Gd(H.wz,A.k(w.c,v,1,v,v,v,D.azS,v,v),new B.b9f()),E.as),Q.aZ,A.k(w.d,v,v,v,v,v,A.B(v,v,C.h.j(0.62),v,v,v,v,v,v,v,v,13,v,v,C.av,v,v,!0,v,v,v,v,v,v,v,v),v,v),E.aV],u),E.j,C.i,E.n),v)}}
B.Cd.prototype={
u(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.x(16),l=o.d,k=A.a4(D.mp,l,0.1)
k.toString
w=x.O
k=A.a([k,D.mt.j(0.96)],w)
v=F.R(G.a6.j(0.38),1)
u=A.a([new A.U(0,C.r,l.j(0.16),E.cG,14),new A.U(0,C.r,C.l.j(0.35),H.bq,8)],x.V)
t=A.x(15)
s=A.aH(n,A.ag(G.tl,C.h.j(0.035),n,n,72),n,n,n,86,-10,n)
r=A.a4(l,C.h,0.35)
r.toString
w=A.y(n,n,C.f,n,n,new A.t(n,n,n,n,n,new F.ai(C.P,C.V,C.t,A.a([r,l],w),n,n),C.m),n,n,n,n,n,n,n,5)
l=o.c
r=l.d
r=r.length!==0?r:"TABLE"
q=x.p
r=A.a([A.k(r,n,1,C.H,n,n,A.B(n,n,D.cP.j(0.9),n,n,n,n,n,n,n,n,13,n,n,C.x,n,n,!0,n,n,n,n,n,n,n,n),n,n),H.jv,F.cQ(E.W,A.k("\u20b9 "+B.c_N(l.a),n,1,n,n,n,D.az0,n,n),E.as)],q)
p=o.e
if(!p)C.b.H(r,A.a([H.bB,A.k(""+l.b+" players",n,n,n,n,n,A.B(n,n,C.h.j(0.55),n,n,n,n,n,n,n,n,11,n,n,C.R,n,n,!0,n,n,n,n,n,n,n,n),n,n)],q))
return A.y(n,A.dC(t,new A.ay(C.C,n,C.K,C.u,A.a([s,F.S(A.a([w,H.cX,D.aKa,H.cX,F.Q(new A.a2(G.fw,F.P(r,E.X,C.a1,E.n),n),1),new B.agL(l.c,l.b,p,n),E.Z,new A.a2(G.A0,new B.ah5(o.f,n),n)],q),E.j,C.i,E.n,0)],q),n),C.ak,n),C.f,n,n,new A.t(n,n,v,m,u,new F.ai(E.U,E.a0,C.t,k,n,n),C.m),n,n,n,n,n,n,n,n)}}
B.abB.prototype={
u(d){var w=null
return A.y(C.p,D.aFG,C.f,w,w,new A.t(w,w,F.R(D.mk,1.4),w,A.a([new A.U(0,C.r,G.a6.j(0.4),C.o,8)],x.V),D.asc,C.F),w,46,w,w,w,w,w,46)}}
B.agL.prototype={
u(d){var w,v,u=null,t=this.c,s=t.split("/"),r=s.length===2,q=r?A.cF(C.c.P(s[0]),u):u,p=r?A.cF(C.c.P(s[1]),u):u
if(q!=null&&p!=null&&p>0&&p<=6){t=x.p
r=A.a([],t)
for(w=0;w<p;++w)r.push(new A.a2(V.Ab,A.ag(H.cR,w<q?D.cP:C.h.j(0.22),u,u,15),u))
return F.P(A.a([F.S(r,E.j,C.i,E.v,0),H.bB,A.k(A.v(q)+" / "+A.v(p),u,u,u,u,u,D.P5,u,u)],t),E.j,C.i,E.v)}r=A.ag(M.eu,D.cP.j(0.9),u,u,16)
t=A.k(t,u,u,u,u,u,G.vz,u,u)
v=this.e?"seated":""+this.d+"P"
return F.P(A.a([r,H.bB,t,A.k(v,u,u,u,u,u,A.B(u,u,C.h.j(0.5),u,u,u,u,u,u,u,u,9,u,u,C.R,u,u,!0,u,u,u,u,u,u,u,u),u,u)],x.p),E.j,C.i,E.v)}}
B.ah5.prototype={
u(d){var w=null,v=A.x(12),u=A.x(12)
return A.aZ(!1,C.z,!0,w,A.b8(!1,v,!0,K.f_(D.aqn,w,new A.t(w,w,F.R(C.h.j(0.28),1),u,A.a([new A.U(0,C.r,D.e1.j(0.35),H.bq,8)],x.V),D.aaw,C.m),w,w,w),w,!0,w,w,w,w,w,w,w,w,this.c,w,w,w,w,w,w,w),C.f,C.w,0,w,w,w,w,w,C.G)}}
B.anh.prototype={}
B.Yx.prototype={
a4(){this.ag()
B.vM()
$.at.am$.push(new B.bp1(this))},
l(){B.t6()
this.aa()}}
B.a4i.prototype={
u(d){return new B.Ul(this.c,null)}}
B.Ul.prototype={
V(){return new B.Um()}}
B.Um.prototype={
a4(){this.av6()
$.at.b9$.push(this)},
kT(d){if(d===C.cA)if($.jS>0)A.hn()},
l(){$.at.he(this)
this.av5()},
aC0(){var w=this.c
w.toString
P.m4(w,new B.a4c(this.a.c,this.d,null),x.X)},
u(d){var w=null
return A.cO(w,w,new A.ay(C.C,w,C.K,C.u,A.a([A.bP(0,A.eZ(C.bm,G.a1S,C.Q,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new B.bcI(d),w,w,w,w,w,w)),A.cB(!0,A.aC(new A.a2(D.Ag,A.eZ(w,A.cc(new B.bcJ(this)),C.Q,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new B.bcK(),w,w,w,w,w,w),w),w,w),C.N,!0)],x.p),w),w)}}
B.ani.prototype={}
B.Yy.prototype={
a4(){this.ag()
B.vM()
$.at.am$.push(new B.bp2(this))},
l(){B.t6()
this.aa()}}
B.N_.prototype={
aH(b8,b9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=null,b4=b9.a,b5=b9.b,b6=Math.min(b4,b5),b7=b8.a
J.b2(b7.save())
b7.translate((b4-b6)/2,(b5-b6)/2)
w=b6/15
b5=b6*0.035
b4=0+b6
v=A.js(new A.W(0,0,b4,b4),new A.b9(b5,b5))
b5=b6*0.006
u=v.dP(new A.l(b5,b6*0.014))
$.ah()
t=A.al()
t.r=C.l.j(0.4).gq(0)
s=b6*0.022
t.z=new A.jr(C.r,s)
b8.cT(u,t)
t=A.al()
t.scX(D.aaD.cJ(0,new A.W(0,0,b4,b4)))
b8.cT(v,t)
r=new B.aCG(w)
q=new B.aCK()
p=new B.aCJ()
o=new B.aCL()
n=new B.aCI()
m=new B.aCH(q,p,o,n)
l=new B.aCN(m)
k=new B.aCM(m)
j=new B.aCO(q,p,o,n)
for(b4=-(b6*0.001),u=b6*0.0014,i=0;i<15;++i)for(h=0;h<15;++h){if(!j.$2(h,i))continue
t=r.$2(h,i)
g=t.a-b4
f=t.b-b4
e=t.c+b4
t=t.d+b4
d=new A.W(g,f,e,t)
$.ah()
a0=new A.eX(C.b9,C.aS,C.bj,C.br,C.bg)
a0.scX(D.aaJ.cJ(0,d))
a1=a0.ba()
b7.drawRect(A.dt(d),a1)
a1.delete()
a2=new A.eX(C.b9,C.aS,C.bj,C.br,C.bg)
a2.r=C.h.j(0.8).gq(0)
a0=Math.max(0.7,u)
a2.c=a0
a3=new A.eX(C.b9,C.aS,C.bj,C.br,C.bg)
a3.r=C.l.j(0.1).gq(0)
a3.c=a0
a1=a2.ba()
b7.drawLine.apply(b7,[g,f,e,f,a1])
a1.delete()
a1=a2.ba()
b7.drawLine.apply(b7,[g,f,g,t,a1])
a1.delete()
a1=a3.ba()
b7.drawLine.apply(b7,[g,t,e,t,a1])
a1.delete()
a1=a3.ba()
b7.drawLine.apply(b7,[e,f,e,t,a1])
a1.delete()}b4=6*w
u=0+b4
t=b2.b
b2.JE(b8,new A.W(0,0,u,u),D.dz,t[0],b6,w)
g=9*w
b4=g+b4
b2.JE(b8,new A.W(g,0,b4,u),D.e1,t[3],b6,w)
b2.JE(b8,new A.W(g,g,b4,b4),D.em,t[1],b6,w)
b2.JE(b8,new A.W(0,g,u,b4),D.dC,t[2],b6,w)
b2.re(b8,w,7,1,7,5,D.e1,!0)
b2.re(b8,w,1,7,5,7,D.dz,!1)
b2.re(b8,w,7,9,7,13,D.dC,!0)
b2.re(b8,w,9,7,13,7,D.em,!1)
b2.re(b8,w,1,6,1,6,D.dz,!1)
b2.re(b8,w,8,1,8,1,D.e1,!0)
b2.re(b8,w,13,8,13,8,D.em,!1)
b2.re(b8,w,6,13,6,13,D.dC,!0)
$.ah()
a4=A.al()
a4.r=H.cO.j(0.5).gq(0)
a4.b=C.aq
a4.c=Math.max(1,b6*0.0026)
a5=A.al()
a5.r=C.h.j(0.3).gq(0)
a5.b=C.aq
a5.c=Math.max(0.7,b6*0.0016)
for(a6=1;a6<15;++a6){a7=a6*w
for(b4=a7+0.6,u=a6-1,i=0;i<15;++i){if(l.$2(u,i))continue
t=i*w
g=(i+1)*w
a1=a5.ba()
b7.drawLine.apply(b7,[b4,t,b4,g,a1])
a1.delete()
a1=a4.ba()
b7.drawLine.apply(b7,[a7,t,a7,g,a1])
a1.delete()}}for(a8=1;a8<15;++a8){a9=a8*w
for(b4=a9+0.6,u=a8-1,h=0;h<15;++h){if(k.$2(h,u))continue
t=h*w
g=(h+1)*w
a1=a5.ba()
b7.drawLine.apply(b7,[t,b4,g,b4,a1])
a1.delete()
a1=a4.ba()
b7.drawLine.apply(b7,[t,a9,g,a9,a1])
a1.delete()}}b2.aDM(b8,w,b6)
b4=w*0.28
b2.JC(b8,r.$2(1,6).gb4(),b4,D.dz)
b2.JF(b8,r.$2(1,6),D.dz,0)
b2.JC(b8,r.$2(8,1).gb4(),b4,D.e1)
b2.JF(b8,r.$2(8,1),D.e1,1.5707963267948966)
b2.JC(b8,r.$2(13,8).gb4(),b4,D.em)
b2.JF(b8,r.$2(13,8),D.em,3.141592653589793)
b2.JC(b8,r.$2(6,13).gb4(),b4,D.dC)
b2.JF(b8,r.$2(6,13),D.dC,-1.5707963267948966)
b0=v.cs(-s)
b1=A.bs($.ah().w)
b1.Z(new A.hc(v))
b1.Z(new A.hc(b0))
b1.stm(E.lh)
s=A.al()
b4=v.a
u=v.b
t=v.c
g=v.d
s.scX(D.abj.cJ(0,new A.W(b4,u,t,g)))
b8.d2(b1,s)
s=A.al()
s.b=C.aq
s.c=b6*0.005
f=x.O
s.scX(new F.ai(E.U,E.a0,C.t,A.a([C.h.j(0.45),C.h.j(0.05),C.l.j(0.35)],f),b3,b3).cJ(0,new A.W(b4,u,t,g)))
b8.cT(v,s)
s=A.al()
s.b=C.aq
s.c=b6*0.008
s.scX(new An.oT(C.p,0,6.283185307179586,C.t,A.a([D.dz.j(0.7),D.em.j(0.7),D.e1.j(0.7),D.dC.j(0.7),D.dz.j(0.7)],f),b3,b3).cJ(0,new A.W(b0.a,b0.b,b0.c,b0.d)))
s.z=new A.jr(C.r,b5)
b8.cT(b0,s)
s=A.al()
s.b=C.aq
s.c=b6*0.0035
s.r=C.h.j(0.2).gq(0)
b8.cT(b0,s)
b7.restore()},
JE(a5,a6,a7,a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
if(a8)w=a7
else{v=A.a4(a7,C.Id,0.48)
v.toString
w=v}v=A.a4(w,C.h,0.3)
v.toString
u=A.a4(w,C.l,0.3)
u.toString
t=a9*0.016
s=A.js(a6,new A.b9(t,t))
t=s.dP(new A.l(b0*0.04,b0*0.06))
r=$.ah()
q=A.al()
q.r=C.l.j(0.18).gq(0)
q.z=new A.jr(C.r,b0*0.12)
a5.cT(t,q)
q=A.al()
t=x.O
q.scX(new F.ai(E.U,E.a0,C.t,A.a([v,w,u],t),D.adt,null).cJ(0,a6))
a5.cT(s,q)
q=s.cs(-(a9*0.004))
u=A.al()
u.b=C.aq
u.c=a9*0.007
u.r=C.l.j(0.2).gq(0)
a5.cT(q,u)
u=a9*0.002
q=s.cs(-u)
v=A.al()
v.b=C.aq
p=a9*0.003
v.c=p
v.r=C.h.j(0.32).gq(0)
a5.cT(q,v)
o=a6.gb4().a
n=a6.gb4().b
m=b0*3.25/2
l=A.bs(r.w)
l.Z(new A.dF(o,n-m))
l.Z(new A.bz(o+m,n))
l.Z(new A.bz(o,n+m))
l.Z(new A.bz(o-m,n))
l.Z(new A.fc())
r=A.EC(l,new A.l(1,1.5))
v=A.al()
v.r=C.l.j(0.12).gq(0)
a5.d2(r,v)
v=A.al()
v.scX(D.aai.cJ(0,A.fw(new A.l(o,n),m)))
a5.d2(l,v)
v=A.al()
v.b=C.aq
v.c=p
v.r=C.l.j(0.22).gq(0)
a5.d2(l,v)
k=b0*0.5
j=m*0.55
for(v=o-j,r=n-j,q=o+j,p=n+j,p=[new A.l(v,r),new A.l(q,r),new A.l(v,p),new A.l(q,p)],q=k*0.08,v=k*0.3,r=a5.a,i=k*0.95,h=a9*0.0025,g=k*0.06,f=k*0.72,e=0;e<4;++e){d=p[e]
a0=d.a
a1=d.b
a2=new A.eX(C.b9,C.aS,C.bj,C.br,C.bg)
a2.r=C.l.j(0.2).gq(0)
a2.z=new A.jr(C.r,v)
a3=a2.ba()
r.drawCircle(a0,a1+q,k,a3)
a3.delete()
a2=new A.eX(C.b9,C.aS,C.bj,C.br,C.bg)
a4=A.a4(w,D.a0N,0.72)
a4.toString
a2.scX(new K.cN(D.Qg,0.5,C.t,null,0,A.a([I.yt,a4,A.a4(w,C.l,0.2).j(0.4)],t),Am.l_,null).cJ(0,A.fw(d,k)))
a3=a2.ba()
r.drawCircle(a0,a1,i,a3)
a3.delete()
a2=new A.eX(C.b9,C.aS,C.bj,C.br,C.bg)
a2.b=C.aq
a2.c=Math.max(1,h)
a2.r=C.l.j(0.3).gq(0)
a3=a2.ba()
r.drawCircle(a0,a1,i,a3)
a3.delete()
a1=A.fw(new A.l(a0,a1-g),f)
a0=new A.eX(C.b9,C.aS,C.bj,C.br,C.bg)
a0.b=C.aq
a0.c=Math.max(1,u)
a0.r=C.h.j(0.55).gq(0)
a3=a0.ba()
r.drawArc.apply(r,[A.dt(a1),206.99999999999997,135,!1,a3])
a3.delete()}},
re(a2,a3,a4,a5,a6,a7,a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=A.a4(a8,C.h,0.28)
a1.toString
w=A.a4(a8,C.l,0.22)
w.toString
for(v=a2.a,u=x.O,t=-(a3*0.03),s=a3*0.08,r=a4;r<=a6;++r)for(q=r*a3,p=q+a3,o=q-t,n=p+t,m=n+-1,l=a5;l<=a7;++l){k=l*a3
j=k+a3
i=k-t
h=j+t
g=A.js(new A.W(o,i,n,h),new A.b9(s,s))
$.ah()
f=new A.eX(C.b9,C.aS,C.bj,C.br,C.bg)
e=a9?C.P:E.W
d=a9?C.V:C.a_
f.scX(new F.ai(e,d,C.t,A.a([a1,a8,w],u),null,null).cJ(0,new A.W(q,k,p,j)))
a0=f.ba()
v.drawRRect(A.mO(g),a0)
a0.delete()
g=o+1;++i
k=a9?new A.l(m,i):new A.l(g,h+-1)
j=new A.eX(C.b9,C.aS,C.bj,C.br,C.bg)
j.r=C.h.j(0.4).gq(0)
j.c=1.1
a0=j.ba()
v.drawLine.apply(v,[g,i,k.a,k.b,a0])
a0.delete()}},
aDM(d,e,f){var w,v,u,t,s=7.5*e,r=3*e,q=A.j6(new A.l(s,s),r,r),p=e*0.1
p=A.js(q,new A.b9(p,p))
$.ah()
w=A.al()
w.r=C.l.j(0.14).gq(0)
w.z=new A.jr(C.r,e*0.12)
d.cT(p,w)
v=r*0.48
u=v*0.88
w=new B.aCB(d,f)
w.$3(new B.aCF(s,s,v,u).$0(),D.e1,C.P)
w.$3(new B.aCE(s,v,s,u).$0(),D.em,C.a_)
w.$3(new B.aCC(s,s,v,u).$0(),D.dC,C.V)
w.$3(new B.aCD(s,v,s,u).$0(),D.dz,E.W)
w=e*0.18
t=A.js(q.cs(-(r*0.2)),new A.b9(w,w))
w=t.dP(D.apW)
p=A.al()
p.r=C.l.j(0.22).gq(0)
d.cT(w,p)
p=A.al()
p.scX(D.abn.cJ(0,new A.W(t.a,t.b,t.c,t.d)))
d.cT(t,p)
p=A.al()
p.b=C.aq
p.c=f*0.0035
p.r=C.l.j(0.28).gq(0)
d.cT(t,p)},
JF(d,e,f,g){var w,v,u,t,s,r,q=e.gb4(),p=e.gdQ()*0.4,o=d.a
J.b2(o.save())
o.translate(q.a,q.b)
d.a13(0,g)
w=A.bs($.ah().w)
v=-p
u=v*0.35
w.Z(new A.dF(u,v*0.45))
w.Z(new A.bz(p*0.55,0))
w.Z(new A.bz(u,p*0.45))
w.Z(new A.fc())
u=A.al()
t=A.a4(f,C.h,0.4)
t.toString
s=A.a4(f,C.l,0.2)
s.toString
r=v+p*2
u.scX(new F.ai(C.P,C.V,C.t,A.a([t,f,s],x.O),null,null).cJ(0,new A.W(v,v,r,r)))
d.d2(w,u)
u=A.al()
u.b=C.aq
u.c=Math.max(1,p*0.08)
u.r=C.l.j(0.4).gq(0)
d.d2(w,u)
o.restore()},
JC(d,e,f,g){var w,v,u
$.ah()
w=A.al()
v=A.a4(g,C.h,0.45)
v.toString
u=A.a4(g,C.l,0.25)
u.toString
w.scX(new K.cN(A0.wk,0.5,C.t,null,0,A.a([v,g,u],x.O),null,null).cJ(0,A.fw(e,f)))
this.a72(d,e,f,w)
w=A.al()
w.b=C.aq
w.c=f*0.12
w.r=C.l.j(0.4).gq(0)
this.a72(d,e,f,w)},
a72(d,e,f,g){var w,v,u,t,s,r,q,p=A.bs($.ah().w)
for(w=p.e,v=e.a,u=e.b,t=0;t<5;++t){s=t*4*3.141592653589793/5-1.5707963267948966
r=v+f*Math.cos(s)
q=u+f*Math.sin(s)
if(t===0){r=new A.dF(r,q)
w.push(r)
q=p.d
if(q!=null)r.cb(q)}else{r=new A.bz(r,q)
w.push(r)
q=p.d
if(q!=null)r.cb(q)}}p.Z(new A.fc())
d.d2(p,g)},
cj(d){return!A.dZ(d.b,this.b)}}
B.f7.prototype={
n(d,e){if(e==null)return!1
return e instanceof B.f7&&e.a===this.a&&e.b===this.b},
gG(d){return A.ar(this.a,this.b,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)}}
B.aCT.prototype={}
B.jq.prototype={}
B.jR.prototype={
N7(d,e){var w,v
if(e.c||e.b>=56)return D.HR
if(e.a)return null
w=e.b
if(w<=50)return this.a.a[C.k.ac(D.C6[d]+w,52)]
if(w<56){v=D.afC[d]
return v[w-51]}return D.HR},
p7(d,e){if(e.a||e.c||e.b>50)return null
return C.k.ac(D.C6[d]+e.b,52)},
Y5(d,e){if(d<1||d>6)return!1
if(e.c)return!1
if(e.a)return d===6
if(e.b+d>56)return!1
return!0},
agS(d,e,f,g){var w,v,u=J.D(d[e],g)
if(!this.Y5(f,u))return null
if(u.a){J.em(d[e],g,D.HU)
return null}w=u.b+f
if(w>=56)J.em(d[e],g,D.u7)
else{v=d[e]
J.em(v,g,new B.jq(!1,w,u.c))}return this.YZ(d,e)},
YZ(d,e){var w,v,u,t,s,r,q
if(e<0||e>=d.length)return null
for(w=x.t,v=null,u=0;u<J.au(d[e]);++u){t=this.p7(e,J.D(d[e],u))
if(t==null||D.ot.t(0,t))continue
for(s=0;s<d.length;++s){if(s===e)continue
for(r=0;r<J.au(d[s]);++r){q=J.D(d[s],r)
if(q.a||q.c)continue
if(this.p7(s,q)!==t)continue
J.em(d[s],r,D.fF)
if(v==null)v=A.a([s,r],w)}}}return v},
alP(d,e,f){var w,v
if(D.ot.t(0,f))return!1
for(w=0;w<d.length;++w){if(w===e)continue
for(v=0;v<J.au(d[w]);++v)if(this.p7(w,J.D(d[w],v))===f)return!0}return!1},
a04(d,e,f){var w,v=A.a([],x.t)
for(w=0;w<4;++w)if(this.Y5(f,J.D(d[e],w)))v.push(w)
return v},
baF(d){return C.b.f9(d,new B.aCQ())},
a05(d,e,f,g){var w,v,u,t,s,r,q,p=A.a([],x.e)
if(f.a){p.push(new B.vI(B.bTc(d,g),B.bTd(d,g)))
w=this.N7(d,D.HU)
if(w!=null)p.push(new B.vI(w.a+0.5,w.b+0.5))
return p}v=this.N7(d,f)
if(v!=null)p.push(new B.vI(v.a+0.5,v.b+0.5))
for(u=f.b,t=1;t<=e;++t){s=u+t
if(s>56)break
r=s>=56
q=this.N7(d,r?D.u7:new B.jq(!1,s,!1))
if(q==null)continue
p.push(new B.vI(q.a+0.5,q.b+0.5))
if(r)break}return p}}
B.vI.prototype={}
B.a4l.prototype={}
B.a4a.prototype={
u(a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=d.c/15,a2=a1*0.78,a3=a1*0.96,a4=A.a([],x._)
for(w=d.f,v=d.e,u=d.Q,t=u!=null,s=d.d,r=0;r<4;++r){if(!s[r])continue
for(q=100+r,p=200+r*4,o=0;o<4;++o){if(t&&u.a===r&&u.b===o)continue
n=J.D(v[r],o)
if(n.a&&!n.c){m=B.aCP(r)
l=o!==0
k=!l||o===2?-0.9212500000000001:0.9212500000000001
j=B.aCP(r)
i=!l||o===1?-0.9212500000000001:0.9212500000000001
a4.push(new B.xm(r,o,new B.f7(p+o,0),m.a+k,j.b+i,!1))}else{m=w.N7(r,n)
if(m==null)continue
l=n.c
a4.push(new B.xm(r,o,l?new B.f7(q,100):m,a0,a0,l))}}}h=A.F(x.T,x.g)
for(w=a4.length,g=0;g<a4.length;a4.length===w||(0,A.X)(a4),++g){f=a4[g]
J.e_(h.c9(0,f.c,new B.aCS()),f)}w=A.a([],x.p)
for(v=a4.length,g=0;g<a4.length;a4.length===v||(0,A.X)(a4),++g){e=a4[g]
s=e.c
q=h.h(0,s)
q.toString
q=J.btl(q,e)
s=h.h(0,s)
s.toString
w.push(d.aX4(a1,e,q,J.au(s),a3,a2))}if(t&&u.c.length!==0){v=u.a
t=u.b
w.push(new B.TR(a1,a2,a3,u.c,d.r[v],110,new A.d5("hop-"+v+"-"+t,x.i)))}return new A.ay(C.C,a0,C.at,C.u,w,a0)},
aX4(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o=this,n=null,m=g>1,l=m?Math.cos(f*2*3.141592653589793/g)*d*0.18:0,k=m?Math.sin(f*2*3.141592653589793/g)*d*0.18:0
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
r=B.bJa(d*15,d,u,s,l+w,k+v,h,i)
q=o.y&&e.a===o.w&&C.b.t(o.x,e.b)
p=!t&&q
m=q?new B.aCR(o,e):n
return A.aH(n,A.eZ(n,B.bD0(o.r[e.a],h,!1,q,i,p),C.Q,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,m,n,n,n,n,n,n),n,n,r.a,n,r.b,n)}}
B.TR.prototype={
V(){return new B.aeS(null,null)}}
B.aeS.prototype={
a4(){var w,v=this
v.ag()
w=v.a
w=A.bb(null,A.cb(0,Math.max(1,w.f.length-1)*w.w,0),0,null,1,null,v)
w.bC(0)
v.d!==$&&A.b0()
v.d=w},
l(){var w=this.d
w===$&&A.b()
w.l()
this.auJ()},
aR3(d){var w,v,u,t,s,r,q,p=this.a.f
if(p.length<=1)return C.b.gW(p)
w=C.d.S(d,0,1)*(p.length-1)
v=C.k.S(C.d.fd(w),0,p.length-2)
u=C.bu.a2(0,w-v)
t=p[v]
s=p[v+1]
r=t.a
q=t.b
return new B.vI(r+(s.a-r)*u,q+(s.b-q)*u)},
u(d){var w,v,u,t=this.d
t===$&&A.b()
w=this.a
v=w.d
u=w.e
return A.co(t,new B.b7L(this),B.bD0(w.r,u,!0,!1,v,!1))}}
B.a4d.prototype={
u(d){var w,v,u,t=this,s=null,r=t.c,q=t.d,p=A.a([],x.V),o=t.f
if(o){w=t.e.j(0.55)
v=t.r
u=v?14:9
p.push(new A.U(v?1.5:0.5,C.r,w,C.o,u))}if(t.r)p.push(new A.U(0,C.r,C.h.j(0.55),C.o,10))
return K.iw(s,A.dm(s,s,s,new B.a4e(t.e,o,t.w,s),new A.a1(r,q)),s,C.a9,new A.t(s,s,s,s,p,s,C.m),C.z,s,q,s,s,r)}}
B.a4e.prototype={
aH(b3,b4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=null,a7=b4.a,a8=b4.b,a9=a7/2,b0=this.b,b1=this.d,b2=A.a4(b0,C.h,b1?0.45:0.32)
b2.toString
w=A.a4(b0,C.l,0.38)
w.toString
v=A.a4(b0,C.l,0.55)
v.toString
u=$.ah()
t=A.al()
t.r=C.l.j(b1?0.22:0.38).gq(0)
t.z=new A.jr(C.r,b1?2.5:3.5)
s=a7*0.04
r=b1?0.62:0.78
q=b1?0.08:0.12
b3.mn(A.j6(new A.l(a9+s,a8*0.92),a8*q,a7*r),t)
p=a8*0.62
o=a8*0.9
n=(p+o)/2
m=a7*0.42
r=o-p
l=r/2
u=u.w
k=A.bs(u)
k.Z(new A.iT(A.j6(new A.l(a9,n),l*2,m*2)))
j=A.al()
q=x.O
j.scX(new F.ai(E.U,E.a0,C.t,A.a([b2,b0,w],q),I.nK,a6).cJ(0,new A.W(0,p,0+a7,p+r)))
b3.d2(k,j)
i=A.al()
i.b=C.aq
r=i.c=Math.max(1,s)
i.r=C.h.j(0.35).gq(0)
h=l*0.15
b3.FO(A.j6(new A.l(a9,n-h),l*1.1,m*1.7),3.6128315516282616,2.199114857512855,!1,i)
h=A.j6(new A.l(a9,n+h),l*1.2,m*1.85)
g=A.al()
g.b=C.aq
g.c=Math.max(1.2,a7*0.05)
g.r=v.j(0.55).gq(0)
b3.FO(h,0.15,2.199114857512855,!1,g)
f=a8*0.34
e=a8*0.52
d=A.bs(u)
g=a7*0.16
d.Z(new A.dF(a9-g,f))
h=a7*0.2
v=a7*0.28
a0=a8*0.02
a1=p+a0
d.Z(new A.w3(a9-h,e,a9-v,a1))
a2=a8*0.06
d.Z(new A.w3(a9,p+a2,a9+v,a1))
d.Z(new A.w3(a9+h,e,a9+g,f))
d.Z(new A.fc())
a3=A.al()
g=a7*0.3
h=a9-g
a3.scX(new F.ai(D.Qd,D.Qp,C.t,A.a([b2,b0,w],q),D.aej,a6).cJ(0,new A.W(h,f,h+a7*0.6,f+(p-f))))
b3.d2(d,a3)
u=A.bs(u)
u.Z(new A.dF(a9-a7*0.1,f+a0))
u.Z(new A.w3(a9-a7*0.14,e,a9-a7*0.18,p))
u.Z(new A.w3(a9-a7*0.08,e,a9-s,f+a8*0.04))
u.Z(new A.fc())
s=A.al()
s.r=C.h.j(0.22).gq(0)
b3.d2(u,s)
s=a8*0.28
a4=new A.l(a9,s)
a5=A.al()
v=A.a4(b0,C.h,b1?0.62:0.5)
v.toString
a5.scX(new K.cN(D.Qs,0.95,C.t,a6,0,A.a([v,b2,b0,w],q),D.ag4,a6).cJ(0,A.fw(a4,g)))
b3.cc(a4,g,a5)
b0=A.al()
b0.b=C.aq
v=this.c
b0.c=v?Math.max(1.6,a7*0.06):r
b0.r=(v?C.h.j(0.95):C.l.j(0.28)).gq(0)
b3.cc(a4,g,b0)
b0=g*0.38
b0=A.j6(new A.l(a9-g*0.32,s-b0),b0,g*0.55)
u=A.al()
u.r=C.h.j(b1?0.85:0.72).gq(0)
b3.mn(b0,u)
b0=A.al()
b0.r=C.h.j(0.35).gq(0)
b3.cc(new A.l(a9+g*0.18,s-g*0.15),g*0.08,b0)
b0=a7*0.38
g=A.j6(new A.l(a9,f+a8*0.01),a2,b0)
s=A.al()
v=a9-a7*0.19
s.scX(new F.ai(E.W,C.a_,C.t,A.a([b2,w],q),a6,a6).cJ(0,new A.W(v,f,v+b0,f+a2)))
b3.mn(g,s)},
cj(d){return!d.b.n(0,this.b)||d.c!==this.c||d.d!==this.d}}
B.xm.prototype={}
B.Yh.prototype={
l(){var w=this,v=w.ao$
if(v!=null)v.N(0,w.gcl())
w.ao$=null
w.aa()},
aZ(){this.bb()
this.b8()
this.cm()}}
B.MT.prototype={}
B.lC.prototype={
p(d){return this.a},
$ibT:1}
B.t7.prototype={}
B.vJ.prototype={
aH(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=this.b
if(k<=0)return
w=e.gdQ()*0.11
$.ah()
v=A.al()
v.r=G.pU.gq(0)
u=e.a
t=u/2
s=e.b
r=s/2
q=u*0.22
p=s*0.22
u-=q
s-=p
o=[new A.l(q,p),new A.l(t,p),new A.l(u,p),new A.l(q,r),new A.l(t,r),new A.l(u,r),new A.l(q,s),new A.l(t,s),new A.l(u,s)]
for(k=D.aok.h(0,C.k.S(k,1,6)),u=k.length,s=d.a,n=0;n<u;++n){m=o[k[n]]
l=v.ba()
s.drawCircle(m.a,m.b,w,l)
l.delete()}},
cj(d){return d.b!==this.b}}
B.MU.prototype={
V(){return new B.afU(C.bF)}}
B.afU.prototype={
a4(){var w,v=this
v.ag()
w=v.a.d
v.e=w>0?C.k.S(w,1,6):1
if(v.a.e)v.aed()},
aP(d){var w,v,u,t=this
t.b1(d)
w=t.a
v=w.e
if(v&&!d.e)t.aed()
else{v=!v
if(v&&d.e)t.aW_(w.d)
else{if(v){u=w.d
u=u!==d.d&&u>0}else u=!1
if(u)t.e=C.k.S(w.d,1,6)
else if(t.f&&v&&w.d>0)t.e=C.k.S(w.d,1,6)}}},
aed(){var w=this,v=w.d
if(v!=null)v.U(0)
w.f=!1
v=Date.now()
w.a.f.hN(0,!0)
w.d=A.fy(E.kB,new B.ba4(w,new A.c4(v,0,!1)))},
aFw(){var w,v=this,u=v.d
if(u!=null)u.U(0)
v.d=null
v.f=!0
u=v.a.f
w=u.r
if(w!=null&&w.a!=null){u.bA(0)
v.a.f.sq(0,0)}if(v.c==null)return
v.E(new B.ba2())},
aW_(d){var w,v,u=this,t=u.d
if(t!=null)t.U(0)
u.d=null
t=u.f=!1
w=u.a.f
v=w.r
if(v!=null?v.a!=null:t){w.bA(0)
u.a.f.sq(0,0)}if(u.c==null)return
u.E(new B.ba5(u,d))},
l(){var w=this.d
if(w!=null)w.U(0)
this.aa()},
u(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.a.d,i=j>0?C.k.S(j,1,6):0
if(l.a.e&&!l.f)w=C.k.S(l.e,1,6)
else w=i>0?i:C.k.S(l.e,1,6)
j=l.a
v=j.f
u=j.r
t=u&&!j.e?j.w:k
s=!u
r=!s||j.e||j.d>0?1:0.35
q=j.x
p=j.e
o=p?C.h:C.jZ
n=A.x(10)
if(p)m=j.c
else m=!s||j.d>0?j.c:H.bQ
if(p)s=3
else s=!s||j.d>0?2.5:1.5
s=F.R(m,s)
if(p)j=j.c.j(0.45)
else j=u?j.c.j(0.35):C.l.j(0.25)
u=l.a
p=u.e
if(p)u=12
else u=u.r?8:4
p=p?1:0
u=A.a([new A.U(p,C.r,j,C.o,u),new A.U(0,C.r,C.l.j(0.22),E.aJ,4)],x.V)
j=l.a
p=j.x
m=p*0.14
if(w>0){j=p*0.58
j=F.rh(A.dm(k,k,new A.d5(w,x.k),new B.vJ(w,k),new A.a1(j,j)),E.kB,F.r0(),C.bR,C.cQ,new B.ba6())}else{j=j.r||j.e?G.pU:C.b1
p=A.aC(A.k("?",k,k,k,k,k,A.B(k,k,j,k,k,k,k,k,k,k,k,p*0.38,k,k,C.D,k,1,!0,k,k,k,k,k,k,k,k),k,k),k,k)
j=p}return A.co(v,new B.ba7(l),A.eZ(k,A.dG(K.iw(k,j,k,C.a9,new A.t(o,k,s,n,u,k,C.m),C.bS,k,q,k,new A.A(m,m,m,m),q),r),C.Q,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,t,k,k,k,k,k,k))}}
B.a4f.prototype={
u(d){var w,v,u,t,s=this,r=null,q=x.p,p=A.a([new B.zF(H.bL,s.c,36,r),H.aU,new B.zF(G.c6,new B.aDj(d),36,r)],q),o=s.d
if(o!=null)C.b.H(p,A.a([H.aU,new B.zF(Ab.kR,o,36,r)],q))
p=F.S(p,E.j,C.i,E.v,0)
o=D.mp.j(0.9)
w=A.x(20)
v=F.R(G.a6.j(0.35),1)
w=F.Q(F.P(A.a([D.a5M,Q.aZ,F.cQ(C.p,A.y(r,A.k(s.e,r,1,r,r,!1,A.B(r,r,C.h.j(0.85),r,r,r,r,r,r,r,r,11,r,r,C.R,r,r,!0,r,0.3,r,r,r,r,r,r),r,r),C.f,r,r,new A.t(o,r,v,w,r,r,C.m),r,r,r,r,H.hf,r,r,r),E.as)],q),E.j,C.i,E.n),1)
v=A.a([],q)
o=D.mp.j(0.92)
u=A.x(20)
t=F.R(G.a6.j(0.4),1)
v.push(A.y(r,F.S(A.a([A.ag(M.eu,D.cP.j(0.95),r,r,16),G.aN,A.k(""+s.f+" Players",r,r,r,r,r,D.P5,r,r)],q),E.j,C.i,E.v,0),C.f,r,r,new A.t(o,r,t,u,r,r,C.m),r,r,r,r,G.hg,r,r,r))
return new A.a2(D.a4b,F.P(A.a([F.S(A.a([p,w,F.S(v,E.j,C.i,E.v,0)],q),E.j,C.i,E.n,0),E.aH,A.y(r,r,C.f,r,r,new A.t(r,r,r,r,r,new F.ai(E.W,C.a_,C.t,A.a([C.w,G.a6.j(0.45),C.w],x.O),r,r),C.m),r,1,r,E.ce,r,r,r,r)],q),E.j,C.i,E.n),r)}}
B.afZ.prototype={
u(d){var w,v=null,u=x.x,t=A.ag(A_.Bs,D.cP,v,A.a([new A.c7(G.a6.j(0.55),C.o,6)],u),15)
$.ah()
w=A.al()
w.scX(D.aaC.cJ(0,D.au2))
return F.S(A.a([D.aL4,V.Oa,t,H.d9,A.k("LUDO",v,v,v,v,v,A.B(v,v,v,v,v,v,v,v,v,v,v,22,v,v,C.D,w,1,!0,v,4.2,v,v,v,A.a([new A.c7(G.a6.j(0.45),C.o,8),Ae.NA],u),v,v),v,v),H.d9,D.aL5],x.p),E.j,C.a1,E.v,0)}}
B.Uv.prototype={
u(d){var w,v,u=null,t=A.x(5),s=this.c,r=A.a4(s,C.h,0.35)
r.toString
w=A.a4(s,C.l,0.25)
w.toString
w=A.a([r,s,w],x.O)
r=A.a([new A.U(0,C.r,s.j(0.45),E.aJ,6)],x.V)
v=F.R(C.h.j(0.35),1)
return A.y(u,A.dm(u,u,u,new B.vJ(s.n(0,D.dC)?5:3,u),C.ab),C.f,u,u,new A.t(u,u,v,t,r,new F.ai(E.U,E.a0,C.t,w,u,u),C.m),u,16,u,u,u,u,u,16)}}
B.zF.prototype={
u(d){var w=null,v=this.e,u=F.R(G.a6,1.6),t=A.a([new A.U(0,C.r,G.a6.j(0.22),C.o,8)],x.V)
return A.aZ(!1,C.z,!0,w,A.b8(!1,w,!0,K.f_(A.ag(this.c,D.cP,w,w,v*0.42),w,new A.t(w,w,u,w,t,D.aad,C.F),v,w,v),C.bb,!0,w,w,w,w,w,w,w,w,this.d,w,w,w,w,w,w,w),C.f,C.w,0,w,w,w,w,w,C.G)}}
B.a4k.prototype={
u(d){var w,v,u,t,s,r,q,p,o=null,n=this.c
if(n<=0)return C.ap
w=C.c.fP(C.k.p(C.k.bj(n,60)),2,"0")
v=C.c.fP(C.k.p(C.k.ac(n,60)),2,"0")
u=n<=3
t=C.d.S(n/Math.max(1,this.d),0,1)
s=u?C.dk:D.cP
n=x.p
r=F.S(A.a([A.ag(V.Bd,s,o,o,14),H.aU,A.k("Time left",o,o,o,o,o,A.B(o,o,C.h.j(0.72),o,o,o,o,o,o,o,o,11,o,o,C.R,o,o,!0,o,0.3,o,o,o,o,o,o),o,o),H.bZ,A.k(w+":"+v,o,o,o,o,o,A.B(o,o,s,o,o,o,o,o,o,o,D.af6,13,o,o,C.x,o,o,!0,o,0.6,o,o,o,o,o,o),o,o)],n),E.j,C.i,E.n,0)
q=A.x(99)
p=C.h.j(0.08)
return new A.a2(D.a4x,F.P(A.a([r,H.aw,A.dC(q,new A.G(o,4,new A.ay(C.C,o,C.at,C.u,A.a([new A.dl(p,o,o),Ap.axP(E.W,A.bI(o,new A.t(o,o,o,o,o,new F.ai(E.W,C.a_,C.t,u?D.agv:D.acD,o,o),C.m),C.Y),o,t)],n),o),o),C.ak,o)],n),E.j,C.i,E.n),o)}}
B.a4g.prototype={
u(d){var w=this.r?this.y:D.Qw
return A.co(w,new B.aDk(this,32,34),null)},
gaG(d){return this.d}}
B.N2.prototype={
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
if(u.length!==0)v.push(new B.Wk(u,null))
v.push(F.Q(new A.a2(D.a5j,A.cc(new B.aDi(this)),null),1))
if(s.length!==0)v.push(new B.Wk(s,null))
return F.P(v,E.j,C.i,E.n)}}
B.Wk.prototype={
u(d){var w,v,u,t=x.p,s=A.a([],t)
for(w=this.c,v=0;v<w.length;++v){u=A.a([],t)
if(v>0)u.push(E.Z)
u.push(new F.ed(1,E.cl,w[v],null))
C.b.H(s,u)}return new A.a2(E.fx,F.S(s,E.j,C.i,E.n,0),null)}}
B.zH.prototype={
u(d){var w=null,v=this.c,u=v+10,t=A.x(16),s=A.a([new A.U(0,C.r,this.e.j(0.16),C.o,18),new A.U(0,C.r,C.l.j(0.45),E.f5,16)],x.V),r=F.R(C.h.j(0.14),1)
return A.y(w,A.dC(A.x(13),new A.G(v,v,this.d,w),C.ak,w),C.f,w,w,new A.t(w,w,r,t,s,D.aah,C.m),w,u,w,w,D.a5w,w,w,u)}}
B.N4.prototype={
u(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.c,k=l||n.e,j=k?1:0.45
l=l&&!n.e?n.d:m
w=A.x(16)
v=A.x(16)
u=k?D.agc:D.ago
t=F.R(k?G.a6.j(0.9):C.h.j(0.14),1.4)
s=x.V
r=A.a([],s)
if(k)r.push(new A.U(0,C.r,D.qv.j(0.35),E.cG,14))
q=A.x(8)
s=A.a([new A.U(0,C.r,C.l.j(0.25),E.aJ,4)],s)
p=n.e
s=A.y(m,A.dm(m,m,m,new B.vJ(p?6:5,m),C.ab),C.f,m,m,new A.t(C.h,m,m,q,s,m,C.m),m,36,m,m,A7.n8,m,m,36)
q=p?"Rolling\u2026":n.r
q=A.k(q,m,m,m,m,m,A.B(m,m,D.cP.j(0.9),m,m,m,m,m,m,m,m,11,m,m,C.R,m,1.1,!0,m,m,m,m,m,m,m,m),m,m)
o=x.p
return A.dG(A.aZ(!1,C.z,!0,m,A.b8(!1,w,!0,K.f_(F.S(A.a([s,H.cX,F.P(A.a([q,A.k(p?"Wait":n.f,m,m,m,m,m,D.aAs,m,m)],o),E.X,C.i,E.v)],o),E.j,C.a1,E.n,0),m,new A.t(m,m,t,v,r,new F.ai(C.P,C.V,C.t,u,m,m),C.m),m,D.a4A,1/0),m,!0,m,m,m,m,m,m,m,m,l,m,m,m,m,m,m,m),C.f,C.w,0,m,m,m,m,m,C.G),j)}}
B.zI.prototype={
u(d){var w=null,v=K.ki(d)===C.cp,u=v?A6.btF(d,D.Cg):D.Cg,t=K.bu("assets/games_assets/common/home_bg2.jpg",C.p,w,w,w,w,w,w,new B.aDn(d),!1,C.T,E.aE,w,!1,w,!1,w,!1,w,w,H.S,w,w,w)
t=A.a([t,A.bI(w,new A.t(w,w,w,w,w,new F.ai(C.P,C.V,C.t,v?A.a([u[0].j(0.9),u[1].j(0.94),u[2].j(0.95)],x.O):u,w,w),C.m),C.Y),D.a2s],x.p)
C.b.H(t,this.aCc())
t.push(this.c)
return new A.ay(C.C,w,C.at,C.u,t,w)},
aCc(){var w,v,u=null,t=A.a([],x.p)
for(w=x.O,v=0;v<4;++v)t.push(new A.bF(D.alE[v],u,u,A.y(u,u,C.f,u,u,new A.t(u,u,u,u,u,new K.cN(C.p,0.5,C.t,u,0,A.a([D.e7[D.C7[v]].j(0.08),D.e7[D.C7[v]].j(0)],w),u,u),C.F),u,160,u,u,u,u,u,160),u))
return t}}
B.afW.prototype={
aH(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=new A.ua()
k.uv(7)
$.ah()
w=A.al()
w.r=C.h.j(0.028).gq(0)
v=A.al()
v.r=C.h.j(0.04).gq(0)
v.b=C.aq
v.c=1
for(u=e.a,t=e.b,s=d.a,r=0;r<18;++r){q=k.b5()*u
p=k.b5()*t
o=10+k.b5()*18
n=o*0.18
m=A.js(A.j6(new A.l(q,p),o,o),new A.b9(n,n))
J.b2(s.save())
s.translate(q,p)
s.rotate(k.b5()*3.141592653589793*180/3.141592653589793,0,0)
s.translate(-q,-p)
l=w.ba()
s.drawRRect(A.mO(m),l)
l.delete()
l=v.ba()
s.drawRRect(A.mO(m),l)
l.delete()
s.restore()}},
cj(d){return!1}}
var z=a.updateTypes(["am<~>()","~()","~(@)","Cd(u,r)","L(jq)","am<T<hj>>(r)","T<hj>(T<hj>)","r(t9,t9)","vN(u,ab<h,@>)","~(r,r)","c(K)","hB(u)","uz(u)","tH(u)","iX<r>(r)","~(T<T<jq>>)","zH(K)","zG(u)","kn(u,q7)","De(u,ad)","ed(r)","T<xm>()"])
B.aCr.prototype={
$1(d){return d.b===this.a},
$S:234}
B.aCs.prototype={
$1(d){return d.b===this.a},
$S:234}
B.aCq.prototype={
$1(d){return J.J(d)},
$S:33}
B.aCt.prototype={
$1(d){return d},
$S:127}
B.aDe.prototype={
$1(d){return O.z_(this.a.as.c,50,d,this.b)},
$S:z+5}
B.aDf.prototype={
$1(d){return d},
$S:z+6}
B.aDg.prototype={
$2(d,e){var w=C.k.bl(d.a,e.a)
if(w!==0)return w
return C.k.bl(d.b,e.b)},
$S:z+7}
B.brJ.prototype={
$2(d,e){var w=A.aQ(J.D(e,"mode"))
if(w==null)w="online"
if(w==="online")return D.anV
return new B.vN(new B.a4i(B.bTh(w),null),null)},
$S:z+8}
B.baD.prototype={
$0(){if($.jS>0)A.hn()},
$S:0}
B.baB.prototype={
$1(d){if(this.a.c!=null)this.b.$0()},
$S:2}
B.baC.prototype={
$1(d){return this.a.vn()},
$S:2}
B.baA.prototype={
$1(d){var w=this.a
if(w.c!=null)w.vn()},
$S:2}
B.ban.prototype={
$0(){var w=this.a
w.as=!1
w.at=A.a([],x.t)},
$S:0}
B.bao.prototype={
$1(d){this.a.vn()},
$S:2}
B.bai.prototype={
$0(){return this.a.Q=!0},
$S:0}
B.baj.prototype={
$0(){return this.a.x=this.b.cS(6)+1},
$S:0}
B.bak.prototype={
$0(){return this.a.Q=!1},
$S:0}
B.bal.prototype={
$0(){this.a.S7()},
$S:0}
B.bam.prototype={
$0(){var w,v=this.a
v.as=!0
w=v.f
w===$&&A.b()
v.at=v.r.a04(w,this.b,this.c)},
$S:0}
B.ba9.prototype={
$1(d){this.a.vn()},
$S:2}
B.baa.prototype={
$0(){var w=this,v=w.a
v.as=!1
v.at=A.a([],x.t)
v.ch=new B.a4l(w.b,w.c,w.d)},
$S:0}
B.bab.prototype={
$0(){return this.a.ch=null},
$S:0}
B.bac.prototype={
$0(){var w=this.a
w.as=!1
w.at=A.a([],x.t)},
$S:0}
B.bad.prototype={
$0(){var w=this.a
w.as=!1
w.at=A.a([],x.t)},
$S:0}
B.bae.prototype={
$0(){var w=this.a
w.as=!1
w.at=A.a([],x.t)
w.S7()},
$S:0}
B.bar.prototype={
$0(){},
$S:0}
B.bas.prototype={
$1(d){var w=null,v=A.x(20),u=A.k(this.b,w,w,w,w,w,A.B(w,w,D.e7[this.c],w,w,w,w,w,w,w,w,w,w,w,C.B,w,w,!0,w,w,w,w,w,w,w,w),w,w)
return K.kd(A.a([K.me(D.aG4,new B.baq(this.a,d),w)],x.p),w,D.mt,D.aFW,w,w,new A.cA(v,C.y),u,w)},
$S:z+11}
B.baq.prototype={
$0(){A.aS(this.b,!1).ep(0,null)
var w=this.a.c
w.toString
A.aS(w,!1).ep(0,null)},
$S:0}
B.bat.prototype={
$0(){return this.a.a.$0()},
$S:0}
B.bau.prototype={
$1(d){var w=this.b.c
if(w==null)return
this.a.a=N.bwx(w)},
$S:2}
B.bah.prototype={
$1(d){var w,v,u=null,t=x.O,s=A.a([M.zb,D.mt,A3.qj],t),r=A.x(22),q=F.R(G.a6.j(0.65),1.5),p=x.V,o=A.a([new A.U(1,C.r,G.a6.j(0.18),C.o,26),new A.U(0,C.r,C.l.j(0.55),H.f4,20)],p)
t=A.a([C.bt.j(0.5),C.dB.j(0.28)],t)
t=A.y(u,M.By,C.f,u,u,new A.t(u,u,F.R(H.fo.j(0.5),1),u,A.a([new A.U(0,C.r,C.bt.j(0.25),C.o,14)],p),new F.ai(E.U,E.a0,C.t,t,u,u),C.F),u,58,u,u,u,u,u,58)
p=A.k("Your current match will end.\nAll progress will be lost.",u,u,u,u,u,A.B(u,u,C.h.j(0.62),u,u,u,u,u,u,u,u,14,u,u,u,u,1.45,!0,u,u,u,u,u,u,u,u),C.M,u)
w=C.h.j(0.28)
v=x.p
return A9.bzY(A.bI(new A.a2(M.Ad,F.P(A.a([t,M.ju,D.aFZ,E.aV,p,Ac.oB,F.S(A.a([F.Q(K.a5b(Aa.vB,new B.baf(d),A.Fa(u,u,u,u,u,u,u,u,u,C.J,u,u,E.eX,u,new A.cA(A.x(12),C.y),new A.aJ(w,1,C.E,-1),u,u,u,u)),1),H.cX,F.Q(K.me(A2.Ph,new B.bag(d),A.om(C.bt,u,u,C.h,E.eX,new A.cA(A.x(12),C.y),u)),1)],v),E.j,C.i,E.n,0)],v),E.j,C.i,E.v),u),new A.t(u,u,q,r,o,new F.ai(E.U,E.a0,C.t,s,u,u),C.m),C.Y),400)},
$S:z+12}
B.baf.prototype={
$0(){A.aS(this.a,!1).ep(0,!1)
return null},
$S:0}
B.bag.prototype={
$0(){A.aS(this.a,!1).ep(0,!0)
return null},
$S:0}
B.baw.prototype={
$1(d){return d},
$S:127}
B.baz.prototype={
$2(d,e){if(!d)this.a.CS()},
$S:236}
B.bax.prototype={
$0(){A.aS(this.a,!1).fi(0,A.i0(new B.bav(),null,x.H))},
$S:0}
B.bav.prototype={
$1(d){return G.Nx},
$S:z+13}
B.bay.prototype={
$0(){return this.a.aa5()},
$S:0}
B.bap.prototype={
$0(){return this.a.aa5()},
$S:0}
B.boY.prototype={
$1(d){if(this.a.c!=null)if($.jS>0)A.hn()},
$S:2}
B.baE.prototype={
$0(){var w=this.a.c
w.toString
P.m4(w,new B.vL(D.iX,null),x.X)
return null},
$S:0}
B.baF.prototype={
$0(){var w=this.a.c
w.toString
P.m4(w,new B.vL(D.HS,null),x.X)
return null},
$S:0}
B.baG.prototype={
$0(){var w=this.a.c
w.toString
P.m4(w,new B.vL(D.iX,null),x.X)
return null},
$S:0}
B.baH.prototype={
$0(){var w=this.a.c
w.toString
P.m4(w,new B.vL(D.HS,null),x.X)
return null},
$S:0}
B.b01.prototype={
$1(d){return this.a.c.$0()},
$S:52}
B.b93.prototype={
$1(d){return D.aaV.cJ(0,d)},
$S:65}
B.boZ.prototype={
$1(d){if(this.a.c!=null)if($.jS>0)A.hn()},
$S:2}
B.bbp.prototype={
$1(d){var w,v,u,t,s,r=this.a
if(r.c==null)return
if(x.f.b(d)){w=A.an(d,x.N,x.z)
v=w.h(0,"code")
u=J.fN(v)
if(u.n(v,200)||u.n(v,"200")){r.E(new B.bbq(r,w))
t=L.dj(w)
u=t.a
if(u!=null){r.f.sda(0,u)
s=t.d
if(s>0)r.e=s
r.rp(new B.bbr(r,t))
r.UY(u)}r.E(new B.bbs(r))
r.KB()
r.Kz()}else r.E(new B.bbt(r,w))}},
$S:4}
B.bbq.prototype={
$0(){var w=this.a
w.z=this.b
w.x=null},
$S:0}
B.bbr.prototype={
$0(){N.cv("ludo_online").dJ("joinRoom",this.a.z4(this.b.a))},
$S:0}
B.bbs.prototype={
$0(){return this.a.Q=!1},
$S:0}
B.bbt.prototype={
$0(){var w=this.a,v=this.b.h(0,"message")
v=v==null?null:J.J(v)
w.x=v==null?"Room create failed":v
w.Q=!1},
$S:0}
B.bbu.prototype={
$1(d){var w,v=this.a
if(v.c==null)return
if(J.f(d,"game_started")){v.rq()
return}if(v.gjk().length===0)return
w=v.ch
if(w!=null)w.U(0)
v.ch=A.c0(A5.kC,new B.bbv(v))},
$S:4}
B.bbv.prototype={
$0(){var w=this.a
if(w.c==null||w.gjk().length===0)return
w.UX(w.gjk())},
$S:0}
B.bbw.prototype={
$1(d){var w,v,u,t,s=this.a
if(s.c==null)return
w=x.f
if(w.b(d)){v=A.an(d,x.N,x.z)
if(J.f(v.h(0,"success"),!1)){w=v.h(0,"message")
u=w==null?null:J.J(w)
if(u!=null&&u.length!==0)s.E(new B.bbx(s,u))
return}t=!0
if(!J.f(v.h(0,"success"),!0))if(!w.b(v.h(0,"ludoState"))){w=v.h(0,"gameId")
if(w==null)w=v.h(0,"game_id")
w=(w==null?null:J.J(w).length!==0)===!0
t=w}if(t)s.rq()}},
$S:4}
B.bbx.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.bbG.prototype={
$0(){var w,v,u=this.a
if(L.dj(u.z).gl0())w="All "+u.gnW()+" players ready \u2014 starting match\u2026"
else{w=u.gv6()
v=u.z
w=w.length!==0?"Waiting: "+L.dj(v).e+"/"+u.gnW()+" joined. Share code: "+u.gv6():"Waiting: "+L.dj(v).e+"/"+u.gnW()+" joined. Generating invite code\u2026"}u.y=w},
$S:0}
B.baW.prototype={
$1(d){var w
this.a.d0("connect",this.b.aM())
w=this.c
if((w.a.a&30)===0)w.eQ(0)},
$S:4}
B.bb2.prototype={
$0(){var w=this.a
w.z=this.b
w.x=null},
$S:0}
B.bbC.prototype={
$1(d){this.a.UX(this.b)},
$S:14}
B.bbl.prototype={
$0(){var w=this.a
w.y="Lobby full ("+w.gnW()+"/"+w.gnW()+") \u2014 starting match\u2026"},
$S:0}
B.bbD.prototype={
$0(){var w=N.cv("ludo_online"),v=this.a,u=this.b
w.dJ("joinRoom",v.z4(u))
w.dJ("startGame",v.z4(u))},
$S:0}
B.bbE.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.bbF.prototype={
$0(){return this.a.x=this.b.a},
$S:0}
B.baQ.prototype={
$0(){var w=this.a
w.y=w.x=null
w.Q=!0},
$S:0}
B.baR.prototype={
$0(){var w=this.a
w.x="Please log in to continue."
w.Q=!1},
$S:0}
B.baS.prototype={
$0(){var w=this.a
return w.y="Creating room ("+w.e+" players)\u2026"},
$S:0}
B.baT.prototype={
$0(){var w="ludo_online",v=N.cv(w),u=this.a,t=A.d8(u.aMz(),x.N,x.z)
t.k(0,"bootValue",u.d)
t.k(0,"boot_value",u.d)
t.k(0,"noOfPlayers",u.e)
t.k(0,"no_of_players",u.e)
t.k(0,"gameType",w)
t.k(0,"game_type",w)
t.k(0,"private_table",!0)
v.dJ("getPrivateTable",t)},
$S:0}
B.baU.prototype={
$0(){var w=this.a
w.x="Could not connect to server \u2014 check network and URL."
w.Q=!1},
$S:0}
B.baV.prototype={
$0(){var w=this.a
if(w.c==null||!w.Q)return
w.E(new B.baP(w))},
$S:8}
B.baP.prototype={
$0(){var w=this.a
w.Q=!1
if(w.gjk().length===0)w.x="No response from server \u2014 timed out."},
$S:0}
B.bbb.prototype={
$0(){var w=this.a
w.y=w.x=null
w.Q=!0},
$S:0}
B.bbc.prototype={
$0(){var w=this.a
w.x="Enter a table ID from your host."
w.Q=!1},
$S:0}
B.bbd.prototype={
$0(){var w=this.a
w.x="Please log in to continue."
w.Q=!1},
$S:0}
B.bbe.prototype={
$0(){var w=this.a.a
if(w!=null)this.b.z=w},
$S:0}
B.bbf.prototype={
$0(){this.b.dJ("joinRoom",this.a.z4(this.c))},
$S:0}
B.bbg.prototype={
$0(){var w=this.a
w.x=y.d
w.Q=!1},
$S:0}
B.bbh.prototype={
$0(){var w=this.a
w.y="Joined successfully. Match starts when lobby is full."
w.Q=!1},
$S:0}
B.bbi.prototype={
$0(){var w=this.a
w.x=this.b.a
w.Q=!1},
$S:0}
B.bbj.prototype={
$0(){var w=this.a
w.x=A.v(this.b)
w.Q=!1},
$S:0}
B.bbH.prototype={
$1(d){return!this.a.aaa(d)},
$S:9}
B.baX.prototype={
$0(){var w=this.a
w.x="Join failed \u2014 could not read table from server. Try again."
w.Q=!1},
$S:0}
B.baY.prototype={
$0(){return this.b.z=this.a.a},
$S:0}
B.baZ.prototype={
$0(){N.cv("ludo_online").dJ("joinRoom",this.b.z4(this.a.b))
return null},
$S:0}
B.bb_.prototype={
$0(){var w=this.a
w.x=y.d
w.Q=!1},
$S:0}
B.bb0.prototype={
$0(){return this.a.Q=!1},
$S:0}
B.bb1.prototype={
$0(){var w=this.a
w.y="Joined by code. Match starts when lobby is full."
w.Q=!1},
$S:0}
B.bb5.prototype={
$0(){var w=this.a
w.y=w.x=null
w.Q=!0},
$S:0}
B.bb6.prototype={
$0(){var w=this.a
w.x="Enter invite code (3\u20134 characters)."
w.Q=!1},
$S:0}
B.bb7.prototype={
$0(){var w=this.a
w.x="Please log in to continue."
w.Q=!1},
$S:0}
B.bb8.prototype={
$0(){var w,v=this.b
v.y=v.z=null
w=this.a.a
w=w==null?null:w.a
v.x=w==null?"Join nahi hua \u2014 host ki table pe seat nahi mili. Dono phones pe alag-alag account se login karo, naya room banao, phir code se JOIN karo.":w
v.Q=!1},
$S:0}
B.bb9.prototype={
$0(){var w=this.a
w.x=this.b.a
w.Q=!1},
$S:0}
B.bba.prototype={
$0(){var w=this.a
w.x=A.v(this.b)
w.Q=!1},
$S:0}
B.bby.prototype={
$0(){var w=this.a
w.y=w.x=null},
$S:0}
B.bbz.prototype={
$0(){return this.a.x="tableId missing."},
$S:0}
B.bbA.prototype={
$0(){var w=this.a
return w.x="Only "+L.dj(w.z).e+"/"+w.gnW()+" players \u2014 wait for everyone to join."},
$S:0}
B.bbB.prototype={
$0(){return this.a.y="Starting game\u2026"},
$S:0}
B.baK.prototype={
$0(){F.jJ(new F.iV(this.a.gjk()))
this.b.Y(x.q).f.b7(I.oC)},
$S:0}
B.baM.prototype={
$1(d){var w=this.a
if(!w.Q)w.lX()},
$S:18}
B.baL.prototype={
$1(d){var w,v=d.toUpperCase()
if(v!==d){w=this.a.w
w.mU(0,w.a.YL(F.nG(C.I,v.length),v))}},
$S:18}
B.baN.prototype={
$0(){F.jJ(new F.iV(this.a.gjk()))
this.b.Y(x.q).f.b7(I.oC)},
$S:0}
B.baO.prototype={
$1(d){return D.abg.cJ(0,d)},
$S:65}
B.baI.prototype={
$0(){return A.aS(this.a,!1).oE()},
$S:0}
B.bbn.prototype={
$1(d){var w=null
return P.bun(A.k(""+d+" Players",w,w,w,w,w,w,w,w),d,x.S)},
$S:z+14}
B.bbo.prototype={
$1(d){var w
if(d!=null){w=this.a
w.E(new B.bbm(w,d))}},
$S:237}
B.bbm.prototype={
$0(){return this.a.e=this.b},
$S:0}
B.baJ.prototype={
$1(d){var w=this.a,v=A.cF(d,null)
return w.d=v==null?w.d:v},
$S:18}
B.bbI.prototype={
$1(d){var w=this.a,v=w.CW
if(v!=null)v.U(0)
w.CW=null},
$S:18}
B.bb3.prototype={
$0(){var w=$.at.R$.d.c
if(w!=null)w.iC()
this.a.$0()},
$S:0}
B.bbk.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=d<L.dj(r.z).c.length,p=q?L.dj(r.z).c[d]:s,o=p!=null,n=o&&r.aaa(p),m=o&&p.length>8?"\u2026"+C.c.bS(p,p.length-6):p
if(q)if(n){o="You"+(r.a.c===D.iX&&d===0?" (Host)":"")
w=o}else{o="Player "+A.v(m)
w=o}else w="Waiting for player\u2026"
r=d<r.gnW()-1?8:0
if(q)o=n?R.cN.j(0.16):G.a6.j(0.18)
else o=C.w
if(q)v=n?R.cN.j(0.55):G.a6.j(0.55)
else v=C.h.j(0.18)
v=F.R(v,1.5)
if(q)u=n?T.iS:H.cR
else u=Ah.tp
if(q)t=n?R.cN:G.e2
else t=C.b1
v=A.y(s,A.ag(u,t,s,s,18),C.f,s,s,new A.t(o,s,v,s,s,s,C.F),s,36,s,s,s,s,s,36)
o=q?C.h.j(0.92):C.h.j(0.42)
return new A.a2(new A.A(0,0,0,r),F.S(A.a([v,H.aT,F.Q(A.k(w,s,s,s,s,s,A.B(s,s,o,s,s,s,s,s,s,s,s,13,s,s,q?C.R:C.av,s,s,!0,s,s,s,s,s,s,s,s),s,s),1)],x.p),E.j,C.i,E.n,0),s)},
$S:94}
B.bb4.prototype={
$0(){var w=this.a
F.jJ(new F.iV(w.gv6()))
w.c.Y(x.q).f.b7(I.Oh)},
$S:0}
B.bp_.prototype={
$1(d){if(this.a.c!=null)if($.jS>0)A.hn()},
$S:2}
B.bct.prototype={
$1(d){var w=this.a
if(w.c==null||w.dy||w.fr||w.Q)return
if(w.w||w.dx)return
if(w.gnV()){if(!N.cv(w.a.f).y)w.Wq(!0)}else w.pE()},
$S:14}
B.bcu.prototype={
$1(d){return this.a.aME()},
$S:14}
B.bcf.prototype={
$1(d){var w=this.a,v=w.e
if(v!=null)v.U(0)
w.e=A.c0(C.cu,new B.bce(w))},
$S:4}
B.bce.prototype={
$0(){var w=this.a
if(w.c==null||w.w||w.dx)return
if(w.CW!=null||w.dy||w.fr)return
if(w.gnV())w.Wq(!0)
else w.pE()},
$S:0}
B.bcg.prototype={
$1(d){return this.a.a7b()},
$S:4}
B.bbM.prototype={
$0(){return this.a.z=this.b},
$S:0}
B.bbO.prototype={
$0(){var w=this.a
w.y=this.b
w.z=null
w.Ec()},
$S:0}
B.bbY.prototype={
$0(){return this.a.aW=this.b},
$S:0}
B.bck.prototype={
$0(){this.a.SS()},
$S:0}
B.bcl.prototype={
$0(){return this.a.am=this.b},
$S:0}
B.bbN.prototype={
$0(){var w=this.a
w.z=w.ch=null},
$S:0}
B.bc2.prototype={
$0(){var w,v,u,t,s,r,q,p=this,o=p.c
if(o){s=p.d
if(s==null)s=p.a.a
p.b.x=s}s=p.e
if(s){if(p.f==="waiting"){r=p.r
q=B.oz(r)&&!B.MX(r)}else q=!1
w=q
if(!w){r=p.b
r.y=B.q5(r.y,p.r)}r=J.D(p.r,"status")
v=r==null?null:J.J(r)
if(v!=null&&v.length!==0){r=p.b
u=A.F(x.N,x.z)
t=r.x
if(t!=null)J.CH(u,t)
J.em(u,"status",v)
r.x=u}}u=!0
if(!o)if(!s){u=p.b
u=u.y!=null||u.x!=null}if(u){u=p.b
u.z=null}else{u=p.b
if(u.y==null&&u.x==null)u.z="Could not load game \u2014 check network / server URL"}u.Ec()},
$S:0}
B.bci.prototype={
$0(){var w=this.a
w.k3=!0
w.k4=this.b
w.ok=new A.c4(Date.now(),0,!1)},
$S:0}
B.bc_.prototype={
$0(){var w,v,u=this.a
u.p1=null
if(u.c==null||!u.k3)return
w=u.p2
v=u.k4
if(w==null||v==null)return
if(B.t3(u.y)==="rolling"&&u.Dt())return
u.E(new B.bbZ(u,v,w))},
$S:0}
B.bbZ.prototype={
$0(){var w,v,u=this.a
u.k3=!1
u.p2=null
w=this.b
v=this.c
u.Kd(v,w)
u.id=v
u.k1=w},
$S:0}
B.bcj.prototype={
$0(){var w,v,u=this,t=u.a
t.k3=!1
t.p2=null
w=u.b
if(w!=null){v=u.c
v=v!=null&&v>0}else v=!1
if(v){v=u.c
t.Kd(v,w)
t.id=v
t.k1=w}},
$S:0}
B.bbP.prototype={
$0(){return this.a.Q=!0},
$S:0}
B.bbQ.prototype={
$0(){return this.a.Q=!1},
$S:0}
B.bc3.prototype={
$0(){var w=this.a
w.dy=!0
w.go=null
w.fx=w.y2.cS(6)+1},
$S:0}
B.bc4.prototype={
$1(d){return this.a.b=d},
$S:585}
B.bc5.prototype={
$1(d){this.a.a=d
return A.F(x.N,x.z)},
$S:586}
B.bc6.prototype={
$0(){var w=this.a
return w.fx=w.y2.cS(6)+1},
$S:0}
B.bc7.prototype={
$0(){var w,v,u=this,t=u.a
t.y=B.q5(t.y,u.b)
v=u.c
if(v>0){w=C.k.S(v,1,6)
t.fx=w
t.id=w
v=u.d
t.k1=v
t.Kd(w,v)}t.dy=!1
t.go=null
t.Ec()},
$S:0}
B.bc8.prototype={
$0(){return this.a.ch=null},
$S:0}
B.bc9.prototype={
$0(){var w=this.a,v=this.b,u=x.N
u=w.y=B.q5(w.y,A.aa(["dice",v,"ludoState",A.aa(["lastDice",v,"phase","moving"],u,x.K)],u,x.z))
if(u!=null)w.UA(u)},
$S:0}
B.bca.prototype={
$0(){},
$S:0}
B.bcb.prototype={
$0(){var w=this.a,v=x.N
w.y=B.q5(w.y,A.aa(["dice",0,"ludoState",A.aa(["lastDice",0,"phase","rolling"],v,x.K)],v,x.z))},
$S:0}
B.bcc.prototype={
$1(d){var w=this.b
if(w.c==null)return
w.pB(C.b.gW(this.a.c))},
$S:2}
B.bcd.prototype={
$0(){return this.a.dy=!1},
$S:0}
B.bch.prototype={
$0(){var w=this.a,v=x.N
w.y=B.q5(w.y,A.aa(["dice",0,"ludoState",A.aa(["lastDice",0,"phase","rolling"],v,x.K)],v,x.z))
w.SS()
w.ch=null},
$S:0}
B.bc1.prototype={
$1(d){var w=this.a
w.p4=w.JM(d,!0)},
$S:z+15}
B.bc0.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.J0(this.b,this.c)},
$S:2}
B.bbK.prototype={
$0(){var w=this.a
return w.p4=w.JM(this.b,!0)},
$S:0}
B.bbL.prototype={
$0(){var w=this.a
w.rx=this.b.a[2]
w.p4=w.JM(this.c,!0)
w.p3=null},
$S:0}
B.bbJ.prototype={
$0(){var w=this
w.a.p3=new B.a4l(w.b,w.c,w.d)},
$S:0}
B.bbS.prototype={
$0(){var w=this.a
w.p4=w.pq(this.b)},
$S:0}
B.bbT.prototype={
$0(){var w,v=this,u=v.b,t=v.a
u.y=t.b
u.p4=v.c
u.R8=v.d
u.RG=v.e
u.p3=null
w=v.f
if(t.a===6){u.ch=null
u.Lr()}else if(w>=0){u.ch=w
u.SS()}},
$S:0}
B.bbU.prototype={
$0(){var w=this.a
if(w.c==null||w.RG==null)return
w.n3(!0,!0)
w.uT()},
$S:0}
B.bbV.prototype={
$0(){var w,v,u,t=this,s=t.b,r=B.q5(s.y,t.c)
s.y=r
w=t.e
v=t.f
u=J.D(v[t.r],w)
s.y=s.U_(t.a.a,r,t.d,u,w)
s.RG=s.R8=null
s.p4=v
s.Ec()},
$S:0}
B.bbW.prototype={
$0(){var w,v,u,t=this.b
t.RG=t.R8=null
t.p4=this.c
w=t.y
v=this.a.a
u=x.N
u=t.y=B.q5(w,A.aa(["dice",v,"ludoState",A.aa(["lastDice",v,"phase","moving"],u,x.K)],u,x.z))
if(u!=null)t.UA(u)},
$S:0}
B.bbX.prototype={
$0(){return this.a.Ec()},
$S:0}
B.bbR.prototype={
$0(){var w=this,v=w.c>=w.a.length
if(v)return C.bA
return w.b.a04(w.a,w.c,w.d)},
$S:587}
B.bco.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.Et(this.b,this.c)
if(w.c!=null)w.E(new B.bcn(w))},
$S:2}
B.bcn.prototype={
$0(){return this.a.db=!1},
$S:0}
B.bcp.prototype={
$1(d){return d},
$S:127}
B.bcq.prototype={
$0(){return A.aS(this.a,!1).oE()},
$S:0}
B.bcr.prototype={
$0(){return A.aS(this.a,!1).oE()},
$S:0}
B.bcs.prototype={
$1(d){var w=this,v=null,u=w.c,t=w.r,s=w.a
return new B.zH(d,new A.ay(C.C,v,C.at,C.u,A.a([new A.j7(A.dm(C.fb,v,v,new B.N_(u,v),C.ab),v),B.bD_(s.p3,t,new B.bcm(s,w.x,t),D.e7,u,w.e,w.w,d,w.d,w.f)],x.p),v),w.b,v)},
$S:z+16}
B.bcm.prototype={
$2(d,e){var w,v=this.a
if(v.dy||v.fr||v.RG!=null)return
w=this.b
if(w<0)return
if(d!==w)return
if(!C.b.t(this.c,e))return
v.pB(e)},
$S:588}
B.bp0.prototype={
$1(d){if(this.a.c!=null)if($.jS>0)A.hn()},
$S:2}
B.aDh.prototype={
$1(d){var w=this.a
x.an.a($.aF.h(0,$.ha()))
w=new B.zG(w.c,w.d,new B.N3(),H.bK,D.anU)
w.hd()
return w},
$S:z+17}
B.bcE.prototype={
$2(d,e){var w=null,v=e.c,u=this.a,t=x.p,s=A.a([new B.afJ(u.a.c.b,u.gaW7(),new B.bcC(d),this.b,w)],t),r=e.d
if(r!=null&&r.length!==0)s.push(new A.a2(D.A9,A.k(r,w,w,w,w,w,D.aCd,C.M,w),w))
s.push(new A.a2(D.a4C,F.S(A.a([A.k("TABLES",w,w,w,w,w,A.B(w,w,D.cP.j(0.9),w,w,w,w,w,w,w,w,11,w,w,C.x,w,w,!0,w,1.6,w,w,w,w,w,w),w,w),H.aT,F.Q(A.y(w,w,C.f,G.a6.j(0.28),w,w,w,1,w,w,w,w,w,w),1),H.aT,A.k(""+v.length,w,w,w,w,w,A.B(w,w,C.h.j(0.7),w,w,w,w,w,w,w,w,12,w,w,C.B,w,w,!0,w,w,w,w,w,w,w,w),w,w)],t),E.j,C.i,E.n,0),w))
if(e.a)u=D.UH
else u=v.length===0?D.UJ:A.cc(new B.bcD(u,v))
s.push(F.Q(u,1))
return F.P(s,E.j,C.i,E.n)},
$S:z+18}
B.bcC.prototype={
$0(){return A.aS(this.a,!1).bg(0)},
$S:0}
B.bcD.prototype={
$2(d,e){var w,v=this
if(e.b>=640){w=v.b
return P.buJ(null,D.axD,new B.bcz(v.a,w),w.length,D.A6,G.ei)}w=v.b
return P.j4(null,new B.bcA(v.a,w),w.length,D.A6,G.ei,!1,C.a2,new B.bcB(),!1)},
$S:z+19}
B.bcz.prototype={
$2(d,e){var w=this.b,v=w[e],u=D.e7[C.k.ac(e,4)],t=this.a,s=t.a.c.a
s=s==="computer"||s==="local"
return new B.Cd(v,u,s,new B.bcy(t,d,w,e),null)},
$S:z+3}
B.bcy.prototype={
$0(){var w=this
return w.a.zg(w.b,w.c[w.d])},
$S:0}
B.bcB.prototype={
$2(d,e){return E.aV},
$S:22}
B.bcA.prototype={
$2(d,e){var w=this.b,v=w[e],u=D.e7[C.k.ac(e,4)],t=this.a,s=t.a.c.a
s=s==="computer"||s==="local"
return new B.Cd(v,u,s,new B.bcx(t,d,w,e),null)},
$S:z+3}
B.bcx.prototype={
$0(){var w=this
return w.a.zg(w.b,w.c[w.d])},
$S:0}
B.bcv.prototype={
$0(){var w=0,v=A.p(x.d),u=this,t,s
var $async$$0=A.q(function(d,e){if(d===1)return A.m(e,v)
for(;;)switch(w){case 0:t=u.b.c
t.toString
s=u.a
w=2
return A.e(K.aD(t,!1,x.W).Fg(u.c),$async$$0)
case 2:s.a=e
return A.n(null,v)}})
return A.o($async$$0,v)},
$S:54}
B.bcw.prototype={
$0(){var w=0,v=A.p(x.d),u=this,t,s
var $async$$0=A.q(function(d,e){if(d===1)return A.m(e,v)
for(;;)switch(w){case 0:t=u.b.c
t.toString
s=u.a
w=2
return A.e(K.aD(t,!1,x.W).B_(u.c),$async$$0)
case 2:s.a=e
return A.n(null,v)}})
return A.o($async$$0,v)},
$S:54}
B.b9f.prototype={
$1(d){return D.aaH.cJ(0,d)},
$S:65}
B.bp1.prototype={
$1(d){if(this.a.c!=null)if($.jS>0)A.hn()},
$S:2}
B.bcI.prototype={
$0(){return A.aS(this.a,!1).bg(0)},
$S:0}
B.bcK.prototype={
$0(){},
$S:0}
B.bcJ.prototype={
$2(d,e){var w,v,u,t=null,s=A.x(22),r=F.R(G.a6.j(0.7),2),q=x.V,p=A.a([new A.U(0,C.r,G.a6.j(0.2),C.o,24),new A.U(0,C.r,C.l.j(0.45),G.o1,24)],q),o=this.a,n=x.C
n=A.af(new A.as(D.Cc,new B.bcH(o),n),n.i("aX.E"))
n=F.S(n,E.j,C.i,E.n,0)
w=o.a.c.a==="computer"
v=o.d
v=A.k(w?"You + "+(v-1)+" computer":""+v+" player game",t,t,t,t,t,D.aES,t,t)
u=x.p
p=A.y(t,F.P(A.a([D.aGQ,E.aV,n,M.ju,v,H.aw,A.k(w?"Computer fills empty seats":"Same phone \u2014 pass & play (no computer)",t,t,t,t,t,D.aAo,C.M,t),H.bY,new A.G(200,52,K.me(D.aHS,o.gaC_(),A.om(D.qv,t,4,C.h,t,new A.cA(A.x(14),C.y),t)),t)],u),E.j,C.i,E.v),C.f,t,t,new A.t(D.mt,t,r,s,p,t,C.m),t,t,t,D.a3Q,D.a4H,t,t,t)
s=A.x(6)
q=A.a([new A.U(0,C.r,D.cP.j(0.35),D.apD,8)],q)
r=A.bD8(-0.02)
return new A.cP(new A.ad(0,1/0,0,e.d*0.92),A.e6(new A.ay(C.P,t,C.K,C.f,A.a([p,A.y(t,A.k(o.a.c.a==="computer"?"vs Computer":"Play Local",t,t,t,t,t,D.aAH,t,t),C.f,t,t,new A.t(D.cP,t,t,s,q,t,C.m),t,t,t,t,D.Ag,r,t,t)],u),t),t,C.Q,t,H.jW,C.a2),t)},
$S:149}
B.bcH.prototype={
$1(d){var w=null,v=this.a,u=v.d===d,t=u?D.qv:C.dj,s=A.x(10),r=A.x(10)
return F.Q(new A.a2(E.ce,A.aZ(!1,C.z,!0,s,A.b8(!1,r,!0,new A.a2(G.fw,A.aC(A.k(""+d,w,w,w,w,w,A.B(w,w,C.h,w,w,w,w,w,w,w,w,22,w,w,u?C.B:C.R,w,w,!0,w,w,w,w,w,w,w,w),w,w),w,w),w),w,!0,w,w,w,w,w,w,w,w,new B.bcG(v,d),w,w,w,w,w,w,w),C.f,t,0,w,w,w,w,w,C.G),w),1)},
$S:z+20}
B.bcG.prototype={
$0(){var w=this.a
return w.E(new B.bcF(w,this.b))},
$S:0}
B.bcF.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.bp2.prototype={
$1(d){if(this.a.c!=null)if($.jS>0)A.hn()},
$S:2}
B.aCG.prototype={
$2(d,e){var w=this.a,v=d*w,u=e*w
return new A.W(v,u,v+w,u+w)},
$S:590}
B.aCK.prototype={
$2(d,e){return d<6&&e<6},
$S:57}
B.aCJ.prototype={
$2(d,e){return d>=9&&e<6},
$S:57}
B.aCL.prototype={
$2(d,e){return d>=9&&e>=9},
$S:57}
B.aCI.prototype={
$2(d,e){return d<6&&e>=9},
$S:57}
B.aCH.prototype={
$2(d,e){var w=this
if(w.a.$2(d,e))return 0
if(w.b.$2(d,e))return 1
if(w.c.$2(d,e))return 2
if(w.d.$2(d,e))return 3
return null},
$S:591}
B.aCN.prototype={
$2(d,e){var w=this.a,v=w.$2(d,e),u=w.$2(d+1,e)
return v!=null&&v===u},
$S:57}
B.aCM.prototype={
$2(d,e){var w=this.a,v=w.$2(d,e),u=w.$2(d,e+1)
return v!=null&&v===u},
$S:57}
B.aCO.prototype={
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
$S:57}
B.aCF.prototype={
$0(){var w,v=this,u=A.bs($.ah().w),t=v.a,s=v.b
u.Z(new A.dF(t,s-v.c))
w=v.d
u.Z(new A.bz(t-w,s))
u.Z(new A.bz(t+w,s))
u.Z(new A.fc())
return u},
$S:100}
B.aCE.prototype={
$0(){var w,v=this,u=A.bs($.ah().w),t=v.a,s=v.c
u.Z(new A.dF(t+v.b,s))
w=v.d
u.Z(new A.bz(t,s-w))
u.Z(new A.bz(t,s+w))
u.Z(new A.fc())
return u},
$S:100}
B.aCC.prototype={
$0(){var w,v=this,u=A.bs($.ah().w),t=v.a,s=v.b
u.Z(new A.dF(t,s+v.c))
w=v.d
u.Z(new A.bz(t-w,s))
u.Z(new A.bz(t+w,s))
u.Z(new A.fc())
return u},
$S:100}
B.aCD.prototype={
$0(){var w,v=this,u=A.bs($.ah().w),t=v.a,s=v.c
u.Z(new A.dF(t-v.b,s))
w=v.d
u.Z(new A.bz(t,s-w))
u.Z(new A.bz(t,s+w))
u.Z(new A.fc())
return u},
$S:100}
B.aCB.prototype={
$3(d,e,f){var w,v,u,t,s=d.gdq().a
s===$&&A.b()
w=A.ul(s.a.getBounds())
s=this.a
$.ah()
v=A.al()
u=A.a4(e,C.h,0.38)
u.toString
t=A.a4(e,C.l,0.28)
t.toString
v.scX(new F.ai(f,new A.cx(-f.a,-f.b),C.t,A.a([u,e,t],x.O),null,null).cJ(0,w))
s.d2(d,v)
v=A.al()
v.b=C.aq
v.c=this.b*0.0028
v.r=C.l.j(0.32).gq(0)
s.d2(d,v)},
$S:593}
B.aD0.prototype={
$0(){var w=this.a
this.b.push(new B.f7(C.k.S(C.d.a_(w.b/1),0,14),C.k.S(C.d.a_(w.a/1),0,14)))},
$S:0}
B.aD1.prototype={
$1(d){var w,v,u
for(w=this.a,v=this.b,u=0;u<d;++u){++w.b
v.$0()}},
$S:12}
B.aCY.prototype={
$1(d){var w,v,u
for(w=this.a,v=this.b,u=0;u<d;++u){--w.b
v.$0()}},
$S:12}
B.aD3.prototype={
$1(d){var w,v,u
for(w=this.a,v=this.b,u=0;u<d;++u){--w.a
v.$0()}},
$S:12}
B.aCW.prototype={
$1(d){var w,v,u
for(w=this.a,v=this.b,u=0;u<d;++u){++w.a
v.$0()}},
$S:12}
B.aCV.prototype={
$0(){var w=this.a;++w.b;--w.a
this.b.$0()},
$S:0}
B.aD_.prototype={
$0(){var w=this.a;++w.b;++w.a
this.b.$0()},
$S:0}
B.aCU.prototype={
$0(){var w=this.a;--w.b;--w.a
this.b.$0()},
$S:0}
B.aCZ.prototype={
$0(){var w=this.a;--w.b;++w.a
this.b.$0()},
$S:0}
B.aD4.prototype={
$0(){var w=this
w.a.$0()
w.b.$1(5)
w.c.$1(2)
w.d.$1(5)},
$S:0}
B.aD2.prototype={
$0(){var w=this
w.a.$0()
w.b.$1(5)
w.c.$1(2)
w.d.$1(5)},
$S:0}
B.aCX.prototype={
$0(){var w=this
w.a.$0()
w.b.$1(5)
w.c.$1(2)
w.d.$1(5)},
$S:0}
B.aD5.prototype={
$2(d,e){var w,v
d.$0()
w=this.a
v=w.length
e.$0()
this.b.push(C.b.hT(w,v))},
$S:594}
B.aD6.prototype={
$0(){},
$S:0}
B.aD7.prototype={
$0(){var w,v=this
v.b.$1(5)
w=v.a
w.a=w.b=v.c
v.d.$0()},
$S:0}
B.aD8.prototype={
$0(){},
$S:0}
B.aD9.prototype={
$0(){var w,v=this
v.b.$1(5)
w=v.a
w.a=w.b=v.c
v.d.$0()},
$S:0}
B.aDa.prototype={
$0(){},
$S:0}
B.aDb.prototype={
$0(){var w,v=this
v.b.$1(5)
w=v.a
w.a=w.b=v.c
v.d.$0()},
$S:0}
B.aDc.prototype={
$0(){},
$S:0}
B.aDd.prototype={
$0(){var w,v=this
v.b.$1(5)
w=v.a
w.a=w.b=v.c
v.d.$0()},
$S:0}
B.aCQ.prototype={
$1(d){return d.c},
$S:z+4}
B.aCS.prototype={
$0(){return A.a([],x._)},
$S:z+21}
B.aCR.prototype={
$0(){var w=this.b
return this.a.z.$2(w.a,w.b)},
$S:0}
B.b7L.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=p.d
o===$&&A.b()
w=o.x
w===$&&A.b()
v=p.aR3(w)
w=p.a
u=w.c
t=w.d
s=B.bJa(u*15,u,v.a,v.b,0,0,w.e,t)
r=Math.max(1,p.a.f.length-1)
o=o.x
o===$&&A.b()
o=Math.sin(C.d.ac(o*r,1)*3.141592653589793)
e.toString
return new A.ay(C.C,q,C.at,C.f,A.a([A.aH(q,e,q,q,s.a,q,s.b+o*-5,q)],x.p),q)},
$S:125}
B.aCv.prototype={
$1(d){return J.cD(d)},
$S:596}
B.aCw.prototype={
$1(d){return A.cF(A.v(d),null)},
$S:242}
B.aCz.prototype={
$1(d){var w,v,u,t
if(!x.j.b(d))return
for(w=J.b1(d),v=this.a;w.A();){u=w.gO(w)
t=u==null?null:C.c.P(J.J(u))
if(t==null)t=""
if(!B.bTi(t))continue
if(!C.b.t(v,t))v.push(t)}},
$S:4}
B.aCy.prototype={
$1(d){var w=this.a.h(0,d)
w.toString
return w},
$S:56}
B.ba4.prototype={
$1(d){var w=this.a
if(w.c==null)return
if(new A.c4(Date.now(),0,!1).cA(this.b).a>=2e6){w.aFw()
return}w.E(new B.ba3(w))},
$S:14}
B.ba3.prototype={
$0(){var w=this.a
return w.e=1+w.r.cS(6)},
$S:0}
B.ba2.prototype={
$0(){},
$S:0}
B.ba5.prototype={
$0(){var w,v=this.b
if(v>0)this.a.e=C.k.S(v,1,6)
else{v=this.a
w=v.a.d
if(w>0)v.e=C.k.S(w,1,6)}},
$S:0}
B.ba7.prototype={
$2(d,e){var w,v,u,t,s,r=this.a,q=r.a.f.x
q===$&&A.b()
q=C.d.S(q,0,1)*3.141592653589793
w=Math.sin(q)
v=Math.sin(q*6)
u=r.a.e?5:0
q=Math.cos(q*5)
r=r.a.e
t=r?3:0
s=r?w*0.28:0
return A.jb(F.f0(C.p,s,A.ja(C.p,e,r?1+w*0.1:1)),new A.l(w*v*u,w*q*t))},
$S:19}
B.ba6.prototype={
$2(d,e){var w=x.Z
return A.kV(C.p,new A.dc(e,!1,d,null),null,new A.aw(e,new A.aE(0.6,1,w),w.i("aw<aO.T>")))},
$S:151}
B.aDj.prototype={
$0(){return Al.iQ(this.a)},
$S:0}
B.aDk.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=this.a,h=i.r
if(h){w=i.y
v=w.a
u=w.b.a2(0,v.gq(v))}else u=0
w=D.Ze.j(0.94)
v=A.x(14)
t=h?i.c.j(0.7+u*0.25):C.h.j(0.1)
t=F.R(t,h?1.4:1)
s=A.a([],x.V)
if(h)s.push(new A.U(0,C.r,i.c.j(0.22+u*0.12),C.o,12))
s.push(new A.U(0,C.r,C.l.j(0.28),H.bq,8))
r=this.b
q=i.c
p=A.y(j,j,C.f,j,j,new A.t(q,j,j,A.x(2),j,j,C.m),j,r,j,j,j,j,j,3)
o=A.a4(q,C.h,0.35)
o.toString
n=A.a4(q,C.l,0.28)
n.toString
n=A.a([o,q,n],x.O)
o=F.R(C.h.j(h?0.9:0.28),1.4)
m=i.as?D.a7L:H.cR
r=A.y(j,A.ag(m,C.h.j(0.95),j,j,r*0.5),C.f,j,j,new A.t(j,j,o,j,j,new K.cN(D.Qq,0.5,C.t,j,0,n,j,j),C.F),j,r,j,j,j,j,j,r)
o=C.h.j(h?1:0.78)
o=A.k(i.d,j,1,C.H,j,j,A.B(j,j,o,j,j,j,j,j,j,j,j,12.5,j,j,C.B,j,1.1,!0,j,0.1,j,j,j,j,j,j),j,j)
n=D.cP.j(h?0.95:0.7)
m=x.p
n=F.Q(F.P(A.a([o,H.fL,A.k(i.at,j,1,C.H,j,j,A.B(j,j,n,j,j,j,j,j,j,j,j,10,j,j,C.R,j,1.05,!0,j,j,j,j,j,j,j,j),j,j)],m),E.X,C.i,E.v),1)
o=A.x(9)
l=F.R(h||i.w?q.j(0.8):C.h.j(0.12),1)
k=i.z
h=k?i.Q:j
return A.y(j,F.S(A.a([p,E.Z,r,E.Z,n,H.aU,A.y(j,new B.MU(q,i.f,i.w,i.x,k,h,this.c,j),C.f,j,j,new A.t(D.Yq,j,l,o,j,j,C.m),j,j,j,j,G.iC,j,j,j)],m),E.j,C.i,E.n,0),C.f,j,j,new A.t(w,j,t,v,s,j,C.m),j,j,j,j,new A.A(8,6,6,6),j,j,j)},
$S:63}
B.aDi.prototype={
$2(d,e){var w=Math.min(e.b,e.d),v=w-14
if(v<96)v=Math.max(72,w-4)
return A.aC(this.a.d.$1(v),null,null)},
$S:35}
B.brI.prototype={
$1(d){return d.c},
$S:z+4}
B.aDn.prototype={
$3(d,e,f){return new A.dl(Ak.uC(this.a,D.qq),null,null)},
$S:93};(function aliases(){var w=B.Yr.prototype
w.auU=w.l
w=B.Ys.prototype
w.auW=w.a4
w.auV=w.l
w=B.Yt.prototype
w.auY=w.a4
w.auX=w.l
w=B.Yu.prototype
w.av_=w.a4
w.auZ=w.l
w=B.Yv.prototype
w.av0=w.l
w=B.Yw.prototype
w.av2=w.a4
w.av1=w.l
w=B.Yx.prototype
w.av4=w.a4
w.av3=w.l
w=B.Yy.prototype
w.av6=w.a4
w.av5=w.l
w=B.Yh.prototype
w.auJ=w.l})();(function installTearOffs(){var w=a._instance_2u,v=a._instance_0u,u=a._instance_1u
var t
w(t=B.Ug.prototype,"gaNG","aNH",9)
v(t,"gaBR","CS",0)
u(t,"gayK","ayL",10)
v(B.Uh.prototype,"gaMm","aMn",1)
v(t=B.Ui.prototype,"gaMu","rq",1)
v(t,"gaMt","Kx",0)
v(t,"gaab","z2",0)
v(t,"gaMw","lX",0)
v(t,"gaMA","KA",0)
u(t=B.Uj.prototype,"gaxR","axS",2)
u(t,"gaOq","aOr",2)
v(t,"gaAt","aAu",1)
v(t,"gaVD","aVE",0)
v(t,"gaSR","pF",0)
v(B.Um.prototype,"gaC_","aC0",1)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(A.I,[B.LN,B.N3,B.N6,B.t9,B.f7,B.aCT,B.jq,B.jR,B.vI,B.a4l,B.xm,B.MT,B.lC,B.t7])
u(A.cY,[B.aCr,B.aCs,B.aCq,B.aCt,B.aDe,B.aDf,B.baB,B.baC,B.baA,B.bao,B.ba9,B.bas,B.bau,B.bah,B.baw,B.bav,B.boY,B.b01,B.b93,B.boZ,B.bbp,B.bbu,B.bbw,B.baW,B.bbC,B.bbH,B.baM,B.baL,B.baO,B.bbn,B.bbo,B.baJ,B.bbI,B.bbk,B.bp_,B.bct,B.bcu,B.bcf,B.bcg,B.bc4,B.bc5,B.bcc,B.bc1,B.bc0,B.bco,B.bcp,B.bcs,B.bp0,B.aDh,B.b9f,B.bp1,B.bcH,B.bp2,B.aCB,B.aD1,B.aCY,B.aD3,B.aCW,B.aCQ,B.aCv,B.aCw,B.aCz,B.aCy,B.ba4,B.brI,B.aDn])
t(B.a4b,A.ld)
t(B.zG,A4.hd)
u(A.ec,[B.aDg,B.brJ,B.baz,B.bcm,B.bcE,B.bcD,B.bcz,B.bcB,B.bcA,B.bcJ,B.aCG,B.aCK,B.aCJ,B.aCL,B.aCI,B.aCH,B.aCN,B.aCM,B.aCO,B.aD5,B.b7L,B.ba7,B.ba6,B.aDk,B.aDi])
t(B.q7,K.fQ)
u(A.a3,[B.vN,B.N0,B.N1,B.vL,B.ES,B.Uk,B.Ul,B.TR,B.MU])
u(A.a5,[B.afY,B.Yr,B.ane,B.anf,B.Yv,B.anh,B.ani,B.Yh,B.afU])
t(B.and,B.Yr)
t(B.Ys,B.and)
t(B.Ug,B.Ys)
u(A.eb,[B.baD,B.ban,B.bai,B.baj,B.bak,B.bal,B.bam,B.baa,B.bab,B.bac,B.bad,B.bae,B.bar,B.baq,B.bat,B.baf,B.bag,B.bax,B.bay,B.bap,B.baE,B.baF,B.baG,B.baH,B.bbq,B.bbr,B.bbs,B.bbt,B.bbv,B.bbx,B.bbG,B.bb2,B.bbl,B.bbD,B.bbE,B.bbF,B.baQ,B.baR,B.baS,B.baT,B.baU,B.baV,B.baP,B.bbb,B.bbc,B.bbd,B.bbe,B.bbf,B.bbg,B.bbh,B.bbi,B.bbj,B.baX,B.baY,B.baZ,B.bb_,B.bb0,B.bb1,B.bb5,B.bb6,B.bb7,B.bb8,B.bb9,B.bba,B.bby,B.bbz,B.bbA,B.bbB,B.baK,B.baN,B.baI,B.bbm,B.bb3,B.bb4,B.bce,B.bbM,B.bbO,B.bbY,B.bck,B.bcl,B.bbN,B.bc2,B.bci,B.bc_,B.bbZ,B.bcj,B.bbP,B.bbQ,B.bc3,B.bc6,B.bc7,B.bc8,B.bc9,B.bca,B.bcb,B.bcd,B.bch,B.bbK,B.bbL,B.bbJ,B.bbS,B.bbT,B.bbU,B.bbV,B.bbW,B.bbX,B.bbR,B.bcn,B.bcq,B.bcr,B.bcC,B.bcy,B.bcx,B.bcv,B.bcw,B.bcI,B.bcK,B.bcG,B.bcF,B.aCF,B.aCE,B.aCC,B.aCD,B.aD0,B.aCV,B.aD_,B.aCU,B.aCZ,B.aD4,B.aD2,B.aCX,B.aD6,B.aD7,B.aD8,B.aD9,B.aDa,B.aDb,B.aDc,B.aDd,B.aCS,B.aCR,B.ba3,B.ba2,B.ba5,B.aDj])
t(B.Yt,B.ane)
t(B.Uh,B.Yt)
u(A.O,[B.ac7,B.U5,B.add,B.afV,B.agi,B.Cn,B.Ch,B.aeF,B.VV,B.agx,B.aic,B.ame,B.Xf,B.a4c,B.afJ,B.Cd,B.abB,B.agL,B.ah5,B.a4i,B.a4a,B.a4d,B.a4f,B.afZ,B.Uv,B.zF,B.a4k,B.a4g,B.N2,B.Wk,B.zH,B.N4,B.zI])
u(A.jl,[B.abV,B.N_,B.a4e,B.vJ,B.afW])
t(B.Yu,B.anf)
t(B.Ui,B.Yu)
t(B.ang,B.Yv)
t(B.Yw,B.ang)
t(B.Uj,B.Yw)
t(B.Yx,B.anh)
t(B.afX,B.Yx)
t(B.Yy,B.ani)
t(B.Um,B.Yy)
t(B.aeS,B.Yh)
w(B.Yr,A.dL)
v(B.and,A.dy)
w(B.Ys,B.t7)
v(B.ane,A.dy)
w(B.Yt,B.t7)
v(B.anf,A.dy)
w(B.Yu,B.t7)
w(B.Yv,A.dL)
v(B.ang,A.dy)
w(B.Yw,B.t7)
v(B.anh,A.dy)
w(B.Yx,B.t7)
v(B.ani,A.dy)
w(B.Yy,B.t7)
w(B.Yh,A.d0)})()
A.da(b.typeUniverse,JSON.parse('{"zG":{"cE":["q7"],"eT":["q7"],"cE.0":"q7"},"vN":{"a3":[],"c":[]},"afY":{"a5":["vN"]},"N0":{"a3":[],"c":[]},"Ug":{"a5":["N0"],"dy":[]},"N1":{"a3":[],"c":[]},"Uh":{"a5":["N1"],"dy":[]},"ac7":{"O":[],"c":[]},"U5":{"O":[],"c":[]},"add":{"O":[],"c":[]},"afV":{"O":[],"c":[]},"agi":{"O":[],"c":[]},"Cn":{"O":[],"c":[]},"Ch":{"O":[],"c":[]},"aeF":{"O":[],"c":[]},"VV":{"O":[],"c":[]},"agx":{"O":[],"c":[]},"aic":{"O":[],"c":[]},"abV":{"aI":[]},"ame":{"O":[],"c":[]},"Xf":{"O":[],"c":[]},"vL":{"a3":[],"c":[]},"Ui":{"a5":["vL"],"dy":[]},"ES":{"a3":[],"c":[]},"Uj":{"a5":["ES"],"dy":[]},"Uk":{"a3":[],"c":[]},"Cd":{"O":[],"c":[]},"a4c":{"O":[],"c":[]},"afX":{"a5":["Uk"],"dy":[]},"afJ":{"O":[],"c":[]},"abB":{"O":[],"c":[]},"agL":{"O":[],"c":[]},"ah5":{"O":[],"c":[]},"Ul":{"a3":[],"c":[]},"a4i":{"O":[],"c":[]},"Um":{"a5":["Ul"],"dy":[]},"N_":{"aI":[]},"TR":{"a3":[],"c":[]},"a4a":{"O":[],"c":[]},"aeS":{"a5":["TR"]},"a4d":{"O":[],"c":[]},"a4e":{"aI":[]},"lC":{"bT":[]},"MU":{"a3":[],"c":[]},"vJ":{"aI":[]},"afU":{"a5":["MU"]},"zH":{"O":[],"c":[]},"a4f":{"O":[],"c":[]},"afZ":{"O":[],"c":[]},"Uv":{"O":[],"c":[]},"zF":{"O":[],"c":[]},"a4k":{"O":[],"c":[]},"a4g":{"O":[],"c":[]},"N2":{"O":[],"c":[]},"Wk":{"O":[],"c":[]},"N4":{"O":[],"c":[]},"zI":{"O":[],"c":[]},"afW":{"aI":[]}}'))
A.Ci(b.typeUniverse,JSON.parse('{"t7":1}'))
var y={d:"Joined table, but socket connect failed. Tap JOIN again."}
var x=(function rtii(){var w=A.Y
return{M:w("LY"),F:w("hj"),V:w("w<U>"),O:w("w<d>"),E:w("w<T<f7>>"),Q:w("w<T<jq>>"),G:w("w<T<ab<h,@>>>"),e:w("w<vI>"),J:w("w<f7>"),a:w("w<t9>"),b:w("w<jq>"),Y:w("w<ab<h,@>>"),L:w("w<+seatIndex,userId(r,h)>"),x:w("w<c7>"),s:w("w<h>"),p:w("w<c>"),_:w("w<xm>"),n:w("w<K>"),t:w("w<r>"),A:w("w<ab<h,@>?>"),o:w("w<c?>"),u:w("T<hj>"),I:w("T<jq>"),R:w("T<ab<h,@>>"),g:w("T<xm>"),j:w("T<@>"),c:w("MT"),T:w("f7"),W:w("zG"),B:w("q7"),r:w("jq"),P:w("ab<h,@>"),f:w("ab<@,@>"),C:w("as<r,ed>"),D:w("as<r,iX<r>>"),w:w("f8"),d:w("bq"),K:w("I"),N:w("h"),Z:w("aE<K>"),i:w("d5<h>"),k:w("d5<r>"),m:w("aR<T<ab<h,@>>>"),U:w("dM<r>"),l:w("c"),aY:w("bh<~>"),d4:w("aP<~>"),q:w("fL"),y:w("L"),z:w("@"),S:w("r"),an:w("iU?"),h:w("ab<h,@>?"),X:w("I?"),v:w("h?"),a3:w("r?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.Qd=new A.cx(-0.6,-1)
D.Qg=new A.cx(-0.25,-0.35)
D.Qp=new A.cx(0.7,1)
D.Qq=new A.cx(-0.35,-0.4)
D.Qs=new A.cx(-0.45,-0.55)
D.Qw=new A.rg(0,A.Y("rg<K>"))
D.ask=new A.b9(15,15)
D.Rg=new A.cM(C.a4,D.ask,G.ji,C.a4)
D.S7=new A.t(G.ko,null,null,null,null,null,C.F)
D.P8=new A.z(!0,C.J,null,null,null,null,null,C.R,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aG8=new A.az("Loading tables\u2026",null,D.P8,null,null,null,null,null,null,null)
D.UH=new A.cS(C.p,null,null,D.aG8,null)
D.aGp=new A.az("No tables found",null,D.P8,null,null,null,null,null,null,null)
D.UJ=new A.cS(C.p,null,null,D.aGp,null)
D.anS=new F.t5(160,"Starting\u2026",null)
D.UK=new A.cS(C.p,null,null,D.anS,null)
D.aHq=new A.az("Session expired",null,C.dK,null,null,null,null,null,null,null)
D.US=new A.cS(C.p,null,null,D.aHq,null)
D.a8H=new A.c9(H.f_,18,C.h,null,null,null)
D.UT=new A.cS(C.p,null,null,D.a8H,null)
D.xI=new A.d(1,0.047058823529411764,0.08627450980392157,0.2,C.e)
D.dz=new A.d(1,0.9019607843137255,0.11764705882352941,0.1450980392156863,C.e)
D.Xu=new A.d(1,0.23137254901960785,0.6196078431372549,1,C.e)
D.y3=new A.d(1,0.07058823529411765,0.07058823529411765,0.1803921568627451,C.e)
D.y9=new A.d(1,0.10196078431372549,0.06274509803921569,0.25098039215686274,C.e)
D.mi=new A.d(1,0.07058823529411765,0.10588235294117647,0.2,C.e)
D.Yq=new A.d(1,0.047058823529411764,0.050980392156862744,0.09411764705882353,C.e)
D.em=new A.d(1,0.9764705882352941,0.6588235294117647,0,C.e)
D.mk=new A.d(1,1,0.9450980392156862,0.6588235294117647,C.e)
D.Ze=new A.d(1,0.0784313725490196,0.08627450980392157,0.17254901960784313,C.e)
D.cP=new A.d(1,0.9764705882352941,0.8313725490196079,0.13725490196078433,C.e)
D.mp=new A.d(1,0.10196078431372549,0.10588235294117647,0.2196078431372549,C.e)
D.mt=new A.d(1,0.07058823529411765,0.07450980392156863,0.16470588235294117,C.e)
D.e1=new A.d(1,0.17647058823529413,0.7019607843137254,0.13725490196078433,C.e)
D.a_H=new A.d(1,0.0392156862745098,0.07058823529411765,0.1568627450980392,C.e)
D.qq=new A.d(1,0.0392156862745098,0.043137254901960784,0.11764705882352941,C.e)
D.qv=new A.d(1,0.3568627450980392,0.17647058823529413,0.5568627450980392,C.e)
D.a0N=new A.d(1,0.9098039215686274,0.8784313725490196,0.8313725490196079,C.e)
D.a0Z=new A.d(1,0.0392156862745098,0.0392156862745098,0.10980392156862745,C.e)
D.dC=new A.d(1,0,0.4392156862745098,0.7333333333333333,C.e)
D.aL0=new B.afW(null)
D.a2s=new A.kq(D.aL0,null,C.ab,null,null)
D.a3Q=new A.A(0,22,0,0)
D.a42=new A.A(10,5,12,5)
D.a4b=new A.A(12,2,12,0)
D.A6=new A.A(14,0,14,18)
D.a4l=new A.A(14,8,14,6)
D.a4o=new A.A(16,0,16,12)
D.A9=new A.A(16,0,16,8)
D.a4x=new A.A(16,8,16,2)
D.a4y=new A.A(16,8,16,8)
D.a4A=new A.A(18,12,18,12)
D.a4C=new A.A(18,2,18,10)
D.a4H=new A.A(20,36,20,22)
D.a4I=new A.A(22,12,22,12)
D.Ag=new A.A(28,8,28,8)
D.a4X=new A.A(32,14,32,14)
D.a5j=new A.A(6,8,6,8)
D.a5w=new A.A(3.5,3.5,3.5,3.5)
D.aMg=new B.Xf(M.iT,I.mr,"100% SECURE","Fair Play Guaranteed",null)
D.a5G=new F.ed(1,E.cl,D.aMg,null)
D.aL1=new B.afZ(null)
D.a5M=new F.n0(E.as,C.p,D.aL1,null)
D.a7_=new A.ao(61533,"MaterialIcons",!1)
D.a79=new A.ao(62589,"MaterialIcons",!1)
D.a7I=new A.ao(983202,"MaterialIcons",!1)
D.a7L=new A.ao(983450,"MaterialIcons",!1)
D.a8m=new A.c9(E.fA,null,C.h,null,null,null)
D.WK=new A.d(1,0.11764705882352941,0.12156862745098039,0.22745098039215686,C.e)
D.XH=new A.d(1,0.054901960784313725,0.058823529411764705,0.13333333333333333,C.e)
D.alJ=w([D.WK,D.XH],x.O)
D.aad=new F.ai(E.U,E.a0,C.t,D.alJ,null,null)
D.XX=new A.d(1,0.22745098039215686,0.24313725490196078,0.34509803921568627,C.e)
D.YP=new A.d(1,0.08627450980392157,0.09411764705882353,0.1411764705882353,C.e)
D.a13=new A.d(1,0.047058823529411764,0.054901960784313725,0.09411764705882353,C.e)
D.ahW=w([D.XX,D.YP,D.a13],x.O)
D.aah=new F.ai(E.U,E.a0,C.t,D.ahW,null,null)
D.VY=new A.d(1,1,0.9921568627450981,0.9725490196078431,C.e)
D.a0A=new A.d(1,0.9411764705882353,0.9215686274509803,0.8784313725490196,C.e)
D.a1k=new A.d(1,0.8784313725490196,0.8470588235294118,0.792156862745098,C.e)
D.ahM=w([D.VY,D.a0A,D.a1k],x.O)
D.aai=new F.ai(C.P,C.V,C.t,D.ahM,null,null)
D.Zq=new A.d(1,0.23921568627450981,0.8627450980392157,0.41568627450980394,C.e)
D.X5=new A.d(1,0.0784313725490196,0.5803921568627451,0.22745098039215686,C.e)
D.alv=w([D.Zq,D.X5],x.O)
D.aaw=new F.ai(C.P,C.V,C.t,D.alv,null,null)
D.ah8=w([D.mk,D.cP,Z.eP],x.O)
D.aaC=new F.ai(C.P,C.V,C.t,D.ah8,null,null)
D.Zk=new A.d(1,0.9764705882352941,0.9607843137254902,0.9294117647058824,C.e)
D.Wa=new A.d(1,0.9294117647058824,0.9019607843137255,0.8549019607843137,C.e)
D.a0d=new A.d(1,0.8862745098039215,0.8549019607843137,0.796078431372549,C.e)
D.ajj=w([D.Zk,D.Wa,D.a0d],x.O)
D.aaD=new F.ai(E.U,E.a0,C.t,D.ajj,null,null)
D.a1m=new A.d(1,0.7843137254901961,0.5725490196078431,0.16470588235294117,C.e)
D.akO=w([D.mk,D.cP,D.a1m],x.O)
D.aaH=new F.ai(C.P,C.V,C.t,D.akO,null,null)
D.VD=new A.d(1,0.9568627450980393,0.9411764705882353,0.9098039215686274,C.e)
D.WJ=new A.d(1,0.9019607843137255,0.8745098039215686,0.8235294117647058,C.e)
D.ahn=w([C.h,D.VD,D.WJ],x.O)
D.aaJ=new F.ai(E.U,E.a0,C.t,D.ahn,null,null)
D.XZ=new A.d(1,1,0.9411764705882353,0.7215686274509804,C.e)
D.ajN=w([D.XZ,I.ba,I.ie],x.O)
D.aaV=new F.ai(C.P,C.V,C.t,D.ajN,null,null)
D.XS=new A.d(1,0.0784313725490196,0.10588235294117647,0.23137254901960785,C.e)
D.aem=w([D.XS,D.xI],x.O)
D.ab7=new F.ai(E.U,E.a0,C.t,D.aem,null,null)
D.aiL=w([G.e2,G.a6],x.O)
D.abg=new F.ai(E.W,C.a_,C.t,D.aiL,null,null)
D.a1z=new A.d(1,0.2901960784313726,0.3058823529411765,0.41568627450980394,C.e)
D.VG=new A.d(1,0.11764705882352941,0.12941176470588237,0.21176470588235294,C.e)
D.W6=new A.d(1,0.047058823529411764,0.054901960784313725,0.10196078431372549,C.e)
D.a05=new A.d(1,0.17254901960784313,0.18823529411764706,0.2823529411764706,C.e)
D.aiH=w([D.a1z,D.VG,D.W6,D.a05],x.O)
D.afc=w([0,0.35,0.65,1],x.n)
D.abj=new F.ai(E.U,E.a0,C.t,D.aiH,D.afc,null)
D.a0F=new A.d(1,0.9490196078431372,0.9294117647058824,0.8941176470588236,C.e)
D.Yr=new A.d(1,0.8470588235294118,0.8156862745098039,0.7607843137254902,C.e)
D.aix=w([C.h,D.a0F,D.Yr],x.O)
D.abn=new F.ai(E.U,E.a0,C.t,D.aix,null,null)
D.ahe=w([M.ch,G.a6,Z.eP],x.O)
D.abq=new F.ai(E.U,E.a0,C.t,D.ahe,null,null)
D.C6=w([0,26,39,13],x.t)
D.nF=w([0,3,1,2],x.t)
D.C7=w([0,3,2,1],x.t)
D.ac4=w([1,2,3,4],x.t)
D.ac5=w([1,2,4],x.t)
D.ac6=w([1,3],x.t)
D.Cc=w([2,3,4],x.t)
D.acr=w([2,4],x.t)
D.acD=w([D.mk,G.a6],x.O)
D.adg=w(["name","userName","user_name","username","displayName","display_name"],x.s)
D.adt=w([0,0.42,1],x.n)
D.VS=new A.d(0.9019607843137255,0.0392156862745098,0.043137254901960784,0.11764705882352941,C.e)
D.Yi=new A.d(0.9411764705882353,0.0784313725490196,0.08235294117647059,0.18823529411764706,C.e)
D.a_Z=new A.d(0.9490196078431372,0.0392156862745098,0.043137254901960784,0.11764705882352941,C.e)
D.Cg=w([D.VS,D.Yi,D.a_Z],x.O)
D.aej=w([0,0.4,1],x.n)
D.e7=w([D.dz,D.em,D.dC,D.e1],x.O)
D.Tp=new B.LN()
D.af6=w([D.Tp],A.Y("w<LN>"))
D.anz=new B.f7(1,7)
D.anA=new B.f7(2,7)
D.anB=new B.f7(3,7)
D.anC=new B.f7(4,7)
D.anD=new B.f7(5,7)
D.al1=w([D.anz,D.anA,D.anB,D.anC,D.anD],x.J)
D.any=new B.f7(13,7)
D.anx=new B.f7(12,7)
D.anw=new B.f7(11,7)
D.anv=new B.f7(10,7)
D.anO=new B.f7(9,7)
D.akt=w([D.any,D.anx,D.anw,D.anv,D.anO],x.J)
D.anI=new B.f7(7,13)
D.anH=new B.f7(7,12)
D.anG=new B.f7(7,11)
D.anF=new B.f7(7,10)
D.anN=new B.f7(7,9)
D.aks=w([D.anI,D.anH,D.anG,D.anF,D.anN],x.J)
D.anE=new B.f7(7,1)
D.anJ=new B.f7(7,2)
D.anK=new B.f7(7,3)
D.anL=new B.f7(7,4)
D.anM=new B.f7(7,5)
D.al4=w([D.anE,D.anJ,D.anK,D.anL,D.anM],x.J)
D.afC=w([D.al1,D.akt,D.aks,D.al4],x.E)
D.Cq=w(["playerIds","player_ids","currentTurnIndex","current_turn_index","nextTurnIndex","next_turn_index","status","winnerId","winner_user_id","gameId","game_id","tableId","table_id","gameType","game_type","bootValue","boot_value","players","gameFinished","game_finished","message","turnExpiresAt","turn_expires_at","turnSecondsLeft","turn_seconds_left","turnTimerEpoch","turn_timer_epoch"],x.s)
D.ag4=w([0,0.28,0.65,1],x.n)
D.Y1=new A.d(1,0.4196078431372549,0.22745098039215686,0.6588235294117647,C.e)
D.Zd=new A.d(1,0.23921568627450981,0.12156862745098039,0.43137254901960786,C.e)
D.agc=w([D.Y1,D.Zd],x.O)
D.Yd=new A.d(1,0.16470588235294117,0.16862745098039217,0.27058823529411763,C.e)
D.a_q=new A.d(1,0.10196078431372549,0.10588235294117647,0.18823529411764706,C.e)
D.ago=w([D.Yd,D.a_q],x.O)
D.agv=w([H.fo,C.dk],x.O)
D.nI=w(["Red","Yellow","Blue","Green"],x.s)
D.Cy=w(["winnerId","winner_user_id","gameFinished","game_finished"],x.s)
D.l0=w([],x.G)
D.CF=w([],x.a)
D.akb=w(["ludo_online","ludo"],x.s)
D.akc=w(["ludo_online","ludo",null],A.Y("w<h?>"))
D.akT=w(["red","yellow","blue","green"],x.s)
D.alE=w([E.U,Q.fS,E.hX,E.a0],A.Y("w<cx>"))
D.HR=new B.f7(7,7)
D.anQ=new F.t5(96,null,null)
D.iX=new B.a4b(0,"create")
D.HS=new B.a4b(1,"join")
D.anU=new B.q7(!1,!1,D.CF,null)
D.anT=new B.N1(null)
D.anV=new B.vN(D.anT,null)
D.anW=new B.N6("online","Ludo Online","ludo_online","ludo_online")
D.anX=new B.N6("computer","Ludo vs Computer","ludo_computer","ludo_computer")
D.anY=new B.N6("local","Ludo Local","ludo_local","ludo")
D.HU=new B.jq(!1,0,!1)
D.u7=new B.jq(!1,56,!0)
D.fF=new B.jq(!0,0,!1)
D.anZ=new B.jq(!0,0,!0)
D.acI=w([4],x.t)
D.abG=w([0,8],x.t)
D.abE=w([0,4,8],x.t)
D.abD=w([0,2,6,8],x.t)
D.alB=w([0,2,4,6,8],x.t)
D.aiK=w([0,2,3,5,6,8],x.t)
D.aok=new A.df([1,D.acI,2,D.abG,3,D.abE,4,D.abD,5,D.alB,6,D.aiK],A.Y("df<r,T<r>>"))
D.j_=new A.df([1,0,3,1,4,2,2,3],A.Y("df<r,r>"))
D.apr=new A.l(0,14)
D.apD=new A.l(2,3)
D.apE=new A.l(2,4)
D.apW=new A.l(1.2,1.8)
D.a8a=new A.c9(T.kQ,18,C.h,null,null,null)
D.azP=new A.z(!0,C.h,null,null,null,null,13,C.x,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aHM=new A.az("Play",null,D.azP,null,null,null,null,null,null,null)
D.acC=w([D.a8a,M.hL,D.aHM],x.p)
D.auv=new F.im(C.aW,C.i,E.v,E.j,null,C.cY,null,0,D.acC,null)
D.aqn=new A.a2(G.n3,D.auv,null)
D.Qk=new A.cx(-0.35,-0.55)
D.a15=new A.d(1,0.027450980392156862,0.027450980392156862,0.10196078431372549,C.e)
D.afd=w([D.y9,D.a15],x.O)
D.asa=new K.cN(D.Qk,1.15,C.t,null,0,D.afd,null,null)
D.a1J=new A.d(1,1,0.9647058823529412,0.7843137254901961,C.e)
D.ahD=w([D.a1J,D.cP,Z.eP],x.O)
D.asc=new K.cN(V.wl,0.5,C.t,null,0,D.ahD,null,null)
D.asr=new A.aT(12,12)
D.ass=new A.aT(12,3)
D.asA=new A.aT(3,12)
D.My=new A.aT(3,3)
D.au2=new A.W(0,0,120,36)
D.a8z=new A.c9(T.iS,12,H.aX,null,null,null)
D.a_D=new A.d(1,0.0392156862745098,0.10196078431372549,0.22745098039215686,C.e)
D.aCD=new A.z(!0,D.a_D,null,null,null,null,9,C.D,null,0.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aGh=new A.az("RECOMMENDED",null,D.aCD,null,null,null,null,null,null,null)
D.ahQ=w([D.a8z,G.aN,D.aGh],x.p)
D.auq=new F.im(C.aW,C.i,E.v,E.j,null,C.cY,null,0,D.ahQ,null)
D.ot=new A.fB([0,8,13,21,26,34,39,47,51],A.Y("fB<r>"))
D.Ny=new N.kZ("sounds/token_capture.wav")
D.avV=new N.kZ("sounds/token_home.wav")
D.uX=new N.kZ("sounds/token_move.wav")
D.axD=new P.Qj(2,12,12,1,96)
D.az0=new A.z(!0,C.h,null,null,null,null,20,C.x,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.azS=new A.z(!0,C.h,null,null,null,null,24,C.D,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aAo=new A.z(!0,C.io,null,null,null,null,13,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aAs=new A.z(!0,C.h,null,null,null,null,18,C.D,null,0.4,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aAH=new A.z(!0,A0.zo,null,null,null,null,20,C.B,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aCd=new A.z(!0,H.pR,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aCt=new A.z(!0,C.h,null,null,null,null,11.5,C.x,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aCy=new A.z(!0,C.h,null,null,null,null,16,C.D,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aCX=new A.z(!0,C.h,null,null,null,null,24,C.x,null,0.5,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aDq=new A.z(!0,C.h,null,null,null,null,15,C.x,null,0.4,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.Wy=new A.d(1,1,0.9568627450980393,0.8235294117647058,C.e)
D.OY=new A.z(!0,D.Wy,null,null,null,null,13,C.x,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.P5=new A.z(!0,C.h,null,null,null,null,11,C.B,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aES=new A.z(!0,C.h,null,null,null,null,19,C.R,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aBP=new A.z(!0,C.h,null,null,null,null,28,C.x,null,1,null,null,1.05,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aFE=new A.az("ONLINE",null,D.aBP,null,null,null,null,null,null,null)
D.a_F=new A.d(1,0.35294117647058826,0.22745098039215686,0.03137254901960784,C.e)
D.aEh=new A.z(!0,D.a_F,null,null,null,null,22,C.D,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aFG=new A.az("\u20b9",null,D.aEh,null,null,null,null,null,null,null)
D.aFW=new A.az("All four tokens reached home.",null,C.fd,null,null,null,null,null,null,null)
D.aFZ=new A.az("Leave Game?",null,M.OT,C.M,null,null,null,null,null,null)
D.aG4=new A.az("OK",null,null,null,null,null,null,null,null,null)
D.aGb=new A.az("Advanced: Join by Table ID",null,I.vu,null,null,null,null,null,null,null)
D.azW=new A.z(!0,C.h,null,null,null,null,14,C.x,null,3.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aGr=new A.az("LUDO",null,D.azW,null,null,null,null,null,null,null)
D.aDz=new A.z(!0,C.J,null,null,null,null,14,C.R,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aGQ=new A.az("Players",null,D.aDz,null,null,null,null,null,null,null)
D.aD9=new A.z(!0,C.h,null,null,null,null,12,C.x,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aHA=new A.az("LOBBY STATUS",null,D.aD9,null,null,null,null,null,null,null)
D.aAF=new A.z(!0,C.h,null,null,null,null,30,C.D,null,1.2,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aHO=new A.az("LUDO",null,D.aAF,null,null,null,null,null,null,null)
D.aFe=new A.z(!0,null,null,null,null,null,18,C.B,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aHS=new A.az("CONTINUE",null,D.aFe,null,null,null,null,null,null,null)
D.aKa=new B.abB(null)
D.aKt=new B.add(null)
D.aKY=new B.U5(!0,null)
D.aL_=new B.afV(null)
D.aL4=new B.Uv(D.dC,null)
D.aL5=new B.Uv(D.dz,null)
D.aMi=new B.ame(null)})();(function staticFields(){$.jS=0})();(function lazyInitializers(){var w=a.lazyFinal
w($,"cc5","bNV",()=>A4.iY(new B.brJ(),"ludo",!0,"Ludo"))
w($,"c6N","pc",()=>B.bTe())})()};
(a=>{a["cgU4bJo7Z1bqnofQgPsSkYlDdtA="]=a.current})($__dart_deferred_initializers__);