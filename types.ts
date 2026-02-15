
import React from 'react';

export interface Product {
  id: string;
  title: string;
  description: string;
  image: string;
  link?: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}