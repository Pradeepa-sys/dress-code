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
    <div className=" flex gap-7 items-start p-4 bg-neutral-900 h-[380px] justify-evenly">
      <div>
        <h1 className="h-10 text-xl">Exclusive</h1>
        <div className="py-1">
        <h3 className="py-3">Subscribe</h3>
        <p className="py-3">Get 10% off your first order</p>
        <div className=" flex h-12 w-65 py-0 item-center  border border-gray-50 rounded-lg  ">
          <input
            type="text"
            className="outline-0 w-55 px-3 "
            placeholder="Enter your email"
          />
          <div className="py-3 px-2 ">
            <Image src={send} width={25} alt="Picture of the author" />
          </div>
        </div>
        
        </div>
      </div>
      <Footercard data={Support} title="Support" />
      <Footercard data={Account} title="Account" />
      <Footercard data={QickLink} title="Quick Link"/>
      <div className="flex flex-col items-center justify-center ">
        <h1 className="h-10 text-xl">Download App</h1>
        <p className="text-gray-500">Save $3 with App New User Only</p>
        <div className="flex py-5 ">
          <Image src={Qrcode} width={75} alt="Picture of the author" />
          <div className="flex flex-col py-6">
            <Image src={gpay} width={100} alt="Picture of the author" />
            <Image src={app} width={100} alt="Picture of the author" />
          </div>
        </div>
        <div className="flex gap-4 ">
          <Image src={facebook} width={30} alt="Picture of the author" />
          <Image src={instagram} width={30} alt="Picture of the author" />
          <Image src={twitter} width={30} alt="Picture of the author" />
          <Image src={linkedin} width={30} alt="Picture of the author" />
        </div>
      </div>
    </div>
  );
}
