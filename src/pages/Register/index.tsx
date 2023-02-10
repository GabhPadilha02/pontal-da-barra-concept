import { ChatText, Envelope, IdentificationCard, InstagramLogo, Phone, WhatsappLogo } from "phosphor-react";
import style from "../Register/style.module.scss"
import Logo from "../../assets/Logo.svg"
import { FormEvent, useState } from "react";
import { gql, useMutation } from "@apollo/client";

const CREATE_SUBSCRIBER_MUTATION = gql`
  mutation CreateSubscriber(
    $nome: String!
    $email: String!
    $telefone: String!
    $mensagem: String
  ) {
    createUsuarioCadastrado(
      data: {
        nome: $nome
        email: $email
        telefone: $telefone
        mensagem: $mensagem
      }
    ) {
      id
    }
  }
`

export function Register() {

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')
  const [mensagem, setMensagem] = useState('')

  const [createSubscriber] = useMutation(CREATE_SUBSCRIBER_MUTATION)

  const handlePhone = (event: any) => {
    const input = event.target
    input.value = phoneMask(input.value)
  }

  const phoneMask = (value: any) => {
    if (!value) return ''
    value = value.replace(/\D/g, '')
    value = value.replace(/(\d{2})(\d)/, '($1) $2')
    value = value.replace(/(\d)(\d{4})$/, '$1-$2')
    return value
  }

  async function handleSubscribe(event: FormEvent) {
    event?.preventDefault()
    const isInputEmailEmpty = email.length === 0
    const isInputNameEmpty = nome.length === 0
    const isInputTelEmpty = telefone.length === 0

    if (isInputEmailEmpty || isInputNameEmpty || isInputTelEmpty) {
      window.alert('Por favor, preencha os campos corretamente!')
    }

    await createSubscriber({
      variables: {
        nome,
        email,
        telefone,
        mensagem,
      },
    })
    window.location.replace('https://www.pontaldabarra.com.br')

    console.log(nome, email, telefone)
  }

  return (
    <main className={style.mainContainer}>
      <div className={style.infoContainer}>
        <div className={style.logoContainer}>
          <img src={Logo} alt="" />
        </div>
      </div>
      <div className={style.signUpContainer}>
        <form onSubmit={handleSubscribe}>
          <h2>CADASTRE-SE</h2>
          <label htmlFor="">
            <IdentificationCard size={24} />
            <input
              type="text"
              name=""
              id=""
              placeholder="Digite seu nome completo"
              onChange={(event) => setNome(event.target.value)}
            />
          </label>
          <label htmlFor="">
            <Envelope size={24} />
            <input
              type="email"
              name=""
              id=""
              placeholder="Digite seu e-mail"
              onChange={(event) => setEmail(event.target.value)}
            />
          </label>
          <label htmlFor="">
            <Phone size={24} />
            <input
              type="tel"
              name=""
              id=""
              maxLength={15}
              onKeyUp={(event) => handlePhone(event)}
              placeholder="(99) 99999-9999"
              onChange={(event) => setTelefone(event.target.value)}
            />
          </label>
          <label className={style.textareaContainer} htmlFor="">
            <ChatText size={24} />
            <textarea
              name=""
              id=""
              cols={30}
              rows={1}
              placeholder="Deixe sua mensagem"
              onChange={(event) => setMensagem(event.target.value)}
            ></textarea>
          </label>
          <button type="submit">Enviar</button>
          <div className={style.socialLinksContainer}>
            <a
              href="https://www.instagram.com/pontal_da_barra_itapoa/"
              target={'_blank'}
              rel="noreferrer"
            >
              <InstagramLogo size={30} />
            </a>
            <a
              href="https://wa.me/5547999468662"
              target={'_blank'}
              rel="noreferrer"
            >
              <WhatsappLogo size={30} />
            </a>
          </div>
        </form>
      </div>
    </main>
  )
}