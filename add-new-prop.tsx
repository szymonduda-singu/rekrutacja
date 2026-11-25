// 1. Co zobaczy użytkownik w przeglądarce?
// 2. Wprowadź zmiany w kodzie tak, aby ostatni panel nie miał ramki.
// 3. Coś jeszcze przyciąga uwagę?

const App = () => {
  const borderBaseToken = '1px solid #fbi'

  const Panel = () => (
    <div style={{ border: borderBaseToken }} />
  )

  return (
    <main>
      <Panel>
        Lorem ipsum
      </Panel>
      <Panel>
        Dolor sit amet
      </Panel>

      <Panel>
        Nowy Panel - bez ramki
      </Panel>
    </main>
  )
}