const menuIcon = document.querySelector(".icon i");
    const navBar = document.querySelector(".navbar");
    const myform=document.getElementById("form");
    const project1 = document.querySelector('.project1');
    const project2 = document.querySelector('.project2');
    const project3 = document.querySelector('.project3');
    const project4 = document.querySelector('.project4');
    const project5 = document.querySelector('.project5');
    const project6 = document.querySelector('.project6');

    function showproject1(){
      project1.style.opacity='2'
    }
    setTimeout(showproject1,2000);

    function showproject2(){
      project2.style.opacity='2'
    }
    setTimeout(showproject2,3000);

    function showproject3(){
      project3.style.opacity='2'
    }
    setTimeout(showproject3,4000);

    function showproject4(){
      project4.style.opacity='2'
    }
    setTimeout(showproject4,5000);
    
    function showproject5(){
      project5.style.opacity='2'
    }
    setTimeout(showproject5,6000);

    function showproject6(){
      project6.style.opacity='2'
    }
    setTimeout(showproject6,7000);
    menuIcon.onclick = () => {
      menuIcon.classList.toggle('fa-bars');
  menuIcon.classList.toggle('fa-x'); // Use Font Awesome close icon
  
  // Toggle the visibility of the navbar
  navBar.classList.toggle('active');
    }
    myform.onsubmit=function(event){
        event.preventDefault();
        const username= this.username.value;
        alert("Thank you " +username+ "! we will reach you shortly")
    }