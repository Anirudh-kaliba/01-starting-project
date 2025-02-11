import reactCoreImage from '../assets/react-core-concepts.png';
const differenceGreet = ["Fundamental", "Crucial", "Core"];
import './Header.css'

function getRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
}


export default function Header() {
    return (
        <header>
            <img src={reactCoreImage} alt="Stylized atom" />
            <h1>React Essentials</h1>
            <p>
                {differenceGreet[getRandomInt(2)]} React concepts you will need for almost any app you are going to build!
            </p>
        </header>
    );
}