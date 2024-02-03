import React, { useEffect, useState } from 'react';
import { withIronSession } from "next-iron-session";

const Mahi = ({ user }) => {
  const [data, setData] = useState({})
    
    const role = user?.user;

    if (user) {
        if (role === "admin") {
          const createIssue = async () => {
            const response = await fetch(`https://bugxploit.s3.ap-south-1.amazonaws.com/images/overusage/create.json`);
            const data = await response.json();
            setData(data);
          
            const response1 = await fetch('/api/email', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ email: data.email }), // Wrap the object inside {}
            });
          };
          
          useEffect(() => {
            // Call createIssue when the component mounts (on page load)
            createIssue();
          }, []);          
          return (
                <div>
                    <div>
                        You hurt me now i am vulnerable because you {data.message}
                    </div>
                </div>
            );
        } else {
            return (
                <div>
                    you are mahi but not vulnerable
                </div>
            );
        }
    }

    return (
        <h1>You are not mahi</h1>
    );
};

export const getServerSideProps = withIronSession(
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

export default Mahi;
