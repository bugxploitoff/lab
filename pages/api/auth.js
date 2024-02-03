import { withIronSession } from 'next-iron-session';

const handler = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Make an API request for authentication
    const apiResponse = await fetch("https://pwnme.in/api/bugxploitlabs/index.php?url=register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    // Check if the API response status is 200
    if (apiResponse.status === 200) {
      const user = { user: 'true', email, password }; // Include more user details if needed
      req.session.set('user', user);
      await req.session.save();
        
      res.status(200).json({ message: 'Login successful', user });
    } else {
      res.status(apiResponse.status).json({ error: 'Authentication failed' });
    }
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export default withIronSession(handler, {
  password: process.env.NEXT_PUBLIC_SECRET_COOKIE_PASSWORD,
  cookieName: 'session',
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production',
  },
});
