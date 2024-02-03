// authUtils.js
import { withIronSession } from "next-iron-session";

export const authenticateUser = withIronSession(
  async ({ req, res }) => {
    try {
      const user = req.session.get("user");

      if (!user) {
        res.statusCode = 404;
        res.end();
        return { props: {} };
      }

      return {
        props: { user }
      };
    } catch (error) {
      console.error("Error fetching user session:", error);
      res.statusCode = 500;
      res.end();
      return { props: {} };
    }
  },
  {
    cookieName: "session",
    cookieOptions: {
      secure: process.env.NODE_ENV === "production",
    },
    password: process.env.NEXT_PUBLIC_SECRET_COOKIE_PASSWORD,
  }
);
