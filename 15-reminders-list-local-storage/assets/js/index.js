{
  const addItemsForm = document.querySelector('.add-items');
  const itemsList = document.querySelector('.plates');
  const formInput = document.querySelector('[name="item"]');
  let items = [];

  const renderList = (items, itemsList) => {
    itemsList.innerHTML = items.reduce((acc, item, index) => (
      `${acc}<li>
        <input type="checkbox" ${item.checked ? 'checked' : ''} />
        <label data-item="${index}">
          ${item.checked ? `<del>${item.text}</del>` : `${item.text}`}
        </label>
      </li>`
    ), '');
  };

  const setLocalState = items => {
    localStorage.setItem('items', JSON.stringify(items));
  };

  const onAddItemsFormSubmit = e => {
    e.preventDefault();
    const text = formInput.value;
    items.push({
      text,
      checked: false,
    });
    e.target.reset();
    renderList(items, itemsList);
    setLocalState(items);
  };

  const onItemClick = e => {
    if (e.target.matches('label')) {
      e.preventDefault();
      const item = e.target.dataset.item;
      items[item].checked = !items[item].checked;
      renderList(items, itemsList);
      setLocalState(items);
    }
  };

  const loadLocalState = () => {
    const retrived = JSON.parse(localStorage.getItem('items'));
    items = retrived !== null ? retrived : [];
  };

  const onClear = () => {
    if (window.confirm('Clear All Items?')) {
      setLocalState([]);
      loadLocalState();
      renderList(items, itemsList);
    }
  };

  const registerEventListeners = () => {
    addItemsForm.addEventListener('submit', onAddItemsFormSubmit);
    itemsList.addEventListener('click', onItemClick);
    document.querySelector('.clear').addEventListener('click', onClear);
  };

  (function initRemindersApp() {
    loadLocalState();
    registerEventListeners();
    renderList(items, itemsList);
    setLocalState(items);
  }());
}
