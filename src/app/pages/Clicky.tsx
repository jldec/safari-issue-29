'use client'

import { useState } from 'react'

export function Clicky() {
  const [state, setState] = useState(false)

  return (
    <button
      onClick={() => setState((state) => !state)}
      style={{
        backgroundColor: 'transparent',
        cursor: 'pointer'
      }}
    >
      <span style={{ backgroundColor: state ? 'red' : 'green', fontSize: '4em' }}>🧡</span>
    </button>
  )
}
