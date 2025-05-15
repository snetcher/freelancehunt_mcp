import express from 'express';
import { config } from './config';
import { FreelancehuntAPI } from './api/freelancehunt';

const app = express();
const api = new FreelancehuntAPI();

// Middleware for JSON parsing
app.use(express.json());

// Health check route
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Profile routes
app.get('/api/profile', async (req, res) => {
  try {
    const profile = await api.getProfile();
    res.json(profile);
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    res.status(500).json({ error: errorMessage });
  }
});

// Project routes
app.get('/api/projects', async (req, res) => {
  try {
    const { page, status, skills, employer_id, only_for_plus, budget_amount, budget_currency } = req.query;
    const projects = await api.getProjects({
      page: Number(page) || 1,
      status: status as string,
      skills: skills ? String(skills).split(',').map(Number) : undefined,
      employer_id: employer_id ? Number(employer_id) : undefined,
      only_for_plus: only_for_plus === 'true',
      budget_amount: budget_amount ? Number(budget_amount) : undefined,
      budget_currency: budget_currency as string
    });
    res.json(projects);
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    res.status(500).json({ error: errorMessage });
  }
});

app.get('/api/projects/:id', async (req, res) => {
  try {
    const projectId = Number(req.params.id);
    const project = await api.getProject(projectId);
    res.json(project);
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    res.status(500).json({ error: errorMessage });
  }
});

// Contest routes
app.get('/api/contests', async (req, res) => {
  try {
    const { page, status } = req.query;
    const contests = await api.getContests({
      page: Number(page) || 1,
      status: status as string
    });
    res.json(contests);
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    res.status(500).json({ error: errorMessage });
  }
});

app.get('/api/contests/:id', async (req, res) => {
  try {
    const contestId = Number(req.params.id);
    const contest = await api.getContest(contestId);
    res.json(contest);
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    res.status(500).json({ error: errorMessage });
  }
});

// Freelancer routes
app.get('/api/freelancers', async (req, res) => {
  try {
    const { page, skills, verification_status, is_plus_active, rating_from } = req.query;
    const freelancers = await api.getFreelancers({
      page: Number(page) || 1,
      skills: skills ? String(skills).split(',').map(Number) : undefined,
      verification_status: verification_status as string,
      is_plus_active: is_plus_active === 'true',
      rating_from: rating_from ? Number(rating_from) : undefined
    });
    res.json(freelancers);
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    res.status(500).json({ error: errorMessage });
  }
});

app.get('/api/freelancers/:id', async (req, res) => {
  try {
    const freelancerId = Number(req.params.id);
    const freelancer = await api.getFreelancer(freelancerId);
    res.json(freelancer);
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    res.status(500).json({ error: errorMessage });
  }
});

// Employer routes
app.get('/api/employers', async (req, res) => {
  try {
    const employers = await api.getEmployers();
    res.json(employers);
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    res.status(500).json({ error: errorMessage });
  }
});

app.get('/api/employers/:id', async (req, res) => {
  try {
    const employerId = Number(req.params.id);
    const employer = await api.getEmployer(employerId);
    res.json(employer);
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    res.status(500).json({ error: errorMessage });
  }
});

// Review routes
app.get('/api/users/:id/reviews', async (req, res) => {
  try {
    const userId = Number(req.params.id);
    const { page, type } = req.query;
    const reviews = await api.getReviews(userId, {
      page: Number(page) || 1,
      type: type as 'from' | 'to'
    });
    res.json(reviews);
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    res.status(500).json({ error: errorMessage });
  }
});

// Skills routes
app.get('/api/skills', async (req, res) => {
  try {
    const skills = await api.getSkills();
    res.json(skills);
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    res.status(500).json({ error: errorMessage });
  }
});

// Country routes
app.get('/api/countries', async (req, res) => {
  try {
    const countries = await api.getCountries();
    res.json(countries);
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    res.status(500).json({ error: errorMessage });
  }
});

// Start server
app.listen(config.server.port, () => {
  console.log(`Server is running on port ${config.server.port}`);
  console.log(`Environment: ${config.server.env}`);
}); 