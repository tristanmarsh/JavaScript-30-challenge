{
    const inputs = document.querySelectorAll('.controls input');

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        const sizing = e.target.dataset.sizing || '';
        document.documentElement.style.setProperty(`--${name}`, `${value}${sizing}`);
    }

    inputs.forEach(input => input.addEventListener('change', handleChange));
    inputs.forEach(input => input.addEventListener('mousemove', handleChange));
    inputs.forEach(input => input.dispatchEvent(new Event('change')));
}   