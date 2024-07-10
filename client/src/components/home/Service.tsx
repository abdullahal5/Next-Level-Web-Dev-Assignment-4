import { LiaShippingFastSolid } from "react-icons/lia";
import { CiCreditCard1, CiDollar } from "react-icons/ci";
import { LuMessageSquare } from "react-icons/lu";
import { createElement } from "react";

const Service = () => {
  const services = [
    {
      icon: LiaShippingFastSolid,
      name: "Free Shipping",
      tag: "Orders Over $500",
    },
    {
      icon: CiCreditCard1,
      name: "Quick Payment",
      tag: "100% Secure",
    },
    {
      icon: CiDollar,
      name: "Big Cashback",
      tag: "Orders 40% Cashback",
    },
    {
      icon: LuMessageSquare,
      name: "24/7 Support",
      tag: "Ready for you",
    },
  ];
  return (
    <div>
      <div className="flex lg:flex-row md:flex-row flex-col items-center justify-center gap-8">
        {services.map((item, index) => (
          <div key={index}>
            <div className="border rounded-xl w-44 h-32 p-4 hover:scale-110 hover:bg-[#44ac69] hover:text-white space-y-1 duration-300 cursor-pointer group">
              <span className="text-4xl">{createElement(item.icon)}</span>
              <p className="font-[600] text-[14px]">{item.name}</p>
              <p className="text-xs text-[#7A7A7A] group-hover:text-white duration-300">
                {item.tag}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
