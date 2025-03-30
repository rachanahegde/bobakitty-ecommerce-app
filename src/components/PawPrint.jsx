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
        className="absolute hidden xl:block lg:top-4 lg:left-272 lg:w-8 lg:h-8 rotate-40 animate-bounce"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      />
      <Motion.img
        src={pawPrintDown}
        alt="Paw print"
        className="absolute hidden xl:block lg:top-30 lg:left-290 lg:w-8 lg:h-8 animate-bounce"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3 }}
      />
      <Motion.img
        src={pawPrintDown}
        alt="Paw print"
        className="absolute hidden xl:block lg:top-55 lg:left-290 w-8 h-8 animate-bounce"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 4 }}
      />
      <Motion.img
        src={pawPrintDown}
        alt="Paw print"
        className="absolute hidden xl:block lg:top-80 lg:left-290 w-8 h-8 animate-bounce"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 5 }}
      />
      <Motion.img
        src={pawPrintDown}
        alt="Paw print"
        className="absolute hidden xl:block top-105 left-290 w-8 h-8 rotate-30 animate-bounce"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 6 }}
      />
      <Motion.img
        src={pawPrintRight}
        alt="Paw print"
        className="absolute hidden xl:block top-128 left-280 w-8 h-8 rotate-150 animate-bounce"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 7 }}
      />
      <Motion.img
        src={pawPrintRight}
        alt="Paw print"
        className="absolute hidden xl:block top-128 left-255 w-8 h-8 rotate-180 animate-bounce"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 8 }}
      />
      <Motion.img
        src={pawPrintRight}
        alt="Paw print"
        className="absolute hidden xl:block top-128 left-230 w-8 h-8 rotate-180 animate-bounce"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 9 }}
      />
      <Motion.img
        src={pawPrintRight}
        alt="Paw print"
        className="absolute hidden xl:block top-128 left-115 w-8 h-8 rotate-180 animate-bounce"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 10 }}
      />
      <Motion.img
        src={pawPrintRight}
        alt="Paw print"
        className="absolute hidden xl:block top-130 left-90 w-8 h-8 rotate-180 animate-bounce"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 11 }}
      />
      <Motion.img
        src={pawPrintRight}
        alt="Paw print"
        className="absolute hidden xl:block top-138 left-65 w-8 h-8 rotate-150 animate-bounce"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 12 }}
      />
      <Motion.img
        src={pawPrintRight}
        alt="Paw print"
        className="absolute hidden xl:block top-165 left-50 w-8 h-8 rotate-100 animate-bounce"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 13 }}
      />
      <Motion.img
        src={pawPrintDown}
        alt="Paw print"
        className="absolute hidden xl:block top-200 left-50 w-8 h-8 animate-bounce"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 14 }}
      />
      <Motion.img
        src={pawPrintDown}
        alt="Paw print"
        className="absolute hidden xl:block top-235 left-60 w-8 h-8 rotate-300 animate-bounce"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 15 }}
      />
      <Motion.img
        src={pawPrintRight}
        alt="Paw print"
        className="absolute hidden xl:block top-240 left-90 w-8 h-8 animate-bounce"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 16 }}
      />
      <Motion.img
        src={pawPrintRight}
        alt="Paw print"
        className="absolute hidden xl:block top-240 left-125 w-8 h-8 animate-bounce"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 17 }}
      />
      <Motion.img
        src={pawPrintRight}
        alt="Paw print"
        className="absolute hidden xl:block top-240 left-210 w-8 h-8 animate-bounce"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 18 }}
      />
      <Motion.img
        src={pawPrintRight}
        alt="Paw print"
        className="absolute hidden xl:block top-244 left-240 rotate-25 w-8 h-8 animate-bounce"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 19 }}
      />
    </div>
  );
};

export default PawPrint;
