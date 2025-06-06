#!/usr/bin/env node

import { generationNumber, isPrime } from "../src/helpers/helpers.js";
import runGame from "../src/runGame.js";

const generatePrimeQuestion = () =>{
    const a = generationNumber();

    const question = `${a}`;
    const correctAnswer = isPrime(a) ? 'yes' : 'no';

    return [question, correctAnswer];
}

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
runGame(description, generatePrimeQuestion);