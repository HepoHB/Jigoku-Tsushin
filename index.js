const URL = "language.json";
var contentHider = document.querySelector(".hider");
var main = document.getElementById("main");
var phraseContent;
var buttonContent;

window.onload = function getLanguage(){
    now = new Date();
    var times = now.getHours().toString() + now.getMinutes().toString();
    if (times == "00"){
        $(function(){
            fetch(URL).then(res => res.json()).then(data =>{
                for (let index = 0; index < 3; index++) {
                    if (window.navigator.language == data.languages[index].language) {
                        document.title = data.languages[index].name;
                        phraseContent = data.languages[index].phrase;
                        buttonContent = data.languages[index].button;
    
                    }
                    
                }
    
            });
    
        });

        setTimeout(function(){
            document.querySelector("#image").remove();
            contentHider.innerHTML = `
            <div class="text"></div>
            <input type="text" id="inputfield" required/>
            <br />
            <input type="button" id="btn" />
    
            `
            document.querySelector(".text").innerHTML = phraseContent;
            document.querySelector("#btn").value = buttonContent;
    
            let opacity = 0;
            interval = setInterval(() => {
                contentHider.style.opacity = opacity;
                opacity += 0.05;
                if(opacity >= 1){
                    clearInterval(interval);
                
                }
    
            }, 100);
    
            document.getElementById("btn").addEventListener("click",e=>{
                if (document.querySelector("#inputfield").value != "") {
                    let opacity = 1;
                    interval = setInterval(() => {
                        contentHider.style.opacity = opacity;
                        opacity -= 0.05;
                        setTimeout(() => {
                            contentHider.remove();
                            clearInterval(interval);
    
                        }, 3000);
    
                    }, 100);
    
                }
            
            });
    
          }, 2000);

    } else{
        main.remove();
        document.body.classList.remove("mainbody");
        document.title = "404 Not Found";
        document.body.innerHTML = `
        <h1>Not Found</h1>
        <br />
        The requested URL was not found on this server.
        <hr />
        <i>hell world/6.6.6 Server at port 616</i>
        `

    }

}