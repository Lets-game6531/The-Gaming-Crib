const commentsList = document.getElementById('comments-list');
const commentInput = document.getElementById('comment-input');
const submitComment = document.getElementById('submit-comment');

function loadComments() {
    const comments = JSON.parse(localStorage.getItem('comments')) || [];
    commentsList.innerHTML = comments.map(comment => `<li>${comment}</li>`).join('');
}

submitComment.addEventListener('click', () => {
    const comment = commentInput.value;
    if (comment) {
        const comments = JSON.parse(localStorage.getItem('comments')) || [];
        comments.push(comment);
        localStorage.setItem('comments', JSON.stringify(comments));
        loadComments();
        commentInput.value = '';
    }
});

loadComments();
