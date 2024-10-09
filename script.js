document.getElementById('postForm').addEventListener('submit', async function (e) {
    e.preventDefault();
    const content = document.getElementById('postContent').value;
    await fetch('/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ content })
    });
    document.getElementById('postContent').value = '';
    loadPosts();
});

async function loadPosts() {
    const response = await fetch('/posts');
    const posts = await response.json();
    const postsDiv = document.getElementById('posts');
    postsDiv.innerHTML = '';
    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.textContent = post.content;
        postsDiv.appendChild(postElement);
    });
}

loadPosts();
