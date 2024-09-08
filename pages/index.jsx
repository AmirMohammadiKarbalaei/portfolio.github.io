import Link from 'next/link';
// import Illustration from '../components/Illustration';
import Image from "next/image";
import styles from '../styles/HomePage.module.css';

export default function HomePage() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.background}>
          <h1>Data</h1>
          <h1>Science</h1>
        </div>
        <div className={styles.foreground}>
          <div className={styles.content}>
            <h1 className={styles.name}>Amir Mohammadi K</h1>
            <h6 className={styles.bio}>Data Scientist</h6>
            <div className={styles.cardContainer}>
              <div className={styles.card}>
                <div className={styles.content}>
                  <h4>Skill Set</h4>
                  <div className={styles.tags}>
                    <span key='Computer-Vision' className='Computer-Vision'>
                      Machine-Learning
                    </span>
                    <span key='LLMs' className='LLMs'>
                      LLMs
                    </span>
                    <span key='GenAI' className='GenAI'>
                      Gen-AI
                    </span>
                    <span key='PyTorch' className='PyTorch'>
                    NLP
                    </span>
                    <span key='Deep-Learning' className='Deep-Learning'>
                    Deep-Learning
                    </span>
                    <span key='SQL' className='SQL'>
                      SQL
                    </span>
                    <span key='Software-Design' className='Software-Design'>
                      Python
                    </span>
                    <span key='Power-BI' className='Power-BI'>
                    Power-BI
                    </span>
                    <span key='RAG' className='RAG'>
                    Tableau
                    </span>
                    <span key='DA' className='DA'>
                    Statistical-Analysis
                    </span>
                    
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.buttonContainer}>

            <Link href="/resume">
              <button className={styles.button}>Resume</button>
            </Link>
            
            <Link href="/contact">
              <button className={styles.outlined}>Contact</button>
            </Link>
            
            <Link href="/projects">
              <button className={styles.button}> Projects</button>
            </Link>

            </div>
            
          </div>
          {/* <Illustration className={styles.illustration} /> */}
          <div className={styles.right}>
            <div className={styles.picture_boader}>
              <Image
                className={styles.picture}
                src="/profile-pic.png"
                width={800}
                height={800}
                alt="profilePicture"
              />
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: { title: 'Home' },
  };
}
