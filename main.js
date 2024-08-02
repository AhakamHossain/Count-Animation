let from = -20;
let to = 21;
const step = to > from ? 1 : - 1;
const btn = document.getElementById(`button`);
const display = document.getElementById(`display`);

btn.addEventListener(`click`,()=>{
    let counter = setInterval(()=>{

        if( from == to ){
            console.log(`hi`);
            clearInterval(counter);
        }else{
            display.innerHTML = from;
            from = from + step;
        }
    },100)
})