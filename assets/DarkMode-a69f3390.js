import{S as O,i as $,s as q,b as A,e as u,t as k,c as E,f as d,a as C,g as l,l as b,n as L,d as D,r as j}from"./index-2187824a.js";function z(t){let s,r,e,n,m,h,i,a,f,S,M,c,o,I,w,g,v,y;return g=A(t[3][0]),{c(){s=u("form"),r=u("label"),e=u("input"),n=u("span"),m=k(" Auto"),h=E(),i=u("label"),a=u("input"),f=u("span"),S=k(" On"),M=E(),c=u("label"),o=u("input"),I=u("span"),w=k(" Off"),d(e,"type","radio"),d(e,"name","darkMode"),e.__value=t[1][0],e.value=e.__value,d(a,"type","radio"),d(a,"name","darkMode"),a.__value=t[1][1],a.value=a.__value,d(o,"type","radio"),d(o,"name","darkMode"),o.__value=t[1][2],o.value=o.__value,g.p(e,a,o)},m(_,p){C(_,s,p),l(s,r),l(r,e),e.checked=e.__value===t[0],l(r,n),l(r,m),l(s,h),l(s,i),l(i,a),a.checked=a.__value===t[0],l(i,f),l(i,S),l(s,M),l(s,c),l(c,o),o.checked=o.__value===t[0],l(c,I),l(c,w),v||(y=[b(e,"change",t[2]),b(a,"change",t[4]),b(o,"change",t[5])],v=!0)},p(_,[p]){p&1&&(e.checked=e.__value===_[0]),p&1&&(a.checked=a.__value===_[0]),p&1&&(o.checked=o.__value===_[0])},i:L,o:L,d(_){_&&D(s),g.r(),v=!1,j(y)}}}function B(t,s,r){const e=["auto","dark","light"];let n=e.find(f=>f===localStorage.getItem("theme"))||e[0];const m=[[]];function h(){n=this.__value,r(0,n)}function i(){n=this.__value,r(0,n)}function a(){n=this.__value,r(0,n)}return t.$$.update=()=>{t.$$.dirty&1&&(n==="dark"||n==="light"?localStorage.setItem("theme",n):localStorage.removeItem("theme"),localStorage.theme==="dark"||!("theme"in localStorage)&&window.matchMedia("(prefers-color-scheme: dark)").matches?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark"))},[n,e,h,m,i,a]}class G extends O{constructor(s){super(),$(this,s,B,z,q,{})}}export{G as default};