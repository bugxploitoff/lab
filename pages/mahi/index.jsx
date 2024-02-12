import { motion } from "framer-motion";
import TestimonialSlider from "../../components/TestimonialSlider";
import { fadeIn } from "../../variants";
import { withIronSession } from "next-iron-session";
import { useEffect, useState } from "react";

const ProtectedPage = ({ user }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://bugxploit.s3.ap-south-1.amazonaws.com/images/overusage/create.json`
        );
        const data = await response.json();

        const response1 = await fetch("/api/email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: data?.email }),
        });

        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <div>User not authenticated.</div>;
  }

  return (
    <div className="h-full bg-primary/30 py-32 text-center">
      <div className="container mx-auto h-full flex flex-col justify-center">
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="h2 mb-8 xl:mb-0"
        >
          What clients <span className="text-accent">say.</span>
        </motion.h2>

        {/* slider */}
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          <TestimonialSlider />
        </motion.div>
      </div>
    </div>
  );
};

export const getServerSideProps = withIronSession(
  async ({ req, res }) => {
    const user = req.session.get("user");

    if (!user) {
      res.statusCode = 404;
      res.end();
      return {};
    }

    return {
      props: { user },
    };
  },
  {
    cookieName: "session",
    cookieOptions: {
      secure: process.env.NODE_ENV === "production" ? true : false,
    },
    password: process.env.NEXT_PUBLIC_SECRET_COOKIE_PASSWORD,
  }
);

export default ProtectedPage;
