export class H1Title {
  static init(text: string) {
    let h1 = document.createElement('h1');
    h1.innerHTML = text;

    return h1;
  }

  constructor(text: string) {
    let h1 = document.createElement('h1');
    h1.innerHTML = text;

    return h1;
  }
}
