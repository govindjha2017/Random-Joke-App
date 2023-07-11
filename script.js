const btn= document.querySelector('button');
const list = document.querySelector('#list');
const url='https://official-joke-api.appspot.com/random_joke';
btn.addEventListener('click',()=>{
    console.log('clicked');
    fetch(url)
        .then((res)=>{
            // console.log(res.json());
            return res.json();
        })
        .then((data)=>{
            console.log(data);
            list.innerHTML='';
            const li1 = document.createElement('li');
            const li2 = document.createElement('li');
            li1.innerText=data.setup;
            li2.innerText=data.punchline;
            list.append(li1);
            setTimeout(() => {
                list.append(li2);
            },  5000);

         })
        .catch((err)=>{
            console.log(err);
        })

})