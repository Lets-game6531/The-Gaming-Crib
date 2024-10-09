// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

const commentsList = document.getElementById('comments-list');
const commentInput = document.getElementById('comment-input');
const submitComment = document.getElementById('submit-comment');

// Load comments from Firebase
function loadComments() {
    database.ref('comments/').on('value', (snapshot) => {
        const comments = snapshot.val();
        commentsList.innerHTML = '';
        for (let id in comments) {
            const li = document.createElement('li');
            li.textContent = comments[id];
            commentsList.appendChild(li);
        }
    });
}

// Submit a comment to Firebase
submitComment.addEventListener('click', () => {
    const comment = commentInput.value;
    if (comment) {
        const newCommentRef = database.ref('comments/').push();
        newCommentRef.set(comment);
        commentInput.value = '';
    }
});

loadComments();
