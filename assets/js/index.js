var btnResultadoA1 = document.getElementById('btnResultadoA1'), btnResultadoA1 = document.getElementById('btnResultadoB2'),
btnResultadoA1 = document.getElementById('btnResultadoC3'), btnResultadoA1 = document.getElementById('btnResultadoD4'),
btnResultadoA1 = document.getElementById('btnResultadoE5'), btnResultadoA1 = document.getElementById('btnResultadoF6'),
btnResultadoA1 = document.getElementById('btnResultadoG7'), btnResultadoA1 = document.getElementById('btnResultadoH8'),
btnResultadoA1 = document.getElementById('btnResultadoI9'), btnResultadoA1 = document.getElementById('btnResultadoJ0');

const botonNegro1 = document.querySelector('#negro1');
const botonRetro = document.querySelector('#retro');
calc = document.getElementById('calc'), reset = document.getElementById('reset');
let resultadoA = document.getElementById('resultadoA'), resultado1 = document.getElementById('resultado1'),
contA = '', cont1;
const ASI = 'ABCDEFGHIJ'



botonNegro1.addEventListener('click', ()=>{
    document.body.classList.toggle('negro11');
    botonNegro1.classList.toggle('active');
    localStorage.setItem('tema', 'dark');
});

botonRetro.addEventListener('click', ()=>{
    document.body.classList.toggle('retro11');
    botonRetro.classList.toggle('active');
    localStorage.setItem('tema', 'retro')
});



const temaEnStorage = ()=>{
    const temaGuardado = localStorage.getItem('tema'); 
    if(temaGuardado == 'dark'){
        document.body.classList.toggle('negro11');
        botonNegro1.classList.toggle('active');
    }else if(temaGuardado == 'retro'){
        document.body.classList.toggle('retro11');
        botonRetro.classList.toggle('active');
    }
}
temaEnStorage();

const A1 = ()=>{
    if(contA == ''){
        resultadoA.innerHTML = 'A';
        contA = 'A';
    }else if(contA == ASI){
        resultado1.innerHTML = 1;
        cont1 = 1;
    }else{
        swal('Ya esta la A');
    }
},


B2 = ()=>{
    if(contA == 'A'){
        resultadoA.innerHTML = 'AB';
        contA = 'AB';
    }else if(cont1 == 1 && contA == ASI){
        resultado1.innerHTML = 12;
        cont1 = 12;
    }else if(cont1 !== 1 && contA !== ASI){
        swal("Faltan letras")
    }else{
        swal("Faltan numeros");
    }
},

C3 = ()=>{
    if(cont1 == 12 && contA == ASI){
        resultado1.innerHTML = 123;
        cont1 = 123;
    }else{
        if(contA == 'AB'){
            resultadoA.innerHTML = 'ABC';
            contA = 'ABC';
        }else if(cont1 !== 12 && contA !== ASI){
            swal('Faltan letras');
        }else if(contA !== 'AB'){
            swal('Faltan numeros');
        }
    }
},

D4 = ()=>{
    if(cont1 == 123 && contA == ASI){
        resultado1.innerHTML = 1234;
        cont1 = 1234;
    }else{
        if(contA == 'ABC'){
            resultadoA.innerHTML = 'ABCD';
            contA = 'ABCD';
        }else if(cont1 !== 123 && contA !== ASI){
            swal('Faltan letras');
        }else if(contA !== 'ABC'){
            swal('Faltan numeros');
        }
    }
},

E5 = ()=>{
    if(cont1 == 1234 && contA == ASI){
        resultado1.innerHTML = 12345;
        cont1 = 12345;
    }else{
        if(contA == 'ABCD'){
            resultadoA.innerHTML = 'ABCDE';
            contA = 'ABCDE';
        }else if(cont1 !== 1234 && contA !== ASI){
            swal('Faltan letras');
        }else if(contA !== 'ABCD'){
            swal('Faltan numeros');
        }
    }
},

F6 = ()=>{
    if(cont1 == 12345 && contA == ASI){
        resultado1.innerHTML = 123456;
        cont1 = 123456;
    }else{
        if(contA == 'ABCDE'){
            resultadoA.innerHTML = 'ABCDEF';
            contA = 'ABCDEF';
        }else if(cont1 !== 12345 && contA !== ASI){
            swal('Faltan letras');
        }else if(contA !== 'ABCDE'){
            swal('Faltan numeros');
        }
    }
},

G7 = ()=>{
    if(cont1 == 123456 && contA == ASI){
        resultado1.innerHTML = 1234567;
        cont1 = 1234567;
    }else{
        if(contA == 'ABCDEF'){
            resultadoA.innerHTML = 'ABCDEFG';
            contA = 'ABCDEFG';
        }else if(cont1 !== 123456 && contA !== ASI){
            swal('Faltan letras');
        }else if(contA !== 'ABCDEF'){
            swal('Faltan numeros');
        }
    }
},

H8 = ()=>{
    if(cont1 == 1234567 && contA == ASI){
        resultado1.innerHTML = 12345678;
        cont1 = 12345678;
    }else{
        if(contA == 'ABCDEFG'){
            resultadoA.innerHTML = 'ABCDEFGH';
            contA = 'ABCDEFGH';
        }else if(cont1 !== 1234567 && contA !== ASI){
            swal('Faltan letras');
        }else if(contA !== 'ABCDEFG'){
            swal('Faltan numeros');
        }
    }
},

I9 = ()=>{
    if(cont1 == 12345678 && contA == ASI){
        resultado1.innerHTML = 123456789;
        cont1 = 123456789;
    }else{
        if(contA == 'ABCDEFGH'){
            resultadoA.innerHTML = 'ABCDEFGHI';
            contA = 'ABCDEFGHI';
        }else if(cont1 !== 12345678 && contA !== ASI){
            swal('Faltan letras');
        }else if(contA !== 'ABCDEFGH'){
            swal('Faltan numeros');
        }
    }
},

J0 = ()=>{
    if(cont1 == 123456789 && contA == ASI){
        resultado1.innerHTML = 1234567890;
        cont1 = 1234567890;
    }else{
        if(contA == 'ABCDEFGHI'){
            resultadoA.innerHTML = 'ABCDEFGHIJ';
            contA = ASI;
        }else if(cont1 !== 123456789 && contA !== ASI){
            swal('Faltan letras');
        }else if(contA !== 'ABCDEFGHI'){
            swal('Faltan numeros');
        }
    }
},

calc1 = ()=>{
    if((resultadoA.innerHTML == 'ABCDEFGHIJ') && (resultado1.innerHTML == 1234567890)){
        swal('Muy bien, ya has acabado');
        setTimeout(() => {
            location.href = 'assets/pages/calculadora.html';
        }, 1000 * 3)
    }else{
        swal('Lo siento, aun no has terminado la actividad')
    }
},

reset1 = ()=>{
    resultadoA.innerHTML = '';
    contA = '';
    resultado1.innerHTML = '';
    cont1;
};