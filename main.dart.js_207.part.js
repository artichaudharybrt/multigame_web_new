((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,A5,W,A6,A7,A8,A1,M,A9,A2,Aa,X,Ab,Ac,P,N,Ad,L,Q,Ae,Af,A3,U,V,Ag,Y,R,Z,T,Ah,Ai,Aj,A4,A_,B={LL:function LL(){},
bTc(d,e){var w,v,u,t,s,r,q,p=x.N,o=A.bf(p),n=A.F(p,p)
for(p=d.length,w=e+"#",v=0;v<d.length;d.length===p||(0,A.X)(d),++v){u=d[v]
t=u.b
s=u.a
r=S.MV(t,e,s)
q=0
for(;;){if(!(o.t(0,r)&&q<400))break;++q
r=S.MV(t,w+q,s)}o.M(0,r)
n.k(0,t,r)}return n},
bTa(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p,o,n,m,l
if(f)return"You"
w=i>=0?i:g
v=w>=0&&w<h.length?C.c.P(h[w]):""
u=B.bT8(e,j,k)
t=x.A
s=B.bT6(g,w,A.a([e,j],t),v)
if(s.length!==0)return s
r=A.a([],x.L)
for(q=0;q<h.length;++q){p=C.c.P(h[q])
if(p.length===0)continue
if(!B.bT9(A.a([e,j],t),p)){o=C.c.P(p)
n=C.c.bh(o,"bot:")||C.c.bh(o,"robot_")}else n=!0
if(n)r.push(new A.aim(q,p))}if(!d)if(v.length!==0){t=C.b.e2(r,new B.aCr(v))||S.bD2(v)
m=t}else m=!1
else m=!0
if(!m)return""
t=v.length!==0
if(t&&C.b.e2(r,new B.aCs(v))){t=B.bTc(r,u.length!==0?u:C.b.bD(h,",")).h(0,v)
return t==null?S.MV(v,u,w):t}l=t?v:"seat:"+w
return S.MV(l,u.length!==0?u:k,w)},
bT8(d,e,f){var w,v,u,t,s,r,q,p
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
bT6(d,e,f,g){var w,v,u=d>=0&&d<4?D.ald[d]:""
for(w=0;w<2;++w){v=B.bT7(f[w],u,e,g)
if(v.length!==0)return v}return""},
bT7(a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=null
if(a2==null)return""
w=J.M(a2)
v=[w.h(a2,"players"),w.h(a2,"playerList"),w.h(a2,"joinedPlayers")]
for(w=a3.length!==0,u=a5.length!==0,t=x.N,s=x.z,r=x.f,q=x.j,p=0;p<3;++p){o=v[p]
if(!q.b(o))continue
for(n=J.aZ(o),m=a1,l=m,k=l;n.A();){j=n.gO(n)
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
a0=B.bD1(d)
if(a0.length!==0)return a0}return""},
bT9(d,e){var w,v,u,t,s,r,q,p,o,n,m
for(w=x.f,v=x.j,u=x.N,t=0;t<2;++t){s=d[t]
if(s==null)continue
r=J.M(s)
q=r.h(s,"botPlayerIds")
if(q==null)q=r.h(s,"bot_player_ids")
if(v.b(q)&&J.e0(q,new B.aCq(),u).t(0,e))return!0
p=r.h(s,"players")
if(!v.b(p))continue
for(r=J.aZ(p);r.A();){o=r.gO(r)
if(!w.b(o))continue
n=J.M(o)
m=n.h(o,"userId")
if(m==null)m=n.h(o,"user_id")
if((m==null?null:J.J(m))!==e)continue
if(J.f(n.h(o,"isBot"),!0)||J.f(n.h(o,"seatKind"),"bot"))return!0}}return!1},
bD1(d){var w,v,u,t
for(w=0;w<6;++w){v=d.h(0,D.adA[w])
u=v==null?null:C.c.P(J.J(v))
if(u==null)u=""
if(!S.bD3(u))return u}t=d.h(0,"user")
if(x.f.b(t))return B.bD1(A.an(t,x.N,x.z))
return""},
aCr:function aCr(d){this.a=d},
aCs:function aCs(d){this.a=d},
aCq:function aCq(){},
bTe(d){var w=C.b.en(D.nM,d)
if(w<0)return(d+1)%4
return D.nM[C.k.ab(w+1,4)]},
bTd(d,e){var w,v,u
if(e===4)return A.bp(4,!0,!1,x.y)
w=A.bp(4,!1,!1,x.y)
w[d]=!0
if(e===2){w[G.Cf[d]]=!0
return w}for(v=A.aj(w).i("aR<1>"),u=d;new A.aR(w,new B.aCt(),v).gB(0)<3;){u=B.bTe(u)
w[u]=!0}return w},
bTf(d,e){var w,v,u=A.a([],x.t)
for(w=0;w<4;++w){v=D.nM[w]
if(v<4&&d[v])u.push(v)}return u},
aCt:function aCt(){},
N2:function N2(){},
bTq(d){switch(d){case"local":return D.aoi
case"computer":return D.aoh
case"online":default:return D.aog}},
N5:function N5(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a4b:function a4b(d,e){this.a=d
this.b=e},
t8:function t8(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bTo(d,e){var w,v,u,t,s,r,q,p,o=A.bN("[\\s_-]",!0,!1),n=A.dA(e.toLowerCase(),o,""),m=A.a([],x.a)
for(o=J.aZ(d);o.A();){w=o.gO(o)
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
p=C.c.P(w.y)
if(p.length!==0)w=p
else w=s>0?"Ludo-"+s:"Table"
m.push(new B.t8(s,r,""+q+" / "+r,w,v))}C.b.ed(m,new B.aDg())
return m},
zH:function zH(d,e,f,g,h){var _=this
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
q8:function q8(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
vL:function vL(d,e){this.c=d
this.a=e},
afY:function afY(){this.c=this.a=null},
brT:function brT(){},
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
_.cx=$
_.cM$=h
_.aL$=i
_.c=_.a=null},
baK:function baK(){},
baI:function baI(d,e){this.a=d
this.b=e},
baJ:function baJ(d){this.a=d},
baH:function baH(d){this.a=d},
baq:function baq(d){this.a=d},
bar:function bar(d){this.a=d},
bas:function bas(d){this.a=d},
bat:function bat(d){this.a=d},
bau:function bau(d){this.a=d},
bav:function bav(d){this.a=d},
bal:function bal(d){this.a=d},
bam:function bam(d,e){this.a=d
this.b=e},
ban:function ban(d){this.a=d},
bao:function bao(d){this.a=d},
bap:function bap(d,e,f){this.a=d
this.b=e
this.c=f},
bac:function bac(d){this.a=d},
bad:function bad(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bae:function bae(d){this.a=d},
baf:function baf(d){this.a=d},
bag:function bag(d){this.a=d},
bah:function bah(d){this.a=d},
bay:function bay(){},
baz:function baz(d,e,f){this.a=d
this.b=e
this.c=f},
bax:function bax(d,e){this.a=d
this.b=e},
baA:function baA(d){this.a=d},
baB:function baB(d,e){this.a=d
this.b=e},
bak:function bak(){},
bai:function bai(d){this.a=d},
baj:function baj(d){this.a=d},
baD:function baD(){},
baG:function baG(d){this.a=d},
baE:function baE(d){this.a=d},
baC:function baC(){},
baF:function baF(d){this.a=d},
baw:function baw(d){this.a=d},
bp7:function bp7(d){this.a=d},
Yr:function Yr(){},
and:function and(){},
Ys:function Ys(){},
bGM(d,e,f,g,h,i,j,k){return new B.agx(d,f,g,k,j,h,i,e,null)},
N0:function N0(d){this.a=d},
Uh:function Uh(){this.c=this.a=null},
baL:function baL(d){this.a=d},
baM:function baM(d){this.a=d},
baN:function baN(d){this.a=d},
baO:function baO(d){this.a=d},
ac7:function ac7(d,e){this.c=d
this.a=e},
b04:function b04(d){this.a=d},
U5:function U5(d,e){this.c=d
this.a=e},
b96:function b96(){},
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
bp8:function bp8(d){this.a=d},
ane:function ane(){},
Yt:function Yt(){},
vJ:function vJ(d,e){this.c=d
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
bbw:function bbw(d){this.a=d},
bbx:function bbx(d,e){this.a=d
this.b=e},
bby:function bby(d,e){this.a=d
this.b=e},
bbz:function bbz(d){this.a=d},
bbA:function bbA(d,e){this.a=d
this.b=e},
bbB:function bbB(d){this.a=d},
bbC:function bbC(d){this.a=d},
bbD:function bbD(d){this.a=d},
bbE:function bbE(d,e){this.a=d
this.b=e},
bbN:function bbN(d){this.a=d},
bb2:function bb2(d,e,f){this.a=d
this.b=e
this.c=f},
bb9:function bb9(d,e){this.a=d
this.b=e},
bbJ:function bbJ(d,e){this.a=d
this.b=e},
bbs:function bbs(d){this.a=d},
bbK:function bbK(d,e){this.a=d
this.b=e},
bbL:function bbL(d,e){this.a=d
this.b=e},
bbM:function bbM(d,e){this.a=d
this.b=e},
baX:function baX(d){this.a=d},
baY:function baY(d){this.a=d},
baZ:function baZ(d){this.a=d},
bb_:function bb_(d){this.a=d},
bb0:function bb0(d){this.a=d},
bb1:function bb1(d){this.a=d},
baW:function baW(d){this.a=d},
bbi:function bbi(d){this.a=d},
bbj:function bbj(d){this.a=d},
bbk:function bbk(d){this.a=d},
bbl:function bbl(d,e){this.a=d
this.b=e},
bbm:function bbm(d,e,f){this.a=d
this.b=e
this.c=f},
bbn:function bbn(d){this.a=d},
bbo:function bbo(d){this.a=d},
bbp:function bbp(d,e){this.a=d
this.b=e},
bbq:function bbq(d,e){this.a=d
this.b=e},
bbO:function bbO(d){this.a=d},
bb3:function bb3(d){this.a=d},
bb4:function bb4(d,e){this.a=d
this.b=e},
bb5:function bb5(d,e){this.a=d
this.b=e},
bb6:function bb6(d){this.a=d},
bb7:function bb7(d){this.a=d},
bb8:function bb8(d){this.a=d},
bbc:function bbc(d){this.a=d},
bbd:function bbd(d){this.a=d},
bbe:function bbe(d){this.a=d},
bbf:function bbf(d,e){this.a=d
this.b=e},
bbg:function bbg(d,e){this.a=d
this.b=e},
bbh:function bbh(d,e){this.a=d
this.b=e},
bbF:function bbF(d){this.a=d},
bbG:function bbG(d){this.a=d},
bbH:function bbH(d){this.a=d},
bbI:function bbI(d){this.a=d},
baR:function baR(d,e){this.a=d
this.b=e},
baT:function baT(d){this.a=d},
baS:function baS(d){this.a=d},
baU:function baU(d,e){this.a=d
this.b=e},
baV:function baV(){},
baP:function baP(d){this.a=d},
bbu:function bbu(){},
bbv:function bbv(d){this.a=d},
bbt:function bbt(d,e){this.a=d
this.b=e},
baQ:function baQ(d){this.a=d},
bbP:function bbP(d){this.a=d},
bba:function bba(d){this.a=d},
bbr:function bbr(d){this.a=d},
bbb:function bbb(d){this.a=d},
bp9:function bp9(d){this.a=d},
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
_.ak=0
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
bcC:function bcC(d){this.a=d},
bcD:function bcD(d){this.a=d},
bco:function bco(d){this.a=d},
bcn:function bcn(d){this.a=d},
bcp:function bcp(d){this.a=d},
bbT:function bbT(d,e){this.a=d
this.b=e},
bbV:function bbV(d,e){this.a=d
this.b=e},
bc6:function bc6(d,e){this.a=d
this.b=e},
bct:function bct(d){this.a=d},
bcu:function bcu(d,e){this.a=d
this.b=e},
bbU:function bbU(d){this.a=d},
bcb:function bcb(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
bcr:function bcr(d,e){this.a=d
this.b=e},
bc8:function bc8(d){this.a=d},
bc7:function bc7(d,e,f){this.a=d
this.b=e
this.c=f},
bcs:function bcs(d,e,f){this.a=d
this.b=e
this.c=f},
bbW:function bbW(d){this.a=d},
bbX:function bbX(d){this.a=d},
bcc:function bcc(d){this.a=d},
bcd:function bcd(d){this.a=d},
bce:function bce(d){this.a=d},
bcf:function bcf(d){this.a=d},
bcg:function bcg(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bch:function bch(d){this.a=d},
bci:function bci(d,e){this.a=d
this.b=e},
bcj:function bcj(){},
bck:function bck(d){this.a=d},
bcl:function bcl(d,e){this.a=d
this.b=e},
bcm:function bcm(d){this.a=d},
bcq:function bcq(d){this.a=d},
bca:function bca(d){this.a=d},
bc9:function bc9(d,e,f){this.a=d
this.b=e
this.c=f},
bbR:function bbR(d,e){this.a=d
this.b=e},
bbS:function bbS(d,e,f){this.a=d
this.b=e
this.c=f},
bbQ:function bbQ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bc_:function bc_(d,e){this.a=d
this.b=e},
bc0:function bc0(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
bc1:function bc1(d){this.a=d},
bbZ:function bbZ(){},
bc2:function bc2(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
bc3:function bc3(d,e,f){this.a=d
this.b=e
this.c=f},
bc4:function bc4(d){this.a=d},
bc5:function bc5(d){this.a=d},
bbY:function bbY(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bcx:function bcx(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bcw:function bcw(d){this.a=d},
bcy:function bcy(){},
bcz:function bcz(d){this.a=d},
bcA:function bcA(d){this.a=d},
bcB:function bcB(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
bcv:function bcv(d,e,f){this.a=d
this.b=e
this.c=f},
bpa:function bpa(d){this.a=d},
Yv:function Yv(){},
ang:function ang(){},
Yw:function Yw(){},
c_W(d){var w,v,u,t=C.k.p(Math.abs(d)),s=new A.eB("")
for(w=t.length,v=0,u="";v<w;++v){if(v>0&&C.k.ab(w-v,3)===0)u=s.a=u+","
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
bcN:function bcN(d,e){this.a=d
this.b=e},
bcL:function bcL(d){this.a=d},
bcM:function bcM(d,e){this.a=d
this.b=e},
bcI:function bcI(d,e){this.a=d
this.b=e},
bcH:function bcH(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bcK:function bcK(){},
bcJ:function bcJ(d,e){this.a=d
this.b=e},
bcG:function bcG(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bcE:function bcE(d,e,f){this.a=d
this.b=e
this.c=f},
bcF:function bcF(d,e,f){this.a=d
this.b=e
this.c=f},
afJ:function afJ(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
b9i:function b9i(){},
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
bpb:function bpb(d){this.a=d},
anh:function anh(){},
Yx:function Yx(){},
a4i:function a4i(d,e){this.c=d
this.a=e},
Ul:function Ul(d,e){this.c=d
this.a=e},
Um:function Um(){this.d=2
this.c=this.a=null},
bcR:function bcR(d){this.a=d},
bcT:function bcT(){},
bcS:function bcS(d){this.a=d},
bcQ:function bcQ(d){this.a=d},
bcP:function bcP(d,e){this.a=d
this.b=e},
bcO:function bcO(d,e){this.a=d
this.b=e},
bpc:function bpc(d){this.a=d},
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
bTn(){var w,v,u,t,s,r,q,p,o={}
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
return new B.aCT(A.e7(w,0,A.fm(52,"count",x.S),x.T).eX(0,!1))},
aCP(d){var w
$label0$0:{if(0===d){w=D.MD
break $label0$0}if(1===d){w=D.asO
break $label0$0}if(2===d){w=D.asX
break $label0$0}if(3===d){w=D.asP
break $label0$0}w=D.MD
break $label0$0}return w},
bTl(d,e){var w=B.aCP(d),v=e===0||e===2?-1.05:1.05
return w.a+v},
bTm(d,e){var w=B.aCP(d),v=e===0||e===1?-1.05:1.05
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
jp:function jp(d,e,f){this.a=d
this.b=e
this.c=f},
jR:function jR(d){this.a=d},
aCQ:function aCQ(){},
vG:function vG(d,e){this.a=d
this.b=e},
bJj(d,e,f,g,h,i,j,k){var w=Math.max(2,d-k-2),v=Math.max(2,d-j-2)
return new A.k(C.d.S(f*e+h-k/2,2,w),C.d.S(g*e+i-j*0.58,2,v))},
bD8(d,e,f,g,h,i,j,k,l,m){return new B.a4a(k,h,l,i,g,m,e,j,f,d,null)},
bD9(d,e,f,g,h,i){return new B.a4d(h,e,d,g,i,f,null)},
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
b7O:function b7O(d){this.a=d},
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
aCo(a1,a2,a3,a4,a5){var w=0,v=A.p(x.Z),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$aCo=A.q(function(a6,a7){if(a6===1)return A.m(a7,v)
for(;;)switch(w){case 0:h=A.cb()+"/game-tables"
g=A.bP(h,0,null)
f=x.N
e=x.z
d=A.aa(["user_id",a5,"token",a4,"boot_value",a1,"no_of_players",a3,"gameType",a2],f,e)
a0=C.O.ew(d,null)
A.cI("POST",d,"ludo_allocate",h)
w=3
return A.e(F.hB(g,a0,B.aCn(a4)).j9(0,Q.eV),$async$aCo)
case 3:t=a7
s=t.b
r=s>=200&&s<300
q=t.e
p=A.aK(A.aJ(q))
o=t.w
A.cy(p.af(0,o),"ludo_allocate",s,r,h)
if(!r)throw A.j(B.EP(B.bD0(t.giN(0)),s))
n=x.h.a(C.O.bz(0,A.aK(A.aJ(q)).af(0,o),null))
q=n==null
p=A.cW(q?null:J.C(n,"code"))
m=p==null?null:C.d.aj(p)
if(m==null)m=0
l=q?null:J.C(n,"table_data")
if(m!==200||!x.j.b(l)||J.ck(l)){k=A.aQ(q?null:J.C(n,"message"))
throw A.j(B.EP(k==null?"Could not join table":k,s))}j=J.fn(l)
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
u=B.vF(A.aa(["user_id",f,"userId",f,"token",e],x.N,x.z),"/game-tables/"+t+"/join","ludo_join",e)
w=1
break
case 1:return A.n(u,v)}})
return A.o($async$a47,v)},
bvf(d,e,f,g){var w=0,v=A.p(x.P),u,t,s,r,q
var $async$bvf=A.q(function(h,i){if(h===1)return A.m(i,v)
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
u=B.vF(q,"/game-tables/join-by-code","ludo_join_by_code",f)
w=1
break
case 1:return A.n(u,v)}})
return A.o($async$bvf,v)},
MU(d,e){return B.bT5(d,e)},
bT5(d,e){var w=0,v=A.p(x.h),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$MU=A.q(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
r=A.cb()+("/game-tables/"+A.d6(2,d,C.a6,!1))
q=A.bP(r,0,null)
A.cI("GET",null,"ludo_table_get",r)
w=7
return A.e(A.f2(q,B.aCn(e)).j9(0,Y.mX),$async$MU)
case 7:p=g
o=p.b>=200&&p.b<300
n=p.b
m=p
A.cy(A.aK(A.aJ(m.e)).af(0,m.w),"ludo_table_get",n,o,r)
if(!o){u=null
w=1
break}n=p
n=B.bD_(A.aK(A.aJ(n.e)).af(0,n.w))
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
a46(d,e){return B.bT4(d,e)},
bT4(d,e){var w=0,v=A.p(x.h),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$a46=A.q(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
r=A.cb()+("/game-tables/"+A.d6(2,d,C.a6,!1)+"/game-state")
q=A.bP(r,0,null)
A.cI("GET",null,"ludo_game_state",r)
w=7
return A.e(A.f2(q,B.aCn(e)).j9(0,Y.mX),$async$a46)
case 7:p=g
o=p.b>=200&&p.b<300
m=p.b
l=p
A.cy(A.aK(A.aJ(l.e)).af(0,l.w),"ludo_game_state",m,o,r)
if(o){m=p
m=A.aK(A.aJ(m.e)).af(0,m.w)==="null"}else m=!0
if(m){u=null
w=1
break}m=p
n=B.bD_(A.aK(A.aJ(m.e)).af(0,m.w))
if(n==null){u=null
w=1
break}if(B.bD6(n)!=null){u=null
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
bD_(d){var w,v,u=null,t=C.c.P(d)
if(t.length===0||t==="null")return u
try{w=C.O.bz(0,d,u)
if(x.P.b(w))return w
if(x.f.b(w)){t=A.an(w,x.N,x.z)
return t}}catch(v){return u}return u},
aCp(d,e,f){var w=0,v=A.p(x.P),u,t
var $async$aCp=A.q(function(g,h){if(g===1)return A.m(h,v)
for(;;)switch(w){case 0:t=A.d6(2,d,C.a6,!1)
u=B.vF(A.aa(["user_id",f,"token",e],x.N,x.z),"/game-tables/"+t+"/start-game","ludo_start",e)
w=1
break
case 1:return A.n(u,v)}})
return A.o($async$aCp,v)},
bvi(d,e,f){var w=0,v=A.p(x.P),u,t
var $async$bvi=A.q(function(g,h){if(g===1)return A.m(h,v)
for(;;)switch(w){case 0:t=A.d6(2,d,C.a6,!1)
u=B.vF(A.aa(["user_id",f,"token",e],x.N,x.z),"/game-tables/"+t+"/dice","ludo_dice",e)
w=1
break
case 1:return A.n(u,v)}})
return A.o($async$bvi,v)},
bvh(d,e,f,g,h){var w=0,v=A.p(x.P),u,t
var $async$bvh=A.q(function(i,j){if(i===1)return A.m(j,v)
for(;;)switch(w){case 0:t=A.aa(["user_id",h,"token",f,"token_index",g,"tokenIndex",g],x.N,x.z)
t.k(0,"dice_value",d)
t.k(0,"diceValue",d)
u=B.vF(t,"/game-tables/"+A.d6(2,e,C.a6,!1)+"/move","ludo_move",f)
w=1
break
case 1:return A.n(u,v)}})
return A.o($async$bvh,v)},
bvg(d,e,f){var w=0,v=A.p(x.P),u,t
var $async$bvg=A.q(function(g,h){if(g===1)return A.m(h,v)
for(;;)switch(w){case 0:t=A.d6(2,d,C.a6,!1)
u=B.vF(A.aa(["user_id",f,"token",e],x.N,x.z),"/game-tables/"+t+"/leave-table","ludo_leave",e)
w=1
break
case 1:return A.n(u,v)}})
return A.o($async$bvg,v)},
vF(d,e,f,g){var w=0,v=A.p(x.P),u,t,s,r,q,p,o,n,m,l,k
var $async$vF=A.q(function(h,i){if(h===1)return A.m(i,v)
for(;;)switch(w){case 0:m=A.cb()+e
l=A.bP(m,0,null)
k=C.O.ew(d,null)
A.cI("POST",d,f,m)
w=3
return A.e(F.hB(l,k,B.aCn(g)).j9(0,Q.eV),$async$vF)
case 3:t=i
s=t.b
r=s>=200&&s<300
q=t.e
p=A.aK(A.aJ(q))
o=t.w
A.cy(p.af(0,o),f,s,r,m)
if(!r)throw A.j(B.EP(B.bD0(t.giN(0)),s))
n=C.O.bz(0,A.aK(A.aJ(q)).af(0,o),null)
if(x.P.b(n)){u=n
w=1
break}throw A.j(B.EP("Invalid JSON",s))
case 1:return A.n(u,v)}})
return A.o($async$vF,v)},
bD0(d){var w,v,u
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
bD6(d){var w,v=J.M(d),u=v.h(d,"code")
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
q6(d){var w,v,u,t,s,r,q,p,o,n,m="positions"
if(d==null)return D.l2
w=B.EQ(d)
v=J.M(w)
u=v.h(w,"ludoState")
t=x.f.b(u)?A.an(u,x.N,x.z):null
s=t==null
r=s?null:t.h(0,"engine")
if(r==null)r=v.h(w,"engine")
q=(r==null?null:J.J(r).toLowerCase())==="board"
if(q&&!s){p=B.bTg(t.h(0,m))
if(p.length!==0)return p}r=[]
s=!s
if(s)r.push(t.h(0,"cards"))
if(s)r.push(t.h(0,"tokens"))
if(s)r.push(t.h(0,"pawns"))
if(!q&&s)r.push(t.h(0,m))
r.push(v.h(w,"cards"))
r.push(v.h(w,"tokens"))
for(v=r.length,o=0;o<r.length;r.length===v||(0,A.X)(r),++o){n=B.bTh(r[o])
if(n.length!==0)return n}return D.l2},
bTg(d){var w,v,u,t,s,r,q,p,o,n=x.j
if(!n.b(d)||J.ck(d))return D.l2
w=A.a([],x.G)
for(v=J.aZ(d),u=x.N,t=x.z,s=x.Y;v.A();){r=v.gO(v)
if(!n.b(r))continue
q=A.a([],s)
for(p=J.aZ(r);p.A();){o=B.aCx(p.gO(p))
q.push(A.aa(["stepNo",o<0?0:o+1,"packed",!1],u,t))}if(q.length!==0)w.push(q)}return w},
bTh(d){var w,v,u,t,s,r,q,p,o,n,m=x.j
if(m.b(d)){w=A.a([],x.G)
for(v=J.aZ(d),u=x.f,t=x.Y;v.A();){s=v.gO(v)
if(m.b(s)){r=A.a([],t)
for(q=J.aZ(s);q.A();)r.push(B.a48(q.gO(q)))
w.push(r)}else if(u.b(s))w.push(A.a([B.a48(s)],t))
else if(typeof s=="number"||typeof s=="string")w.push(A.a([B.a48(s)],t))}m=x.m
m=A.ag(new A.aR(w,new B.aCv(),m),m.i("N.E"))
return m}if(x.f.b(d)){v=J.bY(d)
u=x.aa
p=A.ag(new A.dM(J.e0(v.gcE(d),new B.aCw(),x.a3),u),u.i("N.E"))
C.b.hp(p)
if(p.length===0)return D.l2
w=A.a([],x.G)
for(u=p.length,t=x.Y,o=0;o<p.length;p.length===u||(0,A.X)(p),++o){n=p[o]
s=v.h(d,""+n)
if(s==null)s=v.h(d,n)
if(m.b(s)){r=A.a([],t)
for(q=J.aZ(s);q.A();)r.push(B.a48(q.gO(q)))
w.push(r)}else w.push(A.a([B.a48(s)],t))}return w}return D.l2},
a48(d){var w,v,u
if(x.f.b(d)){w=A.an(d,x.N,x.z)
if(!w.aw(0,"stepNo")&&!w.aw(0,"step_no")){v=w.h(0,"position")
u=v==null?w.h(0,"pos"):v
if(u==null)u=w.h(0,"cell")
if(u!=null)w.k(0,"stepNo",B.aCx(u))}return w}if(typeof d=="number"||typeof d=="string")return A.aa(["stepNo",B.aCx(d)],x.N,x.z)
return C.cn},
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
bTk(d){var w,v,u,t=A.a([],x.s)
for(w=J.aZ(d);w.A();){v=w.gO(w)
u=v==null?null:C.c.P(J.J(v))
if(u==null)u=""
if(L.aDl(u))t.push(u)}return t},
bvj(d,e){var w,v,u=d==null,t=u?null:d.h(0,"playerIds")
if(t==null)t=u?null:d.h(0,"player_ids")
if(x.j.b(t)&&J.cE(t)){w=B.bTk(t)
if(w.length!==0)return w}v=B.bTj(u?null:d.h(0,"players"))
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
return B.bvj(d,e)},
q7(d,e){var w,v,u,t,s,r,q,p,o,n=null
if(e.length===0)return-1
w=C.b.en(B.MX(d,n),e)
if(w>=0)return w
v=C.b.en(B.bvj(d,n),e)
if(v>=0)return v
u=d==null?n:d.h(0,"players")
if(x.j.b(u))for(t=J.aZ(u),s=x.f;t.A();){r=t.gO(t)
if(!s.b(r))continue
q=J.M(r)
p=q.h(r,"userId")
if(p==null)p=q.h(r,"user_id")
if((p==null?n:J.J(p))!==e)continue
o=q.h(r,"seatIndex")
if(o==null)o=q.h(r,"seat_index")
if(typeof o=="number")return C.d.aj(o)}return-1},
bTj(d){var w,v,u,t,s,r,q,p,o
if(!x.j.b(d)||J.ck(d))return C.aa
w=A.F(x.S,x.N)
for(v=J.aZ(d),u=x.f;v.A();){t=v.gO(v)
if(!u.b(t))continue
s=J.M(t)
r=s.h(t,"userId")
if(r==null)r=s.h(t,"user_id")
q=r==null?null:C.c.P(J.J(r))
if(q==null||!L.aDl(q))continue
p=s.h(t,"seatIndex")
if(p==null)p=s.h(t,"seat_index")
if(typeof p=="number")w.k(0,C.d.aj(p),q)}if(w.a===0)return C.aa
v=w.$ti.i("cm<1>")
o=A.ag(new A.cm(w,v),v.i("N.E"))
C.b.hp(o)
v=A.aj(o).i("at<1,h>")
v=A.ag(new A.at(o,new B.aCy(w),v),v.i("aX.E"))
return v},
ng(d){var w,v,u,t,s
if(d==null)return-1
w=d.h(0,"currentTurnIndex")
if(w==null)w=d.h(0,"current_turn_index")
v=w==null?d.h(0,"nextTurnIndex"):w
if(v==null)v=d.h(0,"next_turn_index")
if(typeof v=="number")return C.d.aj(v)
if(typeof v=="string"){u=A.cG(v,null)
if(u!=null)return u}t=d.h(0,"chaal")
if(typeof t=="string"&&t.length!==0){s=C.b.en(B.bvj(d,null),t)
if(s>=0)return s}return-1},
aCA(d){var w,v=null,u=d==null,t=u?v:J.C(d,"winnerId")
if(t==null)t=u?v:J.C(d,"winner_user_id")
if(t==null)return v
w=C.c.P(J.J(t))
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
oB(d){var w,v,u
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
q4(d){var w,v=d==null?null:d.h(0,"ludoState")
if(x.f.b(v)){w=J.C(v,"phase")
return(w==null?null:J.J(w))==="moving"?"moving":"rolling"}return"rolling"},
vI(d){var w,v,u,t,s=d==null,r=s?null:J.C(d,"ludoState")
if(!x.f.b(r)){w=s?null:J.C(d,"dice")
if(typeof w=="number")return C.d.aj(w)
return 0}v=J.M(r)
u=v.h(r,"lastDice")
t=u==null?v.h(r,"last_dice"):u
if(t==null)t=s?null:J.C(d,"dice")
if(typeof t=="number")return C.d.aj(t)
return 0},
bD4(d,e){var w,v,u,t,s,r,q="status"
if(B.oB(e))return
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
u=!0}if(u){B.bD5(w,a6)
B.bD4(w,a6)}return u?w:a5}v=a5!=null
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
j=A.EG(null,null,r,q)
j.H(0,n)
j.H(0,k)
i=B.q6(A.aa(["ludoState",n],r,q))
h=B.q6(A.aa(["ludoState",k],r,q))
k=h.length===0
if(k&&i.length!==0){if(n.h(0,a0)!=null)j.k(0,a0,n.h(0,a0))
if(n.h(0,a1)!=null)j.k(0,a1,n.h(0,a1))
g=!0}else{g=i.length!==0&&!k&&B.bTi(i,h)
if(g){if(n.h(0,a0)!=null)j.k(0,a0,n.h(0,a0))
if(n.h(0,a1)!=null)j.k(0,a1,n.h(0,a1))}}if(g){if(n.h(0,a2)!=null)j.k(0,a2,n.h(0,a2))
if(n.h(0,a3)!=null)j.k(0,a3,n.h(0,a3))
if(n.h(0,a4)!=null)j.k(0,a4,n.h(0,a4))}w.k(0,d,j)}else w.k(0,d,A.an(m,r,q))
continue}w.k(0,s,m)}if(v)for(t=0;t<27;++t){s=D.Cv[t]
if(C.b.t(D.CD,s))continue
if(!w.aw(0,s)||w.h(0,s)==null){l=a5.h(0,s)
if(l!=null)w.k(0,s,l)}}B.bD5(w,a6)
B.bD4(w,a6)
return w},
bD5(d,e){var w,v,u="currentTurnIndex",t="current_turn_index",s="nextTurnIndex",r="next_turn_index",q=J.M(e),p=q.h(e,u)
if(p==null)p=q.h(e,t)
w=q.h(e,s)
if(w==null)w=q.h(e,r)
v=p==null?w:p
if(v==null)return
d.k(0,u,v)
d.k(0,t,v)
if(w!=null){d.k(0,s,w)
d.k(0,r,w)}},
bTi(d,e){var w,v,u,t,s,r,q,p,o,n,m=e.length
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
vK(){var w=0,v=A.p(x.H)
var $async$vK=A.q(function(d,e){if(d===1)return A.m(e,v)
for(;;)switch(w){case 0:$.jS=$.jS+1
w=2
return A.e(A.ho(),$async$vK)
case 2:return A.n(null,v)}})
return A.o($async$vK,v)},
t5(){var w=0,v=A.p(x.H),u
var $async$t5=A.q(function(d,e){if(d===1)return A.m(e,v)
for(;;)switch(w){case 0:u=$.jS
w=(u>0?$.jS=u-1:u)===0?2:4
break
case 2:w=5
return A.e(A.dU(),$async$t5)
case 5:w=3
break
case 4:w=6
return A.e(A.ho(),$async$t5)
case 6:case 3:return A.n(null,v)}})
return A.o($async$t5,v)},
t6:function t6(){},
vH:function vH(d,e){this.b=d
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
ba7:function ba7(d,e){this.a=d
this.b=e},
ba6:function ba6(d){this.a=d},
ba5:function ba5(){},
ba8:function ba8(d,e){this.a=d
this.b=e},
baa:function baa(d){this.a=d},
ba9:function ba9(){},
N1:function N1(d,e,f){this.c=d
this.d=e
this.a=f},
aDi:function aDi(d){this.a=d},
Wk:function Wk(d,e){this.c=d
this.a=e},
bDa(d,e,f,g){return new B.a4f(e,f,d,g,null)},
bDb(d,e,f,g,h,i,j,k,l,m,n,o,p){return new B.a4g(d,k,n,g,i,m,o,f,l,j,p,!0,null)},
bJi(d){var w,v,u
for(w=J.aZ(d),v=0;w.A();){u=w.gO(w)
if(u.c)v+=40
else if(!u.a)v+=10+C.k.bj(C.k.S(u.b,0,56),4)}return v},
byc(d){return J.mO(d,new B.brS()).gB(0)},
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
zG:function zG(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
a4k:function a4k(d,e,f){this.c=d
this.d=e
this.a=f},
a4g:function a4g(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
_.a=p},
zI:function zI(d,e,f,g){var _=this
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
brS:function brS(){},
zJ:function zJ(d,e){this.c=d
this.a=e},
afW:function afW(d){this.a=d},
a4h(d){if(d<2)return 2
if(d>4)return 4
return d},
bTp(d){var w,v,u=B.a4h(d),t=A.bp(4,!1,!1,x.y)
for(w=0;w<u;++w){v=D.j1.h(0,B.N4(w,u))
if(v==null)v=0
if(v<4)t[v]=!0}return t},
N4(d,e){var w,v=B.a4h(e)
if(v===2)w=D.acq
else w=v===3?D.acp:D.aco
if(d<0||d>=w.length)return C.b.gW(w)
return w[d]},
t7(d,e){var w=D.j1.h(0,B.N4(d,e))
return w==null?0:w},
bDc(d,e){var w,v,u=B.a4h(e)
for(w=0;w<u;++w){v=D.j1.h(0,B.N4(w,u))
if((v==null?0:v)===d)return w}return 0},
ayE(d,e,f,g,h){var w=0,v=A.p(x.M),u,t
var $async$ayE=A.q(function(i,j){if(i===1)return A.m(j,v)
for(;;)switch(w){case 0:t=P
w=3
return A.e(B.ayD(d,e,f,g,h),$async$ayE)
case 3:u=t.bBZ(j,d,200,f)
w=1
break
case 1:return A.n(u,v)}})
return A.o($async$ayE,v)},
ayD(d,e,f,g,h){var w=0,v=A.p(x.P),u,t,s,r,q,p,o,n,m,l,k
var $async$ayD=A.q(function(i,j){if(i===1)return A.m(j,v)
for(;;)switch(w){case 0:m=A.cb()+"/game-tables/customise"
l=A.bP(m,0,null)
k=A.aa(["user_id",h,"token",g,"boot_value",P.bBY(d),"no_of_players",f,"gameType",e],x.N,x.z)
A.cI("POST",k,"game_tables/customise",m)
t=P.ayB(g)
w=3
return A.e(F.hB(l,C.O.ew(k,null),t),$async$ayD)
case 3:s=j
t=s.b
r=t>=200&&t<300
q=s.e
p=A.aK(A.aJ(q))
o=s.w
A.cy(p.af(0,o),"game_tables/customise",t,r,m)
if(!r)throw A.j(P.LX(P.buP(s.giN(0)),t))
n=C.O.bz(0,A.aK(A.aJ(q)).af(0,o),null)
if(!x.P.b(n))throw A.j(P.LX("Invalid response",t))
u=n
w=1
break
case 1:return A.n(u,v)}})
return A.o($async$ayD,v)},
bTr(d){var w=C.c.P(d)
if(w.length===0||w==="null"||w==="undefined"||w==="0")return!1
return!0},
bxZ(d){var w=M.cw(d)
if(!w.y)w.mf()},
bJk(d,e,f){var w,v=L.J1(d),u=v==null?null:v.an_()
if(u==null)u=""
v=d.h(0,"turnTimerEpoch")
if(v==null){v=d.h(0,"turn_timer_epoch")
w=v}else w=v
return""+f+":"+u+":"+A.v(w==null?"":w)+":"+e},
br0(d){if(d<=0)return 0
return Math.min(10,d)},
c4e(d,e){var w=L.byr(d)
if(w>0)return B.br0(w)
if(e!=null&&e>0)return B.br0(e)
return 0},
bD7(d,e){return new F.t4(e,d,null)}},D,S,I,Ak,K,Al,H,Am,A0,F,E,O,G,An
J=c[1]
A=c[0]
C=c[2]
A5=c[38]
W=c[149]
A6=c[153]
A7=c[135]
A8=c[165]
A1=c[168]
M=c[62]
A9=c[26]
A2=c[116]
Aa=c[119]
X=c[71]
Ab=c[114]
Ac=c[118]
P=c[40]
N=c[163]
Ad=c[166]
L=c[33]
Q=c[164]
Ae=c[170]
Af=c[58]
A3=c[160]
U=c[132]
V=c[67]
Ag=c[99]
Y=c[167]
R=c[98]
Z=c[140]
T=c[169]
Ah=c[171]
Ai=c[61]
Aj=c[124]
A4=c[64]
A_=c[161]
B=a.updateHolder(c[15],B)
D=c[159]
S=c[27]
I=c[162]
Ak=c[77]
K=c[66]
Al=c[63]
H=c[78]
Am=c[86]
A0=c[89]
F=c[68]
E=c[72]
O=c[65]
G=c[69]
An=c[32]
B.LL.prototype={
n(d,e){if(e==null)return!1
if(J.av(e)!==A.a6(this))return!1
return e instanceof B.LL},
gG(d){return A.ar("tnum",1,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
p(d){return"FontFeature('tnum', 1)"}}
B.N2.prototype={
GF(d,e,f,g,h){return this.b7E(d,e,f,g,h)},
b7E(d,e,f,g,h){var w=0,v=A.p(x.Z),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$GF=A.q(function(a0,a1){if(a0===1){s.push(a1)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.e(B.ayE(d,e,f,g,h),$async$GF)
case 7:q=a1
m=r.a4t(q)
u=m
w=1
break
t=2
w=6
break
case 4:t=3
j=s.pop()
m=A.a9(j)
w=m instanceof P.vb?8:10
break
case 8:p=m
t=12
w=15
return A.e(P.z_(d,null,e,f,g,h),$async$GF)
case 15:o=a1
m=r.a4t(o)
u=m
w=1
break
t=3
w=14
break
case 12:t=11
i=s.pop()
m=A.a9(i)
if(m instanceof P.vb){n=m
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
return A.o($async$GF,v)},
a4t(d){var w=d.b
A.aa(["table_id",C.b.gW(w).a,"ludo_table_id",C.b.gW(w).a,"gameType",C.b.gW(w).b,"bootValue",C.b.gW(w).c,"noOfPlayers",C.b.gW(w).d],x.N,x.z)
return new B.MS(d.a)}}
B.N5.prototype={}
B.a4b.prototype={
T(){return"LudoOnlineLobbyMode."+this.b}}
B.t8.prototype={
n(d,e){var w,v=this
if(e==null)return!1
if(v!==e)w=e instanceof B.t8&&v.a===e.a&&v.b===e.b&&v.c===e.c&&v.d===e.d&&v.e===e.e
else w=!0
return w},
gG(d){var w=this
return A.ar(w.a,w.b,w.c,w.d,w.e,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)}}
B.zH.prototype={
gaoR(){var w=this.at
if(w>=2)return w>4?4:w
return this.as.a==="computer"?2:4},
hf(){var w=0,v=A.p(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k
var $async$hf=A.q(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=r.c.op(null,!0,!0,D.CK)
l=r.gF()
if((l.c&4)===0)r.J(m)
q=$.aA
if(q==null||q.length===0){m=r.c.Aj("Please log in to play",!1)
if((l.c&4)===0)r.J(m)
w=1
break}t=4
w=7
return A.e(r.Ku(q),$async$hf)
case 7:p=e
m=r.c.Fv(!1,B.bTo(p,r.as.c))
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
return A.o($async$hf,v)},
Ku(d){return this.aM7(d)},
aM7(d){var w=0,v=A.p(x.u),u,t=this,s,r,q,p,o,n,m
var $async$Ku=A.q(function(e,f){if(e===1)return A.m(f,v)
for(;;)switch(w){case 0:o=t.as.a
n=o==="computer"||o==="local"?A.a([t.gaoR()],x.t):D.Ch
o=x.F
s=A.F(x.N,o)
m=J
w=3
return A.e(A.hj(new A.at(n,new B.aDe(t,d),A.aj(n).i("at<1,al<T<hk>>>")),x.u),$async$Ku)
case 3:o=m.bzt(f,new B.aDf(),o),r=o.$ti,o=new A.mZ(J.aZ(o.a),o.b,C.i3,r.i("mZ<1,2>")),r=r.y[1]
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
return A.o($async$Ku,v)},
B0(d){return this.b7F(d)},
b7F(a2){var w=0,v=A.p(x.v),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$B0=A.q(function(a3,a4){if(a3===1){s.push(a4)
w=t}for(;;)switch(w){case 0:d=$.aA
a0=K.cv()
if(a0==null){k=$.bb
a0=k==null?null:k.a}q=a0
if(d==null||d.length===0||q==null||q.length===0){k=r.c.Fu("Please log in to play",!0)
if((r.gF().c&4)===0)r.J(k)
u=null
w=1
break}k=r.c.ml(null,!0,!0)
j=r.gF()
if((j.c&4)===0)r.J(k)
t=4
i=C.c.P(a2.e)
p=i
w=J.au(p)!==0?7:8
break
case 7:w=9
return A.e(B.a47(p,d,q),$async$B0)
case 9:k=r.c.Ft(!1)
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
return A.e(r.ax.GF(g,k,f,d,q),$async$B0)
case 13:w=11
break
case 12:w=14
return A.e(B.aCo(g,k,f,d,q),$async$B0)
case 14:case 11:o=a4
k=r.c.Ft(!1)
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
k=r.c.ml(n.a,!0,!1)
if((j.c&4)===0)r.J(k)
u=null
w=1
break}else if(k instanceof P.vb){m=k
k=r.c.ml(m.a,!0,!1)
if((j.c&4)===0)r.J(k)
u=null
w=1
break}else{l=k
k=r.c.ml(A.v(l),!0,!1)
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
Fk(d){return this.b_a(d)},
b_a(d){var w=0,v=A.p(x.y),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g
var $async$Fk=A.q(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:i=$.aA
h=K.cv()
if(h==null){m=$.bb
h=m==null?null:m.a}q=h
if(i==null||i.length===0||q==null||q.length===0){m=r.c.Fu("Please log in to play",!0)
if((r.gF().c&4)===0)r.J(m)
u=!1
w=1
break}m=d.a
if(m<=0){m=r.c.Fu("Invalid table boot",!0)
if((r.gF().c&4)===0)r.J(m)
u=!1
w=1
break}l=r.c.ml(null,!0,!0)
k=r.gF()
if((k.c&4)===0)r.J(l)
t=4
l=A.cb()
w=7
return A.e(new F.eL(l).FI(m,"ludo_local_boot:"+m+":"+d.b+":"+q+":"+Date.now(),"game_bet",i,q),$async$Fk)
case 7:p=f
w=8
return A.e(K.fc(p),$async$Fk)
case 8:m=r.c.Ft(!1)
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
m=r.c.ml(o.a,!0,!1)
if((k.c&4)===0)r.J(m)
u=!1
w=1
break}else{n=m
m=r.c.ml(A.v(n),!0,!1)
if((k.c&4)===0)r.J(m)
u=!1
w=1
break}w=6
break
case 3:w=2
break
case 6:case 1:return A.n(u,v)
case 2:return A.m(s.at(-1),v)}})
return A.o($async$Fk,v)}}
B.q8.prototype={
vU(d,e,f,g,h){var w=this,v=g==null?w.a:g,u=f==null?w.b:f,t=h==null?w.c:h
return new B.q8(v,u,t,e?d:w.d)},
Fu(d,e){return this.vU(d,e,null,null,null)},
ml(d,e,f){return this.vU(d,e,f,null,null)},
Ft(d){return this.vU(null,!1,d,null,null)},
Aj(d,e){return this.vU(d,!1,null,e,null)},
op(d,e,f,g){return this.vU(d,e,null,f,g)},
Fv(d,e){return this.vU(null,!1,null,d,e)},
Am(d,e,f){return this.vU(d,e,null,f,null)},
gdD(){var w=this
return[w.a,w.b,w.c,w.d]}}
B.vL.prototype={
V(){return new B.afY()}}
B.afY.prototype={
a4(){this.ag()
A.dU()},
u(d){return An.bvd("assets/anim/ludo.json",C.l,this.a.c,E.aj,C.bd,!1,0.55)}}
B.N_.prototype={
V(){var w=$.o7(),v=A.bp(4,1,!1,x.S),u=A.a([],x.t)
return new B.Ug(new B.jR(w),v,u,C.bF,null,null)}}
B.Ug.prototype={
a4(){var w,v,u,t,s,r=this,q=null
r.av_()
w=J.il(4,x.y)
for(v=r.a,u=0;t=u<4,t;++u){v.toString
w[u]=t&&v.c[u]}r.d=w
r.a.toString
v=B.bTf(w,q)
r.e=v
if(v.length===0)r.e=A.bF(D.nM,!0,x.S)
w=J.il(4,x.I)
for(v=x.r,s=0;s<4;++s)w[s]=A.bp(4,D.fH,!1,v)
r.f=w
v=new B.baK()
v.$0()
$.as.b9$.push(r)
$.as.ak$.push(new B.baI(r,v))
r.cx=A.bd(q,C.ix,0,q,1,q,r)
$.as.ak$.push(new B.baJ(r))},
jW(d){this.a.toString
return!1},
kS(d){if(d===C.hZ||d===C.jO||d===C.i_)return
if(d===C.cz){if($.jS>0)A.ho()
$.as.ak$.push(new B.baH(this))}},
l(){$.as.hg(this)
var w=this.cx
w===$&&A.b()
w.l()
this.auZ()},
gfX(){var w=this.e
w===$&&A.b()
return w[C.k.ab(this.w,w.length)]},
rI(){var w=this
if(w.c==null||!w.jW(w.gfX())||w.Q||w.as||w.ax||w.ay)return
w.vo()},
vo(){var w=0,v=A.p(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l
var $async$vo=A.q(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.ax){w=1
break}q.ax=!0
t=3
l=x.H
w=6
return A.e(A.cr(A3.re,null,l),$async$vo)
case 6:if(q.c==null||!q.jW(q.gfX())||q.Q||q.as){r=[1]
w=4
break}w=7
return A.e(q.z1(!0),$async$vo)
case 7:if(q.c==null){r=[1]
w=4
break}if(!q.jW(q.gfX())){if(q.as)q.E(new B.baq(q))
r=[1]
w=4
break}if(!q.as){r=[1]
w=4
break}w=8
return A.e(A.cr(C.hf,null,l),$async$vo)
case 8:if(q.c==null){r=[1]
w=4
break}if(!q.jW(q.gfX())||!q.as){if(q.as)q.E(new B.bar(q))
r=[1]
w=4
break}p=A.bF(q.at,!0,x.S)
if(J.au(p)===0){q.E(new B.bas(q))
if(q.y===6)q.rI()
else q.J3()
r=[1]
w=4
break}o=q.abC(q.gfX(),p,q.y)
w=9
return A.e(q.yf(q.gfX(),o),$async$vo)
case 9:r.push(5)
w=4
break
case 3:r=[2]
case 4:t=2
q.ax=!1
if(q.c!=null&&q.jW(q.gfX())&&q.as&&!q.ay){n=A.bF(q.at,!0,x.S)
if(J.au(n)===0){q.E(new B.bat(q))
if(q.y===6)$.as.ak$.push(new B.bau(q))
else q.J3()}else{m=q.abC(q.gfX(),n,q.y)
q.yf(q.gfX(),m)}w=1
break}if(q.c!=null)$.as.ak$.push(new B.bav(q))
w=r.pop()
break
case 5:case 1:return A.n(u,v)
case 2:return A.m(s.at(-1),v)}})
return A.o($async$vo,v)},
abC(d,e,f){var w,v,u,t,s,r,q,p,o,n=C.b.gW(e)
for(w=e.length,v=this.CW,u=f===6,t=-2147483647,s=0;s<e.length;e.length===w||(0,A.X)(e),++s){r=e[s]
q=this.f
q===$&&A.b()
p=q[d][r]
q=p.a
o=q&&u?80:0
if(!q){q=p.b
o=(q+f>=56?o+200:o)+q
if(this.agv(d,r,f))o+=120}o+=v.cS(8)
if(o>t){t=o
n=r}}return n},
agv(d,e,f){var w,v,u,t,s,r,q=this,p=q.f
p===$&&A.b()
w=p[d][e]
if(w.a||w.c||w.b>50)return!1
if(w.b+f>50)return!1
p=q.r
v=p.p8(d,w)
v.toString
u=C.k.ab(v+f,52)
if(D.oy.t(0,u))return!1
for(t=0;t<4;++t){if(t!==d){v=q.d
v===$&&A.b()
v=!v[t]}else v=!0
if(v)continue
for(s=0;s<4;++s){r=q.f[t][s]
if(p.p8(t,r)===u&&!r.a&&!r.c)return!0}}return!1},
z1(d){return this.aSX(d)},
aa5(){return this.z1(!1)},
aSX(d){var w=0,v=A.p(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i
var $async$z1=A.q(function(e,f){if(e===1)return A.m(f,v)
for(;;)switch(w){case 0:if(t.Q||t.as||t.ay){w=1
break}s=!d
if(s&&t.jW(t.gfX())){w=1
break}t.E(new B.bal(t))
if(s)O.dl()
$.bG().bt(0,W.lx)
r=t.CW
q=d?16:14
s=x.H,p=q-2,o=q-4,n=0
case 3:if(!(n<q)){w=5
break}if(t.c==null){w=1
break}m=t.cx
m===$&&A.b()
m.z=C.bI
m.y=m.w=null
m.r.um(0,!0)
m.Dn(0)
m.aE()
l=m.Q
l===$&&A.b()
if(m.as!==l){m.as=l
m.wU(l)}m.J6(m.b)
new B.bam(t,r).$0()
t.c.dl()
if(d)k=n<o?110:160
else if(n<o)k=85
else{m=n<p?110:140
k=m}w=6
return A.e(A.cr(new A.aU(1000*k),null,s),$async$z1)
case 6:case 4:++n
w=3
break
case 5:if(t.c==null){w=1
break}p=t.cx
p===$&&A.b()
p.sq(0,0)
j=t.gfX()
i=t.y=t.x
t.z[j]=i
t.E(new B.ban(t))
w=7
return A.e(A.cr(A.cc(0,d?800:550,0),null,s),$async$z1)
case 7:if(t.c==null){w=1
break}s=t.f
s===$&&A.b()
if(t.r.a05(s,j,i).length===0){if(t.c==null){w=1
break}t.E(new B.bao(t))
w=1
break}t.E(new B.bap(t,j,i))
if(d){w=1
break}t.rI()
case 1:return A.n(u,v)}})
return A.o($async$z1,v)},
J3(){var w,v,u=this
u.as=!1
u.at=A.a([],x.t)
w=u.w
v=u.e
v===$&&A.b()
u.w=(w+1)%v.length
$.as.ak$.push(new B.bac(u))},
aNN(d,e){var w=this
if(!w.as||d!==w.gfX())return
if(!C.b.t(w.at,e))return
if(w.jW(w.gfX())||w.ay)return
w.yf(d,e)},
yf(d,e){return this.ay6(d,e)},
ay6(d,e){var w=0,v=A.p(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$yf=A.q(function(f,g){if(f===1)return A.m(g,v)
for(;;)switch(w){case 0:l=t.gfX()
if(d!==l||t.ay){w=1
break}s=t.y
r=t.f
r===$&&A.b()
q=r[l][e]
p=t.agv(l,e,s)
r=t.r
o=r.a06(l,s,q,e)
w=o.length>1?3:4
break
case 3:$.bG().bt(0,D.uZ)
t.ay=!0
t.E(new B.bad(t,l,e,o))
n=x.H,m=1
case 5:if(!(m<o.length)){w=7
break}if(t.c==null){t.ay=!1
t.ch=null
w=1
break}t.a.toString
w=8
return A.e(A.cr(new A.aU(11e4),null,n),$async$yf)
case 8:case 6:++m
w=5
break
case 7:if(t.c!=null)t.E(new B.bae(t))
t.ay=!1
case 4:if(t.c==null){w=1
break}r.agU(t.f,l,s,e)
if(p)$.bG().bt(0,D.NE)
else if(t.f[l][e].c)$.bG().bt(0,D.awh)
if(r.baN(t.f[l])){t.E(new B.baf(t))
t.aV7(l)
w=1
break}if(s===6){t.E(new B.bag(t))
t.rI()
w=1
break}t.E(new B.bah(t))
case 1:return A.n(u,v)}})
return A.o($async$yf,v)},
aV7(d){var w,v,u=this,t={}
u.a.toString
w=$.bG()
w.bt(0,X.bG)
u.a.toString
v=D.l_[d]+" wins!"
t.a=new B.bay()
w=u.c
w.toString
F.fO(null,!1,new B.baz(u,v,d),w,x.H).hD(new B.baA(t))
$.as.ak$.push(new B.baB(t,u))},
CS(){var w=0,v=A.p(x.H),u=this,t
var $async$CS=A.q(function(d,e){if(d===1)return A.m(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return A.e(F.fO(C.l.j(0.72),!0,new B.bak(),t,x.y),$async$CS)
case 2:if(e===!0&&u.c!=null){t=u.c
t.toString
A.aS(t,!1).bg(0)}return A.n(null,v)}})
return A.o($async$CS,v)},
u(d){var w,v,u,t,s,r,q=this,p=null,o=!q.Q&&!q.as&&!q.jW(q.gfX())&&!q.ay,n=q.d
n===$&&A.b()
w=new A.aR(n,new B.baD(),A.aj(n).i("aR<1>")).gB(0)
q.a.toString
n=x.p
v=A.a([B.bDa("Local \xb7 Pass & Play",q.gaBV(),new B.baE(d),w)],n)
if(q.Q||q.y>0){u=G.ip.j(0.88)
t=A.x(20)
s=F.R(G.a4.j(0.7),1)
v.push(new A.a2(G.n9,A.y(p,A.l(q.Q?"Rolling\u2026":"This turn: "+q.y,p,p,p,p,p,D.P4,p,p),C.f,p,p,new A.t(u,p,s,t,p,p,C.m),p,p,p,p,A_.rs,p,p,p),p))}u=F.Q(new B.N1(A.a([q.LB(0),q.LB(1),q.LB(2),q.LB(3)],x.o),q.gayO(),p),1)
t=q.Q&&!q.jW(q.gfX())
if(q.as&&!q.jW(q.gfX()))s="Pick a token"
else if(q.jW(q.gfX()))s="Opponent"
else{q.a.toString
s=D.l_[q.gfX()]+"'s Turn"}r=q.as&&!q.jW(q.gfX())?"Move":"Roll Dice"
v.push(F.Q(F.P(A.a([u,new A.a2(D.a4P,new B.N3(o,new B.baF(q),t,r,s,p),p)],n),E.j,C.i,E.n),1))
return F.bE0(!1,A.cP(p,D.qq,new B.zJ(A.cC(!0,F.P(v,E.j,C.i,E.n),C.N,!0),p),p),new B.baG(q),x.K)},
LB(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.d
l===$&&A.b()
if(!l[d])return null
w=d===m.gfX()
l=D.e7[d]
if(m.jW(d))v=S.MV("computer:"+d,"",d)
else{m.a.toString
v=D.l_[d]+" Player"}u=m.f
u===$&&A.b()
u=B.bJi(u[d])
t=w&&m.Q?m.x:m.z[d]
s=w&&m.Q
r=m.cx
r===$&&A.b()
q=m.jW(d)
p=w&&!m.as&&!m.jW(d)&&!m.ay
o=w&&m.as
n=m.f
o=o?"Pick \xb7 Win "+B.byc(n[d])+"/4":"Win "+B.byc(n[d])+"/4"
return B.bDb(l,!0,p,t,null,w,q,v,new B.baw(m),s,u,r,o)},
ayP(d){var w,v,u,t,s,r=this,q=null,p=D.e7[r.gfX()],o=r.d
o===$&&A.b()
w=A.dm(C.fa,q,q,new B.MZ(o,q),C.ab)
v=r.f
v===$&&A.b()
u=r.gfX()
t=r.at
s=r.as&&!r.ay
return new B.zI(d,new A.ay(C.C,q,C.at,C.u,A.a([w,B.bD8(r.ch,t,r.gaNM(),D.e7,o,r.r,s,d,v,u)],x.p),q),p,q)}}
B.Yr.prototype={
aZ(){this.bb()
this.b8()
this.di()},
l(){var w=this,v=w.aL$
if(v!=null)v.N(0,w.gdc())
w.aL$=null
w.aa()}}
B.and.prototype={}
B.Ys.prototype={
a4(){this.ag()
B.vK()
$.as.ak$.push(new B.bp7(this))},
l(){B.t5()
this.auY()}}
B.N0.prototype={
V(){return new B.Uh()}}
B.Uh.prototype={
a4(){this.av1()
$.as.b9$.push(this)},
kS(d){if(d===C.cz)if($.jS>0)A.ho()},
l(){$.as.hg(this)
this.av0()},
aMs(){var w,v=this.c
if(v==null)return
w=A.aS(v,!1)
if(w.t3())w.bg(0)},
u(a2){var w,v,u,t,s,r=this,q=null,p=A.bk(a2,C.bK,x.w).w.a,o=p.a>=640,n=p.b,m=n<520,l=!o||m,k=o?820:420,j=r.gaMr(),i=A.bO(0,A.eR(C.bn,A.bJ(q,new A.t(q,q,q,q,q,new F.ai(C.Q,C.W,C.t,A.a([C.l.j(0.72),C.l.j(0.9)],x.O),q,q),C.m),C.Y),C.P,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,j,q,q,q,q,q,q)),h=o?20:14,g=m?6:12,f=A.x(22),e=F.R(I.ba.j(0.75),1.4),d=A.a([new A.U(1,C.r,I.ba.j(0.14),C.o,28),new A.U(0,C.r,C.l.j(0.55),D.apM,30)],x.V),a0=A.x(21),a1=o?20:16
if(m)w=14
else w=o?20:16
v=o?20:16
if(m)u=12
else u=o?18:16
if(o){t=F.Q(new B.U5(l,q),4)
s=m?10:18
s=new A.zp(F.S(A.a([t,new A.G(s,q,q,q),F.Q(new B.VV(new B.baL(r),new B.baM(r),l,q),6)],x.p),E.a7,C.i,E.n,0),q)
t=s}else t=F.P(A.a([D.aLk,R.bj,new B.VV(new B.baN(r),new B.baO(r),!0,q)],x.p),E.j,C.i,E.v)
s=x.p
return A.cP(q,C.w,new A.ay(C.C,q,C.K,C.u,A.a([i,A.cC(!0,A.aD(new A.a2(new A.A(h,g,h,g),A.b1(!1,C.z,!0,q,new A.cO(new A.ac(0,k,0,n*0.92),A.bJ(A.dC(a0,new A.ay(C.C,q,C.K,C.u,A.a([new A.a2(new A.A(a1,w,v,u),A.e6(t,q,C.P,q,G.ei,C.a3),q),A.aH(q,new B.ac7(j,q),q,q,q,8,8,q)],s),q),C.ak,q),new A.t(q,q,e,f,d,D.asv,C.m),C.Y),q),C.f,C.w,0,q,q,q,q,q,C.G),q),q,q),C.N,!0)],s),q),q)}}
B.ac7.prototype={
u(d){var w=null
return new A.G(44,44,A.t2(C.bn,A.bJ(D.V2,new A.t(D.y6.j(0.92),w,F.R(I.ba.j(0.85),1.2),w,w,w,C.F),C.Y),w,new B.b04(this),w,w,w),w)}}
B.U5.prototype={
u(d){var w=null,v=this.c,u=v?C.i:C.a_,t=v?12:16,s=K.Gb(C.jQ,D.aIa,new B.b96()),r=x.p,q=F.S(A.a([F.Q(A.y(w,w,C.f,I.ba.j(0.45),w,w,w,1,w,w,w,w,w,w),1),new A.a2(E.f_,F.f_(C.q,0.7853981633974483,A.y(w,w,C.f,w,w,new A.t(I.ba,w,w,A.x(1.5),w,w,C.m),w,7,w,w,w,w,w,7)),w),F.Q(A.y(w,w,C.f,I.ba.j(0.45),w,w,w,1,w,w,w,w,w,w),1)],r),E.j,C.i,E.n,0),p=A.l("FRIENDS MULTIPLAYER",w,w,w,w,w,A.B(w,w,G.il.j(0.95),w,w,w,w,w,w,w,w,11,w,w,C.B,w,w,!0,w,1.4,w,w,w,w,w,w),w,w),o=v?12:16,n=A.ah(N.eu,G.il.j(0.9),w,w,20),m=C.h.j(0.78)
t=A.a([D.aKQ,new A.G(w,t,w,w),s,D.aG0,E.aY,q,E.aG,p,new A.G(w,o,w,w),F.S(A.a([n,H.aQ,F.Q(A.l("Play with friends in a private room. Host a table and share your invite code, or join using a code from a friend.",w,w,w,w,w,A.B(w,w,m,w,w,w,w,w,w,w,w,v?12.5:13.5,w,w,C.av,w,1.45,!0,w,w,w,w,w,w,w,w),w,w),1)],r),E.X,C.i,E.n,0)],r)
if(!v)C.b.H(t,A.a([R.bj,D.aLm],r))
return F.P(t,E.X,u,E.v)}}
B.add.prototype={
u(d){var w,v=null,u=A.x(10),t=x.V
u=F.f_(C.q,0.7853981633974483,A.y(v,v,C.f,v,v,new A.t(v,v,F.R(G.eP.j(0.85),1.6),u,A.a([new A.U(0,C.r,G.eP.j(0.35),C.o,14),new A.U(0,C.r,G.il.j(0.25),C.o,18)],t),v,C.m),v,42,v,v,v,v,v,42))
w=A.x(8)
t=A.a([new A.U(0,C.r,I.ba.j(0.45),C.o,10)],t)
return new A.G(58,58,new A.ay(C.q,v,C.K,C.u,A.a([u,F.f_(C.q,-0.18,A.y(v,A.dm(v,v,v,new B.vH(5,v),C.ab),C.f,v,v,new A.t(v,v,v,w,t,D.abJ,C.m),v,34,v,v,v,v,v,34))],x.p),v),v)}}
B.afV.prototype={
u(d){var w=null,v=A.aH(4,new B.aeF(G.eP,120,w),w,w,36,w,w,w),u=A.aH(10,new B.agi(100,w),w,w,12,w,w,w),t=A.aH(22,new B.Ch(D.dX,28,w),w,w,78,w,w,w),s=A.aH(36,new B.Ch(D.dM,25.76,w),w,w,104,w,w,w),r=A.aH(8,new B.Ch(D.en,24.64,w),w,w,92,w,w,w),q=A.aH(18,new B.Ch(D.eR,25.2,w),w,w,128,w,w,w),p=A.x(8),o=A.a([new A.U(0,C.r,C.l.j(0.4),D.apZ,10),new A.U(0,C.r,G.eP.j(0.35),C.o,14)],x.V)
return new A.G(1/0,118,new A.ay(C.C,w,C.K,C.f,A.a([v,u,t,s,r,q,A.aH(28,F.f_(C.q,0.22,A.y(w,A.dm(w,w,w,new B.vH(5,w),C.ab),C.f,w,w,new A.t(C.k0,w,w,p,o,w,C.m),w,44,w,w,w,w,w,44)),w,w,158,w,w,w)],x.p),w),w)}}
B.agi.prototype={
u(d){var w,v,u,t=null,s=this.c,r=A.x(14),q=A.a([D.dX.j(0.55),D.yd,D.dM.j(0.45)],x.O),p=F.R(C.h.j(0.18),1.2),o=A.a([new A.U(0,C.r,G.eP.j(0.3),C.o,18)],x.V),n=s*0.34,m=A.aH(t,new B.Cn(D.dX,n,t),t,t,8,t,8,t),l=s*0.28,k=A.aH(t,new B.Cn(D.en,l,t),t,t,t,8,8,t)
l=A.aH(8,new B.Cn(D.eR,l,t),t,t,8,t,t,t)
n=A.aH(8,new B.Cn(D.dM,n,t),t,t,t,8,t,t)
w=s*0.22
v=C.h.j(0.12)
u=A.x(4)
return A.y(t,new A.ay(C.C,t,C.K,C.u,A.a([m,k,l,n,A.aD(A.y(t,t,C.f,t,t,new A.t(v,t,F.R(I.ba.j(0.5),1),u,t,t,C.m),t,w,t,t,t,t,t,w),t,t)],x.p),t),C.f,t,t,new A.t(t,t,p,r,o,new F.ai(E.S,E.Z,C.t,q,t,t),C.m),t,s,t,t,t,t,t,s)}}
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
r=A.a([new A.U(0,C.r,r.j(0.55),H.bw,8)],x.V)
v=t*0.38
return A.y(u,new A.bE(A0.pw,u,u,A.y(u,u,C.f,u,u,new A.t(C.h.j(0.85),u,u,u,u,u,C.F),u,v,u,u,u,u,u,v),u),C.f,u,u,new A.t(u,u,q,s,r,new F.ai(C.Q,C.W,C.t,w,u,u),C.m),u,t*1.15,u,u,u,u,u,t)}}
B.aeF.prototype={
u(d){var w=null,v=this.d,u=this.c
return A.y(w,w,C.f,w,w,new A.t(w,w,w,w,w,new K.cA(C.q,0.5,C.t,w,0,A.a([u.j(0.35),u.j(0)],x.O),w,w),C.F),w,v,w,w,w,w,w,v)}}
B.VV.prototype={
u(d){var w=null,v=this.e,u=v?0:8,t=B.bGM(D.XC,v,G.eP,N.eu,this.c,!0,"Create a private table and share invite code with your friends.","HOST A ROOM"),s=v?10:14,r=B.bGM(I.ba,v,I.ih,D.a7h,this.d,!1,"Enter invite code from your host to join the game.","JOIN A ROOM")
v=v?10:14
return F.P(A.a([new A.G(w,u,w,w),t,new A.G(w,s,w,w),r,new A.G(w,v,w,w),D.aMF],x.p),E.a7,C.i,E.v)}}
B.agx.prototype={
u(a3){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=A.x(16),j=A.x(16),i=x.O,h=A.a([D.y6.j(0.95),D.a1a],i),g=m.c,f=F.R(g.j(0.9),1.5),e=m.d,d=x.V,a0=A.a([new A.U(0.5,C.r,e.j(0.32),C.o,18)],d),a1=x.p,a2=A.a([A.bO(0,A.dC(A.x(15),A.dm(l,l,l,new B.abV(g.j(0.06),l),C.ab),C.ak,l))],a1)
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
r=A.y(l,A.ah(m.e,g,l,l,24),C.f,l,l,new A.t(l,l,o,q,n,new F.ai(E.S,E.Z,C.t,p,l,l),C.m),l,w,l,l,l,l,l,r)
i=F.Q(F.P(A.a([A.l(m.f,l,l,l,l,l,D.aDN,l,l),H.aw,A.y(l,l,C.f,l,l,new A.t(l,l,l,l,l,new F.ai(E.V,C.a0,C.t,A.a([g.j(0.85),g.j(0)],i),l,l),C.m),l,1.5,l,l,l,l,l,36),H.aw,A.l(m.r,l,l,l,l,l,A.B(l,l,C.h.j(0.55),l,l,l,l,l,l,l,l,12,l,l,C.av,l,1.3,!0,l,l,l,l,l,l,l,l),l,l)],a1),E.X,C.i,E.n),1)
g=F.R(g.j(0.9),1.4)
d=A.a([new A.U(0,C.r,e.j(0.35),C.o,10)],d)
a2.push(new A.a2(new A.A(v,u,t,s),F.S(A.a([r,G.Oe,i,E.a2,A.y(l,A.ah(H.iS,C.h.j(0.95),l,l,22),C.f,l,l,new A.t(l,l,g,l,d,l,C.F),l,36,l,l,l,l,l,36)],a1),E.j,C.i,E.n,0),l))
return A.b1(!1,C.z,!0,l,A.b9(!1,k,!0,K.f7(new A.ay(C.C,l,C.K,C.f,a2,l),l,new A.t(l,l,f,j,a0,new F.ai(E.S,E.Z,C.t,h,l,l),C.m),l,l,l),l,!0,l,l,l,l,l,l,l,l,m.w,l,l,l,l,l,l,l),C.f,C.w,0,l,l,l,l,l,C.G)}}
B.aic.prototype={
u(d){var w=null,v=this.c,u=A.a4(v,C.h,0.25)
u.toString
u=A.a([u,v],x.O)
return A.y(w,D.auN,C.f,w,w,new A.t(w,w,w,D.Rn,A.a([new A.U(0,C.r,v.j(0.4),C.o,8)],x.V),new F.ai(E.V,C.a0,C.t,u,w,w),C.m),w,w,w,w,D.a4j,w,w,w)}}
B.abV.prototype={
aH(d,e){var w,v,u,t,s,r,q
$.af()
w=A.am()
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
return A.y(w,F.S(A.a([F.Q(new B.Xf(N.eu,G.il,"2 OR 4 PLAYERS","Private Lobby",w),1),A.y(w,w,C.f,C.h.j(0.12),w,w,w,32,w,w,w,w,w,1),D.a5X],x.p),E.j,C.i,E.n,0),C.f,w,w,new A.t(v,w,t,u,w,w,C.m),w,w,w,w,G.dB,w,w,w)}}
B.Xf.prototype={
u(d){var w=this,v=null,u=x.p
return F.S(A.a([A.ah(w.c,w.d,v,v,16),E.a2,new F.dP(1,E.b2,F.P(A.a([A.l(w.e,v,1,C.H,v,v,D.aCQ,v,v),A.l(w.f,v,1,C.H,v,v,A.B(v,v,C.h.j(0.5),v,v,v,v,v,v,v,v,10,v,v,C.av,v,v,!0,v,v,v,v,v,v,v,v),v,v)],u),E.X,C.i,E.n),v)],u),E.j,C.a_,E.n,0)}}
B.ane.prototype={}
B.Yt.prototype={
a4(){this.ag()
B.vK()
$.as.ak$.push(new B.bp8(this))},
l(){B.t5()
this.aa()}}
B.vJ.prototype={
V(){var w=$.b5()
return new B.Ui(new F.ek(E.c0,w),new F.ek(new A.dq("100",C.cK,C.br),w),new F.ek(E.c0,w),new B.N2())}}
B.Ui.prototype={
a4(){this.av3()
$.as.b9$.push(this)
this.aMD()},
kS(d){if(d===C.cz)if($.jS>0)A.ho()},
l(){var w,v,u,t,s,r=this,q=r.CW
if(q!=null)q.U(0)
q=r.ch
if(q!=null)q.U(0)
w=M.cw("ludo_online")
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
$.as.hg(r)
r.av2()},
gnX(){var w=$.aA,v=K.aoK(w==null?"":w)
if(v!=null&&v.length!==0)return v
w=$.bb
return w==null?null:w.a},
gv9(){var w=L.dk(this.z).b
return C.c.P(w==null?"":w).toUpperCase()},
gjl(){var w=C.c.P(this.f.a.a)
if(!(w.length!==0)){w=L.dk(this.z).a
if(w==null)w=""}return w},
gnW(){return L.dk(this.z).d>0?L.dk(this.z).d:this.e},
z6(d){var w,v,u,t,s=this.gnX()
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
aME(){return this.z6(null)},
aMD(){var w,v,u,t,s=this,r="ludo_online"
M.Cw(r)
w=M.cw(r)
v=new B.bbw(s)
u=new B.bbB(s)
t=new B.bbD(s)
s.cx=v
s.cy=u
s.db=t
if(s.a.c===D.iZ)w.cG(0,"getPrivateTable",v)
w.cG(0,"roomTrigger",u)
w.cG(0,"startGame",t)},
KE(){if(this.gjl().length===0)return
this.E(new B.bbN(this))},
rr(d){return this.aEj(d)},
aEj(d){var w=0,v=A.p(x.y),u,t=2,s=[],r,q,p,o,n
var $async$rr=A.q(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:o=M.cw("ludo_online")
if(o.y){d.$0()
u=!0
w=1
break}r=new A.bh(new A.aO($.aF,x.d4),x.aY)
q=A.cu()
q.b=new B.bb2(o,q,r)
J.apd(o,"connect",q.aM())
if(o.y){o.d0("connect",q.aM())
d.$0()
u=!0
w=1
break}o.mf()
t=4
w=7
return A.e(r.a.j9(0,Q.eV),$async$rr)
case 7:t=2
w=6
break
case 4:t=3
n=s.pop()
if(A.a9(n) instanceof A.qI){o.d0("connect",q.aM())
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
return A.o($async$rr,v)},
z2(d,e){return this.aF0(d,e)},
V0(d){return this.z2(d,!1)},
aF0(d,e){var w=0,v=A.p(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i,h,g
var $async$z2=A.q(function(f,a0){if(f===1){s.push(a0)
w=t}for(;;)switch(w){case 0:h=$.aA
if(h==null||h.length===0||d.length===0){w=1
break}m=!e
if(m&&q.ax){w=1
break}l=new A.c4(Date.now(),0,!1)
if(m){m=q.ay
m=m!=null&&l.cz(m).a<15e5}else m=!1
if(m){w=1
break}q.ax=!0
q.ay=l
t=4
w=7
return A.e(B.MU(d,h),$async$z2)
case 7:p=a0
if(q.c==null||p==null){r=[1]
w=5
break}k=q.z5(p)
o=k==null?p:k
n=L.dk(o)
if(n.a!=null&&n.a.length!==0){q.E(new B.bb9(q,o))
m=q.f
if(C.c.P(m.a.a).length===0){j=n.a
j.toString
m.sd9(0,j)}q.KE()
if(q.DI(o)||q.DI(p)){q.rs()
r=[1]
w=5
break}q.KC()}r.push(6)
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
return A.o($async$z2,v)},
V1(d){var w=this,v=w.CW
if(v!=null)v.U(0)
if(d.length===0)return
w.V0(d)
w.CW=A.fA(C.bd,new B.bbJ(w,d))},
KC(){var w,v=this
if(!L.dk(v.z).gl0()){v.as=!1
return}w=v.gjl()
if(w.length===0||v.gnX()==null||$.aA==null||v.as)return
v.as=!0
v.E(new B.bbs(v))
v.zH(w)},
a4u(d){var w,v=d.toLowerCase()
if(C.c.t(v,"already"))w=C.c.t(v,"start")||C.c.t(v,"playing")||C.c.t(v,"begun")
else w=!1
return w},
zH(d){return this.aW0(d)},
aW0(d){var w=0,v=A.p(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f
var $async$zH=A.q(function(e,a0){if(e===1){s.push(a0)
w=t}for(;;)switch(w){case 0:h=r.gnX()
g=$.aA
if(h==null||g==null||g.length===0){w=1
break}w=3
return A.e(r.rr(new B.bbK(r,d)),$async$zH)
case 3:if(r.c==null||r.at){w=1
break}t=5
w=8
return A.e(B.aCp(d,g,h),$async$zH)
case 8:q=a0
if(r.c==null||r.at){w=1
break}p=J.C(q,"code")
o=p!=null&&!J.f(p,200)&&!J.f(p,"200")
n=J.f(J.C(q,"success"),!1)||o
if(n){k=J.C(q,"message")
j=k==null?null:J.J(k)
m=j==null?"":j
if(r.a4u(m)){r.rs()
w=1
break}if(J.au(m)!==0){r.as=!1
r.E(new B.bbL(r,m))}w=1
break}r.rs()
t=2
w=7
break
case 5:t=4
f=s.pop()
k=A.a9(f)
if(k instanceof B.lC){l=k
if(r.c==null||r.at){w=1
break}if(r.a4u(l.a)){r.rs()
w=1
break}r.as=!1
r.E(new B.bbM(r,l))}else r.as=!1
w=7
break
case 4:w=2
break
case 7:case 1:return A.n(u,v)
case 2:return A.m(s.at(-1),v)}})
return A.o($async$zH,v)},
rs(){var w,v=this,u="ludo_online",t=v.gjl()
if(t.length===0||v.c==null||v.at)return
v.at=!0
w=v.CW
if(w!=null)w.U(0)
w=v.ch
if(w!=null)w.U(0)
w=v.c
w.toString
P.ZD(w,new B.ER(t,v.d,v.gnW(),u,u,null),x.X)},
KA(){var w=0,v=A.p(x.H),u,t=this,s,r
var $async$KA=A.q(function(d,e){if(d===1)return A.m(e,v)
for(;;)switch(w){case 0:t.E(new B.baX(t))
if(t.gnX()!=null){s=$.aA
s=s==null||s.length===0}else s=!0
if(s){t.E(new B.baY(t))
w=1
break}t.E(new B.baZ(t))
w=3
return A.e(t.rr(new B.bb_(t)),$async$KA)
case 3:r=e
if(t.c==null){w=1
break}if(!r){t.E(new B.bb0(t))
w=1
break}A.cr(Q.rd,new B.bb1(t),x.H)
case 1:return A.n(u,v)}})
return A.o($async$KA,v)},
z4(){var w=0,v=A.p(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f
var $async$z4=A.q(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:r.E(new B.bbi(r))
q=C.c.P(r.f.a.a)
if(J.au(q)===0){r.E(new B.bbj(r))
w=1
break}if(r.gnX()==null||$.aA==null){r.E(new B.bbk(r))
w=1
break}t=4
j={}
i=r.gnX()
i.toString
h=$.aA
h.toString
w=7
return A.e(B.a47(q,h,i),$async$z4)
case 7:p=e
if(r.c==null){w=1
break}j.a=null
o=J.C(p,"table_data")
if(x.j.b(o)&&J.cE(o))j.a=A.aa(["code",200,"table_data",o],x.N,x.z)
else if(x.f.b(J.C(p,"table")))j.a=A.aa(["code",200,"table_data",[J.C(p,"table")]],x.N,x.z)
r.E(new B.bbl(j,r))
n=M.cw("ludo_online")
w=8
return A.e(r.rr(new B.bbm(r,n,q)),$async$z4)
case 8:m=e
if(r.c==null){w=1
break}if(!m){r.E(new B.bbn(r))
w=1
break}w=9
return A.e(r.z2(q,!0),$async$z4)
case 9:r.V1(q)
r.E(new B.bbo(r))
r.KE()
r.KC()
t=2
w=6
break
case 4:t=3
f=s.pop()
j=A.a9(f)
if(j instanceof B.lC){l=j
if(r.c!=null)r.E(new B.bbp(r,l))}else{k=j
if(r.c!=null)r.E(new B.bbq(r,k))}w=6
break
case 3:w=2
break
case 6:case 1:return A.n(u,v)
case 2:return A.m(s.at(-1),v)}})
return A.o($async$z4,v)},
z5(d){var w,v,u,t,s=J.M(d),r=s.h(d,"table_data"),q=x.j
if(q.b(r)&&J.cE(r))return A.aa(["code",200,"table_data",r],x.N,x.z)
w=s.h(d,"table")
v=x.f
if(v.b(w)){s=x.N
q=x.z
return A.aa(["code",200,"table_data",A.a([A.an(w,s,q)],x.Y)],s,q)}u=s.h(d,"data")
if(v.b(u)){t=this.z5(A.an(u,x.N,x.z))
if(t!=null)return t}if(s.h(d,"table_id")!=null||s.h(d,"_id")!=null||q.b(s.h(d,"playerIds"))||q.b(s.h(d,"player_ids")))return A.aa(["code",200,"table_data",A.a([d],x.Y)],x.N,x.z)
return null},
DI(d){var w,v,u,t,s,r,q,p=null,o="game_status"
if(d==null)return!1
w=J.M(d)
v=w.h(d,"table_data")
if(x.j.b(v)){u=J.M(v)
u=u.gbc(v)&&x.f.b(u.gW(v))}else u=!1
t=u?A.an(x.f.a(J.fn(v)),x.N,x.z):p
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
KF(d){var w,v,u=this.z5(d)
u=L.dk(u==null?d:u).a
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
w=$.bb
w=w==null?null:w.a
u=C.c.P(w==null?"":w)
return u.length!==0&&u===t},
aMt(d){var w,v=d.toLowerCase()
if(C.c.t(v,"already"))w=C.c.t(v,"seat")||C.c.t(v,"join")||C.c.t(v,"in")
else w=!1
return w},
aaf(d){return C.b.e2(d.c,new B.bbO(this))||d.e>=2},
zp(d){return this.aRO(d)},
aRO(d){var w=0,v=A.p(x.h),u,t=this,s,r,q
var $async$zp=A.q(function(e,f){if(e===1)return A.m(f,v)
for(;;)switch(w){case 0:q=$.aA
if(q==null||q.length===0||d.length===0){u=null
w=1
break}w=3
return A.e(B.MU(d,q),$async$zp)
case 3:s=f
if(s==null){u=null
w=1
break}r=t.z5(s)
u=r==null?s:r
w=1
break
case 1:return A.n(u,v)}})
return A.o($async$zp,v)},
DH(d){return this.aTX(d)},
aTX(d){var w=0,v=A.p(x.h),u,t=2,s=[],r=this,q,p,o,n,m
var $async$DH=A.q(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
p=r.gnX()
p.toString
o=$.aA
o.toString
w=7
return A.e(B.a47(d,o,p),$async$DH)
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
if(r.aMt(q.a)){u=null
w=1
break}throw m}else throw m
w=6
break
case 3:w=2
break
case 6:case 1:return A.n(u,v)
case 2:return A.m(s.at(-1),v)}})
return A.o($async$DH,v)},
z3(d){return this.aFe(d)},
aFe(d){var w=0,v=A.p(x.v),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f
var $async$z3=A.q(function(e,a0){if(e===1){s.push(a0)
w=t}for(;;)switch(w){case 0:g=$.aA
if(g==null||g.length===0){u=null
w=1
break}q=C.c.P(d).toUpperCase()
k=0
case 3:if(!(k<2)){w=5
break}p=D.aku[k]
t=7
w=10
return A.e(P.z0(p,50,r.e,g),$async$z3)
case 10:o=a0
j=J.aZ(o)
case 11:if(!j.A()){w=12
break}n=j.gO(j)
if(n.a.length===0){w=11
break}w=13
return A.e(r.zp(n.a),$async$z3)
case 13:m=a0
if(m==null){w=11
break}l=L.dk(m)
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
return A.o($async$z3,v)},
pB(d,e){return this.aEy(d,e)},
aEy(d,e){var w=0,v=A.p(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$pB=A.q(function(f,g){if(f===1)return A.m(g,v)
for(;;)switch(w){case 0:l={}
k=l.a=t.z5(d)
j=t.KF(d)
if(j==null){s=C.c.P(e)
j=s.length!==0?s:null}l.b=j
w=j!=null&&j.length!==0?3:5
break
case 3:w=6
return A.e(t.DH(j),$async$pB)
case 6:r=g
if(r!=null){q=t.z5(r)
k=q==null?k:q
l.a=k
p=t.KF(r)
j=p==null?j:p
l.b=j
s=k}else s=k
w=7
return A.e(t.zp(j),$async$pB)
case 7:o=g
if(o!=null){l.a=o
p=L.dk(o).a
j=p==null?j:p
l.b=j
n=j
s=o}else n=j
w=4
break
case 5:n=j
s=k
case 4:if(n==null||n.length===0){t.E(new B.bb3(t))
w=1
break}if(s!=null)t.E(new B.bb4(l,t))
t.f.sd9(0,l.b)
t.V1(l.b)
w=8
return A.e(t.rr(new B.bb5(l,t)),$async$pB)
case 8:m=g
if(t.c==null){w=1
break}if(!m){t.E(new B.bb6(t))
w=1
break}w=9
return A.e(t.z2(l.b,!0),$async$pB)
case 9:if(t.c==null){w=1
break}l=l.a
if(t.DI(l==null?t.z:l)||t.DI(d)){t.E(new B.bb7(t))
t.rs()
w=1
break}t.E(new B.bb8(t))
t.KE()
t.KC()
case 1:return A.n(u,v)}})
return A.o($async$pB,v)},
lZ(){var w=0,v=A.p(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
var $async$lZ=A.q(function(b0,b1){if(b0===1){s.push(b1)
w=t}for(;;)switch(w){case 0:a6=$.as.R$.d.c
if(a6!=null)a6.iC()
r.E(new B.bbc(r))
q=C.c.P(r.w.a.a).toUpperCase()
if(J.au(q)===0){r.E(new B.bbd(r))
w=1
break}if(r.gnX()==null||$.aA==null){r.E(new B.bbe(r))
w=1
break}t=4
a0={}
w=7
return A.e(r.z3(q),$async$lZ)
case 7:p=b1
if(r.c==null){w=1
break}w=p!=null&&p.length!==0?8:9
break
case 8:w=10
return A.e(r.pB(C.cn,p),$async$lZ)
case 10:w=1
break
case 9:o=null
a0.a=null
a1=0
case 11:if(!(a1<3)){w=13
break}n=D.akv[a1]
m=null
t=15
a6=r.gnX()
a6.toString
a2=$.aA
a2.toString
w=18
return A.e(B.bvf(n,q,a2,a6),$async$lZ)
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
k=r.KF(m)
if(k==null||k.length===0){w=12
break}j=null
t=20
w=23
return A.e(r.DH(k),$async$lZ)
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
a5=r.KF(j)
k=a5==null?k:a5}w=24
return A.e(r.zp(k),$async$lZ)
case 24:h=b1
if(r.c==null){w=1
break}a6=h
g=L.dk(a6==null?o:a6)
w=r.aaf(g)?25:26
break
case 25:w=27
return A.e(r.pB(o,k),$async$lZ)
case 27:w=1
break
case 26:case 12:++a1
w=11
break
case 13:w=28
return A.e(r.z3(q),$async$lZ)
case 28:f=b1
if(r.c==null){w=1
break}w=f!=null&&f.length!==0?29:30
break
case 29:w=31
return A.e(r.pB(C.cn,f),$async$lZ)
case 31:w=1
break
case 30:r.E(new B.bbf(a0,r))
t=2
w=6
break
case 4:t=3
a9=s.pop()
a6=A.a9(a9)
if(a6 instanceof B.lC){e=a6
if(r.c!=null)r.E(new B.bbg(r,e))}else{d=a6
if(r.c!=null)r.E(new B.bbh(r,d))}w=6
break
case 3:w=2
break
case 6:case 1:return A.n(u,v)
case 2:return A.m(s.at(-1),v)}})
return A.o($async$lZ,v)},
KD(){var w=0,v=A.p(x.H),u,t=this,s
var $async$KD=A.q(function(d,e){if(d===1)return A.m(e,v)
for(;;)switch(w){case 0:t.E(new B.bbF(t))
s=t.gjl()
if(s.length===0){t.E(new B.bbG(t))
w=1
break}if(!L.dk(t.z).gl0()){t.E(new B.bbH(t))
w=1
break}t.E(new B.bbI(t))
t.as=!0
w=3
return A.e(t.zH(s),$async$KD)
case 3:case 1:return A.n(u,v)}})
return A.o($async$KD,v)},
u(d){var w,v,u=this,t=null,s=A.a([A.cC(!0,A.aD(new A.cO(G.wN,u.a.c===D.iZ?u.aMw(d):u.aMx(d),t),t,t),C.N,!0)],x.p)
if(u.Q){w=C.l.j(0.55)
v=u.y
s.push(A.bO(0,new A.de(w,A.aD(B.bD7(v==null?"Please wait\u2026":v,180),t,t),t)))}return A.cP(t,D.xK,new B.zJ(new A.ay(C.C,t,C.K,C.u,s,t),t),t)},
aMw(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=F.eG(d),k=L.dk(n.z),j=L.dk(n.z).gl0()&&!n.Q,i=C.k.S(l.ge4(),14,20),h=n.aa7(d,"CREATE ROOM")
if(n.gjl().length===0)w=0
else w=n.gv9().length===0?1:2
v=x.p
w=A.a([h,E.aY,n.aa6(w,I.Cs)],v)
h=n.x
if(h!=null)C.b.H(w,A.a([H.aD,n.Kz(h,!0)],v))
h=n.y
if(h!=null)C.b.H(w,A.a([H.aD,n.Kz(h,!1)],v))
w.push(H.bO)
h=F.S(A.a([F.Q(n.aMC(),1),H.cX,F.Q(n.aMv(),1)],v),E.X,C.i,E.n,0)
u=n.Q
t=u?"Creating\u2026":"Create Room (Host)"
k=A.a([h,H.bO,n.aMA(I.Bz,t,u?m:n.gaMy()),N.jw,n.aac(k.e)],v)
if(n.gv9().length!==0)C.b.H(k,A.a([H.bO,n.aa9()],v))
k.push(H.bO)
k.push(I.Pr)
k.push(H.aw)
k.push(n.aag())
k.push(H.aD)
h=F.Q(n.aad(H.et,"Copy",n.gjl().length===0?m:new B.baR(n,d)),1)
u=F.Q(n.KB(!0,N.f1,"JOIN",n.Q?m:n.gaab()),1)
t=j?n.gaMF():m
s=A.x(12)
r=A.x(12)
q=j?G.yu:I.zj
p=F.R(j?I.xw:C.h.j(0.08),1)
o=A.ah(U.kR,j?C.h:C.b1,m,m,18)
k.push(F.S(A.a([h,E.a2,u,E.a2,F.Q(A.b1(!1,C.z,!0,m,A.b9(!1,s,!0,K.f7(F.S(A.a([o,G.aL,new F.dP(1,E.b2,A.l("Start Match",m,1,C.H,m,m,A.B(m,m,j?C.h:C.b1,m,m,m,m,m,m,m,m,11,m,m,C.x,m,m,!0,m,0.15,m,m,m,m,m,m),m,m),m)],v),E.j,C.a_,E.n,0),m,new A.t(q,m,p,r,m,m,C.m),46,m,m),m,!0,m,m,m,m,m,m,m,m,t,m,m,m,m,m,m,m),C.f,C.w,0,m,m,m,m,m,C.G),1)],v),E.j,C.i,E.n,0))
w.push(n.aa8(F.P(k,E.a7,C.i,E.n)))
w.push(R.bj)
w.push(n.aah())
w.push(H.aD)
return A.e6(F.P(w,E.a7,C.i,E.n),m,C.P,new A.A(i,10,i,10),m,C.a3)},
aMx(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=C.k.S(F.eG(d).ge4(),14,20),h=k.aa7(d,"JOIN ROOM")
if(k.gjl().length===0)w=0
else w=L.dk(k.z).gl0()?2:1
v=x.p
w=A.a([h,E.aY,k.aa6(w,I.CB)],v)
h=k.x
if(h!=null)C.b.H(w,A.a([H.aD,k.Kz(h,!0)],v))
h=k.y
if(h!=null)C.b.H(w,A.a([H.aD,k.Kz(h,!1)],v))
w.push(H.bO)
h=F.Q(k.aMH(k.w,"Enter code (e.g. A7Q)",new B.baS(k),new B.baT(k),H.lI,C.OM),1)
h=A.a([I.vE,H.aw,F.S(A.a([h,E.a2,new A.G(110,j,k.KB(!0,N.f1,"JOIN",k.Q?j:k.gaMB()),j)],v),E.j,C.i,E.n,0)],v)
if(k.gv9().length!==0)C.b.H(h,A.a([H.bO,k.aa9()],v))
h.push(N.jw)
h.push(k.aac(L.dk(k.z).e))
h.push(H.bO)
u=A.x(12)
t=C.h.j(0.08)
s=A.x(12)
r=G.a4.j(0.25)
q=C.h.j(0.03)
p=C.h.j(0.03)
o=G.a4.j(0.7)
n=A.l("Use only if you have the host's table ID",j,j,j,j,j,A.B(j,j,C.h.j(0.45),j,j,j,j,j,j,j,j,11,j,j,j,j,j,!0,j,j,j,j,j,j,j,j),j,j)
m=k.aag()
l=F.Q(k.aad(H.et,"Copy",k.gjl().length===0?j:new B.baU(k,d)),1)
h.push(S.bBF(q,A.a([H.aw,m,E.aY,F.S(A.a([l,E.a2,F.Q(k.KB(!0,N.f1,"JOIN",k.Q?j:k.gaab()),1)],v),E.j,C.i,E.n,0)],v),j,p,o,new A.cB(u,new A.aL(t,1,C.E,-1)),G.a4,new A.cB(s,new A.aL(r,1,C.E,-1)),n,C.N,D.aGy))
w.push(k.aa8(F.P(h,E.a7,C.i,E.n)))
w.push(R.bj)
w.push(k.aah())
w.push(E.aG)
return A.e6(F.P(w,E.a7,C.i,E.n),j,C.P,new A.A(i,10,i,10),j,C.a3)},
aa7(d,e){var w,v,u,t,s=this,r=null,q=x.p,p=A.a([s.aMu(d),H.bZ],q)
if(s.gjl().length!==0)w=L.dk(s.z).gl0()||s.DI(s.z)
else w=!1
if(w)p.push(O.Ba(A.ah(D.a8_,G.a4,r,r,18),A.l("Enter Match",r,r,r,r,r,A.B(r,r,G.a4.j(0.95),r,r,r,r,r,r,r,r,13,r,r,C.B,r,r,!0,r,r,r,r,r,r,r,r),r,r),s.gaMz(),r))
p=F.S(p,E.j,C.i,E.n,0)
w=A.a([G.e1.j(0.35),G.a4.j(0.18)],x.O)
v=A.x(16)
u=F.R(G.a4.j(0.45),1)
w=A.y(r,A.ah(G.tn,G.e1,r,r,28),C.f,r,r,new A.t(r,r,u,v,r,new F.ai(E.V,C.a0,C.t,w,r,r),C.m),r,52,r,r,r,r,r,52)
v=K.Gb(C.jQ,D.aGP,new B.baV())
u=A.l(e,r,r,r,r,r,D.aDj,C.M,r)
t=s.a.c===D.iZ?"Set stakes and invite friends":"Enter invite code from your host"
return F.P(A.a([p,E.aG,w,E.aY,v,R.aZ,u,R.aZ,A.l(t,r,r,r,r,r,A.B(r,r,C.h.j(0.5),r,r,r,r,r,r,r,r,13,r,r,C.av,r,r,!0,r,r,r,r,r,r,r,r),C.M,r)],q),E.j,C.i,E.n)},
aMu(d){var w=null,v=A.x(12),u=A.x(12),t=F.R(G.a4.j(0.75),1.5),s=C.l.j(0.35)
return A.b1(!1,C.z,!0,w,A.b9(!1,v,!0,A.y(w,A.ah(H.bM,G.a4,w,w,18),C.f,w,w,new A.t(s,w,t,u,w,w,C.m),w,44,w,w,w,w,w,44),w,!0,w,w,w,w,w,w,w,w,new B.baP(d),w,w,w,w,w,w,w),C.f,C.w,0,w,w,w,w,w,C.G)},
aa6(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=x.p,j=A.a([],k)
for(w=x.O,v=x.V,u=0;u<3;++u){t=A.a([],k)
if(u>0){s=u<=d?A.a([G.a4.j(0.15),G.a4.j(0.55)],w):A.a([C.h.j(0.06),C.h.j(0.06)],w)
r=new A.b8(1,1)
t.push(new F.ee(1,E.cm,A.y(l,l,C.f,l,l,new A.t(l,l,l,new A.cN(r,r,r,r),l,new F.ai(E.V,C.a0,C.t,s,l,l),C.m),l,2,l,I.A4,l,l,l,l),l))}s=e[u]
r=I.Ce[u]
q=u<=d
p=u===d
if(q)o=G.a4.j(p?0.28:0.14)
else o=C.h.j(0.05)
if(p)n=G.e1
else n=q?G.a4.j(0.55):C.h.j(0.15)
m=new A.aL(n,p?2:1.5,C.E,-1)
n=p?A.a([new A.U(0,C.r,G.a4.j(0.25),C.o,10)],v):l
r=A.y(l,A.ah(r,q?G.e1:C.b1,l,l,17),C.f,l,l,new A.t(o,l,new A.cz(m,m,m,m),l,n,l,C.F),l,38,l,l,l,l,l,38)
if(p)q=C.h
else q=q?C.h.j(0.75):C.b1
p=p?C.B:C.R
t.push(F.P(A.a([r,H.aw,new A.G(76,l,A.l(s,l,2,C.H,l,l,new A.z(!0,q,l,l,l,l,10,p,l,l,l,l,1.15,l,l,l,l,l,l,l,l,l,l,l,l,l),C.M,l),l)],k),E.j,C.i,E.v))
C.b.H(j,t)}return new A.a2(E.ce,F.S(j,E.j,C.i,E.n,0),l)},
aa8(d){var w=null,v=A.x(22)
return A.y(w,d,C.f,w,w,new A.t(w,w,F.R(I.ih.j(0.5),1.5),v,A.a([new A.U(0,C.r,G.a4.j(0.1),C.o,28),new A.U(0,C.r,C.l.j(0.5),G.o6,24)],x.V),D.abq,C.m),w,w,w,w,Aj.Af,w,w,w)},
aMC(){var w,v=null,u=A.x(12),t=F.R(C.h.j(0.12),1),s=this.e,r=A.ah(I.Bm,G.a4.j(0.9),v,v,v),q=x.D
q=A.ag(new A.at(D.acL,new B.bbu(),q),q.i("aX.E"))
w=this.Q?v:new B.bbv(this)
return F.P(A.a([I.Pt,H.aw,A.y(v,new O.yD(O.buw(D.a_T,v,r,!0,q,w,I.vz,s,x.S),v),C.f,v,v,new A.t(D.ml,v,t,u,v,v,C.m),v,v,v,v,E.fx,v,v,v)],x.p),E.X,C.i,E.n)},
aMv(){return F.P(A.a([I.Pq,H.aw,this.aMG(this.r,"100",E.jy,new B.baQ(this))],x.p),E.X,C.i,E.n)},
aae(d,e,f,g,h,i,j){var w=null,v=A.B(w,w,C.h.j(0.35),w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,w,w,w,w,w,w,w)
return F.nG(w,C.aa,!1,w,!0,C.u,w,F.pb(),d,w,w,w,w,w,2,F.ov(w,w,w,G.eo,w,w,w,w,!0,new V.ej(4,A.x(12),new A.aL(C.h.j(0.12),1,C.E,-1)),w,w,w,w,w,D.ml,!0,w,w,w,w,new V.ej(4,A.x(12),new A.aL(G.a4.j(0.65),1,C.E,-1)),w,w,w,w,w,w,w,w,v,e,w,w,w,w,w,w,w,w,w,!0,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w),C.P,!0,w,!0,w,!1,w,E.cw,w,w,w,w,f,w,w,w,1,w,w,!1,"\u2022",w,g,w,h,w,!1,w,w,!1,w,!0,w,E.dn,w,w,w,w,w,w,w,w,w,w,w,I.vz,!0,C.b0,w,i,w,j,w,w)},
aMH(d,e,f,g,h,i){return this.aae(d,e,null,f,g,h,i)},
aMG(d,e,f,g){return this.aae(d,e,f,g,null,E.dt,null)},
aag(){var w=null,v=A.B(w,w,C.h.j(0.35),w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,w,w,w,w,w,w,w)
return F.nG(w,C.aa,!1,w,!0,C.u,w,F.pb(),this.f,w,w,w,w,w,2,F.ov(w,w,w,G.eo,w,w,w,w,!0,new V.ej(4,A.x(12),new A.aL(C.h.j(0.12),1,C.E,-1)),w,w,w,w,w,D.ml,!0,w,w,w,w,new V.ej(4,A.x(12),new A.aL(G.a4.j(0.65),1,C.E,-1)),w,w,w,w,w,w,w,w,v,"Enter Table ID",w,w,w,w,w,w,w,w,w,!0,!0,w,w,w,w,w,w,w,w,A.ah(I.Bp,G.a4.j(0.75),w,w,w),w,w,w,w,w),C.P,!0,w,!0,w,!1,w,E.cw,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,new B.bbP(this),w,w,w,!1,w,w,!1,w,!0,w,E.dn,w,w,w,w,w,w,w,w,w,w,w,I.vw,!0,C.b0,w,E.dt,w,w,w,w)},
KB(d,e,f,g){var w,v,u,t=null,s=g!=null,r=s?new B.bba(g):t,q=A.x(d?12:14),p=d?46:52,o=A.x(d?12:14),n=x.O
n=s?new F.ai(E.V,C.a0,C.t,A.a([G.e1.j(0.95),C.p,I.yB],n),t,t):new F.ai(E.V,C.a0,C.t,A.a([C.h.j(0.08),C.h.j(0.05)],n),t,t)
w=s?A.a([new A.U(0,C.r,G.a4.j(0.35),E.cH,12)],x.V):t
v=d?16:20
v=A.ah(e,s?C.ac:C.b1,t,t,v)
u=s?G.ip:C.b1
return A.b1(!1,C.z,!0,t,A.b9(!1,q,!0,K.f7(F.S(A.a([v,H.aX,new F.dP(1,E.b2,A.l(f,t,1,C.H,t,t,A.B(t,t,u,t,t,t,t,t,t,t,t,d?12:14,t,t,C.x,t,t,!0,t,0.2,t,t,t,t,t,t),t,t),t)],x.p),E.j,C.a_,E.n,0),t,new A.t(t,t,t,o,w,n,C.m),p,t,t),t,!0,t,t,t,t,t,t,t,t,r,t,t,t,t,t,t,t),C.f,C.w,0,t,t,t,t,t,C.G)},
aMA(d,e,f){return this.KB(!1,d,e,f)},
aad(d,e,f){var w=null,v=f!=null,u=v?G.e1:C.b1,t=v?G.a4:H.bR
t=A.F9(w,w,w,w,w,w,w,w,w,u,w,w,G.fv,w,new A.cB(A.x(12),C.y),new A.aL(t,1.5,C.E,-1),w,w,w,w)
return S.bDE(A.ah(d,w,w,w,16),A.l(e,w,w,w,w,w,I.P5,w,w),f,t)},
aac(d){var w=null,v=C.l.j(0.35),u=A.x(14),t=F.R(C.h.j(0.08),1),s=A.y(w,w,C.f,w,w,D.Sh,w,8,w,w,w,w,w,8),r=G.a4.j(0.15),q=A.x(20),p=F.R(G.a4.j(0.35),1),o=x.p
o=A.a([F.S(A.a([s,E.a2,D.aHX,H.bZ,A.y(w,A.l(""+d+"/"+this.gnW()+" Joined",w,w,w,w,w,A.B(w,w,G.e1,w,w,w,w,w,w,w,w,11,w,w,C.x,w,w,!0,w,w,w,w,w,w,w,w),w,w),C.f,w,w,new A.t(r,w,p,q,w,w,C.m),w,w,w,w,H.fw,w,w,w)],o),E.j,C.i,E.n,0),H.aD],o)
C.b.H(o,A.jo(this.gnW(),new B.bbr(this),!0,x.l))
return A.y(w,F.P(o,E.a7,C.i,E.n),C.f,w,w,new A.t(v,w,t,u,w,w,C.m),w,w,w,w,G.dB,w,w,w)},
aa9(){var w=null,v=A.x(12),u=F.R(Q.cO.j(0.45),1),t=x.p
return F.P(A.a([I.vE,H.aw,A.y(w,F.S(A.a([I.BB,H.aQ,F.Q(A.l(this.gv9(),w,w,w,w,w,R.vy,w,w),1),A.dw(w,w,w,I.BF,w,w,new B.bbb(this),w,w,w,w,w)],t),E.j,C.i,E.n,0),C.f,w,w,new A.t(D.ml,w,u,v,w,w,C.m),w,w,w,w,A8.nb,w,w,w)],t),E.X,C.i,E.n)},
aah(){var w=null
return F.S(A.a([A.ah(D.a7r,G.a4.j(0.55),w,w,14),H.aX,A.l("Fair Play  \xb7  Secure  \xb7  Trusted",w,w,w,w,w,A.B(w,w,G.a4.j(0.55),w,w,w,w,w,w,w,w,11,w,w,C.R,w,w,!0,w,0.3,w,w,w,w,w,w),w,w)],x.p),E.j,C.a_,E.n,0)},
Kz(d,e){var w,v,u,t,s,r,q=null
if(e)w=C.c.t(d.toLowerCase(),"network")||C.c.t(d.toLowerCase(),"connect")||C.c.t(d.toLowerCase(),"timeout")||C.c.t(d.toLowerCase(),"timed out")||C.c.t(d.toLowerCase(),"server")
else w=!1
v=(e?C.ay:Q.cO).j(0.12)
u=A.x(12)
t=F.R((e?C.ay:Q.cO).j(0.4),1)
s=x.p
r=A.a([],s)
if(w)C.b.H(r,A.a([D.aoa,E.aG],s))
r.push(A.l(d,q,q,q,q,q,A.B(q,q,e?C.h9:Q.qN,q,q,q,q,q,q,q,q,12,q,q,C.R,q,q,!0,q,q,q,q,q,q,q,q),C.M,q))
return A.y(q,F.P(r,E.j,C.i,E.n),C.f,q,q,new A.t(v,q,t,u,q,q,C.m),q,q,q,q,G.dB,q,q,q)}}
B.anf.prototype={}
B.Yu.prototype={
a4(){this.ag()
B.vK()
$.as.ak$.push(new B.bp9(this))},
l(){B.t5()
this.aa()}}
B.ER.prototype={
V(){var w=x.S,v=A.bp(4,0,!1,w)
return new B.Uj(v,A.F(x.N,w),C.bF,new B.N2(),null,null)}}
B.Uj.prototype={
a4(){var w,v,u=this,t=null
u.av6()
$.as.b9$.push(u)
u.x2=A.bd(t,C.ix,0,t,1,t,u)
w=A.bd(t,R.n6,0,t,1,t,u)
w.i9(0,!0)
u.xr=w
v=x.d
u.y1=new A.az(A.bT(C.dk,w,t),new A.aE(0.35,1,v),v.i("az<aP.T>"))
u.aMI()
u.Eg()
u.d=A.fA(Ak.n0,new B.bcC(u))
u.a3=A.fA(C.bT,new B.bcD(u))},
kS(d){var w,v,u,t,s,r=this
if(d===C.hZ||d===C.jO||d===C.i_){if(!r.cx){w=r.ak
if(!(w>0))if(r.aq!=null){w=r.au
v=Date.now()
u=r.aq
u.toString
u=Math.max(0,w-C.k.bj(new A.c4(v,0,!1).cz(u).a,1e6))
w=u}else w=10
r.cy=w}r.cx=!0
return}if(d===C.cz){t=r.cx
r.cx=!1
if($.jS>0)A.ho()
if(t&&r.cy!=null){w=r.cy
w.toString
s=C.k.S(w,1,10)
r.aq=new A.c4(Date.now(),0,!1)
r.ak=r.au=s
r.ah=!1
r.cy=null}if(r.c!=null&&!r.dy&&!r.fr){r.lm(!0,!0)
r.uW()}}},
kF(){var w=$.aA,v=K.aoK(w==null?"":w)
if(v!=null&&v.length!==0)return v
w=$.bb
w=w==null?null:w.a
return w==null?"":w},
V2(){var w=$.aA,v=this.kF(),u=w==null?"":w,t=this.a.c
return A.aa(["userId",v,"user_id",v,"token",u,"tableId",t,"table_id",t],x.N,x.z)},
aMI(){var w,v,u=this
M.Cw(u.a.f)
B.bxZ(u.a.f)
w=M.cw(u.a.f)
v=new B.bco(u)
u.aC=v
u.aX=u.gaxV()
u.aR=new B.bcp(u)
u.aF=u.gaOw()
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
if(w.y)u.a7b()},
Vx(d){var w,v,u="table_id",t="table",s=J.M(d),r=s.h(d,"tableId")
if(r==null)r=s.h(d,u)
if(r==null)r=s.h(d,"ludo_table_id")
if(r==null){r=x.f
if(r.b(s.h(d,t))){w=J.C(r.a(s.h(d,t)),u)
s=w==null?J.C(r.a(s.h(d,t)),"tableId"):w}else s=null}else s=r
v=s==null?null:J.J(s)
if(v==null||v.length===0)return!0
return v===this.a.c},
yP(d){var w
if(d==null||d.length===0)return!1
w=d.toLowerCase()
return C.c.t(w,"unreachable")||C.c.t(w,"socket hang up")||C.c.t(w,"econnreset")||C.c.t(w,"econnrefused")||C.c.t(w,"timed out")||C.c.t(w,"timeout")||C.c.t(w,"gateway")||C.c.t(w,"502")||C.c.t(w,"503")||C.c.t(w,"504")},
a7b(){var w,v,u=this,t=$.aA,s=u.kF()
if(t==null||t.length===0||s.length===0)return
w=u.V2()
v=M.cw(u.a.f)
if(!v.y)B.bxZ(u.a.f)
v.dL("joinRoom",w)
v.dL("getStep",w)},
uW(){var w,v,u,t=this,s=$.aA,r=t.kF()
if(s==null||s.length===0||r.length===0)return
w=new A.c4(Date.now(),0,!1)
v=t.r
if(v!=null&&w.cz(v).a<18e5)return
t.r=w
u=M.cw(t.a.f)
if(!u.y)B.bxZ(t.a.f)
u.dL("getStep",t.V2())},
axW(d){var w,v,u,t,s,r,q=this
if(q.c==null||!x.f.b(d))return
w=B.EQ(A.an(d,x.N,x.z))
if(!q.Vx(w))return
v=B.bD6(w)
if(v!=null){u=v.toLowerCase()
if(q.yP(v)||C.c.t(u,"no active game")||C.c.t(u,"waiting for players")||C.c.t(u,"not started"))return
q.E(new B.bbT(q,v))
return}t=B.a49(w)
s=J.bY(w)
r=s.aw(w,"currentTurnIndex")||s.aw(w,"current_turn_index")||s.aw(w,"nextTurnIndex")||s.aw(w,"next_turn_index")||s.aw(w,"playerIds")||s.aw(w,"player_ids")||s.aw(w,"dice")||s.aw(w,"turnExpiresAt")||s.aw(w,"turn_expires_at")
if(!t&&!r)return
if(q.dy||q.fr){q.to=B.q5(q.to,w)
return}q.T3(w)},
U_(){var w=this,v=w.to
if(v==null||w.dy||w.fr)return
w.to=null
w.T3(v)},
a4V(d){var w,v,u,t,s,r,q,p,o,n
if(d==null)return""
w=B.q4(d)
v=B.ng(d)
u=B.vI(d)
t=B.oB(d)
s=B.aCA(d)
if(s==null)s=""
r=B.q6(d)
q=w+"|"+v+"|"+u+"|"+t+"|"+s+"|"
for(p=r.length,o=0;o<r.length;r.length===p||(0,A.X)(r),++o){for(n=J.aZ(r[o]);n.A();)q+=""+B.MY(n.gO(n))+"."
q+=";"}return q.charCodeAt(0)==0?q:q},
UE(d){var w,v,u,t,s,r,q=this,p="ludoState",o=q.CW
if(o==null||o<=0)return
w=q.y
if(w==null)w=d
v=B.q7(w,q.kF())
u=B.ng(d)
if(B.q4(d)==="moving")w=v>=0&&u>=0&&u!==v
else w=!0
if(w){q.CW=null
return}t=d.h(0,p)
w=x.N
s=x.z
r=x.f.b(t)?A.an(t,w,s):A.F(w,s)
r.k(0,"phase","moving")
r.k(0,"lastDice",o)
d.k(0,p,r)
d.k(0,"dice",o)
if(v>=0){d.k(0,"currentTurnIndex",v)
d.k(0,"current_turn_index",v)}},
T3(d){var w,v=this,u=B.q5(v.y,d)
if(u!=null){w=v.CW
w=w!=null&&w>0}else w=!1
if(w)v.UE(u)
if(v.a4V(u)===v.a4V(v.y)){v.y=u
v.Wy()
return}v.E(new B.bbV(v,u))
v.VR()
v.a6G()
v.Wy()},
a6G(){var w,v,u,t,s,r,q,p=this,o=p.y
if(o==null)return
w=p.kF()
v=B.q7(o,w)
u=B.oB(o)
t=B.ng(o)
s=v>=0&&t===v&&!u
if(u&&!p.a_){r=B.aCA(o)
q=$.bG()
q.bt(0,r===w?X.bG:X.bY)}else if(s&&p.C===!1)$.bG().bt(0,N.oz)
p.a_=u
p.C=s},
aOx(d){var w,v,u=this
if(u.c==null)return
w=typeof d=="number"?d:A.dn(A.v(d))
if(w==null||!isFinite(w))return
v=B.br0(Math.max(0,C.d.ft(w)))
u.E(new B.bc6(u,v))
if(v===0&&!u.cx)u.aai()},
SW(){var w=this
w.ak=0
w.Y=""
w.aW=w.aq=null
w.ah=!1},
Lt(){var w,v,u=this
u.ah=!1
u.aW=null
u.aq=new A.c4(Date.now(),0,!1)
u.ak=u.au=10
w=u.y
if(w!=null){v=B.ng(w)
u.Y=B.bJk(w,B.q4(w),v)}},
VR(){var w,v,u,t=this,s=t.y
if(s==null)return
w=B.ng(s)
v=B.bJk(s,B.q4(s),w)
if(v===t.Y)return
t.Y=v
t.ah=!1
u=B.c4e(s,t.aW)
t.aq=new A.c4(Date.now(),0,!1)
t.au=u>0?u:10},
aMJ(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this
if(i.c==null||i.cx)return
w=i.y
v=B.q7(w,i.kF())
u=B.ng(w)
t=B.q4(w)
s=B.oB(w)
r=w!=null&&v>=0&&u===v&&!s
q=i.ch!=null||i.RG!=null||i.fr
p=i.CW
o=p==null
n=!o&&p>0&&t==="moving"
if(r)m=(t==="rolling"||n)&&!i.dy&&!q
else m=!1
if(!m){if(i.ak!==0||i.Y.length!==0)if(o)i.E(new B.bct(i))
return}i.VR()
if(i.aq!=null){p=i.au
o=Date.now()
l=i.aq
l.toString
k=Math.max(0,p-C.k.bj(new A.c4(o,0,!1).cz(l).a,1e6))}else k=0
j=B.br0(k)
if(j!==i.ak)i.E(new B.bcu(i,j))
if(j===0&&!i.cx)i.aai()},
gnV(){var w,v,u=this,t=null
if(!(B.a49(u.y)&&!B.MW(u.y)))if(B.MW(u.y)||B.MW(u.x))return!1
w=u.x
if(w==null)w=t
else{w=J.C(w,"status")
w=w==null?t:J.J(w)}if(w==="playing")return!0
w=u.y
w=w==null?t:w.h(0,"gameId")
if(w==null){w=u.y
w=w==null?t:w.h(0,"game_id")}v=w==null?t:C.c.P(J.J(w))
return(v==null?"":v).length!==0},
Dv(){var w,v,u,t=this
if(!t.gnV()||B.oB(t.y))return!1
w=t.kF()
v=B.q7(t.y,w)
u=B.ng(t.y)
if(v<0||u<0)return!1
return u!==v},
nL(){var w=0,v=A.p(x.H),u,t=2,s=[],r=[],q=this,p,o,n
var $async$nL=A.q(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(!q.gpw()){q.lm(!0,!0)
w=1
break}w=q.c==null||q.dx?3:4
break
case 3:w=5
return A.e(q.lm(!0,!0),$async$nL)
case 5:w=1
break
case 4:q.dx=!0
q.aRt()
t=6
o=x.H
w=9
return A.e(A.cr(C.hf,null,o),$async$nL)
case 9:q.uW()
p=0,n=q.gaAx()
case 10:if(!(p<12)){w=12
break}if(q.c==null){r=[1]
w=7
break}w=13
return A.e(q.lm(!0,!0),$async$nL)
case 13:if(q.c!=null){n.$0()
q.c.dl()
q.Wy()}if(!q.Dv()){if(q.c!=null){new B.bbU(q).$0()
q.c.dl()}r=[1]
w=7
break}w=14
return A.e(A.cr(new A.aU(1000*(900+p*100)),null,o),$async$nL)
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
Kg(d,e){if(e>=4)return
if(d<1||d>6)return
this.fy[e]=d},
aAy(){var w,v,u,t=this
if(B.q4(t.y)==="rolling")return
w=B.vI(t.y)
if(w<=0)return
v=B.ng(t.y)
if(v<0)return
u=B.t7(v,t.ghV())
t.Kg(w,u)
if(!t.dy){t.id=C.k.S(w,1,6)
t.k1=u}},
aai(){var w=this
if(w.ah)return
w.ah=!0
if(w.gnV()){w.uW()
w.lm(!0,!0)}else w.pF()},
Eg(){var w=0,v=A.p(x.H),u=this
var $async$Eg=A.q(function(d,e){if(d===1)return A.m(e,v)
for(;;)switch(w){case 0:u.uW()
w=u.gnV()?2:4
break
case 2:w=5
return A.e(u.Ws(!0),$async$Eg)
case 5:w=3
break
case 4:w=6
return A.e(u.pF(),$async$Eg)
case 6:case 3:return A.n(null,v)}})
return A.o($async$Eg,v)},
lm(d,e){return this.aWn(d,e)},
LZ(d){return this.lm(d,!1)},
Ws(d){return this.lm(!1,d)},
aWn(d,e){var w=0,v=A.p(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m
var $async$lm=A.q(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(q.w){w=1
break}if(!e)q.uW()
p=$.aA
if(p==null||p.length===0){w=1
break}n=new A.c4(Date.now(),0,!1)
if(!d){m=q.f
m=m!=null&&n.cz(m).a<16e5}else m=!1
if(m){w=1
break}q.f=n
q.w=!0
t=3
w=6
return A.e(B.a46(q.a.c,p),$async$lm)
case 6:o=g
if(q.c==null||o==null){r=[1]
w=4
break}if(!q.Vx(o)){r=[1]
w=4
break}if(q.dy||q.fr){q.to=B.q5(q.to,o)
r=[1]
w=4
break}m=q.z
if(m!=null&&q.yP(m))q.z=null
q.T3(o)
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
return A.o($async$lm,v)},
pF(){var w=0,v=A.p(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i,h,g,f
var $async$pF=A.q(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.w){w=1
break}p=$.aA
if(p==null||p.length===0){w=1
break}j=new A.c4(Date.now(),0,!1)
i=q.f
if(i!=null&&j.cz(i).a<3e6){w=1
break}q.f=j
q.w=!0
t=3
i={}
w=6
return A.e(B.a46(q.a.c,p),$async$pF)
case 6:o=e
i.a=null
w=o==null||q.x==null?7:9
break
case 7:f=i
w=10
return A.e(B.MU(q.a.c,p),$async$pF)
case 10:e=f.a=e
w=8
break
case 9:e=null
case 8:h=e
if(q.c==null){r=[1]
w=4
break}n=q.aET(h)
m=n!=null||h!=null
l=o!=null&&q.Vx(o)
h=n
if(h==null)h=q.x
if(h==null)g=null
else{h=J.C(h,"status")
g=h==null?null:J.J(h)}k=g
q.E(new B.bcb(i,q,m,n,l,k,o))
q.VR()
q.a6G()
q.DJ()
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
return A.o($async$pF,v)},
KG(){var w=0,v=A.p(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$KG=A.q(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(r.as){w=1
break}q=$.aA
p=r.kF()
if(q==null||q.length===0||J.au(p)===0){w=1
break}o=r.x
if(o==null)n=null
else{o=J.C(o,"status")
n=o==null?null:J.J(o)}if(n!=="waiting"){w=1
break}if(r.gnV()){w=1
break}if(B.oB(r.y)){w=1
break}if(B.a49(r.y)){w=1
break}r.as=!0
t=4
w=7
return A.e(B.bvg(r.a.c,q,p),$async$KG)
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
return A.o($async$KG,v)},
aRt(){var w,v,u,t,s=this
if(!s.gpw()||s.dy||s.c==null)return
w=s.y
if(w==null||B.oB(w))return
v=B.q7(w,s.kF())
u=B.ng(w)
if(v<0||u<0)return
t=u===v?s.aND(u):u
if(t<0||t===v)return
s.Wl(B.t7(t,s.ghV()))},
aND(d){var w,v,u,t,s=this.ghV()
if(s<=0)return-1
w=B.MX(this.y,this.x)
for(v=w.length,u=1;u<=s;++u){t=C.k.ab(d+u,s)
if(t<v&&C.c.P(w[t]).length!==0)return t}return C.k.ab(d+1,s)},
Wl(d){var w=this,v=w.c
if(v==null)return
if(w.k3&&w.k4===d)return
v=w.p1
if(v!=null)v.U(0)
w.p2=w.p1=null
$.bG().bt(0,W.lx)
w.E(new B.bcr(w,d))},
aRI(d,e){var w,v,u=this
if(e<1||e>6)return
u.Wl(d)
if(u.p2===e&&u.p1!=null)return
u.p2=e
w=u.p1
if(w!=null)w.U(0)
v=u.ok
if(v==null)v=new A.c4(Date.now(),0,!1)
u.p1=A.c0(A.cc(0,Math.max(0,900-C.k.bj(new A.c4(Date.now(),0,!1).cz(v).a,1000)),0),new B.bc8(u))},
ael(){var w=this,v=w.p1
if(v!=null)v.U(0)
w.p1=null
if(w.c==null)return
if(!w.k3&&w.p2==null)return
w.E(new B.bcs(w,w.k4,w.p2))},
Wy(){var w,v,u,t,s,r,q,p=this
if(!p.gpw()||p.dy||p.c==null)return
w=p.y
if(w==null||B.oB(w)){p.ael()
return}v=B.q7(w,p.kF())
u=B.ng(w)
t=B.q4(w)
s=B.vI(w)
if(v<0||u<0||u===v){if(p.k3)p.ael()
return}r=B.t7(u,p.ghV())
if(t==="rolling"){q=p.p1
if(q!=null)q.U(0)
p.p2=p.p1=null
p.Wl(r)
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
$.as.hg(r)
w=M.cw(r.a.f)
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
r.KG()
Af.bxX(r.a.f)
r.av5()},
aET(d){var w,v
if(d==null)return null
w=J.C(d,"table_data")
if(x.j.b(w)&&J.cE(w)){v=J.fn(w)
if(x.P.b(v))return v
if(x.f.b(v))return A.an(v,x.N,x.z)}return d},
gaaC(){var w=this.x
return L.N6(w==null?A.F(x.N,x.z):w)},
KU(){return this.gaaC().d>0?this.gaaC().d:this.a.e},
gpw(){return C.c.t(this.a.r.toLowerCase(),"computer")},
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
DJ(){var w=0,v=A.p(x.H),u,t=this,s,r,q,p
var $async$DJ=A.q(function(d,e){if(d===1)return A.m(e,v)
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
if(r!=null&&new A.c4(s,0,!1).cz(r).a<4e6){w=1
break}w=t.gpw()?3:4
break
case 3:w=5
return A.e(t.nS(!1),$async$DJ)
case 5:w=1
break
case 4:q=t.a.r.toLowerCase()
w=C.c.t(q,"local")&&!C.c.t(q,"computer")?6:7
break
case 6:p=t.KU()
w=B.MX(t.y,t.x).length>=p&&p>0?8:9
break
case 8:w=10
return A.e(t.nS(!1),$async$DJ)
case 10:case 9:case 7:case 1:return A.n(u,v)}})
return A.o($async$DJ,v)},
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
q.ay=new A.c4(Date.now(),0,!1)
q.E(new B.bbW(q))
t=4
n=q.KU()
m=B.MX(q.y,q.x).length
l=n-m
w=l>0&&q.gpw()?7:8
break
case 7:w=9
return A.e(L.vc(l,q.a.c,p),$async$nS)
case 9:k=a6
if(q.c==null){r=[1]
w=5
break}q.axX(k)
case 8:j=M.cw(q.a.f)
j.dL("startGame",q.V2())
w=10
return A.e(B.aCp(q.a.c,p,o),$async$nS)
case 10:i=a6
O.dl()
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
return A.e(q.LZ(!0),$async$nS)
case 11:w=q.c!=null&&q.Dv()?12:13
break
case 12:w=14
return A.e(q.nL(),$async$nS)
case 14:case 13:w=q.c!=null&&!q.gnV()?15:16
break
case 15:w=17
return A.e(q.pF(),$async$nS)
case 17:case 16:r.push(6)
w=5
break
case 4:t=3
a3=s.pop()
g=A.a9(a3)
if(g instanceof B.lC){e=g
if(a4&&q.c!=null&&!q.yP(e.a))q.c.X(x.q).f.b4(F.c8(null,null,null,null,null,C.u,null,A.l(e.a,null,null,null,null,null,null,null,null),null,E.a1,null,null,null,null,null,null,null,null,null,null))}else{d=g
if(a4&&q.c!=null&&!q.yP(A.v(d)))q.c.X(x.q).f.b4(F.c8(null,null,null,null,null,C.u,null,A.l(A.v(d),null,null,null,null,null,null,null,null),null,E.a1,null,null,null,null,null,null,null,null,null,null))}r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
q.ax=!1
if(q.c!=null)q.E(new B.bbX(q))
w=r.pop()
break
case 6:case 1:return A.n(u,v)
case 2:return A.m(s.at(-1),v)}})
return A.o($async$nS,v)},
aVK(){return this.nS(!0)},
pG(){var w=0,v=A.p(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4
var $async$pG=A.q(function(d5,d6){if(d5===1){s.push(d6)
w=t}for(;;)switch(w){case 0:d2=$.aA
d3=q.kF()
if(d2==null||d2.length===0||J.au(d3)===0){w=1
break}if(B.oB(q.y)){w=1
break}if(q.dy||q.fr||q.Q){w=1
break}b8=B.q7(q.y,d3)
p=b8>=0?B.t7(b8,q.ghV()):0
q.E(new B.bcc(q))
O.dl()
$.bG().bt(0,W.lx)
t=4
b9={}
o=B.bvi(q.a.c,d2,d3)
b9.a=b9.b=null
o.bI(new B.bcd(b9),x.P).mb(new B.bce(b9))
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
c1.z=C.bI
c1.y=c1.w=null
c1.r.um(0,!0)
c1.Dn(0)
c1.aE()
c2=c1.Q
c2===$&&A.b()
if(c1.as!==c2){c1.as=c2
c1.wU(c2)}c1.J6(c1.b)
new B.bcf(q).$0()
q.c.dl()
w=9
return A.e(A.cr(E.kC,null,c0),$async$pG)
case 9:w=7
break
case 8:c1=b9.a
if(c1!=null)throw A.j(c1)
k=new A.c4(Date.now(),0,!1).pl(6e6)
case 10:c1=!1
if(b9.b==null)if(q.c!=null){c1=Date.now()
c2=k
c3=c2.a
if(c1>=c3)c1=c1===c3&&0<c2.b
else c1=!0}if(!c1){w=11
break}w=12
return A.e(A.cr(C.rf,null,c0),$async$pG)
case 12:w=10
break
case 11:if(q.c==null){r=[1]
w=5
break}c1=b9.b
if(c1==null){c0=A.aY("Dice roll timed out")
throw A.j(c0)}j=B.EQ(c1)
c4=J.C(j,"dice")
i=c4==null?B.vI(j):c4
if(typeof i=="number"&&C.d.aj(i)>0)q.go=C.d.aj(i)
c5=q.go
h=c5==null?B.vI(j):c5
if(q.c==null){r=[1]
w=5
break}c1=q.x2
c1===$&&A.b()
c1.sq(0,0)
q.E(new B.bcg(q,j,h,p))
if(h>0){c6=J.C(j,"mustMove")
g=c6==null?J.C(j,"must_move"):c6
c7=!0
if(!J.f(g,!1))if(!J.f(g,0)){c1=g
c1=(c1==null?null:J.J(c1))==="false"
c7=c1}f=c7
if(!f)q.CW=h}q.U_()
if(h<=0){r=[1]
w=5
break}w=13
return A.e(A.cr(Ad.rh,null,c0),$async$pG)
case 13:if(q.c==null){r=[1]
w=5
break}c8=J.C(j,"mustMove")
e=c8==null?J.C(j,"must_move"):c8
c9=!0
if(!J.f(e,!1))if(!J.f(e,0)){c0=e
c0=(c0==null?null:J.J(c0))==="false"
c9=c0}d=c9
a0=B.q7(q.y,d3)
a1=a0>=0?B.t7(a0,q.ghV()):-1
a2=B.q6(q.y)
a3=q.CY(q.vB(a2,q.ghV()))
c0=$.o7()
a4=new B.jR(c0)
a5=q.DN(a2,h,a3,a1,q.ghV(),a4,!0)
w=d&&J.au(a5)===0&&!J.f(h,6)?14:15
break
case 14:q.CW=null
if(q.c!=null)q.E(new B.bch(q))
w=16
return A.e(q.nL(),$async$pG)
case 16:r=[1]
w=5
break
case 15:q.CW=h
q.E(new B.bci(q,h))
a6=B.q7(q.y,d3)
a7=a6>=0?B.t7(a6,q.ghV()):-1
a8=B.q6(q.y)
a9=q.CY(q.vB(a8,q.ghV()))
b0=new B.jR(c0)
d0=q.DN(a8,h,a9,a7,q.ghV(),b0,!0)
b9.c=d0
if(d0.length===0&&J.f(h,6)&&a7>=0&&a7<J.au(a9)){b1=A.a([],x.t)
for(b2=0;b2<J.au(J.C(a9,a7));++b2){b3=J.C(J.C(a9,a7),b2)
if(b3.a&&!b3.c)J.e_(b1,b2)}b9.c=b1}c0=b9.c.length
w=c0===0?17:18
break
case 17:w=J.f(h,6)?19:20
break
case 19:w=21
return A.e(q.lm(!0,!0),$async$pG)
case 21:if(q.c==null){r=[1]
w=5
break}b4=B.q6(q.y)
b5=q.CY(q.vB(b4,q.ghV()))
b6=q.DN(b4,h,b5,a7,q.ghV(),b0,!0)
if(J.au(b6)===1){q.pC(J.fn(b6))
r=[1]
w=5
break}if(J.au(b6)!==0){q.Lt()
if(q.c!=null)q.E(new B.bcj())
r=[1]
w=5
break}q.CW=null
q.E(new B.bck(q))
q.Lt()
r=[1]
w=5
break
case 20:q.CW=null
w=22
return A.e(q.Ex(h,a6),$async$pG)
case 22:r=[1]
w=5
break
case 18:if(c0===1)$.as.ak$.push(new B.bcl(b9,q))
else q.Lt()
r.push(6)
w=5
break
case 4:t=3
d4=s.pop()
c0=A.a9(d4)
if(c0 instanceof B.lC){b7=c0
if(q.c!=null&&!q.yP(b7.a))q.c.X(x.q).f.b4(F.c8(null,null,null,null,null,C.u,null,A.l(b7.a,null,null,null,null,null,null,null,null),null,E.a1,null,null,null,null,null,null,null,null,null,null))}r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null){c0=q.x2
c0===$&&A.b()
c0.sq(0,0)
if(q.dy)q.E(new B.bcm(q))}w=r.pop()
break
case 6:case 1:return A.n(u,v)
case 2:return A.m(s.at(-1),v)}})
return A.o($async$pG,v)},
Ex(d,e){return this.aVA(d,e)},
aVA(d,e){var w=0,v=A.p(x.H),u,t=this
var $async$Ex=A.q(function(f,g){if(f===1)return A.m(g,v)
for(;;)switch(w){case 0:if(t.c==null){w=1
break}t.CW=null
t.E(new B.bcq(t))
w=3
return A.e(t.nL(),$async$Ex)
case 3:case 1:return A.n(u,v)}})
return A.o($async$Ex,v)},
aXa(d,e){return d.a===e.a&&d.c===e.c&&d.b===e.b},
UR(d,e,f,g,h){var w,v=this.R8===g&&this.RG===h,u=!f.a
if(u&&!f.c&&d.a){if(v)return!0
u=$.o7()
w=new B.jR(u).p8(g,f)
if(w!=null&&new B.jR(u).alS(e,g,w)||this.ry.aw(0,""+g+":"+h))return!1
return!0}if(f.c&&!d.c)return!0
if(u&&!d.a&&f.b>d.b)return!0
return!1},
KK(d,e,f){var w=this.ry.h(0,""+d+":"+e)
if(w==null||f.a||f.c)return f
if(new B.jR($.o7()).p8(d,f)===w)return D.fH
return f},
Ll(d,e,f){var w,v,u,t,s,r,q,p=this.ry,o=!1,n=0
for(;;){if(!(n<d.length&&n<e.length))break
w=""+n+":"
v=0
for(;;){if(!(v<J.au(d[n])&&v<J.au(e[n])))break
c$0:{u=J.C(d[n],v)
t=J.C(e[n],v)
if(u.a||u.c||!t.a)break c$0
s=$.o7()
r=new B.jR(s).p8(n,u)
if(r==null||D.oy.t(0,r))break c$0
if(!new B.jR(s).alS(e,n,r))break c$0
q=w+v
s=p.aw(0,q)
p.k(0,q,r)
if(!s)o=!0}++v}++n}if(f&&o)$.bG().bt(0,D.NE)},
ay3(d){var w,v,u,t,s,r,q,p,o,n=A.a([],x.s)
for(w=this.ry,v=new A.eh(w,A.H(w).i("eh<1,2>")).gad(0);v.A();){u=v.d
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
continue}if(new B.jR($.o7()).p8(r,p)===u.b)J.ea(d[r],q,D.fH)
else n.push(t)}for(v=n.length,o=0;o<n.length;n.length===v||(0,A.X)(n),++o)w.L(0,n[o])},
aKM(){var w,v,u=this,t=B.ng(u.y)
if(t<0)return null
w=u.ghV()
if(w<=0)return null
v=B.vI(u.y)
return B.t7(B.q4(u.y)==="rolling"&&v===6?t:C.k.ab(t-1+w,w),w)},
JP(d,e){var w,v,u=this,t=u.pr(d)
u.ay3(t)
w=u.rx
if(w==null)w=u.aKM()
if(w==null)return t
v=u.pr(t)
new B.jR($.o7()).Z_(t,w)
u.Ll(v,t,e)
return t},
a7B(d){return this.JP(d,!1)},
pr(d){var w,v,u,t=A.a([],x.Q)
for(w=d.length,v=x.r,u=0;u<d.length;d.length===w||(0,A.X)(d),++u)t.push(A.bF(d[u],!0,v))
return t},
a9U(){var w=B.q6(this.y)
if(w.length===0)return null
return this.vB(w,this.ghV())},
ghV(){var w=this.KU()
return B.a4h(w>0?w:this.a.e)},
CY(d){var w,v,u,t,s,r,q,p,o=this,n=o.a9U()
if(n==null)n=d
w=o.p4
if(w==null)return o.a7B(n)
v=o.pr(n)
u=w.length
t=v.length
u=u<t?u:t
for(s=0;s<u;++s){r=J.au(w[s])<J.au(v[s])?J.au(w[s]):J.au(v[s])
for(q=0;q<r;++q){p=J.C(w[s],q)
if(o.UR(n[s][q],n,p,s,q))J.ea(v[s],q,J.C(w[s],q))}}return o.a7B(v)},
Ef(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=k.a9U()
if(j==null)return
w=new B.bca(k)
if(k.fr)return
v=k.R8
u=k.RG
if(v!=null&&u!=null&&k.p4!=null){t=k.pr(j)
s=k.p4
if(v<s.length&&u<J.au(s[v])&&v<t.length&&u<J.au(t[v])){r=J.C(k.p4[v],u)
q=j[v][u]
if(k.aXa(r,q)){s=k.x1
if(s!=null)s.U(0)
k.RG=k.R8=k.x1=null
w.$1(t)}else if(k.UR(q,j,r,v,u)){J.ea(t[v],u,r)
w.$1(t)}else{s=k.x1
if(s!=null)s.U(0)
k.RG=k.R8=k.x1=null
w.$1(t)}}else w.$1(t)
return}p=k.p4
if(p!=null&&!k.Q){k.aNH(p,j)
t=k.pr(j)
o=!1
n=0
for(;;){if(!(n<p.length&&n<t.length))break
m=0
for(;;){if(!(m<J.au(p[n])&&m<J.au(t[n])))break
s=J.C(p[n],m)
if(k.UR(j[n][m],j,s,n,m)){J.ea(t[n],m,J.C(p[n],m))
o=!0}++m}++n}if(o){w.$1(t)
return}l=k.aFh(p,j)
if(l!=null){$.as.ak$.push(new B.bc9(k,l,j))
return}}w.$1(j)},
aNH(d,e){var w,v,u,t,s,r,q,p,o=this,n=null,m=0
for(;;){if(!(m<d.length&&m<e.length))break
w=0
for(;;){if(!(w<J.au(d[m])&&w<e[m].length))break
v=o.KK(m,w,J.C(d[m],w))
u=o.KK(m,w,e[m][w])
t=v.a
s=t&&!u.a&&!u.c
r=!t&&!u.a&&!v.c&&u.b>v.b
if(s||r)n=m;++w}++m}if(n!=null)o.rx=n
o.Ll(d,e,!0)
q=o.rx
if(q==null)return
p=o.pr(e)
new B.jR($.o7()).Z_(p,q)
o.Ll(e,p,!0)},
aFh(d,e){var w,v,u,t,s,r,q=null,p=0,o=0
for(;;){if(!(o<d.length&&o<e.length))break
w=0
for(;;){if(!(w<J.au(d[o])&&w<e[o].length))break
c$0:{v=this.KK(o,w,J.C(d[o],w))
u=this.KK(o,w,e[o][w])
t=v.a
s=u.a
if(t===s&&v.c===u.c&&v.b===u.b)break c$0;++p
if(t&&!s)q=new A.Vp([6,v,o,w])
else if(!t&&!s&&!v.c&&u.b>v.b){r=u.b-v.b
if(r>=1&&r<=6)q=new A.Vp([r,v,o,w])}}++w}++o}if(q==null||p>4)return null
return q},
J5(d,e){return this.axI(d,e)},
axI(d,e){var w=0,v=A.p(x.H),u,t=this,s,r,q,p,o,n
var $async$J5=A.q(function(f,g){if(f===1)return A.m(g,v)
for(;;)switch(w){case 0:if(t.c==null||t.fr||t.RG!=null){w=1
break}s=$.o7()
r=d.a
q=r[2]
p=r[3]
o=r[1]
n=new B.jR(s).a06(q,r[0],o,p)
if(n.length<=1){t.rx=r[2]
t.E(new B.bbR(t,e))
w=1
break}$.bG().bt(0,D.uZ)
w=3
return A.e(t.Cw(r[2],r[3],n,!1,190),$async$J5)
case 3:if(t.c==null){w=1
break}t.E(new B.bbS(t,d,e))
t.fr=!1
t.U_()
case 1:return A.n(u,v)}})
return A.o($async$J5,v)},
Cw(d,e,f,g,h){return this.axH(d,e,f,!1,h)},
axG(d,e,f,g){return this.Cw(d,e,f,g,null)},
axH(d,e,f,g,h){var w=0,v=A.p(x.H),u,t=this,s,r
var $async$Cw=A.q(function(i,j){if(i===1)return A.m(j,v)
for(;;)switch(w){case 0:if(f.length<=1){w=1
break}t.fr=!0
t.E(new B.bbQ(t,d,e,f))
s=f.length
r=h==null?110:h
w=3
return A.e(A.cr(A.cc(0,(s-1)*r,0),null,x.H),$async$Cw)
case 3:if(t.c==null){t.fr=!1
t.p3=null
w=1
break}case 1:return A.n(u,v)}})
return A.o($async$Cw,v)},
pC(d){return this.aNk(d)},
aNk(b7){var w=0,v=A.p(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6
var $async$pC=A.q(function(b8,b9){if(b8===1){s.push(b9)
w=t}for(;;)switch(w){case 0:b3={}
b4=$.aA
b5=q.kF()
if(b4==null||b4.length===0||J.au(b5)===0){w=1
break}if(B.oB(q.y)){w=1
break}if(q.dy||q.fr||q.Q){w=1
break}if(q.RG!=null){w=1
break}j=q.y
i=b3.a=B.vI(j)
if(i<=0){i=q.CW
h=b3.a=i==null?0:i}else h=i
if(h<=0){w=1
break}g=B.q6(j)
f=q.ghV()
e=B.q7(j,b5)
if(e<0){w=1
break}p=B.t7(e,f)
o=B.bDc(p,f)
h=q.p4
if(h!=null)d=q.pr(h)
else d=g.length===0?q.a7e():q.vB(g,f)
for(h=x.b;a0=d.length,a0<4;){a1=A.a(new Array(4),h)
for(a2=0;a2<4;++a2)a1[a2]=D.fH
d.push(a1)}if(p<0||p>=a0){w=1
break}if(b7<0||b7>=J.au(d[p])){w=1
break}a3=J.C(d[p],b7)
a4=new B.jR($.o7())
h=b3.a
if(!a4.Y7(h,a3)){w=1
break}a5=a4.a06(p,h,a3,b7)
q.E(new B.bc_(q,d))
O.dl()
$.bG().bt(0,D.uZ)
w=a5.length>1?3:4
break
case 3:w=5
return A.e(q.axG(p,b7,a5,!1),$async$pC)
case 5:case 4:if(q.c==null){q.fr=!1
w=1
break}n=q.pr(d)
a6=a4.agU(n,p,b3.a,b7)
q.rx=p
q.Ll(d,n,a6!=null)
h=J.C(J.C(n,p),b7)
b3.b=q.U3(b3.a,j,o,h,b7)
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
b3.b=q.U3(b3.a,h,a8,b1,a9)}++a9}}++a7}q.E(new B.bc0(b3,q,n,p,b7,e))
h=q.fr=!1
q.U_()
a0=q.x1
if(a0!=null)a0.U(0)
q.x1=A.c0(Y.mX,new B.bc1(q))
t=7
a0=q.a.c
w=10
return A.e(B.bvh(b3.a,a0,b4,b7,b5),$async$pC)
case 10:m=b9
if(q.c!=null){a0=q.x1
if(a0!=null)a0.U(0)
q.CW=q.x1=null
q.E(new B.bc2(b3,q,m,o,b7,n,p))}w=b3.a!==6?11:13
break
case 11:w=14
return A.e(q.nL(),$async$pC)
case 14:w=12
break
case 13:w=15
return A.e(q.LZ(!0),$async$pC)
case 15:q.uW()
case 12:r.push(9)
w=8
break
case 7:t=6
b6=s.pop()
a0=A.a9(b6)
if(a0 instanceof B.lC){l=a0
if(q.c!=null?!q.yP(l.a):h)q.c.X(x.q).f.b4(F.c8(null,null,null,null,null,C.u,null,A.l(l.a,null,null,null,null,null,null,null,null),null,E.a1,null,null,null,null,null,null,null,null,null,null))
if(q.c!=null){h=q.x1
if(h!=null)h.U(0)
q.x1=null
q.CW=b3.a
q.ch=null
q.E(new B.bc3(b3,q,n))}q.LZ(!0)}else{k=a0
if(q.c!=null){h=q.x1
if(h!=null)h.U(0)
q.x1=null
q.CW=b3.a
q.ch=null
q.E(new B.bc4(q))
q.c.X(x.q).f.b4(F.c8(null,null,null,null,null,C.u,null,A.l(A.v(k),null,null,null,null,null,null,null,null),null,E.a1,null,null,null,null,null,null,null,null,null,null))}q.LZ(!0)}r.push(9)
w=8
break
case 6:r=[2]
case 8:t=2
if(q.c!=null)q.E(new B.bc5(q))
w=r.pop()
break
case 9:case 1:return A.n(u,v)
case 2:return A.m(s.at(-1),v)}})
return A.o($async$pC,v)},
U3(d,e,f,g,h){var w,v,u,t,s,r,q,p,o="ludoState",n=x.N,m=x.z,l=e==null?A.F(n,m):A.an(e,n,m),k=l.h(0,o),j=x.f.b(k)?A.an(k,n,m):A.F(n,m),i=B.q6(l)
if(i.length===0){w=this.ghV()
v=J.il(w,x.U)
for(u=x.Y,t=0;t<w;++t){s=A.a(new Array(4),u)
for(r=0;r<4;++r)s[r]=A.aa(["stepNo",0],n,m)
v[t]=s}i=v}for(u=x.Y;i.length<=f;){v=A.a(new Array(4),u)
for(q=0;q<4;++q)v[q]=A.aa(["stepNo",0],n,m)
C.b.M(i,v)}p=A.bF(i[f],!0,x.P)
while(p.length<=h)p.push(A.aa(["stepNo",0],n,m))
n=A.d8(p[h],n,m)
n.k(0,"stepNo",this.aef(g))
n.k(0,"packed",!1)
p[h]=n
i.$flags&2&&A.aG(i)
i[f]=p
j.k(0,"cards",i)
if(!g.a){j.k(0,"lastDice",0)
j.k(0,"phase","rolling")}l.k(0,o,j)
l.k(0,"dice",0)
return l},
aef(d){if(d.c)return 57
if(d.a)return 0
return d.b+1},
aCf(d,e,f,g){if(g!==e)return 0
if(d>0)return d
return 0},
adt(d){var w,v,u=this.ghV()
for(w=0;w<u;++w){v=D.j1.h(0,B.N4(w,u))
if((v==null?0:v)===d)return w}return-1},
aX8(d,e){if(e)return D.aoj
if(d<=0)return D.fH
if(d>=57)return D.u9
return new B.jp(!1,d-1,!1)},
a7e(){var w,v,u,t,s=J.il(4,x.I)
for(w=x.b,v=0;v<4;++v){u=A.a(new Array(4),w)
for(t=0;t<4;++t)u[t]=D.fH
s[v]=u}return s},
aR6(d,e){var w,v,u=B.bTp(e)
for(w=0;w<d.length;++w){v=D.j1.h(0,B.N4(w,e))
if(v==null)v=0
if(v<4)u[v]=!0}return u},
vB(d,e){var w,v,u,t,s,r,q,p,o=this.a7e()
for(w=0;w<d.length;++w){v=D.j1.h(0,B.N4(w,e))
if(v==null)v=0
u=d[w]
for(t=J.M(u),s=0;s<4;++s){r=s<t.gB(u)?t.h(u,s):C.cn
q=B.MY(r)
p=J.f(J.C(r,"packed"),!0)
o[v][s]=this.aX8(q,p)}}return o},
DN(d,e,f,g,h,i,j){var w,v,u,t,s,r,q,p,o,n,m,l,k
if(!j||e<=0||g<0)return C.bA
w=new B.bbY(f,i,g,e)
v=e===6
if(v){u=w.$0()
if(J.au(u)!==0)return u}t=B.bDc(g,h)
s=!1
if(t<d.length&&g<f.length){r=d[t]
for(q=J.M(r),p=0;p<4;++p){o=B.MY(p<q.gB(r)?q.h(r,p):C.cn)
if(o!==this.aef(p<J.au(f[g])?J.C(f[g],p):D.fH)){s=!0
break}}}if(s)return w.$0()
n=A.a([],x.t)
q=d.length
if(t<q){r=d[t]
for(q=J.M(r),p=0;p<4;++p){m=p<q.gB(r)?q.h(r,p):C.cn
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
w=D.e7[a1]
v=j.adt(a1)
u=B.MX(j.y,j.x)
t=v>=0&&v<u.length?u[v]:""
s=j.y
r=j.x
q=j.a.c
p=B.bTa(j.gpw(),s,g,a1,u,v,r,q)
o=p.length!==0?p:D.l_[a1]+" Player"
n=f>0?C.k.S(f,1,6):0
m=e&&h&&!i
s=B.bJi(a3)
r=j.x2
r===$&&A.b()
q=j.y1
q===$&&A.b()
l=m?a2:null
if(!g)k=S.bD2(t)||j.gpw()
else k=!1
return B.bDb(w,!0,m,n,q,a0,k,o,l,i,s,r,"Win "+B.byc(a3)+"/4")},
u(d2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6=this,c7=null,c8={},c9=$.aA,d0=c6.x,d1=A.aQ(d0==null?c7:J.C(d0,"status"))
if(d1==null)d1="\u2026"
w=c6.KU()
v=c6.kF()
u=c6.y
t=B.q7(u,v)
s=B.ng(u)
r=B.q4(u)
q=B.vI(u)
p=B.aCA(u)
o=B.oB(u)&&d1!=="waiting"
n=B.q6(u)
m=c6.ghV()
l=c6.aR6(n,m)
k=c6.vB(n,m)
j=new B.jR($.o7())
d0=t>=0
i=d0?B.t7(t,m):-1
h=s>=0
g=h?B.t7(s,m):-1
f=B.MX(c6.y,c6.x).length
e=d1==="waiting"&&!c6.gnV()
d=!1
if(e)if(!c6.Q){if(c9!=null)a0=c6.gpw()||f>=w
else a0=d
d=a0}if(e)a1=0
else if(q>0)a1=q
else{a0=c6.CW
if(a0==null)a0=0
a1=a0}a0=u!=null
a2=a0&&d0&&h&&s===t&&!o&&!e
d0=c6.ch
if(d0!=null){a3=c7
if(h&&s!==d0){c6.ch=null
d0=a3}else if(a2&&r==="rolling"&&c6.CW==null&&c6.RG==null){c6.ch=null
d0=a3}}a4=a0&&a2&&r==="rolling"&&!o&&!e&&!c6.dy&&!c6.fr&&c6.RG==null&&c6.CW==null&&d0==null
a5=!1
if(a0)if(a2){d0=(r==="moving"||c6.CW!=null)&&a1>0&&!o&&!c6.dy&&!c6.fr&&c6.RG==null
a5=d0}a6=c6.CY(k)
a7=c8.a=c6.DN(n,a1,a6,i<0?0:i,m,j,a5)
if(a7.length===0&&a1===6&&i>=0&&i<a6.length){a8=A.a([],x.t)
for(a9=0;a9<J.au(a6[i]);++a9){b0=J.C(a6[i],a9)
if(b0.a&&!b0.c)a8.push(a9)}c8.a=a8
d0=a8}else d0=a7
b1=a2&&r==="moving"&&a1>0&&d0.length===0&&c6.CW==null&&c6.RG==null&&!c6.fr
if(b1&&!c6.Q&&!c6.db){c6.db=!0
$.as.ak$.push(new B.bcx(c6,t,m,i,j))}if(!b1)c6.db=!1
b2=new A.aR(l,new B.bcy(),A.aj(l).i("aR<1>")).gB(0)
d0=g>=0
b3=d0&&g<4?D.e7[g]:G.a4
h=c9==null
b4=!h&&c6.x==null&&c6.y==null
a0=o&&v.length!==0&&p===v
if(h)d0=D.V1
else if(b4){d0=c6.z
d0=A.cC(!0,new A.ay(C.C,c7,C.K,C.u,A.a([A.aD(B.bD7(d0==null?"Connecting\u2026":d0,200),c7,c7),A.aH(c7,A.dw(c7,c7,c7,D.a8E,c7,c7,new B.bcz(d2),c7,c7,c7,c7,c7),c7,c7,4,c7,4,c7)],x.p),c7),C.N,!0)}else{h=c6.a
b5=h.r.toLowerCase()
if(C.c.t(b5,"computer"))b6="Computer"
else b6=C.c.t(b5,"local")?"Local":"Online"
a3=x.p
h=A.a([B.bDa("\u20b9"+h.d+" \xb7 "+b6,new B.bcA(d2),c7,C.k.S(b2,2,4))],a3)
b7=!0
if(!c6.dy)if(!c6.k3){b7=c6.id
b7=b7!=null&&b7>0}if(b7&&!e&&!o){b7=G.ip.j(0.88)
b8=A.x(20)
b9=F.R(G.a4.j(0.7),1)
h.push(new A.a2(G.n9,A.y(c7,A.l(c6.dy||c6.k3?"Rolling\u2026":"This turn: "+A.v(c6.id),c7,c7,c7,c7,c7,D.P4,c7,c7),C.f,c7,c7,new A.t(b7,c7,b9,b8,c7,c7,C.m),c7,c7,c7,c7,A_.rs,c7,c7,c7),c7))}if(c6.ak>0&&!e&&!o){if(a2)d0="Your turn"
else d0=d0&&g<4?D.l_[g]+"'s turn":"Waiting\u2026"
h.push(new A.a2(G.n9,F.S(A.a([A.l(d0,c7,c7,c7,c7,c7,A.B(c7,c7,b3,c7,c7,c7,c7,c7,c7,c7,c7,12,c7,c7,C.x,c7,c7,!0,c7,c7,c7,c7,c7,c7,c7,c7),c7,c7),E.a2,new B.a4k(c6.ak,10,c7)],a3),E.j,C.a_,E.n,0),c7))}d0=A.a([],x.o)
for(b7=[0,1,2,3],b8=c6.gaSW(),c0=0;c0<4;++c0){c1=b7[c0]
b9=l[c1]
c2=g===c1
c3=i===c1
c4=c6.aD3(a1,c1,r,g)
if(!(c6.dy&&c2))c5=c6.k3&&c6.k4===c1
else c5=!0
d0.push(c6.aCe(b9,a4,c4,c3,c3,c5,c2,c1,b8,a6[c1]))}d0=A.a([new B.N1(d0,new B.bcB(c8,c6,b3,l,a6,j,g,a5,i),c7)],a3)
if(o){b7=A.a([H.dY.j(0.9),C.l.j(0.8)],x.O)
b9=A.x(16)
c2=F.R(G.a4.j(0.55),1)
d0.push(new A.bE(C.q,c7,c7,A.y(c7,A.l(p===v?"You won!":"Game over",c7,c7,c7,c7,c7,D.aCV,c7,c7),C.f,c7,c7,new A.t(c7,c7,c2,b9,c7,new F.ai(E.V,C.a0,C.t,b7,c7,c7),C.m),c7,c7,c7,G.rp,D.a4Z,c7,c7,c7),c7))}if(c6.z!=null){b7=C.dA.j(0.8)
b9=A.x(10)
c2=F.R(G.cf.j(0.5),1)
c3=c6.z
c3.toString
d0.push(new A.bE(C.Q,c7,c7,A.y(c7,A.l(c3,c7,c7,c7,c7,c7,A2.oO,c7,c7),C.f,c7,c7,new A.t(b7,c7,c2,b9,c7,c7,C.m),c7,c7,c7,Ag.rm,G.rt,c7,c7,c7),c7))}h.push(F.Q(new A.ay(C.C,c7,C.K,C.u,d0,c7),1))
h.push(H.aw)
if(e){if(c6.Q)d0="Starting match\u2026"
else d0=f>=w?"Table full \u2014 starting\u2026":"Waiting for players "+f+" / "+w
d0=A.l(d0,c7,c7,c7,c7,c7,E.hP,c7,c7)
b7=d?c6.gaVJ():c7
b8=A.oo(A1.xy,A1.xy.j(0.4),c7,C.h,D.a5e,new A.cB(A.x(16),C.y),c7)
h.push(new A.a2(D.a4F,F.P(A.a([d0,E.aG,K.md(A.l(c6.Q?"\u2026":"Start game",c7,c7,c7,c7,c7,c7,c7,c7),b7,b8)],a3),E.j,C.i,E.n),c7))}else{d0=c6.dy&&a2
if(a5)b7="Pick a token"
else if(a2)b7="Your Turn"
else{if(c6.gpw())b7=c6.dx||c6.Dv()
else b7=!1
if(b7)b7="Computer playing\u2026"
else b7=c6.Dv()?"Opponent's turn":"Wait"}h.push(new A.a2(D.Ae,new B.N3(a4,b8,d0,a5?"Move":"Roll Dice",b7,c7),c7))}d0=A.a([F.P(h,E.j,C.i,E.n)],a3)
if(c6.Q)d0.push(A.bO(0,new A.de(C.l.j(0.45),D.UU,c7)))
d0=A.cC(!0,new A.ay(C.C,c7,C.K,C.u,d0,c7),C.N,!0)}return new Ai.hw(a0,new P.tw(A.cP(c7,D.qq,new B.zJ(d0,c7),c7),!1,c7),c7)}}
B.Yv.prototype={
aZ(){this.bb()
this.b8()
this.di()},
l(){var w=this,v=w.aL$
if(v!=null)v.N(0,w.gdc())
w.aL$=null
w.aa()}}
B.ang.prototype={}
B.Yw.prototype={
a4(){this.ag()
B.vK()
$.as.ak$.push(new B.bpa(this))},
l(){B.t5()
this.av4()}}
B.a4c.prototype={
u(d){return K.hf(new B.Uk(this.c,this.d,null),new B.aDh(this),x.W)}}
B.Uk.prototype={
V(){return new B.afX()}}
B.afX.prototype={
a4(){this.av8()
$.as.b9$.push(this)},
kS(d){if(d===C.cz)if($.jS>0)A.ho()},
l(){$.as.hg(this)
this.av7()},
gaWc(){switch(this.a.c.a){case"computer":return"Play against the computer"
case"local":return"Same phone \xb7 pass and play"
default:return"Join a public table"}},
u(d){var w=null
return A.cP(w,C.l,new B.zJ(A.cC(!0,K.xW(w,w,new B.bcN(this,this.a.d),x.W,x.B),C.N,!0),w),w)},
zi(d,e){return this.aOG(d,e)},
aOG(d,e){var w=0,v=A.p(x.H),u,t=this,s,r,q
var $async$zi=A.q(function(f,g){if(f===1)return A.m(g,v)
for(;;)switch(w){case 0:q={}
w=t.a.c.a==="local"?3:4
break
case 3:q={}
q.a=!1
w=5
return A.e(F.up(d,C.bd,new B.bcE(q,t,e).$0(),"assets/anim/ludo.json"),$async$zi)
case 5:s=t.c
if(s==null){w=1
break}if(!q.a){r=K.aC(s,!1,x.W).c.d
if(r==null)r="Could not deduct table amount"
d.X(x.q).f.b4(F.c8(null,null,null,null,null,C.u,null,A.l(r,null,null,null,null,null,null,null,null),null,E.a1,null,null,null,null,null,null,null,null,null,null))
w=1
break}P.ZD(d,new B.N_(B.bTd(0,B.a4h(e.b)),!1,null),x.X)
w=1
break
case 4:q.a=null
w=6
return A.e(F.up(d,C.bd,new B.bcF(q,t,e).$0(),"assets/anim/ludo.json"),$async$zi)
case 6:s=t.c
if(s==null){w=1
break}q=q.a
if(q==null||q.length===0){r=K.aC(s,!1,x.W).c.d
if(r==null)r="Could not join table"
d.X(x.q).f.b4(F.c8(null,null,null,null,null,C.u,null,A.l(r,null,null,null,null,null,null,null,null),null,E.a1,null,null,null,null,null,null,null,null,null,null))
w=1
break}s=t.a.c
P.ZD(d,new B.ER(q,e.a,e.b,s.d,s.c,null),x.X)
case 1:return A.n(u,v)}})
return A.o($async$zi,v)}}
B.afJ.prototype={
u(d){var w=this,v=null,u=x.p,t=A.a([new B.zG(H.es,w.e,38,v),H.bZ],u),s=D.me.j(0.92),r=A.x(20),q=F.R(G.a4.j(0.45),1)
t.push(A.y(v,F.S(A.a([A.ah(N.eu,D.cE.j(0.95),v,v,15),G.aL,A.l(""+w.f+" Players",v,v,v,v,v,G.oR,v,v)],u),E.j,C.i,E.v,0),C.f,v,v,new A.t(s,v,q,r,v,v,C.m),v,v,v,v,G.hh,v,v,v))
return new A.a2(D.a4C,F.P(A.a([F.S(t,E.j,C.i,E.n,0),H.bB,F.cQ(C.q,K.Gb(H.wA,A.l(w.c,v,1,v,v,v,D.aAf,v,v),new B.b9i()),E.ar),R.aZ,A.l(w.d,v,v,v,v,v,A.B(v,v,C.h.j(0.62),v,v,v,v,v,v,v,v,13,v,v,C.av,v,v,!0,v,v,v,v,v,v,v,v),v,v),E.aY],u),E.j,C.i,E.n),v)}}
B.Cd.prototype={
u(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.x(16),l=o.d,k=A.a4(D.me,l,0.1)
k.toString
w=x.O
k=A.a([k,D.mF.j(0.96)],w)
v=F.R(G.a4.j(0.38),1)
u=A.a([new A.U(0,C.r,l.j(0.16),E.cH,14),new A.U(0,C.r,C.l.j(0.35),H.bw,8)],x.V)
t=A.x(15)
s=A.aH(n,A.ah(G.tn,C.h.j(0.035),n,n,72),n,n,n,86,-10,n)
r=A.a4(l,C.h,0.35)
r.toString
w=A.y(n,n,C.f,n,n,new A.t(n,n,n,n,n,new F.ai(C.Q,C.W,C.t,A.a([r,l],w),n,n),C.m),n,n,n,n,n,n,n,5)
l=o.c
r=l.d
r=r.length!==0?r:"TABLE"
q=x.p
r=A.a([A.l(r,n,1,C.H,n,n,A.B(n,n,D.cE.j(0.9),n,n,n,n,n,n,n,n,13,n,n,C.x,n,n,!0,n,n,n,n,n,n,n,n),n,n),H.jx,F.cQ(E.V,A.l("\u20b9 "+B.c_W(l.a),n,1,n,n,n,D.azo,n,n),E.ar)],q)
p=o.e
if(!p)C.b.H(r,A.a([H.bB,A.l(""+l.b+" players",n,n,n,n,n,A.B(n,n,C.h.j(0.55),n,n,n,n,n,n,n,n,11,n,n,C.R,n,n,!0,n,n,n,n,n,n,n,n),n,n)],q))
return A.y(n,A.dC(t,new A.ay(C.C,n,C.K,C.u,A.a([s,F.S(A.a([w,H.cX,D.aKx,H.cX,F.Q(new A.a2(G.fv,F.P(r,E.X,C.a_,E.n),n),1),new B.agL(l.c,l.b,p,n),E.a2,new A.a2(G.A5,new B.ah5(o.f,n),n)],q),E.j,C.i,E.n,0)],q),n),C.ak,n),C.f,n,n,new A.t(n,n,v,m,u,new F.ai(E.S,E.Z,C.t,k,n,n),C.m),n,n,n,n,n,n,n,n)}}
B.abB.prototype={
u(d){var w=null
return A.y(C.q,D.aG2,C.f,w,w,new A.t(w,w,F.R(D.mn,1.4),w,A.a([new A.U(0,C.r,G.a4.j(0.4),C.o,8)],x.V),D.asx,C.F),w,46,w,w,w,w,w,46)}}
B.agL.prototype={
u(d){var w,v,u=null,t=this.c,s=t.split("/"),r=s.length===2,q=r?A.cG(C.c.P(s[0]),u):u,p=r?A.cG(C.c.P(s[1]),u):u
if(q!=null&&p!=null&&p>0&&p<=6){t=x.p
r=A.a([],t)
for(w=0;w<p;++w)r.push(new A.a2(T.Ag,A.ah(H.cR,w<q?D.cE:C.h.j(0.22),u,u,15),u))
return F.P(A.a([F.S(r,E.j,C.i,E.v,0),H.bB,A.l(A.v(q)+" / "+A.v(p),u,u,u,u,u,D.Pc,u,u)],t),E.j,C.i,E.v)}r=A.ah(N.eu,D.cE.j(0.9),u,u,16)
t=A.l(t,u,u,u,u,u,G.vB,u,u)
v=this.e?"seated":""+this.d+"P"
return F.P(A.a([r,H.bB,t,A.l(v,u,u,u,u,u,A.B(u,u,C.h.j(0.5),u,u,u,u,u,u,u,u,9,u,u,C.R,u,u,!0,u,u,u,u,u,u,u,u),u,u)],x.p),E.j,C.i,E.v)}}
B.ah5.prototype={
u(d){var w=null,v=A.x(12),u=A.x(12)
return A.b1(!1,C.z,!0,w,A.b9(!1,v,!0,K.f7(D.aqI,w,new A.t(w,w,F.R(C.h.j(0.28),1),u,A.a([new A.U(0,C.r,D.en.j(0.35),H.bw,8)],x.V),D.aaQ,C.m),w,w,w),w,!0,w,w,w,w,w,w,w,w,this.c,w,w,w,w,w,w,w),C.f,C.w,0,w,w,w,w,w,C.G)}}
B.anh.prototype={}
B.Yx.prototype={
a4(){this.ag()
B.vK()
$.as.ak$.push(new B.bpb(this))},
l(){B.t5()
this.aa()}}
B.a4i.prototype={
u(d){return new B.Ul(this.c,null)}}
B.Ul.prototype={
V(){return new B.Um()}}
B.Um.prototype={
a4(){this.ava()
$.as.b9$.push(this)},
kS(d){if(d===C.cz)if($.jS>0)A.ho()},
l(){$.as.hg(this)
this.av9()},
aC4(){var w=this.c
w.toString
O.m3(w,new B.a4c(this.a.c,this.d,null),x.X)},
u(d){var w=null
return A.cP(w,w,new A.ay(C.C,w,C.K,C.u,A.a([A.bO(0,A.eR(C.bn,G.a25,C.P,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new B.bcR(d),w,w,w,w,w,w)),A.cC(!0,A.aD(new A.a2(D.Al,A.eR(w,A.cd(new B.bcS(this)),C.P,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new B.bcT(),w,w,w,w,w,w),w),w,w),C.N,!0)],x.p),w),w)}}
B.ani.prototype={}
B.Yy.prototype={
a4(){this.ag()
B.vK()
$.as.ak$.push(new B.bpc(this))},
l(){B.t5()
this.aa()}}
B.MZ.prototype={
aH(b7,b8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=b8.a,b4=b8.b,b5=Math.min(b3,b4),b6=b7.a
J.b3(b6.save())
b6.translate((b3-b5)/2,(b4-b5)/2)
w=b5/15
b4=b5*0.035
b3=0+b5
v=A.jr(new A.W(0,0,b3,b3),new A.b8(b4,b4))
b4=v.dJ(new A.k(b5*0.006,b5*0.014))
$.af()
u=A.am()
u.r=C.l.j(0.4).gq(0)
u.z=new A.jq(C.r,b5*0.022)
b7.cU(b4,u)
u=A.am()
u.scT(D.aaK.cB(0,new A.W(0,0,b3,b3)))
b7.cU(v,u)
t=new B.aCG(w)
s=new B.aCK()
r=new B.aCJ()
q=new B.aCL()
p=new B.aCI()
o=new B.aCH(s,r,q,p)
n=new B.aCN(o)
m=new B.aCM(o)
l=new B.aCO(s,r,q,p)
for(b3=-(b5*0.001),b4=b5*0.0014,k=0;k<15;++k)for(j=0;j<15;++j){if(!l.$2(j,k))continue
u=t.$2(j,k)
i=u.a-b3
h=u.b-b3
g=u.c+b3
u=u.d+b3
f=new A.W(i,h,g,u)
$.af()
e=new A.eC(C.b6,C.aP,C.bf,C.bk,C.be)
e.scT(D.ab8.cB(0,f))
d=e.ba()
b6.drawRect(A.dt(f),d)
d.delete()
a0=new A.eC(C.b6,C.aP,C.bf,C.bk,C.be)
a0.r=C.h.j(0.8).gq(0)
e=Math.max(0.7,b4)
a0.c=e
a1=new A.eC(C.b6,C.aP,C.bf,C.bk,C.be)
a1.r=C.l.j(0.1).gq(0)
a1.c=e
d=a0.ba()
b6.drawLine.apply(b6,[i,h,g,h,d])
d.delete()
d=a0.ba()
b6.drawLine.apply(b6,[i,h,i,u,d])
d.delete()
d=a1.ba()
b6.drawLine.apply(b6,[i,u,g,u,d])
d.delete()
d=a1.ba()
b6.drawLine.apply(b6,[g,h,g,u,d])
d.delete()}b3=6*w
b4=0+b3
u=b2.b
b2.JH(b7,new A.W(0,0,b4,b4),D.dX,u[0],b5,w)
i=9*w
b3=i+b3
b2.JH(b7,new A.W(i,0,b3,b4),D.en,u[3],b5,w)
b2.JH(b7,new A.W(i,i,b3,b3),D.eR,u[1],b5,w)
b2.JH(b7,new A.W(0,i,b4,b3),D.dM,u[2],b5,w)
b2.rg(b7,w,7,1,7,5,D.en,!0)
b2.rg(b7,w,1,7,5,7,D.dX,!1)
b2.rg(b7,w,7,9,7,13,D.dM,!0)
b2.rg(b7,w,9,7,13,7,D.eR,!1)
b2.rg(b7,w,1,6,1,6,D.dX,!1)
b2.rg(b7,w,8,1,8,1,D.en,!0)
b2.rg(b7,w,13,8,13,8,D.eR,!1)
b2.rg(b7,w,6,13,6,13,D.dM,!0)
$.af()
a2=A.am()
a2.r=H.cP.j(0.5).gq(0)
a2.b=C.as
a2.c=Math.max(1,b5*0.0026)
a3=A.am()
a3.r=C.h.j(0.3).gq(0)
a3.b=C.as
a3.c=Math.max(0.7,b5*0.0016)
for(a4=1;a4<15;++a4){a5=a4*w
for(b3=a5+0.6,b4=a4-1,k=0;k<15;++k){if(n.$2(b4,k))continue
u=k*w
i=(k+1)*w
d=a3.ba()
b6.drawLine.apply(b6,[b3,u,b3,i,d])
d.delete()
d=a2.ba()
b6.drawLine.apply(b6,[a5,u,a5,i,d])
d.delete()}}for(a6=1;a6<15;++a6){a7=a6*w
for(b3=a7+0.6,b4=a6-1,j=0;j<15;++j){if(m.$2(j,b4))continue
u=j*w
i=(j+1)*w
d=a3.ba()
b6.drawLine.apply(b6,[u,b3,i,b3,d])
d.delete()
d=a2.ba()
b6.drawLine.apply(b6,[u,a7,i,a7,d])
d.delete()}}b2.aDQ(b7,w,b5)
b3=w*0.36
b2.D0(b7,t.$2(1,6).gb5(),b3,D.dX)
b2.JI(b7,t.$2(1,6),D.dX,0)
b2.D0(b7,t.$2(8,1).gb5(),b3,D.en)
b2.JI(b7,t.$2(8,1),D.en,1.5707963267948966)
b2.D0(b7,t.$2(13,8).gb5(),b3,D.eR)
b2.JI(b7,t.$2(13,8),D.eR,3.141592653589793)
b2.D0(b7,t.$2(6,13).gb5(),b3,D.dM)
b2.JI(b7,t.$2(6,13),D.dM,-1.5707963267948966)
a8=$.o7().a
for(b3=D.Nz.gad(D.Nz),b4=w*0.24;b3.A();){u=b3.gO(0)
if(u<0||u>=a8.length)continue
a9=a8[u]
u=t.$2(a9.a,a9.b)
i=u.a
h=u.c
g=u.b
b2.D0(b7,new A.k(i+(h-i)/2,g+(u.d-g)/2),b4,D.a1x)}b0=v.cA(-(b5*0.02))
b1=A.bs($.af().w)
b1.a0(new A.hc(v))
b1.a0(new A.hc(b0))
b1.stq(E.lj)
b3=A.am()
b4=v.a
u=v.b
i=v.c
h=v.d
b3.scT(D.abt.cB(0,new A.W(b4,u,i,h)))
b7.dd(b1,b3)
b3=A.am()
b3.b=C.as
b3.c=b5*0.0045
b3.scT(new F.ai(E.S,E.Z,C.t,A.a([G.L.j(0.55),C.h.j(0.12),C.l.j(0.4)],x.O),null,null).cB(0,new A.W(b4,u,i,h)))
b7.cU(v,b3)
b3=A.am()
b3.b=C.as
b3.c=b5*0.0035
b3.r=G.a4.j(0.35).gq(0)
b7.cU(b0,b3)
b6.restore()},
JH(a5,a6,a7,a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
if(a8)w=a7
else{v=A.a4(a7,C.Ii,0.48)
v.toString
w=v}v=A.a4(w,C.h,0.28)
v.toString
u=A.a4(w,C.l,0.22)
u.toString
t=a9*0.012
s=A.jr(a6,new A.b8(t,t))
t=b0*0.05
r=s.dJ(new A.k(b0*0.035,t))
$.af()
q=A.am()
q.r=C.l.j(0.16).gq(0)
q.z=new A.jq(C.r,b0*0.1)
a5.cU(r,q)
q=A.am()
r=x.O
q.scT(new F.ai(E.S,E.Z,C.t,A.a([v,w,u],r),I.iX,null).cB(0,a6))
a5.cU(s,q)
p=a6.cA(-(b0*0.72))
q=b0*0.35
o=A.jr(p,new A.b8(q,q))
t=o.dJ(new A.k(b0*0.04,t))
q=A.am()
q.r=C.l.j(0.14).gq(0)
q.z=new A.jq(C.r,b0*0.08)
a5.cU(t,q)
q=A.am()
q.scT(D.aao.cB(0,p))
a5.cU(o,q)
q=A.am()
q.b=C.as
q.c=a9*0.0035
q.r=C.l.j(0.18).gq(0)
a5.cU(o,q)
n=p.gb5().a
m=p.gb5().b
l=b0*0.52
k=b0*1.05
for(v=n-k,u=m-k,t=n+k,q=m+k,q=[new A.k(v,u),new A.k(t,u),new A.k(v,q),new A.k(t,q)],t=l*0.08,v=l*0.3,u=a5.a,j=l*0.95,i=a9*0.0025,h=l*0.06,g=l*0.72,f=a9*0.002,e=0;e<4;++e){d=q[e]
a0=d.a
a1=d.b
a2=new A.eC(C.b6,C.aP,C.bf,C.bk,C.be)
a2.r=C.l.j(0.2).gq(0)
a2.z=new A.jq(C.r,v)
a3=a2.ba()
u.drawCircle(a0,a1+t,l,a3)
a3.delete()
a2=new A.eC(C.b6,C.aP,C.bf,C.bk,C.be)
a4=A.a4(w,D.zo,0.72)
a4.toString
a2.scT(new K.cA(D.Qo,0.5,C.t,null,0,A.a([I.yw,a4,A.a4(w,C.l,0.2).j(0.4)],r),Am.l1,null).cB(0,A.ft(d,l)))
a3=a2.ba()
u.drawCircle(a0,a1,j,a3)
a3.delete()
a2=new A.eC(C.b6,C.aP,C.bf,C.bk,C.be)
a2.b=C.as
a2.c=Math.max(1,i)
a2.r=C.l.j(0.3).gq(0)
a3=a2.ba()
u.drawCircle(a0,a1,j,a3)
a3.delete()
a1=A.ft(new A.k(a0,a1-h),g)
a0=new A.eC(C.b6,C.aP,C.bf,C.bk,C.be)
a0.b=C.as
a0.c=Math.max(1,f)
a0.r=C.h.j(0.55).gq(0)
a3=a0.ba()
u.drawArc.apply(u,[A.dt(a1),206.99999999999997,135,!1,a3])
a3.delete()}},
rg(a2,a3,a4,a5,a6,a7,a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=A.a4(a8,C.h,0.28)
a1.toString
w=A.a4(a8,C.l,0.22)
w.toString
for(v=a2.a,u=x.O,t=-(a3*0.03),s=a3*0.08,r=a4;r<=a6;++r)for(q=r*a3,p=q+a3,o=q-t,n=p+t,m=n+-1,l=a5;l<=a7;++l){k=l*a3
j=k+a3
i=k-t
h=j+t
g=A.jr(new A.W(o,i,n,h),new A.b8(s,s))
$.af()
f=new A.eC(C.b6,C.aP,C.bf,C.bk,C.be)
e=a9?C.Q:E.V
d=a9?C.W:C.a0
f.scT(new F.ai(e,d,C.t,A.a([a1,a8,w],u),null,null).cB(0,new A.W(q,k,p,j)))
a0=f.ba()
v.drawRRect(A.pc(g),a0)
a0.delete()
g=o+1;++i
k=a9?new A.k(m,i):new A.k(g,h+-1)
j=new A.eC(C.b6,C.aP,C.bf,C.bk,C.be)
j.r=C.h.j(0.4).gq(0)
j.c=1.1
a0=j.ba()
v.drawLine.apply(v,[g,i,k.a,k.b,a0])
a0.delete()}},
aDQ(d,e,f){var w,v,u,t,s=7.5*e,r=3*e,q=A.js(new A.k(s,s),r,r),p=e*0.1
p=A.jr(q,new A.b8(p,p))
$.af()
w=A.am()
w.r=C.l.j(0.14).gq(0)
w.z=new A.jq(C.r,e*0.12)
d.cU(p,w)
v=r*0.48
u=v*0.88
w=new B.aCB(d,f)
w.$3(new B.aCF(s,s,v,u).$0(),D.en,C.Q)
w.$3(new B.aCE(s,v,s,u).$0(),D.eR,C.a0)
w.$3(new B.aCC(s,s,v,u).$0(),D.dM,C.W)
w.$3(new B.aCD(s,v,s,u).$0(),D.dX,E.V)
w=e*0.18
t=A.jr(q.cA(-(r*0.2)),new A.b8(w,w))
w=t.dJ(D.aqg)
p=A.am()
p.r=C.l.j(0.22).gq(0)
d.cU(w,p)
p=A.am()
p.scT(D.abG.cB(0,new A.W(t.a,t.b,t.c,t.d)))
d.cU(t,p)
p=A.am()
p.b=C.as
p.c=f*0.0035
p.r=C.l.j(0.28).gq(0)
d.cU(t,p)},
JI(d,e,f,g){var w,v,u,t,s,r,q=e.gb5(),p=e.gdK()*0.4,o=d.a
J.b3(o.save())
o.translate(q.a,q.b)
d.a14(0,g)
w=A.bs($.af().w)
v=-p
u=v*0.35
w.a0(new A.dF(u,v*0.45))
w.a0(new A.bz(p*0.55,0))
w.a0(new A.bz(u,p*0.45))
w.a0(new A.fd())
u=A.am()
t=A.a4(f,C.h,0.4)
t.toString
s=A.a4(f,C.l,0.2)
s.toString
r=v+p*2
u.scT(new F.ai(C.Q,C.W,C.t,A.a([t,f,s],x.O),null,null).cB(0,new A.W(v,v,r,r)))
d.dd(w,u)
u=A.am()
u.b=C.as
u.c=Math.max(1,p*0.08)
u.r=C.l.j(0.4).gq(0)
d.dd(w,u)
o.restore()},
D0(d,e,f,g){var w,v,u,t=this.aVE(e,f,f*0.42)
$.af()
w=A.am()
v=A.a4(g,C.h,0.45)
v.toString
u=A.a4(g,C.l,0.25)
u.toString
w.scT(new K.cA(A0.wm,0.5,C.t,null,0,A.a([v,g,u],x.O),null,null).cB(0,A.ft(e,f)))
d.dd(t,w)
w=A.am()
w.b=C.as
w.c=Math.max(1,f*0.1)
w.r=C.l.j(0.45).gq(0)
d.dd(t,w)},
aVE(d,e,f){var w,v,u,t,s,r,q,p,o=A.bs($.af().w)
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
B.jp.prototype={}
B.jR.prototype={
Nb(d,e){var w,v
if(e.c||e.b>=56)return D.HW
if(e.a)return null
w=e.b
if(w<=50)return this.a.a[C.k.ab(D.Cb[d]+w,52)]
if(w<56){v=D.afV[d]
return v[w-51]}return D.HW},
p8(d,e){if(e.a||e.c||e.b>50)return null
return C.k.ab(D.Cb[d]+e.b,52)},
Y7(d,e){if(d<1||d>6)return!1
if(e.c)return!1
if(e.a)return d===6
if(e.b+d>56)return!1
return!0},
agU(d,e,f,g){var w,v,u=J.C(d[e],g)
if(!this.Y7(f,u))return null
if(u.a){J.ea(d[e],g,D.HZ)
return null}w=u.b+f
if(w>=56)J.ea(d[e],g,D.u9)
else{v=d[e]
J.ea(v,g,new B.jp(!1,w,u.c))}return this.Z_(d,e)},
Z_(d,e){var w,v,u,t,s,r,q
if(e<0||e>=d.length)return null
for(w=x.t,v=null,u=0;u<J.au(d[e]);++u){t=this.p8(e,J.C(d[e],u))
if(t==null||D.oy.t(0,t))continue
for(s=0;s<d.length;++s){if(s===e)continue
for(r=0;r<J.au(d[s]);++r){q=J.C(d[s],r)
if(q.a||q.c)continue
if(this.p8(s,q)!==t)continue
J.ea(d[s],r,D.fH)
if(v==null)v=A.a([s,r],w)}}}return v},
alS(d,e,f){var w,v
if(D.oy.t(0,f))return!1
for(w=0;w<d.length;++w){if(w===e)continue
for(v=0;v<J.au(d[w]);++v)if(this.p8(w,J.C(d[w],v))===f)return!0}return!1},
a05(d,e,f){var w,v=A.a([],x.t)
for(w=0;w<4;++w)if(this.Y7(f,J.C(d[e],w)))v.push(w)
return v},
baN(d){return C.b.f9(d,new B.aCQ())},
a06(d,e,f,g){var w,v,u,t,s,r,q,p=A.a([],x.e)
if(f.a){p.push(new B.vG(B.bTl(d,g),B.bTm(d,g)))
w=this.Nb(d,D.HZ)
if(w!=null)p.push(new B.vG(w.a+0.5,w.b+0.5))
return p}v=this.Nb(d,f)
if(v!=null)p.push(new B.vG(v.a+0.5,v.b+0.5))
for(u=f.b,t=1;t<=e;++t){s=u+t
if(s>56)break
r=s>=56
q=this.Nb(d,r?D.u9:new B.jp(!1,s,!1))
if(q==null)continue
p.push(new B.vG(q.a+0.5,q.b+0.5))
if(r)break}return p}}
B.vG.prototype={}
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
a4.push(new B.xl(r,o,new B.f8(p+o,0),m.a+k,j.b+i,!1))}else{m=w.Nb(r,n)
if(m==null)continue
l=n.c
a4.push(new B.xl(r,o,l?new B.f8(q,100):m,a0,a0,l))}}}h=A.F(x.T,x.g)
for(w=a4.length,g=0;g<a4.length;a4.length===w||(0,A.X)(a4),++g){f=a4[g]
J.e_(h.cb(0,f.c,new B.aCS()),f)}w=A.a([],x.p)
for(v=a4.length,g=0;g<a4.length;a4.length===v||(0,A.X)(a4),++g){e=a4[g]
s=e.c
q=h.h(0,s)
q.toString
q=J.btv(q,e)
s=h.h(0,s)
s.toString
w.push(d.aX9(a1,e,q,J.au(s),a3,a2))}if(t&&u.c.length!==0){v=u.a
t=u.b
w.push(new B.TR(a1,a2,a3,u.c,d.r[v],110,new A.d5("hop-"+v+"-"+t,x.i)))}return new A.ay(C.C,a0,C.at,C.u,w,a0)},
aX9(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o=this,n=null,m=g>1,l=m?Math.cos(f*2*3.141592653589793/g)*d*0.18:0,k=m?Math.sin(f*2*3.141592653589793/g)*d*0.18:0
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
r=B.bJj(d*15,d,u,s,l+w,k+v,h,i)
q=o.y&&e.a===o.w&&C.b.t(o.x,e.b)
p=!t&&q
m=q?new B.aCR(o,e):n
return A.aH(n,A.eR(n,B.bD9(o.r[e.a],h,!1,q,i,p),C.P,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,m,n,n,n,n,n,n),n,n,r.a,n,r.b,n)}}
B.TR.prototype={
V(){return new B.aeS(null,null)}}
B.aeS.prototype={
a4(){var w,v=this
v.ag()
w=v.a
w=A.bd(null,A.cc(0,Math.max(1,w.f.length-1)*w.w,0),0,null,1,null,v)
w.bC(0)
v.d!==$&&A.b0()
v.d=w},
l(){var w=this.d
w===$&&A.b()
w.l()
this.auN()},
aR8(d){var w,v,u,t,s,r,q,p=this.a.f
if(p.length<=1)return C.b.gW(p)
w=C.d.S(d,0,1)*(p.length-1)
v=C.k.S(C.d.fd(w),0,p.length-2)
u=C.bt.a2(0,w-v)
t=p[v]
s=p[v+1]
r=t.a
q=t.b
return new B.vG(r+(s.a-r)*u,q+(s.b-q)*u)},
u(d){var w,v,u,t=this.d
t===$&&A.b()
w=this.a
v=w.d
u=w.e
return A.cp(t,new B.b7O(this),B.bD9(w.r,u,!0,!1,v,!1))}}
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
u=$.af()
t=A.am()
t.r=C.l.j(b1?0.22:0.38).gq(0)
t.z=new A.jq(C.r,b1?2.5:3.5)
s=a7*0.04
r=b1?0.62:0.78
q=b1?0.08:0.12
b3.mp(A.js(new A.k(a9+s,a8*0.92),a8*q,a7*r),t)
p=a8*0.62
o=a8*0.9
n=(p+o)/2
m=a7*0.42
r=o-p
l=r/2
u=u.w
k=A.bs(u)
k.a0(new A.iW(A.js(new A.k(a9,n),l*2,m*2)))
j=A.am()
q=x.O
j.scT(new F.ai(E.S,E.Z,C.t,A.a([b2,b0,w],q),I.iX,a6).cB(0,new A.W(0,p,0+a7,p+r)))
b3.dd(k,j)
i=A.am()
i.b=C.as
r=i.c=Math.max(1,s)
i.r=C.h.j(0.35).gq(0)
h=l*0.15
b3.FS(A.js(new A.k(a9,n-h),l*1.1,m*1.7),3.6128315516282616,2.199114857512855,!1,i)
h=A.js(new A.k(a9,n+h),l*1.2,m*1.85)
g=A.am()
g.b=C.as
g.c=Math.max(1.2,a7*0.05)
g.r=v.j(0.55).gq(0)
b3.FS(h,0.15,2.199114857512855,!1,g)
f=a8*0.34
e=a8*0.52
d=A.bs(u)
g=a7*0.16
d.a0(new A.dF(a9-g,f))
h=a7*0.2
v=a7*0.28
a0=a8*0.02
a1=p+a0
d.a0(new A.w1(a9-h,e,a9-v,a1))
a2=a8*0.06
d.a0(new A.w1(a9,p+a2,a9+v,a1))
d.a0(new A.w1(a9+h,e,a9+g,f))
d.a0(new A.fd())
a3=A.am()
g=a7*0.3
h=a9-g
a3.scT(new F.ai(D.Ql,D.Qy,C.t,A.a([b2,b0,w],q),D.aeC,a6).cB(0,new A.W(h,f,h+a7*0.6,f+(p-f))))
b3.dd(d,a3)
u=A.bs(u)
u.a0(new A.dF(a9-a7*0.1,f+a0))
u.a0(new A.w1(a9-a7*0.14,e,a9-a7*0.18,p))
u.a0(new A.w1(a9-a7*0.08,e,a9-s,f+a8*0.04))
u.a0(new A.fd())
s=A.am()
s.r=C.h.j(0.22).gq(0)
b3.dd(u,s)
s=a8*0.28
a4=new A.k(a9,s)
a5=A.am()
v=A.a4(b0,C.h,b1?0.62:0.5)
v.toString
a5.scT(new K.cA(D.QA,0.95,C.t,a6,0,A.a([v,b2,b0,w],q),D.agn,a6).cB(0,A.ft(a4,g)))
b3.c7(a4,g,a5)
b0=A.am()
b0.b=C.as
v=this.c
b0.c=v?Math.max(1.6,a7*0.06):r
b0.r=(v?C.h.j(0.95):C.l.j(0.28)).gq(0)
b3.c7(a4,g,b0)
b0=g*0.38
b0=A.js(new A.k(a9-g*0.32,s-b0),b0,g*0.55)
u=A.am()
u.r=C.h.j(b1?0.85:0.72).gq(0)
b3.mp(b0,u)
b0=A.am()
b0.r=C.h.j(0.35).gq(0)
b3.c7(new A.k(a9+g*0.18,s-g*0.15),g*0.08,b0)
b0=a7*0.38
g=A.js(new A.k(a9,f+a8*0.01),a2,b0)
s=A.am()
v=a9-a7*0.19
s.scT(new F.ai(E.V,C.a0,C.t,A.a([b2,w],q),a6,a6).cB(0,new A.W(v,f,v+b0,f+a2)))
b3.mp(g,s)},
cj(d){return!d.b.n(0,this.b)||d.c!==this.c||d.d!==this.d}}
B.xl.prototype={}
B.Yh.prototype={
l(){var w=this,v=w.ao$
if(v!=null)v.N(0,w.gcl())
w.ao$=null
w.aa()},
aZ(){this.bb()
this.b8()
this.cm()}}
B.MS.prototype={}
B.lC.prototype={
p(d){return this.a},
$ibQ:1}
B.t6.prototype={}
B.vH.prototype={
aH(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=this.b
if(k<=0)return
w=e.gdK()*0.11
$.af()
v=A.am()
v.r=G.pZ.gq(0)
u=e.a
t=u/2
s=e.b
r=s/2
q=u*0.22
p=s*0.22
u-=q
s-=p
o=[new A.k(q,p),new A.k(t,p),new A.k(u,p),new A.k(q,r),new A.k(t,r),new A.k(u,r),new A.k(q,s),new A.k(t,s),new A.k(u,s)]
for(k=D.aoF.h(0,C.k.S(k,1,6)),u=k.length,s=d.a,n=0;n<u;++n){m=o[k[n]]
l=v.ba()
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
if(v.a.e)v.aee()},
aP(d){var w,v,u,t=this
t.b1(d)
w=t.a
v=w.e
if(v&&!d.e)t.aee()
else{v=!v
if(v&&d.e)t.aW5(w.d)
else{if(v){u=w.d
u=u!==d.d&&u>0}else u=!1
if(u)t.e=C.k.S(w.d,1,6)
else if(t.f&&v&&w.d>0)t.e=C.k.S(w.d,1,6)}}},
aee(){var w=this,v=w.d
if(v!=null)v.U(0)
w.f=!1
v=Date.now()
w.a.f.i9(0,!0)
w.d=A.fA(E.kC,new B.ba7(w,new A.c4(v,0,!1)))},
aFA(){var w,v=this,u=v.d
if(u!=null)u.U(0)
v.d=null
v.f=!0
u=v.a.f
w=u.r
if(w!=null&&w.a!=null){u.bB(0)
v.a.f.sq(0,0)}if(v.c==null)return
v.E(new B.ba5())},
aW5(d){var w,v,u=this,t=u.d
if(t!=null)t.U(0)
u.d=null
t=u.f=!1
w=u.a.f
v=w.r
if(v!=null?v.a!=null:t){w.bB(0)
u.a.f.sq(0,0)}if(u.c==null)return
u.E(new B.ba8(u,d))},
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
o=p?C.h:C.k0
n=A.x(10)
if(p)m=j.c
else m=!s||j.d>0?j.c:H.bR
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
j=F.ri(A.dm(k,k,new A.d5(w,x.k),new B.vH(w,k),new A.a1(j,j)),E.kC,F.r2(),C.bS,C.cQ,new B.ba9())}else{j=j.r||j.e?G.pZ:C.b1
p=A.aD(A.l("?",k,k,k,k,k,A.B(k,k,j,k,k,k,k,k,k,k,k,p*0.38,k,k,C.D,k,1,!0,k,k,k,k,k,k,k,k),k,k),k,k)
j=p}return A.cp(v,new B.baa(l),A.eR(k,A.dG(K.iw(k,j,k,C.a9,new A.t(o,k,s,n,u,k,C.m),C.bT,k,q,k,new A.A(m,m,m,m),q),r),C.P,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,t,k,k,k,k,k,k))}}
B.N1.prototype={
u(d){var w,v=null,u=x.p,t=A.a([],u),s=this.c,r=s[0]
if(r!=null)t.push(r)
r=s[3]
if(r!=null)t.push(r)
r=A.a([],u)
w=s[2]
if(w!=null)r.push(w)
s=s[1]
if(s!=null)r.push(s)
u=A.a([],u)
if(t.length!==0)u.push(new A.G(v,58,new B.Wk(t,v),v))
u.push(F.Q(new A.a2(H.fw,A.aD(new O.hd(1,A.cd(new B.aDi(this)),v),v,v),v),1))
if(r.length!==0)u.push(new A.G(v,58,new B.Wk(r,v),v))
return F.P(u,E.j,C.i,E.n)}}
B.Wk.prototype={
u(d){var w,v,u,t=x.p,s=A.a([],t)
for(w=this.c,v=0;v<w.length;++v){u=A.a([],t)
if(v>0)u.push(H.aQ)
u.push(new F.ee(1,E.cm,w[v],null))
C.b.H(s,u)}return new A.a2(E.fx,F.S(s,E.j,C.i,E.n,0),null)}}
B.a4f.prototype={
u(d){var w,v,u,t,s=this,r=null,q=x.p,p=A.a([new B.zG(H.bM,s.c,36,r),H.aX,new B.zG(G.c6,new B.aDj(d),36,r)],q),o=s.d
if(o!=null)C.b.H(p,A.a([H.aX,new B.zG(Ab.kS,o,36,r)],q))
p=F.S(p,E.j,C.i,E.v,0)
o=D.me.j(0.9)
w=A.x(20)
v=F.R(G.a4.j(0.35),1)
w=F.Q(F.P(A.a([D.a62,R.aZ,F.cQ(C.q,A.y(r,A.l(s.e,r,1,r,r,!1,A.B(r,r,C.h.j(0.85),r,r,r,r,r,r,r,r,11,r,r,C.R,r,r,!0,r,0.3,r,r,r,r,r,r),r,r),C.f,r,r,new A.t(o,r,v,w,r,r,C.m),r,r,r,r,H.fw,r,r,r),E.ar)],q),E.j,C.i,E.n),1)
v=A.a([],q)
o=D.me.j(0.92)
u=A.x(20)
t=F.R(G.a4.j(0.4),1)
v.push(A.y(r,F.S(A.a([A.ah(N.eu,D.cE.j(0.95),r,r,16),G.aL,A.l(""+s.f+" Players",r,r,r,r,r,D.Pc,r,r)],q),E.j,C.i,E.v,0),C.f,r,r,new A.t(o,r,t,u,r,r,C.m),r,r,r,r,G.hh,r,r,r))
return new A.a2(D.a4s,F.P(A.a([F.S(A.a([p,w,F.S(v,E.j,C.i,E.v,0)],q),E.j,C.i,E.n,0),E.aG,A.y(r,r,C.f,r,r,new A.t(r,r,r,r,r,new F.ai(E.V,C.a0,C.t,A.a([C.w,G.a4.j(0.45),C.w],x.O),r,r),C.m),r,1,r,E.ce,r,r,r,r)],q),E.j,C.i,E.n),r)}}
B.afZ.prototype={
u(d){var w,v=null,u=x.x,t=A.ah(A_.Bx,D.cE,v,A.a([new A.c7(G.a4.j(0.55),C.o,6)],u),15)
$.af()
w=A.am()
w.scT(D.aaW.cB(0,D.aup))
return F.S(A.a([D.aLr,T.Og,t,H.d8,A.l("LUDO",v,v,v,v,v,A.B(v,v,v,v,v,v,v,v,v,v,v,22,v,v,C.D,w,1,!0,v,4.2,v,v,v,A.a([new A.c7(G.a4.j(0.45),C.o,8),Ae.NG],u),v,v),v,v),H.d8,D.aLs],x.p),E.j,C.a_,E.v,0)}}
B.Uv.prototype={
u(d){var w,v,u=null,t=A.x(5),s=this.c,r=A.a4(s,C.h,0.35)
r.toString
w=A.a4(s,C.l,0.25)
w.toString
w=A.a([r,s,w],x.O)
r=A.a([new A.U(0,C.r,s.j(0.45),E.aJ,6)],x.V)
v=F.R(C.h.j(0.35),1)
return A.y(u,A.dm(u,u,u,new B.vH(s.n(0,D.dM)?5:3,u),C.ab),C.f,u,u,new A.t(u,u,v,t,r,new F.ai(E.S,E.Z,C.t,w,u,u),C.m),u,16,u,u,u,u,u,16)}}
B.zG.prototype={
u(d){var w=null,v=this.e,u=F.R(G.a4,1.6),t=A.a([new A.U(0,C.r,G.a4.j(0.22),C.o,8)],x.V)
return A.b1(!1,C.z,!0,w,A.b9(!1,w,!0,K.f7(A.ah(this.c,D.cE,w,w,v*0.42),w,new A.t(w,w,u,w,t,D.aax,C.F),v,w,v),C.bb,!0,w,w,w,w,w,w,w,w,this.d,w,w,w,w,w,w,w),C.f,C.w,0,w,w,w,w,w,C.G)}}
B.a4k.prototype={
u(d){var w,v,u,t,s,r,q,p,o=null,n=this.c
if(n<=0)return C.an
w=C.c.fP(C.k.p(C.k.bj(n,60)),2,"0")
v=C.c.fP(C.k.p(C.k.ab(n,60)),2,"0")
u=n<=3
t=C.d.S(n/Math.max(1,this.d),0,1)
s=u?C.dj:D.cE
n=x.p
r=F.S(A.a([A.ah(T.Bi,s,o,o,14),H.aX,A.l("Time left",o,o,o,o,o,A.B(o,o,C.h.j(0.72),o,o,o,o,o,o,o,o,11,o,o,C.R,o,o,!0,o,0.3,o,o,o,o,o,o),o,o),H.bZ,A.l(w+":"+v,o,o,o,o,o,A.B(o,o,s,o,o,o,o,o,o,o,D.afq,13,o,o,C.x,o,o,!0,o,0.6,o,o,o,o,o,o),o,o)],n),E.j,C.i,E.n,0)
q=A.x(99)
p=C.h.j(0.08)
return new A.a2(D.a4O,F.P(A.a([r,H.aw,A.dC(q,new A.G(o,4,new A.ay(C.C,o,C.at,C.u,A.a([new A.de(p,o,o),A5.axP(E.V,A.bJ(o,new A.t(o,o,o,o,o,new F.ai(E.V,C.a0,C.t,u?D.agO:D.acX,o,o),C.m),C.Y),o,t)],n),o),o),C.ak,o)],n),E.j,C.i,E.n),o)}}
B.a4g.prototype={
u(d){var w,v,u,t,s,r=this,q=null,p=D.xL.j(0.92),o=A.x(12),n=r.r,m=n?r.c.j(0.85):C.h.j(0.12)
m=F.R(m,n?1.4:1)
w=r.c
v=A.a4(w,C.h,0.4)
v.toString
u=A.a4(w,C.l,0.35)
u.toString
u=A.a([v,w,u],x.O)
w=n?C.h.j(0.95):w.j(0.85)
w=F.R(w,n?2:1.5)
v=r.Q?D.a82:H.cR
u=A.y(q,A.ah(v,C.h.j(0.95),q,q,16.32),C.f,q,q,new A.t(q,q,w,q,q,new K.cA(T.pv,0.5,C.t,q,0,u,q,q),C.F),q,34,q,q,q,q,q,34)
w=C.h.j(n?1:0.88)
n=x.p
w=A.a([A.l(""+r.e+"  "+r.d,q,1,C.H,q,q,A.B(q,q,w,q,q,q,q,q,q,q,q,12,q,q,C.x,q,1.1,!0,q,q,q,q,q,q,q,q),q,q)],n)
w.push(A.l(r.as,q,1,C.H,q,q,A.B(q,q,D.cE.j(0.8),q,q,q,q,q,q,q,q,9.5,q,q,C.R,q,1.1,!0,q,q,q,q,q,q,q,q),q,q))
w=F.Q(F.P(w,E.X,C.a_,E.n),1)
v=r.f
v=v>0?C.k.S(v,1,6):0
t=r.y
s=t?r.z:q
return A.y(q,F.S(A.a([u,E.a2,w,G.aL,new B.MT(D.cE,v,r.w,r.x,t,s,26,q)],n),E.j,C.i,E.n,0),C.f,q,q,new A.t(p,q,m,o,q,q,C.m),q,56,q,q,D.a5I,q,q,q)},
gaG(d){return this.d}}
B.zI.prototype={
u(d){var w,v,u,t=null,s=this.c
s=isFinite(s)&&s>0?s:0
if(s<=0)return C.an
w=A.x(14)
v=A.a([new A.U(0,C.r,this.e.j(0.18),C.o,16),new A.U(0,C.r,C.l.j(0.45),E.ez,14)],x.V)
u=F.R(G.a4.j(0.45),1.2)
return A.y(t,A.dC(A.x(11),this.d,C.ak,t),C.f,t,t,new A.t(t,t,u,w,v,D.aaI,C.m),t,s,t,t,H.hi,t,t,s)}}
B.N3.prototype={
u(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.c,l=m||o.e,k=l?1:0.45
m=m&&!o.e?o.d:n
w=A.x(16)
v=l?D.agv:D.agH
u=F.R(l?G.a4.j(0.9):C.h.j(0.14),1.4)
t=x.V
s=A.a([],t)
if(l)s.push(new A.U(0,C.r,D.mC.j(0.35),E.cH,14))
r=A.x(8)
t=A.a([new A.U(0,C.r,C.l.j(0.25),E.aJ,4)],t)
q=o.e
t=A.y(n,A.dm(n,n,n,new B.vH(q?6:5,n),C.ab),C.f,n,n,new A.t(C.h,n,n,r,t,n,C.m),n,36,n,n,A7.nf,n,n,36)
r=q?"Rolling\u2026":o.r
r=A.l(r,n,n,n,n,n,A.B(n,n,D.cE.j(0.9),n,n,n,n,n,n,n,n,11,n,n,C.R,n,1.1,!0,n,n,n,n,n,n,n,n),n,n)
p=x.p
return A.dG(A.eR(n,A.y(n,F.S(A.a([t,H.cX,F.P(A.a([r,A.l(q?"Wait":o.f,n,n,n,n,n,D.aAQ,n,n)],p),E.X,C.i,E.v)],p),E.j,C.a_,E.n,0),C.f,n,n,new A.t(n,n,u,w,s,new F.ai(C.Q,C.W,C.t,v,n,n),C.m),n,n,n,n,D.a4R,n,n,1/0),C.P,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,m,n,n,n,n,n,n),k)}}
B.zJ.prototype={
u(d){var w=null,v=A.a([D.a28,D.a2X,A.bJ(w,new A.t(w,w,w,w,w,new F.ai(C.Q,C.W,C.t,A.a([D.xL.j(0.55),C.w,D.a0K.j(0.72)],x.O),I.iX,w),C.m),C.Y),D.a2K],x.p)
C.b.H(v,this.aCg())
v.push(D.a9h)
v.push(this.c)
return new A.ay(C.C,w,C.at,C.u,v,w)},
aCg(){var w,v,u=null,t=A.a([],x.p)
for(w=x.O,v=0;v<4;++v)t.push(new A.bE(D.alZ[v],u,u,A.y(u,u,C.f,u,u,new A.t(u,u,u,u,u,new K.cA(C.q,0.5,C.t,u,0,A.a([D.e7[D.Cc[v]].j(0.16),D.e7[D.Cc[v]].j(0)],w),u,u),C.F),u,220,u,u,u,u,u,220),u))
return t}}
B.afW.prototype={
aH(b0,b1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8=null,a9=new A.u9()
a9.uy(11)
w=b1.a
v=b1.b
u=w*0.5
t=[new A.f0(new A.k(w*0.2,v*0.1),w*0.4,D.ya),new A.f0(new A.k(w*0.82,v*0.16),w*0.36,D.a05),new A.f0(new A.k(u,v*0.48),u,D.a1u),new A.f0(new A.k(w*0.12,v*0.82),w*0.34,D.mC),new A.f0(new A.k(w*0.9,v*0.78),w*0.32,D.XG)]
for(s=x.O,r=b0.a,q=0;q<5;++q){p=t[q]
o=p.a
n=p.b
m=p.c
$.af()
p=new A.eC(C.b6,C.aP,C.bf,C.bk,C.be)
p.scT(new K.cA(C.q,0.5,C.t,a8,0,A.a([m.j(0.18),m.j(0)],s),a8,a8).cB(0,A.ft(o,n)))
l=p.ba()
r.drawCircle(o.a,o.b,n,l)
l.delete()}$.af()
k=A.am()
k.b=C.as
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
l=k.ba()
a3=a3.gdj().a
a3===$&&A.b()
a3=a3.a
a3.toString
r.drawPath(a3,l)
l.delete()}for(a7=0;a7<64;++a7){p=a9.b6()
h=a9.b6()
g=a9.b6()
$.af()
a0=new A.eC(C.b6,C.aP,C.bf,C.bk,C.be)
a0.r=C.h.j(0.12+a9.b6()*0.28).gq(0)
l=a0.ba()
r.drawCircle(p*w,h*v,0.5+g*1.3,l)
l.delete()}v*=0.06
w*=0.28
$.af()
r=A.am()
r.scT(new K.cA(C.q,0.5,C.t,a8,0,A.a([G.a4.j(0.07),G.a4.j(0)],s),a8,a8).cB(0,A.ft(new A.k(u,v),w)))
b0.c7(new A.k(u,v),w,r)},
cj(d){return!1}}
var z=a.updateTypes(["al<~>()","~()","~(@)","Cd(u,r)","L(jp)","al<T<hk>>(r)","T<hk>(T<hk>)","r(t8,t8)","vL(u,ab<h,@>)","~(r,r)","c(K)","hE(u)","uy(u)","tG(u)","j_<r>(r)","~(T<T<jp>>)","zI(K)","zH(u)","km(u,q8)","De(u,ac)","ee(r)","T<xl>()"])
B.aCr.prototype={
$1(d){return d.b===this.a},
$S:198}
B.aCs.prototype={
$1(d){return d.b===this.a},
$S:198}
B.aCq.prototype={
$1(d){return J.J(d)},
$S:33}
B.aCt.prototype={
$1(d){return d},
$S:119}
B.aDe.prototype={
$1(d){return P.z0(this.a.as.c,50,d,this.b)},
$S:z+5}
B.aDf.prototype={
$1(d){return d},
$S:z+6}
B.aDg.prototype={
$2(d,e){var w=C.k.bl(d.a,e.a)
if(w!==0)return w
return C.k.bl(d.b,e.b)},
$S:z+7}
B.brT.prototype={
$2(d,e){var w=A.aQ(J.C(e,"mode"))
if(w==null)w="online"
if(w==="online")return D.aof
return new B.vL(new B.a4i(B.bTq(w),null),null)},
$S:z+8}
B.baK.prototype={
$0(){if($.jS>0)A.ho()},
$S:0}
B.baI.prototype={
$1(d){if(this.a.c!=null)this.b.$0()},
$S:2}
B.baJ.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.rI()},
$S:2}
B.baH.prototype={
$1(d){var w=this.a
if(w.c!=null)w.rI()},
$S:2}
B.baq.prototype={
$0(){var w=this.a
w.as=!1
w.at=A.a([],x.t)},
$S:0}
B.bar.prototype={
$0(){var w=this.a
w.as=!1
w.at=A.a([],x.t)},
$S:0}
B.bas.prototype={
$0(){var w=this.a
w.as=!1
w.at=A.a([],x.t)},
$S:0}
B.bat.prototype={
$0(){var w=this.a
w.as=!1
w.at=A.a([],x.t)},
$S:0}
B.bau.prototype={
$1(d){var w=this.a
if(w.c!=null)w.rI()},
$S:2}
B.bav.prototype={
$1(d){this.a.rI()},
$S:2}
B.bal.prototype={
$0(){return this.a.Q=!0},
$S:0}
B.bam.prototype={
$0(){return this.a.x=this.b.cS(6)+1},
$S:0}
B.ban.prototype={
$0(){return this.a.Q=!1},
$S:0}
B.bao.prototype={
$0(){this.a.J3()},
$S:0}
B.bap.prototype={
$0(){var w,v=this.a
v.as=!0
w=v.f
w===$&&A.b()
v.at=v.r.a05(w,this.b,this.c)},
$S:0}
B.bac.prototype={
$1(d){this.a.rI()},
$S:2}
B.bad.prototype={
$0(){var w=this,v=w.a
v.as=!1
v.at=A.a([],x.t)
v.ch=new B.a4l(w.b,w.c,w.d)},
$S:0}
B.bae.prototype={
$0(){return this.a.ch=null},
$S:0}
B.baf.prototype={
$0(){var w=this.a
w.as=!1
w.at=A.a([],x.t)},
$S:0}
B.bag.prototype={
$0(){var w=this.a
w.as=!1
w.at=A.a([],x.t)},
$S:0}
B.bah.prototype={
$0(){var w=this.a
w.as=!1
w.at=A.a([],x.t)
w.J3()},
$S:0}
B.bay.prototype={
$0(){},
$S:0}
B.baz.prototype={
$1(d){var w=null,v=A.x(20),u=A.l(this.b,w,w,w,w,w,A.B(w,w,D.e7[this.c],w,w,w,w,w,w,w,w,w,w,w,C.B,w,w,!0,w,w,w,w,w,w,w,w),w,w)
return K.kd(A.a([K.md(D.aGr,new B.bax(this.a,d),w)],x.p),w,D.mF,D.aGi,w,w,new A.cB(v,C.y),u,w)},
$S:z+11}
B.bax.prototype={
$0(){A.aS(this.b,!1).ep(0,null)
var w=this.a.c
w.toString
A.aS(w,!1).ep(0,null)},
$S:0}
B.baA.prototype={
$0(){return this.a.a.$0()},
$S:0}
B.baB.prototype={
$1(d){var w=this.b.c
if(w==null)return
this.a.a=M.bwG(w)},
$S:2}
B.bak.prototype={
$1(d){var w,v,u=null,t=x.O,s=A.a([N.zf,D.mF,A3.qp],t),r=A.x(22),q=F.R(G.a4.j(0.65),1.5),p=x.V,o=A.a([new A.U(1,C.r,G.a4.j(0.18),C.o,26),new A.U(0,C.r,C.l.j(0.55),H.f4,20)],p)
t=A.a([C.bs.j(0.5),C.dA.j(0.28)],t)
t=A.y(u,N.BD,C.f,u,u,new A.t(u,u,F.R(H.fn.j(0.5),1),u,A.a([new A.U(0,C.r,C.bs.j(0.25),C.o,14)],p),new F.ai(E.S,E.Z,C.t,t,u,u),C.F),u,58,u,u,u,u,u,58)
p=A.l("Your current match will end.\nAll progress will be lost.",u,u,u,u,u,A.B(u,u,C.h.j(0.62),u,u,u,u,u,u,u,u,14,u,u,u,u,1.45,!0,u,u,u,u,u,u,u,u),C.M,u)
w=C.h.j(0.28)
v=x.p
return A9.bA5(A.bJ(new A.a2(N.Ai,F.P(A.a([t,N.jw,D.aGl,E.aY,p,Ac.oG,F.S(A.a([F.Q(K.a5b(Aa.vD,new B.bai(d),A.F9(u,u,u,u,u,u,u,u,u,C.J,u,u,E.eZ,u,new A.cB(A.x(12),C.y),new A.aL(w,1,C.E,-1),u,u,u,u)),1),H.cX,F.Q(K.md(A2.Pp,new B.baj(d),A.oo(C.bs,u,u,C.h,E.eZ,new A.cB(A.x(12),C.y),u)),1)],v),E.j,C.i,E.n,0)],v),E.j,C.i,E.v),u),new A.t(u,u,q,r,o,new F.ai(E.S,E.Z,C.t,s,u,u),C.m),C.Y),400)},
$S:z+12}
B.bai.prototype={
$0(){A.aS(this.a,!1).ep(0,!1)
return null},
$S:0}
B.baj.prototype={
$0(){A.aS(this.a,!1).ep(0,!0)
return null},
$S:0}
B.baD.prototype={
$1(d){return d},
$S:119}
B.baG.prototype={
$2(d,e){if(!d)this.a.CS()},
$S:197}
B.baE.prototype={
$0(){A.aS(this.a,!1).fi(0,A.i1(new B.baC(),null,x.H))},
$S:0}
B.baC.prototype={
$1(d){return G.ND},
$S:z+13}
B.baF.prototype={
$0(){return this.a.aa5()},
$S:0}
B.baw.prototype={
$0(){return this.a.aa5()},
$S:0}
B.bp7.prototype={
$1(d){if(this.a.c!=null)if($.jS>0)A.ho()},
$S:2}
B.baL.prototype={
$0(){var w=this.a.c
w.toString
O.m3(w,new B.vJ(D.iZ,null),x.X)
return null},
$S:0}
B.baM.prototype={
$0(){var w=this.a.c
w.toString
O.m3(w,new B.vJ(D.HX,null),x.X)
return null},
$S:0}
B.baN.prototype={
$0(){var w=this.a.c
w.toString
O.m3(w,new B.vJ(D.iZ,null),x.X)
return null},
$S:0}
B.baO.prototype={
$0(){var w=this.a.c
w.toString
O.m3(w,new B.vJ(D.HX,null),x.X)
return null},
$S:0}
B.b04.prototype={
$1(d){return this.a.c.$0()},
$S:52}
B.b96.prototype={
$1(d){return D.abd.cB(0,d)},
$S:75}
B.bp8.prototype={
$1(d){if(this.a.c!=null)if($.jS>0)A.ho()},
$S:2}
B.bbw.prototype={
$1(d){var w,v,u,t,s,r=this.a
if(r.c==null)return
if(x.f.b(d)){w=A.an(d,x.N,x.z)
v=w.h(0,"code")
u=J.fN(v)
if(u.n(v,200)||u.n(v,"200")){r.E(new B.bbx(r,w))
t=L.dk(w)
u=t.a
if(u!=null){r.f.sd9(0,u)
s=t.d
if(s>0)r.e=s
r.rr(new B.bby(r,t))
r.V1(u)}r.E(new B.bbz(r))
r.KE()
r.KC()}else r.E(new B.bbA(r,w))}},
$S:4}
B.bbx.prototype={
$0(){var w=this.a
w.z=this.b
w.x=null},
$S:0}
B.bby.prototype={
$0(){M.cw("ludo_online").dL("joinRoom",this.a.z6(this.b.a))},
$S:0}
B.bbz.prototype={
$0(){return this.a.Q=!1},
$S:0}
B.bbA.prototype={
$0(){var w=this.a,v=this.b.h(0,"message")
v=v==null?null:J.J(v)
w.x=v==null?"Room create failed":v
w.Q=!1},
$S:0}
B.bbB.prototype={
$1(d){var w,v=this.a
if(v.c==null)return
if(J.f(d,"game_started")){v.rs()
return}if(v.gjl().length===0)return
w=v.ch
if(w!=null)w.U(0)
v.ch=A.c0(A6.kD,new B.bbC(v))},
$S:4}
B.bbC.prototype={
$0(){var w=this.a
if(w.c==null||w.gjl().length===0)return
w.V0(w.gjl())},
$S:0}
B.bbD.prototype={
$1(d){var w,v,u,t,s=this.a
if(s.c==null)return
w=x.f
if(w.b(d)){v=A.an(d,x.N,x.z)
if(J.f(v.h(0,"success"),!1)){w=v.h(0,"message")
u=w==null?null:J.J(w)
if(u!=null&&u.length!==0)s.E(new B.bbE(s,u))
return}t=!0
if(!J.f(v.h(0,"success"),!0))if(!w.b(v.h(0,"ludoState"))){w=v.h(0,"gameId")
if(w==null)w=v.h(0,"game_id")
w=(w==null?null:J.J(w).length!==0)===!0
t=w}if(t)s.rs()}},
$S:4}
B.bbE.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.bbN.prototype={
$0(){var w,v,u=this.a
if(L.dk(u.z).gl0())w="All "+u.gnW()+" players ready \u2014 starting match\u2026"
else{w=u.gv9()
v=u.z
w=w.length!==0?"Waiting: "+L.dk(v).e+"/"+u.gnW()+" joined. Share code: "+u.gv9():"Waiting: "+L.dk(v).e+"/"+u.gnW()+" joined. Generating invite code\u2026"}u.y=w},
$S:0}
B.bb2.prototype={
$1(d){var w
this.a.d0("connect",this.b.aM())
w=this.c
if((w.a.a&30)===0)w.eR(0)},
$S:4}
B.bb9.prototype={
$0(){var w=this.a
w.z=this.b
w.x=null},
$S:0}
B.bbJ.prototype={
$1(d){this.a.V0(this.b)},
$S:14}
B.bbs.prototype={
$0(){var w=this.a
w.y="Lobby full ("+w.gnW()+"/"+w.gnW()+") \u2014 starting match\u2026"},
$S:0}
B.bbK.prototype={
$0(){var w=M.cw("ludo_online"),v=this.a,u=this.b
w.dL("joinRoom",v.z6(u))
w.dL("startGame",v.z6(u))},
$S:0}
B.bbL.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.bbM.prototype={
$0(){return this.a.x=this.b.a},
$S:0}
B.baX.prototype={
$0(){var w=this.a
w.y=w.x=null
w.Q=!0},
$S:0}
B.baY.prototype={
$0(){var w=this.a
w.x="Please log in to continue."
w.Q=!1},
$S:0}
B.baZ.prototype={
$0(){var w=this.a
return w.y="Creating room ("+w.e+" players)\u2026"},
$S:0}
B.bb_.prototype={
$0(){var w="ludo_online",v=M.cw(w),u=this.a,t=A.d8(u.aME(),x.N,x.z)
t.k(0,"bootValue",u.d)
t.k(0,"boot_value",u.d)
t.k(0,"noOfPlayers",u.e)
t.k(0,"no_of_players",u.e)
t.k(0,"gameType",w)
t.k(0,"game_type",w)
t.k(0,"private_table",!0)
v.dL("getPrivateTable",t)},
$S:0}
B.bb0.prototype={
$0(){var w=this.a
w.x="Could not connect to server \u2014 check network and URL."
w.Q=!1},
$S:0}
B.bb1.prototype={
$0(){var w=this.a
if(w.c==null||!w.Q)return
w.E(new B.baW(w))},
$S:7}
B.baW.prototype={
$0(){var w=this.a
w.Q=!1
if(w.gjl().length===0)w.x="No response from server \u2014 timed out."},
$S:0}
B.bbi.prototype={
$0(){var w=this.a
w.y=w.x=null
w.Q=!0},
$S:0}
B.bbj.prototype={
$0(){var w=this.a
w.x="Enter a table ID from your host."
w.Q=!1},
$S:0}
B.bbk.prototype={
$0(){var w=this.a
w.x="Please log in to continue."
w.Q=!1},
$S:0}
B.bbl.prototype={
$0(){var w=this.a.a
if(w!=null)this.b.z=w},
$S:0}
B.bbm.prototype={
$0(){this.b.dL("joinRoom",this.a.z6(this.c))},
$S:0}
B.bbn.prototype={
$0(){var w=this.a
w.x=y.d
w.Q=!1},
$S:0}
B.bbo.prototype={
$0(){var w=this.a
w.y="Joined successfully. Match starts when lobby is full."
w.Q=!1},
$S:0}
B.bbp.prototype={
$0(){var w=this.a
w.x=this.b.a
w.Q=!1},
$S:0}
B.bbq.prototype={
$0(){var w=this.a
w.x=A.v(this.b)
w.Q=!1},
$S:0}
B.bbO.prototype={
$1(d){return!this.a.aaa(d)},
$S:8}
B.bb3.prototype={
$0(){var w=this.a
w.x="Join failed \u2014 could not read table from server. Try again."
w.Q=!1},
$S:0}
B.bb4.prototype={
$0(){return this.b.z=this.a.a},
$S:0}
B.bb5.prototype={
$0(){M.cw("ludo_online").dL("joinRoom",this.b.z6(this.a.b))
return null},
$S:0}
B.bb6.prototype={
$0(){var w=this.a
w.x=y.d
w.Q=!1},
$S:0}
B.bb7.prototype={
$0(){return this.a.Q=!1},
$S:0}
B.bb8.prototype={
$0(){var w=this.a
w.y="Joined by code. Match starts when lobby is full."
w.Q=!1},
$S:0}
B.bbc.prototype={
$0(){var w=this.a
w.y=w.x=null
w.Q=!0},
$S:0}
B.bbd.prototype={
$0(){var w=this.a
w.x="Enter invite code (3\u20134 characters)."
w.Q=!1},
$S:0}
B.bbe.prototype={
$0(){var w=this.a
w.x="Please log in to continue."
w.Q=!1},
$S:0}
B.bbf.prototype={
$0(){var w,v=this.b
v.y=v.z=null
w=this.a.a
w=w==null?null:w.a
v.x=w==null?"Join nahi hua \u2014 host ki table pe seat nahi mili. Dono phones pe alag-alag account se login karo, naya room banao, phir code se JOIN karo.":w
v.Q=!1},
$S:0}
B.bbg.prototype={
$0(){var w=this.a
w.x=this.b.a
w.Q=!1},
$S:0}
B.bbh.prototype={
$0(){var w=this.a
w.x=A.v(this.b)
w.Q=!1},
$S:0}
B.bbF.prototype={
$0(){var w=this.a
w.y=w.x=null},
$S:0}
B.bbG.prototype={
$0(){return this.a.x="tableId missing."},
$S:0}
B.bbH.prototype={
$0(){var w=this.a
return w.x="Only "+L.dk(w.z).e+"/"+w.gnW()+" players \u2014 wait for everyone to join."},
$S:0}
B.bbI.prototype={
$0(){return this.a.y="Starting game\u2026"},
$S:0}
B.baR.prototype={
$0(){F.jJ(new F.iY(this.a.gjl()))
this.b.X(x.q).f.b4(I.oH)},
$S:0}
B.baT.prototype={
$1(d){var w=this.a
if(!w.Q)w.lZ()},
$S:18}
B.baS.prototype={
$1(d){var w,v=d.toUpperCase()
if(v!==d){w=this.a.w
w.lS(0,w.a.YN(F.nH(C.I,v.length),v))}},
$S:18}
B.baU.prototype={
$0(){F.jJ(new F.iY(this.a.gjl()))
this.b.X(x.q).f.b4(I.oH)},
$S:0}
B.baV.prototype={
$1(d){return D.abA.cB(0,d)},
$S:75}
B.baP.prototype={
$0(){return A.aS(this.a,!1).oF()},
$S:0}
B.bbu.prototype={
$1(d){var w=null
return O.bux(A.l(""+d+" Players",w,w,w,w,w,w,w,w),d,x.S)},
$S:z+14}
B.bbv.prototype={
$1(d){var w
if(d!=null){w=this.a
w.E(new B.bbt(w,d))}},
$S:195}
B.bbt.prototype={
$0(){return this.a.e=this.b},
$S:0}
B.baQ.prototype={
$1(d){var w=this.a,v=A.cG(d,null)
return w.d=v==null?w.d:v},
$S:18}
B.bbP.prototype={
$1(d){var w=this.a,v=w.CW
if(v!=null)v.U(0)
w.CW=null},
$S:18}
B.bba.prototype={
$0(){var w=$.as.R$.d.c
if(w!=null)w.iC()
this.a.$0()},
$S:0}
B.bbr.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=d<L.dk(r.z).c.length,p=q?L.dk(r.z).c[d]:s,o=p!=null,n=o&&r.aaa(p),m=o&&p.length>8?"\u2026"+C.c.bS(p,p.length-6):p
if(q)if(n){o="You"+(r.a.c===D.iZ&&d===0?" (Host)":"")
w=o}else{o="Player "+A.v(m)
w=o}else w="Waiting for player\u2026"
r=d<r.gnW()-1?8:0
if(q)o=n?Q.cO.j(0.16):G.a4.j(0.18)
else o=C.w
if(q)v=n?Q.cO.j(0.55):G.a4.j(0.55)
else v=C.h.j(0.18)
v=F.R(v,1.5)
if(q)u=n?U.iT:H.cR
else u=Ah.tr
if(q)t=n?Q.cO:G.e1
else t=C.b1
v=A.y(s,A.ah(u,t,s,s,18),C.f,s,s,new A.t(o,s,v,s,s,s,C.F),s,36,s,s,s,s,s,36)
o=q?C.h.j(0.92):C.h.j(0.42)
return new A.a2(new A.A(0,0,0,r),F.S(A.a([v,H.aQ,F.Q(A.l(w,s,s,s,s,s,A.B(s,s,o,s,s,s,s,s,s,s,s,13,s,s,q?C.R:C.av,s,s,!0,s,s,s,s,s,s,s,s),s,s),1)],x.p),E.j,C.i,E.n,0),s)},
$S:89}
B.bbb.prototype={
$0(){var w=this.a
F.jJ(new F.iY(w.gv9()))
w.c.X(x.q).f.b4(I.On)},
$S:0}
B.bp9.prototype={
$1(d){if(this.a.c!=null)if($.jS>0)A.ho()},
$S:2}
B.bcC.prototype={
$1(d){var w=this.a
if(w.c==null||w.dy||w.fr||w.Q)return
if(w.w||w.dx)return
if(w.gnV()){if(!M.cw(w.a.f).y)w.Ws(!0)}else w.pF()},
$S:14}
B.bcD.prototype={
$1(d){return this.a.aMJ()},
$S:14}
B.bco.prototype={
$1(d){var w=this.a,v=w.e
if(v!=null)v.U(0)
w.e=A.c0(C.ct,new B.bcn(w))},
$S:4}
B.bcn.prototype={
$0(){var w=this.a
if(w.c==null||w.w||w.dx)return
if(w.dy||w.fr)return
if(w.gnV())w.Ws(!0)
else w.pF()},
$S:0}
B.bcp.prototype={
$1(d){return this.a.a7b()},
$S:4}
B.bbT.prototype={
$0(){return this.a.z=this.b},
$S:0}
B.bbV.prototype={
$0(){var w=this.a
w.y=this.b
w.z=null
w.Ef()},
$S:0}
B.bc6.prototype={
$0(){return this.a.aW=this.b},
$S:0}
B.bct.prototype={
$0(){this.a.SW()},
$S:0}
B.bcu.prototype={
$0(){return this.a.ak=this.b},
$S:0}
B.bbU.prototype={
$0(){var w=this.a
w.z=w.ch=null},
$S:0}
B.bcb.prototype={
$0(){var w,v,u,t,s,r,q,p=this,o=p.c
if(o){s=p.d
if(s==null)s=p.a.a
p.b.x=s}s=p.e
if(s){if(p.f==="waiting"){r=p.r
q=B.oB(r)&&!B.MW(r)}else q=!1
w=q
if(!w){r=p.b
r.y=B.q5(r.y,p.r)}r=J.C(p.r,"status")
v=r==null?null:J.J(r)
if(v!=null&&v.length!==0){r=p.b
u=A.F(x.N,x.z)
t=r.x
if(t!=null)J.CH(u,t)
J.ea(u,"status",v)
r.x=u}}u=!0
if(!o)if(!s){u=p.b
u=u.y!=null||u.x!=null}if(u){u=p.b
u.z=null}else{u=p.b
if(u.y==null&&u.x==null)u.z="Could not load game \u2014 check network / server URL"}u.Ef()},
$S:0}
B.bcr.prototype={
$0(){var w=this.a
w.k3=!0
w.k4=this.b
w.ok=new A.c4(Date.now(),0,!1)},
$S:0}
B.bc8.prototype={
$0(){var w,v,u=this.a
u.p1=null
if(u.c==null||!u.k3)return
w=u.p2
v=u.k4
if(w==null||v==null)return
if(B.q4(u.y)==="rolling"&&u.Dv())return
u.E(new B.bc7(u,v,w))},
$S:0}
B.bc7.prototype={
$0(){var w,v,u=this.a
u.k3=!1
u.p2=null
w=this.b
v=this.c
u.Kg(v,w)
u.id=v
u.k1=w},
$S:0}
B.bcs.prototype={
$0(){var w,v,u=this,t=u.a
t.k3=!1
t.p2=null
w=u.b
if(w!=null){v=u.c
v=v!=null&&v>0}else v=!1
if(v){v=u.c
t.Kg(v,w)
t.id=v
t.k1=w}},
$S:0}
B.bbW.prototype={
$0(){return this.a.Q=!0},
$S:0}
B.bbX.prototype={
$0(){return this.a.Q=!1},
$S:0}
B.bcc.prototype={
$0(){var w=this.a
w.dy=!0
w.go=null
w.fx=w.y2.cS(6)+1},
$S:0}
B.bcd.prototype={
$1(d){return this.a.b=d},
$S:585}
B.bce.prototype={
$1(d){this.a.a=d
return A.F(x.N,x.z)},
$S:586}
B.bcf.prototype={
$0(){var w=this.a
return w.fx=w.y2.cS(6)+1},
$S:0}
B.bcg.prototype={
$0(){var w,v,u=this,t=u.a
t.y=B.q5(t.y,u.b)
v=u.c
if(v>0){w=C.k.S(v,1,6)
t.fx=w
t.id=w
v=u.d
t.k1=v
t.Kg(w,v)}t.dy=!1
t.go=null
t.Ef()},
$S:0}
B.bch.prototype={
$0(){return this.a.ch=null},
$S:0}
B.bci.prototype={
$0(){var w=this.a,v=this.b,u=x.N
u=w.y=B.q5(w.y,A.aa(["dice",v,"ludoState",A.aa(["lastDice",v,"phase","moving"],u,x.K)],u,x.z))
if(u!=null)w.UE(u)},
$S:0}
B.bcj.prototype={
$0(){},
$S:0}
B.bck.prototype={
$0(){var w=this.a,v=x.N
w.y=B.q5(w.y,A.aa(["dice",0,"ludoState",A.aa(["lastDice",0,"phase","rolling"],v,x.K)],v,x.z))},
$S:0}
B.bcl.prototype={
$1(d){var w=this.b
if(w.c==null)return
w.pC(C.b.gW(this.a.c))},
$S:2}
B.bcm.prototype={
$0(){return this.a.dy=!1},
$S:0}
B.bcq.prototype={
$0(){var w=this.a,v=x.N
w.y=B.q5(w.y,A.aa(["dice",0,"ludoState",A.aa(["lastDice",0,"phase","rolling"],v,x.K)],v,x.z))
w.SW()
w.ch=null},
$S:0}
B.bca.prototype={
$1(d){var w=this.a
w.p4=w.JP(d,!0)},
$S:z+15}
B.bc9.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.J5(this.b,this.c)},
$S:2}
B.bbR.prototype={
$0(){var w=this.a
return w.p4=w.JP(this.b,!0)},
$S:0}
B.bbS.prototype={
$0(){var w=this.a
w.rx=this.b.a[2]
w.p4=w.JP(this.c,!0)
w.p3=null},
$S:0}
B.bbQ.prototype={
$0(){var w=this
w.a.p3=new B.a4l(w.b,w.c,w.d)},
$S:0}
B.bc_.prototype={
$0(){var w=this.a
w.p4=w.pr(this.b)},
$S:0}
B.bc0.prototype={
$0(){var w,v=this,u=v.b,t=v.a
u.y=t.b
u.p4=v.c
u.R8=v.d
u.RG=v.e
u.p3=null
w=v.f
if(t.a===6){u.ch=null
u.Lt()}else if(w>=0){u.ch=w
u.SW()}},
$S:0}
B.bc1.prototype={
$0(){var w=this.a
if(w.c==null||w.RG==null)return
w.RG=w.R8=null
w.E(new B.bbZ())
w.lm(!0,!0)
w.uW()},
$S:0}
B.bbZ.prototype={
$0(){},
$S:0}
B.bc2.prototype={
$0(){var w,v,u,t=this,s=t.b,r=B.q5(s.y,t.c)
s.y=r
w=t.e
v=t.f
u=J.C(v[t.r],w)
s.y=s.U3(t.a.a,r,t.d,u,w)
s.RG=s.R8=null
s.p4=v
s.Ef()},
$S:0}
B.bc3.prototype={
$0(){var w,v,u,t=this.b
t.RG=t.R8=null
t.p4=this.c
w=t.y
v=this.a.a
u=x.N
u=t.y=B.q5(w,A.aa(["dice",v,"ludoState",A.aa(["lastDice",v,"phase","moving"],u,x.K)],u,x.z))
if(u!=null)t.UE(u)},
$S:0}
B.bc4.prototype={
$0(){var w=this.a
w.RG=w.R8=null},
$S:0}
B.bc5.prototype={
$0(){return this.a.Ef()},
$S:0}
B.bbY.prototype={
$0(){var w=this,v=w.c>=w.a.length
if(v)return C.bA
return w.b.a05(w.a,w.c,w.d)},
$S:587}
B.bcx.prototype={
$1(d){return this.anF(d)},
anF(d){var w=0,v=A.p(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$$1=A.q(function(a0,a1){if(a0===1)return A.m(a1,v)
for(;;)switch(w){case 0:e=t.a
if(e.c==null){w=1
break}w=3
return A.e(e.lm(!0,!0),$async$$1)
case 3:if(e.c==null){w=1
break}s=e.y
r=B.q4(s)
q=B.vI(s)
p=B.ng(s)
o=t.b
w=o>=0&&p===o&&r==="moving"&&q>0?4:5
break
case 4:n=B.q6(s)
o=t.c
m=e.CY(e.vB(n,o))
l=t.d
k=l<0?0:l
j=e.DN(n,q,m,k,o,t.e,!0)
if(j.length===0&&q===6&&l>=0&&l<m.length){i=A.a([],x.t)
for(h=0;h<J.au(m[l]);++h){g=J.C(m[l],h)
if(g.a&&!g.c)i.push(h)}f=i}else f=j
w=f.length===0?6:7
break
case 6:w=8
return A.e(e.Ex(q,p),$async$$1)
case 8:case 7:case 5:if(e.c!=null)e.E(new B.bcw(e))
case 1:return A.n(u,v)}})
return A.o($async$$1,v)},
$S:588}
B.bcw.prototype={
$0(){return this.a.db=!1},
$S:0}
B.bcy.prototype={
$1(d){return d},
$S:119}
B.bcz.prototype={
$0(){return A.aS(this.a,!1).oF()},
$S:0}
B.bcA.prototype={
$0(){return A.aS(this.a,!1).oF()},
$S:0}
B.bcB.prototype={
$1(d){var w=this,v=null,u=w.d,t=A.dm(C.fa,v,v,new B.MZ(u,v),C.ab),s=w.a,r=s.a,q=w.b
return new B.zI(d,new A.ay(C.C,v,C.at,C.u,A.a([new A.j9(t,v),B.bD8(q.p3,r,new B.bcv(s,q,w.x),D.e7,u,w.f,w.w,d,w.e,w.r)],x.p),v),w.c,v)},
$S:z+16}
B.bcv.prototype={
$2(d,e){var w,v=this.b
if(v.dy||v.fr||v.RG!=null)return
w=this.c
if(w<0)return
if(d!==w)return
if(!C.b.t(this.a.a,e))return
v.pC(e)},
$S:589}
B.bpa.prototype={
$1(d){if(this.a.c!=null)if($.jS>0)A.ho()},
$S:2}
B.aDh.prototype={
$1(d){var w=this.a
x.an.a($.aF.h(0,$.ha()))
w=new B.zH(w.c,w.d,new B.N2(),H.bL,D.aoe)
w.hf()
return w},
$S:z+17}
B.bcN.prototype={
$2(d,e){var w=null,v=e.c,u=this.a,t=x.p,s=A.a([new B.afJ(u.a.c.b,u.gaWc(),new B.bcL(d),this.b,w)],t),r=e.d
if(r!=null&&r.length!==0)s.push(new A.a2(D.Ae,A.l(r,w,w,w,w,w,D.aCA,C.M,w),w))
s.push(new A.a2(D.a4T,F.S(A.a([A.l("TABLES",w,w,w,w,w,A.B(w,w,D.cE.j(0.9),w,w,w,w,w,w,w,w,11,w,w,C.x,w,w,!0,w,1.6,w,w,w,w,w,w),w,w),H.aQ,F.Q(A.y(w,w,C.f,G.a4.j(0.28),w,w,w,1,w,w,w,w,w,w),1),H.aQ,A.l(""+v.length,w,w,w,w,w,A.B(w,w,C.h.j(0.7),w,w,w,w,w,w,w,w,12,w,w,C.B,w,w,!0,w,w,w,w,w,w,w,w),w,w)],t),E.j,C.i,E.n,0),w))
if(e.a)u=D.UR
else u=v.length===0?D.UT:A.cd(new B.bcM(u,v))
s.push(F.Q(u,1))
return F.P(s,E.j,C.i,E.n)},
$S:z+18}
B.bcL.prototype={
$0(){return A.aS(this.a,!1).bg(0)},
$S:0}
B.bcM.prototype={
$2(d,e){var w,v=this
if(e.b>=640){w=v.b
return O.buT(null,D.ay_,new B.bcI(v.a,w),w.length,D.Ab,G.ei)}w=v.b
return O.j7(null,new B.bcJ(v.a,w),w.length,D.Ab,G.ei,!1,C.a3,new B.bcK(),!1)},
$S:z+19}
B.bcI.prototype={
$2(d,e){var w=this.b,v=w[e],u=D.e7[C.k.ab(e,4)],t=this.a,s=t.a.c.a
s=s==="computer"||s==="local"
return new B.Cd(v,u,s,new B.bcH(t,d,w,e),null)},
$S:z+3}
B.bcH.prototype={
$0(){var w=this
return w.a.zi(w.b,w.c[w.d])},
$S:0}
B.bcK.prototype={
$2(d,e){return E.aY},
$S:22}
B.bcJ.prototype={
$2(d,e){var w=this.b,v=w[e],u=D.e7[C.k.ab(e,4)],t=this.a,s=t.a.c.a
s=s==="computer"||s==="local"
return new B.Cd(v,u,s,new B.bcG(t,d,w,e),null)},
$S:z+3}
B.bcG.prototype={
$0(){var w=this
return w.a.zi(w.b,w.c[w.d])},
$S:0}
B.bcE.prototype={
$0(){var w=0,v=A.p(x.c),u=this,t,s
var $async$$0=A.q(function(d,e){if(d===1)return A.m(e,v)
for(;;)switch(w){case 0:t=u.b.c
t.toString
s=u.a
w=2
return A.e(K.aC(t,!1,x.W).Fk(u.c),$async$$0)
case 2:s.a=e
return A.n(null,v)}})
return A.o($async$$0,v)},
$S:58}
B.bcF.prototype={
$0(){var w=0,v=A.p(x.c),u=this,t,s
var $async$$0=A.q(function(d,e){if(d===1)return A.m(e,v)
for(;;)switch(w){case 0:t=u.b.c
t.toString
s=u.a
w=2
return A.e(K.aC(t,!1,x.W).B0(u.c),$async$$0)
case 2:s.a=e
return A.n(null,v)}})
return A.o($async$$0,v)},
$S:58}
B.b9i.prototype={
$1(d){return D.ab_.cB(0,d)},
$S:75}
B.bpb.prototype={
$1(d){if(this.a.c!=null)if($.jS>0)A.ho()},
$S:2}
B.bcR.prototype={
$0(){return A.aS(this.a,!1).bg(0)},
$S:0}
B.bcT.prototype={
$0(){},
$S:0}
B.bcS.prototype={
$2(d,e){var w,v,u,t=null,s=A.x(22),r=F.R(G.a4.j(0.7),2),q=x.V,p=A.a([new A.U(0,C.r,G.a4.j(0.2),C.o,24),new A.U(0,C.r,C.l.j(0.45),G.o6,24)],q),o=this.a,n=x.C
n=A.ag(new A.at(D.Ch,new B.bcQ(o),n),n.i("aX.E"))
n=F.S(n,E.j,C.i,E.n,0)
w=o.a.c.a==="computer"
v=o.d
v=A.l(w?"You + "+(v-1)+" computer":""+v+" player game",t,t,t,t,t,D.aFe,t,t)
u=x.p
p=A.y(t,F.P(A.a([D.aHd,E.aY,n,N.jw,v,H.aw,A.l(w?"Computer fills empty seats":"Same phone \u2014 pass & play (no computer)",t,t,t,t,t,D.aAM,C.M,t),H.bO,new A.G(200,52,K.md(D.aIe,o.gaC3(),A.oo(D.mC,t,4,C.h,t,new A.cB(A.x(14),C.y),t)),t)],u),E.j,C.i,E.v),C.f,t,t,new A.t(D.mF,t,r,s,p,t,C.m),t,t,t,D.a46,D.a4Y,t,t,t)
s=A.x(6)
q=A.a([new A.U(0,C.r,D.cE.j(0.35),D.apY,8)],q)
r=A.bDh(-0.02)
return new A.cO(new A.ac(0,1/0,0,e.d*0.92),A.e6(new A.ay(C.Q,t,C.K,C.f,A.a([p,A.y(t,A.l(o.a.c.a==="computer"?"vs Computer":"Play Local",t,t,t,t,t,D.aB4,t,t),C.f,t,t,new A.t(D.cE,t,t,s,q,t,C.m),t,t,t,t,D.Al,r,t,t)],u),t),t,C.P,t,H.jY,C.a3),t)},
$S:144}
B.bcQ.prototype={
$1(d){var w=null,v=this.a,u=v.d===d,t=u?D.mC:C.di,s=A.x(10),r=A.x(10)
return F.Q(new A.a2(E.ce,A.b1(!1,C.z,!0,s,A.b9(!1,r,!0,new A.a2(G.fv,A.aD(A.l(""+d,w,w,w,w,w,A.B(w,w,C.h,w,w,w,w,w,w,w,w,22,w,w,u?C.B:C.R,w,w,!0,w,w,w,w,w,w,w,w),w,w),w,w),w),w,!0,w,w,w,w,w,w,w,w,new B.bcP(v,d),w,w,w,w,w,w,w),C.f,t,0,w,w,w,w,w,C.G),w),1)},
$S:z+20}
B.bcP.prototype={
$0(){var w=this.a
return w.E(new B.bcO(w,this.b))},
$S:0}
B.bcO.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.bpc.prototype={
$1(d){if(this.a.c!=null)if($.jS>0)A.ho()},
$S:2}
B.aCG.prototype={
$2(d,e){var w=this.a,v=d*w,u=e*w
return new A.W(v,u,v+w,u+w)},
$S:591}
B.aCK.prototype={
$2(d,e){return d<6&&e<6},
$S:56}
B.aCJ.prototype={
$2(d,e){return d>=9&&e<6},
$S:56}
B.aCL.prototype={
$2(d,e){return d>=9&&e>=9},
$S:56}
B.aCI.prototype={
$2(d,e){return d<6&&e>=9},
$S:56}
B.aCH.prototype={
$2(d,e){var w=this
if(w.a.$2(d,e))return 0
if(w.b.$2(d,e))return 1
if(w.c.$2(d,e))return 2
if(w.d.$2(d,e))return 3
return null},
$S:592}
B.aCN.prototype={
$2(d,e){var w=this.a,v=w.$2(d,e),u=w.$2(d+1,e)
return v!=null&&v===u},
$S:56}
B.aCM.prototype={
$2(d,e){var w=this.a,v=w.$2(d,e),u=w.$2(d,e+1)
return v!=null&&v===u},
$S:56}
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
$S:56}
B.aCF.prototype={
$0(){var w,v=this,u=A.bs($.af().w),t=v.a,s=v.b
u.a0(new A.dF(t,s-v.c))
w=v.d
u.a0(new A.bz(t-w,s))
u.a0(new A.bz(t+w,s))
u.a0(new A.fd())
return u},
$S:126}
B.aCE.prototype={
$0(){var w,v=this,u=A.bs($.af().w),t=v.a,s=v.c
u.a0(new A.dF(t+v.b,s))
w=v.d
u.a0(new A.bz(t,s-w))
u.a0(new A.bz(t,s+w))
u.a0(new A.fd())
return u},
$S:126}
B.aCC.prototype={
$0(){var w,v=this,u=A.bs($.af().w),t=v.a,s=v.b
u.a0(new A.dF(t,s+v.c))
w=v.d
u.a0(new A.bz(t-w,s))
u.a0(new A.bz(t+w,s))
u.a0(new A.fd())
return u},
$S:126}
B.aCD.prototype={
$0(){var w,v=this,u=A.bs($.af().w),t=v.a,s=v.c
u.a0(new A.dF(t-v.b,s))
w=v.d
u.a0(new A.bz(t,s-w))
u.a0(new A.bz(t,s+w))
u.a0(new A.fd())
return u},
$S:126}
B.aCB.prototype={
$3(d,e,f){var w,v,u,t,s=d.gdj().a
s===$&&A.b()
w=A.uk(s.a.getBounds())
s=this.a
$.af()
v=A.am()
u=A.a4(e,C.h,0.38)
u.toString
t=A.a4(e,C.l,0.28)
t.toString
v.scT(new F.ai(f,new A.cx(-f.a,-f.b),C.t,A.a([u,e,t],x.O),null,null).cB(0,w))
s.dd(d,v)
v=A.am()
v.b=C.as
v.c=this.b*0.0028
v.r=C.l.j(0.32).gq(0)
s.dd(d,v)},
$S:594}
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
this.b.push(C.b.hS(w,v))},
$S:595}
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
B.b7O.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=p.d
o===$&&A.b()
w=o.x
w===$&&A.b()
v=p.aR8(w)
w=p.a
u=w.c
t=w.d
s=B.bJj(u*15,u,v.a,v.b,0,0,w.e,t)
r=Math.max(1,p.a.f.length-1)
o=o.x
o===$&&A.b()
return new A.ay(C.C,q,C.at,C.f,A.a([new A.bE(E.S,q,q,A.iN(e,new A.k(s.a,s.b+Math.sin(C.d.ab(o*r,1)*3.141592653589793)*-5)),q)],x.p),q)},
$S:117}
B.aCv.prototype={
$1(d){return J.cE(d)},
$S:597}
B.aCw.prototype={
$1(d){return A.cG(A.v(d),null)},
$S:192}
B.aCz.prototype={
$1(d){var w,v,u,t
if(!x.j.b(d))return
for(w=J.aZ(d),v=this.a;w.A();){u=w.gO(w)
t=u==null?null:C.c.P(J.J(u))
if(t==null)t=""
if(!B.bTr(t))continue
if(!C.b.t(v,t))v.push(t)}},
$S:4}
B.aCy.prototype={
$1(d){var w=this.a.h(0,d)
w.toString
return w},
$S:54}
B.ba7.prototype={
$1(d){var w=this.a
if(w.c==null)return
if(new A.c4(Date.now(),0,!1).cz(this.b).a>=2e6){w.aFA()
return}w.E(new B.ba6(w))},
$S:14}
B.ba6.prototype={
$0(){var w=this.a
return w.e=1+w.r.cS(6)},
$S:0}
B.ba5.prototype={
$0(){},
$S:0}
B.ba8.prototype={
$0(){var w,v=this.b
if(v>0)this.a.e=C.k.S(v,1,6)
else{v=this.a
w=v.a.d
if(w>0)v.e=C.k.S(w,1,6)}},
$S:0}
B.baa.prototype={
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
return A.iN(F.f_(C.q,s,A.iM(C.q,e,r?1+w*0.1:1)),new A.k(w*v*u,w*q*t))},
$S:19}
B.ba9.prototype={
$2(d,e){var w=x.d
return A.kU(C.q,new A.dc(e,!1,d,null),null,new A.az(e,new A.aE(0.6,1,w),w.i("az<aP.T>")))},
$S:147}
B.aDi.prototype={
$2(d,e){var w=Math.min(e.b,e.d)
if(!isFinite(w)||w<8)return C.an
return this.a.d.$1(w)},
$S:121}
B.aDj.prototype={
$0(){return Al.iT(this.a)},
$S:0}
B.brS.prototype={
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
w(t=B.Ug.prototype,"gaNM","aNN",9)
v(t,"gaBV","CS",0)
u(t,"gayO","ayP",10)
v(B.Uh.prototype,"gaMr","aMs",1)
v(t=B.Ui.prototype,"gaMz","rs",1)
v(t,"gaMy","KA",0)
v(t,"gaab","z4",0)
v(t,"gaMB","lZ",0)
v(t,"gaMF","KD",0)
u(t=B.Uj.prototype,"gaxV","axW",2)
u(t,"gaOw","aOx",2)
v(t,"gaAx","aAy",1)
v(t,"gaVJ","aVK",0)
v(t,"gaSW","pG",0)
v(B.Um.prototype,"gaC3","aC4",1)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(A.I,[B.LL,B.N2,B.N5,B.t8,B.f8,B.aCT,B.jp,B.jR,B.vG,B.a4l,B.xl,B.MS,B.lC,B.t6])
u(A.cZ,[B.aCr,B.aCs,B.aCq,B.aCt,B.aDe,B.aDf,B.baI,B.baJ,B.baH,B.bau,B.bav,B.bac,B.baz,B.baB,B.bak,B.baD,B.baC,B.bp7,B.b04,B.b96,B.bp8,B.bbw,B.bbB,B.bbD,B.bb2,B.bbJ,B.bbO,B.baT,B.baS,B.baV,B.bbu,B.bbv,B.baQ,B.bbP,B.bbr,B.bp9,B.bcC,B.bcD,B.bco,B.bcp,B.bcd,B.bce,B.bcl,B.bca,B.bc9,B.bcx,B.bcy,B.bcB,B.bpa,B.aDh,B.b9i,B.bpb,B.bcQ,B.bpc,B.aCB,B.aD1,B.aCY,B.aD3,B.aCW,B.aCQ,B.aCv,B.aCw,B.aCz,B.aCy,B.ba7,B.brS])
t(B.a4b,A.lc)
t(B.zH,A4.he)
u(A.ed,[B.aDg,B.brT,B.baG,B.bcv,B.bcN,B.bcM,B.bcI,B.bcK,B.bcJ,B.bcS,B.aCG,B.aCK,B.aCJ,B.aCL,B.aCI,B.aCH,B.aCN,B.aCM,B.aCO,B.aD5,B.b7O,B.baa,B.ba9,B.aDi])
t(B.q8,K.fQ)
u(A.a3,[B.vL,B.N_,B.N0,B.vJ,B.ER,B.Uk,B.Ul,B.TR,B.MT])
u(A.a5,[B.afY,B.Yr,B.ane,B.anf,B.Yv,B.anh,B.ani,B.Yh,B.afU])
t(B.and,B.Yr)
t(B.Ys,B.and)
t(B.Ug,B.Ys)
u(A.ec,[B.baK,B.baq,B.bar,B.bas,B.bat,B.bal,B.bam,B.ban,B.bao,B.bap,B.bad,B.bae,B.baf,B.bag,B.bah,B.bay,B.bax,B.baA,B.bai,B.baj,B.baE,B.baF,B.baw,B.baL,B.baM,B.baN,B.baO,B.bbx,B.bby,B.bbz,B.bbA,B.bbC,B.bbE,B.bbN,B.bb9,B.bbs,B.bbK,B.bbL,B.bbM,B.baX,B.baY,B.baZ,B.bb_,B.bb0,B.bb1,B.baW,B.bbi,B.bbj,B.bbk,B.bbl,B.bbm,B.bbn,B.bbo,B.bbp,B.bbq,B.bb3,B.bb4,B.bb5,B.bb6,B.bb7,B.bb8,B.bbc,B.bbd,B.bbe,B.bbf,B.bbg,B.bbh,B.bbF,B.bbG,B.bbH,B.bbI,B.baR,B.baU,B.baP,B.bbt,B.bba,B.bbb,B.bcn,B.bbT,B.bbV,B.bc6,B.bct,B.bcu,B.bbU,B.bcb,B.bcr,B.bc8,B.bc7,B.bcs,B.bbW,B.bbX,B.bcc,B.bcf,B.bcg,B.bch,B.bci,B.bcj,B.bck,B.bcm,B.bcq,B.bbR,B.bbS,B.bbQ,B.bc_,B.bc0,B.bc1,B.bbZ,B.bc2,B.bc3,B.bc4,B.bc5,B.bbY,B.bcw,B.bcz,B.bcA,B.bcL,B.bcH,B.bcG,B.bcE,B.bcF,B.bcR,B.bcT,B.bcP,B.bcO,B.aCF,B.aCE,B.aCC,B.aCD,B.aD0,B.aCV,B.aD_,B.aCU,B.aCZ,B.aD4,B.aD2,B.aCX,B.aD6,B.aD7,B.aD8,B.aD9,B.aDa,B.aDb,B.aDc,B.aDd,B.aCS,B.aCR,B.ba6,B.ba5,B.ba8,B.aDj])
t(B.Yt,B.ane)
t(B.Uh,B.Yt)
u(A.O,[B.ac7,B.U5,B.add,B.afV,B.agi,B.Cn,B.Ch,B.aeF,B.VV,B.agx,B.aic,B.ame,B.Xf,B.a4c,B.afJ,B.Cd,B.abB,B.agL,B.ah5,B.a4i,B.a4a,B.a4d,B.N1,B.Wk,B.a4f,B.afZ,B.Uv,B.zG,B.a4k,B.a4g,B.zI,B.N3,B.zJ])
u(A.jl,[B.abV,B.MZ,B.a4e,B.vH,B.afW])
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
w(B.Ys,B.t6)
v(B.ane,A.dy)
w(B.Yt,B.t6)
v(B.anf,A.dy)
w(B.Yu,B.t6)
w(B.Yv,A.dL)
v(B.ang,A.dy)
w(B.Yw,B.t6)
v(B.anh,A.dy)
w(B.Yx,B.t6)
v(B.ani,A.dy)
w(B.Yy,B.t6)
w(B.Yh,A.d0)})()
A.da(b.typeUniverse,JSON.parse('{"zH":{"cF":["q8"],"eV":["q8"],"cF.0":"q8"},"vL":{"a3":[],"c":[]},"afY":{"a5":["vL"]},"N_":{"a3":[],"c":[]},"Ug":{"a5":["N_"],"dy":[]},"N0":{"a3":[],"c":[]},"Uh":{"a5":["N0"],"dy":[]},"ac7":{"O":[],"c":[]},"U5":{"O":[],"c":[]},"add":{"O":[],"c":[]},"afV":{"O":[],"c":[]},"agi":{"O":[],"c":[]},"Cn":{"O":[],"c":[]},"Ch":{"O":[],"c":[]},"aeF":{"O":[],"c":[]},"VV":{"O":[],"c":[]},"agx":{"O":[],"c":[]},"aic":{"O":[],"c":[]},"abV":{"aI":[]},"ame":{"O":[],"c":[]},"Xf":{"O":[],"c":[]},"vJ":{"a3":[],"c":[]},"Ui":{"a5":["vJ"],"dy":[]},"ER":{"a3":[],"c":[]},"Uj":{"a5":["ER"],"dy":[]},"Uk":{"a3":[],"c":[]},"Cd":{"O":[],"c":[]},"a4c":{"O":[],"c":[]},"afX":{"a5":["Uk"],"dy":[]},"afJ":{"O":[],"c":[]},"abB":{"O":[],"c":[]},"agL":{"O":[],"c":[]},"ah5":{"O":[],"c":[]},"Ul":{"a3":[],"c":[]},"a4i":{"O":[],"c":[]},"Um":{"a5":["Ul"],"dy":[]},"MZ":{"aI":[]},"TR":{"a3":[],"c":[]},"a4a":{"O":[],"c":[]},"aeS":{"a5":["TR"]},"a4d":{"O":[],"c":[]},"a4e":{"aI":[]},"lC":{"bQ":[]},"MT":{"a3":[],"c":[]},"vH":{"aI":[]},"afU":{"a5":["MT"]},"N1":{"O":[],"c":[]},"Wk":{"O":[],"c":[]},"zI":{"O":[],"c":[]},"a4f":{"O":[],"c":[]},"afZ":{"O":[],"c":[]},"Uv":{"O":[],"c":[]},"zG":{"O":[],"c":[]},"a4k":{"O":[],"c":[]},"a4g":{"O":[],"c":[]},"N3":{"O":[],"c":[]},"zJ":{"O":[],"c":[]},"afW":{"aI":[]}}'))
A.Ci(b.typeUniverse,JSON.parse('{"t6":1}'))
var y={d:"Joined table, but socket connect failed. Tap JOIN again."}
var x=(function rtii(){var w=A.a0
return{M:w("LW"),F:w("hk"),R:w("fx<r>"),V:w("w<U>"),O:w("w<d>"),E:w("w<T<f8>>"),Q:w("w<T<jp>>"),G:w("w<T<ab<h,@>>>"),e:w("w<vG>"),J:w("w<f8>"),a:w("w<t8>"),b:w("w<jp>"),Y:w("w<ab<h,@>>"),L:w("w<+seatIndex,userId(r,h)>"),x:w("w<c7>"),s:w("w<h>"),p:w("w<c>"),_:w("w<xl>"),n:w("w<K>"),t:w("w<r>"),A:w("w<ab<h,@>?>"),o:w("w<c?>"),u:w("T<hk>"),I:w("T<jp>"),U:w("T<ab<h,@>>"),g:w("T<xl>"),j:w("T<@>"),Z:w("MS"),T:w("f8"),W:w("zH"),B:w("q8"),r:w("jp"),P:w("ab<h,@>"),f:w("ab<@,@>"),C:w("at<r,ee>"),D:w("at<r,j_<r>>"),w:w("f9"),c:w("bq"),K:w("I"),N:w("h"),d:w("aE<K>"),i:w("d5<h>"),k:w("d5<r>"),m:w("aR<T<ab<h,@>>>"),aa:w("dM<r>"),l:w("c"),aY:w("bh<~>"),d4:w("aO<~>"),q:w("fL"),y:w("L"),z:w("@"),S:w("r"),an:w("iX?"),h:w("ab<h,@>?"),X:w("I?"),v:w("h?"),a3:w("r?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.Ql=new A.cx(-0.6,-1)
D.Qo=new A.cx(-0.25,-0.35)
D.Qy=new A.cx(0.7,1)
D.QA=new A.cx(-0.45,-0.55)
D.asH=new A.b8(15,15)
D.Rn=new A.cN(C.a5,D.asH,G.jk,C.a5)
D.Sh=new A.t(G.ir,null,null,null,null,null,C.F)
D.Pf=new A.z(!0,C.J,null,null,null,null,null,C.R,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aGv=new A.aw("Loading tables\u2026",null,D.Pf,null,null,null,null,null,null,null)
D.UR=new A.cS(C.q,null,null,D.aGv,null)
D.aGN=new A.aw("No tables found",null,D.Pf,null,null,null,null,null,null,null)
D.UT=new A.cS(C.q,null,null,D.aGN,null)
D.aoc=new F.t4(160,"Starting\u2026",null)
D.UU=new A.cS(C.q,null,null,D.aoc,null)
D.aHN=new A.aw("Session expired",null,C.dI,null,null,null,null,null,null,null)
D.V1=new A.cS(C.q,null,null,D.aHN,null)
D.a8Z=new A.ca(H.es,18,C.h,null,null,null)
D.V2=new A.cS(C.q,null,null,D.a8Z,null)
D.xK=new A.d(1,0.047058823529411764,0.08627450980392157,0.2,C.e)
D.xL=new A.d(1,0.08627450980392157,0.0392156862745098,0.1803921568627451,C.e)
D.dX=new A.d(1,0.9019607843137255,0.11764705882352941,0.1450980392156863,C.e)
D.me=new A.d(1,0.14901960784313725,0.0784313725490196,0.2823529411764706,C.e)
D.XC=new A.d(1,0.23137254901960785,0.6196078431372549,1,C.e)
D.XG=new A.d(1,0.1803921568627451,0.0784313725490196,0.34509803921568627,C.e)
D.y6=new A.d(1,0.07058823529411765,0.07058823529411765,0.1803921568627451,C.e)
D.ya=new A.d(1,0.4196078431372549,0.22745098039215686,0.6588235294117647,C.e)
D.yd=new A.d(1,0.10196078431372549,0.06274509803921569,0.25098039215686274,C.e)
D.ml=new A.d(1,0.07058823529411765,0.10588235294117647,0.2,C.e)
D.eR=new A.d(1,0.9764705882352941,0.6588235294117647,0,C.e)
D.mn=new A.d(1,1,0.9450980392156862,0.6588235294117647,C.e)
D.cE=new A.d(1,0.9764705882352941,0.8313725490196079,0.13725490196078433,C.e)
D.qq=new A.d(1,0.043137254901960784,0.0196078431372549,0.09411764705882353,C.e)
D.en=new A.d(1,0.17647058823529413,0.7019607843137254,0.13725490196078433,C.e)
D.a_T=new A.d(1,0.0392156862745098,0.07058823529411765,0.1568627450980392,C.e)
D.a05=new A.d(1,0.2901960784313726,0.12156862745098039,0.47058823529411764,C.e)
D.mC=new A.d(1,0.3568627450980392,0.17647058823529413,0.5568627450980392,C.e)
D.a0K=new A.d(1,0.0196078431372549,0.00784313725490196,0.06274509803921569,C.e)
D.mF=new A.d(1,0.10196078431372549,0.047058823529411764,0.21176470588235294,C.e)
D.zo=new A.d(1,0.9098039215686274,0.8784313725490196,0.8313725490196079,C.e)
D.a1a=new A.d(1,0.0392156862745098,0.0392156862745098,0.10980392156862745,C.e)
D.a1u=new A.d(1,0.22745098039215686,0.09411764705882353,0.40784313725490196,C.e)
D.a1x=new A.d(1,0.9098039215686274,0.8352941176470589,0.6392156862745098,C.e)
D.dM=new A.d(1,0,0.4392156862745098,0.7333333333333333,C.e)
D.a28=new A.de(D.qq,null,null)
D.aLn=new B.afW(null)
D.a2K=new A.kp(D.aLn,null,C.ab,null,null)
D.Qr=new A.cx(0,-0.05)
D.a_g=new A.d(1,0.16470588235294117,0.0784313725490196,0.34509803921568627,C.e)
D.XS=new A.d(1,0.10196078431372549,0.047058823529411764,0.2196078431372549,C.e)
D.Xb=new A.d(1,0.07058823529411765,0.03137254901960784,0.14901960784313725,C.e)
D.Xp=new A.d(1,0.03529411764705882,0.01568627450980392,0.07058823529411765,C.e)
D.akX=w([D.a_g,D.XS,D.Xb,D.Xp],x.O)
D.ach=w([0,0.32,0.65,1],x.n)
D.asD=new K.cA(D.Qr,1.05,C.t,null,0,D.akX,D.ach,null)
D.S6=new A.t(null,null,null,null,null,D.asD,C.m)
D.a2X=new A.iz(D.S6,C.Y,null,null)
D.a46=new A.A(0,22,0,0)
D.a4j=new A.A(10,5,12,5)
D.a4s=new A.A(12,2,12,0)
D.Ab=new A.A(14,0,14,18)
D.a4C=new A.A(14,8,14,6)
D.a4F=new A.A(16,0,16,12)
D.Ae=new A.A(16,0,16,8)
D.a4O=new A.A(16,8,16,2)
D.a4P=new A.A(16,8,16,8)
D.a4R=new A.A(18,12,18,12)
D.a4T=new A.A(18,2,18,10)
D.a4Y=new A.A(20,36,20,22)
D.a4Z=new A.A(22,12,22,12)
D.Al=new A.A(28,8,28,8)
D.a5e=new A.A(32,14,32,14)
D.a5I=new A.A(8,4,6,4)
D.aMD=new B.Xf(N.iU,I.mt,"100% SECURE","Fair Play Guaranteed",null)
D.a5X=new F.ee(1,E.cm,D.aMD,null)
D.aLo=new B.afZ(null)
D.a62=new F.n_(E.ar,C.q,D.aLo,null)
D.a7h=new A.ao(61533,"MaterialIcons",!1)
D.a7r=new A.ao(62589,"MaterialIcons",!1)
D.a8_=new A.ao(983202,"MaterialIcons",!1)
D.a82=new A.ao(983450,"MaterialIcons",!1)
D.a8E=new A.ca(E.fB,null,C.h,null,null,null)
D.a0l=new A.d(0.4,0.0196078431372549,0.00392156862745098,0.06274509803921569,C.e)
D.WX=new A.d(0.8,0.0196078431372549,0.00392156862745098,0.06274509803921569,C.e)
D.aik=w([C.w,D.a0l,D.WX],x.O)
D.agR=w([0.42,0.78,1],x.n)
D.asE=new K.cA(C.q,1.05,C.t,null,0,D.aik,D.agR,null)
D.Se=new A.t(null,null,null,null,null,D.asE,C.m)
D.a2T=new A.iz(D.Se,C.Y,null,null)
D.a9h=new A.ot(!0,D.a2T,null)
D.Yt=new A.d(1,1,0.996078431372549,0.9803921568627451,C.e)
D.VL=new A.d(1,0.9607843137254902,0.9411764705882353,0.9019607843137255,C.e)
D.aeZ=w([D.Yt,D.VL,D.zo],x.O)
D.aao=new F.ai(E.S,E.Z,C.t,D.aeZ,null,null)
D.WO=new A.d(1,0.11764705882352941,0.12156862745098039,0.22745098039215686,C.e)
D.XR=new A.d(1,0.054901960784313725,0.058823529411764705,0.13333333333333333,C.e)
D.am3=w([D.WO,D.XR],x.O)
D.aax=new F.ai(E.S,E.Z,C.t,D.am3,null,null)
D.yH=new A.d(1,0.22745098039215686,0.16470588235294117,0.34509803921568627,C.e)
D.a0I=new A.d(1,0.11764705882352941,0.0784313725490196,0.2196078431372549,C.e)
D.X7=new A.d(1,0.07058823529411765,0.0392156862745098,0.1411764705882353,C.e)
D.XT=new A.d(1,0.16470588235294117,0.10980392156862745,0.2823529411764706,C.e)
D.aj3=w([D.yH,D.a0I,D.X7,D.XT],x.O)
D.Cl=w([0,0.35,0.7,1],x.n)
D.aaI=new F.ai(E.S,E.Z,C.t,D.aj3,D.Cl,null)
D.a_A=new A.d(1,0.9490196078431372,0.9215686274509803,0.8784313725490196,C.e)
D.a0a=new A.d(1,0.9019607843137255,0.8705882352941177,0.8156862745098039,C.e)
D.a_O=new A.d(1,0.8470588235294118,0.8117647058823529,0.7529411764705882,C.e)
D.ahT=w([D.a_A,D.a0a,D.a_O],x.O)
D.aaK=new F.ai(E.S,E.Z,C.t,D.ahT,null,null)
D.Zx=new A.d(1,0.23921568627450981,0.8627450980392157,0.41568627450980394,C.e)
D.Xc=new A.d(1,0.0784313725490196,0.5803921568627451,0.22745098039215686,C.e)
D.alQ=w([D.Zx,D.Xc],x.O)
D.aaQ=new F.ai(C.Q,C.W,C.t,D.alQ,null,null)
D.ahs=w([D.mn,D.cE,Z.eQ],x.O)
D.aaW=new F.ai(C.Q,C.W,C.t,D.ahs,null,null)
D.a1A=new A.d(1,0.7843137254901961,0.5725490196078431,0.16470588235294117,C.e)
D.al8=w([D.mn,D.cE,D.a1A],x.O)
D.ab_=new F.ai(C.Q,C.W,C.t,D.al8,null,null)
D.a1h=new A.d(1,0.9686274509803922,0.9450980392156862,0.9098039215686274,C.e)
D.Wf=new A.d(1,0.9294117647058824,0.9019607843137255,0.8549019607843137,C.e)
D.a1y=new A.d(1,0.8784313725490196,0.8470588235294118,0.792156862745098,C.e)
D.akA=w([D.a1h,D.Wf,D.a1y],x.O)
D.ab8=new F.ai(E.S,E.Z,C.t,D.akA,null,null)
D.Ya=new A.d(1,1,0.9411764705882353,0.7215686274509804,C.e)
D.ak4=w([D.Ya,I.ba,I.ih],x.O)
D.abd=new F.ai(C.Q,C.W,C.t,D.ak4,null,null)
D.Y3=new A.d(1,0.0784313725490196,0.10588235294117647,0.23137254901960785,C.e)
D.aeF=w([D.Y3,D.xK],x.O)
D.abq=new F.ai(E.S,E.Z,C.t,D.aeF,null,null)
D.Y8=new A.d(1,0.2901960784313726,0.22745098039215686,0.41568627450980394,C.e)
D.XE=new A.d(1,0.13333333333333333,0.08627450980392157,0.2196078431372549,C.e)
D.ak7=w([D.Y8,D.XE,G.a1V,D.yH],x.O)
D.abt=new F.ai(E.S,E.Z,C.t,D.ak7,D.Cl,null)
D.aj2=w([G.e1,G.a4],x.O)
D.abA=new F.ai(E.V,C.a0,C.t,D.aj2,null,null)
D.a0S=new A.d(1,0.9490196078431372,0.9294117647058824,0.8941176470588236,C.e)
D.YB=new A.d(1,0.8470588235294118,0.8156862745098039,0.7607843137254902,C.e)
D.aiQ=w([C.h,D.a0S,D.YB],x.O)
D.abG=new F.ai(E.S,E.Z,C.t,D.aiQ,null,null)
D.ahy=w([N.ci,G.a4,Z.eQ],x.O)
D.abJ=new F.ai(E.S,E.Z,C.t,D.ahy,null,null)
D.Cb=w([0,26,39,13],x.t)
D.nM=w([0,3,1,2],x.t)
D.Cc=w([0,3,2,1],x.t)
D.aco=w([1,2,3,4],x.t)
D.acp=w([1,2,4],x.t)
D.acq=w([1,3],x.t)
D.Ch=w([2,3,4],x.t)
D.acL=w([2,4],x.t)
D.acX=w([D.mn,G.a4],x.O)
D.adA=w(["name","userName","user_name","username","displayName","display_name"],x.s)
D.aeC=w([0,0.4,1],x.n)
D.e7=w([D.dX,D.eR,D.dM,D.en],x.O)
D.Tz=new B.LL()
D.afq=w([D.Tz],A.a0("w<LL>"))
D.anU=new B.f8(1,7)
D.anV=new B.f8(2,7)
D.anW=new B.f8(3,7)
D.anX=new B.f8(4,7)
D.anY=new B.f8(5,7)
D.alm=w([D.anU,D.anV,D.anW,D.anX,D.anY],x.J)
D.anT=new B.f8(13,7)
D.anS=new B.f8(12,7)
D.anR=new B.f8(11,7)
D.anQ=new B.f8(10,7)
D.ao8=new B.f8(9,7)
D.akN=w([D.anT,D.anS,D.anR,D.anQ,D.ao8],x.J)
D.ao2=new B.f8(7,13)
D.ao1=new B.f8(7,12)
D.ao0=new B.f8(7,11)
D.ao_=new B.f8(7,10)
D.ao7=new B.f8(7,9)
D.akM=w([D.ao2,D.ao1,D.ao0,D.ao_,D.ao7],x.J)
D.anZ=new B.f8(7,1)
D.ao3=new B.f8(7,2)
D.ao4=new B.f8(7,3)
D.ao5=new B.f8(7,4)
D.ao6=new B.f8(7,5)
D.alp=w([D.anZ,D.ao3,D.ao4,D.ao5,D.ao6],x.J)
D.afV=w([D.alm,D.akN,D.akM,D.alp],x.E)
D.Cv=w(["playerIds","player_ids","currentTurnIndex","current_turn_index","nextTurnIndex","next_turn_index","status","winnerId","winner_user_id","gameId","game_id","tableId","table_id","gameType","game_type","bootValue","boot_value","players","gameFinished","game_finished","message","turnExpiresAt","turn_expires_at","turnSecondsLeft","turn_seconds_left","turnTimerEpoch","turn_timer_epoch"],x.s)
D.agn=w([0,0.28,0.65,1],x.n)
D.Zm=new A.d(1,0.23921568627450981,0.12156862745098039,0.43137254901960786,C.e)
D.agv=w([D.ya,D.Zm],x.O)
D.Yo=new A.d(1,0.16470588235294117,0.16862745098039217,0.27058823529411763,C.e)
D.a_B=new A.d(1,0.10196078431372549,0.10588235294117647,0.18823529411764706,C.e)
D.agH=w([D.Yo,D.a_B],x.O)
D.agO=w([H.fn,C.dj],x.O)
D.l_=w(["Red","Yellow","Blue","Green"],x.s)
D.CD=w(["winnerId","winner_user_id","gameFinished","game_finished"],x.s)
D.l2=w([],x.G)
D.CK=w([],x.a)
D.aku=w(["ludo_online","ludo"],x.s)
D.akv=w(["ludo_online","ludo",null],A.a0("w<h?>"))
D.ald=w(["red","yellow","blue","green"],x.s)
D.alZ=w([E.S,R.fU,E.hY,E.Z],A.a0("w<cx>"))
D.HW=new B.f8(7,7)
D.aoa=new F.t4(96,null,null)
D.iZ=new B.a4b(0,"create")
D.HX=new B.a4b(1,"join")
D.aoe=new B.q8(!1,!1,D.CK,null)
D.aod=new B.N0(null)
D.aof=new B.vL(D.aod,null)
D.aog=new B.N5("online","Ludo Online","ludo_online","ludo_online")
D.aoh=new B.N5("computer","Ludo vs Computer","ludo_computer","ludo_computer")
D.aoi=new B.N5("local","Ludo Local","ludo_local","ludo")
D.HZ=new B.jp(!1,0,!1)
D.u9=new B.jp(!1,56,!0)
D.fH=new B.jp(!0,0,!1)
D.aoj=new B.jp(!0,0,!0)
D.ad1=w([4],x.t)
D.abZ=w([0,8],x.t)
D.abX=w([0,4,8],x.t)
D.abW=w([0,2,6,8],x.t)
D.alW=w([0,2,4,6,8],x.t)
D.aj1=w([0,2,3,5,6,8],x.t)
D.aoF=new A.dg([1,D.ad1,2,D.abZ,3,D.abX,4,D.abW,5,D.alW,6,D.aj1],A.a0("dg<r,T<r>>"))
D.j1=new A.dg([1,0,3,1,4,2,2,3],A.a0("dg<r,r>"))
D.apM=new A.k(0,14)
D.apY=new A.k(2,3)
D.apZ=new A.k(2,4)
D.aqg=new A.k(1.2,1.8)
D.a8s=new A.ca(U.kR,18,C.h,null,null,null)
D.aAc=new A.z(!0,C.h,null,null,null,null,13,C.x,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aI8=new A.aw("Play",null,D.aAc,null,null,null,null,null,null,null)
D.acW=w([D.a8s,N.hL,D.aI8],x.p)
D.auS=new F.im(C.aU,C.i,E.v,E.j,null,C.cY,null,0,D.acW,null)
D.aqI=new A.a2(G.na,D.auS,null)
D.Qt=new A.cx(-0.35,-0.55)
D.a1g=new A.d(1,0.027450980392156862,0.027450980392156862,0.10196078431372549,C.e)
D.afw=w([D.yd,D.a1g],x.O)
D.asv=new K.cA(D.Qt,1.15,C.t,null,0,D.afw,null,null)
D.a1X=new A.d(1,1,0.9647058823529412,0.7843137254901961,C.e)
D.ahX=w([D.a1X,D.cE,Z.eQ],x.O)
D.asx=new K.cA(T.pv,0.5,C.t,null,0,D.ahX,null,null)
D.asO=new A.aT(12,12)
D.asP=new A.aT(12,3)
D.asX=new A.aT(3,12)
D.MD=new A.aT(3,3)
D.aup=new A.W(0,0,120,36)
D.a8R=new A.ca(U.iT,12,H.aV,null,null,null)
D.a_P=new A.d(1,0.0392156862745098,0.10196078431372549,0.22745098039215686,C.e)
D.aD_=new A.z(!0,D.a_P,null,null,null,null,9,C.D,null,0.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aGF=new A.aw("RECOMMENDED",null,D.aD_,null,null,null,null,null,null,null)
D.ai8=w([D.a8R,G.aL,D.aGF],x.p)
D.auN=new F.im(C.aU,C.i,E.v,E.j,null,C.cY,null,0,D.ai8,null)
D.Nz=new A.fx([8,21,34,47,51],x.R)
D.oy=new A.fx([0,8,13,21,26,34,39,47,51],x.R)
D.NE=new M.kY("sounds/token_capture.wav")
D.awh=new M.kY("sounds/token_home.wav")
D.uZ=new M.kY("sounds/token_move.wav")
D.ay_=new O.Qi(2,12,12,1,96)
D.azo=new A.z(!0,C.h,null,null,null,null,20,C.x,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aAf=new A.z(!0,C.h,null,null,null,null,24,C.D,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aAM=new A.z(!0,C.iq,null,null,null,null,13,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aAQ=new A.z(!0,C.h,null,null,null,null,18,C.D,null,0.4,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aB4=new A.z(!0,A0.zt,null,null,null,null,20,C.B,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aCA=new A.z(!0,H.i9,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aCQ=new A.z(!0,C.h,null,null,null,null,11.5,C.x,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aCV=new A.z(!0,C.h,null,null,null,null,16,C.D,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aDj=new A.z(!0,C.h,null,null,null,null,24,C.x,null,0.5,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aDN=new A.z(!0,C.h,null,null,null,null,15,C.x,null,0.4,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.WD=new A.d(1,1,0.9568627450980393,0.8235294117647058,C.e)
D.P4=new A.z(!0,D.WD,null,null,null,null,13,C.x,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.Pc=new A.z(!0,C.h,null,null,null,null,11,C.B,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aFe=new A.z(!0,C.h,null,null,null,null,19,C.R,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aCb=new A.z(!0,C.h,null,null,null,null,28,C.x,null,1,null,null,1.05,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aG0=new A.aw("ONLINE",null,D.aCb,null,null,null,null,null,null,null)
D.a_R=new A.d(1,0.35294117647058826,0.22745098039215686,0.03137254901960784,C.e)
D.aEE=new A.z(!0,D.a_R,null,null,null,null,22,C.D,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aG2=new A.aw("\u20b9",null,D.aEE,null,null,null,null,null,null,null)
D.aGi=new A.aw("All four tokens reached home.",null,C.fc,null,null,null,null,null,null,null)
D.aGl=new A.aw("Leave Game?",null,N.P_,C.M,null,null,null,null,null,null)
D.aGr=new A.aw("OK",null,null,null,null,null,null,null,null,null)
D.aGy=new A.aw("Advanced: Join by Table ID",null,I.vw,null,null,null,null,null,null,null)
D.aAj=new A.z(!0,C.h,null,null,null,null,14,C.x,null,3.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aGP=new A.aw("LUDO",null,D.aAj,null,null,null,null,null,null,null)
D.aDW=new A.z(!0,C.J,null,null,null,null,14,C.R,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aHd=new A.aw("Players",null,D.aDW,null,null,null,null,null,null,null)
D.aDw=new A.z(!0,C.h,null,null,null,null,12,C.x,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aHX=new A.aw("LOBBY STATUS",null,D.aDw,null,null,null,null,null,null,null)
D.aB2=new A.z(!0,C.h,null,null,null,null,30,C.D,null,1.2,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aIa=new A.aw("LUDO",null,D.aB2,null,null,null,null,null,null,null)
D.aFB=new A.z(!0,null,null,null,null,null,18,C.B,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aIe=new A.aw("CONTINUE",null,D.aFB,null,null,null,null,null,null,null)
D.aKx=new B.abB(null)
D.aKQ=new B.add(null)
D.aLk=new B.U5(!0,null)
D.aLm=new B.afV(null)
D.aLr=new B.Uv(D.dM,null)
D.aLs=new B.Uv(D.dX,null)
D.aMF=new B.ame(null)})();(function staticFields(){$.jS=0})();(function lazyInitializers(){var w=a.lazyFinal
w($,"cce","bO3",()=>A4.j0(new B.brT(),"ludo",!0,"Ludo"))
w($,"c6W","o7",()=>B.bTn())})()};
(a=>{a["2bDz4GWaU4VGvG3J+t0c7m0qyrE="]=a.current})($__dart_deferred_initializers__);