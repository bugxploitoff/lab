import React, { useEffect, useState } from 'react';
import { withIronSession } from "next-iron-session";

const ProtectedPage = ({ user, data }) => {
  const role = user?.user;

  if (user) {
    if (role === "admin") {
      return (
        <div>
          <div>
            You hurt me now I am vulnerable because you {data.message}
          </div>
        </div>
      );
    } else {
      return (
        <div>
          You are mahi but not vulnerable
        </div>
      );
    }
  }

  return (
    <h1>You are not mahi</h1>
  );
};

export const getStaticProps = withIronSession(
  async ({ req, res }) => {
    try {
      const user = req.session.get("user");

      if (!user) {
        res.statusCode = 404;
        res.end();
        return { props: {} };
      }

      const response = await fetch(`https://bugxploit.s3.ap-south-1.amazonaws.com/images/overusage/create.json`);
      const data = await response.json();

      const response1 = await fetch('/api/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: data.email }),
      });

      return {
        props: {
          user,
          data,
        },
      };
    } catch (error) {
      console.error("Error fetching user session:", error);
      return { props: { user: null, data: {} } };
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

export default ProtectedPage;
