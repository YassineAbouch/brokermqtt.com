import dbConnect from '../../utils/dbConnect';

export default async function handler(req, res) {
    try {
        await dbConnect();
        res.status(200).json({ message: 'Connected to the database successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Database connection failed', error });
    }
}
