(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{23:function(e,t,r){},24:function(e,t,r){},45:function(e,t,r){"use strict";r.r(t);var n=r(1),s=r(17),c=r.n(s),a=(r(23),r(3)),o=(r(24),r(7)),i=r(18),u=r(4),l=r.n(u),j="api/persons";function b(){return(b=Object(i.a)(Object(o.a)().mark((function e(t){return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.delete("".concat(j,"/").concat(t));case 2:return e.next=4,l.a.get(j);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var d={getAll:function(){return console.log("bateu no getAll de person 'Service'"),l.a.get(j)},create:function(e){return l.a.post(j,e)},updateNumber:function(e,t){return l.a.put("".concat(j,"/").concat(e),t)},remove:function(e){return b.apply(this,arguments)}},h=r(0);function m(e){var t=e.person,r=e.setPersons;return Object(h.jsxs)("li",{className:"personLi",children:[" ",t.name,": ",t.number," ",Object(h.jsx)("button",{onClick:function(){return e=t.id,console.log(e),void d.remove(e).then((function(e){console.log(e.data),r(e.data)}));var e},children:"remove"})," "]},t.id)}function O(e){var t=e.persons,r=e.nameError,n=e.wrongName,s=e.setPersons,c=e.nameEditSuccess,a=e.invalidNameError;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h2",{children:"Names"}),c&&Object(h.jsx)("div",{children:Object(h.jsx)("p",{className:"success",children:" Number changed successfully"})}),r&&Object(h.jsx)("div",{children:Object(h.jsxs)("p",{className:"error",children:[n,"'s number was not changed"]})}),a&&Object(h.jsx)("div",{children:Object(h.jsx)("p",{className:"error",children:"Name is shorter than the minimum allowed length"})}),Object(h.jsx)("ul",{children:t.map((function(e){return Object(h.jsx)(m,{person:e,setPersons:s},e.id)}))})]})}function f(e){var t=e.filterError,r=e.filteredPersonsArray,n=e.setPersons;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h2",{children:"Filtered"}),t&&Object(h.jsx)("div",{children:Object(h.jsx)("p",{className:"error",children:"Error: There was no match for the search query"})}),Object(h.jsx)("ul",{children:r.map((function(e){return Object(h.jsx)(m,{person:e,setPersons:n},e.id)}))})]})}function p(e){var t=e.persons,r=(e.filteredPersonsArray,e.searchName),n=(e.filterError,e.showAll,e.setSearchName),s=e.setFilteredPersonsArray,c=e.setFilterError,a=e.setShowAll;return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("form",{onSubmit:function(e){e.preventDefault(),console.log(r);var o=t.filter((function(e){return e.name.toLowerCase()===r.toLowerCase()}));o.length>0?(s(o),a(!1),c(!1)):(c(!0),a(!0)),n("")},children:[Object(h.jsx)("label",{children:"Search person:"}),Object(h.jsx)("input",{value:r,onChange:function(e){n(e.target.value)},placeholder:"type a person name"}),Object(h.jsx)("button",{type:"submit",children:"search"})]})})}var x=r(8);function v(e){var t=e.persons,r=e.newName,n=e.newPhone,s=e.setPersons,c=e.setNewName,a=e.setNameError,o=e.setWrongName,i=e.setNewPhone,u=e.setNameEditSuccess,l=e.setInvalidNameError;return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),t.some((function(e){return e.name===r}))){if(!window.confirm("".concat(r," is already in the phone book. Replace the old number with ").concat(n,"?")))return a(!0),setTimeout((function(){a(!1)}),5e3),u(!1),o(r),c(""),void i("");var j=t.find((function(e){return e.name===r})),b=Object(x.a)(Object(x.a)({},j),{},{number:n});d.updateNumber(b.id,b).then((function(e){s(t.map((function(t){return t.id!==e.data.id?t:e.data})))})).then((function(e){u(!0),a(!1),setTimeout((function(){u(!1)}),5e3)}))}var h={name:r,number:n};d.create(h).then((function(e){s(t.concat(e.data))})).catch((function(e){console.log("Error while creating a person",e.response.data.error),l(!0)})),c(""),i(""),a(!1)},children:[Object(h.jsx)("label",{children:"Add a new Person:"}),Object(h.jsx)("input",{value:r,onChange:function(e){c(e.target.value)},placeholder:"a new name..."}),Object(h.jsx)("input",{value:n,onChange:function(e){i(e.target.value)},placeholder:"add phone number"}),Object(h.jsx)("button",{type:"submit",children:"add"})]})})}var N=function(){var e=Object(n.useState)([]),t=Object(a.a)(e,2),r=t[0],s=t[1],c=Object(n.useState)(""),o=Object(a.a)(c,2),i=o[0],u=o[1],l=Object(n.useState)(!1),j=Object(a.a)(l,2),b=j[0],m=j[1],x=Object(n.useState)(!1),N=Object(a.a)(x,2),g=N[0],w=N[1],E=Object(n.useState)(!1),S=Object(a.a)(E,2),P=S[0],y=S[1],A=Object(n.useState)(""),F=Object(a.a)(A,2),k=F[0],C=F[1],I=Object(n.useState)(""),L=Object(a.a)(I,2),T=L[0],D=L[1],J=Object(n.useState)(""),W=Object(a.a)(J,2),q=W[0],B=W[1],R=Object(n.useState)([]),z=Object(a.a)(R,2),G=z[0],H=z[1],K=Object(n.useState)(!1),M=Object(a.a)(K,2),Q=M[0],U=M[1],V=Object(n.useState)(!0),X=Object(a.a)(V,2),Y=X[0],Z=X[1];return Object(n.useEffect)((function(){d.getAll().then((function(e){s(e.data)})).catch((function(e){return console.log(e.message,e)}))}),[]),Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("h2",{children:"Phonebook"}),Object(h.jsx)(v,{persons:r,newName:i,nameError:b,wrongName:k,newPhone:T,setPersons:s,setNewName:u,setNameError:m,setWrongName:C,setNewPhone:D,setNameEditSuccess:y,setInvalidNameError:w}),Object(h.jsx)(p,{persons:r,filteredPersonsArray:G,searchName:q,filterError:Q,showAll:Y,setSearchName:B,setFilteredPersonsArray:H,setFilterError:U,setShowAll:Z}),Object(h.jsx)(O,{persons:r,nameError:b,wrongName:k,setPersons:s,nameEditSuccess:P,invalidNameError:g}),Object(h.jsx)(f,{filteredPersonsArray:G,filterError:Q,setPersons:s})]})};c.a.render(Object(h.jsx)(N,{}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.29685ccb.chunk.js.map