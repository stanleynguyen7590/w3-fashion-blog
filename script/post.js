/**
Script for Like Button
 */
let likeBtnList = document.querySelectorAll(".blog__post_btn_like")
let likeBtnIcon = document.querySelector(".blog__post_btn_like i")
for (let i in likeBtnList) {
    likeBtnList[i].onmouseup = function() {
        likeBtnList[i].innerHTML = '<i class="ti-check"></i>Liked'
    }
}

/*
Script to show/hide replies button
*/ 
function toggleComments(comments) {
    let isOpen = comments.style['display'] === 'none'?false:true;
    if (!isOpen) {
        comments.style['display'] = 'block';
    } else {
        comments.style['display'] = 'none';
    }
}
let replyBtnLists = document.querySelectorAll(".blog__post_btn_reply");
let comments = document.querySelectorAll(".blog__post_comment_list");

for (let i in replyBtnLists) {
    replyBtnLists[i].onmouseup = function() {
        toggleComments(comments[i]);
    }
}