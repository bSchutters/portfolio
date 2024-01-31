import Card from "../../components/common/card";
import Layout from "../../components/layout/layout";
import Service from "../../components/services/service";

export default function Services() {
  return (
    <Layout>
      <p className="text-5xl lg:w-2/3">
        I imagine digital solutions & <br />I design, build and create
        responsive user-friendly web applications{" "}
      </p>

      <div className="flex w-full flex-col gap-5 lg:flex-row">
        <Card className="flex w-full flex-col gap-5 lg:w-1/2">
          <h3 className="text-xl font-bold">Developement</h3>

          <ul className="flex flex-col gap-2">
            <Service title="HTML, CSS, Javascript" />
            <Service title="React" />
            <Service title="Typescript" />
            <Service title="TailwindCSS" />
            <Service title="Git" />
          </ul>
        </Card>
        <Card className="flex w-full flex-col gap-5 lg:w-1/2">
          <h3 className="text-xl font-bold">Design</h3>

          <ul className="flex flex-col gap-2">
            <Service title="Web design" />
            <Service title="Branding" />
            <Service title="Brand guides" />
            <Service title="Wireframes" />
            <Service title="Inforgraphics" />
            <Service title="And more..." />
          </ul>
        </Card>
      </div>
    </Layout>
  );
}
