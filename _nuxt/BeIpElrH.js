import{d as F,z as I,G as L,Z as A,V as M,W as B,c as a,e as l,O as c,h as g,w as P,n as r,ab as t,k as h,t as d,g as o,F as m,M as f,f as N,N as U,P as p,as as D,H as E,U as G,am as H}from"./DJGUV8bE.js";const J={key:0},R={key:2},T={key:0},Z=F({inheritAttrs:!1,__name:"LandingSection",props:{icon:{type:String,default:void 0},headline:{type:String,default:void 0},title:{type:String,default:void 0},description:{type:String,default:void 0},features:{type:Array,default:()=>[]},links:{type:Array,default:()=>[]},slot:{type:String,default:void 0},align:{type:String,default:"center"},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(e){const V=I(),u=e,j=L(()=>{const n=A("gap-16 sm:gap-y-24",u.align==="center"?"flex flex-col":"grid lg:grid-cols-2 lg:items-center"),b=A("",u.align==="center"&&"text-center flex flex-col items-center",u.align==="right"&&"lg:order-last");return{wrapper:"py-24 sm:py-32",container:n,base:b,icon:{wrapper:"flex mb-6",base:"w-10 h-10 flex-shrink-0 text-primary"},headline:"mb-2 text-base/7 font-semibold text-primary",title:"text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl",description:"mt-6 text-lg/8 text-gray-600 dark:text-gray-300",links:"mt-8 flex flex-wrap gap-x-3 gap-y-1.5",features:{wrapper:{base:"mt-6 leading-7",list:"space-y-4",grid:"grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16"},base:"relative pl-8",name:"font-semibold text-gray-900 dark:text-white",description:"text-gray-500 dark:text-gray-400 leading-6",icon:{base:"absolute left-0 top-1 h-5 w-5 text-primary",name:V.ui.icons.check}}}}),{ui:s,attrs:O}=M("landing.section",B(u,"ui"),j,B(u,"class"),!0);return(n,b)=>{const y=E,$=G,z=H;return a(),l("div",p({class:t(s).wrapper},t(O)),[c(n.$slots,"top"),g(z,{class:r(t(s).container)},{default:P(()=>{var w,v,x,C,S;return[e.icon||n.$slots.icon||e.headline||n.$slots.headline||e.title||n.$slots.title||e.description||n.$slots.description||(w=e.links)!=null&&w.length||n.$slots.links?(a(),l("div",{key:0,class:r(t(s).base)},[e.icon||n.$slots.icon?(a(),l("div",{key:0,class:r(t(s).icon.wrapper)},[c(n.$slots,"icon",{},()=>[g(y,{name:e.icon,class:r(t(s).icon.base)},null,8,["name","class"])])],2)):e.headline||n.$slots.headline?(a(),l("div",{key:1,class:r(t(s).headline)},[c(n.$slots,"headline",{},()=>[h(d(e.headline),1)])],2)):o("",!0),e.title||n.$slots.title?(a(),l("h2",{key:2,class:r(t(s).title)},[c(n.$slots,"title",{},()=>[h(d(e.title),1)])],2)):o("",!0),e.description||n.$slots.description?(a(),l("div",{key:3,class:r(t(s).description)},[c(n.$slots,"description",{},()=>[h(d(e.description),1)])],2)):o("",!0),e.align!=="center"&&((v=e.features)!=null&&v.length)?(a(),l("dl",{key:4,class:r([t(s).features.wrapper.base,t(s).features.wrapper.list])},[(a(!0),l(m,null,f(e.features,i=>(a(),l("div",{key:i.name,class:r(t(s).features.base)},[N("dt",{class:r(t(s).features.name)},[g(y,{name:i.icon||t(s).features.icon.name,class:r(t(s).features.icon.base),"aria-hidden":"true"},null,8,["name","class"]),i.name?(a(),l("span",J,d(i.name),1)):o("",!0)],2),i.description?(a(),l("dd",{key:0,class:r(t(s).features.description)},d(i.description),3)):o("",!0)],2))),128))],2)):o("",!0),e.align!=="center"&&((x=e.links)!=null&&x.length||n.$slots.links)?(a(),l("div",{key:5,class:r(t(s).links)},[c(n.$slots,"links",{},()=>[(a(!0),l(m,null,f(e.links,(i,k)=>(a(),U($,p({key:k,ref_for:!0},i,{onClick:i.click}),null,16,["onClick"]))),128))])],2)):o("",!0)],2)):o("",!0),n.$slots[e.slot||"default"]?c(n.$slots,e.slot||"default",{key:1}):e.align==="right"?(a(),l("div",R)):o("",!0),e.align==="center"&&((C=e.features)!=null&&C.length)?(a(),l("dl",{key:3,class:r([t(s).features.wrapper.base,t(s).features.wrapper.grid])},[(a(!0),l(m,null,f(e.features,i=>(a(),l("div",{key:i.name,class:r(t(s).features.base)},[N("dt",{class:r(t(s).features.name)},[g(y,{name:i.icon||t(s).features.icon.name,class:r(t(s).features.icon.base),"aria-hidden":"true"},null,8,["name","class"]),i.name?(a(),l("span",T,d(i.name),1)):o("",!0)],2),i.description?(a(),l("dd",{key:0,class:r(t(s).features.description)},d(i.description),3)):o("",!0)],2))),128))],2)):o("",!0),e.align==="center"&&((S=e.links)!=null&&S.length||n.$slots.links)?(a(),l("div",{key:4,class:r(t(D)(t(s).links,"mt-0 justify-center"))},[c(n.$slots,"links",{},()=>[(a(!0),l(m,null,f(e.links,(i,k)=>(a(),U($,p({key:k,ref_for:!0},i,{onClick:i.click}),null,16,["onClick"]))),128))])],2)):o("",!0)]}),_:3},8,["class"]),c(n.$slots,"bottom")],16)}}});export{Z as _};
