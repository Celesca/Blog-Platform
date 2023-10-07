const tag = document.getElementById("tags");
const addButton = document.getElementById("addButton");
const list = document.getElementById("list");
const form = document.getElementById("my_form");

let tagData = [{
    id:1 ,
    text: "เทคโนโลยี"
    
}]

function init() {
    list.innerHTML = `` // เคลียร์ค่า list
    // มันจะไล่ list แต่ละตัวซึ่งเป็น object ออกมา
    tagData.forEach(showNewTag);
}

function addTag(e) {
    e.preventDefault();

    if (tag.value.trim() == '') {
        alert("กรุณาป้อนข้อมูลให้ครบ");
    } else {
        const data = {
            id:autoID() ,
            text: tag.value
        }
        tagData.push(data)
        showNewTag(data)
        tag.value = ``;
    }

}

const showNewTag=(tagName)=> {
    const item = document.createElement('li');
    item.classList.add("li-tags")
    item.innerHTML = `<span>${tagName.text}</span><button class="delete-btn" onclick="removeData(${tagName.id})"><i class="fa-solid fa-xmark"></i></button>`
        
        // นำ  item เข้าไปเพิ่มที่ list โดยอ้างอิง list แล้วเพิ่ม element
        list.appendChild(item)
    
    
    }

function removeData(id) {
    tagData = tagData.filter(x=>x.id !== id)
    init();
}

function autoID() { // สุ่มรหัสไอดี ซึ่ง Math.random มันจะสุ่ม 0.0 - 1.0
    return Math.floor(Math.random()*1000000)
}

// form.addEventListener('submit',addTag);
addButton.addEventListener('click', addTag);
init();

const showSuccess=()=> {
    alert("Post Successfully.");
}