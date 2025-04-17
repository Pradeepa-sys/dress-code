import { Account, QickLink, Support } from "./carddata";
import Footercard from "./Footeritem";
import Image from "next/image";
import send from "../../../../public/assets/icon/send-arrow.svg";
import Qrcode from "../../../../public/assets/images/footer/Qrcode.svg";
import gpay from "../../../../public/assets/images/footer/GooglePlay.svg";
import app from "../../../../public/assets/images/footer/AppStore.svg";
import facebook from "../../../../public/assets/icon/Icon-Facebook.svg";
import instagram from "../../../../public/assets/icon/icon-instagram.svg";
import twitter from "../../../../public/assets/icon/Icon-Twitter.svg";
import linkedin from "../../../../public/assets/icon/Icon-Linkedin.svg";

export default function Footer() {
  return (
    <div className="flex flex-col lg:flex-row flex-wrap gap-7 items-start p-4 bg-neutral-900 justify-between lg:justify-evenly h-auto lg:h-[380px]">
      <div className="w-full sm:w-1/2 lg:w-auto mb-4 lg:mb-0">
        <h1 className="h-10 text-xl text-white">Exclusive</h1>
        <div className="py-1 text-white">
          <h3 className="py-3">Subscribe</h3>
          <p className="py-3 text-sm text-gray-300">Get 10% off your first order</p>
          <div className="flex items-center h-12 w-[80%] border border-gray-50 rounded-lg overflow-hidden">
            <input
              type="text"
              className="outline-none px-3 md:w-[90%]  w-full bg-transparent text-white"
              placeholder="Enter your email"
            />
            <div className="px-3">
              <Image src={send} width={25} alt="Send Icon" />
            </div>
          </div>
        </div>
      </div>

      <Footercard data={Support} title="Support" />
      <Footercard data={Account} title="Account" />
      <Footercard data={QickLink} title="Quick Link" />

      <div className="w-full sm:w-1/2 lg:w-auto flex flex-col items-start lg:items-center justify-center text-white mt-4 lg:mt-0">
        <h1 className="h-10 text-xl">Download App</h1>
        <p className="text-gray-400 text-sm">Save $3 with App New User Only</p>
        <div className="flex flex-col sm:flex-row py-5 gap-4">
          <Image src={Qrcode} width={75} alt="QR Code" />
          <div className="flex flex-col justify-center gap-2">
            <Image src={gpay} width={100} alt="Google Play" />
            <Image src={app} width={100} alt="App Store" />
          </div>
        </div>
        <div className="flex gap-4 mt-2">
          <Image src={facebook} width={30} alt="Facebook" />
          <Image src={instagram} width={30} alt="Instagram" />
          <Image src={twitter} width={30} alt="Twitter" />
          <Image src={linkedin} width={30} alt="LinkedIn" />
        </div>
      </div>
    </div>
  );
}

