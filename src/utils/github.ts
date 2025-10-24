interface GithubStatsCache {
  [key: string]: {
    stars: number;
    timestamp: number;
  };
}

const CACHE_DURATION = 1000 * 60 * 60; // 1 hour
let statsCache: GithubStatsCache = {};

export async function getGithubStars(repoUrl: string): Promise<number> {
  const repoPath = repoUrl.replace('https://github.com/', '');
  const [owner, repo] = repoPath.split('/');

  // Check cache first
  const cached = statsCache[repoPath];
  if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
    return cached.stars;
  }

  try {
    const response = await fetch(`https://api.github.com/repos/${owner}/${repo}`, {
      headers: process.env.GITHUB_TOKEN ? {
        'Authorization': `token ${process.env.GITHUB_TOKEN}`
      } : {}
    });

    if (!response.ok) {
      throw new Error(`GitHub API returned ${response.status}`);
    }

    const data = await response.json();
    
    // Update cache
    statsCache[repoPath] = {
      stars: data.stargazers_count,
      timestamp: Date.now()
    };

    return data.stargazers_count;
  } catch (error) {
    console.error('Error fetching GitHub stars:', error);
    return 0;
  }
}