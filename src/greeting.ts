export function setupGreeting(element: HTMLButtonElement) {
  const fetchGreeting = async () => {
    const res = await fetch('/base/api/greeting')
    const text = await res.text()
    element.innerHTML = text
  }
  element.addEventListener('click', () => fetchGreeting())
  element.innerHTML = 'Click me!'
}
