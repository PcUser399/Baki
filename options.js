function generatePage(sub1,sub2,sub3,index){
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
    console.log(how)
    if (how == 'next'){
        globalInfo.currentPage++;
        generatePage(...pagesSubjects[globalInfo.currentPage],globalInfo.currentPage==2? -1:null)
        document.querySelectorAll('input').forEach((el)=>{el.checked = studentLvl[el.dataset.subject]== el.dataset.level ? true:false})
    }
    else if (how == 'back'){
        globalInfo.currentPage-=1;
        generatePage(...pagesSubjects[globalInfo.currentPage],globalInfo.currentPage==0? 0:null)
        document.querySelectorAll('input').forEach((el)=>{el.checked = studentLvl[el.dataset.subject] == el.dataset.level ? true:false})
    }
    else if (how == 'exit'){
        window.location.href='baki.html'
    }
    else if (how == 'finish'){
        window.location.href='baki.html'
    }
    console.log(globalInfo.currentPage)
}
