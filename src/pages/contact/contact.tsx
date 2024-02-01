import { LuFileDown } from "react-icons/lu";
import Card from "../../components/common/card";
import Layout from "../../components/layout/layout";
import cv from "../../assets/images/CV_Bryan_2024_V3.pdf";

export default function Contact() {
  return (
    <Layout>
      <div className="flex flex-col gap-5 font-bold lg:flex-row">
        <h3 className="w-full text-4xl  lg:w-1/2">Hire me</h3>
        <div className="flex w-full flex-col gap-5 lg:w-1/2">
          <Card className="flex flex-col gap-2">
            <p className="text-sm">Email</p>
            <p className="text-xl">hello@bschutters.be</p>
          </Card>
          <Card className="flex flex-col gap-2">
            <p className="text-sm">Phone</p>
            <p className="text-xl">+32 488 95 24 02</p>
          </Card>
          <a href={cv} download>
            <Card className="flex items-center justify-between hover:cursor-pointer hover:bg-primary/80">
              <p className="text-xl">Resume</p>
              <LuFileDown size={22} />
            </Card>
          </a>
        </div>
      </div>
    </Layout>
  );
}
