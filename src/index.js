import './css/style.css';

import Character from './modules/Character';
import Team from './modules/Team';

const char1 = new Character('Лучник', 'Bowman', 50, 1, 40, 10);
const char2 = new Character('Маг', 'Magician', 30, 1, 50, 20);
const char3 = new Character('Воин', 'Warrior', 60, 1, 30, 30);

const team = new Team();
team.addAll(char1, char2, char3);

for (const member of team) {
  console.log(member);
}

