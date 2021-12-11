const projects = [
    '01-Stats-Preview',
    '02-Huddle'
];

const list = document.getElementById('list');

projects.forEach((name, i) => {
    const listItem = document.createElement('li');

    listItem.innerHTML = `
		<a href="/${name}/code/index.html">
			<img src="/${name}/task/design/desktop-design.jpg" alt="${name}" />
			<p>${formatProjectName(name)}</p>
		</a>
	`;

    list.appendChild(listItem);
});

function formatProjectName(name) {
    return name
        .split('-')
        .map((word) => word[0].toUpperCase() + word.slice(1))
        .join(' ');
}