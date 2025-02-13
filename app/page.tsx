"use client";
import React from "react";
import { Accordion, AccordionItem } from "@heroui/accordion";

import { prespectives } from "./prespectives";
import { Card } from "@heroui/react";

interface Criterion {
  id: string;
  title: string;
  documents: string[];
}

const DigitalTransformationFramework = () => {
  return (
    <div className="bg-gradient-to-b font-sans min-h-screen" dir="rtl">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
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
              <Card
                isFooterBlurred
                className="border-none p-4  mb-8"
                radius="lg"
                key={axis.axisId}
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-6 text-right border-b border-blue-200 pb-2">
                  {axis.axisTitle}
                </h3>

                <Accordion selectionMode="multiple" className="space-y-4">
                  {axis.criteria.map((criterion) => (
                    <AccordionItem
                      key={criterion.id}
                      aria-label={criterion.title}
                      title={criterion.title}
                    >
                      <div className="p-5 border-t border-gray-200 bg-gray-50 rounded-b-lg">
                        <h5 className="font-semibold mb-3 text-gray-800 text-base">
                          مستندات الإثبات:
                        </h5>
                        <ul className="list-disc list-inside space-y-2">
                          {criterion.documents
                            .filter((doc) => doc && doc.trim() !== "")
                            .map((doc, index) => (
                              <li
                                key={index}
                                className="text-sm text-gray-700 leading-relaxed"
                              >
                                {doc}
                              </li>
                            ))}
                        </ul>
                      </div>
                    </AccordionItem>
                  ))}
                </Accordion>
              </Card>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DigitalTransformationFramework;
