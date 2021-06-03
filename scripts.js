
document.addEventListener("DOMContentLoaded", () => {
  var isImageActivated = 1;


  function getAge(){
    var actualDate = new Date();
    var bornDate = new Date(1996, 6, 20, 0, 0, 0);
    var qMonthdays = new Date(actualDate.getFullYear(), actualDate.getMonth(), 0).getDate();
    var monthDifference = actualDate.getMonth() - bornDate.getMonth();

    //Real years age
    var year = actualDate.getFullYear() - bornDate.getFullYear();
    if(monthDifference < 0 || monthDifference === 0 && actualDate.getDate() < bornDate.getDate())
      year = year - 1;


    //Real months age
    var month = Math.abs(bornDate.getMonth() - actualDate.getMonth());
    if(bornDate.getMonth() >= actualDate.getMonth())
      month = Math.abs(bornDate.getMonth() - ( actualDate.getMonth() + 12 ));

    if(actualDate.getDate() < bornDate.getDate()){
      month = month - 1;
    }

    month = month % 12;

    //Real days age
    var day = Math.abs(bornDate.getDate() - actualDate.getDate());
    if(bornDate.getDate() >= actualDate.getDate())
      day = Math.abs(bornDate.getDate() - ( actualDate.getDate() + qMonthdays ));

    if(actualDate.getDate() === bornDate.getDate()){
      day = 0;
    }

    //Real Hours age
    var hour = actualDate.getHours() % 12;

    //Real mins age
    var min = actualDate.getMinutes();

    //Real secs age
    var sec = actualDate.getSeconds();

    return [year, month, day, hour, min, sec];

  }

  function setAge(){
    var age = getAge();
    secs.innerHTML = (age[5] < 10) ? "0" + age.pop() : age.pop();
    mins.innerHTML = (age[4] < 10) ? "0" + age.pop() : age.pop();
    hours.innerHTML = (age[3] < 10) ? "0" + age.pop() : age.pop();
    days.innerHTML = (age[2] < 10) ? "0" + age.pop() : age.pop();
    months.innerHTML = (age[1] < 10) ? "0" + age.pop() : age.pop();
    years.innerHTML = age.pop();
  }

  setAge()
  setInterval(setAge, 1000);



  function showTopCard(){
    let circleImage = document.getElementById("meImage");
    let navbarContent = document.getElementById("navbarContent");
    circleImage.addEventListener("click", () => {
      isImageActivated = (isImageActivated % 2) + 1
      if(isImageActivated === 2){
        circleImage.style.transform = "translateX(" + 800 +"px)";
        navbarContent.style.width = "920px";
        navbarContent.style.display = "block";
        navbarContent.style.animation = "enlarge ease-in-out 0.5s";
      }
      else if(isImageActivated === 1){
        circleImage.style.transform = "translateX(" + 0 +"px)";
        navbarContent.style.width = "120px";
        navbarContent.style.animation = "shorten ease-in-out 0.5s"; 
        setTimeout(() => {
          navbarContent.style.display = "none";
        }, 390);
      }
    });
  }
  showTopCard();

  var actualBackgroundPos = 0;
  window.addEventListener("scroll", () => {
    
    if(window.pageYOffset <= 300){
      actualBackgroundPos = (250 - window.pageYOffset * 0.4);
      background.style.backgroundPositionY = (250 - window.pageYOffset * 0.4) + "px";
    }
    else{
      background.style.backgroundPositionY = (actualBackgroundPos - 60 + window.pageYOffset * 0.2) + "px";
    }
    if(window.pageYOffset >= 90){
      c.style.animation = "move-c ease-in-out 0.5s";
      c.style.color = "red";
    }
    
    if(window.pageYOffset >= 180){
      a.style.animation = "move-a ease-in-out 0.5s";
      a.style.color = "red";
    }
    
    if(window.pageYOffset >= 270){
      m.style.animation = "move-m ease-in-out 0.5s";
      m.style.color = "red";
    }
    
    if(window.pageYOffset >= 360){
      i.style.animation = "move-i ease-in-out 0.5s";
      i.style.color = "red";
    }
    
    if(window.pageYOffset >= 450){
      l.style.animation = "move-l ease-in-out 0.5s";
      l.style.color = "red";
    }
    if(window.pageYOffset >= 540){
      o.style.animation = "move-o ease-in-out 0.5s";
      o.style.color = "red";
    }
  });
});
