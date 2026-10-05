((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,D,B={
ud(d,e,f){var x=d+"||"+e,w=y.g,v=$.Zc().Qi(0,"rounds:"+x,w)
if(v!=null)return A.dN(v,w)
return E.bGu($.bZY,x,new B.bps(d,null,f,e)).bH(new B.bpt(x),w)},
anI(d,e,f,g){return B.bYN(d,e,f,g)},
bYN(d,e,a0,a1){var x=0,w=A.p(y.g),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$anI=A.q(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:j=A.ch()
i=j+("/matches/rounds/history/"+A.d3(2,e,D.a4,!1))
h=A.bR(i,0,null)
g=y.f
A.cN("GET",A.aa(["gameType",e],g,g),"rounds_history",i)
g=A.F(g,g)
g.k(0,"Accept","application/json")
if(a1!=null&&a1.length!==0)g.k(0,"Authorization","Bearer "+a1)
g.k(0,"ngrok-skip-browser-warning","true")
x=3
return A.e(A.f6(h,g),$async$anI)
case 3:s=a3
m=s.b>=200&&s.b<300
g=s.b
l=s
if(A.aN(A.aM(l.e)).ad(0,l.w).length>800){l=s
l=D.c.ac(A.aN(A.aM(l.e)).ad(0,l.w),0,800)+"\u2026"}else{l=s
l=A.aN(A.aM(l.e)).ad(0,l.w)}A.cM(l,"rounds_history",g,m,i)
if(m){g=s
g=A.aN(A.aM(g.e)).ad(0,g.w).length===0}else g=!0
if(g){v=D.bD
x=1
break}u=5
g=s
x=8
return A.e(C.bw3(A.aN(A.aM(g.e)).ad(0,g.w)),$async$anI)
case 8:r=a3
q=C.bw8(r)
q=C.bHp(q)
p=A.a([],y.b)
for(g=J.b0(q);g.A();){o=g.gP(g)
n=C.bwo(o)
if(n!=null){J.dZ(p,n)
if(J.ax(p)>=a0)break}}v=p
x=1
break
u=2
x=7
break
case 5:u=4
f=t.pop()
v=D.bD
x=1
break
x=7
break
case 4:x=2
break
case 7:case 1:return A.n(v,w)
case 2:return A.m(t.at(-1),w)}})
return A.o($async$anI,w)},
bps:function bps(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bpt:function bpt(d){this.a=d}},C,E
J=c[1]
A=c[0]
D=c[2]
B=a.updateHolder(c[50],B)
C=c[62]
E=c[52]
var z=a.updateTypes([])
B.bps.prototype={
$0(){var x=this
return B.anI(x.b,x.a,x.d,x.c)},
$S:684}
B.bpt.prototype={
$1(d){if(J.cJ(d))$.Zc().a.k(0,"rounds:"+this.a,new C.SN(d,new A.c3(Date.now(),0,!1).pg(2e7)))
return d},
$S:685};(function inheritance(){var x=a.inherit
x(B.bps,A.er)
x(B.bpt,A.d8)})()
var y={b:A.a1("w<r>"),g:A.a1("R<r>"),f:A.a1("i")};(function staticFields(){$.bZY=A.F(y.f,A.a1("am<R<r>>"))})()};
(a=>{a["lLsOh2OKP38wWRcb8Pa9Q7bNb0A="]=a.current})($__dart_deferred_initializers__);