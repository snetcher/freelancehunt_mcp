// Common types
export interface PaginatedResponse<T> {
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

// Profile
export interface Profile {
  id: number;
  login: string;
  first_name: string;
  last_name: string;
  avatar: {
    small: string;
    large: string;
  };
  status: string;
  type: string;
  rating: number;
  location: {
    country: string;
    city: string;
  };
  is_plus_active: boolean;
  verification_status: string;
}

// Projects
export interface Project {
  id: number;
  name: string;
  description: string;
  description_html: string;
  skills: Array<{
    id: number;
    name: string;
  }>;
  status: {
    id: number;
    name: string;
  };
  budget: {
    amount: number;
    currency: string;
  };
  bid_count: number;
  is_only_for_plus: boolean;
  is_personal: boolean;
  is_remote: boolean;
  location: {
    country: string;
    city: string;
  };
  published_at: string;
  expires_at: string;
}

// Contests
export interface Contest {
  id: number;
  name: string;
  description: string;
  description_html: string;
  status: {
    id: number;
    name: string;
  };
  budget: {
    amount: number;
    currency: string;
  };
  application_count: number;
  published_at: string;
  duration_days: number;
}

// Freelancers
export interface Freelancer {
  id: number;
  login: string;
  first_name: string;
  last_name: string;
  avatar: {
    small: string;
    large: string;
  };
  status: string;
  rating: number;
  verification_status: string;
  location: {
    country: string;
    city: string;
  };
  is_plus_active: boolean;
}

// Employers
export interface Employer {
  id: number;
  login: string;
  first_name: string;
  last_name: string;
  avatar: {
    small: string;
    large: string;
  };
  status: string;
  rating: number;
  verification_status: string;
  location: {
    country: string;
    city: string;
  };
}

// Reviews
export interface Review {
  id: number;
  type: string;
  from_user: {
    id: number;
    login: string;
  };
  to_user: {
    id: number;
    login: string;
  };
  project: {
    id: number;
    name: string;
  };
  grade: number;
  comment: string;
  created_at: string;
}

// Request parameters
export interface ProjectsParams {
  page?: number;
  status?: string;
  skills?: number[];
  employer_id?: number;
  only_for_plus?: boolean;
  budget_amount?: number;
  budget_currency?: string;
}

export interface FreelancersParams {
  page?: number;
  skills?: number[];
  verification_status?: string;
  is_plus_active?: boolean;
  rating_from?: number;
}

export interface ContestsParams {
  page?: number;
  status?: string;
}

export interface ReviewsParams {
  page?: number;
  type?: 'from' | 'to';
} 