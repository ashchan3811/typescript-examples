// Import stylesheets
import { LinkedList } from './models/linked-list';
import './style.css';

const linkedList = new LinkedList<number>();
linkedList.add(10);
linkedList.add(20);
linkedList.add(30);
linkedList.add(40);
linkedList.add(50);

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.append(linkedList.toString());

linkedList.reverse();

appDiv.append(linkedList.toString());
