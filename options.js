const dailyQuotes = [
                    "Trust in Allah, but tie your camel. Effort is part of faith.",
                    "Knowledge is the best companion; never stop seeking it.",
                    "Success comes to those who persist, not those who quit.",
                    "Start your day with Bismillah and confidence will follow.",
                    "The best of people are those who are most beneficial to others.",
                    "Believe in yourself, for Allah has given you unique talents.",
                    "Patience is key; every small effort counts in the long run.",
                    "Struggle today, shine tomorrow.",
                    "Make dua before exams; Allah knows what’s best for you.",
                    "Knowledge enlivens the soul and strengthens the mind.",
                    "A small step daily leads to great achievements.",
                    "Your effort is a form of worship if your intention is sincere.",
                    "Never compare your journey with others; everyone has their pace.",
                    "Success is built on consistency, not intensity.",
                    "Allah does not burden a soul beyond what it can bear.",
                    "Difficulties are opportunities for growth, not defeat.",
                    "Learn from mistakes; they are the stepping stones to wisdom.",
                    "Be confident; Allah loves those who trust Him and themselves.",
                    "Your mind is a gift; feed it with knowledge and positivity.",
                    "Stay focused; distractions steal precious time.",
                    "Every day is a new chance to improve yourself.",
                    "Set goals, take action, and leave the rest to Allah.",
                    "The best reward comes after the hardest effort.",
                    "Surround yourself with those who uplift you.",
                    "Pray for guidance and clarity; it will strengthen your path.",
                    "Do not fear failure; fear never trying.",
                    "Even the Prophet (PBUH) valued learning and self-improvement.",
                    "Your time is valuable; spend it wisely.",
                    "Discipline today brings freedom tomorrow.",
                    "Always be curious; knowledge is endless.",
                    "Success is a journey, not a destination.",
                    "Believe in the power of dua and hard work together.",
                    "Consistency outweighs occasional brilliance.",
                    "Feed your mind with positivity, not doubts.",
                    "Every hardship is a test of patience and faith.",
                    "Smile; a confident mind performs better.",
                    "Reflect on your achievements, no matter how small.",
                    "Your intention matters more than speed.",
                    "Never underestimate the power of starting over.",
                    "Take breaks; your brain needs rest to perform well.",
                    "Focus on progress, not perfection.",
                    "Help others; it strengthens your own knowledge and character.",
                    "Be grateful; gratitude increases motivation and happiness.",
                    "A sound mind requires a sound body; sleep and eat well.",
                    "Don’t rush the process; growth takes time.",
                    "Every expert was once a beginner.",
                    "Surround yourself with books, not just devices.",
                    "The journey of knowledge is a lifelong path.",
                    "Believe Allah has a plan; your effort is part of it.",
                    "Stay humble; arrogance blocks learning.",
                    "Mistakes are lessons, not failures.",
                    "Your potential is limitless with effort and faith.",
                    "Keep a journal; writing clarifies thoughts and goals.",
                    "Think positive; negativity wastes energy.",
                    "Organize your study; clarity reduces stress.",
                    "Ask questions; curiosity leads to mastery.",
                    "Do small good deeds daily; they build character and confidence.",
                    "Motivation gets you started; discipline keeps you going.",
                    "Learn to manage time; every minute counts.",
                    "Celebrate your progress, not just the outcome.",
                    "Reflect on the Quran; wisdom strengthens the mind and heart.",
                    "Focus on what you can control, not what you can’t.",
                    "Take responsibility for your learning; no one can do it for you.",
                    "Visualize success; your mind follows your imagination.",
                    "Be patient with yourself; growth is gradual.",
                    "Confidence grows with preparation and practice.",
                    "Avoid procrastination; action creates momentum.",
                    "Remember, Allah rewards sincere effort, not just results.",
                    "Find joy in learning, and you’ll never feel burdened.",
                    "Every morning is a chance to start fresh.",
                    "Trust your abilities; Allah has blessed you uniquely.",
                    "Challenge yourself; comfort zones don’t lead to growth.",
                    "Be persistent; small steps daily make a huge difference.",
                    "Knowledge with action is the most beneficial.",
                    "Plan, act, revise, repeat — that’s the cycle of success.",
                    "Never underestimate the value of dua and tawakkul.",
                    "Believe in the process; the results will follow.",
                    "Reading strengthens the mind and expands the heart.",
                    "Keep a positive environment; it fuels motivation.",
                    "Be kind to yourself; self-love fosters confidence.",
                    "Difficult times test patience and increase wisdom.",
                    "Stay humble but aim high.",
                    "Seek knowledge even if it takes you far and wide.",
                    "Learning is an act of worship when done with the right intention.",
                    "Do not let fear of failure stop your growth.",
                    "Strive for excellence, not perfection.",
                    "Your attitude shapes your results more than your talent.",
                    "Time lost is never regained; use it wisely.",
                    "Be curious and ask questions; curiosity is the fuel of knowledge.",
                    "Trust the process; Allah’s timing is perfect.",
                    "Keep moving forward; small steps lead to big achievements.",
                    "Discipline your mind; focus is a skill to master.",
                    "Every challenge is an opportunity to grow stronger.",
                    "Knowledge combined with character is true success.",
                    "Believe in yourself; Allah created you capable.",
                    "Motivation fades, discipline remains.",
                    "Never stop learning; the world is full of lessons.",
                    "Stay determined; obstacles are temporary, your effort is permanent.",
                    "Be proactive; waiting doesn’t lead to success.",
                    "Self-confidence comes from preparation and faith.",
                    "Help others learn; teaching reinforces your own understanding.",
                    "Take one step at a time; even slow progress is progress.",
                    "Stay consistent; even small efforts accumulate over time.",
                    "Remember, with every difficulty comes ease.",
                    "Success is a reflection of effort, intention, and patience."
                    ];
let numberOfRequiredHours = { // subject then level then objective
            Math : {
                        bad : {bt18 : "10 hours per week." , bt17:"9 hours per week." , bt16:"8 hours per week." },
                        normal : {bt18 : "9 hours per week." , bt17:"7.5 hours per week." , bt16:"7 hours per week." },                
                        good : {bt18 : "8 hours per week." , bt17:"6.5 hours per week." , bt16:"6 hours per week." },
                        exelent : {bt18 : "7 hours per week." , bt17:"6 hours per week." , bt16:"4.5 hours per week." },
                    },
            Physic :    {
                        bad : {bt18 : "5.5 hours per week." , bt17:"5 hours per week." , bt16:"4 hours per week." },
                        normal : {bt18 : "5 hours per week." , bt17:"4.5 hours per week." , bt16:"4 hours per week." },                
                        good : {bt18 : "4.5 hours per week." , bt17:"4 hours per week." , bt16:"4 hours per week." },
                        exelent : {bt18 : "4 hours per week." , bt17:"3 hours per week." , bt16:"3 hours per week." },
                    },        
            Svt : {
                        bad : {bt18 : "1.5 hours per week." , bt17:"1.5 hours per week." , bt16:"1 hour per week." },
                        normal : {bt18 : "6 hours before each test." , bt17:"5 hours before each test." , bt16:"4 hours before each test." },                
                        good : {bt18 : "5.5 hours before each test." , bt17:"4 hours before each test." , bt16:"3 hours before each test." },
                        exelent : {bt18 : "5 hours before each test." , bt17:"4 hours before each test." , bt16:"3 hours before each test." },
                    },
            Arabe : {
                        bad : {bt18 : "3 hours before each test." , bt17:"2 hours before each test." , bt16:"2 hours before each test." },
                        normal : {bt18 : "2.5 hours before each test." , bt17:"2 hours before each test." , bt16:"2 hours before each test." },                
                        good : {bt18 : "2 hours before each test." , bt17:"1.5 hours before each test." , bt16:"1 hour before each test." },
                        exelent : {bt18 : "2 hours before each test." , bt17:"1.5 hours before each test." , bt16:"1 hour before each test." },
                    },
            France : {
                        bad : {bt18 : "2 hours per week." , bt17:"2 hours per week." , bt16:"1.5 hours per week." },
                        normal : {bt18 : "1.5 hours per week." , bt17:"1.5 hours per week." , bt16:"1 hour per week." },                
                        good : {bt18 : "4 hours before each test." , bt17:"3.5 hours before each test." , bt16:"3 hours before each test." },
                        exelent : {bt18 : "3 hours before each test." , bt17:"2.5 hours before each test." , bt16:"2 hours before each test." },
                    },
            Eng : {
                        bad : {bt18 : "1.5 hours per week." , bt17:"1.5 hours per week." , bt16:"1 hour per week." },
                        normal : {bt18 : "3 hours before each test." , bt17:"2 hours before each test." , bt16:"1 hour before each test." },                
                        good : {bt18 : "2 hours before each test." , bt17:"1 hour before each test." , bt16:"No need to revize now , only in the revision periode." },
                        exelent : {bt18 : "No need to revize now , only in the revision periode." , bt17:"No need to revize now , only in the revision periode." , bt16:"No need to revize now , only in the revision periode." },
                    },
            Philo : {
                        bad : {bt18 : "3.5 hours per week." , bt17:"3 hours per week." , bt16:"3 hours per week." },
                        normal : {bt18 : "3 hours per week." , bt17:"3 hours per week." , bt16:"3 hours per week." },                
                        good : {bt18 : "3 hours per week." , bt17:"2.5 hours per week." , bt16:"2 hours per week." },
                        exelent : {bt18 : "3 hours per week." , bt17:"2 hours per week." , bt16:"2 hours per week." },
                    },
            Info  : {
                        bad : {bt18 : "3 hours per week." , bt17:"3 hours per week." , bt16:"2.5 hours per week." },
                        normal : {bt18 : "2.5 hours per week." , bt17:"2 hours per week." , bt16:"2 hours per week." },                
                        good : {bt18 : "2 hours per week." , bt17:"2 hours per week." , bt16:"4 hours before each test." },
                        exelent : {bt18 : "1.5 hours per week." , bt17:"1 hour per week." , bt16:"3 hours before each test." },
                    },
            Option : {
                        bad : {bt18 : "2.5 hours per week." , bt17:"2 hours per week." , bt16:"2 hours per week." },
                        normal : {bt18 : "2 hours per week." , bt17:"1.5 hours per week." , bt16:"1.5 hours per week." },                
                        good : {bt18 : "2 hours per week." , bt17:"1.5 hours per week." , bt16:"1.5 hours per week." },
                        exelent : {bt18 : "1.5 hours per week." , bt17:"1.5 hours per week." , bt16:"1 hour per week." },
                    }
}; 


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
            for (let key in studentName){
                if (studentName[key]){
                    document.getElementById(key+'-name').value = studentName[key]
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
            studentName.first = document.getElementById('first-name').value;
            studentName.last = document.getElementById('last-name').value;
            for (let key in studentName){
                if (!studentName[key]){
                    document.getElementById('next1').setCustomValidity('Some options weren t selected . Please enter all required data');
                    document.getElementById('next1').reportValidity();
                    return 
                }
            }
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

            var selectedObjective ;
            for(let key in studentObjective){
                if (studentObjective[key]){selectedObjective = key;break}
            }
            openPage(3)

    }
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
    for (let key in studentObjective){
        if(studentObjective[key]){
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
            var studentName = {'first':null , 'last':null}
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
            var studentObjective = {bt18:false , bt17:false , bt16:false}
            function setAllImgSizeInPxInCurrentWindowSize(){
                document.getElementById('18').style.height = (document.querySelector('.obj').offsetHeight)*2.3 + 'px';
                document.getElementById('17').style.height = (document.querySelector('.obj').offsetHeight)*1.5 + 'px';
                document.getElementById('16').style.height = (document.querySelector('.obj').offsetHeight)*2.3 + 'px';
            }
            function updateDisplayForSelectedObj(){
                for(let key in studentObjective){
                    
                    document.getElementById(key).style.width = studentObjective[key]? '83.5%':'75%' ;
                    document.getElementById(key).style.height = studentObjective[key]? '90%':'60%' ;
                    document.getElementById(key).style.fontSize = studentObjective[key]? 'calc(3vw + 1.8vh)':'calc(2.5vw + 1.5vh)' ;
                }
            }
            function objButtonClicked(id){
                reset = [16,17,18]
                document.getElementById("bt"+id).style.scale || (document.getElementById("bt"+id).style.scale = 1)
                ! studentObjective['bt'+id] ? ( studentObjective['bt'+id] = true , studentObjective['bt'+(((id-16+1)%3)+16)] = false , studentObjective['bt'+(((id-16+2)%3)+16)] = false ):( studentObjective['bt'+id] = false)
                console.log(studentObjective)
                updateDisplayForSelectedObj()
            }
            function special(event){
                if( variants.includes(studentName.first.toUpperCase()) && variants.includes(studentName.last.toUpperCase()) ){
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

                    document.getElementById('first-name').addEventListener('focus',()=>{
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


                    document.getElementById('last-name').addEventListener('focus',()=>{
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
                font-family: "Pacifico"  , cursive;
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
    else if(nb == 3){
        var script3 = document.createElement("script");
        script3.innerHTML=`
            var dailyQuotesInd = Number(localStorage.getItem('dq')) || 0 ;
            var day = new Date().getDay() ;
            localStorage.getItem('newDay') || localStorage.setItem('newDay',day) ;
            if (day !=  localStorage.getItem('newDay')){
                dailyQuotesInd++;
                localStorage.setItem('dq',dailyQuotesInd)
            }
            var txt = document.querySelector(".loading-text") ;
            var an = document.querySelector(".loading-animation") ;
            var textAnimation = ["Planning Study Schedule.","Planning Study Schedule..","Planning Study Schedule..."];
            var currentTxt = 1 ;
            var txtAnInt ;
            var ls = document.querySelector(".left-section");
            var btOp = document.querySelector('.close-open-options');
            var clickAccess = true;
            var acOp = document.getElementById("accountOptions");
            var jss = document.getElementById('js-styles');
            var mt = document.querySelector(".main-theme");
            var dc = document.getElementById("daily-quote");
            dc.innerHTML = '&nbsp&nbsp'+dailyQuotes[dailyQuotesInd];
            dailyQuotesInd++;

            acOp.innerText = studentName.first + ' ' + studentName.last;

            if (window.innerHeight<=525){
                ls.style.gap ="0.25vh";
            }
            function OpenCloseOptions (){
                if(clickAccess){
                    clickAccess = false ;
                    console.log(clickAccess)
                    if (btOp.innerText.includes('<')){
                        jss.innerHTML=''
                        document.querySelectorAll('.profile-icon').forEach((el)=>{el.style.opacity ="0";})
                        document.querySelectorAll('.option').forEach((el)=>{el.style.color ="transparent";el.style.textShadow ="none"});
                        document.getElementById("follow-options").style.opacity = "0";
                        setTimeout(()=>{
                            
                            ls.style.animation = "closeOptions 1s ease forwards";
                            btOp.style.left='0px';
                            mt.style.left = 'calc(calc(calc(2.25vh + 2.25vw) + 0vw) + 10px)'
                        },150)
                        
                        
                        setTimeout(()=>{btOp.innerHTML= ">&nbsp&nbsp";clickAccess = true;ls.classList.add('hide');},1200);
                    }
                    else {
                        setTimeout(()=>{document.getElementById("follow-options").style.opacity = "1";document.querySelectorAll('.profile-icon').forEach((el)=>{el.style.opacity ="1";});document.querySelectorAll('.option').forEach((el)=>{el.style.color ="rgb(15, 234, 227)";el.style.textShadow =" 0 0 6px rgb(19, 177, 172)"})},400);
                        ls.classList.remove('hide')               
                        ls.style.animation = "openOptions 1s ease forwards";
                        btOp.style.left='20vw';
                        mt.style.left = 'calc(calc(calc(2.25vh + 2.25vw) + 20vw) + 10px)'

                        setTimeout(()=>{
                            btOp.innerHTML= "<&nbsp&nbsp";
                            clickAccess = true;   
                            jss.innerHTML='#profile-container:hover{ scale: 1.1;box-shadow: 0 0 8px #FF33CC, 0 0 16px #FF33CC;} '
                        },1050);
                    }
                }
            }

            txtAnInt = setInterval(()=>{txt.innerText = textAnimation[currentTxt];currentTxt++;currentTxt%=3;},2000/3);
            setTimeout(()=>{clearInterval(txtAnInt);
                an.style.animationPlayState = "paused";
                an.style.animation = "PlanningFinished ease 4s";
                an.style.border = "5px solid transparent";
                txt.innerText = "" ;
                an.style.backgroundColor = "rgb(2, 125, 104)" ;
                txt.style.color = "rgb(15, 234, 227)";
                txt.style.textShadow = "0 0 6px rgb(19, 177, 172)"
                txt.innerText="✓ Fhinised";
                txt.style.zIndex = "2";
                txt.style.fontSize = "calc(2.2vh + 2.2vw)";
                an.style.animation = "spreadOut 1.5s ease forwards";
                txt.style.animation = "spreadOut 1.5s ease forwards";
                setTimeout(()=>{
                    an.classList.add('hide');
                    txt.classList.add('hide');
                },2000)

                setTimeout(()=>{
                    ls.classList.remove('hide');
                    btOp.classList.remove('hide');
                    setTimeout(()=>{
                        setTimeout(()=>{document.getElementById("follow-options").style.opacity = "1";document.querySelectorAll('.profile-icon').forEach((el)=>{el.style.opacity ="1";});document.querySelectorAll('.option').forEach((el)=>{el.style.color ="rgb(15, 234, 227)";el.style.textShadow =" 0 0 6px rgb(19, 177, 172)"})},400);
                        document.body.style.overflow = "visible";
                        document.body.style.overflowX = "hidden";
                        ls.style.animation = "openOptions 1s ease forwards";
                        btOp.style.left='20vw';
                        setTimeout(()=>{btOp.innerHTML= "<&nbsp&nbsp";
                        clickAccess = true;
                        jss.innerHTML='#profile-container:hover{ scale: 1.1;box-shadow: 0 0 8px #FF33CC, 0 0 16px #FF33CC;} '
                        btOp.addEventListener("click",()=>{OpenCloseOptions()}); 
                        mt.classList.remove('hide');
                        setTimeout(()=>mt.style.opacity ='1',100)
                    },1050);
                    },550)
                },2050)
            },3900);
          `
        document.documentElement.innerHTML= `
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>baki</title>
        <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet">
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>📘</text></svg>">
        <style>
            * {
                -webkit-tap-highlight-color: transparent;
                }
            img:not(.profile-icon){
                height: 8.5vh;
                min-height: 56px;
                width: auto;
                cursor: pointer;
                transition: 0.25s;
                filter: drop-shadow(0 0 8px rgba(255, 51, 204,1));
            }
            #inp1:hover+img,
            img:not(.profile-icon):hover{
                scale: 1.1;
                transition: 0.25s;
                filter: drop-shadow(0 0 8px rgba(255, 51, 204))  drop-shadow(0 0 12px rgba(255, 51, 204));
            }
            body::-webkit-scrollbar {
             display: none; /* Chrome, Safari */
            }

            body{
                padding-top: max(calc(8.5vh + 16px), 72px);
                color: rgb(230, 115, 191);
                height: 100vh;
                width :100vw;
                margin: 0px;         
                background: linear-gradient(90deg,rgb(20, 10, 44), rgb(11, 11, 41),rgb(20, 10, 44));
                position: relative;
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
                z-index: 10;
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
            .loading-container{
                width: 100vw;
                height: calc(100vh - max(calc(8.5vh + 16px), 72px));
                display: flex;
                justify-content: center;
                align-items:center ;
                justify-content: center;
                align-items: center;
                position: relative;
            }
            .loading-animation{
                width: calc(17.5vw + 17.5vh) ;
                height:calc(17.5vw + 17.5vh) ;
                border: 5px solid rgba(61, 4, 91,0.05);
                box-shadow: 0 0 2px rgb(20, 10, 44);
                border-top: 5px solid rgb(2, 125, 104);
                border-radius: 50%;
                animation: spin ease 2s infinite ;
                transition: 0.5s;
                cursor: pointer;

            }
            .loading-text{
                position: absolute;
                font-size: calc(1.4vh + 1.4vw);
                transition: 0.5s;
                cursor: pointer;
            }
            @keyframes spin{
                to{rotate: 360deg;
                }
            
            }
            @keyframes spreadOut{
                from{scale: 0.01;}
                to{scale :1;
                }
            
            }
            @keyframes openOptions{
                from{width: 0px;}
                to{width: 20vw;}
            }
            @keyframes closeOptions{
                from{width: 20vw;}
                to{width: 0px;}
            }
            .left-section{
                width: 0vw; 
                background: linear-gradient(90deg, #100020 0%, #19024b  100%);
                box-shadow: 0px 5px 8px rgba(224, 14, 179, 1) ;
                /* border-right: : */
                position: fixed;
                top : calc(max(calc(8.5vh + 16px), 72px) + 5px) ;
                bottom: 0px;
                left: 0px;
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 2.5vh;
            }
            .close-open-options{
                /* padding-left: 5px; */
                position: fixed;
                width: calc(2.25vh + 2.25vw);
                height: calc(2.75vh + 2.75vw);
                display: flex;
                align-items:center ;
                justify-content: center;
                background: linear-gradient(90deg, #19024b 0%, #280475  100%);
                border-top-right-radius: 65%;
                border-bottom-right-radius: 65%;
                border-top: 2px solid rgba(224, 14, 179, 0.35) ;
                border-bottom:2px solid rgba(224, 14, 179, 0.35) ;
                border-right: 2px solid rgba(224, 14, 179, 0.35) ;
                top: 50%;
                left: 0px;
                font-size: calc(1.25vh + 1.25vw);
                cursor: pointer;
                transition: 1s;
            
            }
            #profile-container{
                margin-top: 5vh;
                transition: 0.5s;
                color: transparent;
                text-shadow: none ;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                width: 14vw;
                height: 10vh;
                border-radius: 50%;
                padding: 0 calc(1vh + 1vw);
            }
            .option{
                display: inline-block;
                display: -webkit-box;  
   	            -webkit-line-clamp: 1; 
   		        -webkit-box-orient: vertical;
   		        overflow: hidden;  
                transition: 0.5s;
                cursor: pointer;
                font-size: calc(0.85vh + 0.85vw);
            }

            .profile-icon{
                height: calc(1.5vh + 1.5vw);
                width: calc(1.5vh + 1.5vw);
                margin-right: 5px;
                border-radius: 50%;
                transition: 0.5s;
                opacity: 0;
                cursor: pointer;
            }
            .bigOptionFont{
                font-size: calc(1.15vh + 1.15vw);
            }
            @media (max-height : 525px ){
                #track{
                    font-size: calc(0.7vh + 0.6vw);
                }
                .option{
                    font-size: calc(0.8vh + 0.75vw);
                }

                .bigOptionFont{
                    font-size: calc(1vh + 1vw);
                 }
            }
            .main-theme{
                position: absolute;
                left: calc(calc(calc(2.25vh + 2.25vw) + 20vw) + 10px);
                top : calc(max(calc(8.5vh + 16px), 72px) + 5px);
                width: 100%;
                z-index: -5;
                height: 150vh;/*to be changed*/
                transition:  1s;
                padding-top: calc(0.75vw + 0.75vh);
                padding-left: calc(0.5vw + 0.5vh);
                opacity: 0;
            }
            .daily-quote{
                font-size: calc(2.25vh + 2.25vw);
                font-family:'Pacifico', cursive;
                text-shadow: 0px 5px 8px rgba(224, 14, 179, 1);
                max-width: 60%;
                min-width: 20vw;

            }
            #daily-quote{
                font-size: calc(1.25vh + 1.25vw);
                color: white;
                padding-top: calc(1vh + 1vw);
            }
            .block1{
                padding-bottom: calc(1vh + 1vw);
                border-bottom:  2px solid aqua  ;
                width: 71vw;
            }
            .hide{
                display: none;
            }
        </style>
        <style id="js-styles">

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
        <div class="loading-container">
            <div class="loading-text">Planning Study Schedule.</div>
            <div class="loading-animation"></div>
            <div class="left-section hide">
                <div id="profile-container" title="Profile">
                  <img class="profile-icon" src="default avatar icon.png">
                  <div class="option bigOptionFont" id="accountOptions"></div>
                </div>
                <div id="profile-container">
                <img class="profile-icon" src="opt2-icon.jpg">
                  <div class="option" id="track">Track my study hours</div>
                </div>
                <div id="profile-container">
                  <div id="follow-options" style="font-size: calc(1.5vh + 1.5vw);color: black;cursor: pointer;opacity: 0;transition: 0.5s;">🎓</div>
                  <div class="option" > Finished Bac Exams</div>
                </div>
                
                <div id="profile-container">
                <img class="profile-icon" style="border-radius: 0%;" src="calcIcon.png">
                  <div class="option bigOptionFont" >GPA calculator</div>
                </div>

                <div id="profile-container">
                <img class="profile-icon" style="border-radius: 0%;" src="objIcon.png">
                  <div class="option bigOptionFont" >Set Objectives</div>
                </div>
                
            </div>
            <div class="close-open-options hide"> >&nbsp&nbsp </div>
        </div>
        <div class="main-theme hide">
            <div style="display: flex;align-items: center;" class="block1">
                <div class="daily-quote">Daily Quote :</div>
                <div id="daily-quote"></div>
            </div>

        </div>
        
    </body>
        `
        document.body.appendChild(script3);
    }
}
