import{r as t,j as e,B as l}from"./index-BYux0FQ6.js";import{C as P,F as g,f as k,a as A}from"./index-tVUuqSVH.js";import{c as R,a as m}from"./index.esm-Bcp6UtXt.js";import{h as E}from"./moment-C5S46NFB.js";import{a as B,s as M,d as I}from"./auth.service-BC-jCdLG.js";import{c as Y,C as _,d as H}from"./DefaultLayout-D2-wuSB6.js";import{C as L,a as O}from"./CRow-Dut9QzWx.js";import{C as z,a as K}from"./CCardBody-Bo7umCku.js";import{C as $}from"./CCardHeader-Dp5-QRW2.js";import{C as q}from"./CFormInput-DXhB2isq.js";import{C as G,a as J,b as y,c as o,d as Q,e as c}from"./CTable-CdSDa_HL.js";import{C as V}from"./CFormSelect-BBhHKNjT.js";const me=()=>{const[W,b]=t.useState({_id:"",name:"",email:"",password:"",role:"user",created:null,lastLogin:null}),[w,N]=t.useState([]),[p,v]=t.useState(""),[i,j]=t.useState(1),[x,D]=t.useState(10),[d,T]=t.useState(1);t.useState(""),t.useState("asc"),t.useState("name");const[X,n]=t.useState(!1),F=async s=>{let a=new Array;s.forEach(r=>{a.push(r)}),S(),N(a)},S=()=>{b({_id:"",name:"",email:"",password:"",role:"user",created:null,lastLogin:null})},h=async()=>{n(!0);try{const s=await B(i,x,p);s.msg==="no-section"?(l.warning("There is no information!"),n(!1)):(await F(s.users),T(s.pages),n(!1))}catch(s){l.error(s)}};t.useEffect(()=>{h()},[i,x,p]);const u=async(s,a)=>{try{let r=new FormData;Object.keys(s).forEach(f=>{f!=="password"&&r.append(f,s[f])}),r.set("allowed",a),n(!0);const C=await M(r);C.msg==="no-section"?(l.warning("There is no information!"),n(!1)):C.msg==="update"&&(l.success("The Review information was updated!"),h())}catch(r){l.error(r.response.data)}},U=async s=>{try{n(!0);let a=new FormData;a.append("_id",s);const r=await I(a);r.msg==="no-section"?(l.warning("There is no information!"),n(!1)):r.msg==="delete"&&(l.success("User was deleted successfully!"),h())}catch(a){l.error(a.response.data)}};return e.jsx(L,{children:e.jsx(O,{xs:!0,children:e.jsxs(z,{className:"mb-4",children:[e.jsx($,{children:e.jsx("div",{className:"d-flex flex-row justify-content-start",children:e.jsx(q,{type:"text",placeholder:"Filter by All",onKeyDown:s=>{s.key==="Enter"&&v(s.target.value)},className:"form-control",style:{width:"10rem",left:"0"}})})}),e.jsx(K,{children:e.jsxs(G,{align:"middle",className:"mb-0 border",hover:!0,responsive:!0,children:[e.jsx(J,{className:"text-nowrap",children:e.jsxs(y,{children:[e.jsx(o,{className:"bg-body-tertiary text-center",children:e.jsx(R,{icon:Y})}),e.jsx(o,{className:"bg-body-tertiary",children:"User"}),e.jsx(o,{className:"bg-body-tertiary",children:"Email"}),e.jsx(o,{className:"bg-body-tertiary text-center",children:"Role"}),e.jsx(o,{className:"bg-body-tertiary text-center",children:"Allow"}),e.jsx(o,{className:"bg-body-tertiary text-center",children:"Delete"})]})}),e.jsx(Q,{children:w.map((s,a)=>e.jsxs(y,{"v-for":"item in tableItems",children:[e.jsx(c,{className:"text-center",children:e.jsx(_,{size:"md",src:H})}),e.jsxs(c,{children:[e.jsx("div",{children:s.name}),e.jsxs("div",{className:"small text-body-secondary text-nowrap",children:["Registered: ",E(s.created).format("MMM D, YYYY")]})]}),e.jsx(c,{children:e.jsx("a",{className:"text-info form-link text-center",href:`mailTo:${s.email}`,children:s.email})}),e.jsx(c,{className:"text-center text-success ",children:e.jsx("div",{children:(s==null?void 0:s.role)||"admin"})}),e.jsx(c,{className:"text-center",children:s.allowed?e.jsx(m,{color:"dark",className:"text-light",shape:"rounded-pill",onClick:()=>{u(s,!1)},children:"Deny"}):e.jsx(m,{color:"success",className:"text-light",shape:"rounded-pill",onClick:()=>{u(s,!0)},children:"Allow"})}),e.jsx(c,{className:"text-center",children:e.jsx(m,{color:"danger",className:"text-light",shape:"rounded-pill",onClick:()=>{U(s._id)},children:"Delete"})})]},a))})]})}),e.jsx(P,{children:e.jsxs("div",{className:"d-flex justify-content-center align-items-center",children:[e.jsxs(V,{value:x,onChange:s=>D(Number(s.target.value)),className:"form-select position-absolute mx-1",style:{width:"5rem",left:"0"},children:[e.jsx("option",{value:5,children:"5"}),e.jsx("option",{value:10,children:"10"}),e.jsx("option",{value:20,children:"20"})]}),e.jsx(m,{onClick:()=>j(s=>Math.max(s-1,1)),disabled:i===1||d===0,className:"btn btn-secondary mx-2",children:e.jsx(g,{icon:k})}),e.jsxs("span",{children:["Page ",i," of ",d]}),e.jsx(m,{onClick:()=>j(s=>Math.min(s+1,d)),disabled:i===d||d===0,className:"btn btn-secondary mx-2",children:e.jsx(g,{icon:A})})]})})]})})})};export{me as default};