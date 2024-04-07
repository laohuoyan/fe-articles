fetch('https://css-tricks.com/feed/').then(res => res.text()).then(text => console.log(JSON.stringify(text)))
