"use client";
import MarketHeader from "@/components/marketsComponent/MarketHeader";
import Image from "next/image";

const MT5Header = () => (
  <MarketHeader
    title="MetaTrader 5 (MT5) — Trade Smarter, Faster, Anywhere"
    description="Enjoy added features including depth of market, advanced trading tools and improved charting capabilities"
    bulletPoints={[
      "Available for web, desktop and mobile",
      "Connect to MT5 Webtrader from your live or demo account",
    ]}
    button1Text="Download MetaTrader 5"
    button1OnClick={() =>
      window.open("https://my.assexmarkets.com/auth/register", "_blank")
    }
    imageElement={
      <div className="relative w-full max-w-[400px] aspect-[3/2]">
        <Image
          src="/images/IndicesAndMetalsImage.png"
          alt="Gold mint"
          fill
          className="object-contain rounded-xl"
          priority
        />
      </div>
    }
  />
);

export default MT5Header;
