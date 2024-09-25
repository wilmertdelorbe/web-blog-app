const toggleButton = document.querySelector('#toggle');

const switchTheme = function (theme) {
  let iconSymbol, highlightColor;

  if (theme === 'light') {
    iconSymbol = '☀️';
    highlightColor = '#ffb100';
  } else {
    iconSymbol = '🌒';
    highlightColor = '#8570a5';
  }

  toggleButton.textContent = iconSymbol;

  document.body.className = theme;

  document.documentElement.style.setProperty('--circle-color', highlightColor);
};

const toggleThemeMode = function () {
  const currentTheme = getCurrentTheme();

  let newTheme;

  if (currentTheme === 'light') {
    newTheme = 'dark';
  } else {
    newTheme = 'light';
  }

  switchTheme(newTheme);
  saveThemePreference(newTheme);
};

const retrieveBlogsFromStorage = function () {
  const storedBlogs = localStorage.getItem('blogs');
  const blogsArray = JSON.parse(storedBlogs);

  return blogsArray || [];
};

const getCurrentTheme = function () {
  const savedTheme = localStorage.getItem('mode') || 'dark';

  return savedTheme;
};

const saveThemePreference = function (theme) {
  localStorage.setItem('mode', theme);
};

switchTheme(getCurrentTheme());

toggleButton.addEventListener('click', toggleThemeMode);
