import { useParams, useNavigate, useLocation } from "react-router-dom";
import { getInvoice, deleteInvoice } from "../data/db_invoices";

export default function Invoice() {
    let navigate = useNavigate(); //allows programatic navigation from one URL to another
    let location = useLocation(); //retrieves location and other information from current URL

    let params = useParams(); //allows dynamic usgae of URL parameters
    let invoice = getInvoice(parseInt(params.id, 10)); //ParseInt converts the GET string to integers
    
    return (
        <main style={{ padding: "1rem" }}>
        <h2>Total Due: {invoice.amount}</h2>
        <p>
            {invoice.name}: {invoice.number}
        </p>
        <p>Due Date: {invoice.due}</p>
        <p>
            <button
                onClick={() => {
                    deleteInvoice(invoice.number);
                    navigate("/invoices" + location.search);
                }}
            >
                Delete
            </button>
        </p>
        </main>
    );
}