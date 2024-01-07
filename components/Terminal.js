"use client"

import { useState } from "react";

const Terminal = () => {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');


    const handleCommand = (command) => {
        switch(command) {
            case 'projects':
                setOutput('List of projects');
                break;
            case 'socials':
                setOutput('Insta:@mitesh24_');
                break;
            case 'echo':
                setOutput('Hello world');
                break;
            case 'help':
                setOutput("['socials','projects', 'echo', 'whoami']");
                break;
            case 'whoami':
                setOutput("I am Mitesh Kukarni!!");
                break;
            default:
                setOutput('Unknown command. Type "help" for a list of commands.');
                break;
        }
    }

    const handleKeyPress = (e) => {
        if (e.key == 'Enter') {
            handleCommand(input.trim());
            setInput('')
        }
    }

    return (
        <div className="terminal">
          <input
            className="text-black"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <pre>{output}</pre>
        </div>
      );
}

export default Terminal;