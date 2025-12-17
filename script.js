function analyzeNews() {
  const text = document.getElementById('newsInput').value.toLowerCase();
  const result = document.getElementById('result');

  const fakeKeywords = ['shocking', 'breaking', 'secret', 'miracle', 'you won'];
  let score = 0;

  fakeKeywords.forEach(word => {
    if (text.includes(word)) score++;
  });

  if (score >= 2) {
    result.textContent = '⚠️ Likely Fake News';
  } else {
    result.textContent = '✅ Likely Real News';
  }
}
