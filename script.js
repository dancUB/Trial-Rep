let name = document.querySelector('input.text').value;
function changeName() {
    document.querySelector('#greeting').innerText = 'Hello ' + name;
}