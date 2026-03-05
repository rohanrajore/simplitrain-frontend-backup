const fetchInvoice = async function (receiptID) {
  let url =
    process.env.REACT_APP_API_URL + `/purchase-history-invoice/${receiptID}`;

  const response = await fetch(url, {
    method: "GET",
    headers: { "Content-Type": "application/pdf" },
  });
  try {
    const data = await response.arrayBuffer();
    // set the blog type to final pdf
    const file = new Blob([data], { type: "application/pdf" });

    // process to auto download it
    const fileURL = URL.createObjectURL(file);
    const link = document.createElement("a");
    link.href = fileURL;
    link.download = "Simplitrain-invoice-" + receiptID + ".pdf";
    link.click();
  } catch (e) {
    console.log(e);
  }
};
export default fetchInvoice;
