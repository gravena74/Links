button = document.querySelector('.switch')


button.addEventListener('click', function aaa(){
    const html = document.documentElement

    //if (html.classList.contains('light')){
    //    html.classList.remove('light')
    //}else{
    //    html.classList.add('light')
    //}

    html.classList.toggle('light')
})