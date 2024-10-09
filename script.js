// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    databaseURL: "https://YOUR_PROJECT_ID.firebaseio.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const database = firebase.database();

document.getElementById('postForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const content = document.getElementById('postContent').value;
    addPost(content);
    document.getElementById('postContent').value = '';
});

function addPost(content) {
    const postsRef = database.ref('posts');
    postsRef.push().set({ content });
}

database.ref('posts').on('value', (snapshot) => {
    const postsDiv = document.getElementById('posts');
    postsDiv.innerHTML = '';
    snapshot.forEach(childSnapshot => {
        const post = childSnapshot.val();
        const postElement = document.createElement('div');
        postElement.textContent = post.content;
        postsDiv.appendChild(postElement);
    });
});
