import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    roles: ['Admin', 'Verified']
  };

  settings = {
    emailNotifications: true,
    twoFactorAuth: false
  };

  recentActivity = [
    {
      type: 'profile_update',
      message: 'Updated profile information',
      time: '2 hours ago',
      color: 'blue'
    },
    {
      type: 'onboarding',
      message: 'Completed onboarding',
      time: '1 day ago',
      color: 'green'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  toggleEmailNotifications(): void {
    this.settings.emailNotifications = !this.settings.emailNotifications;
  }

  toggleTwoFactorAuth(): void {
    this.settings.twoFactorAuth = !this.settings.twoFactorAuth;
  }

  updateProfile(): void {
    // Implement profile update logic
    console.log('Updating profile...');
  }
} 