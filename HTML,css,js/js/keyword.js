var currentKeyword = document.getElementById('initial-value');
var keyword = document.querySelector('.keyword_list');

function inactivate(elem){  // 메뉴 비활성화
    elem.classList.remove('keyword-active');
}

function activate(elem){ // 메뉴 할성화
    elem.classList.add('keyword-active');
    currentKeyword = elem;
}
function clickHandler(e){    // 보통 이벤트 handler 안에 길게 쓰기 보다 함수를 쓴다.
    if (currentKeyword){
        inactivate(currentKeyword);
    }
    activate(e.target);
}

keyword.addEventListener('click', clickHandler);