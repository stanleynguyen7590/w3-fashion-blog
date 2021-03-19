function toggleSubscribeForm(subscribeForm) {
    let isOpen = subscribeForm.style['display'] === ''?false:true;
    if (isOpen) {
        subscribeForm.style['display'] = '';
    } else {
        subscribeForm.style['display'] = 'flex';
    }
}

let subscribeBtn= document.querySelector(".subscription__btn");
let subscribeForm = document.querySelector(".subscription__form");
let subscribeCloseBtn = document.querySelector(".subscription__form_close_btn");
let subscribeSubmittBtn = document.querySelector('.subscription__form_submit_btn');
let sidebarSubscibeBtn = document.querySelector('.sidebar__subscription_btn');


subscribeBtn.onmouseup = function() {
    toggleSubscribeForm(subscribeForm)
};
sidebarSubscibeBtn.onmouseup = function() {
    toggleSubscribeForm(subscribeForm)
};
subscribeCloseBtn.onmouseup = function() {
    toggleSubscribeForm(subscribeForm)
};
subscribeSubmittBtn.onmouseup = function() {
    toggleSubscribeForm(subscribeForm)
};

