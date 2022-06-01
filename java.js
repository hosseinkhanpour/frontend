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
setInterval(increment,500)
////////////////////////////////////////////////////

let developer_select = document.body.querySelectorAll(".developers-select")
let developer_info = document.body.querySelectorAll(".developers-info")

developer_select.forEach(function tab_interator(item, index) {
    item.addEventListener("click", function onclick(e) {
        developer_select.forEach(function remove_classes(element){
          element.classList.remove("select");  
        });
        let select_element = e.target;
        select_element.classList.add("select");

        developer_info.forEach(function  show_class_info(element) {
            element.classList.remove("show");
        });
        let add_show = developer_info[index];
add_show.classList.add("show");

    });
});

