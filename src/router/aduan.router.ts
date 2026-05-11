import { Router } from 'express';
const aduanRouter = Router();

// Endpoint untuk view aduan
aduanRouter.get('/view', (req, res) => {
    // Contoh data aduan (nanti bisa diganti dengan data dari database)
    const aduan = [
        { id: 1, title: 'Aduan 1', description: 'Deskripsi aduan 1' },
        { id: 2, title: 'Aduan 2', description: 'Deskripsi aduan 2' },
    ];

    res.status(200).json({
        success: true,
        data: aduan,
    });
});

export default aduanRouter;