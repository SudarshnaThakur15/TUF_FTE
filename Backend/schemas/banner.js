

const createTableQuery = `
CREATE TABLE IF NOT EXISTS banners (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    image_url VARCHAR(255),
    link VARCHAR(255),
    timer DATETIME,
    visibility BOOLEAN,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
`;

export default createTableQuery;
