import './style.css'
import { setupGreeting } from './greeting.ts'

if (process.env.NODE_ENV === 'development') {
  const { worker } = await import('./mocks/browser')
  await worker.start()
}

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
  </div>
`

setupGreeting(document.querySelector<HTMLButtonElement>('#counter')!)
