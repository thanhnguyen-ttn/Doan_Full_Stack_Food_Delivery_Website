import path from 'path';
import { fileURLToPath } from 'url';

// T?o __filename và __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const tmpUploadPath = path.join(__dirname, 'uploads');