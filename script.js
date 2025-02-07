const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const result = document.getElementById("result");
const sound = document.getElementById("sound");
const btn = document.getElementById("search-btn");

btn.addEventListener("click" , ()=>{
    let inpWord = document.getElementById("inp-word").value;
    fetch(`${url}${inpWord}`)
       .then((response) => response.json())
       .then((data) => {
            console.log(data);
            result.innerHTML = `
            <div class="word">
                <h3>${inpWord}</h3>
                <button onclick="playSound()">
                    <i class="ri-volume-down-fill" id="vol-btn"></i>
                </button>
            </div>
            <div class="details">
                <p>${data[0].meanings[0].partOfSpeech}</p>
                <p>/${data[0].phonetics[1].text}/</p>
            </div>
            <p class="word-meaning">
                ${data[0].meanings[0].definitions[0].definition}
            </p>
            <p class="word-example">
             Synonym : ${data[0].meanings[0].synonyms[0]}.
            </p>`;
            sound.setAttribute("src" , `${data[0].phonetics[0].audio}`);
       });
});

function playSound(){
    sound.play();
}
