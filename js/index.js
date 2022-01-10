var theme=document.querySelector('.theme');
theme.addEventListener('click',function(){
    document.querySelectorAll('head link')[7].attributes['href'].value='mdb.dark.min.css';
    console.log(link);
});