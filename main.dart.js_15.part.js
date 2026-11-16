((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,D,B={
r1(d,e,f){var x=d+"||"+e,w=y.g,v=$.ZH().QE(0,"rounds:"+x,w)
if(v!=null)return A.dQ(v,w)
return E.bIl($.c0X,x,new B.brc(d,null,f,e)).bI(new B.brd(x),w)},
aot(d,e,f,g){return B.c_M(d,e,f,g)},
c_M(d,e,a0,a1){var x=0,w=A.p(y.g),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$aot=A.q(function(a2,a3){if(a2===1){t.push(a3)
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
return A.e(A.f2(h,g),$async$aot)
case 3:s=a3
m=s.b>=200&&s.b<300
g=s.b
l=s
if(A.aM(A.aL(l.e)).af(0,l.w).length>800){l=s
l=D.c.ae(A.aM(A.aL(l.e)).af(0,l.w),0,800)+"\u2026"}else{l=s
l=A.aM(A.aL(l.e)).af(0,l.w)}A.cz(l,"rounds_history",g,m,i)
if(m){g=s
g=A.aM(A.aL(g.e)).af(0,g.w).length===0}else g=!0
if(g){v=D.bA
x=1
break}u=5
g=s
x=8
return A.e(C.bxN(A.aM(A.aL(g.e)).af(0,g.w)),$async$aot)
case 8:r=a3
q=C.bxS(r)
q=C.bJg(q)
p=A.a([],y.b)
for(g=J.b1(q);g.A();){o=g.gO(g)
n=C.by7(o)
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
return A.o($async$aot,w)},
brc:function brc(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
brd:function brd(d){this.a=d}},C,E
J=c[1]
A=c[0]
D=c[2]
B=a.updateHolder(c[53],B)
C=c[65]
E=c[55]
var z=a.updateTypes([])
B.brc.prototype={
$0(){var x=this
return B.aot(x.b,x.a,x.d,x.c)},
$S:688}
B.brd.prototype={
$1(d){if(J.cD(d))$.ZH().a.k(0,"rounds:"+this.a,new C.Tc(d,new A.c4(Date.now(),0,!1).pk(2e7)))
return d},
$S:689};(function inheritance(){var x=a.inherit
x(B.brc,A.eb)
x(B.brd,A.cY)})()
var y={b:A.Y("w<r>"),g:A.Y("T<r>"),f:A.Y("h")};(function staticFields(){$.c0X=A.F(y.f,A.Y("am<T<r>>"))})()};
(a=>{a["5NqxqCDz43lPdqj41KAWVA3trDU="]=a.current})($__dart_deferred_initializers__);