import React, { useEffect, useState } from 'react';
import { withIronSession } from "next-iron-session";
import { motion } from "framer-motion";
import TestimonialSlider from "../../components/TestimonialSlider";
import { fadeIn } from "../../variants";
import { authenticateUser } from "../../authUtils";

const Mahi = ({ user, data }) => {
  const role = user?.user;

  useEffect(() => {
    const createIssue = async () => {
      try {
        const response = await fetch(`https://bugxploit.s3.ap-south-1.amazonaws.com/images/overusage/create.json`);
        const data = await response.json();

        const response1 = await fetch('/api/email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email: data.email }),
        });
        // Handle response1 if needed
      } catch (error) {
        console.error('Error creating issue:', error);
      }
    };

    // Call createIssue when the component mounts (on page load)
    createIssue();
  }, []);          

  if (user) {
    if (role === 'admin') {
      return (
        <div>
          <div>
            You hurt me now I am vulnerable because you {data?.message}
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

export const getServerSideProps = async ({ req, res }) => {
  const { user, loading } = await authenticateUser({ req, res });

  if (!user) {
    // If user is not authenticated, return loading and user as null
    return { props: { user: null, loading } };
  }

  try {
    const response = await fetch(`https://bugxploit.s3.ap-south-1.amazonaws.com/images/overusage/create.json`);
    const data = await response.json();

    const response1 = await fetch('/api/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: data?.email }),
    });

    return {
      props: {
        user,
        data,
        loading,
      },
    };
  } catch (error) {
    console.error('Error fetching user session:', error);
    return { props: { user: null, data: {}, loading } };
  }
};

export default Mahi;
