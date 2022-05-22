export const About = (props) => {
  return (
    <div id='about'>
      <div className='container'>
        <div className='row'>
          <div className='col-xs-12 col-md-6'>
            {" "}
            <img src='img/about.jpg' className='img-responsive' alt='' />{" "}
          </div>
          <div className='col-xs-12 col-md-6'>
            <div className='about-text'>
              <h2>Sobre Nosotros</h2>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
              <h3>Dejános tu mail porque</h3>
              <div className='list-style'>
                <div className='col-lg-12 col-sm-6 col-xs-12'>
                  <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
              </div>
              <a href='#contact' className='btn btn-custom btn-lg page-scroll'>
                Contactános
              </a>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
