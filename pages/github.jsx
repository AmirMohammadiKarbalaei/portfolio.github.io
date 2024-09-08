import Image from 'next/image';
import GitHubCalendar from 'react-github-calendar';
import RepoCard from '../components/RepoCard';
import styles from '../styles/GithubPage.module.css';

const GithubPage = ({ repos, user }) => {
  // console.log(repos);
  const theme = {
    level0: '#161B22',
    level1: '#0e4429',
    level2: '#006d32',
    level3: '#26a641',
    level4: '#39d353',
  };

  return (
    <>
      <a href="https://github.com/AmirMohammadiKarbalaei" target="_blank" rel="noopener" className={styles.no_color}>
        <div className={styles.user}>
          <div>
            <Image
              src={user.avatar_url}
              className={styles.avatar}
              alt={user.login}
              width={50}
              height={50}
            />
            <h3 className={styles.username}>{user.login}</h3>
          </div>
          <div>
            <h3>{user.public_repos} repos</h3>
          </div>
          <div>
            <h3>{user.followers} followers</h3>
          </div>
        </div>
      </a>
      <div> <center><h3>My Most Popular Repositories on Github</h3></center></div>
      <div className={styles.container}>
        {repos.map((repo) => (
          <RepoCard key={repo.id} repo={repo} />
        ))}
      </div>
      <div><center><h3>My Github Calendar</h3></center></div>
      <br />
      <center>
        <div className={styles.contributions}>
          <GitHubCalendar
            username={process.env.NEXT_PUBLIC_GITHUB_USERNAME}
            theme={theme}
            hideColorLegend
          // hideMonthLabels
          />
        </div>
      </center>
    </>
  );
};

export async function getStaticProps() {
  const timestamp = new Date().getTime();
  const userRes = await fetch(
    `https://api.github.com/users/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}`,
    {
      headers: {
        Authorization: `token ${process.env.GITHUB_API_KEY}`,
      },
    }
  );
  const user = await userRes.json();

  const repoRes = await fetch(
    `https://api.github.com/users/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}/repos?per_page=100`,
    {
      headers: {
        Authorization: process.env.GITHUB_API_KEY,
      },
    }
  );

  let repos = await repoRes.json();
  console.log(repos);

  // Add the specified repo explicitly
  repos = repos
  .sort((a, b) => {
    // Check for preferred repos to prioritize
    const preferredRepos = [
      'Detect-Sleep-States-CMI', 
      'BareBonesNN',
      'Kaggle-Grasp-and-Lift-EEG-Detection',
      'DailyLinkai',
      'Pima-Indians-Diabetes',
      'Reinforcement-Learning',
      'FraudDetection',
      'YOLO5-Custom-data'

    ];

    const isPreferredA = preferredRepos.some(repo => a.html_url.includes(repo));
    const isPreferredB = preferredRepos.some(repo => b.html_url.includes(repo));

    if (isPreferredA && !isPreferredB) return -1;
    if (!isPreferredA && isPreferredB) return 1;

    // Sort by popularity (stars, watchers, forks)
    return (b.stargazers_count + b.watchers_count + b.forks_count) - (a.stargazers_count + a.watchers_count + a.forks_count);
  })
  .slice(0, 8);  // Increase the number of repos here

return {
  props: { title: 'GitHub', repos, user },
  revalidate: 30,
};
}

export default GithubPage;
