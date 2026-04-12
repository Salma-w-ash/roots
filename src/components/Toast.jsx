import toast, { Toaster } from "react-hot-toast";
import rootsLogo from "../assets/Menu logo roots.png";


export const Toast = () => {
  return <Toaster position="top-center" />;
};

// 👈 التوست الجاهز
export const showThankYouToast = () => {
  toast.custom(
    (t) => (
      <div className="bg-[#3BA846] text-white p-5 rounded-xl text-center relative w-[220px]">
        <button
          onClick={() => toast.dismiss(t.id)}
          className="absolute top-2 right-2"
        >
          -
        </button>

        <p className="font-bold text-lg">Registered Successfully!</p>
        <p className="text-sm mb-3">Enjoy your Healthy Life Plan</p>

        <img src={rootsLogo} alt="logo" className="h-8 mx-auto" />
      </div>
    ),
    {
      duration: 4000,
    },
  );
};
