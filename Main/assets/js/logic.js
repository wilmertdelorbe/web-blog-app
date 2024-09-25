document.addEventListener('DOMContentLoaded', () => {
  const postList = document.getElementById('post-list');
  const toggleButton = document.getElementById('toggle');

  // Retrieve posts from localStorage
  const posts = JSON.parse(localStorage.getItem('posts')) || [];

  // Display posts
  posts.forEach(post => {
      const postItem = document.createElement('div');
      postItem.classList.add('post-item');
      postItem.innerHTML = `<h3>${post.title}</h3>
                            <p><strong>By: ${post.username}</strong></p>
                            <p>${post.content}</p>`;
      postList.appendChild(postItem);
  });

  // Light/Dark mode toggle functionality
  toggleButton.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      toggleButton.innerHTML = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
  });
});
