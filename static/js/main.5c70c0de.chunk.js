(this["webpackJsonpicons-role-test"]=this["webpackJsonpicons-role-test"]||[]).push([[0],{35:function(e,n,i){},36:function(e,n,i){"use strict";i.r(n);var t=i(1),r=i(0),s=i.n(r),u=i(17),a=i.n(u),c=i(18),h=i(2),d=i(20),l=i(21),g=i(9),o=Object(r.forwardRef)((function(e,n){var i=e.id,r=e.question,s=e.answers,u=e.value,a=void 0===u?[]:u,c=e.onChange;return Object(t.jsxs)("div",{children:[r,Object(t.jsx)("ul",{children:s.map((function(e,n){return Object(t.jsx)("li",{children:Object(t.jsxs)("div",{style:{display:"grid",rowGap:"8px"},children:[e,Object(t.jsx)("input",{onChange:c,type:"number",name:"".concat(i,".").concat(n),value:a[n],id:i})]})},n)}))})]})})),m=i(8),b=[["B","M","S","T","U","W/W","K","P","N/E"],["T","U","B","M","N/E","P","W/W","S","K"],["K","P","U","N/E","T","W/W","S","B","M"],["W/W","S","T","N/E","K","P","U","M","B"],["M","K","W/W","B","U","T","N/E","P","S"],["N/E","T","K","P","B","M","U","W/W","S"],["U","B","P","S","W/W","M","N/E","K","T"]],f=function(){var e=Object(r.useState)(null),n=Object(g.a)(e,2),i=n[0],s=n[1],u=Object(r.useState)(0),a=Object(g.a)(u,2),c=a[0],h=a[1],f=Object(r.useState)(m.a.map((function(){return!1}))),z=Object(g.a)(f,2),w=z[0],k=z[1],p=Object(r.useState)(),j=Object(g.a)(p,2),v=j[0],I=j[1],O=Object(r.useState)({questions:m.a.map((function(){return Array(9).fill(0).map((function(){return""}))}))}),A=Object(g.a)(O,2),M=A[0],S=A[1],x=Object(r.useCallback)((function(){var e=M.questions[c].reduce((function(e,n){return e+ +n}),0);I(e<10?"Zu wenig! Bitte vergeben Sie genau 10 Punkte.":e>10?"Zu viel! Bitte vergeben Sie genau 10 Punkte.":void 0)}),[M,I,c]);return Object(r.useEffect)((function(){x()}),[M,c,x]),Object(t.jsxs)("main",{children:[Object(t.jsxs)("header",{children:[Object(t.jsx)("h2",{children:"Teamrollen-Selbsteinsch\xe4tzung"}),Object(t.jsx)("p",{children:"Folgender Test, der auf Annahmen des Psychologen Meredith Belbin aufbaut, dient dazu, die optimale Rolle in einem Team f\xfcr dich zu finden. Das Ergebnis darf dabei jedoch nicht als absolut aufgefasst werden, sondern soll die Aufmerksamkeit auf pers\xf6nliches Entwicklungspotential lenken. Es ist wichtig zu wissen, dass es keine Wertigkeit zwischen den einzelnen Rollen gibt. Weder ist ein Beobachter besser als ein Umsetzer noch umgekehrt. Die Rollen zeigen stattdessen m\xf6gliche St\xe4rken und Schw\xe4chen der eigenen Art, Dinge anzugehen, und er\xf6ffnen so M\xf6glichkeiten, die eigenen Kompetenzen zielf\xfchrend einzusetzen."}),Object(t.jsxs)("p",{children:["dir einen oder mehrere Rollentypen zuzuordnen, verteile je Frage 1-7 exakt zehn Punkte auf die Alternativen a bis i: Aussagen, denen du zustimmen kannst, verteilst du relativ zu den \xfcbrigen Antwortm\xf6glichkeiten viele Punkte. Je st\xe4rker die Punkte aufgeteilt werden, desto unklarer f\xe4llt das Ergebnis aus. Mut zu klaren Entscheidungen ist also angemessen! Wenn du mit der Bearbeitung fertig bist, gib deinen Bogen Janosch oder Alex. Um Anonymit\xe4t zu gew\xe4hrleisten, versehe deinen Bogen bitte mit einem Pseudonym. Dein Ergebnis mit der Beschreibung deiner Teamrolle inklusive St\xe4rken und Schw\xe4chen findest du im htmlForum des Kurses, sobald die Frageb\xf6gen ausgewertet sind.",Object(t.jsx)("br",{}),"Viel Spa\xdf!"]})]}),Object(t.jsx)("hr",{}),!i&&Object(t.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n={K:0,U:0,"N/E":0,B:0,M:0,"W/W":0,T:0,S:0,P:0};m.a.forEach((function(e,i){e.answers.forEach((function(e,t){n[b[i][t]]+=+M.questions[i][t]}))}));var i=Object.entries(n).reduce((function(e,n){var i=Object(g.a)(n,2),t=i[0],r=i[1];return e.value<r&&(e.key=t,e.value=r),e}),{key:"",value:0});s(i.key)},style:{display:"grid",rowGap:"12px"},children:[Object(t.jsx)("span",{style:{color:"red"},children:w[c]&&v}),Object(t.jsx)(o,{id:"questions.".concat(c),onChange:function(e){var n=e.target,i=n.name,t=n.value;if(!(t>10)){var r=M;!function(e,n,i){for(var t=function(e){return e?("["===e[0]&&(e=e.substr(1)),e.replace("[",".").replace("]","")):""}(n).split(".").filter((function(e){return""!==e}));t.length>1;)e=e[t.shift()];e[t.shift()]=i}(r,i,t),S(Object(l.a)({},r)),k((function(e){return e[c]=!0,Object(d.a)(e)}))}},value:M.questions[c],question:c.toString()+". "+m.a[c].description,answers:m.a[c].answers}),Object(t.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[Object(t.jsx)("button",{type:"button",onClick:function(e){e.preventDefault(),h((function(e){return e-1}))},disabled:0===c,children:"Zur\xfcck"}),c<m.a.length-1?Object(t.jsx)("button",{type:"submit",onClick:function(e){e.preventDefault(),h((function(e){return e+1}))},disabled:!!v,children:"Weiter"}):Object(t.jsx)("button",{type:"submit",style:{cursor:"pointer"},children:"Auswerten"})]})]}),i&&"Dein Ergebnis lautet ".concat(i)]})},z=function(){return Object(t.jsx)(c.a,{basename:"/icons-rollentest",children:Object(t.jsx)(h.c,{children:Object(t.jsx)(h.a,{exact:!0,path:"/",component:f})})})};i(35);a.a.render(Object(t.jsx)(s.a.StrictMode,{children:Object(t.jsx)(z,{})}),document.getElementById("root"))},8:function(e){e.exports=JSON.parse('{"a":[{"description":"Der Grund, warum ich meine Arbeit liebe:","answers":["Ich habe gerne neue Situationen und erdenke so viele L\xf6sungsm\xf6glichkeiten wie m\xf6glich.","Ich bin in erster Linie daran interessiert, praktische L\xf6sungen zu finden, also L\xf6sungen, die wirklich funktionieren.","Ich mag es, mein Fachwissen bei einer herausfordernden Aufgabe einzubringen.","Ich habe gerne das Gef\xfchl, dass ich gute Verbindungen zwischen Menschen schaffe.","Ich \xfcbe starken Einfluss auf Entscheidungsprozesse aus.","Bei der Arbeit treffe ich viele Leute, die Interessantes zu bieten haben.","Ich mag es, Leute zur \xdcbereinstimmung mit Ma\xdfnahmen zu bringen, die durchgef\xfchrt werden m\xfcssen.","Ich f\xfchle mich immer dann 100%ig, wenn ich mich einer Aufgabe voll widmen kann.","Ich mag Gelegenheiten, die meine Vorstellungskraft herausfordern."]},{"description":"Meine charakteristische Art, in einer Gruppe zu arbeiten:","answers":["Ich finde es interessant, meine Kollegen besser kennen zu lernen, um mit Ihnen besser auszukommen.","Ich scheue mich nicht, gegen die Meinung anderer zu diskutieren oder die Position einer Minderheit zu verteidigen.","Gew\xf6hnlich bringe ich die Argumente, um unpassende Vorschl\xe4ge zu Fall zu bringen.","Ich denke, dass ich bestechende Ma\xdfnahmenpl\xe4ne schmieden kann, die dann auch zu Aktionen f\xfchren.","Ich habe die Gabe, unerwartet Alternativen auf den Tisch zu bringen statt \\"alten Wein in neuen Schl\xe4uchen\\" zu pr\xe4sentieren.","Wenn es um das L\xf6sen von Aufgaben im Team geht, bin ich eher als Perfektionist einzusch\xe4tzen.","Ich mag es, n\xfctzliche Kontakte auch au\xdferhalb der aktuellen Arbeitsgruppe zu haben.","Wenn es um die L\xf6sung einer Aufgabe geht, widme ich mich dieser mit Liebe zum Detail.","Wenn etwas angepackt werden muss, wei\xdf ich auf Anhieb zu bestimmen, was getan werden muss, auch wenn ich an den Meinungen aller interessiert bin."]},{"description":"Mein Verhalten, wenn ich mit anderen in einem Projekt arbeite:","answers":["Ich habe Erfolg darin, Menschen anzuleiten ohne sie in eine Richtung zu dr\xe4ngen.","Meine Wachsamkeit bewahrt uns vor Ungenauigkeit und davor, Dinge zu vergessen.","Ich dr\xe4nge auf konkrete Taten um sicher zu sein, dass keine Zeit in Meetings vertan wird und darauf, Wichtiges von Unwichtigem zu trennen.","Man kann sicher sein, dass ich neue und grundlegende Ideen einbringe.","Ich bin immer bereit, eine gute Idee einzubringen, wenn es alle weiterbringt.","Ich halte immer Ausschau nach neuen Ideen und Entwicklungen","Ich bin \xfcberzeugt, andere mit meinem breiten Wissensspektrum und meinen F\xe4higkeiten der L\xf6sung ein gutes St\xfcck n\xe4her zu bringen.","Ich bin \xfcberzeugt, dass ich besonders mit meiner F\xe4higkeit zu beurteilen einen wichtigen Beitrag zur Entscheidungsfindung beitrage.","Andere k\xf6nnen sicher sein, dass ich alle bedeutenden Fragen behandle."]},{"description":"Was ich zu einem Team beitragen kann:","answers":["Ich denke, dass ich in der Lage bin, neue Alternativen zu entdecken und anzuwenden.","Meine F\xe4higkeit liegt in meiner Fachkenntnis, die ich gerne einsetze, um die Aufgabe voranzubringen.","Ich kann mit allen Leuten auskommen.","Ideen einzuwerfen, ist eine meiner naturgegebenen Gaben.","Meine F\xe4higkeit liegt darin, Leute zu fordern und zu f\xf6rdern, wenn ich merke, dass sie einen wesentlichen Beitrag leisten k\xf6nnen.","Mein effizientes Arbeiten erlaubt mir, Dinge (z. B. Projekte) sauber abzuschlie\xdfen.","Ich bin darauf vorbereitet, f\xfcr eine Weile unpopul\xe4r zu sein, wenn es zu Ergebnissen f\xfchrt, die wertvoll sind.","Normalerweise realisiere ich, was m\xf6glich und realistisch ist.","Ich kann Gr\xfcnde f\xfcr alternative Vorgehensweisen liefern, ohne mein eigentliches Ziel aus den Augen zu verlieren."]},{"description":"Meine m\xf6glichen Schw\xe4chen bei der Arbeit in einem Team:","answers":["Ich f\xfchle mich nur wohl, wenn Besprechungen gut strukturiert, also unter Kontrolle sind und gut geleitet werden.","Wenn Leute zu einem Thema gute Ideen haben, stimme ich zu schnell zu, ohne die Sache gr\xfcndlich diskutiert zu haben.","Ich laufe Gefahr, zu viel zu reden, wenn ich neue Ideen habe.","Normalerweise habe ich keine sehr starke Meinung. Als Konsequenz stimme ich zu schnell anderen zu.","In Situationen, in denen etwas passieren muss, werde ich gelegentlich als dr\xe4ngelnd und autorit\xe4r wahrgenommen.","Ich finde es schwierig, schnell das Kommando zu \xfcbernehmen \u2013 vielleicht, weil ich sehr sensibel f\xfcr die Stimmungen in der Gruppe bin.","Ich habe die Tendenz, mit meinen Ideen \u201eabzuheben\\" und den Kontakt zu dem, was tats\xe4chlich vor sich geht, zu verlieren.","Meine Kollegen meinen, dass ich mich unn\xf6tigerweise mit m\xf6glichen Fehlschl\xe4gen aufhalte.","Ich f\xfchle mich wohl, wenn ich mich detailliert mit einer eigenen Aufgabe auseinandersetzen kann."]},{"description":"Mein Verhalten, wenn mir pl\xf6tzlich eine schwierige Aufgabe \xfcbertragen wird, die unter Zeitdruck und mit neuen, mir unbekannten Leuten zu bew\xe4ltigen ist:","answers":["Ich bevorzuge es, mich zur\xfcckzuhalten, um erst einmal die Lage zu sondieren, bevor ich mit Vorschl\xe4gen komme.","Ich suche sofort nach M\xf6glichkeiten der Zusammenarbeit mit den Leuten, die mir am meisten zusagen.","Ich suche sofort nach einer M\xf6glichkeit, die Aufgabe anzupacken, indem ich festlege, welche Leute am besten welchen Beitrag leisten sollen.","Mein Gef\xfchl sagt mir, was mehr oder weniger dringend ist und wie die Zeitplanung auszusehen hat.","Ich bleibe ruhig und sammle meine F\xe4higkeiten, um objektiv nachzudenken.","Ich arbeite immer auf das Ziel zu - wenn auch manchmal nur in kleinen Schritten.","Ich werde die F\xfchrung \xfcbernehmen, wenn ich feststelle, dass die Gruppe keinen Fortschritt macht.","Ich rege unverz\xfcglich Diskussionen an, um neue Sichtweisen zu provozieren und den L\xf6sungsprozess zu starten.","Ich gliedere mich sofort in die Gruppe ein und warte darauf, dass mir eine Aufgabe \xfcbertragen wird, der ich mich widmen kann."]},{"description":"Probleme, mit denen ich k\xe4mpfe, w\xe4hrend ich in einer Gruppe arbeite:","answers":["Ich zeige h\xe4ufig Ungeduld denen gegen\xfcber, die den Fortschritt behindern.","Andere Leute kritisieren mich, weil ich zu analytisch vorgehe und nicht meiner Intuition traue.","Meiner \xdcber-Besorgnis, dass Dinge nicht sorgf\xe4ltig genug ausgef\xfchrt werden k\xf6nnten, bringt das Risiko, dass der Projektfortschritt behindert wird.","Es ist schwer f\xfcr mich, das Gesamtziel im Auge zu behalten, ich widme mich lieber der Erf\xfcllung der Teilziele.","Mir wird es schnell langweilig - und dann brauch ich einiges an Ansto\xdf, um wieder aktiv zu werden.","F\xfcr mich ist es schwierig anzufangen, wenn die Ziele noch nicht klar definiert sind.","Ich bin kaum f\xe4hig, Ordnung in die F\xfclle meiner Gedanken und Ideen zu bringen.","Ich unterliege oft der Tendenz, andere Leute um Erledigung der Dinge zu bitten, die ich selber nicht tun mag.","Ich z\xf6gere immer dann meine Gedanken zu \xe4u\xdfern, wenn ich meine, damit eine st\xe4rkere Opposition zu erzeugen."]}]}')}},[[36,1,2]]]);
//# sourceMappingURL=main.5c70c0de.chunk.js.map