function getInfo() {

    let btn=document.getElementById('submit');

    let nameStop=document.getElementById('stopName');

    let ul=document.getElementById('buses');

    let stopId=document.getElementById('stopId');

   let validInputs=[1287,1308,1327,2334];

   if(validInputs.indexOf(stopId.value)>=-1){
       btn.addEventListener('click',function () {

           let li1=document.createElement('li');
           li1.textContent=`Bus 4 arrives in 13 minutes `;
           let li2=document.createElement('li');

           li2.textContent=`Bus 12 arrives in 6 minutes`;
           let li3=document.createElement('li');
           li3.textContent=`Bus 18 arrives in 7 minutes `;

           ul.appendChild(li1);
           ul.appendChild(li2);
           ul.appendChild(li3);

           nameStop.textContent='St Nedelya sq';

       });

   }else if(validInputs.indexOf(stopId.value)===-1){
       btn.addEventListener('click',function () {
           nameStop.textContent='Error';
       })
   }


}

getInfo()