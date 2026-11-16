((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,A5,W,A6,A7,A8,A1,N,A9,A2,Aa,X,Ab,Ac,O,M,Ad,L,R,Ae,Af,A3,U,V,Ag,Y,Z,Q,T,Ah,Ai,Aj,A4,A_,B={LL:function LL(){},
bT6(d,e){var w,v,u,t,s,r,q,p=x.N,o=A.bf(p),n=A.F(p,p)
for(p=d.length,w=e+"#",v=0;v<d.length;d.length===p||(0,A.Y)(d),++v){u=d[v]
t=u.b
s=u.a
r=S.MV(t,e,s)
q=0
for(;;){if(!(o.t(0,r)&&q<400))break;++q
r=S.MV(t,w+q,s)}o.M(0,r)
n.k(0,t,r)}return n},
bT4(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p,o,n,m,l
if(f)return"You"
w=i>=0?i:g
v=w>=0&&w<h.length?C.c.O(h[w]):""
u=B.bT2(e,j,k)
t=x.x
s=B.bT0(g,w,A.a([e,j],t),v)
if(s.length!==0)return s
r=A.a([],x.L)
for(q=0;q<h.length;++q){p=C.c.O(h[q])
if(p.length===0)continue
if(!B.bT3(A.a([e,j],t),p)){o=C.c.O(p)
n=C.c.bh(o,"bot:")||C.c.bh(o,"robot_")}else n=!0
if(n)r.push(new A.aim(q,p))}if(!d)if(v.length!==0){t=C.b.e2(r,new B.aCr(v))||S.bCX(v)
m=t}else m=!1
else m=!0
if(!m)return""
t=v.length!==0
if(t&&C.b.e2(r,new B.aCs(v))){t=B.bT6(r,u.length!==0?u:C.b.bD(h,",")).h(0,v)
return t==null?S.MV(v,u,w):t}l=t?v:"seat:"+w
return S.MV(l,u.length!==0?u:k,w)},
bT2(d,e,f){var w,v,u,t,s,r,q,p
for(w=[d,e],v=0;v<2;++v){u=w[v]
if(u==null)continue
t=J.M(u)
s=t.h(u,"gameId")
if(s==null)s=t.h(u,"game_id")
r=s==null?null:C.c.O(J.J(s))
if(r==null)r=""
if(r.length!==0)return r}for(w=[d,e],v=0;v<2;++v){u=w[v]
if(u==null)continue
t=J.M(u)
q=t.h(u,"tableId")
if(q==null)q=t.h(u,"table_id")
p=q==null?null:C.c.O(J.J(q))
if(p==null)p=""
if(p.length!==0)return p}return C.c.O(f)},
bT0(d,e,f,g){var w,v,u=d>=0&&d<4?D.alb[d]:""
for(w=0;w<2;++w){v=B.bT1(f[w],u,e,g)
if(v.length!==0)return v}return""},
bT1(a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=null
if(a2==null)return""
w=J.M(a2)
v=[w.h(a2,"players"),w.h(a2,"playerList"),w.h(a2,"joinedPlayers")]
for(w=a3.length!==0,u=a5.length!==0,t=x.N,s=x.z,r=x.f,q=x.j,p=0;p<3;++p){o=v[p]
if(!q.b(o))continue
for(n=J.b_(o),m=a1,l=m,k=l;n.A();){j=n.gP(n)
if(!r.b(j))continue
i=A.an(j,t,s)
h=i.h(0,"userId")
if(h==null)h=i.h(0,"user_id")
if(h==null)h=i.h(0,"id")
if(h==null)h=i.h(0,"_id")
g=h==null?a1:C.c.O(J.J(h))
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
a0=B.bCW(d)
if(a0.length!==0)return a0}return""},
bT3(d,e){var w,v,u,t,s,r,q,p,o,n,m
for(w=x.f,v=x.j,u=x.N,t=0;t<2;++t){s=d[t]
if(s==null)continue
r=J.M(s)
q=r.h(s,"botPlayerIds")
if(q==null)q=r.h(s,"bot_player_ids")
if(v.b(q)&&J.e0(q,new B.aCq(),u).t(0,e))return!0
p=r.h(s,"players")
if(!v.b(p))continue
for(r=J.b_(p);r.A();){o=r.gP(r)
if(!w.b(o))continue
n=J.M(o)
m=n.h(o,"userId")
if(m==null)m=n.h(o,"user_id")
if((m==null?null:J.J(m))!==e)continue
if(J.f(n.h(o,"isBot"),!0)||J.f(n.h(o,"seatKind"),"bot"))return!0}}return!1},
bCW(d){var w,v,u,t
for(w=0;w<6;++w){v=d.h(0,D.adx[w])
u=v==null?null:C.c.O(J.J(v))
if(u==null)u=""
if(!S.bCY(u))return u}t=d.h(0,"user")
if(x.f.b(t))return B.bCW(A.an(t,x.N,x.z))
return""},
aCr:function aCr(d){this.a=d},
aCs:function aCs(d){this.a=d},
aCq:function aCq(){},
bT8(d){var w=C.b.en(D.nH,d)
if(w<0)return(d+1)%4
return D.nH[C.k.ac(w+1,4)]},
bT7(d,e){var w,v,u
if(e===4)return A.bp(4,!0,!1,x.y)
w=A.bp(4,!1,!1,x.y)
w[d]=!0
if(e===2){w[G.Cf[d]]=!0
return w}for(v=A.aj(w).i("aS<1>"),u=d;new A.aS(w,new B.aCt(),v).gB(0)<3;){u=B.bT8(u)
w[u]=!0}return w},
bT9(d,e){var w,v,u=A.a([],x.t)
for(w=0;w<4;++w){v=D.nH[w]
if(v<4&&d[v])u.push(v)}return u},
aCt:function aCt(){},
N2:function N2(){},
bTk(d){switch(d){case"local":return D.aoh
case"computer":return D.aog
case"online":default:return D.aof}},
N5:function N5(d,e,f,g){var _=this
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
bTi(d,e){var w,v,u,t,s,r,q,p,o=A.bN("[\\s_-]",!0,!1),n=A.dA(e.toLowerCase(),o,""),m=A.a([],x.a)
for(o=J.b_(d);o.A();){w=o.gP(o)
v=w.a
if(v.length===0)continue
u=w.b
if(u.length!==0){t=A.bN("[\\s_-]",!0,!1)
u=A.dA(u.toLowerCase(),t,"")!==n}else u=!1
if(u)continue
s=C.d.Z(w.c)
r=w.d
r=r>0?r:4
q=w.z
if(q==null)q=w.f.length+w.r.length
p=C.c.O(w.y)
if(p.length!==0)w=p
else w=s>0?"Ludo-"+s:"Table"
m.push(new B.t9(s,r,""+q+" / "+r,w,v))}C.b.ed(m,new B.aDg())
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
vM:function vM(d,e){this.c=d
this.a=e},
afY:function afY(){this.c=this.a=null},
brM:function brM(){},
N_:function N_(d,e,f){this.c=d
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
baF:function baF(){},
baD:function baD(d,e){this.a=d
this.b=e},
baE:function baE(d){this.a=d},
baC:function baC(d){this.a=d},
bap:function bap(d){this.a=d},
baq:function baq(d){this.a=d},
bak:function bak(d){this.a=d},
bal:function bal(d,e){this.a=d
this.b=e},
bam:function bam(d){this.a=d},
ban:function ban(d){this.a=d},
bao:function bao(d,e,f){this.a=d
this.b=e
this.c=f},
bab:function bab(d){this.a=d},
bac:function bac(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bad:function bad(d){this.a=d},
bae:function bae(d){this.a=d},
baf:function baf(d){this.a=d},
bag:function bag(d){this.a=d},
bat:function bat(){},
bau:function bau(d,e,f){this.a=d
this.b=e
this.c=f},
bas:function bas(d,e){this.a=d
this.b=e},
bav:function bav(d){this.a=d},
baw:function baw(d,e){this.a=d
this.b=e},
baj:function baj(){},
bah:function bah(d){this.a=d},
bai:function bai(d){this.a=d},
bay:function bay(){},
baB:function baB(d){this.a=d},
baz:function baz(d){this.a=d},
bax:function bax(){},
baA:function baA(d){this.a=d},
bar:function bar(d){this.a=d},
bp0:function bp0(d){this.a=d},
Yr:function Yr(){},
and:function and(){},
Ys:function Ys(){},
bGG(d,e,f,g,h,i,j,k){return new B.agx(d,f,g,k,j,h,i,e,null)},
N0:function N0(d){this.a=d},
Uh:function Uh(){this.c=this.a=null},
baG:function baG(d){this.a=d},
baH:function baH(d){this.a=d},
baI:function baI(d){this.a=d},
baJ:function baJ(d){this.a=d},
ac7:function ac7(d,e){this.c=d
this.a=e},
b03:function b03(d){this.a=d},
U5:function U5(d,e){this.c=d
this.a=e},
b95:function b95(){},
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
bp1:function bp1(d){this.a=d},
ane:function ane(){},
Yt:function Yt(){},
vK:function vK(d,e){this.c=d
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
bbr:function bbr(d){this.a=d},
bbs:function bbs(d,e){this.a=d
this.b=e},
bbt:function bbt(d,e){this.a=d
this.b=e},
bbu:function bbu(d){this.a=d},
bbv:function bbv(d,e){this.a=d
this.b=e},
bbw:function bbw(d){this.a=d},
bbx:function bbx(d){this.a=d},
bby:function bby(d){this.a=d},
bbz:function bbz(d,e){this.a=d
this.b=e},
bbI:function bbI(d){this.a=d},
baY:function baY(d,e,f){this.a=d
this.b=e
this.c=f},
bb4:function bb4(d,e){this.a=d
this.b=e},
bbE:function bbE(d,e){this.a=d
this.b=e},
bbn:function bbn(d){this.a=d},
bbF:function bbF(d,e){this.a=d
this.b=e},
bbG:function bbG(d,e){this.a=d
this.b=e},
bbH:function bbH(d,e){this.a=d
this.b=e},
baS:function baS(d){this.a=d},
baT:function baT(d){this.a=d},
baU:function baU(d){this.a=d},
baV:function baV(d){this.a=d},
baW:function baW(d){this.a=d},
baX:function baX(d){this.a=d},
baR:function baR(d){this.a=d},
bbd:function bbd(d){this.a=d},
bbe:function bbe(d){this.a=d},
bbf:function bbf(d){this.a=d},
bbg:function bbg(d,e){this.a=d
this.b=e},
bbh:function bbh(d,e,f){this.a=d
this.b=e
this.c=f},
bbi:function bbi(d){this.a=d},
bbj:function bbj(d){this.a=d},
bbk:function bbk(d,e){this.a=d
this.b=e},
bbl:function bbl(d,e){this.a=d
this.b=e},
bbJ:function bbJ(d){this.a=d},
baZ:function baZ(d){this.a=d},
bb_:function bb_(d,e){this.a=d
this.b=e},
bb0:function bb0(d,e){this.a=d
this.b=e},
bb1:function bb1(d){this.a=d},
bb2:function bb2(d){this.a=d},
bb3:function bb3(d){this.a=d},
bb7:function bb7(d){this.a=d},
bb8:function bb8(d){this.a=d},
bb9:function bb9(d){this.a=d},
bba:function bba(d,e){this.a=d
this.b=e},
bbb:function bbb(d,e){this.a=d
this.b=e},
bbc:function bbc(d,e){this.a=d
this.b=e},
bbA:function bbA(d){this.a=d},
bbB:function bbB(d){this.a=d},
bbC:function bbC(d){this.a=d},
bbD:function bbD(d){this.a=d},
baM:function baM(d,e){this.a=d
this.b=e},
baO:function baO(d){this.a=d},
baN:function baN(d){this.a=d},
baP:function baP(d,e){this.a=d
this.b=e},
baQ:function baQ(){},
baK:function baK(d){this.a=d},
bbp:function bbp(){},
bbq:function bbq(d){this.a=d},
bbo:function bbo(d,e){this.a=d
this.b=e},
baL:function baL(d){this.a=d},
bbK:function bbK(d){this.a=d},
bb5:function bb5(d){this.a=d},
bbm:function bbm(d){this.a=d},
bb6:function bb6(d){this.a=d},
bp2:function bp2(d){this.a=d},
anf:function anf(){},
Yu:function Yu(){},
ER:function ER(d,e,f,g,h,i){var _=this
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
_.a_=!1
_.Y=""
_.ah=!1
_.aq=_.a3=null
_.au=10
_.aF=_.aR=_.aX=_.aC=null
_.bx=g
_.cM$=h
_.aL$=i
_.c=_.a=null},
bcv:function bcv(d){this.a=d},
bcw:function bcw(d){this.a=d},
bch:function bch(d){this.a=d},
bcg:function bcg(d){this.a=d},
bci:function bci(d){this.a=d},
bbO:function bbO(d,e){this.a=d
this.b=e},
bbQ:function bbQ(d,e){this.a=d
this.b=e},
bc_:function bc_(d,e){this.a=d
this.b=e},
bcm:function bcm(d){this.a=d},
bcn:function bcn(d,e){this.a=d
this.b=e},
bbP:function bbP(d){this.a=d},
bc4:function bc4(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
bck:function bck(d,e){this.a=d
this.b=e},
bc1:function bc1(d){this.a=d},
bc0:function bc0(d,e,f){this.a=d
this.b=e
this.c=f},
bcl:function bcl(d,e,f){this.a=d
this.b=e
this.c=f},
bbR:function bbR(d){this.a=d},
bbS:function bbS(d){this.a=d},
bc5:function bc5(d){this.a=d},
bc6:function bc6(d){this.a=d},
bc7:function bc7(d){this.a=d},
bc8:function bc8(d){this.a=d},
bc9:function bc9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bca:function bca(d){this.a=d},
bcb:function bcb(d,e){this.a=d
this.b=e},
bcc:function bcc(){},
bcd:function bcd(d){this.a=d},
bce:function bce(d,e){this.a=d
this.b=e},
bcf:function bcf(d){this.a=d},
bcj:function bcj(d){this.a=d},
bc3:function bc3(d){this.a=d},
bc2:function bc2(d,e,f){this.a=d
this.b=e
this.c=f},
bbM:function bbM(d,e){this.a=d
this.b=e},
bbN:function bbN(d,e,f){this.a=d
this.b=e
this.c=f},
bbL:function bbL(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bbU:function bbU(d,e){this.a=d
this.b=e},
bbV:function bbV(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
bbW:function bbW(d){this.a=d},
bbX:function bbX(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
bbY:function bbY(d,e,f){this.a=d
this.b=e
this.c=f},
bbZ:function bbZ(d){this.a=d},
bbT:function bbT(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bcq:function bcq(d,e,f){this.a=d
this.b=e
this.c=f},
bcp:function bcp(d){this.a=d},
bcr:function bcr(){},
bcs:function bcs(d){this.a=d},
bct:function bct(d){this.a=d},
bcu:function bcu(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
bco:function bco(d,e,f){this.a=d
this.b=e
this.c=f},
bp3:function bp3(d){this.a=d},
Yv:function Yv(){},
ang:function ang(){},
Yw:function Yw(){},
c_Q(d){var w,v,u,t=C.k.p(Math.abs(d)),s=new A.eC("")
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
bcG:function bcG(d,e){this.a=d
this.b=e},
bcE:function bcE(d){this.a=d},
bcF:function bcF(d,e){this.a=d
this.b=e},
bcB:function bcB(d,e){this.a=d
this.b=e},
bcA:function bcA(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bcD:function bcD(){},
bcC:function bcC(d,e){this.a=d
this.b=e},
bcz:function bcz(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bcx:function bcx(d,e,f){this.a=d
this.b=e
this.c=f},
bcy:function bcy(d,e,f){this.a=d
this.b=e
this.c=f},
afJ:function afJ(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
b9h:function b9h(){},
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
bp4:function bp4(d){this.a=d},
anh:function anh(){},
Yx:function Yx(){},
a4i:function a4i(d,e){this.c=d
this.a=e},
Ul:function Ul(d,e){this.c=d
this.a=e},
Um:function Um(){this.d=2
this.c=this.a=null},
bcK:function bcK(d){this.a=d},
bcM:function bcM(){},
bcL:function bcL(d){this.a=d},
bcJ:function bcJ(d){this.a=d},
bcI:function bcI(d,e){this.a=d
this.b=e},
bcH:function bcH(d,e){this.a=d
this.b=e},
bp5:function bp5(d){this.a=d},
ani:function ani(){},
Yy:function Yy(){},
MZ:function MZ(d,e){this.b=d
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
bTh(){var w,v,u,t,s,r,q,p,o={}
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
return new B.aCT(A.e7(w,0,A.fn(52,"count",x.S),x.T).eX(0,!1))},
aCP(d){var w
$label0$0:{if(0===d){w=D.ME
break $label0$0}if(1===d){w=D.asN
break $label0$0}if(2===d){w=D.asY
break $label0$0}if(3===d){w=D.asO
break $label0$0}w=D.ME
break $label0$0}return w},
bTf(d,e){var w=B.aCP(d),v=e===0||e===2?-1.05:1.05
return w.a+v},
bTg(d,e){var w=B.aCP(d),v=e===0||e===1?-1.05:1.05
return w.b+v},
f8:function f8(d,e){this.a=d
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
vH:function vH(d,e){this.a=d
this.b=e},
bJd(d,e,f,g,h,i,j,k){var w=Math.max(2,d-k-2),v=Math.max(2,d-j-2)
return new A.l(C.d.S(f*e+h-k/2,2,w),C.d.S(g*e+i-j*0.58,2,v))},
bD2(d,e,f,g,h,i,j,k,l,m){return new B.a4a(k,h,l,i,g,m,e,j,f,d,null)},
bD3(d,e,f,g,h,i){return new B.a4d(h,e,d,g,i,f,null)},
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
_.bV$=d
_.ao$=e
_.c=_.a=null},
b7N:function b7N(d){this.a=d},
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
xl:function xl(d,e,f,g,h,i){var _=this
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
for(;;)switch(w){case 0:h=A.cb()+"/game-tables"
g=A.bO(h,0,null)
f=x.N
e=x.z
d=A.aa(["user_id",a5,"token",a4,"boot_value",a1,"no_of_players",a3,"gameType",a2],f,e)
a0=C.O.ew(d,null)
A.cI("POST",d,"ludo_allocate",h)
w=3
return A.e(F.hA(g,a0,B.aCn(a4)).j9(0,R.eT),$async$aCo)
case 3:t=a7
s=t.b
r=s>=200&&s<300
q=t.e
p=A.aK(A.aJ(q))
o=t.w
A.cz(p.af(0,o),"ludo_allocate",s,r,h)
if(!r)throw A.j(B.EP(B.bCV(t.giN(0)),s))
n=x.h.a(C.O.bz(0,A.aK(A.aJ(q)).af(0,o),null))
q=n==null
p=A.cW(q?null:J.C(n,"code"))
m=p==null?null:C.d.aj(p)
if(m==null)m=0
l=q?null:J.C(n,"table_data")
if(m!==200||!x.j.b(l)||J.ck(l)){k=A.aQ(q?null:J.C(n,"message"))
throw A.j(B.EP(k==null?"Could not join table":k,s))}j=J.fo(l)
if(!x.P.b(j))throw A.j(B.EP("Invalid table_data",s))
q=J.M(j)
p=A.aQ(q.h(j,"table_id"))
if(p==null)p=A.aQ(q.h(j,"ludo_table_id"))
i=p==null?A.aQ(q.h(j,"_id")):p
if(i==null)i=""
if(i.length===0)throw A.j(B.EP("Missing table id",s))
A.an(j,f,e)
u=new B.MS(i)
w=1
break
case 1:return A.n(u,v)}})
return A.o($async$aCo,v)},
a47(d,e,f){var w=0,v=A.p(x.P),u,t
var $async$a47=A.q(function(g,h){if(g===1)return A.m(h,v)
for(;;)switch(w){case 0:t=A.d6(2,d,C.a6,!1)
u=B.vG(A.aa(["user_id",f,"userId",f,"token",e],x.N,x.z),"/game-tables/"+t+"/join","ludo_join",e)
w=1
break
case 1:return A.n(u,v)}})
return A.o($async$a47,v)},
bv8(d,e,f,g){var w=0,v=A.p(x.P),u,t,s,r,q
var $async$bv8=A.q(function(h,i){if(h===1)return A.m(i,v)
for(;;)switch(w){case 0:s=C.c.O(e).toUpperCase()
r=d==null?null:C.c.O(d)
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
u=B.vG(q,"/game-tables/join-by-code","ludo_join_by_code",f)
w=1
break
case 1:return A.n(u,v)}})
return A.o($async$bv8,v)},
MU(d,e){return B.bT_(d,e)},
bT_(d,e){var w=0,v=A.p(x.h),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$MU=A.q(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
r=A.cb()+("/game-tables/"+A.d6(2,d,C.a6,!1))
q=A.bO(r,0,null)
A.cI("GET",null,"ludo_table_get",r)
w=7
return A.e(A.f3(q,B.aCn(e)).j9(0,Y.mW),$async$MU)
case 7:p=g
o=p.b>=200&&p.b<300
n=p.b
m=p
A.cz(A.aK(A.aJ(m.e)).af(0,m.w),"ludo_table_get",n,o,r)
if(!o){u=null
w=1
break}n=p
n=B.bCU(A.aK(A.aJ(n.e)).af(0,n.w))
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
return A.o($async$MU,v)},
a46(d,e){return B.bSZ(d,e)},
bSZ(d,e){var w=0,v=A.p(x.h),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$a46=A.q(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
r=A.cb()+("/game-tables/"+A.d6(2,d,C.a6,!1)+"/game-state")
q=A.bO(r,0,null)
A.cI("GET",null,"ludo_game_state",r)
w=7
return A.e(A.f3(q,B.aCn(e)).j9(0,Y.mW),$async$a46)
case 7:p=g
o=p.b>=200&&p.b<300
m=p.b
l=p
A.cz(A.aK(A.aJ(l.e)).af(0,l.w),"ludo_game_state",m,o,r)
if(o){m=p
m=A.aK(A.aJ(m.e)).af(0,m.w)==="null"}else m=!0
if(m){u=null
w=1
break}m=p
n=B.bCU(A.aK(A.aJ(m.e)).af(0,m.w))
if(n==null){u=null
w=1
break}if(B.bD0(n)!=null){u=null
w=1
break}m=B.EQ(n)
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
bCU(d){var w,v,u=null,t=C.c.O(d)
if(t.length===0||t==="null")return u
try{w=C.O.bz(0,d,u)
if(x.P.b(w))return w
if(x.f.b(w)){t=A.an(w,x.N,x.z)
return t}}catch(v){return u}return u},
aCp(d,e,f){var w=0,v=A.p(x.P),u,t
var $async$aCp=A.q(function(g,h){if(g===1)return A.m(h,v)
for(;;)switch(w){case 0:t=A.d6(2,d,C.a6,!1)
u=B.vG(A.aa(["user_id",f,"token",e],x.N,x.z),"/game-tables/"+t+"/start-game","ludo_start",e)
w=1
break
case 1:return A.n(u,v)}})
return A.o($async$aCp,v)},
bvb(d,e,f){var w=0,v=A.p(x.P),u,t
var $async$bvb=A.q(function(g,h){if(g===1)return A.m(h,v)
for(;;)switch(w){case 0:t=A.d6(2,d,C.a6,!1)
u=B.vG(A.aa(["user_id",f,"token",e],x.N,x.z),"/game-tables/"+t+"/dice","ludo_dice",e)
w=1
break
case 1:return A.n(u,v)}})
return A.o($async$bvb,v)},
bva(d,e,f,g,h){var w=0,v=A.p(x.P),u,t
var $async$bva=A.q(function(i,j){if(i===1)return A.m(j,v)
for(;;)switch(w){case 0:t=A.aa(["user_id",h,"token",f,"token_index",g,"tokenIndex",g],x.N,x.z)
t.k(0,"dice_value",d)
t.k(0,"diceValue",d)
u=B.vG(t,"/game-tables/"+A.d6(2,e,C.a6,!1)+"/move","ludo_move",f)
w=1
break
case 1:return A.n(u,v)}})
return A.o($async$bva,v)},
bv9(d,e,f){var w=0,v=A.p(x.P),u,t
var $async$bv9=A.q(function(g,h){if(g===1)return A.m(h,v)
for(;;)switch(w){case 0:t=A.d6(2,d,C.a6,!1)
u=B.vG(A.aa(["user_id",f,"token",e],x.N,x.z),"/game-tables/"+t+"/leave-table","ludo_leave",e)
w=1
break
case 1:return A.n(u,v)}})
return A.o($async$bv9,v)},
vG(d,e,f,g){var w=0,v=A.p(x.P),u,t,s,r,q,p,o,n,m,l,k
var $async$vG=A.q(function(h,i){if(h===1)return A.m(i,v)
for(;;)switch(w){case 0:m=A.cb()+e
l=A.bO(m,0,null)
k=C.O.ew(d,null)
A.cI("POST",d,f,m)
w=3
return A.e(F.hA(l,k,B.aCn(g)).j9(0,R.eT),$async$vG)
case 3:t=i
s=t.b
r=s>=200&&s<300
q=t.e
p=A.aK(A.aJ(q))
o=t.w
A.cz(p.af(0,o),f,s,r,m)
if(!r)throw A.j(B.EP(B.bCV(t.giN(0)),s))
n=C.O.bz(0,A.aK(A.aJ(q)).af(0,o),null)
if(x.P.b(n)){u=n
w=1
break}throw A.j(B.EP("Invalid JSON",s))
case 1:return A.n(u,v)}})
return A.o($async$vG,v)},
bCV(d){var w,v,u
try{w=x.h.a(C.O.bz(0,d,null))
v=w
v=A.aQ(v==null?null:J.C(v,"message"))
if(v==null){v=w
v=A.aQ(v==null?null:J.C(v,"error"))}if(v==null)v=d
return v}catch(u){v=d.length!==0?d:"Request failed"
return v}},
EP(d,e){return new B.lC(d)},
MS:function MS(d){this.a=d},
lC:function lC(d){this.a=d},
bD0(d){var w,v=J.M(d),u=v.h(d,"code")
if(typeof u=="number"&&u>=400){v=v.h(d,"message")
v=v==null?null:J.J(v)
return v==null?"Request failed":v}if(J.f(v.h(d,"success"),!1)){v=v.h(d,"message")
w=v==null?null:J.J(v)
if(w!=null&&w.length!==0)return w}return null},
EQ(d){var w,v,u,t,s,r,q,p,o="ludoState",n="ludo_state",m=null,l=J.M(d),k=x.f
if(k.b(l.h(d,o))||k.b(l.h(d,n)))return B.aCu(d)
for(w=["data","game","state","payload","result"],v=x.N,u=x.z,t=x.j,s=0;s<5;++s){r=l.h(d,w[s])
if(!k.b(r))continue
q=A.an(r,v,u)
if(k.b(q.h(0,o))||k.b(q.h(0,n))||t.b(q.h(0,"cards"))||q.h(0,"currentTurnIndex")!=null||q.h(0,"current_turn_index")!=null){l=A.EG(m,m,v,u)
l.H(0,d)
l.H(0,q)
return B.aCu(l)}if(k.b(q.h(0,"data"))||k.b(q.h(0,"game"))){l=A.EG(m,m,v,u)
l.H(0,d)
l.H(0,q)
return B.EQ(l)}}p=l.h(d,"table")
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
w=B.EQ(d)
v=J.M(w)
if(x.f.b(v.h(w,"ludoState")))return!0
u=x.j
return u.b(v.h(w,"cards"))&&J.cE(u.a(v.h(w,"cards")))},
t4(d){var w,v,u,t,s,r,q,p,o,n,m="positions"
if(d==null)return D.l2
w=B.EQ(d)
v=J.M(w)
u=v.h(w,"ludoState")
t=x.f.b(u)?A.an(u,x.N,x.z):null
s=t==null
r=s?null:t.h(0,"engine")
if(r==null)r=v.h(w,"engine")
q=(r==null?null:J.J(r).toLowerCase())==="board"
if(q&&!s){p=B.bTa(t.h(0,m))
if(p.length!==0)return p}r=[]
s=!s
if(s)r.push(t.h(0,"cards"))
if(s)r.push(t.h(0,"tokens"))
if(s)r.push(t.h(0,"pawns"))
if(!q&&s)r.push(t.h(0,m))
r.push(v.h(w,"cards"))
r.push(v.h(w,"tokens"))
for(v=r.length,o=0;o<r.length;r.length===v||(0,A.Y)(r),++o){n=B.bTb(r[o])
if(n.length!==0)return n}return D.l2},
bTa(d){var w,v,u,t,s,r,q,p,o,n=x.j
if(!n.b(d)||J.ck(d))return D.l2
w=A.a([],x.G)
for(v=J.b_(d),u=x.N,t=x.z,s=x.Y;v.A();){r=v.gP(v)
if(!n.b(r))continue
q=A.a([],s)
for(p=J.b_(r);p.A();){o=B.aCx(p.gP(p))
q.push(A.aa(["stepNo",o<0?0:o+1,"packed",!1],u,t))}if(q.length!==0)w.push(q)}return w},
bTb(d){var w,v,u,t,s,r,q,p,o,n,m=x.j
if(m.b(d)){w=A.a([],x.G)
for(v=J.b_(d),u=x.f,t=x.Y;v.A();){s=v.gP(v)
if(m.b(s)){r=A.a([],t)
for(q=J.b_(s);q.A();)r.push(B.a48(q.gP(q)))
w.push(r)}else if(u.b(s))w.push(A.a([B.a48(s)],t))
else if(typeof s=="number"||typeof s=="string")w.push(A.a([B.a48(s)],t))}m=x.m
m=A.ag(new A.aS(w,new B.aCv(),m),m.i("N.E"))
return m}if(x.f.b(d)){v=J.bY(d)
u=x.U
p=A.ag(new A.dM(J.e0(v.gcE(d),new B.aCw(),x.a3),u),u.i("N.E"))
C.b.hn(p)
if(p.length===0)return D.l2
w=A.a([],x.G)
for(u=p.length,t=x.Y,o=0;o<p.length;p.length===u||(0,A.Y)(p),++o){n=p[o]
s=v.h(d,""+n)
if(s==null)s=v.h(d,n)
if(m.b(s)){r=A.a([],t)
for(q=J.b_(s);q.A();)r.push(B.a48(q.gP(q)))
w.push(r)}else w.push(A.a([B.a48(s)],t))}return w}return D.l2},
a48(d){var w,v,u
if(x.f.b(d)){w=A.an(d,x.N,x.z)
if(!w.aw(0,"stepNo")&&!w.aw(0,"step_no")){v=w.h(0,"position")
u=v==null?w.h(0,"pos"):v
if(u==null)u=w.h(0,"cell")
if(u!=null)w.k(0,"stepNo",B.aCx(u))}return w}if(typeof d=="number"||typeof d=="string")return A.aa(["stepNo",B.aCx(d)],x.N,x.z)
return C.cm},
MY(d){var w=J.M(d),v=w.h(d,"stepNo")
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
w=A.cG(A.v(d),null)
return w==null?0:w},
bTe(d){var w,v,u,t=A.a([],x.s)
for(w=J.b_(d);w.A();){v=w.gP(w)
u=v==null?null:C.c.O(J.J(v))
if(u==null)u=""
if(L.aDm(u))t.push(u)}return t},
bvc(d,e){var w,v,u=d==null,t=u?null:d.h(0,"playerIds")
if(t==null)t=u?null:d.h(0,"player_ids")
if(x.j.b(t)&&J.cE(t)){w=B.bTe(t)
if(w.length!==0)return w}v=B.bTd(u?null:d.h(0,"players"))
if(v.length!==0)return v
if(e!=null&&J.cE(e))return L.N6(e).c
return C.aa},
MX(d,e){var w=null,v="playerIds",u="player_ids",t="botPlayerIds",s="bot_player_ids",r=A.a([],x.s),q=new B.aCz(r),p=d==null,o=p?w:d.h(0,v)
if(o==null)o=p?w:d.h(0,u)
q.$1(o)
o=p?w:d.h(0,t)
if(o==null)p=p?w:d.h(0,s)
else p=o
q.$1(p)
p=e==null
o=p?w:J.C(e,v)
if(o==null)o=p?w:J.C(e,u)
q.$1(o)
o=p?w:J.C(e,t)
if(o==null)p=p?w:J.C(e,s)
else p=o
q.$1(p)
if(r.length!==0)return r
return B.bvc(d,e)},
q6(d,e){var w,v,u,t,s,r,q,p,o,n=null
if(e.length===0)return-1
w=C.b.en(B.MX(d,n),e)
if(w>=0)return w
v=C.b.en(B.bvc(d,n),e)
if(v>=0)return v
u=d==null?n:d.h(0,"players")
if(x.j.b(u))for(t=J.b_(u),s=x.f;t.A();){r=t.gP(t)
if(!s.b(r))continue
q=J.M(r)
p=q.h(r,"userId")
if(p==null)p=q.h(r,"user_id")
if((p==null?n:J.J(p))!==e)continue
o=q.h(r,"seatIndex")
if(o==null)o=q.h(r,"seat_index")
if(typeof o=="number")return C.d.aj(o)}return-1},
bTd(d){var w,v,u,t,s,r,q,p,o
if(!x.j.b(d)||J.ck(d))return C.aa
w=A.F(x.S,x.N)
for(v=J.b_(d),u=x.f;v.A();){t=v.gP(v)
if(!u.b(t))continue
s=J.M(t)
r=s.h(t,"userId")
if(r==null)r=s.h(t,"user_id")
q=r==null?null:C.c.O(J.J(r))
if(q==null||!L.aDm(q))continue
p=s.h(t,"seatIndex")
if(p==null)p=s.h(t,"seat_index")
if(typeof p=="number")w.k(0,C.d.aj(p),q)}if(w.a===0)return C.aa
v=w.$ti.i("cm<1>")
o=A.ag(new A.cm(w,v),v.i("N.E"))
C.b.hn(o)
v=A.aj(o).i("as<1,h>")
v=A.ag(new A.as(o,new B.aCy(w),v),v.i("aX.E"))
return v},
oz(d){var w,v,u,t,s
if(d==null)return-1
w=d.h(0,"currentTurnIndex")
if(w==null)w=d.h(0,"current_turn_index")
v=w==null?d.h(0,"nextTurnIndex"):w
if(v==null)v=d.h(0,"next_turn_index")
if(typeof v=="number")return C.d.aj(v)
if(typeof v=="string"){u=A.cG(v,null)
if(u!=null)return u}t=d.h(0,"chaal")
if(typeof t=="string"&&t.length!==0){s=C.b.en(B.bvc(d,null),t)
if(s>=0)return s}return-1},
aCA(d){var w,v=null,u=d==null,t=u?v:J.C(d,"winnerId")
if(t==null)t=u?v:J.C(d,"winner_user_id")
if(t==null)return v
w=C.c.O(J.J(t))
return w.length===0?v:w},
MW(d){var w,v,u
if(d==null)return!1
w=J.M(d)
v=w.h(d,"status")
if((v==null?null:J.J(v))==="waiting")return!0
u=w.h(d,"game_status")
if(u==null)u=w.h(d,"gameStatus")
w=J.fN(u)
if(w.n(u,0)||w.n(u,"0"))return!0
return!1},
oA(d){var w,v,u
if(d==null)return!1
if(B.MW(d))return!1
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
if(x.f.b(v)){w=J.C(v,"phase")
return(w==null?null:J.J(w))==="moving"?"moving":"rolling"}return"rolling"},
vJ(d){var w,v,u,t,s=d==null,r=s?null:J.C(d,"ludoState")
if(!x.f.b(r)){w=s?null:J.C(d,"dice")
if(typeof w=="number")return C.d.aj(w)
return 0}v=J.M(r)
u=v.h(r,"lastDice")
t=u==null?v.h(r,"last_dice"):u
if(t==null)t=s?null:J.C(d,"dice")
if(typeof t=="number")return C.d.aj(t)
return 0},
bCZ(d,e){var w,v,u,t,s,r,q="status"
if(B.oA(e))return
w=B.MW(e)
v=J.M(e)
u=v.h(e,q)
t=u==null?null:J.J(u)
u=!w
if(!(!u||t==="rolling"||t==="moving"||t==="playing"||B.a49(e))&&u)return
for(s=0;s<4;++s){r=D.CD[s]
if(J.f(v.h(e,r),!0))continue
d.L(0,r)}if(w){d.k(0,q,"waiting")
d.k(0,"game_status",0)}else{v=d.h(0,q)
if((v==null?null:J.J(v))==="finished"&&t!=="finished")d.k(0,q,t==null?"rolling":t)}},
q5(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f="dice",e="message",d="ludoState",a0="cards",a1="tokens",a2="phase",a3="lastDice",a4="last_dice"
if(a6==null||J.ck(a6))return a5
a6=B.EQ(a6)
if(!B.a49(a6)&&a5!=null){w=A.an(a5,x.N,x.z)
for(v=J.M(a6),u=!1,t=0;t<27;++t){s=D.Cv[t]
if(v.aw(a6,s)&&v.h(a6,s)!=null){w.k(0,s,v.h(a6,s))
u=!0}}if(v.h(a6,f)!=null){w.k(0,f,v.h(a6,f))
u=!0}if(v.h(a6,e)!=null){w.k(0,e,v.h(a6,e))
u=!0}if(u){B.bD_(w,a6)
B.bCZ(w,a6)}return u?w:a5}v=a5!=null
r=x.N
q=x.z
w=v?A.an(a5,r,q):A.F(r,q)
for(p=J.ph(a6),p=p.gad(p),o=x.f;p.A();){n=p.gP(p)
s=n.a
m=n.b
if(m==null)continue
if(s==="ludoState"&&o.b(m)){l=w.h(0,d)
if(o.b(l)){n=A.an(l,r,q)
k=A.an(m,r,q)
j=A.EG(null,null,r,q)
j.H(0,n)
j.H(0,k)
i=B.t4(A.aa(["ludoState",n],r,q))
h=B.t4(A.aa(["ludoState",k],r,q))
k=h.length===0
if(k&&i.length!==0){if(n.h(0,a0)!=null)j.k(0,a0,n.h(0,a0))
if(n.h(0,a1)!=null)j.k(0,a1,n.h(0,a1))
g=!0}else{g=i.length!==0&&!k&&B.bTc(i,h)
if(g){if(n.h(0,a0)!=null)j.k(0,a0,n.h(0,a0))
if(n.h(0,a1)!=null)j.k(0,a1,n.h(0,a1))}}if(g){if(n.h(0,a2)!=null)j.k(0,a2,n.h(0,a2))
if(n.h(0,a3)!=null)j.k(0,a3,n.h(0,a3))
if(n.h(0,a4)!=null)j.k(0,a4,n.h(0,a4))}w.k(0,d,j)}else w.k(0,d,A.an(m,r,q))
continue}w.k(0,s,m)}if(v)for(t=0;t<27;++t){s=D.Cv[t]
if(C.b.t(D.CD,s))continue
if(!w.aw(0,s)||w.h(0,s)==null){l=a5.h(0,s)
if(l!=null)w.k(0,s,l)}}B.bD_(w,a6)
B.bCZ(w,a6)
return w},
bD_(d,e){var w,v,u="currentTurnIndex",t="current_turn_index",s="nextTurnIndex",r="next_turn_index",q=J.M(e),p=q.h(e,u)
if(p==null)p=q.h(e,t)
w=q.h(e,s)
if(w==null)w=q.h(e,r)
v=p==null?w:p
if(v==null)return
d.k(0,u,v)
d.k(0,t,v)
if(w!=null){d.k(0,s,w)
d.k(0,r,w)}},
bTc(d,e){var w,v,u,t,s,r,q,p,o,n,m=e.length
if(m===0&&d.length!==0)return!0
w=d.length
if(w<m)m=w
for(v=0,u=0,t=0;t<m;++t){s=d[t]
r=e[t]
q=J.M(s)
p=J.M(r)
o=q.gB(s)<p.gB(r)?q.gB(s):p.gB(r)
for(n=0;n<o;++n){v+=B.MY(q.h(s,n))
u+=B.MY(p.h(r,n))}}return v>0&&u===0},
aCv:function aCv(){},
aCw:function aCw(){},
aCz:function aCz(d){this.a=d},
aCy:function aCy(d){this.a=d},
vL(){var w=0,v=A.p(x.H)
var $async$vL=A.q(function(d,e){if(d===1)return A.m(e,v)
for(;;)switch(w){case 0:$.jS=$.jS+1
w=2
return A.e(A.hn(),$async$vL)
case 2:return A.n(null,v)}})
return A.o($async$vL,v)},
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
vI:function vI(d,e){this.b=d
this.a=e},
MT:function MT(d,e,f,g,h,i,j,k){var _=this
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
ba6:function ba6(d,e){this.a=d
this.b=e},
ba5:function ba5(d){this.a=d},
ba4:function ba4(){},
ba7:function ba7(d,e){this.a=d
this.b=e},
ba9:function ba9(d){this.a=d},
ba8:function ba8(){},
bD4(d,e,f,g){return new B.a4f(e,f,d,g,null)},
bD5(d,e,f,g,h,i,j,k,l,m,n,o,p){return new B.a4g(d,k,n,g,i,m,o,h,f,l,j,p,!0,null)},
bJc(d){var w,v,u
for(w=J.b_(d),v=0;w.A();){u=w.gP(w)
if(u.c)v+=40
else if(!u.a)v+=10+C.k.bj(C.k.S(u.b,0,56),4)}return v},
by6(d){return J.mP(d,new B.brL()).gB(0)},
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
N1:function N1(d,e,f){this.c=d
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
N3:function N3(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
brL:function brL(){},
zI:function zI(d,e){this.c=d
this.a=e},
afW:function afW(d){this.a=d},
a4h(d){if(d<2)return 2
if(d>4)return 4
return d},
bTj(d){var w,v,u=B.a4h(d),t=A.bp(4,!1,!1,x.y)
for(w=0;w<u;++w){v=D.j0.h(0,B.N4(w,u))
if(v==null)v=0
if(v<4)t[v]=!0}return t},
N4(d,e){var w,v=B.a4h(e)
if(v===2)w=D.acn
else w=v===3?D.acm:D.acl
if(d<0||d>=w.length)return C.b.gW(w)
return w[d]},
t8(d,e){var w=D.j0.h(0,B.N4(d,e))
return w==null?0:w},
bD6(d,e){var w,v,u=B.a4h(e)
for(w=0;w<u;++w){v=D.j0.h(0,B.N4(w,u))
if((v==null?0:v)===d)return w}return 0},
ayE(d,e,f,g,h){var w=0,v=A.p(x.M),u,t
var $async$ayE=A.q(function(i,j){if(i===1)return A.m(j,v)
for(;;)switch(w){case 0:t=O
w=3
return A.e(B.ayD(d,e,f,g,h),$async$ayE)
case 3:u=t.bBT(j,d,200,f)
w=1
break
case 1:return A.n(u,v)}})
return A.o($async$ayE,v)},
ayD(d,e,f,g,h){var w=0,v=A.p(x.P),u,t,s,r,q,p,o,n,m,l,k
var $async$ayD=A.q(function(i,j){if(i===1)return A.m(j,v)
for(;;)switch(w){case 0:m=A.cb()+"/game-tables/customise"
l=A.bO(m,0,null)
k=A.aa(["user_id",h,"token",g,"boot_value",O.bBS(d),"no_of_players",f,"gameType",e],x.N,x.z)
A.cI("POST",k,"game_tables/customise",m)
t=O.ayB(g)
w=3
return A.e(F.hA(l,C.O.ew(k,null),t),$async$ayD)
case 3:s=j
t=s.b
r=t>=200&&t<300
q=s.e
p=A.aK(A.aJ(q))
o=s.w
A.cz(p.af(0,o),"game_tables/customise",t,r,m)
if(!r)throw A.j(O.LX(O.buI(s.giN(0)),t))
n=C.O.bz(0,A.aK(A.aJ(q)).af(0,o),null)
if(!x.P.b(n))throw A.j(O.LX("Invalid response",t))
u=n
w=1
break
case 1:return A.n(u,v)}})
return A.o($async$ayD,v)},
bTl(d){var w=C.c.O(d)
if(w.length===0||w==="null"||w==="undefined"||w==="0")return!1
return!0},
bxT(d){var w=N.cw(d)
if(!w.y)w.me()},
bJe(d,e,f){var w,v=L.J1(d),u=v==null?null:v.an0()
if(u==null)u=""
v=d.h(0,"turnTimerEpoch")
if(v==null){v=d.h(0,"turn_timer_epoch")
w=v}else w=v
return""+f+":"+u+":"+A.v(w==null?"":w)+":"+e},
bqU(d){if(d<=0)return 0
return Math.min(10,d)},
c48(d,e){var w=L.byl(d)
if(w>0)return B.bqU(w)
if(e!=null&&e>0)return B.bqU(e)
return 0},
bD1(d,e){return new F.t5(e,d,null)}},D,S,I,K,Ak,H,Al,A0,F,E,P,G,Am,An
J=c[1]
A=c[0]
C=c[2]
A5=c[38]
W=c[147]
A6=c[151]
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
O=c[40]
M=c[161]
Ad=c[164]
L=c[33]
R=c[162]
Ae=c[168]
Af=c[58]
A3=c[158]
U=c[130]
V=c[67]
Ag=c[98]
Y=c[165]
Z=c[138]
Q=c[97]
T=c[167]
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
Ak=c[63]
H=c[77]
Al=c[85]
A0=c[88]
F=c[68]
E=c[72]
P=c[65]
G=c[69]
Am=c[32]
An=c[104]
B.LL.prototype={
n(d,e){if(e==null)return!1
if(J.av(e)!==A.a6(this))return!1
return e instanceof B.LL},
gG(d){return A.ar("tnum",1,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
p(d){return"FontFeature('tnum', 1)"}}
B.N2.prototype={
GB(d,e,f,g,h){return this.b7z(d,e,f,g,h)},
b7z(d,e,f,g,h){var w=0,v=A.p(x.c),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$GB=A.q(function(a0,a1){if(a0===1){s.push(a1)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.e(B.ayE(d,e,f,g,h),$async$GB)
case 7:q=a1
m=r.a4u(q)
u=m
w=1
break
t=2
w=6
break
case 4:t=3
j=s.pop()
m=A.a9(j)
w=m instanceof O.vc?8:10
break
case 8:p=m
t=12
w=15
return A.e(O.yZ(d,null,e,f,g,h),$async$GB)
case 15:o=a1
m=r.a4u(o)
u=m
w=1
break
t=3
w=14
break
case 12:t=11
i=s.pop()
m=A.a9(i)
if(m instanceof O.vc){n=m
m=n.a
k=n.b
throw A.j(B.EP(m,k))}else throw i
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
a4u(d){var w=d.b
A.aa(["table_id",C.b.gW(w).a,"ludo_table_id",C.b.gW(w).a,"gameType",C.b.gW(w).b,"bootValue",C.b.gW(w).c,"noOfPlayers",C.b.gW(w).d],x.N,x.z)
return new B.MS(d.a)}}
B.N5.prototype={}
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
gaoR(){var w=this.at
if(w>=2)return w>4?4:w
return this.as.a==="computer"?2:4},
hd(){var w=0,v=A.p(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k
var $async$hd=A.q(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=r.c.oo(null,!0,!0,D.CK)
l=r.gF()
if((l.c&4)===0)r.J(m)
q=$.aA
if(q==null||q.length===0){m=r.c.Aj("Please log in to play",!1)
if((l.c&4)===0)r.J(m)
w=1
break}t=4
w=7
return A.e(r.Kr(q),$async$hd)
case 7:p=e
m=r.c.Fr(!1,B.bTi(p,r.as.c))
if((l.c&4)===0)r.J(m)
t=2
w=6
break
case 4:t=3
k=s.pop()
o=A.a9(k)
m=r.c.Am(A.v(o),!0,!1)
if((l.c&4)===0)r.J(m)
w=6
break
case 3:w=2
break
case 6:case 1:return A.n(u,v)
case 2:return A.m(s.at(-1),v)}})
return A.o($async$hd,v)},
Kr(d){return this.aM6(d)},
aM6(d){var w=0,v=A.p(x.v),u,t=this,s,r,q,p,o,n,m
var $async$Kr=A.q(function(e,f){if(e===1)return A.m(f,v)
for(;;)switch(w){case 0:o=t.as.a
n=o==="computer"||o==="local"?A.a([t.gaoR()],x.t):D.Ch
o=x.F
s=A.F(x.N,o)
m=J
w=3
return A.e(A.hi(new A.as(n,new B.aDe(t,d),A.aj(n).i("as<1,am<T<hj>>>")),x.v),$async$Kr)
case 3:o=m.bzn(f,new B.aDf(),o),r=o.$ti,o=new A.n_(J.b_(o.a),o.b,C.i2,r.i("n_<1,2>")),r=r.y[1]
case 4:if(!o.A()){w=5
break}q=o.d
if(q==null)q=r.a(q)
p=q.a
if(p.length===0){w=4
break}s.k(0,p,q)
w=4
break
case 5:o=s.$ti.i("c_<2>")
o=A.ag(new A.c_(s,o),o.i("N.E"))
u=o
w=1
break
case 1:return A.n(u,v)}})
return A.o($async$Kr,v)},
B0(d){return this.b7A(d)},
b7A(a2){var w=0,v=A.p(x.w),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$B0=A.q(function(a3,a4){if(a3===1){s.push(a4)
w=t}for(;;)switch(w){case 0:d=$.aA
a0=K.cv()
if(a0==null){k=$.bc
a0=k==null?null:k.a}q=a0
if(d==null||d.length===0||q==null||q.length===0){k=r.c.Fq("Please log in to play",!0)
if((r.gF().c&4)===0)r.J(k)
u=null
w=1
break}k=r.c.mk(null,!0,!0)
j=r.gF()
if((j.c&4)===0)r.J(k)
t=4
i=C.c.O(a2.e)
p=i
w=J.au(p)!==0?7:8
break
case 7:w=9
return A.e(B.a47(p,d,q),$async$B0)
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
return A.e(r.ax.GB(g,k,f,d,q),$async$B0)
case 13:w=11
break
case 12:w=14
return A.e(B.aCo(g,k,f,d,q),$async$B0)
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
k=r.c.mk(n.a,!0,!1)
if((j.c&4)===0)r.J(k)
u=null
w=1
break}else if(k instanceof O.vc){m=k
k=r.c.mk(m.a,!0,!1)
if((j.c&4)===0)r.J(k)
u=null
w=1
break}else{l=k
k=r.c.mk(A.v(l),!0,!1)
if((j.c&4)===0)r.J(k)
u=null
w=1
break}w=6
break
case 3:w=2
break
case 6:case 1:return A.n(u,v)
case 2:return A.m(s.at(-1),v)}})
return A.o($async$B0,v)},
Fg(d){return this.b_9(d)},
b_9(d){var w=0,v=A.p(x.y),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g
var $async$Fg=A.q(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:i=$.aA
h=K.cv()
if(h==null){m=$.bc
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
break}l=r.c.mk(null,!0,!0)
k=r.gF()
if((k.c&4)===0)r.J(l)
t=4
l=A.cb()
w=7
return A.e(new F.eL(l).FE(m,"ludo_local_boot:"+m+":"+d.b+":"+q+":"+Date.now(),"game_bet",i,q),$async$Fg)
case 7:p=f
w=8
return A.e(K.fc(p),$async$Fg)
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
if(m instanceof F.ps){o=m
m=r.c.mk(o.a,!0,!1)
if((k.c&4)===0)r.J(m)
u=!1
w=1
break}else{n=m
m=r.c.mk(A.v(n),!0,!1)
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
vT(d,e,f,g,h){var w=this,v=g==null?w.a:g,u=f==null?w.b:f,t=h==null?w.c:h
return new B.q7(v,u,t,e?d:w.d)},
Fq(d,e){return this.vT(d,e,null,null,null)},
mk(d,e,f){return this.vT(d,e,f,null,null)},
Fp(d){return this.vT(null,!1,d,null,null)},
Aj(d,e){return this.vT(d,!1,null,e,null)},
oo(d,e,f,g){return this.vT(d,e,null,f,g)},
Fr(d,e){return this.vT(null,!1,null,d,e)},
Am(d,e,f){return this.vT(d,e,null,f,null)},
gdD(){var w=this
return[w.a,w.b,w.c,w.d]}}
B.vM.prototype={
V(){return new B.afY()}}
B.afY.prototype={
a4(){this.ag()
A.dU()},
u(d){return Am.bv6("assets/anim/ludo.json",C.l,this.a.c,E.aj,C.bg,!1,0.55)}}
B.N_.prototype={
V(){var w=$.pd(),v=A.bp(4,1,!1,x.S),u=A.a([],x.t)
return new B.Ug(new B.jR(w),v,u,C.bF,null,null)}}
B.Ug.prototype={
a4(){var w,v,u,t,s,r=this,q=null
r.av_()
w=J.im(4,x.y)
for(v=r.a,u=0;t=u<4,t;++u){v.toString
w[u]=t&&v.c[u]}r.d=w
r.a.toString
v=B.bT9(w,q)
r.e=v
if(v.length===0)r.e=A.bI(D.nH,!0,x.S)
w=J.im(4,x.I)
for(v=x.r,s=0;s<4;++s)w[s]=A.bp(4,D.fD,!1,v)
r.f=w
v=new B.baF()
v.$0()
$.at.ba$.push(r)
$.at.am$.push(new B.baD(r,v))
r.cx=A.bb(q,C.iu,0,q,1,q,r)
v=A.bb(q,Q.kG,0,q,1,q,r)
v.hN(0,!0)
r.cy=v
t=x.Z
r.db=new A.ax(A.bP(C.d4,v,q),new A.aE(0.35,1,t),t.i("ax<aO.T>"))
$.at.am$.push(new B.baE(r))},
kJ(d){this.a.toString
return!1},
kT(d){if(d===C.hY||d===C.jN||d===C.hZ)return
if(d===C.cz){if($.jS>0)A.hn()
$.at.am$.push(new B.baC(this))}},
l(){var w,v=this
$.at.he(v)
w=v.cx
w===$&&A.b()
w.l()
w=v.cy
w===$&&A.b()
w.l()
v.auZ()},
ghD(){var w=this.e
w===$&&A.b()
return w[C.k.ac(this.w,w.length)]},
vo(){var w=this
if(w.c==null||!w.kJ(w.ghD())||w.Q||w.as||w.ax||w.ay)return
w.vn()},
vn(){var w=0,v=A.p(x.H),u,t=2,s=[],r=[],q=this,p,o,n
var $async$vn=A.q(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.ax){w=1
break}q.ax=!0
t=3
n=x.H
w=6
return A.e(A.cs(A3.rb,null,n),$async$vn)
case 6:if(q.c==null||!q.kJ(q.ghD())||q.Q||q.as){r=[1]
w=4
break}w=7
return A.e(q.z0(!0),$async$vn)
case 7:if(q.c==null||!q.as||!q.kJ(q.ghD())){r=[1]
w=4
break}w=8
return A.e(A.cs(C.hb,null,n),$async$vn)
case 8:if(q.c==null||!q.as||!q.kJ(q.ghD())){r=[1]
w=4
break}p=A.bI(q.at,!0,x.S)
if(J.au(p)===0){q.E(new B.bap(q))
if(q.y===6)q.vo()
else q.Sa()
r=[1]
w=4
break}o=q.aQW(q.ghD(),p,q.y)
w=9
return A.e(q.Cz(q.ghD(),o),$async$vn)
case 9:r.push(5)
w=4
break
case 3:r=[2]
case 4:t=2
q.ax=!1
if(q.c!=null)$.at.am$.push(new B.baq(q))
w=r.pop()
break
case 5:case 1:return A.n(u,v)
case 2:return A.m(s.at(-1),v)}})
return A.o($async$vn,v)},
aQW(d,e,f){var w,v,u,t,s,r,q,p,o,n=C.b.gW(e)
for(w=e.length,v=this.CW,u=f===6,t=-2147483647,s=0;s<e.length;e.length===w||(0,A.Y)(e),++s){r=e[s]
q=this.f
q===$&&A.b()
p=q[d][r]
q=p.a
o=q&&u?80:0
if(!q){q=p.b
o=(q+f>=56?o+200:o)+q
if(this.agw(d,r,f))o+=120}o+=v.cT(8)
if(o>t){t=o
n=r}}return n},
agw(d,e,f){var w,v,u,t,s,r,q=this,p=q.f
p===$&&A.b()
w=p[d][e]
if(w.a||w.c||w.b>50)return!1
if(w.b+f>50)return!1
p=q.r
v=p.p7(d,w)
v.toString
u=C.k.ac(v+f,52)
if(D.ou.t(0,u))return!1
for(t=0;t<4;++t){if(t!==d){v=q.d
v===$&&A.b()
v=!v[t]}else v=!0
if(v)continue
for(s=0;s<4;++s){r=q.f[t][s]
if(p.p7(t,r)===u&&!r.a&&!r.c)return!0}}return!1},
z0(d){return this.aSX(d)},
aa6(){return this.z0(!1)},
aSX(d){var w=0,v=A.p(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i
var $async$z0=A.q(function(e,f){if(e===1)return A.m(f,v)
for(;;)switch(w){case 0:if(t.Q||t.as||t.ay){w=1
break}s=!d
if(s&&t.kJ(t.ghD())){w=1
break}t.E(new B.bak(t))
if(s)P.dk()
$.bE().bt(0,W.lx)
r=t.CW
q=d?16:14
s=x.H,p=q-2,o=q-4,n=0
case 3:if(!(n<q)){w=5
break}if(t.c==null){w=1
break}m=t.cx
m===$&&A.b()
m.z=C.bH
m.y=m.w=null
m.r.uk(0,!0)
m.Dl(0)
m.aE()
l=m.Q
l===$&&A.b()
if(m.as!==l){m.as=l
m.wT(l)}m.J1(m.b)
new B.bal(t,r).$0()
t.c.dl()
if(d)k=n<o?110:160
else if(n<o)k=85
else{m=n<p?110:140
k=m}w=6
return A.e(A.cs(new A.aU(1000*k),null,s),$async$z0)
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
t.E(new B.bam(t))
w=7
return A.e(A.cs(A.cc(0,d?800:550,0),null,s),$async$z0)
case 7:if(t.c==null){w=1
break}s=t.f
s===$&&A.b()
if(t.r.a06(s,j,i).length===0){if(t.c==null){w=1
break}t.E(new B.ban(t))
w=1
break}t.E(new B.bao(t,j,i))
if(d){w=1
break}t.vo()
case 1:return A.n(u,v)}})
return A.o($async$z0,v)},
Sa(){var w,v,u=this
u.as=!1
u.at=A.a([],x.t)
w=u.w
v=u.e
v===$&&A.b()
u.w=(w+1)%v.length
$.at.am$.push(new B.bab(u))},
aNM(d,e){var w=this
if(!w.as||d!==w.ghD())return
if(!C.b.t(w.at,e))return
if(w.kJ(w.ghD())||w.ay)return
w.Cz(d,e)},
Cz(d,e){return this.ay6(d,e)},
ay6(d,e){var w=0,v=A.p(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$Cz=A.q(function(f,g){if(f===1)return A.m(g,v)
for(;;)switch(w){case 0:l=t.ghD()
if(d!==l||t.ay){w=1
break}s=t.y
r=t.f
r===$&&A.b()
q=r[l][e]
p=t.agw(l,e,s)
r=t.r
o=r.a07(l,s,q,e)
w=o.length>1?3:4
break
case 3:$.bE().bt(0,D.uZ)
t.ay=!0
t.E(new B.bac(t,l,e,o))
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
case 7:if(t.c!=null)t.E(new B.bad(t))
t.ay=!1
case 4:if(t.c==null){w=1
break}r.agV(t.f,l,s,e)
if(p)$.bE().bt(0,D.NE)
else if(t.f[l][e].c)$.bE().bt(0,D.awk)
if(r.baJ(t.f[l])){t.E(new B.bae(t))
t.aV7(l)
w=1
break}if(s===6){t.E(new B.baf(t))
t.vo()
w=1
break}t.E(new B.bag(t))
case 1:return A.n(u,v)}})
return A.o($async$Cz,v)},
aV7(d){var w,v,u=this,t={}
u.a.toString
w=$.bE()
w.bt(0,X.bN)
u.a.toString
v=D.nK[d]+" wins!"
t.a=new B.bat()
w=u.c
w.toString
F.fO(null,!1,new B.bau(u,v,d),w,x.H).hz(new B.bav(t))
$.at.am$.push(new B.baw(t,u))},
CS(){var w=0,v=A.p(x.H),u=this,t
var $async$CS=A.q(function(d,e){if(d===1)return A.m(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return A.e(F.fO(C.l.j(0.72),!0,new B.baj(),t,x.y),$async$CS)
case 2:if(e===!0&&u.c!=null){t=u.c
t.toString
A.aT(t,!1).bg(0)}return A.n(null,v)}})
return A.o($async$CS,v)},
u(d){var w,v,u,t,s,r,q=this,p=null,o=!q.Q&&!q.as&&!q.kJ(q.ghD())&&!q.ay,n=q.d
n===$&&A.b()
w=new A.aS(n,new B.bay(),A.aj(n).i("aS<1>")).gB(0)
q.a.toString
n=x.p
v=A.a([B.bD4("Local \xb7 Pass & Play",q.gaBV(),new B.baz(d),w)],n)
if(q.Q||q.y>0){u=G.im.j(0.88)
t=A.x(20)
s=F.R(G.a4.j(0.7),1)
v.push(new A.a2(G.rl,A.y(p,A.k(q.Q?"Rolling\u2026":"This turn: "+q.y,p,p,p,p,p,D.P5,p,p),C.f,p,p,new A.u(u,p,s,t,p,p,C.m),p,p,p,p,A_.rs,p,p,p),p))}u=F.Q(new B.N1(A.a([q.Lz(0),q.Lz(1),q.Lz(2),q.Lz(3)],x.o),q.gayO(),p),1)
t=q.Q&&!q.kJ(q.ghD())
if(q.as&&!q.kJ(q.ghD()))s="Pick a token"
else if(q.kJ(q.ghD()))s="Opponent"
else{q.a.toString
s=D.nK[q.ghD()]+"'s Turn"}r=q.as&&!q.kJ(q.ghD())?"Move":"Roll Dice"
v.push(F.Q(F.P(A.a([u,new A.a2(D.a4O,new B.N3(o,new B.baA(q),t,r,s,p),p)],n),E.j,C.i,E.n),1))
return F.bDV(!1,A.cO(p,D.qn,new B.zI(A.cC(!0,F.P(v,E.j,C.i,E.n),C.N,!0),p),p),new B.baB(q),x.K)},
Lz(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.d
k===$&&A.b()
if(!k[d])return null
w=d===l.ghD()
k=D.e6[d]
if(l.kJ(d))v=S.MV("computer:"+d,"",d)
else{l.a.toString
v=D.nK[d]+" Player"}u=l.f
u===$&&A.b()
u=B.bJc(u[d])
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
n=n?"Pick \xb7 Win "+B.by6(m[d])+"/4":"Win "+B.by6(m[d])+"/4"
return B.bD5(k,!0,o,t,q,w,p,v,new B.bar(l),s,u,r,n)},
ayP(d){var w,v,u,t,s,r=this,q=null,p=D.e6[r.ghD()],o=r.d
o===$&&A.b()
w=A.dm(C.fa,q,q,new B.MZ(o,q),C.ab)
v=r.f
v===$&&A.b()
u=r.ghD()
t=r.at
s=r.as&&!r.ay
return new B.zH(d,new A.az(C.C,q,C.at,C.u,A.a([w,B.bD2(r.ch,t,r.gaNL(),D.e6,o,r.r,s,d,v,u)],x.p),q),p,q)}}
B.Yr.prototype={
aZ(){this.bb()
this.b9()
this.dj()},
l(){var w=this,v=w.aL$
if(v!=null)v.N(0,w.gdd())
w.aL$=null
w.aa()}}
B.and.prototype={}
B.Ys.prototype={
a4(){this.ag()
B.vL()
$.at.am$.push(new B.bp0(this))},
l(){B.t6()
this.auY()}}
B.N0.prototype={
V(){return new B.Uh()}}
B.Uh.prototype={
a4(){this.av1()
$.at.ba$.push(this)},
kT(d){if(d===C.cz)if($.jS>0)A.hn()},
l(){$.at.he(this)
this.av0()},
aMr(){var w,v=this.c
if(v==null)return
w=A.aT(v,!1)
if(w.t1())w.bg(0)},
u(a2){var w,v,u,t,s,r=this,q=null,p=A.bk(a2,C.bJ,x.A).w.a,o=p.a>=640,n=p.b,m=n<520,l=!o||m,k=o?820:420,j=r.gaMq(),i=A.bR(0,A.eZ(C.bn,A.bJ(q,new A.u(q,q,q,q,q,new F.ai(C.R,C.W,C.t,A.a([C.l.j(0.72),C.l.j(0.9)],x.O),q,q),C.m),C.Y),C.P,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,j,q,q,q,q,q,q)),h=o?20:14,g=m?6:12,f=A.x(22),e=F.R(I.bc.j(0.75),1.4),d=A.a([new A.U(1,C.r,I.bc.j(0.14),C.o,28),new A.U(0,C.r,C.l.j(0.55),D.Iw,30)],x.V),a0=A.x(21),a1=o?20:16
if(m)w=14
else w=o?20:16
v=o?20:16
if(m)u=12
else u=o?18:16
if(o){t=F.Q(new B.U5(l,q),4)
s=m?10:18
s=new A.zo(F.S(A.a([t,new A.G(s,q,q,q),F.Q(new B.VV(new B.baG(r),new B.baH(r),l,q),6)],x.p),E.a7,C.i,E.n,0),q)
t=s}else t=F.P(A.a([D.aLn,Q.bk,new B.VV(new B.baI(r),new B.baJ(r),!0,q)],x.p),E.j,C.i,E.v)
s=x.p
return A.cO(q,C.w,new A.az(C.C,q,C.K,C.u,A.a([i,A.cC(!0,A.aC(new A.a2(new A.A(h,g,h,g),A.aZ(!1,C.z,!0,q,new A.cP(new A.ad(0,k,0,n*0.92),A.bJ(A.dC(a0,new A.az(C.C,q,C.K,C.u,A.a([new A.a2(new A.A(a1,w,v,u),A.e6(t,q,C.P,q,G.eh,C.a3),q),A.aH(q,new B.ac7(j,q),q,q,q,8,8,q)],s),q),C.ak,q),new A.u(q,q,e,f,d,D.ast,C.m),C.Y),q),C.f,C.w,0,q,q,q,q,q,C.G),q),q,q),C.N,!0)],s),q),q)}}
B.ac7.prototype={
u(d){var w=null
return new A.G(44,44,A.t1(C.bn,A.bJ(D.V2,new A.u(D.y4.j(0.92),w,F.R(I.bc.j(0.85),1.2),w,w,w,C.F),C.Y),w,new B.b03(this),w,w,w),w)}}
B.U5.prototype={
u(d){var w=null,v=this.c,u=v?C.i:C.a1,t=v?12:16,s=K.Gb(C.jP,D.aId,new B.b95()),r=x.p,q=F.S(A.a([F.Q(A.y(w,w,C.f,I.bc.j(0.45),w,w,w,1,w,w,w,w,w,w),1),new A.a2(E.eY,F.f0(C.p,0.7853981633974483,A.y(w,w,C.f,w,w,new A.u(I.bc,w,w,A.x(1.5),w,w,C.m),w,7,w,w,w,w,w,7)),w),F.Q(A.y(w,w,C.f,I.bc.j(0.45),w,w,w,1,w,w,w,w,w,w),1)],r),E.j,C.i,E.n,0),p=A.k("FRIENDS MULTIPLAYER",w,w,w,w,w,A.B(w,w,G.ij.j(0.95),w,w,w,w,w,w,w,w,11,w,w,C.B,w,w,!0,w,1.4,w,w,w,w,w,w),w,w),o=v?12:16,n=A.ah(M.et,G.ij.j(0.9),w,w,20),m=C.h.j(0.78)
t=A.a([D.aKT,new A.G(w,t,w,w),s,D.aG3,E.aV,q,E.aG,p,new A.G(w,o,w,w),F.S(A.a([n,H.aT,F.Q(A.k("Play with friends in a private room. Host a table and share your invite code, or join using a code from a friend.",w,w,w,w,w,A.B(w,w,m,w,w,w,w,w,w,w,w,v?12.5:13.5,w,w,C.av,w,1.45,!0,w,w,w,w,w,w,w,w),w,w),1)],r),E.X,C.i,E.n,0)],r)
if(!v)C.b.H(t,A.a([Q.bk,D.aLp],r))
return F.P(t,E.X,u,E.v)}}
B.add.prototype={
u(d){var w,v=null,u=A.x(10),t=x.V
u=F.f0(C.p,0.7853981633974483,A.y(v,v,C.f,v,v,new A.u(v,v,F.R(G.eN.j(0.85),1.6),u,A.a([new A.U(0,C.r,G.eN.j(0.35),C.o,14),new A.U(0,C.r,G.ij.j(0.25),C.o,18)],t),v,C.m),v,42,v,v,v,v,v,42))
w=A.x(8)
t=A.a([new A.U(0,C.r,I.bc.j(0.45),C.o,10)],t)
return new A.G(58,58,new A.az(C.p,v,C.K,C.u,A.a([u,F.f0(C.p,-0.18,A.y(v,A.dm(v,v,v,new B.vI(5,v),C.ab),C.f,v,v,new A.u(v,v,v,w,t,D.abG,C.m),v,34,v,v,v,v,v,34))],x.p),v),v)}}
B.afV.prototype={
u(d){var w=null,v=A.aH(4,new B.aeF(G.eN,120,w),w,w,36,w,w,w),u=A.aH(10,new B.agi(100,w),w,w,12,w,w,w),t=A.aH(22,new B.Ch(D.dX,28,w),w,w,78,w,w,w),s=A.aH(36,new B.Ch(D.dM,25.76,w),w,w,104,w,w,w),r=A.aH(8,new B.Ch(D.em,24.64,w),w,w,92,w,w,w),q=A.aH(18,new B.Ch(D.eP,25.2,w),w,w,128,w,w,w),p=A.x(8),o=A.a([new A.U(0,C.r,C.l.j(0.4),D.apX,10),new A.U(0,C.r,G.eN.j(0.35),C.o,14)],x.V)
return new A.G(1/0,118,new A.az(C.C,w,C.K,C.f,A.a([v,u,t,s,r,q,A.aH(28,F.f0(C.p,0.22,A.y(w,A.dm(w,w,w,new B.vI(5,w),C.ab),C.f,w,w,new A.u(C.k_,w,w,p,o,w,C.m),w,44,w,w,w,w,w,44)),w,w,158,w,w,w)],x.p),w),w)}}
B.agi.prototype={
u(d){var w,v,u,t=null,s=this.c,r=A.x(14),q=A.a([D.dX.j(0.55),D.yb,D.dM.j(0.45)],x.O),p=F.R(C.h.j(0.18),1.2),o=A.a([new A.U(0,C.r,G.eN.j(0.3),C.o,18)],x.V),n=s*0.34,m=A.aH(t,new B.Cn(D.dX,n,t),t,t,8,t,8,t),l=s*0.28,k=A.aH(t,new B.Cn(D.em,l,t),t,t,t,8,8,t)
l=A.aH(8,new B.Cn(D.eP,l,t),t,t,8,t,t,t)
n=A.aH(8,new B.Cn(D.dM,n,t),t,t,t,8,t,t)
w=s*0.22
v=C.h.j(0.12)
u=A.x(4)
return A.y(t,new A.az(C.C,t,C.K,C.u,A.a([m,k,l,n,A.aC(A.y(t,t,C.f,t,t,new A.u(v,t,F.R(I.bc.j(0.5),1),u,t,t,C.m),t,w,t,t,t,t,t,w),t,t)],x.p),t),C.f,t,t,new A.u(t,t,p,r,o,new F.ai(E.T,E.Z,C.t,q,t,t),C.m),t,s,t,t,t,t,t,s)}}
B.Cn.prototype={
u(d){var w=null,v=this.d,u=this.c.j(0.85),t=A.x(6)
return A.y(w,w,C.f,w,w,new A.u(u,w,F.R(C.h.j(0.25),1),t,w,w,C.m),w,v,w,w,w,w,w,v)}}
B.Ch.prototype={
u(d){var w,v,u=null,t=this.d,s=A.x(t*0.35),r=this.c,q=A.a4(r,C.h,0.35)
q.toString
w=A.a4(r,C.l,0.25)
w.toString
w=A.a([q,r,w],x.O)
q=F.R(C.h.j(0.55),1.2)
r=A.a([new A.U(0,C.r,r.j(0.55),H.br,8)],x.V)
v=t*0.38
return A.y(u,new A.bF(A0.ps,u,u,A.y(u,u,C.f,u,u,new A.u(C.h.j(0.85),u,u,u,u,u,C.F),u,v,u,u,u,u,u,v),u),C.f,u,u,new A.u(u,u,q,s,r,new F.ai(C.R,C.W,C.t,w,u,u),C.m),u,t*1.15,u,u,u,u,u,t)}}
B.aeF.prototype={
u(d){var w=null,v=this.d,u=this.c
return A.y(w,w,C.f,w,w,new A.u(w,w,w,w,w,new K.cx(C.p,0.5,C.t,w,0,A.a([u.j(0.35),u.j(0)],x.O),w,w),C.F),w,v,w,w,w,w,w,v)}}
B.VV.prototype={
u(d){var w=null,v=this.e,u=v?0:8,t=B.bGG(D.XE,v,G.eN,M.et,this.c,!0,"Create a private table and share invite code with your friends.","HOST A ROOM"),s=v?10:14,r=B.bGG(I.bc,v,I.ie,D.a7e,this.d,!1,"Enter invite code from your host to join the game.","JOIN A ROOM")
v=v?10:14
return F.P(A.a([new A.G(w,u,w,w),t,new A.G(w,s,w,w),r,new A.G(w,v,w,w),D.aMI],x.p),E.a7,C.i,E.v)}}
B.agx.prototype={
u(a3){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=A.x(16),j=A.x(16),i=x.O,h=A.a([D.y4.j(0.95),D.a19],i),g=m.c,f=F.R(g.j(0.9),1.5),e=m.d,d=x.V,a0=A.a([new A.U(0.5,C.r,e.j(0.32),C.o,18)],d),a1=x.p,a2=A.a([A.bR(0,A.dC(A.x(15),A.dm(l,l,l,new B.abV(g.j(0.06),l),C.ab),C.ak,l))],a1)
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
r=A.y(l,A.ah(m.e,g,l,l,24),C.f,l,l,new A.u(l,l,o,q,n,new F.ai(E.T,E.Z,C.t,p,l,l),C.m),l,w,l,l,l,l,l,r)
i=F.Q(F.P(A.a([A.k(m.f,l,l,l,l,l,D.aDQ,l,l),H.aw,A.y(l,l,C.f,l,l,new A.u(l,l,l,l,l,new F.ai(E.V,C.a_,C.t,A.a([g.j(0.85),g.j(0)],i),l,l),C.m),l,1.5,l,l,l,l,l,36),H.aw,A.k(m.r,l,l,l,l,l,A.B(l,l,C.h.j(0.55),l,l,l,l,l,l,l,l,12,l,l,C.av,l,1.3,!0,l,l,l,l,l,l,l,l),l,l)],a1),E.X,C.i,E.n),1)
g=F.R(g.j(0.9),1.4)
d=A.a([new A.U(0,C.r,e.j(0.35),C.o,10)],d)
a2.push(new A.a2(new A.A(v,u,t,s),F.S(A.a([r,G.Oe,i,E.a2,A.y(l,A.ah(H.iR,C.h.j(0.95),l,l,22),C.f,l,l,new A.u(l,l,g,l,d,l,C.F),l,36,l,l,l,l,l,36)],a1),E.j,C.i,E.n,0),l))
return A.aZ(!1,C.z,!0,l,A.b8(!1,k,!0,K.f_(new A.az(C.C,l,C.K,C.f,a2,l),l,new A.u(l,l,f,j,a0,new F.ai(E.T,E.Z,C.t,h,l,l),C.m),l,l,l),l,!0,l,l,l,l,l,l,l,l,m.w,l,l,l,l,l,l,l),C.f,C.w,0,l,l,l,l,l,C.G)}}
B.aic.prototype={
u(d){var w=null,v=this.c,u=A.a4(v,C.h,0.25)
u.toString
u=A.a([u,v],x.O)
return A.y(w,D.auQ,C.f,w,w,new A.u(w,w,w,D.Ro,A.a([new A.U(0,C.r,v.j(0.4),C.o,8)],x.V),new F.ai(E.V,C.a_,C.t,u,w,w),C.m),w,w,w,w,D.a4h,w,w,w)}}
B.abV.prototype={
aH(d,e){var w,v,u,t,s,r,q
$.af()
w=A.al()
w.r=this.b.gq(0)
w.c=1
for(v=e.a,u=e.b,t=d.a,s=0;s<v;s+=18){r=w.b5()
t.drawLine.apply(t,[s,0,s,u,r])
r.delete()}for(q=0;q<u;q+=18){r=w.b5()
t.drawLine.apply(t,[0,q,v,q,r])
r.delete()}},
cj(d){return!d.b.n(0,this.b)}}
B.ame.prototype={
u(d){var w=null,v=C.l.j(0.28),u=A.x(14),t=F.R(C.h.j(0.08),1)
return A.y(w,F.S(A.a([F.Q(new B.Xf(M.et,G.ij,"2 OR 4 PLAYERS","Private Lobby",w),1),A.y(w,w,C.f,C.h.j(0.12),w,w,w,32,w,w,w,w,w,1),D.a5V],x.p),E.j,C.i,E.n,0),C.f,w,w,new A.u(v,w,t,u,w,w,C.m),w,w,w,w,G.dB,w,w,w)}}
B.Xf.prototype={
u(d){var w=this,v=null,u=x.p
return F.S(A.a([A.ah(w.c,w.d,v,v,16),E.a2,new F.dP(1,E.b3,F.P(A.a([A.k(w.e,v,1,C.H,v,v,D.aCT,v,v),A.k(w.f,v,1,C.H,v,v,A.B(v,v,C.h.j(0.5),v,v,v,v,v,v,v,v,10,v,v,C.av,v,v,!0,v,v,v,v,v,v,v,v),v,v)],u),E.X,C.i,E.n),v)],u),E.j,C.a1,E.n,0)}}
B.ane.prototype={}
B.Yt.prototype={
a4(){this.ag()
B.vL()
$.at.am$.push(new B.bp1(this))},
l(){B.t6()
this.aa()}}
B.vK.prototype={
V(){var w=$.b5()
return new B.Ui(new F.ej(E.c0,w),new F.ej(new A.dq("100",C.cL,C.bs),w),new F.ej(E.c0,w),new B.N2())}}
B.Ui.prototype={
a4(){this.av3()
$.at.ba$.push(this)
this.aMC()},
kT(d){if(d===C.cz)if($.jS>0)A.hn()},
l(){var w,v,u,t,s,r=this,q=r.CW
if(q!=null)q.U(0)
q=r.ch
if(q!=null)q.U(0)
w=N.cw("ludo_online")
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
r.av2()},
gnX(){var w=$.aA,v=K.aoK(w==null?"":w)
if(v!=null&&v.length!==0)return v
w=$.bc
return w==null?null:w.a},
gv7(){var w=L.dj(this.z).b
return C.c.O(w==null?"":w).toUpperCase()},
gjl(){var w=C.c.O(this.f.a.a)
if(!(w.length!==0)){w=L.dj(this.z).a
if(w==null)w=""}return w},
gnW(){return L.dj(this.z).d>0?L.dj(this.z).d:this.e},
z5(d){var w,v,u,t,s=this.gnX()
if(s==null)s=""
w=$.aA
if(w==null)w=""
v=d==null?this.gjl():d
u=A.F(x.N,x.z)
u.k(0,"userId",s)
u.k(0,"user_id",s)
u.k(0,"token",w)
t=v.length!==0
if(t)u.k(0,"tableId",v)
if(t)u.k(0,"table_id",v)
return u},
aMD(){return this.z5(null)},
aMC(){var w,v,u,t,s=this,r="ludo_online"
N.Cw(r)
w=N.cw(r)
v=new B.bbr(s)
u=new B.bbw(s)
t=new B.bby(s)
s.cx=v
s.cy=u
s.db=t
if(s.a.c===D.iY)w.cG(0,"getPrivateTable",v)
w.cG(0,"roomTrigger",u)
w.cG(0,"startGame",t)},
KB(){if(this.gjl().length===0)return
this.E(new B.bbI(this))},
rq(d){return this.aEj(d)},
aEj(d){var w=0,v=A.p(x.y),u,t=2,s=[],r,q,p,o,n
var $async$rq=A.q(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:o=N.cw("ludo_online")
if(o.y){d.$0()
u=!0
w=1
break}r=new A.bh(new A.aP($.aF,x.d4),x.aY)
q=A.cu()
q.b=new B.baY(o,q,r)
J.apd(o,"connect",q.aM())
if(o.y){o.d0("connect",q.aM())
d.$0()
u=!0
w=1
break}o.me()
t=4
w=7
return A.e(r.a.j9(0,R.eT),$async$rq)
case 7:t=2
w=6
break
case 4:t=3
n=s.pop()
if(A.a9(n) instanceof A.qH){o.d0("connect",q.aM())
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
return A.o($async$rq,v)},
z1(d,e){return this.aF0(d,e)},
V_(d){return this.z1(d,!1)},
aF0(d,e){var w=0,v=A.p(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i,h,g
var $async$z1=A.q(function(f,a0){if(f===1){s.push(a0)
w=t}for(;;)switch(w){case 0:h=$.aA
if(h==null||h.length===0||d.length===0){w=1
break}m=!e
if(m&&q.ax){w=1
break}l=new A.c5(Date.now(),0,!1)
if(m){m=q.ay
m=m!=null&&l.cA(m).a<15e5}else m=!1
if(m){w=1
break}q.ax=!0
q.ay=l
t=4
w=7
return A.e(B.MU(d,h),$async$z1)
case 7:p=a0
if(q.c==null||p==null){r=[1]
w=5
break}k=q.z4(p)
o=k==null?p:k
n=L.dj(o)
if(n.a!=null&&n.a.length!==0){q.E(new B.bb4(q,o))
m=q.f
if(C.c.O(m.a.a).length===0){j=n.a
j.toString
m.sda(0,j)}q.KB()
if(q.DG(o)||q.DG(p)){q.rr()
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
return A.o($async$z1,v)},
V0(d){var w=this,v=w.CW
if(v!=null)v.U(0)
if(d.length===0)return
w.V_(d)
w.CW=A.fz(C.bg,new B.bbE(w,d))},
Kz(){var w,v=this
if(!L.dj(v.z).gl0()){v.as=!1
return}w=v.gjl()
if(w.length===0||v.gnX()==null||$.aA==null||v.as)return
v.as=!0
v.E(new B.bbn(v))
v.zG(w)},
a4v(d){var w,v=d.toLowerCase()
if(C.c.t(v,"already"))w=C.c.t(v,"start")||C.c.t(v,"playing")||C.c.t(v,"begun")
else w=!1
return w},
zG(d){return this.aW_(d)},
aW_(d){var w=0,v=A.p(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f
var $async$zG=A.q(function(e,a0){if(e===1){s.push(a0)
w=t}for(;;)switch(w){case 0:h=r.gnX()
g=$.aA
if(h==null||g==null||g.length===0){w=1
break}w=3
return A.e(r.rq(new B.bbF(r,d)),$async$zG)
case 3:if(r.c==null||r.at){w=1
break}t=5
w=8
return A.e(B.aCp(d,g,h),$async$zG)
case 8:q=a0
if(r.c==null||r.at){w=1
break}p=J.C(q,"code")
o=p!=null&&!J.f(p,200)&&!J.f(p,"200")
n=J.f(J.C(q,"success"),!1)||o
if(n){k=J.C(q,"message")
j=k==null?null:J.J(k)
m=j==null?"":j
if(r.a4v(m)){r.rr()
w=1
break}if(J.au(m)!==0){r.as=!1
r.E(new B.bbG(r,m))}w=1
break}r.rr()
t=2
w=7
break
case 5:t=4
f=s.pop()
k=A.a9(f)
if(k instanceof B.lC){l=k
if(r.c==null||r.at){w=1
break}if(r.a4v(l.a)){r.rr()
w=1
break}r.as=!1
r.E(new B.bbH(r,l))}else r.as=!1
w=7
break
case 4:w=2
break
case 7:case 1:return A.n(u,v)
case 2:return A.m(s.at(-1),v)}})
return A.o($async$zG,v)},
rr(){var w,v=this,u="ludo_online",t=v.gjl()
if(t.length===0||v.c==null||v.at)return
v.at=!0
w=v.CW
if(w!=null)w.U(0)
w=v.ch
if(w!=null)w.U(0)
w=v.c
w.toString
O.ZD(w,new B.ER(t,v.d,v.gnW(),u,u,null),x.X)},
Kx(){var w=0,v=A.p(x.H),u,t=this,s,r
var $async$Kx=A.q(function(d,e){if(d===1)return A.m(e,v)
for(;;)switch(w){case 0:t.E(new B.baS(t))
if(t.gnX()!=null){s=$.aA
s=s==null||s.length===0}else s=!0
if(s){t.E(new B.baT(t))
w=1
break}t.E(new B.baU(t))
w=3
return A.e(t.rq(new B.baV(t)),$async$Kx)
case 3:r=e
if(t.c==null){w=1
break}if(!r){t.E(new B.baW(t))
w=1
break}A.cs(R.ra,new B.baX(t),x.H)
case 1:return A.n(u,v)}})
return A.o($async$Kx,v)},
z3(){var w=0,v=A.p(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f
var $async$z3=A.q(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:r.E(new B.bbd(r))
q=C.c.O(r.f.a.a)
if(J.au(q)===0){r.E(new B.bbe(r))
w=1
break}if(r.gnX()==null||$.aA==null){r.E(new B.bbf(r))
w=1
break}t=4
j={}
i=r.gnX()
i.toString
h=$.aA
h.toString
w=7
return A.e(B.a47(q,h,i),$async$z3)
case 7:p=e
if(r.c==null){w=1
break}j.a=null
o=J.C(p,"table_data")
if(x.j.b(o)&&J.cE(o))j.a=A.aa(["code",200,"table_data",o],x.N,x.z)
else if(x.f.b(J.C(p,"table")))j.a=A.aa(["code",200,"table_data",[J.C(p,"table")]],x.N,x.z)
r.E(new B.bbg(j,r))
n=N.cw("ludo_online")
w=8
return A.e(r.rq(new B.bbh(r,n,q)),$async$z3)
case 8:m=e
if(r.c==null){w=1
break}if(!m){r.E(new B.bbi(r))
w=1
break}w=9
return A.e(r.z1(q,!0),$async$z3)
case 9:r.V0(q)
r.E(new B.bbj(r))
r.KB()
r.Kz()
t=2
w=6
break
case 4:t=3
f=s.pop()
j=A.a9(f)
if(j instanceof B.lC){l=j
if(r.c!=null)r.E(new B.bbk(r,l))}else{k=j
if(r.c!=null)r.E(new B.bbl(r,k))}w=6
break
case 3:w=2
break
case 6:case 1:return A.n(u,v)
case 2:return A.m(s.at(-1),v)}})
return A.o($async$z3,v)},
z4(d){var w,v,u,t,s=J.M(d),r=s.h(d,"table_data"),q=x.j
if(q.b(r)&&J.cE(r))return A.aa(["code",200,"table_data",r],x.N,x.z)
w=s.h(d,"table")
v=x.f
if(v.b(w)){s=x.N
q=x.z
return A.aa(["code",200,"table_data",A.a([A.an(w,s,q)],x.Y)],s,q)}u=s.h(d,"data")
if(v.b(u)){t=this.z4(A.an(u,x.N,x.z))
if(t!=null)return t}if(s.h(d,"table_id")!=null||s.h(d,"_id")!=null||q.b(s.h(d,"playerIds"))||q.b(s.h(d,"player_ids")))return A.aa(["code",200,"table_data",A.a([d],x.Y)],x.N,x.z)
return null},
DG(d){var w,v,u,t,s,r,q,p=null,o="game_status"
if(d==null)return!1
w=J.M(d)
v=w.h(d,"table_data")
if(x.j.b(v)){u=J.M(v)
u=u.gbc(v)&&x.f.b(u.gW(v))}else u=!1
t=u?A.an(x.f.a(J.fo(v)),x.N,x.z):p
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
KC(d){var w,v,u=this.z4(d)
u=L.dj(u==null?d:u).a
if(u!=null&&u.length!==0)return u
u=J.M(d)
w=u.h(d,"tableId")
u=w==null?u.h(d,"table_id"):w
v=u==null?null:C.c.O(J.J(u))
if(v!=null&&v.length!==0)return v
return null},
aab(d){var w,v,u,t=C.c.O(d)
if(t.length===0)return!1
w=this.gnX()
v=C.c.O(w==null?"":w)
if(v.length!==0&&v===t)return!0
w=$.bc
w=w==null?null:w.a
u=C.c.O(w==null?"":w)
return u.length!==0&&u===t},
aMs(d){var w,v=d.toLowerCase()
if(C.c.t(v,"already"))w=C.c.t(v,"seat")||C.c.t(v,"join")||C.c.t(v,"in")
else w=!1
return w},
aag(d){return C.b.e2(d.c,new B.bbJ(this))||d.e>=2},
zo(d){return this.aRO(d)},
aRO(d){var w=0,v=A.p(x.h),u,t=this,s,r,q
var $async$zo=A.q(function(e,f){if(e===1)return A.m(f,v)
for(;;)switch(w){case 0:q=$.aA
if(q==null||q.length===0||d.length===0){u=null
w=1
break}w=3
return A.e(B.MU(d,q),$async$zo)
case 3:s=f
if(s==null){u=null
w=1
break}r=t.z4(s)
u=r==null?s:r
w=1
break
case 1:return A.n(u,v)}})
return A.o($async$zo,v)},
DF(d){return this.aTX(d)},
aTX(d){var w=0,v=A.p(x.h),u,t=2,s=[],r=this,q,p,o,n,m
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
if(r.aMs(q.a)){u=null
w=1
break}throw m}else throw m
w=6
break
case 3:w=2
break
case 6:case 1:return A.n(u,v)
case 2:return A.m(s.at(-1),v)}})
return A.o($async$DF,v)},
z2(d){return this.aFe(d)},
aFe(d){var w=0,v=A.p(x.w),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f
var $async$z2=A.q(function(e,a0){if(e===1){s.push(a0)
w=t}for(;;)switch(w){case 0:g=$.aA
if(g==null||g.length===0){u=null
w=1
break}q=C.c.O(d).toUpperCase()
k=0
case 3:if(!(k<2)){w=5
break}p=D.akr[k]
t=7
w=10
return A.e(O.z_(p,50,r.e,g),$async$z2)
case 10:o=a0
j=J.b_(o)
case 11:if(!j.A()){w=12
break}n=j.gP(j)
if(n.a.length===0){w=11
break}w=13
return A.e(r.zo(n.a),$async$z2)
case 13:m=a0
if(m==null){w=11
break}l=L.dj(m)
i=l.b
if(C.c.O(i==null?"":i).toUpperCase()!==q){w=11
break}if(r.aag(l)){j=l.a
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
return A.o($async$z2,v)},
pA(d,e){return this.aEy(d,e)},
aEy(d,e){var w=0,v=A.p(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$pA=A.q(function(f,g){if(f===1)return A.m(g,v)
for(;;)switch(w){case 0:l={}
k=l.a=t.z4(d)
j=t.KC(d)
if(j==null){s=C.c.O(e)
j=s.length!==0?s:null}l.b=j
w=j!=null&&j.length!==0?3:5
break
case 3:w=6
return A.e(t.DF(j),$async$pA)
case 6:r=g
if(r!=null){q=t.z4(r)
k=q==null?k:q
l.a=k
p=t.KC(r)
j=p==null?j:p
l.b=j
s=k}else s=k
w=7
return A.e(t.zo(j),$async$pA)
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
case 4:if(n==null||n.length===0){t.E(new B.baZ(t))
w=1
break}if(s!=null)t.E(new B.bb_(l,t))
t.f.sda(0,l.b)
t.V0(l.b)
w=8
return A.e(t.rq(new B.bb0(l,t)),$async$pA)
case 8:m=g
if(t.c==null){w=1
break}if(!m){t.E(new B.bb1(t))
w=1
break}w=9
return A.e(t.z1(l.b,!0),$async$pA)
case 9:if(t.c==null){w=1
break}l=l.a
if(t.DG(l==null?t.z:l)||t.DG(d)){t.E(new B.bb2(t))
t.rr()
w=1
break}t.E(new B.bb3(t))
t.KB()
t.Kz()
case 1:return A.n(u,v)}})
return A.o($async$pA,v)},
lY(){var w=0,v=A.p(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$lY=A.q(function(b0,b1){if(b0===1){s.push(b1)
w=t}for(;;)switch(w){case 0:a6=$.at.R$.d.c
if(a6!=null)a6.iC()
r.E(new B.bb7(r))
q=C.c.O(r.w.a.a).toUpperCase()
if(J.au(q)===0){r.E(new B.bb8(r))
w=1
break}if(r.gnX()==null||$.aA==null){r.E(new B.bb9(r))
w=1
break}t=4
a0={}
w=7
return A.e(r.z2(q),$async$lY)
case 7:p=b1
if(r.c==null){w=1
break}w=p!=null&&p.length!==0?8:9
break
case 8:w=10
return A.e(r.pA(C.cm,p),$async$lY)
case 10:w=1
break
case 9:o=null
a0.a=null
a1=0
case 11:if(!(a1<3)){w=13
break}n=D.aks[a1]
m=null
t=15
a6=r.gnX()
a6.toString
a2=$.aA
a2.toString
w=18
return A.e(B.bv8(n,q,a2,a6),$async$lY)
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
if(A.fu(a4,"already",0)){a6=!0
if(!A.fu(a4,"seat",0))if(!A.fu(a4,"join",0))a6=A.fu(a4,"in",0)}else a6=!1
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
return A.e(r.DF(k),$async$lY)
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
if(A.fu(a4,"already",0)){a6=!0
if(!A.fu(a4,"seat",0))if(!A.fu(a4,"join",0))a6=A.fu(a4,"in",0)}else a6=!1
if(!a6){w=12
break}}else throw a8
w=22
break
case 19:w=4
break
case 22:if(j!=null){o=j
a5=r.KC(j)
k=a5==null?k:a5}w=24
return A.e(r.zo(k),$async$lY)
case 24:h=b1
if(r.c==null){w=1
break}a6=h
g=L.dj(a6==null?o:a6)
w=r.aag(g)?25:26
break
case 25:w=27
return A.e(r.pA(o,k),$async$lY)
case 27:w=1
break
case 26:case 12:++a1
w=11
break
case 13:w=28
return A.e(r.z2(q),$async$lY)
case 28:f=b1
if(r.c==null){w=1
break}w=f!=null&&f.length!==0?29:30
break
case 29:w=31
return A.e(r.pA(C.cm,f),$async$lY)
case 31:w=1
break
case 30:r.E(new B.bba(a0,r))
t=2
w=6
break
case 4:t=3
a9=s.pop()
a6=A.a9(a9)
if(a6 instanceof B.lC){e=a6
if(r.c!=null)r.E(new B.bbb(r,e))}else{d=a6
if(r.c!=null)r.E(new B.bbc(r,d))}w=6
break
case 3:w=2
break
case 6:case 1:return A.n(u,v)
case 2:return A.m(s.at(-1),v)}})
return A.o($async$lY,v)},
KA(){var w=0,v=A.p(x.H),u,t=this,s
var $async$KA=A.q(function(d,e){if(d===1)return A.m(e,v)
for(;;)switch(w){case 0:t.E(new B.bbA(t))
s=t.gjl()
if(s.length===0){t.E(new B.bbB(t))
w=1
break}if(!L.dj(t.z).gl0()){t.E(new B.bbC(t))
w=1
break}t.E(new B.bbD(t))
t.as=!0
w=3
return A.e(t.zG(s),$async$KA)
case 3:case 1:return A.n(u,v)}})
return A.o($async$KA,v)},
u(d){var w,v,u=this,t=null,s=A.a([A.cC(!0,A.aC(new A.cP(G.wO,u.a.c===D.iY?u.aMv(d):u.aMw(d),t),t,t),C.N,!0)],x.p)
if(u.Q){w=C.l.j(0.55)
v=u.y
s.push(A.bR(0,new A.dl(w,A.aC(B.bD1(v==null?"Please wait\u2026":v,180),t,t),t)))}return A.cO(t,D.xK,new B.zI(new A.az(C.C,t,C.K,C.u,s,t),t),t)},
aMv(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=F.eG(d),k=L.dj(n.z),j=L.dj(n.z).gl0()&&!n.Q,i=C.k.S(l.ge4(),14,20),h=n.aa8(d,"CREATE ROOM")
if(n.gjl().length===0)w=0
else w=n.gv7().length===0?1:2
v=x.p
w=A.a([h,E.aV,n.aa7(w,I.Cs)],v)
h=n.x
if(h!=null)C.b.H(w,A.a([H.aF,n.Kw(h,!0)],v))
h=n.y
if(h!=null)C.b.H(w,A.a([H.aF,n.Kw(h,!1)],v))
w.push(H.bY)
h=F.S(A.a([F.Q(n.aMB(),1),H.cX,F.Q(n.aMu(),1)],v),E.X,C.i,E.n,0)
u=n.Q
t=u?"Creating\u2026":"Create Room (Host)"
k=A.a([h,H.bY,n.aMz(I.Bz,t,u?m:n.gaMx()),M.jv,n.aad(k.e)],v)
if(n.gv7().length!==0)C.b.H(k,A.a([H.bY,n.aaa()],v))
k.push(H.bY)
k.push(I.Ps)
k.push(H.aw)
k.push(n.aah())
k.push(H.aF)
h=F.Q(n.aae(H.es,"Copy",n.gjl().length===0?m:new B.baM(n,d)),1)
u=F.Q(n.Ky(!0,M.f0,"JOIN",n.Q?m:n.gaac()),1)
t=j?n.gaME():m
s=A.x(12)
r=A.x(12)
q=j?G.yt:I.zj
p=F.R(j?I.xx:C.h.j(0.08),1)
o=A.ah(U.kS,j?C.h:C.b2,m,m,18)
k.push(F.S(A.a([h,E.a2,u,E.a2,F.Q(A.aZ(!1,C.z,!0,m,A.b8(!1,s,!0,K.f_(F.S(A.a([o,G.aO,new F.dP(1,E.b3,A.k("Start Match",m,1,C.H,m,m,A.B(m,m,j?C.h:C.b2,m,m,m,m,m,m,m,m,11,m,m,C.x,m,m,!0,m,0.15,m,m,m,m,m,m),m,m),m)],v),E.j,C.a1,E.n,0),m,new A.u(q,m,p,r,m,m,C.m),46,m,m),m,!0,m,m,m,m,m,m,m,m,t,m,m,m,m,m,m,m),C.f,C.w,0,m,m,m,m,m,C.G),1)],v),E.j,C.i,E.n,0))
w.push(n.aa9(F.P(k,E.a7,C.i,E.n)))
w.push(Q.bk)
w.push(n.aai())
w.push(H.aF)
return A.e6(F.P(w,E.a7,C.i,E.n),m,C.P,new A.A(i,10,i,10),m,C.a3)},
aMw(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=C.k.S(F.eG(d).ge4(),14,20),h=k.aa8(d,"JOIN ROOM")
if(k.gjl().length===0)w=0
else w=L.dj(k.z).gl0()?2:1
v=x.p
w=A.a([h,E.aV,k.aa7(w,I.CB)],v)
h=k.x
if(h!=null)C.b.H(w,A.a([H.aF,k.Kw(h,!0)],v))
h=k.y
if(h!=null)C.b.H(w,A.a([H.aF,k.Kw(h,!1)],v))
w.push(H.bY)
h=F.Q(k.aMG(k.w,"Enter code (e.g. A7Q)",new B.baN(k),new B.baO(k),H.lI,C.ON),1)
h=A.a([I.vE,H.aw,F.S(A.a([h,E.a2,new A.G(110,j,k.Ky(!0,M.f0,"JOIN",k.Q?j:k.gaMA()),j)],v),E.j,C.i,E.n,0)],v)
if(k.gv7().length!==0)C.b.H(h,A.a([H.bY,k.aaa()],v))
h.push(M.jv)
h.push(k.aad(L.dj(k.z).e))
h.push(H.bY)
u=A.x(12)
t=C.h.j(0.08)
s=A.x(12)
r=G.a4.j(0.25)
q=C.h.j(0.03)
p=C.h.j(0.03)
o=G.a4.j(0.7)
n=A.k("Use only if you have the host's table ID",j,j,j,j,j,A.B(j,j,C.h.j(0.45),j,j,j,j,j,j,j,j,11,j,j,j,j,j,!0,j,j,j,j,j,j,j,j),j,j)
m=k.aah()
l=F.Q(k.aae(H.es,"Copy",k.gjl().length===0?j:new B.baP(k,d)),1)
h.push(S.bBz(q,A.a([H.aw,m,E.aV,F.S(A.a([l,E.a2,F.Q(k.Ky(!0,M.f0,"JOIN",k.Q?j:k.gaac()),1)],v),E.j,C.i,E.n,0)],v),j,p,o,new A.cB(u,new A.aL(t,1,C.E,-1)),G.a4,new A.cB(s,new A.aL(r,1,C.E,-1)),n,C.N,D.aGB))
w.push(k.aa9(F.P(h,E.a7,C.i,E.n)))
w.push(Q.bk)
w.push(k.aai())
w.push(E.aG)
return A.e6(F.P(w,E.a7,C.i,E.n),j,C.P,new A.A(i,10,i,10),j,C.a3)},
aa8(d,e){var w,v,u,t,s=this,r=null,q=x.p,p=A.a([s.aMt(d),H.bZ],q)
if(s.gjl().length!==0)w=L.dj(s.z).gl0()||s.DG(s.z)
else w=!1
if(w)p.push(P.B9(A.ah(D.a7X,G.a4,r,r,18),A.k("Enter Match",r,r,r,r,r,A.B(r,r,G.a4.j(0.95),r,r,r,r,r,r,r,r,13,r,r,C.B,r,r,!0,r,r,r,r,r,r,r,r),r,r),s.gaMy(),r))
p=F.S(p,E.j,C.i,E.n,0)
w=A.a([G.e1.j(0.35),G.a4.j(0.18)],x.O)
v=A.x(16)
u=F.R(G.a4.j(0.45),1)
w=A.y(r,A.ah(G.tn,G.e1,r,r,28),C.f,r,r,new A.u(r,r,u,v,r,new F.ai(E.V,C.a_,C.t,w,r,r),C.m),r,52,r,r,r,r,r,52)
v=K.Gb(C.jP,D.aGS,new B.baQ())
u=A.k(e,r,r,r,r,r,D.aDm,C.M,r)
t=s.a.c===D.iY?"Set stakes and invite friends":"Enter invite code from your host"
return F.P(A.a([p,E.aG,w,E.aV,v,Q.b_,u,Q.b_,A.k(t,r,r,r,r,r,A.B(r,r,C.h.j(0.5),r,r,r,r,r,r,r,r,13,r,r,C.av,r,r,!0,r,r,r,r,r,r,r,r),C.M,r)],q),E.j,C.i,E.n)},
aMt(d){var w=null,v=A.x(12),u=A.x(12),t=F.R(G.a4.j(0.75),1.5),s=C.l.j(0.35)
return A.aZ(!1,C.z,!0,w,A.b8(!1,v,!0,A.y(w,A.ah(H.bL,G.a4,w,w,18),C.f,w,w,new A.u(s,w,t,u,w,w,C.m),w,44,w,w,w,w,w,44),w,!0,w,w,w,w,w,w,w,w,new B.baK(d),w,w,w,w,w,w,w),C.f,C.w,0,w,w,w,w,w,C.G)},
aa7(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=x.p,j=A.a([],k)
for(w=x.O,v=x.V,u=0;u<3;++u){t=A.a([],k)
if(u>0){s=u<=d?A.a([G.a4.j(0.15),G.a4.j(0.55)],w):A.a([C.h.j(0.06),C.h.j(0.06)],w)
r=new A.b9(1,1)
t.push(new F.ed(1,E.cl,A.y(l,l,C.f,l,l,new A.u(l,l,l,new A.cN(r,r,r,r),l,new F.ai(E.V,C.a_,C.t,s,l,l),C.m),l,2,l,I.A4,l,l,l,l),l))}s=e[u]
r=I.Ce[u]
q=u<=d
p=u===d
if(q)o=G.a4.j(p?0.28:0.14)
else o=C.h.j(0.05)
if(p)n=G.e1
else n=q?G.a4.j(0.55):C.h.j(0.15)
m=new A.aL(n,p?2:1.5,C.E,-1)
n=p?A.a([new A.U(0,C.r,G.a4.j(0.25),C.o,10)],v):l
r=A.y(l,A.ah(r,q?G.e1:C.b2,l,l,17),C.f,l,l,new A.u(o,l,new A.cA(m,m,m,m),l,n,l,C.F),l,38,l,l,l,l,l,38)
if(p)q=C.h
else q=q?C.h.j(0.75):C.b2
p=p?C.B:C.Q
t.push(F.P(A.a([r,H.aw,new A.G(76,l,A.k(s,l,2,C.H,l,l,new A.z(!0,q,l,l,l,l,10,p,l,l,l,l,1.15,l,l,l,l,l,l,l,l,l,l,l,l,l),C.M,l),l)],k),E.j,C.i,E.v))
C.b.H(j,t)}return new A.a2(E.ce,F.S(j,E.j,C.i,E.n,0),l)},
aa9(d){var w=null,v=A.x(22)
return A.y(w,d,C.f,w,w,new A.u(w,w,F.R(I.ie.j(0.5),1.5),v,A.a([new A.U(0,C.r,G.a4.j(0.1),C.o,28),new A.U(0,C.r,C.l.j(0.5),G.o2,24)],x.V),D.abn,C.m),w,w,w,w,Aj.Af,w,w,w)},
aMB(){var w,v=null,u=A.x(12),t=F.R(C.h.j(0.12),1),s=this.e,r=A.ah(I.Bm,G.a4.j(0.9),v,v,v),q=x.D
q=A.ag(new A.as(D.acI,new B.bbp(),q),q.i("aX.E"))
w=this.Q?v:new B.bbq(this)
return F.P(A.a([I.Pu,H.aw,A.y(v,new P.yC(P.bup(D.a_S,v,r,!0,q,w,I.vz,s,x.S),v),C.f,v,v,new A.u(D.ml,v,t,u,v,v,C.m),v,v,v,v,E.hf,v,v,v)],x.p),E.X,C.i,E.n)},
aMu(){return F.P(A.a([I.Pr,H.aw,this.aMF(this.r,"100",E.jx,new B.baL(this))],x.p),E.X,C.i,E.n)},
aaf(d,e,f,g,h,i,j){var w=null,v=A.B(w,w,C.h.j(0.35),w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,w,w,w,w,w,w,w)
return F.nF(w,C.aa,!1,w,!0,C.u,w,F.pb(),d,w,w,w,w,w,2,F.ot(w,w,w,G.eo,w,w,w,w,!0,new V.ei(4,A.x(12),new A.aL(C.h.j(0.12),1,C.E,-1)),w,w,w,w,w,D.ml,!0,w,w,w,w,new V.ei(4,A.x(12),new A.aL(G.a4.j(0.65),1,C.E,-1)),w,w,w,w,w,w,w,w,v,e,w,w,w,w,w,w,w,w,w,!0,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w),C.P,!0,w,!0,w,!1,w,E.cw,w,w,w,w,f,w,w,w,1,w,w,!1,"\u2022",w,g,w,h,w,!1,w,w,!1,w,!0,w,E.dn,w,w,w,w,w,w,w,w,w,w,w,I.vz,!0,C.b1,w,i,w,j,w,w)},
aMG(d,e,f,g,h,i){return this.aaf(d,e,null,f,g,h,i)},
aMF(d,e,f,g){return this.aaf(d,e,f,g,null,E.dt,null)},
aah(){var w=null,v=A.B(w,w,C.h.j(0.35),w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,w,w,w,w,w,w,w)
return F.nF(w,C.aa,!1,w,!0,C.u,w,F.pb(),this.f,w,w,w,w,w,2,F.ot(w,w,w,G.eo,w,w,w,w,!0,new V.ei(4,A.x(12),new A.aL(C.h.j(0.12),1,C.E,-1)),w,w,w,w,w,D.ml,!0,w,w,w,w,new V.ei(4,A.x(12),new A.aL(G.a4.j(0.65),1,C.E,-1)),w,w,w,w,w,w,w,w,v,"Enter Table ID",w,w,w,w,w,w,w,w,w,!0,!0,w,w,w,w,w,w,w,w,A.ah(I.Bp,G.a4.j(0.75),w,w,w),w,w,w,w,w),C.P,!0,w,!0,w,!1,w,E.cw,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,new B.bbK(this),w,w,w,!1,w,w,!1,w,!0,w,E.dn,w,w,w,w,w,w,w,w,w,w,w,I.vw,!0,C.b1,w,E.dt,w,w,w,w)},
Ky(d,e,f,g){var w,v,u,t=null,s=g!=null,r=s?new B.bb5(g):t,q=A.x(d?12:14),p=d?46:52,o=A.x(d?12:14),n=x.O
n=s?new F.ai(E.V,C.a_,C.t,A.a([G.e1.j(0.95),C.q,I.yA],n),t,t):new F.ai(E.V,C.a_,C.t,A.a([C.h.j(0.08),C.h.j(0.05)],n),t,t)
w=s?A.a([new A.U(0,C.r,G.a4.j(0.35),E.cI,12)],x.V):t
v=d?16:20
v=A.ah(e,s?C.ac:C.b2,t,t,v)
u=s?G.im:C.b2
return A.aZ(!1,C.z,!0,t,A.b8(!1,q,!0,K.f_(F.S(A.a([v,H.aU,new F.dP(1,E.b3,A.k(f,t,1,C.H,t,t,A.B(t,t,u,t,t,t,t,t,t,t,t,d?12:14,t,t,C.x,t,t,!0,t,0.2,t,t,t,t,t,t),t,t),t)],x.p),E.j,C.a1,E.n,0),t,new A.u(t,t,t,o,w,n,C.m),p,t,t),t,!0,t,t,t,t,t,t,t,t,r,t,t,t,t,t,t,t),C.f,C.w,0,t,t,t,t,t,C.G)},
aMz(d,e,f){return this.Ky(!1,d,e,f)},
aae(d,e,f){var w=null,v=f!=null,u=v?G.e1:C.b2,t=v?G.a4:H.bQ
t=A.F9(w,w,w,w,w,w,w,w,w,u,w,w,G.fv,w,new A.cB(A.x(12),C.y),new A.aL(t,1.5,C.E,-1),w,w,w,w)
return S.bDy(A.ah(d,w,w,w,16),A.k(e,w,w,w,w,w,I.P6,w,w),f,t)},
aad(d){var w=null,v=C.l.j(0.35),u=A.x(14),t=F.R(C.h.j(0.08),1),s=A.y(w,w,C.f,w,w,D.Sh,w,8,w,w,w,w,w,8),r=G.a4.j(0.15),q=A.x(20),p=F.R(G.a4.j(0.35),1),o=x.p
o=A.a([F.S(A.a([s,E.a2,D.aI_,H.bZ,A.y(w,A.k(""+d+"/"+this.gnW()+" Joined",w,w,w,w,w,A.B(w,w,G.e1,w,w,w,w,w,w,w,w,11,w,w,C.x,w,w,!0,w,w,w,w,w,w,w,w),w,w),C.f,w,w,new A.u(r,w,p,q,w,w,C.m),w,w,w,w,H.hd,w,w,w)],o),E.j,C.i,E.n,0),H.aF],o)
C.b.H(o,A.jp(this.gnW(),new B.bbm(this),!0,x.l))
return A.y(w,F.P(o,E.a7,C.i,E.n),C.f,w,w,new A.u(v,w,t,u,w,w,C.m),w,w,w,w,G.dB,w,w,w)},
aaa(){var w=null,v=A.x(12),u=F.R(R.cP.j(0.45),1),t=x.p
return F.P(A.a([I.vE,H.aw,A.y(w,F.S(A.a([I.BB,H.aT,F.Q(A.k(this.gv7(),w,w,w,w,w,Q.vy,w,w),1),A.dw(w,w,w,I.BF,w,w,new B.bb6(this),w,w,w,w,w)],t),E.j,C.i,E.n,0),C.f,w,w,new A.u(D.ml,w,u,v,w,w,C.m),w,w,w,w,A8.n6,w,w,w)],t),E.X,C.i,E.n)},
aai(){var w=null
return F.S(A.a([A.ah(D.a7o,G.a4.j(0.55),w,w,14),H.aU,A.k("Fair Play  \xb7  Secure  \xb7  Trusted",w,w,w,w,w,A.B(w,w,G.a4.j(0.55),w,w,w,w,w,w,w,w,11,w,w,C.Q,w,w,!0,w,0.3,w,w,w,w,w,w),w,w)],x.p),E.j,C.a1,E.n,0)},
Kw(d,e){var w,v,u,t,s,r,q=null
if(e)w=C.c.t(d.toLowerCase(),"network")||C.c.t(d.toLowerCase(),"connect")||C.c.t(d.toLowerCase(),"timeout")||C.c.t(d.toLowerCase(),"timed out")||C.c.t(d.toLowerCase(),"server")
else w=!1
v=(e?C.ay:R.cP).j(0.12)
u=A.x(12)
t=F.R((e?C.ay:R.cP).j(0.4),1)
s=x.p
r=A.a([],s)
if(w)C.b.H(r,A.a([D.ao9,E.aG],s))
r.push(A.k(d,q,q,q,q,q,A.B(q,q,e?C.h5:R.qK,q,q,q,q,q,q,q,q,12,q,q,C.Q,q,q,!0,q,q,q,q,q,q,q,q),C.M,q))
return A.y(q,F.P(r,E.j,C.i,E.n),C.f,q,q,new A.u(v,q,t,u,q,q,C.m),q,q,q,q,G.dB,q,q,q)}}
B.anf.prototype={}
B.Yu.prototype={
a4(){this.ag()
B.vL()
$.at.am$.push(new B.bp2(this))},
l(){B.t6()
this.aa()}}
B.ER.prototype={
V(){var w=x.S,v=A.bp(4,0,!1,w)
return new B.Uj(v,A.F(x.N,w),C.bF,new B.N2(),null,null)}}
B.Uj.prototype={
a4(){var w,v,u=this,t=null
u.av6()
$.at.ba$.push(u)
u.x2=A.bb(t,C.iu,0,t,1,t,u)
w=A.bb(t,Q.kG,0,t,1,t,u)
w.hN(0,!0)
u.xr=w
v=x.Z
u.y1=new A.ax(A.bP(C.d4,w,t),new A.aE(0.35,1,v),v.i("ax<aO.T>"))
u.aMH()
u.Ed()
u.d=A.fz(M.rc,new B.bcv(u))
u.a3=A.fz(C.bS,new B.bcw(u))},
kT(d){var w,v,u,t,s,r=this
if(d===C.hY||d===C.jN||d===C.hZ){if(!r.cx){w=r.am
if(!(w>0))if(r.aq!=null){w=r.au
v=Date.now()
u=r.aq
u.toString
u=Math.max(0,w-C.k.bj(new A.c5(v,0,!1).cA(u).a,1e6))
w=u}else w=10
r.cy=w}r.cx=!0
return}if(d===C.cz){t=r.cx
r.cx=!1
if($.jS>0)A.hn()
if(t&&r.cy!=null){w=r.cy
w.toString
s=C.k.S(w,1,10)
r.aq=new A.c5(Date.now(),0,!1)
r.am=r.au=s
r.ah=!1
r.cy=null}if(r.c!=null&&!r.dy&&!r.fr){r.n3(!0,!0)
r.uU()}}},
kF(){var w=$.aA,v=K.aoK(w==null?"":w)
if(v!=null&&v.length!==0)return v
w=$.bc
w=w==null?null:w.a
return w==null?"":w},
V1(){var w=$.aA,v=this.kF(),u=w==null?"":w,t=this.a.c
return A.aa(["userId",v,"user_id",v,"token",u,"tableId",t,"table_id",t],x.N,x.z)},
aMH(){var w,v,u=this
N.Cw(u.a.f)
B.bxT(u.a.f)
w=N.cw(u.a.f)
v=new B.bch(u)
u.aC=v
u.aX=u.gaxV()
u.aR=new B.bci(u)
u.aF=u.gaOv()
w.cG(0,"roomTrigger",v)
v=u.aX
v.toString
w.cG(0,"getStep",v)
v=u.aX
v.toString
w.cG(0,"startGame",v)
v=u.aX
v.toString
w.cG(0,"dice",v)
v=u.aX
v.toString
w.cG(0,"move",v)
v=u.aF
v.toString
w.cG(0,"ludo_timer",v)
v=u.aR
v.toString
w.cG(0,"connect",v)
if(w.y)u.a7c()},
Vw(d){var w,v,u="table_id",t="table",s=J.M(d),r=s.h(d,"tableId")
if(r==null)r=s.h(d,u)
if(r==null)r=s.h(d,"ludo_table_id")
if(r==null){r=x.f
if(r.b(s.h(d,t))){w=J.C(r.a(s.h(d,t)),u)
s=w==null?J.C(r.a(s.h(d,t)),"tableId"):w}else s=null}else s=r
v=s==null?null:J.J(s)
if(v==null||v.length===0)return!0
return v===this.a.c},
yO(d){var w
if(d==null||d.length===0)return!1
w=d.toLowerCase()
return C.c.t(w,"unreachable")||C.c.t(w,"socket hang up")||C.c.t(w,"econnreset")||C.c.t(w,"econnrefused")||C.c.t(w,"timed out")||C.c.t(w,"timeout")||C.c.t(w,"gateway")||C.c.t(w,"502")||C.c.t(w,"503")||C.c.t(w,"504")},
a7c(){var w,v,u=this,t=$.aA,s=u.kF()
if(t==null||t.length===0||s.length===0)return
w=u.V1()
v=N.cw(u.a.f)
if(!v.y)B.bxT(u.a.f)
v.dL("joinRoom",w)
v.dL("getStep",w)},
uU(){var w,v,u,t=this,s=$.aA,r=t.kF()
if(s==null||s.length===0||r.length===0)return
w=new A.c5(Date.now(),0,!1)
v=t.r
if(v!=null&&w.cA(v).a<18e5)return
t.r=w
u=N.cw(t.a.f)
if(!u.y)B.bxT(t.a.f)
u.dL("getStep",t.V1())},
axW(d){var w,v,u,t,s,r,q=this
if(q.c==null||!x.f.b(d))return
w=B.EQ(A.an(d,x.N,x.z))
if(!q.Vw(w))return
v=B.bD0(w)
if(v!=null){u=v.toLowerCase()
if(q.yO(v)||C.c.t(u,"no active game")||C.c.t(u,"waiting for players")||C.c.t(u,"not started"))return
q.E(new B.bbO(q,v))
return}t=B.a49(w)
s=J.bY(w)
r=s.aw(w,"currentTurnIndex")||s.aw(w,"current_turn_index")||s.aw(w,"nextTurnIndex")||s.aw(w,"next_turn_index")||s.aw(w,"playerIds")||s.aw(w,"player_ids")||s.aw(w,"dice")||s.aw(w,"turnExpiresAt")||s.aw(w,"turn_expires_at")
if(!t&&!r)return
if(q.dy||q.fr){q.to=B.q5(q.to,w)
return}q.T2(w)},
TZ(){var w=this,v=w.to
if(v==null||w.dy||w.fr)return
w.to=null
w.T2(v)},
a4W(d){var w,v,u,t,s,r,q,p,o,n
if(d==null)return""
w=B.t3(d)
v=B.oz(d)
u=B.vJ(d)
t=B.oA(d)
s=B.aCA(d)
if(s==null)s=""
r=B.t4(d)
q=w+"|"+v+"|"+u+"|"+t+"|"+s+"|"
for(p=r.length,o=0;o<r.length;r.length===p||(0,A.Y)(r),++o){for(n=J.b_(r[o]);n.A();)q+=""+B.MY(n.gP(n))+"."
q+=";"}return q.charCodeAt(0)==0?q:q},
UD(d){var w,v,u,t,s,r,q,p,o,n=this,m="ludoState",l=n.CW
if(l==null||l<=0)return
w=n.y
if(w==null)w=d
v=B.q6(w,n.kF())
u=B.oz(d)
t=B.vJ(d)
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
T2(d){var w,v=this,u=B.q5(v.y,d)
if(u!=null){w=v.CW
w=w!=null&&w>0}else w=!1
if(w)v.UD(u)
if(v.a4W(u)===v.a4W(v.y)){v.y=u
v.Wy()
return}v.E(new B.bbQ(v,u))
v.VQ()
v.a6H()
v.Wy()},
a6H(){var w,v,u,t,s,r,q,p=this,o=p.y
if(o==null)return
w=p.kF()
v=B.q6(o,w)
u=B.oA(o)
t=B.oz(o)
s=v>=0&&t===v&&!u
if(u&&!p.a_){r=B.aCA(o)
q=$.bE()
q.bt(0,r===w?X.bN:X.bX)}else if(s&&p.C===!1)$.bE().bt(0,M.ov)
p.a_=u
p.C=s},
aOw(d){var w,v,u=this
if(u.c==null)return
w=typeof d=="number"?d:A.dn(A.v(d))
if(w==null||!isFinite(w))return
v=B.bqU(Math.max(0,C.d.ft(w)))
u.E(new B.bc_(u,v))
if(v===0&&!u.cx&&u.CW==null)u.aaj()},
SV(){var w=this
w.am=0
w.Y=""
w.aW=w.aq=null
w.ah=!1},
Lr(){var w,v,u=this
u.ah=!1
u.aW=null
u.aq=new A.c5(Date.now(),0,!1)
u.am=u.au=10
w=u.y
if(w!=null){v=B.oz(w)
u.Y=B.bJe(w,B.t3(w),v)}},
VQ(){var w,v,u,t=this,s=t.y
if(s==null)return
w=B.oz(s)
v=B.bJe(s,B.t3(s),w)
if(v===t.Y)return
t.Y=v
t.ah=!1
u=B.c48(s,t.aW)
t.aq=new A.c5(Date.now(),0,!1)
t.au=u>0?u:10},
aMI(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this
if(i.c==null||i.cx)return
w=i.y
v=B.q6(w,i.kF())
u=B.oz(w)
t=B.t3(w)
s=B.oA(w)
r=w!=null&&v>=0&&u===v&&!s
q=i.ch!=null||i.RG!=null||i.fr
p=i.CW
o=p==null
n=!o&&p>0&&t==="moving"
if(r)m=(t==="rolling"||n)&&!i.dy&&!q
else m=!1
if(!m){if(i.am!==0||i.Y.length!==0)if(o)i.E(new B.bcm(i))
return}i.VQ()
if(i.aq!=null){p=i.au
o=Date.now()
l=i.aq
l.toString
k=Math.max(0,p-C.k.bj(new A.c5(o,0,!1).cA(l).a,1e6))}else k=0
j=B.bqU(k)
if(j!==i.am)i.E(new B.bcn(i,j))
if(j===0&&!i.cx&&i.CW==null)i.aaj()},
gnV(){var w,v,u=this,t=null
if(!(B.a49(u.y)&&!B.MW(u.y)))if(B.MW(u.y)||B.MW(u.x))return!1
w=u.x
if(w==null)w=t
else{w=J.C(w,"status")
w=w==null?t:J.J(w)}if(w==="playing")return!0
w=u.y
w=w==null?t:w.h(0,"gameId")
if(w==null){w=u.y
w=w==null?t:w.h(0,"game_id")}v=w==null?t:C.c.O(J.J(w))
return(v==null?"":v).length!==0},
Dt(){var w,v,u,t=this
if(!t.gnV()||B.oA(t.y))return!1
w=t.kF()
v=B.q6(t.y,w)
u=B.oz(t.y)
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
q.aRt()
t=6
o=x.H
w=9
return A.e(A.cs(C.hb,null,o),$async$nL)
case 9:q.uU()
p=0,n=q.gaAx()
case 10:if(!(p<12)){w=12
break}if(q.c==null){r=[1]
w=7
break}w=13
return A.e(q.n3(!0,!0),$async$nL)
case 13:if(q.c!=null){n.$0()
q.c.dl()
q.Wy()}if(!q.Dt()){if(q.c!=null){new B.bbP(q).$0()
q.c.dl()}r=[1]
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
aAy(){var w,v,u,t=this
if(B.t3(t.y)==="rolling")return
w=B.vJ(t.y)
if(w<=0)return
v=B.oz(t.y)
if(v<0)return
u=B.t8(v,t.ghW())
t.Kd(w,u)
if(!t.dy){t.id=C.k.S(w,1,6)
t.k1=u}},
aaj(){var w=this
if(w.ah)return
w.ah=!0
if(w.gnV())w.uU()
else w.pE()},
Ed(){var w=0,v=A.p(x.H),u=this
var $async$Ed=A.q(function(d,e){if(d===1)return A.m(e,v)
for(;;)switch(w){case 0:u.uU()
w=u.gnV()?2:4
break
case 2:w=5
return A.e(u.Ws(!0),$async$Ed)
case 5:w=3
break
case 4:w=6
return A.e(u.pE(),$async$Ed)
case 6:case 3:return A.n(null,v)}})
return A.o($async$Ed,v)},
n3(d,e){return this.aWm(d,e)},
Wr(d){return this.n3(d,!1)},
Ws(d){return this.n3(!1,d)},
aWm(d,e){var w=0,v=A.p(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m
var $async$n3=A.q(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(q.w){w=1
break}if(!e)q.uU()
p=$.aA
if(p==null||p.length===0){w=1
break}n=new A.c5(Date.now(),0,!1)
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
break}if(!q.Vw(o)){r=[1]
w=4
break}if(q.dy||q.fr){q.to=B.q5(q.to,o)
r=[1]
w=4
break}m=q.z
if(m!=null&&q.yO(m))q.z=null
q.T2(o)
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
break}j=new A.c5(Date.now(),0,!1)
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
return A.e(B.MU(q.a.c,p),$async$pE)
case 10:e=f.a=e
w=8
break
case 9:e=null
case 8:h=e
if(q.c==null){r=[1]
w=4
break}n=q.aET(h)
m=n!=null||h!=null
l=o!=null&&q.Vw(o)
h=n
if(h==null)h=q.x
if(h==null)g=null
else{h=J.C(h,"status")
g=h==null?null:J.J(h)}k=g
q.E(new B.bc4(i,q,m,n,l,k,o))
q.VQ()
q.a6H()
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
else{o=J.C(o,"status")
n=o==null?null:J.J(o)}if(n!=="waiting"){w=1
break}if(r.gnV()){w=1
break}if(B.oA(r.y)){w=1
break}if(B.a49(r.y)){w=1
break}r.as=!0
t=4
w=7
return A.e(B.bv9(r.a.c,q,p),$async$KD)
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
aRt(){var w,v,u,t,s=this
if(!s.gpv()||s.dy||s.c==null)return
w=s.y
if(w==null||B.oA(w))return
v=B.q6(w,s.kF())
u=B.oz(w)
if(v<0||u<0)return
t=u===v?s.aNC(u):u
if(t<0||t===v)return
s.Wk(B.t8(t,s.ghW()))},
aNC(d){var w,v,u,t,s=this.ghW()
if(s<=0)return-1
w=B.MX(this.y,this.x)
for(v=w.length,u=1;u<=s;++u){t=C.k.ac(d+u,s)
if(t<v&&C.c.O(w[t]).length!==0)return t}return C.k.ac(d+1,s)},
Wk(d){var w=this,v=w.c
if(v==null)return
if(w.k3&&w.k4===d)return
v=w.p1
if(v!=null)v.U(0)
w.p2=w.p1=null
$.bE().bt(0,W.lx)
w.E(new B.bck(w,d))},
aRI(d,e){var w,v,u=this
if(e<1||e>6)return
u.Wk(d)
if(u.p2===e&&u.p1!=null)return
u.p2=e
w=u.p1
if(w!=null)w.U(0)
v=u.ok
if(v==null)v=new A.c5(Date.now(),0,!1)
u.p1=A.c1(A.cc(0,Math.max(0,900-C.k.bj(new A.c5(Date.now(),0,!1).cA(v).a,1000)),0),new B.bc1(u))},
aem(){var w=this,v=w.p1
if(v!=null)v.U(0)
w.p1=null
if(w.c==null)return
if(!w.k3&&w.p2==null)return
w.E(new B.bcl(w,w.k4,w.p2))},
Wy(){var w,v,u,t,s,r,q,p=this
if(!p.gpv()||p.dy||p.c==null)return
w=p.y
if(w==null||B.oA(w)){p.aem()
return}v=B.q6(w,p.kF())
u=B.oz(w)
t=B.t3(w)
s=B.vJ(w)
if(v<0||u<0||u===v){if(p.k3)p.aem()
return}r=B.t8(u,p.ghW())
if(t==="rolling"){q=p.p1
if(q!=null)q.U(0)
p.p2=p.p1=null
p.Wk(r)
return}if(s>0)p.aRI(r,C.k.S(s,1,6))},
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
w=N.cw(r.a.f)
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
Af.bxR(r.a.f)
r.av5()},
aET(d){var w,v
if(d==null)return null
w=J.C(d,"table_data")
if(x.j.b(w)&&J.cE(w)){v=J.fo(w)
if(x.P.b(v))return v
if(x.f.b(v))return A.an(v,x.N,x.z)}return d},
gaaD(){var w=this.x
return L.N6(w==null?A.F(x.N,x.z):w)},
KS(){return this.gaaD().d>0?this.gaaD().d:this.a.e},
gpv(){return C.c.t(this.a.r.toLowerCase(),"computer")},
axX(d){var w,v,u,t
if(d==null||J.ck(d))return
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
s=s==null?null:J.C(s,"status")
if(s==null){s=t.y
s=s==null?null:s.h(0,"status")}if((s==null?null:J.J(s))==="playing"){t.at=!0
w=1
break}if(t.x==null&&t.y==null){w=1
break}s=Date.now()
r=t.ay
if(r!=null&&new A.c5(s,0,!1).cA(r).a<4e6){w=1
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
w=B.MX(t.y,t.x).length>=p&&p>0?8:9
break
case 8:w=10
return A.e(t.nS(!1),$async$DH)
case 10:case 9:case 7:case 1:return A.n(u,v)}})
return A.o($async$DH,v)},
nS(d){return this.aF4(d)},
aF4(a4){var w=0,v=A.p(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3
var $async$nS=A.q(function(a5,a6){if(a5===1){s.push(a6)
w=t}for(;;)switch(w){case 0:if(q.c==null||q.ax){w=1
break}if(q.gnV()){q.at=!0
w=1
break}p=$.aA
o=q.kF()
if(p==null||p.length===0||J.au(o)===0){w=1
break}q.ax=!0
q.ay=new A.c5(Date.now(),0,!1)
q.E(new B.bbR(q))
t=4
n=q.KS()
m=B.MX(q.y,q.x).length
l=n-m
w=l>0&&q.gpv()?7:8
break
case 7:w=9
return A.e(L.vd(l,q.a.c,p),$async$nS)
case 9:k=a6
if(q.c==null){r=[1]
w=5
break}q.axX(k)
case 8:j=N.cw(q.a.f)
j.dL("startGame",q.V1())
w=10
return A.e(B.aCp(q.a.c,p,o),$async$nS)
case 10:i=a6
P.dk()
a0=x.f
if(a0.b(J.C(i,"ludoState"))||a0.b(J.C(i,"table"))){q.y=B.q5(q.y,i)
h=J.C(i,"table")
if(a0.b(h)){a0=x.N
a1=x.z
g=A.F(a0,a1)
f=q.x
if(f!=null)J.CH(g,f)
J.CH(g,A.an(h,a0,a1))
q.x=g}}q.at=!0
q.r=q.f=null
w=11
return A.e(q.Wr(!0),$async$nS)
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
if(a4&&q.c!=null&&!q.yO(e.a))q.c.X(x.q).f.b4(F.c8(null,null,null,null,null,C.u,null,A.k(e.a,null,null,null,null,null,null,null,null),null,E.a0,null,null,null,null,null,null,null,null,null,null))}else{d=g
if(a4&&q.c!=null&&!q.yO(A.v(d)))q.c.X(x.q).f.b4(F.c8(null,null,null,null,null,C.u,null,A.k(A.v(d),null,null,null,null,null,null,null,null),null,E.a0,null,null,null,null,null,null,null,null,null,null))}r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
q.ax=!1
if(q.c!=null)q.E(new B.bbS(q))
w=r.pop()
break
case 6:case 1:return A.n(u,v)
case 2:return A.m(s.at(-1),v)}})
return A.o($async$nS,v)},
aVJ(){return this.nS(!0)},
pF(){var w=0,v=A.p(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4
var $async$pF=A.q(function(d5,d6){if(d5===1){s.push(d6)
w=t}for(;;)switch(w){case 0:d2=$.aA
d3=q.kF()
if(d2==null||d2.length===0||J.au(d3)===0){w=1
break}if(B.oA(q.y)){w=1
break}if(q.dy||q.fr||q.Q){w=1
break}b8=B.q6(q.y,d3)
p=b8>=0?B.t8(b8,q.ghW()):0
q.E(new B.bc5(q))
P.dk()
$.bE().bt(0,W.lx)
t=4
b9={}
o=B.bvb(q.a.c,d2,d3)
b9.a=b9.b=null
o.bI(new B.bc6(b9),x.P).ma(new B.bc7(b9))
n=new A.c5(Date.now(),0,!1)
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
c1.r.uk(0,!0)
c1.Dl(0)
c1.aE()
c2=c1.Q
c2===$&&A.b()
if(c1.as!==c2){c1.as=c2
c1.wT(c2)}c1.J1(c1.b)
new B.bc8(q).$0()
q.c.dl()
w=9
return A.e(A.cs(E.kD,null,c0),$async$pF)
case 9:w=7
break
case 8:c1=b9.a
if(c1!=null)throw A.j(c1)
k=new A.c5(Date.now(),0,!1).pk(6e6)
case 10:c1=!1
if(b9.b==null)if(q.c!=null){c1=Date.now()
c2=k
c3=c2.a
if(c1>=c3)c1=c1===c3&&0<c2.b
else c1=!0}if(!c1){w=11
break}w=12
return A.e(A.cs(C.re,null,c0),$async$pF)
case 12:w=10
break
case 11:if(q.c==null){r=[1]
w=5
break}c1=b9.b
if(c1==null){c0=A.aY("Dice roll timed out")
throw A.j(c0)}j=B.EQ(c1)
c4=J.C(j,"dice")
i=c4==null?B.vJ(j):c4
if(typeof i=="number"&&C.d.aj(i)>0)q.go=C.d.aj(i)
c5=q.go
h=c5==null?B.vJ(j):c5
if(q.c==null){r=[1]
w=5
break}c1=q.x2
c1===$&&A.b()
c1.sq(0,0)
q.E(new B.bc9(q,j,h,p))
if(h>0){c6=J.C(j,"mustMove")
g=c6==null?J.C(j,"must_move"):c6
c7=!0
if(!J.f(g,!1))if(!J.f(g,0)){c1=g
c1=(c1==null?null:J.J(c1))==="false"
c7=c1}f=c7
if(!f)q.CW=h}q.TZ()
if(h<=0){r=[1]
w=5
break}w=13
return A.e(A.cs(Ad.rg,null,c0),$async$pF)
case 13:if(q.c==null){r=[1]
w=5
break}c8=J.C(j,"mustMove")
e=c8==null?J.C(j,"must_move"):c8
c9=!0
if(!J.f(e,!1))if(!J.f(e,0)){c0=e
c0=(c0==null?null:J.J(c0))==="false"
c9=c0}d=c9
a0=B.q6(q.y,d3)
a1=a0>=0?B.t8(a0,q.ghW()):-1
a2=B.t4(q.y)
a3=q.Jw(q.zO(a2,q.ghW()))
c0=$.pd()
a4=new B.jR(c0)
a5=q.KO(a2,h,a3,a1,q.ghW(),a4,!0)
w=d&&J.au(a5)===0&&!J.f(h,6)?14:15
break
case 14:q.CW=null
if(q.c!=null)q.E(new B.bca(q))
w=16
return A.e(q.nL(),$async$pF)
case 16:r=[1]
w=5
break
case 15:q.CW=h
q.E(new B.bcb(q,h))
a6=B.q6(q.y,d3)
a7=a6>=0?B.t8(a6,q.ghW()):-1
a8=B.t4(q.y)
a9=q.Jw(q.zO(a8,q.ghW()))
b0=new B.jR(c0)
d0=q.KO(a8,h,a9,a7,q.ghW(),b0,!0)
b9.c=d0
if(d0.length===0&&J.f(h,6)&&a7>=0&&a7<J.au(a9)){b1=A.a([],x.t)
for(b2=0;b2<J.au(J.C(a9,a7));++b2){b3=J.C(J.C(a9,a7),b2)
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
b5=q.Jw(q.zO(b4,q.ghW()))
b6=q.KO(b4,h,b5,a7,q.ghW(),b0,!0)
if(J.au(b6)===1){q.pB(J.fo(b6))
r=[1]
w=5
break}if(J.au(b6)!==0){q.Lr()
if(q.c!=null)q.E(new B.bcc())
r=[1]
w=5
break}q.CW=null
q.E(new B.bcd(q))
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
case 18:if(c0===1)$.at.am$.push(new B.bce(b9,q))
else q.Lr()
r.push(6)
w=5
break
case 4:t=3
d4=s.pop()
c0=A.a9(d4)
if(c0 instanceof B.lC){b7=c0
if(q.c!=null&&!q.yO(b7.a))q.c.X(x.q).f.b4(F.c8(null,null,null,null,null,C.u,null,A.k(b7.a,null,null,null,null,null,null,null,null),null,E.a0,null,null,null,null,null,null,null,null,null,null))}r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null){c0=q.x2
c0===$&&A.b()
c0.sq(0,0)
if(q.dy)q.E(new B.bcf(q))}w=r.pop()
break
case 6:case 1:return A.n(u,v)
case 2:return A.m(s.at(-1),v)}})
return A.o($async$pF,v)},
Et(d,e){return this.aVA(d,e)},
aVA(d,e){var w=0,v=A.p(x.H),u,t=this
var $async$Et=A.q(function(f,g){if(f===1)return A.m(g,v)
for(;;)switch(w){case 0:if(t.c==null){w=1
break}t.CW=null
t.E(new B.bcj(t))
w=3
return A.e(t.nL(),$async$Et)
case 3:case 1:return A.n(u,v)}})
return A.o($async$Et,v)},
aX9(d,e){return d.a===e.a&&d.c===e.c&&d.b===e.b},
UQ(d,e,f,g,h){var w,v=this.R8===g&&this.RG===h,u=!f.a
if(u&&!f.c&&d.a){if(v)return!0
u=$.pd()
w=new B.jR(u).p7(g,f)
if(w!=null&&new B.jR(u).alS(e,g,w)||this.ry.aw(0,""+g+":"+h))return!1
return!0}if(f.c&&!d.c)return!0
if(u&&!d.a&&f.b>d.b)return!0
return!1},
KH(d,e,f){var w=this.ry.h(0,""+d+":"+e)
if(w==null||f.a||f.c)return f
if(new B.jR($.pd()).p7(d,f)===w)return D.fD
return f},
Lj(d,e,f){var w,v,u,t,s,r,q,p=this.ry,o=!1,n=0
for(;;){if(!(n<d.length&&n<e.length))break
w=""+n+":"
v=0
for(;;){if(!(v<J.au(d[n])&&v<J.au(e[n])))break
c$0:{u=J.C(d[n],v)
t=J.C(e[n],v)
if(u.a||u.c||!t.a)break c$0
s=$.pd()
r=new B.jR(s).p7(n,u)
if(r==null||D.ou.t(0,r))break c$0
if(!new B.jR(s).alS(e,n,r))break c$0
q=w+v
s=p.aw(0,q)
p.k(0,q,r)
if(!s)o=!0}++v}++n}if(f&&o)$.bE().bt(0,D.NE)},
ay3(d){var w,v,u,t,s,r,q,p,o,n=A.a([],x.s)
for(w=this.ry,v=new A.eg(w,A.H(w).i("eg<1,2>")).gad(0);v.A();){u=v.d
t=u.a
s=t.split(":")
if(s.length!==2)continue
r=A.cG(s[0],null)
q=A.cG(s[1],null)
if(r==null||q==null)continue
if(r<0||r>=d.length||q<0||q>=J.au(d[r]))continue
p=J.C(d[r],q)
if(p.a)continue
if(p.c){n.push(t)
continue}if(new B.jR($.pd()).p7(r,p)===u.b)J.em(d[r],q,D.fD)
else n.push(t)}for(v=n.length,o=0;o<n.length;n.length===v||(0,A.Y)(n),++o)w.L(0,n[o])},
aKM(){var w,v,u=this,t=B.oz(u.y)
if(t<0)return null
w=u.ghW()
if(w<=0)return null
v=B.vJ(u.y)
return B.t8(B.t3(u.y)==="rolling"&&v===6?t:C.k.ac(t-1+w,w),w)},
JM(d,e){var w,v,u=this,t=u.pq(d)
u.ay3(t)
w=u.rx
if(w==null)w=u.aKM()
if(w==null)return t
v=u.pq(t)
new B.jR($.pd()).Z0(t,w)
u.Lj(v,t,e)
return t},
a7C(d){return this.JM(d,!1)},
pq(d){var w,v,u,t=A.a([],x.Q)
for(w=d.length,v=x.r,u=0;u<d.length;d.length===w||(0,A.Y)(d),++u)t.push(A.bI(d[u],!0,v))
return t},
a9V(){var w=B.t4(this.y)
if(w.length===0)return null
return this.zO(w,this.ghW())},
ghW(){var w=this.KS()
return B.a4h(w>0?w:this.a.e)},
Jw(d){var w,v,u,t,s,r,q,p,o=this,n=o.a9V()
if(n==null)n=d
w=o.p4
if(w==null)return o.a7C(n)
v=o.pq(n)
u=w.length
t=v.length
u=u<t?u:t
for(s=0;s<u;++s){r=J.au(w[s])<J.au(v[s])?J.au(w[s]):J.au(v[s])
for(q=0;q<r;++q){p=J.C(w[s],q)
if(o.UQ(n[s][q],n,p,s,q))J.em(v[s],q,J.C(w[s],q))}}return o.a7C(v)},
Ec(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=k.a9V()
if(j==null)return
w=new B.bc3(k)
if(k.fr)return
v=k.R8
u=k.RG
if(v!=null&&u!=null&&k.p4!=null){t=k.pq(j)
s=k.p4
if(v<s.length&&u<J.au(s[v])&&v<t.length&&u<J.au(t[v])){r=J.C(k.p4[v],u)
q=j[v][u]
if(k.aX9(r,q)){s=k.x1
if(s!=null)s.U(0)
k.RG=k.R8=k.x1=null
w.$1(t)}else if(k.UQ(q,j,r,v,u)){J.em(t[v],u,r)
w.$1(t)}else{s=k.x1
if(s!=null)s.U(0)
k.RG=k.R8=k.x1=null
w.$1(t)}}else w.$1(t)
return}p=k.p4
if(p!=null&&!k.Q){k.aNG(p,j)
t=k.pq(j)
o=!1
n=0
for(;;){if(!(n<p.length&&n<t.length))break
m=0
for(;;){if(!(m<J.au(p[n])&&m<J.au(t[n])))break
s=J.C(p[n],m)
if(k.UQ(j[n][m],j,s,n,m)){J.em(t[n],m,J.C(p[n],m))
o=!0}++m}++n}if(o){w.$1(t)
return}l=k.aFh(p,j)
if(l!=null){$.at.am$.push(new B.bc2(k,l,j))
return}}w.$1(j)},
aNG(d,e){var w,v,u,t,s,r,q,p,o=this,n=null,m=0
for(;;){if(!(m<d.length&&m<e.length))break
w=0
for(;;){if(!(w<J.au(d[m])&&w<e[m].length))break
v=o.KH(m,w,J.C(d[m],w))
u=o.KH(m,w,e[m][w])
t=v.a
s=t&&!u.a&&!u.c
r=!t&&!u.a&&!v.c&&u.b>v.b
if(s||r)n=m;++w}++m}if(n!=null)o.rx=n
o.Lj(d,e,!0)
q=o.rx
if(q==null)return
p=o.pq(e)
new B.jR($.pd()).Z0(p,q)
o.Lj(e,p,!0)},
aFh(d,e){var w,v,u,t,s,r,q=null,p=0,o=0
for(;;){if(!(o<d.length&&o<e.length))break
w=0
for(;;){if(!(w<J.au(d[o])&&w<e[o].length))break
c$0:{v=this.KH(o,w,J.C(d[o],w))
u=this.KH(o,w,e[o][w])
t=v.a
s=u.a
if(t===s&&v.c===u.c&&v.b===u.b)break c$0;++p
if(t&&!s)q=new A.Vp([6,v,o,w])
else if(!t&&!s&&!v.c&&u.b>v.b){r=u.b-v.b
if(r>=1&&r<=6)q=new A.Vp([r,v,o,w])}}++w}++o}if(q==null||p>4)return null
return q},
J0(d,e){return this.axI(d,e)},
axI(d,e){var w=0,v=A.p(x.H),u,t=this,s,r,q,p,o,n
var $async$J0=A.q(function(f,g){if(f===1)return A.m(g,v)
for(;;)switch(w){case 0:if(t.c==null||t.fr||t.RG!=null){w=1
break}s=$.pd()
r=d.a
q=r[2]
p=r[3]
o=r[1]
n=new B.jR(s).a07(q,r[0],o,p)
if(n.length<=1){t.rx=r[2]
t.E(new B.bbM(t,e))
w=1
break}$.bE().bt(0,D.uZ)
w=3
return A.e(t.Cv(r[2],r[3],n,!1,190),$async$J0)
case 3:if(t.c==null){w=1
break}t.E(new B.bbN(t,d,e))
t.fr=!1
t.TZ()
case 1:return A.n(u,v)}})
return A.o($async$J0,v)},
Cv(d,e,f,g,h){return this.axH(d,e,f,!1,h)},
axG(d,e,f,g){return this.Cv(d,e,f,g,null)},
axH(d,e,f,g,h){var w=0,v=A.p(x.H),u,t=this,s,r
var $async$Cv=A.q(function(i,j){if(i===1)return A.m(j,v)
for(;;)switch(w){case 0:if(f.length<=1){w=1
break}t.fr=!0
t.E(new B.bbL(t,d,e,f))
s=f.length
r=h==null?110:h
w=3
return A.e(A.cs(A.cc(0,(s-1)*r,0),null,x.H),$async$Cv)
case 3:if(t.c==null){t.fr=!1
t.p3=null
w=1
break}case 1:return A.n(u,v)}})
return A.o($async$Cv,v)},
pB(d){return this.aNj(d)},
aNj(b7){var w=0,v=A.p(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6
var $async$pB=A.q(function(b8,b9){if(b8===1){s.push(b9)
w=t}for(;;)switch(w){case 0:b3={}
b4=$.aA
b5=q.kF()
if(b4==null||b4.length===0||J.au(b5)===0){w=1
break}if(B.oA(q.y)){w=1
break}if(q.dy||q.fr||q.Q){w=1
break}if(q.RG!=null){w=1
break}j=q.y
i=b3.a=B.vJ(j)
if(i<=0){i=q.CW
h=b3.a=i==null?0:i}else h=i
if(h<=0){w=1
break}g=B.t4(j)
f=q.ghW()
e=B.q6(j,b5)
if(e<0){w=1
break}p=B.t8(e,f)
o=B.bD6(p,f)
h=q.p4
if(h!=null)d=q.pq(h)
else d=g.length===0?q.a7f():q.zO(g,f)
for(h=x.b;a0=d.length,a0<4;){a1=A.a(new Array(4),h)
for(a2=0;a2<4;++a2)a1[a2]=D.fD
d.push(a1)}if(p<0||p>=a0){w=1
break}if(b7<0||b7>=J.au(d[p])){w=1
break}a3=J.C(d[p],b7)
a4=new B.jR($.pd())
h=b3.a
if(!a4.Y7(h,a3)){w=1
break}a5=a4.a07(p,h,a3,b7)
q.E(new B.bbU(q,d))
P.dk()
$.bE().bt(0,D.uZ)
w=a5.length>1?3:4
break
case 3:w=5
return A.e(q.axG(p,b7,a5,!1),$async$pB)
case 5:case 4:if(q.c==null){q.fr=!1
w=1
break}n=q.pq(d)
a6=a4.agV(n,p,b3.a,b7)
q.rx=p
q.Lj(d,n,a6!=null)
h=J.C(J.C(n,p),b7)
b3.b=q.U2(b3.a,j,o,h,b7)
a7=0
for(;;){if(!(a7<J.au(n)&&a7<d.length))break
c$0:{a8=q.adt(a7)
if(a8<0)break c$0
a9=0
for(;;){if(!(a9<J.au(J.C(n,a7))&&a9<J.au(d[a7])))break
c$1:{b0=J.C(d[a7],a9)
b1=J.C(J.C(n,a7),a9)
if(b0.a||b0.c||!b1.a)break c$1
h=b3.b
b3.b=q.U2(b3.a,h,a8,b1,a9)}++a9}}++a7}q.E(new B.bbV(b3,q,n,p,b7,e))
h=q.fr=!1
q.TZ()
a0=q.x1
if(a0!=null)a0.U(0)
q.x1=A.c1(Y.mW,new B.bbW(q))
t=7
a0=q.a.c
w=10
return A.e(B.bva(b3.a,a0,b4,b7,b5),$async$pB)
case 10:m=b9
if(q.c!=null){a0=q.x1
if(a0!=null)a0.U(0)
q.CW=q.x1=null
q.E(new B.bbX(b3,q,m,o,b7,n,p))}w=b3.a!==6?11:13
break
case 11:w=14
return A.e(q.nL(),$async$pB)
case 14:w=12
break
case 13:w=15
return A.e(q.Wr(!0),$async$pB)
case 15:q.uU()
case 12:r.push(9)
w=8
break
case 7:t=6
b6=s.pop()
a0=A.a9(b6)
if(a0 instanceof B.lC){l=a0
if(q.c!=null?!q.yO(l.a):h)q.c.X(x.q).f.b4(F.c8(null,null,null,null,null,C.u,null,A.k(l.a,null,null,null,null,null,null,null,null),null,E.a0,null,null,null,null,null,null,null,null,null,null))
if(q.c!=null){h=q.x1
if(h!=null)h.U(0)
q.x1=null
q.CW=b3.a
q.E(new B.bbY(b3,q,n))}q.Wr(!0)}else{k=a0
h=q.c
if(h!=null){q.CW=b3.a
h.X(x.q).f.b4(F.c8(null,null,null,null,null,C.u,null,A.k(A.v(k),null,null,null,null,null,null,null,null),null,E.a0,null,null,null,null,null,null,null,null,null,null))}}r.push(9)
w=8
break
case 6:r=[2]
case 8:t=2
if(q.c!=null)q.E(new B.bbZ(q))
w=r.pop()
break
case 9:case 1:return A.n(u,v)
case 2:return A.m(s.at(-1),v)}})
return A.o($async$pB,v)},
U2(d,e,f,g,h){var w,v,u,t,s,r,q,p,o="ludoState",n=x.N,m=x.z,l=e==null?A.F(n,m):A.an(e,n,m),k=l.h(0,o),j=x.f.b(k)?A.an(k,n,m):A.F(n,m),i=B.t4(l)
if(i.length===0){w=this.ghW()
v=J.im(w,x.R)
for(u=x.Y,t=0;t<w;++t){s=A.a(new Array(4),u)
for(r=0;r<4;++r)s[r]=A.aa(["stepNo",0],n,m)
v[t]=s}i=v}for(u=x.Y;i.length<=f;){v=A.a(new Array(4),u)
for(q=0;q<4;++q)v[q]=A.aa(["stepNo",0],n,m)
C.b.M(i,v)}p=A.bI(i[f],!0,x.P)
while(p.length<=h)p.push(A.aa(["stepNo",0],n,m))
n=A.d8(p[h],n,m)
n.k(0,"stepNo",this.aeg(g))
n.k(0,"packed",!1)
p[h]=n
i.$flags&2&&A.aG(i)
i[f]=p
j.k(0,"cards",i)
if(!g.a){j.k(0,"lastDice",0)
j.k(0,"phase","rolling")}l.k(0,o,j)
l.k(0,"dice",0)
return l},
aeg(d){if(d.c)return 57
if(d.a)return 0
return d.b+1},
aCf(d,e,f,g){if(g!==e)return 0
if(d>0)return d
return 0},
adt(d){var w,v,u=this.ghW()
for(w=0;w<u;++w){v=D.j0.h(0,B.N4(w,u))
if((v==null?0:v)===d)return w}return-1},
aX7(d,e){if(e)return D.aoi
if(d<=0)return D.fD
if(d>=57)return D.u9
return new B.jq(!1,d-1,!1)},
a7f(){var w,v,u,t,s=J.im(4,x.I)
for(w=x.b,v=0;v<4;++v){u=A.a(new Array(4),w)
for(t=0;t<4;++t)u[t]=D.fD
s[v]=u}return s},
aR6(d,e){var w,v,u=B.bTj(e)
for(w=0;w<d.length;++w){v=D.j0.h(0,B.N4(w,e))
if(v==null)v=0
if(v<4)u[v]=!0}return u},
zO(d,e){var w,v,u,t,s,r,q,p,o=this.a7f()
for(w=0;w<d.length;++w){v=D.j0.h(0,B.N4(w,e))
if(v==null)v=0
u=d[w]
for(t=J.M(u),s=0;s<4;++s){r=s<t.gB(u)?t.h(u,s):C.cm
q=B.MY(r)
p=J.f(J.C(r,"packed"),!0)
o[v][s]=this.aX7(q,p)}}return o},
KO(d,e,f,g,h,i,j){var w,v,u,t,s,r,q,p,o,n,m,l,k
if(!j||e<=0||g<0)return C.bB
w=new B.bbT(f,i,g,e)
v=e===6
if(v){u=w.$0()
if(J.au(u)!==0)return u}t=B.bD6(g,h)
s=!1
if(t<d.length&&g<f.length){r=d[t]
for(q=J.M(r),p=0;p<4;++p){o=B.MY(p<q.gB(r)?q.h(r,p):C.cm)
if(o!==this.aeg(p<J.au(f[g])?J.C(f[g],p):D.fD)){s=!0
break}}}if(s)return w.$0()
n=A.a([],x.t)
q=d.length
if(t<q){r=d[t]
for(q=J.M(r),p=0;p<4;++p){m=p<q.gB(r)?q.h(r,p):C.cm
l=J.f(J.C(m,"packed"),!0)
k=B.MY(m)
if(l)continue
if(k>=57)continue
if(k<=0){if(v)n.push(p)}else if(k+e<=57)n.push(p)}}if(n.length!==0)return n
return w.$0()},
aD3(d,e,f,g){var w,v,u=this
if(u.k3&&u.k4===e)return C.k.S(u.fx,1,6)
if(u.dy&&g===e)return u.fx
w=u.id
if(w!=null&&w>0&&u.k1===e)return w
v=e>=0&&e<4?u.fy[e]:0
if(v>0)return v
if(g===e&&d>0)return d
return u.aCf(d,e,f,g)},
aCe(d,e,f,g,h,i,a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
if(!d)return null
w=D.e6[a1]
v=j.adt(a1)
u=B.MX(j.y,j.x)
t=v>=0&&v<u.length?u[v]:""
s=j.y
r=j.x
q=j.a.c
p=B.bT4(j.gpv(),s,g,a1,u,v,r,q)
o=p.length!==0?p:D.nK[a1]+" Player"
n=f>0?C.k.S(f,1,6):0
m=e&&h&&!i
s=B.bJc(a3)
r=j.x2
r===$&&A.b()
q=j.y1
q===$&&A.b()
l=m?a2:null
if(!g)k=S.bCX(t)||j.gpv()
else k=!1
return B.bD5(w,!0,m,n,q,a0,k,o,l,i,s,r,"Win "+B.by6(a3)+"/4")},
u(c8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3=this,c4=null,c5=$.aA,c6=c3.x,c7=A.aQ(c6==null?c4:J.C(c6,"status"))
if(c7==null)c7="\u2026"
w=c3.KS()
v=c3.kF()
u=c3.y
t=B.q6(u,v)
s=B.oz(u)
r=B.t3(u)
q=B.vJ(u)
p=B.aCA(u)
o=B.oA(u)&&c7!=="waiting"
n=B.t4(u)
m=c3.ghW()
l=c3.aR6(n,m)
k=c3.zO(n,m)
j=new B.jR($.pd())
c6=t>=0
i=c6?B.t8(t,m):-1
h=s>=0
g=h?B.t8(s,m):-1
f=B.MX(c3.y,c3.x).length
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
$.at.am$.push(new B.bcq(c3,a1,s))}if(!a7)c3.db=!1
a8=new A.aS(l,new B.bcr(),A.aj(l).i("aS<1>")).gB(0)
a9=g>=0&&g<4?D.e6[g]:G.a4
c6=c5==null
b0=!c6&&c3.x==null&&c3.y==null
h=o&&v.length!==0&&p===v
if(c6)c6=D.V1
else if(b0){c6=c3.z
c6=A.cC(!0,new A.az(C.C,c4,C.K,C.u,A.a([A.aC(B.bD1(c6==null?"Connecting\u2026":c6,200),c4,c4),A.aH(c4,A.dw(c4,c4,c4,D.a8B,c4,c4,new B.bcs(c8),c4,c4,c4,c4,c4),c4,c4,4,c4,4,c4)],x.p),c4),C.N,!0)}else{c6=c3.a
b1=c6.r.toLowerCase()
if(C.c.t(b1,"computer"))b2="Computer"
else b2=C.c.t(b1,"local")?"Local":"Online"
a0=x.p
c6=A.a([B.bD4("\u20b9"+c6.d+" \xb7 "+b2,new B.bct(c8),c4,C.k.S(a8,2,4))],a0)
b3=!0
if(!c3.dy)if(!c3.k3){b3=c3.id
b3=b3!=null&&b3>0}if(b3&&!e&&!o){b3=G.im.j(0.88)
b4=A.x(20)
b5=F.R(G.a4.j(0.7),1)
c6.push(new A.a2(G.rl,A.y(c4,A.k(c3.dy||c3.k3?"Rolling\u2026":"This turn: "+A.v(c3.id),c4,c4,c4,c4,c4,D.P5,c4,c4),C.f,c4,c4,new A.u(b3,c4,b5,b4,c4,c4,C.m),c4,c4,c4,c4,A_.rs,c4,c4,c4),c4))}b3=c3.am
if(b3>0&&!e&&!o)c6.push(new B.a4k(b3,10,c4))
b3=A.a([],x.o)
for(b4=[0,1,2,3],b5=c3.gaSW(),b6=0;b6<4;++b6){b7=b4[b6]
b8=l[b7]
b9=g===b7
c0=i===b7
c1=c3.aD3(a1,b7,r,g)
if(!(c3.dy&&b9))c2=c3.k3&&c3.k4===b7
else c2=!0
b3.push(c3.aCe(b8,a3,c1,c0,c0,c2,b9,b7,b5,a5[b7]))}b3=A.a([new B.N1(b3,new B.bcu(c3,a9,l,a5,j,g,a6,a4,i),c4)],a0)
if(o){b4=A.a([H.dY.j(0.9),C.l.j(0.8)],x.O)
b8=A.x(16)
b9=F.R(G.a4.j(0.55),1)
b3.push(new A.bF(C.p,c4,c4,A.y(c4,A.k(p===v?"You won!":"Game over",c4,c4,c4,c4,c4,D.aCY,c4,c4),C.f,c4,c4,new A.u(c4,c4,b9,b8,c4,new F.ai(E.V,C.a_,C.t,b4,c4,c4),C.m),c4,c4,c4,G.rp,D.a4Y,c4,c4,c4),c4))}if(c3.z!=null){b4=C.dA.j(0.8)
b8=A.x(10)
b9=F.R(G.cn.j(0.5),1)
c0=c3.z
c0.toString
b3.push(new A.bF(C.R,c4,c4,A.y(c4,A.k(c0,c4,c4,c4,c4,c4,A2.oK,c4,c4),C.f,c4,c4,new A.u(b4,c4,b9,b8,c4,c4,C.m),c4,c4,c4,Ag.rm,G.rt,c4,c4,c4),c4))}c6.push(F.Q(new A.az(C.C,c4,C.K,C.u,b3,c4),1))
c6.push(H.aw)
if(e){if(c3.Q)b3="Starting match\u2026"
else b3=f>=w?"Table full \u2014 starting\u2026":"Waiting for players "+f+" / "+w
b3=A.k(b3,c4,c4,c4,c4,c4,E.hO,c4,c4)
b4=d?c3.gaVI():c4
b5=A.om(A1.xz,A1.xz.j(0.4),c4,C.h,D.a5c,new A.cB(A.x(16),C.y),c4)
c6.push(new A.a2(D.a4E,F.P(A.a([b3,E.aG,K.me(A.k(c3.Q?"\u2026":"Start game",c4,c4,c4,c4,c4,c4,c4,c4),b4,b5)],a0),E.j,C.i,E.n),c4))}else{b3=c3.dy&&a2
if(a4)b4="Pick a token"
else if(a2)b4="Your Turn"
else{if(c3.gpv())b4=c3.dx||c3.Dt()
else b4=!1
if(b4)b4="Computer playing\u2026"
else b4=c3.Dt()?"Opponent's turn":"Wait"}c6.push(new A.a2(D.Ae,new B.N3(a3,b5,b3,a4?"Move":"Roll Dice",b4,c4),c4))}c6=A.a([F.P(c6,E.j,C.i,E.n)],a0)
if(c3.Q)c6.push(A.bR(0,new A.dl(C.l.j(0.45),D.UU,c4)))
c6=A.cC(!0,new A.az(C.C,c4,C.K,C.u,c6,c4),C.N,!0)}return new Ai.hv(h,new O.tx(A.cO(c4,D.qn,new B.zI(c6,c4),c4),!1,c4),c4)}}
B.Yv.prototype={
aZ(){this.bb()
this.b9()
this.dj()},
l(){var w=this,v=w.aL$
if(v!=null)v.N(0,w.gdd())
w.aL$=null
w.aa()}}
B.ang.prototype={}
B.Yw.prototype={
a4(){this.ag()
B.vL()
$.at.am$.push(new B.bp3(this))},
l(){B.t6()
this.av4()}}
B.a4c.prototype={
u(d){return K.he(new B.Uk(this.c,this.d,null),new B.aDh(this),x.W)}}
B.Uk.prototype={
V(){return new B.afX()}}
B.afX.prototype={
a4(){this.av8()
$.at.ba$.push(this)},
kT(d){if(d===C.cz)if($.jS>0)A.hn()},
l(){$.at.he(this)
this.av7()},
gaWb(){switch(this.a.c.a){case"computer":return"Play against the computer"
case"local":return"Same phone \xb7 pass and play"
default:return"Join a public table"}},
u(d){var w=null
return A.cO(w,C.l,new B.zI(A.cC(!0,K.xV(w,w,new B.bcG(this,this.a.d),x.W,x.B),C.N,!0),w),w)},
zh(d,e){return this.aOF(d,e)},
aOF(d,e){var w=0,v=A.p(x.H),u,t=this,s,r,q
var $async$zh=A.q(function(f,g){if(f===1)return A.m(g,v)
for(;;)switch(w){case 0:q={}
w=t.a.c.a==="local"?3:4
break
case 3:q={}
q.a=!1
w=5
return A.e(F.uq(d,C.bg,new B.bcx(q,t,e).$0(),"assets/anim/ludo.json"),$async$zh)
case 5:s=t.c
if(s==null){w=1
break}if(!q.a){r=K.aD(s,!1,x.W).c.d
if(r==null)r="Could not deduct table amount"
d.X(x.q).f.b4(F.c8(null,null,null,null,null,C.u,null,A.k(r,null,null,null,null,null,null,null,null),null,E.a0,null,null,null,null,null,null,null,null,null,null))
w=1
break}O.ZD(d,new B.N_(B.bT7(0,B.a4h(e.b)),!1,null),x.X)
w=1
break
case 4:q.a=null
w=6
return A.e(F.uq(d,C.bg,new B.bcy(q,t,e).$0(),"assets/anim/ludo.json"),$async$zh)
case 6:s=t.c
if(s==null){w=1
break}q=q.a
if(q==null||q.length===0){r=K.aD(s,!1,x.W).c.d
if(r==null)r="Could not join table"
d.X(x.q).f.b4(F.c8(null,null,null,null,null,C.u,null,A.k(r,null,null,null,null,null,null,null,null),null,E.a0,null,null,null,null,null,null,null,null,null,null))
w=1
break}s=t.a.c
O.ZD(d,new B.ER(q,e.a,e.b,s.d,s.c,null),x.X)
case 1:return A.n(u,v)}})
return A.o($async$zh,v)}}
B.afJ.prototype={
u(d){var w=this,v=null,u=x.p,t=A.a([new B.zF(H.f_,w.e,38,v),H.bZ],u),s=D.me.j(0.92),r=A.x(20),q=F.R(G.a4.j(0.45),1)
t.push(A.y(v,F.S(A.a([A.ah(M.et,D.cF.j(0.95),v,v,15),G.aO,A.k(""+w.f+" Players",v,v,v,v,v,G.oN,v,v)],u),E.j,C.i,E.v,0),C.f,v,v,new A.u(s,v,q,r,v,v,C.m),v,v,v,v,G.he,v,v,v))
return new A.a2(D.a4B,F.P(A.a([F.S(t,E.j,C.i,E.n,0),H.bx,F.cQ(C.p,K.Gb(H.wB,A.k(w.c,v,1,v,v,v,D.aAh,v,v),new B.b9h()),E.as),Q.b_,A.k(w.d,v,v,v,v,v,A.B(v,v,C.h.j(0.62),v,v,v,v,v,v,v,v,13,v,v,C.av,v,v,!0,v,v,v,v,v,v,v,v),v,v),E.aV],u),E.j,C.i,E.n),v)}}
B.Cd.prototype={
u(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.x(16),l=o.d,k=A.a4(D.me,l,0.1)
k.toString
w=x.O
k=A.a([k,D.mE.j(0.96)],w)
v=F.R(G.a4.j(0.38),1)
u=A.a([new A.U(0,C.r,l.j(0.16),E.cI,14),new A.U(0,C.r,C.l.j(0.35),H.br,8)],x.V)
t=A.x(15)
s=A.aH(n,A.ah(G.tn,C.h.j(0.035),n,n,72),n,n,n,86,-10,n)
r=A.a4(l,C.h,0.35)
r.toString
w=A.y(n,n,C.f,n,n,new A.u(n,n,n,n,n,new F.ai(C.R,C.W,C.t,A.a([r,l],w),n,n),C.m),n,n,n,n,n,n,n,5)
l=o.c
r=l.d
r=r.length!==0?r:"TABLE"
q=x.p
r=A.a([A.k(r,n,1,C.H,n,n,A.B(n,n,D.cF.j(0.9),n,n,n,n,n,n,n,n,13,n,n,C.x,n,n,!0,n,n,n,n,n,n,n,n),n,n),H.jw,F.cQ(E.V,A.k("\u20b9 "+B.c_Q(l.a),n,1,n,n,n,D.azq,n,n),E.as)],q)
p=o.e
if(!p)C.b.H(r,A.a([H.bx,A.k(""+l.b+" players",n,n,n,n,n,A.B(n,n,C.h.j(0.55),n,n,n,n,n,n,n,n,11,n,n,C.Q,n,n,!0,n,n,n,n,n,n,n,n),n,n)],q))
return A.y(n,A.dC(t,new A.az(C.C,n,C.K,C.u,A.a([s,F.S(A.a([w,H.cX,D.aKA,H.cX,F.Q(new A.a2(G.fv,F.P(r,E.X,C.a1,E.n),n),1),new B.agL(l.c,l.b,p,n),E.a2,new A.a2(G.A5,new B.ah5(o.f,n),n)],q),E.j,C.i,E.n,0)],q),n),C.ak,n),C.f,n,n,new A.u(n,n,v,m,u,new F.ai(E.T,E.Z,C.t,k,n,n),C.m),n,n,n,n,n,n,n,n)}}
B.abB.prototype={
u(d){var w=null
return A.y(C.p,D.aG5,C.f,w,w,new A.u(w,w,F.R(D.mn,1.4),w,A.a([new A.U(0,C.r,G.a4.j(0.4),C.o,8)],x.V),D.asv,C.F),w,46,w,w,w,w,w,46)}}
B.agL.prototype={
u(d){var w,v,u=null,t=this.c,s=t.split("/"),r=s.length===2,q=r?A.cG(C.c.O(s[0]),u):u,p=r?A.cG(C.c.O(s[1]),u):u
if(q!=null&&p!=null&&p>0&&p<=6){t=x.p
r=A.a([],t)
for(w=0;w<p;++w)r.push(new A.a2(T.Ag,A.ah(H.cR,w<q?D.cF:C.h.j(0.22),u,u,15),u))
return F.P(A.a([F.S(r,E.j,C.i,E.v,0),H.bx,A.k(A.v(q)+" / "+A.v(p),u,u,u,u,u,D.Pd,u,u)],t),E.j,C.i,E.v)}r=A.ah(M.et,D.cF.j(0.9),u,u,16)
t=A.k(t,u,u,u,u,u,G.vB,u,u)
v=this.e?"seated":""+this.d+"P"
return F.P(A.a([r,H.bx,t,A.k(v,u,u,u,u,u,A.B(u,u,C.h.j(0.5),u,u,u,u,u,u,u,u,9,u,u,C.Q,u,u,!0,u,u,u,u,u,u,u,u),u,u)],x.p),E.j,C.i,E.v)}}
B.ah5.prototype={
u(d){var w=null,v=A.x(12),u=A.x(12)
return A.aZ(!1,C.z,!0,w,A.b8(!1,v,!0,K.f_(D.aqG,w,new A.u(w,w,F.R(C.h.j(0.28),1),u,A.a([new A.U(0,C.r,D.em.j(0.35),H.br,8)],x.V),D.aaN,C.m),w,w,w),w,!0,w,w,w,w,w,w,w,w,this.c,w,w,w,w,w,w,w),C.f,C.w,0,w,w,w,w,w,C.G)}}
B.anh.prototype={}
B.Yx.prototype={
a4(){this.ag()
B.vL()
$.at.am$.push(new B.bp4(this))},
l(){B.t6()
this.aa()}}
B.a4i.prototype={
u(d){return new B.Ul(this.c,null)}}
B.Ul.prototype={
V(){return new B.Um()}}
B.Um.prototype={
a4(){this.ava()
$.at.ba$.push(this)},
kT(d){if(d===C.cz)if($.jS>0)A.hn()},
l(){$.at.he(this)
this.av9()},
aC4(){var w=this.c
w.toString
P.m4(w,new B.a4c(this.a.c,this.d,null),x.X)},
u(d){var w=null
return A.cO(w,w,new A.az(C.C,w,C.K,C.u,A.a([A.bR(0,A.eZ(C.bn,G.a23,C.P,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new B.bcK(d),w,w,w,w,w,w)),A.cC(!0,A.aC(new A.a2(D.Al,A.eZ(w,A.cd(new B.bcL(this)),C.P,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new B.bcM(),w,w,w,w,w,w),w),w,w),C.N,!0)],x.p),w),w)}}
B.ani.prototype={}
B.Yy.prototype={
a4(){this.ag()
B.vL()
$.at.am$.push(new B.bp5(this))},
l(){B.t6()
this.aa()}}
B.MZ.prototype={
aH(c0,c1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=this,b6=c1.a,b7=c1.b,b8=Math.min(b6,b7),b9=c0.a
J.b3(b9.save())
b9.translate((b6-b8)/2,(b7-b8)/2)
w=b8/15
b7=b8*0.035
b6=0+b8
v=A.jr(new A.W(0,0,b6,b6),new A.b9(b7,b7))
b7=v.dJ(new A.l(b8*0.006,b8*0.014))
$.af()
u=A.al()
u.r=C.l.j(0.4).gq(0)
u.z=new A.j6(C.r,b8*0.022)
c0.cU(b7,u)
u=A.al()
u.scP(D.aaH.cz(0,new A.W(0,0,b6,b6)))
c0.cU(v,u)
t=new B.aCG(w)
s=new B.aCK()
r=new B.aCJ()
q=new B.aCL()
p=new B.aCI()
o=new B.aCH(s,r,q,p)
n=new B.aCN(o)
m=new B.aCM(o)
l=new B.aCO(s,r,q,p)
for(b6=-(b8*0.001),b7=b8*0.0014,k=0;k<15;++k)for(j=0;j<15;++j){if(!l.$2(j,k))continue
u=t.$2(j,k)
i=u.a-b6
h=u.b-b6
g=u.c+b6
u=u.d+b6
f=new A.W(i,h,g,u)
$.af()
e=new A.en(C.aX,C.aK,C.ba,C.be,C.b9)
e.scP(D.ab5.cz(0,f))
d=e.b5()
b9.drawRect(A.dt(f),d)
d.delete()
a0=new A.en(C.aX,C.aK,C.ba,C.be,C.b9)
a0.r=C.h.j(0.8).gq(0)
e=Math.max(0.7,b7)
a0.c=e
a1=new A.en(C.aX,C.aK,C.ba,C.be,C.b9)
a1.r=C.l.j(0.1).gq(0)
a1.c=e
d=a0.b5()
b9.drawLine.apply(b9,[i,h,g,h,d])
d.delete()
d=a0.b5()
b9.drawLine.apply(b9,[i,h,i,u,d])
d.delete()
d=a1.b5()
b9.drawLine.apply(b9,[i,u,g,u,d])
d.delete()
d=a1.b5()
b9.drawLine.apply(b9,[g,h,g,u,d])
d.delete()}b6=6*w
b7=0+b6
u=b5.b
b5.JE(c0,new A.W(0,0,b7,b7),D.dX,u[0],b8,w)
i=9*w
b6=i+b6
b5.JE(c0,new A.W(i,0,b6,b7),D.em,u[3],b8,w)
b5.JE(c0,new A.W(i,i,b6,b6),D.eP,u[1],b8,w)
b5.JE(c0,new A.W(0,i,b7,b6),D.dM,u[2],b8,w)
b5.rf(c0,w,7,1,7,5,D.em,!0)
b5.rf(c0,w,1,7,5,7,D.dX,!1)
b5.rf(c0,w,7,9,7,13,D.dM,!0)
b5.rf(c0,w,9,7,13,7,D.eP,!1)
b5.rf(c0,w,1,6,1,6,D.dX,!1)
b5.rf(c0,w,8,1,8,1,D.em,!0)
b5.rf(c0,w,13,8,13,8,D.eP,!1)
b5.rf(c0,w,6,13,6,13,D.dM,!0)
$.af()
a2=A.al()
a2.r=H.cE.j(0.5).gq(0)
a2.b=C.ar
a2.c=Math.max(1,b8*0.0026)
a3=A.al()
a3.r=C.h.j(0.3).gq(0)
a3.b=C.ar
a3.c=Math.max(0.7,b8*0.0016)
for(a4=1;a4<15;++a4){a5=a4*w
for(b6=a5+0.6,b7=a4-1,k=0;k<15;++k){if(n.$2(b7,k))continue
u=k*w
i=(k+1)*w
d=a3.b5()
b9.drawLine.apply(b9,[b6,u,b6,i,d])
d.delete()
d=a2.b5()
b9.drawLine.apply(b9,[a5,u,a5,i,d])
d.delete()}}for(a6=1;a6<15;++a6){a7=a6*w
for(b6=a7+0.6,b7=a6-1,j=0;j<15;++j){if(m.$2(j,b7))continue
u=j*w
i=(j+1)*w
d=a3.b5()
b9.drawLine.apply(b9,[u,b6,i,b6,d])
d.delete()
d=a2.b5()
b9.drawLine.apply(b9,[u,a7,i,a7,d])
d.delete()}}b5.aDQ(c0,w,b8)
b6=w*0.36
b5.JC(c0,t.$2(1,6).gb6(),b6,D.dX)
b5.JF(c0,t.$2(1,6),D.dX,0)
b5.JC(c0,t.$2(8,1).gb6(),b6,D.em)
b5.JF(c0,t.$2(8,1),D.em,1.5707963267948966)
b5.JC(c0,t.$2(13,8).gb6(),b6,D.eP)
b5.JF(c0,t.$2(13,8),D.eP,3.141592653589793)
b5.JC(c0,t.$2(6,13).gb6(),b6,D.dM)
b5.JF(c0,t.$2(6,13),D.dM,-1.5707963267948966)
for(b6=w*0.34,b7=b6*0.42,u=b6*0.06,i=b6*0.92,h=b6*0.18,g=b6*0.08,a8=0;a8<4;++a8){e=D.alW[a8]
e=t.$2(e.a,e.b)
a9=e.a
a9+=(e.c-a9)/2
b0=e.b
b0+=(e.d-b0)/2
e=new A.l(a9,b0)
b1=b5.ae8(e,b6,b7)
$.af()
b2=new A.en(C.aX,C.aK,C.ba,C.be,C.b9)
b2.r=C.l.j(0.12).gq(0)
b2.z=new A.j6(C.r,h)
d=b2.b5()
b9.drawCircle(a9,b0+u,i,d)
d.delete()
b0=new A.en(C.aX,C.aK,C.ba,C.be,C.b9)
b0.scP(D.asE.cz(0,A.fj(e,b6)))
d=b0.b5()
b0=b1.gd6().a
b0===$&&A.b()
b0=b0.a
b0.toString
b9.drawPath(b0,d)
d.delete()
b0=new A.en(C.aX,C.aK,C.ba,C.be,C.b9)
b0.b=C.ar
b0.c=Math.max(1,g)
b0.r=C.h.j(0.25).gq(0)
d=b0.b5()
b0=b1.gd6().a
b0===$&&A.b()
b0=b0.a
b0.toString
b9.drawPath(b0,d)
d.delete()}b3=v.cB(-(b8*0.02))
b4=A.bs($.af().w)
b4.a0(new A.hc(v))
b4.a0(new A.hc(b3))
b4.stn(E.lj)
b6=A.al()
b7=v.a
u=v.b
i=v.c
h=v.d
b6.scP(D.abq.cz(0,new A.W(b7,u,i,h)))
c0.de(b4,b6)
b6=A.al()
b6.b=C.ar
b6.c=b8*0.0045
b6.scP(new F.ai(E.T,E.Z,C.t,A.a([G.L.j(0.55),C.h.j(0.12),C.l.j(0.4)],x.O),null,null).cz(0,new A.W(b7,u,i,h)))
c0.cU(v,b6)
b6=A.al()
b6.b=C.ar
b6.c=b8*0.0035
b6.r=G.a4.j(0.35).gq(0)
c0.cU(b3,b6)
b9.restore()},
JE(a5,a6,a7,a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
if(a8)w=a7
else{v=A.a4(a7,C.Ii,0.48)
v.toString
w=v}v=A.a4(w,C.h,0.28)
v.toString
u=A.a4(w,C.l,0.22)
u.toString
t=a9*0.012
s=A.jr(a6,new A.b9(t,t))
t=b0*0.05
r=s.dJ(new A.l(b0*0.035,t))
$.af()
q=A.al()
q.r=C.l.j(0.16).gq(0)
q.z=new A.j6(C.r,b0*0.1)
a5.cU(r,q)
q=A.al()
r=x.O
q.scP(new F.ai(E.T,E.Z,C.t,A.a([v,w,u],r),I.iW,null).cz(0,a6))
a5.cU(s,q)
p=a6.cB(-(b0*0.72))
q=b0*0.35
o=A.jr(p,new A.b9(q,q))
t=o.dJ(new A.l(b0*0.04,t))
q=A.al()
q.r=C.l.j(0.14).gq(0)
q.z=new A.j6(C.r,b0*0.08)
a5.cU(t,q)
q=A.al()
q.scP(D.aal.cz(0,p))
a5.cU(o,q)
q=A.al()
q.b=C.ar
q.c=a9*0.0035
q.r=C.l.j(0.18).gq(0)
a5.cU(o,q)
n=p.gb6().a
m=p.gb6().b
l=b0*0.52
k=b0*1.05
for(v=n-k,u=m-k,t=n+k,q=m+k,q=[new A.l(v,u),new A.l(t,u),new A.l(v,q),new A.l(t,q)],t=l*0.08,v=l*0.3,u=a5.a,j=l*0.95,i=a9*0.0025,h=l*0.06,g=l*0.72,f=a9*0.002,e=0;e<4;++e){d=q[e]
a0=d.a
a1=d.b
a2=new A.en(C.aX,C.aK,C.ba,C.be,C.b9)
a2.r=C.l.j(0.2).gq(0)
a2.z=new A.j6(C.r,v)
a3=a2.b5()
u.drawCircle(a0,a1+t,l,a3)
a3.delete()
a2=new A.en(C.aX,C.aK,C.ba,C.be,C.b9)
a4=A.a4(w,D.zo,0.72)
a4.toString
a2.scP(new K.cx(D.wm,0.5,C.t,null,0,A.a([I.yv,a4,A.a4(w,C.l,0.2).j(0.4)],r),Al.l1,null).cz(0,A.fj(d,l)))
a3=a2.b5()
u.drawCircle(a0,a1,j,a3)
a3.delete()
a2=new A.en(C.aX,C.aK,C.ba,C.be,C.b9)
a2.b=C.ar
a2.c=Math.max(1,i)
a2.r=C.l.j(0.3).gq(0)
a3=a2.b5()
u.drawCircle(a0,a1,j,a3)
a3.delete()
a1=A.fj(new A.l(a0,a1-h),g)
a0=new A.en(C.aX,C.aK,C.ba,C.be,C.b9)
a0.b=C.ar
a0.c=Math.max(1,f)
a0.r=C.h.j(0.55).gq(0)
a3=a0.b5()
u.drawArc.apply(u,[A.dt(a1),206.99999999999997,135,!1,a3])
a3.delete()}},
rf(a2,a3,a4,a5,a6,a7,a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=A.a4(a8,C.h,0.28)
a1.toString
w=A.a4(a8,C.l,0.22)
w.toString
for(v=a2.a,u=x.O,t=-(a3*0.03),s=a3*0.08,r=a4;r<=a6;++r)for(q=r*a3,p=q+a3,o=q-t,n=p+t,m=n+-1,l=a5;l<=a7;++l){k=l*a3
j=k+a3
i=k-t
h=j+t
g=A.jr(new A.W(o,i,n,h),new A.b9(s,s))
$.af()
f=new A.en(C.aX,C.aK,C.ba,C.be,C.b9)
e=a9?C.R:E.V
d=a9?C.W:C.a_
f.scP(new F.ai(e,d,C.t,A.a([a1,a8,w],u),null,null).cz(0,new A.W(q,k,p,j)))
a0=f.b5()
v.drawRRect(A.pc(g),a0)
a0.delete()
g=o+1;++i
k=a9?new A.l(m,i):new A.l(g,h+-1)
j=new A.en(C.aX,C.aK,C.ba,C.be,C.b9)
j.r=C.h.j(0.4).gq(0)
j.c=1.1
a0=j.b5()
v.drawLine.apply(v,[g,i,k.a,k.b,a0])
a0.delete()}},
aDQ(d,e,f){var w,v,u,t,s=7.5*e,r=3*e,q=A.js(new A.l(s,s),r,r),p=e*0.1
p=A.jr(q,new A.b9(p,p))
$.af()
w=A.al()
w.r=C.l.j(0.14).gq(0)
w.z=new A.j6(C.r,e*0.12)
d.cU(p,w)
v=r*0.48
u=v*0.88
w=new B.aCB(d,f)
w.$3(new B.aCF(s,s,v,u).$0(),D.em,C.R)
w.$3(new B.aCE(s,v,s,u).$0(),D.eP,C.a_)
w.$3(new B.aCC(s,s,v,u).$0(),D.dM,C.W)
w.$3(new B.aCD(s,v,s,u).$0(),D.dX,E.V)
w=e*0.18
t=A.jr(q.cB(-(r*0.2)),new A.b9(w,w))
w=t.dJ(D.aqe)
p=A.al()
p.r=C.l.j(0.22).gq(0)
d.cU(w,p)
p=A.al()
p.scP(D.abD.cz(0,new A.W(t.a,t.b,t.c,t.d)))
d.cU(t,p)
p=A.al()
p.b=C.ar
p.c=f*0.0035
p.r=C.l.j(0.28).gq(0)
d.cU(t,p)},
JF(d,e,f,g){var w,v,u,t,s,r,q=e.gb6(),p=e.gdK()*0.4,o=d.a
J.b3(o.save())
o.translate(q.a,q.b)
d.a15(0,g)
w=A.bs($.af().w)
v=-p
u=v*0.35
w.a0(new A.dF(u,v*0.45))
w.a0(new A.bz(p*0.55,0))
w.a0(new A.bz(u,p*0.45))
w.a0(new A.fd())
u=A.al()
t=A.a4(f,C.h,0.4)
t.toString
s=A.a4(f,C.l,0.2)
s.toString
r=v+p*2
u.scP(new F.ai(C.R,C.W,C.t,A.a([t,f,s],x.O),null,null).cz(0,new A.W(v,v,r,r)))
d.de(w,u)
u=A.al()
u.b=C.ar
u.c=Math.max(1,p*0.08)
u.r=C.l.j(0.4).gq(0)
d.de(w,u)
o.restore()},
JC(d,e,f,g){var w,v,u,t=this.ae8(e,f,f*0.42)
$.af()
w=A.al()
v=A.a4(g,C.h,0.45)
v.toString
u=A.a4(g,C.l,0.25)
u.toString
w.scP(new K.cx(A0.wn,0.5,C.t,null,0,A.a([v,g,u],x.O),null,null).cz(0,A.fj(e,f)))
d.de(t,w)
w=A.al()
w.b=C.ar
w.c=Math.max(1,f*0.1)
w.r=C.l.j(0.45).gq(0)
d.de(t,w)},
ae8(d,e,f){var w,v,u,t,s,r,q,p,o=A.bs($.af().w)
for(w=o.e,v=d.a,u=d.b,t=0;t<10;++t){s=t*3.141592653589793/5-1.5707963267948966
r=(t&1)===0?e:f
q=v+r*Math.cos(s)
p=u+r*Math.sin(s)
if(t===0){q=new A.dF(q,p)
w.push(q)
p=o.d
if(p!=null)q.c2(p)}else{q=new A.bz(q,p)
w.push(q)
p=o.d
if(p!=null)q.c2(p)}}o.a0(new A.fd())
return o},
cj(d){return!A.dZ(d.b,this.b)}}
B.f8.prototype={
n(d,e){if(e==null)return!1
return e instanceof B.f8&&e.a===this.a&&e.b===this.b},
gG(d){return A.ar(this.a,this.b,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)}}
B.aCT.prototype={}
B.jq.prototype={}
B.jR.prototype={
N9(d,e){var w,v
if(e.c||e.b>=56)return D.HW
if(e.a)return null
w=e.b
if(w<=50)return this.a.a[C.k.ac(D.Cb[d]+w,52)]
if(w<56){v=D.afS[d]
return v[w-51]}return D.HW},
p7(d,e){if(e.a||e.c||e.b>50)return null
return C.k.ac(D.Cb[d]+e.b,52)},
Y7(d,e){if(d<1||d>6)return!1
if(e.c)return!1
if(e.a)return d===6
if(e.b+d>56)return!1
return!0},
agV(d,e,f,g){var w,v,u=J.C(d[e],g)
if(!this.Y7(f,u))return null
if(u.a){J.em(d[e],g,D.HZ)
return null}w=u.b+f
if(w>=56)J.em(d[e],g,D.u9)
else{v=d[e]
J.em(v,g,new B.jq(!1,w,u.c))}return this.Z0(d,e)},
Z0(d,e){var w,v,u,t,s,r,q
if(e<0||e>=d.length)return null
for(w=x.t,v=null,u=0;u<J.au(d[e]);++u){t=this.p7(e,J.C(d[e],u))
if(t==null||D.ou.t(0,t))continue
for(s=0;s<d.length;++s){if(s===e)continue
for(r=0;r<J.au(d[s]);++r){q=J.C(d[s],r)
if(q.a||q.c)continue
if(this.p7(s,q)!==t)continue
J.em(d[s],r,D.fD)
if(v==null)v=A.a([s,r],w)}}}return v},
alS(d,e,f){var w,v
if(D.ou.t(0,f))return!1
for(w=0;w<d.length;++w){if(w===e)continue
for(v=0;v<J.au(d[w]);++v)if(this.p7(w,J.C(d[w],v))===f)return!0}return!1},
a06(d,e,f){var w,v=A.a([],x.t)
for(w=0;w<4;++w)if(this.Y7(f,J.C(d[e],w)))v.push(w)
return v},
baJ(d){return C.b.f9(d,new B.aCQ())},
a07(d,e,f,g){var w,v,u,t,s,r,q,p=A.a([],x.e)
if(f.a){p.push(new B.vH(B.bTf(d,g),B.bTg(d,g)))
w=this.N9(d,D.HZ)
if(w!=null)p.push(new B.vH(w.a+0.5,w.b+0.5))
return p}v=this.N9(d,f)
if(v!=null)p.push(new B.vH(v.a+0.5,v.b+0.5))
for(u=f.b,t=1;t<=e;++t){s=u+t
if(s>56)break
r=s>=56
q=this.N9(d,r?D.u9:new B.jq(!1,s,!1))
if(q==null)continue
p.push(new B.vH(q.a+0.5,q.b+0.5))
if(r)break}return p}}
B.vH.prototype={}
B.a4l.prototype={}
B.a4a.prototype={
u(a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=d.c/15,a2=a1*0.78,a3=a1*0.96,a4=A.a([],x._)
for(w=d.f,v=d.e,u=d.Q,t=u!=null,s=d.d,r=0;r<4;++r){if(!s[r])continue
for(q=100+r,p=200+r*4,o=0;o<4;++o){if(t&&u.a===r&&u.b===o)continue
n=J.C(v[r],o)
if(n.a&&!n.c){m=B.aCP(r)
l=o!==0
k=!l||o===2?-1.05:1.05
j=B.aCP(r)
i=!l||o===1?-1.05:1.05
a4.push(new B.xl(r,o,new B.f8(p+o,0),m.a+k,j.b+i,!1))}else{m=w.N9(r,n)
if(m==null)continue
l=n.c
a4.push(new B.xl(r,o,l?new B.f8(q,100):m,a0,a0,l))}}}h=A.F(x.T,x.g)
for(w=a4.length,g=0;g<a4.length;a4.length===w||(0,A.Y)(a4),++g){f=a4[g]
J.e_(h.cb(0,f.c,new B.aCS()),f)}w=A.a([],x.p)
for(v=a4.length,g=0;g<a4.length;a4.length===v||(0,A.Y)(a4),++g){e=a4[g]
s=e.c
q=h.h(0,s)
q.toString
q=J.bto(q,e)
s=h.h(0,s)
s.toString
w.push(d.aX8(a1,e,q,J.au(s),a3,a2))}if(t&&u.c.length!==0){v=u.a
t=u.b
w.push(new B.TR(a1,a2,a3,u.c,d.r[v],110,new A.d5("hop-"+v+"-"+t,x.i)))}return new A.az(C.C,a0,C.at,C.u,w,a0)},
aX8(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o=this,n=null,m=g>1,l=m?Math.cos(f*2*3.141592653589793/g)*d*0.18:0,k=m?Math.sin(f*2*3.141592653589793/g)*d*0.18:0
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
r=B.bJd(d*15,d,u,s,l+w,k+v,h,i)
q=o.y&&e.a===o.w&&C.b.t(o.x,e.b)
p=!t&&q
m=q?new B.aCR(o,e):n
return A.aH(n,A.eZ(n,B.bD3(o.r[e.a],h,!1,q,i,p),C.P,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,m,n,n,n,n,n,n),n,n,r.a,n,r.b,n)}}
B.TR.prototype={
V(){return new B.aeS(null,null)}}
B.aeS.prototype={
a4(){var w,v=this
v.ag()
w=v.a
w=A.bb(null,A.cc(0,Math.max(1,w.f.length-1)*w.w,0),0,null,1,null,v)
w.bC(0)
v.d!==$&&A.b1()
v.d=w},
l(){var w=this.d
w===$&&A.b()
w.l()
this.auN()},
aR8(d){var w,v,u,t,s,r,q,p=this.a.f
if(p.length<=1)return C.b.gW(p)
w=C.d.S(d,0,1)*(p.length-1)
v=C.k.S(C.d.fd(w),0,p.length-2)
u=C.bu.a2(0,w-v)
t=p[v]
s=p[v+1]
r=t.a
q=t.b
return new B.vH(r+(s.a-r)*u,q+(s.b-q)*u)},
u(d){var w,v,u,t=this.d
t===$&&A.b()
w=this.a
v=w.d
u=w.e
return A.co(t,new B.b7N(this),B.bD3(w.r,u,!0,!1,v,!1))}}
B.a4d.prototype={
u(d){var w,v,u,t=this,s=null,r=t.c,q=t.d,p=A.a([],x.V),o=t.f
if(o){w=t.e.j(0.55)
v=t.r
u=v?14:9
p.push(new A.U(v?1.5:0.5,C.r,w,C.o,u))}if(t.r)p.push(new A.U(0,C.r,C.h.j(0.55),C.o,10))
return K.iw(s,A.dm(s,s,s,new B.a4e(t.e,o,t.w,s),new A.a1(r,q)),s,C.a9,new A.u(s,s,s,s,p,s,C.m),C.z,s,q,s,s,r)}}
B.a4e.prototype={
aH(b3,b4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=null,a7=b4.a,a8=b4.b,a9=a7/2,b0=this.b,b1=this.d,b2=A.a4(b0,C.h,b1?0.45:0.32)
b2.toString
w=A.a4(b0,C.l,0.38)
w.toString
v=A.a4(b0,C.l,0.55)
v.toString
u=$.af()
t=A.al()
t.r=C.l.j(b1?0.22:0.38).gq(0)
t.z=new A.j6(C.r,b1?2.5:3.5)
s=a7*0.04
r=b1?0.62:0.78
q=b1?0.08:0.12
b3.mo(A.js(new A.l(a9+s,a8*0.92),a8*q,a7*r),t)
p=a8*0.62
o=a8*0.9
n=(p+o)/2
m=a7*0.42
r=o-p
l=r/2
u=u.w
k=A.bs(u)
k.a0(new A.iU(A.js(new A.l(a9,n),l*2,m*2)))
j=A.al()
q=x.O
j.scP(new F.ai(E.T,E.Z,C.t,A.a([b2,b0,w],q),I.iW,a6).cz(0,new A.W(0,p,0+a7,p+r)))
b3.de(k,j)
i=A.al()
i.b=C.ar
r=i.c=Math.max(1,s)
i.r=C.h.j(0.35).gq(0)
h=l*0.15
b3.FO(A.js(new A.l(a9,n-h),l*1.1,m*1.7),3.6128315516282616,2.199114857512855,!1,i)
h=A.js(new A.l(a9,n+h),l*1.2,m*1.85)
g=A.al()
g.b=C.ar
g.c=Math.max(1.2,a7*0.05)
g.r=v.j(0.55).gq(0)
b3.FO(h,0.15,2.199114857512855,!1,g)
f=a8*0.34
e=a8*0.52
d=A.bs(u)
g=a7*0.16
d.a0(new A.dF(a9-g,f))
h=a7*0.2
v=a7*0.28
a0=a8*0.02
a1=p+a0
d.a0(new A.w2(a9-h,e,a9-v,a1))
a2=a8*0.06
d.a0(new A.w2(a9,p+a2,a9+v,a1))
d.a0(new A.w2(a9+h,e,a9+g,f))
d.a0(new A.fd())
a3=A.al()
g=a7*0.3
h=a9-g
a3.scP(new F.ai(D.Qm,D.Qy,C.t,A.a([b2,b0,w],q),D.aez,a6).cz(0,new A.W(h,f,h+a7*0.6,f+(p-f))))
b3.de(d,a3)
u=A.bs(u)
u.a0(new A.dF(a9-a7*0.1,f+a0))
u.a0(new A.w2(a9-a7*0.14,e,a9-a7*0.18,p))
u.a0(new A.w2(a9-a7*0.08,e,a9-s,f+a8*0.04))
u.a0(new A.fd())
s=A.al()
s.r=C.h.j(0.22).gq(0)
b3.de(u,s)
s=a8*0.28
a4=new A.l(a9,s)
a5=A.al()
v=A.a4(b0,C.h,b1?0.62:0.5)
v.toString
a5.scP(new K.cx(D.QA,0.95,C.t,a6,0,A.a([v,b2,b0,w],q),D.agk,a6).cz(0,A.fj(a4,g)))
b3.c7(a4,g,a5)
b0=A.al()
b0.b=C.ar
v=this.c
b0.c=v?Math.max(1.6,a7*0.06):r
b0.r=(v?C.h.j(0.95):C.l.j(0.28)).gq(0)
b3.c7(a4,g,b0)
b0=g*0.38
b0=A.js(new A.l(a9-g*0.32,s-b0),b0,g*0.55)
u=A.al()
u.r=C.h.j(b1?0.85:0.72).gq(0)
b3.mo(b0,u)
b0=A.al()
b0.r=C.h.j(0.35).gq(0)
b3.c7(new A.l(a9+g*0.18,s-g*0.15),g*0.08,b0)
b0=a7*0.38
g=A.js(new A.l(a9,f+a8*0.01),a2,b0)
s=A.al()
v=a9-a7*0.19
s.scP(new F.ai(E.V,C.a_,C.t,A.a([b2,w],q),a6,a6).cz(0,new A.W(v,f,v+b0,f+a2)))
b3.mo(g,s)},
cj(d){return!d.b.n(0,this.b)||d.c!==this.c||d.d!==this.d}}
B.xl.prototype={}
B.Yh.prototype={
l(){var w=this,v=w.ao$
if(v!=null)v.N(0,w.gcl())
w.ao$=null
w.aa()},
aZ(){this.bb()
this.b9()
this.cm()}}
B.MS.prototype={}
B.lC.prototype={
p(d){return this.a},
$ibQ:1}
B.t7.prototype={}
B.vI.prototype={
aH(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=this.b
if(k<=0)return
w=e.gdK()*0.11
$.af()
v=A.al()
v.r=G.pW.gq(0)
u=e.a
t=u/2
s=e.b
r=s/2
q=u*0.22
p=s*0.22
u-=q
s-=p
o=[new A.l(q,p),new A.l(t,p),new A.l(u,p),new A.l(q,r),new A.l(t,r),new A.l(u,r),new A.l(q,s),new A.l(t,s),new A.l(u,s)]
for(k=D.aoE.h(0,C.k.S(k,1,6)),u=k.length,s=d.a,n=0;n<u;++n){m=o[k[n]]
l=v.b5()
s.drawCircle(m.a,m.b,w,l)
l.delete()}},
cj(d){return d.b!==this.b}}
B.MT.prototype={
V(){return new B.afU(C.bF)}}
B.afU.prototype={
a4(){var w,v=this
v.ag()
w=v.a.d
v.e=w>0?C.k.S(w,1,6):1
if(v.a.e)v.aef()},
aP(d){var w,v,u,t=this
t.b1(d)
w=t.a
v=w.e
if(v&&!d.e)t.aef()
else{v=!v
if(v&&d.e)t.aW4(w.d)
else{if(v){u=w.d
u=u!==d.d&&u>0}else u=!1
if(u)t.e=C.k.S(w.d,1,6)
else if(t.f&&v&&w.d>0)t.e=C.k.S(w.d,1,6)}}},
aef(){var w=this,v=w.d
if(v!=null)v.U(0)
w.f=!1
v=Date.now()
w.a.f.hN(0,!0)
w.d=A.fz(E.kD,new B.ba6(w,new A.c5(v,0,!1)))},
aFA(){var w,v=this,u=v.d
if(u!=null)u.U(0)
v.d=null
v.f=!0
u=v.a.f
w=u.r
if(w!=null&&w.a!=null){u.bB(0)
v.a.f.sq(0,0)}if(v.c==null)return
v.E(new B.ba4())},
aW4(d){var w,v,u=this,t=u.d
if(t!=null)t.U(0)
u.d=null
t=u.f=!1
w=u.a.f
v=w.r
if(v!=null?v.a!=null:t){w.bB(0)
u.a.f.sq(0,0)}if(u.c==null)return
u.E(new B.ba7(u,d))},
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
o=p?C.h:C.k_
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
j=F.rh(A.dm(k,k,new A.d5(w,x.k),new B.vI(w,k),new A.a1(j,j)),E.kD,F.r0(),C.bR,C.cQ,new B.ba8())}else{j=j.r||j.e?G.pW:C.b2
p=A.aC(A.k("?",k,k,k,k,k,A.B(k,k,j,k,k,k,k,k,k,k,k,p*0.38,k,k,C.D,k,1,!0,k,k,k,k,k,k,k,k),k,k),k,k)
j=p}return A.co(v,new B.ba9(l),A.eZ(k,A.dG(K.iw(k,j,k,C.a9,new A.u(o,k,s,n,u,k,C.m),C.bS,k,q,k,new A.A(m,m,m,m),q),r),C.P,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,t,k,k,k,k,k,k))}}
B.a4f.prototype={
u(d){var w,v,u,t,s=this,r=null,q=x.p,p=A.a([new B.zF(H.bL,s.c,36,r),H.aU,new B.zF(G.c6,new B.aDj(d),36,r)],q),o=s.d
if(o!=null)C.b.H(p,A.a([H.aU,new B.zF(Ab.kT,o,36,r)],q))
p=F.S(p,E.j,C.i,E.v,0)
o=D.me.j(0.9)
w=A.x(20)
v=F.R(G.a4.j(0.35),1)
w=F.Q(F.P(A.a([D.a60,Q.b_,F.cQ(C.p,A.y(r,A.k(s.e,r,1,r,r,!1,A.B(r,r,C.h.j(0.85),r,r,r,r,r,r,r,r,11,r,r,C.Q,r,r,!0,r,0.3,r,r,r,r,r,r),r,r),C.f,r,r,new A.u(o,r,v,w,r,r,C.m),r,r,r,r,H.hd,r,r,r),E.as)],q),E.j,C.i,E.n),1)
v=A.a([],q)
o=D.me.j(0.92)
u=A.x(20)
t=F.R(G.a4.j(0.4),1)
v.push(A.y(r,F.S(A.a([A.ah(M.et,D.cF.j(0.95),r,r,16),G.aO,A.k(""+s.f+" Players",r,r,r,r,r,D.Pd,r,r)],q),E.j,C.i,E.v,0),C.f,r,r,new A.u(o,r,t,u,r,r,C.m),r,r,r,r,G.he,r,r,r))
return new A.a2(D.a4q,F.P(A.a([F.S(A.a([p,w,F.S(v,E.j,C.i,E.v,0)],q),E.j,C.i,E.n,0),E.aG,A.y(r,r,C.f,r,r,new A.u(r,r,r,r,r,new F.ai(E.V,C.a_,C.t,A.a([C.w,G.a4.j(0.45),C.w],x.O),r,r),C.m),r,1,r,E.ce,r,r,r,r)],q),E.j,C.i,E.n),r)}}
B.afZ.prototype={
u(d){var w,v=null,u=x.u,t=A.ah(A_.Bx,D.cF,v,A.a([new A.c0(G.a4.j(0.55),C.o,6)],u),15)
$.af()
w=A.al()
w.scP(D.aaT.cz(0,D.aus))
return F.S(A.a([D.aLu,T.Oh,t,H.d9,A.k("LUDO",v,v,v,v,v,A.B(v,v,v,v,v,v,v,v,v,v,v,22,v,v,C.D,w,1,!0,v,4.2,v,v,v,A.a([new A.c0(G.a4.j(0.45),C.o,8),Ae.NG],u),v,v),v,v),H.d9,D.aLv],x.p),E.j,C.a1,E.v,0)}}
B.Uv.prototype={
u(d){var w,v,u=null,t=A.x(5),s=this.c,r=A.a4(s,C.h,0.35)
r.toString
w=A.a4(s,C.l,0.25)
w.toString
w=A.a([r,s,w],x.O)
r=A.a([new A.U(0,C.r,s.j(0.45),E.aJ,6)],x.V)
v=F.R(C.h.j(0.35),1)
return A.y(u,A.dm(u,u,u,new B.vI(s.n(0,D.dM)?5:3,u),C.ab),C.f,u,u,new A.u(u,u,v,t,r,new F.ai(E.T,E.Z,C.t,w,u,u),C.m),u,16,u,u,u,u,u,16)}}
B.zF.prototype={
u(d){var w=null,v=this.e,u=F.R(G.a4,1.6),t=A.a([new A.U(0,C.r,G.a4.j(0.22),C.o,8)],x.V)
return A.aZ(!1,C.z,!0,w,A.b8(!1,w,!0,K.f_(A.ah(this.c,D.cF,w,w,v*0.42),w,new A.u(w,w,u,w,t,D.aau,C.F),v,w,v),C.bd,!0,w,w,w,w,w,w,w,w,this.d,w,w,w,w,w,w,w),C.f,C.w,0,w,w,w,w,w,C.G)}}
B.a4k.prototype={
u(d){var w,v,u,t,s,r,q,p,o=null,n=this.c
if(n<=0)return C.ap
w=C.c.fP(C.k.p(C.k.bj(n,60)),2,"0")
v=C.c.fP(C.k.p(C.k.ac(n,60)),2,"0")
u=n<=3
t=C.d.S(n/Math.max(1,this.d),0,1)
s=u?C.dk:D.cF
n=x.p
r=F.S(A.a([A.ah(T.Bi,s,o,o,14),H.aU,A.k("Time left",o,o,o,o,o,A.B(o,o,C.h.j(0.72),o,o,o,o,o,o,o,o,11,o,o,C.Q,o,o,!0,o,0.3,o,o,o,o,o,o),o,o),H.bZ,A.k(w+":"+v,o,o,o,o,o,A.B(o,o,s,o,o,o,o,o,o,o,D.afn,13,o,o,C.x,o,o,!0,o,0.6,o,o,o,o,o,o),o,o)],n),E.j,C.i,E.n,0)
q=A.x(99)
p=C.h.j(0.08)
return new A.a2(D.a4N,F.P(A.a([r,H.aw,A.dC(q,new A.G(o,4,new A.az(C.C,o,C.at,C.u,A.a([new A.dl(p,o,o),A5.axP(E.V,A.bJ(o,new A.u(o,o,o,o,o,new F.ai(E.V,C.a_,C.t,u?D.agL:D.acU,o,o),C.m),C.Y),o,t)],n),o),o),C.ak,o)],n),E.j,C.i,E.n),o)}}
B.a4g.prototype={
u(d){var w=this.r?this.y:D.QE
return A.co(w,new B.aDk(this,44,28),null)},
gaG(d){return this.d}}
B.N1.prototype={
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
v.push(F.Q(new A.a2(G.iB,A.cd(new B.aDi(this)),null),1))
if(s.length!==0)v.push(new B.Wk(s,null))
return F.P(v,E.j,C.i,E.n)}}
B.Wk.prototype={
u(d){var w,v,u,t=x.p,s=A.a([],t)
for(w=this.c,v=0;v<w.length;++v){u=A.a([],t)
if(v>0)u.push(G.Of)
u.push(new F.ed(1,E.cl,w[v],null))
C.b.H(s,u)}return new A.a2(D.a4z,F.S(s,E.j,C.i,E.n,0),null)}}
B.zH.prototype={
u(d){var w,v,u,t,s=null,r=new Float64Array(16),q=new A.bl(r)
q.bU()
r[11]=0.00085
q.amU(-0.045)
q.xf(0.01)
r=this.c
w=r+10
v=A.x(16)
u=A.a([new A.U(1,C.r,this.e.j(0.22),C.o,26),new A.U(0,C.r,D.kl.j(0.28),C.o,30),new A.U(0,C.r,C.l.j(0.62),D.Iw,24)],x.V)
t=F.R(G.a4.j(0.45),1.3)
return A.oX(C.p,A.y(s,A.dC(A.x(12.5),new A.G(r,r,this.d,s),C.ak,s),C.f,s,s,new A.u(s,s,t,v,u,D.aaF,C.m),s,w,s,s,D.a5L,s,s,w),s,q,!0)}}
B.N3.prototype={
u(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.c,k=l||n.e,j=k?1:0.45
l=l&&!n.e?n.d:m
w=A.x(16)
v=A.x(16)
u=k?D.ags:D.agE
t=F.R(k?G.a4.j(0.9):C.h.j(0.14),1.4)
s=x.V
r=A.a([],s)
if(k)r.push(new A.U(0,C.r,D.kl.j(0.35),E.cI,14))
q=A.x(8)
s=A.a([new A.U(0,C.r,C.l.j(0.25),E.aJ,4)],s)
p=n.e
s=A.y(m,A.dm(m,m,m,new B.vI(p?6:5,m),C.ab),C.f,m,m,new A.u(C.h,m,m,q,s,m,C.m),m,36,m,m,A7.na,m,m,36)
q=p?"Rolling\u2026":n.r
q=A.k(q,m,m,m,m,m,A.B(m,m,D.cF.j(0.9),m,m,m,m,m,m,m,m,11,m,m,C.Q,m,1.1,!0,m,m,m,m,m,m,m,m),m,m)
o=x.p
return A.dG(A.aZ(!1,C.z,!0,m,A.b8(!1,w,!0,K.f_(F.S(A.a([s,H.cX,F.P(A.a([q,A.k(p?"Wait":n.f,m,m,m,m,m,D.aAS,m,m)],o),E.X,C.i,E.v)],o),E.j,C.a1,E.n,0),m,new A.u(m,m,t,v,r,new F.ai(C.R,C.W,C.t,u,m,m),C.m),m,D.a4Q,1/0),m,!0,m,m,m,m,m,m,m,m,l,m,m,m,m,m,m,m),C.f,C.w,0,m,m,m,m,m,C.G),j)}}
B.zI.prototype={
u(d){var w=null,v=A.a([D.a26,D.a2V,A.bJ(w,new A.u(w,w,w,w,w,new F.ai(C.R,C.W,C.t,A.a([D.WF.j(0.55),C.w,D.a0J.j(0.72)],x.O),I.iW,w),C.m),C.Y),D.a2I],x.p)
C.b.H(v,this.aCg())
v.push(D.a9e)
v.push(this.c)
return new A.az(C.C,w,C.at,C.u,v,w)},
aCg(){var w,v,u=null,t=A.a([],x.p)
for(w=x.O,v=0;v<4;++v)t.push(new A.bF(D.alY[v],u,u,A.y(u,u,C.f,u,u,new A.u(u,u,u,u,u,new K.cx(C.p,0.5,C.t,u,0,A.a([D.e6[D.Cc[v]].j(0.16),D.e6[D.Cc[v]].j(0)],w),u,u),C.F),u,220,u,u,u,u,u,220),u))
return t}}
B.afW.prototype={
aH(b0,b1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8=null,a9=new A.ua()
a9.uw(11)
w=b1.a
v=b1.b
u=w*0.5
t=[new A.f1(new A.l(w*0.2,v*0.1),w*0.4,D.y8),new A.f1(new A.l(w*0.82,v*0.16),w*0.36,D.a04),new A.f1(new A.l(u,v*0.48),u,D.a1t),new A.f1(new A.l(w*0.12,v*0.82),w*0.34,D.kl),new A.f1(new A.l(w*0.9,v*0.78),w*0.32,D.XI)]
for(s=x.O,r=b0.a,q=0;q<5;++q){p=t[q]
o=p.a
n=p.b
m=p.c
$.af()
p=new A.en(C.aX,C.aK,C.ba,C.be,C.b9)
p.scP(new K.cx(C.p,0.5,C.t,a8,0,A.a([m.j(0.18),m.j(0)],s),a8,a8).cz(0,A.fj(o,n)))
l=p.b5()
r.drawCircle(o.a,o.b,n,l)
l.delete()}$.af()
k=A.al()
k.b=C.ar
k.c=1
k.r=C.h.j(0.025).gq(0)
j=b1.gdK()*0.11
for(i=-j,p=v+j,h=w+j,g=j*0.5,f=j*0.28,e=i;e<p;e+=j)for(d=e+g,a0=d-f,a1=i;a1<h;a1+=j){a2=a1+g
a3=A.bs($.af().w)
a4=new A.dF(a2,a0)
a5=a3.e
a5.push(a4)
a6=a3.d
if(a6!=null)a4.c2(a6)
a4=new A.bz(a2+f,d)
a5.push(a4)
a6=a3.d
if(a6!=null)a4.c2(a6)
a4=new A.bz(a2,d+f)
a5.push(a4)
a6=a3.d
if(a6!=null)a4.c2(a6)
a4=new A.bz(a2-f,d)
a5.push(a4)
a6=a3.d
if(a6!=null)a4.c2(a6)
a4=new A.fd()
a5.push(a4)
a5=a3.d
if(a5!=null)a4.c2(a5)
l=k.b5()
a3=a3.gd6().a
a3===$&&A.b()
a3=a3.a
a3.toString
r.drawPath(a3,l)
l.delete()}for(a7=0;a7<64;++a7){p=a9.b7()
h=a9.b7()
g=a9.b7()
$.af()
a0=new A.en(C.aX,C.aK,C.ba,C.be,C.b9)
a0.r=C.h.j(0.12+a9.b7()*0.28).gq(0)
l=a0.b5()
r.drawCircle(p*w,h*v,0.5+g*1.3,l)
l.delete()}v*=0.06
w*=0.28
$.af()
r=A.al()
r.scP(new K.cx(C.p,0.5,C.t,a8,0,A.a([G.a4.j(0.07),G.a4.j(0)],s),a8,a8).cz(0,A.fj(new A.l(u,v),w)))
b0.c7(new A.l(u,v),w,r)},
cj(d){return!1}}
var z=a.updateTypes(["am<~>()","~()","~(@)","Cd(t,r)","L(jq)","am<T<hj>>(r)","T<hj>(T<hj>)","r(t9,t9)","vM(t,ab<h,@>)","~(r,r)","c(K)","hD(t)","uz(t)","tH(t)","iY<r>(r)","~(T<T<jq>>)","zH(K)","zG(t)","km(t,q7)","De(t,ad)","ed(r)","T<xl>()","hN(t,c?)"])
B.aCr.prototype={
$1(d){return d.b===this.a},
$S:233}
B.aCs.prototype={
$1(d){return d.b===this.a},
$S:233}
B.aCq.prototype={
$1(d){return J.J(d)},
$S:34}
B.aCt.prototype={
$1(d){return d},
$S:110}
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
B.brM.prototype={
$2(d,e){var w=A.aQ(J.C(e,"mode"))
if(w==null)w="online"
if(w==="online")return D.aoe
return new B.vM(new B.a4i(B.bTk(w),null),null)},
$S:z+8}
B.baF.prototype={
$0(){if($.jS>0)A.hn()},
$S:0}
B.baD.prototype={
$1(d){if(this.a.c!=null)this.b.$0()},
$S:2}
B.baE.prototype={
$1(d){return this.a.vo()},
$S:2}
B.baC.prototype={
$1(d){var w=this.a
if(w.c!=null)w.vo()},
$S:2}
B.bap.prototype={
$0(){var w=this.a
w.as=!1
w.at=A.a([],x.t)},
$S:0}
B.baq.prototype={
$1(d){this.a.vo()},
$S:2}
B.bak.prototype={
$0(){return this.a.Q=!0},
$S:0}
B.bal.prototype={
$0(){return this.a.x=this.b.cT(6)+1},
$S:0}
B.bam.prototype={
$0(){return this.a.Q=!1},
$S:0}
B.ban.prototype={
$0(){this.a.Sa()},
$S:0}
B.bao.prototype={
$0(){var w,v=this.a
v.as=!0
w=v.f
w===$&&A.b()
v.at=v.r.a06(w,this.b,this.c)},
$S:0}
B.bab.prototype={
$1(d){this.a.vo()},
$S:2}
B.bac.prototype={
$0(){var w=this,v=w.a
v.as=!1
v.at=A.a([],x.t)
v.ch=new B.a4l(w.b,w.c,w.d)},
$S:0}
B.bad.prototype={
$0(){return this.a.ch=null},
$S:0}
B.bae.prototype={
$0(){var w=this.a
w.as=!1
w.at=A.a([],x.t)},
$S:0}
B.baf.prototype={
$0(){var w=this.a
w.as=!1
w.at=A.a([],x.t)},
$S:0}
B.bag.prototype={
$0(){var w=this.a
w.as=!1
w.at=A.a([],x.t)
w.Sa()},
$S:0}
B.bat.prototype={
$0(){},
$S:0}
B.bau.prototype={
$1(d){var w=null,v=A.x(20),u=A.k(this.b,w,w,w,w,w,A.B(w,w,D.e6[this.c],w,w,w,w,w,w,w,w,w,w,w,C.B,w,w,!0,w,w,w,w,w,w,w,w),w,w)
return K.kd(A.a([K.me(D.aGu,new B.bas(this.a,d),w)],x.p),w,D.mE,D.aGl,w,w,new A.cB(v,C.y),u,w)},
$S:z+11}
B.bas.prototype={
$0(){A.aT(this.b,!1).ep(0,null)
var w=this.a.c
w.toString
A.aT(w,!1).ep(0,null)},
$S:0}
B.bav.prototype={
$0(){return this.a.a.$0()},
$S:0}
B.baw.prototype={
$1(d){var w=this.b.c
if(w==null)return
this.a.a=N.bwA(w)},
$S:2}
B.baj.prototype={
$1(d){var w,v,u=null,t=x.O,s=A.a([M.zf,D.mE,A3.qm],t),r=A.x(22),q=F.R(G.a4.j(0.65),1.5),p=x.V,o=A.a([new A.U(1,C.r,G.a4.j(0.18),C.o,26),new A.U(0,C.r,C.l.j(0.55),H.f4,20)],p)
t=A.a([C.bt.j(0.5),C.dA.j(0.28)],t)
t=A.y(u,M.BD,C.f,u,u,new A.u(u,u,F.R(H.fn.j(0.5),1),u,A.a([new A.U(0,C.r,C.bt.j(0.25),C.o,14)],p),new F.ai(E.T,E.Z,C.t,t,u,u),C.F),u,58,u,u,u,u,u,58)
p=A.k("Your current match will end.\nAll progress will be lost.",u,u,u,u,u,A.B(u,u,C.h.j(0.62),u,u,u,u,u,u,u,u,14,u,u,u,u,1.45,!0,u,u,u,u,u,u,u,u),C.M,u)
w=C.h.j(0.28)
v=x.p
return A9.bA_(A.bJ(new A.a2(M.Ai,F.P(A.a([t,M.jv,D.aGo,E.aV,p,Ac.oC,F.S(A.a([F.Q(K.a5b(Aa.vD,new B.bah(d),A.F9(u,u,u,u,u,u,u,u,u,C.J,u,u,E.eX,u,new A.cB(A.x(12),C.y),new A.aL(w,1,C.E,-1),u,u,u,u)),1),H.cX,F.Q(K.me(A2.Pq,new B.bai(d),A.om(C.bt,u,u,C.h,E.eX,new A.cB(A.x(12),C.y),u)),1)],v),E.j,C.i,E.n,0)],v),E.j,C.i,E.v),u),new A.u(u,u,q,r,o,new F.ai(E.T,E.Z,C.t,s,u,u),C.m),C.Y),400)},
$S:z+12}
B.bah.prototype={
$0(){A.aT(this.a,!1).ep(0,!1)
return null},
$S:0}
B.bai.prototype={
$0(){A.aT(this.a,!1).ep(0,!0)
return null},
$S:0}
B.bay.prototype={
$1(d){return d},
$S:110}
B.baB.prototype={
$2(d,e){if(!d)this.a.CS()},
$S:235}
B.baz.prototype={
$0(){A.aT(this.a,!1).fi(0,A.i2(new B.bax(),null,x.H))},
$S:0}
B.bax.prototype={
$1(d){return G.ND},
$S:z+13}
B.baA.prototype={
$0(){return this.a.aa6()},
$S:0}
B.bar.prototype={
$0(){return this.a.aa6()},
$S:0}
B.bp0.prototype={
$1(d){if(this.a.c!=null)if($.jS>0)A.hn()},
$S:2}
B.baG.prototype={
$0(){var w=this.a.c
w.toString
P.m4(w,new B.vK(D.iY,null),x.X)
return null},
$S:0}
B.baH.prototype={
$0(){var w=this.a.c
w.toString
P.m4(w,new B.vK(D.HX,null),x.X)
return null},
$S:0}
B.baI.prototype={
$0(){var w=this.a.c
w.toString
P.m4(w,new B.vK(D.iY,null),x.X)
return null},
$S:0}
B.baJ.prototype={
$0(){var w=this.a.c
w.toString
P.m4(w,new B.vK(D.HX,null),x.X)
return null},
$S:0}
B.b03.prototype={
$1(d){return this.a.c.$0()},
$S:51}
B.b95.prototype={
$1(d){return D.aba.cz(0,d)},
$S:65}
B.bp1.prototype={
$1(d){if(this.a.c!=null)if($.jS>0)A.hn()},
$S:2}
B.bbr.prototype={
$1(d){var w,v,u,t,s,r=this.a
if(r.c==null)return
if(x.f.b(d)){w=A.an(d,x.N,x.z)
v=w.h(0,"code")
u=J.fN(v)
if(u.n(v,200)||u.n(v,"200")){r.E(new B.bbs(r,w))
t=L.dj(w)
u=t.a
if(u!=null){r.f.sda(0,u)
s=t.d
if(s>0)r.e=s
r.rq(new B.bbt(r,t))
r.V0(u)}r.E(new B.bbu(r))
r.KB()
r.Kz()}else r.E(new B.bbv(r,w))}},
$S:4}
B.bbs.prototype={
$0(){var w=this.a
w.z=this.b
w.x=null},
$S:0}
B.bbt.prototype={
$0(){N.cw("ludo_online").dL("joinRoom",this.a.z5(this.b.a))},
$S:0}
B.bbu.prototype={
$0(){return this.a.Q=!1},
$S:0}
B.bbv.prototype={
$0(){var w=this.a,v=this.b.h(0,"message")
v=v==null?null:J.J(v)
w.x=v==null?"Room create failed":v
w.Q=!1},
$S:0}
B.bbw.prototype={
$1(d){var w,v=this.a
if(v.c==null)return
if(J.f(d,"game_started")){v.rr()
return}if(v.gjl().length===0)return
w=v.ch
if(w!=null)w.U(0)
v.ch=A.c1(A6.kE,new B.bbx(v))},
$S:4}
B.bbx.prototype={
$0(){var w=this.a
if(w.c==null||w.gjl().length===0)return
w.V_(w.gjl())},
$S:0}
B.bby.prototype={
$1(d){var w,v,u,t,s=this.a
if(s.c==null)return
w=x.f
if(w.b(d)){v=A.an(d,x.N,x.z)
if(J.f(v.h(0,"success"),!1)){w=v.h(0,"message")
u=w==null?null:J.J(w)
if(u!=null&&u.length!==0)s.E(new B.bbz(s,u))
return}t=!0
if(!J.f(v.h(0,"success"),!0))if(!w.b(v.h(0,"ludoState"))){w=v.h(0,"gameId")
if(w==null)w=v.h(0,"game_id")
w=(w==null?null:J.J(w).length!==0)===!0
t=w}if(t)s.rr()}},
$S:4}
B.bbz.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.bbI.prototype={
$0(){var w,v,u=this.a
if(L.dj(u.z).gl0())w="All "+u.gnW()+" players ready \u2014 starting match\u2026"
else{w=u.gv7()
v=u.z
w=w.length!==0?"Waiting: "+L.dj(v).e+"/"+u.gnW()+" joined. Share code: "+u.gv7():"Waiting: "+L.dj(v).e+"/"+u.gnW()+" joined. Generating invite code\u2026"}u.y=w},
$S:0}
B.baY.prototype={
$1(d){var w
this.a.d0("connect",this.b.aM())
w=this.c
if((w.a.a&30)===0)w.eR(0)},
$S:4}
B.bb4.prototype={
$0(){var w=this.a
w.z=this.b
w.x=null},
$S:0}
B.bbE.prototype={
$1(d){this.a.V_(this.b)},
$S:14}
B.bbn.prototype={
$0(){var w=this.a
w.y="Lobby full ("+w.gnW()+"/"+w.gnW()+") \u2014 starting match\u2026"},
$S:0}
B.bbF.prototype={
$0(){var w=N.cw("ludo_online"),v=this.a,u=this.b
w.dL("joinRoom",v.z5(u))
w.dL("startGame",v.z5(u))},
$S:0}
B.bbG.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.bbH.prototype={
$0(){return this.a.x=this.b.a},
$S:0}
B.baS.prototype={
$0(){var w=this.a
w.y=w.x=null
w.Q=!0},
$S:0}
B.baT.prototype={
$0(){var w=this.a
w.x="Please log in to continue."
w.Q=!1},
$S:0}
B.baU.prototype={
$0(){var w=this.a
return w.y="Creating room ("+w.e+" players)\u2026"},
$S:0}
B.baV.prototype={
$0(){var w="ludo_online",v=N.cw(w),u=this.a,t=A.d8(u.aMD(),x.N,x.z)
t.k(0,"bootValue",u.d)
t.k(0,"boot_value",u.d)
t.k(0,"noOfPlayers",u.e)
t.k(0,"no_of_players",u.e)
t.k(0,"gameType",w)
t.k(0,"game_type",w)
t.k(0,"private_table",!0)
v.dL("getPrivateTable",t)},
$S:0}
B.baW.prototype={
$0(){var w=this.a
w.x="Could not connect to server \u2014 check network and URL."
w.Q=!1},
$S:0}
B.baX.prototype={
$0(){var w=this.a
if(w.c==null||!w.Q)return
w.E(new B.baR(w))},
$S:9}
B.baR.prototype={
$0(){var w=this.a
w.Q=!1
if(w.gjl().length===0)w.x="No response from server \u2014 timed out."},
$S:0}
B.bbd.prototype={
$0(){var w=this.a
w.y=w.x=null
w.Q=!0},
$S:0}
B.bbe.prototype={
$0(){var w=this.a
w.x="Enter a table ID from your host."
w.Q=!1},
$S:0}
B.bbf.prototype={
$0(){var w=this.a
w.x="Please log in to continue."
w.Q=!1},
$S:0}
B.bbg.prototype={
$0(){var w=this.a.a
if(w!=null)this.b.z=w},
$S:0}
B.bbh.prototype={
$0(){this.b.dL("joinRoom",this.a.z5(this.c))},
$S:0}
B.bbi.prototype={
$0(){var w=this.a
w.x=y.d
w.Q=!1},
$S:0}
B.bbj.prototype={
$0(){var w=this.a
w.y="Joined successfully. Match starts when lobby is full."
w.Q=!1},
$S:0}
B.bbk.prototype={
$0(){var w=this.a
w.x=this.b.a
w.Q=!1},
$S:0}
B.bbl.prototype={
$0(){var w=this.a
w.x=A.v(this.b)
w.Q=!1},
$S:0}
B.bbJ.prototype={
$1(d){return!this.a.aab(d)},
$S:7}
B.baZ.prototype={
$0(){var w=this.a
w.x="Join failed \u2014 could not read table from server. Try again."
w.Q=!1},
$S:0}
B.bb_.prototype={
$0(){return this.b.z=this.a.a},
$S:0}
B.bb0.prototype={
$0(){N.cw("ludo_online").dL("joinRoom",this.b.z5(this.a.b))
return null},
$S:0}
B.bb1.prototype={
$0(){var w=this.a
w.x=y.d
w.Q=!1},
$S:0}
B.bb2.prototype={
$0(){return this.a.Q=!1},
$S:0}
B.bb3.prototype={
$0(){var w=this.a
w.y="Joined by code. Match starts when lobby is full."
w.Q=!1},
$S:0}
B.bb7.prototype={
$0(){var w=this.a
w.y=w.x=null
w.Q=!0},
$S:0}
B.bb8.prototype={
$0(){var w=this.a
w.x="Enter invite code (3\u20134 characters)."
w.Q=!1},
$S:0}
B.bb9.prototype={
$0(){var w=this.a
w.x="Please log in to continue."
w.Q=!1},
$S:0}
B.bba.prototype={
$0(){var w,v=this.b
v.y=v.z=null
w=this.a.a
w=w==null?null:w.a
v.x=w==null?"Join nahi hua \u2014 host ki table pe seat nahi mili. Dono phones pe alag-alag account se login karo, naya room banao, phir code se JOIN karo.":w
v.Q=!1},
$S:0}
B.bbb.prototype={
$0(){var w=this.a
w.x=this.b.a
w.Q=!1},
$S:0}
B.bbc.prototype={
$0(){var w=this.a
w.x=A.v(this.b)
w.Q=!1},
$S:0}
B.bbA.prototype={
$0(){var w=this.a
w.y=w.x=null},
$S:0}
B.bbB.prototype={
$0(){return this.a.x="tableId missing."},
$S:0}
B.bbC.prototype={
$0(){var w=this.a
return w.x="Only "+L.dj(w.z).e+"/"+w.gnW()+" players \u2014 wait for everyone to join."},
$S:0}
B.bbD.prototype={
$0(){return this.a.y="Starting game\u2026"},
$S:0}
B.baM.prototype={
$0(){F.jJ(new F.iW(this.a.gjl()))
this.b.X(x.q).f.b4(I.oD)},
$S:0}
B.baO.prototype={
$1(d){var w=this.a
if(!w.Q)w.lY()},
$S:18}
B.baN.prototype={
$1(d){var w,v=d.toUpperCase()
if(v!==d){w=this.a.w
w.lR(0,w.a.YN(F.nG(C.I,v.length),v))}},
$S:18}
B.baP.prototype={
$0(){F.jJ(new F.iW(this.a.gjl()))
this.b.X(x.q).f.b4(I.oD)},
$S:0}
B.baQ.prototype={
$1(d){return D.abx.cz(0,d)},
$S:65}
B.baK.prototype={
$0(){return A.aT(this.a,!1).oE()},
$S:0}
B.bbp.prototype={
$1(d){var w=null
return P.buq(A.k(""+d+" Players",w,w,w,w,w,w,w,w),d,x.S)},
$S:z+14}
B.bbq.prototype={
$1(d){var w
if(d!=null){w=this.a
w.E(new B.bbo(w,d))}},
$S:236}
B.bbo.prototype={
$0(){return this.a.e=this.b},
$S:0}
B.baL.prototype={
$1(d){var w=this.a,v=A.cG(d,null)
return w.d=v==null?w.d:v},
$S:18}
B.bbK.prototype={
$1(d){var w=this.a,v=w.CW
if(v!=null)v.U(0)
w.CW=null},
$S:18}
B.bb5.prototype={
$0(){var w=$.at.R$.d.c
if(w!=null)w.iC()
this.a.$0()},
$S:0}
B.bbm.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=d<L.dj(r.z).c.length,p=q?L.dj(r.z).c[d]:s,o=p!=null,n=o&&r.aab(p),m=o&&p.length>8?"\u2026"+C.c.bS(p,p.length-6):p
if(q)if(n){o="You"+(r.a.c===D.iY&&d===0?" (Host)":"")
w=o}else{o="Player "+A.v(m)
w=o}else w="Waiting for player\u2026"
r=d<r.gnW()-1?8:0
if(q)o=n?R.cP.j(0.16):G.a4.j(0.18)
else o=C.w
if(q)v=n?R.cP.j(0.55):G.a4.j(0.55)
else v=C.h.j(0.18)
v=F.R(v,1.5)
if(q)u=n?U.iS:H.cR
else u=Ah.tr
if(q)t=n?R.cP:G.e1
else t=C.b2
v=A.y(s,A.ah(u,t,s,s,18),C.f,s,s,new A.u(o,s,v,s,s,s,C.F),s,36,s,s,s,s,s,36)
o=q?C.h.j(0.92):C.h.j(0.42)
return new A.a2(new A.A(0,0,0,r),F.S(A.a([v,H.aT,F.Q(A.k(w,s,s,s,s,s,A.B(s,s,o,s,s,s,s,s,s,s,s,13,s,s,q?C.Q:C.av,s,s,!0,s,s,s,s,s,s,s,s),s,s),1)],x.p),E.j,C.i,E.n,0),s)},
$S:93}
B.bb6.prototype={
$0(){var w=this.a
F.jJ(new F.iW(w.gv7()))
w.c.X(x.q).f.b4(I.Oo)},
$S:0}
B.bp2.prototype={
$1(d){if(this.a.c!=null)if($.jS>0)A.hn()},
$S:2}
B.bcv.prototype={
$1(d){var w=this.a
if(w.c==null||w.dy||w.fr||w.Q)return
if(w.w||w.dx)return
if(w.gnV()){if(!N.cw(w.a.f).y)w.Ws(!0)}else w.pE()},
$S:14}
B.bcw.prototype={
$1(d){return this.a.aMI()},
$S:14}
B.bch.prototype={
$1(d){var w=this.a,v=w.e
if(v!=null)v.U(0)
w.e=A.c1(C.ct,new B.bcg(w))},
$S:4}
B.bcg.prototype={
$0(){var w=this.a
if(w.c==null||w.w||w.dx)return
if(w.CW!=null||w.dy||w.fr)return
if(w.gnV())w.Ws(!0)
else w.pE()},
$S:0}
B.bci.prototype={
$1(d){return this.a.a7c()},
$S:4}
B.bbO.prototype={
$0(){return this.a.z=this.b},
$S:0}
B.bbQ.prototype={
$0(){var w=this.a
w.y=this.b
w.z=null
w.Ec()},
$S:0}
B.bc_.prototype={
$0(){return this.a.aW=this.b},
$S:0}
B.bcm.prototype={
$0(){this.a.SV()},
$S:0}
B.bcn.prototype={
$0(){return this.a.am=this.b},
$S:0}
B.bbP.prototype={
$0(){var w=this.a
w.z=w.ch=null},
$S:0}
B.bc4.prototype={
$0(){var w,v,u,t,s,r,q,p=this,o=p.c
if(o){s=p.d
if(s==null)s=p.a.a
p.b.x=s}s=p.e
if(s){if(p.f==="waiting"){r=p.r
q=B.oA(r)&&!B.MW(r)}else q=!1
w=q
if(!w){r=p.b
r.y=B.q5(r.y,p.r)}r=J.C(p.r,"status")
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
B.bck.prototype={
$0(){var w=this.a
w.k3=!0
w.k4=this.b
w.ok=new A.c5(Date.now(),0,!1)},
$S:0}
B.bc1.prototype={
$0(){var w,v,u=this.a
u.p1=null
if(u.c==null||!u.k3)return
w=u.p2
v=u.k4
if(w==null||v==null)return
if(B.t3(u.y)==="rolling"&&u.Dt())return
u.E(new B.bc0(u,v,w))},
$S:0}
B.bc0.prototype={
$0(){var w,v,u=this.a
u.k3=!1
u.p2=null
w=this.b
v=this.c
u.Kd(v,w)
u.id=v
u.k1=w},
$S:0}
B.bcl.prototype={
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
B.bbR.prototype={
$0(){return this.a.Q=!0},
$S:0}
B.bbS.prototype={
$0(){return this.a.Q=!1},
$S:0}
B.bc5.prototype={
$0(){var w=this.a
w.dy=!0
w.go=null
w.fx=w.y2.cT(6)+1},
$S:0}
B.bc6.prototype={
$1(d){return this.a.b=d},
$S:585}
B.bc7.prototype={
$1(d){this.a.a=d
return A.F(x.N,x.z)},
$S:586}
B.bc8.prototype={
$0(){var w=this.a
return w.fx=w.y2.cT(6)+1},
$S:0}
B.bc9.prototype={
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
B.bca.prototype={
$0(){return this.a.ch=null},
$S:0}
B.bcb.prototype={
$0(){var w=this.a,v=this.b,u=x.N
u=w.y=B.q5(w.y,A.aa(["dice",v,"ludoState",A.aa(["lastDice",v,"phase","moving"],u,x.K)],u,x.z))
if(u!=null)w.UD(u)},
$S:0}
B.bcc.prototype={
$0(){},
$S:0}
B.bcd.prototype={
$0(){var w=this.a,v=x.N
w.y=B.q5(w.y,A.aa(["dice",0,"ludoState",A.aa(["lastDice",0,"phase","rolling"],v,x.K)],v,x.z))},
$S:0}
B.bce.prototype={
$1(d){var w=this.b
if(w.c==null)return
w.pB(C.b.gW(this.a.c))},
$S:2}
B.bcf.prototype={
$0(){return this.a.dy=!1},
$S:0}
B.bcj.prototype={
$0(){var w=this.a,v=x.N
w.y=B.q5(w.y,A.aa(["dice",0,"ludoState",A.aa(["lastDice",0,"phase","rolling"],v,x.K)],v,x.z))
w.SV()
w.ch=null},
$S:0}
B.bc3.prototype={
$1(d){var w=this.a
w.p4=w.JM(d,!0)},
$S:z+15}
B.bc2.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.J0(this.b,this.c)},
$S:2}
B.bbM.prototype={
$0(){var w=this.a
return w.p4=w.JM(this.b,!0)},
$S:0}
B.bbN.prototype={
$0(){var w=this.a
w.rx=this.b.a[2]
w.p4=w.JM(this.c,!0)
w.p3=null},
$S:0}
B.bbL.prototype={
$0(){var w=this
w.a.p3=new B.a4l(w.b,w.c,w.d)},
$S:0}
B.bbU.prototype={
$0(){var w=this.a
w.p4=w.pq(this.b)},
$S:0}
B.bbV.prototype={
$0(){var w,v=this,u=v.b,t=v.a
u.y=t.b
u.p4=v.c
u.R8=v.d
u.RG=v.e
u.p3=null
w=v.f
if(t.a===6){u.ch=null
u.Lr()}else if(w>=0){u.ch=w
u.SV()}},
$S:0}
B.bbW.prototype={
$0(){var w=this.a
if(w.c==null||w.RG==null)return
w.n3(!0,!0)
w.uU()},
$S:0}
B.bbX.prototype={
$0(){var w,v,u,t=this,s=t.b,r=B.q5(s.y,t.c)
s.y=r
w=t.e
v=t.f
u=J.C(v[t.r],w)
s.y=s.U2(t.a.a,r,t.d,u,w)
s.RG=s.R8=null
s.p4=v
s.Ec()},
$S:0}
B.bbY.prototype={
$0(){var w,v,u,t=this.b
t.RG=t.R8=null
t.p4=this.c
w=t.y
v=this.a.a
u=x.N
u=t.y=B.q5(w,A.aa(["dice",v,"ludoState",A.aa(["lastDice",v,"phase","moving"],u,x.K)],u,x.z))
if(u!=null)t.UD(u)},
$S:0}
B.bbZ.prototype={
$0(){return this.a.Ec()},
$S:0}
B.bbT.prototype={
$0(){var w=this,v=w.c>=w.a.length
if(v)return C.bB
return w.b.a06(w.a,w.c,w.d)},
$S:587}
B.bcq.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.Et(this.b,this.c)
if(w.c!=null)w.E(new B.bcp(w))},
$S:2}
B.bcp.prototype={
$0(){return this.a.db=!1},
$S:0}
B.bcr.prototype={
$1(d){return d},
$S:110}
B.bcs.prototype={
$0(){return A.aT(this.a,!1).oE()},
$S:0}
B.bct.prototype={
$0(){return A.aT(this.a,!1).oE()},
$S:0}
B.bcu.prototype={
$1(d){var w=this,v=null,u=w.c,t=w.r,s=w.a
return new B.zH(d,new A.az(C.C,v,C.at,C.u,A.a([new A.j8(A.dm(C.fa,v,v,new B.MZ(u,v),C.ab),v),B.bD2(s.p3,t,new B.bco(s,w.x,t),D.e6,u,w.e,w.w,d,w.d,w.f)],x.p),v),w.b,v)},
$S:z+16}
B.bco.prototype={
$2(d,e){var w,v=this.a
if(v.dy||v.fr||v.RG!=null)return
w=this.b
if(w<0)return
if(d!==w)return
if(!C.b.t(this.c,e))return
v.pB(e)},
$S:588}
B.bp3.prototype={
$1(d){if(this.a.c!=null)if($.jS>0)A.hn()},
$S:2}
B.aDh.prototype={
$1(d){var w=this.a
x.an.a($.aF.h(0,$.ha()))
w=new B.zG(w.c,w.d,new B.N2(),H.bK,D.aod)
w.hd()
return w},
$S:z+17}
B.bcG.prototype={
$2(d,e){var w=null,v=e.c,u=this.a,t=x.p,s=A.a([new B.afJ(u.a.c.b,u.gaWb(),new B.bcE(d),this.b,w)],t),r=e.d
if(r!=null&&r.length!==0)s.push(new A.a2(D.Ae,A.k(r,w,w,w,w,w,D.aCD,C.M,w),w))
s.push(new A.a2(D.a4S,F.S(A.a([A.k("TABLES",w,w,w,w,w,A.B(w,w,D.cF.j(0.9),w,w,w,w,w,w,w,w,11,w,w,C.x,w,w,!0,w,1.6,w,w,w,w,w,w),w,w),H.aT,F.Q(A.y(w,w,C.f,G.a4.j(0.28),w,w,w,1,w,w,w,w,w,w),1),H.aT,A.k(""+v.length,w,w,w,w,w,A.B(w,w,C.h.j(0.7),w,w,w,w,w,w,w,w,12,w,w,C.B,w,w,!0,w,w,w,w,w,w,w,w),w,w)],t),E.j,C.i,E.n,0),w))
if(e.a)u=D.UR
else u=v.length===0?D.UT:A.cd(new B.bcF(u,v))
s.push(F.Q(u,1))
return F.P(s,E.j,C.i,E.n)},
$S:z+18}
B.bcE.prototype={
$0(){return A.aT(this.a,!1).bg(0)},
$S:0}
B.bcF.prototype={
$2(d,e){var w,v=this
if(e.b>=640){w=v.b
return P.buM(null,D.ay1,new B.bcB(v.a,w),w.length,D.Ab,G.eh)}w=v.b
return P.j5(null,new B.bcC(v.a,w),w.length,D.Ab,G.eh,!1,C.a3,new B.bcD(),!1)},
$S:z+19}
B.bcB.prototype={
$2(d,e){var w=this.b,v=w[e],u=D.e6[C.k.ac(e,4)],t=this.a,s=t.a.c.a
s=s==="computer"||s==="local"
return new B.Cd(v,u,s,new B.bcA(t,d,w,e),null)},
$S:z+3}
B.bcA.prototype={
$0(){var w=this
return w.a.zh(w.b,w.c[w.d])},
$S:0}
B.bcD.prototype={
$2(d,e){return E.aV},
$S:23}
B.bcC.prototype={
$2(d,e){var w=this.b,v=w[e],u=D.e6[C.k.ac(e,4)],t=this.a,s=t.a.c.a
s=s==="computer"||s==="local"
return new B.Cd(v,u,s,new B.bcz(t,d,w,e),null)},
$S:z+3}
B.bcz.prototype={
$0(){var w=this
return w.a.zh(w.b,w.c[w.d])},
$S:0}
B.bcx.prototype={
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
$S:52}
B.bcy.prototype={
$0(){var w=0,v=A.p(x.d),u=this,t,s
var $async$$0=A.q(function(d,e){if(d===1)return A.m(e,v)
for(;;)switch(w){case 0:t=u.b.c
t.toString
s=u.a
w=2
return A.e(K.aD(t,!1,x.W).B0(u.c),$async$$0)
case 2:s.a=e
return A.n(null,v)}})
return A.o($async$$0,v)},
$S:52}
B.b9h.prototype={
$1(d){return D.aaX.cz(0,d)},
$S:65}
B.bp4.prototype={
$1(d){if(this.a.c!=null)if($.jS>0)A.hn()},
$S:2}
B.bcK.prototype={
$0(){return A.aT(this.a,!1).bg(0)},
$S:0}
B.bcM.prototype={
$0(){},
$S:0}
B.bcL.prototype={
$2(d,e){var w,v,u,t=null,s=A.x(22),r=F.R(G.a4.j(0.7),2),q=x.V,p=A.a([new A.U(0,C.r,G.a4.j(0.2),C.o,24),new A.U(0,C.r,C.l.j(0.45),G.o2,24)],q),o=this.a,n=x.C
n=A.ag(new A.as(D.Ch,new B.bcJ(o),n),n.i("aX.E"))
n=F.S(n,E.j,C.i,E.n,0)
w=o.a.c.a==="computer"
v=o.d
v=A.k(w?"You + "+(v-1)+" computer":""+v+" player game",t,t,t,t,t,D.aFh,t,t)
u=x.p
p=A.y(t,F.P(A.a([D.aHg,E.aV,n,M.jv,v,H.aw,A.k(w?"Computer fills empty seats":"Same phone \u2014 pass & play (no computer)",t,t,t,t,t,D.aAO,C.M,t),H.bY,new A.G(200,52,K.me(D.aIh,o.gaC3(),A.om(D.kl,t,4,C.h,t,new A.cB(A.x(14),C.y),t)),t)],u),E.j,C.i,E.v),C.f,t,t,new A.u(D.mE,t,r,s,p,t,C.m),t,t,t,D.a44,D.a4X,t,t,t)
s=A.x(6)
q=A.a([new A.U(0,C.r,D.cF.j(0.35),D.apW,8)],q)
r=A.bDb(-0.02)
return new A.cP(new A.ad(0,1/0,0,e.d*0.92),A.e6(new A.az(C.R,t,C.K,C.f,A.a([p,A.y(t,A.k(o.a.c.a==="computer"?"vs Computer":"Play Local",t,t,t,t,t,D.aB6,t,t),C.f,t,t,new A.u(D.cF,t,t,s,q,t,C.m),t,t,t,t,D.Al,r,t,t)],u),t),t,C.P,t,H.jX,C.a3),t)},
$S:141}
B.bcJ.prototype={
$1(d){var w=null,v=this.a,u=v.d===d,t=u?D.kl:C.dj,s=A.x(10),r=A.x(10)
return F.Q(new A.a2(E.ce,A.aZ(!1,C.z,!0,s,A.b8(!1,r,!0,new A.a2(G.fv,A.aC(A.k(""+d,w,w,w,w,w,A.B(w,w,C.h,w,w,w,w,w,w,w,w,22,w,w,u?C.B:C.Q,w,w,!0,w,w,w,w,w,w,w,w),w,w),w,w),w),w,!0,w,w,w,w,w,w,w,w,new B.bcI(v,d),w,w,w,w,w,w,w),C.f,t,0,w,w,w,w,w,C.G),w),1)},
$S:z+20}
B.bcI.prototype={
$0(){var w=this.a
return w.E(new B.bcH(w,this.b))},
$S:0}
B.bcH.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.bp5.prototype={
$1(d){if(this.a.c!=null)if($.jS>0)A.hn()},
$S:2}
B.aCG.prototype={
$2(d,e){var w=this.a,v=d*w,u=e*w
return new A.W(v,u,v+w,u+w)},
$S:590}
B.aCK.prototype={
$2(d,e){return d<6&&e<6},
$S:54}
B.aCJ.prototype={
$2(d,e){return d>=9&&e<6},
$S:54}
B.aCL.prototype={
$2(d,e){return d>=9&&e>=9},
$S:54}
B.aCI.prototype={
$2(d,e){return d<6&&e>=9},
$S:54}
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
$S:54}
B.aCM.prototype={
$2(d,e){var w=this.a,v=w.$2(d,e),u=w.$2(d,e+1)
return v!=null&&v===u},
$S:54}
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
$S:54}
B.aCF.prototype={
$0(){var w,v=this,u=A.bs($.af().w),t=v.a,s=v.b
u.a0(new A.dF(t,s-v.c))
w=v.d
u.a0(new A.bz(t-w,s))
u.a0(new A.bz(t+w,s))
u.a0(new A.fd())
return u},
$S:125}
B.aCE.prototype={
$0(){var w,v=this,u=A.bs($.af().w),t=v.a,s=v.c
u.a0(new A.dF(t+v.b,s))
w=v.d
u.a0(new A.bz(t,s-w))
u.a0(new A.bz(t,s+w))
u.a0(new A.fd())
return u},
$S:125}
B.aCC.prototype={
$0(){var w,v=this,u=A.bs($.af().w),t=v.a,s=v.b
u.a0(new A.dF(t,s+v.c))
w=v.d
u.a0(new A.bz(t-w,s))
u.a0(new A.bz(t+w,s))
u.a0(new A.fd())
return u},
$S:125}
B.aCD.prototype={
$0(){var w,v=this,u=A.bs($.af().w),t=v.a,s=v.c
u.a0(new A.dF(t-v.b,s))
w=v.d
u.a0(new A.bz(t,s-w))
u.a0(new A.bz(t,s+w))
u.a0(new A.fd())
return u},
$S:125}
B.aCB.prototype={
$3(d,e,f){var w,v,u,t,s=d.gd6().a
s===$&&A.b()
w=A.ul(s.a.getBounds())
s=this.a
$.af()
v=A.al()
u=A.a4(e,C.h,0.38)
u.toString
t=A.a4(e,C.l,0.28)
t.toString
v.scP(new F.ai(f,new A.cy(-f.a,-f.b),C.t,A.a([u,e,t],x.O),null,null).cz(0,w))
s.de(d,v)
v=A.al()
v.b=C.ar
v.c=this.b*0.0028
v.r=C.l.j(0.32).gq(0)
s.de(d,v)},
$S:593}
B.aD0.prototype={
$0(){var w=this.a
this.b.push(new B.f8(C.k.S(C.d.Z(w.b/1),0,14),C.k.S(C.d.Z(w.a/1),0,14)))},
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
B.b7N.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=p.d
o===$&&A.b()
w=o.x
w===$&&A.b()
v=p.aR8(w)
w=p.a
u=w.c
t=w.d
s=B.bJd(u*15,u,v.a,v.b,0,0,w.e,t)
r=Math.max(1,p.a.f.length-1)
o=o.x
o===$&&A.b()
o=Math.sin(C.d.ac(o*r,1)*3.141592653589793)
e.toString
return new A.az(C.C,q,C.at,C.f,A.a([A.aH(q,e,q,q,s.a,q,s.b+o*-5,q)],x.p),q)},
$S:126}
B.aCv.prototype={
$1(d){return J.cE(d)},
$S:596}
B.aCw.prototype={
$1(d){return A.cG(A.v(d),null)},
$S:241}
B.aCz.prototype={
$1(d){var w,v,u,t
if(!x.j.b(d))return
for(w=J.b_(d),v=this.a;w.A();){u=w.gP(w)
t=u==null?null:C.c.O(J.J(u))
if(t==null)t=""
if(!B.bTl(t))continue
if(!C.b.t(v,t))v.push(t)}},
$S:4}
B.aCy.prototype={
$1(d){var w=this.a.h(0,d)
w.toString
return w},
$S:59}
B.ba6.prototype={
$1(d){var w=this.a
if(w.c==null)return
if(new A.c5(Date.now(),0,!1).cA(this.b).a>=2e6){w.aFA()
return}w.E(new B.ba5(w))},
$S:14}
B.ba5.prototype={
$0(){var w=this.a
return w.e=1+w.r.cT(6)},
$S:0}
B.ba4.prototype={
$0(){},
$S:0}
B.ba7.prototype={
$0(){var w,v=this.b
if(v>0)this.a.e=C.k.S(v,1,6)
else{v=this.a
w=v.a.d
if(w>0)v.e=C.k.S(w,1,6)}},
$S:0}
B.ba9.prototype={
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
return A.jc(F.f0(C.p,s,A.jb(C.p,e,r?1+w*0.1:1)),new A.l(w*v*u,w*q*t))},
$S:19}
B.ba8.prototype={
$2(d,e){var w=x.Z
return A.kU(C.p,new A.dc(e,!1,d,null),null,new A.ax(e,new A.aE(0.6,1,w),w.i("ax<aO.T>")))},
$S:140}
B.aDj.prototype={
$0(){return Ak.iR(this.a)},
$S:0}
B.aDk.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=p.r
if(o){w=p.y
v=w.a
u=w.b.a2(0,v.gq(v))}else u=0
w=this.b
v=p.c
t=A.a4(v,C.h,0.4)
t.toString
s=A.a4(v,C.l,0.35)
s.toString
s=A.a([t,v,s],x.O)
t=o?C.h.j(0.95):v.j(0.85)
t=F.R(t,o?2.4:2)
r=A.a([],x.V)
if(o)r.push(new A.U(1,C.r,v.j(0.45+u*0.25),C.o,14))
r.push(new A.U(0,C.r,C.l.j(0.35),H.br,8))
v=p.as?D.a8_:H.cR
w=A.y(q,A.ah(v,C.h.j(0.95),q,q,w*0.48),C.f,q,q,new A.u(q,q,t,q,r,new K.cx(T.pr,0.5,C.t,q,0,s,q,q),C.F),q,w,q,q,q,q,q,w)
v=C.h.j(o?1:0.88)
v=A.k(""+p.e,q,1,C.H,q,q,A.B(q,q,v,q,q,q,q,q,q,q,q,20,q,q,C.D,q,1,!0,q,0.2,q,q,q,A.a([new A.c0(C.l.j(0.55),C.o,6)],x.u),q,q),q,q)
t=C.h.j(o?0.9:0.65)
o=x.p
t=A.a([v,H.bx,A.k(p.d,q,1,C.H,q,q,A.B(q,q,t,q,q,q,q,q,q,q,q,10.5,q,q,C.Q,q,1.1,!0,q,q,q,q,q,q,q,q),q,q)],o)
t.push(A.k(p.at,q,1,C.H,q,q,A.B(q,q,D.cF.j(0.75),q,q,q,q,q,q,q,q,9.5,q,q,C.Q,q,1.1,!0,q,q,q,q,q,q,q,q),q,q))
v=F.Q(F.P(t,E.X,C.i,E.v),1)
t=C.k.S(p.f,1,6)
s=p.z
r=s?p.Q:q
return F.S(A.a([w,E.a2,v,H.aU,new B.MT(D.cF,t,p.w,p.x,s,r,this.c+6,q)],o),E.j,C.i,E.n,0)},
$S:z+22}
B.aDi.prototype={
$2(d,e){var w=Math.min(e.b,e.d),v=w-14
if(v<96)v=Math.max(72,w-4)
return A.aC(this.a.d.$1(v),null,null)},
$S:33}
B.brL.prototype={
$1(d){return d.c},
$S:z+4};(function aliases(){var w=B.Yr.prototype
w.auY=w.l
w=B.Ys.prototype
w.av_=w.a4
w.auZ=w.l
w=B.Yt.prototype
w.av1=w.a4
w.av0=w.l
w=B.Yu.prototype
w.av3=w.a4
w.av2=w.l
w=B.Yv.prototype
w.av4=w.l
w=B.Yw.prototype
w.av6=w.a4
w.av5=w.l
w=B.Yx.prototype
w.av8=w.a4
w.av7=w.l
w=B.Yy.prototype
w.ava=w.a4
w.av9=w.l
w=B.Yh.prototype
w.auN=w.l})();(function installTearOffs(){var w=a._instance_2u,v=a._instance_0u,u=a._instance_1u
var t
w(t=B.Ug.prototype,"gaNL","aNM",9)
v(t,"gaBV","CS",0)
u(t,"gayO","ayP",10)
v(B.Uh.prototype,"gaMq","aMr",1)
v(t=B.Ui.prototype,"gaMy","rr",1)
v(t,"gaMx","Kx",0)
v(t,"gaac","z3",0)
v(t,"gaMA","lY",0)
v(t,"gaME","KA",0)
u(t=B.Uj.prototype,"gaxV","axW",2)
u(t,"gaOv","aOw",2)
v(t,"gaAx","aAy",1)
v(t,"gaVI","aVJ",0)
v(t,"gaSW","pF",0)
v(B.Um.prototype,"gaC3","aC4",1)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(A.I,[B.LL,B.N2,B.N5,B.t9,B.f8,B.aCT,B.jq,B.jR,B.vH,B.a4l,B.xl,B.MS,B.lC,B.t7])
u(A.cY,[B.aCr,B.aCs,B.aCq,B.aCt,B.aDe,B.aDf,B.baD,B.baE,B.baC,B.baq,B.bab,B.bau,B.baw,B.baj,B.bay,B.bax,B.bp0,B.b03,B.b95,B.bp1,B.bbr,B.bbw,B.bby,B.baY,B.bbE,B.bbJ,B.baO,B.baN,B.baQ,B.bbp,B.bbq,B.baL,B.bbK,B.bbm,B.bp2,B.bcv,B.bcw,B.bch,B.bci,B.bc6,B.bc7,B.bce,B.bc3,B.bc2,B.bcq,B.bcr,B.bcu,B.bp3,B.aDh,B.b9h,B.bp4,B.bcJ,B.bp5,B.aCB,B.aD1,B.aCY,B.aD3,B.aCW,B.aCQ,B.aCv,B.aCw,B.aCz,B.aCy,B.ba6,B.brL])
t(B.a4b,A.lc)
t(B.zG,A4.hd)
u(A.ec,[B.aDg,B.brM,B.baB,B.bco,B.bcG,B.bcF,B.bcB,B.bcD,B.bcC,B.bcL,B.aCG,B.aCK,B.aCJ,B.aCL,B.aCI,B.aCH,B.aCN,B.aCM,B.aCO,B.aD5,B.b7N,B.ba9,B.ba8,B.aDk,B.aDi])
t(B.q7,K.fQ)
u(A.a3,[B.vM,B.N_,B.N0,B.vK,B.ER,B.Uk,B.Ul,B.TR,B.MT])
u(A.a5,[B.afY,B.Yr,B.ane,B.anf,B.Yv,B.anh,B.ani,B.Yh,B.afU])
t(B.and,B.Yr)
t(B.Ys,B.and)
t(B.Ug,B.Ys)
u(A.eb,[B.baF,B.bap,B.bak,B.bal,B.bam,B.ban,B.bao,B.bac,B.bad,B.bae,B.baf,B.bag,B.bat,B.bas,B.bav,B.bah,B.bai,B.baz,B.baA,B.bar,B.baG,B.baH,B.baI,B.baJ,B.bbs,B.bbt,B.bbu,B.bbv,B.bbx,B.bbz,B.bbI,B.bb4,B.bbn,B.bbF,B.bbG,B.bbH,B.baS,B.baT,B.baU,B.baV,B.baW,B.baX,B.baR,B.bbd,B.bbe,B.bbf,B.bbg,B.bbh,B.bbi,B.bbj,B.bbk,B.bbl,B.baZ,B.bb_,B.bb0,B.bb1,B.bb2,B.bb3,B.bb7,B.bb8,B.bb9,B.bba,B.bbb,B.bbc,B.bbA,B.bbB,B.bbC,B.bbD,B.baM,B.baP,B.baK,B.bbo,B.bb5,B.bb6,B.bcg,B.bbO,B.bbQ,B.bc_,B.bcm,B.bcn,B.bbP,B.bc4,B.bck,B.bc1,B.bc0,B.bcl,B.bbR,B.bbS,B.bc5,B.bc8,B.bc9,B.bca,B.bcb,B.bcc,B.bcd,B.bcf,B.bcj,B.bbM,B.bbN,B.bbL,B.bbU,B.bbV,B.bbW,B.bbX,B.bbY,B.bbZ,B.bbT,B.bcp,B.bcs,B.bct,B.bcE,B.bcA,B.bcz,B.bcx,B.bcy,B.bcK,B.bcM,B.bcI,B.bcH,B.aCF,B.aCE,B.aCC,B.aCD,B.aD0,B.aCV,B.aD_,B.aCU,B.aCZ,B.aD4,B.aD2,B.aCX,B.aD6,B.aD7,B.aD8,B.aD9,B.aDa,B.aDb,B.aDc,B.aDd,B.aCS,B.aCR,B.ba5,B.ba4,B.ba7,B.aDj])
t(B.Yt,B.ane)
t(B.Uh,B.Yt)
u(A.O,[B.ac7,B.U5,B.add,B.afV,B.agi,B.Cn,B.Ch,B.aeF,B.VV,B.agx,B.aic,B.ame,B.Xf,B.a4c,B.afJ,B.Cd,B.abB,B.agL,B.ah5,B.a4i,B.a4a,B.a4d,B.a4f,B.afZ,B.Uv,B.zF,B.a4k,B.a4g,B.N1,B.Wk,B.zH,B.N3,B.zI])
u(A.jm,[B.abV,B.MZ,B.a4e,B.vI,B.afW])
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
A.da(b.typeUniverse,JSON.parse('{"zG":{"cF":["q7"],"eU":["q7"],"cF.0":"q7"},"vM":{"a3":[],"c":[]},"afY":{"a5":["vM"]},"N_":{"a3":[],"c":[]},"Ug":{"a5":["N_"],"dy":[]},"N0":{"a3":[],"c":[]},"Uh":{"a5":["N0"],"dy":[]},"ac7":{"O":[],"c":[]},"U5":{"O":[],"c":[]},"add":{"O":[],"c":[]},"afV":{"O":[],"c":[]},"agi":{"O":[],"c":[]},"Cn":{"O":[],"c":[]},"Ch":{"O":[],"c":[]},"aeF":{"O":[],"c":[]},"VV":{"O":[],"c":[]},"agx":{"O":[],"c":[]},"aic":{"O":[],"c":[]},"abV":{"aI":[]},"ame":{"O":[],"c":[]},"Xf":{"O":[],"c":[]},"vK":{"a3":[],"c":[]},"Ui":{"a5":["vK"],"dy":[]},"ER":{"a3":[],"c":[]},"Uj":{"a5":["ER"],"dy":[]},"Uk":{"a3":[],"c":[]},"Cd":{"O":[],"c":[]},"a4c":{"O":[],"c":[]},"afX":{"a5":["Uk"],"dy":[]},"afJ":{"O":[],"c":[]},"abB":{"O":[],"c":[]},"agL":{"O":[],"c":[]},"ah5":{"O":[],"c":[]},"Ul":{"a3":[],"c":[]},"a4i":{"O":[],"c":[]},"Um":{"a5":["Ul"],"dy":[]},"MZ":{"aI":[]},"TR":{"a3":[],"c":[]},"a4a":{"O":[],"c":[]},"aeS":{"a5":["TR"]},"a4d":{"O":[],"c":[]},"a4e":{"aI":[]},"lC":{"bQ":[]},"MT":{"a3":[],"c":[]},"vI":{"aI":[]},"afU":{"a5":["MT"]},"zH":{"O":[],"c":[]},"a4f":{"O":[],"c":[]},"afZ":{"O":[],"c":[]},"Uv":{"O":[],"c":[]},"zF":{"O":[],"c":[]},"a4k":{"O":[],"c":[]},"a4g":{"O":[],"c":[]},"N1":{"O":[],"c":[]},"Wk":{"O":[],"c":[]},"N3":{"O":[],"c":[]},"zI":{"O":[],"c":[]},"afW":{"aI":[]}}'))
A.Ci(b.typeUniverse,JSON.parse('{"t7":1}'))
var y={d:"Joined table, but socket connect failed. Tap JOIN again."}
var x=(function rtii(){var w=A.X
return{M:w("LW"),F:w("hj"),V:w("w<U>"),O:w("w<d>"),E:w("w<T<f8>>"),Q:w("w<T<jq>>"),G:w("w<T<ab<h,@>>>"),e:w("w<vH>"),J:w("w<f8>"),a:w("w<t9>"),b:w("w<jq>"),Y:w("w<ab<h,@>>"),L:w("w<+seatIndex,userId(r,h)>"),u:w("w<c0>"),s:w("w<h>"),p:w("w<c>"),_:w("w<xl>"),n:w("w<K>"),t:w("w<r>"),x:w("w<ab<h,@>?>"),o:w("w<c?>"),v:w("T<hj>"),I:w("T<jq>"),R:w("T<ab<h,@>>"),g:w("T<xl>"),j:w("T<@>"),c:w("MS"),T:w("f8"),W:w("zG"),B:w("q7"),r:w("jq"),P:w("ab<h,@>"),f:w("ab<@,@>"),C:w("as<r,ed>"),D:w("as<r,iY<r>>"),A:w("f9"),d:w("bq"),K:w("I"),N:w("h"),Z:w("aE<K>"),i:w("d5<h>"),k:w("d5<r>"),m:w("aS<T<ab<h,@>>>"),U:w("dM<r>"),l:w("c"),aY:w("bh<~>"),d4:w("aP<~>"),q:w("fL"),y:w("L"),z:w("@"),S:w("r"),an:w("iV?"),h:w("ab<h,@>?"),X:w("I?"),w:w("h?"),a3:w("r?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.Qm=new A.cy(-0.6,-1)
D.wm=new A.cy(-0.25,-0.35)
D.Qy=new A.cy(0.7,1)
D.QA=new A.cy(-0.45,-0.55)
D.QE=new A.rg(0,A.X("rg<K>"))
D.asG=new A.b9(15,15)
D.Ro=new A.cN(C.a5,D.asG,G.jj,C.a5)
D.Sh=new A.u(G.kq,null,null,null,null,null,C.F)
D.Pg=new A.z(!0,C.J,null,null,null,null,null,C.Q,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aGy=new A.aw("Loading tables\u2026",null,D.Pg,null,null,null,null,null,null,null)
D.UR=new A.cS(C.p,null,null,D.aGy,null)
D.aGQ=new A.aw("No tables found",null,D.Pg,null,null,null,null,null,null,null)
D.UT=new A.cS(C.p,null,null,D.aGQ,null)
D.aob=new F.t5(160,"Starting\u2026",null)
D.UU=new A.cS(C.p,null,null,D.aob,null)
D.aHQ=new A.aw("Session expired",null,C.dI,null,null,null,null,null,null,null)
D.V1=new A.cS(C.p,null,null,D.aHQ,null)
D.a8W=new A.ca(H.f_,18,C.h,null,null,null)
D.V2=new A.cS(C.p,null,null,D.a8W,null)
D.xK=new A.d(1,0.047058823529411764,0.08627450980392157,0.2,C.e)
D.WF=new A.d(1,0.08627450980392157,0.0392156862745098,0.1803921568627451,C.e)
D.dX=new A.d(1,0.9019607843137255,0.11764705882352941,0.1450980392156863,C.e)
D.me=new A.d(1,0.14901960784313725,0.0784313725490196,0.2823529411764706,C.e)
D.XE=new A.d(1,0.23137254901960785,0.6196078431372549,1,C.e)
D.XI=new A.d(1,0.1803921568627451,0.0784313725490196,0.34509803921568627,C.e)
D.y4=new A.d(1,0.07058823529411765,0.07058823529411765,0.1803921568627451,C.e)
D.y8=new A.d(1,0.4196078431372549,0.22745098039215686,0.6588235294117647,C.e)
D.yb=new A.d(1,0.10196078431372549,0.06274509803921569,0.25098039215686274,C.e)
D.ml=new A.d(1,0.07058823529411765,0.10588235294117647,0.2,C.e)
D.eP=new A.d(1,0.9764705882352941,0.6588235294117647,0,C.e)
D.mn=new A.d(1,1,0.9450980392156862,0.6588235294117647,C.e)
D.cF=new A.d(1,0.9764705882352941,0.8313725490196079,0.13725490196078433,C.e)
D.qn=new A.d(1,0.043137254901960784,0.0196078431372549,0.09411764705882353,C.e)
D.em=new A.d(1,0.17647058823529413,0.7019607843137254,0.13725490196078433,C.e)
D.a_S=new A.d(1,0.0392156862745098,0.07058823529411765,0.1568627450980392,C.e)
D.a04=new A.d(1,0.2901960784313726,0.12156862745098039,0.47058823529411764,C.e)
D.kl=new A.d(1,0.3568627450980392,0.17647058823529413,0.5568627450980392,C.e)
D.a0J=new A.d(1,0.0196078431372549,0.00784313725490196,0.06274509803921569,C.e)
D.mE=new A.d(1,0.10196078431372549,0.047058823529411764,0.21176470588235294,C.e)
D.zo=new A.d(1,0.9098039215686274,0.8784313725490196,0.8313725490196079,C.e)
D.a19=new A.d(1,0.0392156862745098,0.0392156862745098,0.10980392156862745,C.e)
D.a1t=new A.d(1,0.22745098039215686,0.09411764705882353,0.40784313725490196,C.e)
D.dM=new A.d(1,0,0.4392156862745098,0.7333333333333333,C.e)
D.a26=new A.dl(D.qn,null,null)
D.aLq=new B.afW(null)
D.a2I=new A.kp(D.aLq,null,C.ab,null,null)
D.Qr=new A.cy(0,-0.05)
D.a_f=new A.d(1,0.16470588235294117,0.0784313725490196,0.34509803921568627,C.e)
D.XU=new A.d(1,0.10196078431372549,0.047058823529411764,0.2196078431372549,C.e)
D.Xd=new A.d(1,0.07058823529411765,0.03137254901960784,0.14901960784313725,C.e)
D.Xr=new A.d(1,0.03529411764705882,0.01568627450980392,0.07058823529411765,C.e)
D.akV=w([D.a_f,D.XU,D.Xd,D.Xr],x.O)
D.ace=w([0,0.32,0.65,1],x.n)
D.asB=new K.cx(D.Qr,1.05,C.t,null,0,D.akV,D.ace,null)
D.S6=new A.u(null,null,null,null,null,D.asB,C.m)
D.a2V=new A.iz(D.S6,C.Y,null,null)
D.a44=new A.A(0,22,0,0)
D.a4h=new A.A(10,5,12,5)
D.a4q=new A.A(12,2,12,0)
D.Ab=new A.A(14,0,14,18)
D.a4z=new A.A(14,6,14,4)
D.a4B=new A.A(14,8,14,6)
D.a4E=new A.A(16,0,16,12)
D.Ae=new A.A(16,0,16,8)
D.a4N=new A.A(16,8,16,2)
D.a4O=new A.A(16,8,16,8)
D.a4Q=new A.A(18,12,18,12)
D.a4S=new A.A(18,2,18,10)
D.a4X=new A.A(20,36,20,22)
D.a4Y=new A.A(22,12,22,12)
D.Al=new A.A(28,8,28,8)
D.a5c=new A.A(32,14,32,14)
D.a5L=new A.A(3.5,3.5,3.5,3.5)
D.aMG=new B.Xf(M.iT,I.mt,"100% SECURE","Fair Play Guaranteed",null)
D.a5V=new F.ed(1,E.cl,D.aMG,null)
D.aLr=new B.afZ(null)
D.a60=new F.n0(E.as,C.p,D.aLr,null)
D.a7e=new A.ao(61533,"MaterialIcons",!1)
D.a7o=new A.ao(62589,"MaterialIcons",!1)
D.a7X=new A.ao(983202,"MaterialIcons",!1)
D.a8_=new A.ao(983450,"MaterialIcons",!1)
D.a8B=new A.ca(E.fy,null,C.h,null,null,null)
D.a0k=new A.d(0.4,0.0196078431372549,0.00392156862745098,0.06274509803921569,C.e)
D.WZ=new A.d(0.8,0.0196078431372549,0.00392156862745098,0.06274509803921569,C.e)
D.aih=w([C.w,D.a0k,D.WZ],x.O)
D.agO=w([0.42,0.78,1],x.n)
D.asC=new K.cx(C.p,1.05,C.t,null,0,D.aih,D.agO,null)
D.Se=new A.u(null,null,null,null,null,D.asC,C.m)
D.a2R=new A.iz(D.Se,C.Y,null,null)
D.a9e=new A.or(!0,D.a2R,null)
D.Yv=new A.d(1,1,0.996078431372549,0.9803921568627451,C.e)
D.VL=new A.d(1,0.9607843137254902,0.9411764705882353,0.9019607843137255,C.e)
D.aeW=w([D.Yv,D.VL,D.zo],x.O)
D.aal=new F.ai(E.T,E.Z,C.t,D.aeW,null,null)
D.WQ=new A.d(1,0.11764705882352941,0.12156862745098039,0.22745098039215686,C.e)
D.XT=new A.d(1,0.054901960784313725,0.058823529411764705,0.13333333333333333,C.e)
D.am2=w([D.WQ,D.XT],x.O)
D.aau=new F.ai(E.T,E.Z,C.t,D.am2,null,null)
D.yH=new A.d(1,0.22745098039215686,0.16470588235294117,0.34509803921568627,C.e)
D.a0H=new A.d(1,0.11764705882352941,0.0784313725490196,0.2196078431372549,C.e)
D.X9=new A.d(1,0.07058823529411765,0.0392156862745098,0.1411764705882353,C.e)
D.XV=new A.d(1,0.16470588235294117,0.10980392156862745,0.2823529411764706,C.e)
D.aj0=w([D.yH,D.a0H,D.X9,D.XV],x.O)
D.Cl=w([0,0.35,0.7,1],x.n)
D.aaF=new F.ai(E.T,E.Z,C.t,D.aj0,D.Cl,null)
D.a_z=new A.d(1,0.9490196078431372,0.9215686274509803,0.8784313725490196,C.e)
D.a09=new A.d(1,0.9019607843137255,0.8705882352941177,0.8156862745098039,C.e)
D.a_N=new A.d(1,0.8470588235294118,0.8117647058823529,0.7529411764705882,C.e)
D.ahQ=w([D.a_z,D.a09,D.a_N],x.O)
D.aaH=new F.ai(E.T,E.Z,C.t,D.ahQ,null,null)
D.Zz=new A.d(1,0.23921568627450981,0.8627450980392157,0.41568627450980394,C.e)
D.Xe=new A.d(1,0.0784313725490196,0.5803921568627451,0.22745098039215686,C.e)
D.alO=w([D.Zz,D.Xe],x.O)
D.aaN=new F.ai(C.R,C.W,C.t,D.alO,null,null)
D.ahp=w([D.mn,D.cF,Z.eO],x.O)
D.aaT=new F.ai(C.R,C.W,C.t,D.ahp,null,null)
D.a1y=new A.d(1,0.7843137254901961,0.5725490196078431,0.16470588235294117,C.e)
D.al6=w([D.mn,D.cF,D.a1y],x.O)
D.aaX=new F.ai(C.R,C.W,C.t,D.al6,null,null)
D.a1g=new A.d(1,0.9686274509803922,0.9450980392156862,0.9098039215686274,C.e)
D.Wg=new A.d(1,0.9294117647058824,0.9019607843137255,0.8549019607843137,C.e)
D.a1w=new A.d(1,0.8784313725490196,0.8470588235294118,0.792156862745098,C.e)
D.akx=w([D.a1g,D.Wg,D.a1w],x.O)
D.ab5=new F.ai(E.T,E.Z,C.t,D.akx,null,null)
D.Yc=new A.d(1,1,0.9411764705882353,0.7215686274509804,C.e)
D.ak1=w([D.Yc,I.bc,I.ie],x.O)
D.aba=new F.ai(C.R,C.W,C.t,D.ak1,null,null)
D.Y5=new A.d(1,0.0784313725490196,0.10588235294117647,0.23137254901960785,C.e)
D.aeC=w([D.Y5,D.xK],x.O)
D.abn=new F.ai(E.T,E.Z,C.t,D.aeC,null,null)
D.Ya=new A.d(1,0.2901960784313726,0.22745098039215686,0.41568627450980394,C.e)
D.XG=new A.d(1,0.13333333333333333,0.08627450980392157,0.2196078431372549,C.e)
D.ak4=w([D.Ya,D.XG,G.a1T,D.yH],x.O)
D.abq=new F.ai(E.T,E.Z,C.t,D.ak4,D.Cl,null)
D.aj_=w([G.e1,G.a4],x.O)
D.abx=new F.ai(E.V,C.a_,C.t,D.aj_,null,null)
D.a0R=new A.d(1,0.9490196078431372,0.9294117647058824,0.8941176470588236,C.e)
D.YD=new A.d(1,0.8470588235294118,0.8156862745098039,0.7607843137254902,C.e)
D.aiN=w([C.h,D.a0R,D.YD],x.O)
D.abD=new F.ai(E.T,E.Z,C.t,D.aiN,null,null)
D.ahv=w([M.ch,G.a4,Z.eO],x.O)
D.abG=new F.ai(E.T,E.Z,C.t,D.ahv,null,null)
D.Cb=w([0,26,39,13],x.t)
D.nH=w([0,3,1,2],x.t)
D.Cc=w([0,3,2,1],x.t)
D.acl=w([1,2,3,4],x.t)
D.acm=w([1,2,4],x.t)
D.acn=w([1,3],x.t)
D.Ch=w([2,3,4],x.t)
D.acI=w([2,4],x.t)
D.acU=w([D.mn,G.a4],x.O)
D.adx=w(["name","userName","user_name","username","displayName","display_name"],x.s)
D.aez=w([0,0.4,1],x.n)
D.e6=w([D.dX,D.eP,D.dM,D.em],x.O)
D.Tz=new B.LL()
D.afn=w([D.Tz],A.X("w<LL>"))
D.anT=new B.f8(1,7)
D.anU=new B.f8(2,7)
D.anV=new B.f8(3,7)
D.anW=new B.f8(4,7)
D.anX=new B.f8(5,7)
D.alk=w([D.anT,D.anU,D.anV,D.anW,D.anX],x.J)
D.anS=new B.f8(13,7)
D.anR=new B.f8(12,7)
D.anQ=new B.f8(11,7)
D.anP=new B.f8(10,7)
D.ao7=new B.f8(9,7)
D.akK=w([D.anS,D.anR,D.anQ,D.anP,D.ao7],x.J)
D.ao1=new B.f8(7,13)
D.ao0=new B.f8(7,12)
D.ao_=new B.f8(7,11)
D.anZ=new B.f8(7,10)
D.ao6=new B.f8(7,9)
D.akJ=w([D.ao1,D.ao0,D.ao_,D.anZ,D.ao6],x.J)
D.anY=new B.f8(7,1)
D.ao2=new B.f8(7,2)
D.ao3=new B.f8(7,3)
D.ao4=new B.f8(7,4)
D.ao5=new B.f8(7,5)
D.aln=w([D.anY,D.ao2,D.ao3,D.ao4,D.ao5],x.J)
D.afS=w([D.alk,D.akK,D.akJ,D.aln],x.E)
D.Cv=w(["playerIds","player_ids","currentTurnIndex","current_turn_index","nextTurnIndex","next_turn_index","status","winnerId","winner_user_id","gameId","game_id","tableId","table_id","gameType","game_type","bootValue","boot_value","players","gameFinished","game_finished","message","turnExpiresAt","turn_expires_at","turnSecondsLeft","turn_seconds_left","turnTimerEpoch","turn_timer_epoch"],x.s)
D.agk=w([0,0.28,0.65,1],x.n)
D.Zo=new A.d(1,0.23921568627450981,0.12156862745098039,0.43137254901960786,C.e)
D.ags=w([D.y8,D.Zo],x.O)
D.Yq=new A.d(1,0.16470588235294117,0.16862745098039217,0.27058823529411763,C.e)
D.a_A=new A.d(1,0.10196078431372549,0.10588235294117647,0.18823529411764706,C.e)
D.agE=w([D.Yq,D.a_A],x.O)
D.agL=w([H.fn,C.dk],x.O)
D.nK=w(["Red","Yellow","Blue","Green"],x.s)
D.CD=w(["winnerId","winner_user_id","gameFinished","game_finished"],x.s)
D.l2=w([],x.G)
D.CK=w([],x.a)
D.akr=w(["ludo_online","ludo"],x.s)
D.aks=w(["ludo_online","ludo",null],A.X("w<h?>"))
D.alb=w(["red","yellow","blue","green"],x.s)
D.at0=new A.aR(6,2)
D.asP=new A.aR(12,6)
D.at2=new A.aR(8,12)
D.asW=new A.aR(2,8)
D.alW=w([D.at0,D.asP,D.at2,D.asW],A.X("w<+(r,r)>"))
D.alY=w([E.T,Q.fQ,E.hX,E.Z],A.X("w<cy>"))
D.HW=new B.f8(7,7)
D.ao9=new F.t5(96,null,null)
D.iY=new B.a4b(0,"create")
D.HX=new B.a4b(1,"join")
D.aod=new B.q7(!1,!1,D.CK,null)
D.aoc=new B.N0(null)
D.aoe=new B.vM(D.aoc,null)
D.aof=new B.N5("online","Ludo Online","ludo_online","ludo_online")
D.aog=new B.N5("computer","Ludo vs Computer","ludo_computer","ludo_computer")
D.aoh=new B.N5("local","Ludo Local","ludo_local","ludo")
D.HZ=new B.jq(!1,0,!1)
D.u9=new B.jq(!1,56,!0)
D.fD=new B.jq(!0,0,!1)
D.aoi=new B.jq(!0,0,!0)
D.acZ=w([4],x.t)
D.abW=w([0,8],x.t)
D.abU=w([0,4,8],x.t)
D.abT=w([0,2,6,8],x.t)
D.alU=w([0,2,4,6,8],x.t)
D.aiZ=w([0,2,3,5,6,8],x.t)
D.aoE=new A.df([1,D.acZ,2,D.abW,3,D.abU,4,D.abT,5,D.alU,6,D.aiZ],A.X("df<r,T<r>>"))
D.j0=new A.df([1,0,3,1,4,2,2,3],A.X("df<r,r>"))
D.Iw=new A.l(0,14)
D.apW=new A.l(2,3)
D.apX=new A.l(2,4)
D.aqe=new A.l(1.2,1.8)
D.a8p=new A.ca(U.kS,18,C.h,null,null,null)
D.aAe=new A.z(!0,C.h,null,null,null,null,13,C.x,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aIb=new A.aw("Play",null,D.aAe,null,null,null,null,null,null,null)
D.acT=w([D.a8p,M.hK,D.aIb],x.p)
D.auV=new F.hN(C.aW,C.i,E.v,E.j,null,C.cY,null,0,D.acT,null)
D.aqG=new A.a2(G.n5,D.auV,null)
D.Qt=new A.cy(-0.35,-0.55)
D.a1f=new A.d(1,0.027450980392156862,0.027450980392156862,0.10196078431372549,C.e)
D.aft=w([D.yb,D.a1f],x.O)
D.ast=new K.cx(D.Qt,1.15,C.t,null,0,D.aft,null,null)
D.a1V=new A.d(1,1,0.9647058823529412,0.7843137254901961,C.e)
D.ahU=w([D.a1V,D.cF,Z.eO],x.O)
D.asv=new K.cx(T.pr,0.5,C.t,null,0,D.ahU,null,null)
D.akM=w([G.yG,H.cE,An.pY],x.O)
D.asE=new K.cx(D.wm,0.5,C.t,null,0,D.akM,null,null)
D.asN=new A.aR(12,12)
D.asO=new A.aR(12,3)
D.asY=new A.aR(3,12)
D.ME=new A.aR(3,3)
D.aus=new A.W(0,0,120,36)
D.a8O=new A.ca(U.iS,12,H.aY,null,null,null)
D.a_O=new A.d(1,0.0392156862745098,0.10196078431372549,0.22745098039215686,C.e)
D.aD2=new A.z(!0,D.a_O,null,null,null,null,9,C.D,null,0.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aGI=new A.aw("RECOMMENDED",null,D.aD2,null,null,null,null,null,null,null)
D.ai5=w([D.a8O,G.aO,D.aGI],x.p)
D.auQ=new F.hN(C.aW,C.i,E.v,E.j,null,C.cY,null,0,D.ai5,null)
D.ou=new A.fC([0,8,13,21,26,34,39,47,51],A.X("fC<r>"))
D.NE=new N.kY("sounds/token_capture.wav")
D.awk=new N.kY("sounds/token_home.wav")
D.uZ=new N.kY("sounds/token_move.wav")
D.ay1=new P.Qi(2,12,12,1,96)
D.azq=new A.z(!0,C.h,null,null,null,null,20,C.x,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aAh=new A.z(!0,C.h,null,null,null,null,24,C.D,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aAO=new A.z(!0,C.io,null,null,null,null,13,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aAS=new A.z(!0,C.h,null,null,null,null,18,C.D,null,0.4,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aB6=new A.z(!0,A0.zt,null,null,null,null,20,C.B,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aCD=new A.z(!0,H.pT,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aCT=new A.z(!0,C.h,null,null,null,null,11.5,C.x,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aCY=new A.z(!0,C.h,null,null,null,null,16,C.D,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aDm=new A.z(!0,C.h,null,null,null,null,24,C.x,null,0.5,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aDQ=new A.z(!0,C.h,null,null,null,null,15,C.x,null,0.4,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.WE=new A.d(1,1,0.9568627450980393,0.8235294117647058,C.e)
D.P5=new A.z(!0,D.WE,null,null,null,null,13,C.x,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.Pd=new A.z(!0,C.h,null,null,null,null,11,C.B,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aFh=new A.z(!0,C.h,null,null,null,null,19,C.Q,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aCe=new A.z(!0,C.h,null,null,null,null,28,C.x,null,1,null,null,1.05,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aG3=new A.aw("ONLINE",null,D.aCe,null,null,null,null,null,null,null)
D.a_Q=new A.d(1,0.35294117647058826,0.22745098039215686,0.03137254901960784,C.e)
D.aEH=new A.z(!0,D.a_Q,null,null,null,null,22,C.D,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aG5=new A.aw("\u20b9",null,D.aEH,null,null,null,null,null,null,null)
D.aGl=new A.aw("All four tokens reached home.",null,C.fc,null,null,null,null,null,null,null)
D.aGo=new A.aw("Leave Game?",null,M.P0,C.M,null,null,null,null,null,null)
D.aGu=new A.aw("OK",null,null,null,null,null,null,null,null,null)
D.aGB=new A.aw("Advanced: Join by Table ID",null,I.vw,null,null,null,null,null,null,null)
D.aAl=new A.z(!0,C.h,null,null,null,null,14,C.x,null,3.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aGS=new A.aw("LUDO",null,D.aAl,null,null,null,null,null,null,null)
D.aDZ=new A.z(!0,C.J,null,null,null,null,14,C.Q,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aHg=new A.aw("Players",null,D.aDZ,null,null,null,null,null,null,null)
D.aDz=new A.z(!0,C.h,null,null,null,null,12,C.x,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aI_=new A.aw("LOBBY STATUS",null,D.aDz,null,null,null,null,null,null,null)
D.aB4=new A.z(!0,C.h,null,null,null,null,30,C.D,null,1.2,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aId=new A.aw("LUDO",null,D.aB4,null,null,null,null,null,null,null)
D.aFE=new A.z(!0,null,null,null,null,null,18,C.B,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aIh=new A.aw("CONTINUE",null,D.aFE,null,null,null,null,null,null,null)
D.aKA=new B.abB(null)
D.aKT=new B.add(null)
D.aLn=new B.U5(!0,null)
D.aLp=new B.afV(null)
D.aLu=new B.Uv(D.dM,null)
D.aLv=new B.Uv(D.dX,null)
D.aMI=new B.ame(null)})();(function staticFields(){$.jS=0})();(function lazyInitializers(){var w=a.lazyFinal
w($,"cc8","bNY",()=>A4.iZ(new B.brM(),"ludo",!0,"Ludo"))
w($,"c6Q","pd",()=>B.bTh())})()};
(a=>{a["yd6pD0rJfjOZVmzdVoum5POMnyE="]=a.current})($__dart_deferred_initializers__);