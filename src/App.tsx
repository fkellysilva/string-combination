import { useState } from 'react';
import './App.css'

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [city, setCity] = useState('');

  const toCapitalize = (str: string) => {
    if (!str) return '';
    return str
      .split(/\s+/)
      .filter(word => word.length > 0)
      .map(word =>
        word
          .split('-')
          .map(part => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
          .join('-')
      )
      .join(' ');
  }

  const removeMultipleSpaces = (str: string) => {
    return str.trim().replace(/\s+/g, ' ');
  }

  const handleReset = () => {
    setFirstName('');
    setLastName('');
    setCity('');
  }

  const handleNameInput = (value: string) => {
    const cleanValue = removeMultipleSpaces(value);
    return toCapitalize(cleanValue);
  }

  const handleCityInput = (value: string) => {
    if (!value) return '';
    
    const endsWithSpace = value.endsWith(' ');
    const cleanValue = value.replace(/\s+/g, ' ').replace(/^\s+/, '');
    
    return toCapitalize(cleanValue) + (endsWithSpace ? ' ' : '');
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
                value={firstName}
                onChange={(event) => setFirstName(handleNameInput(event.target.value))}
              />
            </label>

            <label className="field">
              <span className="field-label">Sobrenome</span>
              <input
                className="field-input"
                placeholder="Ex: Silva"
                value={lastName}
                onChange={(event) => setLastName(handleNameInput(event.target.value))}
              />
            </label>
          </div>

          <label className="field">
            <span className="field-label">Cidade</span>
            <input
              className="field-input"
              placeholder="Ex: São Paulo"
              value={city}
              onChange={(event) => setCity(handleCityInput(event.target.value))}
            />
          </label>
          <label className="field">
            <span className="field-label">Resultado</span>
            <input
              className="field-input result-input"
              readOnly
              value={`${firstName.length > 0 ? firstName : '" "'} | ${lastName.length > 0 ? lastName : '" "'} | ${city.length > 0 ? city : '" "'}`}
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