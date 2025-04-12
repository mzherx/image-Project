export const corsMiddleware = (req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'https://image-project-client.vercel.app');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, token');
    res.header('Access-Control-Allow-Credentials', 'true');
    
    // Handle preflight requests
    if (req.method === 'OPTIONS') {
        return res.status(200).json({
            status: 'success',
            message: 'Preflight request successful'
        });
    }
    
    next();
};
