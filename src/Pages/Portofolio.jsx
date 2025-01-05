import React, { useEffect, useState, useCallback } from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CardProject from "../components/CardProject";
import TechStackIcon from "../components/TechStackIcon";
import AOS from "aos";
import "aos/dist/aos.css";
import Certificate from "../components/Certificate";
import { Code, Award, Boxes } from "lucide-react";
import sql from "../assets/sql.png";
import sqlp from "../assets/sqlp.png";
import vsdata from "../assets/vsdata.png";
import pengembangsoftware from "../assets/pengembangsoftware.png";
import logicprg from "../assets/logicprg.png";
import jsbasic from "../assets/jsbasic.png";
import github from "../assets/github.png";
import flutterbasic from "../assets/flutterbasic.png";
import datawpy from "../assets/datawpy.png";
import ccp from "../assets/ccp.png";
import dlprofesional from "../assets/dlprofesional.png";
import genai from "../assets/genai.png";
import maths from "../assets/math.png";
import mlspesial from "../assets/mlspesialis.png";
import pyos from "../assets/pyos.png";
import dsh from "../assets/dsh.png";
import ass from "../assets/as.png";
import analisis from "../assets/analisis.png";
import studypath from "../assets/studypath.png";
import lt from "../assets/lt.png";
import stdsh from "../assets/stdsh.png";
import dse from "../assets/dse.png";
import hw from "../assets/hw.png";
import msib from "../assets/msib.png";
import rha from "../assets/rha.png";


const projectsData = [
  {
    id: 1,
    Img: dsh,
    Title: "Retail Transaction Dashboard",
    Description: "Retail Transaction Dashboard adalah sebuah dashboard yang menampilkan data transaksi penjualan di sebuah perusahaan retail. Dashboard ini memuat informasi mengenai jumlah transaksi berdasarkan jenis pembayaran dan kategori produk, total penjualan, dan profit yang didapatkan.",
    Link: "https://lookerstudio.google.com/reporting/6c33273b-d64b-4cfa-b8d5-1c9bf05c144f",
    Tect_stack: "Looker Studio",
    Fitur: ["Profit","Product summary","Customer summary"]
  },
  {
    id: 2,
    Img: ass,
    Title: "Analisis Sentimen Meta AI",
    Description: "Analisis Sentimen Meta AI adalah sebuah project analisis sentimen umum(positif, negatif, netral) untuk melihat seberapa baik Meta Ai di terima di indonesia",
    Link: "https://colab.research.google.com/drive/1rIJ3HXg4mcphpzsP7IbC4Z2azAkh4HAF?usp=sharing",
    Tect_stack: "NLP, Matplotlib, TextBlob, Pandas, Numpy",
    Fitur:["Sentiment umum", "Data Translate"]
  },
  {
    id: 3,
    Img: analisis,
    Title: "Analisis data penjulan produk",
    Description: "Analisis data penjulan produk adalah analisis yang dilakukan dengan tujuan mendapatkan jawaban dari pertanyaan bisnis dengan membuat visualisasi data yang mempermudah dalam mendapatkan kesimpulan.",
    Link: "https://colab.research.google.com/drive/1I_6Ao6Xlr4h6D8UNWkosg9E2T40DPHgA?usp=sharing",
    Tect_stack: "Matplotlib, Pandas, Numpy, Seaborn",
    Fitur:["Insignt data","Data visual","Deskripsi data"]
  },
  {
    id: 4,
    Img: studypath,
    Title: "StudyPath Project",
    Description: "StudyPath Project adalah tugas akhir Bangkit Academy yang merupakan program MSIB batch 7 2024 yang dikerjakan secara berkelompok dengan 3 bidang ilmu berbeda yaitu Machine Learning, Cloud Computing dan Mobile Depelopment(Android).",
    Link: "https://github.com/C242-PS142",
    Tect_stack: "TensorFlow, Scikit learn, Kotlin, Flask,  Google Cloud Platform",
    Fitur:["Persentasi Big Five Personality","Rekomendasi Konten Pembelajaran","Statistik Kepribadian" ]
  },
  {
    id: 5,
    Img: lt,
    Title: "LiteBrain Project Frontend",
    Description: "Aplikasi Belajar yang dibangun dengan Flutter yang berisi UI course, profile, messege, notifications, dan quiz. Aplikasi ini juga dilengkapi dengan fitur mode dark dan light.",
    Link: "https://github.com/ferdinann/mobile",
    Tect_stack: "Flutter, Dart",
    Fitur:["courses", "profile", "messege", "notifications", "quiz"]
  },
  {
    id: 6,
    Img: sqlp,
    Title: " DataBase Project",
    Description: "DataBase Project adalah project yang berisi tentang database yang digunakan untuk meyimpan data produk, customer id, transaksi, dan lain sebagainya dan juga disertai dengan beberapa fungsi dan triger.",
    Link: "https://github.com/ferdinann/Database_shop",
    Tect_stack: "SQL",
    Fitur:["Fungsi Search","Triger","Prosedur"]
  },
  {
    id: 7,
    Img: stdsh,
    Title: " Dashboard Proyek analisis data dengan Streamlit",
    Description: "Dashboard Proyek analisis data dengan Streamlit adalah sebuah dashboard yang menampilkan data analisis data dengan menggunakan streamlit sebagai frameworknya.",
    Link: "https://latihan-68aw5vksefumj2n7xjxzuk.streamlit.app/",
    Tect_stack: "Python, Streamlit, Pandas, Matplotlib",
    Fitur:["Bar chart permintaan customer","Pie chart kelompok pengguna"]
  },
];

const certificatesData = [
  {
    id: 1,
    Img: msib,
  },
  {
    id: 2,
    Img: rha,
  },
  {
    id: 3,
    Img: dse,
  },
  {
    id: 4,
    Img: sql,
  },
  {
    id: 5,
    Img: vsdata,
  },
  {
    id: 6,
    Img: pengembangsoftware,
  },
  {
    id: 7,
    Img: logicprg,
  },
  {
    id: 8,
    Img: jsbasic,
  },
  {
    id: 9,
    Img: github,
  },
  {
    id: 10,
    Img: flutterbasic,
  },
  {
    id: 11,
    Img: datawpy,
  },
  {
    id: 12,
    Img: ccp,
  },
  {
    id: 13,
    Img: pyos,
  },
  {
    id: 14,
    Img: dlprofesional,
  },
  {
    id: 15,
    Img: mlspesial,
  },
  {
    id: 16,
    Img: genai,
  },
  {
    id: 17,
    Img: maths,
  },
  {
    id: 18,
    Img: hw,
  },
  
];

const ToggleButton = ({ onClick, isShowingMore }) => (
  <button
    onClick={onClick}
    className="
      px-3 py-1.5
      text-slate-300 
      hover:text-white 
      text-sm 
      font-medium 
      transition-all 
      duration-300 
      ease-in-out
      flex 
      items-center 
      gap-2
      bg-white/5 
      hover:bg-white/10
      rounded-md
      border 
      border-white/10
      hover:border-white/20
      backdrop-blur-sm
      group
      relative
      overflow-hidden
    "
  >
    <span className="relative z-10 flex items-center gap-2">
      {isShowingMore ? "See Less" : "See More"}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`
          transition-transform 
          duration-300 
          ${isShowingMore ? "group-hover:-translate-y-0.5" : "group-hover:translate-y-0.5"}
        `}
      >
        <polyline points={isShowingMore ? "18 15 12 9 6 15" : "6 9 12 15 18 9"}></polyline>
      </svg>
    </span>
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500/50 transition-all duration-300 group-hover:w-full"></span>
  </button>
);

function TabPanel({ children, value, index, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: { xs: 1, sm: 3 } }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const techStacks = [
  { icon: "tf.svg", language: "TensorFlow" },
  { icon: "py.svg", language: "Python" },
  { icon: "sb.svg", language: "Seaborn" },
  { icon: "mpl.svg", language: "Matplotlib" },
  { icon: "lk.svg", language: "LookerStudio" },
  { icon: "pbi.svg", language: "Power BI" },
  { icon: "sql.svg", language: "MySQL" },
  { icon: "mdb.svg", language: "Mongo DB" },
  { icon: "html.svg", language: "HTML" },
  { icon: "css.svg", language: "CSS" },
  { icon: "javascript.svg", language: "JavaScript" },
  { icon: "reactjs.svg", language: "ReactJS" },
  { icon: "nodejs.svg", language: "Node JS" },
  { icon: "bootstrap.svg", language: "Bootstrap" },
  { icon: "flutter.svg", language: "Flutter" },
  { icon: "st.svg", language: "Streamlit" },

];

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const [projects, setProjects] = useState(projectsData);
  const [certificates, setCertificates] = useState(certificatesData);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [showAllCertificates, setShowAllCertificates] = useState(false);
  const isMobile = window.innerWidth < 768;
  const initialItems = isMobile ? 4 : 6;

  useEffect(() => {
    // Initialize AOS once
    AOS.init({
      once: false, // This will make animations occur only once
    });
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const toggleShowMore = useCallback((type) => {
    if (type === 'projects') {
      setShowAllProjects(prev => !prev);
    } else {
      setShowAllCertificates(prev => !prev);
    }
  }, []);

  const displayedProjects = showAllProjects ? projects : projects.slice(0, initialItems);
  const displayedCertificates = showAllCertificates ? certificates : certificates.slice(0, initialItems);

  return (
    <div className="md:px-[10%] px-[5%] w-full sm:mt-0 mt-[3rem] bg-[#030014] overflow-hidden" id="Portofolio">
      {/* Header section - unchanged */}
      <div className="text-center pb-10" data-aos="fade-up" data-aos-duration="1000">
        <h2 className="inline-block text-3xl md:text-5xl font-bold text-center mx-auto text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
          <span style={{
            color: '#6366f1',
            backgroundImage: 'linear-gradient(45deg, #6366f1 10%, #a855f7 93%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Portfolio Showcase
          </span>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base mt-2">
          Explore my journey through projects, certifications, and technical expertise. 
          Each section represents a milestone in my continuous learning path.
        </p>
      </div>

      <Box sx={{ width: "100%" }}>
        {/* AppBar and Tabs section - unchanged */}
        <AppBar
          position="static"
          elevation={0}
          sx={{
            bgcolor: "transparent",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: "20px",
            position: "relative",
            overflow: "hidden",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "linear-gradient(180deg, rgba(139, 92, 246, 0.03) 0%, rgba(59, 130, 246, 0.03) 100%)",
              backdropFilter: "blur(10px)",
              zIndex: 0,
            },
          }}
          className="md:px-4"
        >
          {/* Tabs remain unchanged */}
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            variant="fullWidth"
            sx={{
              // Existing styles remain unchanged
              minHeight: "70px",
              "& .MuiTab-root": {
                fontSize: { xs: "0.9rem", md: "1rem" },
                fontWeight: "600",
                color: "#94a3b8",
                textTransform: "none",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                padding: "20px 0",
                zIndex: 1,
                margin: "8px",
                borderRadius: "12px",
                "&:hover": {
                  color: "#ffffff",
                  backgroundColor: "rgba(139, 92, 246, 0.1)",
                  transform: "translateY(-2px)",
                  "& .lucide": {
                    transform: "scale(1.1) rotate(5deg)",
                  },
                },
                "&.Mui-selected": {
                  color: "#fff",
                  background: "linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(59, 130, 246, 0.2))",
                  boxShadow: "0 4px 15px -3px rgba(139, 92, 246, 0.2)",
                  "& .lucide": {
                    color: "#a78bfa",
                  },
                },
              },
              "& .MuiTabs-indicator": {
                height: 0,
              },
              "& .MuiTabs-flexContainer": {
                gap: "8px",
              },
            }}
          >
            <Tab
              icon={<Code className="mb-2 w-5 h-5 transition-all duration-300" />}
              label="Projects"
              {...a11yProps(0)}
            />
            <Tab
              icon={<Award className="mb-2 w-5 h-5 transition-all duration-300" />}
              label="Certificates"
              {...a11yProps(1)}
            />
            <Tab
              icon={<Boxes className="mb-2 w-5 h-5 transition-all duration-300" />}
              label="Tech Stack"
              {...a11yProps(2)}
            />
          </Tabs>
        </AppBar>

        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={setValue}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            <div className="container mx-auto flex justify-center items-center overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 gap-5">
                {displayedProjects.map((project, index) => (
                  <div
                    key={project.id || index}
                    data-aos={index % 3 === 0 ? "fade-up-right" : index % 3 === 1 ? "fade-up" : "fade-up-left"}
                    data-aos-duration={index % 3 === 0 ? "1000" : index % 3 === 1 ? "1200" : "1000"}
                  >
                    <CardProject
                      Img={project.Img}
                      Title={project.Title}
                      Description={project.Description}
                      Link={project.Link}
                      id={project.id}
                      Tect_stack={project.Tect_stack}
                      Fitur={project.Fitur}
                    />
                  </div>
                ))}
              </div>
            </div>
            {projects.length > initialItems && (
              <div className="mt-6 w-full flex justify-start">
                <ToggleButton
                  onClick={() => toggleShowMore('projects')}
                  isShowingMore={showAllProjects}
                />
              </div>
            )}
          </TabPanel>

          <TabPanel value={value} index={1} dir={theme.direction}>
            <div className="container mx-auto flex justify-center items-center overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-3 md:gap-5 gap-4">
                {displayedCertificates.map((certificate, index) => (
                  <div
                    key={index}
                    data-aos={index % 3 === 0 ? "fade-up-right" : index % 3 === 1 ? "fade-up" : "fade-up-left"}
                    data-aos-duration={index % 3 === 0 ? "1000" : index % 3 === 1 ? "1200" : "1000"}
                  >
                    <Certificate ImgSertif={certificate.Img} />
                  </div>
                ))}
              </div>
            </div>
            {certificates.length > initialItems && (
              <div className="mt-6 w-full flex justify-start">
                <ToggleButton
                  onClick={() => toggleShowMore('certificates')}
                  isShowingMore={showAllCertificates}
                />
              </div>
            )}
          </TabPanel>

          <TabPanel value={value} index={2} dir={theme.direction}>
            <div className="container mx-auto flex justify-center items-center overflow-hidden pb-[5%]">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 lg:gap-8 gap-5">
                {techStacks.map((stack, index) => (
                  <div
                    key={index}
                    data-aos={index % 3 === 0 ? "fade-up-right" : index % 3 === 1 ? "fade-up" : "fade-up-left"}
                    data-aos-duration={index % 3 === 0 ? "1000" : index % 3 === 1 ? "1200" : "1000"}
                  >
                    <TechStackIcon TechStackIcon={stack.icon} Language={stack.language} />
                  </div>
                ))}
              </div>
            </div>
          </TabPanel>
        </SwipeableViews>
      </Box>
    </div>
  );
}