import { useState } from "react";
import { NextSeo } from "next-seo";
import mongoose from "mongoose";
import { getSession } from "next-auth/react";
import { Oval } from "react-loader-spinner";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import UserModel from "../../../models/user";
import UserLayout from "../../../components/layout/userLayout";

function ProfilePassword() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [new_password, setNewPassword] = useState("");
  const [re_new_password, setReNewPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    // Check if new passwords match
    if (new_password !== re_new_password) {
      toast.error("New passwords do not match");
      return;
    }

    try {
      setIsLoading(true);

      const response = await fetch("/api/auth/update-password", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password, new_password, re_new_password }),
      });

      const data = await response.json();
      const { status, message } = data;

      if (status === true) {
        toast.success(message);
        router.push("/user/auth");
      } else {
        throw new Error(message);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <UserLayout>
      <NextSeo title="Update Password" />
      <br />
      <h1 className="text-center text-black dark:text-slate-300 text-2xl">Update Password</h1>
      <br />
      <div className="container">
        <br />
        <div className="max-w-2xl mx-auto">
          <form
            className="shadow-2xl space-y-4 px-10 py-5 rounded-xl dark:border dark:border-[#0018A8]-500 mx-10 md:mx-0"
            onSubmit={handleSubmit}
            autoComplete="off"
          >
            <div className="flex flex-col">
              <label className="active" htmlFor="password">
                Current password
              </label>
              <input
                type="password"
                className="border border-[#0018A8]-500 px-5 py-3 outline-[#0018A8]-500 rounded-md font-base dark:bg-transparent dark:text-slate-300 dark:outline-none dark:placeholder:text-[#0018A8]-500"
                id="password"
                name="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label className="active" htmlFor="new-password">
                New Password
              </label>
              <input
                type="password"
                className="border border-[#0018A8]-500 px-5 py-3 outline-[#0018A8]-500 rounded-md font-base dark:bg-transparent dark:text-slate-300 dark:outline-none dark:placeholder:text-[#0018A8]-500"
                id="new-password"
                name="new-password"
                required
                value={new_password}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label className="active" htmlFor="new-password">
                Re-type New Password
              </label>
              <input
                type="password"
                className="border border-[#0018A8]-500 px-5 py-3 outline-[#0018A8]-500 rounded-md font-base dark:bg-transparent dark:text-slate-300 dark:outline-none dark:placeholder:text-[#0018A8]-500"
                id="re-new-password"
                name="re-new-password"
                required
                value={re_new_password}
                onChange={(e) => setReNewPassword(e.target.value)}
              />
            </div>
            <div>
              <button
                disabled={isLoading}
                type="submit"
                className={`bg-[#0018A8]-500 text-slate-300 py-2 px-8 w-2/3 rounded-lg inline-block border-2 border-transparent hover:border-[#0018A8]-500 hover:bg-slate-50 dark:hover:bg-transparent dark:hover:text-slate-50 hover:text-slate-800 ${
                  isLoading ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {isLoading ? <Oval height={30} width={30} /> : <span>Update</span>}
              </button>
            </div>
          </form>
        </div>
      </div>
    </UserLayout>
  );
}

export default ProfilePassword;

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });

  try {
    await mongoose.connect(process.env.MONGODB_URL);

    if (session) {
      const user = await UserModel.findOne({ email: session.user.email });

      if (user) {
        return {
          props: {},
        };
      }
    }

    return {
      redirect: {
        destination: "/signin",
        permanent: false,
      },
    };
  } catch (error) {
    return {
      redirect: {
        destination: "/",
        permanent: false,           
      },
    };
  }
}
