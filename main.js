var Lajmi={
    titulli: '',
    permbajta: '',
}

Lajmi.titulli=document.getElementById('titulli-new').value;
Lajmi.permbajta=document.getElementById('permbajtja-new').value;


function shtoLajmin() {
    Lajmi.titulli=document.getElementById('titulli-new').value;
    Lajmi.permbajta=document.getElementById('permbajtja-new').value;

    var formgroup = document.createElement('div');
    formgroup.setAttribute('class', 'form-group');
    
    var image = document.createElement("img");
    image.src = 'UBT-LOGO.png';
    image.setAttribute('class', 'foto-lajmi');

    var titulli = document.createElement('h3');
    var t = document.createTextNode(Lajmi.titulli);
    titulli.appendChild(t);

    var paragrafi = document.createElement('p');
    var par = document.createTextNode(Lajmi.permbajta);
    paragrafi.appendChild(par);

    formgroup.appendChild(image);
    formgroup.appendChild(titulli);
    formgroup.appendChild(paragrafi);

    console.log(formgroup);

    document.getElementById('rightfg').appendChild(formgroup);
    
}