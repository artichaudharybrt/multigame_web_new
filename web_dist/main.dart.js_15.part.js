((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,D,B={
r1(d,e,f){var x=d+"||"+e,w=y.g,v=$.ZH().QH(0,"rounds:"+x,w)
if(v!=null)return A.dQ(v,w)
return E.bIo($.c1_,x,new B.brf(d,null,f,e)).bI(new B.brg(x),w)},
aot(d,e,f,g){return B.c_P(d,e,f,g)},
c_P(d,e,a0,a1){var x=0,w=A.p(y.g),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$aot=A.q(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:j=A.cb()
i=j+("/matches/rounds/history/"+A.d6(2,e,D.a6,!1))
h=A.bO(i,0,null)
g=y.f
A.cI("GET",A.aa(["gameType",e],g,g),"rounds_history",i)
g=A.F(g,g)
g.k(0,"Accept","application/json")
if(a1!=null&&a1.length!==0)g.k(0,"Authorization","Bearer "+a1)
g.k(0,"ngrok-skip-browser-warning","true")
x=3
return A.e(A.f3(h,g),$async$aot)
case 3:s=a3
m=s.b>=200&&s.b<300
g=s.b
l=s
if(A.aK(A.aJ(l.e)).af(0,l.w).length>800){l=s
l=D.c.ae(A.aK(A.aJ(l.e)).af(0,l.w),0,800)+"\u2026"}else{l=s
l=A.aK(A.aJ(l.e)).af(0,l.w)}A.cy(l,"rounds_history",g,m,i)
if(m){g=s
g=A.aK(A.aJ(g.e)).af(0,g.w).length===0}else g=!0
if(g){v=D.bB
x=1
break}u=5
g=s
x=8
return A.e(C.bxQ(A.aK(A.aJ(g.e)).af(0,g.w)),$async$aot)
case 8:r=a3
q=C.bxV(r)
q=C.bJj(q)
p=A.a([],y.b)
for(g=J.b_(q);g.A();){o=g.gP(g)
n=C.bya(o)
if(n!=null){J.e_(p,n)
if(J.au(p)>=a0)break}}v=p
x=1
break
u=2
x=7
break
case 5:u=4
f=t.pop()
v=D.bB
x=1
break
x=7
break
case 4:x=2
break
case 7:case 1:return A.n(v,w)
case 2:return A.m(t.at(-1),w)}})
return A.o($async$aot,w)},
brf:function brf(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
brg:function brg(d){this.a=d}},C,E
J=c[1]
A=c[0]
D=c[2]
B=a.updateHolder(c[53],B)
C=c[65]
E=c[55]
var z=a.updateTypes([])
B.brf.prototype={
$0(){var x=this
return B.aot(x.b,x.a,x.d,x.c)},
$S:688}
B.brg.prototype={
$1(d){if(J.cE(d))$.ZH().a.k(0,"rounds:"+this.a,new C.Tc(d,new A.c5(Date.now(),0,!1).pk(2e7)))
return d},
$S:689};(function inheritance(){var x=a.inherit
x(B.brf,A.eb)
x(B.brg,A.cY)})()
var y={b:A.X("w<r>"),g:A.X("T<r>"),f:A.X("h")};(function staticFields(){$.c1_=A.F(y.f,A.X("am<T<r>>"))})()};
(a=>{a["IXqwWDqzfcNDH4TY4g41s14JkNU="]=a.current})($__dart_deferred_initializers__);