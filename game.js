"use strict"

const nodes = [
  {
    id: 2,
    text: 'You venture forth in search of answers to where you are when you come across a merchant.',
    options: [
      {
        text: 'Trade the goo for a sword',
        nextText: 3
      },
      {
        text: 'Trade the goo for a shield',
        nextText: 3
      },
      {
        text: 'Ignore the merchant',
        nextText: 3
      }
    ]
  },
  {
    id: 1,
    text: 'You wake up in a strange place and you see a jar of blue goo near you.',
    options: [
      {
        text: 'Take the goo',
        nextText: 2
      },
      {
        text: 'Leave the goo',
        nextText: 2
      }
    ]
  },
  {
    id: 3,
    text: 'After leaving the merchant you start to feel tired and stumble upon a small town next to a dangerous looking castle.',
    options: [
      {
        text: 'Explore the castle',
        nextText: 4
      },
      {
        text: 'Find a room to sleep at in the town',
        nextText: 5
      },
      {
        text: 'Find some hay in a stable to sleep in',
        nextText: 6
      }
    ]
  },
  {
    id: 4,
    text: 'You are so tired that you fall asleep while exploring the castle and are killed by some terrible monster in your sleep.',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 5,
    text: 'Without any money to buy a room you break into the nearest inn and fall asleep. After a few hours of sleep the owner of the inn finds you and has the town guard lock you in a cell.',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 6,
    text: 'You wake up well rested and full of energy ready to explore the nearby castle.',
    options: [
      {
        text: 'Explore the castle',
        nextText: 7
      }
    ]
  },
  {
    id: 7,
    text: 'While exploring the castle you come across a horrible monster in your path.',
    options: [
      {
        text: 'Try to run',
        nextText: 8
      },
      {
        text: 'Attack it with your sword',
        nextText: 9
      },
      {
        text: 'Hide behind your shield',
        nextText: 10
      },
      {
        text: 'Throw the blue goo at it',
        nextText: 11
      }
    ]
  },
  {
    id: 8,
    text: 'Your attempts to run are in vain and the monster easily catches.',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 9,
    text: 'You foolishly thought this monster could be slain with a single sword.',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 10,
    text: 'The monster laughed as you hid behind your shield and ate you.',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 11,
    text: 'You threw your jar of goo at the monster and it exploded. After the dust settled you saw the monster was destroyed. Seeing your victory you decide to claim this castle as your and live out the rest of your days there.',
    options: [
      {
        text: 'Congratulations. Play Again.',
        nextText: -1
      }
    ]
  }
];

function makeStep(question) {
  console.log(question);
  let log = document.getElementById('log')
  let questLI = document.createElement('li');
  let ansUL = document.createElement('ul');
  ansUL.addEventListener('click', function handler() {
    //this will execute only once
    let nextQuestionId = event.target.querySelector('input[name="next-step"]').value;
    if (typeof (+nextQuestionId) == "number") {
      event.target.parentElement.removeEventListener('click', handler);
      event.target.style.backgroundColor = 'green';
      if (+nextQuestionId !== -1) {
        console.log(+nextQuestionId);
        const nextQuestion = nodes.find((q) => q.id === +nextQuestionId);
//        console.log(nextQuestion);
        makeStep(nextQuestion);
      }
    }
  });
  for (let i = 0; i < question.options.length; i++) {
    console.log(question.options[i]);
    let ansOptLI = document.createElement('li');
    ansOptLI.innerHTML = question.options[i].text;
    let nextStep = document.createElement('input');
    nextStep.setAttribute("type", "hidden");
    nextStep.setAttribute("name", "next-step");
    nextStep.setAttribute("value", question.options[i].nextText);
    ansOptLI.appendChild(nextStep);
    ansUL.appendChild(ansOptLI);
  }
  questLI.innerHTML = question.text + "<p>Click to answer:</p>";
  questLI.appendChild(ansUL);
  log.appendChild(questLI);
}

function getOptions(question) {
  let options = '';

  for (let i = 0; i < question.options.length; i++) {
    options += `${i + 1}. ${question.options[i].text}\n`;
  }
  return options;
}

window.onload = function () {
  const firstQuestion = nodes.find((q) => q.id === 1);
  let nextQuestionId = makeStep(firstQuestion);

}