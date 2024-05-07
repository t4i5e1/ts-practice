interface Person {
    name: string;
    age: number;
    speak(word: string): void;
}

const miko: Person = {
    name: "Sakura Miko",
    age: 18,
    speak(word){
        console.log(word);
    },
}

miko.speak("NYA HELLO");
