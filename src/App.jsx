import React, { useState, useEffect } from 'react'
import ChirpSyntax from './componenets/ChirpCard';

const App = () => {

    const [username, setUsername] = useState('');
    const [text, setText] = useState('');
    const [chirps, setChirps] = useState([
        {
            id: 1,
            username: "Will",
            msg: '#EldenRing'
        },
        {
            id: 2,
            username: "Zac",
            msg: '#DoctorWho'
        },
        {
            id: 3,
            username: "Bobbu",
            msg: '#CodingCareer'
        }]
    )

let newChirp = () => {
    setChirps([...chirps, {
        username: username,
        msg: text
    }])
}

    return (
        <>
            <div>
                <p>Input Name and Chirp</p>
                <button onClick={() => {
                  newChirp()
                }}>Chirp</button>
                <input value={username} onChange={e => setUsername(e.target.value)} />
                <input value={text} onChange={e => setText(e.target.value)} />
            </div>

            <main className="container mt-5">
                <section className="row justify-content-center">
                    <div className="messages">
                        <ul className="list-group">
                            {chirps.map(chirp => (
                                <li className="list-group-item" key={chirp.id}>
                                    <ChirpSyntax id={chirp.username} username={chirp.username} msg={chirp.msg} />
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>
            </main>
        </>
    );
};

export default App;