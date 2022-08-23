      const container = document.querySelector(".container"),
      pwShowHide = document.querySelectorAll(".showHidePw"),
      pwFields = document.querySelectorAll(".Password"),
      signUp = document.querySelector(".signup-link"),
      login = document.querySelector(".login-link");

    
    pwShowHide.forEach(eyeIcon =>{
        eyeIcon.addEventListener("click", ()=>{
            pwFields.forEach(pwField =>{
                if(pwField.type ==="password"){
                    pwField.type = "text";

                    pwShowHide.forEach(icon =>{
                        icon.classList.replace("uil-eye-slash", "uil-eye");
                    })
                }else{
                    pwField.type = "password";

                    pwShowHide.forEach(icon =>{
                        icon.classList.replace("uil-eye", "uil-eye-slash");
                    })
                }
            }) 
        })
    }) 
/* 

    signUp.addEventListener("click", ( )=>{
        container.classList.add("active");
    });
    login.addEventListener("click", ( )=>{
        container.classList.remove("active");
    }); */


   
    const nav = document.querySelector(".nav");
    const bar = document.querySelector("#bar");
    const close = document.querySelector("#close");

    if (bar){
        bar.addEventListener('click' , () =>{
            nav.classList.add('active');
        })
    }

    if (close){
        close.addEventListener('click' , () =>{
            nav.classList.remove('active');
        })
    }
    
    
    