import{r as n,j as e,B as h}from"./index-K7BRA8gO.js";import{C as H,F as R,f as M,a as q}from"./index-BXuZBxIn.js";import{c as B,u as E}from"./data.service-DvCPfAEo.js";import{h as L}from"./moment-C5S46NFB.js";import{C as Y,a as I}from"./CRow-DGa8L2ab.js";import{C as O,a as W}from"./CCardBody-Bb7oBdg0.js";import{C as _}from"./CCardHeader-D985vdUT.js";import{C as z}from"./CFormInput-DV9HJT9z.js";import{C as G,a as J,b as T,c as o,d as K,e as c}from"./CTable-DQQmY1x0.js";import{a as f}from"./index.esm-BQ9lYq6b.js";import{C as Q}from"./CFormSelect-BB8CZiBd.js";import"./auth.service-B2nlOctG.js";const ce=()=>{const[k,F]=n.useState([]),[U,i]=n.useState(!1),[j,S]=n.useState(""),[d,m]=n.useState(1),[x,P]=n.useState(10),D=async s=>{let r=new Array;s.forEach(a=>{r.push(a)}),F(r)},C=async()=>{i(!0);try{const s=await B();s.msg==="no-section"?(h.warning("There is no information!"),i(!1)):(await D(s.reviews),i(!1))}catch(s){h.error(s)}};n.useEffect(()=>{C()},[]);const p=k.filter(s=>{var w,g,v,y,N;const r=(g=(w=s==null?void 0:s.request)==null?void 0:w.name)==null?void 0:g.toLowerCase(),a=(y=(v=s==null?void 0:s.request)==null?void 0:v.link)==null?void 0:y.toLowerCase(),t=(N=s==null?void 0:s.writer)==null?void 0:N.toLowerCase(),l=j.toLowerCase();return(r==null?void 0:r.includes(l))||(a==null?void 0:a.includes(l))||(t==null?void 0:t.includes(l))}),u=Math.ceil(p.length/x),A=p.slice((d-1)*x,d*x),b=async(s,r)=>{try{let a=new FormData;Object.keys(s).forEach(l=>{a.append(l,s[l])}),a.set("visible",r),i(!0);const t=await E(a);t.msg==="no-section"?(h.warning("There is no information!"),i(!1)):t.msg==="update"&&(h.success("The Review information was updated!"),C())}catch(a){h.error(a.response.data)}};return e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"All Reviews"}),e.jsx(Y,{children:e.jsx(I,{xs:!0,children:e.jsxs(O,{className:"mb-4",children:[e.jsx(_,{children:e.jsx("div",{className:"d-flex flex-row justify-content-start",children:e.jsx(z,{type:"text",placeholder:"Filter by All",value:j,onChange:s=>S(s.target.value),className:"form-control",style:{width:"10rem",left:"0"}})})}),e.jsx(W,{children:e.jsxs(G,{align:"middle",className:"mb-0 border",hover:!0,responsive:!0,children:[e.jsx(J,{className:"text-nowrap",children:e.jsxs(T,{children:[e.jsx(o,{className:"bg-body-tertiary",children:"Tool"}),e.jsx(o,{className:"bg-body-tertiary",children:"Website"}),e.jsx(o,{className:"bg-body-tertiary text-center",children:"Rating"}),e.jsx(o,{className:"bg-body-tertiary",children:"Writer"}),e.jsx(o,{className:"bg-body-tertiary text-left",children:"Created At"}),e.jsx(o,{className:"bg-body-tertiary text-center",children:"Show/Hide"})]})}),e.jsx(K,{children:A.map((s,r)=>{var a,t,l;return e.jsxs(T,{"v-for":"item in tableItems",children:[e.jsx(c,{children:e.jsx("div",{children:(a=s==null?void 0:s.request)==null?void 0:a.name})}),e.jsx(c,{className:"text-center",children:e.jsx("div",{className:"d-flex justify-content-between text-nowrap",children:e.jsx("div",{className:"fw-semibold",children:e.jsx("a",{className:"text-info form-link",target:"_blank",href:(t=s.request)==null?void 0:t.link,children:(l=s.request)==null?void 0:l.link})})})}),e.jsx(c,{className:"text-center",children:e.jsx("div",{children:s==null?void 0:s.rating})}),e.jsx(c,{children:e.jsx("div",{children:s==null?void 0:s.writer})}),e.jsx(c,{children:L(s.created).format("MMM D, YYYY")}),e.jsx(c,{className:"text-center",children:s.visible?e.jsx(f,{color:"dark",className:"text-light",shape:"rounded-pill",onClick:()=>{b(s,!1)},children:"Hide"}):e.jsx(f,{color:"success",className:"text-light",shape:"rounded-pill",onClick:()=>{b(s,!0)},children:"Show"})})]},r)})})]})}),e.jsx(H,{children:e.jsxs("div",{className:"d-flex justify-content-center align-items-center",children:[e.jsxs(Q,{value:x,onChange:s=>P(Number(s.target.value)),className:"form-select position-absolute mx-1",style:{width:"5rem",left:"0"},children:[e.jsx("option",{value:5,children:"5"}),e.jsx("option",{value:10,children:"10"}),e.jsx("option",{value:20,children:"20"})]}),e.jsx(f,{onClick:()=>m(s=>Math.max(s-1,1)),disabled:d===1,className:"btn btn-secondary mx-2",children:e.jsx(R,{icon:M})}),e.jsxs("span",{children:["Page ",d," of ",u]}),e.jsx(f,{onClick:()=>m(s=>Math.min(s+1,u)),disabled:d===u,className:"btn btn-secondary mx-2",children:e.jsx(R,{icon:q})})]})})]})})})]})};export{ce as default};
