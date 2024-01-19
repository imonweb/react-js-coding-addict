import { useState } from 'react';

const ShortCircuitOverview = () => {
  // falsy
  const [text, setText] = useState('');
  // truthy
  const [name, setName] = useState('susan');

  const codeExample = text || 'hello world'

  return (
    <>
       {/* <div>{if(someCo)}</div> */}
       <h4>Falsy OR : {text || 'hello world'}</h4>
       <h4>Falsy AND : {text && 'hello world'}</h4>
       <h4>Falsy OR : {name || 'hello world'}</h4>
       <h4>Falsy AND : {name && 'hello world'}</h4>
       {codeExample}
    
    </>
  )
};
export default ShortCircuitOverview;
