(function startapp () {

/////////////////////
// addPricePS
///////////////////////
var addPricePS = document.getElementById("addPricePS");
var mypricePS = document.getElementById("mypricePS");

var PricePs;

addPricePS.onclick = function() {
  PricePs = document.getElementById("PricePs").value;

  if ( PricePs === '') {
    alert("You must write something!");
  } else {
  console.log(PricePs);
  mypricePS.innerHTML = 'price hour is : ' +  PricePs  +' $';
  document.getElementById("PricePs").value = "";

  startdevice();
    }
}

  var  deviceName = document.querySelectorAll(".h1-counter"),
       tableBody= document.getElementById("tableBody"),

  
      startDate,
      startDatesec,
      startDatethird,
      startDatefourth,
      startDatefifth,
      startDatesix,
      startDateseven,
      startDateeight;
  
  
  
  var  timer  = new easytimer.Timer();
  var  timer2 = new easytimer.Timer();
  var  timer3 = new easytimer.Timer();
  var  timer4 = new easytimer.Timer();
  var  timer5 = new easytimer.Timer();
  var  timer6 = new easytimer.Timer();
  var  timer7 = new easytimer.Timer();
  var  timer8 = new easytimer.Timer();
  
  
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); 
  var yyyy = today.getFullYear();
  today = mm + "/" + dd + "/" + yyyy;
  
  ////////////////////////////
  //device 1
  ///////////////////////////
  function  startdevice(){

  startBtn.addEventListener('click', () => {
    timer.start({
        precision: 'secondTenths'
    })
    timer.addEventListener('secondTenthsUpdated', () => {
        const obj = timer.getTimeValues();
        hours.innerText = obj.hours.toString().padStart(2, '0');
        minutes.innerText = obj.minutes.toString().padStart(2, '0');
        seconds.innerText = obj.seconds.toString().padStart(2, '0');
        secTenth.innerText = obj.secondTenths.toString().padStart(2, '0');  
    
    })
    startBtn.disabled = true;
    stopwatch.style.color = "#891111";
    startDate = Date.now();
    tableBody.style.display = "none";
    return;
  })

  stopBtn.addEventListener('click', () => {
    timer.stop();
    startBtn.disabled = false;

    
    tableBody.innerHTML =        
      `<tr id="tr">
     <td >`+   ( deviceName[0].textContent ) + `</td>
     <td >`+   ( hours.innerText + " : " +  minutes.innerText + " : " + seconds.innerText) + `</td>
     <td >`+  (  today  ) + `</td>
     <td >`+  ( Math.floor((Date.now() - startDate) / 1000 / 60 * (PricePs/60) )) + `</td>
   
   </tr>`
   ;
   stopwatch.style.color = "#000";
   hours.textContent = "00";
   minutes.textContent = "00";
   seconds.textContent = "00";
   secTenth.textContent = "00";
   tableBody.style.display = "contents";
   startDate = NaN;
  });
  
  ////////////////////////////
  //device 2
  ///////////////////////////
  
  startBtnsec.addEventListener('click', () => {
    timer2.start({
        precision: 'secondTenths'
    })
    timer2.addEventListener('secondTenthsUpdated', () => {
        const obj = timer2.getTimeValues();
    hourssec.innerText = obj.hours.toString().padStart(2, '0');
    minutessec.innerText = obj.minutes.toString().padStart(2, '0');
    secondssec.innerText = obj.seconds.toString().padStart(2, '0');
    secTenthsec.innerText = obj.secondTenths.toString().padStart(2, '0');
    
    })
    startBtnsec.disabled = true;
    stopwatchsec.style.color = "#891111";
    startDatesec = Date.now();
    tableBody.style.display = "none";
    return;
  });
  
  
  stopBtnsec.addEventListener('click', () => {
    timer2.stop();
    startBtnsec.disabled = false;

    tableBody.innerHTML =        
      `<tr id="tr">
     <td >`+   ( deviceName[1].textContent ) + `</td>
     <td >`+   ( hourssec.innerText + " : " +  minutessec.innerText + " : " + secondssec.innerText) + `</td>
     <td >`+  (  today  ) + `</td>
     <td >`+  ( Math.floor((Date.now() - startDatesec) / 1000 / 60 * (PricePs/60) )) + `</td>
   
   </tr>`
   ;
   stopwatchsec.style.color = "#000";
   hourssec.textContent = "00";
   minutessec.textContent = "00";
   secondssec.textContent = "00";
   secTenthsec.textContent = "00";
   tableBody.style.display = "contents";
   startDatesec = NaN;
  });
  
  
  ////////////////////////////
  //device 3
  ///////////////////////////
  
  startBtnthird.addEventListener('click', () => {
    timer3.start({
        precision: 'secondTenths'
    })
    timer3.addEventListener('secondTenthsUpdated', () => {
        const obj = timer3.getTimeValues();
    hoursthird.innerText = obj.hours.toString().padStart(2, '0');
    minutesthird.innerText = obj.minutes.toString().padStart(2, '0');
    secondsthird.innerText = obj.seconds.toString().padStart(2, '0');
    secTenththird.innerText = obj.secondTenths.toString().padStart(2, '0');
    
    })
    startBtnthird.disabled = true;
    stopwatchthird.style.color = "#891111";
    startDatethird = Date.now();
    tableBody.style.display = "none";
    return;
  });
  
  
  stopBtnthird.addEventListener('click', () => {
    timer3.stop();
    startBtnthird.disabled = false;

    tableBody.innerHTML =        
      `<tr id="tr">
     <td >`+   ( deviceName[2].textContent ) + `</td>
     <td >`+   ( hoursthird.innerText + " : " +  minutesthird.innerText + " : " + secondsthird.innerText) + `</td>
     <td >`+  (  today  ) + `</td>
     <td >`+  ( Math.floor((Date.now() - startDatethird)  / 1000 / 60 * (PricePs/60) )) + `</td>
   
   </tr>`
   ;
   stopwatchthird.style.color = "#000";
   hoursthird.textContent = "00";
   minutesthird.textContent = "00";
   secondsthird.textContent = "00";
   secTenththird.textContent = "00";
   tableBody.style.display = "contents";
   startDatethird = NaN;
  });
  ////////////////////////////
  //device 4
  ///////////////////////////
  
  startBtnfourth.addEventListener('click', () => {
    timer4.start({
        precision: 'secondTenths'
    })
    timer4.addEventListener('secondTenthsUpdated', () => {
        const obj = timer4.getTimeValues();
    hoursfourth.innerText = obj.hours.toString().padStart(2, '0');
    minutesfourth.innerText = obj.minutes.toString().padStart(2, '0');
    secondsfourth.innerText = obj.seconds.toString().padStart(2, '0');
    secTenthfourth.innerText = obj.secondTenths.toString().padStart(2, '0');
    
    })
    startBtnfourth.disabled = true;

    stopwatchfourth.style.color = "#891111";
    startDatefourth = Date.now();
    tableBody.style.display = "none";
    return;
  });
  
  
  stopBtnfourth.addEventListener('click', () => {
    timer4.stop();
    startBtnfourth.disabled = false;

    tableBody.innerHTML =        
      `<tr id="tr">
     <td >`+   ( deviceName[3].textContent ) + `</td>
     <td >`+   ( hoursfourth.innerText + " : " +  minutesfourth.innerText + " : " + secondsfourth.innerText) + `</td>
     <td >`+  (  today  ) + `</td>
     <td >`+  ( Math.floor((Date.now() - startDatefourth)  / 1000 / 60 * (PricePs/60) )) + `</td>
   
   </tr>`
   ;
   stopwatchfourth.style.color = "#000";
   hoursfourth.textContent = "00";
   minutesfourth.textContent = "00";
   secondsfourth.textContent = "00";
   secTenthfourth.textContent = "00";
   tableBody.style.display = "contents";
   startDatefourth = NaN;
  });
 ////////////////////////////
  //device 5
  ///////////////////////////
  
  startBtnfifth.addEventListener('click', () => {
    timer5.start({
        precision: 'secondTenths'
    })
    timer5.addEventListener('secondTenthsUpdated', () => {
        const obj = timer5.getTimeValues();
    hoursfifth.innerText = obj.hours.toString().padStart(2, '0');
    minutesfifth.innerText = obj.minutes.toString().padStart(2, '0');
    secondsfifth.innerText = obj.seconds.toString().padStart(2, '0');
    secTenthfifth.innerText = obj.secondTenths.toString().padStart(2, '0');
    
    })
    startBtnfifth.disabled = true;

    stopwatchfifth.style.color = "#891111";
    startDatefifth = Date.now();
    tableBody.style.display = "none";
    return;
  });
  
  
  stopBtnfifth.addEventListener('click', () => {
    timer5.stop();
    startBtnfifth.disabled = false;

    tableBody.innerHTML =        
      `<tr id="tr">
     <td >`+   ( deviceName[4].textContent ) + `</td>
     <td >`+   ( hoursfifth.innerText + " : " +  minutesfifth.innerText + " : " + secondsfifth.innerText) + `</td>
     <td >`+  (  today  ) + `</td>
     <td >`+  ( Math.floor((Date.now() - startDatefifth)  / 1000 / 60 * (PricePs/60) )) + `</td>
   
   </tr>`
   ;
   stopwatchfifth.style.color = "#000";
   hoursfifth.textContent = "00";
   minutesfifth.textContent = "00";
   secondsfifth.textContent = "00";
   secTenthfifth.textContent = "00";
   tableBody.style.display = "contents";
   startDatefifth = NaN;
  });

   ////////////////////////////
  //device 6
  ///////////////////////////
  
  startBtnsix.addEventListener('click', () => {
    timer6.start({
        precision: 'secondTenths'
    })
    timer6.addEventListener('secondTenthsUpdated', () => {
        const obj = timer6.getTimeValues();
    hourssix.innerText = obj.hours.toString().padStart(2, '0');
    minutessix.innerText = obj.minutes.toString().padStart(2, '0');
    secondssix.innerText = obj.seconds.toString().padStart(2, '0');
    secTenthsix.innerText = obj.secondTenths.toString().padStart(2, '0');
    
    })
    startBtnsix.disabled = true;

    stopwatchsix.style.color = "#891111";
    startDatesix = Date.now();
    tableBody.style.display = "none";
    return;
  });
  
  
  stopBtnsix.addEventListener('click', () => {
    timer6.stop();
    startBtnsix.disabled = false;

    tableBody.innerHTML =        
      `<tr id="tr">
     <td >`+   ( deviceName[5].textContent ) + `</td>
     <td >`+   ( hourssix.innerText + " : " +  minutessix.innerText + " : " + secondssix.innerText) + `</td>
     <td >`+  (  today  ) + `</td>
     <td >`+  ( Math.floor((Date.now() - startDatesix)  / 1000 / 60 * (PricePs/60) )) + `</td>
   
   </tr>`
   ;
   stopwatchsix.style.color = "#000";
   hourssix.textContent = "00";
   minutessix.textContent = "00";
   secondssix.textContent = "00";
   secTenthsix.textContent = "00";
   tableBody.style.display = "contents";
   startDatesix = NaN;
  });
   ////////////////////////////
  //device 7
  ///////////////////////////
  
  startBtnseven.addEventListener('click', () => {
    timer7.start({
        precision: 'secondTenths'
    })
    timer7.addEventListener('secondTenthsUpdated', () => {
        const obj = timer7.getTimeValues();
    hoursseven.innerText = obj.hours.toString().padStart(2, '0');
    minutesseven.innerText = obj.minutes.toString().padStart(2, '0');
    secondsseven.innerText = obj.seconds.toString().padStart(2, '0');
    secTenthseven.innerText = obj.secondTenths.toString().padStart(2, '0');
    
    })
    startBtnseven.disabled = true;

    stopwatchseven.style.color = "#891111";
    startDateseven = Date.now();
    tableBody.style.display = "none";
    return;
  });
  
  
  stopBtnseven.addEventListener('click', () => {
    timer7.stop();
    startBtnseven.disabled = false;

    tableBody.innerHTML =        
      `<tr id="tr">
     <td >`+   ( deviceName[6].textContent ) + `</td>
     <td >`+   ( hoursseven.innerText + " : " +  minutesseven.innerText + " : " + secondsseven.innerText) + `</td>
     <td >`+  (  today  ) + `</td>
     <td >`+  ( Math.floor((Date.now() - startDateseven)  / 1000 / 60 * (PricePs/60) )) + `</td>
   
   </tr>`
   ;
   stopwatchseven.style.color = "#000";
   hoursseven.textContent = "00";
   minutesseven.textContent = "00";
   secondsseven.textContent = "00";
   secTenthseven.textContent = "00";
   tableBody.style.display = "contents";
   startDateseven = NaN;
  });
   ////////////////////////////
  //device 8
  ///////////////////////////
  
  startBtneight.addEventListener('click', () => {
    timer8.start({
        precision: 'secondTenths'
    })
    timer8.addEventListener('secondTenthsUpdated', () => {
        const obj = timer8.getTimeValues();
    hourseight.innerText = obj.hours.toString().padStart(2, '0');
    minuteseight.innerText = obj.minutes.toString().padStart(2, '0');
    secondseight.innerText = obj.seconds.toString().padStart(2, '0');
    secTentheight.innerText = obj.secondTenths.toString().padStart(2, '0');
    
    })
    startBtneight.disabled = true;

    stopwatcheight.style.color = "#891111";
    startDateeight = Date.now();
    tableBody.style.display = "none";
    return;
  });
  
  
  stopBtneight.addEventListener('click', () => {
    timer8.stop();
    startBtneight.disabled = false;

    tableBody.innerHTML =        
      `<tr id="tr">
     <td >`+   ( deviceName[7].textContent ) + `</td>
     <td >`+   ( hourseight.innerText + " : " +  minuteseight.innerText + " : " + secondseight.innerText) + `</td>
     <td >`+  (  today  ) + `</td>
     <td >`+  ( Math.floor((Date.now() - startDateeight)  / 1000 / 60 * (PricePs/60) )) + `</td>
   
   </tr>`
   ;
   stopwatcheight.style.color = "#000";
   hourseight.textContent = "00";
   minuteseight.textContent = "00";
   secondseight.textContent = "00";
   secTentheight.textContent = "00";
   tableBody.style.display = "contents";
   startDateeight = NaN;
  });

}


///////////////////////////////
//add price icon hide / show  /ps
///////////////////////////////    
  
  
  // Get the modal
  var ebModal = document.getElementById('mySizeChartModal');

  // Get the button that opens the modal
  var ebBtn = document.getElementById("mySizeChart");
  
  // Get the <span> element that closes the modal
  var ebSpan = document.getElementsByClassName("ebcf_close")[0];
  
  // When the user clicks the button, open the modal 
  ebBtn.onclick = function() {
      ebModal.style.display = "block";
  }
  
  // When the user clicks on <span> (x), close the modal
  ebSpan.onclick = function() {
      ebModal.style.display = "none";
  }
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
      if (event.target == ebModal) {
          ebModal.style.display = "none";
      }
  }

/////////////////////
// switch navbar
///////////////////////  
  
  var firsttlink = document.querySelector("#firsttlink");
  var sectlink = document.querySelector("#sectlink");
  var thirdtlink = document.querySelector("#thirdtlink");
  var fourtlink = document.querySelector("#fourtlink");
  
  var sectionOne = document.querySelector("#sectionOne");
  var sectiontwo = document.querySelector("#sectiontwo");
  var sectionthird = document.querySelector("#sectionthird");
  var sectionfour = document.querySelector("#sectionfour");
  
  var sectionClicked =[firsttlink, sectlink, thirdtlink, fourtlink ];
  
  for (let i = 0; i < sectionClicked.length; i++) {
    sectionClicked[i].onclick = function(){
  
      if(sectionClicked[i]===firsttlink){
      sectionOne.classList.remove("hide");
    
    }else if(sectionClicked[i]===sectlink){
      sectiontwo.classList.remove("hide");
  
    }else if(sectionClicked[i]===thirdtlink){
      sectionthird.classList.remove("hide");
  
    }else if(sectionClicked[i]===fourtlink){
      sectionfour.classList.remove("hide");
  
    }
  }
  
  }
  
  
///////////////////////////////
// add box & add info in table
///////////////////////////////
  var addsubmit = document.getElementById("addsubmit");
  var addDiv = document.querySelector("#addDiv");
  var addDiv2 = document.querySelector("#addDiv2");
  var addDiv3 = document.querySelector("#addDiv3");
  var addDiv4 = document.querySelector("#addDiv4");
  
  
  var changoutadd ;
  
  addsubmit.onclick = function() {
    var div = document.createElement("div");
    var span = document.createElement("SPAN");
    var divContent = document.createElement("div");

    var inputValue = document.getElementById("myInput").value;
    var inputValuePrice = document.getElementById("myInputPrice").value;
  
    if ((inputValue && inputValuePrice) === '') {
      alert("You must write something!");
    } else if(changoutadd.getElementsByTagName('div').length<20==true){
  
      changoutadd.appendChild(div);
      div.className = "box";
      div.classList.add("box1");
      div.classList.add("divmenuName");

      // div.innerHTML= `<p class='inputValue'>`+inputValue+`</p>`;
      divContent.innerHTML= (`<p  class="textdivContent">`+inputValue +`<br>`+ inputValuePrice+`</p>`);

      // divContent.innerHTML= (`<p class="inputValuePrice">`+inputValuePrice+`</p>`);


    }
    
    document.getElementById("myInput").value = "";
    div.appendChild(span);
    span.className = "close";
    span.innerHTML=    `<img src="images/close.png"  id="removeicon"  alt="playstation"/>`;

    div.appendChild(divContent);
    divContent.className = "contentBox";


 
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function(e) {
        e.currentTarget.parentNode.remove(); 
  
      }
    }

    
    var  contentBox = document.getElementsByClassName("contentBox");
    var i;
   for (i = 0; i < contentBox.length; i++) {
      contentBox[i].onclick = function (e) { 
         console.log(div.textContent);
         var table = document.getElementById("myTable");
         var row = table.insertRow(0);
         var cell1 = row.insertCell(0);
         var cell2 = row.insertCell(1);
         var cell3 = row.insertCell(2);
         var cell4 = row.insertCell(3);
         var cell5 = row.insertCell(4);

        //  var isnum = /\p{L}/u;
         cell1.innerHTML = (e.target.textContent);

         cell2.innerHTML =`<input id="qun" type="number" name="spiritamount" value="0" min="0">`
         cell3.innerHTML = (today);
         cell5.innerHTML =`<input type="button" class="removeicontable" value="X" />`
         

   
   
         var removetable = document.getElementsByClassName("removeicontable");  
         var i;
         for (i = 0; i < removetable.length; i++) {
           removetable[i].onclick = function(e) {
             if(!e)
             e = window.event;
            
            if(e.target.value == "X")
            this.parentElement.parentElement.remove(); 
            updateSubTotal();
             
           }
         }

        var qun = document.getElementById("qun");
         qun.onchange = function() {
         let price = ( e.target.textContent.replace(/[^0-9]/g, '') ) * 1;
         let amount = qun.value * 1;
         let total = (price * amount).toFixed(2);
         cell4.innerHTML = (total);
     
         updateSubTotal(); // Initial call
   
         function updateSubTotal() {
           var tableCAFE = document.querySelector(".tableCAFE"), sumVal = 0;
               
           for(var i = 1; i < tableCAFE.rows.length; i++)
           {
               sumVal = sumVal + parseInt(tableCAFE.rows[i].cells[3].innerHTML);
           }
           
           document.getElementById("val").innerHTML = sumVal;
           console.log(sumVal);
         }

         var removetable = document.getElementsByClassName("removeicontable");  
         var i;
         for (i = 0; i < removetable.length; i++) {
           removetable[i].onclick = function(e) {
             if(!e)
             e = window.event;
            
            if(e.target.value == "X")
            this.parentElement.parentElement.remove(); 
            updateSubTotal();
             
           }
         }
         
       };
       
        //  this.onclick=null;
      }
    }
  };

  var close = document.getElementsByClassName("close");  
  var i;
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function(e) {
      e.currentTarget.parentNode.remove(); 
       }
  }
    
  

  
///////////////////////////////
// switch Menus
///////////////////////////////

  var Menuone = document.getElementById('Menuone');
  var Menutwo = document.getElementById('Menutwo');
  var Menuthird = document.getElementById('Menuthird');
  var Menufour = document.getElementById('Menufour');
  var imgadd = document.querySelector("#btn-modal");
  var Menu1 = document.getElementById('Menu1');
  var Menu2 = document.getElementById('Menu2');
  var Menu3 = document.getElementById('Menu3');
  var Menu4 = document.getElementById('Menu4');
  
  
  var addbox = [Menuone, Menutwo, Menuthird, Menufour];
  
  
  for (let i = 0; i < addbox.length; i++) {
    addbox[i].onclick = function(){
      if(addbox[i]===Menuone){
        changoutadd = addDiv;
        imgadd.innerHTML=`<button  class="btn " id="btn-modal"><img src="images/iconssec1.png" class="modalicon" alt="playstation"/></button>`;
        Menu1.style.display = "block";
        Menu2.style.display = "none";
        Menu3.style.display = "none";
        Menu4.style.display = "none";
       
      }else if (addbox[i]===Menutwo){
        changoutadd = addDiv2;
        Menu2.style.display = "block";
        Menu1.style.display = "none";
        Menu3.style.display = "none";
        Menu4.style.display = "none";    
        imgadd.innerHTML=`<button  class="btn " id="btn-modal"><img src="images/iconssec2.png" class="modalicon" alt="playstation"/></button>`;
  
    
        }else if (addbox[i]===Menuthird){
          changoutadd = addDiv3;
          Menu3.style.display = "block";
          Menu1.style.display = "none";
          Menu2.style.display = "none";
          Menu4.style.display = "none";  
          imgadd.innerHTML=`<button  class="btn " id="btn-modal"><img src="images/iconssec3.png" class="modalicon" alt="playstation"/></button>`;
      
          }else if (addbox[i]===Menufour){
            changoutadd = addDiv4;
            Menu4.style.display = "block";
            Menu1.style.display = "none";
            Menu2.style.display = "none";
            Menu3.style.display = "none";  
            imgadd.innerHTML=`<button  class="btn " id="btn-modal"><img src="images/iconssec4.png" class="modalicon" alt="playstation"/></button>`;
        
            }
      }
  
    }
  
  
///////////////////////////////
// editor content menu
///////////////////////////////  
  
  var editorBtn = document.getElementById('editorBtn');
      var element = document.querySelectorAll('#editor');
  
      editorBtn.addEventListener('click', function(e) {
  
      for (let i = 0; i < element.length; i++) {
  
  
        if (element[i].isContentEditable) {
          // Disable Editing
          element[i].contentEditable = 'false';
          editorBtn.innerHTML = `<img src="images/edit.png" class="editicon" alt="playstation"/>`;
          // You could save any changes here.
        } else {
          element[i].contentEditable = 'true';
          editorBtn.innerHTML = `<img src="images/save.png" class="editicon" alt="playstation"/>`;
        }
  
      }
  
      });
  
///////////////////////////////
// add box icon hide / show  /cafe
///////////////////////////////  

document.getElementById('btn-modal').addEventListener('click', function() {
    document.getElementById('overlay').classList.add('is-visible');
    document.getElementById('modal').classList.add('is-visible');
  });
  
  document.getElementById('close-btn').addEventListener('click', function() {
    document.getElementById('overlay').classList.remove('is-visible');
    document.getElementById('modal').classList.remove('is-visible');
  });
  document.getElementById('overlay').addEventListener('click', function() {
    document.getElementById('overlay').classList.remove('is-visible');
    document.getElementById('modal').classList.remove('is-visible');
  });



})();
  

  
    
  
  
  
  
