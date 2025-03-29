import { motion as Motion } from "framer-motion";
import pawPrintDown from "../assets/icons/paw_down.png";
import pawPrintRight from "../assets/icons/paw_right.png";

const PawPrint = () => {
  return (
    <div>
      {/* Paw Prints */}
      <Motion.img
        src={pawPrintRight}
        alt="Paw print"
        className="absolute top-2 left-90 w-5 h-5 sm:top-4 sm:left-275 sm:w-8 sm:h-8 rotate-40 animate-bounce"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      />
      <Motion.img
        src={pawPrintDown}
        alt="Paw print"
        className="absolute top-30 left-290 w-8 h-8 animate-bounce"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3 }}
      />
      <Motion.img
        src={pawPrintDown}
        alt="Paw print"
        className="absolute top-55 left-290 w-8 h-8 animate-bounce"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 4 }}
      />
      <Motion.img
        src={pawPrintDown}
        alt="Paw print"
        className="absolute top-80 left-290 w-8 h-8 animate-bounce"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 5 }}
      />
      <Motion.img
        src={pawPrintDown}
        alt="Paw print"
        className="absolute top-105 left-290 w-8 h-8 rotate-30 animate-bounce"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 6 }}
      />
      <Motion.img
        src={pawPrintRight}
        alt="Paw print"
        className="absolute top-125 left-280 w-8 h-8 rotate-150 animate-bounce"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 7 }}
      />
      <Motion.img
        src={pawPrintRight}
        alt="Paw print"
        className="absolute top-125 left-255 w-8 h-8 rotate-180 animate-bounce"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 8 }}
      />
      <Motion.img
        src={pawPrintRight}
        alt="Paw print"
        className="absolute top-125 left-230 w-8 h-8 rotate-180 animate-bounce"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 9 }}
      />
      <Motion.img
        src={pawPrintRight}
        alt="Paw print"
        className="absolute top-125 left-115 w-8 h-8 rotate-180 animate-bounce"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 10 }}
      />
      <Motion.img
        src={pawPrintRight}
        alt="Paw print"
        className="absolute top-125 left-90 w-8 h-8 rotate-180 animate-bounce"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 11 }}
      />
      <Motion.img
        src={pawPrintRight}
        alt="Paw print"
        className="absolute top-135 left-65 w-8 h-8 rotate-150 animate-bounce"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 12 }}
      />
      <Motion.img
        src={pawPrintRight}
        alt="Paw print"
        className="absolute top-165 left-50 w-8 h-8 rotate-100 animate-bounce"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 13 }}
      />
      <Motion.img
        src={pawPrintDown}
        alt="Paw print"
        className="absolute top-200 left-50 w-8 h-8 animate-bounce"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 14 }}
      />
      <Motion.img
        src={pawPrintDown}
        alt="Paw print"
        className="absolute top-235 left-60 w-8 h-8 rotate-300 animate-bounce"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 15 }}
      />
      <Motion.img
        src={pawPrintRight}
        alt="Paw print"
        className="absolute top-235 left-90 w-8 h-8 animate-bounce"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 16 }}
      />
      <Motion.img
        src={pawPrintRight}
        alt="Paw print"
        className="absolute top-235 left-125 w-8 h-8 animate-bounce"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 17 }}
      />
      <Motion.img
        src={pawPrintRight}
        alt="Paw print"
        className="absolute top-235 left-210 w-8 h-8 animate-bounce"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 18 }}
      />
      <Motion.img
        src={pawPrintRight}
        alt="Paw print"
        className="absolute top-237 left-240 rotate-25 w-8 h-8 animate-bounce"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 19 }}
      />
    </div>
  );
};

export default PawPrint;
