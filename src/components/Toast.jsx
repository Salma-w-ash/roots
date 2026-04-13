import toast, { Toaster } from "react-hot-toast";
import rootsLogo from "../assets/Menu logo roots.png";


export const Toast = () => {
  return <Toaster position="top-center" />;
};


export const showThankYouToast = ({ title = "Success!", subtitle = "" }) => {
  toast.custom(
    (t) => (
      <div className="bg-white/10 backdrop-blur-xl border border-white/20 text-[#3f3f3f] shadow- p-5 rounded-xl text-center relative z-10 w-[650px] h-[550px]">
        <div className="absolute inset-0 bg-green-500/10 rounded-2xl pointer-events-none" >
        <button
          onClick={() => toast.dismiss(t.id)}
          className="absolute top-2 right-2 text-5xl"
        >
          -
        </button>

        <p className="font-bold font-primary text-[70px] text-[#3f3f3f]">
          {title}
        </p>
        <p className="text-[50px] font-primary mb-3 text-[#3f3f3f]">
          {subtitle}
        </p>
        <img
          src={rootsLogo}
          alt="logo"
          className="h-[146px] w-[613px] mx-auto"
        />
        </div>
      </div>
    ),
    {
      duration: 2000,
    },
  );
};
