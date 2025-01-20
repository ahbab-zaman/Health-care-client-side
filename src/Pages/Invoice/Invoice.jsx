import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import logo from "../../assets/logo1.png";
import { TiDeleteOutline } from "react-icons/ti";
import { IoMdPrint } from "react-icons/io";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

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
    const element = invoiceRef.current;
    try {
      const canvas = await html2canvas(element, { scale: 2 });
      const imgData = canvas.toDataURL("image/png");

      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("invoice.pdf");
    } catch (error) {
      console.error("Error generating PDF:", error);
    }
  };
  return (
    <div ref={invoiceRef} className="w-11/12 mx-auto my-4 mb-12">
      <div className="flex items-center justify-between">
        <div>
          <img className="w-24 h-24 rounded-full" src={user?.photoURL} alt="" />
          <h2 className="text-lg font-semibold">Name: {user?.displayName}</h2>
          <h2 className="text-lg font-semibold">Email: {user?.email}</h2>
        </div>
        <div className="space-y-2">
          <h2 className="text-4xl font-semibold">INVOICE</h2>
          <img className="w-16" src={logo} alt="" />
        </div>
      </div>
      <div className="mt-6">
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
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
        <div className="flex justify-end mt-2">
          <button
            onClick={handleDownload}
            className="px-4 py-2 rounded-full bg-[#4e97fd] flex items-center text-white font-bold"
          >
            <IoMdPrint></IoMdPrint> Download
          </button>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
