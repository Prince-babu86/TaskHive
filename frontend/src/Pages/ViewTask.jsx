import React, { useContext, useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useParams, useNavigate } from "react-router-dom";
import { DataContext } from "../Context/AuthContext";

const ViewTask = () => {

  const {userdata} = useContext(DataContext)
const {Tasks} = useContext(DataContext)
const {id} = useParams()
const navigate = useNavigate();
 const Task = Tasks.find((task)=> task._id === id)



  const divRef = useRef();

  const handleDownloadPDF = async () => {
    try {
      const element = divRef.current;

      // Generate canvas from the element
      const canvas = await html2canvas(element, {
        scale: 2, // Higher scale for better quality
        useCORS: true, // Allows cross-origin content to be rendered
        backgroundColor: null, // Transparent background
      });

      const imageData = canvas.toDataURL("image/png");

      // Initialize jsPDF
      const pdf = new jsPDF("portrait", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      pdf.addImage(imageData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("TaskDetails.pdf");
    } catch (error) {
      console.error("Error generating PDF:", error);
    }
  };

 

   

 

 

  return (
    <div
    
      ref={divRef}
      style={{
        padding: "20px",
        backgroundColor: "#f5f5f5",
        color: "#333",
        fontFamily: "Arial, sans-serif",
        maxWidth: "800px",
        margin: " auto",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    > 
      <div className="top">
      <div onClick={(()=>{navigate('/')})} style={{marginBottom:"20px"}}> 
      <i className="fa-solid fa-angle-left  text-[28px]"></i>
    </div>
        <h1 style={{ fontSize: "28px", fontWeight: "bold" }}>Task Details</h1>
        <h1
          style={{
            padding: "10px",
            fontSize: "20px",
            fontWeight: "bold",
            backgroundColor: "#E2E8F0",
            borderRadius: "10px",
            marginTop: "10px",
          }}
        >
          Mobile Version
        </h1>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              border: "1.7px solid #E2E8F0",
              padding: "10px",
              borderRadius: "10px",
              backgroundColor: "#F8FAFC",
            }}
          >
            <h4 style={{ fontSize: "15px", fontWeight: "bold" }}>Start Date</h4>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <i className="fa-regular fa-calendar-days"></i>
              <h4 style={{ fontSize: "12.5px" }}>{Task.startDate}</h4>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              border: "1.7px solid #E2E8F0",
              padding: "10px",
              borderRadius: "10px",
              backgroundColor: "#F8FAFC",
            }}
          >
            <h4 style={{ fontSize: "15px", fontWeight: "bold" }}>Due Date</h4>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <i className="fa-regular fa-calendar-days"></i>
              <h4 style={{ fontSize: "12.5px" }}>{Task.dueDate}</h4>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          marginTop: "20px",
          padding: "10px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
         <h4 style={{ fontSize: "17px", fontWeight: "bold" , alignItems:"center" , justifyContent:"center" , width:"100%" , color:"firebrick" }}>{Task.title}</h4>
         <h4 style={{ fontSize: "12px",  alignItems:"center" , justifyContent:"center" , width:"100%" , color:"gray" }}>{Task.description}</h4>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h4 style={{ fontSize: "17px", fontWeight: "bold" }}>Status</h4>
          <button
            style={{
              backgroundColor: "#A78BFA",
              padding: "5px 20px",
              fontSize: "15px",
              borderRadius: "30px",
              border: "1px solid #A78BFA",
            }}
          >
           {Task.status}
          </button>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h4 style={{ fontSize: "17px", fontWeight: "bold" }}>Assigned for</h4>
          <h3
            style={{
              fontSize: "12px",
              backgroundColor: "#FCA5A5",
              padding: "5px 15px",
              borderRadius: "20px",
            }}
          >
           {userdata.name}
          </h3>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h4 style={{ fontSize: "17px", fontWeight: "bold" }}>Priority</h4>
          <button
            style={{
              backgroundColor: "#34D399",
              padding: "5px 10px",
              fontSize: "12px",
              borderRadius: "30px",
              border: "1px solid #34D399",
            }}
          >
           {Task.priority}
          </button>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h4 style={{ fontSize: "17px", fontWeight: "bold" }}>Tags</h4>
          <div style={{ display: "flex", gap: "10px" }}>
            <button
              style={{
                fontSize: "12.5px",
                backgroundColor: "#F59E0B",
                padding: "10px 15px",
                borderRadius: "30px",
              }}
            >
          {Task.status}
            </button>
            <button
              style={{
                fontSize: "12.5px",
                backgroundColor: "#C4B5FD",
                padding: "10px 15px",
                borderRadius: "30px",
              }}
            >
              At Risk
            </button>
          </div>
        </div>
      </div>

      <div style={{ padding: "10px" }}>
        <h1 style={{ fontSize: "18px", color: "#4B5563", fontWeight: "bold" }}>
          Attachment
        </h1>
        <div
          style={{
            height: "56px",
            borderRadius: "10px",
            backgroundColor: "#FED7D7",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 15px",
          }}
        >
          <i
            className="fa-solid fa-file-pdf"
            style={{ fontSize: "32px", color: "#E53E3E" }}
          ></i>
          <i
            onClick={handleDownloadPDF}
            className="fa-solid fa-download"
            style={{ fontSize: "25px", cursor: "pointer" }}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default ViewTask;
