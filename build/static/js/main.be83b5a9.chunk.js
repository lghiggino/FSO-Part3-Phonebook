(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{23:function(e,t,n){},24:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var r=n(1),s=n(17),c=n.n(s),a=(n(23),n(3)),o=(n(24),n(7)),i=n(18),u=n(4),j=n.n(u),l="api/persons";function b(){return(b=Object(i.a)(Object(o.a)().mark((function e(t){return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.delete("".concat(l,"/").concat(t));case 2:return e.next=4,j.a.get(l);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var d={getAll:function(){return j.a.get(l)},create:function(e){return j.a.post(l,e)},updateNumber:function(e,t){return j.a.put("".concat(l,"/").concat(e),t)},remove:function(e){return b.apply(this,arguments)}},h=n(0);function m(e){var t=e.person,n=e.setPersons;return Object(h.jsxs)("li",{className:"personLi",children:[" ",t.name,": ",t.number," ",Object(h.jsx)("button",{onClick:function(){return e=t.id,console.log(e),void d.remove(e).then((function(e){console.log(e.data),n(e.data)}));var e},children:"remove"})," "]},t.id)}function O(e){var t=e.persons,n=e.nameError,r=e.wrongName,s=e.setPersons,c=e.nameEditSuccess;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h2",{children:"Names"}),c&&Object(h.jsx)("div",{children:Object(h.jsx)("p",{className:"success",children:" Number changed successfully"})}),n&&Object(h.jsx)("div",{children:Object(h.jsxs)("p",{className:"error",children:[r,"'s number was not changed"]})}),Object(h.jsx)("ul",{children:t.map((function(e){return Object(h.jsx)(m,{person:e,setPersons:s},e.id)}))})]})}function f(e){var t=e.filterError,n=e.filteredPersonsArray,r=e.setPersons;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h2",{children:"Filtered"}),t&&Object(h.jsx)("div",{children:Object(h.jsx)("p",{className:"error",children:"Error: There was no match for the search query"})}),Object(h.jsx)("ul",{children:n.map((function(e){return Object(h.jsx)(m,{person:e,setPersons:r},e.id)}))})]})}function p(e){var t=e.persons,n=(e.filteredPersonsArray,e.searchName),r=(e.filterError,e.showAll,e.setSearchName),s=e.setFilteredPersonsArray,c=e.setFilterError,a=e.setShowAll;return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("form",{onSubmit:function(e){e.preventDefault(),console.log(n);var o=t.filter((function(e){return e.name.toLowerCase()===n.toLowerCase()}));o.length>0?(s(o),a(!1),c(!1)):(c(!0),a(!0)),r("")},children:[Object(h.jsx)("label",{children:"Search person:"}),Object(h.jsx)("input",{value:n,onChange:function(e){r(e.target.value)},placeholder:"type a person name"}),Object(h.jsx)("button",{type:"submit",children:"search"})]})})}var x=n(8);function v(e){var t=e.persons,n=e.newName,r=e.newPhone,s=e.setPersons,c=e.setNewName,a=e.setNameError,o=e.setWrongName,i=e.setNewPhone,u=e.setNameEditSuccess;return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),t.some((function(e){return e.name===n}))){if(!window.confirm("".concat(n," is already in the phone book. Replace the old number with ").concat(r,"?")))return a(!0),setTimeout((function(){a(!1)}),5e3),u(!1),o(n),c(""),void i("");var j=t.find((function(e){return e.name===n})),l=Object(x.a)(Object(x.a)({},j),{},{number:r});d.updateNumber(l.id,l).then((function(e){s(t.map((function(t){return t.id!==e.data.id?t:e.data})))})).then((function(e){u(!0),a(!1),setTimeout((function(){u(!1)}),5e3)}))}var b={name:n,number:r};d.create(b).then((function(e){s(t.concat(e.data))})),c(""),i(""),a(!1)},children:[Object(h.jsx)("label",{children:"Add a new Person:"}),Object(h.jsx)("input",{value:n,onChange:function(e){c(e.target.value)},placeholder:"a new name..."}),Object(h.jsx)("input",{value:r,onChange:function(e){i(e.target.value)},placeholder:"add phone number"}),Object(h.jsx)("button",{type:"submit",children:"add"})]})})}var N=function(){var e=Object(r.useState)([]),t=Object(a.a)(e,2),n=t[0],s=t[1],c=Object(r.useState)(""),o=Object(a.a)(c,2),i=o[0],u=o[1],j=Object(r.useState)(!1),l=Object(a.a)(j,2),b=l[0],m=l[1],x=Object(r.useState)(!1),N=Object(a.a)(x,2),w=N[0],g=N[1],P=Object(r.useState)(""),S=Object(a.a)(P,2),E=S[0],y=S[1],A=Object(r.useState)(""),F=Object(a.a)(A,2),k=F[0],C=F[1],L=Object(r.useState)(""),T=Object(a.a)(L,2),D=T[0],J=T[1],W=Object(r.useState)([]),q=Object(a.a)(W,2),B=q[0],I=q[1],R=Object(r.useState)(!1),z=Object(a.a)(R,2),G=z[0],H=z[1],K=Object(r.useState)(!0),M=Object(a.a)(K,2),Q=M[0],U=M[1];return Object(r.useEffect)((function(){d.getAll().then((function(e){s(e.data)}))}),[]),Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("h2",{children:"Phonebook"}),Object(h.jsx)(v,{persons:n,newName:i,nameError:b,wrongName:E,newPhone:k,setPersons:s,setNewName:u,setNameError:m,setWrongName:y,setNewPhone:C,setNameEditSuccess:g}),Object(h.jsx)(p,{persons:n,filteredPersonsArray:B,searchName:D,filterError:G,showAll:Q,setSearchName:J,setFilteredPersonsArray:I,setFilterError:H,setShowAll:U}),Object(h.jsx)(O,{persons:n,nameError:b,wrongName:E,setPersons:s,nameEditSuccess:w}),Object(h.jsx)(f,{filteredPersonsArray:B,filterError:G,setPersons:s})]})};c.a.render(Object(h.jsx)(N,{}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.be83b5a9.chunk.js.map