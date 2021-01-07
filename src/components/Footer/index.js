import React from 'react';
import {
  Facebook,
  Instagram,
  Youtube,
  Twitter,
  Linkedin,
  Mail,
  Phone,
} from 'react-feather';

import './styles.css';

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="social-media">
        <Facebook color="white" strokeWidth={1.5} />
        <Instagram color="white" strokeWidth={1.5} />
        <Youtube color="white" strokeWidth={1.5} />
        <Twitter color="white" strokeWidth={1.5} />
        <Linkedin color="white" strokeWidth={1.5} />
      </div>
      <div className="contacts">
        <div className="phone">
          <Phone className="phone-logo" color="white" strokeWidth={1.5} />
          <span>557-123-123</span>
        </div>

        <div className="mail">
          <Mail className="mail-logo" color="white" strokeWidth={1.5} />
          <span>hello@tspot.ge</span>
        </div>
      </div>
    </div>
  );
}
