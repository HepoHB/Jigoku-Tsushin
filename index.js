const URL = "language.json";

window.onload = function getLanguage(){
    $(function(){
        fetch(URL).then(res => res.json()).then(data =>{
            for (let index = 0; index < 3; index++) {
                if (window.navigator.language == data.languages[index].language) {
                    document.querySelector(".text").innerHTML = data.languages[2].phrase;
                    document.querySelector("#btn").value = data.languages[2].button;

                }
                
            }

        });

    });

}