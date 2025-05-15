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

## Using the API

After starting the server, it will be available at `http://localhost:3000` (or your configured PORT).

You can test the API using various tools:

### cURL
```bash
# Test health check endpoint
curl http://localhost:3000/health

# Expected response:
# {"status":"ok","timestamp":"2024-01-20T12:34:56.789Z"}
```

### HTTPie
```bash
# Test health check endpoint
http GET http://localhost:3000/health

# Expected response:
# {"status":"ok","timestamp":"2024-01-20T12:34:56.789Z"}
```

### Fetch (JavaScript)
```javascript
// Test health check endpoint
fetch('http://localhost:3000/health')
  .then(response => response.json())
  .then(data => console.log(data));

// Expected response:
// {
//   "status": "ok",
//   "timestamp": "2024-01-20T12:34:56.789Z"
// }
```

### Axios (JavaScript/TypeScript)
```typescript
// Test health check endpoint
import axios from 'axios';

axios.get('http://localhost:3000/health')
  .then(response => console.log(response.data));

// Expected response:
// {
//   "status": "ok",
//   "timestamp": "2024-01-20T12:34:56.789Z"
// }
```

### Python (requests)
```python
# Test health check endpoint
import requests

response = requests.get('http://localhost:3000/health')
print(response.json())

# Expected response:
# {
#   "status": "ok",
#   "timestamp": "2024-01-20T12:34:56.789Z"
# }
```

## API Endpoints

### Health Check
```
GET /health
Response: { status: 'ok', timestamp: string }
```

### Profile
```
# Get current user profile
GET /api/profile
Response: Profile object with user details
```

### Projects
```
# List all projects
GET /api/projects
Query parameters:
- page: page number (default: 1)
- status: project status (open, closed, etc.)
- skills: comma-separated skill IDs
- employer_id: filter by employer ID
- only_for_plus: true/false - filter Plus projects
- budget_amount: filter by budget amount
- budget_currency: filter by budget currency (UAH, USD, EUR, etc.)
Response: Paginated list of projects

# Get specific project
GET /api/projects/:id
Parameters:
- id: project ID (number)
Response: Project details
```

### Contests
```
# List all contests
GET /api/contests
Query parameters:
- page: page number (default: 1)
- status: contest status (active, complete, etc.)
Response: Paginated list of contests

# Get specific contest
GET /api/contests/:id
Parameters:
- id: contest ID (number)
Response: Contest details
```

### Freelancers
```
# List all freelancers
GET /api/freelancers
Query parameters:
- page: page number (default: 1)
- skills: comma-separated skill IDs
- verification_status: filter by verification status
- is_plus_active: true/false - filter Plus members
- rating_from: minimum rating threshold
Response: Paginated list of freelancers

# Get specific freelancer
GET /api/freelancers/:id
Parameters:
- id: freelancer ID (number)
Response: Freelancer details
```

### Employers
```
# List all employers
GET /api/employers
Query parameters:
- page: page number (default: 1)
Response: Paginated list of employers

# Get specific employer
GET /api/employers/:id
Parameters:
- id: employer ID (number)
Response: Employer details
```

### Reviews
```
# Get user reviews
GET /api/users/:id/reviews
Parameters:
- id: user ID (number)
Query parameters:
- page: page number (default: 1)
- type: review type (from/to)
Response: Paginated list of reviews
```

### Reference Data
```
# List all available skills
GET /api/skills
Response: Array of skill objects
{
  id: number,
  name: string
}

# List all available countries
GET /api/countries
Response: Array of country objects
{
  id: number,
  name: string
}
```

### Response Formats

#### Paginated Response
```typescript
{
  data: T[];
  links: {
    first: string;
    last: string;
    prev: string | null;
    next: string | null;
  };
  meta: {
    current_page: number;
    from: number;
    last_page: number;
    path: string;
    per_page: number;
    to: number;
    total: number;
  };
}
```

#### Error Response
```typescript
{
  error: string;
  status?: number;
}
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