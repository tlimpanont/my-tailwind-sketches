import React, { FC } from "react";
import Button from "../components/Button";
import StoryCard from "../components/StoryCard";

const SplitCardLoginPage: FC<any> = () => {
  return (
    <div className="flex flex-col justify-center sm:items-center">
      <div className="flex flex-row border-2 border-gray-100 rounded shadow-2xl w-full sm:w-5/6">
        <StoryCard
          className="w-1/2 hidden sm:flex flex-col justify-end"
          title="Welcome back"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
        />
        <section className="p-10 w-full sm:w-1/2">
          <h1 className="text-4xl">Login</h1>
          <p>Please Login to Continue</p>
          <form action className="pt-4">
            <input
              type="text"
              className="p-2 my-4 w-full rounded block"
              placeholder="your email"
            />
            <input
              type="password"
              className="p-2 my-4 w-full rounded block"
              placeholder="your password"
            />
            <a href className="block">
              Forgot password?
            </a>
            <div className="my-4 flex flex-row">
              <Button className="btn-primary flex-1 mr-4">Login</Button>
              <Button>Create an account?</Button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default SplitCardLoginPage;
