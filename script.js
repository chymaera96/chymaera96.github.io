const rollButton = document.querySelector('#roll');
const topics = [
  ['Music information retrieval', 'quests'],
  ['Graph neural networks for audio', 'research'],
  ['A voice-and-birdsound performance system', 'quests'],
  ['The journey from music to machine listening', 'journey'],
];
rollButton.addEventListener('click', () => {
  const value = crypto.getRandomValues(new Uint32Array(1))[0] % 20 + 1;
  document.querySelector('#die-value').textContent = value;
  const [topic, section] = topics[(value - 1) % topics.length];
  const result = document.querySelector('#roll-result');
  result.replaceChildren(document.createTextNode(`${value === 20 ? 'Natural 20! ' : `You rolled ${value}. `}Explore: `));
  const link = document.createElement('a');
  link.href = `#${section}`;
  link.textContent = topic;
  result.append(link);
});
document.querySelector('#print').addEventListener('click', () => window.print());
document.querySelector('#year').textContent = new Date().getFullYear();
