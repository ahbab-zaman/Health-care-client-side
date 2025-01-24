import { Helmet } from "react-helmet-async";
import Title from "../../Components/Title/Title";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Loading from "../../Components/Loading/Loading";
import { useQuery } from "@tanstack/react-query";
import { useRef, useState } from "react";
import jsPDF from "jspdf";
import domtoimage from "dom-to-image";

const SalesReport = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const salesRef = useRef();
  const axiosSecure = useAxiosSecure();
  const {
    data: sales = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["payment"],
    queryFn: async () => {
      const { data } = await axiosSecure("/paymentInfo");
      console.log(data);
      return data;
    },
  });
  const filteredSales = sales.filter((item) => {
    const itemDate = new Date(item.date.split(".").reverse().join("-"));
    const start = startDate ? new Date(startDate) : null;
    const end = endDate ? new Date(endDate) : null;

    return (!start || itemDate >= start) && (!end || itemDate <= end);
  });

  const handleDownload = async () => {
    const element = document.getElementById("sales");
    const options = {
      quality: 1,
      width: element.offsetWidth,
      height: element.offsetHeight,
      style: {
        transform: "scale(1)",
        transformOrigin: "top left",
      },
    };
    // const pdfWidthPx = 800;
    // const pdfHeightPx = 1200;
    // const pdfWidthPt = 210;
    // const pdfHeightPt = (pdfWidthPt * pdfHeightPx) / pdfWidthPx;
    try {
      const imgData = await domtoimage.toPng(element, options);
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: [element.offsetWidth, element.offsetHeight],
      });
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight(
        element.offsetHeight * pdfWidth
      );
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("invoice.pdf");
      navigate("/");
    } catch (error) {
      console.error("Error generating PDF:", error);
    }
  };

  if (isLoading) return <Loading></Loading>;
  return (
    <div>
      <Helmet>
        <title>Dashboard |Sales Report</title>
      </Helmet>
      <Title title="Sales Report"></Title>

      <div>
        <div className="flex items-center justify-between gap-2 mb-6">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              <p className="text-lg font-bold">Start Date : </p>
              <input
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="border-2 rounded-lg p-2"
                type="date"
                name=""
                id=""
              />
            </div>
            <div className="flex items-center gap-2">
              <p className="text-lg font-bold">End Date : </p>
              <input
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="border-2 rounded-lg p-2"
                type="date"
                name=""
                id=""
              />
            </div>
          </div>
          <div>
            <button
              onClick={handleDownload}
              className="bg-[#A8A8A9] text-black font-bold px-4 py-2 rounded-md hover:bg-[#a8a8a97d] hover:transition-colors hover:duration-300"
            >
              Download
            </button>
          </div>
        </div>

        <div id="sales" ref={salesRef} className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Buyer Email</th>
                <th>Medicine Name</th>
                <th>Total Price</th>
              </tr>
            </thead>
            <tbody>
              {filteredSales.map((item) => (
                <tr>
                  <th>{item.date}</th>
                  <th>{item.email}</th>
                  <th>
                    {item.medicineName.map((medicine, idx) => (
                      <li key={idx}>{medicine}</li>
                    ))}
                  </th>
                  <th>$ {item.price}</th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SalesReport;
