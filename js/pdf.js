window.onload = function () {
    document.getElementById("download")
        .addEventListener("click", () => {
            const invoice = this.document.getElementById("invoice");
            console.log(invoice);
            console.log(window);
            var opt = {
                margin: 1,
                filename: 'Ticket.pdf',
                image: { type: 'jpeg', quality: 5 },
                html2canvas: { scale: 5 },
                jsPDF: { unit: 'in', format: 'legal', orientation: 'landscape' }
            };
            html2pdf().from(invoice).set(opt).save();
        })
}