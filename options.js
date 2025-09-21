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
                                                                                                        <input type="radio" onclick="studentLvl[event.target.dataset.subject] = event.target.dataset.level;console.log(studentLvl)" name="${sub1}" data-level="bad" data-subject="${sub1}">
                                                                                                        <input type="radio" onclick="studentLvl[event.target.dataset.subject] = event.target.dataset.level;console.log(studentLvl)" name="${sub1}" data-level="normal" data-subject="${sub1}"> 
                                                                                                        <input type="radio" onclick="studentLvl[event.target.dataset.subject] = event.target.dataset.level;console.log(studentLvl)" name="${sub1}" data-level="good" data-subject="${sub1}"> 
                                                                                                        <input type="radio" onclick="studentLvl[event.target.dataset.subject] = event.target.dataset.level;console.log(studentLvl)" name="${sub1}" data-level="exelent" data-subject="${sub1}">    
                                                                        </div>
                                </div>
                                <div class="subject-level">In ${sub2} I am<div class="input-container">
                                                                                                        <input type="radio" onclick="studentLvl[event.target.dataset.subject] = event.target.dataset.level;console.log(studentLvl)"  name="${sub2}" data-level="bad" data-subject="${sub2}">
                                                                                                        <input type="radio" onclick="studentLvl[event.target.dataset.subject] = event.target.dataset.level;console.log(studentLvl)"  name="${sub2}" data-level="normal" data-subject="${sub2}"> 
                                                                                                        <input type="radio" onclick="studentLvl[event.target.dataset.subject] = event.target.dataset.level;console.log(studentLvl)"  name="${sub2}" data-level="good" data-subject="${sub2}"> 
                                                                                                        <input type="radio" onclick="studentLvl[event.target.dataset.subject] = event.target.dataset.level;console.log(studentLvl)"  name="${sub2}" data-level="exelent" data-subject="${sub2}">    
                                                                        </div>
                                 </div>
                                <div class="subject-level">In ${sub3} I am<div class="input-container">
                                                                                                        <input type="radio" onclick="studentLvl[event.target.dataset.subject] = event.target.dataset.level;console.log(studentLvl)"  name="${sub3}" data-level="bad" data-subject="${sub3}">
                                                                                                        <input type="radio" onclick="studentLvl[event.target.dataset.subject] = event.target.dataset.level;console.log(studentLvl)"  name="${sub3}" data-level="normal" data-subject="${sub3}"> 
                                                                                                        <input type="radio" onclick="studentLvl[event.target.dataset.subject] = event.target.dataset.level;console.log(studentLvl)"  name="${sub3}" data-level="good" data-subject="${sub3}"> 
                                                                                                        <input type="radio" onclick="studentLvl[event.target.dataset.subject] = event.target.dataset.level;console.log(studentLvl)"  name="${sub3}" data-level="exelent" data-subject="${sub3}">    
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
            if (index ==0){
                    document.getElementById('buttons-container').innerHTML = `        <div class="next-back-page-buttons-container">
                                                                                            <button data-how="exit" onclick="updatePage('exit')">Exit</button>
                                                                                            <div></div>
                                                                                        <button data-how="next" onclick="updatePage('next')"><img src="arrow-next.png"></button>
                                                                                    </div>`
                }
            else if (index ==-1){
                    document.getElementById('buttons-container').innerHTML = `        <div class="next-back-page-buttons-container">
                                                                                                <button data-how="back" onclick="updatePage('back')"><img src="arrow-back.png"></button>
                                                                                                <div></div>
                                                                                            <button data-how="finish" onclick="updatePage('finish')">Finish</button>
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
function  updatePage(how){
    if (how == 'next'){
        if(globalInfo.currentPage<2){
        globalInfo.currentPage++;
        generatePage(...pagesSubjects[globalInfo.currentPage],globalInfo.currentPage==3? -1:null)
        document.querySelectorAll('input').forEach((el)=>{el.checked = studentLvl[el.dataset.subject]== el.dataset.level ? true:false})}
        else if (globalInfo.currentPage==2){
            globalInfo.currentPage++;
            generatePage(null,null,null,globalInfo.currentPage==3? -1:null,2);
            setAllImgSizeInPxInCurrentWindowSize();
            window.addEventListener('resize',()=>{setAllImgSizeInPxInCurrentWindowSize()});
            updateDisplayForSelectedObj();
        }
    }
    else if (how == 'back'){
        globalInfo.currentPage-=1;
        generatePage(...pagesSubjects[globalInfo.currentPage],globalInfo.currentPage==0? 0:null);
        document.querySelectorAll('input').forEach((el)=>{el.checked = studentLvl[el.dataset.subject] == el.dataset.level ? true:false})
    }
    else if (how == 'exit'){
        openPage(1)
    }
    else if (how == 'finish'){
        openPage(1)
    }
    console.log(globalInfo.currentPage)
}
function fullScreen(nb){
        if(window.innerWidth<1000){
        document.documentElement.requestFullscreen() 
        .then(() => {screen.orientation.lock("landscape");openPage(nb);
            document.querySelector('video').play();
            document.querySelector('audio').play();
        }) // for phone
        .catch(err => console.error(err));}
        else{
            openPage(nb); 
        }
;
}
function openPage(nb){
    if (nb==2){
        document.documentElement.innerHTML='';
        var script = document.createElement("script");
        script.innerHTML=`
            
            document.body.addEventListener('keydown',event=> {if(event.key=='ArrowRight' && globalInfo.currentPage < 3 ){
                 event.preventDefault();
                 updatePage('next')
         
             }else if (event.key=='ArrowLeft' && globalInfo.currentPage > 0){
                 event.preventDefault();
                 updatePage('back')
         
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
            var globalInfo = {currentPage:0} ;
            var studentLvl = {Math : null , Physic : null  , Svt : null , Arabe : null , France : null , Eng : null , Philo : null , Info : null , Option : null}
            var pagesSubjects = [['Math','Physic' ,'Svt'],['Arabe','France' , 'Eng'],['Philo','Info' ,'Option']] ;
            generatePage(...pagesSubjects[globalInfo.currentPage],0);

            if (window.innerWidth< 1000) {
            document.body.addEventListener('click', () => { 
            document.documentElement.requestFullscreen() 
            .then(() => screen.orientation.lock("landscape")) 
            .catch(err => console.error(err));
            })};`

        
    document.documentElement.innerHTML=`
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet">
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>📘</text></svg>">
        <title>options</title>
        <style>
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
            video{
                height: 100%;
                width: auto;
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
        </style>
    </head>


    <body>
        <div  id="bk"><video autoplay  loop ><source  src="bk.mp4" type="video/mp4"></video></div>
        <audio autoplay  loop id="myAudio">
            <source src="bk.mp3" type="audio/mp3">
        </audio>
        <div class="filler"> 
            <div class="mini-title">What is your objective</div>
            <div class="objective-container">
                <div class="obj"><button class="obj-button" id="bt18" onclick="objButtonClicked(18)">≥18<img class="obj-img" src="pic16.jpg" id="18"></button></div>
                <div class="obj"><button class="obj-button" id="bt17" onclick="objButtonClicked(17)">≥17<img class="obj-img" src="pic17.jpg" id="17"></button></div>
                <div class="obj"><button class="obj-button" id="bt16" onclick="objButtonClicked(16)">≥16<img class="obj-img" src="pic18.jpg" id="16"></button></div>
            </div>
        </div>
        <div id="buttons-container"></div>
    </body>`;
    document.body.appendChild(script);
}
    else if (nb==1){
        var script2 = document.createElement("script")
        script2.innerHTML=`isLogedIn = false ;
            document.querySelectorAll('input').forEach((el)=>{ isLogedIn || el.setCustomValidity('please press start first')}) ;`
        document.documentElement.innerHTML='';
        document.documentElement.innerHTML=`
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>baki</title>
        <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet">
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>📘</text></svg>">
        <style>
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
                text-align: center;
                letter-spacing: 1px;
                box-shadow: 0 0 8px rgb(74, 8, 71);
                animation: glow 1s ease alternate infinite ;
                cursor: pointer;
                transition: 0.5s;
            }
            #str-bt:hover{
                transition: 0.5s;
                color: rgb(128, 43, 226);
                /* animation-play-state: paused; */
                text-shadow: 0 0 8px blueviolet , 0 0 16px blueviolet;
                scale: 1.25;
            }
            @keyframes glow{
                to {box-shadow:0 0 8px  #FF33CC, 0 0 16px #FF33CC, 0 0 24px #FF33CC , 0 0 32px rgba(255, 51, 204,0.5) , 0 0 64px rgba(255, 51, 204,0.5), 0 0 128px rgba(255, 51, 204,0.75);
                    ;
                }
            }
        </style>
    </head>

    <body>

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


        <div id="str-ct"><button id="str-bt" onclick="fullScreen(2);">Start</button></div>

    </body>`
    document.body.appendChild(script2);
    }
}