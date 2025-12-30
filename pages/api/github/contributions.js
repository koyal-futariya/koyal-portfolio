export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { username } = req.query;

  if (!username) {
    return res.status(400).json({ message: 'Username is required' });
  }

  try {
    // Using GitHub's public API to fetch contributions
    const response = await fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=last`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch GitHub contributions');
    }
    
    const data = await response.json();
    return res.status(200).json({
      contributions: data.contributions,
      total: data.total
    });
  } catch (error) {
    console.error('Error fetching GitHub contributions:', error);
    return res.status(500).json({ 
      message: 'Failed to fetch GitHub contributions',
      error: error.message 
    });
  }
}
