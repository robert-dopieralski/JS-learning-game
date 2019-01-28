let scorefield = document.querySelector('.wynik')
let score = scorefield.firstElementChild
let one = document.querySelector('#one')
let two = document.querySelector('#two')
let three = document.querySelector('#three')
let scorep = 0
//wejsciowa jest tablica ktora zawiera tablice 3 elementowe
//z czego 1 to pytanie a 3 pozostałe to propozycje odpowiedzi
//poprawna odpowiedz zawiera "-" na początku stringa
// przykład inputu arr [["Pytanie za 1 pkt", "-odpowiedz1", "+odpowiedz2", "-odpowiedz3"]]
//uruchomienie z konsoli komenda next()
// mozna pobrac let i = localStorage.getItem('progress') zeby kontynuowac
let i = 0

next()
function next(){
    let arr = [["PYTANIE ZA 1 PKT", "-zlaodpowiedz", "+dobraodpowiedz", "-zlaodpowiedz"],["PYTANIE ZA 2 PKT", "+dobraodpowiedz", "-zlaodpowiedz", "-zlaodpowiedz"]]
    for (i; i < arr.length; i++) {
        let fiszka = arr[i]
        for (j = 0; j < fiszka.length; j++) {
            let a = fiszka[j]
            // zapis do local window.localStorage.setItem('progress', i)
            if (j == 0) {
                document.querySelector('#pytanie').innerHTML = a
            }
            a = fiszka[j].slice(1)
            let b = fiszka[j].slice(0, 1)
            if (j == 1) {
                if (b === "+") {
                    one.addEventListener('click', good)
                }
                one.nextElementSibling.innerHTML = a
            }
            if (j == 2) {
                if (b === "+") {
                    two.addEventListener('click', good)
                }
                two.nextElementSibling.innerHTML = a
            }
            if (j == 3) {
                if (b === "+") {
                    three.addEventListener('click', good)
                }
                three.nextElementSibling.innerHTML = a
            }

        }
        //console.log(i)
        
        if (i === i) {
            break
        }
    }

}

function good() {
    scorep++
    score.innerHTML = "Wynik: " + scorep
    i++
    one.removeEventListener('click', good)
    two.removeEventListener('click', good)
    three.removeEventListener('click', good)
    clearchk()
    next()
}

function clearchk() {
    let f = [one,two,three];
        for(k=0; k<3; k++) {
            if(f[k].type == "checkbox") {
                f[k].checked = false;
            }
        }
    }