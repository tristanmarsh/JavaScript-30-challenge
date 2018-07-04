const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

const stripDeterminers = string => (['a ', 'an ', 'the '].reduce((acc, value) => (
  (string.toLowerCase().indexOf(value) === 0)
    ? string.toLowerCase().substring(value.length)
    : acc.toLowerCase()
), string));

const sortedBands = bands.sort((a, b) => (stripDeterminers(a) < stripDeterminers(b) ? -1 : 1));

document.querySelector('#bands').innerHTML = sortedBands.map(band => `<li>${band}</li>`).join('');
