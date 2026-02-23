// console.log('connected')

let interviewList = [];
let rejectedList = [];
let currentStotus = 'all'

let total = document.getElementById('total-count');
let interviewCount = document.getElementById('interview-count');
let rejectedCount = document.getElementById('rejected-count');


const allFilterBtn = document.getElementById('all-filter-btn');
const interviewFilterBtn = document.getElementById('interview-filter-btn');
const rejectedFilterbtn = document.getElementById('rejected-filter-btn');

// Main cotainer 
const  allcardsSection = document.getElementById('all-cards');
const mainContainer = document.querySelector('main');
const filtareSection = document.getElementById('filtared-section')


function calculateCount (){
    total.innerText = allcardsSection.children.length;
    interviewCount.innerText = interviewList.length;
    rejectedCount.innerText = rejectedList.length;
}

calculateCount ()

function toggleStyle(id){

    // 1st remove 
    allFilterBtn.classList.remove('bg-[#3B82F6]' , 'text-white');
    interviewFilterBtn.classList.remove('bg-[#3B82F6]' , 'text-white');
    rejectedFilterbtn.classList.remove('bg-[#3B82F6]' , 'text-white');

    // 2nd add  
    allFilterBtn.classList.add('bg-gray-300' , 'text-black');
    interviewFilterBtn.classList.add('bg-gray-300' , 'text-black');
    rejectedFilterbtn.classList.add('bg-gray-300' , 'text-black');

    


    const selected = document.getElementById(id)

    currentStotus = id
    console.log(currentStotus);

    // 3rd selected - 
    selected.classList.remove('bg-gray-300' , 'text-black')
    selected.classList.add('bg-[#3B82F6]' , 'text-white')

    if(id=='interview-filter-btn'){
        allcardsSection.classList.add('hidden');
        filtareSection.classList.remove('hidden');
        renderinterview();    
    }
    else if(id == 'all-filter-btn'){
        allcardsSection.classList.remove('hidden');
        filtareSection.classList.add('hidden'); 
    }
    else if(id=='rejected-filter-btn'){
        allcardsSection.classList.add('hidden');
        filtareSection.classList.remove('hidden')
        
        renderrejected ()
    }

}


mainContainer.addEventListener('click', function(event){

    if (event.target.classList.contains('interview-btn')){

            const parenNode = event.target.parentNode.parentNode;
        //কার্ড এর মান 
            const applyTrack = parenNode.querySelector('.applyTrack').innerText
            const title = parenNode.querySelector('.title').innerText
            const duration = parenNode.querySelector('.duration').innerText
            const salary = parenNode.querySelector('.salary').innerText
            const stotus = parenNode.querySelector('.stotus').innerText
            const notes = parenNode.querySelector('.notes').innerText
                  
            parenNode.querySelector('.stotus').innerText = 'interview'

            const cardInfo = {
                applyTrack,
                title, 
                duration,
                salary,
                stotus:'interview',
                notes
        
            }

            //  console.log(cardInfo);

            const applyExist = interviewList.find(item => item.applyTrack == cardInfo.applyTrack) ;
            
            

            if(!applyExist){
                interviewList.push(cardInfo);
            }

            rejectedList = rejectedList.filter(item=> item.applyTrack != cardInfo.applyTrack)

            calculateCount ()
            renderinterview ()

        }
    
 

    else if (event.target.classList.contains('rejected-btn')){

        
            const parenNode = event.target.parentNode.parentNode;
        
            const applyTrack = parenNode.querySelector('.applyTrack').innerText
            const title = parenNode.querySelector('.title').innerText
            const duration = parenNode.querySelector('.duration').innerText
            const salary = parenNode.querySelector('.salary').innerText
            const stotus = parenNode.querySelector('.stotus').innerText
            const notes = parenNode.querySelector('.notes').innerText
           
        
            parenNode.querySelector('.stotus').innerText = 'Rejected'

            const cardInfo = {
                applyTrack,
                title, 
                duration,
                salary,
                stotus:'Rejected',
                notes
        
            }
    
            //  console.log(cardInfo);

            const applyExist = rejectedList.find(item => item.applyTrack == cardInfo.applyTrack) ;
            
            

            if(!applyExist){
                rejectedList.push(cardInfo);
            }

            renderrejected ()
            interviewList = interviewList.filter(item=> item.applyTrack != cardInfo.applyTrack)

            if(currentStotus == "interview-filter-btn"){
                renderinterview();
            }

            calculateCount ()
        
        }
})


function renderinterview (){


    filtareSection.innerHTML='';

     if(interviewList.length === 0){
        
        let div = document.createElement('div');
        div.className = ' text-gray-500 text-[20px] p-10';
        div.innerHTML = `<div class="empoty bg-white p-10 my-5 ">
                        <img src="img/docs.png" >
                        <p class="text-[25px]">No jobs available</p>
                        <p>Check back soon for new job opportunities</p>
                    </div>`;
        filtareSection.appendChild(div);
        return; 
    }

    for(let Intrv of interviewList){

        console.log(Intrv)

        let div =document.createElement('div');
        div.className ='card flex bg-white justify-between p-8 border rounded-2xl border-gray-200 my-5 '
        div.innerHTML = `
        <!-- Main part 1 -->
                    <div class="space-y-4"> 
                        <!-- part 1  -->
                        <div>
                            <h4 class="applyTrack text-[#002C5C] text-[35px] font-semibold my-[10px]"> ${Intrv.applyTrack}</h4>
                            <p class="title text-[20px] text-gray-500"> 
                                ${Intrv.title}
                            </p>
                        </div>
                        <!-- part 2  -->
                        <div class="flex gap-4">
                            <p class= "duration">${Intrv.duration}             
                            </p>

                            <p class= "salary ">${Intrv.salary} </p>
                        </div>
                        <!-- part 3 -->
                        <div>
                            <p class="stotus bg-green-200 text-green-500 w-[30%] lg:w-[20%]   p-1 rounded text-center font-bold">
                                ${Intrv.stotus}
                            </p>
                            <p class="notes text-[14px] my-2">${Intrv.notes}</p>
                        </div>
                        <!-- part 4  -->
                        <div>
                            <button  class="interview-btn border rounded bg-green-500 text-white  font-semibold px-4 py-2">Interview</button>
                            
                            <button  class="rejected-btn border rounded border-red-500 text-red-500 hover:bg-red-600 hover:text-white font-semibold px-4 py-2">Rejected</button>
                        </div>

                    </div>

                    <!--Main part 2 -->
                    <div>
                        <p class="delate bg-gray-200 text-gray-400 py-2 px-4 rounded-[10px] hover:bg-gray-600 hover:text-white "> <i class="fa-regular fa-trash-can"></i></p>
                    </div>

        `
        filtareSection.appendChild(div);
    }
}


function renderrejected (){

    
    filtareSection.innerHTML='';

     if(rejectedList.length === 0){
        // কোনো কার্ড নেই
        let div = document.createElement('div');
        div.className = 'text-gray-500 text-[20px] p-10';
        div.innerHTML = `<div class="empoty bg-white p-10 my-5 ">
                        <img src="img/docs.png" >
                        <p class="text-[25px]">No jobs available</p>
                        <p>Check back soon for new job opportunities</p>
                    </div>`;
        filtareSection.appendChild(div);
        return; // এখান থেকে ফাংশন শেষ
    }

    for(let rej of rejectedList ){

        console.log(rej)
        let div =document.createElement('div');
        div.className ='card flex bg-white justify-between p-8 border rounded-2xl border-gray-200 my-5 '
        div.innerHTML = `
         
           <div class="space-y-4"> 
                        <!-- part 1  -->
                        <div class="plant-box">
                            <h4 class="applyTrack text-[#002C5C] text-[35px] font-semibold my-[10px]">${rej.applyTrack}</h4>
                            <p class="title text-[20px] text-gray-500"> 
                                ${rej.title}
                            </p>
                        </div>
                        <!-- part 2  -->
                        <div class="flex gap-4">
                            <p class= "duration">${rej.duration}            
                            </p>

                            <p class= "salary ">${rej.salary} </p>
                        </div>
                        <!-- part 3 -->
                        <div>
                            <p class="stotus bg-red-200 text-red-500 w-[15%] p-1 rounded text-center font-bold">
                                ${rej.stotus}
                            </p>
                            <p class="notes">${rej.notes}</p>
                        </div>
                        <!-- part 4  -->
                        <div>
                            <button  class="interview-btn border border-green-500  rounded text-green-500  hover:bg-green-500 hover:text-white font-semibold px-4 py-2">Interview</button>
                            
                            <button  class="rejected-btn  rounded bg-red-500 text-white  font-semibold px-4 py-2">Rejected</button>
                        </div>

                    </div>

                    <!--Main part 2 -->
                    <div>
                        <p class="delate bg-gray-200 text-gray-400 py-2 px-4 rounded-[10px] hover:bg-gray-600 hover:text-white "> <i class="fa-regular fa-trash-can"></i></p>
                    </div>
     
        `
        filtareSection.appendChild(div);
    }
}

