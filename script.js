// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCv0lol2mMNJGl0O9VWbOhOCf7SsmYn3dM",
  authDomain: "the-gaming-crib.firebaseapp.com",
  databaseURL: "https://the-gaming-crib-default-rtdb.firebaseio.com",
  projectId: "the-gaming-crib",
  storageBucket: "the-gaming-crib.appspot.com",
  messagingSenderId: "531506996072",
  appId: "1:531506996072:web:a9fe814701bb06a5d2ecdd",
  measurementId: "G-Z5EFR1HYC3"
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
