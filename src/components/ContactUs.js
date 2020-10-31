import React from 'react';
import config from '../../config';
export default function ContactUs() {
  return (
    <section className="page-section bg-dark text-white" id="contact">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <h2 className="mt-0">Let's Get In Touch!</h2>
            <hr className="divider my-4" />
            <p className="mb-5">
              Ready to start your next project with us? Send us a message by our social
              media accounts or join our private Slack and we'll be happy to work with you!
            </p>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center mt-5 mb-lg-0">
            {config.socialLinks.map(social => {
              const { icon, url } = social;
              return (
                <a key={url} href={url} className={`mx-2 text-white`}>
                  <i className={`fab fa-3x mb-3 ${icon}`}></i>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
