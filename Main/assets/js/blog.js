const mainContainer = document.querySelector('main');

const createElement = function (elementType, content, parentElement) {
  const newElement = document.createElement(elementType);
  newElement.textContent = content;
  parentElement.appendChild(newElement);

  return newElement;
};

const displayEmptyMessage = function () {
  createElement('h2', 'No blog posts available...', mainContainer);
  const link = createElement('a', 'Submit your own post here!', mainContainer);

  link.href = './index.html';
};

const displayBlogEntries = function () {
  const blogEntries = readLocalStorage();

  if (!blogEntries.length) {
    displayEmptyMessage();
    return;
  }

  for (let blogEntry of blogEntries) {
    const blogArticle = createElement('article', null, mainContainer);

    createElement('h2', blogEntry.title, blogArticle);
    createElement('blockquote', blogEntry.content, blogArticle);
    createElement('p', `Posted by: ${blogEntry.username}`, blogArticle);

    blogArticle.classList.add('card');
  }
};

displayBlogEntries();
