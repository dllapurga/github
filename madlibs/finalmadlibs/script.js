/* JS Card Slide Off After Submit */

(function () {

  'use strict';
  console.log('reading js');

  const form = document.querySelector('form');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const firstname = document.querySelector('#firstname').value;
    const adj1 = document.querySelector('#adjective1').value;
    const adj2 = document.querySelector('#adjective2').value;
    const adj3 = document.querySelector('#adjective3').value;
    const noun = document.querySelector('#noun').value;
    const adverb = document.querySelector('#adverb').value;
    const medical = document.querySelector('#medicalcondition').value;
    const adj4 = document.querySelector('#adjective4').value;
    const firstname2 = document.querySelector('#firstname2').value;
    const lastname = document.querySelector('#lastname').value;
    


    const story = `<p>Dear <span style = 'color:#4B94B6'>${firstname}</span>,</p>
      <p>
        I hope this postcard finds you <span style = 'color:#4B94B6'>${adj1}</span>. I finally made it to
        San Francisco and this place is absolutely <span style = 'color:#4B94B6'>${adj2}</span>.
        And the people here are <span style = 'color:#4B94B6'>${adj3}</span>.
      </p>
      <p>
        On the flight here, there was a <span style = 'color:#4B94B6'>${noun}</span> seated behind me and it was
        <span style = 'color:#4B94B6'>${adverb}</span> kicking my chair the whole flight. Eventually, I had to
        turn around and say, "Please stop kicking, you're going to give me <span style = 'color:#4B94B6'>${medical}</span>."
      </p>
      <p>
        Anyway, I've really enjoyed my time here so far. I've never been more
        <span style = 'color:#4B94B6'>${adj4}</span>. Because I start my job next week, I won't be able to
        write you for a while. 
      </p>
      <p>
        Be well,<br>
        <span style = 'color:#4B94B6'>${firstname2}</span> <span style = 'color:#4B94B6'>${lastname}</span>
      </p>`;


    document.querySelector('#story-output').innerHTML = story;


    document.querySelector('#current-card').classList.add('slide-out'); 
    document.querySelector('#next-card').classList.add('slide-in');


   
  });

})();


