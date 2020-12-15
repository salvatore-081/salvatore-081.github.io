(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{FyW3:function(t){t.exports=JSON.parse('{"fullName":"Salvatore Emilio","bio":"Sono un Developer Full Stack. Faccio della mia passione il mio lavoro! Di seguito troverete le mie info ed alcuni dei miei progetti.","terminal":{"cv":{"title":"SalvatoreEmilioCV.pdf","content":"tbd"},"links":[{"title":"(+39) 347 3413737","content":"tel:+393473413737"},{"title":"salvatore.e@outlook.it","content":"mailto:salvatore.e@outlook.it"},{"title":"GitHub","content":"https://github.com/salvatore-081"},{"title":"LinkedIn","content":"https://www.linkedin.com/in/salvatore-emilio"}],"static":[{"title":"> Salvatore.localit\xe0Attuale","content":"\\"Napoli (IT)\\""},{"title":"> Salvatore.interessi","content":"[\\"tecnologia\\", \\"natura\\", \\"cucina\\", \\"videgiochi\\"]"},{"title":"> Salvatore.skills","content":"[\\"Angular\\", \\"React\\", \\"Node.js\\", \\"Go\\", \\"Python\\", \\"Java\\", \\"GraphQL\\", \\"REST API\\", \\"Git\\"]"}]},"projects":[{"title":"fullstackopen","img":"assets/images/fullstackopen-img.png","description":"Attualmente con il corso offerto dall\'universit\xe0 di Helsinki Full stack open 2020 sto migliorando la mia figura come fullstack developer attraverso lo studio di React, Redux, Node.js, MongoDB, GraphQL e TypeScript.","tags":["React","Redux","Node.js","MongoDB","GraphQL","TypeScript"],"links":[{"title":"GitHub","content":"https://github.com/salvatore-081/fullstackopen"}]},{"title":"Virtual Piano","img":"assets/images/virtual-piano-img.png","description":"Virtual Piano nasce come conseguenza al corso come FrontEnd Developer offerto da Hyperskill. I tasti del pianoforte utilizzano l\'elemento HTML a cui viene associato in JavaScript un EventListener per riprodurne la nota corrispondente","tags":["JavaScript","HTML5","CSS3"],"links":[{"title":"GitHub","content":"https://github.com/salvatore-081/salvatore-081.github.io/tree/master/Projects/virtual-piano"},{"title":"Demo","content":"assets/projects/virtual-piano/index.html"}]},{"title":"Il mio sito personale","img":"assets/images/my-website-img.png","description":"Ho sviluppato questo sito web in HTML5 e CSS3 con l\'ausilio dello JavaScript per alcune semplici animazioni. Ho seguito le linee guide del Responsive Design per permettere una corretta fruizione su tutti i dispositivi.","tags":["JavaScript","HTML5","CSS3"],"links":[{"title":"GitHub","content":""}]},{"title":"Random Quote","img":"assets/images/random-quote-img.png","description":"Random Quote \xe8 un semplice applicativo che restituisce a schermo una citazione casuale selezionata in modo random da un pool precaricato.","tags":["JavaScript","HTML5","CSS3"],"links":[{"title":"GitHub","content":""},{"title":"Demo","content":"assets/projects/random-quote/index.html"}]}],"contacts":[{"title":"(+39) 347 3413737","content":"(+39) 347 3413737"},{"title":"salvatore.e@outlook.it","content":"salvatore.e@outlook.it"},{"title":"GitHub","content":"https://github.com/salvatore-081"},{"title":"LinkedIn","content":"https://www.linkedin.com/in/salvatore-emilio"}],"copyright":"Sviluppato da Salvatore Emilio \xa9 2020"}')},"ct+p":function(t,e,n){"use strict";n.r(e),n.d(e,"HomePageModule",(function(){return y}));var i=n("ofXK"),o=n("TEn/"),a=n("3Pt+"),r=n("fXoL");let c=(()=>{class t{}return t.\u0275mod=r.Fb({type:t}),t.\u0275inj=r.Eb({factory:function(e){return new(e||t)},imports:[[i.b,a.a,o.g]]}),t})(),l=(()=>{class t{}return t.\u0275mod=r.Fb({type:t}),t.\u0275inj=r.Eb({factory:function(e){return new(e||t)},imports:[[i.b]]}),t})(),s=(()=>{class t{}return t.\u0275mod=r.Fb({type:t}),t.\u0275inj=r.Eb({factory:function(e){return new(e||t)},imports:[[i.b]]}),t})();var b=n("tyNb"),d=n("FyW3");let p=(()=>{class t{constructor(){this.dataJson=d,this.data=this.dataJson}getFullName(){return this.data.fullName}getBio(){return this.data.bio}getTerminalCV(){return this.data.terminal.cv}getTerminalLinks(){return this.data.terminal.links}getTerminalStatic(){return this.data.terminal.static}getProjects(){return this.data.projects}getContacts(){return this.data.contacts}getCopyright(){return this.data.copyright}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=r.Db({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),g=(()=>{class t{constructor(){}ngOnInit(){}goToProjects(){document.getElementById("projectsContainer").scrollIntoView({block:"start",behavior:"smooth"})}goToContacts(){document.getElementById("contactsContainer").scrollIntoView({block:"start",behavior:"smooth"})}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Bb({type:t,selectors:[["app-header"]],decls:7,vars:1,consts:[[3,"translucent"],[1,"header"],[1,"animated-link",3,"click"]],template:function(t,e){1&t&&(r.Kb(0,"ion-header",0),r.Kb(1,"ion-toolbar",1),r.Kb(2,"ion-title"),r.Kb(3,"a",2),r.Rb("click",(function(){return e.goToProjects()})),r.cc(4,"Progetti"),r.Jb(),r.Kb(5,"a",2),r.Rb("click",(function(){return e.goToContacts()})),r.cc(6,"Contatti"),r.Jb(),r.Jb(),r.Jb(),r.Jb()),2&t&&r.Vb("translucent",!0)},directives:[o.c,o.f,o.e],styles:["ion-header[_ngcontent-%COMP%]{margin:0 auto;text-align:right}ion-header[_ngcontent-%COMP%]:after{background-image:none}.header[_ngcontent-%COMP%]{--background:#fbfbfb}"]}),t})();function m(t,e){if(1&t&&(r.Kb(0,"div"),r.Kb(1,"p",5),r.cc(2),r.Jb(),r.Kb(3,"p",6),r.cc(4),r.Jb(),r.Jb()),2&t){const t=e.$implicit;r.xb(2),r.dc(t.title),r.xb(2),r.dc(t.content)}}let u=(()=>{class t{constructor(t){this.dataService=t}ngOnInit(){this.terminalLinks=this.dataService.getTerminalLinks(),this.terminalStatic=this.dataService.getTerminalStatic(),this.terminalCV=this.dataService.getTerminalCV()}}return t.\u0275fac=function(e){return new(e||t)(r.Hb(p))},t.\u0275cmp=r.Bb({type:t,selectors:[["app-terminal"]],decls:31,vars:11,consts:[[1,"terminalContainer"],[1,"terminalHeader"],[1,"greenDot"],[1,"yellowDot"],[1,"redDot"],[1,"whiteText"],[1,"orangeText"],[1,"linkText",3,"href"],[4,"ngFor","ngForOf"],[1,"terminalLastRow"]],template:function(t,e){1&t&&(r.Kb(0,"div",0),r.Kb(1,"div",1),r.Ib(2,"div",2),r.Ib(3,"div",3),r.Ib(4,"div",4),r.Jb(),r.Kb(5,"p",5),r.cc(6,"> Salvatore.contatti"),r.Jb(),r.Kb(7,"p",6),r.cc(8,'[ "'),r.Kb(9,"a",7),r.cc(10),r.Jb(),r.cc(11,'", "'),r.Kb(12,"a",7),r.cc(13),r.Jb(),r.cc(14,'", "'),r.Kb(15,"a",7),r.cc(16),r.Jb(),r.cc(17,'", "'),r.Kb(18,"a",7),r.cc(19),r.Jb(),r.cc(20,'"] '),r.Jb(),r.Kb(21,"p",5),r.cc(22,"> Salvatore.curriculum"),r.Jb(),r.Kb(23,"p",6),r.cc(24,'"'),r.Kb(25,"a",7),r.cc(26),r.Jb(),r.cc(27,'"'),r.Jb(),r.bc(28,m,5,2,"div",8),r.Kb(29,"p",9),r.cc(30,"> "),r.Jb(),r.Jb()),2&t&&(r.xb(9),r.Wb("href",e.terminalLinks[0].content,r.Zb),r.xb(1),r.dc(e.terminalLinks[0].title),r.xb(2),r.Wb("href",e.terminalLinks[1].content,r.Zb),r.xb(1),r.dc(e.terminalLinks[1].title),r.xb(2),r.Wb("href",e.terminalLinks[2].content,r.Zb),r.xb(1),r.dc(e.terminalLinks[2].title),r.xb(2),r.Wb("href",e.terminalLinks[3].content,r.Zb),r.xb(1),r.dc(e.terminalLinks[3].title),r.xb(6),r.Wb("href",e.terminalCV.content,r.Zb),r.xb(1),r.dc(e.terminalCV.title),r.xb(2),r.Vb("ngForOf",e.terminalStatic))},directives:[i.h],styles:['.terminalContainer[_ngcontent-%COMP%]{margin-top:5%;background-color:rgba(72,78,96,.9);padding-bottom:10px;box-shadow:0 5px 20px -5px #2b2b2b;border-radius:7px 7px 7px 7px}.terminalHeader[_ngcontent-%COMP%]{background:#484e60;background:linear-gradient(0deg,#484e60,#323643);height:2.2vmax;max-height:28px;display:flex;flex-direction:row;border-radius:7px 7px 0 0}@media (orientation:landscape){.greenDot[_ngcontent-%COMP%], .redDot[_ngcontent-%COMP%], .yellowDot[_ngcontent-%COMP%]{display:inline-block;border-radius:50%;width:1.2vw;height:1.2vw}.redDot[_ngcontent-%COMP%], .yellowDot[_ngcontent-%COMP%]{margin:auto auto auto 0}.greenDot[_ngcontent-%COMP%]{margin:auto auto auto 92%;background-color:#52ff52}.yellowDot[_ngcontent-%COMP%]{background-color:#ffff3d}.redDot[_ngcontent-%COMP%]{background-color:#ff5252}}.whiteText[_ngcontent-%COMP%]{font-size:.8em;padding-top:2%;padding-left:3%;color:#ddd}.orangeText[_ngcontent-%COMP%]{font-size:.8em;color:#ffc760;margin-top:-18px;padding-left:3.7%}.linkText[_ngcontent-%COMP%]{font-size:1em;color:#9fffff;text-decoration:none}.terminalLastRow[_ngcontent-%COMP%]{font-size:.8em;padding-left:3%;color:#ddd}.terminalLastRow[_ngcontent-%COMP%]:after{content:"";border-style:solid;border-width:0 3px 0 0;padding-left:5px;-webkit-animation:blink-info .5s step-end infinite alternate;animation:blink-info .5s step-end infinite alternate}@media (orientation:portrait){.orangeText[_ngcontent-%COMP%]{margin-top:-3%}}.topic[_ngcontent-%COMP%]{font-weight:700;width:10%;margin:auto;padding-bottom:10px;border-bottom:7px solid}.projectsContainer[_ngcontent-%COMP%]{margin-top:10%;text-align:center}']}),t})();var f=n("S2eG");function h(t,e){if(1&t&&r.Ib(0,"app-project",10),2&t){const t=e.$implicit;r.Vb("title",t.title)("img",t.img)("description",t.description)("tags",t.tags)("links",t.links)}}function v(t,e){1&t&&(r.Kb(0,"span"),r.cc(1,"||"),r.Jb())}function k(t,e){if(1&t&&(r.Kb(0,"span"),r.Kb(1,"a",11),r.cc(2),r.Jb(),r.bc(3,v,2,0,"span",12),r.Jb()),2&t){const t=e.$implicit,n=e.index;r.xb(1),r.Wb("href",t.content,r.Zb),r.xb(1),r.dc(t.title),r.xb(1),r.Vb("ngIf",n<3)}}const C=[{path:"",component:(()=>{class t{constructor(t){this.dataService=t,this.nameToDisplay="> ",this.typeWriterIndex=0}ngOnInit(){setTimeout(()=>this.typeWriter(),2e3),this.fullNameCharacters=[...this.dataService.getFullName()],this.bio=this.dataService.getBio(),this.projects=this.dataService.getProjects(),this.contactsLinks=this.dataService.getContacts(),this.copyright=this.dataService.getCopyright()}typeWriter(){this.typeWriterIndex<this.dataService.getFullName().length&&(this.nameToDisplay+=this.dataService.getFullName().charAt(this.typeWriterIndex),this.typeWriterIndex++,setTimeout(()=>this.typeWriter(),50))}}return t.\u0275fac=function(e){return new(e||t)(r.Hb(p))},t.\u0275cmp=r.Bb({type:t,selectors:[["app-home"]],decls:21,vars:6,consts:[[3,"fullscreen"],[1,"mainContainer"],[1,"fullNameContainer"],[1,"fullNameContent"],[1,"bioContainer"],["id","projectsContainer",1,"projectsContainer"],[1,"topic"],[3,"title","img","description","tags","links",4,"ngFor","ngForOf"],["id","contactsContainer",1,"contactsContainer"],[4,"ngFor","ngForOf"],[3,"title","img","description","tags","links"],[1,"animated-link",3,"href"],[4,"ngIf"]],template:function(t,e){1&t&&(r.Kb(0,"ion-content",0),r.Kb(1,"div",1),r.Ib(2,"app-header"),r.Kb(3,"div",2),r.Kb(4,"p",3),r.cc(5),r.Jb(),r.Jb(),r.Kb(6,"div",4),r.Kb(7,"p"),r.cc(8),r.Jb(),r.Jb(),r.Ib(9,"app-terminal"),r.Kb(10,"div",5),r.Kb(11,"p",6),r.cc(12,"Progetti"),r.Jb(),r.bc(13,h,1,5,"app-project",7),r.Jb(),r.Kb(14,"div",8),r.Kb(15,"p",6),r.cc(16,"Contatti"),r.Jb(),r.Kb(17,"div"),r.bc(18,k,4,3,"span",9),r.Jb(),r.Jb(),r.Jb(),r.Kb(19,"footer"),r.cc(20),r.Jb(),r.Jb()),2&t&&(r.Vb("fullscreen",!0),r.xb(5),r.dc(e.nameToDisplay),r.xb(3),r.dc(e.bio),r.xb(5),r.Vb("ngForOf",e.projects),r.xb(5),r.Vb("ngForOf",e.contactsLinks),r.xb(2),r.dc(e.copyright))},directives:[o.b,g,u,i.h,f.a,i.i],styles:['.mainContainer[_ngcontent-%COMP%]{width:80%;margin:0 auto}.fullNameContainer[_ngcontent-%COMP%]{display:inline-block;width:80%;margin:auto}@-webkit-keyframes blink{50%{border-color:#fbfbfb}}@keyframes blink{50%{border-color:#fbfbfb}}@-webkit-keyframes blink-info{50%{border-color:rgba(72,78,96,0)}}@keyframes blink-info{50%{border-color:rgba(72,78,96,0)}}.fullNameContent[_ngcontent-%COMP%]{padding-right:10px;font-size:3.5em;font-weight:700;width:auto;margin-left:0}@media (orientation:portrait){.fullNameContent[_ngcontent-%COMP%]{font-size:2rem}}.fullNameContent[_ngcontent-%COMP%]:after{content:"";border-style:solid;border-width:0 .1em 0 0;padding-left:5px;-webkit-animation:blink .5s step-end infinite alternate;animation:blink .5s step-end infinite alternate}.bioContainer[_ngcontent-%COMP%]{margin-top:-5%;line-height:2.8vmax;width:75%}.contactsContainer[_ngcontent-%COMP%], .projectsContainer[_ngcontent-%COMP%]{margin-top:10%;text-align:center}.topic[_ngcontent-%COMP%]{font-weight:700;width:4em;margin:auto;padding-bottom:10px;border-bottom:7px solid}footer[_ngcontent-%COMP%]{padding-top:15%;padding-bottom:2%;text-align:center;font-size:.5em;width:50%;margin:auto}']}),t})()}];let x=(()=>{class t{}return t.\u0275mod=r.Fb({type:t}),t.\u0275inj=r.Eb({factory:function(e){return new(e||t)},imports:[[b.i.forChild(C)],b.i]}),t})(),y=(()=>{class t{}return t.\u0275mod=r.Fb({type:t}),t.\u0275inj=r.Eb({factory:function(e){return new(e||t)},imports:[[i.b,a.a,o.g,x,c,l,s]]}),t})()}}]);