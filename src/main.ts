import './style.css'
import { setupGreeting } from './greeting.ts'

if (process.env.NODE_ENV === 'development') {
  const { worker } = await import('./mocks/browser')
  await worker.start({
    onUnhandledRequest: 'bypass',
    serviceWorker: {
      url: '/base/mockServiceWorker.js',
      options: {
        scope: '/base/',
      },
    },
  })
}

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
  </div>
`

setupGreeting(document.querySelector<HTMLButtonElement>('#counter')!)
