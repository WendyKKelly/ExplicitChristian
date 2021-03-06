import React, { useRef, useState } from 'react';
import Section from './subscribe.style';

export default function Subscribe() {
  // 1. Create a reference to the input so we can fetch/clear it's value.
  const inputEl = useRef(null);
  // 2. Hold a message in state to handle the response from our API.
  const [message, setMessage] = useState('');

  const subscribe = async (e) => {
    e.preventDefault();

    // 3. Send a request to our API with the user's email address.
    const res = await fetch('/api/subscribe', {
      body: JSON.stringify({
        email: inputEl.current.value
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    });

    const { error } = await res.json();

    if (error) {
      // 4. If there was an error, update the message in state.
      setMessage(error);

      return;
    }

    // 5. Clear the input value and show a success message.
    inputEl.current.value = '';
    setMessage('Success! 🎉 You are now subscribed to the newsletter.');
  };

  return (
    <Section>
       <div className="text-6xl md:text-6xl font-bold tracking-tighter leading-tight md:pr-8 p-4">
        {message
          ? message
          : `Newsletter? Yes!`}
      </div>
    <form onSubmit={subscribe}>
      <label htmlFor="email-input">{' '}</label>
      <input
        id="email-input"
        name="email"
        placeholder="Email"
        ref={inputEl}
        required
        type="email"
      />
     
      <div className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8 pt-4">
      <button  type="submit">{'Submit '}</button>
      </div>
    </form>
    </Section>
  );
}
