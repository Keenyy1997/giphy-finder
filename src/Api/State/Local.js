const SaveSearch = (value) => { 
  localStorage.setItem('search', value);
};

const ReturnLastSearch = () => { 
  return localStorage.getItem('search') ?? '';
};

export { SaveSearch, ReturnLastSearch };
