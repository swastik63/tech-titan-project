// wishlist-section

const wishlist = document.getElementById('wishlist');
wishlist.addEventListener('click', (event) => {
  if (event.target.classList.contains('remove-btn')) {
    const listItem = event.target.parentElement;
    wishlist.removeChild(listItem);
  }
});



//  ---------address-section-js-code-----------
const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const address = document.getElementById('address').value;
  const city = document.getElementById('city').value;
  const state = document.getElementById('state').value;
  const zip = document.getElementById('zip').value;
  const country = document.getElementById('country').value;
  const addressData = {name, address, city, state, zip, country};
  localStorage.setItem('address', JSON.stringify(addressData));
  alert('Address saved successfully!');
});

// -------user_setting_js_code-------

const form = document.querySelector('form');
form.addEventListener('submit', e => {
	e.preventDefault();

	// Get form data
	const name = form.name.value;
	const email = form

