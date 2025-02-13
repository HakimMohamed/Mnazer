"use client";
import React, { useState } from "react";
import { prespectives } from "./prespectives";

interface Criterion {
  id: string;
  title: string;
  documents: string[];
}

const AccordionItem = ({ criterion }: { criterion: Criterion }) => {
  const [isOpen, setIsOpen] = useState(false);

  // تقسيم الوثائق إلى سطور منفصلة
  const documentsList = criterion.documents.filter(
    (doc) => doc && doc.trim() !== ""
  );

  return (
    <div className="bg-white rounded-lg mb-4 border border-gray-200 shadow-sm transition-all hover:shadow-md">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-right p-4 flex justify-between items-center focus:outline-none transition-colors"
      >
        <span
          className="text-teal-600 transition-transform duration-300"
          style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          ▲
        </span>
        <h4 className="text-teal-700 font-semibold text-lg">
          {criterion.title}
        </h4>
      </button>

      {isOpen && (
        <div className="p-5 mr-4 border-t border-gray-200 bg-gray-50 rounded-b-lg">
          <h5 className="font-semibold mb-3 text-gray-800 text-base">
            مستندات الإثبات:
          </h5>
          <ul className="list-disc list-inside space-y-2 mr-4">
            {documentsList.map((doc, index) => (
              <li key={index} className="text-sm text-gray-700 leading-relaxed">
                {doc}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

// المكون الرئيسي
const DigitalTransformationFramework = () => {
  return (
    <div
      className="bg-gradient-to-b from-gray-50 to-gray-100 p-6 font-sans min-h-screen"
      dir="rtl"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            إطار التحول الرقمي
          </h1>
          <p className="text-gray-600 text-lg">
            معايير التقييم ومستندات الإثبات
          </p>
        </div>

        {prespectives.map((pres) => (
          <div key={pres.name} className="mb-12">
            <h2 className="text-xl text-blue-600 border-r-4 border-blue-500 pr-4 mb-6 font-bold">
              {pres.name}
            </h2>
            {pres.content.map((axis) => (
              <div
                key={axis.axisId}
                className="bg-white rounded-lg mb-8 p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-6 text-right border-bottom border-blue-200 pb-2">
                  {axis.axisTitle}
                </h3>
                <div className="space-y-4">
                  {axis.criteria.map((criterion) => (
                    <AccordionItem key={criterion.id} criterion={criterion} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DigitalTransformationFramework;
