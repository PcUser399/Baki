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
                        bad : {bt18 : "6 hours per week." , bt17:"5 hours per week." , bt16:"4 hours per week." },
                        normal : {bt18 : "5.5 hours per week." , bt17:"4.5 hours per week." , bt16:"4 hours per week." },                
                        good : {bt18 : "5 hours per week." , bt17:"4 hours per week." , bt16:"4 hours per week." },
                        exelent : {bt18 : "4.5 hours per week." , bt17:"3.5 hours per week." , bt16:"3 hours per week." },
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
var studentObjective = JSON.parse(localStorage.getItem('stObj')) ; 
var studentLvl = JSON.parse(localStorage.getItem('stLvl')) ;
var studentName = JSON.parse(localStorage.getItem('stName')) ;
function generateAllHTMLSubjects(){
                for (let key in studentWeeklyObjective){
                    let a = studentWeeklyObjective[key]


                    if ( a != 0){
                        let msg = 
                            '<div class="subject-title" id="' + key + '-title">' + key + '</div>' +
                            '<div class="subject-mainPage" id="' + key + '-box">' +
                                '<div class="subject-hours">' +
                                    '<div class="subject-hours-details">' +
                                        '<div id="' + key + '-done-hours">0</div>/' +
                                        '<div id="' + key + '-total-hours"></div>&nbsp Hours done This Week' +
                                    '</div>' +
                                '</div>' +
                                '<div class="submiting-hours-section">' +
                                    '<input type="number" min="0" id="input-' + key + '-hours" ' +
                                    'onkeydown="if(event.key==\'Enter\'){submitHours(\'' + key + '\', event.target, day, week)};" ' +
                                    'placeholder="Please enter here" ' +
                                    'title="after studing ' + key + ' for any amount enter it in hours here">' +
                                    
                                    '<button onclick="unSubmit(\'' + key + '\')" class="unsubmit" ' +
                                    'title="undo Last Submitted Hours">Unsubmit</button>' +
                                '</div>' +
                            '</div>';
                        document.querySelector('.subject-container').innerHTML += msg ;
                        let thr = document.getElementById(key+'-total-hours') 
                        let tsh = document.getElementById(key+'-done-hours')
                        let t = document.getElementById(key+'-title')
                        let b = document.getElementById(key+'-box')
                        let s = studentStudyHoursAchievedInThisWeekDetails ;
                        let sb = studentWeeklyObjective ;

                        if (s[key]>=sb[key]){
                            t.classList.add('finished-subject-title')
                            b.classList.add('finished-subject-box')
                        }

                        if (thr && tsh ){
                            thr.innerText =  a ;
                            tsh.innerText = studentStudyHoursAchievedInThisWeekDetails[key] ;}
                        

                    }
            }
            }

// localStorage.clear()// removes
localStorage.getItem('lg') || localStorage.setItem('lg',false) ;
var isLogedIn = JSON.parse(localStorage.getItem('lg')) ;
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
                                                                                                        <input type="radio" onclick="studentLvl[event.target.dataset.subject] = event.target.dataset.level;special(event);localStorage.setItem('stLvl',JSON.stringify(studentLvl))" name="${sub1}" data-level="bad" data-subject="${sub1}">
                                                                                                        <input type="radio" onclick="studentLvl[event.target.dataset.subject] = event.target.dataset.level;special(event);localStorage.setItem('stLvl',JSON.stringify(studentLvl))" name="${sub1}" data-level="normal" data-subject="${sub1}"> 
                                                                                                        <input type="radio" onclick="studentLvl[event.target.dataset.subject] = event.target.dataset.level;localStorage.setItem('stLvl',JSON.stringify(studentLvl))" name="${sub1}" data-level="good" data-subject="${sub1}"> 
                                                                                                        <input type="radio" onclick="studentLvl[event.target.dataset.subject] = event.target.dataset.level;localStorage.setItem('stLvl',JSON.stringify(studentLvl))" name="${sub1}" data-level="exelent" data-subject="${sub1}">    
                                                                        </div>
                                </div>
                                <div class="subject-level">In ${sub2} I am<div class="input-container">
                                                                                                        <input type="radio" onclick="studentLvl[event.target.dataset.subject] = event.target.dataset.level;special(event);localStorage.setItem('stLvl',JSON.stringify(studentLvl))"  name="${sub2}" data-level="bad" data-subject="${sub2}">
                                                                                                        <input type="radio" onclick="studentLvl[event.target.dataset.subject] = event.target.dataset.level;special(event);localStorage.setItem('stLvl',JSON.stringify(studentLvl))"  name="${sub2}" data-level="normal" data-subject="${sub2}"> 
                                                                                                        <input type="radio" onclick="studentLvl[event.target.dataset.subject] = event.target.dataset.level;localStorage.setItem('stLvl',JSON.stringify(studentLvl))"  name="${sub2}" data-level="good" data-subject="${sub2}"> 
                                                                                                        <input type="radio" onclick="studentLvl[event.target.dataset.subject] = event.target.dataset.level;localStorage.setItem('stLvl',JSON.stringify(studentLvl))"  name="${sub2}" data-level="exelent" data-subject="${sub2}">    
                                                                        </div>
                                 </div>
                                <div class="subject-level">In ${sub3} I am<div class="input-container">
                                                                                                        <input type="radio" onclick="studentLvl[event.target.dataset.subject] = event.target.dataset.level;special(event);localStorage.setItem('stLvl',JSON.stringify(studentLvl))"  name="${sub3}" data-level="bad" data-subject="${sub3}">
                                                                                                        <input type="radio" onclick="studentLvl[event.target.dataset.subject] = event.target.dataset.level;special(event);localStorage.setItem('stLvl',JSON.stringify(studentLvl))"  name="${sub3}" data-level="normal" data-subject="${sub3}"> 
                                                                                                        <input type="radio" onclick="studentLvl[event.target.dataset.subject] = event.target.dataset.level;localStorage.setItem('stLvl',JSON.stringify(studentLvl))"  name="${sub3}" data-level="good" data-subject="${sub3}"> 
                                                                                                        <input type="radio" onclick="studentLvl[event.target.dataset.subject] = event.target.dataset.level;localStorage.setItem('stLvl',JSON.stringify(studentLvl))"  name="${sub3}" data-level="exelent" data-subject="${sub3}">    
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
var variants = ['MARYAM', 'MARIEM', 'MARIAM', 'MARYEM','REBAI', 'REBA3I', 'REBEI', 'REBE3I','REBAÏ', 'REBA3Ï', 'REBEÏ', 'REBE3Ï'];
function isSheMaryam(){
                return variants.includes(studentName.first.toUpperCase()) && variants.includes(studentName.last.toUpperCase())
            }
function  updatePage(how,ev){
    if (how == 'next'){
        if(globalInfo.currentPage<2){
        if(globalInfo.currentPage==-1){
            studentName.first = document.getElementById('first-name').value;
            studentName.last = document.getElementById('last-name').value;
            localStorage.setItem('stName',JSON.stringify(studentName))
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
            openPage(3)
    }
        else {
            // document.body.style.height='100vh';
            // document.body.style.overflow='hidden';
            ev.target.setCustomValidity('Some options weren t selected . Please enter all required data');
            ev.target.reportValidity();
        }
    }
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
function getObjective(){
    for (let key in studentObjective){
        if (studentObjective[key]){return key}
    }
}
function special(event){
    if( isSheMaryam() ){
        msgNumber++;
        msgNumber= msgNumber%3;
        event.target.setCustomValidity(maryamSpecialMsg(event.target.dataset.subject,msgNumber));
        event.target.reportValidity();
        }
}
function splitDateTime(str) {
    let parts = str.trim().split(/\s+/);

    let day = parts[0];
    let time = parts[1] + " " + parts[2];
    let date = parts[3];

    return {
        time: time,                      // "9:32 PM"
        dayAndDate: day + " " + date    // "Wednesday 11/19/2025"
    };
}
function loadStudyPlanPage(){
                msg='';
                for (let key in numberOfRequiredHours){
                    msg += `
                        <div class="one-subject-element">
                            <img class="sub-img" src="${key}.jpg">
                            ${key}: ${numberOfRequiredHours[key][studentLvl[key]][selectedObjective]}
                        </div>
                        `;
                }
                msg += '<div class="end"></div><div class="end"></div>'
                document.getElementById('studyPlanPage').innerHTML = msg ;
            }

function loadSetObjectivePage(){
                let contant = '' ;
                for(let i = nbNotes-1 ; i>-1;i--){

                    contant +=`
                    <div class="note" id="note-nb-${i}">
                        <div class="note-title">
                            <input class="inp-note-title" id="I1-${i}" placeholder="." autocomplete="off" value="${notesDetails[i].title}">
                            <label class="shadow-lab" for="I1-${i}">Title</label>
                        </div>
                        <div class="main-message">
                            <textarea cols="40" class="inp-note-title mainMsg" id="I2-${i}" placeholder=".">${notesDetails[i].main}</textarea>
                            <label class="shadow-lab" for="I2-${i}">Note content</label>
                        </div>
                        <div class="note-bottom-section">
                            ${notesDetails[i].date}
                            <button class="unsubmit del" onclick="deleteNote(${i})">Delete</button>
                        </div>
                    </div>`
                }
                adH.innerHTML = contant ; 
            }
    
function createNoteBox(){
    let d = new Date() ;
    let dy = d.getDay(); 
    let st = dayNames[dy] + '&nbsp&nbsp&nbsp'+ d.toISOString().slice(0,10)
    let ht = `
    <div class="note" id="note-nb-${nbNotes}">
        <div class="note-title">
            <input class="inp-note-title" id="I1-${nbNotes}" placeholder="." autocomplete="off">
            <label class="shadow-lab" for="I1-${nbNotes}">Title</label>
        </div>
        <div class="main-message">
            <textarea cols="40" class="inp-note-title mainMsg" id="I2-${nbNotes}" placeholder="."></textarea>
            <label class="shadow-lab" for="I2-${nbNotes}">Note content</label>
        </div>
        <div class="note-bottom-section">
            ${st}
            <button class="unsubmit del" onclick="deleteNote(${nbNotes})">Delete</button>
        </div>
    </div>`;
    notesDetails.push({title:'',main:'',date:''}) ;
    adH.insertAdjacentHTML("afterbegin", ht);
    storeTitles(nbNotes) ;
    storeMainMsg(nbNotes) ;
    notesDetails[nbNotes].date = st ;
    localStorage.setItem('notesDetails',JSON.stringify(notesDetails)) ;
    
    nbNotes++;
    localStorage.setItem('nbNotes',nbNotes);
    console.log(nbNotes,notesDetails)
    
}
function specialNoteForHer(){
    let forHer = `
    <div class="note" id="special-for-her">
        <div class="note-title">
            <input class="inp-note-title" id="I1-special" placeholder="." autocomplete="off" value="You are doing Great !" disabled>
            <label class="shadow-lab" for="I1-special">Title</label>
        </div>
        <div class="main-message" style="display:flex;justify-content:center;">
            <div class="inp-note-title mainMsg" id="I2-special">kad matmor layam ou kad mat7is rohik te3ba ou be5la innik ti5dim just tswr 7awel titswr il far7a illi nchlh bich t3ichha ou t3ichha 3ayiltik fi nhar il resultat . Hawel titsawer il farhailli bich tifra7ha ommik ou ataw wahdik wahdik yolli 3inik inik takra ou tijtahid . Ama just keep in mind innik tokod mni7 ou tekil mni7 5tr ki bich takra ala a7seb si7tek bich tthor rohik fil kraya akthr milli bich t3awen.7awel kol nhar tothmon 8h noum . Ya lit ena jibt ma5ir moch ala 7aja Ena fir7an bi hide 3l5r ama juste habit nfarah ommi akthr 5trha habit 18 wena majibthhech . I leave itto you Maryam . il bac 3omrou lakan 3ala 5trk. howa ala 5tr weldik . Akra Maryam ou inja7 mni7 ou fara7om 3l5r 3l5rr 5trhom yist7ako far7it il dinia kolha. ou nchlh ya rabi bich tinjaa7 mnniii7 ou tfara7na kolna.Kol mat7is ro7ik te3ba walla faddit mil kraya tthaker il klem hetha ou nchlh tw yirja3lik ch8af fil kraya </div>
            <label class="shadow-lab" for="I2-special">Note content</label>
        </div>
        <div class="note-bottom-section"  style="display:flex;justify-content:center;" >
            <button class="unsubmit del" onclick="adH.removeChild(document.getElementById('special-for-her'))">Delete</button>
        </div>
    </div>`;
    adH.insertAdjacentHTML("beforeend",forHer) ;
    let spcEl = document.getElementById('I2-special');

}
function openPage(nb,showSlide=true){
    if (isLogedIn){nb=3}
    if (nb==2){
        document.documentElement.innerHTML='';
        var script = document.createElement("script");
        script.innerHTML=`
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
                localStorage.setItem('stObj',JSON.stringify(studentObjective))
                updateDisplayForSelectedObj()
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
            document.querySelectorAll('input').forEach((el)=>{ el.setCustomValidity('please press start first')}) ;
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
            window.scrollTo(0,0);
            // localStorage.clear()// remove
            var day = Date.now() ; // new Date().getDate()
            var msInDay = 86400000 ;
            var msInWeek = 604800000;
            
            defaultLS = {Math : [] , Physic : [] , Svt : [] , Arabe : [] , France : [] , Eng : [] , Philo : [] , Info : [] ,  Option : []};
            studentWeeklyObjective = {Math : 0 , Physic : 0 , Svt : 0 , Arabe : 0 , France : 0 , Eng : 0 , Philo : 0 , Info : 0 ,  Option : 0}
            defaultSW = {Math : 0 , Physic : 0 , Svt : 0 , Arabe : 0 , France : 0 , Eng : 0 , Philo : 0 , Info : 0 ,  Option : 0};
            defaultSA = {Math : [] , Physic : [] , Svt : [] , Arabe : [] , France : [] , Eng : [] , Philo : [] , Info : [] ,  Option : []};
            defaultAchivedSubjects = {Math : false , Physic : false , Svt : false , Arabe : false , France : false , Eng : false , Philo : false , Info : false ,  Option : false};

            localStorage.getItem('firstDay') || localStorage.setItem('firstDay',day) ;
            localStorage.getItem('previousWeek') || localStorage.setItem('previousWeek','1') ;
            localStorage.getItem('sw') || localStorage.setItem('sw',JSON.stringify(defaultSW)) ;
            localStorage.getItem('sa') || localStorage.setItem('sa',JSON.stringify(defaultSA)) ;
            localStorage.getItem('ls') || localStorage.setItem('ls',JSON.stringify(defaultLS)) ;
            localStorage.getItem('strike') || localStorage.setItem('strike',0) ;
            localStorage.getItem('nbS') || localStorage.setItem('nbS',0) ;
            localStorage.getItem('as') || localStorage.setItem('as',JSON.stringify(defaultAchivedSubjects)) ;
            localStorage.getItem('nbNotes') || localStorage.setItem('nbNotes',0) ;
            localStorage.getItem('notesDetails') ||  localStorage.setItem('notesDetails',JSON.stringify([])) ;

            var strike = Number(localStorage.getItem('strike')) ;
            var initialDay = Number(localStorage.getItem('firstDay')) ;
            var dailyQuotesInd = diffInDay(day,initialDay) ;


            var week = diffInWeek(day,initialDay) + 1;
            var prvWeek = Number(localStorage.getItem('previousWeek'))
            var diffInWeeks = week - prvWeek ; 


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

            var ws = document.getElementById('strike-number');
            var wt = document.querySelector('.strike-title');
            var dhp = document.querySelector('.display-hour-progress');
            var hdw = document.getElementById('hours-done-this-week');
            var th = document.getElementById('total-hours');
            var b = document.querySelector('.block')
            var studentStudyHoursAchievedInThisWeekDetails =  JSON.parse(localStorage.getItem('sw'));
            var allStudiedHoursData = JSON.parse(localStorage.getItem('sa'))  // [{hours , date ,week },...] week = (day-initialDay)%7 + 1
            var selectedObjective = getObjective();
            var totalHours =  getAllRequiredHoursInOneWeak(selectedObjective );
            var lastSubmition = JSON.parse(localStorage.getItem('ls'));
            var allStudyHoursAchievedInThisWeek = calculateSumOfStudiedHoursThisWeek() ;
            var achivedSubjects = JSON.parse(localStorage.getItem('as')) ;
            updateEachevedSubjectsEachReload();

            var specialMessages = isSheMaryam() ;
            var finishSubjectsSpecialMessages = ['Sahiiit maryam ena mit2kd kenik nchlh bich twasel hakka fa2inno il bac fil maktob ou winnik bich tfarahna kolna',
            'very impressive ! biir8m innik te3ba ou moch mistensa birritim hetha inti waselt maryam ou ma5alitich il t3b ou il bo5l yi8lbk nchlh yarabi tji mil 2awe2il fil jomhoria',
            'haja mohima ysr innik ta3ti kol matiere 9darha maryam wasil ou nchlh nchofok nej7a bil 18 ou il 19','tebrik ederim maryaaam , don t stress up juste 5ali ritim motwasit ou hetha yikfi innik titfawa9 !',
            'consistancy is every thing momken hetha il ritim jek kesa7 maryaaam ama raho yok3d nafso hatta fil 3otal donc bich ikon andik brcha wkt bich tarteeeh fihom walla hatta tzid takra',
            'wasel .wasel maryaam ou nchlh mokch bich titfwk wakahaw bal akthr min hakeka a3mmel illi manijimtich na3mlo ena ou fr7 5laila ysr . fara7ha ysrrrrr ou fara7 3ayaltik kolha . Maraym hot fi mo5ik ken 7ajtin kraitik ou si7tik ou itilhe bihom imni7 ou nchlh mafama ken il 5ir']
            
            var nbOfFinishedSubjects = Number(localStorage.getItem('nbS')) ;
            var dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            console.log(day,initialDay,week,prvWeek,diffInWeeks)


            if(diffInWeeks != 0 ){
                let prvSum = allStudyHoursAchievedInThisWeek
                resetMainPage()
                if ( diffInWeeks == 1 ){
                    if ( prvSum < totalHours ){
                        strike = 0 ;
                        localStorage.setItem('strike',0) }
                    else {
                        strike += 1 ;
                        localStorage.setItem('strike',strike)
                    }
                }
                else if (diffInWeeks > 1 ){
                    strike = 0 ;
                    localStorage.setItem('strike',0) ;
                    alert('You have missed one week or more please update the web after any study session')
                }
                localStorage.setItem('previousWeek',week)
            }


            dc.innerHTML = '&nbsp&nbsp'+dailyQuotes[dailyQuotesInd];
            hdw.innerText = allStudyHoursAchievedInThisWeek;
            th.innerText = totalHours ;

            generateAllHTMLSubjects() ;

            function updateEachevedSubjectsEachReload(){
                let s = studentStudyHoursAchievedInThisWeekDetails ;
                let sb = studentWeeklyObjective ;
                for (let key in studentWeeklyObjective){
                    if(s[key]<sb[key]){
                        achivedSubjects[key] = false ;
                    }
                    else{
                        achivedSubjects[key] = true ; 
                    }
                }
            }

            function resetMainPage(){
                localStorage.setItem('sw',JSON.stringify(defaultSW)) ;
                localStorage.setItem('ls',JSON.stringify(defaultLS)) ;
                lastSubmition = defaultLS ;

                allStudyHoursAchievedInThisWeek = 0 ;
                studentStudyHoursAchievedInThisWeekDetails = defaultSW ;
                achivedSubjects = defaultAchivedSubjects ; 
                localStorage.setItem('as',JSON.stringify(defaultAchivedSubjects)) ;

                

            }
            
  
            // <div class="subject-title" id="Math-title">Math</div>
            // <div class="subject-mainPage" id="Math-box">
            //     <div class="subject-hours"> *
            //         <div class="subject-hours-details"> *
            //             <div id="Math-done-hours">0</div>/ *
            //             <div id="Math-total-hours">8.5</div>&nbsp Hours done This Week *
            //         </div>*
            //     </div>*
            //     <div class="submiting-hours-section">*
            //         <input type="number" min="0" id="input-Math-hours"  onkeypress=" if(event.key == 'Enter'){submitHours('Math',event.target,day,week)}"  placeholder="Please enter here" title="after studing Math for any amount enter it in hours here">*
            //         <buttom onclick="unSubmit('Math')" class="unsubmit" title="undo Last Submitted Hours">Unsubmit</buttom>*
            //     </div>*
            // </div>*
            
            function diffInDay(a,b){
                return Math.floor((a-b)/msInDay)
            }
            function diffInWeek(a,b){
                return Math.floor((a-b)/msInWeek)
            }

            function submitHours(subject,el,day,week){
                if(el.value<=0){el.setCustomValidity('Please Enter a positive number');el.reportValidity();el.setCustomValidity('');return null}


                let dis = document.getElementById(subject+'-done-hours');
                let t = document.getElementById(subject+'-title');
                let b = document.getElementById(subject+'-box');

                let date = getDateYearMonthDayTime() ;
                let arr = allStudiedHoursData[subject];
                let s = studentStudyHoursAchievedInThisWeekDetails ;
                let sb = studentWeeklyObjective ;


                let h = removeOverObjectiveHours (s[subject],sb[subject],Number(el.value))
                if(arr.length>0 && day == getDayFromExpression(arr[arr.length-1]['date'])) {
                    arr[arr.length-1]['hours'] += Number(el.value) ;
                    lastSubmition[subject].push(Number(el.value)) ;
                    s[subject] += Number(el.value) ;

                    localStorage.setItem('ls',JSON.stringify(lastSubmition)) ;
                    localStorage.setItem('sw',JSON.stringify(s));
                    localStorage.setItem('sa',JSON.stringify(allStudiedHoursData));
            
                }

                else {
                    arr.push({hours:Number(el.value) , date , week });
                    lastSubmition[subject].push(Number(el.value)) ;
                    s[subject] += Number(el.value) ;

                    localStorage.setItem('ls',JSON.stringify(lastSubmition)) ;
                    localStorage.setItem('sw',JSON.stringify(s));
                    localStorage.setItem('sa',JSON.stringify(allStudiedHoursData))
                }

                dis.innerText = s[subject] ;
                allStudyHoursAchievedInThisWeek += h
                displayHourProgress()
                el.value=''
                if (s[subject]>=sb[subject] && (!achivedSubjects[subject])){
                    t.classList.add('finished-subject-title')
                    b.classList.add('finished-subject-box')
                    achivedSubjects[subject] = true ; 
                    localStorage.setItem('as',JSON.stringify(achivedSubjects))
                    if (specialMessages){
                        if (window.innerWidth< 1000){setTimeout(() => el.blur(), 50)}
                        setTimeout(()=> affiche(finishSubjectsSpecialMessages[nbOfFinishedSubjects]),750)          
                        nbOfFinishedSubjects = (nbOfFinishedSubjects+1)%(finishSubjectsSpecialMessages.length) ;
                        localStorage.setItem('nbS',nbOfFinishedSubjects) ;
                    }
                }
                
                loadTrackingPage() ;
            }

            function unSubmit(subject){
                let dis = document.getElementById(subject+'-done-hours');
                let t = document.getElementById(subject+'-title');
                let b = document.getElementById(subject+'-box');

                let date = getDateYearMonthDayTime() ;
                let arr = allStudiedHoursData[subject];
                let s = studentStudyHoursAchievedInThisWeekDetails ;
                let sb = studentWeeklyObjective ;
                let len = lastSubmition[subject].length

                if (arr.length>0 && len > 0 ){
                    let h = removeOverObjectiveHours (s[subject],sb[subject],lastSubmition[subject][len-1],1);
                    if (arr[arr.length-1]['hours'] - lastSubmition[subject][len-1] == 0 ){
                        arr.pop();
                        s[subject] -= lastSubmition[subject][len-1];
                        localStorage.setItem('sw',JSON.stringify(s));
                        localStorage.setItem('sa',JSON.stringify(allStudiedHoursData));
                    }
                    else{
                        arr[arr.length-1]['hours']-=lastSubmition[subject][len-1];
                        s[subject] -= lastSubmition[subject][len-1];
                        localStorage.setItem('sw',JSON.stringify(s));
                        localStorage.setItem('sa',JSON.stringify(allStudiedHoursData));
                    }
                    dis.innerText = s[subject] ;
                    allStudyHoursAchievedInThisWeek -= h;
                    displayHourProgress();
                    lastSubmition[subject].pop() ;
                    localStorage.setItem('ls',JSON.stringify(lastSubmition)) ;
                    if (s[subject]<sb[subject]){
                        t.classList.remove('finished-subject-title') ;
                        b.classList.remove('finished-subject-box') ;
                        achivedSubjects[subject] = false ; 
                        localStorage.setItem('as',JSON.stringify(achivedSubjects)) ;

                    }
                    loadTrackingPage();
                    if(s[subject] == 0 ){
                        removeTrackingElements = true ;
                    }
                }
            }

            function removeOverObjectiveHours (str,lim,add,mode=0){
                if (mode == 0){
                if (str>=lim){return 0}
                return lim-str>=add ? add:lim-str}
                else{
                    afterRemoval = str-add ;
                    if (afterRemoval>=lim){return 0}
                    else{
                        if (str>lim){ return lim-afterRemoval}
                        else{return add}
                       
                    }
                }
            }
            function toTwo(nb){
                if (nb >= 10){return nb}
                else{
                    return '0'+nb
                }
            }
            function getDateYearMonthDayTime(){
                date = new Date();
                let hours = date.getHours();
                const minutes = date.getMinutes();
                const ampm = hours >= 12 ? 'PM' : 'AM';
                if(hours >= 13){hours %= 12}
                days = date.getDate();
                months = date.getMonth();
                years = date.getFullYear();
                
                daysInWeek = dayNames[date.getDay()];
                return daysInWeek+'  '+toTwo(hours)+":"+toTwo(minutes)+' '+ampm+'  '+toTwo(months+1)+"/"+toTwo(days)+"/"+years
            }
            function getDayFromExpression(exp){
                ind = exp.indexOf('/') ;
                end=ind+3;
                if(exp[ind+2] == '/'){end=ind+2}
                nb = exp.slice(ind+1,end)
                return Number(nb)
            }
            function displayHourProgress(){
                hdw.innerText = allStudyHoursAchievedInThisWeek;
                percentage = ((allStudyHoursAchievedInThisWeek/totalHours).toFixed(4)*100) ;
                if (percentage>100){percentage=100}
                else if(percentage < 2.5){percentage=2.5};
                dhp.style.width = percentage+'%';

                if (percentage==100){dhp.style.animation = 'glowGreen 1s ease alternate infinite'}
                else {dhp.style.animation = 'none'} 
            }

            function calculateSumOfStudiedHoursThisWeek(){
                acc = 0 ; 
                for (let key in studentStudyHoursAchievedInThisWeekDetails){
                    if (studentStudyHoursAchievedInThisWeekDetails[key]<=studentWeeklyObjective[key]){
                    acc+=studentStudyHoursAchievedInThisWeekDetails[key]}
                    else{
                        acc+= studentWeeklyObjective[key]
                    }
                }
                return acc
            }
            ws.innerText = strike
            if (strike>0){
                wt.classList.add('hot-strike');
            }
            else{
                wt.classList.remove('hot-strike');
                }


            // first part
            if (window.innerHeight<=525){
                ls.style.gap ="0.25vh";
                setTimeout(() => window.scrollTo(0,0), 35);
            }else{
            window.scrollTo(0,0);}


            acOp.innerText = studentName.first + ' ' + studentName.last;

            function OpenCloseOptions (){
                if(clickAccess){
                    clickAccess = false ;
                    if (btOp.innerText.includes('<')){
                        jss.innerHTML=''
                        document.querySelectorAll('.profile-icon').forEach((el)=>{el.style.opacity ="0";})
                        document.querySelectorAll('.option').forEach((el)=>{el.style.color ="transparent";el.style.textShadow ="none"});
                        document.getElementById("follow-options").style.opacity = "0";
                        setTimeout(()=>{
                            
                            ls.style.animation = "closeOptions 1s ease forwards";
                            btOp.style.left='0px';
                            mt.style.left = 'calc(calc(calc(2.25vh + 2.25vw) + 0vw) + 10px)';
                            mt.style.width = '90%';
                        },150)
                        
                        
                        setTimeout(()=>{btOp.innerHTML= ">&nbsp&nbsp";clickAccess = true;ls.classList.add('hide');},1200);
                    }
                    else {
                        setTimeout(()=>{document.getElementById("follow-options").style.opacity = "1";document.querySelectorAll('.profile-icon').forEach((el)=>{el.style.opacity ="1";});document.querySelectorAll('.option').forEach((el)=>{el.style.color ="rgb(15, 234, 227)";el.style.textShadow =" 0 0 6px rgb(19, 177, 172)"})},400);
                        ls.classList.remove('hide')      
                        mt.style.width = '71%'         
                        ls.style.animation = "openOptions 1s ease forwards";
                        btOp.style.left='20vw';
                        mt.style.left = 'calc(calc(calc(2.25vh + 2.25vw) + 20vw) + 10px)'

                        setTimeout(()=>{
                            btOp.innerHTML= "<&nbsp&nbsp";
                            clickAccess = true;   
                            jss.innerHTML='.profile-container:hover{ scale: 1.1;box-shadow: 0 0 8px #FF33CC, 0 0 16px #FF33CC;} '
                        },1050);
                    }
                }
            }

            var  t1 = 2000 ;
            var  t2 = 1050 ;
            var  t4 = 2050 ;
            var  t5 = 3900 ;
            if(isLogedIn){
                t1 = 0 ;
                t2 = 0 ;
                t4 = 0 ; 
                t5 = 0 ;
            }
            run(${showSlide})
            function runInitialTime(){
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
                    },t1)

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
                            jss.innerHTML='.profile-container:hover{ scale: 1.1;box-shadow: 0 0 8px #FF33CC, 0 0 16px #FF33CC;} '
                            btOp.addEventListener("click",()=>{OpenCloseOptions()}); 
                            mt.classList.remove('hide');
                            setTimeout(()=>mt.style.opacity ='1',100)//100
                            setTimeout (() => {displayHourProgress();isLogedIn = true;localStorage.setItem('lg',true)},500)//500
                        },t2);
                        },550)//550
                    },t4)
                    
                },t5);
                
            }
            function run(showSlide=true){

                if(!isLogedIn){runInitialTime()}
                else{
                    if(showSlide){
                        an.classList.add('hide');
                        txt.classList.add('hide');
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
                            jss.innerHTML='.profile-container:hover{ scale: 1.1;box-shadow: 0 0 8px #FF33CC, 0 0 16px #FF33CC;} '
                            btOp.addEventListener("click",()=>{OpenCloseOptions()}); 
                            mt.classList.remove('hide');
                            setTimeout(()=>mt.style.opacity ='1',100)//100
                            setTimeout (() => {displayHourProgress();isLogedIn = true;localStorage.setItem('lg',true)},500)//500
                        },t2);
                        },550)//550
                    },t4)

                    }
                    else{
                        an.classList.add('hide');
                        txt.classList.add('hide');

                        ls.classList.remove('hide');
                        btOp.classList.remove('hide');
                        document.getElementById("follow-options").style.opacity = "1";
                        document.querySelectorAll('.profile-icon').forEach((el)=>{el.style.opacity ="1";});
                        document.querySelectorAll('.option').forEach((el)=>{el.style.color ="rgb(15, 234, 227)";
                        el.style.textShadow =" 0 0 6px rgb(19, 177, 172)"});
                        document.body.style.overflow = "visible";
                        document.body.style.overflowX = "hidden";
                        ls.style.animation = "openOptions 0.001s ease forwards";
                        btOp.style.left='20vw';
                        btOp.innerHTML= "<&nbsp&nbsp";
                        clickAccess = true;
                        jss.innerHTML='.profile-container:hover{ scale: 1.1;box-shadow: 0 0 8px #FF33CC, 0 0 16px #FF33CC;} '
                        btOp.addEventListener("click",()=>{OpenCloseOptions()}); 
                        mt.classList.remove('hide');
                        mt.style.opacity ='1'
                        displayHourProgress();isLogedIn = true;localStorage.setItem('lg',true)
                    }
                    
                }
            }

            function getNumberOfHours(ch){
                h = ch.indexOf("hour") ;
                w = ch.indexOf("week") ;
                if (h >-1 && w > -1){
                    return Number(ch.slice(0,h)) 
                }
                else{
                    return 0
                }
                
            }
            function getAllRequiredHoursInOneWeak(obj) { 
                acc=0;
                for (let key in numberOfRequiredHours){
                    a = getNumberOfHours(numberOfRequiredHours[key][studentLvl[key]][obj]) ;
                    acc += a
                    studentWeeklyObjective[key] = a ;
                }
                return acc
            }

            function createBox(id){
                const box = document.createElement("div");

                box.id = "box-"+id;
                box.dataset.number = ""+id;

                // Set styles
                box.style.position = "fixed";
                box.style.zIndex = 1001
                box.style.top = "50%";
                box.style.left = "50%";
                box.style.transform = "translate(-50%, -50%)";
                box.style.width = "calc(33vh + 33vw)";
                box.style.backgroundColor = "#100020";
                box.style.borderRadius = "150px";
                box.style.padding = "calc(1vh + 1vw) calc(3vh + 3vw)";
                box.style.textAlign = "center";
                box.style.color = "white";
                box.style.fontSize = "calc(1.35vh + 1.35vw)";
                box.style.overflow = "hidden";
                box.style.boxShadow = '0px 0 10px rgba(224, 14, 179, 0.5) '  ; 
                box.style.transition = 'ease 1s' ;

                const title = document.createElement("div");

                title.id = "box-"+id+"-title";
            
                title.style.fontSize = "calc(2vh + 2vw)";
                title.style.color = "aqua";
                title.style.textShadow = "0 0 8px rgb(71, 187, 187), 0 0 8px aqua";
                box.appendChild(title);

                const message = document.createElement("div");
                message.style.maxWidth = "100%";
                message.style.overflowWrap = "break-word";
                message.style.marginTop = "calc(0.5vh + 0.5vw)";
                message.style.overflow = "hidden";
                message.id = "box-"+id+"-message"
                box.appendChild(message);

                const exitButton = document.createElement("div");
                exitButton.style.marginTop = "calc(0.75vh + 0.75vw)";
                exitButton.style.display = "inline-block";
                exitButton.style.backgroundColor = "rgb(94, 0, 0)";
                exitButton.style.width = "calc(8vh + 8vw)";
                exitButton.style.borderRadius = "50px";
                exitButton.style.cursor = "pointer";
                exitButton.style.border = "3px solid rgb(44, 0, 0)";
                exitButton.textContent = "Exit";

                mouseIn = ()=>{
                    exitButton.style.backgroundColor = 'rgb(44, 0, 0)' ;
                    exitButton.style.border = '3px solid rgb(94, 0, 0)' ;  
                }
                mouseOut = ()=>{
                    exitButton.style.backgroundColor = 'rgb(94, 0, 0)' ;
                    exitButton.style.border = '3px solid rgb(44, 0, 0)' ;  
                }

                exitButton.addEventListener('mouseenter',mouseIn)
                exitButton.addEventListener('mouseleave',mouseOut)



                box.appendChild(exitButton);

                return {box,title,message,exitButton}
            }

            function displayBox(obj,fc = ()=>{}){ // fc to apllie orders when exit is clicked


                const coverAll = document.createElement("div");
                coverAll.style.position = 'fixed' ; 
                coverAll.style.top = '0';
                coverAll.style.bottom = '0';
                coverAll.style.right = '0';
                coverAll.style.left = '0';
                coverAll.style.backdropFilter = 'blur(10px)';
                coverAll.style.zIndex = 1000 ;
                var body = document.querySelector('body')
                body.style.position = 'relative' ;
                body.appendChild(coverAll);
                body.appendChild(obj.box) ;

                obj.box.style.transform = "translate(-50%, -50%) scale(0)";
                obj.box.offsetHeight;
                requestAnimationFrame(() => {
                    obj.box.style.transform = "translate(-50%, -50%) scale(1)";
                });

                exit = ()=>{
                    body.removeChild(coverAll);
                    body.removeChild(obj.box) ;
                    fc() ;
                }

                setTimeout(()=>{obj.exitButton.addEventListener('click',exit,{ once: true });},1000)
            }


            function affiche(msg,tit='Mabrouk !',fc = ()=>{},id=0){
                let bubble = createBox(id);

                bubble.title.innerText = tit;
                bubble.message.innerText = msg ; 

                displayBox(bubble,fc);
            }

            var warningMsgDisplay = ${showSlide};

            function resetLvl(subject,lvl,event){
                if(warningMsgDisplay){
                    affiche('Changing your level in a subject or your objective will change the required hours for subjects .','Warning !',()=>{el = event.target ;el.setCustomValidity(lvl);el.reportValidity()});
                    warningMsgDisplay=false;
                
                }    
                else{
                    el = event.target ;
                    el.setCustomValidity(lvl);
                    el.reportValidity();}
                studentLvl[subject] = lvl;
                planChanges = true ;

                localStorage.setItem('stLvl',JSON.stringify(studentLvl)) ;

            
            }
            function fixToFitProprety(ch){
                if (ch.indexOf('18')>-1){return 18}
                else if (ch.indexOf('17')>-1){return 17}
                else if (ch.indexOf('16')>-1){return 16}
            }
            function resetObjective(){
                if(warningMsgDisplay){
                    affiche('Changing your objective or you level will change the required hours for subjects.','Warning !')
                    warningMsgDisplay=false;
                }
                const b =  fixToFitProprety(document.getElementById('objective-reselect').value)
                const c = ((b-16 + 1)%3)+16 ;
                const d = ((b-16 + 2)%3)+16 ;

                studentObjective['bt'+b] = true ;
                studentObjective['bt'+c] = false ;
                studentObjective['bt'+d] = false ;

                planChanges = true ;

                localStorage.setItem('stObj',JSON.stringify(studentObjective)) ;
                
            }

            var pages ={
                mainPage : document.getElementById('mainPage'),
                profilePage : document.getElementById('profilePage'),
                trackingPage : document.getElementById('trackingPage'), 
                studyPlanPage : document.getElementById('studyPlanPage'),
                setObjectivesPage : document.getElementById('setObjectivesPage') 
            }



            var currentPage = 'mainPage' ;
            var planChanges = false ;
            var removeTrackingElements = false;
            var nbNotes = Number(localStorage.getItem('nbNotes'));
            var notesDetails = JSON.parse(localStorage.getItem('notesDetails')) ;
            var adH = document.getElementById('addHere')


            loadProfilePage() ;
            loadTrackingPage() ;
            loadStudyPlanPage() ;
            loadSetObjectivePage() ;
            if(specialMessages){specialNoteForHer()}

            function optionClicked(option){
                if (option == 'profilePage'){
                    openProfilePage()
                }

            }
            
            
            function dataIsEmpty(){
                for (let key in allStudiedHoursData){
                    if (allStudiedHoursData[key].length!=0){
                        return false
                    }
                }
                return true ;
            }

            function deleteNote(id){
                let ext = document.getElementById('note-nb-'+id)
                adH.removeChild(ext);
                notesDetails.splice(id,1);
                localStorage.setItem('notesDetails',JSON.stringify(notesDetails)) ;
                nbNotes-= 1 ;
                localStorage.setItem('nbNotes',nbNotes) ;
                console.log(nbNotes,notesDetails)
            }
            function storeMainMsg(nb) {
                var txtarea = document.getElementById("I2-"+nb);
                txtarea.addEventListener("input", function(){
                this.style.height = "auto";
                this.style.height = this.scrollHeight + "px"; 
                notesDetails[nb].main = this.value ;
                localStorage.setItem('notesDetails',JSON.stringify(notesDetails)) ;
                console.log(nbNotes,notesDetails[nb])
            })
            }
            function storeTitles(nb){
                var Tit = document.getElementById("I1-"+nb);
                Tit.addEventListener("input", function(){
                notesDetails[nb].title = this.value ;
                localStorage.setItem('notesDetails',JSON.stringify(notesDetails)) ;
                console.log(nbNotes,notesDetails[nb]) ;
            })
            }

            

            function openSubPage(ch){
                window.scrollTo(0,0);
                if(currentPage != ch){
                pages[ch].classList.remove('hide');    
                pages[currentPage].classList.add('hide');
                currentPage = ch ;}
            }


            function loadProfilePage(){
                for (let key in studentLvl){
                    inp = document.getElementById('input-'+key+'-'+studentLvl[key]) ; 
                    inp.checked = true ;
                }
                document.getElementById('objective-reselect').value = selectedObjective ;

            }

            function loadTrackingPage(){
                function appendChildD3(wkId,dt,key,el,a){
                    let fnSt = document.getElementById('study-hours-week-nb-'+wkId+'-day-nb-'+dt);
                    let cherche = document.getElementById('track-data-week-'+wkId+'-day-'+dt+'-subject-'+key);
                    if(cherche){
                        fnSt.removeChild(cherche);}
                    let lsDim = document.createElement("div");
                    lsDim.classList = 'last-dimention-data-track' ;
                    lsDim.id = 'track-data-week-'+wkId+'-day-'+dt+'-subject-'+key ;
                    lsDim.innerText = key+' : '+el.hours +' hours done at around '+a;
                    fnSt.appendChild(lsDim);

                }
                function appendChildD2(wkId,dt,a,b,key,el){
                    D1El= document.getElementById('week-nb-'+wkId+'-container');
                    let atDay = document.createElement("div");
                    atDay.id = 'day-'+dt+'-at-week-'+wkId ;
                    atDay.classList = 'date-container';
                    atDay.style.order = 40-Number(dt) ;
                    atDay.innerText = b ;  
                    chld = document.createElement("div");
                    chld.classList = 'track-study-hours-for-subjects' ;
                    chld.id = 'study-hours-week-nb-'+wkId+'-day-nb-'+dt ;
                    atDay.appendChild(chld);
                    D1El.appendChild(atDay);
                    appendChildD3(wkId,dt,key,el,a)
                }
                function appendChildD1(wkId,dt,a,b,key,el){
                    trkP = document.getElementById('trackingPage')
                    weekElement = document.createElement("div");
                    weekElement.classList = 'week-container' ;
                    weekElement.id = 'week-nb-'+wkId+'-container' ; 
                    weekElement.style.order = 200-wkId ;
                    weekElement.innerText = 'Week '+wkId
                    trkP.appendChild(weekElement);
                    appendChildD2(wkId,dt,a,b,key,el)

                }
                for(let key in allStudiedHoursData){
                    subArr = allStudiedHoursData[key]
                    subArr.forEach((el)=>{
                        wkId = el['week'];
                        T =  splitDateTime(el['date']) ;
                        a = T.time ; // "9:32 PM"
                        b = T.dayAndDate ;// "Wednesday 11/19/2025"
                        dt = getDayFromExpression(el['date']);
                        wkEl = document.getElementById('week-nb-'+wkId+'-container') ;
                        if(wkEl){
                            dtEl = document.getElementById('day-'+dt+'-at-week-'+wkId);
                            if (dtEl){
                                appendChildD3(wkId,dt,key,el,a)
                            }
                            else{
                                appendChildD2(wkId,dt,a,b,key,el)
                            }
                            
                        }
                        else{
                            appendChildD1(wkId,dt,a,b,key,el)
                        }
                        
                    })
                }

            }


            


            function openMainPage(currentPage='mainPage',planChanges=false){
                if(currentPage == 'profilePage' && planChanges){openPage(3);currentPage = 'mainPage'}
                else{
                    openSubPage('mainPage')
                }
            }
        

            function openProfilePage(){
                openSubPage('profilePage')
            }

            function openTrackingPage(rf=false){
                if(rf){openPage(3,false)}
                if(dataIsEmpty()){document.getElementById('nothingSubmetted').classList.remove('hide')}
                else{document.getElementById('nothingSubmetted').classList.add('hide')}
                openSubPage('trackingPage')
            }

            function openStudyPlanPage(){
                if(planChanges){
                    openPage(3,false)
                }
                loadStudyPlanPage();
                openSubPage('studyPlanPage');
            }
            function openGPAcalculatorPage(){
                console.log(specialMessages)
                window.open("Mo3adli.html?value=" + encodeURIComponent(specialMessages), "_blank");
            }
            function openSetObjectivesPage(){
                openSubPage('setObjectivesPage')
            }
            if (window.innerWidth< 1000) {
            document.body.addEventListener('click', () => { 
            document.documentElement.requestFullscreen() 
            .then(() => screen.orientation.lock("landscape")) 
            .catch(err => console.error(err));
            })};

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
            img:not(.profile-icon):not(.sub-img){
                height: 8.5vh;
                min-height: 56px;
                width: auto;
                cursor: pointer;
                transition: 0.25s;
                filter: drop-shadow(0 0 8px rgba(255, 51, 204,1));
            }
            #inp1:hover+img,
            img:not(.profile-icon):not(.sub-img):hover{
                scale: 1.1;
                transition: 0.25s;
                filter: drop-shadow(0 0 8px rgba(255, 51, 204))  drop-shadow(0 0 12px rgba(255, 51, 204));
            }
            body::-webkit-scrollbar {
             display: none; /* Chrome, Safari */
            }

            body{
                margin-top: max(calc(8.5vh + 16px), 72px) !important;
                color: rgb(230, 115, 191);
                height: 100%;
                width :100vw;
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
                position: fixed;
                top : calc(max(calc(8.5vh + 16px), 72px) + 5px) ;
                bottom: 0px;
                left: 0px;
                display: grid;
                grid-template-rows: repeat(5,1fr);
                justify-items: center;
                align-items: center;
            }
            .close-open-options{
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
            .profile-container{
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
                top : 5px;
                width: 71vw;
                z-index: 5;
                height: 150vh;
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
            .block{
                padding-bottom: calc(1vh + 1vw);
                border-bottom:  2px solid aqua  ;
                width: 100%;
            }
            .strike-title{
                padding-top: calc(1vh + 1vw);
                font-size: calc(1.75vh + 1.75vw) ;
                font-family:'Caveat', cursive;
                color: white;
                display : flex ;
                justify-content : center ;
                
            }
            .hot-strike{
                color: rgb(170, 13, 13);
                text-shadow: 0 5px 5px rgb(170, 13, 13);
                animation: glow 1s ease alternate infinite ;
            }
            @keyframes glow{
                to {text-shadow:0 0 8px  red, 0 0 16px red;
                    
                }
            }
            @keyframes glowGreen{
                to {box-shadow: 0px 0px 5px rgba(14, 224, 49, 0.45) , 0px 0px 10px rgba(12, 243, 62, 0.45) , 0px 0px 15px rgba(6, 245, 38, 0.45) ;
                    
                }
            }
            .week-progress-container{
                margin-top:  calc(3vh + 3vw);
                width: 100%;
                background-color: white;
                height: calc(1.5vh + 1.5vw);
                border: none;
                border-radius: 50px;
                position: relative;
                color: black;
                font-size: calc(1.25vh + 1.25vw);
            }
            .display-hour-progress{
                height: 100%;
                width: 2.5%;
                background-color: rgb(41, 199, 120);
                border: none;
                border-radius: 50px;
                transition: ease 2s;
            }
            .subject-mainPage{
                width: 100%;
                height: calc(15vw + 15vh);
                background-color: rgb(23, 0, 46) ;
                box-shadow: 0px 0px 5px rgba(224, 14, 179, 0.45);
                border: none;
                transition: 0.5s;
                border-radius: 50px;
                display: flex;
                flex-direction: column;
                justify-content: space-evenly;
                align-items: center;    
                z-index: 10;
                cursor: pointer;
                color: white;
            }
            .subject-title{
                margin-top: calc(5vh + 5vw) ;
                font-size: calc(2vw + 2vh);
                font-family:'Pacifico', cursive;
                width: 100%;
                text-align: center;
                color: aqua;
                text-shadow:  0px 0px 6px rgb(19, 177, 172);
            }
            .finished-subject-title{
                color: rgb(23, 228, 40) ;
                text-shadow:  0px 0px 6px rgb(16, 224, 68) ;
            }
            .finished-subject-box{
                box-shadow: 0px 0px 5px rgba(10, 236, 59, 0.45);
                color: green;
            }
            .finished-subject-box:hover{
                box-shadow: 0px 0px 5px rgba(14, 224, 49, 0.45) , 0px 0px 10px rgba(12, 243, 62, 0.45) , 0px 0px 15px rgba(6, 245, 38, 0.45) !important ;           
            }
            .subject-mainPage:hover{
                box-shadow: 0px 0px 5px rgba(224, 14, 179, 0.45) , 0px 0px 10px rgba(243, 12, 193, 0.45) , 0px 0px 15px rgba(245, 6, 193, 0.45);
            }
            .subject-hours-details{
                display: flex;
                flex-direction: row;
                font-size: calc(1.4vh + 1.4vw);
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
            -webkit-text-fill-color: rgb(128,128,128);
            transition: background-color 5000s ease-in-out 0s;
            }
            input:not([type="radio"]):not([class="inp-note-title"]) {
                background-color: #19024b;
                border-color:midnightblue ;
                outline: none;
                border-radius: 50px;
                height: calc(1.5vh + 1.5vw);
                width: calc(15vh + 15vw);
                color: rgb(128, 128, 128);
                padding:  0 15px;
                font-size: calc(1vh + 1vw);
            }
            input::placeholder{
                text-align: center;
            }
            input[type=number]::-webkit-outer-spin-button,
            input[type=number]::-webkit-inner-spin-button {
                -webkit-appearance: none;
                margin: 0;
            }
            .submiting-hours-section{
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .unsubmit{
                display: flex;
                justify-content: center;
                align-items: center;
                color: white !important;
                border: 3px solid rgb(43, 0, 0);
                margin-left: calc(2vh + 2vw);
                background-color: rgb(94, 0, 0);
                border-radius: 50px;
                height: calc(1.5vh + 1.5vw);
                width: calc(7vh + 7vw);
                font-size : calc(0.75vh + 0.75vw) ;
                cursor: pointer;
            }
            .unsubmit:hover{
                background-color: rgb(43, 0, 0);
                border: 3px solid rgb(94, 0, 0);
            }
            .unsubmit:active{
                background-color: rgb(26, 0, 0);
                border: 3px solid rgb(110, 0, 0);
            }
            .end{
                height: calc(5vh + 5vw);
                width: 100%;
            }
            .name{
                margin-top: calc(1.5vh + 1.5vw);
                text-align: center;
                color: white;
                font-size: calc(2vh + 2vw);
            }
            .input-title{
                margin-top: calc(3vh + 3vw);
            }
            input[type="radio"]{
                outline: none;
        
                border: none;
                width:2.75vw ;
                height: 2.75vw;
                /* appearance: none;   */
                border: 1px solid gray;
                border-radius:1vw ;
                background-color: transparent;
                cursor: pointer;
            }
            .level-displayer{
                max-width: 100%;
                padding: 0px calc(2.5vh + 2.5vw);
                padding-bottom: calc(0.5vh + 0.5vw);
                padding-top: calc(0.5vh + 0.5vw);
                margin-top: calc(2.5vh + 2.5vw);
                display: flex;
                justify-content: space-between;
                gap: calc(1.5vh + 1.5vw);
                font-size: calc(2vh + 2vw);
                align-items: center;
                border-bottom: 2px solid rgb(11, 47, 114) ;
            }
            .input-conatainer{
                display: flex;
                gap: calc(5vh + 5vw);
            }
            .objective-title{
                color: red;
                text-align: center;
                margin-top: calc(2vh + 2vw);
                font-size: calc(2.25vh + 2.25vw);
                animation : glow ease 1s alternate infinite ;
                padding-bottom: calc(0.4vh + 0.4vw);
            }
            option{
                color: red;    
                font-size: calc(1.25vh + 1.25vw);
                background-color: rgb(20, 10, 44);
                border: none;
                

            }
            #objective-reselect{
                color: red;
                animation : glow ease 1s alternate infinite ;
                font-size: calc(1.75vh + 1.75vw);
                background-color: transparent;
                border: none;
                outline: none;
                cursor: pointer;
            }


            .week-container{    
                display: flex;
                flex-direction: column;
                gap: calc(1.5vh + 1.5vw);
                padding: calc(1vh + 1vw) calc(2.5vh + 2.5vw);
                padding-bottom:calc(2.5vh + 2.5vw)   ;
                background-color: #100020;
                border-radius: 150px;
                box-shadow: 0px 0px 8px rgba(224, 14, 179, 0.45);
                text-align: center;
                font-size: calc(2.5vh + 2.5vw);
                color: aqua;
                text-shadow: 0px 0px 8px #37eeffcb;
                margin-top: calc(2vh + 2vw);
                display: flex;
                flex-direction: column;
                
            }
            .date-container{
                color: #FF33CC;
                text-shadow : none;
                font-size: calc(1.5vh + 1.5vw);
                background-color: #16023f;
                box-shadow: 0px 0px 8px rgba(14, 224, 28, 0.45);
                border-radius: 150px;
                padding: calc(0.5vh + 0.5vw) calc(1.5vh + 1.5vw);
                display: flex;
                flex-direction: column;
                gap: calc(1vh + 1vw);

            }
            .track-study-hours-for-subjects{
                font-size: calc(1vh + 1vw);
                color: white;
                display: flex;
                flex-direction: column;
                
            }
            .last-dimention-data-track{
                margin-top: calc(0.5vh + 0.5vw);
            }
            #trackingPage{
                display: flex;
                flex-direction: column;
            }
            #studyPlanPage{
                text-align: center;
                font-size: calc(1.8vh + 1.8vw);
                color: white;
                padding-top: calc(3vh + 3vw);/*add bad2an mil honi*/
                display: grid;
                grid-template-columns: repeat(2,1fr);
                justify-items: center;
                row-gap: calc(5vh + 5vw);
            }
            .sub-img{
                width: calc(17.5vh + 17.5vw);
                height: auto;
                border-radius: 100%;
                cursor: pointer;
                transition: 0.5s;
            }
            .sub-img:hover{
                transform: scale(1.1);
            }
            .one-subject-element{
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                gap:calc(0.25vh + 0.25vw);
                
            }
            #setObjectivesPage{
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                padding-top: calc(3vh + 3vw);
            }
            .add{
                width: calc(3vh + 3vw);
            }
            .add:hover{
                transform: scale(1.4);
            }
            .note{
                margin-top: calc(3.5vh + 3.5vw);
                width: 100%;
                background-color: rgb(34, 22, 51);
                border-radius: 10px;
                box-shadow: 0px 0px 8px rgba(224, 14, 179, 0.45);
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                padding-top: calc(1.5vh + 1.5vw);
            }
            .note-title{
                width: 100%;
                border-radius: 10px;
               
                text-align: center;
                position: relative;
            }
            .inp-note-title{
                top: 0;
                right: 0;
                width: 85%;
                /* height: 100%; */
                border-radius: 10px;
                text-shadow: 0px 0px 8px #37eeffcb;
                background-color: transparent;
                font-size: calc(1.75vh + 1.75vw);
                padding: calc(0.5vh + 0.5vw);
                border: 1px solid rgb(68, 50, 80);
                color: aqua;
                text-align: center;
                outline: none;
            }
            .inp-note-title::placeholder{
                color: transparent;
                text-shadow: none;
            }
            .shadow-lab{
                position:absolute;
                top: 50%;
                left: calc(5vh + 5vw);
                transform: translate(0,-50%);
                color: gray;
                font-size: calc(1.5vh + 1.5vw);
                transition: 0.35s;
                background-color:rgb(34, 22, 51) ;
            }
            .inp-note-title:hover + .shadow-lab,
            .inp-note-title:focus + .shadow-lab,
            .inp-note-title:not(:placeholder-shown) + .shadow-lab{
                top: calc(0px - calc(0.3vh + 0.3vw));
                transition: 0.35;
            }
            .inp-note-title:hover + .shadow-lab,
            .inp-note-title:focus + .shadow-lab{
                color: rgb(121, 158, 214);

            }
            .inp-note-title:hover,
            .inp-note-title:focus{
                border: 1px solid rgb(121, 158, 214);
            }
            .main-message{
                margin-top: calc(1.5vh + 1.5vw);
                position: relative;
                width: 100%;
                text-align: center;
            }
            .mainMsg{
                color: white;
                font-size: calc(1.25vh + 1.25vw);
                text-shadow: none;
                
            }
            textarea::-webkit-scrollbar{
                display: none;

            }
            textarea{
                overflow: hidden;
                resize: none;
                transition: 0.25s;
            }
            .note-bottom-section{
                display: grid;
                width: 100%;
                box-sizing: border-box;
                padding:  calc(1vh + 1vw) calc(3.5vh + 3.5vw);
                grid-template-columns: repeat(2,1fr);
                justify-items: center;
                font-size: calc(1.25vh + 1.25vw);
            }

            .del{
                margin: 0;
            }
            .hide{
                display: none !important;
            }
        </style>
        <style id="js-styles">

        </style>
    </head>

    <body>
        <header>
            <div style="position: relative;" onclick="openMainPage(currentPage,planChanges);">
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
                <div class="profile-container" title="Profile" onclick="openProfilePage()">
                  <img class="profile-icon" src="default avatar icon.png">
                  <div class="option bigOptionFont" id="accountOptions"></div>
                </div>
                <div class="profile-container" onclick="openTrackingPage(removeTrackingElements)">
                  <img class="profile-icon" src="opt2-icon.jpg">
                  <div class="option" id="track">Track my study hours</div>
                </div>
                <div class="profile-container" onclick="openStudyPlanPage()">
                  <div id="follow-options" style="font-size: calc(1.5vh + 1.5vw);color: black;cursor: pointer;opacity: 0;transition: 0.5s;">🎓</div>
                  <div class="option bigOptionFont" >Study Plan</div>
                </div>
                
                <div class="profile-container" onclick="openGPAcalculatorPage()">
                <img class="profile-icon" style="border-radius: 0%;" src="calcIcon.png">
                  <div class="option bigOptionFont" >GPA calculator</div>
                </div>

                <div class="profile-container" onclick="openSetObjectivesPage()">
                <img class="profile-icon" style="border-radius: 0%;" src="objIcon.png">
                  <div class="option bigOptionFont" >Set Objectives</div>
                </div>
                
            </div>
            <div class="close-open-options hide"> >&nbsp&nbsp </div>
        </div>
        <div class="main-theme hide">
            <div id="mainPage">
                <div style="display: flex;align-items: center;" class="block">
                    <div class="daily-quote">Daily Quote :</div>
                    <div id="daily-quote"></div>
                </div>

                <div class="strike-title">
                    <div id="strike-number">1</div>&nbsp Weeks strike
                </div>
                
                <div class="week-progress-container">
                    <div class="display-hour-progress"></div>
                    <div style="height: calc(1.5vh + 1.5vw);display: flex;position: absolute;top: 50%;left: 50%;transform: translate(-50%,-50%);">
                        <div id="hours-done-this-week">1</div>/<div id="total-hours">10</div>&nbsp hours done this week
                    </div>
                </div>

                <div class="subject-container">
                </div>

                <div class="end"></div>

            </div>

            <div id="profilePage" class="hide">
                <div style="display: flex;flex-direction: row;justify-content: space-between;align-items: center;padding: 0 calc(4vh + 4vw);">
                    <div class="name">Name : ${studentName.first} ${studentName.last}</div> 
                    <div class="objective-title" style="font-family: Arial, Helvetica, sans-serif;">My objective :  
                        <select id="objective-reselect" onchange="resetObjective()">
                            <option value="bt18">≥18</option>
                            <option value="bt17">≥17</option>
                            <option value="bt16">≥16</option>
                       </select>
                    </div>
                </div>
                <div class="input-lvl-container">
                    <div class="input-title subject-title" style="font-family: Arial, Helvetica, sans-serif;">My Level :</div>
                    <div class="level-displayer">
                        Math  
                        <div></div>
                        <div class="input-conatainer">
                            <input type="radio" onclick="resetLvl('Math','bad',event)" name="Math" id="input-Math-bad"> 
                            <input type="radio" onclick="resetLvl('Math','normal',event)" name="Math" id="input-Math-normal">
                            <input type="radio" onclick="resetLvl('Math','good',event)" name="Math" id="input-Math-good">
                            <input type="radio" onclick="resetLvl('Math','exelent',event)" name="Math" id="input-Math-exelent">
                        </div>
                    </div>

                    <div class="level-displayer">
                        Physic  
                        <div></div>
                        <div class="input-conatainer">
                            <input type="radio" onclick="resetLvl('Physic','bad',event)" name="Physic" id="input-Physic-bad"> 
                            <input type="radio" onclick="resetLvl('Physic','normal',event)" name="Physic" id="input-Physic-normal">
                            <input type="radio" onclick="resetLvl('Physic','good',event)" name="Physic" id="input-Physic-good">
                            <input type="radio" onclick="resetLvl('Physic','exelent',event)" name="Physic" id="input-Physic-exelent">
                        </div>


                    </div>

                    <div class="level-displayer">
                        Svt  
                        <div></div>
                        <div class="input-conatainer">
                            <input type="radio" onclick="resetLvl('Svt','bad',event)" name="Svt" id="input-Svt-bad"> 
                            <input type="radio" onclick="resetLvl('Svt','normal',event)" name="Svt" id="input-Svt-normal">
                            <input type="radio" onclick="resetLvl('Svt','good',event)" name="Svt" id="input-Svt-good">
                            <input type="radio" onclick="resetLvl('Svt','exelent',event)" name="Svt" id="input-Svt-exelent">
                        </div>
                    </div>

                    <div class="level-displayer">
                        Arabe  
                        <div></div>
                        <div class="input-conatainer">
                            <input type="radio" onclick="resetLvl('Arabe','bad',event)" name="Arabe" id="input-Arabe-bad"> 
                            <input type="radio" onclick="resetLvl('Arabe','normal',event)" name="Arabe" id="input-Arabe-normal">
                            <input type="radio" onclick="resetLvl('Arabe','good',event)" name="Arabe" id="input-Arabe-good">
                            <input type="radio" onclick="resetLvl('Arabe','exelent',event)" name="Arabe" id="input-Arabe-exelent">
                        </div>
                    </div>

                    <div class="level-displayer">
                        France  
                        <div></div>
                        <div class="input-conatainer">
                            <input type="radio" onclick="resetLvl('France','bad',event)" name="France" id="input-France-bad"> 
                            <input type="radio" onclick="resetLvl('France','normal',event)" name="France" id="input-France-normal">
                            <input type="radio" onclick="resetLvl('France','good',event)" name="France" id="input-France-good">
                            <input type="radio" onclick="resetLvl('France','exelent',event)" name="France" id="input-France-exelent">
                        </div>
                    </div>

                    <div class="level-displayer">
                        Eng  
                        <div></div>
                        <div class="input-conatainer">
                            <input type="radio" onclick="resetLvl('Eng','bad',event)" name="Eng" id="input-Eng-bad"> 
                            <input type="radio" onclick="resetLvl('Eng','normal',event)" name="Eng" id="input-Eng-normal">
                            <input type="radio" onclick="resetLvl('Eng','good',event)" name="Eng" id="input-Eng-good">
                            <input type="radio" onclick="resetLvl('Eng','exelent',event)" name="Eng" id="input-Eng-exelent">
                        </div>
                    </div>

                    <div class="level-displayer">
                        Philo  
                        <div></div>
                        <div class="input-conatainer">
                            <input type="radio" onclick="resetLvl('Philo','bad',event)" name="Philo" id="input-Philo-bad"> 
                            <input type="radio" onclick="resetLvl('Philo','normal',event)" name="Philo" id="input-Philo-normal">
                            <input type="radio" onclick="resetLvl('Philo','good',event)" name="Philo" id="input-Philo-good">
                            <input type="radio" onclick="resetLvl('Philo','exelent',event)" name="Philo" id="input-Philo-exelent">
                        </div>
                    </div>

                    <div class="level-displayer">
                        Info  
                        <div></div>
                        <div class="input-conatainer">
                            <input type="radio" onclick="resetLvl('Info','bad',event)" name="Info" id="input-Info-bad"> 
                            <input type="radio" onclick="resetLvl('Info','normal',event)" name="Info" id="input-Info-normal">
                            <input type="radio" onclick="resetLvl('Info','good',event)" name="Info" id="input-Info-good">
                            <input type="radio" onclick="resetLvl('Info','exelent',event)" name="Info" id="input-Info-exelent">
                        </div>
                    </div>

                    <div class="level-displayer">
                        Option  
                        <div></div>
                        <div class="input-conatainer">
                            <input type="radio" onclick="resetLvl('Option','bad',event)" name="Option" id="input-Option-bad"> 
                            <input type="radio" onclick="resetLvl('Option','normal',event)" name="Option" id="input-Option-normal">
                            <input type="radio" onclick="resetLvl('Option','good',event)" name="Option" id="input-Option-good">
                            <input type="radio" onclick="resetLvl('Option','exelent',event)" name="Option" id="input-Option-exelent">
                        </div>
                    </div>

                    <div class="end"></div>
                </div>
            </div>


            <div id="trackingPage" class="hide">

            <div id="nothingSubmetted" class="hide" style="font-size: calc(2vh + 2vw);text-align: center;color: white;margin-top:calc(1.5vh + 1.5vw);">You haven't submitted any hours for any subject yet . please submit first</div>

            <div class="end" style="order:10000;"></div>
            </div>

            <div id="studyPlanPage" class="hide">

            </div>




            <div id="setObjectivesPage" class="hide">
                <img title="click to add notes" class="sub-img add" src="add.png" onclick="createNoteBox()">
                <div style="width: 100%;" id="addHere">


                </div>
                <div class="end"></div>
            </div>







        </div>
        
    </body>
        `
        document.body.appendChild(script3);
    }
}
