document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  const usernameInput = document.getElementById('username');
  const titleInput = document.getElementById('title');
  const contentInput = document.getElementById('content');
  const errorElement = document.getElementById('error');

  form.addEventListener('submit', (e) => {
      e.preventDefault();

      const username = usernameInput.value.trim();
      const title = titleInput.value.trim();
      const content = contentInput.value.trim();

      // Validation
      if (!username || !title || !content) {
          errorElement.textContent = 'Please fill in all fields.';
          return;
      }

      // Create blog post object
      const post = {
          username,
          title,
          content,
      };

      // Save to localStorage
      const posts = JSON.parse(localStorage.getItem('posts')) || [];
      posts.push(post);
      localStorage.setItem('posts', JSON.stringify(posts));

      // Redirect to posts page
      window.location.href = 'blog.html';
  });
});
