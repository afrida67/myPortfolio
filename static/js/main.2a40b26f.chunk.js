(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,a){e.exports=a(38)},25:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(11),l=a.n(i),o=(a(25),a(3)),c=a(4),s=a(7),m=a(5),u=a(6),p=a(39),d=a(40),f=a(41),h=a(43),g=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={isOpen:!1},a.toggle=function(){a.setState({isOpen:!a.state.isOpen})},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(p.a,{className:"navbar fixed-top navbar-expand-sm navbar-dark bg-dark",color:"light",light:!0,expand:"md"},r.a.createElement(d.a,{className:"nav-head",href:"/myPortfolio"},"Afrida"),r.a.createElement(f.a,{onClick:this.toggle}),r.a.createElement(h.a,{isOpen:this.state.isOpen,navbar:!0})))}}]),t}(r.a.Component),b=a(42),E=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={text:"",isDeleting:!1,loopNum:0,typingSpeed:150},a.handleType=function(){var e=a.props.dataText,t=a.state,n=t.isDeleting,r=t.loopNum,i=t.text,l=t.typingSpeed,o=e[r%e.length];a.setState({text:n?o.substring(0,i.length-1):o.substring(0,i.length+1),typingSpeed:n?30:150}),n||i!==o?n&&""===i&&a.setState({isDeleting:!1,loopNum:r+1}):setTimeout(function(){return a.setState({isDeleting:!0})},500),setTimeout(a.handleType,l)},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.handleType()}},{key:"render",value:function(){return r.a.createElement("h1",null,this.props.heading,"\xa0",r.a.createElement("span",null,this.state.text),r.a.createElement("span",{id:"cursor"}))}}]),t}(r.a.Component),v=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.data;return r.a.createElement("section",{id:"home"},r.a.createElement("div",null,r.a.createElement(b.a,{className:"home"},r.a.createElement("h1",{className:"display-3"},"Hello, World!"),r.a.createElement(E,{heading:"root:~$",dataText:e.typewriter}),r.a.createElement("div",{className:"linkNew"},r.a.createElement("nav",null,r.a.createElement("ul",{className:"social"},e.socialProfiles&&e.socialProfiles.map(function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",title:e.title,style:{}},e.className?r.a.createElement("i",{className:e.className}):r.a.createElement("img",{src:e.imageUrl,alt:"social",style:{"margin-top":"-10px"}})))})))))))}}]),t}(n.Component),y=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.data;return r.a.createElement("section",{id:"about"},r.a.createElement("h1",{className:"border_new"},r.a.createElement("i",{className:"fa fa-user"})," About Me"),r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("p",null,e.intro,"..."),r.a.createElement("p",null,"I'm ",e.name,", currently working as a ",e.position," at ",r.a.createElement("a",{target:"_blank",href:e.curl,rel:"noopener noreferrer"}," ",e.company,".")),r.a.createElement("p",null,"Completed my Bachelor's Degree in Computer Science & Engineering from ",r.a.createElement("a",{target:"_blank",href:e.universityUrl,rel:"noopener noreferrer"},e.universityName," ")," in 2018."),r.a.createElement("p",null,e.aboutMe),r.a.createElement("p",{style:{color:"#0080ff"}},r.a.createElement("i",null,e.quote)),r.a.createElement("p",null,e.aboutMe2),r.a.createElement("p",null,"Mail Me : ",r.a.createElement("a",{href:"mailto:"},e.mail))),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("img",{src:e.profileImage,alt:"Afrida Logo",className:"img-circle shadow up-hover avatar"})))))}}]),t}(n.Component),w=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.data;return r.a.createElement("div",{id:"footer",className:"my-containers"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"section"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("p",{className:"copyright"},"Made with ",r.a.createElement("i",{className:"fa fa-coffee"})," and ",r.a.createElement("i",{className:"fa fa-music"})," by ",r.a.createElement("a",{href:"#a",target:"_blank"},e.name),"  2020 ",r.a.createElement("i",{className:"fa fa-smile-o"}))))))}}]),t}(n.Component),O={name:"Afrida Anzum Aesha",position:"Software Engineer",company:"Dynamic Solution Innovators",curl:"http://www.dsinnovators.com/",profileImage:"https://i.ibb.co/TgJfZqW/imageedit-20-4462098333.jpg",socialProfiles:[{id:"github",url:"https://github.com/afrida67",className:"fa fa-github",title:"Github"},{id:"linkedin",url:"https://linkedin.com/in/afrida-anzum/",className:"fa fa-linkedin",title:"LinkedIn"},{id:"stackoverflow",url:"https://stackoverflow.com/users/5968939/afrida-anzum-aesha?tab=profile",className:"fa fa-stack-overflow",title:"Stack Overflow"},{id:"tumblr",url:"https://afrida67.tumblr.com/",className:"fa fa-tumblr-square",title:"Tumblr"},{id:"researchgate",url:"https://www.researchgate.net/profile/Afrida_Aesha",imageUrl:"https://i.ibb.co/my07357/imageedit-9-5810964466.png",title:"ResearchGate"}],intro:"Let me introduce myself.",aboutMe:"My areas of interest are Algorithms, Data Structures, Design Patterns and Machine Learning. I like to resolve design problems and passionate about learning new technologies. To me",quote:"\u201cLearning without thought is labor lost, thought without learning is perilous\u201d - Confucius",aboutMe2:"When I\u2019m not working on project, I spend that recess hour for problem-solving to benefit myself . Besides that, I love traveling, listening to musics and eating foods :).",universityName:"Military Institute of Science and Technology (MIST)",universityUrl:"https://mist.ac.bd/",typewriter:["I am Afrida.","Welcome to my minimal portfolio.","Want to know more about me?","Please, Scroll Down.","Thank You :)"],mail:"afrida660@gmail.com"},N=(a(35),a(36),a(37),function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(g,null),r.a.createElement(v,{data:O}),r.a.createElement(y,{data:O}),r.a.createElement(w,{data:O}))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[20,1,2]]]);
//# sourceMappingURL=main.2a40b26f.chunk.js.map