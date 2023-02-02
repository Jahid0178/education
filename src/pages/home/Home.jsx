import React from "react";
import CardSection from "../../components/cardSection/CardSection";
import DemoSection from "../../components/demoSection/DemoSection";
import DetialSection from "../../components/detialSection/DetialSection";
import EnrollSection from "../../components/enrollSection/EnrollSection";
import Footer from "../../components/footer/Footer";
import Form from "../../components/form/Form";
import OurStudentSection from "../../components/ourStudentSection/OurStudentSection";
import ProudMoment from "../../components/proudMoment/ProudMoment";
import StudentSection from "../../components/studentSection/StudentSection";
import Universities from "../../components/universities/Universities";
import "./Home.css";
const Home = () => {
  return (
    <div>
      <Form />
      <br />
      <br />
      <CardSection />
      <br />
      <br />
      <ProudMoment />
      <br />
      <br />
      <EnrollSection />
      <br /> <br /> <StudentSection />
      <br /> <OurStudentSection />
      <br /> <br /> <DetialSection />
      <DemoSection />
      <br />
      <br />
      <Universities />
      <br /> <Footer />
    </div>
  );
};

export default Home;
