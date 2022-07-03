// Import stylesheets
import { shortestString } from './algo/sortest-string';
import { LinkedList } from './models/linked-list';
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');

// const linkedList = new LinkedList<number>();
// linkedList.add(10);
// linkedList.add(20);
// linkedList.add(30);
// linkedList.add(40);
// linkedList.add(50);

// appDiv.append(linkedList.toString());

// linkedList.reverse();
// appDiv.append(linkedList.toString());

// linkedList.deleteNode(50);
// linkedList.deleteNode(10);
// linkedList.deleteNode(20);
// appDiv.append(linkedList.toString());

appDiv.innerHTML = shortestString('My name is xyz 1', 'yxz');
