const sub = document.getElementById("sub")
let inpt = document.getElementById("inpt")
const myForm = document.getElementById("myForm")
let ans =  document.getElementById("ans")
let video1 = document.getElementById("myVideo")
let video2 = document.getElementById("myVideo2")
let video3 = document.getElementById("myVideo3")
let video4 = document.getElementById("myVideo4")


sub.addEventListener('click', function(e){
e.preventDefault()
printThala()
inpt.value = ""



})

function printThala(){
    if(inpt.value.length === 0){
        alert("enter the something");
    }
    else if(inpt.value.length === 7){
       ans.innerHTML = `thala for reason`
       video1.style.display = "block"
       video1.play()

       video2.style.display = "none"
       video2.pause()

       video3.style.display = "none"
       video3.pause()

       video4.style.display = "none"
        video4.pause()
       
    }
    else if(inpt.value == 7){
        ans.innerHTML = `thala for reson`
        video1.style.display = "none"
        video1.pause()

        video2.style.display = "none"
        video2.pause()

        video3.style.display = "none"
       video3.pause()

        video4.style.display = "block"
        video4.play()
      
    }

    else if(inpt.value == 8){
        ans.innerHTML = ""
        video3.style.display = "block"
           video3.play()

           video1.style.display = "none"
        video1.pause()

        video2.style.display = "none"
        video2.pause()

        video4.style.display = "none"
        video4.pause()
    }

    else if(inpt.value == 52){
        ans.innerHTML = `thala for reson`
        video2.style.display = "block"
        video2.play()

        video1.style.display = "none"
        video1.pause()

        video3.style.display = "none"
        video3.pause()
 
         video4.style.display = "none"
         video4.pause()

    }
    else if(inpt.value == 25){
        ans.innerHTML = `thala for reason`
    }
    else if(inpt.value == 61){
        ans.innerHTML = `thala for reason`
    }

else if(inpt.value == 16){
    ans.innerHTML = `thala for reason`
}

else if(inpt.value == 34){
    ans.innerHTML = `thala for reason`
}

else if(inpt.value == 43){
    ans.innerHTML = `thala for reason`
}


    
    else{
        ans.innerHTML = `no thala for you`

        video2.style.display = "none"
        video2.pause()

        video1.style.display = "none"
        video1.pause()

        video3.style.display = "none"
        video3.pause()
 
         video4.style.display = "none"
         video4.pause()

    }
}



