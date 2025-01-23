import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import logo from "../../assets/logo1.png";
import { TiDeleteOutline } from "react-icons/ti";
import { IoMdPrint } from "react-icons/io";
import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import domtoimage from "dom-to-image";
import jsPDF from "jspdf";
import "./invoice.css";

const Invoice = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const invoiceRef = useRef();
  const navigate = useNavigate();
  const { data: invoice = [] } = useQuery({
    queryKey: ["invoice", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payment-invoice/${user?.email}`);
      console.log(res.data);
      return res.data;
    },
  });

  const handleDownload = async () => {
    const element = document.getElementById("invoice");
    const pdfWidthPx = 800;
    const pdfHeightPx = 1200;
    const pdfWidthPt = 210;
    const pdfHeightPt = (pdfWidthPt * pdfHeightPx) / pdfWidthPx;
    try {
      const imgData = await domtoimage.toPng(element);
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: [pdfWidthPt, pdfHeightPt],
      });
      const pdfWidth = pdf.internal.pageSize.getWidth("1200px");
      const pdfHeight = pdf.internal.pageSize.getHeight("1000px");
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("invoice.pdf");
      navigate("/");
    } catch (error) {
      console.error("Error generating PDF:", error);
    }
  };
  return (
    <>
      <div className="bg-loginBanner bg-blend-darken bg-[#00000081] lg:h-[300px] h-auto bg-cover flex flex-col gap-4 justify-center items-center">
        <div className="text-5xl font-semibold text-[#ffffffe1] space-x-4">
          <Link
            to="/"
            className="hover:text-[#4E97FD] hover:transition-colors hover:duration-300"
          >
            Home
          </Link>{" "}
          |
          <Link
            to="/invoice"
            className="hover:text-[#4E97FD] hover:transition-colors hover:duration-300"
          >
            Invoice
          </Link>
        </div>
      </div>
      <div
        id="invoice"
        ref={invoiceRef}
        className="w-11/12 mx-auto p-6 pb-12 mb-12"
      >
        <div className="flex items-center justify-between px-8">
          <div>
            <img
              className="w-24 h-24 rounded-full"
              src={user?.photoURL}
              alt=""
            />
            <h2 className="text-lg font-semibold">Name: {user?.displayName}</h2>
            <h2 className="text-lg font-semibold">Email: {user?.email}</h2>
          </div>
          <div className="space-y-2">
            <h2 className="text-4xl font-semibold">INVOICE</h2>
            <div className="flex items-center">
              <img className="w-10" src={logo} alt="" />
              <h3 className="text-xl font-bold">Health Care</h3>
            </div>
          </div>
        </div>
        <div className="mt-6 text-black">
          <div className="overflow-x-auto">
            <table className="table text-black pb-8">
              <thead className="text-black">
                <tr>
                  <th>Date</th>
                  <th>Transaction ID</th>
                  <th>Email</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {invoice.map((item) => (
                  <tr item={item} key={item._id}>
                    <th>{item.date}</th>
                    <th>{item.transactionId}</th>
                    <th>{item.email}</th>
                    <th>
                      <TiDeleteOutline className="text-2xl"></TiDeleteOutline>
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="flex justify-end w-11/12 mx-auto">
        <button
          onClick={handleDownload}
          className="px-4 py-2 rounded-full bg-[#4e97fd] flex items-center text-white font-bold"
        >
          <IoMdPrint></IoMdPrint> Download
        </button>
      </div>
      s
    </>
  );
};

export default Invoice;
