import { useState } from 'react';
import './App.css'

function App() {
  const [firstName, setFirstName] = useState('" "');
  const [lastName, setLastName] = useState('" "');
  const [city, setCity] = useState('" "');

  const toCapitalize = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }

  const removeMultipleSpaces = (str: string) => {
    if (str === '') return '" "';
    return str.replace(/\s+/g, ' ');
  }

  const handleReset = () => {
    setFirstName('" "');
    setLastName('" "');
    setCity('" "');
  }

  return (
    <div className="app-page">
      <div className="card">
        <header className="card-header">
          <h1>Cadastro</h1>
          <p className="subtitle">Preencha os dados abaixo</p>
        </header>

        <form className="form">
          <div className="form-row">
            <label className="field">
              <span className="field-label">Nome</span>
              <input
                className="field-input"
                placeholder="Ex: João"
                onChange={(event) => setFirstName(toCapitalize(removeMultipleSpaces(event.target.value.trim())))}
              />
            </label>

            <label className="field">
              <span className="field-label">Sobrenome</span>
              <input
                className="field-input"
                placeholder="Ex: Silva"
                onChange={(event) => setLastName(toCapitalize(removeMultipleSpaces(event.target.value.trim())))}
              />
            </label>
          </div>

          <label className="field">
            <span className="field-label">Cidade</span>
            <input
              className="field-input"
              placeholder="Ex: São Paulo"
              onChange={(event) => setCity(toCapitalize(removeMultipleSpaces(event.target.value.trim())))}
            />
          </label>
          <label className="field">
            <span className="field-label">Resultado</span>
            <input
              className="field-input result-input"
              readOnly
              value={`${firstName} | ${lastName} | ${city}`}
            />
          </label>

          <div className="form-actions">
            <div className="btn-group">
              <button type="button" className="btn-danger" onClick={handleReset}>Limpar</button>
              <button type="button" className="btn-primary">Enviar</button>
            </div>
          </div>

        </form>
      </div>
    </div>
  )
}

export default App