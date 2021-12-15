const popMudel = document.querySelector('.pop');
        const demoView = document.getElementById('demo');
       let i = 0;
       let j = 2;
       let textName = 'Anass Chentouf';
       var arr = ['A'];
       function addItem(){
           i++;
           if( i < textName.length){
             arr.push(textName[i])
             let newArray = arr.join('');
             demoView.innerHTML = newArray;
            }
           
        }
        (function (){
            return setInterval(() => {
                 addItem();
            },700);
        })();
      
        function addClass(){
            popMudel.classList.add('class-visible');
        }

        setTimeout(() => {
            addClass();
        }, 10000);
    
       function popHead(){
           document.querySelector('.p-1').style.display = 'block';
           popMudel.classList.remove('class-visible');
       }
    
      