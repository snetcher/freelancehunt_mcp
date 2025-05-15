# Freelancehunt MCP Server

MCP (Message Control Protocol) server for Freelancehunt API integration.

## Requirements

- Node.js (version 14 or higher)
- npm (included with Node.js)

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd freelancehunt-mcp
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the project root directory and add the required environment variables:
```env
FREELANCEHUNT_API_TOKEN=your_api_token_here
PORT=3000
NODE_ENV=development
```

To get your API token:
1. Log in to your account at [Freelancehunt](https://freelancehunt.com)
2. Go to [Profile Settings](https://freelancehunt.com/my/api)
3. In the "API" section, click "Create new token"
4. Copy the token and paste it into your `.env` file

**Important**: Keep your token secure and never share it publicly.

## Running the Server

### Development Mode
```bash
npm run dev
```

### Production Mode
```bash
npm run build
npm start
```

## API Endpoints

### Health Check
```
GET /health
```

### Profile
```
GET /api/profile
```

### Projects
```
# List projects
GET /api/projects
Query parameters:
- page: page number
- status: project status
- skills: comma-separated skill IDs
- employer_id: employer ID
- only_for_plus: true/false
- budget_amount: budget amount
- budget_currency: budget currency

# Get specific project
GET /api/projects/:id
```

### Contests
```
# List contests
GET /api/contests
Query parameters:
- page: page number
- status: contest status

# Get specific contest
GET /api/contests/:id
```

### Freelancers
```
# List freelancers
GET /api/freelancers
Query parameters:
- page: page number
- skills: comma-separated skill IDs
- verification_status: verification status
- is_plus_active: true/false
- rating_from: minimum rating

# Get specific freelancer
GET /api/freelancers/:id
```

### Employers
```
# List employers
GET /api/employers

# Get specific employer
GET /api/employers/:id
```

### Reviews
```
GET /api/users/:id/reviews
Query parameters:
- page: page number
- type: review type (from/to)
```

### Reference Data
```
# List skills
GET /api/skills

# List countries
GET /api/countries
```

## Development

### Project Structure
```
freelancehunt_mcp/
├── src/
│   ├── config/         # Application configuration
│   ├── api/           # Freelancehunt API modules
│   ├── types/         # TypeScript types
│   └── index.ts       # Application entry point
├── tests/             # Tests
├── package.json
└── tsconfig.json
```

### Scripts

- `npm run dev` - Start development server with hot-reload
- `npm run build` - Build the project
- `npm start` - Run the built project
- `npm test` - Run tests

## License

ISC