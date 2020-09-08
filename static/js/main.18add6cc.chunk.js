(this.webpackJsonpcovidcal=this.webpackJsonpcovidcal||[]).push([[0],{31:function(e,t,n){e.exports=n(45)},36:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var a,o=n(2),c=n.n(o),r=n(16),s=n.n(r),i=(n(36),n(12)),l=n(11),u=n(7),m=n(30),d=n(27),v=n(28),p=n(15);!function(e){e.LastCloseContact="Most Recent Close Contact",e.SymptomsStart="Illness Onset",e.PositiveTest="Most Recent Positive Test"}(a||(a={}));var b=n(29),f=n(49),E=n(46),g=n(47),S=n(48),h=n(6);function x(e,t){var n=Object(h.flow)(Object(h.map)((function(e){var t=function(e){var t=[e.covidEvents[a.SymptomsStart],e.covidEvents[a.PositiveTest]],n=Object(h.flow)(h.compact,Object(h.map)((function(e){return Object(f.a)(e,"M/dd/yyyy",new Date)})),Object(h.thru)((function(e){return Object(E.a)(e)})))(t),o=n&&Object(S.a)(n,10),c=e.noSymptomsFor24Hours?void 0:new Date,r=Object(h.flow)(h.compact,Object(h.thru)((function(e){return Object(g.a)(e)})))([o,c]);return[n,r]}(e),n=Object(p.a)(t,2),o=n[0],c=n[1];return Object(b.a)(c)?{person:e,startDate:o,endDate:c,infected:!0}:{person:e,startDate:new Date,endDate:new Date,infected:!1}})),Object(h.partition)((function(e){return e.infected})))(e),o=Object(p.a)(n,2),c=o[0],r=o[1].map((function(e){var n=e.person,o=Object(h.filter)((function(e){return e.quarantinedPerson===n.id&&e.exposed}))(t),r=Object(h.map)((function(e){var t;return null===(t=c.find((function(t){return t.person.id===e.contagiousPerson})))||void 0===t?void 0:t.startDate})),s=Object(h.map)((function(e){var t;return e.ongoing?null===(t=c.find((function(t){return t.person.id===e.contagiousPerson})))||void 0===t?void 0:t.endDate:Object(f.a)(e.date,"M/dd/yyyy",new Date)})),l=n.covidEvents[a.LastCloseContact],u=l?Object(f.a)(l,"M/dd/yyyy",new Date):void 0,m=Object(E.a)(Object(h.compact)([].concat(Object(i.a)(r(o)),[u]))),d=Object(g.a)(Object(h.compact)([].concat(Object(i.a)(s(o)),[u]))),v=Object(S.a)(d,14);return{person:n,startDate:m,endDate:v,infected:!1}}));return[].concat(Object(i.a)(c),Object(i.a)(r))}var y=n(50);function j(e){var t=e.membersState.get(),n=e.editingDateFieldState.get();return c.a.createElement("div",{className:"p-3"},c.a.createElement("div",{className:n?"ba bw2 b--light-yellow":""},c.a.createElement(m.a,{plugins:[d.a,v.a],initialView:"dayGridMonth",events:function(e,t){return x(e,t).map((function(e){return{classNames:["TODO"],title:e.person.name,start:e.startDate,end:e.endDate}}))}(t,e.inHouseExposureEvents),dateClick:function(t){if(e.editing&&n){var a=e.membersState.findIndex((function(t){return t.get().id===e.editing}));e.membersState[a].covidEvents[n].set(Object(y.a)(t.date,"MM/dd/yyyy"))}}})))}function O(e){var t=new RegExp("^([0-9][0-9]?/[0-9][0-9]?/)([0-9][0-9])$"),n=new RegExp("^[0-9][0-9]?/[0-9][0-9]?$");return c.a.createElement("div",{className:""},c.a.createElement("label",{htmlFor:"".concat(e.id,"-").concat(e.questionFieldName)},"Date ",c.a.createElement("span",{className:"f6 fw3"},"mm/dd/yyyy"),c.a.createElement("div",{role:"alert"},e.missing?c.a.createElement("span",{className:"f5 fw5 red"},"required"):e.invalid?c.a.createElement("span",{className:"f5 fw5 red"},"mm/dd/yyyy format required"):null)),c.a.createElement("input",{className:"form-control",value:e.questionFieldTextState.get(),name:e.questionFieldName,id:"".concat(e.id,"-").concat(e.questionFieldName),type:"text",onChange:function(t){e.onChange(t)},onFocus:e.onFocus,onBlur:function(){var a=e.questionFieldTextState.get();t.exec(a)&&(a=a.slice(0,-2)+"20"+a.slice(-2)),n.exec(a)&&(a+="/2020"),e.questionFieldTextState.set(a),e.onUnfocus()}}))}function N(e){return c.a.createElement("div",{className:"custom-control custom-checkbox mb-3"},c.a.createElement("input",{className:"custom-control-input",checked:e.checked,id:"checkbox-".concat(e.id,"-").concat(e.questionText),type:"checkbox",onChange:e.onChange}),c.a.createElement("label",{className:"custom-control-label",htmlFor:"checkbox-".concat(e.id,"-").concat(e.questionText)},e.questionText))}function F(e){var t=e.inHouseExposureEventState.get(),n=t.exposed,a=t.ongoing;return c.a.createElement("div",{className:"mb-3"},c.a.createElement("div",{className:"custom-control custom-checkbox mb-3"},c.a.createElement("input",{className:"custom-control-input",checked:n,name:"crossExposure-".concat(e.index,"-checkbox-exposure"),id:"crossExposure-".concat(e.id,"-").concat(e.index,"-checkbox-exposure"),type:"checkbox",onChange:function(){return e.inHouseExposureEventState.exposed.set((function(e){return!e}))}}),c.a.createElement("label",{className:"custom-control-label",htmlFor:"crossExposure-".concat(e.id,"-").concat(e.index,"-checkbox-exposure")},"I was exposed to ",e.otherPerson.name)),n&&c.a.createElement("div",{className:"custom-control custom-checkbox mb-3"},c.a.createElement("input",{className:"custom-control-input",checked:a,name:"crossExposure-".concat(e.index,"-checkbox-ongoing"),id:"crossExposure-".concat(e.id,"-").concat(e.index,"-checkbox-ongoing"),type:"checkbox",onChange:function(){return e.inHouseExposureEventState.ongoing.set((function(e){return!e}))}}),c.a.createElement("label",{className:"custom-control-label",htmlFor:"crossExposure-".concat(e.id,"-").concat(e.index,"-checkbox-ongoing")},"My exposure to ",e.otherPerson.name," is ongoing")),n&&!a&&c.a.createElement(c.a.Fragment,null,c.a.createElement("label",{htmlFor:"crossExposure-".concat(e.id,"-").concat(e.index)},"Date exposed to ",e.otherPerson.name," ",c.a.createElement("span",{className:"f6 fw3"},"mm/dd/yyyy")),c.a.createElement("input",{className:"form-control",value:t.date,name:"crossExposure-".concat(e.index),id:"crossExposure-".concat(e.id,"-").concat(e.index),type:"text",onChange:function(t){return e.inHouseExposureEventState.date.set(t.target.value)}})))}function w(e){return c.a.createElement(c.a.Fragment,null,e.meaningfulInHouseExposures.map((function(t,n){var a=e.relevantInHouseExposureEventsState.find((function(e){var n=e.get();return n.quarantinedPerson===t.id||n.contagiousPerson===t.id}));return a?c.a.createElement(c.a.Fragment,null,c.a.createElement(F,{key:e.id+"-"+n,id:e.id,index:n,otherPerson:t,inHouseExposureEventState:a}),c.a.createElement("hr",null)):c.a.createElement(c.a.Fragment,null)})))}function C(e){return Math.floor(Math.random()*Math.floor(e))}function P(e){return Boolean(e.covidEvents[a.PositiveTest]||e.covidEvents[a.SymptomsStart])}function k(e){var t=e.personState.get(),n=e.membersState.get(),o=e.personState.covidEvents,r=e.editingState.get(),s=e.inHouseExposureEventsState.filter((function(e){var n=e.get();return n.contagiousPerson===t.id||n.quarantinedPerson===t.id})),i=s.map((function(e){return e.get()})),l=Object(u.b)(Object.values(a).reduce((function(e,t){return e[t]=""!==o[t].get(),e}),{})),m=new RegExp("^[0-9][0-9]?/[0-9][0-9]?/[0-9][0-9][0-9][0-9]$"),d=Object(u.b)(Object.values(a).reduce((function(e,t){return e[t]=!1,e}),{})),v=Object(u.b)(Object.values(a).reduce((function(e,t){return e[t]=!1,e}),{})),b=l.get(),f=b[a.PositiveTest]||b[a.SymptomsStart];function E(e){return function(t){var n=t.target.checked;if(l[e].set(n),e===a.PositiveTest){var c=Boolean(n||b[a.SymptomsStart]);f!==c&&x(c)}else if(e===a.SymptomsStart){var r=Boolean(n||b[a.PositiveTest]);f!==r&&x(r)}n||o[e].set("")}}function g(n,a){return c.a.createElement(c.a.Fragment,null,c.a.createElement(N,{id:t.id,questionText:a,checked:l[n].get(),onChange:E(n)}),l[n].get()?c.a.createElement(O,{id:t.id,questionFieldTextState:o[n],questionFieldName:n,onChange:S,onFocus:function(){return e.editingDateFieldState.set(n)},onUnfocus:function(){return e.editingDateFieldState.set(void 0)},missing:v[n].get(),invalid:d[n].get()}):null)}var S=function(e){var t=e.target.name,n=e.target.value;o[t].set(n)};function x(a){s.map((function(e){return e.set(u.a)}));var o=n.map((function(e){var n=P(e);if(t!==e&&a!==n)return{contagiousPerson:a?t.id:e.id,quarantinedPerson:a?e.id:t.id,exposed:!0,ongoing:!0,date:""}}));e.inHouseExposureEventsState.merge(Object(h.compact)(o))}var y=n.filter((function(e){return t!==e&&f!==P(e)}));return c.a.createElement("div",{className:"card shadow-sm mb-2"},e.editingState.get()===t.id?c.a.createElement("div",{className:"p-2"},c.a.createElement("div",{className:"mb-3"},c.a.createElement("label",{htmlFor:"".concat(t.id,"-name")},"Name"),c.a.createElement("input",{className:"form-control",value:t.name,name:"name",id:"".concat(t.id,"-name"),type:"text",onChange:function(t){return e.personState.name.set(t.target.value)}})),c.a.createElement("div",{className:"mb-3"},g(a.LastCloseContact,"I have been exposed to someone covid positive (outside the household)"),c.a.createElement("hr",null)),c.a.createElement("div",{className:"mb-3"},g(a.PositiveTest,"I have received a positive test result"),c.a.createElement("hr",null)),c.a.createElement("div",{className:"mb-3"},function(){var n=l[a.SymptomsStart].get();return c.a.createElement(c.a.Fragment,null,c.a.createElement(N,{id:t.id,questionText:"I have shown positive symptoms",checked:n,onChange:E(a.SymptomsStart)}),n?c.a.createElement(O,{id:t.id,questionFieldTextState:o[a.SymptomsStart],questionFieldName:a.SymptomsStart,onChange:S,onFocus:function(){return e.editingDateFieldState.set(a.SymptomsStart)},onUnfocus:function(){return e.editingDateFieldState.set(void 0)},missing:v[a.SymptomsStart].get(),invalid:d[a.SymptomsStart].get()}):null,c.a.createElement("div",{className:"mb-3"}),n?c.a.createElement(N,{id:t.id,questionText:"I have shown no symptoms for 24 hours",checked:e.personState.noSymptomsFor24Hours.get(),onChange:function(){return e.personState.noSymptomsFor24Hours.set((function(e){return!e}))}}):null)}(),c.a.createElement("hr",null)),c.a.createElement(w,{id:t.id,meaningfulInHouseExposures:y,relevantInHouseExposureEventsState:s}),c.a.createElement("div",{className:"d-flex justify-content-between align-items-center"},c.a.createElement("button",{className:"btn btn-secondary",onClick:function(){s.map((function(e){return e.set(u.a)})),e.personState.set(u.a),e.editingState.set(void 0)}},c.a.createElement("span",{className:"visually-hidden"},"Remove"),"Remove",c.a.createElement("i",{"aria-hidden":"true",className:"pl2 fas fa-times-circle white"})),c.a.createElement("button",{className:"btn btn-primary",onClick:function(){Object.values(a).map((function(e){v[e].set(l.get()[e]&&""===o[e].get()),d[e].set(l.get()[e]&&""!==o[e].get()&&!Boolean(m.exec(o[e].get())))})),Object.values(v.get()).includes(!0)||Object.values(d.get()).includes(!0)||e.editingState.set(void 0)}},t.isNewPerson?"Submit":"Update"))):c.a.createElement("div",{className:"card-body"},c.a.createElement("h4",{className:"d-flex justify-content-between align-items-center mb-3"},c.a.createElement("span",null,t.name+" "),c.a.createElement("span",null,!r&&c.a.createElement("button",{onClick:function(){return e.editingState.set(t.id)}},c.a.createElement("span",{className:"visually-hidden"},"Edit Person"),c.a.createElement("span",{"aria-hidden":"true",className:"f5 fas fa-pen"})))),c.a.createElement("div",{className:""},Object.entries(t.covidEvents).map((function(e){var t=Object(p.a)(e,2),n=t[0],a=t[1];if(""!==a)return c.a.createElement("div",{className:"f5"},n,": "," ",a)})),Object.values(i).map((function(e){if(e.exposed){var t,a,o=null===(t=n.find((function(t){return t.id===e.quarantinedPerson})))||void 0===t?void 0:t.name,r=null===(a=n.find((function(t){return t.id===e.contagiousPerson})))||void 0===a?void 0:a.name;return e.ongoing?c.a.createElement("div",{className:"f5"},o," has an ongoing exposure to"," ",r," "):c.a.createElement("div",{className:"f5"},o," exposed to"," ",r," at ",e.date)}})))))}function D(e){var t=e.editingState.get(),n=e.membersState.get(),a=e.inHouseExposureEventsState.get();return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"p-3"},!t&&c.a.createElement("button",{className:"btn btn-primary mb-2",onClick:e.addNewPerson},c.a.createElement("i",{className:"fa fa-user-plus","aria-hidden":"true"})," Add Person"),e.membersState.map((function(t){var n=t.get().id;return c.a.createElement(k,{key:n,personState:t,membersState:e.membersState,inHouseExposureEventsState:e.inHouseExposureEventsState,editingState:e.editingState,editingDateFieldState:e.editingDateFieldState})})),c.a.createElement("hr",null),c.a.createElement("div",{className:"p-1"},c.a.createElement("h4",null,"Guidance"),x(n,a).map((function(e){if(Object(b.a)(e.startDate)&&Object(b.a)(e.endDate))return c.a.createElement("div",{className:"p32"},e.person.name," "," should quarantine from "," ",Object(y.a)(e.startDate,"MM/dd/yyyy")," until "," ",Object(y.a)(e.endDate,"MM/dd/yyyy"),".")})))))}function q(){var e,t,n=[{id:1,name:"Alice",covidEvents:(e={},Object(l.a)(e,a.LastCloseContact,"8/25/2020"),Object(l.a)(e,a.SymptomsStart,""),Object(l.a)(e,a.PositiveTest,""),e),noSymptomsFor24Hours:!0,isNewPerson:!1,editing:!1},{id:2,name:"Bob",covidEvents:(t={},Object(l.a)(t,a.LastCloseContact,"8/28/2020"),Object(l.a)(t,a.SymptomsStart,""),Object(l.a)(t,a.PositiveTest,""),t),noSymptomsFor24Hours:!0,isNewPerson:!1,editing:!1}],o=Object(u.b)(n),r=Object(u.b)([]),s=Object(u.b)(void 0),m=Object(u.b)(o.length+1),d=Object(u.b)(void 0);return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"navbar navbar-dark bg-dark shadow-sm"},c.a.createElement("div",{className:"container d-flex justify-content-between"},c.a.createElement("a",{href:"#",className:"navbar-brand d-flex align-items-center"},c.a.createElement("strong",null,"Covid Quarantine Calculator")),c.a.createElement("div",{className:"white f7 fw5"},"This page is a work in progress. Its instructions may be incorrect. Consult"," ",c.a.createElement("a",{href:"https://multco.us/novel-coronavirus-covid-19/if-you-have-been-around-someone-covid-19"},"the MultCo website")," ","or the latest CDC guildlines for accurate Covid information."," "))),c.a.createElement("main",{className:"row"},c.a.createElement("div",{className:"col-md-5"},c.a.createElement(D,{membersState:o,inHouseExposureEventsState:r,editingState:s,editingDateFieldState:d,addNewPerson:function(){var e,t=m.get(),n={id:t,name:"Person ".concat(C(1e3)),covidEvents:(e={},Object(l.a)(e,a.LastCloseContact,""),Object(l.a)(e,a.SymptomsStart,""),Object(l.a)(e,a.PositiveTest,""),e),noSymptomsFor24Hours:!0,isNewPerson:!0,editing:!0};m.set((function(e){return e+1})),o.set((function(e){return[].concat(Object(i.a)(e),[n])})),s.set(t);var c=o.get().map((function(e){if(P(e))return{contagiousPerson:e.id,quarantinedPerson:n.id,exposed:!0,ongoing:!0,date:""}}));r.merge(Object(h.compact)(c))}})),c.a.createElement("div",{className:"col-md-7"},c.a.createElement(j,{membersState:o,editing:s.get(),editingDateFieldState:d,inHouseExposureEvents:r.get()}))))}var T=document.getElementById("root");s.a.render(c.a.createElement(q,null),T)}},[[31,1,2]]]);
//# sourceMappingURL=main.18add6cc.chunk.js.map