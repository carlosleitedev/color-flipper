const colors = ['green', 'red', 'rgba(133,122,200)', '#f15025'];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', () => {
	const rgba = `rgba(
        ${getRandomNumbers(255)},
        ${getRandomNumbers(255)},
        ${getRandomNumbers(255)})`;

	console.log(rgba);

	document.body.style.backgroundColor = rgba;
	color.textContent = rgba;
});

const getRandomNumbers = (colorNumber) => {
	return Math.floor(Math.random() * colorNumber);
};
