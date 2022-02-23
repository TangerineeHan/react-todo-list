// DOM 요소 
const items = document.querySelector('.items');
const form = document.querySelector('.new-form');
const input = document.querySelector('.footer_input');
const addBtn = document.querySelector('.footer_button');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    onAdd();
})

// 이벤트 처리 시 on 붙임
function onAdd() {
    // 1. 사용자가 입력한 텍스트 받아옴 
    const text = input.value;   // 값을 받아옴 
    if (text === '') {
        input.focus();
        return;
    }
    // 2. 새로운 아이템 만듬 (텍스트 + 삭제 버튼)
    const item = createItem(text);
    // 3. items 컨테이너안에 새로 만든 아이템을 추가함
    items.appendChild(item); 
    // 4. 새로 추가된 아이템으로 스크롤링 
    item.scrollIntoView({ block:'center'}); 
    // 5. input을 초기화 함 
    input.value = '';   // 텅 빈 값으로 만듬 
    input.focus();  // 자동으로 cursur focus하게 함 

}

let id = 0; // UUID
function createItem(text) {
    const itemRow = document.createElement('li');
    itemRow.setAttribute('class', 'item_row');
    itemRow.setAttribute('data-id', id);
    itemRow.innerHTML= `
        <div class="item">
            <span class=""item_name">${text}</span>
            <button class="item_delete">
                <i class="fas fa-trash-alt" data-id=${id}></i>
            </button>
        </div>
        <div class="item_divider"></div>`;
    id++;    
    return itemRow; 
}
    
items.addEventListener('click', event => {
    const id = event.target.dataset.id;
    if(id) {
        const toBeDeleted = document.querySelector(`.item_row[data-id = "${id}"]`); 
        toBeDeleted.remove();
    }
});