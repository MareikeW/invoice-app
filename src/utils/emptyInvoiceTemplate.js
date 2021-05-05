export const emptyInvoiceTemplate = {
    id: "",
    createdAt: "2021-01-01",
    paymentDue: "",
    description: "",
    paymentTerms: 1,
    clientName: "", 
    clientEmail: "",
    status: "", 
    senderAddress: { 
        street: "",
        city: "",
        postCode: "",
        country: ""
    },
    clientAddress: { 
        street: "",
        city: "",
        postCode: "",
        country: ""
    },
    items: [
        {
        name: "",
        quantity: 0,
        price: 0,
        total: 0
        }
    ],
    total: 0
}