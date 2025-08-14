export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <nav>
        <span style={{ fontSize: '2em' }}>🕺🕺 </span>client-side nav
        <h3>
          <a href="/">Home</a>{' │ '}
          <a href="/client-component">ClientComponent</a>{' │ '}
          <a href="/not-found">NotFoundPage</a>
        </h3>
      </nav>
      <main>{children}</main>
    </>
  )
}
