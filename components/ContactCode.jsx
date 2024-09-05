import styles from '../styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'Email',
    link: 'a.mohammadikarbalaei@gmail.com',
    href: 'mailto:a.mohammadikarbalaei@gmail.com',
  },
  {
    social: 'LinkedIn',
    link: 'linkedin.com/in/amir-mohammadikarbalaei',
    href: 'https://www.linkedin.com/in/amir-mohammadikarbalaei-65b958193/',
  },
  {
    social: 'GitHub',
    link: 'github.com/AmirMohammadiKarbalaei',
    href: 'https://github.com/AmirMohammadiKarbalaei',
  },
  {
    social: 'PyPi',
    link: 'pypi.org/user/Amir_Mohammadikarbalaei',
    href: 'https://pypi.org/user/Amir_Mohammadikarbalaei/',
  },
  {
    social: 'Portfolio',
    link: 'DataScience.github.io',
    href: 'https://amirmohammadikarbalaei.github.io/DataScience.github.io/',
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
       
      <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;&#8212; <span>socials</span>&#58;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
        </p>
      ))}
    </div>
  );
};

export default ContactCode;
