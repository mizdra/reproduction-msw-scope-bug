export function setupGreeting(element: HTMLButtonElement) {
  const fetchGreeting = async () => {
    const res = await fetch('http://localhost:5173/api/graphql', {
      method: 'POST',
      credentials: 'include',
      headers: { Accept: 'application/json', 'Content-Type': 'application/json', },
      body: JSON.stringify({ query: 'query GreetingQuery {\n hello\n }', variables: {} }),
    })
    const json = await res.json()
    element.innerHTML = JSON.stringify(json)
  }
  element.addEventListener('click', () => fetchGreeting())
  element.innerHTML = 'Click me!'
}
