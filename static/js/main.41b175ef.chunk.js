(this.webpackJsonpcovidcal=this.webpackJsonpcovidcal||[]).push([[0],{151:function(e,t,n){"use strict";n.r(t);var a,o=n(1),r=n.n(o),s=n(22),i=n.n(s),c=(n(82),n(30)),l=n(45),m=n(13),u=n(36);!function(e){e.LastCloseContact="Most Recent Close Contact",e.SymptomsStart="Illness Onset",e.PositiveTest="Most Recent Positive Test"}(a||(a={}));var d=["#b35806","#e08214","#fdb863","#fee0b6","#d8daeb","#b2abd2","#8073ac","#542788"],v=n(70),f=n.n(v),p=(n(83),n(152)),E=n(49),h=n(153);function g(e){var t=e.questionFieldTextState.get(),n=Object(p.default)(t,"M/dd/yyyy",new Date),a=Object(E.default)(n)?n:new Date;return r.a.createElement("div",{className:""},r.a.createElement("label",{htmlFor:"".concat(e.id,"-").concat(e.questionFieldName)},"Date ",r.a.createElement("span",{className:"f6 fw3"},"mm/dd/yyyy")),r.a.createElement(f.a,{className:"form-control",selected:a,onChange:function(t){var n=Object(E.default)(t)?t:new Date;e.questionFieldTextState.set(Object(h.default)(n,"MM/dd/yyyy"))},name:e.questionFieldName,id:"".concat(e.id,"-").concat(e.questionFieldName)}))}var b=n(46);function y(e){return r.a.createElement("div",{className:"custom-control custom-checkbox mb-3"},r.a.createElement("input",{className:"custom-control-input",checked:e.checked,id:"checkbox-".concat(e.id,"-").concat(e.questionText),type:"checkbox",onChange:e.onChange}),r.a.createElement(b.a,null,r.a.createElement("label",{className:"custom-control-label",htmlFor:"checkbox-".concat(e.id,"-").concat(e.questionText)},e.questionText,e.tooltip&&r.a.createElement(b.b,null,r.a.createElement("i",{"aria-hidden":"true",className:"px-1 fas fa-question-circle link hover-dark-blue gray"}))),e.tooltip&&r.a.createElement(b.c,null,r.a.createElement("div",{className:"f5 gray"},e.tooltip))))}function S(e){var t=e.inHouseExposureEventState.get(),n=t.exposed,a=t.ongoing;return r.a.createElement("div",{className:"mb-3"},r.a.createElement(y,{id:e.id,questionText:"".concat(e.person.name," had close contact with ").concat(e.otherPerson.name),checked:n,onChange:function(){return e.inHouseExposureEventState.exposed.set((function(e){return!e}))}}),n&&r.a.createElement(y,{id:e.id,questionText:"".concat(e.person.name,"'s close contact with ").concat(e.otherPerson.name," is ongoing"),checked:a,onChange:function(){var t=e.inHouseExposureEventState.ongoing,n=!t.get();t.set(n),n?e.inHouseExposureEventState.date.set(""):e.inHouseExposureEventState.date.set(Object(h.default)(new Date,"MM/dd/yyyy"))}}),n&&!a&&r.a.createElement(g,{id:e.id,questionFieldTextState:e.inHouseExposureEventState.date,questionFieldName:"crossExposure-".concat(e.index)}))}function w(e){return r.a.createElement(r.a.Fragment,null,e.meaningfulInHouseExposures.map((function(t,n){var a=e.relevantInHouseExposureEventsState.find((function(e){var n=e.get();return n.quarantinedPerson===t.id||n.contagiousPerson===t.id}));return a?r.a.createElement(r.a.Fragment,null,r.a.createElement(S,{key:e.person.id+"-"+n,id:e.person.id,index:n,person:e.person,otherPerson:t,inHouseExposureEventState:a}),r.a.createElement("hr",null)):r.a.createElement(r.a.Fragment,null)})))}var x=n(6);function N(e){return Boolean(e.covidEvents[a.PositiveTest]||e.covidEvents[a.SymptomsStart])}function O(e){var t=e.personState.get(),n=e.membersState.get(),o=e.personState.covidEvents,s=e.editingPersonState.get(),i=e.editingHouseholdState.get(),c=e.inHouseExposureEventsState.filter((function(e){var n=e.get();return n.contagiousPerson===t.id||n.quarantinedPerson===t.id})),l=c.map((function(e){return e.get()})),d=Object(m.b)(Object.values(a).reduce((function(e,t){return e[t]=""!==o[t].get(),e}),{})),v=d.get(),f=v[a.PositiveTest]||v[a.SymptomsStart];function p(e){return function(t){var n=t.target.checked;if(d[e].set(n),e===a.PositiveTest){var r=Boolean(n||v[a.SymptomsStart]);f!==r&&b(r)}else if(e===a.SymptomsStart){var s=Boolean(n||v[a.PositiveTest]);f!==s&&b(s)}n?o[e].set(Object(h.default)(new Date,"MM/dd/yyyy")):o[e].set("")}}function E(e,n,a){return r.a.createElement(r.a.Fragment,null,r.a.createElement(y,{id:t.id,questionText:n,checked:d[e].get(),onChange:p(e),tooltip:a}),d[e].get()&&r.a.createElement(g,{id:t.id,questionFieldTextState:o[e],questionFieldName:e}))}function b(a){c.map((function(e){return e.set(m.a)}));var o=n.map((function(e){var n=N(e);if(t!==e&&a!==n)return{contagiousPerson:a?t.id:e.id,quarantinedPerson:a?e.id:t.id,exposed:!0,ongoing:!0,date:"",dateMissing:!1,dateInvalid:!1}}));e.inHouseExposureEventsState.merge(Object(x.compact)(o))}var S=n.filter((function(e){return t!==e&&f!==N(e)}));function O(){return r.a.createElement("div",{className:""},Object.entries(t.covidEvents).map((function(e){var n=Object(u.a)(e,2),o=n[0],s=n[1];if(""!==s)return r.a.createElement("div",{className:"f5"},function(e,t,n){switch(e){case a.LastCloseContact:return"Most recent close contact was on ".concat(t,".");case a.PositiveTest:return"Earliest positive test was on ".concat(t,".");case a.SymptomsStart:return"Symptoms started showing on ".concat(t,n?".":" and have not improved.");default:return null}}(o,s,t.noSymptomsFor24Hours))})),Object.values(l).map((function(e){if(e.exposed){var t,a,o=null===(t=n.find((function(t){return t.id===e.quarantinedPerson})))||void 0===t?void 0:t.name,s=null===(a=n.find((function(t){return t.id===e.contagiousPerson})))||void 0===a?void 0:a.name;return e.ongoing?r.a.createElement("div",{className:"f5"},o," has an ongoing exposure to"," ",s,"."):r.a.createElement("div",{className:"f5"},o," exposed to ",s," at"," ",e.date,".")}})))}return s===t.id?r.a.createElement("div",{className:"card shadow-sm mb-2"},r.a.createElement("div",{className:"p-2"},r.a.createElement("div",{className:"mb-3"},r.a.createElement("label",{htmlFor:"".concat(t.id,"-name")},"Name"),r.a.createElement("input",{className:"form-control",value:t.name,name:"name",id:"".concat(t.id,"-name"),type:"text",onChange:function(t){return e.personState.name.set(t.target.value)}})),r.a.createElement("div",{className:"mb-3"},E(a.LastCloseContact,"".concat(t.name," has had close contact to someone presumed covid positive (outside the household)"),r.a.createElement("div",null,"Close contact means any of the following:",r.a.createElement("ul",{className:"mx-3 mb-1"},r.a.createElement("li",null,"You were within 6 feet of them for a total of 15 minutes or more"),r.a.createElement("li",null,"You provided care at home to the person"),r.a.createElement("li",null,"You had direct physical contact with the person (hugged or kissed them)"),r.a.createElement("li",null,"You shared eating or drinking utensils"),r.a.createElement("li",null,"They sneezed, coughed, or somehow got respiratory droplets on you"))," ",r.a.createElement("a",{href:"https://www.cdc.gov/coronavirus/2019-ncov/if-you-are-sick/quarantine.html"},"Link."))),r.a.createElement("hr",null)),r.a.createElement("div",{className:"mb-3"},E(a.PositiveTest,"".concat(t.name," has received a positive test result")),r.a.createElement("hr",null)),r.a.createElement("div",{className:"mb-3"},function(){var n=d[a.SymptomsStart].get();return r.a.createElement(r.a.Fragment,null,r.a.createElement(y,{id:t.id,questionText:"".concat(t.name," has shown positive symptoms"),checked:n,onChange:p(a.SymptomsStart),tooltip:r.a.createElement("span",null,"Consult the"," ",r.a.createElement("a",{href:"https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/symptoms.html"},"CDC website")," ","for a common list of symptoms of Covid."," ")}),n?r.a.createElement(g,{id:t.id,questionFieldTextState:o[a.SymptomsStart],questionFieldName:a.SymptomsStart}):null,r.a.createElement("div",{className:"mb-3"}),n?r.a.createElement(y,{id:t.id,questionText:"".concat(t.name,"'s symptoms have been improved for 24 hours."),checked:e.personState.noSymptomsFor24Hours.get(),onChange:function(){return e.personState.noSymptomsFor24Hours.set((function(e){return!e}))},tooltip:r.a.createElement("span",null,"Improved symptoms are a requirement for you to end isolation. If your symptoms improve AND you have had no fever for 24 hours without the use of medicine, check this box."," ",r.a.createElement("a",{href:"https://multco.us/novel-coronavirus-covid-19/if-you-test-positive-covid-19"},"Link.")," ")}):null)}(),r.a.createElement("hr",null)),r.a.createElement(w,{person:t,meaningfulInHouseExposures:S,relevantInHouseExposureEventsState:c}),r.a.createElement("div",{className:"d-flex justify-content-between align-items-center"},r.a.createElement("button",{className:"btn btn-secondary",onClick:function(){c.map((function(e){return e.set(m.a)})),e.personState.set(m.a),e.editingPersonState.set(void 0)}},r.a.createElement("span",{className:"visually-hidden"},"Remove"),"Remove",r.a.createElement("i",{"aria-hidden":"true",className:"pl2 fas fa-times-circle white"})),r.a.createElement("button",{className:"btn btn-primary",onClick:function(){e.editingPersonState.set(void 0)}},t.isNewPerson?"Submit":"Update")))):r.a.createElement("div",{className:"card shadow-sm mb-2"},r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:""},r.a.createElement("h4",{className:"d-flex justify-content-between align-items-center"},r.a.createElement("span",{className:""},t.name+"",i?null:e.guidance.endDate?e.guidance.infected?" - Isolate":" - Quarantine":null),r.a.createElement("span",null,!s&&r.a.createElement("button",{onClick:function(){e.editingHouseholdState.set(!0),e.editingPersonState.set(t.id)}},r.a.createElement("span",{className:"visually-hidden"},"Edit Person"),r.a.createElement("span",{"aria-hidden":"true",className:"f5 fas fa-pen"})))),!i&&r.a.createElement("p",{className:"lead text-muted"},function(e){if(e.endDate){var t,n=Object(h.default)(e.endDate,"PPPP");if(e.infected)return e.person.noSymptomsFor24Hours?"Until ".concat(n):"Until at least ".concat(n," and 24 hours after symptoms improve");if(null===(t=e.peopleWithOngoingExposureWithSymptoms)||void 0===t?void 0:t.length){var a,o=null===(a=e.peopleWithOngoingExposureWithSymptoms)||void 0===a?void 0:a.join(", ");return"Until 14 days after isolation period ends for ".concat(o," (at least ").concat(n,")")}return"Until ".concat(n)}}(e.guidance))),r.a.createElement("div",{className:"my-3"}),i&&O()))}var j=n(33);function C(e,t){var n=Object(x.flow)(Object(x.map)((function(e){var t=function(e){var t=[e.covidEvents[a.SymptomsStart],e.covidEvents[a.PositiveTest]],n=Object(x.flow)(x.compact,Object(x.map)((function(e){return Object(p.default)(e,"M/dd/yyyy",new Date)})),Object(x.thru)((function(e){return Object(x.min)(e)})))(t);if(n){var o=Object(j.default)(n,10),r=e.noSymptomsFor24Hours?void 0:new Date,s=Object(x.flow)(x.compact,Object(x.thru)((function(e){return Object(x.max)(e)})))([o,r]);return[n,s]}}(e);if(t){var n=Object(u.a)(t,2);return{person:e,infected:!0,startDate:n[0],endDate:n[1]}}return{person:e,infected:!1}})),Object(x.partition)((function(e){return e.infected})))(e),o=Object(u.a)(n,2),r=o[0],s=o[1].map((function(e){return function(e,t,n){var o=e.person,r=Object(x.filter)((function(e){return e.quarantinedPerson===o.id&&e.exposed}))(t),s=Object(x.map)((function(e){var t=n.find((function(t){return t.person.id===e.contagiousPerson}));return e.ongoing?{startDate:t.startDate,endDate:t.endDate,infectionSource:t.person}:{startDate:t.startDate,endDate:Object(p.default)(e.date,"M/dd/yyyy",new Date),infectionSource:t.person}})),i=Object(x.compact)(s(r)),l=function(e,t){var n=e.covidEvents[a.LastCloseContact];if(n){var o=Object(p.default)(n,"M/dd/yyyy",new Date),r={startDate:o,endDate:o,infectionSource:void 0};t=[].concat(Object(c.a)(t),[r])}return t}(o,i),m=Object(x.minBy)((function(e){return e.startDate}),l),u=Object(x.maxBy)((function(e){return e.endDate}),l),d=null===m||void 0===m?void 0:m.startDate,v=void 0;u&&(v=Object(j.default)(u.endDate,14));var f=Object(x.flow)(Object(x.map)((function(e){if(e.ongoing){var t,a=null===(t=n.find((function(t){return t.person.id===e.contagiousPerson})))||void 0===t?void 0:t.person;if(!(null===a||void 0===a?void 0:a.noSymptomsFor24Hours))return null===a||void 0===a?void 0:a.name}})),x.compact)(r);return{person:o,infected:!1,startDate:d,endDate:v,infectionSource:u&&u.infectionSource,peopleWithOngoingExposureWithSymptoms:f}}(e,t,r)}));return[].concat(Object(c.a)(r),Object(c.a)(s))}var P=n(21);function D(e){var t=e.editingHouseholdState.get(),n=e.editingPersonState.get(),a=C(e.membersState.get(),e.inHouseExposureEventsState.get());return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{display:"flex",flexWrap:"wrap",minHeight:e.height.get()+"px"}},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("header",null,r.a.createElement("div",{className:"navbar household"},r.a.createElement("div",{className:"container d-flex justify-content-between"},r.a.createElement("div",null),r.a.createElement(P.b,{to:"/",className:"my-2"},"Close")))),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"my-3"}),t?r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Add your household"),r.a.createElement("p",{className:"lead text-muted"},"Be sure to add everyone in your household.")):r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Our recommendation"),r.a.createElement("p",{className:"lead text-muted"},"The guidance given in this app is based on the latest CDC guidelines for protecting yourself and others from the spread of COVID-19. The same information is available on their"," ",r.a.createElement("a",{href:"https://www.cdc.gov/coronavirus/2019-ncov/if-you-are-sick/index.html"},"COVID-19 webpage"),".")),r.a.createElement("div",null,e.membersState.map((function(t){var n=t.get().id,o=a.find((function(e){return e.person.id===n}));if(o)return r.a.createElement(O,{key:n,personState:t,membersState:e.membersState,inHouseExposureEventsState:e.inHouseExposureEventsState,editingHouseholdState:e.editingHouseholdState,editingPersonState:e.editingPersonState,guidance:o})}))),!n&&r.a.createElement("div",{className:"card shadow-sm mb-2",onClick:function(){e.editingHouseholdState.set(!0),e.addNewPerson()}},r.a.createElement("button",{className:"card-body"},r.a.createElement("h4",{className:""},"Add Person \xa0",r.a.createElement("i",{className:"fa fa-user-plus","aria-hidden":"true"})))),t?r.a.createElement("button",{className:"btn btn-primary my-3",onClick:function(){return e.editingHouseholdState.set(!1)}},"Get recommendation"):r.a.createElement(P.b,{to:"/"},r.a.createElement("button",{className:"btn btn-primary my-3"},"See on calendar")))),r.a.createElement("div",{className:"col-md-6 empty"})))}var H=n(76),k=n(74),F=n(75);function q(e){var t=e.membersState.get();return r.a.createElement("div",{className:"p-3"},r.a.createElement("div",null,r.a.createElement(H.a,{plugins:[k.a,F.a],initialView:"dayGridMonth",events:function(e,t){return Object(x.flow)(Object(x.map)((function(e){if(e.endDate)return{classNames:["TODO"],title:e.person.name,start:e.startDate,end:e.endDate,color:d[e.person.id-1%d.length],textColor:"#000000"}})),x.compact)(C(e,t))}(t,e.inHouseExposureEvents),dateClick:function(e){}})))}function T(e){var t=e.membersState.get();return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",null,r.a.createElement("div",{className:"navbar"},r.a.createElement("div",{className:"container d-flex justify-content-between"},r.a.createElement("div",{className:"navbar-brand d-flex align-items-center"},"COVID Quarantine Calculator (Work in Progress)"),r.a.createElement("div",null,"English")))),r.a.createElement("main",{className:"main",role:"main"},r.a.createElement("section",{className:"jumbotron"},r.a.createElement("div",{className:"container"},t.length?r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Here is our recommendation for your household"),r.a.createElement("p",{className:"lead text-muted"},"The guidance given in this app is based on the latest CDC guidelines for protecting yourself and others from the spread of COVID-19. The same information is available on their"," ",r.a.createElement("a",{href:"https://www.cdc.gov/coronavirus/2019-ncov/if-you-are-sick/index.html"},"COVID-19 webpage"),"."),r.a.createElement("p",null,r.a.createElement(P.b,{to:"/household",className:"btn btn-primary my-2"},"Edit Answers"))):r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Get quarantine and isolation guidance for your household"),r.a.createElement("p",{className:"lead text-muted"},"We'll let you know who should quarantine or isolate, and for how long."),r.a.createElement("p",null,r.a.createElement(P.b,{to:"/household",className:"btn btn-primary my-2"},"Get Started")))))),t.length?r.a.createElement(q,{membersState:e.membersState,inHouseExposureEvents:e.inHouseExposureEventsState.get()}):null,r.a.createElement("footer",{className:"mb-3"},r.a.createElement("div",{className:"container d-flex justify-content-between"},r.a.createElement("a",{href:"https://www.codeforpdx.org/"},"Code For PDX"),r.a.createElement("a",{href:"https://www.cdc.gov/coronavirus/2019-ncov/if-you-are-sick/isolation.html"},"CDC guidelines on isolation"),r.a.createElement("a",{href:"https://www.cdc.gov/coronavirus/2019-ncov/if-you-are-sick/quarantine.html"},"CDC guidelines on quarantine"))))}var M=n(9);function I(){var e=Object(m.b)(window.innerHeight),t=function(){e.set(window.innerHeight)};Object(o.useEffect)((function(){return window.addEventListener("resize",t),function(){return window.removeEventListener("resize",t)}}),[]);var n=Object(m.b)([]),s=Object(m.b)([]),i=Object(m.b)(n.length+1),u=Object(m.b)(!0),d=Object(m.b)(void 0);return r.a.createElement(P.a,{basename:"".concat("/covid-calendar")},r.a.createElement(M.c,null,r.a.createElement(M.a,{path:"/household"},r.a.createElement(D,{addNewPerson:function(){var e,t,o=i.get(),r={id:o,name:"Person ".concat((t=1e3,Math.floor(Math.random()*Math.floor(t)))),covidEvents:(e={},Object(l.a)(e,a.LastCloseContact,""),Object(l.a)(e,a.SymptomsStart,""),Object(l.a)(e,a.PositiveTest,""),e),noSymptomsFor24Hours:!0,isNewPerson:!0,editing:!0};i.set((function(e){return e+1})),n.set((function(e){return[].concat(Object(c.a)(e),[r])})),d.set(o);var m=n.get().map((function(e){if(N(e))return{contagiousPerson:e.id,quarantinedPerson:r.id,exposed:!0,ongoing:!0,date:"",dateMissing:!1,dateInvalid:!1}}));s.merge(Object(x.compact)(m))},editingHouseholdState:u,editingPersonState:d,height:e,inHouseExposureEventsState:s,membersState:n})),r.a.createElement(M.a,{path:"/"},r.a.createElement(T,{membersState:n,inHouseExposureEventsState:s}))))}var L=document.getElementById("root");i.a.render(r.a.createElement(I,null),L)},77:function(e,t,n){e.exports=n(151)},82:function(e,t,n){}},[[77,1,2]]]);
//# sourceMappingURL=main.41b175ef.chunk.js.map