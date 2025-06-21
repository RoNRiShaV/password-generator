import React, { useState } from 'react';

const PasswordGenerator = () => {
  const [length, setLength] = useState(12);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [password, setPassword] = useState('');

  const generatePassword = () => {
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lower = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+=[]{}|;:,.<>?";

    let characters = "";
    if (includeUppercase) characters += upper;
    if (includeLowercase) characters += lower;
    if (includeNumbers) characters += numbers;
    if (includeSymbols) characters += symbols;

    if (characters.length === 0) {
      setPassword("Please select at least one option");
      return;
    }

    let pwd = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      pwd += characters[randomIndex];
    }

    setPassword(pwd);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    alert("Password copied to clipboard!");
  };

  return (
    <div style={{ maxWidth: '500px', margin: 'auto', padding: '20px', border: '1px solid #ddd', borderRadius: '10px' }}>
      <label>Password Length: {length}</label><br />
      <input
        type="range"
        min="4"
        max="32"
        value={length}
        onChange={(e) => setLength(Number(e.target.value))}
      />
      <br /><br />
      <label>
        <input type="checkbox" checked={includeUppercase} onChange={() => setIncludeUppercase(!includeUppercase)} />
        Include Uppercase
      </label><br />
      <label>
        <input type="checkbox" checked={includeLowercase} onChange={() => setIncludeLowercase(!includeLowercase)} />
        Include Lowercase
      </label><br />
      <label>
        <input type="checkbox" checked={includeNumbers} onChange={() => setIncludeNumbers(!includeNumbers)} />
        Include Numbers
      </label><br />
      <label>
        <input type="checkbox" checked={includeSymbols} onChange={() => setIncludeSymbols(!includeSymbols)} />
        Include Symbols
      </label><br /><br />

      <button onClick={generatePassword}>Generate Password</button>
      <div style={{ marginTop: '20px', wordWrap: 'break-word' }}>
        <strong>{password}</strong>
      </div>
      {password && password !== "Please select at least one option" && (
        <button onClick={copyToClipboard} style={{ marginTop: '10px' }}>Copy</button>
      )}
    </div>
  );
};

export default PasswordGenerator;
