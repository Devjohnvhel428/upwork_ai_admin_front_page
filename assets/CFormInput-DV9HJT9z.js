import{r as b,_ as y,R as i,b as c,c as N,P as a}from"./index-K7BRA8gO.js";var u=b.forwardRef(function(e,n){var l,o=e.children,t=e.as,r=t===void 0?"div":t,d=e.className,s=e.invalid,m=e.tooltip,v=e.valid,f=y(e,["children","as","className","invalid","tooltip","valid"]);return i.createElement(r,c({className:N((l={},l["invalid-".concat(m?"tooltip":"feedback")]=s,l["valid-".concat(m?"tooltip":"feedback")]=v,l),d)},f,{ref:n}),o)});u.propTypes={as:a.elementType,children:a.node,className:a.string,invalid:a.bool,tooltip:a.bool,valid:a.bool};u.displayName="CFormFeedback";var x=function(e){var n=e.describedby,l=e.feedback,o=e.feedbackInvalid,t=e.feedbackValid,r=e.invalid,d=e.tooltipFeedback,s=e.valid;return i.createElement(i.Fragment,null,l&&(s||r)&&i.createElement(u,c({},r&&{id:n},{invalid:r,tooltip:d,valid:s}),l),o&&i.createElement(u,{id:n,invalid:!0,tooltip:d},o),t&&i.createElement(u,{valid:!0,tooltip:d},t))};x.propTypes={describedby:a.string,feedback:a.oneOfType([a.node,a.string]),feedbackValid:a.oneOfType([a.node,a.string]),feedbackInvalid:a.oneOfType([a.node,a.string]),invalid:a.bool,tooltipFeedback:a.bool,valid:a.bool};x.displayName="CFormControlValidation";var T=b.forwardRef(function(e,n){var l=e.children,o=e.className,t=e.customClassName,r=y(e,["children","className","customClassName"]);return i.createElement("label",c({className:t??N("form-label",o)},r,{ref:n}),l)});T.propTypes={children:a.node,className:a.string,customClassName:a.string};T.displayName="CFormLabel";var O=b.forwardRef(function(e,n){var l=e.children,o=e.className,t=y(e,["children","className"]);return i.createElement("div",c({className:N("form-floating",o)},t,{ref:n}),l)});O.propTypes={children:a.node,className:a.string};O.displayName="CFormFloating";var E=b.forwardRef(function(e,n){var l=e.children,o=e.as,t=o===void 0?"div":o,r=e.className,d=y(e,["children","as","className"]);return i.createElement(t,c({className:N("form-text",r)},d,{ref:n}),l)});E.propTypes={as:a.elementType,children:a.node,className:a.string};E.displayName="CFormText";var V=function(e){var n=e.children,l=e.describedby,o=e.feedback,t=e.feedbackInvalid,r=e.feedbackValid,d=e.floatingClassName,s=e.floatingLabel,m=e.id,v=e.invalid,f=e.label,p=e.text,k=e.tooltipFeedback,g=e.valid,C=function(){return i.createElement(x,{describedby:l,feedback:o,feedbackInvalid:t,feedbackValid:r,floatingLabel:s,invalid:v,tooltipFeedback:k,valid:g})};return s?i.createElement(O,{className:d},n,i.createElement(T,{htmlFor:m},f||s),p&&i.createElement(E,{id:l},p),i.createElement(C,null)):i.createElement(i.Fragment,null,f&&i.createElement(T,{htmlFor:m},f),n,p&&i.createElement(E,{id:l},p),i.createElement(C,null))};V.propTypes=c({children:a.node,floatingClassName:a.string,floatingLabel:a.oneOfType([a.node,a.string]),label:a.oneOfType([a.node,a.string]),text:a.oneOfType([a.node,a.string])},x.propTypes);V.displayName="CFormControlWrapper";var S=b.forwardRef(function(e,n){var l,o=e.children,t=e.className,r=e.delay,d=r===void 0?!1:r,s=e.feedback,m=e.feedbackInvalid,v=e.feedbackValid,f=e.floatingClassName,p=e.floatingLabel,k=e.id,g=e.invalid,C=e.label,F=e.onChange,j=e.plainText,L=e.size,q=e.text,A=e.tooltipFeedback,R=e.type,w=R===void 0?"text":R,z=e.valid,P=y(e,["children","className","delay","feedback","feedbackInvalid","feedbackValid","floatingClassName","floatingLabel","id","invalid","label","onChange","plainText","size","text","tooltipFeedback","type","valid"]),W=b.useState(),I=W[0],B=W[1];return b.useEffect(function(){var h=setTimeout(function(){return I&&F&&F(I)},typeof d=="number"?d:500);return function(){return clearTimeout(h)}},[I]),i.createElement(V,{describedby:P["aria-describedby"],feedback:s,feedbackInvalid:m,feedbackValid:v,floatingClassName:f,floatingLabel:p,id:k,invalid:g,label:C,text:q,tooltipFeedback:A,valid:z},i.createElement("input",c({className:N(j?"form-control-plaintext":"form-control",(l={},l["form-control-".concat(L)]=L,l["form-control-color"]=w==="color",l["is-invalid"]=g,l["is-valid"]=z,l),t),id:k,type:w,onChange:function(h){return d?B(h):F&&F(h)}},P,{ref:n}),o))});S.propTypes=c({className:a.string,id:a.string,delay:a.oneOfType([a.bool,a.number]),plainText:a.bool,size:a.oneOf(["sm","lg"]),type:a.oneOfType([a.oneOf(["color","file","text"]),a.string])},V.propTypes);S.displayName="CFormInput";export{S as C,V as a,O as b,T as c};
