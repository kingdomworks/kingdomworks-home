import { FC, ReactNode } from 'react';
import styled from 'styled-components';
import Facebook from '../assets/img/social/facebook.svg';
import LinkedIn from '../assets/img/social/linkedin.svg';
import Medium from '../assets/img/social/medium.svg';
import Twitter from '../assets/img/social/twitter.svg';

interface ISocialAccount {
  provider: string;
  accountTitle: string;
  link: string;
  icon: ReactNode;
}

const EMAIL_ADDRESS = 'hi@kingdomworks.io';

const accounts: ISocialAccount[] = [
  {
    provider: 'facebook',
    accountTitle: 'Facebook',
    link: 'https://www.facebook.com/kingdomworksllc/',
    icon: Facebook,
  },
  {
    provider: 'twitter',
    accountTitle: 'Twitter',
    link: 'https://twitter.com/kingdomworksoft',
    icon: Twitter,
  },
  {
    provider: 'medium',
    accountTitle: 'Medium',
    link: 'https://medium.com/@kingdomworks',
    icon: Medium,
  },
  {
    provider: 'linkedin',
    accountTitle: 'LinkedIn',
    link: 'https://www.linkedin.com/company/10812592',
    icon: LinkedIn,
  },
];

const SocialAccount: FC<{ account: ISocialAccount }> = ({ account }) => (
  <span>
    <a className="account-link" href={account.link} target="_blank">
      <img src={account.icon as string} alt={'Connect with us on ' + account.accountTitle} />
    </a>
  </span>
);

const Wrapper = styled.section`
  min-height: 50vh;
  background: var(--blue);
  color: var(--light);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .inner {
    display: flex;
    flex-direction: column;
    padding: 1rem 0;
    height: auto;

    @media only screen and (min-width: ${p => p.theme.sizes.tablet}) {
      flex-direction: row;
    }

    div {
      margin: auto 1rem;
    }
  }

  h2,
  h3 {
    color: var(--light);
  }

  a {
    color: var(--white);
  }

  .social .accounts {
    padding-top: 0.5rem;
    img {
      width: 15%;
      max-width: 35px;
      height: auto;
      margin: 0 10px 0 0;
    }
  }
`;

const Contact: FC = () => {
  const accountsMap = accounts.map(a => <SocialAccount key={a.provider} account={a} />);
  return (
    <Wrapper id="contact-pane">
      <h2 className="section-title outer">Get in touch</h2>
      <div className="inner">
        <div className="location">
          <h3>Location</h3>
          <p>We are located in Draper, UT</p>
        </div>
        <div className="email">
          <h3>bussiness inquiries</h3>
          <p>
            Reach out to us at: <a href={`mailto:${EMAIL_ADDRESS}`}>{EMAIL_ADDRESS}</a>
          </p>
        </div>
        <div className="social">
          <h3>Say #hello.</h3>
          <p className="accounts">{accountsMap}</p>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;
