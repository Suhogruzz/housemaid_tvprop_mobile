const tasks = document.querySelector('.tasks');
const standards = document.querySelector('.standards');
const extras = document.querySelector('.extras');
const first = document.querySelector('.first-article');
const second = document.querySelector('.second-article');
const third = document.querySelector('.third-article');

tasks.ontouchstart = () => {
    first.scrollIntoView({
        behavior: 'smooth'
    })
    preventDefault();
};

standards.ontouchstart = () => {
    second.scrollIntoView({
        behavior: 'smooth'
    })
    preventDefault();
};

extras.ontouchstart = () => {
    third.scrollIntoView({
        behavior: 'smooth'
    })
    preventDefault();
}
