import dotenv from "dotenv";
import cowsay from "cowsay";

dotenv.config(); // charge les variables du .env

const name = process.env.NAME;
const campus = process.env.CAMPUS;

console.log(
  cowsay.say({
    text: `Hello I'm ${name} from ${campus} !`,
    e: "oo", // forme des yeux
  })
);
