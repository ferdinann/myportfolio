import React, { useState } from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import ReactDOM from "react-dom";

const CardProject = ({ Img, Title, Description, Link: ProjectLink, id, Tect_stack, Fitur }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLiveDemo = (e) => {
    if (!ProjectLink) {
      console.log("ProjectLink kosong");
      e.preventDefault();
      alert("Live demo link is not available");
    }
  };

  const handleDetails = () => {
    if (!id) {
      alert("Project details are not available");
    } else {
      setIsModalOpen(true); // Buka modal ketika ID tersedia
    }
  };

  const closeModal = () => {
    setIsModalOpen(false); // Tutup modal
  };

  const ModalContent = (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-xl p-6 w-3/4 max-w-md">
        <h2 className="text-xl font-bold mb-4">Project Details</h2>
        <img
          style={{ aspectRatio: "4/2", objectFit: "contain" }}
          src={Img}
          alt={Title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        <p className="text-gray-700 justify-center text-sm">{Description}</p>
        <p className="text-xl font-bold mb-4 mt-4 item-center">Tech Stack</p>
        <p className="text-gray-700 justify-center text-sm">{Tect_stack}</p>
        <p className="text-xl font-bold mb-4 mt-4 item-center">Fitur</p>
        <p className="text-gray-700 justify-center text-sm">{Fitur[0]}</p>
        <p className="text-gray-700 justify-center text-sm">{Fitur[1]}</p>
        <p className="text-gray-700 justify-center text-sm">{Fitur[2]}</p>
        <button
          onClick={closeModal}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Close
        </button>
      </div>
    </div>
  );

  return (
    <div>
      <div className="group relative w-full">
        <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-lg border border-white/10 shadow-2xl transition-all duration-300 hover:shadow-purple-500/20">
          <div className="relative p-5 z-10 min-h-[470px] max-h-[470px] flex flex-col justify-between">
            <div>
              <div className="relative overflow-hidden rounded-lg">
                <img
                  style={{ aspectRatio: "16/9", objectFit: "contain" }}
                  src={Img}
                  alt={Title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="mt-4 space-y-3">
                <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 bg-clip-text text-transparent">
                  {Title}
                </h3>
                <p className="text-gray-300/80 text-sm leading-relaxed line-clamp-2">
                  {Description}
                </p>
              </div>
            </div>
            <div className="pt-4 flex items-center justify-between">
              {ProjectLink ? (
                <a
                  href={ProjectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleLiveDemo}
                  className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-200"
                >
                  <span className="text-sm font-medium">Live Demo</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              ) : (
                <span className="text-gray-500 text-sm">Demo Not Available</span>
              )}
              {id ? (
                <button
                  onClick={handleDetails}
                  className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-200"
                >
                  <span className="text-sm font-medium">Details</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <span className="text-gray-500 text-sm">Details Not Available</span>
              )}
            </div>
          </div>
        </div>

        
      </div>
      {isModalOpen &&
        ReactDOM.createPortal(ModalContent, document.getElementById("modal-root"))}
    </div>
  );
};

export default CardProject;
