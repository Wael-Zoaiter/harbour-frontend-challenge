import { PageMeta, PageOgMeta } from "./PageMeta";

export type ScholarshipPage = {
  id: number,
  slug: string,
  is_published: boolean,
  scholarship: Scholarship;
  meta: PageMeta;
  og_meta: PageOgMeta;
  testimonials: Testimonial[];
};

/**
 * Scholarship Types
 */
export type Scholarship = {
  id: number,
  name: string,
  description: Block[],
  location: Location,
  scholarship_start_date: string,
  application_end_date: string,
  duration: number,
  about: Block[],
  tuition: number,
  total_value: number,
  stipend_per_month: number,
  stipend_per_year: number,
  remaining: number,
  study_commitment: number,
  internship_commitment: number,
  study_commitment_text: string,
  internship_commitment_text: string,
  work_commitment: number,
  work_commitment_duration: string,
  work_commitment_type: string,
  credits: number,
  courses: number,
  degree: string,
  what_you_will_learn: Paragraph[],
  internship_description: Block[],
  internship_expectation: BlockList,
  internship_potential_roles: BlockList,
  program_director_ids: number[],
  program_instructor_ids: number[],
  who_should_apply_text: Block[],
  university_requirements: BlockList,
  internship_requirements: BlockList,
  encourage_text: Block[],
  faqs: FAQ,
  program: ScholarshipProgram,
  company: ScholarshipCompany,
  directors: Person[],
  instructors: Person[],
};

export type FAQ = {
  items: FaqItem[],
  categories: string[];
};

export type FaqItem = {
  type: string,
  question: string,
  answer: Block[]
};

export type ScholarshipProgram = {
  id: number,
  name: string,
  about: string,
  description: Block[],
  link: string,
  available: boolean,
  application_process: ParagraphList[],
  photos: Photo[],
  program_logo: Photo;
};

export type ScholarshipCompany = {
  id: number,
  scope: string,
  name: string,
  type: string,
  color: string,
  rank: number,
  description: Block[],
  photo: Photo,
  color_logo: Photo,
  logo_light: Photo,
  logo_dark: Photo,
};

/**
 * Testimonial Types
 */
export type Testimonial = {
  id: number,
  name: string,
  profile_picture: Photo,
  small_picture: Photo,
  program_link: string,
  program_name: string,
  company_logo: string,
  company_name: string,
  current_position: string,
  text: string,
  education: string,
  country: Country,
};

/**
 * Global
 */
export type Block = {
  type: string;
  data: string;
};

export type BlockList = {
  type: string;
  data: string[];
};

export type Paragraph = {
  title: string;
  data: string;
};

export type ParagraphList = {
  title: string,
  description: Block[],
};

export type Location = {
  id: number;
  name: string;
  longitude: number;
  latitude: number;
  description: string;
  country_id: number;
};

export type Person = {
  id: number,
  scope: string,
  name: string,
  first_name: string,
  last_name: string,
  slug: string,
  category: string,
  small_picture: Photo,
  current_position: string,
  country: Country,
};

export type Country = {
  id: number,
  scope: string,
  country_name: string,
  display_name: string,
  country_code: string,
  country_flag: string | Photo,
};

export type Photo = {
  rawFile: {
    preview: string,
  },
  src: string,
  title: string,
};
