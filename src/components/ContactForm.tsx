import React, { useState } from 'react';
import InputCustom from './InputCustom';
import Button from './Button';
import '../styles/contact.css'

export default function ContactForm() {
  const [empresa, setEmpresa] = useState('');
  const [responsavel, setResponsavel] = useState('');
  const [email, setEmail] = useState('');
  const [endereco, setEndereco] = useState('');
  const [telefone, setTelefone] = useState('');
  const [motivo, setMotivo] = useState('');

  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const baseURL = "https://funcao-disparo-emails.azurewebsites.net/api/httptrigger1?code="
  const key = import.meta.env.VITE_API_KEY;
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setError(null);

  if (!empresa || !responsavel || !email || !endereco || !telefone || !motivo) {
    setError('Por favor, preencha todos os campos obrigatórios.');
    return;
  }


  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    setError('Por favor, insira um e-mail válido.');
    return;
  }

  
  const telefoneRegex = /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/;
  if (!telefoneRegex.test(telefone)) {
    setError('Por favor, insira um telefone válido. Ex: (45) 99999-9999');
    return;
  }

  setLoading(true);

  const data = { empresa, responsavel, email, endereco, telefone, motivo };

  try {
    const response = await fetch(
      `${baseURL}${key}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }
    );

    if (response.ok) {
      setSent(true);
      setEmpresa('');
      setResponsavel('');
      setEmail('');
      setEndereco('');
      setTelefone('');
      setMotivo('');
    } else {
      setError('Erro ao enviar o email. Tente novamente mais tarde.');
    }
  } catch {
    setError('Erro na comunicação com o servidor. Verifique sua conexão.');
  } finally {
    setLoading(false);
  }
};


const formatPhone = (value: string) => {
  // Remove tudo que não é número
  const numbers = value.replace(/\D/g, '');

  if (numbers.length <= 10) {
    // Formato: (XX) XXXX-XXXX
    return numbers.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3').trim();
  } else {
    // Formato: (XX) XXXXX-XXXX
    return numbers.replace(/(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3').trim();
  }
};


  return (
    <>
      <header className="container">
        <span><p className="desktop-only">se interessou?</p></span>
        <h2>Entre em contato</h2>
        <p className="description">
          Entre em contato, estamos dispostos a tirar qualquer dúvida, seja um orçamento, 
          uma dúvida técnica de algum de nossos produtos. Estamos à disposição para responder.
        </p>
      </header>

      {sent ? (
        <div className="message-success">
          <p>✅ Obrigado! Seu contato foi enviado com sucesso.</p>
          <p>Responderemos o mais breve possível.</p>
        </div>
      ) : (
        <form className="form" onSubmit={handleSubmit} noValidate>
          <InputCustom placeholder="Nome da empresa/Mecânica" type='text' value={empresa} onChange={e => setEmpresa(e.target.value)}  required/>
          <InputCustom placeholder="Nome do responsável" type='text' value={responsavel} onChange={e => setResponsavel(e.target.value)} required/>
          <InputCustom placeholder="E-mail" type="email" value={email} onChange={e => setEmail(e.target.value)} required />
          <InputCustom placeholder="Endereço" value={endereco} type='text' onChange={e => setEndereco(e.target.value)} required />
          <InputCustom placeholder="Telefone" value={telefone} type='tel' onChange={e => setTelefone(formatPhone(e.target.value))} required />
          <InputCustom placeholder="Motivo do Contato ou dúvida" type='textarea' value={motivo} onChange={e => setMotivo(e.target.value)} required />

          {error && <p className="message-error">{error}</p>}

          <Button text="Enviar" loading={loading} disabled={loading} />
        </form>
      )}
    </>
  );
}
