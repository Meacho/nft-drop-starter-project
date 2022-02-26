import React from "react";
import "./footer.css";

import twitterLogo from "../../assets/twitter-logo.svg";

const TWITTER_HANDLE = "_buildspace";
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;

function Footer() {
  return (
    <div class="footer-container">
      <div class="social">
        <img alt="Twitter Logo" className="twitter-logo" src={twitterLogo} />
        <a
          className="footer-text"
          href={TWITTER_LINK}
          target="_blank"
          rel="noreferrer"
        >{`built on @${TWITTER_HANDLE}`}</a>
      </div>
      <ul class="list-inline">
        <li class="list-inline-item">
          <a
            className="footer-text"
            href={TWITTER_LINK}
            target="_blank"
            rel="noreferrer"
          >
            Home
          </a>
        </li>
        <li class="list-inline-item">
          <a
            className="footer-text"
            href={TWITTER_LINK}
            target="_blank"
            rel="noreferrer"
          >
            Services
          </a>
        </li>
        <li class="list-inline-item">
          <a
            className="footer-text"
            href={TWITTER_LINK}
            target="_blank"
            rel="noreferrer"
          >
            About
          </a>
        </li>
        <li class="list-inline-item">
          <a
            className="footer-text"
            href={TWITTER_LINK}
            target="_blank"
            rel="noreferrer"
          >
            Terms
          </a>
        </li>
        <li class="list-inline-item">
          <a
            className="footer-text"
            href={TWITTER_LINK}
            target="_blank"
            rel="noreferrer"
          >
            Privacy Policy
          </a>
        </li>
      </ul>
      <p class="copyright">Copyright © Marcafi Pty Ltd 2022</p>
    </div>
  );
}

export default Footer;
