import{r as t,j as e}from"./index-K7BRA8gO.js";import{C as N,F as x,f as T,a as F}from"./index-BXuZBxIn.js";import{h as S}from"./moment-C5S46NFB.js";import{g as P}from"./auth.service-B2nlOctG.js";import{C as D,a as M}from"./CRow-DGa8L2ab.js";import{C as E,a as k}from"./CCardBody-Bb7oBdg0.js";import{C as R}from"./CCardHeader-D985vdUT.js";import{C as Y}from"./CFormInput-DV9HJT9z.js";import{C as A,a as B,b as h,c as f,d as H,e as u}from"./CTable-DQQmY1x0.js";import{C as I}from"./CFormSelect-BB8CZiBd.js";import{a as C}from"./index.esm-BQ9lYq6b.js";const W=()=>{const[j,b]=t.useState([]),[L,c]=t.useState(!1),[m,p]=t.useState(""),[r,d]=t.useState(1),[n,g]=t.useState(10),y=async s=>{let a=new Array;s.forEach(o=>{let v={_id:o._id,email:o.email,created:o.created};a.push(v)}),b(a)},w=async()=>{c(!0);try{const s=await P();s.msg==="no-section"?(toast.warning("There is no information!"),c(!1)):(await y(s.subscribers),c(!1))}catch(s){toast.error(s)}};t.useEffect(()=>{w()},[]);const l=j.filter(s=>{const a=s.email.toLowerCase(),o=m.toLowerCase();return a.includes(o)}),i=Math.ceil(l.length/n);return l.slice((r-1)*n,r*n),e.jsx(e.Fragment,{children:e.jsx(D,{children:e.jsx(M,{xs:!0,children:e.jsxs(E,{className:"mb-4",children:[e.jsx(R,{children:e.jsx("div",{className:"d-flex flex-row justify-content-start",children:e.jsx(Y,{type:"text",placeholder:"Filter by All",value:m,onChange:s=>p(s.target.value),className:"form-control",style:{width:"10rem",left:"0"}})})}),e.jsx(k,{children:e.jsxs(A,{align:"middle",className:"mb-0 border",hover:!0,responsive:!0,children:[e.jsx(B,{className:"text-nowrap",children:e.jsxs(h,{children:[e.jsx(f,{className:"bg-body-tertiary",children:"Email"}),e.jsx(f,{className:"bg-body-tertiary text-center",children:"Date"})]})}),e.jsx(H,{children:l==null?void 0:l.map((s,a)=>e.jsxs(h,{"v-for":"item in tableItems",children:[e.jsx(u,{children:e.jsx("div",{className:"d-flex justify-content-between text-nowrap",children:e.jsx("div",{className:"fw-semibold",children:e.jsx("a",{className:"text-success form-link",href:`mailTo:${s.email}`,children:s.email})})})}),e.jsx(u,{className:"text-center",children:e.jsx("div",{children:S(s.created).format("MMM D, YYYY")})})]},a))})]})}),e.jsx(N,{children:e.jsxs("div",{className:"d-flex justify-content-center align-items-center",children:[e.jsxs(I,{value:n,onChange:s=>g(Number(s.target.value)),className:"form-select position-absolute mx-1",style:{width:"5rem",left:"0"},children:[e.jsx("option",{value:5,children:"5"}),e.jsx("option",{value:10,children:"10"}),e.jsx("option",{value:20,children:"20"})]}),e.jsx(C,{onClick:()=>d(s=>Math.max(s-1,1)),disabled:r===1,className:"btn btn-secondary mx-2",children:e.jsx(x,{icon:T})}),e.jsxs("span",{children:["Page ",r," of ",i]}),e.jsx(C,{onClick:()=>d(s=>Math.min(s+1,i)),disabled:r===i,className:"btn btn-secondary mx-2",children:e.jsx(x,{icon:F})})]})})]})})})})};export{W as default};
