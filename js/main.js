//Scroll nosotros en index
document.getElementById('go-nosotros').addEventListener('click', () => {
    //anima al elemento
    document.getElementById('nosotros').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});