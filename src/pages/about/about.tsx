import Layout from "../../components/layout/layout";
import bryan from "../../assets/images/bryan.jpg";

export default function About() {
  return (
    <Layout>
      <h3 className="text-4xl font-bold">Where it all began ?</h3>
      <div className="flex flex-col gap-10 lg:flex-row">
        <p className="w-full text-xl lg:w-2/3  lg:text-2xl">
          Passionate about computers since childhood, I am a naturally curious
          individual always eager to learn more when a subject piques my
          interest. In 2018, I stumbled upon the world of development and
          instantly knew that it would be my life's calling.
          <br />
          <br />
          Ever in pursuit of knowledge, I enthusiastically dive into every topic
          that captures my fascination. My journey in the field of computer
          science reflects my determination to turn my passion into a career
          filled with innovation and creativity.
        </p>
        <div className="flex items-center justify-center lg:w-1/3">
          <img
            src={bryan}
            alt="Bryan Schutters"
            className="w-full rounded-2xl object-cover "
          />
        </div>
      </div>
    </Layout>
  );
}
