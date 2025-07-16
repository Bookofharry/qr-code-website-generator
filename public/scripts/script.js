const qr = new QRious({
      element: document.getElementById('qr-code'),
      size: 220,
      value: ''
});

function generateQRCode() {
    const text = document.getElementById('qr-text').value;
    if (text.trim() === '') {
        alert('Please enter some text or URL!');
        return;
    }
    qr.value = text;
}