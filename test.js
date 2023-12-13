let phone, email, dob, fname, loc, img;

// fetch('https://randomuser.me/api').then((res)=>res.json()).then((data)=>{
// phone =  data.results[0].cell;   
// email = data.results[0].email;
// dob = data.results[0].dob.date.split('T')[0];
// fname = data.results[0].name.title+' '+data.results[0].name.first+' '+data.results[0].name.last;
// loc = data.results[0].location.street.number+','+data.results[0].location.street.name+','+data.results[0].location.city+',['+data.results[0].location.postcode+'],'+data.results[0].location.state+','+data.results[0].location.country;
// img = data.results[0].picture.thumbnail
// document.querySelector('img').src = img;
// document.querySelector('.output').innerHTML = fname;

// })




async function demo(){
    let res = await fetch('https://randomuser.me/api');
    let data = await res.json();

    phone =  data.results[0].cell;   
    email = data.results[0].email;
    dob = data.results[0].dob.date.split('T')[0];
    fname = data.results[0].name.title+' '+data.results[0].name.first+' '+data.results[0].name.last;
    loc = data.results[0].location.street.number+','+data.results[0].location.street.name+','+data.results[0].location.city+',['+data.results[0].location.postcode+'],'+data.results[0].location.state+','+data.results[0].location.country;
    img = data.results[0].picture.thumbnail
    document.querySelector('img').src = img;
    document.querySelector('.output').innerHTML = fname;
}

demo();


function display(info){
    document.querySelector('.output').innerHTML = info;
}

