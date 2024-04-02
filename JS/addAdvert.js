document.getElementById('phone').addEventListener('focus', (e) => {
    let input = e.target;
    if(!input.value.startsWith('+373')){
        input.value = '+373';
    }
});
