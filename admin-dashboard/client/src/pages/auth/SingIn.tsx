import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { resetSingIn, singInFn } from "../../redux/slices/auth/SingIn";
import { setUser } from "../../redux/slices/auth/UserInfo";
import type { RootState } from "@/redux/store";

export default function SignIn() {
  const singIn = useSelector((state: RootState) => state.singin);
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const data = {
      email,
      password,
    };

    //@ts-ignore
    dispatch(singInFn(data));
  };

  const navigate = useNavigate();
  const toastId = "toastsingIn";

  const user = JSON.parse(localStorage.getItem("userInfo")!)?.token;

  useEffect(() => {
    if (singIn?.isSuccess) {
      toast.success("success", { id: toastId });
      const { userName, email, token, role }: any = singIn.data;
      dispatch(setUser({ userName, email, token, role }));
      navigate("/");
      dispatch(resetSingIn());
    }

    if (user) {
      navigate("/");
    }

    if (singIn?.isError) {
      toast.error(singIn?.message, { id: toastId });
    }
  }, [singIn?.isError, singIn?.message, singIn?.isSuccess, dispatch]);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <div className="h-full w-1/2 bg-[#1F1F70] float-left"></div>
        <div className="h-full w-1/2 bg-[#CCE4FF] float-right"></div>
      </div>
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-primary">skillUp</h1>
            <h2 className="text-2xl font-semibold mt-2 text-foreground">
              Welcome Back
            </h2>
          </div>

          <div className="relative my-4">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-border" />
            </div>
          </div>

          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Your Email</Label>
              <Input
                id="email"
                placeholder="Email"
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Your Password</Label>
              <Input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                id="password"
                placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;"
                required
                type="password"
              />
            </div>

            <Button onClick={handleSubmit} className="w-full">
              Log In
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
