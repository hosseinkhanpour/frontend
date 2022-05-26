// select

let element = document.body.querySelector(".number")

// count

function get_count(){
let current = element.textContent
current = Number(current);
// console.log(current);
return current
}

// update

function increment() {
    let current = get_count();
    let next = current + 1;
    element.textContent = next;
}
setInterval(increment,1000)
