// slot machine
let gameBut = document.querySelector('.reset');
gameBut.addEventListener('click',function(e){
  let newI = document.querySelectorAll('i');

  newI.forEach(function(i){
    i.style.animationPlayState = 'paused';
  })

  gameBut.addEventListener('click',function(){
    newI.forEach(function(i){
      if(i.style.animationPlayState == 'paused'){
        i.style.animationPlayState = 'running';
      }else{
        i.style.animationPlayState ='paused';
      }
    })
  },false);
},false);

//--count down--
// Set the date we're counting down 
let countDownDay = new Date("2023/12/31 23:59:59").getTime();
let time = document.querySelector('.time');
let days = document.querySelector('.days');
let hours = document.querySelector('.hours');
let minutes = document.querySelector('.minutes');
let seconds = document.querySelector('.seconds');
let dd = document.querySelector('#dd');
let hh = document.querySelector('#hh');
let mm = document.querySelector('#mm');
let ss = document.querySelector('#ss');
// let ampm = document.querySelector('.ampm');
// 使用setInterval()，它會依照固定的頻率，重複呼叫同一個函式
let countDown = setInterval(function(){
  // Get today's date and time
  let now = new Date().getTime();
  let timeDistance = countDownDay - now;
  
  let newDays = Math.floor(timeDistance / (1000*60*60*24)); // 一天中的毫秒數 (1000 * 60 * 60 * 24)
  let newHours = Math.floor(timeDistance % (1000*60*60*24) / (1000*60*60)); // 一天中每小時的毫秒數 (1000 * 60 * 60)
  let newMinutes = Math.floor(timeDistance % (1000*60*60) / (1000*60));
  let newSeconds = Math.floor(timeDistance % (1000*60)/1000);
  // let newAm = newDays <= 12? "AM":"PM";
  days.innerHTML = `${newDays}<br><span>Days</span>`;
  hours.innerHTML = `${newHours}<br><span>Hours</span>`;
  minutes.innerHTML = `${newMinutes}<br><span>Minutes</span>`;
  seconds.innerHTML = `${newSeconds}<br><span>Seconds</span>`;

  if(newDays<=0 && newHours<=0 && newMinutes<=0 && newSeconds <=0){
    clearInterval(countDown);//停止計時器，可以呼叫clearInterval()
    time.innerHTML = `<p>the Event has Ended</p>`;
    let eightImg = document.querySelector('.eightImg');
    let eightH2 = document.querySelector('.eightH2');
    eightImg.style.display ='none';
    eightH2.style.display ='none';
  }

  // svg
  dd.style.strokeDashoffset = 260 - (260 * newDays) / 24; // a day 24 hours clock
  hh.style.strokeDashoffset = 260 - (260 * newHours) / 12;
  mm.style.strokeDashoffset = 260 - (260 * newMinutes) / 60;
  ss.style.strokeDashoffset = 260 - (260 * newSeconds) / 60;
})

//talk scroll
window.addEventListener('scroll',function(){  
  let scrolled = document.documentElement.scrollTop /(document.documentElement.scrollHeight-document.documentElement.clientHeight) *100;
  let newScrolled = Math.floor(scrolled);
  console.log(newScrolled);
  let txtOne = document.querySelector('.txtOne');
  let txt = document.querySelectorAll('.txtOne span');
  let timeRightOne = document.querySelector('.timeRightOne');
  let delay = 0;

    txt.forEach(function(i,index){
    delay += 0.1;
    if(index === 6){delay += 0.3};
    i.style.setProperty('--delay',`${delay}s`);
    })

  if(newScrolled < 5){
    txtOne.style.display = 'none';
    timeRightOne.style.display ='none';
  }else if(newScrolled >= 8){
    txtOne.style.display = 'block';
    timeRightOne.style.display ='block';
  }
  if(newScrolled >= 30){
    txtOne.style.display = 'none';
    timeRightOne.style.display ='none';
  }
// txtTwo
  let txtTwo = document.querySelector('.txtTwo');
  let txtTo = document.querySelectorAll('.txtTwo span');
  let timeRightTwo = document.querySelector('.timeRightTwo');
  let delayTwo = 0;

    txtTo.forEach(function(i,index){
    delayTwo += 0.1;
    if(index === 3){delayTwo += 0.4};
    i.style.setProperty('--delayTwo',`${delayTwo}s`);
    })
    if(newScrolled <= 10){
      txtTwo.style.display = 'none';
      timeRightTwo.style.display ='none';
    }else if(newScrolled >= 14){
      txtTwo.style.display = 'block';
      timeRightTwo.style.display ='block';
    }
    if(newScrolled >= 45){
      txtTwo.style.display = 'none';
      timeRightTwo.style.display ='none';
    }

    // txtThree
   let txtThree = document.querySelector('.txtThree');
   // txtThree.innerHTML = txtThree.textContent.replace(/\S/g,"<span>$&</span>"); 
   let txtThr = document.querySelectorAll('.txtThree span');
   let timeRightThree = document.querySelector('.timeRightThree');
   let delayThr = 0;

   txtThr.forEach(function(i,index){
   delayThr += 0.1;
   if(index === 7){delayThr += 0.7};
   i.style.setProperty('--delayThree',`${delayThr}s`);
   })

   if(newScrolled <= 7){
     txtThree.style.display = 'none';
     timeRightThree.style.display ='none';
   }else if(newScrolled >= 15){
     txtThree.style.display = 'block';
     timeRightThree.style.display ='block';
   } 
   
   if(newScrolled >= 53){
     txtThree.style.display = 'none';
     timeRightThree.style.display ='none';
   }
},false);


//cardScroll
let cardCover = document.querySelectorAll('.cover');
let cardBack = document.querySelectorAll('.back');
window.addEventListener('scroll',function(){
  let cardHight = this.scrollY / (documentHeight - windowHeight)*100;
  let newHight = Math.floor(cardHight);
  if(newHight >= 33){
    cardCover.forEach(function(i){
      i.style.transform = 'rotateY(180deg)';
    });
    cardBack.forEach(i=>{
      i.style.transform = 'rotateY(0deg)';
    })
  }else{
    cardCover.forEach(function(i){
      i.style.transform = 'rotateY(0deg)';
    });
    cardBack.forEach(i=>{
      i.style.transform = 'rotateY(180deg)';
    })
  }
},false);

//scroll 視窗捲動百分比
let signUp = document.querySelector('.signUp button');
// console.log(window);
let documentHeight = document.body.scrollHeight;
let windowHeight = window.innerHeight;
window.addEventListener('scroll',function(){
  let h = this.scrollY / (documentHeight - windowHeight)*100;
  let hight = Math.floor(h);
  console.log(hight);
  //button scroll
  if(hight>=42){
    signUp.classList.remove('animate-stars');
    signUp.classList.add('animate-end');
  }else{
    signUp.classList.remove('animate-end');
    signUp.classList.add('animate-stars');
  }

},false);
