interface IProject {
  name: string;
  description: string;
  image: string;
  tags: string[];
  url: string;
  detailedDescription?: string;
  images?: string[];
  features?: string[];
  technologies?: string[];
}

export type { IProject };
