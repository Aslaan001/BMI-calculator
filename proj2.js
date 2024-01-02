const x=document.querySelector('form');

x.addEventListener('submit',(e)=>{
     e.preventDefault()
    const h= parseInt(document.querySelector('#height').value)
    const w= parseInt(document.querySelector('#weight').value)
    const r= document.querySelector('#results')
    const m= document.querySelector('#msg')


    if(h==='' || h<0 || isNaN(h)){
        r.innerHTML="INVALID INPUT";
    }
    else if(w==='' || w<0 || isNaN(w)){
        r.innerHTML="**INVALID INPUT**";
    }

    
    else{
        const bmi=(w/((h*h)/10000)).toFixed(2);
        
        if(bmi>18.6 && bmi<24.9)
        m.innerHTML="YOU ARE HEALTHY"

        if(bmi>24.90)
        m.innerHTML="OVER WEIGHT";
        
        if(bmi<18.6)
        m.innerHTML="UNDER WEIGHT";

        
        
        r.innerHTML=`BMI=${bmi}`;
    }
    


})