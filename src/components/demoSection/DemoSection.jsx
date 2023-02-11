import { Container, Grid } from "@mui/material";
import React, { useRef } from "react";
import { useState } from "react";
import { FaHandshake, FaRoad } from "react-icons/fa";
import { IoDocumentTextSharp } from "react-icons/io5";
import emailjs from "@emailjs/browser";
import {
  US,
  IN,
  AC,
  AD,
  AM,
  AX,
  BR,
  CO,
  DJ,
  ES,
  FK,
  FR,
  GA,
  // KL,
  MD,
  MP,
  AE,
  AF,
  AG,
  AI,
  AL,
  AO,
  AQ,
  AR,
  AS,
  AT,
  AU,
  AW,
  AZ,
  BA,
  BB,
  BD,
  BE,
  BF,
  BG,
  BH,
  BI,
  BJ,
  BL,
  BM,
  BN,
  BO,
  BQ,
  BS,
  BT,
  BV,
  BW,
  BY,
  BZ,
  CA,
  CC,
  CD,
  CF,
  CG,
  CH,
  CI,
  CK,
  CL,
  CM,
  CN,
  CR,
  CU,
  CV,
  CW,
  CX,
  CY,
  // CZ,
  DE,
  DK,
  DM,
  DO,
  DZ,
  EC,
  EE,
  EG,
  EH,
  ER,
  ET,
  EU,
  FI,
  FJ,
  FM,
  FO,
  GB,
  GD,
  GE,
  GF,
  GG,
  GH,
  GI,
  GL,
  GM,
  GN,
  GP,
  GQ,
  GR,
  GS,
  GT,
  GU,
  GW,
  GY,
  HK,
  HM,
  HN,
  HR,
  HT,
  HU,
  IC,
  ID,
  IE,
  IL,
  IM,
  IO,
  IQ,
  IR,
  IS,
  IT,
  JE,
  JM,
  JO,
  JP,
  KM,
  KG,
  KH,
  KN,
  KP,
  KR,
  KW,
  KY,
  KZ,
  LA,
  LB,
  LC,
  LI,
  LK,
  LR,
  LS,
  LT,
  LU,
  LV,
  LY,
  MA,
  MC,
  ME,
  MF,
  MG,
  MH,
  MK,
  ML,
  MM,
  MN,
  MO,
  MQ,
  MR,
  MS,
  MT,
  MU,
  MV,
  MW,
  MX,
  MY,
  MZ,
  NA,
  NC,
  NE,
  NF,
  NG,
  NI,
  NL,
  NO,
  NP,
  NR,
  NU,
  NZ,
  OM,
  PA,
  PE,
  PF,
  PG,
  PH,
  KI,
  PK,
  PL,
  PM,
  PN,
  PR,
  PS,
  PT,
  PW,
  QA,
  RE,
  RO,
  RS,
  RU,
  RW,
  SA,
  SB,
  SC,
  SD,
  SE,
  SG,
  SH,
  SI,
  SJ,
  SK,
  SL,
  SM,
  SN,
  SO,
  SR,
  SS,
  ST,
  SV,
  SX,
  SY,
  SZ,
  TA,
  TC,
  TF,
  TG,
  TH,
  TJ,
  TL,
  TM,
  TN,
  TO,
  TR,
  TT,
  TV,
  TW,
  TZ,
  UA,
  UG,
  UM,
  UY,
  UZ,
  VA,
  VC,
  VE,
  VG,
  VI,
  VN,
  WF,
  WS,
  XK,
  YE,
  YT,
  ZA,
  PY,
  TD,
  TK,
  ZM,
  ZW,
} from "country-flag-icons/react/3x2";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import ReactFlagsSelect, { Fm } from "react-flags-select";
import { IoMdArrowDropdown } from "react-icons/io";

import "./DemoSection.css";
// import SvgCz from "react-flags-select/build/components/Flags/Countries/Cz";
const DemoSection = () => {
  const [stepper, setStepper] = useState(1);
  const [width, setWidth] = useState(33);
  const [selected, setSelected] = useState("");
  const [dropdown, setDropdown] = useState(false);
  const [value, setValue] = useState(<AE title="UAE" />);
  const [formValues, setFormValues] = useState({});

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormValues((values) => ({ ...values, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_0teko3q", // service id
        "template_0nbp04y", // template id
        formValues,
        "fBgZ6RWbXWobGWEHz" // public key
      )
      .then(
        (result) => {
          if (result.status === 200) {
            setFormValues("");
            window.location.replace(
              "https://www.sageeducation.ae/campaigns/sat-coaching-dubai/thanks.php"
            );
          }
        },
        (error) => {
          console.log(error);
        }
      );
  };

  const countries = [
    {
      title: "US",
      icon: <US title="United States" fontSize={"20px"} className="..." />,
    },
    { title: "US", icon: <AC title="United States" className="..." /> },
    { title: "US", icon: <AD title="United States" className="..." /> },
    { title: "US", icon: <AE title="United States" className="..." /> },
    { title: "US", icon: <AF title="United States" className="..." /> },
    { title: "US", icon: <AG title="United States" className="..." /> },
    { title: "US", icon: <AI title="United States" className="..." /> },
    { title: "US", icon: <AL title="United States" className="..." /> },
    { title: "US", icon: <AM title="United States" className="..." /> },
    { title: "US", icon: <AO title="United States" className="..." /> },
    { title: "US", icon: <AQ title="United States" className="..." /> },
    { title: "US", icon: <AR title="United States" className="..." /> },
    { title: "US", icon: <AS title="United States" className="..." /> },
    { title: "US", icon: <AT title="United States" className="..." /> },
    { title: "US", icon: <AU title="United States" className="..." /> },
    { title: "US", icon: <AW title="United States" className="..." /> },
    { title: "US", icon: <AX title="United States" className="..." /> },
    { title: "US", icon: <AZ title="United States" className="..." /> },
    { title: "US", icon: <BA title="United States" className="..." /> },
    { title: "US", icon: <BB title="United States" className="..." /> },
    { title: "US", icon: <BD title="United States" className="..." /> },
    { title: "US", icon: <BE title="United States" className="..." /> },
    { title: "US", icon: <BF title="United States" className="..." /> },
    { title: "US", icon: <BG title="United States" className="..." /> },
    { title: "US", icon: <BH title="United States" className="..." /> },
    { title: "US", icon: <BI title="United States" className="..." /> },
    { title: "US", icon: <BJ title="United States" className="..." /> },
    { title: "US", icon: <BL title="United States" className="..." /> },
    { title: "US", icon: <BM title="United States" className="..." /> },
    { title: "US", icon: <BN title="United States" className="..." /> },
    { title: "US", icon: <BO title="United States" className="..." /> },
    { title: "US", icon: <BQ title="United States" className="..." /> },
    { title: "US", icon: <BR title="United States" className="..." /> },
    { title: "US", icon: <BS title="United States" className="..." /> },
    { title: "US", icon: <AX title="United States" className="..." /> },
    { title: "US", icon: <BT title="United States" className="..." /> },
    { title: "US", icon: <BV title="United States" className="..." /> },
    { title: "US", icon: <BW title="United States" className="..." /> },
    { title: "US", icon: <BY title="United States" className="..." /> },
    { title: "US", icon: <BZ title="United States" className="..." /> },
    { title: "US", icon: <CA title="United States" className="..." /> },
    { title: "US", icon: <CC title="United States" className="..." /> },
    { title: "US", icon: <CD title="United States" className="..." /> },
    { title: "US", icon: <CF title="United States" className="..." /> },
    { title: "US", icon: <CG title="United States" className="..." /> },
    { title: "US", icon: <CH title="United States" className="..." /> },
    { title: "US", icon: <CI title="United States" className="..." /> },
    { title: "US", icon: <CK title="United States" className="..." /> },
    { title: "US", icon: <CL title="United States" className="..." /> },
    { title: "US", icon: <CM title="United States" className="..." /> },
    { title: "US", icon: <CN title="United States" className="..." /> },
    { title: "US", icon: <AX title="United States" className="..." /> },
    { title: "US", icon: <CO title="United States" className="..." /> },
    { title: "US", icon: <CR title="United States" className="..." /> },
    { title: "US", icon: <CU title="United States" className="..." /> },
    { title: "US", icon: <CV title="United States" className="..." /> },
    { title: "US", icon: <CV title="United States" className="..." /> },
    { title: "US", icon: <CW title="United States" className="..." /> },
    { title: "US", icon: <CX title="United States" className="..." /> },
    { title: "US", icon: <CY title="United States" className="..." /> },
    // { title: "US", icon: <CZ title="United States" className="..." /> },
    { title: "US", icon: <DE title="United States" className="..." /> },
    { title: "US", icon: <DJ title="United States" className="..." /> },
    { title: "US", icon: <DK title="United States" className="..." /> },
    { title: "US", icon: <DM title="United States" className="..." /> },
    { title: "US", icon: <DO title="United States" className="..." /> },
    { title: "US", icon: <DZ title="United States" className="..." /> },
    { title: "US", icon: <EC title="United States" className="..." /> },
    { title: "US", icon: <EE title="United States" className="..." /> },
    { title: "US", icon: <EG title="United States" className="..." /> },
    { title: "US", icon: <EG title="United States" className="..." /> },
    { title: "US", icon: <EH title="United States" className="..." /> },
    { title: "US", icon: <ER title="United States" className="..." /> },
    { title: "US", icon: <ES title="United States" className="..." /> },
    { title: "US", icon: <ET title="United States" className="..." /> },
    { title: "US", icon: <EU title="United States" className="..." /> },
    { title: "US", icon: <FI title="United States" className="..." /> },
    { title: "US", icon: <FJ title="United States" className="..." /> },
    { title: "US", icon: <FK title="United States" className="..." /> },
    { title: "US", icon: <FM title="United States" className="..." /> },
    { title: "US", icon: <FO title="United States" className="..." /> },
    { title: "US", icon: <FR title="United States" className="..." /> },
    { title: "US", icon: <GA title="United States" className="..." /> },
    { title: "US", icon: <GB title="United States" className="..." /> },
    { title: "US", icon: <GD title="United States" className="..." /> },
    { title: "US", icon: <GE title="United States" className="..." /> },
    { title: "US", icon: <GF title="United States" className="..." /> },
    { title: "US", icon: <GG title="United States" className="..." /> },
    { title: "US", icon: <GH title="United States" className="..." /> },
    { title: "US", icon: <GI title="United States" className="..." /> },
    { title: "US", icon: <GL title="United States" className="..." /> },
    { title: "US", icon: <GM title="United States" className="..." /> },
    { title: "US", icon: <GN title="United States" className="..." /> },
    { title: "US", icon: <GP title="United States" className="..." /> },
    { title: "US", icon: <GQ title="United States" className="..." /> },
    { title: "US", icon: <GR title="United States" className="..." /> },
    { title: "US", icon: <GS title="United States" className="..." /> },
    { title: "US", icon: <GT title="United States" className="..." /> },
    { title: "US", icon: <GU title="United States" className="..." /> },
    { title: "US", icon: <GW title="United States" className="..." /> },
    { title: "US", icon: <GY title="United States" className="..." /> },
    { title: "US", icon: <HK title="United States" className="..." /> },
    { title: "US", icon: <HM title="United States" className="..." /> },
    { title: "US", icon: <HN title="United States" className="..." /> },
    { title: "US", icon: <HR title="United States" className="..." /> },
    { title: "US", icon: <HT title="United States" className="..." /> },
    { title: "US", icon: <HU title="United States" className="..." /> },
    { title: "US", icon: <IC title="United States" className="..." /> },
    { title: "US", icon: <ID title="United States" className="..." /> },
    { title: "US", icon: <IE title="United States" className="..." /> },
    { title: "US", icon: <IL title="United States" className="..." /> },
    { title: "US", icon: <IM title="United States" className="..." /> },
    { title: "US", icon: <IN title="United States" className="..." /> },
    { title: "US", icon: <IO title="United States" className="..." /> },
    { title: "US", icon: <IQ title="United States" className="..." /> },
    { title: "US", icon: <IR title="United States" className="..." /> },
    { title: "US", icon: <IS title="United States" className="..." /> },
    { title: "US", icon: <IT title="United States" className="..." /> },
    { title: "US", icon: <JE title="United States" className="..." /> },
    { title: "US", icon: <JM title="United States" className="..." /> },
    { title: "US", icon: <JO title="United States" className="..." /> },
    { title: "US", icon: <JP title="United States" className="..." /> },
    { title: "US", icon: <KM title="United States" className="..." /> },
    { title: "US", icon: <KG title="United States" className="..." /> },
    { title: "US", icon: <KH title="United States" className="..." /> },
    { title: "US", icon: <KI title="United States" className="..." /> },
    { title: "US", icon: <KM title="United States" className="..." /> },
    { title: "US", icon: <KN title="United States" className="..." /> },
    { title: "US", icon: <KP title="United States" className="..." /> },
    { title: "US", icon: <KR title="United States" className="..." /> },
    { title: "US", icon: <KW title="United States" className="..." /> },
    { title: "US", icon: <KY title="United States" className="..." /> },
    { title: "US", icon: <KZ title="United States" className="..." /> },
    { title: "US", icon: <LA title="United States" className="..." /> },
    { title: "US", icon: <LB title="United States" className="..." /> },
    { title: "US", icon: <LC title="United States" className="..." /> },
    { title: "US", icon: <LI title="United States" className="..." /> },
    { title: "US", icon: <LK title="United States" className="..." /> },
    { title: "US", icon: <LR title="United States" className="..." /> },
    { title: "US", icon: <LS title="United States" className="..." /> },
    { title: "US", icon: <LT title="United States" className="..." /> },
    { title: "US", icon: <LU title="United States" className="..." /> },
    { title: "US", icon: <LV title="United States" className="..." /> },
    { title: "US", icon: <LY title="United States" className="..." /> },
    { title: "US", icon: <MA title="United States" className="..." /> },
    { title: "US", icon: <MC title="United States" className="..." /> },
    { title: "US", icon: <MD title="United States" className="..." /> },
    { title: "US", icon: <ME title="United States" className="..." /> },
    { title: "US", icon: <MF title="United States" className="..." /> },
    { title: "US", icon: <MG title="United States" className="..." /> },
    { title: "US", icon: <MH title="United States" className="..." /> },
    { title: "US", icon: <MK title="United States" className="..." /> },
    { title: "US", icon: <ML title="United States" className="..." /> },
    { title: "US", icon: <MM title="United States" className="..." /> },
    { title: "US", icon: <MN title="United States" className="..." /> },
    { title: "US", icon: <MO title="United States" className="..." /> },
    { title: "US", icon: <MP title="United States" className="..." /> },
    { title: "US", icon: <MQ title="United States" className="..." /> },
    { title: "US", icon: <MR title="United States" className="..." /> },
    { title: "US", icon: <MS title="United States" className="..." /> },
    { title: "US", icon: <MT title="United States" className="..." /> },
    { title: "US", icon: <MU title="United States" className="..." /> },
    { title: "US", icon: <MV title="United States" className="..." /> },
    { title: "US", icon: <MW title="United States" className="..." /> },
    { title: "US", icon: <MX title="United States" className="..." /> },
    { title: "US", icon: <MY title="United States" className="..." /> },
    { title: "US", icon: <MZ title="United States" className="..." /> },
    { title: "US", icon: <NA title="United States" className="..." /> },
    { title: "US", icon: <NC title="United States" className="..." /> },
    { title: "US", icon: <NE title="United States" className="..." /> },
    { title: "US", icon: <NF title="United States" className="..." /> },
    { title: "US", icon: <NG title="United States" className="..." /> },
    { title: "US", icon: <NI title="United States" className="..." /> },
    { title: "US", icon: <NL title="United States" className="..." /> },
    { title: "US", icon: <NO title="United States" className="..." /> },
    { title: "US", icon: <NP title="United States" className="..." /> },
    { title: "US", icon: <NR title="United States" className="..." /> },
    { title: "US", icon: <NU title="United States" className="..." /> },
    { title: "US", icon: <NZ title="United States" className="..." /> },
    { title: "US", icon: <OM title="United States" className="..." /> },
    { title: "US", icon: <PA title="United States" className="..." /> },
    { title: "US", icon: <PE title="United States" className="..." /> },
    { title: "US", icon: <PF title="United States" className="..." /> },
    { title: "US", icon: <PG title="United States" className="..." /> },
    { title: "US", icon: <PH title="United States" className="..." /> },
    { title: "US", icon: <PK title="United States" className="..." /> },
    { title: "US", icon: <PL title="United States" className="..." /> },
    { title: "US", icon: <PM title="United States" className="..." /> },
    { title: "US", icon: <PN title="United States" className="..." /> },
    { title: "US", icon: <PR title="United States" className="..." /> },
    { title: "US", icon: <PS title="United States" className="..." /> },
    { title: "US", icon: <PT title="United States" className="..." /> },
    { title: "US", icon: <PW title="United States" className="..." /> },
    { title: "US", icon: <PY title="United States" className="..." /> },
    { title: "US", icon: <QA title="United States" className="..." /> },

    { title: "US", icon: <RE title="United States" className="..." /> },
    { title: "US", icon: <RO title="United States" className="..." /> },
    { title: "US", icon: <RS title="United States" className="..." /> },
    { title: "US", icon: <RU title="United States" className="..." /> },
    { title: "US", icon: <RW title="United States" className="..." /> },
    { title: "US", icon: <SA title="United States" className="..." /> },
    { title: "US", icon: <SB title="United States" className="..." /> },
    { title: "US", icon: <SC title="United States" className="..." /> },
    { title: "US", icon: <SD title="United States" className="..." /> },
    { title: "US", icon: <SE title="United States" className="..." /> },
    { title: "US", icon: <SG title="United States" className="..." /> },
    { title: "US", icon: <SH title="United States" className="..." /> },
    { title: "US", icon: <SI title="United States" className="..." /> },
    { title: "US", icon: <SJ title="United States" className="..." /> },
    { title: "US", icon: <SK title="United States" className="..." /> },
    { title: "US", icon: <SL title="United States" className="..." /> },
    { title: "US", icon: <SM title="United States" className="..." /> },
    { title: "US", icon: <SN title="United States" className="..." /> },
    { title: "US", icon: <SO title="United States" className="..." /> },
    { title: "US", icon: <SR title="United States" className="..." /> },
    { title: "US", icon: <SS title="United States" className="..." /> },
    { title: "US", icon: <ST title="United States" className="..." /> },
    { title: "US", icon: <SV title="United States" className="..." /> },

    { title: "US", icon: <SX title="United States" className="..." /> },
    { title: "US", icon: <SY title="United States" className="..." /> },
    { title: "US", icon: <SZ title="United States" className="..." /> },
    { title: "US", icon: <TA title="United States" className="..." /> },
    { title: "US", icon: <TC title="United States" className="..." /> },
    { title: "US", icon: <TD title="United States" className="..." /> },
    { title: "US", icon: <TF title="United States" className="..." /> },

    { title: "US", icon: <TG title="United States" className="..." /> },
    { title: "US", icon: <TH title="United States" className="..." /> },
    { title: "US", icon: <TJ title="United States" className="..." /> },
    { title: "US", icon: <TK title="United States" className="..." /> },
    { title: "US", icon: <TL title="United States" className="..." /> },
    { title: "US", icon: <TM title="United States" className="..." /> },
    { title: "US", icon: <TN title="United States" className="..." /> },
    { title: "US", icon: <TO title="United States" className="..." /> },
    { title: "US", icon: <TR title="United States" className="..." /> },
    { title: "US", icon: <TT title="United States" className="..." /> },
    { title: "US", icon: <TV title="United States" className="..." /> },
    { title: "US", icon: <TW title="United States" className="..." /> },
    { title: "US", icon: <TZ title="United States" className="..." /> },
    { title: "US", icon: <UA title="United States" className="..." /> },
    { title: "US", icon: <UG title="United States" className="..." /> },
    { title: "US", icon: <UM title="United States" className="..." /> },
    { title: "US", icon: <US title="United States" className="..." /> },
    { title: "US", icon: <UY title="United States" className="..." /> },
    { title: "US", icon: <UZ title="United States" className="..." /> },
    { title: "US", icon: <VA title="United States" className="..." /> },
    { title: "US", icon: <VC title="United States" className="..." /> },
    { title: "US", icon: <VE title="United States" className="..." /> },
    { title: "US", icon: <VG title="United States" className="..." /> },
    { title: "US", icon: <VI title="United States" className="..." /> },
    { title: "US", icon: <VN title="United States" className="..." /> },
    { title: "US", icon: <WF title="United States" className="..." /> },
    { title: "US", icon: <WS title="United States" className="..." /> },
    { title: "US", icon: <XK title="United States" className="..." /> },
    { title: "US", icon: <YE title="United States" className="..." /> },
    { title: "US", icon: <YT title="United States" className="..." /> },
    { title: "US", icon: <ZA title="United States" className="..." /> },
    { title: "US", icon: <ZM title="United States" className="..." /> },
    { title: "US", icon: <ZW title="United States" className="..." /> },
  ];
  return (
    <div>
      <Container>
        <Grid container spacing={0}>
          <Grid item xs={12} sm={7} md={7} lg={7}>
            <h1 className="demo-heading">What To Expect in the Demo Class</h1>
            <div className="demo-section">
              <FaHandshake
                className="demo-icon"
                color="#2872fa"
                fontSize={50}
              />
              <div className="demo-text-section">
                <h2 className="demo-sub-heading">Initial Consultation</h2>
                <p className="demo-text">
                  An initial call with our experts will help us understand your
                  requirements
                </p>
              </div>
            </div>
            <div className="demo-section">
              <IoDocumentTextSharp
                className="demo-icon"
                color="#2872fa"
                fontSize={50}
              />

              <div className="demo-text-section">
                <h2
                  className="demo-sub-heading"
                  style={{ paddingLeft: "10px" }}
                >
                  Mock Test
                </h2>
                <p className="demo-text" style={{ paddingLeft: "10px" }}>
                  Take a mock SAT test to understand the sections that you need
                  to improve
                </p>
              </div>
            </div>
            <div className="demo-section">
              <FaRoad className="demo-icon" color="#2872fa" fontSize={50} />
              <div className="demo-text-section">
                <h2 className="demo-sub-heading">SAT Roadmap</h2>
                <p className="demo-text">
                  An initial call with our experts will help us understand your
                  requirements
                </p>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={5} md={5} lg={5}>
            <div className="demo-form-section">
              <h1 className="demo-form-heading">
                Get Started with a SAT Demo Class
              </h1>
              <div>Step {stepper} of 3</div>
              <div className="progress">
                <div
                  className="progress-line"
                  style={{ width: `${width}%` }}
                ></div>
              </div>
              {stepper === 1 ? (
                <div>
                  <p className="demo-question">
                    You are a <span className="star">*</span>
                  </p>{" "}
                  <form onSubmit={handleFormSubmit}>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      defaultValue="female"
                      name="radio-buttons-group"
                    >
                      <FormControlLabel
                        value="parent"
                        control={<Radio size="small" required />}
                        label="Parent"
                        name="who"
                        onChange={handleChange}
                      />
                      <FormControlLabel
                        value="student"
                        control={<Radio size="small" required />}
                        label="Student"
                        className="radio-btn"
                        name="who"
                        onChange={handleChange}
                      />
                    </RadioGroup>
                    <button
                      onClick={() => [
                        setStepper(stepper + 1),
                        setWidth(width + 33),
                      ]}
                      className="next-btn"
                    >
                      Next
                    </button>
                  </form>
                </div>
              ) : stepper == 2 ? (
                <div>
                  <p className="demo-question">
                    What grade/standard is your child currently in?{" "}
                    <span className="star">*</span>
                  </p>{" "}
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                  >
                    <FormControlLabel
                      value="graduated"
                      control={
                        <Radio
                          size="small"
                          onChange={handleChange}
                          name="education"
                          required
                        />
                      }
                      label="Graduated"
                    />
                    <FormControlLabel
                      value="12th"
                      control={
                        <Radio
                          size="small"
                          onChange={handleChange}
                          name="education"
                          required
                        />
                      }
                      label="12th"
                      className="radio-btn"
                    />
                    <FormControlLabel
                      value="11th"
                      control={
                        <Radio
                          size="small"
                          onChange={handleChange}
                          name="education"
                          required
                        />
                      }
                      label="11th"
                    />
                    <FormControlLabel
                      value="10th or less"
                      control={
                        <Radio
                          size="small"
                          onChange={handleChange}
                          name="education"
                          required
                        />
                      }
                      label="10th or less"
                      className="radio-btn"
                    />
                  </RadioGroup>
                  <button
                    onClick={() => [
                      setStepper(stepper + 1),
                      setWidth(width + 34),
                    ]}
                    className="next-btn"
                  >
                    Next
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit}>
                  <label className="demo-question">
                    Your Name <span className="star">*</span>
                  </label>
                  <br />
                  <input
                    className="demo-input"
                    type="text"
                    required
                    onChange={handleChange}
                    name="name"
                    value={formValues.name}
                  />
                  <br />
                  <br />
                  <label className="demo-question">
                    Your Email <span className="star">*</span>
                  </label>
                  <br />
                  <input
                    className="demo-input"
                    type="email"
                    required
                    onChange={handleChange}
                    name="email"
                    value={formValues.email}
                  />
                  <br />
                  <br />
                  <label className="demo-question">
                    Your Phone Number <span className="star">*</span>
                  </label>
                  <br />
                  <div className="country-code-section">
                    {/* <ReactFlagsSelect
                      style={{ border: "none" }}
                      placeholder={"pk"}
                      id="flags-select"
                      fullWidth={false}
                      showOptionLabel={false}
                      showSelectedLabel={false}
                      selected={selected}
                      onSelect={(code) => setSelected(code)}
                    /> */}
                    <div
                      className="dropdown-main"
                      onClick={() => setDropdown(!dropdown)}
                    >
                      <div
                        style={{
                          display: "flex",
                          height: 40,
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <span
                          style={{
                            display: "flex",
                            width: "30px",
                            height: "30px",
                          }}
                        >
                          {value}
                        </span>
                        <IoMdArrowDropdown />
                      </div>
                      <div className="drop">
                        {dropdown && (
                          <div className="dropdown-inner-section">
                            {countries?.map((item) => {
                              return (
                                <div
                                  className="country-dropdown"
                                  onClick={() => [
                                    setValue(item.icon),
                                    setDropdown(false),
                                  ]}
                                >
                                  <div
                                    style={{
                                      display: "flex",
                                      flexDirection: "row",
                                    }}
                                  >
                                    <div
                                      style={{ width: "70px", height: "40px" }}
                                    >
                                      {item.icon}
                                    </div>
                                    {/* <p style={{ width: "5px" ,  fontSize: "12px" }}>{item.title}</p> */}
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    </div>
                    <input
                      className="demo-input-code"
                      type="number"
                      required
                      onChange={handleChange}
                      name="number"
                      value={formValues.number}
                    />
                  </div>
                  <br /> <button className="next-btn">Book your session</button>
                  <br />
                </form>
              )}
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default DemoSection;
