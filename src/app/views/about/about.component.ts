import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      description: 'Visionary leader with 15+ years of industry experience',
      image: 'https://ui-avatars.com/api/?name=Sarah+Johnson&background=0D8ABC&color=fff'
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      description: 'Tech innovator and problem solver',
      image: 'https://ui-avatars.com/api/?name=Michael+Chen&background=0D8ABC&color=fff'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Design',
      description: 'Creative director with a passion for user experience',
      image: 'https://ui-avatars.com/api/?name=Emily+Rodriguez&background=0D8ABC&color=fff'
    }
  ];

  values = [
    'Innovation at our core',
    'Customer-centric approach',
    'Continuous improvement'
  ];

  contactInfo = {
    email: 'contact@example.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA'
  };

  constructor() { }

  ngOnInit(): void {
  }
} 