import { useState } from 'react'
import emailjs from 'emailjs-com'

const initialState = {
  name: '',
  email: '',
  message: '',
}
export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState)

  const handleChange = (e) => {
    const { name, value } = e.target
    setState((prevState) => ({ ...prevState, [name]: value }))
  }
  const clearState = () => setState({ ...initialState })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert("¡Email enviado!");
    console.log(name, email, message)
    emailjs
      .sendForm("service_udesa", "contact_houmy", e.target, "SS59mWWLGgcu7uZlj")
      .then(
        (result) => {
          console.log(result.text);
          clearState();
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
  return (
    <div>
      <div id='contact'>
        <div className='container'>
          <div className='col-md-8'>
            <div className='row'>
              <div className='section-title'>
                <h2>Contactános</h2>
                <p>
                  Si te interesa saber más sobre nosotros y ser parte de
                  nuestros clientes prioritarios, dejános tu email y el servicio
                  que más te interesa en el siguiente formulario.
                </p>
              </div>
              <form name='sentMessage' validate onSubmit={handleSubmit}>
                <div className='row'>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        type='text'
                        id='name'
                        name='user_name'
                        className='form-control'
                        placeholder='Name'
                        required
                        onChange={handleChange}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        type='email'
                        id='email'
                        name='user_email'
                        className='form-control'
                        placeholder='Email'
                        required
                        onChange={handleChange}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                </div>
                <div className='form-group'>
                  <label htmlFor="interes">Qué servicio te interesa más</label>
                  <select
                    name='interes'
                    id='interes'
                    className='form-control'
                    required
                    onChange={handleChange}
                  >
                    <option disabled selected value="none">
                      {" "}
                      -- Seleccione una opción --{" "}
                    </option>
                    <option value='limpieza'>Limpieza</option>
                    <option value='comfort'>Comfort</option>
                    <option value='seguridad'>Seguridad</option>
                    <option value='cocina'>Cocina</option>
                  </select>
                  <p className='help-block text-danger'></p>
                </div>
                <div className='form-group'>
                  <textarea
                    name='message'
                    id='message'
                    className='form-control'
                    rows='4'
                    placeholder='Mensaje'
                    required
                    onChange={handleChange}
                  ></textarea>
                  <p className='help-block text-danger'></p>
                </div>
                <div id='success'></div>
                <button type='submit' className='btn btn-custom btn-lg'>
                  Enviar
                </button>
              </form>
            </div>
          </div>
          {/* <div className='col-md-3 col-md-offset-1 contact-info'>
            <div className='contact-item'>
              <h3>Información de Contacto</h3>
              <p>
                <span>
                  <i className='fa fa-map-marker'></i> Dirección
                </span>
                {props.data ? props.data.address : "loading"}
              </p>
            </div>
            <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-envelope-o'></i> Email
                </span>{" "}
                {props.data ? props.data.email : "loading"}
              </p>
            </div>
          </div> */}
          {/* <div className='col-md-12'>
            <div className='row'>
              <div className='social'>
                <ul>
                  <li>
                    <a href={props.data ? props.data.facebook : '/'}>
                      <i className='fa fa-facebook'></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.twitter : '/'}>
                      <i className='fa fa-twitter'></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.youtube : '/'}>
                      <i className='fa fa-youtube'></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      <div id='footer'>
        <div className='container text-center'>
          <p>
            Page Template by &copy; 2020 Issaaf Kattan React Land Page Template.
            Design by{" "}
            <a href='http://www.templatewire.com' rel='nofollow'>
              TemplateWire
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
