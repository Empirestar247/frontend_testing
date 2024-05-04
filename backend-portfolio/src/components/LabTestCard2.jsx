import React from "react";
import testImg1 from "../assets/testImg1.jpg";
import testImg2 from "../assets/testImg2.jpg";
import testImg3 from "../assets/testImg3.jpg";
import testImg4 from "../assets/testImg4.jpg";
import testImg5 from "../assets/testImg5.jpg";
import testImg6 from "../assets/testImg6.jpg";
import testImg7 from "../assets/testImg7.jpg"; // New image for a hematology test
import testImg8 from "../assets/testImg8.jpg"; // New image for a microbiology test

function LabTestCard2() {
  // Array of medical laboratory test data
  const cardData = [
    {
      Image: testImg1,
      title: "Complete Blood Count (CBC)",
      content:
        "A CBC is a comprehensive blood test that helps evaluate overall health and detect a variety of diseases and conditions, such as infections and anemia.",
    },
    {
      Image: testImg2,
      title: "Lipid Profile",
      content:
        "This test measures cholesterol levels and triglycerides in your blood to assess your risk of cardiovascular disease.",
    },
    {
      Image: testImg3,
      title: "Blood Glucose Test",
      content:
        "Used to measure the levels of glucose in your blood, this test can diagnose and monitor diabetes.",
    },
    {
      Image: testImg4,
      title: "Electrolyte Panel",
      content:
        "Electrolyte tests assess the balance of potassium, sodium, chloride, and other electrolytes in your body, important for heart and nerve function.",
    },
    {
      Image: testImg5,
      title: "Liver Function Tests",
      content:
        "These tests measure enzyme levels, proteins, and bilirubin in your blood to assess the health of your liver.",
    },
    {
      Image: testImg6,
      title: "Thyroid Function Tests",
      content:
        "Thyroid tests help diagnose thyroid disorders by measuring the production of thyroid hormones in your blood.",
    },
    {
      Image: testImg7,
      title: "Hematology: Hemoglobin Electrophoresis",
      content:
        "This test identifies different types of hemoglobin to diagnose conditions like thalassemia and sickle cell anemia.",
    },
    {
      Image: testImg8,
      title: "Microbiology: Bacterial Culture Test",
      content:
        "This microbiology test helps identify bacterial infections and determine appropriate antibiotic treatment.",
    },
  ];

  return (
    <div className="row">
      {cardData.map((card, index) => (
        <div className="col-md-3 mb-5" key={index}>
          <div className="card">
            <img src={card.Image} className="card-img-top" alt={card.title} />
            <div className="card-body">
              <h4 className="card-title">{card.title}</h4>
              <p className="card-text">
                {card.content}
                <a href="#" className="text-Primary text-decoration-none">
                  Read More
                </a>
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default LabTestCard2;
