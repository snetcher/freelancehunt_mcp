import axios, { AxiosInstance, AxiosError } from 'axios';
import { config } from '../config';
import {
  Profile,
  Project,
  Contest,
  Freelancer,
  Employer,
  Review,
  PaginatedResponse,
  ProjectsParams,
  FreelancersParams,
  ContestsParams,
  ReviewsParams
} from '../types/freelancehunt';

export class FreelancehuntAPI {
  private api: AxiosInstance;
  
  constructor() {
    this.api = axios.create({
      baseURL: config.api.baseUrl,
      headers: {
        'Authorization': `Bearer ${config.api.token}`,
        'Content-Type': 'application/json'
      }
    });

    // Add interceptor for error handling
    this.api.interceptors.response.use(
      response => response,
      error => {
        console.error('API Error:', error.response?.data || error.message);
        throw error;
      }
    );
  }

  // Profile methods
  async getProfile(): Promise<Profile> {
    try {
      const response = await this.api.get('/my/profile');
      return response.data.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        throw new Error(`Failed to fetch profile: ${error.message}`);
      }
      throw new Error('An unknown error occurred while fetching profile');
    }
  }

  // Project methods
  async getProjects(params?: ProjectsParams): Promise<PaginatedResponse<Project>> {
    try {
      const response = await this.api.get('/projects', { params });
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        throw new Error(`Failed to fetch projects: ${error.message}`);
      }
      throw new Error('An unknown error occurred while fetching projects');
    }
  }

  async getProject(id: number): Promise<Project> {
    try {
      const response = await this.api.get(`/projects/${id}`);
      return response.data.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        throw new Error(`Failed to fetch project ${id}: ${error.message}`);
      }
      throw new Error(`An unknown error occurred while fetching project ${id}`);
    }
  }

  // Contest methods
  async getContests(params?: ContestsParams): Promise<PaginatedResponse<Contest>> {
    try {
      const response = await this.api.get('/contests', { params });
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        throw new Error(`Failed to fetch contests: ${error.message}`);
      }
      throw new Error('An unknown error occurred while fetching contests');
    }
  }

  async getContest(id: number): Promise<Contest> {
    try {
      const response = await this.api.get(`/contests/${id}`);
      return response.data.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        throw new Error(`Failed to fetch contest ${id}: ${error.message}`);
      }
      throw new Error(`An unknown error occurred while fetching contest ${id}`);
    }
  }

  // Freelancer methods
  async getFreelancers(params?: FreelancersParams): Promise<PaginatedResponse<Freelancer>> {
    try {
      const response = await this.api.get('/freelancers', { params });
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        throw new Error(`Failed to fetch freelancers: ${error.message}`);
      }
      throw new Error('An unknown error occurred while fetching freelancers');
    }
  }

  async getFreelancer(id: number): Promise<Freelancer> {
    try {
      const response = await this.api.get(`/freelancers/${id}`);
      return response.data.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        throw new Error(`Failed to fetch freelancer ${id}: ${error.message}`);
      }
      throw new Error(`An unknown error occurred while fetching freelancer ${id}`);
    }
  }

  // Employer methods
  async getEmployers(): Promise<PaginatedResponse<Employer>> {
    try {
      const response = await this.api.get('/employers');
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        throw new Error(`Failed to fetch employers: ${error.message}`);
      }
      throw new Error('An unknown error occurred while fetching employers');
    }
  }

  async getEmployer(id: number): Promise<Employer> {
    try {
      const response = await this.api.get(`/employers/${id}`);
      return response.data.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        throw new Error(`Failed to fetch employer ${id}: ${error.message}`);
      }
      throw new Error(`An unknown error occurred while fetching employer ${id}`);
    }
  }

  // Review methods
  async getReviews(userId: number, params?: ReviewsParams): Promise<PaginatedResponse<Review>> {
    try {
      const response = await this.api.get(`/users/${userId}/reviews`, { params });
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        throw new Error(`Failed to fetch reviews for user ${userId}: ${error.message}`);
      }
      throw new Error(`An unknown error occurred while fetching reviews for user ${userId}`);
    }
  }

  // Skills methods
  async getSkills(): Promise<Array<{ id: number; name: string }>> {
    try {
      const response = await this.api.get('/skills');
      return response.data.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        throw new Error(`Failed to fetch skills: ${error.message}`);
      }
      throw new Error('An unknown error occurred while fetching skills');
    }
  }

  // Country methods
  async getCountries(): Promise<Array<{ id: number; name: string }>> {
    try {
      const response = await this.api.get('/countries');
      return response.data.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        throw new Error(`Failed to fetch countries: ${error.message}`);
      }
      throw new Error('An unknown error occurred while fetching countries');
    }
  }
} 