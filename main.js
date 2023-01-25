let fields = document.querySelectorAll('.fields');

fields.forEach( element => {
    let input = element.querySelector('.input');
    let highlight = element.querySelector('.highlight');
    
    input.addEventListener('keyup', e => {
        let value = input.value;
        highlight.innerHTML = value;

    });
});