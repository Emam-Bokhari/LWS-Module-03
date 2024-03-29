import { useState } from 'react';

export default function Chat({ contact }) {
  const [text, setText] = useState('');
  return (
    <section className="chat">
      <textarea 
      className='border-2 border-black mt-3'
        value={text}
        placeholder={'Chat to ' + contact.name}
        onChange={e => setText(e.target.value)}
      />
      <br />
      <button className='bg-indigo-300 hover:bg-indigo-500 hover:text-white transition-all ease-in duration-200 px-3 py-1 text-black' >Send to {contact.email}</button>
    </section>
  );
}