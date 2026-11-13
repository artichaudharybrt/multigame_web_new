((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,D,B={
r1(d,e,f){var x=d+"||"+e,w=y.g,v=$.ZH().QC(0,"rounds:"+x,w)
if(v!=null)return A.dQ(v,w)
return E.bIf($.c0Q,x,new B.br6(d,null,f,e)).bI(new B.br7(x),w)},
aop(d,e,f,g){return B.c_F(d,e,f,g)},
c_F(d,e,a0,a1){var x=0,w=A.p(y.g),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$aop=A.q(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:j=A.ce()
i=j+("/matches/rounds/history/"+A.d6(2,e,D.a5,!1))
h=A.bQ(i,0,null)
g=y.f
A.cL("GET",A.aa(["gameType",e],g,g),"rounds_history",i)
g=A.F(g,g)
g.k(0,"Accept","application/json")
if(a1!=null&&a1.length!==0)g.k(0,"Authorization","Bearer "+a1)
g.k(0,"ngrok-skip-browser-warning","true")
x=3
return A.e(A.f1(h,g),$async$aop)
case 3:s=a3
m=s.b>=200&&s.b<300
g=s.b
l=s
if(A.aM(A.aL(l.e)).ae(0,l.w).length>800){l=s
l=D.c.ad(A.aM(A.aL(l.e)).ae(0,l.w),0,800)+"\u2026"}else{l=s
l=A.aM(A.aL(l.e)).ae(0,l.w)}A.cz(l,"rounds_history",g,m,i)
if(m){g=s
g=A.aM(A.aL(g.e)).ae(0,g.w).length===0}else g=!0
if(g){v=D.bA
x=1
break}u=5
g=s
x=8
return A.e(C.bxH(A.aM(A.aL(g.e)).ae(0,g.w)),$async$aop)
case 8:r=a3
q=C.bxM(r)
q=C.bJa(q)
p=A.a([],y.b)
for(g=J.b1(q);g.A();){o=g.gO(g)
n=C.by1(o)
if(n!=null){J.e_(p,n)
if(J.au(p)>=a0)break}}v=p
x=1
break
u=2
x=7
break
case 5:u=4
f=t.pop()
v=D.bA
x=1
break
x=7
break
case 4:x=2
break
case 7:case 1:return A.n(v,w)
case 2:return A.m(t.at(-1),w)}})
return A.o($async$aop,w)},
br6:function br6(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
br7:function br7(d){this.a=d}},C,E
J=c[1]
A=c[0]
D=c[2]
B=a.updateHolder(c[53],B)
C=c[65]
E=c[55]
var z=a.updateTypes([])
B.br6.prototype={
$0(){var x=this
return B.aop(x.b,x.a,x.d,x.c)},
$S:688}
B.br7.prototype={
$1(d){if(J.cD(d))$.ZH().a.k(0,"rounds:"+this.a,new C.Tc(d,new A.c4(Date.now(),0,!1).pj(2e7)))
return d},
$S:689};(function inheritance(){var x=a.inherit
x(B.br6,A.eb)
x(B.br7,A.cY)})()
var y={b:A.X("w<r>"),g:A.X("T<r>"),f:A.X("h")};(function staticFields(){$.c0Q=A.F(y.f,A.X("am<T<r>>"))})()};
(a=>{a["c0O2js9bwBd6bZXNL5l2TffTvn0="]=a.current})($__dart_deferred_initializers__);