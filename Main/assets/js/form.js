const blogForm = document.querySelector('form');

const processFormSubmission = function (event) {
  event.preventDefault();

  const userNameInput = document.querySelector('#username').value.trim();
  const blogTitleInput = document.querySelector('#title').value.trim();
  const blogContentInput = document.querySelector('#content').value.trim();

  if (!userNameInput || !blogTitleInput || !blogContentInput) {
    const errorMessage = document.querySelector('#error');
    errorMessage.textContent = 'All fields are required.';

    setTimeout(function () {
      errorMessage.textContent = '';
    }, 4000);

    return;
  }

  const blogData = {
    username: userNameInput,
    title: blogTitleInput,
    content: blogContentInput,
  };

  saveToLocalStorage(blogData);
  navigateToBlogPage();
};

const navigateToBlogPage = function () {
  window.location.href = './blog.html';
};

const saveToLocalStorage = function (blogEntry) {
  const existingBlogs = fetchFromLocalStorage();

  existingBlogs.push(blogEntry);

  const serializedData = JSON.stringify(existingBlogs);

  localStorage.setItem('blogs', serializedData);
};

blogForm.addEventListener('submit', processFormSubmission);
