import { useState } from 'react';
import { hello_world_backend } from 'declarations/hello-world-backend';

function App() {
  const [greeting, setGreeting] = useState('');
  const [greeting2, setGreeting2] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    const name = event.target.elements.name.value;
    hello_world_backend.greet(name).then((greeting) => {
      setGreeting(greeting);
    });
    return false;
  }

  function handleSubmit2(event) {
    event.preventDefault();
    hello_world_backend.submittedNames().then((greeting2) => {
      setGreeting2(greeting2);
      //console.log('greeting2',greeting2);
    });
    return false;
  }

  return (
    <main>
      <img src="/logo2.svg" alt="DFINITY logo" />
      <br />
      <br />
      <form action="#" onSubmit={handleSubmit}>
        <label htmlFor="name">Enter your name: &nbsp;</label>
        <input id="name" alt="Name" type="text" />
        <button type="submit">Click Me!</button>
      </form>
      <section id="greeting">{greeting}</section>

      <form action="#" onSubmit={handleSubmit2}>
        <label htmlFor="name">Get submitted names</label>
        <button type="submit">Click Me!</button>
      </form>

      {greeting2 &&
        <section id="greeting">Submitted names:
          {greeting2.map((greeting, index) => (
            <div key={index}>{greeting}</div>
          ))}
        </section>}
    </main>
  );
}

export default App;
