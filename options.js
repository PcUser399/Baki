function generatePage(sub1,sub2,sub3,index,mode=1){
    if(mode==1){
                document.querySelector('.filler').innerHTML=`
                            <div class="mini-title">Tell us about you</div>
                            <div class="subject-input-details-container"><div></div><div class="subject-input-details">
                                                                            <div>bad</div>
                                                                            <div>normal</div>
                                                                            <div>good</div>
                                                                            <div>exelent</div>
                                                                        </div>
                                                                    </div>
                            <div class="sub-container">
                                <div class="subject-level">In ${sub1} I am <div class="input-container">
                                                                                                        <input type="radio" onclick="studentLvl[event.target.dataset.subject] = event.target.dataset.level;special(event)" name="${sub1}" data-level="bad" data-subject="${sub1}">
                                                                                                        <input type="radio" onclick="studentLvl[event.target.dataset.subject] = event.target.dataset.level;special(event)" name="${sub1}" data-level="normal" data-subject="${sub1}"> 
                                                                                                        <input type="radio" onclick="studentLvl[event.target.dataset.subject] = event.target.dataset.level;" name="${sub1}" data-level="good" data-subject="${sub1}"> 
                                                                                                        <input type="radio" onclick="studentLvl[event.target.dataset.subject] = event.target.dataset.level;" name="${sub1}" data-level="exelent" data-subject="${sub1}">    
                                                                        </div>
                                </div>
                                <div class="subject-level">In ${sub2} I am<div class="input-container">
                                                                                                        <input type="radio" onclick="studentLvl[event.target.dataset.subject] = event.target.dataset.level;special(event)"  name="${sub2}" data-level="bad" data-subject="${sub2}">
                                                                                                        <input type="radio" onclick="studentLvl[event.target.dataset.subject] = event.target.dataset.level;special(event)"  name="${sub2}" data-level="normal" data-subject="${sub2}"> 
                                                                                                        <input type="radio" onclick="studentLvl[event.target.dataset.subject] = event.target.dataset.level;"  name="${sub2}" data-level="good" data-subject="${sub2}"> 
                                                                                                        <input type="radio" onclick="studentLvl[event.target.dataset.subject] = event.target.dataset.level;"  name="${sub2}" data-level="exelent" data-subject="${sub2}">    
                                                                        </div>
                                 </div>
                                <div class="subject-level">In ${sub3} I am<div class="input-container">
                                                                                                        <input type="radio" onclick="studentLvl[event.target.dataset.subject] = event.target.dataset.level;special(event)"  name="${sub3}" data-level="bad" data-subject="${sub3}">
                                                                                                        <input type="radio" onclick="studentLvl[event.target.dataset.subject] = event.target.dataset.level;special(event)"  name="${sub3}" data-level="normal" data-subject="${sub3}"> 
                                                                                                        <input type="radio" onclick="studentLvl[event.target.dataset.subject] = event.target.dataset.level;"  name="${sub3}" data-level="good" data-subject="${sub3}"> 
                                                                                                        <input type="radio" onclick="studentLvl[event.target.dataset.subject] = event.target.dataset.level;"  name="${sub3}" data-level="exelent" data-subject="${sub3}">    
                                                                        </div>
                                 </div>
                            </div>
                            `

            }
            else if (mode==2){
                document.querySelector('.filler').innerHTML=`
                <div class="mini-title">What is your objective</div>
                <div class="objective-container">
                    <div class="obj"><button class="obj-button" id="bt18" onclick="objButtonClicked(18)">≥18<img class="obj-img" src="pic18.jpg" id="18"></button></div>
                    <div class="obj"><button class="obj-button" id="bt17" onclick="objButtonClicked(17)">≥17<img class="obj-img" src="pic17.jpg" id="17"></button></div>
                    <div class="obj"><button class="obj-button" id="bt16" onclick="objButtonClicked(16)">≥16<img class="obj-img" src="pic16.jpg" id="16"></button></div>
                </div>`
            }
            else if(mode==3){
                document.querySelector('.filler').innerHTML=`
            <div class="mini-title">Tell us about you</div> 
            <div class="name-input-container">
                <div id="inp1-container" style="position: relative;width: 100%; height: 22.5%;display: flex;justify-content: center;align-items: center;">
                    <input class="name-info" id="first-name" placeholder=".">
                    <label for="first-name">first name</label>
                </div>
                <div id="inp2-container" style="position: relative;width: 100%; height: 22.5%;display: flex;justify-content: center;align-items: center;">
                    <input class="name-info" id="last-name"  placeholder=".">
                    <label for="last-name">Last name</label>
                </div>
            </div>
            `
                initialPageEvents();
            for (let key in nameObj){
                if (nameObj[key]){
                    document.getElementById(key+'-name').value = nameObj[key]
                }
            }
            }
            if (index ==0){
                    document.getElementById('buttons-container').innerHTML = `        <div class="next-back-page-buttons-container">
                                                                                            <button data-how="exit" onclick="updatePage('exit')">Exit</button>
                                                                                            <div></div>
                                                                                        <div style="position:relative;">
                                                                                        <button id="next1" data-how="next" onclick="updatePage('next')"><img src="arrow-next.png"></button></div>
                                                                                    </div>`
                }
            else if (index ==-1){
                    document.getElementById('buttons-container').innerHTML = `        <div class="next-back-page-buttons-container">
                                                                                                <button data-how="back" onclick="updatePage('back')"><img src="arrow-back.png"></button>
                                                                                                <div></div>
                                                                                            <div style="position:relative;">
                                                                                            <button id="end-bt" data-how="finish" onclick="updatePage('finish',event)">Finish</button></div>
                                                                                        </div>`
                }
            else{
                    document.getElementById('buttons-container').innerHTML = `        <div class="next-back-page-buttons-container">
                                                                                             <button data-how="back" onclick="updatePage('back')"><img src="arrow-back.png"></button>
                                                                                            <div></div>
                                                                                            <button data-how="next" onclick="updatePage('next')"><img src="arrow-next.png"></button>
                                                                                       </div>`
                }
        
        }
function  updatePage(how,ev){
    if (how == 'next'){
        if(globalInfo.currentPage<2){
        if(globalInfo.currentPage==-1){
            nameObj.first = document.getElementById('first-name').value;
            nameObj.last = document.getElementById('last-name').value;
            for (let key in nameObj){
                if (!nameObj[key]){
                    document.getElementById('next1').setCustomValidity('Some options weren t selected . Please enter all required data');
                    document.getElementById('next1').reportValidity();
                    return 
                }
            }
            console.log(nameObj)
        }
        globalInfo.currentPage++;
        generatePage(...pagesSubjects[globalInfo.currentPage],globalInfo.currentPage==3? -1:null)
        document.querySelectorAll('input').forEach((el)=>{el.checked = studentLvl[el.dataset.subject]== el.dataset.level ? true:false});    
    }
        else if (globalInfo.currentPage==2){
            globalInfo.currentPage++;
            generatePage(null,null,null,globalInfo.currentPage==3? -1:null,2);
            setAllImgSizeInPxInCurrentWindowSize();
            window.addEventListener('resize',()=>{setAllImgSizeInPxInCurrentWindowSize()});
            updateDisplayForSelectedObj();
        }
    }
    else if (how == 'back'){
        console.log('hi')
        globalInfo.currentPage-=1;
        if(globalInfo.currentPage>-1){
        generatePage(...pagesSubjects[globalInfo.currentPage],null);
        document.querySelectorAll('input').forEach((el)=>{el.checked = studentLvl[el.dataset.subject] == el.dataset.level ? true:false})}
        else{
            generatePage(null,null,null,0,3);
        }
    }
    else if (how == 'exit'){
        openPage(1)
    }
    else if (how == 'finish'){
        if (checkIfAllSelected()){
        openPage(1)}
        else {
            // document.body.style.height='100vh';
            // document.body.style.overflow='hidden';
            ev.target.setCustomValidity('Some options weren t selected . Please enter all required data');
            ev.target.reportValidity();
        }
    }
    console.log(globalInfo.currentPage)
}
function fullScreen(){
        if(window.innerWidth<1000){
        document.documentElement.requestFullscreen() 
        .then(() => {screen.orientation.lock("landscape");openPage(2);
            document.querySelector('video').play();
            document.querySelector('audio').play();
        }) // for phone
        .catch(err => console.error(err));}
        else{
            openPage(2); 
        }
;
}
function  checkIfAllSelected(){
    for (let key in studentLvl){
        if (!studentLvl[key]){
            return false ;
        }
    }
    for (let key in selectedObjective){
        if(selectedObjective[key]){
            return true ;
        }
    }
    return false ;
}
function openPage(nb){
    if (nb==2){
        document.documentElement.innerHTML='';
        var script = document.createElement("script");
        script.innerHTML=`
            var variants = ['MARYAM', 'MARIEM', 'MARIAM', 'MARYEM','REBAI', 'REBA3I', 'REBEI', 'REBE3I','REBAÏ', 'REBA3Ï', 'REBEÏ', 'REBE3Ï'];
            var nameObj = {'first':null , 'last':null}
            var msgNumber = -1
            function  maryamSpecialMsg (subject,msgNumber){
                let obj = ['haya maryam ena mi2akid inni chwaya '+subject+' mahoch bich yi8lbik. Don t say you re not good in it , you re exellent ! ','naarif inni il ritim mahoch sehil winnik te3ba ysr ama hetha maya3nich innik underestimati min rohik you are good in '+subject+' ena mit2aked innik bich titfawak fih',
                    'Maryaam matkolich iinik haka al '+subject+' wlh la  i am sure inni lbak mayo9rob illa matkon exelent fil '+subject
                ]
                return obj[msgNumber];
            } 

            document.body.addEventListener('keydown',event=> {if(event.key=='ArrowRight' && globalInfo.currentPage < 3 ){
                 event.preventDefault();
                 updatePage('next');
         
             }else if (event.key=='ArrowLeft' && globalInfo.currentPage > -1){
                event.preventDefault();
                 updatePage('back');
         
            }})
            var selectedObjective = {bt18:false , bt17:false , bt16:false}
            function setAllImgSizeInPxInCurrentWindowSize(){
                document.getElementById('18').style.height = (document.querySelector('.obj').offsetHeight)*2.3 + 'px';
                document.getElementById('17').style.height = (document.querySelector('.obj').offsetHeight)*1.5 + 'px';
                document.getElementById('16').style.height = (document.querySelector('.obj').offsetHeight)*2.3 + 'px';
            }
            function updateDisplayForSelectedObj(){
                for(let key in selectedObjective){
                    
                    document.getElementById(key).style.width = selectedObjective[key]? '83.5%':'75%' ;
                    document.getElementById(key).style.height = selectedObjective[key]? '90%':'60%' ;
                    document.getElementById(key).style.fontSize = selectedObjective[key]? 'calc(3vw + 1.8vh)':'calc(2.5vw + 1.5vh)' ;
                }
            }
            function objButtonClicked(id){
                reset = [16,17,18]
                document.getElementById("bt"+id).style.scale || (document.getElementById("bt"+id).style.scale = 1)
                ! selectedObjective['bt'+id] ? ( selectedObjective['bt'+id] = true , selectedObjective['bt'+(((id-16+1)%3)+16)] = false , selectedObjective['bt'+(((id-16+2)%3)+16)] = false ):( selectedObjective['bt'+id] = false)
                console.log(selectedObjective)
                updateDisplayForSelectedObj()
            }
            function special(event){
                if( variants.includes(nameObj.first.toUpperCase()) && variants.includes(nameObj.last.toUpperCase()) ){
                    msgNumber++;
                    msgNumber= msgNumber%3;
                    event.target.setCustomValidity(maryamSpecialMsg(event.target.dataset.subject,msgNumber));
                    event.target.reportValidity();
                    }
            }
            var globalInfo = {currentPage:-1} ;
            var studentLvl = {Math : null , Physic : null  , Svt : null , Arabe : null , France : null , Eng : null , Philo : null , Info : null , Option : null}
            var pagesSubjects = [['Math','Physic' ,'Svt'],['Arabe','France' , 'Eng'],['Philo','Info' ,'Option']] ;
            generatePage(null,null,null,0,3);

            if (window.innerWidth< 1000) {
            document.body.addEventListener('click', () => { 
            document.documentElement.requestFullscreen() 
            .then(() => screen.orientation.lock("landscape")) 
            .catch(err => console.error(err));
            })};
            function initialPageEvents (){
                if (window.innerHeight <= 550){

                    document.getElementById('first-name').addEventListener('click',()=>{
                        if (!document.getElementById('inp1-container').classList.contains('floatUp')){
                            document.querySelector('.mini-title').classList.add('shrinkToHidden');
                            document.getElementById('inp1-container').classList.add('floatUp')}
                        else{
                            document.querySelector('.mini-title').classList.remove('shrinkToHidden');
                        document.getElementById('inp1-container').classList.remove('floatUp') ;
                        }
                    })


                    document.getElementById('first-name').addEventListener('blur',()=>{
                        document.querySelector('.mini-title').classList.remove('shrinkToHidden');
                    document.getElementById('inp1-container').classList.remove('floatUp');
                    })


                    document.getElementById('last-name').addEventListener('click',()=>{
                        if (!document.getElementById('inp2-container').classList.contains('floatUpHigh')){
                            document.querySelector('.mini-title').classList.add('shrinkToHidden');
                            document.getElementById('inp1-container').classList.remove('floatUp');
                            document.getElementById('inp1-container').classList.add('floatDown');
                            document.getElementById('inp2-container').classList.add('floatUpHigh')}
                        else{
                            document.querySelector('.mini-title').classList.remove('shrinkToHidden');
                            document.getElementById('inp1-container').classList.remove('floatDown');
                            document.getElementById('inp2-container').classList.remove('floatUpHigh') ;
                        }
                    })

                    document.getElementById('last-name').addEventListener('blur',()=>{
                        document.querySelector('.mini-title').classList.remove('shrinkToHidden');
                    document.getElementById('inp2-container').classList.remove('floatUpHigh');
                    document.getElementById('inp1-container').classList.remove('floatDown');
                    })
                }
                document.getElementById('last-name').addEventListener('keypress',(event)=>{event.key=='Enter' && updatePage('next')})
            }
            `

        
    document.documentElement.innerHTML=`
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet">
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>📘</text></svg>">
        <title>options</title>
        <style>
            * {
                -webkit-tap-highlight-color: transparent;
                }
            body{
                margin: 0px;
                padding-top: 85vh;
                background:black;
                height: 15vh;
            }
            body::-webkit-scrollbar {
             display: none; /* Chrome, Safari */
            }
            #bk{
                position:absolute ;
                top: 0;
                left: 50%;
                transform: translate(-50.05%);
                height: 122.5vh;      
                z-index: -1;  
                overflow: hidden;
            }
            input:-webkit-autofill,
            input:-webkit-autofill:hover, 
            input:-webkit-autofill:focus,
            textarea:-webkit-autofill,
            textarea:-webkit-autofill:hover,
            textarea:-webkit-autofill:focus,
            select:-webkit-autofill,
            select:-webkit-autofill:hover,
            select:-webkit-autofill:focus {
            -webkit-text-fill-color: rgb(33,33,33);
            transition: background-color 5000s ease-in-out 0s;
            }
            video{
                height: 100%;
                width: auto;
            }
            #end:hover+#end-bt{
                scale: 1.2;
                transition: 0.25s;
            }
            .filler{
                position: fixed;
                top: 50%;
                right: 50%;
                transform: translate(50%,-50%);
                backdrop-filter: blur(10px);  
                border: none;
                box-shadow: 0 0 8px gray;
                border-radius: 10px;
                height: 70vh;
                width: 40vw;
                display: flex;
                flex-direction: column;
            }
            .mini-title{
                color: rgb(86, 60, 3);
                padding-top: 2.5vh;
                text-align: center;
                width: 100%;
                height: fit-content;
                font-family: "Pacifico" , cursive;
                font-size: 3.5vw;
                text-shadow: 0 0 6px gray;
                transition: 1s;
            }
            .subject-level{
                color:rgb(74, 74, 74) ;
                padding-left: 1.5vw;
                padding-right: 1.5vw;
                font-size: 2.5vw;
                display: flex;
                justify-content: space-between;
            }
            .sub-container{
                display: grid;
                grid-template-rows: repeat(3,1fr);
                align-items: top;
                height: 100%;
            }
            input[type="radio"]{
                outline: none;
        
                border: none;
                width:2vw ;
                height: 2vw;
                /* appearance: none;   */
                border: 1px solid gray;
                border-radius:1vw ;
                background-color: transparent;
            }
            .input-container{
                display: flex;
                align-items:top ;
                gap: 2.85vw;
            }
            .subject-input-details-container{
                color: brown;
                display: flex;
                justify-content: space-between;
                font-size: 1.75vw;
                padding-left: 1.5vw;
                padding-right: 0.275vw;
            }
            .subject-input-details{
                display: flex;
                gap: 1.15vw;
            }
            @media (max-width: 1500px) { 
            .subject-input-details{
                display: flex;
                gap: 1.25vw;
            }}
            @media (max-width: 1350px) { 
            .subject-input-details{
                display: flex;
                gap: 1.35vw;
            }}
            @media (max-width: 1175px) { 
            .subject-input-details{
                display: flex;
                gap: 1.45vw;
            }}
            @media (max-width: 1000px) { 
            .subject-input-details{
                display: flex;
                gap: 0.65vw;
            }
            .subject-level{
                font-size:2vw;    
            }    
            }
            @media (max-width: 850px) { 
            .subject-input-details{
                display: flex;
                gap: 0.8vw;
            }
            .subject-level{
                font-size:2vw;    
            } }
            @media (max-width: 675px) { 
            .subject-input-details{
                display: flex;
                gap: 1.05vw;
            }
            .subject-level{
                font-size:2vw;    
            } }
            @media (max-width: 615px) { 
            .subject-input-details{
                display: flex;
                gap: 1.35vw;
            }
            .subject-level{
                font-size:2vw;    
            } }
            @media (max-width: 525px) { 
            .subject-input-details{
                display: flex;
                gap: 1.55vw;
            }
            .subject-level{
                font-size:2vw;    
            } }
            .next-back-page-buttons-container{
                width: 100%;
                display: grid;
                height: 15vh;
                grid-template-columns: repeat(3,1fr);
                align-items: center;
                position : fixed ;
                right:0;
                top:85vh;
            }
            .next-back-page-buttons-container>:first-child{
                justify-self: end;
            }
            .next-back-page-buttons-container>:last-child{
                justify-self: start;
            }
            button{
                width: 12.5vw;
                height: 7.5vh;
                border-radius: 500px;
                border: none;
                backdrop-filter: blur(10px);  
                border: none;
                box-shadow: 0 0 8px gray;
                background-color: transparent;
                transition: 0.25s;
                color: red;
                font-size: 1.85vw;
                font-family: "Playwrite España", cursive;
                padding-bottom: 5px;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                outline: none;   
            }
            button:not(.obj-button):hover{
                scale: 1.2;
                transition: 0.25s;
            }
            img:not(.obj-img){
                height: 100%;
                width : auto;
                backdrop-filter: blur(10px);
                background-color: transparent;

            }
            .objective-container{
                height: 100%;
                display: grid;
                grid-template-rows: repeat(3,1fr);
                padding: 0 3vw;
            }
            .obj{
                display: flex;
                justify-content: center;
                align-items: center;
                overflow: hidden;
                position: relative;
            }
            .obj-button{

                height: 60%;
                width: 75%;
                font-size: calc(2.5vw + 1.5vh) ;
                color: white;
                backdrop-filter: blur(0px);
                overflow: hidden;
            }
            .obj-img{
                position: absolute;
                z-index: -1;
            }
            .name-input-container{
                height: 100%;
                width: 100%;
                display: flex;
                flex-direction: column;
                gap: calc(2.5vw + 2.5vh);
                justify-content: center;
                padding-bottom: 10vh;
            }
            .name-info{
                height: 50%;
                width: 70%;
                padding: 1.5vh 2.5vw;
                border: none;
                border-radius: 150px;
                box-shadow: 0 0 8px gray ,0 0 16px gray  ;
                background-color: rgba(255, 255, 255, 0.2);
                outline: none;
                font-size: calc(1vw + 1vh);
            }
            .name-info::placeholder{
                color: transparent;
                font-size: 0.001px;
            }
            .name-info:not(:placeholder-shown) + label {
                transition: 1s;
                transform: translateY(-6.5vh);
            }
            label{
                position: absolute;
                font-size: calc(1vw + 1svh);
                color: #808080;
                z-index: 10;
                transition: 1s;
                cursor:text;

            }
            #inp1-container{
                transition: 1s;
            }
            #inp2-container{
                transition: 1s;
            }
            .floatUp{
                transition: 1s;
                transform: translateY(-12vh);
            }
            .floatDown{
                transition: 1s;
                transform: translateY(14vh);
            }
            .floatUpHigh{
                transition: 1s;
                transform: translateY(-34vh);
            }
            .shrinkToHidden{
                font-size: 0px;
                transition: 1s;
            }
        </style>
    </head>


    <body>
        <div  id="bk"><video autoplay  loop ><source  src="bk.mp4" type="video/mp4"></video></div>
        <audio autoplay  loop id="myAudio">
            <source src="bk.mp3" type="audio/mp3">
        </audio>
        <div class="filler"> 
        </div>
        <div id="buttons-container"></div>
    </body>`;
    document.body.appendChild(script);
}
    else if (nb==1){
        var script2 = document.createElement("script")
        script2.innerHTML=`
            var isLogedIn = false ;
            document.querySelectorAll('input').forEach((el)=>{ isLogedIn || el.setCustomValidity('please press start first')}) ;
            var bt = document.getElementById('str-bt') ;
            var sty = document.getElementById('change') ;
            bt.addEventListener('click',discriptionPage);
            function openDiscriptionPage(){
              bt.removeEventListener('click',discriptionPage);
              bt.style.color = 'transparent';
              bt.style.fontSize = '0.01px' ;
              bt.style.animationPlayState = 'paused';
              bt.style.transition = '0.8s';
              bt.style.marginBottom = '12.5vh';
              bt.style.height='70vh';
              bt.style.width ='40vw';
              bt.style.borderRadius ='45px'; 
              bt.style.boxShadow = '0 0 8px  #FF33CC, 0 0 16px #FF33CC';
              // bt.style.position ='fixed';
            //   document.getElementById('blurAll').style.backdropFilter = 'blur(10px)';
              setTimeout(()=>{
                sty.innerHTML='#str-bt:hover{transition: 0.5s;text-shadow: 0 0 8px blueviolet  ;scale: 1.2;}';
                bt.style.transition = '1.5s';
                bt.style.fontSize = 'calc(1.4vw + 1.4vh)';
                bt.style.padding = '2.75vh 2.25vw';
                bt.style.color = 'white';
                bt.style.alignItems ='flex-start';
                bt.innerHTML='Welcome to Baki a Web only designed to help you through out your baccalauria jurney .Here we can help better orginize your time for better results in a studied efficient way.The Web also suppoerts many other features like a GPA calculator and All Bak official tests . In order to continu we would like to gother some information regarding your level to help you better organize<button id="b1" >exit</button><button id="b2" >continue</button>';
                 const b1 = document.getElementById('b1') ;
                 const b2 = document.getElementById('b2') ;},850);
                bt.dataset.state = 'option';
                setTimeout(()=>b1.addEventListener('click',discriptionPage),2750)
                setTimeout(()=>b2.addEventListener('click',fullScreen),2750)
          }
          function closeDiscriptionPage(){
              b1.removeEventListener('click',discriptionPage);
              b2.removeEventListener('click',fullScreen);
              bt.style.transition = '0.8s';
              bt.style.fontSize = '0.01px';
              bt.style.alignItems ='center';
              setTimeout(()=>{
              bt.style.padding = '0 0';
              bt.style.marginBottom = '5vh';
              bt.style.fontSize = 'min(70px,calc(3vw + 2.75vh),10vh)' ;
              bt.style.alignItems ='center';
              bt.style.animationPlayState = 'running';
              bt.style.height='16vh';
              bt.style.width ='30vw';
              bt.style.borderRadius ='450px';
              // bt.style.position ='fixed';
            //   document.getElementById('blurAll').style.backdropFilter = 'blur(10px)';
              bt.style.boxShadow = ' 0 0 8px rgb(74, 8, 71)'
              bt.innerHTML='Start';
              bt.style.color = 'white';
              bt.dataset.state = 'normal';
              sty.innerHTML='#str-bt:hover{transition: 0.5s;color: rgb(128, 43, 226) !important;/* animation-play-state: paused; */text-shadow: 0 0 8px blueviolet , 0 0 16px blueviolet;scale: 1.25;}';
            },800)
            setTimeout(()=>bt.addEventListener('click',discriptionPage),2000)
              
          }
          function discriptionPage(){
            bt.dataset.state == 'normal' ? openDiscriptionPage():closeDiscriptionPage()
          }
        if (window.innerWidth< 1000) {
            document.body.addEventListener('click', () => { 
            document.documentElement.requestFullscreen() 
            .then(() => screen.orientation.lock("landscape")) 
            .catch(err => console.error(err));
            })};
          `
        document.documentElement.innerHTML='';
        document.documentElement.innerHTML=`
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>baki</title>
        <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet">
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>📘</text></svg>">
        <style>
            * {
                -webkit-tap-highlight-color: transparent;
                }
            img{
                height: 8.5vh;
                min-height: 56px;
                width: auto;
                cursor: pointer;
                transition: 0.25s;
                filter: drop-shadow(0 0 8px rgba(255, 51, 204,1));
            }
            #inp1:hover+img,
            img:hover{
                scale: 1.1;
                transition: 0.25s;
                filter: drop-shadow(0 0 8px rgba(255, 51, 204))  drop-shadow(0 0 12px rgba(255, 51, 204));
            }
            body{
                padding-top: max(calc(8.5vh + 16px), 72px);
                color: rgb(230, 115, 191);
                height: calc(100vh - max(calc(8.5vh + 16px), 72px));
                width :100%;
                margin: 0px;         
                background: linear-gradient(90deg,rgb(20, 10, 44), rgb(11, 11, 41),rgb(20, 10, 44));
                overflow: hidden;
            }
            header{
                display: flex;
                justify-content: space-between;
                padding: 7px 5vw;
                background-color: rgb(23, 0, 46);
                box-shadow: 0px 2px 5px rgba(224, 14, 179, 0.45);
                position: fixed;
                top: 0px;
                right: 0px;
                left: 0px;
            }
            #left-side{
                text-align: center;
                display: flex;
                align-items: center;
                font-size: 30px;
                font-family:'Pacifico', cursive;
                padding-bottom: 3px;
                text-shadow:  0 0 8px #FF33CC, 0 0 16px #FF33CC;
                transition: 0.25s;
                cursor: pointer;
            }
            #inp2:hover+#left-side,
            #left-side:active,
            #left-side:hover{
                scale: 1.2;
                transition: 0.25s;
                text-shadow:  0 0 8px #FF33CC, 0 0 16px #FF33CC, 0 0 24px #FF33CC;
            }
            #str-ct{
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                z-index:10;
            }
            #str-bt{
                height: 16vh;
                width: 30vw;
                margin-bottom: 5vh;
                border-radius: 550px;
                border: none;
                font-family:'Audiowide';
                font-weight: 700;
                background-color: rgb(74, 8, 71);
                color: white;
                font-size:min(70px,calc(3vw + 2.75vh),10vh);
                letter-spacing: 1px;
                box-shadow: 0 0 8px rgb(74, 8, 71);
                animation: glow 1s ease alternate infinite ;
                cursor: pointer;
                transition: 0.5s ease;
                z-index: 5;
                display: flex;
                justify-content: center;
                text-align: center;
                align-items: center;
                position: relative;
            }
            #b2,
            #b1{
                position: absolute;
                bottom: 4vh;
                border: none;
                box-shadow: 0 0 8px gray;
                border-radius: 100px;
                width: 27.5%;
                height: 10%;
                color: white;
                background-color: transparent;
                outline: none;
                cursor: pointer;
                font-style: 'Pacifico', cursive;
                font-size: calc(1.5vw + 1.5vh);
                transition: 0.25s ;
                background-color:rgb(58, 6, 55) ;
            }
            #b1:hover{
                scale: 1.25;
                transition: 0.25s ;
            }
            #b2:hover{
                scale: 1.25;
                transition: 0.25s ;
            }
            #b2{
                right: 15%;
            }
            #b1{
                left :15%
            }
            
            @keyframes glow{
                to {box-shadow:0 0 8px  #FF33CC, 0 0 16px #FF33CC, 0 0 24px #FF33CC , 0 0 32px rgba(255, 51, 204,0.5) , 0 0 64px rgba(255, 51, 204,0.5), 0 0 128px rgba(255, 51, 204,0.75);
                    ;
                }
            }
            
        </style>
        <style id="change">
            #str-bt:hover{
                transition: 0.5s;
                color: rgb(128, 43, 226) !important;
                /* animation-play-state: paused; */
                text-shadow: 0 0 8px blueviolet , 0 0 16px blueviolet;
                scale: 1.25;
            }
        </style>
    </head>

    <body>
        <!-- <div style="width: 100vw; height: 100vh;transition: 0.8s;" id="blurAll"></div> -->
        <header>
            <div style="position: relative;">
            <input inputmode="none" autocomplete="off" id="inp1" style="z-index: 5;position: absolute;border: none ;height: 100%; background-color:transparent ;outline: none;color: transparent;width: 50px; right: 50%;transform: translate(50%);cursor: pointer;" onclick="event.target.reportValidity()">
            <img src="light baki logo.png" class="requiresLogIn">
            </div>
            <div></div>
            <div id="left-side" style="position: relative;">
                <input inputmode="none" autocomplete="off" id="inp2" style="z-index: 5;position: absolute;border: none ;height: 100%;width: 100%;; background-color:transparent ;outline: none;color: transparent; cursor: pointer;" onclick="event.target.reportValidity()">
                <a class="requiresLogIn" title="click here for bac national exams" onclick="window.location.hre=''">Exams</a>
            </div>
        </header>


        <div id="str-ct">
            <div id="str-bt" data-state="normal">
                Start
            </div>
        </div>
    
    </body>`
    document.body.appendChild(script2);
    }
}
