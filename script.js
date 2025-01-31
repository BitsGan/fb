// Event listener for posting a message
document.querySelector(".post-box button").addEventListener("click", function () {
    let textarea = document.querySelector(".post-box textarea");
    let postContent = textarea.value.trim();

    // Check if the post is not empty
    if (postContent) {
        // Create a new post
        createPost(postContent);

        // Clear the textarea after posting
        textarea.value = "";
    }
});

// Function to create and display a new post
function createPost(content) {
    const postsContainer = document.querySelector(".posts");

    // Create new post element
    let postElement = document.createElement("div");
    postElement.classList.add("post");

    postElement.innerHTML = `
        <div class="post-header">
            <img src="https://via.placeholder.com/50" alt="User" class="user-img">
            <div>
                <h3>John Doe</h3>
                <span>Just now</span>
            </div>
        </div>
        <p>${content}</p>
        <div class="post-footer">
            <button class="like-btn">Like</button>
            <button>Comment</button>
            <button>Share</button>
        </div>
    `;

    // Append new post to the posts section
    postsContainer.prepend(postElement);

    // Attach the like button functionality
    postElement.querySelector(".like-btn").addEventListener("click", function () {
        toggleLike(postElement.querySelector(".like-btn"));
    });
}

// Function to toggle like/unlike state
function toggleLike(button) {
    if (button.classList.contains("liked")) {
        button.classList.remove("liked");
        button.innerText = "Like";
    } else {
        button.classList.add("liked");
        button.innerText = "Unlike";
    }
}
